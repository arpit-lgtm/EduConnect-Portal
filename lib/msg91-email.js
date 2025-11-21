import nodemailer from 'nodemailer';

// Read env vars dynamically at runtime
function getConfig() {
  return {
    smtpHost: process.env.MSG91_SMTP_HOST || 'smtp.mailer91.com',
    smtpPort: parseInt(process.env.MSG91_SMTP_PORT || '587'),
    smtpUser: process.env.MSG91_SMTP_USER,
    smtpPass: process.env.MSG91_SMTP_PASS,
    fromEmail: process.env.MSG91_FROM_EMAIL || 'info@mbaninja.in',
    fromName: process.env.MSG91_FROM_NAME || 'MBA Ninja'
  };
}

/**
 * Get or create SMTP transporter for MSG91
 */
let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const config = getConfig();
  
  if (!config.smtpUser || !config.smtpPass) {
    throw new Error('MSG91 SMTP credentials not configured');
  }

  transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: false, // use TLS (STARTTLS on port 587)
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    },
    tls: {
      rejectUnauthorized: false // Accept self-signed certificates (adjust for production)
    }
  });

  console.log(`📧 MSG91 SMTP Transporter initialized`);
  console.log(`   Host: ${config.smtpHost}:${config.smtpPort}`);
  console.log(`   User: ${config.smtpUser}`);
  
  return transporter;
}

/**
 * Send OTP via MSG91 SMTP email
 * @param {string} email - recipient email address
 * @param {string} otp - 6-digit OTP code
 */
export async function sendOtpViaEmail(email, otp) {
  const config = getConfig();
  const transport = getTransporter();

  const mailOptions = {
    from: `"${config.fromName}" <${config.fromEmail}>`,
    to: email,
    subject: 'Your MBA Ninja Verification Code',
    text: `Your MBA Ninja login OTP is ${otp}. Valid for 10 minutes. Do not share it with anyone.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5aa0;">MBA Ninja Verification</h2>
        <p>Your verification code is:</p>
        <div style="background: #f0f4f8; padding: 20px; text-align: center; margin: 20px 0;">
          <h1 style="color: #2c5aa0; font-size: 32px; letter-spacing: 5px; margin: 0;">${otp}</h1>
        </div>
        <p style="color: #666;">This code is valid for <strong>10 minutes</strong>.</p>
        <p style="color: #666;">Do not share this code with anyone.</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        <p style="color: #999; font-size: 12px;">
          If you didn't request this code, please ignore this email.
        </p>
      </div>
    `
  };

  console.log(`📤 Sending email OTP via MSG91 SMTP`);
  console.log(`   To: ${email}`);
  console.log(`   From: ${config.fromEmail}`);
  console.log(`   OTP: ${otp}`);

  try {
    const info = await transport.sendMail(mailOptions);
    console.log(`📥 Email sent successfully!`);
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   Response: ${info.response}`);
    return {
      success: true,
      messageId: info.messageId,
      response: info.response
    };
  } catch (error) {
    console.error(`❌ Email send failed:`, error.message);
    throw error;
  }
}

/**
 * Test email sending (for debugging)
 * @param {string} email - test recipient email
 */
export async function sendTestEmail(email) {
  const config = getConfig();
  const transport = getTransporter();

  const mailOptions = {
    from: `"${config.fromName}" <${config.fromEmail}>`,
    to: email,
    subject: 'MSG91 SMTP Test Email',
    text: 'This is a test email from MBA Ninja via MSG91 SMTP.',
    html: '<p>This is a <strong>test email</strong> from MBA Ninja via MSG91 SMTP.</p>'
  };

  console.log(`📤 Sending test email via MSG91 SMTP to ${email}`);

  try {
    const info = await transport.sendMail(mailOptions);
    console.log(`✅ Test email sent! Message ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`❌ Test email failed:`, error.message);
    throw error;
  }
}

export default {
  sendOtpViaEmail,
  sendTestEmail
};

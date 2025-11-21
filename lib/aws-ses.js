import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize SES client
function getSESClient() {
  const region = process.env.AWS_REGION || 'ap-south-1';
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!accessKeyId || !secretAccessKey) {
    throw new Error('AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are required');
  }

  return new SESClient({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey
    }
  });
}

/**
 * Send OTP via email using AWS SES
 * @param {string} email - recipient email address
 * @param {string} otp - 6-digit OTP
 * @returns {Promise<Object>} - SES response with MessageId
 */
export async function sendOtpViaEmail(email, otp) {
  if (!email || !otp) {
    throw new Error('Email and OTP are required');
  }

  const senderEmail = process.env.AWS_SES_FROM_EMAIL || 'info@educativo.in';

  console.log(`📧 Sending OTP via email to AWS SES:`);
  console.log(`   Email: ${email}`);
  console.log(`   From: ${senderEmail}`);
  console.log(`   OTP: ${otp}`);

  try {
    const client = getSESClient();

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .otp-box { background-color: #f0f0f0; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; margin: 20px 0; border-radius: 5px; }
            .footer { font-size: 12px; color: #666; margin-top: 20px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>EDUCATIVO</h1>
            </div>
            <div class="content">
              <p>Your EDUCATIVO login OTP is:</p>
              <div class="otp-box">${otp}</div>
              <p><strong>Valid for 10 minutes. Do not share it with anyone.</strong></p>
              <p>If you didn't request this OTP, please ignore this email.</p>
            </div>
            <div class="footer">
              <p>&copy; 2025 EDUCATIVO. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const textBody = `Your EDUCATIVO login OTP is ${otp}. Valid for 10 minutes. Do not share it with anyone.`;

    const command = new SendEmailCommand({
      Source: senderEmail,
      Destination: {
        ToAddresses: [email]
      },
      Message: {
        Subject: {
          Data: `Your EDUCATIVO OTP: ${otp}`,
          Charset: 'UTF-8'
        },
        Body: {
          Text: {
            Data: textBody,
            Charset: 'UTF-8'
          }
        }
      },
      // Don't specify ConfigurationSetName - let AWS use default or account setting
      Tags: [
        {
          Name: 'EmailType',
          Value: 'OTP'
        }
      ]
    });

    const response = await client.send(command);
    console.log(`📧 Email sent successfully!`);
    console.log(`   Message ID: ${response.MessageId}`);
    return {
      type: 'success',
      messageId: response.MessageId,
      email: email
    };
  } catch (error) {
    console.error(`❌ Failed to send email OTP:`, error.message);
    throw error;
  }
}

/**
 * Send test email to verify SES configuration
 * @param {string} email - recipient email address
 * @returns {Promise<Object>} - SES response
 */
export async function sendTestEmail(email) {
  const senderEmail = process.env.AWS_SES_FROM_EMAIL || 'info@educativo.in';

  try {
    const client = getSESClient();

    const command = new SendEmailCommand({
      Source: senderEmail,
      Destination: {
        ToAddresses: [email]
      },
      Message: {
        Subject: {
          Data: 'Test Email from EDUCATIVO',
          Charset: 'UTF-8'
        },
        Body: {
          Text: {
            Data: 'This is a test email from EDUCATIVO AWS SES setup.',
            Charset: 'UTF-8'
          }
        }
      }
    });

    const response = await client.send(command);
    return {
      type: 'success',
      messageId: response.MessageId
    };
  } catch (error) {
    console.error(`❌ Failed to send test email:`, error.message);
    throw error;
  }
}

export default {
  sendOtpViaEmail,
  sendTestEmail
};

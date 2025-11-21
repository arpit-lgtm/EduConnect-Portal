// OTP Storage (using global to persist across API calls in same server instance)
if (!global.otpVerificationStore) {
  global.otpVerificationStore = new Map();
}

// Clean up expired OTPs every 10 minutes
if (!global.otpCleanupInterval) {
  global.otpCleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, data] of global.otpVerificationStore.entries()) {
      if (data.expiryTime < now) {
        global.otpVerificationStore.delete(key);
      }
    }
  }, 10 * 60 * 1000);
}

// Generate 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, value } = req.body; // type: 'phone' or 'email', value: phone number or email

    if (!type || !value) {
      return res.status(400).json({ success: false, message: 'Type and value are required' });
    }

    if (type !== 'phone' && type !== 'email') {
      return res.status(400).json({ success: false, message: 'Invalid type. Must be phone or email' });
    }

    // Validate format
    if (type === 'phone' && value.length !== 10) {
      return res.status(400).json({ success: false, message: 'Phone number must be 10 digits' });
    }

    if (type === 'email' && !value.includes('@')) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    // Generate OTP
    const otp = generateOTP();
    const expiryTime = Date.now() + 5 * 60 * 1000; // 5 minutes expiry

    // Store OTP with expiry
    const key = `${type}_${value.toLowerCase()}`;
    global.otpVerificationStore.set(key, { otp, expiryTime, attempts: 0 });

    console.log(`📱 OTP Generated: ${otp} for ${type}: ${value}`);

    // Send OTP via MSG91 for phone type
    if (type === 'phone') {
      try {
        console.log(`🔍 Environment Check for SMS:`);
        console.log(`   MSG91_AUTH_KEY exists: ${!!process.env.MSG91_AUTH_KEY}`);
        console.log(`   MSG91_AUTH_KEY length: ${process.env.MSG91_AUTH_KEY?.length || 0}`);
        console.log(`   MSG91_OTP_TEMPLATE_ID: ${process.env.MSG91_OTP_TEMPLATE_ID || 'NOT SET'}`);
        console.log(`   MSG91_SENDER: ${process.env.MSG91_SENDER || 'NOT SET'}`);
        
        const msg91 = (await import('../../lib/msg91.js')).default;
        console.log(`🔄 Sending OTP via MSG91 to ${value}...`);
        if (process.env.MSG91_OTP_TEMPLATE_ID) {
          console.log(`📧 Using template: ${process.env.MSG91_OTP_TEMPLATE_ID}`);
          await msg91.sendOtpViaTemplate(value, otp);
        } else {
          console.log(`📲 Using plain SMS (no template)`);
          await msg91.sendSms(value, `Your EDUCATIVO login OTP is ${otp}. Valid for 10 minutes. Do not share it with anyone.`);
        }
        console.log(`✅ OTP sent successfully via MSG91`);
      } catch (error) {
        console.error('❌ Error sending verification OTP via MSG91:');
        console.error('   Error response:', error?.response?.data);
        console.error('   Error message:', error.message);
        console.error('   Full error:', error);
        return res.status(500).json({ success: false, message: 'Error sending OTP', error: error.message });
      }
    } else if (type === 'email') {
      try {
        const msg91Email = (await import('../../lib/msg91-email.js')).default;
        console.log(`🔄 Sending OTP via MSG91 SMTP...`);
        if (process.env.MSG91_SMTP_USER && process.env.MSG91_SMTP_PASS) {
          await msg91Email.sendOtpViaEmail(value, otp);
          console.log(`✅ OTP sent successfully via MSG91 SMTP`);
        } else {
          console.log(`⚠️  MSG91 SMTP credentials not configured. Email OTP skipped.`);
          return res.status(500).json({ success: false, message: 'Email service not configured' });
        }
      } catch (error) {
        console.error('❌ Error sending verification OTP via MSG91 SMTP:', error?.message || error);
        return res.status(500).json({ success: false, message: 'Error sending email OTP', error: error.message });
      }
    }

    res.status(200).json({ 
      success: true, 
      message: `OTP sent successfully to your ${type}`,
      expirySeconds: 300 // 5 minutes in seconds
    });

  } catch (error) {
    console.error('Error sending verification OTP:', error);
    res.status(500).json({ success: false, message: 'Error sending OTP', error: error.message });
  }
}

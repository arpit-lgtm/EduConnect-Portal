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

    // In production, send OTP via SMS/Email service
    console.log(`📱 ${type.toUpperCase()} OTP for ${value}: ${otp} (expires in 5 minutes)`);
    
    // Simulate sending OTP
    if (type === 'phone') {
      // TODO: Integrate SMS service (Twilio, AWS SNS, Fast2SMS, etc.)
      console.log(`📲 SMS: Your MBA Ninja verification code is ${otp}. Valid for 5 minutes.`);
    } else if (type === 'email') {
      // TODO: Integrate Email service (SendGrid, AWS SES, Nodemailer, etc.)
      console.log(`📧 Email to ${value}: Your MBA Ninja verification code is ${otp}. Valid for 5 minutes.`);
    }

    res.status(200).json({ 
      success: true, 
      message: `OTP sent successfully to your ${type}`,
      expirySeconds: 300, // 5 minutes in seconds
      // In development, send OTP in response for easy testing
      ...(process.env.NODE_ENV === 'development' && { devOTP: otp })
    });

  } catch (error) {
    console.error('Error sending verification OTP:', error);
    res.status(500).json({ success: false, message: 'Error sending OTP', error: error.message });
  }
}

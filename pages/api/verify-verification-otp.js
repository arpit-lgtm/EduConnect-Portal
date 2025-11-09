// Import the OTP store from send-verification-otp
// Since we can't directly import in Next.js API routes, we'll use a shared storage approach
const otpStore = new Map();

// This should match the store in send-verification-otp.js
// In a production environment, use Redis or database for OTP storage

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, value, otp } = req.body;

    if (!type || !value || !otp) {
      return res.status(400).json({ 
        success: false, 
        message: 'Type, value, and OTP are required' 
      });
    }

    if (type !== 'phone' && type !== 'email') {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid type' 
      });
    }

    const key = `${type}_${value.toLowerCase()}`;
    
    // Check if OTP exists in our global store (shared via module)
    const storedData = global.otpVerificationStore?.get(key);

    if (!storedData) {
      return res.status(400).json({ 
        success: false, 
        message: 'OTP not found or expired. Please request a new OTP.' 
      });
    }

    // Check if expired
    if (storedData.expiryTime < Date.now()) {
      global.otpVerificationStore.delete(key);
      return res.status(400).json({ 
        success: false, 
        message: 'OTP has expired. Please request a new OTP.' 
      });
    }

    // Check attempts
    if (storedData.attempts >= 3) {
      global.otpVerificationStore.delete(key);
      return res.status(400).json({ 
        success: false, 
        message: 'Too many failed attempts. Please request a new OTP.' 
      });
    }

    // Verify OTP
    if (storedData.otp !== otp) {
      storedData.attempts += 1;
      global.otpVerificationStore.set(key, storedData);
      
      const attemptsLeft = 3 - storedData.attempts;
      return res.status(400).json({ 
        success: false, 
        message: `Invalid OTP. ${attemptsLeft} attempt${attemptsLeft !== 1 ? 's' : ''} remaining.` 
      });
    }

    // OTP is correct
    global.otpVerificationStore.delete(key); // Remove used OTP

    res.status(200).json({ 
      success: true, 
      message: `${type === 'phone' ? 'Phone number' : 'Email'} verified successfully`,
      verified: true
    });

  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error verifying OTP', 
      error: error.message 
    });
  }
}

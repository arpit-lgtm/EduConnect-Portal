// Import the OTP store from send-verification-otp
// Since we can't directly import in Next.js API routes, we'll use a shared storage approach
// Initialize global OTP store if it doesn't exist
if (!global.otpVerificationStore) {
  global.otpVerificationStore = new Map();
}

import VerifiedLead from '../../models/VerifiedLead';
import dbConnect from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, value, otp, name, mobile, email } = req.body;

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
    console.log(`🔍 Verifying OTP for ${type}: ${value}`);
    
    if (storedData.otp !== otp) {
      storedData.attempts += 1;
      global.otpVerificationStore.set(key, storedData);
      
      const attemptsLeft = 3 - storedData.attempts;
      console.log(`❌ Invalid OTP. ${attemptsLeft} attempts remaining.`);
      
      return res.status(400).json({ 
        success: false, 
        message: `Invalid OTP. ${attemptsLeft} attempt${attemptsLeft !== 1 ? 's' : ''} remaining.` 
      });
    }

    console.log(`✅ OTP verified successfully`);
    
    // OTP is correct - Remove used OTP FIRST
    global.otpVerificationStore.delete(key);
    
    // Get metadata for tracking
    const metadata = {
      userAgent: req.headers['user-agent'] || '',
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress || '',
      referrer: req.headers['referer'] || ''
    };

    // IMPORTANT: Respond to user IMMEDIATELY (don't wait for MongoDB)
    res.status(200).json({ 
      success: true, 
      message: `${type === 'phone' ? 'Phone number' : 'Email'} verified successfully`,
      verified: true
    });
    
    // Save to MongoDB in background (non-blocking)
    // This won't delay the user's response
    (async () => {
      try {
        console.log(`💾 Saving lead to MongoDB in background...`);
        await dbConnect();

        if (type === 'phone') {
          const leadData = {
            name: name || 'Unknown',
            mobile: mobile || value,
            mobileVerified: true,
            mobileVerifiedAt: new Date(),
            metadata
          };

          await VerifiedLead.findOrCreateByMobile(leadData.mobile, leadData.name, metadata);
          console.log(`✅ Saved verified lead: ${leadData.name} - ${leadData.mobile}`);

        } else if (type === 'email') {
          if (mobile) {
            await VerifiedLead.updateEmailVerification(mobile, email || value);
            console.log(`✅ Updated lead with email: ${mobile} - ${email || value}`);
          } else {
            console.warn(`⚠️ Email verified but no mobile provided: ${email || value}`);
          }
        }
      } catch (dbError) {
        console.error('❌ Error saving lead to MongoDB:', dbError);
      }
    })();

  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error verifying OTP', 
      error: error.message 
    });
  }
}

import connectDB from '../../lib/mongodb';
import User from '../../models/User';
import FraudAlert from '../../models/FraudAlert';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectDB();

    const { emailAddress, contactNumber, fullName, ipAddress, userAgent } = req.body;

    // Check for existing users with same email OR phone
    const existingUsers = await User.find({
      $or: [
        { 'userData.emailAddress': emailAddress },
        { 'userData.contactNumber': contactNumber }
      ]
    }).lean();

    if (existingUsers.length === 0) {
      // New user - all clear
      return res.status(200).json({
        status: 'new_user',
        allowed: true,
        message: 'Welcome! Please complete your registration.'
      });
    }

    // SECURITY CHECK 1: Exact match (returning user)
    const exactMatch = existingUsers.find(user => 
      user.userData?.emailAddress === emailAddress &&
      user.userData?.contactNumber === contactNumber &&
      user.userData?.fullName === fullName
    );

    if (exactMatch) {
      return res.status(200).json({
        status: 'returning_user',
        allowed: true,
        message: `Welcome back, ${fullName}!`,
        flagged: false,
        userId: exactMatch._id
      });
    }

    // SECURITY CHECK 2: Same email, different phone or name (suspicious)
    const sameEmailDiffDetails = existingUsers.find(user =>
      user.userData?.emailAddress === emailAddress &&
      (user.userData?.contactNumber !== contactNumber || user.userData?.fullName !== fullName)
    );

    if (sameEmailDiffDetails) {
      // Log fraud alert
      await FraudAlert.create({
        attemptedName: fullName,
        attemptedEmail: emailAddress,
        attemptedPhone: contactNumber,
        existingName: sameEmailDiffDetails.userData?.fullName,
        existingEmail: sameEmailDiffDetails.userData?.emailAddress,
        existingPhone: sameEmailDiffDetails.userData?.contactNumber,
        existingUserId: sameEmailDiffDetails._id,
        fraudType: 'email_mismatch',
        severity: 'medium',
        description: 'Same email used with different phone or name',
        ipAddress,
        userAgent
      });

      return res.status(403).json({
        status: 'fraud_detected',
        allowed: false,
        message: `⚠️ This email (${emailAddress}) is already registered under the name "${sameEmailDiffDetails.userData?.fullName}" with phone ${sameEmailDiffDetails.userData?.contactNumber}. Please use your original details or contact support.`,
        flaggedReason: 'Email mismatch - Different name or phone',
        existingName: sameEmailDiffDetails.userData?.fullName,
        existingPhone: sameEmailDiffDetails.userData?.contactNumber
      });
    }

    // SECURITY CHECK 3: Same phone, different email or name (HIGH ALERT)
    const samePhoneDiffDetails = existingUsers.find(user =>
      user.userData?.contactNumber === contactNumber &&
      (user.userData?.emailAddress !== emailAddress || user.userData?.fullName !== fullName)
    );

    if (samePhoneDiffDetails) {
      // Log this as CRITICAL fraud
      await FraudAlert.create({
        attemptedName: fullName,
        attemptedEmail: emailAddress,
        attemptedPhone: contactNumber,
        existingName: samePhoneDiffDetails.userData?.fullName,
        existingEmail: samePhoneDiffDetails.userData?.emailAddress,
        existingPhone: samePhoneDiffDetails.userData?.contactNumber,
        existingUserId: samePhoneDiffDetails._id,
        fraudType: 'phone_mismatch',
        severity: 'high',
        description: 'Same phone number used with different email or name - Multiple identities',
        ipAddress,
        userAgent
      });

      console.error('🚨 FRAUD ALERT - Multiple identities with same phone:', {
        attemptedName: fullName,
        attemptedEmail: emailAddress,
        phone: contactNumber,
        existingName: samePhoneDiffDetails.userData?.fullName,
        existingEmail: samePhoneDiffDetails.userData?.emailAddress,
        timestamp: new Date().toISOString()
      });

      return res.status(403).json({
        status: 'fraud_blocked',
        allowed: false,
        message: `🚫 SECURITY ALERT: This phone number (${contactNumber}) is already registered under "${samePhoneDiffDetails.userData?.fullName}" with email ${samePhoneDiffDetails.userData?.emailAddress}. Attempting to use multiple identities may result in account suspension. Please use your original credentials or contact support@educativo.in`,
        flaggedReason: 'Phone number mismatch - Multiple identities detected',
        existingName: samePhoneDiffDetails.userData?.fullName,
        existingEmail: samePhoneDiffDetails.userData?.emailAddress,
        blocked: true
      });
    }

    // SECURITY CHECK 4: Multiple records with variations (fraud pattern)
    if (existingUsers.length >= 2) {
      // Count unique names, emails, phones
      const uniqueNames = new Set(existingUsers.map(u => u.userData?.fullName));
      const uniqueEmails = new Set(existingUsers.map(u => u.userData?.emailAddress));
      const uniquePhones = new Set(existingUsers.map(u => u.userData?.contactNumber));

      if (uniqueNames.size > 1 || uniqueEmails.size > 1 || uniquePhones.size > 1) {
        // CRITICAL fraud pattern - Log and block
        await FraudAlert.create({
          attemptedName: fullName,
          attemptedEmail: emailAddress,
          attemptedPhone: contactNumber,
          existingName: existingUsers[0].userData?.fullName,
          existingEmail: existingUsers[0].userData?.emailAddress,
          existingPhone: existingUsers[0].userData?.contactNumber,
          existingUserId: existingUsers[0]._id,
          fraudType: 'fraud_pattern',
          severity: 'critical',
          description: `Multiple registration attempts detected: ${uniqueNames.size} names, ${uniqueEmails.size} emails, ${uniquePhones.size} phones`,
          ipAddress,
          userAgent,
          attemptCount: existingUsers.length
        });

        console.error('🚨 FRAUD PATTERN DETECTED - Multiple variations:', {
          attemptedRegistration: { fullName, emailAddress, contactNumber },
          existingRecords: existingUsers.map(u => ({
            name: u.userData?.fullName,
            email: u.userData?.emailAddress,
            phone: u.userData?.contactNumber
          })),
          timestamp: new Date().toISOString()
        });

        return res.status(403).json({
          status: 'fraud_pattern',
          allowed: false,
          message: '🚫 ACCOUNT SECURITY BLOCK: We detected multiple registration attempts with conflicting information. Your account will be flagged for review. Please contact support@educativo.in immediately to verify your identity.',
          flaggedReason: 'Multiple identity fraud pattern detected',
          blocked: true,
          contactSupport: true
        });
      }
    }

    // Fallback - something went wrong
    return res.status(400).json({
      status: 'verification_error',
      allowed: false,
      message: 'Unable to verify your details. Please contact support.'
    });

  } catch (error) {
    console.error('❌ User verification error:', error);
    return res.status(500).json({
      status: 'error',
      allowed: false,
      message: 'Server error during verification'
    });
  }
}

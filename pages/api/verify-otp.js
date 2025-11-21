import fs from 'fs';
import path from 'path';
import { otpStorage } from '../../utils/otpStorage.js';

// Save successful login to activities
async function saveLoginActivity(userData) {
    try {
        const activitiesPath = path.join(process.cwd(), 'data', 'user-activities.json');
        let activities = [];

        if (fs.existsSync(activitiesPath)) {
            activities = JSON.parse(fs.readFileSync(activitiesPath, 'utf8'));
        }

        const loginActivity = {
            id: Date.now().toString(),
            userId: userData.contactNumber || userData.emailAddress,
            userName: userData.fullName,
            action: 'OTP Login',
            timestamp: new Date().toISOString(),
            details: {
                loginType: 'returning-user',
                ipAddress: userData.ipAddress,
                contact: userData.contactNumber || userData.emailAddress
            }
        };

        activities.push(loginActivity);

        // Ensure directory exists
        const dataDir = path.dirname(activitiesPath);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        fs.writeFileSync(activitiesPath, JSON.stringify(activities, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving login activity:', error);
        return false;
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const { name, contact, otp } = req.body;

        if (!name || !contact || !otp) {
            return res.status(400).json({ 
                success: false, 
                message: 'Name, contact, and OTP are required' 
            });
        }

        // Find OTP record
        // IMPORTANT: Use contact as key (matches send-otp.js)
        const otpKey = contact.toLowerCase().trim();
        console.log(`🔑 Looking for OTP with key: ${otpKey}`);
        
        const otpRecord = otpStorage.get(otpKey);

        if (!otpRecord) {
            console.log(`❌ No OTP found for key: ${otpKey}`);
            console.log(`📋 Available OTP keys:`, Array.from(otpStorage.keys()));
            
            return res.status(400).json({ 
                success: false, 
                message: 'No OTP found. Please request a new OTP.' 
            });
        }

        // Check if OTP expired
        if (Date.now() > otpRecord.expiresAt) {
            otpStorage.delete(otpKey);
            return res.status(400).json({ 
                success: false, 
                message: 'OTP has expired. Please request a new OTP.' 
            });
        }

        // Check attempts limit
        if (otpRecord.attempts >= 3) {
            otpStorage.delete(otpKey);
            return res.status(400).json({ 
                success: false, 
                message: 'Too many failed attempts. Please request a new OTP.' 
            });
        }

        // Verify OTP
        console.log(`🔍 Verifying OTP for returning user: ${contact}`);
        
        if (otpRecord.otp !== otp) {
            otpRecord.attempts += 1;
            otpStorage.set(otpKey, otpRecord);
            
            const attemptsLeft = 3 - otpRecord.attempts;
            console.log(`❌ Invalid OTP. ${attemptsLeft} attempts remaining.`);
            
            return res.status(400).json({ 
                success: false, 
                message: `Invalid OTP. ${attemptsLeft} attempts remaining.` 
            });
        }

        console.log(`✅ OTP verified successfully for returning user`);
        
        // OTP verified successfully
        const userData = otpRecord.userData;
        
        // Clean up OTP
        otpStorage.delete(otpKey);

        // IMPORTANT: Respond to user IMMEDIATELY (don't wait for file write)
        res.status(200).json({ 
            success: true, 
            message: 'OTP verified successfully',
            userData: userData
        });
        
        // Save login activity in background (non-blocking)
        saveLoginActivity(userData).catch(err => {
            console.error('❌ Background activity save failed:', err);
        });

    } catch (error) {
        console.error('Verify OTP error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
}
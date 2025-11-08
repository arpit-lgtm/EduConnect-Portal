import fs from 'fs';
import path from 'path';
import { otpStorage } from '../../utils/otpStorage.js';

// Generate 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Simulate sending OTP (in production, integrate with SMS/Email service)
function sendOTPNotification(contact, otp) {
    console.log(`🔐 OTP for ${contact}: ${otp}`);
    // In production, integrate with:
    // - Twilio for SMS
    // - SendGrid/Nodemailer for Email
    return true;
}

// Check if user exists in our database
function findExistingUser(name, contact) {
    try {
        // Check in leads.json
        const leadsPath = path.join(process.cwd(), 'data', 'leads.json');
        if (fs.existsSync(leadsPath)) {
            const leads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));
            
            const existingUser = leads.find(lead => {
                const userData = lead.userData;
                if (!userData) return false;
                
                // Match by name and contact (mobile or email)
                const nameMatch = userData.fullName?.toLowerCase().includes(name.toLowerCase());
                const contactMatch = 
                    userData.contactNumber === contact || 
                    userData.emailAddress === contact ||
                    userData.contactNumber?.includes(contact) ||
                    userData.emailAddress?.includes(contact);
                
                return nameMatch && contactMatch;
            });
            
            return existingUser?.userData || null;
        }
    } catch (error) {
        console.error('Error checking existing user:', error);
    }
    return null;
}

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const { name, contact } = req.body;

        if (!name || !contact) {
            return res.status(400).json({ 
                success: false, 
                message: 'Name and contact are required' 
            });
        }

        // Check if user exists
        const existingUser = findExistingUser(name, contact);
        
        if (!existingUser) {
            return res.status(404).json({ 
                success: false, 
                message: 'No account found with these details. Please use "New Student Registration" instead.' 
            });
        }

        // Generate OTP
        const otp = generateOTP();
        
        // Store OTP with expiry (5 minutes)
        const otpKey = `${name.toLowerCase()}_${contact}`;
        otpStorage.set(otpKey, {
            otp,
            userData: existingUser,
            expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
            attempts: 0
        });

        // Send OTP notification
        const sent = sendOTPNotification(contact, otp);
        
        if (sent) {
            res.status(200).json({ 
                success: true, 
                message: 'OTP sent successfully',
                // For development, include OTP in response (remove in production)
                devOTP: process.env.NODE_ENV === 'development' ? otp : undefined
            });
        } else {
            res.status(500).json({ 
                success: false, 
                message: 'Failed to send OTP' 
            });
        }

    } catch (error) {
        console.error('Send OTP error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
}
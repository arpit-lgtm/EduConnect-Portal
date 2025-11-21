import fs from 'fs';
import path from 'path';
import { otpStorage } from '../../utils/otpStorage.js';
import { rateLimit } from '../../middleware/auth';
import msg91 from '../../lib/msg91.js';

// Generate 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Simulate sending OTP (in production, integrate with SMS/Email service)
async function sendOTPNotification(contact, otp) {
    try {
        console.log(`📱 OTP Generated: ${otp} for ${contact}`);
        // If contact looks like phone number, use MSG91
        if (/^\d{10}$/.test(contact) || /^91\d{10}$/.test(contact)) {
            console.log(`🔄 Detected phone number, sending via MSG91...`);
            // Prefer template-based OTP if configured
            if (process.env.MSG91_OTP_TEMPLATE_ID) {
                console.log(`📧 Using template: ${process.env.MSG91_OTP_TEMPLATE_ID}`);
                const res = await msg91.sendOtpViaTemplate(contact, otp);
                console.log(`✅ Template OTP sent:`, res);
                return !!res;
            } else {
                console.log(`📲 Using plain SMS (no template)`);
                // Fallback to plain SMS
                const text = `Your EDUCATIVO login OTP is ${otp}. Valid for 10 minutes. Do not share it with anyone.`;
                const res = await msg91.sendSms(contact, text);
                console.log(`✅ Plain SMS sent:`, res);
                return !!res;
            }
        }

        // If not a phone, log for email path (email handling is skipped for now)
        console.log(`🔐 OTP for ${contact}: ${otp}`);
        return true;
    } catch (error) {
        console.error('❌ Error sending OTP via MSG91:', error?.response?.data || error.message || error);
        return false;
    }
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

async function handler(req, res) {
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

        // Send OTP notification (await for async MSG91 call)
        const sent = await sendOTPNotification(contact, otp);
        
        if (sent) {
            res.status(200).json({ 
                success: true, 
                message: 'OTP sent successfully to your phone'
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

// ✅ PROTECTED: Rate limited to 10 OTP requests per 15 minutes per IP
export default rateLimit({ 
  windowMs: 15 * 60 * 1000, 
  maxRequests: 10,
  message: 'Too many OTP requests. Please try again later.'
})(handler);
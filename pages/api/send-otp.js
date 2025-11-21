import fs from 'fs';
import path from 'path';
import { otpStorage } from '../../utils/otpStorage.js';
import { rateLimit } from '../../middleware/auth';
import msg91 from '../../lib/msg91.js';
import VerifiedLead from '../../models/VerifiedLead';
import dbConnect from '../../lib/mongodb';

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
                console.log(`🎯 TRANSACTIONAL ROUTE - Using template: ${process.env.MSG91_OTP_TEMPLATE_ID}`);
                console.log(`   ✅ This will send via Transactional route (immediate delivery, bypasses DND)`);
                const res = await msg91.sendOtpViaTemplate(contact, otp);
                console.log(`✅ Template OTP sent via TRANSACTIONAL route:`, res);
                return !!res;
            } else {
                console.log(`⚠️  PROMOTIONAL ROUTE - Using plain SMS (no template)`);
                console.log(`   ⚠️  This will be slower and may be blocked by DND`);
                // Fallback to plain SMS
                const text = `Your EDUCATIVO login OTP is ${otp}. Valid for 10 minutes. Do not share it with anyone.`;
                const res = await msg91.sendSms(contact, text);
                console.log(`✅ Plain SMS sent via PROMOTIONAL route:`, res);
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

// Check if user exists in our database (MongoDB + JSON file)
async function findExistingUser(name, contact) {
    try {
        console.log(`🔍 Searching for user: name="${name}", contact="${contact}"`);
        
        // FIRST: Check MongoDB VerifiedLead collection (new registrations)
        try {
            await dbConnect();
            
            // Search by mobile or email
            const query = {
                $or: [
                    { mobile: contact },
                    { email: contact },
                    { mobile: contact.replace(/^91/, '') }, // Handle +91 prefix
                    { mobile: `91${contact}` } // Handle without +91 prefix
                ]
            };
            
            const verifiedLead = await VerifiedLead.findOne(query);
            
            if (verifiedLead) {
                console.log(`✅ Found verified user in MongoDB: ${verifiedLead.name}`);
                
                // Return in expected format
                return {
                    fullName: verifiedLead.name,
                    contactNumber: verifiedLead.mobile,
                    emailAddress: verifiedLead.email || '',
                    verified: true,
                    source: 'mongodb'
                };
            } else {
                console.log(`⚠️ No verified user found in MongoDB for contact: ${contact}`);
            }
        } catch (dbError) {
            console.error('❌ Error checking MongoDB:', dbError);
            // Continue to check JSON file
        }
        
        // SECOND: Check in leads.json (legacy data)
        const leadsPath = path.join(process.cwd(), 'data', 'leads.json');
        if (fs.existsSync(leadsPath)) {
            const leads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));
            
            const existingUser = leads.find(lead => {
                const userData = lead.userData;
                if (!userData) return false;
                
                // Match by contact (mobile or email)
                const contactMatch = 
                    userData.contactNumber === contact || 
                    userData.emailAddress === contact ||
                    userData.contactNumber?.includes(contact) ||
                    userData.emailAddress?.includes(contact) ||
                    contact.includes(userData.contactNumber) ||
                    contact.includes(userData.emailAddress);
                
                return contactMatch;
            });
            
            if (existingUser?.userData) {
                console.log(`✅ Found user in leads.json: ${existingUser.userData.fullName}`);
                return {
                    ...existingUser.userData,
                    source: 'leads-json'
                };
            } else {
                console.log(`⚠️ No user found in leads.json for contact: ${contact}`);
            }
        }
        
        console.log(`❌ User NOT found in any database`);
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
        const existingUser = await findExistingUser(name, contact);
        
        if (!existingUser) {
            return res.status(404).json({ 
                success: false, 
                message: 'No account found with these details. Please use "New Student Registration" instead.' 
            });
        }
        
        console.log(`✅ Existing user found: ${existingUser.fullName} from ${existingUser.source}`);

        // Generate OTP
        const otp = generateOTP();
        
        // Store OTP with expiry (5 minutes)
        // IMPORTANT: Use contact as key (not name+contact) to avoid mismatch issues
        const otpKey = contact.toLowerCase().trim();
        console.log(`🔑 Storing OTP with key: ${otpKey}`);
        
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
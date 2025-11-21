import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import awsSes from './lib/aws-ses.js';

const testEmail = 'arpit@mbaninja.in'; // Change this to your test email
const testOtp = Math.floor(100000 + Math.random() * 900000).toString();

console.log(`\n📧 Testing Email OTP via AWS SES\n`);
console.log(`📨 To: ${testEmail}`);
console.log(`🔐 OTP: ${testOtp}`);
console.log(`📡 Region: ${process.env.AWS_REGION}`);
console.log(`💌 From: ${process.env.AWS_SES_FROM_EMAIL}\n`);
console.log(`⚠️  Note: Testing with verified email address\n`);

try {
  console.log(`Attempting to send email...`);
  const response = await awsSes.sendOtpViaEmail(testEmail, testOtp);
  
  console.log(`\n✅ Email sent successfully!`);
  console.log(`📝 Message ID: ${response.messageId}`);
  console.log(`\n📋 Next steps:`);
  console.log(`   1. Check your email (${testEmail}) for the OTP`);
  console.log(`   2. Look for subject: "Your EDUCATIVO OTP: ${testOtp}"`);
  console.log(`   3. If not received, check spam folder`);
  console.log(`   4. Or go to AWS SES dashboard to check send status`);
} catch (error) {
  console.error(`\n❌ Error sending email:`);
  console.error(`Error message: ${error.message}`);
  console.error(`\n🔍 Troubleshooting:`);
  console.error(`   1. Check AWS_ACCESS_KEY_ID is correct`);
  console.error(`   2. Check AWS_SECRET_ACCESS_KEY is correct`);
  console.error(`   3. Verify AWS_SES_FROM_EMAIL is verified in SES`);
  console.error(`   4. Check if you're in SES Sandbox mode (need production access)`);
  console.error(`   5. Try sending from AWS SES console first to test credentials`);
  process.exit(1);
}

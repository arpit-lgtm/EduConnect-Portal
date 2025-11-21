import dotenv from 'dotenv';
import { sendOtpViaEmail, sendTestEmail } from './lib/msg91-email.js';

// Load environment variables
dotenv.config({ path: '.env.local' });

const testEmail = process.argv[2] || 'your-email@example.com';
const testOtp = '123456';

console.log('🧪 Testing MSG91 SMTP Email Integration');
console.log('=====================================\n');

console.log(`📧 Test Email: ${testEmail}`);
console.log(`🔢 Test OTP: ${testOtp}\n`);

// Test 1: Send test email
console.log('Test 1: Sending basic test email...');
try {
  await sendTestEmail(testEmail);
  console.log('✅ Test email sent successfully!\n');
} catch (error) {
  console.error('❌ Test email failed:', error.message);
  console.error('Full error:', error);
  process.exit(1);
}

// Test 2: Send OTP email
console.log('Test 2: Sending OTP email...');
try {
  await sendOtpViaEmail(testEmail, testOtp);
  console.log('✅ OTP email sent successfully!\n');
} catch (error) {
  console.error('❌ OTP email failed:', error.message);
  console.error('Full error:', error);
  process.exit(1);
}

console.log('🎉 All tests passed! MSG91 SMTP is working correctly.');
console.log('Check your inbox at:', testEmail);

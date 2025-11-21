import dotenv from 'dotenv';
import msg91 from './lib/msg91.js';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

async function testSMS() {
  console.log('🧪 Testing MSG91 SMS Integration');
  console.log('=====================================\n');

  const testPhone = '9999999999'; // Replace with your test number
  const testOTP = '123456';

  console.log(`📱 Test Phone: ${testPhone}`);
  console.log(`🔢 Test OTP: ${testOTP}\n`);

  // Check environment variables
  console.log('🔍 Environment Variables:');
  console.log(`   MSG91_AUTH_KEY: ${process.env.MSG91_AUTH_KEY ? '✅ SET (length: ' + process.env.MSG91_AUTH_KEY.length + ')' : '❌ NOT SET'}`);
  console.log(`   MSG91_OTP_TEMPLATE_ID: ${process.env.MSG91_OTP_TEMPLATE_ID || '❌ NOT SET'}`);
  console.log(`   MSG91_SENDER: ${process.env.MSG91_SENDER || '❌ NOT SET'}\n`);

  try {
    console.log('Test 1: Sending template-based OTP...');
    const result = await msg91.sendOtpViaTemplate(testPhone, testOTP);
    console.log('✅ Template OTP sent successfully!');
    console.log('   Response:', result);
    console.log('\n🎉 SMS test passed!\n');
  } catch (error) {
    console.error('❌ SMS test failed!');
    console.error('   Error:', error.message);
    console.error('   Full error:', error);
  }
}

testSMS();

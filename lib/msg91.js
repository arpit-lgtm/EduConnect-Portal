import axios from 'axios';

// Read env vars dynamically (at runtime) instead of at import time
// This allows dotenv.config() to work properly in consuming modules
function getConfig() {
  return {
    authKey: process.env.MSG91_AUTH_KEY,
    sender: process.env.MSG91_SENDER || 'EPLMBA',
    route: process.env.MSG91_ROUTE || '4'
  };
}

/**
 * Send plain text SMS using MSG91 HTTP API
 * @param {string} mobile - recipient mobile number (10 or with country code)
 * @param {string} message - message body
 */
export async function sendSms(mobile, message) {
  const config = getConfig();
  if (!config.authKey) throw new Error('MSG91_AUTH_KEY not configured');

  // Ensure country code (assume +91 for Indian numbers when 10 digits provided)
  let phone = mobile;
  if (/^\d{10}$/.test(mobile)) {
    phone = '91' + mobile;
  }

  const url = `https://api.msg91.com/api/v5/flow/`;
  // For simple send, use the v2 API endpoint
  const v2url = 'https://api.msg91.com/api/sendhttp.php';

  // Use sendhttp.php for plain text messages
  const params = new URLSearchParams();
  params.append('authkey', config.authKey);
  params.append('mobiles', phone);
  params.append('message', message);
  params.append('sender', config.sender);
  params.append('route', '1'); // Route 1 = Transactional (better for OTP)
  params.append('country', '91');

  const fullUrl = `${v2url}?${params.toString()}`;

  console.log(`📤 Sending plain SMS via MSG91`);
  console.log(`   Phone: ${phone}`);
  console.log(`   Sender: ${config.sender}`);
  console.log(`   Route: 1 (Transactional)`);
  console.log(`   Message: ${message.substring(0, 50)}...`);

  const response = await axios.get(fullUrl, { timeout: 10000 });
  console.log(`📥 SMS Response:`, JSON.stringify(response.data).substring(0, 200));
  return response.data;
}

/**
 * Send OTP using MSG91 template-based flow API (preferred)
 * Falls back to plain SMS if template fails
 * @param {string} mobile - recipient mobile number
 * @param {string} otp - 6-digit otp
 * @param {string} templateId - MSG91 template id (optional; read from env if not provided)
 */
export async function sendOtpViaTemplate(mobile, otp, templateId) {
  const config = getConfig();
  
  // Enhanced logging for debugging
  console.log(`🔍 MSG91 Config Check:`);
  console.log(`   AUTH_KEY exists: ${!!config.authKey}`);
  console.log(`   AUTH_KEY length: ${config.authKey?.length || 0}`);
  console.log(`   SENDER: ${config.sender}`);
  console.log(`   ROUTE: ${config.route}`);
  
  if (!config.authKey) {
    console.error('❌ MSG91_AUTH_KEY not configured! Check environment variables.');
    throw new Error('MSG91_AUTH_KEY not configured');
  }

  const tplId = templateId || process.env.MSG91_OTP_TEMPLATE_ID;
  console.log(`📋 Template ID: ${tplId || 'NOT SET'}`);
  
  if (!tplId) {
    // If no template ID, use plain SMS instead
    console.log(`⚠️  No template ID, falling back to plain SMS`);
    return sendSms(mobile, `Your EDUCATIVO login OTP is ${otp}. Valid for 10 minutes. Do not share it with anyone.`);
  }

  // Ensure country code
  let phone = mobile;
  if (/^\d{10}$/.test(mobile)) phone = '91' + mobile;

  // Use v5 flow API for template-based OTP with CORRECT endpoint and format
  const url = 'https://control.msg91.com/api/v5/flow';

  // Match the exact format from MSG91 documentation
  const payload = {
    template_id: tplId,
    recipients: [
      {
        mobiles: phone,
        var1: otp  // Template variable {#var#} maps to var1
      }
    ]
  };

  const headers = {
    'Content-Type': 'application/json',
    'authkey': config.authKey
  };

  console.log(`📤 Sending template OTP to MSG91:`);
  console.log(`   Endpoint: ${url}`);
  console.log(`   Phone: ${phone}`);
  console.log(`   Template ID: ${tplId}`);
  console.log(`   OTP: ${otp}`);
  console.log(`   Payload:`, JSON.stringify(payload, null, 2));

  try {
    const resp = await axios.post(url, payload, { headers, timeout: 10000 });
    console.log(`✅ MSG91 Template Response SUCCESS:`, resp.data);
    return resp.data;
  } catch (error) {
    console.error(`❌ Template OTP failed!`);
    console.error(`   Status: ${error.response?.status}`);
    console.error(`   Data:`, JSON.stringify(error.response?.data, null, 2));
    console.error(`   Message: ${error.message}`);
    console.error(`   Full error:`, error);
    console.error(`   Falling back to plain SMS`);
    // Fallback to plain SMS if template fails
    return sendSms(mobile, `Your EDUCATIVO login OTP is ${otp}. Valid for 10 minutes. Do not share it with anyone.`);
  }
}

export default {
  sendSms,
  sendOtpViaTemplate
};

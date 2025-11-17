// Generate Admin Secret Key for MBA NINJA
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

console.log('\n🔐 Generating Admin Secret Key...\n');

// Generate a secure random 32-byte key
const secretKey = crypto.randomBytes(32).toString('base64');

console.log('✅ Generated Secret Key:');
console.log('\x1b[33m%s\x1b[0m', secretKey);
console.log('\n📋 Add this to your .env.local file:');
console.log('\x1b[37m%s\x1b[0m', `ADMIN_SECRET_KEY=${secretKey}`);
console.log('\n⚠️  IMPORTANT:');
console.log('- Keep this key SECRET and SAFE!');
console.log('- Never commit .env.local to Git');
console.log('- Use this key in Authorization header for admin endpoints');
console.log('- Generate a DIFFERENT key for production');

// Check if .env.local exists
const envPath = path.join(__dirname, '.env.local');
const envExamplePath = path.join(__dirname, '.env.local.example');

if (!fs.existsSync(envPath)) {
  console.log('\n💡 TIP: Run this command to create .env.local:');
  console.log('   copy .env.local.example .env.local');
  console.log('   Then add the ADMIN_SECRET_KEY line above');
} else {
  console.log('\n✅ .env.local exists - manually add the key above');
}

console.log('\n');

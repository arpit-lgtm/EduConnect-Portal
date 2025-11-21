// Shared OTP storage for development
// In production, replace with Redis or database

// ✅ Use global storage to persist across Next.js hot reloads
if (!global.otpStorage) {
  global.otpStorage = new Map();
}

export const otpStorage = global.otpStorage;
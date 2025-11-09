import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Basic Info (make them optional since data might come nested in userData)
  name: String,
  email: String,
  phone: String,
  
  // User Details
  qualification: String,
  state: String,
  preferredCourse: String,
  degreeType: String,
  
  // Source Tracking
  source: String,
  universityName: String,
  expertCounselor: String,
  universities: [String],
  
  // Technical Data
  ipAddress: String,
  userAgent: String,
  location: {
    city: String,
    region: String,
    country: String,
    latitude: Number,
    longitude: Number,
  },
  
  // Additional Data (flexible for any extra fields) - THIS IS WHERE THE ACTUAL USER DATA IS
  userData: mongoose.Schema.Types.Mixed,
  
  // Timestamps
  timestamp: {
    type: Date,
    default: Date.now,
  },
  
  // Legacy ID for compatibility
  id: String,
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
  strict: false, // Allow fields not defined in schema
});

// Create indexes for faster searching
UserSchema.index({ 'userData.email': 1 });
UserSchema.index({ 'userData.phone': 1 });
UserSchema.index({ email: 1 });
UserSchema.index({ phone: 1 });
UserSchema.index({ timestamp: -1 });

export default mongoose.models.User || mongoose.model('User', UserSchema);

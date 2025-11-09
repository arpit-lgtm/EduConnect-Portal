import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  // User Identification
  userEmail: String,
  userName: String,
  userPhone: String,
  
  // Activity Details
  action: {
    type: String,
    required: true,
  },
  page: String,
  universityName: String,
  courseName: String,
  
  // Source Tracking
  source: String,
  tool: String,
  
  // Technical Data
  ipAddress: String,
  userAgent: String,
  location: {
    city: String,
    region: String,
    country: String,
  },
  
  // Form Data (if any)
  formData: mongoose.Schema.Types.Mixed,
  
  // Additional flexible data
  metadata: mongoose.Schema.Types.Mixed,
  
  // Timestamp
  timestamp: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
  strict: false  // IMPORTANT: Allow any fields to be saved
});

// Create indexes
ActivitySchema.index({ userEmail: 1 });
ActivitySchema.index({ action: 1 });
ActivitySchema.index({ timestamp: -1 });

export default mongoose.models.Activity || mongoose.model('Activity', ActivitySchema);

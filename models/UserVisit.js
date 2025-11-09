import mongoose from 'mongoose';

const UserVisitSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  visitDate: {
    type: Date,
    default: Date.now,
    index: true
  },
  ipAddress: {
    type: String,
    default: 'unknown'
  },
  userAgent: {
    type: String,
    default: 'unknown'
  },
  deviceInfo: {
    type: String,
    default: 'unknown'
  }
}, {
  timestamps: true
});

// Index for faster queries
UserVisitSchema.index({ email: 1, visitDate: -1 });

export default mongoose.models.UserVisit || mongoose.model('UserVisit', UserVisitSchema);

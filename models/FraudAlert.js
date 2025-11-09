import mongoose from 'mongoose';

const FraudAlertSchema = new mongoose.Schema({
  // Attempted Details
  attemptedName: String,
  attemptedEmail: String,
  attemptedPhone: String,
  
  // Existing User Details (matched)
  existingName: String,
  existingEmail: String,
  existingPhone: String,
  existingUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
  // Fraud Details
  fraudType: {
    type: String,
    enum: [
      'email_mismatch',
      'phone_mismatch',
      'multiple_identities',
      'fraud_pattern',
      'suspicious_activity'
    ],
    required: true
  },
  
  severity: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  
  description: String,
  
  // Tracking
  ipAddress: String,
  userAgent: String,
  attemptCount: {
    type: Number,
    default: 1
  },
  
  // Status
  status: {
    type: String,
    enum: ['flagged', 'under_review', 'cleared', 'blocked'],
    default: 'flagged'
  },
  
  // Admin Actions
  reviewedBy: String,
  reviewedAt: Date,
  reviewNotes: String,
  
  // Timestamps
  firstAttempt: {
    type: Date,
    default: Date.now
  },
  lastAttempt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create indexes for faster queries
FraudAlertSchema.index({ attemptedEmail: 1 });
FraudAlertSchema.index({ attemptedPhone: 1 });
FraudAlertSchema.index({ status: 1 });
FraudAlertSchema.index({ severity: 1 });
FraudAlertSchema.index({ fraudType: 1 });

export default mongoose.models.FraudAlert || mongoose.model('FraudAlert', FraudAlertSchema);

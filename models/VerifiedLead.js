import mongoose from 'mongoose';

const VerifiedLeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    index: true,
    sparse: true // Allow null/undefined
  },
  mobileVerified: {
    type: Boolean,
    default: false
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  mobileVerifiedAt: {
    type: Date
  },
  emailVerifiedAt: {
    type: Date
  },
  source: {
    type: String,
    default: 'registration-otp',
    enum: ['registration-otp', 'course-inquiry', 'university-matcher']
  },
  status: {
    type: String,
    default: 'verified-contact',
    enum: ['verified-contact', 'partial-registration', 'completed-registration']
  },
  metadata: {
    userAgent: String,
    ipAddress: String,
    referrer: String
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

// Compound index for efficient queries
VerifiedLeadSchema.index({ mobile: 1, email: 1 });
VerifiedLeadSchema.index({ createdAt: -1 }); // Sort by newest first

// Virtual for display name
VerifiedLeadSchema.virtual('displayName').get(function() {
  return this.name || 'Unknown';
});

// Method to update verification status
VerifiedLeadSchema.methods.markMobileVerified = function() {
  this.mobileVerified = true;
  this.mobileVerifiedAt = new Date();
  return this.save();
};

VerifiedLeadSchema.methods.markEmailVerified = function(email) {
  this.email = email;
  this.emailVerified = true;
  this.emailVerifiedAt = new Date();
  return this.save();
};

// Static method to find or create lead
VerifiedLeadSchema.statics.findOrCreateByMobile = async function(mobile, name, metadata = {}) {
  let lead = await this.findOne({ mobile });
  
  if (!lead) {
    lead = new this({
      name,
      mobile,
      mobileVerified: true,
      mobileVerifiedAt: new Date(),
      metadata
    });
    await lead.save();
  } else {
    // Update name if provided and not set
    if (name && !lead.name) {
      lead.name = name;
    }
    lead.mobileVerified = true;
    lead.mobileVerifiedAt = new Date();
    await lead.save();
  }
  
  return lead;
};

// Static method to update email verification
VerifiedLeadSchema.statics.updateEmailVerification = async function(mobile, email) {
  const lead = await this.findOne({ mobile });
  
  if (lead) {
    lead.email = email;
    lead.emailVerified = true;
    lead.emailVerifiedAt = new Date();
    await lead.save();
    return lead;
  }
  
  return null;
};

export default mongoose.models.VerifiedLead || mongoose.model('VerifiedLead', VerifiedLeadSchema);

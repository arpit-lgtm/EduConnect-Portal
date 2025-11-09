import connectDB from '../../lib/mongodb';
import User from '../../models/User';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get IP address from request
    const forwarded = req.headers['x-forwarded-for'];
    const ipAddress = forwarded 
      ? forwarded.split(',')[0].trim() 
      : req.headers['x-real-ip'] || req.connection.remoteAddress || 'Unknown';
    
    const userAgent = req.headers['user-agent'] || 'Unknown';
    
    const leadData = {
      ...req.body,
      ipAddress: ipAddress,
      userAgent: userAgent,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };

    console.log('📊 Lead data structure:', JSON.stringify(leadData, null, 2));

    // Try MongoDB first
    const db = await connectDB();
    
    if (db) {
      // Save to MongoDB
      try {
        const newUser = await User.create(leadData);
        console.log('✅ Lead saved to MongoDB:', newUser._id);
        
        return res.status(200).json({ 
          success: true, 
          message: 'Lead saved successfully to database',
          leadId: newUser._id
        });
      } catch (dbError) {
        console.error('❌ MongoDB save error:', dbError);
        // Fall through to file-based backup
      }
    }

    // Fallback to file-based storage if MongoDB fails or not configured
    console.log('⚠️ Using file-based storage (fallback)');
    const leadsDir = path.join(process.cwd(), 'data');
    const leadsFile = path.join(leadsDir, 'leads.json');

    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }

    let leads = [];
    if (fs.existsSync(leadsFile)) {
      const fileContent = fs.readFileSync(leadsFile, 'utf-8');
      leads = JSON.parse(fileContent);
    }

    leads.push(leadData);
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

    console.log('✅ Lead saved to file:', leadData.id);

    return res.status(200).json({ 
      success: true, 
      message: 'Lead saved successfully',
      leadId: leadData.id
    });

  } catch (error) {
    console.error('❌ Error saving lead:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error saving lead data' 
    });
  }
}

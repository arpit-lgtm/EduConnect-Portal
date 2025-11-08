import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
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

    // Path to store leads
    const leadsDir = path.join(process.cwd(), 'data');
    const leadsFile = path.join(leadsDir, 'leads.json');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }

    // Read existing leads
    let leads = [];
    if (fs.existsSync(leadsFile)) {
      const fileContent = fs.readFileSync(leadsFile, 'utf-8');
      leads = JSON.parse(fileContent);
    }

    // Add new lead
    leads.push(leadData);

    // Save updated leads
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

    console.log('✅ Lead saved successfully:', leadData.id);

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

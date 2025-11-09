import connectDB from '../../lib/mongodb';
import User from '../../models/User';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Try MongoDB first
    const db = await connectDB();
    
    if (db) {
      try {
        const leads = await User.find({}).sort({ timestamp: -1 }).lean();
        console.log(`✅ Fetched ${leads.length} leads from MongoDB`);
        return res.status(200).json({ leads });
      } catch (dbError) {
        console.error('❌ MongoDB fetch error:', dbError);
        // Fall through to file-based backup
      }
    }

    // Fallback to file-based storage
    console.log('⚠️ Using file-based storage (fallback)');
    const leadsFile = path.join(process.cwd(), 'data', 'leads.json');

    if (!fs.existsSync(leadsFile)) {
      return res.status(200).json({ leads: [] });
    }

    const fileContent = fs.readFileSync(leadsFile, 'utf-8');
    const leads = JSON.parse(fileContent);

    return res.status(200).json({ leads });

  } catch (error) {
    console.error('❌ Error fetching leads:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error fetching leads data' 
    });
  }
}

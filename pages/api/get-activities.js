import connectDB from '../../lib/mongodb';
import Activity from '../../models/Activity';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userEmail } = req.query;
    
    // Try MongoDB first
    const db = await connectDB();
    
    if (db) {
      try {
        let query = {};
        if (userEmail) {
          query = { userEmail: userEmail };
        }
        
        const activities = await Activity.find(query).sort({ timestamp: -1 }).lean();
        console.log(`✅ Fetched ${activities.length} activities from MongoDB`);
        return res.status(200).json({ activities });
      } catch (dbError) {
        console.error('❌ MongoDB activities fetch error:', dbError);
        // Fall through to file-based backup
      }
    }

    // Fallback to file-based storage
    console.log('⚠️ Using file-based storage for activities (fallback)');
    const activitiesFile = path.join(process.cwd(), 'data', 'user-activities.json');

    if (!fs.existsSync(activitiesFile)) {
      return res.status(200).json({ activities: [] });
    }

    const fileContent = fs.readFileSync(activitiesFile, 'utf-8');
    const activities = JSON.parse(fileContent);

    if (userEmail) {
      const filtered = activities.filter(activity => 
        activity.user?.email === userEmail
      );
      return res.status(200).json({ activities: filtered });
    }

    return res.status(200).json({ activities });

  } catch (error) {
    console.error('❌ Error fetching activities:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error fetching activities data' 
    });
  }
}

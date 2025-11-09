import connectDB from '../../lib/mongodb';
import Activity from '../../models/Activity';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const activityData = {
      ...req.body,
      timestamp: new Date().toISOString(),
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
    };

    // Try MongoDB first
    const db = await connectDB();
    
    if (db) {
      try {
        const newActivity = await Activity.create(activityData);
        console.log('✅ Activity tracked in MongoDB:', newActivity._id);
        
        return res.status(200).json({ 
          success: true, 
          message: 'Activity tracked successfully in database'
        });
      } catch (dbError) {
        console.error('❌ MongoDB activity save error:', dbError);
        // Fall through to file-based backup
      }
    }

    // Fallback to file-based storage
    console.log('⚠️ Using file-based storage for activity (fallback)');
    const activitiesDir = path.join(process.cwd(), 'data');
    const activitiesFile = path.join(activitiesDir, 'user-activities.json');

    if (!fs.existsSync(activitiesDir)) {
      fs.mkdirSync(activitiesDir, { recursive: true });
    }

    let activities = [];
    if (fs.existsSync(activitiesFile)) {
      const fileContent = fs.readFileSync(activitiesFile, 'utf-8');
      activities = JSON.parse(fileContent);
    }

    activities.push(activityData);
    fs.writeFileSync(activitiesFile, JSON.stringify(activities, null, 2));

    console.log('✅ Activity tracked in file:', activityData.action);

    return res.status(200).json({ 
      success: true, 
      message: 'Activity tracked successfully'
    });

  } catch (error) {
    console.error('❌ Error tracking activity:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error tracking activity' 
    });
  }
}

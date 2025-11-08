import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const activityData = {
      ...req.body,
      timestamp: new Date().toISOString(),
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
    };

    // Path to store activities
    const activitiesDir = path.join(process.cwd(), 'data');
    const activitiesFile = path.join(activitiesDir, 'user-activities.json');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(activitiesDir)) {
      fs.mkdirSync(activitiesDir, { recursive: true });
    }

    // Read existing activities
    let activities = [];
    if (fs.existsSync(activitiesFile)) {
      const fileContent = fs.readFileSync(activitiesFile, 'utf-8');
      activities = JSON.parse(fileContent);
    }

    // Add new activity
    activities.push(activityData);

    // Save updated activities
    fs.writeFileSync(activitiesFile, JSON.stringify(activities, null, 2));

    console.log('✅ Activity tracked:', activityData.action);

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

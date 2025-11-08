import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const activitiesFile = path.join(process.cwd(), 'data', 'user-activities.json');

    // Check if activities file exists
    if (!fs.existsSync(activitiesFile)) {
      return res.status(200).json({ activities: [] });
    }

    // Read and return activities
    const fileContent = fs.readFileSync(activitiesFile, 'utf-8');
    const activities = JSON.parse(fileContent);

    // If userEmail is provided, filter activities
    const { userEmail } = req.query;
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

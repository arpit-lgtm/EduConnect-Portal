import connectDB from '../../lib/mongodb';
import Activity from '../../models/Activity';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    // Get one activity to see the actual structure
    const sampleActivity = await Activity.findOne().lean();
    
    console.log('📊 SAMPLE ACTIVITY STRUCTURE:', JSON.stringify(sampleActivity, null, 2));
    
    return res.status(200).json({ 
      success: true,
      sampleActivity: sampleActivity,
      message: 'Check console for full structure'
    });

  } catch (error) {
    console.error('❌ Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: error.message
    });
  }
}

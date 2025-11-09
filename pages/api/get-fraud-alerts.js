import connectDB from '../../lib/mongodb';
import FraudAlert from '../../models/FraudAlert';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const { status } = req.query;
    
    let query = {};
    if (status) {
      query.status = status;
    }
    
    const alerts = await FraudAlert.find(query)
      .sort({ lastAttempt: -1 })
      .limit(100)
      .lean();
    
    console.log(`✅ Fetched ${alerts.length} fraud alerts from MongoDB`);
    
    return res.status(200).json({ 
      success: true,
      alerts 
    });

  } catch (error) {
    console.error('❌ Error fetching fraud alerts:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error fetching fraud alerts' 
    });
  }
}

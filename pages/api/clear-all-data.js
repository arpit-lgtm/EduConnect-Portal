import connectDB from '../../lib/mongodb';
import User from '../../models/User';
import Activity from '../../models/Activity';
import { requireAdminAuth } from '../../middleware/auth';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Connect to MongoDB
    await connectDB();

    // Delete all users
    const usersDeleted = await User.deleteMany({});
    console.log(`🗑️ Deleted ${usersDeleted.deletedCount} users`);

    // Delete all activities
    const activitiesDeleted = await Activity.deleteMany({});
    console.log(`🗑️ Deleted ${activitiesDeleted.deletedCount} activities`);

    return res.status(200).json({ 
      success: true, 
      message: 'All data cleared successfully',
      usersDeleted: usersDeleted.deletedCount,
      activitiesDeleted: activitiesDeleted.deletedCount
    });

  } catch (error) {
    console.error('❌ Error clearing data:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error clearing data',
      error: error.message
    });
  }
}

// ✅ PROTECTED: Requires admin authentication
export default requireAdminAuth(handler);

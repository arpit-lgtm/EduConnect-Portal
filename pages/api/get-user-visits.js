import dbConnect from '../../lib/mongodb';
import UserVisit from '../../models/UserVisit';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Fetch all visits for this user, sorted by date (newest first)
    const visits = await UserVisit.find({ 
      email: email.toLowerCase() 
    })
    .sort({ visitDate: -1 })
    .lean();

    // Get total count
    const totalVisits = visits.length;

    res.status(200).json({ 
      success: true, 
      visits,
      totalVisits
    });

  } catch (error) {
    console.error('Error fetching user visits:', error);
    res.status(500).json({ message: 'Error fetching visits', error: error.message });
  }
}

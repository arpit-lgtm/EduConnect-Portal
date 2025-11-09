import dbConnect from '../../lib/mongodb';
import UserVisit from '../../models/UserVisit';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { email, name, phone } = req.body;

    if (!email || !name || !phone) {
      return res.status(400).json({ message: 'Email, name, and phone are required' });
    }

    // Get IP address
    const ipAddress = req.headers['x-forwarded-for'] || 
                     req.headers['x-real-ip'] || 
                     req.connection.remoteAddress || 
                     'unknown';

    // Get user agent
    const userAgent = req.headers['user-agent'] || 'unknown';

    // Simple device detection
    let deviceInfo = 'Desktop';
    if (userAgent.toLowerCase().includes('mobile')) {
      deviceInfo = 'Mobile';
    } else if (userAgent.toLowerCase().includes('tablet')) {
      deviceInfo = 'Tablet';
    }

    // Create visit record
    const visit = await UserVisit.create({
      email: email.toLowerCase(),
      name,
      phone,
      visitDate: new Date(),
      ipAddress,
      userAgent,
      deviceInfo
    });

    // Get total visit count for this user
    const visitCount = await UserVisit.countDocuments({ 
      email: email.toLowerCase() 
    });

    res.status(200).json({ 
      success: true, 
      visitCount,
      message: `Visit #${visitCount} tracked successfully` 
    });

  } catch (error) {
    console.error('Error tracking visit:', error);
    res.status(500).json({ message: 'Error tracking visit', error: error.message });
  }
}

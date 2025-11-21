import dbConnect from '../../lib/mongodb';
import VerifiedLead from '../../models/VerifiedLead';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    // Fetch all verified leads, sorted by newest first
    const leads = await VerifiedLead.find({})
      .sort({ createdAt: -1 }) // Newest first
      .limit(1000) // Limit to last 1000 leads
      .lean(); // Return plain JavaScript objects

    // Format the response
    const formattedLeads = leads.map(lead => ({
      id: lead._id.toString(),
      name: lead.name,
      mobile: lead.mobile,
      email: lead.email || null,
      mobileVerified: lead.mobileVerified,
      emailVerified: lead.emailVerified,
      mobileVerifiedAt: lead.mobileVerifiedAt,
      emailVerifiedAt: lead.emailVerifiedAt,
      source: lead.source,
      status: lead.status,
      createdAt: lead.createdAt,
      updatedAt: lead.updatedAt
    }));

    res.status(200).json({
      success: true,
      count: formattedLeads.length,
      leads: formattedLeads
    });

  } catch (error) {
    console.error('Error fetching verified leads:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching leads',
      error: error.message
    });
  }
}

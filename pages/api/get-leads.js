import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const leadsFile = path.join(process.cwd(), 'data', 'leads.json');

    // Check if leads file exists
    if (!fs.existsSync(leadsFile)) {
      return res.status(200).json({ leads: [] });
    }

    // Read and return leads
    const fileContent = fs.readFileSync(leadsFile, 'utf-8');
    const leads = JSON.parse(fileContent);

    return res.status(200).json({ leads });

  } catch (error) {
    console.error('❌ Error fetching leads:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error fetching leads data' 
    });
  }
}

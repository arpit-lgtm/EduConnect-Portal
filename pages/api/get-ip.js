// API route to get user's IP address
export default function handler(req, res) {
  // Try multiple methods to get IP address
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded 
    ? forwarded.split(',')[0].trim() 
    : req.headers['x-real-ip'] || req.connection.remoteAddress || 'Unknown';

  // Get additional info
  const userAgent = req.headers['user-agent'] || 'Unknown';
  const timestamp = new Date().toISOString();

  res.status(200).json({ 
    ip,
    userAgent,
    timestamp
  });
}

// API route to get user's IP address with enhanced detection
export default async function handler(req, res) {
  // Try multiple methods to get real IP address
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  const remoteAddress = req.connection?.remoteAddress || req.socket?.remoteAddress;
  const cfConnectingIP = req.headers['cf-connecting-ip']; // Cloudflare
  const xClientIP = req.headers['x-client-ip'];
  
  let ip = 'Unknown';
  
  // Priority order for IP detection
  if (cfConnectingIP) {
    ip = cfConnectingIP; // Cloudflare (most reliable)
  } else if (forwarded) {
    // Handle comma-separated list (first one is usually the real client IP)
    ip = forwarded.split(',')[0].trim();
  } else if (realIP) {
    ip = realIP;
  } else if (xClientIP) {
    ip = xClientIP;
  } else if (remoteAddress) {
    // Remove IPv6 prefix if present
    ip = remoteAddress.replace('::ffff:', '');
  }
  
  // Clean up IP
  ip = ip.replace(/^::ffff:/, '').trim();
  
  // In development or localhost
  const isLocalhost = ip === '::1' || ip === '127.0.0.1' || ip === 'localhost' || ip.startsWith('192.168.') || ip.startsWith('10.');
  
  if (isLocalhost) {
    ip = '127.0.0.1 (localhost)';
  }

  // Get additional client info
  const userAgent = req.headers['user-agent'] || 'Unknown';
  const acceptLanguage = req.headers['accept-language'] || 'Unknown';
  const timestamp = new Date().toISOString();

  // Get geolocation info for non-localhost IPs
  let locationInfo = null;
  if (!isLocalhost && ip !== 'Unknown') {
    try {
      // Using a free IP geolocation service (ip-api.com)
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city,isp,org,as`);
      if (geoResponse.ok) {
        locationInfo = await geoResponse.json();
      }
    } catch (error) {
      console.log('Could not fetch geolocation:', error.message);
    }
  }

  console.log('🔍 Enhanced IP Detection:', {
    forwarded: req.headers['x-forwarded-for'],
    realIP: req.headers['x-real-ip'],
    cfConnectingIP: req.headers['cf-connecting-ip'],
    remoteAddress: req.connection?.remoteAddress,
    finalIP: ip,
    location: locationInfo
  });

  const result = { 
    ip,
    userAgent,
    acceptLanguage,
    timestamp,
    isLocalhost,
    location: locationInfo
  };

  res.status(200).json(result);
}

// Server-side API to serve university ratings database
// This keeps the ratings data secure and not exposed in public folder

import fs from 'fs';
import path from 'path';

// Rate limiting - simple in-memory store
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 15; // 15 requests per minute

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];
  
  // Remove old requests outside the window
  const recentRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get client IP for rate limiting
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  
  // Check rate limit
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    // Read the ratings database from private data folder
    const filePath = path.join(process.cwd(), 'data', 'private', 'university-ratings-database.js');
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Ratings database not found' });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Send as JavaScript (the file is a JS module)
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.setHeader('Content-Type', 'application/javascript');
    return res.send(fileContent);

  } catch (error) {
    console.error('Error reading ratings database:', error);
    return res.status(500).json({ error: 'Failed to load ratings database' });
  }
}

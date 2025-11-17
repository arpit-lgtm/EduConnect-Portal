// Server-side API to serve comprehensive university database
// This keeps the data secure and not exposed in public folder

import fs from 'fs';
import path from 'path';

// Rate limiting - simple in-memory store
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 10; // 10 requests per minute

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
    // Read the comprehensive database from private data folder
    const filePath = path.join(process.cwd(), 'data', 'private', 'comprehensive-unified-database-COMPLETE.js');
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Database not found' });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract the JavaScript object/array from the file
    // The file likely contains: window.COMPREHENSIVE_UNIVERSITIES = [...];
    // We need to extract just the data part
    
    let data;
    try {
      // Try to evaluate the JavaScript to extract the data
      // This is a simplified approach - adjust based on your actual file structure
      const dataMatch = fileContent.match(/=\s*(\[[\s\S]*\]);?\s*$/);
      if (dataMatch) {
        data = JSON.parse(dataMatch[1]);
      } else {
        // If pattern doesn't match, return the raw content as JavaScript
        res.setHeader('Content-Type', 'application/javascript');
        return res.send(fileContent);
      }
    } catch (parseError) {
      // If we can't parse it as JSON, send as JavaScript
      res.setHeader('Content-Type', 'application/javascript');
      return res.send(fileContent);
    }

    // Send as JSON with caching headers
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.setHeader('Content-Type', 'application/json');
    return res.json(data);

  } catch (error) {
    console.error('Error reading comprehensive database:', error);
    return res.status(500).json({ error: 'Failed to load database' });
  }
}

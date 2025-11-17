/**
 * Authentication Middleware for Protected API Routes
 * 
 * Usage:
 * import { requireAdminAuth } from '../../middleware/auth';
 * export default requireAdminAuth(handler);
 */

/**
 * Admin authentication middleware
 * Checks for valid admin secret token in Authorization header
 */
export function requireAdminAuth(handler) {
  return async (req, res) => {
    try {
      // Get authorization header
      const authHeader = req.headers.authorization;
      
      if (!authHeader) {
        return res.status(401).json({ 
          success: false,
          message: 'Unauthorized - No authorization header provided' 
        });
      }

      // Extract token (supports "Bearer TOKEN" or just "TOKEN")
      const token = authHeader.startsWith('Bearer ') 
        ? authHeader.slice(7) 
        : authHeader;

      // Verify against admin secret
      const adminSecret = process.env.ADMIN_SECRET_KEY;
      
      if (!adminSecret) {
        console.error('⚠️ ADMIN_SECRET_KEY not configured in environment variables');
        return res.status(500).json({ 
          success: false,
          message: 'Server configuration error' 
        });
      }

      if (token !== adminSecret) {
        return res.status(403).json({ 
          success: false,
          message: 'Forbidden - Invalid credentials' 
        });
      }

      // Authentication successful, proceed to handler
      return handler(req, res);

    } catch (error) {
      console.error('❌ Authentication error:', error);
      return res.status(500).json({ 
        success: false,
        message: 'Authentication error',
        error: error.message 
      });
    }
  };
}

/**
 * Rate limiting configuration per IP
 * Simple in-memory rate limiter
 */
const rateLimitMap = new Map();

export function rateLimit(options = {}) {
  const { 
    windowMs = 15 * 60 * 1000, // 15 minutes
    maxRequests = 100, // 100 requests per window
    message = 'Too many requests, please try again later'
  } = options;

  return (handler) => {
    return async (req, res) => {
      // Get client IP
      const ip = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.connection.remoteAddress || 
                 'unknown';

      const now = Date.now();
      const clientData = rateLimitMap.get(ip) || { count: 0, resetTime: now + windowMs };

      // Reset if window expired
      if (now > clientData.resetTime) {
        clientData.count = 0;
        clientData.resetTime = now + windowMs;
      }

      // Increment request count
      clientData.count++;
      rateLimitMap.set(ip, clientData);

      // Check if limit exceeded
      if (clientData.count > maxRequests) {
        return res.status(429).json({ 
          success: false,
          message,
          retryAfter: Math.ceil((clientData.resetTime - now) / 1000) 
        });
      }

      // Add rate limit headers
      res.setHeader('X-RateLimit-Limit', maxRequests);
      res.setHeader('X-RateLimit-Remaining', Math.max(0, maxRequests - clientData.count));
      res.setHeader('X-RateLimit-Reset', new Date(clientData.resetTime).toISOString());

      // Proceed to handler
      return handler(req, res);
    };
  };
}

/**
 * Combined middleware: Rate limiting + Admin authentication
 */
export function requireAdminAuthWithRateLimit(handler, rateLimitOptions) {
  return rateLimit(rateLimitOptions)(requireAdminAuth(handler));
}

// Cleanup old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 60 * 1000);

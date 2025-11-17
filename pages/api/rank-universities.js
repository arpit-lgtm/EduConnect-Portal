// SERVER-SIDE ONLY - Course Details University Ranking & Filtering
// Protects your business logic from browser inspection

import fs from 'fs';
import path from 'path';

// Rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000;
const MAX_REQUESTS = 30;

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];
  const recentRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

// PROTECTED: Premium institute detection
function isPremiumInstitute(uniName) {
  const premiumInstitutes = ['IIM', 'IIT', 'IISC', 'INDIAN INSTITUTE OF MANAGEMENT', 'INDIAN INSTITUTE OF TECHNOLOGY', 'INDIAN INSTITUTE OF SCIENCE'];
  const nameUpper = uniName.toUpperCase();
  return premiumInstitutes.some(prefix => nameUpper.includes(prefix));
}

// PROTECTED: University ranking and filtering algorithm
function rankAndFilterUniversities(universities, courseType, courseTitle, specialization) {
  // Determine course characteristics
  const isUGCourse = ['BBA', 'BCA', 'B.COM', 'BA', 'B.SC', 'B.TECH', 'BTECH'].some(ug => 
    courseType.toUpperCase().includes(ug)
  );
  
  const isOnlineCourse = courseTitle.toLowerCase().includes('online');
  
  const isStudyAbroad = courseTitle.toLowerCase().includes('study abroad') || 
                        courseTitle.toLowerCase().includes('usa') || 
                        courseTitle.toLowerCase().includes('uk') ||
                        courseTitle.toLowerCase().includes('canada') ||
                        courseTitle.toLowerCase().includes('australia');
  
  let targetCountry = null;
  if (isStudyAbroad) {
    if (courseTitle.includes('USA')) targetCountry = 'USA';
    else if (courseTitle.includes('UK')) targetCountry = 'UK';
    else if (courseTitle.includes('Canada')) targetCountry = 'Canada';
    else if (courseTitle.includes('Australia')) targetCountry = 'Australia';
    else if (courseTitle.includes('Singapore')) targetCountry = 'Singapore';
    else if (courseTitle.includes('Dubai')) targetCountry = 'Dubai';
    else if (courseTitle.includes('Europe')) targetCountry = 'Europe';
  }

  const overseasKeywords = ['USA', 'UK', 'Canada', 'Australia', 'Singapore', 'England', 'California', 'Massachusetts', 'Florida', 'Wisconsin', 'Texas', 'Michigan', 'Minnesota', 'Boston', 'London', 'Melbourne', 'Toronto', 'Ontario', 'Victoria', 'Durham', 'Germany', 'Berlin', 'Munich', 'Dubai', 'UAE', 'France', 'Paris', 'Spain', 'Netherlands'];

  // CRITICAL FILTERING LOGIC (SERVER-SIDE ONLY)
  let filtered = universities.filter(uni => {
    const isOverseas = overseasKeywords.some(keyword => 
      uni.location?.includes(keyword)
    );

    // RULE 1: Exclude IIMs/IITs from UG courses
    if (isUGCourse && isPremiumInstitute(uni.name)) {
      return false;
    }

    // RULE 2: Exclude IIMs/IITs from Online courses  
    if (isOnlineCourse && isPremiumInstitute(uni.name)) {
      return false;
    }

    // For Study Abroad: ONLY overseas universities
    if (isStudyAbroad) {
      if (!isOverseas) return false;
      
      if (targetCountry) {
        if (targetCountry === 'Europe') {
          return uni.location?.includes('UK') || 
                 uni.location?.includes('England') ||
                 uni.location?.includes('France') || 
                 uni.location?.includes('Spain') || 
                 uni.location?.includes('Netherlands') ||
                 uni.location?.includes('Germany');
        }
        return uni.location?.includes(targetCountry);
      }
      
      return true;
    }
    
    // For regular courses: ONLY Indian universities
    if (isOverseas) return false;

    return true;
  });

  // Calculate specialization scores
  const specializationKeywords = specialization ? specialization.toUpperCase().split(/[\s,&]+/).filter(w => w.length > 2) : [];
  
  filtered = filtered.map(uni => {
    let specializationBonus = 0;
    
    if (specializationKeywords.length > 0 && uni.courses) {
      const courseArray = Array.isArray(uni.courses) ? uni.courses : Object.keys(uni.courses);
      const courseMatches = courseArray.filter(c => {
        const cStr = typeof c === 'string' ? c : c.name;
        return specializationKeywords.some(kw => cStr.toUpperCase().includes(kw));
      });
      specializationBonus = courseMatches.length * 500;
    }
    
    return {
      ...uni,
      _specializationScore: specializationBonus,
      _randomScore: Math.random() * 10000
    };
  });

  // CRITICAL RANKING ALGORITHM (SERVER-SIDE ONLY)
  const sorted = filtered.sort((a, b) => {
    // Primary: Rating tier (0.4 intervals)
    const aTier = Math.floor((a.rating || 3.5) / 0.4);
    const bTier = Math.floor((b.rating || 3.5) / 0.4);
    if (aTier !== bTier) return bTier - aTier;
    
    // Secondary: Specialization match
    const specDiff = b._specializationScore - a._specializationScore;
    if (Math.abs(specDiff) > 100) return specDiff;
    
    // Tertiary: Random within tier
    return b._randomScore - a._randomScore;
  });

  // Remove temp scores
  return sorted.map(({ _specializationScore, _randomScore, ...uni }) => uni);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  try {
    const { courseType, courseTitle, specialization, limit = 7 } = req.body;

    if (!courseType) {
      return res.status(400).json({ error: 'courseType is required' });
    }

    // Load university database
    const filePath = path.join(process.cwd(), 'data', 'private', 'comprehensive-unified-database-COMPLETE.js');
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Database not found' });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const dbMatch = fileContent.match(/const\s+universityDatabase\s*=\s*(\[[\s\S]*?\]);/);
    
    let universityDatabase = [];
    if (dbMatch) {
      universityDatabase = eval(dbMatch[1]);
    }

    // Apply ranking and filtering (SERVER-SIDE PROTECTED ALGORITHM)
    const rankedUniversities = rankAndFilterUniversities(
      universityDatabase,
      courseType,
      courseTitle || courseType,
      specialization
    );

    // Return top N universities
    const topUniversities = rankedUniversities.slice(0, limit);

    return res.status(200).json({
      universities: topUniversities,
      total: rankedUniversities.length,
      showing: topUniversities.length
    });

  } catch (error) {
    console.error('Error ranking universities:', error);
    return res.status(500).json({ error: 'Failed to rank universities' });
  }
}

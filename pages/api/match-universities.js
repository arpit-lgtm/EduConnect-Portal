// SERVER-SIDE ONLY - University Matching Algorithm
// This protects your business logic from being visible in browser

import fs from 'fs';
import path from 'path';

// Rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 20; // 20 requests per minute

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

// PROTECTED: University matching algorithm - Updated with smart course extraction
function matchUniversities(universitiesData, formData) {
  if (!universitiesData || universitiesData.length === 0) {
    console.log('❌ No universities data provided');
    return [];
  }

  const courseNameToMatch = formData.preferredCourse;
  
  console.log('🔍 MATCHING FOR COURSE:', courseNameToMatch);
  console.log('📊 TOTAL UNIVERSITIES TO CHECK:', universitiesData.length);
  
  if (!courseNameToMatch) {
    console.log('❌ NO COURSE NAME PROVIDED');
    return [];
  }

  let filtered = universitiesData.map(uni => {
    let score = 0;

    // CRITICAL LOGIC: Course matching with smart extraction
    let hasCourse = false;
    let extractedBaseCourse = courseNameToMatch;
    
    // Extract base course from display name
    // "1-Year MBA Online" -> "MBA", "Executive MBA" -> "MBA", "Distance MBA (45 specializations)" -> "MBA"
    const coursePatterns = [
      { regex: /\b(MBA|MCA|BBA|BCA|B\.Tech|M\.Tech|B\.Com|M\.Com|BA|MA|B\.Sc|M\.Sc|B\.Ed|M\.Ed|PhD|PGDM|LLB|LLM)\b/i, extract: 1 },
    ];
    
    for (const pattern of coursePatterns) {
      const match = courseNameToMatch.match(pattern.regex);
      if (match) {
        extractedBaseCourse = match[pattern.extract];
        console.log(`🎯 Extracted base course: "${extractedBaseCourse}" from "${courseNameToMatch}"`);
        break;
      }
    }
    
    if (courseNameToMatch && uni.courses) {
      if (Array.isArray(uni.courses)) {
        hasCourse = uni.courses.some(course => {
          const courseLower = course.toLowerCase();
          const searchLower = courseNameToMatch.toLowerCase();
          const baseLower = extractedBaseCourse.toLowerCase();
          
          // Direct match
          if (courseLower === searchLower) return true;
          if (courseLower === baseLower) return true;
          
          // Contains match (both directions)
          if (searchLower.includes(courseLower)) return true;
          if (courseLower.includes(searchLower)) return true;
          
          // Base course match
          if (courseLower.includes(baseLower)) return true;
          
          return false;
        });
      } else if (typeof uni.courses === 'object') {
        hasCourse = Object.keys(uni.courses).some(courseKey => {
          const courseLower = courseKey.toLowerCase();
          const searchLower = courseNameToMatch.toLowerCase();
          const baseLower = extractedBaseCourse.toLowerCase();
          
          // Direct match
          if (courseLower === searchLower) return true;
          if (courseLower === baseLower) return true;
          
          // Contains match (both directions)
          if (searchLower.includes(courseLower)) return true;
          if (courseLower.includes(searchLower)) return true;
          
          // Base course match
          if (courseLower.includes(baseLower)) return true;
          
          return false;
        });
      }
      
      if (hasCourse) {
        score += 40;
        
        // CRITICAL LOGIC: Specialization matching with flexible rules
        if (formData.specialization && uni.courses && typeof uni.courses === 'object') {
          // Try to find course data using both the original name and extracted base course
          const courseData = uni.courses[courseNameToMatch] || 
                            uni.courses[extractedBaseCourse] ||
                            Object.values(uni.courses).find(course => course && course.specializations);
          
          if (courseData && courseData.specializations) {
            const targetSpec = formData.specialization.toLowerCase();
            const hasSpecialization = courseData.specializations.some(spec => {
              const specLower = spec.toLowerCase();
              
              if (targetSpec.includes('hr') || targetSpec.includes('human resources')) {
                return specLower.includes('hr') || 
                       specLower.includes('human resource') ||
                       specLower.includes('human resources') ||
                       specLower.includes('personnel');
              }
              
              if (targetSpec.includes('finance')) {
                return specLower.includes('finance') || 
                       specLower.includes('banking') ||
                       specLower.includes('financial');
              }
              
              if (targetSpec.includes('marketing')) {
                return specLower.includes('marketing') ||
                       specLower.includes('sales') ||
                       specLower.includes('digital marketing');
              }
              
              return specLower.includes(targetSpec) || 
                     targetSpec.includes(specLower) ||
                     specLower === 'general';
            });
            
            if (hasSpecialization) {
              score += 20;
            }
          }
        }
      }
    }

    if (courseNameToMatch && !hasCourse) {
      return null;
    }

    // CRITICAL LOGIC: Location matching
    if (formData.preferredLocation && 
        formData.preferredLocation !== 'any' && 
        formData.preferredLocation !== 'any-state') {
      
      const normalize = (s) => (s || '').toString().toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ').trim();
      const targetLocation = normalize(formData.preferredLocation);
      
      let uniState = '';
      let uniLocation = normalize(uni.location || '');
      
      if (uni.location && uni.location.includes(',')) {
        const parts = uni.location.split(',').map(p => normalize(p.trim()));
        uniState = parts[1] || parts[0];
      } else {
        uniState = normalize(uni.state || uni.location || '');
      }
      
      console.log(`🗺️ Location Check: Target="${targetLocation}" | Uni="${uni.name}" | State="${uniState}" | Location="${uniLocation}"`);
      
      const locationMatch = uniState.includes(targetLocation) || 
                           targetLocation.includes(uniState) ||
                           uniLocation.includes(targetLocation) ||
                           targetLocation.includes(uniLocation);
      
      console.log(`   ${locationMatch ? '✅ MATCH' : '❌ NO MATCH'}`);
      
      if (!locationMatch) {
        return null;
      }
      score += 15;
    } else {
      console.log(`⚠️ Location filter SKIPPED: preferredLocation="${formData.preferredLocation}"`);
      score += 5;
    }

    // CRITICAL LOGIC: Study mode matching
    if (formData.studyMode) {
      let hasMatchingMode = false;
      
      const normalizeMode = (str) => str.toLowerCase().trim().replace(/-/g, ' ').replace(/\s+/g, ' ');
      const targetMode = normalizeMode(formData.studyMode);
      
      if (uni.mode && Array.isArray(uni.mode)) {
        hasMatchingMode = uni.mode.some(mode => {
          const uniMode = normalizeMode(mode);
          const modeMatch = uniMode.includes(targetMode) || 
                           targetMode.includes(uniMode) ||
                           uniMode.split(' ').some(word => targetMode.includes(word)) ||
                           targetMode.split(' ').some(word => uniMode.includes(word));
          return modeMatch;
        });
      }
      
      if (!hasMatchingMode && uni.programs && Array.isArray(uni.programs)) {
        hasMatchingMode = uni.programs.some(program => {
          if (program.mode) {
            const progMode = normalizeMode(program.mode);
            return progMode.includes(targetMode) || 
                   targetMode.includes(progMode) ||
                   progMode.split(' ').some(word => targetMode.includes(word)) ||
                   targetMode.split(' ').some(word => progMode.includes(word));
          }
          return false;
        });
      }
      
      if (hasMatchingMode) {
        score += 20;
      } else {
        score -= 5;
      }
    }

    // CRITICAL LOGIC: Degree type matching
    if (formData.degreeType && uni.programs && Array.isArray(uni.programs)) {
      const degreeMap = {
        'UG Courses': 'undergraduate',
        'PG Courses': 'postgraduate',
        'Doctorate/Ph.D.': 'doctorate',
        'Executive Education': 'executive'
      };
      const targetLevel = degreeMap[formData.degreeType];
      if (targetLevel) {
        const hasMatchingLevel = uni.programs.some(program =>
          program.level && program.level.toLowerCase().includes(targetLevel)
        );
        if (hasMatchingLevel) score += 25;
      }
    }

    // CRITICAL LOGIC: Budget range matching
    if (formData.budgetRange && uni.fees) {
      const budgetRanges = {
        'Below ₹50,000': { min: 0, max: 50000 },
        '₹50,000 - ₹1,00,000': { min: 50000, max: 100000 },
        '₹1,00,000 - ₹2,00,000': { min: 100000, max: 200000 },
        '₹2,00,000 - ₹5,00,000': { min: 200000, max: 500000 },
        'Above ₹5,00,000': { min: 500000, max: 10000000 }
      };
      const range = budgetRanges[formData.budgetRange];
      
      let courseFee = null;
      if (typeof uni.fees === 'object' && !Array.isArray(uni.fees)) {
        courseFee = uni.fees[courseNameToMatch] || 
                   uni.fees[courseNameToMatch.toUpperCase()] ||
                   uni.fees[courseNameToMatch.toLowerCase()];
      } else {
        courseFee = uni.fees;
      }
      
      if (range && courseFee && courseFee >= range.min && courseFee <= range.max) {
        score += 20;
      }
    }

    if (score === 0) score = 10;

    return {
      ...uni,
      matchScore: score
    };
  }).filter(uni => uni !== null);

  console.log('✅ Filtered universities with course:', filtered.length);
  console.log('📝 Sample matches:', filtered.slice(0, 3).map(u => ({ name: u.name, score: u.matchScore })));

  filtered.sort((a, b) => b.matchScore - a.matchScore);
  
  return filtered.slice(0, 100);
}

export default async function handler(req, res) {
  console.log('🚀 ===== MATCH UNIVERSITIES API CALLED =====');
  console.log('🕒 Time:', new Date().toISOString());
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  try {
    const { formData, filterByLocation } = req.body;

    console.log('📥 REQUEST BODY:', JSON.stringify(req.body, null, 2));
    console.log('📝 FORM DATA:', JSON.stringify(formData, null, 2));

    if (!formData || !formData.preferredCourse) {
      console.log('❌ VALIDATION FAILED - Missing formData or preferredCourse');
      return res.status(400).json({ error: 'Invalid request: formData and preferredCourse required' });
    }

    // Load university database
    const filePath = path.join(process.cwd(), 'data', 'private', 'comprehensive-unified-database-COMPLETE.js');
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Database not found' });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract university database - support both const and var declarations
    const dbMatch = fileContent.match(/(const|var)\s+universityDatabase\s*=\s*(\[[\s\S]*?\]);/);
    let universityDatabase = [];
    
    if (dbMatch) {
      try {
        // Use capture group [2] for the array content (since [1] is const|var)
        universityDatabase = eval(dbMatch[2]);
        console.log(`✅ LOADED ${universityDatabase.length} UNIVERSITIES FROM DATABASE`);
      } catch (error) {
        console.log('❌ EVAL FAILED, trying fallback method:', error.message);
        // Fallback: execute the entire file content and extract the variable
        try {
          const executeDb = new Function(fileContent + '; return universityDatabase;');
          universityDatabase = executeDb();
          console.log(`✅ LOADED ${universityDatabase.length} UNIVERSITIES (fallback method)`);
        } catch (fallbackError) {
          console.log('❌ FALLBACK ALSO FAILED:', fallbackError.message);
        }
      }
    } else {
      console.log('❌ REGEX MATCH FAILED - trying fallback method');
      // Try fallback method even if regex didn't match
      try {
        const executeDb = new Function(fileContent + '; return universityDatabase;');
        universityDatabase = executeDb();
        console.log(`✅ LOADED ${universityDatabase.length} UNIVERSITIES (fallback method)`);
      } catch (fallbackError) {
        console.log('❌ FALLBACK ALSO FAILED:', fallbackError.message);
      }
    }

    // Exclude duplicates
    const excludeUniversities = [
      'CDE Amu',
      'IIM Indore Timespro',
      'UPES (Online)',
      'Svu Gajraula Wilp',
      'SRM University (Online)',
      'Symbiosis Distance Learning',
      'Sgvu Engineering',
      'Smude Sikkim Manipal University',
      'Mahe Manipal',
      'Kuk Dde',
      'Jain University (Distance Education)',
      'Jgu (Online) Coursera'
    ];

    const filteredDatabase = universityDatabase.filter(uni => {
      const nameLower = uni.name.toLowerCase();
      return !excludeUniversities.some(excluded => 
        nameLower.includes(excluded.toLowerCase())
      );
    });

    // Apply matching algorithm (SERVER-SIDE ONLY - NOT VISIBLE TO BROWSER)
    const matchedUniversities = matchUniversities(filteredDatabase, formData);

    return res.status(200).json({
      universities: matchedUniversities,
      total: matchedUniversities.length
    });

  } catch (error) {
    console.error('Error matching universities:', error);
    return res.status(500).json({ error: 'Failed to match universities' });
  }
}

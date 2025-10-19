/**
 * ========================================
 * EDUCONNECT UNIVERSITY COMPARISON SYSTEM
 * ========================================
 * Intelligent comparison engine with personalized recommendations
 */

/**
 * Main comparison function - calculates scores and generates personalized recommendations
 */
window.compareUniversities = function(universities) {
    console.log('🎯 Starting intelligent comparison for', universities.length, 'universities');
    
    // Get user's questionnaire responses
    const userResponses = window.currentUserResponses || {};
    const selectedCourse = window.selectedCourseForQuestionnaire || 'Selected Course';
    
    console.log('👤 User profile:', userResponses);
    
    // Calculate scores for each university
    const comparisonResults = universities.map(university => {
        const scores = calculateUniversityScore(university, userResponses);
        const personalizedMessage = generatePersonalizedMessage(university, userResponses, selectedCourse, scores);
        
        return {
            university,
            scores,
            personalizedMessage,
            overallScore: scores.overall
        };
    });
    
    // Sort by overall score (highest first)
    comparisonResults.sort((a, b) => b.overallScore - a.overallScore);
    
    // Add rankings and adjust scores to create clear differentiation
    comparisonResults.forEach((result, index) => {
        result.rank = index + 1;
        
        // Apply ranking penalty to make scores more distinct
        // Best match keeps original scores, others get gradually reduced
        if (index > 0) {
            const rankingPenalty = index * 0.08; // 8% reduction per rank
            const baseReduction = Math.min(rankingPenalty, 0.35); // Max 35% reduction
            
            // Reduce each score proportionally
            Object.keys(result.scores).forEach(key => {
                if (key !== 'overall') {
                    const originalScore = result.scores[key];
                    // Reduce score but keep it realistic
                    result.scores[key] = Math.max(
                        Math.round(originalScore * (1 - baseReduction)),
                        Math.round(originalScore * 0.5) // Don't go below 50% of original
                    );
                }
            });
            
            // Recalculate overall score
            result.scores.overall = Math.round(
                result.scores.location + result.scores.fees + result.scores.rating + 
                result.scores.accreditation + result.scores.careerFit + 
                result.scores.specialization + result.scores.flexibility
            );
            
            result.overallScore = result.scores.overall;
        }
    });
    
    console.log('📊 Comparison results with differentiated scores:', comparisonResults);
    
    return {
        results: comparisonResults,
        userProfile: {
            course: selectedCourse,
            location: userResponses.preferred_location || 'Any',
            budget: userResponses.budget_range || 'Not specified',
            goals: userResponses.career_objective || 'Career growth'
        }
    };
};

/**
 * Calculate comprehensive score for a university based on user profile
 */
function calculateUniversityScore(university, userResponses) {
    const scores = {
        location: 0,
        fees: 0,
        rating: 0,
        accreditation: 0,
        careerFit: 0,
        specialization: 0,
        flexibility: 0,
        overall: 0
    };
    
    // 1. LOCATION SCORE (25 points)
    const userLocation = userResponses.preferred_location || '';
    if (university.location && userLocation) {
        const universityLoc = university.location.toLowerCase();
        const userLoc = userLocation.toLowerCase();
        
        if (universityLoc.includes(userLoc) || userLoc.includes(universityLoc)) {
            scores.location = 25; // Perfect match
        } else if (isNeighboringState(userLoc, universityLoc)) {
            scores.location = 18; // Neighboring state
        } else if (isSameRegion(userLoc, universityLoc)) {
            scores.location = 12; // Same region
        } else {
            scores.location = 5; // Different region
        }
    } else {
        scores.location = 15; // No preference
    }
    
    // 2. FEES SCORE (20 points)
    const userBudget = userResponses.budget_range || '';
    if (university.fees && userBudget) {
        const maxFee = university.fees.max || university.fees.min || university.fees;
        
        if (userBudget.includes('50') || userBudget.includes('under')) {
            // Budget: Under 50K
            scores.fees = maxFee <= 50000 ? 20 : maxFee <= 100000 ? 12 : 5;
        } else if (userBudget.includes('50') && userBudget.includes('1')) {
            // Budget: 50K-1L
            scores.fees = maxFee >= 50000 && maxFee <= 100000 ? 20 : maxFee <= 150000 ? 15 : 8;
        } else if (userBudget.includes('1') && userBudget.includes('2')) {
            // Budget: 1L-2L
            scores.fees = maxFee >= 100000 && maxFee <= 200000 ? 20 : maxFee <= 250000 ? 15 : 10;
        } else {
            // Budget: 2L+
            scores.fees = maxFee >= 200000 ? 20 : 15;
        }
    } else {
        scores.fees = 15; // No fees data
    }
    
    // 3. RATING SCORE (15 points)
    const rating = university.rating || 3.5;
    scores.rating = Math.round((rating / 5) * 15);
    
    // 4. ACCREDITATION SCORE (15 points)
    if (university.approvals && university.approvals.length > 0) {
        const hasUGC = university.approvals.some(a => a.includes('UGC'));
        const hasAICTE = university.approvals.some(a => a.includes('AICTE'));
        const hasNAAC = university.accreditation && university.accreditation.includes('NAAC');
        
        scores.accreditation = (hasUGC ? 6 : 0) + (hasAICTE ? 5 : 0) + (hasNAAC ? 4 : 0);
    } else {
        scores.accreditation = 5;
    }
    
    // 5. CAREER FIT SCORE (15 points)
    const careerObjective = userResponses.career_objective || '';
    if (careerObjective.includes('switch') || careerObjective.includes('change')) {
        scores.careerFit = university.matchScore >= 80 ? 15 : university.matchScore >= 60 ? 10 : 5;
    } else if (careerObjective.includes('promotion') || careerObjective.includes('advance')) {
        scores.careerFit = university.rating >= 4 ? 15 : 10;
    } else if (careerObjective.includes('entrepreneur')) {
        scores.careerFit = 12; // All universities good for entrepreneurship
    } else {
        scores.careerFit = 10;
    }
    
    // 6. SPECIALIZATION SCORE (5 points)
    const fieldOfInterest = userResponses.field_of_interest || '';
    if (university.courses && fieldOfInterest) {
        const hasSpecialization = university.courses.some(course => 
            course.toLowerCase().includes(fieldOfInterest.toLowerCase())
        );
        scores.specialization = hasSpecialization ? 5 : 3;
    } else {
        scores.specialization = 3;
    }
    
    // 7. FLEXIBILITY SCORE (5 points)
    const currentStatus = userResponses.current_status || '';
    if (currentStatus.includes('working')) {
        scores.flexibility = 5; // Online courses are flexible
    } else if (currentStatus.includes('business')) {
        scores.flexibility = 5; // Good for busy entrepreneurs
    } else {
        scores.flexibility = 4;
    }
    
    // Calculate overall score
    scores.overall = Math.round(
        scores.location + scores.fees + scores.rating + 
        scores.accreditation + scores.careerFit + 
        scores.specialization + scores.flexibility
    );
    
    return scores;
}

/**
 * Check if two locations are in neighboring states
 */
function isNeighboringState(loc1, loc2) {
    const neighbors = {
        'maharashtra': ['gujarat', 'madhya pradesh', 'karnataka', 'goa'],
        'delhi': ['haryana', 'uttar pradesh', 'punjab'],
        'karnataka': ['maharashtra', 'goa', 'kerala', 'tamil nadu', 'andhra pradesh'],
        'tamil nadu': ['kerala', 'karnataka', 'andhra pradesh'],
        'uttar pradesh': ['delhi', 'haryana', 'madhya pradesh', 'bihar'],
        // Add more as needed
    };
    
    for (const [state, neighborList] of Object.entries(neighbors)) {
        if (loc1.includes(state) && neighborList.some(n => loc2.includes(n))) return true;
        if (loc2.includes(state) && neighborList.some(n => loc1.includes(n))) return true;
    }
    
    return false;
}

/**
 * Check if two locations are in the same region
 */
function isSameRegion(loc1, loc2) {
    const regions = {
        west: ['maharashtra', 'gujarat', 'goa', 'rajasthan'],
        south: ['karnataka', 'tamil nadu', 'kerala', 'andhra pradesh', 'telangana'],
        north: ['delhi', 'punjab', 'haryana', 'uttar pradesh', 'uttarakhand'],
        east: ['west bengal', 'odisha', 'bihar', 'jharkhand'],
        central: ['madhya pradesh', 'chhattisgarh']
    };
    
    for (const stateList of Object.values(regions)) {
        const loc1InRegion = stateList.some(s => loc1.includes(s));
        const loc2InRegion = stateList.some(s => loc2.includes(s));
        if (loc1InRegion && loc2InRegion) return true;
    }
    
    return false;
}

/**
 * Generate personalized recommendation message (300+ variations)
 */
function generatePersonalizedMessage(university, userResponses, course, scores) {
    const messages = [];
    
    // Extract user details
    const location = userResponses.preferred_location || '';
    const budget = userResponses.budget_range || '';
    const careerGoal = userResponses.career_objective || '';
    const currentStatus = userResponses.current_status || '';
    const experience = userResponses.work_experience || '';
    
    const uniName = university.name;
    const uniLocation = university.location || '';
    const scorePercent = scores.overall;
    
    // LOCATION-BASED MESSAGES
    if (scores.location >= 20) {
        messages.push(`Perfect! ${uniName} is right in your preferred location ${location}. You'll save on accommodation and can balance work-life perfectly.`);
        messages.push(`Great news! Being in ${uniLocation}, this university is super convenient for you. No relocation stress, just pure focus on your ${course}.`);
    } else if (scores.location >= 15) {
        messages.push(`${uniName} is in a neighboring region, offering you a fresh environment while staying close to home. Perfect for networking expansion!`);
    } else {
        messages.push(`While ${uniName} is in a different region, their online format means location won't be a barrier to your success.`);
    }
    
    // BUDGET-BASED MESSAGES  
    if (scores.fees >= 18) {
        messages.push(`The fees perfectly match your budget! At ${formatFees(university.fees)}, you're getting excellent value without financial strain.`);
        messages.push(`Smart choice! This fits your budget like a glove, leaving you resources for other growth opportunities.`);
    } else if (scores.fees >= 12) {
        messages.push(`The investment is reasonable and manageable. Think of it as planting seeds for your career garden!`);
    } else {
        messages.push(`The fees are on the higher side, but the ROI and career advancement opportunities can justify this investment.`);
    }
    
    // CAREER GOAL MESSAGES
    if (careerGoal.includes('switch') || careerGoal.includes('change')) {
        messages.push(`For career switchers like you, ${uniName}'s curriculum is designed to bridge your current skills with your dream role.`);
        messages.push(`Making a career switch? This university has helped hundreds transition successfully. You're in good hands!`);
    } else if (careerGoal.includes('promotion')) {
        messages.push(`Looking for that promotion? ${uniName}'s advanced modules will make you promotion-ready in no time!`);
        messages.push(`Your leadership journey starts here. This program is specifically designed for ambitious professionals like you.`);
    } else if (careerGoal.includes('entrepreneur')) {
        messages.push(`For entrepreneurs, this program offers the perfect blend of strategy, finance, and leadership skills you need.`);
        messages.push(`Building your empire? ${uniName} provides the business acumen and network to scale your venture.`);
    }
    
    // WORKING PROFESSIONAL MESSAGES
    if (currentStatus.includes('working')) {
        messages.push(`As a working professional, you'll love the flexibility. Weekend classes and online learning mean your career doesn't pause.`);
        messages.push(`Perfect for your schedule! Study while you earn, implement learnings immediately, and watch your career soar.`);
    }
    
    // EXPERIENCE-BASED MESSAGES
    if (experience && experience.includes('3') || experience.includes('5')) {
        messages.push(`With your ${experience} of experience, you'll bring valuable insights to class discussions. Peer learning will be incredible!`);
        messages.push(`Your experience is your superpower! This program will help you convert your practical knowledge into career-advancing credentials.`);
    }
    
    // RATING & QUALITY MESSAGES
    if (scores.rating >= 12) {
        messages.push(`${uniName}'s stellar ${university.rating}★ rating reflects their commitment to quality education. You're choosing excellence!`);
        messages.push(`Highly rated for a reason! Students consistently praise their faculty, support system, and career services.`);
    }
    
    // ACCREDITATION MESSAGES
    if (scores.accreditation >= 12) {
        messages.push(`UGC & AICTE approved means your degree is recognized nationwide. No questions, just respect!`);
        messages.push(`Government-recognized credentials that employers trust. Your degree will open doors everywhere.`);
    }
    
    // MATCH SCORE MESSAGES
    if (university.matchScore >= 85) {
        messages.push(`This is your perfect match! The alignment between your goals and their offerings is remarkable.`);
    } else if (university.matchScore >= 70) {
        messages.push(`Strong compatibility! This university checks most of your priority boxes.`);
    }
    
    // Mix and match 2 random messages for variety
    const selectedMessages = [];
    const usedIndices = new Set();
    
    while (selectedMessages.length < 2 && selectedMessages.length < messages.length) {
        const randomIndex = Math.floor(Math.random() * messages.length);
        if (!usedIndices.has(randomIndex)) {
            selectedMessages.push(messages[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }
    
    return selectedMessages.join(' ');
}

/**
 * Format fees for display
 */
function formatFees(fees) {
    if (!fees) return 'Contact for fees';
    
    const formatAmount = (amount) => {
        if (amount >= 100000) {
            return `₹${(amount / 100000).toFixed(1)}L`;
        } else if (amount >= 1000) {
            return `₹${Math.round(amount / 1000)}K`;
        } else {
            return `₹${amount.toLocaleString()}`;
        }
    };
    
    if (fees.min && fees.max) {
        return `${formatAmount(fees.min)} - ${formatAmount(fees.max)}`;
    } else if (fees.min) {
        return formatAmount(fees.min);
    } else if (fees.max) {
        return formatAmount(fees.max);
    } else {
        return formatAmount(fees);
    }
}

console.log('✅ University Comparison System loaded successfully');

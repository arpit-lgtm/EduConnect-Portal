// Integrated Course-University Matcher
// Combines comprehensive courses database with universities database for optimal AI recommendations

class CourseUniversityMatcher {
    constructor() {
        this.coursesDatabase = null;
        this.universitiesDatabase = null;
        this.initialized = false;
    }

    // Initialize with both databases
    async initialize() {
        try {
            // Load courses database
            if (typeof coursesDatabase !== 'undefined') {
                this.coursesDatabase = coursesDatabase;
            }
            
            // Load universities database
            if (typeof universityDatabase !== 'undefined') {
                this.universitiesDatabase = universityDatabase;
                console.log('University database loaded with', universityDatabase.length, 'universities');
            } else {
                console.error('University database not found! Check if comprehensive-university-database.js is loaded properly');
            }
            
            console.log('Databases loaded:');
            console.log('- Courses DB:', this.coursesDatabase ? 'Yes' : 'No');
            console.log('- Universities DB:', this.universitiesDatabase ? this.universitiesDatabase.length : 0);
            
            this.initialized = this.coursesDatabase && this.universitiesDatabase;
            console.log('Course-University Matcher initialized:', this.initialized);
        } catch (error) {
            console.error('Error initializing matcher:', error);
        }
    }

    // Find universities offering specific course
    findUniversitiesForCourse(courseId, userProfile = {}) {
        if (!this.initialized) {
            console.error('Matcher not initialized');
            return [];
        }

        const course = this.findCourseById(courseId);
        if (!course) {
            console.log(`Course ${courseId} not found`);
            return [];
        }

        // Filter universities based on course availability and user profile
        const matchingUniversities = this.universitiesDatabase.filter(university => {
            return this.doesUniversityOfferCourse(university, course, userProfile);
        });

        // Sort by relevance and rating
        return this.sortUniversitiesByRelevance(matchingUniversities, course, userProfile);
    }

    // Find courses available at specific university
    findCoursesAtUniversity(universityName) {
        if (!this.initialized) {
            console.error('Matcher not initialized');
            return [];
        }

        const university = this.universitiesDatabase.find(uni => 
            uni.name.toLowerCase().includes(universityName.toLowerCase())
        );

        if (!university) {
            console.log(`University ${universityName} not found`);
            return [];
        }

        return university.courses || [];
    }

    // Get AI-powered course recommendations based on user profile
    getRecommendations(userProfile) {
        const {
            field_of_interest,
            education_level,
            budget_range,
            career_goals,
            work_experience,
            location_preference,
            study_mode_preference
        } = userProfile;

        console.log('Getting recommendations for:', userProfile);

        if (!this.initialized) {
            console.log('Matcher not initialized, falling back');
            return null;
        }

        let recommendedCourses = [];

        // Get course recommendations based on career interest and education level
        if (field_of_interest && careerToCourseMapping[field_of_interest]) {
            const careerCourses = careerToCourseMapping[field_of_interest];
            
            if (education_level === '12th' && careerCourses["12th"]) {
                recommendedCourses = [...careerCourses["12th"]];
            } else if (education_level === 'graduate' && careerCourses["graduate"]) {
                recommendedCourses = [...careerCourses["graduate"]];
            } else if (education_level === 'working_professional' && careerCourses["working_professional"]) {
                recommendedCourses = [...careerCourses["working_professional"]];
            } else if (careerCourses["graduate"]) {
                recommendedCourses = [...careerCourses["graduate"]];
            }
        }

        console.log('Recommended course names:', recommendedCourses);

        // Find detailed course information
        const detailedCourses = [];
        for (const courseName of recommendedCourses) {
            const courseInfo = this.findCourseByName(courseName);
            if (courseInfo) {
                detailedCourses.push(courseInfo);
            }
        }

        console.log('Found detailed courses:', detailedCourses.length);

        // For each course, find universities
        const coursesWithUniversities = detailedCourses.map(course => {
            // Find all universities that offer courses in this category
            const matchingUniversities = this.universitiesDatabase.filter(uni => {
                return this.doesUniversityOfferCourseCategory(uni, course, userProfile);
            });

            console.log(`Universities for ${course.name}:`, matchingUniversities.length);

            // Sort and limit universities
            const sortedUniversities = this.sortUniversitiesByRelevance(matchingUniversities, course, userProfile);
            
            return {
                course: course,
                universities: sortedUniversities.slice(0, 8) // Top 8 universities per course
            };
        });

        console.log('Final courses with universities:', coursesWithUniversities.length);
        return coursesWithUniversities.filter(item => item.universities.length > 0);
    }

    // Helper method to find course by ID
    findCourseById(courseId) {
        for (const category in this.coursesDatabase) {
            for (const level in this.coursesDatabase[category]) {
                const courses = this.coursesDatabase[category][level];
                const course = courses.find(c => c.id === courseId);
                if (course) {
                    return { ...course, category, level };
                }
            }
        }
        return null;
    }

    // Helper method to find course by name (enhanced matching)
    findCourseByName(courseName) {
        console.log('Looking for course:', courseName);
        
        if (!this.coursesDatabase || !Array.isArray(this.coursesDatabase)) {
            console.error('Courses database is not an array!');
            return null;
        }
        
        const searchName = courseName.toLowerCase().trim();
        
        // Try different matching strategies
        let course = this.coursesDatabase.find(c => {
            const cName = (c.name || '').toLowerCase();
            const cFullName = (c.fullName || c.name || '').toLowerCase();
            
            // Exact match
            if (cName === searchName || cFullName === searchName) {
                return true;
            }
            
            // Contains match
            if (cName.includes(searchName) || cFullName.includes(searchName)) {
                return true;
            }
            
            // Reverse contains (search name contains course name)
            if (searchName.includes(cName)) {
                return true;
            }
            
            // Special case for specialized MBA
            if (searchName.includes('mba') && cName.includes('mba')) {
                return true;
            }
            
            return false;
        });
        
        if (course) {
            console.log('Found course:', course.name);
            return course;
        }
        
        console.log('Course not found:', courseName);
        return null;
    }

    // Check if university offers courses in a specific category (more flexible matching)
    doesUniversityOfferCourseCategory(university, course, userProfile) {
        const courseCategory = course.category.toLowerCase();
        const courseName = course.name.toLowerCase();
        
        // Check university's course offerings
        if (university.courses) {
            const hasMatchingCourse = university.courses.some(uniCourse => {
                const uniCourseLower = uniCourse.toLowerCase();
                
                // Direct course name match
                if (uniCourseLower.includes(courseName) || courseName.includes(uniCourseLower.split(' ')[0])) {
                    return true;
                }
                
                // Category-based matching
                const categoryMappings = {
                    'finance': ['finance', 'banking', 'economics', 'commerce', 'accounting', 'investment', 'financial'],
                    'management': ['management', 'business', 'administration', 'mba', 'bba', 'executive'],
                    'technology': ['technology', 'computer', 'information', 'software', 'it', 'engineering', 'tech'],
                    'hr': ['human resources', 'hr', 'personnel', 'industrial relations', 'organizational'],
                    'marketing': ['marketing', 'sales', 'advertising', 'brand', 'digital marketing'],
                    'commerce': ['commerce', 'accounting', 'finance', 'business', 'economics'],
                    'data science': ['data science', 'analytics', 'statistics', 'machine learning', 'big data']
                };
                
                const keywords = categoryMappings[courseCategory] || [courseCategory];
                return keywords.some(keyword => uniCourseLower.includes(keyword));
            });
            
            if (hasMatchingCourse) {
                return this.checkUniversityEligibility(university, course, userProfile);
            }
        }

        // Check specializations
        if (university.specializations) {
            const hasSpecialization = university.specializations.some(spec => {
                const specLower = spec.toLowerCase();
                return specLower.includes(courseCategory) ||
                       (courseCategory === 'finance' && (specLower.includes('finance') || specLower.includes('banking') || specLower.includes('economics'))) ||
                       (courseCategory === 'management' && (specLower.includes('management') || specLower.includes('business'))) ||
                       (courseCategory === 'hr' && specLower.includes('human resources'));
            });
            
            if (hasSpecialization) {
                return this.checkUniversityEligibility(university, course, userProfile);
            }
        }

        // For comprehensive coverage, include top universities even without specific course match
        // but only if they have high ratings
        if (university.rating >= 4.0) {
            return this.checkUniversityEligibility(university, course, userProfile);
        }

        return false;
    }

    // Check if university offers specific course
    doesUniversityOfferCourse(university, course, userProfile) {
        // Check if university offers the course category
        const courseCategory = course.category.toLowerCase();
        const courseName = course.name.toLowerCase();
        
        // Check university's course offerings
        if (university.courses) {
            const hasMatchingCourse = university.courses.some(uniCourse => 
                uniCourse.toLowerCase().includes(courseName) ||
                uniCourse.toLowerCase().includes(courseCategory)
            );
            if (hasMatchingCourse) {
                return this.checkUniversityEligibility(university, course, userProfile);
            }
        }

        // Check specializations
        if (university.specializations) {
            const hasSpecialization = university.specializations.some(spec =>
                spec.toLowerCase().includes(courseCategory) ||
                course.specializations?.some(courseSpec => 
                    spec.toLowerCase().includes(courseSpec.toLowerCase())
                )
            );
            if (hasSpecialization) {
                return this.checkUniversityEligibility(university, course, userProfile);
            }
        }

        return false;
    }

    // Check university eligibility based on user profile
    checkUniversityEligibility(university, course, userProfile) {
        // Budget check
        if (userProfile.budget_range && budgetRanges[userProfile.budget_range]) {
            const budgetMax = budgetRanges[userProfile.budget_range].max;
            if (university.fees && university.fees.min > budgetMax) {
                return false;
            }
        }

        // Study mode check
        if (userProfile.study_mode_preference) {
            const preferredMode = userProfile.study_mode_preference;
            if (course.mode && !course.mode.includes(preferredMode)) {
                return false;
            }
        }

        // Location preference check
        if (userProfile.location_preference && university.location) {
            if (!university.location.toLowerCase().includes(userProfile.location_preference.toLowerCase())) {
                return false;
            }
        }

        return true;
    }

    // Sort universities by relevance
    sortUniversitiesByRelevance(universities, course, userProfile) {
        return universities.sort((a, b) => {
            let scoreA = 0;
            let scoreB = 0;

            // Rating score
            scoreA += (a.rating || 0) * 10;
            scoreB += (b.rating || 0) * 10;

            // NIRF ranking score (lower rank = higher score)
            if (a.nirfRanking) scoreA += (100 - a.nirfRanking);
            if (b.nirfRanking) scoreB += (100 - b.nirfRanking);

            // Accreditation score
            if (a.accreditation) {
                const accreditations = Array.isArray(a.accreditation) ? a.accreditation : [a.accreditation];
                scoreA += accreditations.length * 5;
            }
            if (b.accreditation) {
                const accreditations = Array.isArray(b.accreditation) ? b.accreditation : [b.accreditation];
                scoreB += accreditations.length * 5;
            }

            // Placement score
            if (a.placements && a.placements.averagePackage) {
                scoreA += Math.log(a.placements.averagePackage) * 2;
            }
            if (b.placements && b.placements.averagePackage) {
                scoreB += Math.log(b.placements.averagePackage) * 2;
            }

            // Study mode preference match
            if (userProfile.study_mode_preference && course.mode) {
                if (course.mode.includes(userProfile.study_mode_preference)) {
                    scoreA += 15;
                    scoreB += 15;
                }
            }

            return scoreB - scoreA; // Higher score first
        });
    }

    // Get course statistics
    getCourseStatistics(courseId) {
        const course = this.findCourseById(courseId);
        if (!course) return null;

        const universities = this.findUniversitiesForCourse(courseId);
        
        const stats = {
            totalUniversities: universities.length,
            averageFees: 0,
            feeRange: { min: Infinity, max: 0 },
            topRecruiter: null,
            averageRating: 0,
            accreditationTypes: new Set(),
            locationDistribution: {}
        };

        if (universities.length > 0) {
            let totalFees = 0;
            let totalRating = 0;
            let ratedUniversities = 0;

            universities.forEach(uni => {
                // Fees calculation
                if (uni.fees) {
                    const avgUniFees = (uni.fees.min + uni.fees.max) / 2;
                    totalFees += avgUniFees;
                    stats.feeRange.min = Math.min(stats.feeRange.min, uni.fees.min);
                    stats.feeRange.max = Math.max(stats.feeRange.max, uni.fees.max);
                }

                // Rating calculation
                if (uni.rating) {
                    totalRating += uni.rating;
                    ratedUniversities++;
                }

                // Accreditation tracking
                if (uni.accreditation) {
                    const accreds = Array.isArray(uni.accreditation) ? uni.accreditation : [uni.accreditation];
                    accreds.forEach(acc => stats.accreditationTypes.add(acc));
                }

                // Location distribution
                if (uni.location) {
                    stats.locationDistribution[uni.location] = (stats.locationDistribution[uni.location] || 0) + 1;
                }
            });

            stats.averageFees = Math.round(totalFees / universities.length);
            stats.averageRating = ratedUniversities > 0 ? (totalRating / ratedUniversities).toFixed(1) : 0;
            
            if (stats.feeRange.min === Infinity) stats.feeRange.min = 0;
        }

        return {
            course: course,
            statistics: stats,
            topUniversities: universities.slice(0, 10)
        };
    }

    // Search courses by keyword
    searchCourses(keyword) {
        const results = [];
        const searchTerm = keyword.toLowerCase();

        for (const category in this.coursesDatabase) {
            for (const level in this.coursesDatabase[category]) {
                const courses = this.coursesDatabase[category][level];
                courses.forEach(course => {
                    if (
                        course.name.toLowerCase().includes(searchTerm) ||
                        course.fullName.toLowerCase().includes(searchTerm) ||
                        course.description.toLowerCase().includes(searchTerm) ||
                        course.specializations?.some(spec => spec.toLowerCase().includes(searchTerm)) ||
                        course.careerOptions?.some(career => career.toLowerCase().includes(searchTerm))
                    ) {
                        results.push({
                            ...course,
                            category,
                            level,
                            universities: this.findUniversitiesForCourse(course.id).slice(0, 3)
                        });
                    }
                });
            }
        }

        return results;
    }

    // ===== NEW METHODS FOR POPULAR PROGRAMS MODULE =====
    
    /**
     * Count universities offering a specific course by name or pattern
     */
    countUniversitiesForCourse(courseName) {
        if (!this.initialized || !this.universitiesDatabase) {
            console.warn('Database not initialized');
            return 0;
        }
        
        const lowerCourseName = courseName.toLowerCase();
        
        // Special handling for international education courses
        if (lowerCourseName.includes('abroad') || lowerCourseName.includes('international')) {
            return this.countUniversitiesWithInternationalPrograms(courseName);
        }
        
        const keywords = this.extractCourseKeywords(lowerCourseName);
        
        const count = this.universitiesDatabase.filter(uni => {
            const uniCourses = uni.courses || [];
            return uniCourses.some(course => {
                const lowerCourse = course.toLowerCase();
                // Check if any keyword matches
                return keywords.some(keyword => lowerCourse.includes(keyword));
            });
        }).length;
        
        console.log(`📊 Found ${count} universities offering "${courseName}"`);
        return count;
    }
    
    /**
     * Count universities offering international programs
     */
    countUniversitiesWithInternationalPrograms(courseName) {
        // For abroad courses, we want actual international universities (outside India)
        const lowerCourseName = courseName.toLowerCase();
        
        if (lowerCourseName.includes('abroad')) {
            // Count only universities located outside India
            const count = this.universitiesDatabase.filter(uni => {
                return uni.isInternational === true || 
                       uni.country && uni.country !== 'India' ||
                       (uni.location && !this.isIndianLocation(uni.location));
            }).length;
            
            console.log(`🌍 Found ${count} international universities for "${courseName}"`);
            return count;
        }
        
        // For other international programs, count Indian universities with international partnerships
        const internationalProgramUniversities = [
            'amity university',
            'manipal university',
            'lovely professional university',
            'chandigarh university',
            'symbiosis',
            'iim',
            'indian institute of management',
            'sharda university',
            'gla university',
            'jain university',
            'nmims',
            'bennett university',
            'upgrad education',
            'great learning',
            'imt ghaziabad',
            'pes university',
            'vit university',
            'srm university',
            'mit world peace university',
            'bharati vidyapeeth'
        ];
        
        const count = this.universitiesDatabase.filter(uni => {
            // Skip actual international universities for non-abroad courses
            if (uni.isInternational === true) return false;
            
            const uniName = uni.name.toLowerCase();
            // Check if university is in our international programs list
            const hasInternationalProgram = internationalProgramUniversities.some(intlUni => 
                uniName.includes(intlUni)
            );
            
            // Additional check for specific international indicators
            const hasInternationalIndicators = 
                uniName.includes('global') || 
                uniName.includes('international') ||
                uni.specializations?.some(spec => 
                    spec.toLowerCase().includes('global') || 
                    spec.toLowerCase().includes('international')
                ) ||
                uni.nirfRanking && uni.nirfRanking <= 100; // Top ranked universities likely have international programs
            
            return hasInternationalProgram || hasInternationalIndicators;
        }).length;
        
        console.log(`🌍 Found ${count} universities with international programs for "${courseName}"`);
        return count;
    }
    
    /**
     * Get universities offering international programs
     */
    getUniversitiesWithInternationalPrograms(courseName) {
        // For abroad courses, we want actual international universities (outside India)
        const lowerCourseName = courseName.toLowerCase();
        
        if (lowerCourseName.includes('abroad')) {
            // Show only universities located outside India
            const internationalUniversities = this.universitiesDatabase.filter(uni => {
                return uni.isInternational === true || 
                       uni.country && uni.country !== 'India' ||
                       (uni.location && !this.isIndianLocation(uni.location));
            });
            
            console.log(`🌍 Found ${internationalUniversities.length} international universities for "${courseName}"`);
            return internationalUniversities;
        }
        
        // For other international programs, show Indian universities with international partnerships
        const internationalProgramUniversities = [
            'amity university',
            'manipal university',
            'lovely professional university',
            'chandigarh university',
            'symbiosis',
            'iim',
            'indian institute of management',
            'sharda university',
            'gla university',
            'jain university',
            'nmims',
            'bennett university',
            'upgrad education',
            'great learning',
            'imt ghaziabad',
            'pes university',
            'vit university',
            'srm university',
            'mit world peace university',
            'bharati vidyapeeth'
        ];
        
        const universities = this.universitiesDatabase.filter(uni => {
            // Skip actual international universities for non-abroad courses
            if (uni.isInternational === true) return false;
            
            const uniName = uni.name.toLowerCase();
            // Check if university is in our international programs list
            const hasInternationalProgram = internationalProgramUniversities.some(intlUni => 
                uniName.includes(intlUni)
            );
            
            // Additional check for specific international indicators
            const hasInternationalIndicators = 
                uniName.includes('global') || 
                uniName.includes('international') ||
                uni.specializations?.some(spec => 
                    spec.toLowerCase().includes('global') || 
                    spec.toLowerCase().includes('international')
                ) ||
                uni.nirfRanking && uni.nirfRanking <= 100; // Top ranked universities likely have international programs
            
            return hasInternationalProgram || hasInternationalIndicators;
        });
        
        console.log(`🌍 Found ${universities.length} universities with international programs for "${courseName}"`);
        return universities;
    }
    
    /**
     * Check if a location is in India
     */
    isIndianLocation(location) {
        const indianStates = [
            'andhra pradesh', 'arunachal pradesh', 'assam', 'bihar', 'chhattisgarh', 'goa', 
            'gujarat', 'haryana', 'himachal pradesh', 'jharkhand', 'karnataka', 'kerala', 
            'madhya pradesh', 'maharashtra', 'manipur', 'meghalaya', 'mizoram', 'nagaland', 
            'odisha', 'punjab', 'rajasthan', 'sikkim', 'tamil nadu', 'telangana', 'tripura', 
            'uttar pradesh', 'uttarakhand', 'west bengal', 'delhi', 'puducherry', 'mumbai', 'kolkata', 
            'chennai', 'bangalore', 'hyderabad', 'pune', 'jaipur', 'lucknow', 'kanpur', 
            'nagpur', 'indore', 'thane', 'bhopal', 'visakhapatnam', 'pimpri', 'patna', 
            'vadodara', 'ghaziabad', 'ludhiana', 'agra', 'nashik', 'faridabad', 'meerut', 
            'rajkot', 'kalyan', 'vasai', 'varanasi', 'srinagar', 'aurangabad', 'dhanbad', 
            'amritsar', 'navi mumbai', 'allahabad', 'ranchi', 'howrah', 'coimbatore', 
            'jabalpur', 'gwalior', 'vijayawada', 'jodhpur', 'madurai', 'raipur', 'kota', 
            'guwahati', 'chandigarh', 'solapur', 'hubli', 'bareilly', 'moradabad', 'mysore', 
            'gurgaon', 'aligarh', 'jalandhar', 'tiruchirappalli', 'bhubaneswar', 'salem', 
            'mira', 'thiruvananthapuram', 'bhiwandi', 'saharanpur', 'gorakhpur', 'guntur', 
            'bikaner', 'amravati', 'noida', 'jamshedpur', 'bhilai', 'cuttack', 'firozabad', 
            'kochi', 'nellore', 'bhavnagar', 'dehradun', 'durgapur', 'asansol', 'rourkela', 
            'nanded', 'kolhapur', 'ajmer', 'akola', 'gulbarga', 'jamnagar', 'ujjain', 
            'loni', 'siliguri', 'jhansi', 'ulhasnagar', 'jammu', 'sangli', 'mangalore', 
            'erode', 'belgaum', 'ambattur', 'tirunelveli', 'malegaon', 'gaya', 'jalgaon', 
            'udaipur', 'maheshtala'
        ];
        
        const lowerLocation = location.toLowerCase();
        return indianStates.some(state => lowerLocation.includes(state)) || lowerLocation.includes('india');
    }
    
    /**
     * Format location display for universities
     * International: "State, Country" 
     * Indian: "City, State" or just "State"
     */
    formatLocationForDisplay(university) {
        if (!university.location) return 'Location not specified';
        
        if (university.isInternational === true || (university.country && university.country !== 'India')) {
            // For international universities, show "State, Country"
            if (university.state && university.country) {
                return `${university.state}, ${university.country}`;
            } else if (university.country) {
                return university.country;
            } else {
                // Parse from location field if country/state not separate
                return this.parseInternationalLocation(university.location);
            }
        } else {
            // For Indian universities, keep current format
            return university.location;
        }
    }
    
    /**
     * Parse international location from combined location string
     */
    parseInternationalLocation(location) {
        // Common patterns: "City, State, Country" or "City, Country" 
        const parts = location.split(',').map(part => part.trim());
        
        if (parts.length >= 3) {
            // "City, State, Country" -> return "State, Country"
            return `${parts[parts.length - 2]}, ${parts[parts.length - 1]}`;
        } else if (parts.length === 2) {
            // "City, Country" -> return "Country"
            return parts[1];
        } else {
            // Single location, return as is
            return location;
        }
    }
    
    /**
     * Extract keywords from course name for matching
     */
    extractCourseKeywords(courseName) {
        const keywords = new Set();
        const lowerName = courseName.toLowerCase();
        
        // Degree patterns and their matching keywords
        const degreePatterns = {
            'mba': ['mba', 'master of business', 'management'],
            'mca': ['mca', 'master of computer'],
            'bba': ['bba', 'bachelor of business'],
            'bca': ['bca', 'bachelor of computer'],
            'b.com': ['b.com', 'bcom', 'bachelor of commerce', 'commerce'],
            'm.com': ['m.com', 'mcom', 'master of commerce'],
            'ba': ['ba', 'bachelor of arts', 'arts'],
            'ma': ['ma', 'master of arts'],
            'b.sc': ['b.sc', 'bsc', 'bachelor of science', 'science'],
            'm.sc': ['m.sc', 'msc', 'master of science'],
            'm.tech': ['m.tech', 'mtech', 'master of technology', 'technology'],
            'data science': ['data science', 'data analytics', 'analytics'],
            'cyber security': ['cyber security', 'cybersecurity', 'information security'],
            'digital marketing': ['digital marketing', 'marketing'],
            'pgdm': ['pgdm', 'post graduate diploma', 'diploma management'],
            'dba': ['dba', 'doctorate', 'doctor of business']
        };
        
        // Find matching patterns
        for (const [pattern, matches] of Object.entries(degreePatterns)) {
            if (lowerName.includes(pattern)) {
                matches.forEach(match => keywords.add(match));
            }
        }
        
        // If no pattern matched, use the course name itself
        if (keywords.size === 0) {
            keywords.add(lowerName);
        }
        
        return Array.from(keywords);
    }
    
    /**
     * Format fee for display
     */
    formatFee(amount) {
        if (amount >= 100000) {
            return `₹${(amount / 100000).toFixed(1)}L`;
        }
        return `₹${(amount / 1000).toFixed(0)}K`;
    }
    
    /**
     * Generate data for Popular Programs module
     * Returns enriched course data with real university counts
     */
    generatePopularProgramsData() {
        console.log('🎯 Generating Popular Programs data...');
        
        const programsMapping = {
            'pg-courses': [
                { name: 'Online MBA', displayName: 'Master of Business Administration (ONLINE)', icon: 'Online_MBA.svg', keywords: ['mba', 'management'] },
                { name: '1 Year MBA', displayName: 'Master of Business Administration (1 YEAR)', icon: '1_Year_MBA_Online.svg', keywords: ['1 year mba', 'mba'] },
                { name: 'Distance MBA', displayName: 'Master of Business Administration (DISTANCE)', icon: 'Distance_MBA.svg', keywords: ['distance mba', 'mba'] },
                { name: 'Executive MBA', displayName: 'Master of Business Administration (EXECUTIVE)', icon: 'Executive_MBA_for_Working_Professionals.svg', keywords: ['executive mba', 'emba'] },
                { name: 'Online MCA', displayName: 'Master of Computer Applications (ONLINE)', icon: 'Online_MCA.svg', keywords: ['mca', 'computer applications'] },
                { name: 'M.Tech', displayName: 'Master of Technology (WORKING PROFESSIONALS)', icon: 'M.Tech_for_Working_Professionals.svg', keywords: ['m.tech', 'mtech', 'technology'] },
                { name: 'M.Sc', displayName: 'Master of Science (EMERGING TECHNOLOGY)', icon: 'Online_MSC_emerging_technology.svg', keywords: ['m.sc', 'msc', 'science'] }
            ],
            'executive-education': [
                { name: 'IIM Programs', displayName: 'Indian Institute of Management (PROGRAMS)', icon: 'IIM_MBA_online.svg', keywords: ['iim', 'indian institute of management'] },
                { name: 'Leadership Programs', displayName: 'Leadership & Management (PROGRAMS)', icon: 'Online_Leadership__Management.svg', keywords: ['leadership', 'management'] },
                { name: 'PGDM', displayName: 'Post Graduate Diploma in Management', icon: 'Post_Graduate_Diploma_in_Management.svg', keywords: ['pgdm', 'diploma'] },
                { name: 'DBA', displayName: 'Doctor of Business Administration (ONLINE)', icon: 'Online_DBA_Doctorate.svg', keywords: ['dba', 'doctorate'] }
            ],
            'ug-courses': [
                { name: 'Online BCA', displayName: 'Bachelor of Computer Applications (ONLINE)', icon: 'Online_BCA.svg', keywords: ['bca', 'computer applications'] },
                { name: 'Online BBA', displayName: 'Bachelor of Business Administration (ONLINE)', icon: 'Online_BBA_General.svg', keywords: ['bba', 'business administration'] },
                { name: 'Online B.Com', displayName: 'Bachelor of Commerce (ONLINE)', icon: 'Online_BCom.svg', keywords: ['b.com', 'bcom', 'commerce'] },
                { name: 'Online BA', displayName: 'Bachelor of Arts (ONLINE)', icon: 'Online_ba.svg', keywords: ['ba', 'bachelor of arts'] },
                { name: 'Online B.Sc', displayName: 'Bachelor of Science (ONLINE)', icon: 'Online_BSc.svg', keywords: ['b.sc', 'bsc', 'science'] }
            ],
            'certificate': [
                { name: 'Data Science', displayName: 'Data Science & Analytics (CERTIFICATION)', icon: 'Data_Science_Certification.svg', keywords: ['data science', 'analytics'] },
                { name: 'Cyber Security', displayName: 'Cyber Security & Ethical Hacking (CERTIFICATION)', icon: 'Cyber_Security_Certification.svg', keywords: ['cyber security', 'security'] },
                { name: 'Digital Marketing', displayName: 'Digital Marketing & Social Media (CERTIFICATION)', icon: 'Online_Digital_marketing.svg', keywords: ['digital marketing', 'marketing'] },
                { name: 'Full Stack Dev', displayName: 'Full Stack Web Development (CERTIFICATION)', icon: 'Full_Stack_Web_Development.svg', keywords: ['full stack', 'web development'] }
            ],
            'job-guarantee': [
                { name: 'Pay After Placement', displayName: 'Pay After Placement', icon: 'Pay_After_Placement_Programs.svg', keywords: ['placement', 'job guarantee'] },
                { name: 'Job Linked Programs', displayName: 'Job Linked Programs', icon: 'Job_-_Linked.svg', keywords: ['job linked', 'placement'] }
            ],
            'study-abroad': [
                { name: 'MBA Abroad', displayName: 'Master of Business Administration (ABROAD)', icon: 'MBA_Abroads-02-01-01.svg', keywords: ['mba', 'abroad', 'international'] },
                { name: 'Masters Abroad', displayName: 'Masters Programs (HYBRID LEARNING ABROAD)', icon: 'Masters_Abroad_Hybrid_Learning.svg', keywords: ['masters', 'abroad', 'international'] }
            ]
        };
        
        const enrichedData = {};
        
        for (const [category, courses] of Object.entries(programsMapping)) {
            enrichedData[category] = courses.map(course => {
                // Count universities offering this course
                const universityCount = this.countUniversitiesForCourse(course.name);
                
                // Find course in database for additional details
                const courseDetails = this.findCourseByName(course.name);
                
                const specializationCount = courseDetails?.specializations?.length || 0;
                
                return {
                    ...course,
                    universityCount: universityCount,
                    specializationCount: specializationCount,
                    hasData: universityCount > 0
                };
            });
        }
        
        console.log('✅ Popular Programs data generated:', Object.keys(enrichedData).length, 'categories');
        return enrichedData;
    }
    
    /**
     * Get detailed comparison data for a course
     */
    getCourseComparisonData(courseName) {
        console.log('📋 Getting comparison data for:', courseName);
        
        const lowerCourseName = courseName.toLowerCase();
        let matchingUniversities = [];
        
        // Special handling for international education courses
        if (lowerCourseName.includes('abroad') || lowerCourseName.includes('international')) {
            matchingUniversities = this.getUniversitiesWithInternationalPrograms(courseName);
        } else {
            const keywords = this.extractCourseKeywords(lowerCourseName);
            
            // Find matching universities
            matchingUniversities = this.universitiesDatabase.filter(uni => {
                const uniCourses = uni.courses || [];
                return uniCourses.some(course => {
                    const lowerCourse = course.toLowerCase();
                    return keywords.some(keyword => lowerCourse.includes(keyword));
                });
            });
        }
        
        // Find course details from courses database to get fees
        const courseDetails = this.findCourseByName(courseName);
        
        // Add course fees to each university
        const universitiesWithFees = matchingUniversities.map(uni => ({
            ...uni,
            fees: courseDetails?.fees || { min: 50000, max: 300000 }
        }));
        
        // Sort by rating
        universitiesWithFees.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        
        // Calculate fee range from course details
        let minFee = courseDetails?.fees?.min || 50000;
        let maxFee = courseDetails?.fees?.max || 300000;
        
        return {
            courseName: courseName,
            courseDetails: courseDetails,
            totalUniversities: universitiesWithFees.length,
            feeRange: {
                min: minFee,
                max: maxFee,
                formatted: `${this.formatFee(minFee)} - ${this.formatFee(maxFee)}`
            },
            universities: universitiesWithFees,
            topUniversities: universitiesWithFees.slice(0, 10)
        };
    }
}

// Initialize global matcher instance
const courseUniversityMatcher = new CourseUniversityMatcher();

// Auto-initialize when databases are available
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        courseUniversityMatcher.initialize();
    }, 100);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CourseUniversityMatcher;
}
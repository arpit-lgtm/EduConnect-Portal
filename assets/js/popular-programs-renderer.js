// Popular Programs Dynamic Renderer
// Dynamically populates the Explore Popular Programs section with real data from databases

class PopularProgramsRenderer {
    constructor() {
        this.matcher = null;
        this.programsData = null;
        this.initialized = false;
        
        console.log('🎨 Popular Programs Renderer initialized');
    }
    
    /**
     * Initialize the renderer with database matcher
     */
    async initialize() {
        // Wait for course-university matcher to be ready
        if (typeof courseUniversityMatcher === 'undefined') {
            console.log('⏳ Waiting for Course-University Matcher...');
            setTimeout(() => this.initialize(), 500);
            return;
        }
        
        this.matcher = courseUniversityMatcher;
        
        // Wait for matcher to initialize
        if (!this.matcher.initialized) {
            console.log('⏳ Waiting for matcher initialization...');
            setTimeout(() => this.initialize(), 500);
            return;
        }
        
        console.log('✅ Matcher ready, generating programs data...');
        this.programsData = this.matcher.generatePopularProgramsData();
        this.initialized = true;
        
        // Auto-render if DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.renderAllCategories());
        } else {
            this.renderAllCategories();
        }
    }
    
    /**
     * Render all category tabs with dynamic data
     */
    renderAllCategories() {
        console.log('🎨 Rendering all categories...');
        
        if (!this.programsData) {
            console.error('❌ No programs data available');
            return;
        }
        
        // Render each category
        this.renderCategory('pg-courses');
        this.renderCategory('executive-education');
        this.renderCategory('ug-courses');
        this.renderCategory('certificate');
        // Job Guarantee removed as per user request
        this.renderCategory('study-abroad');
        
        console.log('✅ All categories rendered!');
    }
    
    /**
     * Render a specific category
     */
    renderCategory(categoryId) {
        console.log(`🎨 Rendering category: ${categoryId}`);
        
        const container = document.getElementById(categoryId);
        if (!container) {
            console.warn(`❌ Container not found: ${categoryId}`);
            return;
        }
        
        const courses = this.programsData[categoryId] || [];
        if (courses.length === 0) {
            console.warn(`⚠️ No courses for category: ${categoryId}`);
            return;
        }
        
        console.log(`   Found ${courses.length} courses for ${categoryId}`);
        
        // Find the row container within the tab pane
        const rowContainer = container.querySelector('.row');
        if (!rowContainer) {
            console.warn(`❌ Row container not found in: ${categoryId}`);
            return;
        }
        
        // Clear existing content
        rowContainer.innerHTML = '';
        console.log(`   Cleared existing content`);
        
        // Filter out courses with no data (Option 3: Hide courses with 0 universities)
        const availableCourses = courses.filter(course => course.hasData);
        console.log(`   Filtered to ${availableCourses.length} available courses (from ${courses.length} total)`);
        
        // Render each course card
        availableCourses.forEach(course => {
            const cardHTML = this.generateCourseCard(course);
            rowContainer.innerHTML += cardHTML;
        });
        console.log(`   Generated HTML for all cards`);
        
        // Add click handlers
        this.attachClickHandlers(categoryId);
        
        console.log(`✅ Rendered ${availableCourses.length} available courses in ${categoryId}`);
    }
    
    /**
     * Generate HTML for a course card
     */
    generateCourseCard(course) {
        return `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="course-card-dynamic" data-course="${course.name}" data-has-data="${course.hasData}">
                    <div class="course-card-inner">
                        <div class="course-info">
                            <h6 class="course-name">${course.displayName}</h6>
                            <p class="course-universities-count">${course.universityCount} Universities</p>
                        </div>
                        <button class="course-compare-button">COMPARE</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Get appropriate badge class based on course data
     */
    getBadgeClass(course) {
        if (course.name.includes('IIM') || course.name.includes('Global')) {
            return 'premium';
        }
        if (course.name.includes('1 Year') || course.name.includes('Pay After')) {
            return 'trending';
        }
        if (course.name.includes('Job') || course.name.includes('Placement')) {
            return 'guarantee';
        }
        if (course.name.includes('Abroad')) {
            return 'international';
        }
        return '';
    }
    
    /**
     * Attach click handlers to course cards
     */
    attachClickHandlers(categoryId) {
        const container = document.getElementById(categoryId);
        if (!container) {
            console.warn(`⚠️ Container not found for click handlers: ${categoryId}`);
            return;
        }
        
        const cards = container.querySelectorAll('.course-card-dynamic');
        console.log(`🔗 Attaching click handlers to ${cards.length} cards in ${categoryId}`);
        
        cards.forEach(card => {
            const courseName = card.getAttribute('data-course');
            const hasData = card.getAttribute('data-has-data') === 'true';
            
            console.log(`   - Card: ${courseName}, hasData: ${hasData}`);
            
            if (!hasData) {
                return;
            }
            
            // Click handler
            card.addEventListener('click', () => {
                console.log(`🖱️ Card clicked: ${courseName}`);
                this.handleCourseClick(courseName);
            });
        });
        
        console.log(`✅ Click handlers attached for ${categoryId}`);
    }
    
    /**
     * Handle course card click - Show Enhanced AI Questionnaire first
     */
    handleCourseClick(courseName) {
        console.log(`🎯 Course clicked: ${courseName}`);
        
        // Debug: Check if enhanced questionnaire is available
        console.log('🔍 Checking Enhanced AI Questionnaire availability...');
        console.log('✅ initializeEnhancedQuestionnaire type:', typeof initializeEnhancedQuestionnaire);
        console.log('✅ enhancedAI type:', typeof enhancedAI);
        console.log('✅ window.initializeEnhancedQuestionnaire type:', typeof window.initializeEnhancedQuestionnaire);
        
        // Check if enhanced questionnaire is available
        if (typeof initializeEnhancedQuestionnaire === 'undefined') {
            console.error('❌ Enhanced AI Questionnaire not loaded');
            console.log('🔍 Available window functions:', Object.keys(window).filter(key => key.includes('AI') || key.includes('questionnaire')));
            alert('AI Questionnaire is loading. Please try again in a moment.');
            return;
        }
        
        console.log('✅ Enhanced AI Questionnaire found, proceeding...');
        
        // Store the selected course for later use
        window.selectedCourseForQuestionnaire = courseName;
        
        // Open questionnaire in a new tab instead of modal
        this.openQuestionnaireInNewTab(courseName);
    }

    /**
     * Show Enhanced AI Questionnaire Modal
     */
    showEnhancedQuestionnaireModal(courseName) {
        console.log('🤖 Showing Enhanced AI Questionnaire for:', courseName);
        
        // Create modal HTML with questionnaire
        const modalHTML = `
            <div class="enhanced-questionnaire-modal" id="questionnaireModal">
                <div class="modal-overlay" onclick="closeQuestionnaireModal()"></div>
                <div class="modal-content-large">
                    <div class="modal-header">
                        <h3>🎓 Course Guidance Assessment</h3>
                        <p>Help us find the perfect universities for your <strong>${courseName}</strong> journey</p>
                        <button class="close-btn" onclick="closeQuestionnaireModal()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        <div id="questionnaire-container-modal"></div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal if any
        const existingModal = document.getElementById('questionnaireModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal styles to head if not already present
        if (!document.getElementById('enhanced-questionnaire-modal-styles')) {
            const modalStyles = `
                <style id="enhanced-questionnaire-modal-styles">
                    .enhanced-questionnaire-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.6);
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        z-index: 10000;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        padding: 1.5rem;
                    }
                    
                    .enhanced-questionnaire-modal.show {
                        opacity: 1;
                        visibility: visible;
                    }
                    
                    .modal-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                    
                    .modal-content-large {
                        position: relative;
                        width: 98%;
                        max-width: 1400px;
                        max-height: 95vh;
                        background: white;
                        border-radius: 20px;
                        overflow: hidden;
                        transform: scale(0.9) translateY(20px);
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: 
                            0 25px 80px rgba(0, 0, 0, 0.2),
                            0 10px 40px rgba(0, 0, 0, 0.15),
                            0 0 0 1px rgba(255, 255, 255, 0.1);
                        display: flex;
                        flex-direction: column;
                        height: 95vh;
                    }
                    
                    .enhanced-questionnaire-modal.show .modal-content-large {
                        transform: scale(1) translateY(0);
                    }
                    
                    /* Professional scrollbar styling */
                    .modal-content-large ::-webkit-scrollbar {
                        width: 8px;
                    }
                    
                    .modal-content-large ::-webkit-scrollbar-track {
                        background: #f1f5f9;
                        border-radius: 4px;
                    }
                    
                    .modal-content-large ::-webkit-scrollbar-thumb {
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        border-radius: 4px;
                    }
                    
                    .modal-content-large ::-webkit-scrollbar-thumb:hover {
                        background: linear-gradient(135deg, #5a67d8, #6b46c1);
                    }
                    
                    /* Responsive design */
                    @media (max-width: 768px) {
                        .enhanced-questionnaire-modal {
                            padding: 1rem;
                        }
                        
                        .modal-content-large {
                            max-width: 100%;
                            height: 85vh;
                            border-radius: 16px;
                        }
                    }
                    
                    /* Focus states and accessibility */
                    .modal-content-large button:focus {
                        outline: 2px solid #667eea;
                        outline-offset: 2px;
                    }
                    
                    .modal-content-large input:focus,
                    .modal-content-large select:focus,
                    .modal-content-large textarea:focus {
                        outline: none;
                        border-color: #667eea !important;
                        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
                    }
                </style>
            `;
            document.head.insertAdjacentHTML('beforeend', modalStyles);
        }
        
        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Show modal with animation
        setTimeout(() => {
            const modal = document.getElementById('questionnaireModal');
            if (modal) {
                modal.classList.add('show');
                
                // Initialize the questionnaire inside the modal with a small delay
                setTimeout(() => {
                    window.questionnaireCompletionCallback = (results) => {
                        this.handleQuestionnaireCompletion(courseName, results);
                    };
                    
                    console.log('🚀 About to initialize questionnaire...');
                    initializeEnhancedQuestionnaire('questionnaire-container-modal');
                }, 100);
            }
        }, 10);
    }

    /**
     * Open Enhanced AI Questionnaire in a New Tab
     */
    openQuestionnaireInNewTab(courseName) {
        console.log('🚀 Opening questionnaire in new tab for:', courseName);
        
        // Construct the URL with course parameter
        const questionnaireUrl = `questionnaire.html?course=${encodeURIComponent(courseName)}`;
        
        // Open in new tab
        window.open(questionnaireUrl, '_blank');
        
        console.log('✅ Questionnaire tab opened:', questionnaireUrl);
    }

    /**
     * Handle questionnaire completion - Show personalized university recommendations
     */
    handleQuestionnaireCompletion(courseName, questionnaireResults) {
        console.log('🎯 Questionnaire completed for:', courseName);
        console.log('📊 Results:', questionnaireResults);
        
        // Close questionnaire modal
        closeQuestionnaireModal();
        
        // Wait for modal to close, then show personalized results
        setTimeout(() => {
            this.showPersonalizedRecommendations(courseName, questionnaireResults);
        }, 400);
    }

    /**
     * Show personalized university recommendations based on questionnaire
     */
    showPersonalizedRecommendations(courseName, results) {
        console.log('🌟 Showing personalized recommendations for:', courseName);
        console.log('🎯 Based on questionnaire results:', results);
        
        // FIXED: Show universities directly without complex comparison system
        setTimeout(() => {
            this.showUniversitiesForCourse(courseName, results);
        }, 500);
    }

    /**
     * Show universities for course with questionnaire-based recommendations
     */
    showUniversitiesForCourse(courseName, questionnaireResults = null) {
        console.log('🏛️ Loading universities for course:', courseName);
        
        // Get universities that offer this course
        let relevantUniversities = [];
        
        if (typeof universityDatabase !== 'undefined') {
            relevantUniversities = universityDatabase.filter(university => {
                return university.courses && university.courses.some(course => 
                    course.toLowerCase().includes(courseName.toLowerCase()) ||
                    courseName.toLowerCase().includes(course.toLowerCase())
                );
            });
            
            console.log('✅ Found', relevantUniversities.length, 'universities for', courseName);
        } else {
            console.error('❌ University database not available');
            alert('University database is loading. Please try again in a moment.');
            return;
        }

        // CRITICAL: Filter for ABROAD courses - only show international universities
        if (courseName.toUpperCase().includes('ABROAD') || 
            courseName.toUpperCase().includes('STUDY ABROAD') ||
            courseName.toUpperCase().includes('INTERNATIONAL')) {
            
            console.log('🌍 ABROAD course detected - filtering for international universities only');
            
            // List of Indian states/locations to exclude
            const indianLocations = [
                'andhra pradesh', 'arunachal pradesh', 'assam', 'bihar', 'chhattisgarh',
                'goa', 'gujarat', 'haryana', 'himachal pradesh', 'jharkhand', 'karnataka',
                'kerala', 'madhya pradesh', 'maharashtra', 'manipur', 'meghalaya',
                'mizoram', 'nagaland', 'odisha', 'punjab', 'rajasthan', 'sikkim',
                'tamil nadu', 'telangana', 'tripura', 'uttar pradesh', 'uttarakhand',
                'west bengal', 'india', 'delhi', 'mumbai', 'bangalore', 'hyderabad',
                'chennai', 'kolkata', 'pune', 'ahmedabad', 'jaipur', 'lucknow',
                'kanpur', 'nagpur', 'indore', 'bhopal', 'visakhapatnam', 'patna'
            ];
            
            relevantUniversities = relevantUniversities.filter(university => {
                const location = (university.location || '').toLowerCase();
                const isIndianLocation = indianLocations.some(state => location.includes(state));
                
                if (isIndianLocation) {
                    console.log(`   ❌ Excluding Indian university: ${university.name} (${university.location})`);
                    return false;
                }
                
                console.log(`   ✅ Including international university: ${university.name} (${university.location})`);
                return true;
            });
            
            console.log(`🌍 After ABROAD filtering: ${relevantUniversities.length} international universities`);
        }

        // Apply field of interest filtering first if questionnaire results are available
        if (questionnaireResults && questionnaireResults.field_of_interest) {
            console.log('🎯 Applying field of interest filtering for:', questionnaireResults.field_of_interest);
            
            // Use enhanced AI questionnaire's field filtering if available
            if (typeof enhancedAI !== 'undefined' && enhancedAI.filterUniversitiesByFieldOfInterest) {
                relevantUniversities = enhancedAI.filterUniversitiesByFieldOfInterest(
                    relevantUniversities, 
                    questionnaireResults.field_of_interest
                );
                console.log('🎯 After field filtering:', relevantUniversities.length, 'universities');
            }
        }

        // Apply location filtering if questionnaire results are available
        if (questionnaireResults && questionnaireResults.preferred_state) {
            console.log('🌍 Applying location filtering for state:', questionnaireResults.preferred_state);
            
            // Use enhanced AI questionnaire's location filtering if available
            if (typeof enhancedAI !== 'undefined' && enhancedAI.filterUniversitiesByLocation) {
                relevantUniversities = enhancedAI.filterUniversitiesByLocation(
                    relevantUniversities, 
                    questionnaireResults.preferred_state,
                    questionnaireResults.distance_preference || 'neighboring_states'
                );
                console.log('🎯 After location filtering:', relevantUniversities.length, 'universities');
            } else {
                // Fallback location filtering
                relevantUniversities = this.basicLocationFilter(relevantUniversities, questionnaireResults.preferred_state);
            }
        }

        // Enrich universities with ratings and explanations from course database
        relevantUniversities = this.enrichUniversitiesWithCourseData(relevantUniversities, courseName);

        // Sort universities based on questionnaire results if available
        if (questionnaireResults) {
            relevantUniversities = this.sortUniversitiesByPreferences(relevantUniversities, questionnaireResults);
        }

        // Show results
        this.displayUniversityResults(courseName, relevantUniversities, questionnaireResults);
    }

    /**
     * Enrich universities with percentage ratings and explanations from course database
     */
    enrichUniversitiesWithCourseData(universities, courseName) {
        console.log('💎💎💎 ENRICHMENT CALLED FOR:', courseName);
        console.log('💎 Number of universities to enrich:', universities.length);
        
        // Access courses database if available
        if (typeof coursesDatabase === 'undefined') {
            console.error('⚠️⚠️⚠️ Courses database NOT AVAILABLE for enrichment');
            return universities;
        }

        console.log('✅ Courses database is available, total courses:', coursesDatabase.length);

        // Find the matching course in the database
        const courseId = courseName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
        console.log('🔍 Looking for course ID:', courseId);
        
        const courseData = coursesDatabase.find(course => 
            course.id === courseId || 
            course.name.toLowerCase().includes(courseName.toLowerCase()) ||
            courseName.toLowerCase().includes(course.name.toLowerCase())
        );

        if (!courseData) {
            console.error('❌❌❌ NO COURSE DATA FOUND FOR:', courseName);
            console.log('Available course IDs:', coursesDatabase.slice(0, 10).map(c => c.id));
            return universities;
        }

        console.log('✅✅✅ FOUND COURSE DATA:', courseData.name);
        console.log('📊 Real fees data keys:', Object.keys(courseData.realFeesData || {}).length);
        console.log('📊 Explanation keys:', Object.keys(courseData.universityExplanations || {}).length);
        console.log('📊 Sample fee universities:', Object.keys(courseData.realFeesData || {}).slice(0, 5));
        console.log('📊 Sample explanation universities:', Object.keys(courseData.universityExplanations || {}).slice(0, 5));

        // Enrich each university with ratings and explanations
        const enrichedUniversities = universities.map((university, index) => {
            console.log(`\n🔄 Processing university ${index + 1}/${universities.length}: "${university.name}"`);
            const enrichedUniversity = { ...university };
            
            // Try to find matching keys with flexible matching
            const uniNameVariants = [
                university.name,
                university.name.replace(/\s*\(.*?\)\s*/g, '').trim(), // Remove parentheses content
                university.name.split('(')[0].trim(), // Take part before parenthesis
                university.name.replace(/University|College|Institute/gi, '').trim() // Remove common suffixes
            ];
            
            console.log('   🔍 Name variants to try:', uniNameVariants);

            // Check if course has universityExplanations and realFeesData
            let foundExplanation = false;
            if (courseData.universityExplanations) {
                for (const variant of uniNameVariants) {
                    const explanation = courseData.universityExplanations[variant];
                    if (explanation) {
                        enrichedUniversity.matchRating = explanation.rating;
                        enrichedUniversity.matchExplanation = explanation.explanation;
                        console.log(`   ✅✅ Added ${explanation.rating}% match for ${university.name} (matched as: "${variant}")`);
                        foundExplanation = true;
                        break;
                    }
                }
            }

            // Update fees from real fees data if available
            let foundFees = false;
            if (courseData.realFeesData) {
                for (const variant of uniNameVariants) {
                    const realFees = courseData.realFeesData[variant];
                    if (realFees && realFees.fee) {
                        enrichedUniversity.fees = {
                            min: realFees.fee,
                            max: realFees.fee,
                            details: realFees
                        };
                        console.log(`   ✅✅ Updated fees for ${university.name}: ₹${realFees.fee.toLocaleString()} (matched as: "${variant}")`);
                        foundFees = true;
                        break;
                    }
                }
            }

            // Generate rating and explanation if not found
            if (!foundExplanation) {
                enrichedUniversity.matchRating = this.generateMatchRating(university, index, universities.length);
                enrichedUniversity.matchExplanation = this.generateMatchExplanation(university, courseData.name);
                console.log(`   🤖 Generated ${enrichedUniversity.matchRating}% match for ${university.name}`);
            }

            return enrichedUniversity;
        });

        // Sort by match rating (highest to lowest)
        const sortedUniversities = enrichedUniversities.sort((a, b) => b.matchRating - a.matchRating);
        console.log(`\n✅ Sorted ${sortedUniversities.length} universities by match rating (${sortedUniversities[0]?.matchRating}% to ${sortedUniversities[sortedUniversities.length - 1]?.matchRating}%)`);
        
        return sortedUniversities;
    }

    /**
     * Generate match rating based on university attributes
     */
    generateMatchRating(university, index, total) {
        let baseRating = 75; // Minimum rating
        
        // Factor 1: University rating (0-5 stars)
        const uniRating = university.rating || 3.5;
        baseRating += (uniRating / 5) * 15; // Up to +15%
        
        // Factor 2: Accreditation boost
        if (university.accreditation && (university.accreditation.includes('A++') || university.accreditation.includes('A+'))) {
            baseRating += 5;
        } else if (university.accreditation && university.accreditation.includes('A')) {
            baseRating += 3;
        }
        
        // Factor 3: Approvals (UGC, AICTE, etc.)
        if (university.approvals && university.approvals.length > 2) {
            baseRating += 3;
        }
        
        // Factor 4: Position in list (earlier = slightly higher)
        const positionBonus = Math.max(0, 5 - (index / total) * 5);
        baseRating += positionBonus;
        
        // Factor 5: Mode of delivery (Online gets slight boost)
        if (university.mode && university.mode.includes('Online')) {
            baseRating += 2;
        }
        
        // Cap at 98% and floor at 75%
        return Math.min(98, Math.max(75, Math.round(baseRating)));
    }

    /**
     * Generate match explanation based on university characteristics
     */
    generateMatchExplanation(university, courseName) {
        const explanations = [];
        
        // Build explanation based on university attributes
        const accreditation = university.accreditation || 'quality accreditation';
        const approvals = university.approvals ? university.approvals.join(', ') : 'recognized approvals';
        const mode = university.mode ? university.mode.join('/') : 'flexible learning';
        
        const templates = [
            `Strong ${accreditation} with ${approvals} recognition, offering ${mode} delivery for excellent ${courseName} education and career advancement.`,
            `Established institution with ${accreditation} credentials and comprehensive ${mode} programs, ideal for ${courseName} aspirants seeking quality education.`,
            `Quality education provider with ${approvals} approval and ${accreditation} status, delivering industry-relevant ${courseName} curriculum and career opportunities.`,
            `Reputed ${mode} institution with ${accreditation} accreditation, providing robust ${courseName} programs aligned with industry requirements.`,
            `Well-recognized university with ${approvals} certification and ${accreditation} rating, offering comprehensive ${courseName} education for professional growth.`
        ];
        
        // Select explanation based on university name hash (consistent for same university)
        const hash = university.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return templates[hash % templates.length];
    }

    /**
     * Basic location filtering fallback method
     */
    basicLocationFilter(universities, preferredState) {
        if (!preferredState || preferredState === 'any_location') {
            return universities;
        }
        
        if (preferredState === 'online_only') {
            return universities.filter(uni => 
                uni.mode && (uni.mode.includes('Online') || uni.mode.includes('Distance'))
            );
        }
        
        // Simple state name matching
        const stateName = preferredState.replace(/_/g, ' ').toLowerCase();
        return universities.filter(uni => 
            uni.location && uni.location.toLowerCase().includes(stateName)
        );
    }

    /**
     * Sort universities based on user preferences from questionnaire
     */
    sortUniversitiesByPreferences(universities, preferences) {
        console.log('🎯 Sorting universities based on preferences');
        
        return universities.sort((a, b) => {
            let scoreA = 0;
            let scoreB = 0;
            
            // Budget matching
            if (preferences.budget_range) {
                const budgetValue = this.getBudgetValue(preferences.budget_range);
                if (a.fees && a.fees.max <= budgetValue) scoreA += 20;
                if (b.fees && b.fees.max <= budgetValue) scoreB += 20;
            }
            
            // Study mode matching
            if (preferences.study_mode) {
                const preferredModes = this.getPreferredModes(preferences.study_mode);
                if (a.mode && preferredModes.some(mode => a.mode.includes(mode))) scoreA += 15;
                if (b.mode && preferredModes.some(mode => b.mode.includes(mode))) scoreB += 15;
            }
            
            // Rating bonus
            if (a.rating) scoreA += a.rating * 2;
            if (b.rating) scoreB += b.rating * 2;
            
            return scoreB - scoreA;
        });
    }

    /**
     * Convert budget range to numerical value
     */
    getBudgetValue(budgetRange) {
        const budgetMap = {
            'below_50k': 50000,
            '50k_1l': 100000,
            '1l_2l': 200000,
            '2l_3l': 300000,
            '3l_5l': 500000,
            '5l_8l': 800000,
            '8l_12l': 1200000,
            '12l_20l': 2000000,
            'above_20l': 5000000
        };
        return budgetMap[budgetRange] || 500000;
    }

    /**
     * Convert study mode preference to array of modes
     */
    getPreferredModes(studyMode) {
        const modeMap = {
            'online_live': ['Online'],
            'online_recorded': ['Online'],
            'hybrid': ['Online', 'Regular'],
            'distance_learning': ['Distance'],
            'regular_campus': ['Regular'],
            'executive_program': ['Regular', 'Part-time']
        };
        return modeMap[studyMode] || ['Online', 'Distance'];
    }

    /**
     * Display university results with personalized recommendations
     */
    displayUniversityResults(courseName, universities, questionnaireResults) {
        console.log('📋 Displaying', universities.length, 'universities');
        
        // Create MUCH LARGER results modal - almost full screen
        const modalHTML = `
            <div class="university-results-modal" id="universityResultsModal" style="
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
                background: rgba(0, 0, 0, 0.4); z-index: 10001; 
                display: flex; align-items: center; justify-content: center;
                animation: fadeIn 0.3s ease-out; padding: 1rem;
            ">
                <div class="modal-content" style="
                    width: 98%; max-width: 1600px; height: 95vh; 
                    background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
                    border-radius: 20px; overflow: hidden;
                    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.15), 0 20px 50px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    transform: scale(0.95); animation: modalSlideIn 0.4s ease-out forwards;
                    display: flex; flex-direction: column;
                ">
                    <!-- Compact Professional Header -->
                    <div class="modal-header" style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white; padding: 1.5rem 2rem; 
                        position: relative; overflow: hidden; flex-shrink: 0;
                    ">
                        <div style="
                            position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                            background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
                        "></div>
                        <div style="position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: center;">
                            <div style="flex: 1; padding-right: 4rem;">
                                <div style="
                                    display: inline-block; padding: 0.25rem 0.75rem; 
                                    background: rgba(255,255,255,0.15); border-radius: 50px;
                                    font-size: 0.8rem; font-weight: 500; margin-bottom: 0.5rem;
                                    backdrop-filter: blur(10px);
                                ">✨ AI-Powered Recommendations</div>
                                <h3 style="margin: 0; font-size: 1.8rem; font-weight: 700;">
                                    🎓 Perfect Universities for ${courseName}
                                </h3>
                            </div>
                            <!-- Close Button - EXTREME RIGHT CORNER - PROFESSIONAL GRADIENT -->
                            <button onclick="closeUniversityResults()" style="
                                position: absolute; top: 20px; right: 20px; z-index: 10000;
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                border: none; color: white; width: 45px; height: 45px;
                                border-radius: 50%; cursor: pointer; display: flex;
                                align-items: center; justify-content: center; font-size: 1.5rem;
                                transition: all 0.3s ease; border: 2px solid rgba(255,255,255,0.3);
                                font-weight: bold; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                            " onmouseover="this.style.opacity='0.8'; this.style.transform='scale(1.05)'"
                               onmouseout="this.style.opacity='1'; this.style.transform='scale(1)'">
                                ✕
                            </button>
                        </div>
                    </div>
                    
                    <!-- Main Content Area - Takes Full Available Space -->
                    <div class="modal-body" style="
                        flex: 1; padding: 2rem; overflow-y: auto;
                        background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);
                    ">
                        ${questionnaireResults ? this.generatePersonalizedSummary(questionnaireResults) : ''}
                        
                        <!-- Universities Grid - Much More Space -->
                        <div class="universities-grid" style="
                            display: grid; 
                            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
                            gap: 1.5rem; 
                            margin-top: 1.5rem;
                        ">
                            ${universities.slice(0, 20).map((university, index) => this.generateProfessionalUniversityCard(university, index + 1)).join('')}
                        </div>
                        
                        ${universities.length === 0 ? `
                            <div style="
                                text-align: center; padding: 4rem 2rem; color: #64748b;
                                background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                                border-radius: 16px; margin-top: 2rem;
                            ">
                                <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
                                <h4 style="margin: 0 0 0.5rem 0; color: #334155; font-size: 1.5rem;">No universities found for this course</h4>
                                <p style="margin: 0; font-size: 1.1rem;">Please try different filters or contact our counselors for assistance.</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
            
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes modalSlideIn {
                    from { 
                        transform: scale(0.95) translateY(20px); 
                        opacity: 0; 
                    }
                    to { 
                        transform: scale(1) translateY(0); 
                        opacity: 1; 
                    }
                }
                
                .university-results-modal .modal-body::-webkit-scrollbar {
                    width: 12px;
                }
                
                .university-results-modal .modal-body::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 10px;
                }
                
                .university-results-modal .modal-body::-webkit-scrollbar-thumb {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 10px;
                }
                
                .university-results-modal .modal-body::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
                }
                
                /* Responsive design for smaller screens */
                @media (max-width: 1200px) {
                    .universities-grid {
                        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)) !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .modal-content {
                        width: 98% !important;
                        height: 98vh !important;
                        border-radius: 10px !important;
                    }
                    .universities-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            </style>
        `;
        
        // Remove existing modal if any
        const existingModal = document.getElementById('universityResultsModal');
        if (existingModal) existingModal.remove();
        
        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        console.log('✅ University results modal displayed with enhanced size');
    }

    /**
     * Open university results in a new tab for better viewing experience
     */
    openUniversityResultsInNewTab(courseName, universities, questionnaireResults) {
        try {
            // Parse the universities data if it's a string
            let universitiesData = typeof universities === 'string' ? JSON.parse(universities) : universities;
            let questionnaireData = typeof questionnaireResults === 'string' ? JSON.parse(questionnaireResults) : questionnaireResults;
            
            // Create a new tab with the university results
            const newTab = window.open('', '_blank');
            if (!newTab) {
                alert('Please allow popups for this site to open results in a new tab');
                return;
            }
            
            // Generate the complete HTML for the new tab
            const htmlContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>University Recommendations - ${courseName} | EduConnect</title>
                    <style>
                        * {
                            margin: 0; padding: 0; box-sizing: border-box;
                        }
                        
                        body {
                            font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            min-height: 100vh; padding: 2rem; color: #333;
                        }
                        
                        .container {
                            max-width: 1400px; margin: 0 auto;
                            background: white; border-radius: 20px; overflow: hidden;
                            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.15);
                        }
                        
                        .header {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white; padding: 3rem 2rem; text-align: center;
                        }
                        
                        .content {
                            padding: 3rem 2rem;
                        }
                        
                        .universities-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
                            gap: 2rem;
                        }
                        
                        .university-card {
                            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
                            border: 1px solid rgba(148, 163, 184, 0.1);
                            border-radius: 20px; padding: 2rem; position: relative;
                            box-shadow: 0 8px 25px rgba(15, 23, 42, 0.08);
                            transition: all 0.3s ease;
                        }
                        
                        .university-card:hover {
                            transform: translateY(-4px);
                            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
                        }
                        
                        .rank-badge {
                            width: 4rem; height: 4rem;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            border-radius: 16px; display: flex; align-items: center; justify-content: center;
                            color: white; font-size: 1.5rem; font-weight: 700;
                            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
                            margin-bottom: 1.5rem;
                        }
                        
                        h1 { font-size: 3rem; margin-bottom: 1rem; font-weight: 700; }
                        h2 { font-size: 1.375rem; margin-bottom: 1rem; font-weight: 700; color: #1e293b; }
                        
                        .location { color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem; }
                        .rating { color: #64748b; font-size: 0.875rem; margin-bottom: 1rem; }
                        .features { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
                        .feature-tag {
                            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                            color: #0369a1; padding: 0.25rem 0.75rem; border-radius: 20px;
                            font-size: 0.75rem; font-weight: 600;
                        }
                        
                        .print-btn {
                            position: fixed; top: 2rem; right: 2rem;
                            background: rgba(255,255,255,0.9); color: #333; border: none;
                            padding: 1rem 1.5rem; border-radius: 10px; font-weight: 600;
                            cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                            backdrop-filter: blur(10px);
                        }
                        
                        @media print {
                            body { background: white; }
                            .print-btn { display: none; }
                        }
                    </style>
                </head>
                <body>
                    <button class="print-btn" onclick="window.print()">🖨️ Print Results</button>
                    
                    <div class="container">
                        <div class="header">
                            <h1>🎓 University Recommendations</h1>
                            <p style="font-size: 1.2rem; opacity: 0.9;">
                                AI-Powered recommendations for <strong>${courseName}</strong>
                            </p>
                            <p style="font-size: 1rem; opacity: 0.8; margin-top: 1rem;">
                                Generated on ${new Date().toLocaleDateString()} by EduConnect AI
                            </p>
                        </div>
                        
                        <div class="content">
                            ${questionnaireData ? this.generatePersonalizedSummaryForTab(questionnaireData) : ''}
                            
                            <div class="universities-grid">
                                ${universitiesData.slice(0, 20).map((university, index) => this.generateUniversityCardForTab(university, index + 1)).join('')}
                            </div>
                            
                            ${universitiesData.length === 0 ? `
                                <div style="text-align: center; padding: 4rem; color: #64748b;">
                                    <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
                                    <h2>No universities found for this course</h2>
                                    <p>Please try different filters or contact our counselors for assistance.</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </body>
                </html>
            `;
            
            // Write the content to the new tab
            newTab.document.write(htmlContent);
            newTab.document.close();
            
            // Close the current modal
            this.closeUniversityResults();
            
            console.log('✅ University results opened in new tab');
        } catch (error) {
            console.error('❌ Error opening results in new tab:', error);
            alert('Sorry, there was an error opening the results in a new tab. Please try again.');
        }
    }

    /**
     * Generate personalized summary for new tab
     */
    generatePersonalizedSummaryForTab(results) {
        return `
            <div style="
                background: linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%);
                padding: 2rem; border-radius: 15px; margin-bottom: 2rem;
                border-left: 6px solid #667eea; box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            ">
                <h2 style="color: #333; margin-bottom: 1.5rem;">🎯 Your Personalized Profile</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    <div><strong>🎓 Field of Interest:</strong> ${results.fieldOfInterest || 'Not specified'}</div>
                    <div><strong>📍 Preferred Location:</strong> ${results.location || 'Not specified'}</div>
                    <div><strong>💰 Budget Range:</strong> ${results.budget || 'Not specified'}</div>
                    <div><strong>🏠 Accommodation:</strong> ${results.accommodation || 'Not specified'}</div>
                </div>
            </div>
        `;
    }

    /**
     * Generate university card for new tab
     */
    generateUniversityCardForTab(university, rank) {
        const rating = university.rating || 4.0;
        const stars = '⭐'.repeat(Math.floor(rating)) + (rating % 1 ? '✨' : '');
        const feesText = university.fees ? `₹${university.fees.toLocaleString()}/year` : 'Contact for fees';
        
        return `
            <div class="university-card">
                <div class="rank-badge">${rank}</div>
                <h2>${university.name}</h2>
                <div class="location">📍 ${university.location}</div>
                <div class="rating">${stars} ${rating.toFixed(1)} Rating</div>
                <div style="font-size: 1.1rem; font-weight: 600; color: #059669; margin-bottom: 1rem;">
                    💰 ${feesText}
                </div>
                <div style="color: #64748b; line-height: 1.6; margin-bottom: 1rem;">
                    ${university.description || 'A prestigious institution offering quality education and excellent career opportunities.'}
                </div>
                <div class="features">
                    ${university.courses ? university.courses.slice(0, 3).map(course => 
                        `<span class="feature-tag">${course}</span>`
                    ).join('') : ''}
                </div>
            </div>
        `;
    }

    /**
     * Show contact form modal for university details or expert consultation
     */
    showContactFormModal(type = 'university', universityName = '') {
        const title = type === 'university' ? 
            `Get Complete Details for ${universityName}` : 
            'Speak with Our Education Experts';
        
        const description = type === 'university' ? 
            'Fill in your details below and our counselors will provide you with comprehensive information about this university including admission process, fees, scholarships, and placement details.' :
            'Our expert counselors will help you find the perfect course and university based on your profile and preferences.';

        const modalHTML = `
            <div class="contact-form-modal" id="contactFormModal" style="
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px); z-index: 10002; 
                display: flex; align-items: center; justify-content: center;
                opacity: 0; transition: all 0.3s ease;
            ">
                <div class="contact-modal-content" style="
                    width: 90%; max-width: 500px; background: white;
                    border-radius: 20px; overflow: hidden;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
                    transform: scale(0.9); transition: all 0.3s ease;
                ">
                    <!-- Header -->
                    <div style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white; padding: 2rem; text-align: center; position: relative;
                    ">
                        <button onclick="closeContactFormModal()" style="
                            position: absolute; top: 0.75rem; right: 0.75rem; z-index: 999;
                            background: rgba(255,255,255,0.2); border: none; color: white;
                            width: 40px; height: 40px; border-radius: 50%; cursor: pointer;
                            display: flex; align-items: center; justify-content: center;
                            transition: all 0.3s ease; font-size: 1.2rem; font-weight: bold;
                            border: 2px solid rgba(255,255,255,0.5);
                        " onmouseover="this.style.background='rgba(255,255,255,0.3)'; this.style.transform='scale(1.1)'"
                           onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='scale(1)'">✕</button>
                        
                        <h3 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 700;">
                            ${title}
                        </h3>
                        <p style="margin: 0; opacity: 0.9; font-size: 0.95rem; line-height: 1.4;">
                            ${description}
                        </p>
                    </div>
                    
                    <!-- Form -->
                    <div style="padding: 2rem;">
                        <form id="contactForm" style="display: grid; gap: 1.25rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #2d3748;">
                                        Full Name <span style="color: #e53e3e;">*</span>
                                    </label>
                                    <input type="text" name="fullName" required style="
                                        width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0;
                                        border-radius: 8px; font-size: 1rem; transition: all 0.3s ease;
                                    " onfocus="this.style.borderColor='#667eea'"
                                       onblur="this.style.borderColor='#e2e8f0'">
                                </div>
                                <div>
                                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #2d3748;">
                                        Email <span style="color: #e53e3e;">*</span>
                                    </label>
                                    <input type="email" name="email" required style="
                                        width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0;
                                        border-radius: 8px; font-size: 1rem; transition: all 0.3s ease;
                                    " onfocus="this.style.borderColor='#667eea'"
                                       onblur="this.style.borderColor='#e2e8f0'">
                                </div>
                            </div>
                            
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #2d3748;">
                                        Contact Number <span style="color: #e53e3e;">*</span>
                                    </label>
                                    <input type="tel" name="contactNumber" required style="
                                        width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0;
                                        border-radius: 8px; font-size: 1rem; transition: all 0.3s ease;
                                    " onfocus="this.style.borderColor='#667eea'"
                                       onblur="this.style.borderColor='#e2e8f0'">
                                </div>
                                <div>
                                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #2d3748;">
                                        Date of Birth <span style="color: #e53e3e;">*</span>
                                    </label>
                                    <input type="date" name="dateOfBirth" required style="
                                        width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0;
                                        border-radius: 8px; font-size: 1rem; transition: all 0.3s ease;
                                    " onfocus="this.style.borderColor='#667eea'"
                                       onblur="this.style.borderColor='#e2e8f0'">
                                </div>
                            </div>
                            
                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #2d3748;">
                                        Gender <span style="color: #e53e3e;">*</span>
                                    </label>
                                    <select name="gender" required style="
                                        width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0;
                                        border-radius: 8px; font-size: 1rem; transition: all 0.3s ease;
                                        background: white;
                                    " onfocus="this.style.borderColor='#667eea'"
                                       onblur="this.style.borderColor='#e2e8f0'">
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #2d3748;">
                                        City <span style="color: #e53e3e;">*</span>
                                    </label>
                                    <input type="text" name="city" required style="
                                        width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0;
                                        border-radius: 8px; font-size: 1rem; transition: all 0.3s ease;
                                    " onfocus="this.style.borderColor='#667eea'"
                                       onblur="this.style.borderColor='#e2e8f0'">
                                </div>
                                <div>
                                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #2d3748;">
                                        State <span style="color: #e53e3e;">*</span>
                                    </label>
                                    <select name="state" required style="
                                        width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0;
                                        border-radius: 8px; font-size: 1rem; transition: all 0.3s ease;
                                        background: white;
                                    " onfocus="this.style.borderColor='#667eea'"
                                       onblur="this.style.borderColor='#e2e8f0'">
                                        <option value="">Select State</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                </div>
                            </div>
                            
                            <button type="submit" style="
                                background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
                                color: white; border: none; padding: 1rem 2rem;
                                border-radius: 10px; font-size: 1.1rem; font-weight: 600;
                                cursor: pointer; transition: all 0.3s ease; margin-top: 0.5rem;
                                box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
                            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(72, 187, 120, 0.4)'"
                               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(72, 187, 120, 0.3)'">
                                📞 Submit & Get Details
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if any
        const existingModal = document.getElementById('contactFormModal');
        if (existingModal) existingModal.remove();

        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Show modal with animation
        setTimeout(() => {
            const modal = document.getElementById('contactFormModal');
            const content = modal.querySelector('.contact-modal-content');
            modal.style.opacity = '1';
            content.style.transform = 'scale(1)';
        }, 10);

        // Handle form submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactFormSubmission(type, universityName);
        });
    }

    /**
     * Handle contact form submission
     */
    handleContactFormSubmission(type, universityName) {
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Add additional context
        data.type = type;
        data.universityName = universityName;
        data.timestamp = new Date().toISOString();
        
        console.log('📋 Contact form submitted:', data);
        
        // Show success message
        const modal = document.getElementById('contactFormModal');
        const content = modal.querySelector('.contact-modal-content');
        
        content.innerHTML = `
            <div style="padding: 3rem 2rem; text-align: center;">
                <div style="
                    width: 80px; height: 80px; border-radius: 50%;
                    background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
                    margin: 0 auto 1.5rem auto; display: flex;
                    align-items: center; justify-content: center;
                    font-size: 2.5rem;
                ">✅</div>
                <h3 style="margin: 0 0 1rem 0; color: #2d3748; font-size: 1.5rem;">
                    Thank You!
                </h3>
                <p style="margin: 0 0 2rem 0; color: #718096; line-height: 1.6;">
                    We've received your details. Our expert counselors will contact you within 24 hours with ${type === 'university' ? 'complete university information' : 'personalized course recommendations'}.
                </p>
                <button onclick="closeContactFormModal()" style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white; border: none; padding: 0.875rem 2rem;
                    border-radius: 8px; font-size: 1rem; font-weight: 600;
                    cursor: pointer; transition: all 0.3s ease;
                ">Close</button>
            </div>
        `;
        
        // Auto close after 3 seconds
        setTimeout(() => {
            closeContactFormModal();
        }, 3000);
    }
    generatePersonalizedSummary(results) {
        let summary = `
            <div class="personalized-summary" style="
                background: linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%);
                padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;
                border-left: 4px solid #667eea;
            ">
                <h4 style="color: #333; margin: 0 0 1rem 0;">🎯 Your Personalized Recommendations</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
        `;
        
        if (results.current_education) {
            summary += `<div><strong>📚 Education Level:</strong> ${this.formatEducationLevel(results.current_education)}</div>`;
        }
        
        if (results.experience_years) {
            summary += `<div><strong>💼 Experience:</strong> ${this.formatExperience(results.experience_years)}</div>`;
        }
        
        if (results.budget_range) {
            summary += `<div><strong>💰 Budget:</strong> ${this.formatBudget(results.budget_range)}</div>`;
        }
        
        if (results.study_mode) {
            summary += `<div><strong>🏫 Preferred Mode:</strong> ${this.formatStudyMode(results.study_mode)}</div>`;
        }
        
        summary += `
                </div>
                <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.8); border-radius: 8px;">
                    <strong>🔍 Matching Criteria:</strong> Universities are sorted based on your preferences, budget, and study mode requirements.
                </div>
            </div>
        `;
        
        return summary;
    }

    /**
     * Generate professional university card HTML with modern design
     */
    generateProfessionalUniversityCard(university, rank) {
        // Generate location badge if it's from neighboring state or other location
        let locationBadge = '';
        if (university.isNeighboringState) {
            locationBadge = `
                <div style="
                    position: absolute; top: 1rem; right: 1rem;
                    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                    color: white; padding: 0.375rem 0.75rem; border-radius: 12px;
                    font-size: 0.75rem; font-weight: 600; font-family: 'Inter', sans-serif;
                    box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
                ">🌍 Nearby State</div>
            `;
        } else if (university.isOtherLocation) {
            locationBadge = `
                <div style="
                    position: absolute; top: 1rem; right: 1rem;
                    background: linear-gradient(135deg, #64748b 0%, #475569 100%);
                    color: white; padding: 0.375rem 0.75rem; border-radius: 12px;
                    font-size: 0.75rem; font-weight: 600; font-family: 'Inter', sans-serif;
                    box-shadow: 0 2px 8px rgba(100, 116, 139, 0.3);
                ">🎯 Other Location</div>
            `;
        }
        
        // Generate rating stars
        const rating = university.rating || 4.0;
        const stars = '⭐'.repeat(Math.floor(rating)) + (rating % 1 ? '✨' : '');
        
        // Generate fees display - REAL FEES FROM DATABASE
        let feesText = 'Contact for fees';
        if (university.fees) {
            if (university.fees.min && university.fees.max) {
                feesText = `₹${(university.fees.min / 100000).toFixed(2)}L - ₹${(university.fees.max / 100000).toFixed(2)}L`;
            } else if (university.fees.min) {
                feesText = `₹${(university.fees.min / 100000).toFixed(2)}L/year`;
            } else {
                feesText = `₹${(university.fees / 100000).toFixed(2)}L/year`;
            }
        }
        
        // Get percentage rating and explanation from course database if available
        let matchRating = '';
        let matchExplanation = '';
        if (university.matchRating) {
            matchRating = `
                <div style="
                    display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;
                    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                    border: 1px solid #fbbf24; color: #92400e;
                    padding: 0.375rem 0.75rem; border-radius: 8px;
                    font-size: 0.875rem; font-weight: 700;
                ">
                    🎯 ${university.matchRating}% Match
                </div>
            `;
        }
        if (university.matchExplanation) {
            matchExplanation = `
                <div style="
                    margin-top: 1rem; padding: 1rem; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                    border-left: 4px solid #3b82f6; border-radius: 8px;
                ">
                    <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: #1e40af; font-weight: 500;">
                        💡 <strong>Why This University:</strong> ${university.matchExplanation}
                    </p>
                </div>
            `;
        }
        
        return `
            <div class="university-card" style="
                background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
                border: 1px solid rgba(148, 163, 184, 0.1);
                border-radius: 20px; padding: 2rem; position: relative;
                box-shadow: 0 8px 25px rgba(15, 23, 42, 0.08), 0 3px 10px rgba(15, 23, 42, 0.03);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                overflow: hidden; cursor: pointer;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 40px rgba(15, 23, 42, 0.12), 0 8px 16px rgba(15, 23, 42, 0.05)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(15, 23, 42, 0.08), 0 3px 10px rgba(15, 23, 42, 0.03)'">
                
                ${locationBadge}
                
                <!-- University Header -->
                <div style="display: flex; align-items: flex-start; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div style="
                        flex-shrink: 0; width: 4rem; height: 4rem;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        border-radius: 16px; display: flex; align-items: center; justify-content: center;
                        color: white; font-size: 1.5rem; font-weight: 700;
                        box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
                    ">${rank}</div>
                    
                    <div style="flex: 1; min-width: 0;">
                        <h4 style="
                            margin: 0 0 0.5rem 0; font-size: 1.375rem; font-weight: 700;
                            color: #1e293b; line-height: 1.3; font-family: 'Inter', sans-serif;
                        ">${university.name}</h4>
                        
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                            <div style="display: flex; align-items: center; gap: 0.375rem;">
                                <span style="color: #64748b; font-size: 0.875rem;">📍</span>
                                <span style="color: #64748b; font-size: 0.875rem; font-weight: 500;">
                                    ${university.location}
                                </span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.375rem;">
                                <span style="font-size: 0.875rem;">${stars}</span>
                                <span style="color: #64748b; font-size: 0.875rem; font-weight: 500;">
                                    ${rating.toFixed(1)}
                                </span>
                            </div>
                        </div>
                        
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
                            <div style="
                                display: inline-flex; align-items: center; gap: 0.5rem;
                                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                                border: 1px solid #bbf7d0; color: #166534;
                                padding: 0.375rem 0.75rem; border-radius: 8px;
                                font-size: 0.875rem; font-weight: 600;
                            ">
                                💰 ${feesText}
                            </div>
                            ${matchRating}
                        </div>
                    </div>
                </div>
                
                ${matchExplanation}
                
                <!-- Available Courses -->
                ${university.courses && university.courses.length > 0 ? `
                    <div style="margin-bottom: 1.5rem;">
                        <h5 style="
                            margin: 0 0 0.75rem 0; font-size: 1rem; font-weight: 600;
                            color: #374151; font-family: 'Inter', sans-serif;
                        ">📚 Available Programs</h5>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${university.courses.slice(0, 4).map(course => `
                                <span style="
                                    background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
                                    color: #6b21a8; padding: 0.25rem 0.75rem;
                                    border-radius: 20px; font-size: 0.8125rem; font-weight: 500;
                                    border: 1px solid #c4b5fd;
                                ">${course}</span>
                            `).join('')}
                            ${university.courses.length > 4 ? `
                                <span style="
                                    background: #f1f5f9; color: #64748b;
                                    padding: 0.25rem 0.75rem; border-radius: 20px;
                                    font-size: 0.8125rem; font-weight: 500;
                                ">+${university.courses.length - 4} more</span>
                            ` : ''}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Specializations -->
                ${university.specializations && university.specializations.length > 0 ? `
                    <div style="margin-bottom: 1.5rem;">
                        <h5 style="
                            margin: 0 0 0.75rem 0; font-size: 1rem; font-weight: 600;
                            color: #374151; font-family: 'Inter', sans-serif;
                        ">🎯 Key Specializations</h5>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${university.specializations.slice(0, 3).map(spec => `
                                <span style="
                                    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                                    color: #92400e; padding: 0.25rem 0.75rem;
                                    border-radius: 20px; font-size: 0.8125rem; font-weight: 500;
                                    border: 1px solid #fbbf24;
                                ">${spec}</span>
                            `).join('')}
                            ${university.specializations.length > 3 ? `
                                <span style="
                                    background: #f1f5f9; color: #64748b;
                                    padding: 0.25rem 0.75rem; border-radius: 20px;
                                    font-size: 0.8125rem; font-weight: 500;
                                ">+${university.specializations.length - 3} more</span>
                            ` : ''}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Action Button -->
                <div style="margin-top: 1.5rem; text-align: center;">
                    <button onclick="popularProgramsRenderer.showContactFormModal('university', '${university.name.replace(/'/g, "\\'")}')" style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white; border: none; padding: 0.75rem 2rem;
                        border-radius: 12px; font-size: 0.9375rem; font-weight: 600;
                        cursor: pointer; transition: all 0.3s ease;
                        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
                        font-family: 'Inter', sans-serif; width: 100%;
                    " onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 6px 16px rgba(102, 126, 234, 0.4)'"
                       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(102, 126, 234, 0.3)'">
                        📋 View Full Details
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Generate university card HTML
     */
    generateUniversityCard(university, rank) {
        // Generate location badge if it's from neighboring state or other location
        let locationBadge = '';
        if (university.isNeighboringState) {
            locationBadge = `
                <div style="
                    position: absolute; top: -10px; right: 20px;
                    background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%);
                    color: white; padding: 5px 12px; border-radius: 15px;
                    font-size: 11px; font-weight: bold;
                ">🌍 Nearby State</div>
            `;
        } else if (university.isOtherLocation) {
            locationBadge = `
                <div style="
                    position: absolute; top: -10px; right: 20px;
                    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
                    color: white; padding: 5px 12px; border-radius: 15px;
                    font-size: 11px; font-weight: bold;
                ">🎯 Other Location</div>
            `;
        }
        
        return `
            <div class="university-card" style="
                background: white; border: 1px solid #e9ecef; border-radius: 10px;
                padding: 1.5rem; transition: all 0.3s ease; position: relative;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                ${university.isNeighboringState ? 'border-left: 4px solid #ffc107;' : ''}
                ${university.isOtherLocation ? 'border-left: 4px solid #6c757d;' : ''}
            ">
                <div class="rank-badge" style="
                    position: absolute; top: -10px; left: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white; padding: 5px 15px; border-radius: 20px;
                    font-size: 12px; font-weight: bold;
                ">RANK #${rank}</div>
                
                ${locationBadge}
                
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem; margin-top: ${locationBadge ? '15px' : '0'};">
                    <div>
                        <h5 style="color: #333; margin: 0 0 0.5rem 0; font-size: 1.2rem;">${university.name}</h5>
                        <p style="color: #666; margin: 0; font-size: 14px;">
                            📍 ${university.location || 'Location not specified'}
                            ${university.isNeighboringState ? `<br><small style="color: #ffc107;">🌍 Outside ${university.preferredState}</small>` : ''}
                            ${university.isOtherLocation ? `<br><small style="color: #6c757d;">🎯 Outside ${university.preferredState}</small>` : ''}
                        </p>
                    </div>
                    <div style="text-align: right;">
                        <div style="background: #28a745; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">
                            ⭐ ${university.rating || 'N/A'}
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
                        ${university.mode ? university.mode.map(mode => `<span style="background: #e9ecef; padding: 3px 8px; border-radius: 12px; font-size: 12px;">${mode}</span>`).join('') : ''}
                    </div>
                    <div style="font-size: 14px; color: #666;">
                        <strong>Approvals:</strong> ${university.approvals ? university.approvals.join(', ') : 'N/A'}
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-size: 14px;">
                        <strong style="color: #28a745;">Fees:</strong> 
                        ${university.fees ? `₹${(university.fees.min || 0).toLocaleString()} - ₹${(university.fees.max || 0).toLocaleString()}` : 'Contact for details'}
                    </div>
                    <button onclick="viewUniversityDetails('${university.id}')" style="
                        background: #667eea; color: white; border: none;
                        padding: 8px 16px; border-radius: 6px; cursor: pointer;
                        font-size: 12px; transition: all 0.3s ease;
                    ">View Details</button>
                </div>
            </div>
        `;
    }

    // Helper formatting functions
    formatEducationLevel(level) {
        const map = {
            '12th_science': '12th Science',
            '12th_commerce': '12th Commerce',
            'bachelor_engineering': 'Bachelor\'s Engineering',
            'master_management': 'Master\'s Management'
        };
        return map[level] || level.replace(/_/g, ' ');
    }

    formatExperience(exp) {
        return exp.replace(/_/g, ' ').replace('plus', '+');
    }

    formatBudget(budget) {
        const map = {
            'below_50k': 'Below ₹50K',
            '1l_2l': '₹1-2 Lakhs',
            '2l_5l': '₹2-5 Lakhs'
        };
        return map[budget] || budget.replace(/_/g, ' ');
    }

    formatStudyMode(mode) {
        const map = {
            'online_live': 'Online Live Classes',
            'distance_learning': 'Distance Learning',
            'regular_campus': 'Regular Campus'
        };
        return map[mode] || mode.replace(/_/g, ' ');
    }

    // Legacy methods for compatibility - keeping existing functionality
    showPersonalizedRecommendationsLegacy(courseName, results) {
        console.log('🌟 Showing personalized recommendations (legacy method)');
        
        const universities = this.matcher ? this.matcher.getUniversitiesForCourse(courseName) : [];
        
        // Filter and sort universities based on questionnaire results
        const personalizedUniversities = this.filterUniversitiesByPreferences(universities, results);
        
        // Show personalized comparison with AI insights
        this.showPersonalizedComparisonModal(courseName, personalizedUniversities, results);
    }

    /**
     * Filter universities based on questionnaire preferences
     */
    filterUniversitiesByPreferences(universities, results) {
        console.log('🔍 Filtering universities based on preferences');
        
        let filtered = [...universities];
        
        // Filter by budget preference
        if (results.budget && results.budget !== 'no-preference') {
            const budgetRanges = {
                'under-1-lakh': { max: 100000 },
                '1-3-lakh': { min: 100000, max: 300000 },
                '3-5-lakh': { min: 300000, max: 500000 },
                '5-10-lakh': { min: 500000, max: 1000000 },
                'above-10-lakh': { min: 1000000 }
            };
            
            const range = budgetRanges[results.budget];
            if (range) {
                filtered = filtered.filter(uni => {
                    if (!uni.fees) return true; // Include if fees not specified
                    const avgFee = (uni.fees.min + uni.fees.max) / 2;
                    return (!range.min || avgFee >= range.min) && 
                           (!range.max || avgFee <= range.max);
                });
            }
        }
        
        // Filter by location preference
        if (results.location && results.location !== 'anywhere') {
            if (results.location === 'online-only') {
                filtered = filtered.filter(uni => 
                    uni.programs && uni.programs.some(p => p.mode === 'online')
                );
            } else if (results.location === 'on-campus-only') {
                filtered = filtered.filter(uni => 
                    !uni.programs || uni.programs.some(p => p.mode !== 'online')
                );
            }
        }
        
        // Sort by preference-based scoring
        filtered.sort((a, b) => {
            let scoreA = this.calculatePersonalizedScore(a, results);
            let scoreB = this.calculatePersonalizedScore(b, results);
            return scoreB - scoreA;
        });
        
        console.log(`🎯 Filtered from ${universities.length} to ${filtered.length} universities`);
        return filtered;
    }

    /**
     * Calculate personalized score for university based on preferences
     */
    calculatePersonalizedScore(university, results) {
        let score = 0;
        
        // Base score from university rating
        if (university.rating) {
            score += university.rating * 10;
        }
        
        // NIRF ranking bonus (lower rank = higher score)
        if (university.nirfRanking && university.nirfRanking <= 100) {
            score += (100 - university.nirfRanking) / 2;
        }
        
        // Specialization match bonus
        if (results.specialization && university.specializations) {
            const hasSpecialization = university.specializations.some(spec => 
                spec.toLowerCase().includes(results.specialization.toLowerCase()) ||
                results.specialization.toLowerCase().includes(spec.toLowerCase())
            );
            if (hasSpecialization) score += 20;
        }
        
        // Location preference bonus
        if (results.location === 'online-only' && university.programs) {
            const hasOnline = university.programs.some(p => p.mode === 'online');
            if (hasOnline) score += 15;
        }
        
        // Budget fit bonus
        if (results.budget && university.fees) {
            const budgetRanges = {
                'under-1-lakh': 100000,
                '1-3-lakh': 200000,
                '3-5-lakh': 400000,
                '5-10-lakh': 750000,
                'above-10-lakh': 1500000
            };
            
            const preferredBudget = budgetRanges[results.budget];
            const avgFee = (university.fees.min + university.fees.max) / 2;
            
            if (preferredBudget && Math.abs(avgFee - preferredBudget) < preferredBudget * 0.5) {
                score += 10;
            }
        }
        
        return score;
    }

    /**
     * Show personalized comparison modal with AI insights
     */
    showPersonalizedComparisonModal(courseName, universities, results) {
        const topUniversities = universities.slice(0, 8);
        const totalCount = universities.length;
        
        // Generate AI insights based on results
        const aiInsights = this.generateAIInsights(results, topUniversities);
        
        const modalHTML = `
            <div class="personalized-comparison-modal" id="personalizedModal">
                <div class="modal-overlay" onclick="closePersonalizedModal()"></div>
                <div class="modal-content-xl">
                    <div class="modal-header-personalized">
                        <div class="header-content">
                            <h3>🎯 Your Personalized ${courseName} Recommendations</h3>
                            <p>Based on your preferences and career goals</p>
                        </div>
                        <button class="close-btn" onclick="closePersonalizedModal()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="modal-body-personalized">
                        <!-- AI Insights Section -->
                        <div class="ai-insights-section">
                            <h4>🤖 AI Insights for You</h4>
                            <div class="insights-grid">
                                ${aiInsights.map(insight => `
                                    <div class="insight-card">
                                        <div class="insight-icon">${insight.icon}</div>
                                        <div class="insight-content">
                                            <h5>${insight.title}</h5>
                                            <p>${insight.description}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Universities Section -->
                        <div class="universities-section">
                            <h4>🏆 Top Matches for You (${totalCount} universities found)</h4>
                            <div class="universities-personalized-grid">
                                ${this.generatePersonalizedUniversitiesList(topUniversities, results)}
                            </div>
                        </div>
                        
                        <div class="action-buttons-section">
                            <button class="btn-action primary" onclick="viewAllPersonalizedResults('${courseName}')">
                                <i class="fas fa-list"></i>
                                View All ${totalCount} Universities
                            </button>
                            <button class="btn-action secondary" onclick="downloadRecommendations('${courseName}')">
                                <i class="fas fa-download"></i>
                                Download Report
                            </button>
                            <button class="btn-action accent" onclick="retakeQuestionnaire('${courseName}')">
                                <i class="fas fa-redo"></i>
                                Retake Assessment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add personalized modal styles
        if (!document.getElementById('personalized-modal-styles')) {
            const modalStyles = `
                <style id="personalized-modal-styles">
                    .personalized-comparison-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.9);
                        backdrop-filter: blur(15px);
                        z-index: 10001;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.4s ease;
                    }
                    
                    .personalized-comparison-modal.show {
                        opacity: 1;
                        visibility: visible;
                    }
                    
                    .modal-content-xl {
                        position: relative;
                        width: 95%;
                        max-width: 1200px;
                        max-height: 95vh;
                        background: white;
                        border-radius: 20px;
                        overflow: hidden;
                        transform: scale(0.9) translateY(50px);
                        transition: transform 0.4s ease;
                        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
                    }
                    
                    .personalized-comparison-modal.show .modal-content-xl {
                        transform: scale(1) translateY(0);
                    }
                    
                    .modal-header-personalized {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        padding: 2rem;
                        position: relative;
                        text-align: center;
                    }
                    
                    .modal-header-personalized .close-btn {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        z-index: 10000;
                        background: rgba(255, 255, 255, 0.2);
                        border: none;
                        color: white;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    
                    .modal-header-personalized .close-btn:hover {
                        background: rgba(255, 255, 255, 0.3);
                        transform: rotate(90deg);
                    }
                    
                    .modal-header-personalized h3 {
                        margin: 0 0 0.5rem 0;
                        font-size: 1.8rem;
                        font-weight: 600;
                    }
                    
                    .modal-body-personalized {
                        max-height: calc(95vh - 140px);
                        overflow-y: auto;
                        padding: 2rem;
                    }
                    
                    .ai-insights-section {
                        margin-bottom: 2rem;
                    }
                    
                    .ai-insights-section h4 {
                        color: #1f2937;
                        margin-bottom: 1rem;
                        font-size: 1.3rem;
                    }
                    
                    .insights-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 1rem;
                        margin-bottom: 1.5rem;
                    }
                    
                    .insight-card {
                        background: linear-gradient(135deg, #f8fafc, #e2e8f0);
                        border-radius: 12px;
                        padding: 1.5rem;
                        border-left: 4px solid #667eea;
                        display: flex;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                    
                    .insight-icon {
                        font-size: 2rem;
                        flex-shrink: 0;
                    }
                    
                    .insight-content h5 {
                        margin: 0 0 0.5rem 0;
                        color: #374151;
                        font-size: 1rem;
                        font-weight: 600;
                    }
                    
                    .insight-content p {
                        margin: 0;
                        color: #6b7280;
                        font-size: 0.9rem;
                        line-height: 1.4;
                    }
                    
                    .universities-section h4 {
                        color: #1f2937;
                        margin-bottom: 1.5rem;
                        font-size: 1.3rem;
                    }
                    
                    .universities-personalized-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                        gap: 1.5rem;
                        margin-bottom: 2rem;
                    }
                    
                    .uni-personalized-card {
                        background: white;
                        border: 1px solid #e5e7eb;
                        border-radius: 16px;
                        padding: 1.5rem;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .uni-personalized-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                        border-color: #667eea;
                    }
                    
                    .match-score-badge {
                        position: absolute;
                        top: 1rem;
                        right: 1rem;
                        background: linear-gradient(135deg, #4ade80, #22c55e);
                        color: white;
                        padding: 0.3rem 0.8rem;
                        border-radius: 20px;
                        font-size: 0.8rem;
                        font-weight: 600;
                    }
                    
                    .uni-personalized-header h5 {
                        margin: 0 0 0.5rem 0;
                        color: #1f2937;
                        font-size: 1.1rem;
                        font-weight: 600;
                        padding-right: 5rem;
                    }
                    
                    .uni-personalized-details {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                        margin: 1rem 0;
                    }
                    
                    .uni-detail-personalized {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        font-size: 0.9rem;
                        color: #6b7280;
                    }
                    
                    .uni-detail-personalized i {
                        width: 16px;
                        color: #667eea;
                    }
                    
                    .action-buttons-section {
                        text-align: center;
                        border-top: 1px solid #e5e7eb;
                        padding-top: 2rem;
                        margin-top: 2rem;
                    }
                    
                    .btn-action {
                        margin: 0 0.5rem 0.5rem 0;
                        padding: 0.8rem 1.5rem;
                        border-radius: 10px;
                        font-weight: 600;
                        border: none;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        display: inline-flex;
                        align-items: center;
                        gap: 0.5rem;
                    }
                    
                    .btn-action.primary {
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                    }
                    
                    .btn-action.secondary {
                        background: #f3f4f6;
                        color: #374151;
                        border: 1px solid #d1d5db;
                    }
                    
                    .btn-action.accent {
                        background: linear-gradient(135deg, #f59e0b, #d97706);
                        color: white;
                    }
                    
                    .btn-action:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                    }
                </style>
            `;
            document.head.insertAdjacentHTML('beforeend', modalStyles);
        }
        
        // Remove existing modal if any
        const existingModal = document.getElementById('personalizedModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Show modal with animation
        setTimeout(() => {
            const modal = document.getElementById('personalizedModal');
            if (modal) {
                modal.classList.add('show');
            }
        }, 10);
    }

    /**
     * Generate AI insights based on questionnaire results
     */
    generateAIInsights(results, universities) {
        const insights = [];
        
        // Budget insight
        if (results.budget) {
            const budgetLabels = {
                'under-1-lakh': 'under ₹1 Lakh',
                '1-3-lakh': '₹1-3 Lakhs',
                '3-5-lakh': '₹3-5 Lakhs',
                '5-10-lakh': '₹5-10 Lakhs',
                'above-10-lakh': 'above ₹10 Lakhs'
            };
            
            insights.push({
                icon: '💰',
                title: 'Budget Optimization',
                description: `Found ${universities.length} universities matching your ${budgetLabels[results.budget]} budget range.`
            });
        }
        
        // Career level insight
        if (results.experience) {
            const careerAdvice = {
                'fresher': 'Focus on strong foundation programs with good placement records.',
                'entry-level': 'Look for programs that enhance your existing skills and career growth.',
                'mid-level': 'Executive programs and leadership-focused courses would be ideal.',
                'senior-level': 'Strategic management and advanced leadership programs recommended.'
            };
            
            insights.push({
                icon: '🎯',
                title: 'Career-Focused Selection',
                description: careerAdvice[results.experience] || 'Programs selected based on your experience level.'
            });
        }
        
        // Learning preference insight
        if (results.studyPreference) {
            const modeAdvice = {
                'online-only': 'All recommendations include flexible online learning options.',
                'on-campus-only': 'Selected universities with excellent campus facilities and networking.',
                'hybrid': 'Blended learning options for maximum flexibility and engagement.'
            };
            
            insights.push({
                icon: '📚',
                title: 'Learning Style Match',
                description: modeAdvice[results.studyPreference] || 'Programs match your preferred learning style.'
            });
        }
        
        // Duration insight
        if (results.duration) {
            const durationAdvice = {
                'flexible': 'Self-paced programs available for your schedule.',
                '6-months': 'Fast-track 6-month intensive programs.',
                '1-year': 'Comprehensive 1-year programs with depth.',
                '2-years': 'In-depth 2-year programs for mastery.'
            };
            
            insights.push({
                icon: '⏰',
                title: 'Timeline Alignment',
                description: durationAdvice[results.duration] || 'Programs match your preferred timeline.'
            });
        }
        
        return insights.slice(0, 4); // Show max 4 insights
    }

    /**
     * Generate personalized universities list
     */
    generatePersonalizedUniversitiesList(universities, results) {
        return universities.map((uni, index) => {
            const matchScore = this.calculatePersonalizedScore(uni, results);
            const matchPercentage = Math.min(Math.round((matchScore / 100) * 100), 99);
            
            return `
                <div class="uni-personalized-card">
                    <div class="match-score-badge">${matchPercentage}% Match</div>
                    <div class="uni-personalized-header">
                        <h5>${uni.name}</h5>
                    </div>
                    <div class="uni-personalized-details">
                        <div class="uni-detail-personalized">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${uni.location || 'Location not specified'}</span>
                        </div>
                        <div class="uni-detail-personalized">
                            <i class="fas fa-rupee-sign"></i>
                            <span>${uni.fees ? `₹${(uni.fees.min/1000).toFixed(0)}K - ₹${(uni.fees.max/100000).toFixed(1)}L` : 'Fees on request'}</span>
                        </div>
                        ${uni.nirfRanking ? `
                            <div class="uni-detail-personalized">
                                <i class="fas fa-trophy"></i>
                                <span>NIRF Rank: ${uni.nirfRanking}</span>
                            </div>
                        ` : ''}
                        <div class="uni-detail-personalized">
                            <i class="fas fa-star"></i>
                            <span>Rating: ${uni.rating || 'Not rated'}</span>
                        </div>
                    </div>
                    <div class="uni-actions" style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button class="btn btn-sm btn-outline-primary" onclick="alert('Apply feature coming soon!')">
                            Apply Now
                        </button>
                        <button class="btn btn-sm btn-primary" onclick="alert('Details feature coming soon!')">
                            View Details
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Show comparison modal with course and universities
     */
    showComparisonModal(data) {
        console.log('📊 Showing comparison modal for:', data.courseName);
        
        // Create modal HTML
        const modalHTML = `
            <div class="course-comparison-modal" id="comparisonModal">
                <div class="modal-overlay" onclick="closeComparisonModal()"></div>
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${data.courseName} - University Comparison</h3>
                        <button class="close-btn" onclick="closeComparisonModal()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        <!-- Summary Section -->
                        <div class="comparison-summary">
                            <div class="summary-card">
                                <i class="fas fa-university"></i>
                                <div class="summary-text">
                                    <strong>${data.totalUniversities}</strong>
                                    <span>Universities</span>
                                </div>
                            </div>
                            <div class="summary-card">
                                <i class="fas fa-rupee-sign"></i>
                                <div class="summary-text">
                                    <strong>${data.feeRange.formatted}</strong>
                                    <span>Fee Range</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Universities Grid -->
                        <div class="universities-grid">
                            <h4>Top Universities Offering ${data.courseName}</h4>
                            <div class="universities-list">
                                ${this.generateUniversitiesList(data.topUniversities)}
                            </div>
                        </div>
                        
                        ${data.totalUniversities > 10 ? `
                            <div class="view-all-container">
                                <button class="btn btn-primary" onclick="viewAllUniversities('${data.courseName}')">
                                    View All ${data.totalUniversities} Universities
                                    <i class="fas fa-arrow-right ms-2"></i>
                                </button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal if any
        const existingModal = document.getElementById('comparisonModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Show modal with animation
        setTimeout(() => {
            const modal = document.getElementById('comparisonModal');
            if (modal) {
                modal.classList.add('show');
            }
        }, 10);
    }
    
    /**
     * Generate universities list HTML
     */
    generateUniversitiesList(universities) {
        return universities.map(uni => `
            <div class="university-comparison-card">
                <div class="uni-header">
                    <h5>${uni.name}</h5>
                    <div class="uni-rating">
                        <i class="fas fa-star"></i>
                        <span>${uni.rating || 'N/A'}</span>
                    </div>
                </div>
                <div class="uni-details">
                    <div class="uni-detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${uni.location || 'Location not specified'}</span>
                    </div>
                    <div class="uni-detail-item">
                        <i class="fas fa-rupee-sign"></i>
                        <span>${uni.fees ? `₹${(uni.fees.min/1000).toFixed(0)}K - ₹${(uni.fees.max/100000).toFixed(1)}L` : 'Fees not specified'}</span>
                    </div>
                    ${uni.nirfRanking ? `
                        <div class="uni-detail-item">
                            <i class="fas fa-trophy"></i>
                            <span>NIRF Rank: ${uni.nirfRanking}</span>
                        </div>
                    ` : ''}
                </div>
                <div class="uni-actions">
                    <button class="btn btn-sm btn-outline-primary" onclick="alert('Apply Now feature coming soon!')">
                        Apply Now
                    </button>
                    <button class="btn btn-sm btn-primary" onclick="alert('View Details feature coming soon!')">
                        View Details
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Global function to close university results modal
window.closeUniversityResults = function() {
    const modal = document.getElementById('universityResultsModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
};

// Global function to close comparison modal
window.closeComparisonModal = function() {
    const modal = document.getElementById('comparisonModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
};

// Global function to close questionnaire modal
window.closeQuestionnaireModal = function() {
    const modal = document.getElementById('questionnaireModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
};

// Global function to close personalized modal
window.closePersonalizedModal = function() {
    const modal = document.getElementById('personalizedModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 400);
    }
};

// Global function to retake questionnaire
window.retakeQuestionnaire = function(courseName) {
    closePersonalizedModal();
    setTimeout(() => {
        popularProgramsRenderer.openQuestionnaireInNewTab(courseName);
    }, 500);
};

// Global function to view all personalized results
window.viewAllPersonalizedResults = function(courseName) {
    // TODO: Navigate to full comparison page with filters
    alert(`Viewing all personalized results for ${courseName}. Full page coming soon!`);
};

// Global function to download recommendations
window.downloadRecommendations = function(courseName) {
    // TODO: Generate and download PDF report
    alert(`Downloading personalized report for ${courseName}. Feature coming soon!`);
};

// Global function to view all universities (placeholder for now)
// Global functions for modal controls
window.closeUniversityResults = function() {
    const modal = document.getElementById('universityResultsModal');
    if (modal) {
        modal.remove();
    }
};

window.openUniversityResultsInNewTab = function(courseName, universities, questionnaireResults) {
    if (window.popularProgramsRenderer) {
        window.popularProgramsRenderer.openUniversityResultsInNewTab(courseName, universities, questionnaireResults);
    }
};

window.viewAllUniversities = function(courseName) {
    alert(`Viewing all universities for ${courseName}. Full comparison page coming soon!`);
    // TODO: Navigate to dedicated comparison page
};

// Initialize renderer
const popularProgramsRenderer = new PopularProgramsRenderer();

// Auto-initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => popularProgramsRenderer.initialize(), 1000);
    });
} else {
    setTimeout(() => popularProgramsRenderer.initialize(), 1000);
}

// Export for global access
window.PopularProgramsRenderer = PopularProgramsRenderer;
window.popularProgramsRenderer = popularProgramsRenderer;

// Global function to close contact form modal
function closeContactFormModal() {
    const modal = document.getElementById('contactFormModal');
    if (modal) {
        modal.style.opacity = '0';
        const content = modal.querySelector('.contact-modal-content');
        content.style.transform = 'scale(0.9)';
        setTimeout(() => modal.remove(), 300);
    }
}

// Global function to show contact form for expert consultation
function showExpertConsultationForm() {
    // Use the enhanced contact modal from questionnaire system
    if (typeof contactUniversity === 'function') {
        contactUniversity('Expert Consultation');
    } else {
        // Fallback to original method if questionnaire not available
        if (window.popularProgramsRenderer) {
            window.popularProgramsRenderer.showContactFormModal('expert');
        }
    }
}

// Global function to close university results modal
function closeUniversityResults() {
    const modal = document.getElementById('universityResultsModal');
    if (modal) {
        modal.remove();
    }
}

console.log('✅ Popular Programs Renderer loaded');

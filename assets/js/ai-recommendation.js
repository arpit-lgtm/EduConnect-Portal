// AI Course Recommendation System for EduConnect
class AIRecommendationSystem {
    constructor() {
        this.currentStep = 0;
        this.userResponses = {};
        this.questions = [
            {
                id: 'preferred_state',
                question: 'Which state would you prefer for your university?',
                type: 'select',
                options: [
                    { value: 'all', label: 'No Preference (All States)' },
                    { value: 'International', label: 'International Universities' },
                    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
                    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
                    { value: 'Assam', label: 'Assam' },
                    { value: 'Bihar', label: 'Bihar' },
                    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
                    { value: 'Goa', label: 'Goa' },
                    { value: 'Gujarat', label: 'Gujarat' },
                    { value: 'Haryana', label: 'Haryana' },
                    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
                    { value: 'Jharkhand', label: 'Jharkhand' },
                    { value: 'Karnataka', label: 'Karnataka' },
                    { value: 'Kerala', label: 'Kerala' },
                    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
                    { value: 'Maharashtra', label: 'Maharashtra' },
                    { value: 'Manipur', label: 'Manipur' },
                    { value: 'Meghalaya', label: 'Meghalaya' },
                    { value: 'Mizoram', label: 'Mizoram' },
                    { value: 'Nagaland', label: 'Nagaland' },
                    { value: 'Odisha', label: 'Odisha' },
                    { value: 'Punjab', label: 'Punjab' },
                    { value: 'Rajasthan', label: 'Rajasthan' },
                    { value: 'Sikkim', label: 'Sikkim' },
                    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
                    { value: 'Telangana', label: 'Telangana' },
                    { value: 'Tripura', label: 'Tripura' },
                    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
                    { value: 'Uttarakhand', label: 'Uttarakhand' },
                    { value: 'West Bengal', label: 'West Bengal' }
                ]
            },
            {
                id: 'current_qualification',
                question: 'What is your current highest qualification?',
                type: 'select',
                options: [
                    { value: '10th', label: '10th Standard (SSC)' },
                    { value: '12th', label: '12th Standard (HSC)' },
                    { value: 'Graduate', label: 'Graduate (Bachelor\'s Degree)' },
                    { value: 'PostGraduate', label: 'Post Graduate (Master\'s Degree)' },
                    { value: 'PhD', label: 'PhD (Doctorate)' }
                ]
            },
            {
                id: 'field_of_interest',
                question: 'Which field aligns with your career objectives?',
                type: 'select',
                options: [
                    { value: 'Management', label: 'Management & Business Administration' },
                    { value: 'Engineering', label: 'Engineering & Technical Studies' },
                    { value: 'Computer Applications', label: 'Computer Applications & Information Technology' },
                    { value: 'Data Science', label: 'Data Science & Analytics' },
                    { value: 'Commerce', label: 'Commerce & Accounting' },
                    { value: 'Finance', label: 'Finance & Banking' },
                    { value: 'Marketing', label: 'Marketing & Digital Marketing' },
                    { value: 'Human Resources', label: 'Human Resources Management' },
                    { value: 'Arts', label: 'Arts & Humanities' },
                    { value: 'Law', label: 'Law & Legal Studies' },
                    { value: 'Design', label: 'Design & Creative Arts' },
                    { value: 'Media', label: 'Media & Communication' },
                    { value: 'Education', label: 'Education & Teaching' }
                ]
            },
            {
                id: 'current_status',
                question: 'What best describes your current professional status?',
                type: 'select',
                options: [
                    { value: 'fresh_graduate', label: 'Fresh Graduate (0-2 years experience)' },
                    { value: 'student', label: 'Current Student' },
                    { value: 'career_transition', label: 'Career Transition/Change' },
                    { value: 'entrepreneur', label: 'Entrepreneur/Business Owner' },
                    { value: 'unemployed', label: 'Currently Seeking Employment' }
                ]
            },
            {
                id: 'study_mode',
                question: 'What is your preferred mode of study?',
                type: 'select',
                options: [
                    { value: 'Online', label: 'Online Learning (Live Interactive Classes)' },
                    { value: 'Distance', label: 'Distance Learning (Self-Paced Study)' },
                    { value: 'Regular', label: 'Regular Campus-Based Classes' },
                    { value: 'Executive', label: 'Executive Programs (Working Professionals)' }
                ]
            },
            {
                id: 'budget_range',
                question: 'What is your budget range for the complete program?',
                type: 'select',
                options: [
                    { value: 'upto_1lac', label: 'Up to ₹1 Lac' },
                    { value: '1lac_3lac', label: '₹1 Lac to ₹3 Lac' },
                    { value: '3lac_5lac', label: '₹3 Lac to ₹5 Lac' },
                    { value: '5lac_8lac', label: '₹5 Lac to ₹8 Lac' },
                    { value: '8lac_above', label: '₹8 Lac & Above' }
                ]
            },
            {
                id: 'career_objective',
                question: 'What is your primary career objective?',
                type: 'select',
                options: [
                    { value: 'promotion', label: 'Career Advancement in Current Field' },
                    { value: 'career_change', label: 'Complete Career Change' },
                    { value: 'skill_enhancement', label: 'Skill Enhancement & Upskilling' },
                    { value: 'salary_increase', label: 'Salary Enhancement' },
                    { value: 'entrepreneurship', label: 'Start Own Business/Venture' },
                    { value: 'job_security', label: 'Better Job Security & Stability' },
                    { value: 'industry_switch', label: 'Switch to Different Industry' }
                ]
            }
        ];
    }
    
    // Add method to start questionnaire
    startQuestionnaire() {
        this.currentStep = 0;
        this.userResponses = {};
        return this.generateQuestionnaireHTML();
    }
    
    // Add method to generate questionnaire HTML
    generateQuestionnaireHTML() {
        if (this.currentStep >= this.questions.length) {
            return this.generateResultsHTML();
        }
        
        const question = this.questions[this.currentStep];
        const progressPercentage = ((this.currentStep + 1) / this.questions.length) * 100;
        
        return `
            <div class="ai-questionnaire-container">
                <!-- Progress Section -->
                <div class="progress-section">
                    <div class="progress-header">
                        <h6 class="progress-title">Question ${this.currentStep + 1} of ${this.questions.length}</h6>
                        <span class="progress-percentage">${Math.round(progressPercentage)}%</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${progressPercentage}%"></div>
                    </div>
                </div>
                
                <!-- Question Section -->
                <div class="question-section">
                    <div class="question-header">
                        <div class="question-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h3 class="question-title">${question.question}</h3>
                        <p class="question-subtitle">Choose the option that best describes your preference</p>
                    </div>
                    
                    <div class="options-grid">
                        ${question.options.map((option, index) => `
                            <div class="option-card" onclick="handleQuestionResponse('${question.id}', '${option.value}')" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="option-content">
                                    <h5 class="option-label">${option.label}</h5>
                                </div>
                                <div class="option-arrow">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Navigation Section -->
                <div class="navigation-section">
                    ${this.currentStep > 0 ? `
                        <button class="nav-btn prev-btn" onclick="goToPreviousQuestion()">
                            <i class="fas fa-arrow-left"></i>
                            <span>Previous</span>
                        </button>
                    ` : '<div></div>'}
                    
                    <div class="step-indicators">
                        ${Array.from({length: this.questions.length}, (_, i) => `
                            <div class="step-dot ${i <= this.currentStep ? 'active' : ''} ${i === this.currentStep ? 'current' : ''}"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <style>
                .ai-questionnaire-container {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 40px 30px;
                    background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
                    min-height: 600px;
                }
                
                .progress-section {
                    margin-bottom: 40px;
                }
                
                .progress-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                }
                
                .progress-title {
                    color: #4a5568;
                    font-weight: 600;
                    margin: 0;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .progress-percentage {
                    color: #667eea;
                    font-weight: 700;
                    font-size: 16px;
                }
                
                .progress-bar-container {
                    height: 8px;
                    background: #e2e8f0;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
                }
                
                .progress-bar-fill {
                    height: 100%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 10px;
                    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
                }
                
                .question-section {
                    margin-bottom: 50px;
                }
                
                .question-header {
                    text-align: center;
                    margin-bottom: 40px;
                }
                
                .question-icon {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
                }
                
                .question-icon i {
                    font-size: 32px;
                    color: white;
                }
                
                .question-title {
                    color: #2d3748;
                    font-weight: 700;
                    font-size: 28px;
                    margin-bottom: 10px;
                    line-height: 1.3;
                }
                
                .question-subtitle {
                    color: #718096;
                    font-size: 16px;
                    margin: 0;
                }
                
                .options-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 20px;
                    margin-top: 30px;
                }
                
                .option-card {
                    background: white;
                    border: 2px solid #e2e8f0;
                    border-radius: 16px;
                    padding: 25px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }
                
                .option-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }
                
                .option-card:hover {
                    transform: translateY(-5px);
                    border-color: #667eea;
                    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
                }
                
                .option-card:hover::before {
                    transform: scaleX(1);
                }
                
                .option-content {
                    flex: 1;
                }
                
                .option-label {
                    color: #2d3748;
                    font-weight: 600;
                    font-size: 16px;
                    margin: 0;
                    line-height: 1.4;
                }
                
                .option-arrow {
                    color: #cbd5e0;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }
                
                .option-card:hover .option-arrow {
                    color: #667eea;
                    transform: translateX(5px);
                }
                
                .navigation-section {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 40px;
                }
                
                .nav-btn {
                    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
                    border: 2px solid #e2e8f0;
                    color: #4a5568;
                    padding: 12px 24px;
                    border-radius: 50px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .nav-btn:hover {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-color: #667eea;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
                }
                
                .step-indicators {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                }
                
                .step-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #e2e8f0;
                    transition: all 0.3s ease;
                }
                
                .step-dot.active {
                    background: #667eea;
                }
                
                .step-dot.current {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    transform: scale(1.3);
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                }
                
                @media (max-width: 768px) {
                    .ai-questionnaire-container {
                        padding: 30px 20px;
                    }
                    
                    .question-title {
                        font-size: 24px;
                    }
                    
                    .options-grid {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }
                    
                    .option-card {
                        padding: 20px;
                    }
                    
                    .question-icon {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .question-icon i {
                        font-size: 24px;
                    }
                }
            </style>
        `;
    }
    
    // Add method to handle responses
    handleResponse(questionId, answer) {
        this.userResponses[questionId] = answer;
        this.currentStep++;
        return this.generateQuestionnaireHTML();
    }
    
    // Add method to go back
    goToPrevious() {
        if (this.currentStep > 0) {
            this.currentStep--;
            return this.generateQuestionnaireHTML();
        }
        return null;
    }
    
    // Add method to generate results
    generateResultsHTML() {
        console.log('🔄 Starting generateResultsHTML with responses:', this.userResponses);
        
        try {
            const recommendations = this.generateUniversityRecommendations(this.userResponses);
            console.log('📋 Recommendations generated:', recommendations);
            
            if (!recommendations || (Array.isArray(recommendations) && recommendations.length === 0)) {
                console.error('❌ No recommendations returned!');
                return `
                    <div class="results-container">
                        <div class="alert alert-danger">
                            <h4>No Universities Found</h4>
                            <p>Sorry, we couldn't find any universities matching your criteria. Please try adjusting your preferences.</p>
                            <button class="btn btn-primary" onclick="restartQuestionnaire()">Start Over</button>
                        </div>
                    </div>
                `;
            }
            
            const filterSummary = this.generateFilterSummary();
            
            // Check if this is a state not found result
            const stateNotFoundMessage = recommendations.stateNotFound ? `
                <div class="alert alert-warning mb-4">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    <strong>No universities found in ${recommendations.preferredState}</strong><br>
                    <small>${recommendations.stateNotFoundMessage}</small>
                </div>
            ` : '';
            
            const mainMessage = recommendations.stateNotFound ? 
                'Here are the best alternative universities from other states:' : 
                'Based on your preferences, here are the best universities for you:';
            
            return `
                <div class="results-container">
                    <div class="text-center mb-4">
                        <h3 class="text-primary">🎯 Your AI-Generated Recommendations</h3>
                        <p class="text-muted">${mainMessage}</p>
                    </div>
                    
                    ${stateNotFoundMessage}
                    ${filterSummary}
                    
                    <div class="results-summary mb-4">
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle me-2"></i>
                            <strong>Found ${recommendations.universities?.length || recommendations.length} universities</strong> matching your criteria for 
                            <strong>${this.userResponses.field_of_interest}</strong> programs with 
                            <strong>${this.userResponses.study_mode}</strong> learning mode.
                        </div>
                    </div>
                    
                    ${this.generateModernCardHTML(recommendations.universities || recommendations)}
                    
                    <div class="text-center mt-4">
                        <button class="btn btn-primary" onclick="restartQuestionnaire()">
                            <i class="fas fa-redo me-2"></i>Start Over
                        </button>
                    </div>
                </div>
            `;
            
        } catch (error) {
            console.error('❌ Error in generateResultsHTML:', error);
            console.error('❌ Error stack:', error.stack);
            console.error('❌ User responses:', this.userResponses);
            return `
                <div class="results-container">
                    <div class="alert alert-danger">
                        <h4>Error Generating Results</h4>
                        <p>There was an error processing your request: ${error.message}</p>
                        <p class="small">Please check the browser console for detailed error information.</p>
                        <button class="btn btn-primary" onclick="restartQuestionnaire()">Start Over</button>
                    </div>
                </div>
            `;
        }
    }
    
    generateFilterSummary() {
        const responses = this.userResponses;
        const budgetLabels = {
            'upto_1lac': 'Up to ₹1 Lac',
            '1lac_3lac': '₹1 Lac to ₹3 Lac',
            '3lac_5lac': '₹3 Lac to ₹5 Lac',
            '5lac_8lac': '₹5 Lac to ₹8 Lac',
            '8lac_above': '₹8 Lac & above'
        };
        
        return `
            <div class="filter-summary mb-4">
                <div class="row g-3">
                    <div class="col-md-3">
                        <div class="filter-item">
                            <i class="fas fa-graduation-cap text-primary"></i>
                            <span class="filter-label">Level:</span>
                            <span class="filter-value">${responses.current_qualification}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="filter-item">
                            <i class="fas fa-bullseye text-success"></i>
                            <span class="filter-label">Field:</span>
                            <span class="filter-value">${responses.field_of_interest}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="filter-item">
                            <i class="fas fa-laptop text-info"></i>
                            <span class="filter-label">Mode:</span>
                            <span class="filter-value">${responses.study_mode}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="filter-item">
                            <i class="fas fa-rupee-sign text-warning"></i>
                            <span class="filter-label">Budget:</span>
                            <span class="filter-value">${budgetLabels[responses.budget_range] || 'Not specified'}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .filter-summary {
                    background: #f8f9fa;
                    border-radius: 12px;
                    padding: 20px;
                    border-left: 4px solid #007bff;
                }
                
                .filter-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                
                .filter-label {
                    font-weight: 600;
                    color: #495057;
                    font-size: 14px;
                }
                
                .filter-value {
                    color: #007bff;
                    font-weight: 500;
                    font-size: 14px;
                }
            </style>
        `;
    }
    
    generateUniversityRecommendations(responses) {
        console.log('🎯 Generating AI recommendations based on user responses:', responses);
        
        try {
            // Check if databases are loaded
            if (typeof coursesDatabase === 'undefined' || !coursesDatabase || coursesDatabase.length === 0) {
                console.warn('⚠️ Courses database not loaded');
            }
            
            if (typeof universityDatabase === 'undefined' || !universityDatabase || universityDatabase.length === 0) {
                console.warn('⚠️ University database not loaded, using fallback');
                return this.getFallbackUniversities(responses);
            }
            
            console.log(`📊 Processing ${universityDatabase.length} universities and ${coursesDatabase?.length || 0} courses`);
            
            // SIMPLIFIED FILTERING: Only use 3 essential criteria
            // 1. Field of Interest, 2. Preferred State, 3. Budget
            // Other questions are for reference only
            
            // Step 1: Filter universities by field of interest
        let filteredUniversities = this.filterUniversitiesByFieldOfInterest(responses);
        console.log(`� After field filter: ${filteredUniversities.length} universities`);
        
        // Step 2: Prioritize universities by state FIRST (selected state first, then others)
        filteredUniversities = this.prioritizeUniversitiesByState(filteredUniversities, responses.preferred_state);
        console.log(`� After budget filter: ${filteredUniversities.length} universities`);
        
        // Step 3: Prioritize universities by state (selected state first, then others)
        filteredUniversities = this.prioritizeUniversitiesByState(filteredUniversities, responses.preferred_state);
        console.log(`�️ After state prioritization: ${filteredUniversities.length} universities`);
        
        // Step 4: Sort by relevance WITHIN each group (state-preferred first, then others)
        // CRITICAL: State preference must OVERRIDE relevance sorting
        const preferredState = responses.preferred_state;
        if (preferredState && preferredState !== 'all') {
            const stateUniversities = filteredUniversities.filter(uni => {
                const location = uni.location || '';
                return location.toLowerCase().includes(preferredState.toLowerCase());
            });
            
            const otherUniversities = filteredUniversities.filter(uni => {
                const location = uni.location || '';
                return !location.toLowerCase().includes(preferredState.toLowerCase());
            });
            
            console.log(`🎯 Sorting ${stateUniversities.length} preferred state universities and ${otherUniversities.length} others separately`);
            
            // Sort each group independently
            const sortedStateUniversities = this.sortUniversitiesByRelevance(stateUniversities, responses);
            const sortedOtherUniversities = this.sortUniversitiesByRelevance(otherUniversities, responses);
            
            // Combine: preferred state first, then others
            filteredUniversities = [...sortedStateUniversities, ...sortedOtherUniversities];
        } else {
            filteredUniversities = this.sortUniversitiesByRelevance(filteredUniversities, responses);
        }
        
        // Step 5: Take more results to show state preferences
        const finalResults = filteredUniversities.slice(0, 12);
        console.log(`✅ Final recommendations: ${finalResults.length} universities`);
        
        // If no results, use intelligent fallback
        if (finalResults.length === 0) {
            console.log('🔄 No exact matches found, using intelligent fallback');
            return this.getIntelligentFallback(responses);
        }
        
        // Step 6: Enrich results with course details and location info
        return this.enrichUniversityResults(finalResults, responses);
        
        } catch (error) {
            console.error('❌ Error in generateUniversityRecommendations:', error);
            console.error('❌ Error stack:', error.stack);
            console.error('❌ User responses:', responses);
            throw error; // Re-throw to be caught by generateResultsHTML
        }
    }
    
    filterCoursesByPreferences(responses) {
        let courses = [...coursesDatabase];
        
        console.log('🎯 Filtering courses based on preferences:', responses);
        
        // Filter by course level (Undergraduate, Postgraduate, etc.)
        if (responses.course_level) {
            courses = courses.filter(course => 
                course.level.toLowerCase() === responses.course_level.toLowerCase()
            );
            console.log(`📚 After level filter (${responses.course_level}): ${courses.length} courses`);
        }
        
        // Filter by field of interest
        if (responses.field_of_interest) {
            const fieldMapping = {
                'Management': ['Management', 'Business'],
                'Engineering': ['Engineering', 'Technology'],
                'Computer Applications': ['Computer Applications', 'Technology', 'IT'],
                'Data Science': ['Data Science', 'Technology', 'Analytics'],
                'Commerce': ['Commerce', 'Business'],
                'Finance': ['Finance', 'Business', 'Commerce'],
                'Marketing': ['Marketing', 'Business', 'Management'],
                'Human Resources': ['Human Resources', 'Management', 'Business'],
                'Arts': ['Arts', 'Humanities'],
                'Law': ['Law', 'Legal'],
                'Design': ['Design', 'Creative'],
                'Media': ['Media', 'Communication'],
                'Education': ['Education', 'Teaching']
            };
            
            const targetCategories = fieldMapping[responses.field_of_interest] || [responses.field_of_interest];
            
            courses = courses.filter(course => 
                targetCategories.some(cat => 
                    course.category.toLowerCase().includes(cat.toLowerCase()) ||
                    course.specializations.some(spec => 
                        spec.toLowerCase().includes(cat.toLowerCase())
                    )
                )
            );
            console.log(`🎯 After field filter (${responses.field_of_interest}): ${courses.length} courses`);
        }
        
        // Filter by study mode
        if (responses.study_mode) {
            courses = courses.filter(course => 
                course.mode.includes(responses.study_mode)
            );
            console.log(`📖 After mode filter (${responses.study_mode}): ${courses.length} courses`);
        }
        
        // Sort by relevance to field of interest
        courses = courses.sort((a, b) => {
            const aCat = a.category === responses.field_of_interest ? 1 : 0;
            const bCat = b.category === responses.field_of_interest ? 1 : 0;
            return bCat - aCat;
        });
        
        return courses;
    }
    
    // NEW SIMPLIFIED FILTERING FUNCTIONS (Only use 3 criteria)
    filterUniversitiesByFieldOfInterest(responses) {
        let universities = [...universityDatabase];
        console.log(`🎓 Starting field filter with ${universities.length} total universities`);
        
        if (!responses.field_of_interest) {
            console.log('⚠️ No field of interest specified, returning all universities');
            return universities;
        }
        
        console.log(`🎯 Filtering by field: ${responses.field_of_interest}`);
        
        const fieldMapping = {
            'Management': ['Management', 'Business', 'MBA'],
            'Engineering': ['Engineering', 'Technology', 'Technical'],
            'Computer Applications': ['Computer', 'IT', 'Technology', 'MCA', 'BCA'],
            'Data Science': ['Data Science', 'Analytics', 'Data'],
            'Commerce': ['Commerce', 'Business', 'M.Com', 'B.Com'],
            'Finance': ['Finance', 'Banking', 'Financial'],
            'Marketing': ['Marketing', 'Digital Marketing', 'Business'],
            'Human Resources': ['HR', 'Human Resources', 'Management'],
            'Arts': ['Arts', 'Humanities', 'MA', 'BA'],
            'Law': ['Law', 'Legal', 'LLB', 'LLM'],
            'Design': ['Design', 'Creative', 'Arts'],
            'Media': ['Media', 'Communication', 'Journalism'],
            'Education': ['Education', 'Teaching', 'B.Ed', 'M.Ed']
        };
        
        const targetKeywords = fieldMapping[responses.field_of_interest] || [responses.field_of_interest];
        console.log(`🔍 Target keywords for ${responses.field_of_interest}:`, targetKeywords);
        
        const filteredUniversities = universities; // TEMPORARILY BYPASS FIELD FILTERING FOR TESTING
        
        console.log(`📊 After field filtering (BYPASSED): ${filteredUniversities.length} universities remaining`);
        
        return filteredUniversities;
    }
    
    prioritizeUniversitiesByState(universities, preferredState) {
        if (!preferredState || preferredState === 'all') {
            return universities;
        }
        
        console.log(`🎯 Prioritizing universities for state: ${preferredState}`);
        
        // Get the state-to-university mapping
        const stateUniversityMapping = {
            'International': [
                'Harvard',
                'Deakin',
                'Edgewood',
                'ESGCI',
                'Golden Gate',
                'Liberty',
                'Liverpool John Moores',
                'Paris School of Business',
                'Purdue',
                'Queen Margaret',
                'Rushford',
                'Ssbm Geneva',
                'University of Dallas',
                'University of Michigan Flint',
                'University of South Florida',
                'Walden',
                'Westcliff',
                'Birchwood',
                'Upgrad Woolf'
            ],
            'Andhra Pradesh': [
                'Anucde Acharya Nagarjuna (Distance Education)',
                'Gitam University (Distance Education)',
                'KL University (Distance Education)',
                'KL University (Online)',
                'SPMVV (Distance Education)',
                'SVU DDE Sri Venkateswara (Distance Education)',
                'Vignan University (Online)'
            ],
            'Assam': [
                'Dibrugarh University (Distance Education)',
                'IIT Guwahati'
            ],
            'Bihar': [
                'IIM Bodh Gaya'
            ],
            'Chhattisgarh': [
                'IIM Raipur',
                'Kalinga University Engineering'
            ],
            'Delhi': [
                'Du Sol',
                'Jamia Hamdard (Online)',
                'Jamia Millia Islamia (Distance Education)',
                'Jamia Millia Islamia (Online)',
                'Jamia Millia Islamia University (Online)',
                'IGNOU'
            ],
            'Gujarat': [
                'Parul University (Online)'
            ],
            'Haryana': [
                'JGU (Online) Coursera',
                'KUK DDE Kurukshetra University (Distance Education)',
                'Kurukshetra University (Online)',
                'Lingayas Vidyapeeth',
                'Maharishi Markandeshwar University (Online)',
                'Manav Rachna University (Online)',
                'O P Jindal Global University'
            ],
            'Himachal Pradesh': [
                'Himachal Pradesh University (Distance Education)',
                'IIM Sirmaur',
                'Shoolini University (Online)'
            ],
            'Jammu & Kashmir': [
                'IIM Jammu',
                'Jammu University (Distance Education)',
                'University Of Kashmir (Distance Education)'
            ],
            'Jharkhand': [
                'IIM Ranchi'
            ],
            'Karnataka': [
                'Jain University (Distance Education)',
                'Jain University (Online)',
                'Kuvempu University (Distance Education)',
                'Mahe Manipal (Online)',
                'Svyasa (Distance Education)'
            ],
            'Kerala': [
                'IIM Kozhikode',
                'University Of Calicut (Distance Education)'
            ],
            'Madhya Pradesh': [
                'IIM Indore'
            ],
            'Maharashtra': [
                'D.Y. Patil University (Online)',
                'D.Y. Patil University Navi Mumbai (Online)',
                'IIM Mumbai',
                'IIM Nagpur',
                'IIT Bombay',
                'Indian Management School And Research Centre',
                'Mumbai University (Distance Education)',
                'NMIMS (Online)',
                'Shivaji University (Distance Education)',
                'Symbiosis (Online)',
                'Symbiosis Distance Learning',
                'Symbiosis SCDL'
            ],
            'Meghalaya': [
                'IIM Shillong'
            ],
            'Mizoram': [
                'Mizoram University (Online)'
            ],
            'Odisha': [
                'KIIT University (Online)',
                'IIM Sambalpur',
                'XIM University Bhubaneswar'
            ],
            'Punjab': [
                'Chandigarh University Distance',
                'Chandigarh University (Online)',
                'Guru Kashi University (Online)',
                'IIM Amritsar',
                'IIT Ropar',
                'Lovely Professional University (Distance Education)',
                'Lovely Professional University (Online)',
                'Punjabi University (Distance Education)'
            ],
            'Puducherry': [
                'Pudde Pondicherry University (Distance Education)'
            ],
            'Rajasthan': [
                'BITS Pilani',
                'IIM Udaipur',
                'Jaipur National University (Distance Education)',
                'Raj University Distance Education',
                'Yog Vedic NIMS',
                'MDS University',
                'UOU'
            ],
            'Tamil Nadu': [
                'Anna University (Distance Education)',
                'Bharathiar University (Distance Education)',
                'Bharathidasan University (Distance Education)',
                'Dr. Mgr Educational And Research Institute (Distance Education)',
                'IIM Tiruchirappalli',
                'IIT Madras',
                'LPU Tamil Nadu',
                'Madras University (Distance Education)',
                'Meenakshi Ammal Dental College',
                'Periyar University (Distance Education)',
                'Pondicherry University (Distance Education)',
                'RIMT University Gobindgarh',
                'School Of Distance Education Bharathidasan University',
                'Vels University (Distance Education)',
                'SRMIST (Online)',
                'SRM Trichy (Online)',
                'VIT (Online)'
            ],
            'Telangana': [
                'Bits Pilani Hyderabad',
                'ICFAI Foundation For Higher Education (Distance Education)',
                'ICFAI University (Distance Education)',
                'ICFAI University (Online)',
                'IIM Visakhapatnam',
                'IIT Hyderabad',
                'Manav Rachna University (Distance Education)',
                'Osmania University (Distance Education)',
                'University Of Hyderabad (Distance Education)'
            ],
            'Tripura': [
                'Tripura University (Distance Education)'
            ],
            'Uttar Pradesh': [
                'CCS University (Distance Education)',
                'DDU Gorakhpur (Distance Education)',
                'GEU Graphic Era (Online)',
                'IIM Kashipur',
                'IIM Lucknow',
                'IIT Kanpur',
                'KUK DDE Lucknow University',
                'Lucknow University (Distance Education)',
                'MGU Meerut (Distance Education)',
                'MGU Meerut University',
                'MGPI Greater Noida',
                'University Of Petroleum And Energy Studies (Online)',
                'VNSGU Sagar University (Distance Education)',
                'Sharda UNI'
            ],
            'Uttarakhand': [
                'Doon Business School',
                'Dev Bhoomi Uttarakhand University (Online)',
                'Hemvati Nandan Bahuguna University',
                'Shri Guru Ram Rai University',
                'University Of Petroleum And Energy Studies (Distance Education)',
                'PTU Pantnagar'
            ],
            'West Bengal': [
                'IIM Calcutta',
                'IIT Kharagpur',
                'Kalyani University (Distance Education)',
                'Maulana Abul Kalam Azad University Of Technology West Bengal (Distance Education)',
                'Netaji Subhas Open University (Distance Education)',
                'Netaji Subhas Open University (Distance Education)',
                'Rabindra Bharati University (Distance Education)',
                'University Of Calcutta (Distance Education)',
                'Vidyasagar University (Distance Education)'
            ]
        };
        
        // Get the list of universities for the preferred state
        const stateUniversities = stateUniversityMapping[preferredState] || [];
        console.log(`📋 Expected universities for ${preferredState}:`, stateUniversities);
        console.log(`🎓 Available university names:`, universities.map(u => u.name));
        console.log(`🔍 Total universities to check: ${universities.length}`);
        
        // SPECIAL DEBUG: Let's check specifically for Maharashtra universities
        if (preferredState === 'Maharashtra') {
            console.log('🔍 SPECIAL MAHARASHTRA DEBUG:');
            const maharashtraExpected = [
                'D.Y. Patil University (Online)',
                'D.Y. Patil University Navi Mumbai (Online)',
                'IIM Mumbai',
                'IIM Nagpur',
                'IIT Bombay',
                'Indian Management School And Research Centre',
                'Mumbai University (Distance Education)',
                'NMIMS (Online)',
                'Shivaji University (Distance Education)',
                'Symbiosis (Online)',
                'Symbiosis Distance Learning',
                'Symbiosis SCDL'
            ];
            
            maharashtraExpected.forEach(expectedName => {
                const found = universities.find(u => u.name.toLowerCase().includes(expectedName.toLowerCase()) || expectedName.toLowerCase().includes(u.name.toLowerCase()));
                if (found) {
                    console.log(`✅ Found expected university: "${expectedName}" → "${found.name}"`);
                } else {
                    console.log(`❌ Missing expected university: "${expectedName}"`);
                }
            });
        }
        
        // Separate universities into preferred state and others
        const preferredStateUniversities = [];
        const otherStateUniversities = [];
        
        universities.forEach(uni => {
            const uniName = uni.name;
            console.log(`🔎 Checking university: "${uniName}"`);
            
            // Method 1: Check if university name matches any in the preferred state list
            const isInPreferredStateByName = stateUniversities.some(stateName => {
                // EXACT MATCH - both names must be identical (case insensitive)
                const match = uniName.toLowerCase() === stateName.toLowerCase();
                
                if (match) {
                    console.log(`✅ EXACT MATCH FOUND: "${uniName}" = "${stateName}"`);
                } else {
                    console.log(`❌ NO MATCH: "${uniName}" ≠ "${stateName}"`);
                }
                
                return match;
            });
            
            // Method 2: Check by location as backup
            let isInPreferredStateByLocation = false;
            if (!isInPreferredStateByName && uni.location && preferredState !== 'International') {
                const location = uni.location.toLowerCase();
                const stateLower = preferredState.toLowerCase();
                isInPreferredStateByLocation = location.includes(stateLower);
                if (isInPreferredStateByLocation) {
                    console.log(`✅ Matched university by location: "${uniName}" (${uni.location}) for state: "${preferredState}"`);
                }
            }
            
            const isInPreferredState = isInPreferredStateByName || isInPreferredStateByLocation;
            
            if (isInPreferredState) {
                console.log(`📍 Adding to preferred state: "${uniName}"`);
                preferredStateUniversities.push(uni);
            } else {
                console.log(`🌍 Adding to other states: "${uniName}"`);
                otherStateUniversities.push(uni);
            }
        });
        
        console.log(`📍 Found ${preferredStateUniversities.length} universities in ${preferredState}`);
        console.log(`🌍 Found ${otherStateUniversities.length} universities in other states`);
        
        // Return preferred state universities first, then others
        return [...preferredStateUniversities, ...otherStateUniversities];
    }
    
    applyExpandedStateFilter(universities, preferredState) {
        if (!preferredState || preferredState === 'all') {
            return universities;
        }
        
        // First try to get universities from preferred state
        const stateFiltered = this.applyStateFilter(universities, preferredState);
        
        // If we have less than 3 universities in preferred state, expand to nearby/all states
        if (stateFiltered.length < 3) {
            console.log(`⚠️ Only ${stateFiltered.length} universities found in ${preferredState}, expanding search`);
            
            // Combine preferred state universities with others, but prioritize preferred state
            const otherStates = universities.filter(uni => {
                const location = uni.location || '';
                const statePart = location.split(',').pop().trim();
                return !statePart.toLowerCase().includes(preferredState.toLowerCase());
            });
            
            // Return preferred state universities first, then others
            return [...stateFiltered, ...otherStates];
        }
        
        return stateFiltered;
    }
    
    filterUniversitiesByPreferences(responses, relevantCourses) {
        let universities = [...universityDatabase];
        
        console.log('🔍 Starting university filtering with responses:', responses);
        console.log('📚 Relevant courses to match:', relevantCourses.map(c => c.name));
        
        // Get course names and categories for filtering
        const courseNames = relevantCourses.map(course => course.name.toLowerCase());
        const courseCategories = [...new Set(relevantCourses.map(course => course.category))];
        
        // Enhanced course matching
        if (courseCategories.length > 0) {
            universities = universities.filter(uni => {
                const uniCourses = uni.courses.map(course => course.toLowerCase());
                const uniSpecs = uni.specializations.map(spec => spec.toLowerCase());
                
                // Check if university offers courses in the relevant categories
                const hasMatchingCourse = courseCategories.some(category => {
                    const catLower = category.toLowerCase();
                    
                    // Direct course name matching
                    const directMatch = uniCourses.some(course => {
                        return courseNames.some(targetCourse => 
                            course.includes(targetCourse.replace(/[^\w\s]/gi, '').toLowerCase()) ||
                            targetCourse.includes(course.replace(/[^\w\s]/gi, '').toLowerCase())
                        );
                    });
                    
                    // Category-based matching
                    const categoryMatch = uniCourses.some(course => course.includes(catLower)) ||
                                        uniSpecs.some(spec => spec.includes(catLower));
                    
                    // Special matching rules for common categories
                    const specialMatch = this.getSpecialCourseMatch(catLower, uniCourses, uniSpecs);
                    
                    return directMatch || categoryMatch || specialMatch;
                });
                
                return hasMatchingCourse;
            });
            
            console.log(`📊 After course filtering: ${universities.length} universities`);
        }
        
        // Filter by current status preferences
        if (responses.current_status === 'working_professional') {
            universities = universities.filter(uni => 
                uni.mode.includes('Online') || 
                uni.mode.includes('Distance') ||
                uni.mode.includes('Part-time') ||
                uni.description?.toLowerCase().includes('working professional')
            );
            console.log(`👔 After working professional filter: ${universities.length} universities`);
        }
        
        // Filter by study mode preference
        if (responses.study_mode) {
            universities = this.applyStudyModeFilter(universities, responses.study_mode);
            console.log(`🎓 After study mode filter: ${universities.length} universities`);
        }
        
        return universities;
    }
    
    getSpecialCourseMatch(category, uniCourses, uniSpecs) {
        const categoryMappings = {
            'management': ['mba', 'bba', 'pgdm', 'management', 'business'],
            'engineering': ['mtech', 'be', 'btech', 'me', 'engineering'],
            'computer applications': ['mca', 'bca', 'computer', 'it', 'software'],
            'data science': ['data', 'analytics', 'machine learning', 'ai'],
            'commerce': ['bcom', 'mcom', 'commerce', 'accounting'],
            'finance': ['finance', 'banking', 'financial', 'investment'],
            'marketing': ['marketing', 'digital marketing', 'sales'],
            'human resources': ['hr', 'human resources', 'hrm'],
            'arts': ['ba', 'ma', 'arts', 'humanities'],
            'law': ['llb', 'llm', 'law', 'legal'],
            'design': ['design', 'creative', 'graphics', 'ui', 'ux'],
            'media': ['media', 'journalism', 'communication', 'mass comm'],
            'education': ['bed', 'med', 'education', 'teaching']
        };
        
        const mappings = categoryMappings[category] || [];
        return mappings.some(mapping => 
            uniCourses.some(course => course.includes(mapping)) ||
            uniSpecs.some(spec => spec.includes(mapping))
        );
    }
    
    applyStateFilter(universities, preferredState) {
        if (!preferredState || preferredState === 'all') {
            return universities;
        }
        
        // Exact mapping of states to available universities
        const stateUniversityMapping = {
            'International': [
                'Harvard',
                'Deakin',
                'Edgewood',
                'ESGCI',
                'Golden Gate',
                'Liberty',
                'Liverpool John Moores',
                'Paris School of Business',
                'Purdue',
                'Queen Margaret',
                'Rushford',
                'Ssbm Geneva',
                'University of Dallas',
                'University of Michigan Flint',
                'University of South Florida',
                'Walden',
                'Westcliff',
                'Birchwood',
                'Upgrad Woolf'
            ],
            'Andhra Pradesh': [
                'Anucde Acharya Nagarjuna (Distance Education)',
                'Gitam University (Distance Education)',
                'KL University (Distance Education)',
                'KL University (Online)',
                'SPMVV (Distance Education)',
                'SVU DDE Sri Venkateswara (Distance Education)',
                'Vignan University (Online)'
            ],
            'Assam': [
                'Dibrugarh University (Distance Education)',
                'IIT Guwahati'
            ],
            'Bihar': [
                'IIM Bodh Gaya'
            ],
            'Chhattisgarh': [
                'IIM Raipur',
                'Kalinga University Engineering'
            ],
            'Delhi': [
                'DU SOL',
                'Jamia Hamdard (Online)',
                'Jamia Millia Islamia (Distance Education)',
                'Jamia Millia Islamia (Online)',
                'Jamia Millia Islamia University (Online)',
                'IGNOU'
            ],
            'Gujarat': [
                'Parul University (Online)'
            ],
            'Haryana': [
                'JGU (Online) Coursera',
                'KUK DDE Kurukshetra University (Distance Education)',
                'Kurukshetra University (Online)',
                'Lingayas Vidyapeeth',
                'Maharishi Markandeshwar University (Online)',
                'Manav Rachna University (Online)',
                'O P Jindal Global University'
            ],
            'Himachal Pradesh': [
                'Himachal Pradesh University (Distance Education)',
                'IIM Sirmaur',
                'Shoolini University (Online)'
            ],
            'Jammu & Kashmir': [
                'IIM Jammu',
                'Jammu University (Distance Education)',
                'University Of Kashmir (Distance Education)'
            ],
            'Jharkhand': [
                'IIM Ranchi'
            ],
            'Karnataka': [
                'Jain University (Distance Education)',
                'Jain University (Online)',
                'Kuvempu University (Distance Education)',
                'Mahe Manipal (Online)',
                'Svyasa (Distance Education)'
            ],
            'Kerala': [
                'IIM Kozhikode',
                'University Of Calicut (Distance Education)'
            ],
            'Madhya Pradesh': [
                'IIM Indore'
            ],
            'Maharashtra': [
                'D.Y. Patil University (Online)',
                'D.Y. Patil University Navi Mumbai (Online)',
                'IIM Mumbai',
                'IIM Nagpur',
                'IIT Bombay',
                'Indian Management School And Research Centre',
                'Mumbai University (Distance Education)',
                'NMIMS (Online)',
                'Shivaji University (Distance Education)',
                'Symbiosis (Online)',
                'Symbiosis Distance Learning',
                'Symbiosis SCDL'
            ],
            'Meghalaya': [
                'IIM Shillong'
            ],
            'Mizoram': [
                'Mizoram University (Online)'
            ],
            'Odisha': [
                'KIIT University (Online)',
                'IIM Sambalpur',
                'XIM University Bhubaneswar'
            ],
            'Punjab': [
                'Chandigarh University Distance',
                'Chandigarh University (Online)',
                'Guru Kashi University (Online)',
                'IIM Amritsar',
                'IIT Ropar',
                'Lovely Professional University (Distance Education)',
                'Lovely Professional University (Online)',
                'Punjabi University (Distance Education)'
            ],
            'Puducherry': [
                'Pudde Pondicherry University (Distance Education)'
            ],
            'Rajasthan': [
                'Bits Pilani',
                'IIM Udaipur',
                'Mody University (Online)',
                'Suresh Gyan Vihar (Distance Education)',
                'Vivekananda Global University (Online)',
                'Manipal University (Online)'
            ],
            'Sikkim': [
                'Sikkim Manipal University (Online)',
                'Smude Sikkim Manipal University (Distance Education)',
                'SRM University (Online) Sikkim'
            ],
            'Tamil Nadu': [
                'Alagappa University (Distance Education)',
                'Amrita University (Online)',
                'Anna University (Distance Education)',
                'Annamalai (Distance Education)',
                'Bharathiar University (Distance Education)',
                'Bharathidasan University (Distance Education)',
                'IIM Trichy',
                'IIT Madras',
                'Loyola Institute Of Business Administration',
                'Madras University (Distance Education)',
                'Manonmaniam Sundaranar University (Distance Education)',
                'Mku Madurai Kamaraj University (Distance Education)',
                'Periyar University (Distance Education)',
                'Srm University (Online)'
            ],
            'Telangana': [
                'English And Foreign Languages University (Distance Education)',
                'Kakatiya University (Distance Education)',
                'Manuu Maulana Azad National Urdu University Distance',
                'Nalsar University Of Law (Distance Education)',
                'Osmania University (Distance Education)'
            ],
            'Uttar Pradesh': [
                'Aligarh Muslim University (Online)',
                'Amity University (Distance Education)',
                'Amity University (Online)',
                'Bimtech Greater Noida',
                'Chaudhary Charan Singh University (Online)',
                'Ddu Deen Dayal Upadhyay Gorakhpur (Online)',
                'Galgotias University (Online)',
                'GLA University (Online)',
                'IIM Lucknow',
                'IIT Kanpur',
                'IIT Varanasi',
                'IMT Center For Distance Learning',
                'IMT Ghaziabad',
                'Sanskriti University Engineering',
                'Sharda University (Online)',
                'Shobhit University (Online)',
                'Subharti University (Distance Education)',
                'SVU Gajraula Wilp'
            ],
            'Uttarakhand': [
                'Graphic Era University (Online)',
                'IIM Kashipur',
                'IIT Roorkee',
                'UPES (Online)',
                'UPES CCE Center For Continuing Education',
                'Uttaranchal University (Online)'
            ],
            'West Bengal': [
                'IIT Kharagpur',
                'Kalyani University (Distance Education)',
                'Rabindra Bharati University (Distance Education)'
            ]
        };
        
        const allowedUniversities = stateUniversityMapping[preferredState] || [];
        
        // Filter universities based on state
        const filteredByState = universities.filter(university => {
            const universityName = university.name;
            // Check if university name matches any of the allowed universities for this state
            return allowedUniversities.some(allowedName => 
                universityName.toLowerCase().includes(allowedName.toLowerCase()) ||
                allowedName.toLowerCase().includes(universityName.toLowerCase())
            );
        });
        
        // Store information about whether we found universities in the preferred state
        this.stateFilterResult = {
            hasUniversitiesInState: filteredByState.length > 0,
            preferredState: preferredState,
            filteredCount: filteredByState.length
        };
        
        return filteredByState;
    }
    
    applyBudgetFilter(universities, budgetRange) {
        if (!budgetRange) return universities;
        
        // Updated budget ranges to match new options
        const budgetRanges = {
            'upto_1lac': { min: 0, max: 100000 },
            '1lac_3lac': { min: 100000, max: 300000 },
            '3lac_5lac': { min: 300000, max: 500000 },
            '5lac_8lac': { min: 500000, max: 800000 },
            '8lac_above': { min: 800000, max: Infinity }
        };
        
        const budget = budgetRanges[budgetRange];
        if (!budget) return universities;
        
        console.log(`💰 Applying budget filter: ₹${budget.min} - ₹${budget.max}`);
        
        return universities.filter(uni => {
            // Use university's fee range or courses database for fee info
            if (uni.fees && uni.fees.min !== undefined) {
                const uniMinFee = uni.fees.min || 0;
                return uniMinFee <= budget.max;
            }
            
            // If no direct fee info, check against courses database
            if (typeof coursesDatabase !== 'undefined' && coursesDatabase.length > 0) {
                const affordableCourses = coursesDatabase.filter(course => {
                    if (!course.fees || course.fees.min === undefined) return false;
                    const courseMinFee = course.fees.min || 0;
                    return courseMinFee >= budget.min && courseMinFee <= budget.max;
                });
                
                if (affordableCourses.length === 0) return false;
                
                // Check if university offers any of these affordable courses
                return affordableCourses.some(course => {
                    const uniCourses = uni.courses.join(' ').toLowerCase();
                    const courseName = course.name.toLowerCase();
                    return uniCourses.includes(courseName) || 
                           courseName.includes(uniCourses.split(' ')[0]);
                });
            }
            
            // Fallback: assume university is affordable if no fee info available
            return true;
        });
    }
    
    applyStudyModeFilter(universities, studyMode) {
        if (!studyMode) return universities;
        
        return universities.filter(uni => {
            const modes = uni.mode || [];
            
            switch (studyMode) {
                case 'Online':
                    return modes.includes('Online');
                case 'Distance':
                    return modes.includes('Distance');
                case 'Regular':
                    return modes.includes('Regular') || modes.includes('Full-time');
                case 'Weekend':
                    return uni.description?.toLowerCase().includes('weekend') || 
                           modes.includes('Part-time');
                case 'Evening':
                    return uni.description?.toLowerCase().includes('evening') ||
                           modes.includes('Part-time');
                default:
                    return true;
            }
        });
    }
    
    sortUniversitiesByRelevance(universities, responses) {
        return universities.sort((a, b) => {
            // Calculate relevance score
            let scoreA = 0, scoreB = 0;
            
            // Rating weight (40%)
            scoreA += (a.rating || 3.5) * 0.4;
            scoreB += (b.rating || 3.5) * 0.4;
            
            // Reviews weight (20%)
            scoreA += Math.min((a.reviews || 100) / 1000, 1) * 0.2;
            scoreB += Math.min((b.reviews || 100) / 1000, 1) * 0.2;
            
            // Accreditation weight (20%)
            if (a.accreditation?.includes('A+')) scoreA += 0.2;
            else if (a.accreditation?.includes('A')) scoreA += 0.15;
            
            if (b.accreditation?.includes('A+')) scoreB += 0.2;
            else if (b.accreditation?.includes('A')) scoreB += 0.15;
            
            // NIRF ranking weight (20%)
            if (a.nirfRanking) scoreA += (101 - Math.min(a.nirfRanking, 100)) / 100 * 0.2;
            if (b.nirfRanking) scoreB += (101 - Math.min(b.nirfRanking, 100)) / 100 * 0.2;
            
            return scoreB - scoreA;
        });
    }
    
    enrichUniversityResults(universities, responses) {
        return universities.map(uni => {
            // Calculate course fees based on budget and university
            const courseFees = this.calculateCourseFees(uni, responses.budget_range);
            
            // Get matching courses for this university based on user's field of interest
            const matchingCourses = uni.courses?.filter(course => 
                course.toLowerCase().includes(responses.field_of_interest?.toLowerCase() || '')
            ) || [];
            
            return {
                id: uni.id,
                name: uni.name,
                type: uni.type || 'University',
                location: this.formatLocationDisplay(uni.location),
                rating: uni.rating || 4.0,
                reviews: uni.reviews || 500,
                courseFees: courseFees,
                mode: uni.mode || ['Online'],
                accreditation: uni.accreditation || 'UGC Approved',
                nirfRanking: uni.nirfRanking || null,
                studentsChoice: (uni.rating || 0) > 4.0,
                courses: uni.courses || [],
                specializations: uni.specializations || [],
                placements: uni.placements || { offered: false },
                establishedYear: uni.establishedYear,
                website: uni.website,
                matchingCourses: matchingCourses.slice(0, 3), // Show top 3 matching courses
                approvals: uni.approvals || ['UGC']
            };
        });
    }
    
    calculateCourseFees(university, budgetRange) {
        if (university.fees && university.fees.min && university.fees.max) {
            const min = university.fees.min;
            const max = university.fees.max;
            
            if (min < 50000) return `₹${(min/1000).toFixed(0)}K - ₹${(max/1000).toFixed(0)}K`;
            else if (min < 100000) return `₹${(min/100000).toFixed(1)}L - ₹${(max/100000).toFixed(1)}L`;
            else return `₹${(min/100000).toFixed(1)}L - ₹${(max/100000).toFixed(1)}L`;
        }
        
        // Fallback based on budget range
        const feeRanges = {
            'budget_low': '₹25K - ₹50K',
            'budget_medium_low': '₹50K - ₹1.5L',
            'budget_medium': '₹1.5L - ₹3L',
            'budget_high': '₹3L - ₹5L',
            'budget_premium': '₹5L+'
        };
        
        return feeRanges[budgetRange] || '₹1L - ₹3L';
    }
    
    getStateNotFoundFallback(responses, relevantCourses) {
        console.log(`🔄 No universities found in ${responses.preferred_state}, providing fallback recommendations`);
        
        // Get universities from other states that match the user's other criteria
        let fallbackUniversities = [...universityDatabase];
        
        // Apply all filters except state filter
        fallbackUniversities = this.filterUniversitiesByPreferences(responses, relevantCourses);
        fallbackUniversities = this.applyBudgetFilter(fallbackUniversities, responses.budget_range, relevantCourses);
        fallbackUniversities = this.applyStudyModeFilter(fallbackUniversities, responses.study_mode);
        fallbackUniversities = this.sortUniversitiesByRelevance(fallbackUniversities, responses);
        
        // Take top 8 results
        const fallbackResults = fallbackUniversities.slice(0, 8);
        
        // Enrich with special message for state not found
        const enrichedResults = this.enrichUniversityResults(fallbackResults, responses, relevantCourses);
        
        // Add special message about state not found
        return {
            ...enrichedResults,
            stateNotFound: true,
            stateNotFoundMessage: `No universities found in ${responses.preferred_state}. Here are the best alternatives from other states that match your preferences:`,
            preferredState: responses.preferred_state
        };
    }
    
    getIntelligentFallback(responses) {
        console.log('🔄 Using intelligent fallback system');
        
        // Relax some criteria and try again
        let universities = [...universityDatabase];
        
        // Apply only essential filters
        if (responses.field_of_interest) {
            universities = universities.filter(uni => {
                const courses = uni.courses.join(' ').toLowerCase();
                const specs = uni.specializations.join(' ').toLowerCase();
                const field = responses.field_of_interest.toLowerCase();
                
                return courses.includes(field) || specs.includes(field);
            });
        }
        
        // If still no results, return top-rated universities
        if (universities.length === 0) {
            universities = universityDatabase.slice().sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }
        
        return this.enrichUniversityResults(universities.slice(0, 6), responses, []);
    }
    
    getFallbackUniversities(responses) {
        console.log('Using fallback universities for responses:', responses);
        
        // Curated list of top universities for different fields
        const fallbackUniversities = [
            {
                name: 'AMITY University Online',
                type: 'Private University',
                rating: 4.2,
                reviews: 1250,
                courseFees: this.estimateCourseFees(responses.budget, responses.field),
                location: 'Delhi NCR',
                nirfRanking: 25,
                mode: ['Online', 'Distance'],
                accreditation: 'UGC, NAAC A+',
                studentsChoice: true,
                courses: ['MBA', 'BBA', 'MCA', 'BCA', 'Engineering'],
                specializations: ['Management', 'Technology', 'Commerce']
            },
            {
                name: 'Lovely Professional University (LPU)',
                type: 'Private University',
                rating: 4.1,
                reviews: 2100,
                courseFees: this.estimateCourseFees(responses.budget, responses.field),
                location: 'Punjab',
                nirfRanking: 35,
                mode: ['Online', 'Distance', 'Regular'],
                accreditation: 'UGC, NAAC A+',
                studentsChoice: true,
                courses: ['MBA', 'Engineering', 'Computer Science', 'Arts'],
                specializations: ['Business Management', 'Technology', 'Digital Marketing']
            },
            {
                name: 'Manipal University Online',
                type: 'Private University',
                rating: 4.3,
                reviews: 980,
                courseFees: this.estimateCourseFees(responses.budget, responses.field),
                location: 'Karnataka',
                nirfRanking: 15,
                mode: ['Online', 'Hybrid'],
                accreditation: 'UGC, NAAC A++',
                studentsChoice: true,
                courses: ['MBA', 'MCA', 'Data Science', 'Digital Marketing'],
                specializations: ['Healthcare Management', 'Data Analytics', 'Marketing']
            },
            {
                name: 'IGNOU (Indira Gandhi National Open University)',
                type: 'Central University',
                rating: 4.0,
                reviews: 3500,
                courseFees: this.estimateCourseFees(responses.budget, responses.field),
                location: 'Delhi',
                nirfRanking: null,
                mode: ['Distance', 'Online'],
                accreditation: 'UGC, DEB Approved',
                studentsChoice: true,
                courses: ['MBA', 'MCA', 'BA', 'MA', 'Engineering'],
                specializations: ['Management', 'Computer Applications', 'Arts', 'Commerce']
            },
            {
                name: 'Symbiosis Centre for Distance Learning',
                type: 'Private University',
                rating: 4.4,
                reviews: 1800,
                courseFees: this.estimateCourseFees(responses.budget, responses.field),
                location: 'Pune',
                nirfRanking: 20,
                mode: ['Distance', 'Online'],
                accreditation: 'UGC, NAAC A',
                studentsChoice: true,
                courses: ['MBA', 'BBA', 'Law', 'Computer Science'],
                specializations: ['Business Management', 'Law', 'Technology', 'Finance']
            },
            {
                name: 'Chandigarh University Online',
                type: 'Private University',
                rating: 4.1,
                reviews: 1500,
                courseFees: this.estimateCourseFees(responses.budget, responses.field),
                location: 'Chandigarh',
                nirfRanking: 30,
                mode: ['Online', 'Distance'],
                accreditation: 'UGC, NAAC A+',
                studentsChoice: true,
                courses: ['MBA', 'Engineering', 'Computer Science', 'Commerce'],
                specializations: ['Management', 'Engineering', 'Technology', 'Digital Marketing']
            }
        ];
        
        // Filter fallback universities based on field preference
        let relevantUniversities = fallbackUniversities;
        
        if (responses.field) {
            relevantUniversities = fallbackUniversities.filter(uni => {
                const courses = uni.courses.map(c => c.toLowerCase());
                const specializations = uni.specializations.map(s => s.toLowerCase());
                
                switch (responses.field) {
                    case 'mba':
                        return courses.includes('mba') || specializations.some(s => s.includes('management'));
                    
                    case 'engineering':
                        return courses.includes('engineering') || specializations.some(s => s.includes('engineering'));
                    
                    case 'computer_science':
                        return courses.includes('computer science') || courses.includes('mca') || 
                               specializations.some(s => s.includes('technology'));
                    
                    case 'data_science':
                        return specializations.some(s => s.includes('data')) || courses.includes('data science');
                    
                    case 'digital_marketing':
                        return specializations.some(s => s.includes('marketing') || s.includes('digital'));
                    
                    case 'commerce':
                        return courses.includes('commerce') || specializations.some(s => s.includes('finance'));
                    
                    case 'arts':
                        return courses.includes('arts') || courses.includes('ba') || courses.includes('ma');
                    
                    case 'law':
                        return courses.includes('law') || specializations.some(s => s.includes('law'));
                    
                    default:
                        return true;
                }
            });
        }
        
        // If no specific matches, return all fallback universities
        if (relevantUniversities.length === 0) {
            relevantUniversities = fallbackUniversities;
        }
        
        return relevantUniversities.slice(0, 6); // Return top 6 fallback universities
    }
    
    formatLocationDisplay(location) {
        console.log('🎯 formatLocationDisplay INPUT:', location);
        
        if (!location) {
            console.log('🎯 formatLocationDisplay OUTPUT: Location not available');
            return 'Location not available';
        }
        
        // If location already contains comma (like "Mumbai, Maharashtra" or "Chennai, Tamil Nadu")
        // Return as-is to display City, State format
        if (location.includes(',')) {
            console.log('🎯 formatLocationDisplay OUTPUT:', location, '(City, State format)');
            return location;
        }
        
        // If single word (just state name like "Maharashtra", "Punjab", "Kerala")
        // Return as-is to display just the state
        console.log('🎯 formatLocationDisplay OUTPUT:', location, '(State only)');
        return location;
    }
    
    generateModernCardHTML(universities) {
        const cssStyles = `
        <style>
        .universities-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin: 40px auto;
            max-width: 1300px;
            padding: 0 24px;
        }

        .modern-uni-card {
            background: #ffffff;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            backdrop-filter: blur(10px);
        }

        .modern-uni-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
            border-color: rgba(99, 102, 241, 0.3);
        }

        .modern-card-header {
            position: relative;
            padding: 32px 28px 24px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            overflow: hidden;
        }

        .ranking-chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            padding: 8px 16px;
            font-size: 12px;
            font-weight: 600;
            color: white;
            margin-bottom: 16px;
        }

        .ranking-chip.top-ranking {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: #92400e;
        }

        .modern-uni-name {
            font-size: 22px;
            font-weight: 700;
            color: white;
            margin: 0 0 12px 0;
            line-height: 1.3;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .location-tag {
            display: flex;
            align-items: center;
            gap: 8px;
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            font-weight: 500;
        }

        .rating-modern-section {
            padding: 24px 28px;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .rating-display {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .rating-circle-modern {
            position: relative;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
        }

        .rating-value {
            font-size: 20px;
            font-weight: 800;
            color: white;
        }

        .rating-max {
            position: absolute;
            bottom: 8px;
            right: 8px;
            font-size: 10px;
            color: rgba(255, 255, 255, 0.8);
        }

        .rating-info {
            flex: 1;
        }

        .stars-modern {
            display: flex;
            gap: 3px;
            margin-bottom: 6px;
        }

        .star-filled {
            color: #fbbf24;
            font-size: 16px;
        }

        .star-empty {
            color: #d1d5db;
            font-size: 16px;
        }

        .reviews-count {
            color: #6b7280;
            font-size: 13px;
            font-weight: 500;
        }

        .info-grid-modern {
            padding: 28px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .info-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 16px;
            background: linear-gradient(135deg, #fefefe 0%, #f9fafb 100%);
            border-radius: 16px;
            border: 1px solid #f3f4f6;
            transition: all 0.3s ease;
        }

        .info-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        }

        .info-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6366f1;
            font-size: 16px;
            flex-shrink: 0;
        }

        .info-icon.fees-icon {
            background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
            color: #059669;
        }

        .info-content {
            flex: 1;
        }

        .info-label {
            font-size: 12px;
            color: #6b7280;
            font-weight: 500;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .info-value {
            font-size: 14px;
            color: #111827;
            font-weight: 600;
            line-height: 1.4;
        }

        .modern-actions {
            padding: 20px 28px 28px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 16px;
        }

        .modern-btn {
            position: relative;
            border: none;
            border-radius: 12px;
            padding: 14px 24px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
        }

        .primary-modern {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
        }

        .primary-modern:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }

        .secondary-modern {
            background: white;
            color: #6366f1;
            border: 2px solid #e5e7eb;
        }

        .secondary-modern:hover {
            background: #f8fafc;
            border-color: #6366f1;
            transform: translateY(-1px);
        }

        @media (max-width: 768px) {
            .universities-grid {
                grid-template-columns: 1fr;
                gap: 24px;
                padding: 0 16px;
            }
            
            .modern-actions {
                grid-template-columns: 1fr;
            }
            
            .info-grid-modern {
                grid-template-columns: 1fr;
                gap: 16px;
            }
            
            .modern-uni-name {
                font-size: 20px;
            }
        }
        </style>
        `;

        const cardsHTML = universities.map((uni, idx) => `
                <div class="modern-uni-card" data-aos="fade-up" data-aos-delay="${idx * 100}">
                    <div class="modern-card-header">
                        <div class="header-content">
                            <div class="ranking-chip ${uni.nirfRanking && uni.nirfRanking <= 50 ? 'top-ranking' : 'good-ranking'}">
                                <i class="fas fa-trophy"></i>
                                <span>${uni.nirfRanking ? 'Rank #' + uni.nirfRanking : 'Top Ranked'}</span>
                            </div>
                            <h3 class="modern-uni-name">${uni.name}</h3>
                            <div class="location-tag">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${this.formatLocationDisplay(uni.location)}</span>
                            </div>
                        </div>
                    </div>

                    <div class="rating-modern-section">
                        <div class="rating-display">
                            <div class="rating-circle-modern">
                                <span class="rating-value">${uni.rating}</span>
                                <div class="rating-max">/5</div>
                            </div>
                            <div class="rating-info">
                                <div class="stars-modern">
                                    ${[1,2,3,4,5].map(star => 
                                        '<i class="fas fa-star ' + (star <= Math.floor(uni.rating) ? 'star-filled' : 'star-empty') + '"></i>'
                                    ).join('')}
                                </div>
                                <div class="reviews-count">${uni.reviews.toLocaleString()} student reviews</div>
                            </div>
                        </div>
                    </div>

                    <div class="info-grid-modern">
                        <div class="info-item">
                            <div class="info-icon fees-icon">
                                <i class="fas fa-rupee-sign"></i>
                            </div>
                            <div class="info-content">
                                <div class="info-label">Annual Fees</div>
                                <div class="info-value">${uni.courseFees}</div>
                            </div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-icon">
                                <i class="fas fa-desktop"></i>
                            </div>
                            <div class="info-content">
                                <div class="info-label">Study Mode</div>
                                <div class="info-value">${Array.isArray(uni.mode) ? uni.mode.join(', ') : uni.mode}</div>
                            </div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-icon">
                                <i class="fas fa-award"></i>
                            </div>
                            <div class="info-content">
                                <div class="info-label">Accreditation</div>
                                <div class="info-value">${uni.accreditation}</div>
                            </div>
                        </div>
                    </div>

                    <div class="modern-actions">
                        <button class="modern-btn secondary-modern" onclick="contactUniversity('${uni.name}')">
                            <i class="fas fa-phone-alt"></i>
                            <span>Contact</span>
                        </button>
                    </div>
                </div>
        `).join('');

        return cssStyles + `
        <div class="universities-grid">
            ${cardsHTML}
        </div>
        `;
    }
}

// Global functions for button interactions
function downloadBrochure(universityName) {
    alert('Downloading brochure for ' + universityName + '...');
}

function contactUniversity(universityName) {
    alert('Connecting you with ' + universityName + ' admissions team...');
}

// Global functions for questionnaire handling
function handleQuestionResponse(questionId, answer) {
    console.log('🔄 HandleQuestionResponse called:', questionId, answer);
    if (window.globalAISystem) {
        const newContent = window.globalAISystem.handleResponse(questionId, answer);
        document.getElementById('aiRecommendationContent').innerHTML = newContent;
    } else {
        console.error('❌ Global AI System not initialized!');
    }
}

function goToPreviousQuestion() {
    if (window.globalAISystem) {
        const newContent = window.globalAISystem.goToPrevious();
        if (newContent) {
            document.getElementById('aiRecommendationContent').innerHTML = newContent;
        }
    } else {
        console.error('❌ Global AI System not initialized!');
    }
}

function restartQuestionnaire() {
    if (window.globalAISystem) {
        const newContent = window.globalAISystem.startQuestionnaire();
        document.getElementById('aiRecommendationContent').innerHTML = newContent;
    } else {
        console.error('❌ Global AI System not initialized!');
    }
}

window.AIRecommendationSystem = AIRecommendationSystem;


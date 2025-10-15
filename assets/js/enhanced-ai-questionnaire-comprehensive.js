// Enhanced AI Course Recommendation System - College Vidya Style Comprehensive Assessment
class EnhancedAIRecommendationSystem {
    constructor() {
        this.currentStep = 0;
        this.userResponses = {};
        this.totalSteps = 7;
        
        // State mapping for location-based filtering
        this.stateMapping = {
            'andhra_pradesh': ['Andhra Pradesh', 'AP'],
            'arunachal_pradesh': ['Arunachal Pradesh'],
            'assam': ['Assam'],
            'bihar': ['Bihar'],
            'chhattisgarh': ['Chhattisgarh'],
            'goa': ['Goa'],
            'gujarat': ['Gujarat'],
            'haryana': ['Haryana'],
            'himachal_pradesh': ['Himachal Pradesh'],
            'jharkhand': ['Jharkhand'],
            'karnataka': ['Karnataka'],
            'kerala': ['Kerala'],
            'madhya_pradesh': ['Madhya Pradesh', 'MP'],
            'maharashtra': ['Maharashtra'],
            'manipur': ['Manipur'],
            'meghalaya': ['Meghalaya'],
            'mizoram': ['Mizoram'],
            'nagaland': ['Nagaland'],
            'odisha': ['Odisha', 'Orissa'],
            'punjab': ['Punjab'],
            'rajasthan': ['Rajasthan'],
            'sikkim': ['Sikkim'],
            'tamil_nadu': ['Tamil Nadu', 'TN'],
            'telangana': ['Telangana'],
            'tripura': ['Tripura'],
            'uttar_pradesh': ['Uttar Pradesh', 'UP'],
            'uttarakhand': ['Uttarakhand'],
            'west_bengal': ['West Bengal', 'WB'],
            'delhi': ['Delhi', 'New Delhi', 'NCR'],
            'chandigarh': ['Chandigarh'],
            'jammu_kashmir': ['Jammu & Kashmir', 'Jammu and Kashmir', 'J&K'],
            'ladakh': ['Ladakh'],
            'andaman_nicobar': ['Andaman & Nicobar Islands'],
            'dadra_nagar_haveli': ['Dadra & Nagar Haveli', 'Daman & Diu'],
            'lakshadweep': ['Lakshadweep'],
            'puducherry': ['Puducherry', 'Pondicherry']
        };
        
        // Neighboring states mapping for fallback
        this.neighboringStates = {
            'andhra_pradesh': ['telangana', 'karnataka', 'tamil_nadu', 'odisha'],
            'arunachal_pradesh': ['assam', 'nagaland'],
            'assam': ['arunachal_pradesh', 'nagaland', 'manipur', 'mizoram', 'tripura', 'meghalaya', 'west_bengal'],
            'bihar': ['jharkhand', 'uttar_pradesh', 'west_bengal'],
            'chhattisgarh': ['madhya_pradesh', 'maharashtra', 'telangana', 'andhra_pradesh', 'odisha', 'jharkhand'],
            'goa': ['maharashtra', 'karnataka'],
            'gujarat': ['rajasthan', 'madhya_pradesh', 'maharashtra'],
            'haryana': ['punjab', 'himachal_pradesh', 'uttar_pradesh', 'rajasthan', 'delhi'],
            'himachal_pradesh': ['punjab', 'haryana', 'uttarakhand', 'uttar_pradesh'],
            'jharkhand': ['bihar', 'uttar_pradesh', 'chhattisgarh', 'odisha', 'west_bengal'],
            'karnataka': ['maharashtra', 'goa', 'andhra_pradesh', 'telangana', 'tamil_nadu', 'kerala'],
            'kerala': ['karnataka', 'tamil_nadu'],
            'madhya_pradesh': ['uttar_pradesh', 'chhattisgarh', 'maharashtra', 'gujarat', 'rajasthan'],
            'maharashtra': ['madhya_pradesh', 'gujarat', 'karnataka', 'goa', 'telangana', 'chhattisgarh'],
            'manipur': ['nagaland', 'assam', 'mizoram'],
            'meghalaya': ['assam', 'tripura'],
            'mizoram': ['assam', 'manipur', 'tripura'],
            'nagaland': ['arunachal_pradesh', 'assam', 'manipur'],
            'odisha': ['jharkhand', 'chhattisgarh', 'andhra_pradesh', 'west_bengal'],
            'punjab': ['haryana', 'himachal_pradesh', 'rajasthan'],
            'rajasthan': ['punjab', 'haryana', 'uttar_pradesh', 'madhya_pradesh', 'gujarat'],
            'sikkim': ['west_bengal'],
            'tamil_nadu': ['kerala', 'karnataka', 'andhra_pradesh', 'puducherry'],
            'telangana': ['maharashtra', 'chhattisgarh', 'odisha', 'andhra_pradesh', 'karnataka'],
            'tripura': ['assam', 'mizoram', 'meghalaya'],
            'uttar_pradesh': ['uttarakhand', 'himachal_pradesh', 'haryana', 'rajasthan', 'madhya_pradesh', 'chhattisgarh', 'jharkhand', 'bihar', 'delhi'],
            'uttarakhand': ['himachal_pradesh', 'uttar_pradesh'],
            'west_bengal': ['jharkhand', 'odisha', 'assam', 'sikkim'],
            'delhi': ['haryana', 'uttar_pradesh'],
            'chandigarh': ['punjab', 'haryana'],
            'jammu_kashmir': ['himachal_pradesh', 'punjab'],
            'ladakh': ['jammu_kashmir'],
            'puducherry': ['tamil_nadu']
        };
        
        this.questions = [
            // Step 1: Personal Background
            {
                id: 'personal_info',
                step: 1,
                title: 'Personal Information',
                questions: [
                    {
                        id: 'current_education',
                        question: 'What is your highest educational qualification?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: '10th_pass', label: '10th Standard Pass' },
                            { value: '12th_science', label: '12th Standard - Science Stream' },
                            { value: '12th_commerce', label: '12th Standard - Commerce Stream' },
                            { value: '12th_arts', label: '12th Standard - Arts/Humanities Stream' },
                            { value: 'diploma_engineering', label: 'Diploma in Engineering' },
                            { value: 'diploma_other', label: 'Diploma in Other Field' },
                            { value: 'bachelor_engineering', label: 'Bachelor\'s in Engineering/Technology' },
                            { value: 'bachelor_commerce', label: 'Bachelor\'s in Commerce/Management' },
                            { value: 'bachelor_science', label: 'Bachelor\'s in Science' },
                            { value: 'bachelor_arts', label: 'Bachelor\'s in Arts/Humanities' },
                            { value: 'bachelor_other', label: 'Bachelor\'s in Other Field' },
                            { value: 'post_graduate', label: 'Post Graduate (Any Field)' },
                            { value: 'master_engineering', label: 'Master\'s in Engineering/Technology' },
                            { value: 'master_business', label: 'Master\'s in Business/Management (MBA)' },
                            { value: 'master_science', label: 'Master\'s in Science' },
                            { value: 'master_arts', label: 'Master\'s in Arts/Humanities' },
                            { value: 'master_other', label: 'Master\'s in Other Field' },
                            { value: 'professional_ca', label: 'Chartered Accountant (CA)' },
                            { value: 'professional_cs', label: 'Company Secretary (CS)' },
                            { value: 'professional_cma', label: 'Cost and Management Accountant (CMA)' },
                            { value: 'professional_other', label: 'Other Professional Qualification' },
                            { value: 'doctorate', label: 'Doctorate/PhD' }
                        ]
                    },
                    {
                        id: 'graduation_year',
                        question: 'When did you complete/will you complete your current qualification?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: '2024', label: '2024' },
                            { value: '2023', label: '2023' },
                            { value: '2022', label: '2022' },
                            { value: '2021', label: '2021' },
                            { value: '2020', label: '2020' },
                            { value: '2019', label: '2019' },
                            { value: '2018', label: '2018' },
                            { value: 'before_2018', label: 'Before 2018' },
                            { value: '2025', label: '2025 (Expected)' },
                            { value: '2026', label: '2026 (Expected)' }
                        ]
                    }
                ]
            },
            // Step 2: Work Experience
            {
                id: 'work_experience',
                step: 2,
                title: 'Professional Experience',
                questions: [
                    {
                        id: 'work_status',
                        question: 'What is your current work status?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'student', label: 'Student (No Work Experience)' },
                            { value: 'fresher', label: 'Fresh Graduate (Looking for Job)' },
                            { value: 'working_professional', label: 'Working Professional' },
                            { value: 'business_owner', label: 'Business Owner/Entrepreneur' },
                            { value: 'freelancer', label: 'Freelancer/Consultant' },
                            { value: 'homemaker', label: 'Homemaker' },
                            { value: 'career_break', label: 'Career Break' }
                        ]
                    },
                    {
                        id: 'experience_years',
                        question: 'Total work experience (if any)',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'no_experience', label: 'No Work Experience' },
                            { value: '0_1_years', label: '0-1 Years' },
                            { value: '1_2_years', label: '1-2 Years' },
                            { value: '2_3_years', label: '2-3 Years' },
                            { value: '3_5_years', label: '3-5 Years' },
                            { value: '5_8_years', label: '5-8 Years' },
                            { value: '8_12_years', label: '8-12 Years' },
                            { value: '12_plus_years', label: '12+ Years' }
                        ]
                    },
                    {
                        id: 'industry_background',
                        question: 'Which industry do you work in (or want to work in)?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'it_software', label: 'Information Technology & Software' },
                            { value: 'banking_finance', label: 'Banking & Financial Services' },
                            { value: 'consulting', label: 'Management Consulting' },
                            { value: 'manufacturing', label: 'Manufacturing & Engineering' },
                            { value: 'healthcare', label: 'Healthcare & Life Sciences' },
                            { value: 'education', label: 'Education & Training' },
                            { value: 'retail_ecommerce', label: 'Retail & E-commerce' },
                            { value: 'media_advertising', label: 'Media & Advertising' },
                            { value: 'government', label: 'Government & Public Sector' },
                            { value: 'automotive', label: 'Automotive' },
                            { value: 'real_estate', label: 'Real Estate & Construction' },
                            { value: 'telecommunications', label: 'Telecommunications' },
                            { value: 'energy_utilities', label: 'Energy & Utilities' },
                            { value: 'hospitality_travel', label: 'Hospitality & Travel' },
                            { value: 'agriculture', label: 'Agriculture & Food Processing' },
                            { value: 'other', label: 'Other Industry' }
                        ]
                    }
                ]
            },
            // Step 3: Career Goals & Specialization
            {
                id: 'career_goals',
                step: 3,
                title: 'Career Aspirations & Specialization',
                questions: [
                    {
                        id: 'field_of_interest',
                        question: 'Which field/specialization interests you the most?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'computer_science', label: 'Computer Science & Information Technology' },
                            { value: 'data_science', label: 'Data Science & Analytics' },
                            { value: 'artificial_intelligence', label: 'Artificial Intelligence & Machine Learning' },
                            { value: 'cyber_security', label: 'Cyber Security' },
                            { value: 'software_development', label: 'Software Development & Programming' },
                            { value: 'web_development', label: 'Web Development & Design' },
                            { value: 'mobile_app_development', label: 'Mobile App Development' },
                            { value: 'cloud_computing', label: 'Cloud Computing & DevOps' },
                            { value: 'business_management', label: 'Business Management & Administration' },
                            { value: 'finance_banking', label: 'Finance & Banking' },
                            { value: 'accounting', label: 'Accounting & Taxation' },
                            { value: 'marketing_sales', label: 'Marketing & Sales' },
                            { value: 'digital_marketing', label: 'Digital Marketing & Social Media' },
                            { value: 'human_resources', label: 'Human Resources Management' },
                            { value: 'operations_management', label: 'Operations & Supply Chain Management' },
                            { value: 'project_management', label: 'Project Management' },
                            { value: 'healthcare_medical', label: 'Healthcare & Medical Sciences' },
                            { value: 'nursing', label: 'Nursing & Patient Care' },
                            { value: 'pharmacy', label: 'Pharmacy & Pharmaceutical Sciences' },
                            { value: 'education_teaching', label: 'Education & Teaching' },
                            { value: 'law_legal', label: 'Law & Legal Studies' },
                            { value: 'mechanical_engineering', label: 'Mechanical Engineering' },
                            { value: 'electrical_engineering', label: 'Electrical & Electronics Engineering' },
                            { value: 'civil_engineering', label: 'Civil Engineering & Construction' },
                            { value: 'automobile_engineering', label: 'Automobile Engineering' },
                            { value: 'design_creative', label: 'Design & Creative Arts' },
                            { value: 'fashion_design', label: 'Fashion Design & Textile' },
                            { value: 'interior_design', label: 'Interior Design & Architecture' },
                            { value: 'media_journalism', label: 'Media & Journalism' },
                            { value: 'hospitality_tourism', label: 'Hospitality & Tourism Management' },
                            { value: 'agriculture', label: 'Agriculture & Food Sciences' },
                            { value: 'psychology', label: 'Psychology & Counseling' },
                            { value: 'social_work', label: 'Social Work & NGO Management' },
                            { value: 'environmental_science', label: 'Environmental Science & Sustainability' },
                            { value: 'biotechnology', label: 'Biotechnology & Life Sciences' },
                            { value: 'aviation', label: 'Aviation & Aerospace' },
                            { value: 'logistics', label: 'Logistics & Transportation' },
                            { value: 'retail_management', label: 'Retail Management' },
                            { value: 'real_estate', label: 'Real Estate Management' },
                            { value: 'sports_management', label: 'Sports Management & Fitness' },
                            { value: 'other', label: 'Other Field/Undecided' }
                        ]
                    },
                    {
                        id: 'career_objective',
                        question: 'What is your primary career objective?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'career_switch', label: 'Switch to a Different Career Field' },
                            { value: 'skill_upgrade', label: 'Upgrade Skills in Current Field' },
                            { value: 'promotion', label: 'Get Promotion/Leadership Role' },
                            { value: 'salary_increase', label: 'Increase Salary/Package' },
                            { value: 'start_business', label: 'Start My Own Business' },
                            { value: 'work_abroad', label: 'Work in International Markets' },
                            { value: 'job_security', label: 'Better Job Security & Stability' },
                            { value: 'work_life_balance', label: 'Better Work-Life Balance' },
                            { value: 'personal_growth', label: 'Personal Development & Growth' },
                            { value: 'industry_recognition', label: 'Gain Industry Recognition' }
                        ]
                    },
                    {
                        id: 'target_role',
                        question: 'What type of role are you targeting after course completion?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'senior_management', label: 'Senior Management (Director/VP level)' },
                            { value: 'middle_management', label: 'Middle Management (Manager/AM level)' },
                            { value: 'team_lead', label: 'Team Lead/Supervisor' },
                            { value: 'specialist_expert', label: 'Subject Matter Expert/Specialist' },
                            { value: 'consultant', label: 'Independent Consultant' },
                            { value: 'entrepreneur', label: 'Entrepreneur/Business Owner' },
                            { value: 'freelancer', label: 'Freelancer/Contractor' },
                            { value: 'govt_job', label: 'Government Job' },
                            { value: 'teaching_training', label: 'Teaching/Training Role' },
                            { value: 'not_sure', label: 'Not Sure Yet' }
                        ]
                    },
                    {
                        id: 'salary_expectation',
                        question: 'What is your target salary range after course completion?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'below_3l', label: 'Below ₹3 LPA' },
                            { value: '3_5_lpa', label: '₹3-5 LPA' },
                            { value: '5_8_lpa', label: '₹5-8 LPA' },
                            { value: '8_12_lpa', label: '₹8-12 LPA' },
                            { value: '12_18_lpa', label: '₹12-18 LPA' },
                            { value: '18_25_lpa', label: '₹18-25 LPA' },
                            { value: '25_40_lpa', label: '₹25-40 LPA' },
                            { value: 'above_40l', label: 'Above ₹40 LPA' },
                            { value: 'not_salary_focused', label: 'Not Salary-Focused (Interest/Passion)' }
                        ]
                    }
                ]
            },
            // Step 4: Learning Preferences
            {
                id: 'learning_preferences',
                step: 4,
                title: 'Learning & Study Preferences',
                questions: [
                    {
                        id: 'study_mode',
                        question: 'Which study mode suits you best?',
                        type: 'radio',
                        required: true,
                        options: [
                            { value: 'online_live', label: 'Online Live Classes (Interactive Sessions)' },
                            { value: 'online_recorded', label: 'Online Recorded Classes (Self-Paced)' },
                            { value: 'hybrid', label: 'Hybrid (Online + Weekend Campus)' },
                            { value: 'distance_learning', label: 'Distance Learning (Study Material + Exams)' },
                            { value: 'regular_campus', label: 'Regular Campus Classes (Full-time)' },
                            { value: 'executive_program', label: 'Executive Program (Weekend/Evening)' }
                        ]
                    },
                    {
                        id: 'time_availability',
                        question: 'How much time can you dedicate to studies per week?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'part_time_10hrs', label: 'Part-time: 5-10 hours/week' },
                            { value: 'part_time_20hrs', label: 'Part-time: 10-20 hours/week' },
                            { value: 'full_time_30hrs', label: 'Full-time: 20-30 hours/week' },
                            { value: 'full_time_40hrs', label: 'Full-time: 30-40 hours/week' },
                            { value: 'intensive', label: 'Intensive: 40+ hours/week' }
                        ]
                    },
                    {
                        id: 'course_duration',
                        question: 'What course duration do you prefer?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: '6_months', label: '6 Months or Less' },
                            { value: '6_12_months', label: '6-12 Months' },
                            { value: '1_2_years', label: '1-2 Years' },
                            { value: '2_3_years', label: '2-3 Years' },
                            { value: '3_4_years', label: '3-4 Years' },
                            { value: 'no_preference', label: 'No Preference' }
                        ]
                    }
                ]
            },
            // Step 5: Financial Planning
            {
                id: 'financial_planning',
                step: 5,
                title: 'Investment & Budget',
                questions: [
                    {
                        id: 'budget_range',
                        question: 'What is your budget for the entire course?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'below_50k', label: 'Below ₹50,000' },
                            { value: '50k_1l', label: '₹50,000 - ₹1,00,000' },
                            { value: '1l_2l', label: '₹1,00,000 - ₹2,00,000' },
                            { value: '2l_3l', label: '₹2,00,000 - ₹3,00,000' },
                            { value: '3l_5l', label: '₹3,00,000 - ₹5,00,000' },
                            { value: '5l_8l', label: '₹5,00,000 - ₹8,00,000' },
                            { value: '8l_12l', label: '₹8,00,000 - ₹12,00,000' },
                            { value: '12l_20l', label: '₹12,00,000 - ₹20,00,000' },
                            { value: 'above_20l', label: 'Above ₹20,00,000' },
                            { value: 'employer_sponsored', label: 'Employer Sponsored' }
                        ]
                    },
                    {
                        id: 'payment_preference',
                        question: 'How would you prefer to pay the fees?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'upfront_full', label: 'Full Payment Upfront (if discount available)' },
                            { value: 'semester_wise', label: 'Semester-wise Payment' },
                            { value: 'monthly_emi', label: 'Monthly EMI' },
                            { value: 'education_loan', label: 'Education Loan' },
                            { value: 'employer_funding', label: 'Employer Funding' },
                            { value: 'scholarship', label: 'Looking for Scholarship' },
                            { value: 'flexible', label: 'Flexible Payment Options' }
                        ]
                    }
                ]
            },
            // Step 6: Location Preference
            {
                id: 'location_preference',
                step: 6,
                title: 'Location & Study Preference',
                questions: [
                    {
                        id: 'preferred_state',
                        question: 'Which state would you prefer to study in?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'online_only', label: '🌐 Online Only (No Physical Location)' },
                            { value: 'andhra_pradesh', label: 'Andhra Pradesh' },
                            { value: 'arunachal_pradesh', label: 'Arunachal Pradesh' },
                            { value: 'assam', label: 'Assam' },
                            { value: 'bihar', label: 'Bihar' },
                            { value: 'chhattisgarh', label: 'Chhattisgarh' },
                            { value: 'goa', label: 'Goa' },
                            { value: 'gujarat', label: 'Gujarat' },
                            { value: 'haryana', label: 'Haryana' },
                            { value: 'himachal_pradesh', label: 'Himachal Pradesh' },
                            { value: 'jharkhand', label: 'Jharkhand' },
                            { value: 'karnataka', label: 'Karnataka' },
                            { value: 'kerala', label: 'Kerala' },
                            { value: 'madhya_pradesh', label: 'Madhya Pradesh' },
                            { value: 'maharashtra', label: 'Maharashtra' },
                            { value: 'manipur', label: 'Manipur' },
                            { value: 'meghalaya', label: 'Meghalaya' },
                            { value: 'mizoram', label: 'Mizoram' },
                            { value: 'nagaland', label: 'Nagaland' },
                            { value: 'odisha', label: 'Odisha' },
                            { value: 'punjab', label: 'Punjab' },
                            { value: 'rajasthan', label: 'Rajasthan' },
                            { value: 'sikkim', label: 'Sikkim' },
                            { value: 'tamil_nadu', label: 'Tamil Nadu' },
                            { value: 'telangana', label: 'Telangana' },
                            { value: 'tripura', label: 'Tripura' },
                            { value: 'uttar_pradesh', label: 'Uttar Pradesh' },
                            { value: 'uttarakhand', label: 'Uttarakhand' },
                            { value: 'west_bengal', label: 'West Bengal' },
                            { value: 'any_location', label: '🎯 Any Location (Show All Universities)' }
                        ]
                    },
                    {
                        id: 'distance_preference',
                        question: 'How far are you willing to travel from your home state?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'same_state_only', label: 'Same State Only' },
                            { value: 'neighboring_states', label: 'Neighboring States' },
                            { value: 'same_region', label: 'Same Region (North/South/East/West)' },
                            { value: 'anywhere_india', label: 'Anywhere in India' },
                            { value: 'online_preferred', label: 'Prefer Online Learning' }
                        ]
                    }
                ]
            },
            // Step 7: Timeline & Professional Goals
            {
                id: 'timeline_goals',
                step: 7,
                title: 'Timeline & Professional Goals',
                questions: [
                    {
                        id: 'start_timeline',
                        question: 'When would you like to start your course?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'immediately', label: 'Immediately (Within 1 month)' },
                            { value: 'within_3_months', label: 'Within 3 months' },
                            { value: 'within_6_months', label: 'Within 6 months' },
                            { value: 'next_academic_year', label: 'Next Academic Year' },
                            { value: 'flexible', label: 'Flexible Timeline' }
                        ]
                    },
                    {
                        id: 'career_goal',
                        question: 'What is your primary career goal after completing this program?',
                        type: 'select',
                        required: true,
                        options: [
                            { value: 'promotion', label: 'Career Advancement in Current Field' },
                            { value: 'career_change', label: 'Complete Career Change' },
                            { value: 'skill_upgrade', label: 'Skill Upgrade & Certification' },
                            { value: 'entrepreneurship', label: 'Start My Own Business' },
                            { value: 'higher_studies', label: 'Pursue Higher Studies (PhD/Research)' },
                            { value: 'better_job', label: 'Get a Better Job/Higher Salary' },
                            { value: 'industry_switch', label: 'Switch to Different Industry' },
                            { value: 'freelancing', label: 'Freelancing & Consulting' }
                        ]
                    }
                ]
            }
        ];
    }

    generateStepHTML(step) {
        const stepData = this.questions[step];
        if (!stepData) return '';

        let html = `
            <div class="questionnaire-step" data-step="${step}" style="
                background: white; 
                border-radius: 0;
                font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0;
                height: 100%;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            ">
                <!-- SUPER COMPACT Header -->
                <div class="step-header" style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 0.6rem 1.5rem 0.5rem 1.5rem;
                    color: white;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="position: relative; z-index: 2;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                            <div style="flex: 1;">
                                <h2 style="
                                    margin: 0 0 0.15rem 0;
                                    font-size: 1.05rem;
                                    font-weight: 700;
                                    line-height: 1.2;
                                ">${stepData.title}</h2>
                                <p style="
                                    margin: 0;
                                    opacity: 0.9;
                                    font-size: 0.75rem;
                                ">Step ${step + 1} of ${this.totalSteps}</p>
                            </div>
                            
                            <!-- Tiny Progress Circle -->
                            <div style="
                                width: 32px; height: 32px;
                                border-radius: 50%;
                                background: rgba(255,255,255,0.15);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 0.8rem;
                                font-weight: 700;
                                border: 2px solid rgba(255,255,255,0.3);
                            ">
                                ${Math.round(((step + 1) / this.totalSteps) * 100)}%
                            </div>
                        </div>
                        
                        <!-- Mini Progress Bar -->
                        <div style="
                            background: rgba(255,255,255,0.2);
                            height: 5px;
                            border-radius: 3px;
                            overflow: hidden;
                        ">
                            <div style="
                                background: white;
                                height: 100%;
                                width: ${((step + 1) / this.totalSteps) * 100}%;
                                border-radius: 3px;
                                transition: width 0.5s ease;
                            "></div>
                        </div>
                    </div>
                </div>

                <!-- ULTRA COMPACT NO-SCROLL Content Area - ALL QUESTIONS VISIBLE -->
                <div class="questions-container" style="
                    flex: 1;
                    padding: 0.75rem 1.5rem;
                    overflow: hidden;
                    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0.4rem;
                    align-content: start;
                    min-height: 0;
                ">
        `;

        stepData.questions.forEach((question, qIndex) => {
            html += this.generateEnhancedQuestionHTML(question, step, qIndex);
        });

        html += `
                </div>
                
                <!-- TINY Footer Navigation -->
                <div class="step-navigation" style="
                    padding: 0.5rem 1.5rem;
                    background: white;
                    border-top: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div>
                        ${step > 0 ? `<button type="button" class="btn-secondary" onclick="enhancedAI.previousStep()" style="
                            background: white;
                            color: #4a5568;
                            border: 1px solid #e2e8f0;
                            padding: 0.5rem 1rem;
                            border-radius: 6px;
                            font-size: 0.85rem;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.2s ease;
                        " 
                        onmouseover="this.style.borderColor='#cbd5e0'; this.style.backgroundColor='#f7fafc'"
                        onmouseout="this.style.borderColor='#e2e8f0'; this.style.backgroundColor='white'">
                            ← Back
                        </button>` : '<div></div>'}
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <span style="
                            font-size: 0.75rem;
                            color: #718096;
                        ">${step + 1}/${this.totalSteps}</span>
                        
                        ${step < this.totalSteps - 1 ? `
                            <button type="button" class="btn-primary" onclick="enhancedAI.nextStep()" style="
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                color: white;
                                border: none;
                                padding: 0.6rem 1.5rem;
                                border-radius: 6px;
                                font-size: 0.9rem;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.2s ease;
                            " 
                            onmouseover="this.style.opacity='0.9'"
                            onmouseout="this.style.opacity='1'">
                                Continue →
                            </button>
                        ` : `
                            <button type="button" class="btn-success" onclick="enhancedAI.completeQuestionnaire()" style="
                                background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
                                color: white;
                                border: none;
                                padding: 0.6rem 1.5rem;
                                border-radius: 6px;
                                font-size: 0.9rem;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.2s ease;
                            " 
                            onmouseover="this.style.opacity='0.9'"
                            onmouseout="this.style.opacity='1'">
                                🎯 Get Recommendations
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;

        return html;
    }

    generateEnhancedQuestionHTML(question, stepIndex, questionIndex) {
        const questionId = `q_${stepIndex}_${questionIndex}`;
        let html = `
            <div class="question-block" data-question-id="${question.id}" style="
                margin: 0;
                background: white;
                border-radius: 6px;
                border: 1px solid #e2e8f0;
                padding: 0.75rem 1rem;
            ">
                <div style="margin-bottom: 0.5rem;">
                    <h3 style="
                        margin: 0;
                        font-weight: 600;
                        color: #1e293b;
                        font-size: 0.9rem;
                        line-height: 1.3;
                    ">
                        ${question.question}
                        ${question.required ? '<span style="color: #ef4444;">*</span>' : ''}
                    </h3>
                </div>
        `;

        switch (question.type) {
            case 'select':
                html += `
                    <div style="position: relative;">
                        <select class="form-control" id="${questionId}" ${question.required ? 'required' : ''} style="
                            width: 100%;
                            padding: 1.25rem 1.5rem;
                            border: 3px solid #e2e8f0;
                            border-radius: 15px;
                            font-size: 1.1rem;
                            background: white;
                            color: #1e293b;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            appearance: none;
                            background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"%23667eea\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" d=\"M19 9l-7 7-7-7\"/></svg>');
                            background-repeat: no-repeat;
                            background-position: right 1.5rem center;
                            background-size: 1.5rem;
                            cursor: pointer;
                            font-weight: 600;
                            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.1);
                        " 
                        onfocus="this.style.borderColor='#667eea'; this.style.boxShadow='0 0 0 4px rgba(102, 126, 234, 0.15), 0 8px 25px rgba(102, 126, 234, 0.2)'; this.style.transform='translateY(-2px)'"
                        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.1)'; this.style.transform='translateY(0)'">
                            <option value="">✨ Choose your option...</option>`;
                question.options.forEach(option => {
                    html += `<option value="${option.value}">${option.label}</option>`;
                });
                html += `</select>
                    </div>`;
                break;

            case 'radio':
                html += '<div style="display: grid; gap: 1rem; max-width: 100%;">';
                question.options.forEach((option, optIndex) => {
                    const isFirstTwo = optIndex < 2;
                    html += `
                        <label class="radio-option" style="
                            display: flex;
                            align-items: center;
                            padding: 1.25rem 1.5rem;
                            background: ${isFirstTwo ? 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'};
                            border: 3px solid ${isFirstTwo ? '#c7d2fe' : '#e2e8f0'};
                            border-radius: 15px;
                            cursor: pointer;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            position: relative;
                            overflow: hidden;
                            font-weight: 600;
                            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                        " 
                        onmouseover="this.style.borderColor='#667eea'; this.style.backgroundColor='#f0f4ff'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(102, 126, 234, 0.15)'"
                        onmouseout="this.style.borderColor='${isFirstTwo ? '#c7d2fe' : '#e2e8f0'}'; this.style.backgroundColor='${isFirstTwo ? '#f0f4ff' : '#f8fafc'}'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)'"
                        onclick="this.querySelector('input').click(); this.style.borderColor='#667eea'; this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; this.style.color='white';">
                            
                            <!-- Custom Radio Button -->
                            <div style="
                                width: 24px; height: 24px;
                                border: 3px solid #667eea;
                                border-radius: 50%;
                                margin-right: 1rem;
                                position: relative;
                                background: white;
                                transition: all 0.3s ease;
                            ">
                                <div style="
                                    width: 12px; height: 12px;
                                    background: #667eea;
                                    border-radius: 50%;
                                    position: absolute;
                                    top: 50%; left: 50%;
                                    transform: translate(-50%, -50%) scale(0);
                                    transition: transform 0.3s ease;
                                "></div>
                            </div>
                            
                            <input type="radio" name="${questionId}" value="${option.value}" ${question.required ? 'required' : ''} style="
                                display: none;
                            ">
                            
                            <span style="
                                font-size: 1.1rem;
                                line-height: 1.5;
                                color: #1e293b;
                                flex: 1;
                            ">${option.label}</span>
                        </label>
                    `;
                });
                html += '</div>';
                break;

            case 'checkbox':
                html += '<div style="display: grid; gap: 1rem; max-width: 100%;">';
                question.options.forEach((option, optIndex) => {
                    html += `
                        <label class="checkbox-option" style="
                            display: flex;
                            align-items: center;
                            padding: 1.25rem 1.5rem;
                            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                            border: 3px solid #e2e8f0;
                            border-radius: 15px;
                            cursor: pointer;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            position: relative;
                            overflow: hidden;
                            font-weight: 600;
                            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                        " 
                        onmouseover="this.style.borderColor='#667eea'; this.style.backgroundColor='#f0f4ff'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(102, 126, 234, 0.15)'"
                        onmouseout="this.style.borderColor='#e2e8f0'; this.style.backgroundColor='#f8fafc'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)'"
                        onclick="this.querySelector('input').click()">
                            
                            <!-- Custom Checkbox -->
                            <div style="
                                width: 24px; height: 24px;
                                border: 3px solid #667eea;
                                border-radius: 6px;
                                margin-right: 1rem;
                                position: relative;
                                background: white;
                                transition: all 0.3s ease;
                            ">
                                <div style="
                                    position: absolute;
                                    top: 50%; left: 50%;
                                    transform: translate(-50%, -50%) scale(0);
                                    color: white;
                                    font-size: 14px;
                                    font-weight: bold;
                                    transition: transform 0.3s ease;
                                ">✓</div>
                            </div>
                            
                            <input type="checkbox" name="${questionId}" value="${option.value}" ${question.maxSelections ? `data-max="${question.maxSelections}"` : ''} style="
                                display: none;
                            " onchange="
                                const checkIcon = this.parentElement.querySelector('div > div');
                                const box = this.parentElement.querySelector('div');
                                if (this.checked) {
                                    if (checkIcon) checkIcon.style.transform = 'translate(-50%, -50%) scale(1)';
                                    if (box) { box.style.background = '#667eea'; }
                                } else {
                                    if (checkIcon) checkIcon.style.transform = 'translate(-50%, -50%) scale(0)';
                                    if (box) { box.style.background = 'white'; }
                                }
                            ">
                            
                            <span style="
                                font-size: 1.1rem;
                                line-height: 1.5;
                                color: #1e293b;
                                flex: 1;
                            ">${option.label}</span>
                        </label>
                    `;
                });
                html += '</div>';
                if (question.maxSelections) {
                    html += `<div style="
                        margin-top: 1.5rem;
                        padding: 1rem 1.5rem;
                        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                        border-radius: 12px;
                        border-left: 5px solid #f59e0b;
                        color: #92400e;
                        font-size: 1rem;
                        font-weight: 600;
                        text-align: center;
                        box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);
                    ">
                        💡 Select up to ${question.maxSelections} options that best describe you
                    </div>`;
                }
                break;

            case 'textarea':
                html += `
                    <textarea class="form-control" id="${questionId}" rows="5" placeholder="${question.placeholder || '✨ Share your thoughts here...'}" ${question.required ? 'required' : ''} style="
                        width: 100%;
                        padding: 1.5rem;
                        border: 3px solid #e2e8f0;
                        border-radius: 15px;
                        font-size: 1.1rem;
                        background: white;
                        resize: vertical;
                        font-family: inherit;
                        color: #1e293b;
                        line-height: 1.6;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        min-height: 120px;
                        font-weight: 500;
                        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.1);
                    " 
                    onfocus="this.style.borderColor='#667eea'; this.style.boxShadow='0 0 0 4px rgba(102, 126, 234, 0.15), 0 8px 25px rgba(102, 126, 234, 0.2)'; this.style.transform='translateY(-2px)'"
                    onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.1)'; this.style.transform='translateY(0)'"></textarea>`;
                break;
        }

        html += `</div>`;
        return html;
    }

    generateQuestionHTML(question, stepIndex, questionIndex) {
        const questionId = `q_${stepIndex}_${questionIndex}`;
        let html = `
            <div class="question-block" data-question-id="${question.id}" style="
                margin: 0;
                padding: 0;
                background: white;
                border-radius: 6px;
                border: 1px solid #e2e8f0;
                box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                transition: all 0.2s ease;
                overflow: hidden;
            ">
                <div style="
                    padding: 0.5rem 0.9rem 0.35rem 0.9rem;
                    background: #f8fafc;
                    border-bottom: 1px solid #e2e8f0;
                ">
                    <label class="question-label" style="
                        display: block;
                        font-weight: 600;
                        margin: 0;
                        color: #2d3748;
                        font-size: 0.85rem;
                        line-height: 1.3;
                    ">
                        ${question.question}${question.required ? '<span style="color: #e53e3e; margin-left: 3px;">*</span>' : ''}
                    </label>
                </div>
                
                <div style="padding: 0.6rem 0.9rem;">
        `;

        switch (question.type) {
            case 'select':
                html += `<select class="form-control" id="${questionId}" ${question.required ? 'required' : ''} style="
                    width: 100%;
                    padding: 0.45rem 0.7rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 4px;
                    font-size: 0.85rem;
                    background: white;
                    color: #2d3748;
                    transition: all 0.2s ease;
                    appearance: none;
                    background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"%234a5568\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\"/></svg>');
                    background-repeat: no-repeat;
                    background-position: right 0.6rem center;
                    background-size: 0.9rem;
                    cursor: pointer;
                " 
                onfocus="this.style.borderColor='#667eea'"
                onblur="this.style.borderColor='#e2e8f0'">
                    <option value="">-- Select --</option>`;
                question.options.forEach(option => {
                    html += `<option value="${option.value}">${option.label}</option>`;
                });
                html += `</select>`;
                break;

            case 'radio':
                html += '<div style="display: grid; gap: 0.35rem;">';
                question.options.forEach((option, optIndex) => {
                    html += `
                        <label class="radio-option" style="
                            display: flex;
                            align-items: center;
                            padding: 0.4rem 0.7rem;
                            background: #f8fafc;
                            border: 1px solid #e2e8f0;
                            border-radius: 4px;
                            cursor: pointer;
                            transition: all 0.2s ease;
                        " 
                        onmouseover="this.style.borderColor='#cbd5e0'; this.style.backgroundColor='#f1f5f9'"
                        onmouseout="this.style.borderColor='#e2e8f0'; this.style.backgroundColor='#f8fafc'"
                        onclick="this.querySelector('input').click()">
                            <input type="radio" name="${questionId}" value="${option.value}" ${question.required ? 'required' : ''} style="
                                margin-right: 0.6rem;
                                transform: scale(1.1);
                                accent-color: #667eea;
                                cursor: pointer;
                            ">
                            <span class="radio-label" style="
                                font-size: 0.8rem;
                                line-height: 1.3;
                                color: #2d3748;
                                font-weight: 500;
                                flex: 1;
                            ">${option.label}</span>
                        </label>
                    `;
                });
                html += '</div>';
                break;

            case 'checkbox':
                html += '<div style="display: grid; gap: 0.35rem;">';
                question.options.forEach((option, optIndex) => {
                    html += `
                        <label class="checkbox-option" style="
                            display: flex;
                            align-items: center;
                            padding: 0.4rem 0.7rem;
                            background: #f8fafc;
                            border: 1px solid #e2e8f0;
                            border-radius: 4px;
                            cursor: pointer;
                            transition: all 0.2s ease;
                        " 
                        onmouseover="this.style.borderColor='#cbd5e0'; this.style.backgroundColor='#f1f5f9'"
                        onmouseout="this.style.borderColor='#e2e8f0'; this.style.backgroundColor='#f8fafc'"
                        onclick="this.querySelector('input').click()">
                            <input type="checkbox" name="${questionId}" value="${option.value}" ${question.maxSelections ? `data-max="${question.maxSelections}"` : ''} style="
                                margin-right: 0.6rem;
                                transform: scale(1.1);
                                accent-color: #667eea;
                                cursor: pointer;
                            ">
                            <span class="checkbox-label" style="
                                font-size: 0.8rem;
                                line-height: 1.3;
                                color: #2d3748;
                                font-weight: 500;
                                flex: 1;
                            ">${option.label}</span>
                        </label>
                    `;
                });
                html += '</div>';
                if (question.maxSelections) {
                    html += `<div class="help-text" style="
                        margin-top: 1rem;
                        padding: 0.75rem 1rem;
                        background: #edf2f7;
                        border-radius: 8px;
                        border-left: 4px solid #667eea;
                        color: #4a5568;
                        font-size: 0.9rem;
                        font-weight: 500;
                    ">
                        💡 Select up to ${question.maxSelections} options
                    </div>`;
                }
                break;

            case 'textarea':
                html += `<textarea class="form-control" id="${questionId}" rows="5" placeholder="${question.placeholder || 'Enter your response here...'}" ${question.required ? 'required' : ''} style="
                    width: 100%;
                    padding: 1.25rem;
                    border: 2px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 1rem;
                    background: white;
                    resize: vertical;
                    font-family: inherit;
                    color: #2d3748;
                    line-height: 1.6;
                    transition: all 0.3s ease;
                    min-height: 120px;
                " 
                onfocus="this.style.borderColor='#667eea'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'"></textarea>`;
                break;
        }

        html += `
                </div>
            </div>`;
        return html;
    }

    nextStep() {
        if (this.validateCurrentStep()) {
            this.saveCurrentStepData();
            if (this.currentStep < this.totalSteps - 1) {
                this.currentStep++;
                this.renderCurrentStep();
                this.scrollToTop();
            }
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.saveCurrentStepData();
            this.currentStep--;
            this.renderCurrentStep();
            this.scrollToTop();
        }
    }

    scrollToTop() {
        const container = document.getElementById('questionnaire-container-modal');
        if (container) {
            container.scrollTop = 0;
        }
    }

    validateCurrentStep() {
        const currentStepElement = document.querySelector(`[data-step="${this.currentStep}"]`);
        if (!currentStepElement) return false;

        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        // Clear previous errors
        currentStepElement.querySelectorAll('.error-message').forEach(error => error.remove());
        currentStepElement.querySelectorAll('.error').forEach(field => field.classList.remove('error'));

        requiredFields.forEach(field => {
            if (field.type === 'radio') {
                const radioGroup = currentStepElement.querySelectorAll(`[name="${field.name}"]`);
                const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                if (!isChecked) {
                    isValid = false;
                    this.showValidationError(field, 'Please select an option');
                }
            } else if (field.type === 'checkbox') {
                const checkboxGroup = currentStepElement.querySelectorAll(`[name="${field.name}"]`);
                const checkedBoxes = Array.from(checkboxGroup).filter(cb => cb.checked);
                if (checkedBoxes.length === 0) {
                    isValid = false;
                    this.showValidationError(field, 'Please select at least one option');
                }
            } else if (!field.value.trim()) {
                isValid = false;
                this.showValidationError(field, 'This field is required');
            }
        });

        if (!isValid) {
            // Scroll to first error
            const firstError = currentStepElement.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        return isValid;
    }

    showValidationError(field, message) {
        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = 'color: #dc3545; font-size: 14px; margin-top: 0.5rem; font-weight: 500;';
        
        const questionBlock = field.closest('.question-block');
        if (questionBlock) {
            questionBlock.appendChild(errorDiv);
        }

        // Add error styling
        field.classList.add('error');
        field.style.borderColor = '#dc3545';
    }

    saveCurrentStepData() {
        const currentStepElement = document.querySelector(`[data-step="${this.currentStep}"]`);
        if (!currentStepElement) return;

        const stepData = this.questions[this.currentStep];
        
        stepData.questions.forEach((question, qIndex) => {
            const questionId = `q_${this.currentStep}_${qIndex}`;
            
            if (question.type === 'radio') {
                const selected = currentStepElement.querySelector(`[name="${questionId}"]:checked`);
                if (selected) {
                    this.userResponses[question.id] = selected.value;
                }
            } else if (question.type === 'checkbox') {
                const selected = Array.from(currentStepElement.querySelectorAll(`[name="${questionId}"]:checked`));
                this.userResponses[question.id] = selected.map(cb => cb.value);
            } else {
                const field = currentStepElement.querySelector(`#${questionId}`);
                if (field && field.value) {
                    this.userResponses[question.id] = field.value;
                }
            }
        });

        console.log('📊 Step', this.currentStep + 1, 'data saved:', this.userResponses);
    }

    renderCurrentStep() {
        const container = document.getElementById('questionnaire-container-modal');
        if (container) {
            container.innerHTML = this.generateStepHTML(this.currentStep);
            
            // Add interactive styling for radio/checkbox options
            setTimeout(() => {
                container.querySelectorAll('.radio-option, .checkbox-option').forEach(option => {
                    option.addEventListener('mouseenter', () => {
                        option.style.borderColor = '#667eea';
                        option.style.backgroundColor = '#f0f4ff';
                    });
                    option.addEventListener('mouseleave', () => {
                        if (!option.querySelector('input').checked) {
                            option.style.borderColor = '#dee2e6';
                            option.style.backgroundColor = 'white';
                        }
                    });
                    
                    const input = option.querySelector('input');
                    input.addEventListener('change', () => {
                        if (input.type === 'radio') {
                            // Reset all radio options in this group
                            container.querySelectorAll(`[name="${input.name}"]`).forEach(radio => {
                                const radioOption = radio.closest('.radio-option');
                                radioOption.style.borderColor = '#dee2e6';
                                radioOption.style.backgroundColor = 'white';
                            });
                        }
                        
                        if (input.checked) {
                            option.style.borderColor = '#667eea';
                            option.style.backgroundColor = '#f0f4ff';
                        } else {
                            option.style.borderColor = '#dee2e6';
                            option.style.backgroundColor = 'white';
                        }
                    });
                });

                // Enhanced styling for form controls
                container.querySelectorAll('.form-control').forEach(control => {
                    control.addEventListener('focus', () => {
                        control.style.borderColor = '#667eea';
                        control.style.boxShadow = '0 0 0 2px rgba(102, 126, 234, 0.25)';
                    });
                    control.addEventListener('blur', () => {
                        if (!control.classList.contains('error')) {
                            control.style.borderColor = '#dee2e6';
                        }
                        control.style.boxShadow = 'none';
                    });
                });
            }, 100);
        }
    }

    /**
     * Filter universities based on location preference
     */
    filterUniversitiesByLocation(universities, preferredState, distancePreference) {
        console.log(`🌍 Filtering universities for state: ${preferredState}, distance: ${distancePreference}`);
        console.log(`📊 Total universities to filter: ${universities.length}`);
        
        if (!preferredState || preferredState === 'any_location') {
            console.log('🎯 No location preference, showing all universities');
            return universities; // Return all universities
        }
        
        if (preferredState === 'online_only') {
            // Filter for online-only universities
            const onlineUniversities = universities.filter(uni => 
                uni.mode && (uni.mode.includes('Online') || uni.mode.includes('Distance'))
            );
            console.log(`💻 Found ${onlineUniversities.length} online universities`);
            return onlineUniversities;
        }
        
        // FIRST: Remove all foreign universities when Indian state is selected
        const indianUniversities = universities.filter(uni => {
            if (!uni.location) return false;
            const location = uni.location.toLowerCase();
            // Remove universities from foreign countries
            return !location.includes('usa') && 
                   !location.includes('florida') && 
                   !location.includes('canada') && 
                   !location.includes('australia') && 
                   !location.includes('uk') && 
                   !location.includes('singapore') && 
                   !location.includes('dubai') &&
                   !location.includes('new york') &&
                   !location.includes('california') &&
                   !location.includes('texas');
        });
        
        console.log(`🇮🇳 After removing foreign universities: ${indianUniversities.length} universities`);
        
        // Enhanced state matching - much more flexible
        const stateVariations = this.getStateVariations(preferredState);
        console.log('🗺️ Looking for state variations:', stateVariations);
        
        // Filter universities in the preferred state with very flexible matching
        const sameStateUniversities = indianUniversities.filter(uni => {
            if (!uni.location) {
                console.log(`⚠️ University ${uni.name} has no location`);
                return false;
            }
            
            const location = uni.location.toLowerCase();
            const matched = stateVariations.some(variation => {
                const variationLower = variation.toLowerCase();
                return location.includes(variationLower);
            });
            
            if (matched) {
                console.log(`✅ Matched university: ${uni.name} in ${uni.location}`);
            }
            
            return matched;
        });
        
        console.log(`🎯 Found ${sameStateUniversities.length} universities in preferred state`);
        
        // Always show state universities first
        let finalUniversities = [...sameStateUniversities];
        
        // Add neighboring states if needed or requested
        if (distancePreference !== 'same_state_only' && sameStateUniversities.length < 8) {
            const neighboringStateKeys = this.neighboringStates[preferredState] || [];
            console.log('🌐 Adding neighboring states:', neighboringStateKeys);
            
            const neighboringUniversities = indianUniversities.filter(uni => {
                if (!uni.location || finalUniversities.some(existing => existing.id === uni.id)) {
                    return false; // Skip if already included
                }
                
                const location = uni.location.toLowerCase();
                return neighboringStateKeys.some(neighborKey => {
                    const neighborVariations = this.getStateVariations(neighborKey);
                    return neighborVariations.some(variation => 
                        location.includes(variation.toLowerCase())
                    );
                });
            });
            
            // Mark neighboring universities
            const markedNeighboringUniversities = neighboringUniversities.slice(0, 10).map(uni => ({
                ...uni,
                isNeighboringState: true,
                originalState: this.getStateFromLocation(uni.location),
                preferredState: stateVariations[0]
            }));
            
            finalUniversities = [...finalUniversities, ...markedNeighboringUniversities];
            console.log(`🌍 Added ${neighboringUniversities.length} universities from neighboring states`);
        }
        
        // If still very few universities, add more from other Indian locations
        if (finalUniversities.length < 5 && (distancePreference === 'anywhere_india' || distancePreference === 'same_region')) {
            const remainingUniversities = indianUniversities.filter(uni => 
                !finalUniversities.some(existing => existing.id === uni.id)
            ).slice(0, 10 - finalUniversities.length);
            
            const markedRemainingUniversities = remainingUniversities.map(uni => ({
                ...uni,
                isOtherLocation: true,
                originalState: this.getStateFromLocation(uni.location),
                preferredState: stateVariations[0]
            }));
            
            finalUniversities = [...finalUniversities, ...markedRemainingUniversities];
            console.log(`🎯 Added ${remainingUniversities.length} universities from other Indian locations`);
        }
        
        console.log(`📋 Final result: ${finalUniversities.length} universities total`);
        return finalUniversities;
    }
    
    /**
     * Get all possible variations of a state name for flexible matching
     */
    getStateVariations(stateKey) {
        const baseVariations = this.stateMapping[stateKey] || [stateKey];
        const allVariations = new Set();
        
        // Add original mappings
        baseVariations.forEach(variation => allVariations.add(variation));
        
        // Add variations without spaces and with underscores
        baseVariations.forEach(variation => {
            allVariations.add(variation.replace(/\s+/g, ''));
            allVariations.add(variation.replace(/\s+/g, '_'));
            allVariations.add(variation.replace(/_/g, ' '));
            allVariations.add(variation.replace(/_/g, ''));
        });
        
        // Add common abbreviations and variations
        const extraMappings = {
            'tamil_nadu': ['TN', 'Tamilnadu', 'Tamil Nadu'],
            'uttar_pradesh': ['UP', 'Uttarpradesh', 'Uttar Pradesh'],
            'andhra_pradesh': ['AP', 'Andhrapradesh', 'Andhra Pradesh'],
            'west_bengal': ['WB', 'Westbengal', 'West Bengal'],
            'madhya_pradesh': ['MP', 'Madhyapradesh', 'Madhya Pradesh'],
            'himachal_pradesh': ['HP', 'Himachalpradesh', 'Himachal Pradesh'],
            'arunachal_pradesh': ['Arunachalpradesh', 'Arunachal Pradesh'],
            'delhi': ['Delhi', 'New Delhi', 'NCR'],
            'maharashtra': ['Maharashtra', 'MH'],
            'karnataka': ['Karnataka', 'KA'],
            'rajasthan': ['Rajasthan', 'RJ'],
            'gujarat': ['Gujarat', 'GJ'],
            'punjab': ['Punjab', 'PB'],
            'haryana': ['Haryana', 'HR'],
            'kerala': ['Kerala', 'KL'],
            'odisha': ['Odisha', 'Orissa', 'OD'],
            'jharkhand': ['Jharkhand', 'JH'],
            'chhattisgarh': ['Chhattisgarh', 'CG'],
            'uttarakhand': ['Uttarakhand', 'UK'],
            'jammu_kashmir': ['Jammu', 'Kashmir', 'J&K', 'JK'],
            'telangana': ['Telangana', 'TG']
        };
        
        if (extraMappings[stateKey]) {
            extraMappings[stateKey].forEach(extra => allVariations.add(extra));
        }
        
        return Array.from(allVariations);
    }
    
    /**
     * Extract state name from university location
     */
    getStateFromLocation(location) {
        if (!location) return 'Unknown';
        
        // Try to extract state from location string
        const parts = location.split(',');
        if (parts.length >= 2) {
            return parts[parts.length - 1].trim();
        }
        
    }

    /**
     * Extract state name from university location
     */
    getStateFromLocation(location) {
        if (!location) return 'Unknown';
        
        // Try to extract state from location string
        const parts = location.split(',');
        if (parts.length >= 2) {
            return parts[parts.length - 1].trim();
        }
        
        return location;
    }

    /**
     * Filter universities by field of interest and specializations
     */
    filterUniversitiesByFieldOfInterest(universities, fieldOfInterest) {
        if (!fieldOfInterest) return universities;
        
        console.log(`🎯 Filtering universities by field of interest: ${fieldOfInterest}`);
        
        // Enhanced field mapping to handle questionnaire option values
        const fieldMappingByValue = {
            'computer_science': ['computer', 'it', 'information technology', 'software', 'mca', 'bca', 'computer science'],
            'data_science': ['data science', 'analytics', 'data analytics', 'big data', 'machine learning'],
            'artificial_intelligence': ['artificial intelligence', 'ai', 'machine learning', 'ml', 'deep learning'],
            'cyber_security': ['cyber security', 'cybersecurity', 'information security', 'network security'],
            'software_development': ['software', 'programming', 'development', 'coding', 'computer science'],
            'web_development': ['web development', 'web design', 'frontend', 'backend', 'full stack'],
            'mobile_app_development': ['mobile', 'app development', 'android', 'ios', 'flutter'],
            'cloud_computing': ['cloud', 'aws', 'azure', 'devops', 'cloud computing'],
            'business_management': ['management', 'mba', 'business', 'administration', 'bba'],
            'finance_banking': ['finance', 'banking', 'financial', 'investment', 'mba finance'],
            'accounting': ['accounting', 'accounts', 'taxation', 'finance', 'commerce', 'b.com'],
            'marketing_sales': ['marketing', 'sales', 'advertising', 'mba marketing'],
            'digital_marketing': ['digital marketing', 'social media', 'seo', 'marketing'],
            'human_resources': ['human resources', 'hr', 'personnel', 'mba hr', 'commerce', 'b.com'],
            'operations_management': ['operations', 'supply chain', 'logistics', 'management'],
            'project_management': ['project management', 'management', 'pmp'],
            'healthcare_medical': ['healthcare', 'medical', 'medicine', 'mbbs'],
            'nursing': ['nursing', 'patient care', 'healthcare'],
            'pharmacy': ['pharmacy', 'pharmaceutical', 'medicine'],
            'education_teaching': ['education', 'teaching', 'b.ed', 'm.ed', 'pedagogy'],
            'law_legal': ['law', 'legal', 'llb', 'llm', 'legal studies'],
            'mechanical_engineering': ['mechanical', 'engineering', 'b.tech', 'mech'],
            'electrical_engineering': ['electrical', 'electronics', 'engineering', 'b.tech', 'eee'],
            'civil_engineering': ['civil', 'engineering', 'construction', 'b.tech'],
            'automobile_engineering': ['automobile', 'automotive', 'engineering', 'b.tech'],
            'design_creative': ['design', 'creative', 'graphic design', 'fashion', 'interior design']
        };
        
        // Legacy field mapping for direct field names
        const legacyFieldMapping = {
            'Management': ['management', 'mba', 'business', 'administration', 'bba'],
            'Engineering': ['engineering', 'b.tech', 'btech', 'mechanical', 'electrical', 'civil', 'computer'],
            'Computer Applications': ['computer', 'it', 'information technology', 'software', 'mca', 'bca'],
            'Data Science': ['data science', 'analytics', 'data analytics', 'big data', 'machine learning'],
            'Commerce': ['commerce', 'b.com', 'accounting', 'finance', 'economics'],
            'Finance': ['finance', 'banking', 'financial', 'investment', 'mba finance'],
            'Marketing': ['marketing', 'digital marketing', 'advertising', 'sales', 'mba marketing'],
            'Human Resources': ['human resources', 'hr', 'personnel', 'mba hr', 'commerce', 'b.com'],
            'Arts': ['arts', 'humanities', 'literature', 'history', 'philosophy'],
            'Law': ['law', 'legal', 'llb', 'llm', 'legal studies'],
            'Design': ['design', 'creative', 'graphic design', 'fashion', 'interior design'],
            'Media': ['media', 'communication', 'journalism', 'mass communication'],
            'Education': ['education', 'teaching', 'b.ed', 'm.ed', 'pedagogy'],
            'Healthcare': ['healthcare', 'medical', 'nursing', 'pharmacy', 'medicine'],
            'Agriculture': ['agriculture', 'farming', 'agribusiness', 'food science'],
            'Hospitality': ['hospitality', 'hotel', 'tourism', 'travel', 'restaurant'],
            'Psychology': ['psychology', 'counseling', 'behavioral', 'mental health'],
            'Social Work': ['social work', 'community', 'ngo', 'development'],
            'Environmental Science': ['environmental', 'ecology', 'sustainability', 'green'],
            'Biotechnology': ['biotechnology', 'biotech', 'life sciences', 'biology']
        };
        
        // Try to get keywords from value-based mapping first, then legacy mapping
        let keywords = fieldMappingByValue[fieldOfInterest] || legacyFieldMapping[fieldOfInterest] || [fieldOfInterest.toLowerCase()];
        
        console.log(`🔍 Using keywords for filtering:`, keywords);
        
        const filteredUniversities = universities.filter(university => {
            // Check courses
            if (university.courses) {
                const courseMatch = university.courses.some(course => 
                    keywords.some(keyword => course.toLowerCase().includes(keyword))
                );
                if (courseMatch) {
                    console.log(`✅ Course match for ${university.name}: ${university.courses}`);
                    return true;
                }
            }
            
            // Check specializations
            if (university.specializations) {
                const specializationMatch = university.specializations.some(spec => 
                    keywords.some(keyword => spec.toLowerCase().includes(keyword))
                );
                if (specializationMatch) {
                    console.log(`✅ Specialization match for ${university.name}: ${university.specializations}`);
                    return true;
                }
            }
            
            // Check name for field-specific universities
            if (university.name) {
                const nameMatch = keywords.some(keyword => 
                    university.name.toLowerCase().includes(keyword)
                );
                if (nameMatch) {
                    console.log(`✅ Name match for ${university.name}`);
                    return true;
                }
            }
            
            return false;
        });
        
        console.log(`✅ Found ${filteredUniversities.length} universities for ${fieldOfInterest} out of ${universities.length} total`);
        return filteredUniversities;
    }

    completeQuestionnaire() {
        if (this.validateCurrentStep()) {
            this.saveCurrentStepData();
            console.log('📊 Complete comprehensive questionnaire responses:', this.userResponses);
            
            // Calculate comprehensive score
            const score = this.calculateComprehensiveScore();
            
            const results = {
                ...this.userResponses,
                score: score,
                completedAt: new Date().toISOString(),
                assessmentType: 'comprehensive_college_vidya_style',
                totalSteps: this.totalSteps,
                completionRate: 100
            };
            
            // Call completion callback
            if (typeof window.questionnaireCompletionCallback === 'function') {
                console.log('✅ Calling completion callback with comprehensive results...');
                window.questionnaireCompletionCallback(results);
            } else {
                console.log('⚠️ No completion callback found');
                alert('✅ Comprehensive Assessment Complete! Your personalized university recommendations will be shown shortly.');
            }
        }
    }

    calculateComprehensiveScore() {
        let score = 60; // Base score
        
        // Education level scoring
        if (this.userResponses.current_education) {
            if (this.userResponses.current_education.includes('master')) score += 15;
            else if (this.userResponses.current_education.includes('bachelor')) score += 10;
            else if (this.userResponses.current_education.includes('diploma')) score += 8;
            else if (this.userResponses.current_education.includes('12th')) score += 5;
        }
        
        // Experience scoring
        if (this.userResponses.experience_years) {
            if (this.userResponses.experience_years.includes('12_plus')) score += 15;
            else if (this.userResponses.experience_years.includes('8_12')) score += 12;
            else if (this.userResponses.experience_years.includes('5_8')) score += 10;
            else if (this.userResponses.experience_years.includes('3_5')) score += 8;
            else if (this.userResponses.experience_years.includes('1_2') || this.userResponses.experience_years.includes('2_3')) score += 5;
        }
        
        // Career clarity scoring
        if (this.userResponses.career_objective && this.userResponses.target_role) {
            score += 8;
        }
        
        // Budget realism scoring
        if (this.userResponses.budget_range) {
            score += 5;
        }
        
        // Cap the score at 100
        return Math.min(score, 100);
    }

    init() {
        this.currentStep = 0;
        this.userResponses = {};
        this.renderCurrentStep();
    }
}

// Create instance
const enhancedAI = new EnhancedAIRecommendationSystem();

// Simple initialization function
window.initializeEnhancedQuestionnaire = function(containerId = 'ai-questionnaire-container') {
    console.log('🔧 COMPREHENSIVE VERSION: Initializing questionnaire in container:', containerId);
    
    const container = document.getElementById(containerId);
    if (container) {
        console.log('✅ Container found:', container);
        
        // Initialize the comprehensive questionnaire
        enhancedAI.init();
        
        console.log('🎯 COMPREHENSIVE questionnaire loaded successfully');
        
    } else {
        console.error('❌ Container not found:', containerId);
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.enhancedAI = enhancedAI;
}

console.log('✅ Enhanced AI Questionnaire COMPREHENSIVE version loaded successfully');
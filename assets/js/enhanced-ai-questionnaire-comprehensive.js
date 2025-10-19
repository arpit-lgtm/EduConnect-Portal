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

    // Check if a question should be shown based on user's selections
    shouldShowQuestion(question) {
        // Always show questions if no field of interest is selected yet
        if (!this.userResponses.field_of_interest) {
            return true;
        }

        const fieldOfInterest = this.userResponses.field_of_interest;
        
        // Define field patterns that indicate certificate/diploma programs with fixed durations
        const certificateFields = [
            'data_science',        // Often 6-12 month programs
            'artificial_intelligence', // Often 6-12 month certifications
            'cyber_security',     // Often 6-12 month certifications  
            'digital_marketing',  // Often 3-6 month certifications
            'cloud_computing',    // Often 3-12 month certifications
            'web_development',    // Often 6-12 month bootcamps
            'mobile_app_development' // Often 6-12 month bootcamps
        ];

        // Define fields that typically offer 1-year specialized programs
        const oneYearProgramFields = [
            'business_management' // Includes 1-Year MBA options
        ];

        // Hide duration question for certificate/diploma fields with fixed durations
        if (question.id === 'course_duration') {
            // Certificate/Diploma programs usually have fixed durations
            if (certificateFields.includes(fieldOfInterest)) {
                console.log('🚫 Hiding duration question for certificate/short-term field:', fieldOfInterest);
                return false;
            }
            
            // For business management, we'll show duration but expect users to choose based on available options
            // The 1-Year MBA option will be available in the universities, so duration preference is still relevant
            if (oneYearProgramFields.includes(fieldOfInterest)) {
                console.log('✅ Showing duration question for business field (includes 1-year options):', fieldOfInterest);
                return true;
            }
        }

        // Hide learning commitment question for certificate/short-term programs that are intensive by nature
        if (question.id === 'learning_commitment') {
            if (certificateFields.includes(fieldOfInterest)) {
                console.log('🚫 Hiding learning commitment question for certificate field:', fieldOfInterest);
                return false;
            }
        }

        // Hide certain specialization questions that don't apply to basic certificate programs
        if (question.id === 'specialization_preference') {
            if (certificateFields.includes(fieldOfInterest)) {
                console.log('🚫 Hiding specialization question for certificate field:', fieldOfInterest);
                return false;
            }
        }

        // Check if this is an international course
        const selectedCourse = window.selectedCourseForQuestionnaire || '';
        const isInternationalCourse = selectedCourse.toLowerCase().includes('abroad') || 
                                    selectedCourse.toLowerCase().includes('international') ||
                                    selectedCourse.toLowerCase().includes('global');

        // For international courses, hide state and distance preference questions
        if (question.id === 'preferred_state' && isInternationalCourse) {
            console.log('🚫 Hiding state preference question for international course:', selectedCourse);
            return false;
        }

        if (question.id === 'distance_preference' && isInternationalCourse) {
            console.log('🚫 Hiding distance preference question for international course:', selectedCourse);
            return false;
        }

        // Show all other questions by default
        return true;
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
            // Only add the question if it should be shown based on user selections
            if (this.shouldShowQuestion(question)) {
                html += this.generateEnhancedQuestionHTML(question, step, qIndex);
            }
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
        
        // Check if this is an international course and modify question text accordingly
        const selectedCourse = window.selectedCourseForQuestionnaire || '';
        const isInternationalCourse = selectedCourse.toLowerCase().includes('abroad') || 
                                    selectedCourse.toLowerCase().includes('international') ||
                                    selectedCourse.toLowerCase().includes('global');
        
        let questionText = question.question;
        if (question.id === 'preferred_state' && isInternationalCourse) {
            questionText = 'Which state are you currently based in?';
            console.log('🌍 Modified question for international course:', questionText);
        }
        
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
                        ${questionText}
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
                const currentValue = this.userResponses[question.id] || '';
                question.options.forEach(option => {
                    const selected = currentValue === option.value ? 'selected' : '';
                    html += `<option value="${option.value}" ${selected}>${option.label}</option>`;
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
                        onclick="
                            const input = this.querySelector('input');
                            if (!input.checked) {
                                input.click();
                                // Reset all radio options in this group first
                                const groupName = input.name;
                                const allRadios = document.querySelectorAll(\`input[name='\${groupName}']\`);
                                allRadios.forEach(radio => {
                                    const label = radio.closest('label');
                                    if (label) {
                                        label.style.borderColor = '#e2e8f0';
                                        label.style.background = 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)';
                                        label.style.color = '#1e293b';
                                    }
                                });
                                // Style the selected option
                                this.style.borderColor='#667eea'; 
                                this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; 
                                this.style.color='white';
                            }
                        ">
                            
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
                            
                            <input type="radio" name="${questionId}" value="${option.value}" ${question.required ? 'required' : ''} ${this.userResponses[question.id] === option.value ? 'checked' : ''} style="
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
                            
                            <input type="checkbox" name="${questionId}" value="${option.value}" ${question.maxSelections ? `data-max="${question.maxSelections}"` : ''} ${(Array.isArray(this.userResponses[question.id]) && this.userResponses[question.id].includes(option.value)) ? 'checked' : ''} style="
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
        
        // Check if this is an international course and modify question text accordingly
        const selectedCourse = window.selectedCourseForQuestionnaire || '';
        const isInternationalCourse = selectedCourse.toLowerCase().includes('abroad') || 
                                    selectedCourse.toLowerCase().includes('international') ||
                                    selectedCourse.toLowerCase().includes('global');
        
        let questionText = question.question;
        if (question.id === 'preferred_state' && isInternationalCourse) {
            questionText = 'Which state are you currently based in?';
        }
        
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
                        ${questionText}${question.required ? '<span style="color: #e53e3e; margin-left: 3px;">*</span>' : ''}
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
                const currentValue = this.userResponses[question.id] || '';
                question.options.forEach(option => {
                    const selected = currentValue === option.value ? 'selected' : '';
                    html += `<option value="${option.value}" ${selected}>${option.label}</option>`;
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
                        onclick="
                            const input = this.querySelector('input');
                            if (!input.checked) {
                                input.click();
                                // Reset all radio options in this group first
                                const groupName = input.name;
                                const allRadios = document.querySelectorAll(\`input[name='\${groupName}']\`);
                                allRadios.forEach(radio => {
                                    const label = radio.closest('label');
                                    if (label) {
                                        label.style.borderColor = '#e2e8f0';
                                        label.style.backgroundColor = '#f8fafc';
                                    }
                                });
                                // Style the selected option
                                this.style.borderColor='#667eea'; 
                                this.style.backgroundColor='#e6f3ff';
                            }
                        ">
                            <input type="radio" name="${questionId}" value="${option.value}" ${question.required ? 'required' : ''} ${this.userResponses[question.id] === option.value ? 'checked' : ''} style="
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
                            <input type="checkbox" name="${questionId}" value="${option.value}" ${question.maxSelections ? `data-max="${question.maxSelections}"` : ''} ${(Array.isArray(this.userResponses[question.id]) && this.userResponses[question.id].includes(option.value)) ? 'checked' : ''} style="
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

    // Check if a step has any visible questions
    stepHasVisibleQuestions(stepIndex) {
        const stepData = this.questions[stepIndex];
        if (!stepData) return false;
        
        return stepData.questions.some(question => this.shouldShowQuestion(question));
    }

    nextStep() {
        if (this.validateCurrentStep()) {
            this.saveCurrentStepData();
            if (this.currentStep < this.totalSteps - 1) {
                this.currentStep++;
                
                // Skip steps with no visible questions
                while (this.currentStep < this.totalSteps - 1 && !this.stepHasVisibleQuestions(this.currentStep)) {
                    console.log(`🚫 Skipping step ${this.currentStep + 1} (no visible questions)`);
                    this.currentStep++;
                }
                
                this.renderCurrentStep();
                this.scrollToTop();
            }
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.saveCurrentStepData();
            this.currentStep--;
            
            // Skip steps with no visible questions when going backwards
            while (this.currentStep > 0 && !this.stepHasVisibleQuestions(this.currentStep)) {
                console.log(`🚫 Skipping backwards step ${this.currentStep + 1} (no visible questions)`);
                this.currentStep--;
            }
            
            this.renderCurrentStep();
            this.scrollToTop();
        }
    }

    scrollToTop() {
        const container = document.getElementById(window.currentQuestionnaireContainerId) ||
                          document.getElementById('questionnaire-container-modal') || 
                          document.getElementById('questionnaire-container');
        if (container) {
            container.scrollTop = 0;
        }
    }

    validateCurrentStep() {
        const currentStepElement = document.querySelector(`[data-step="${this.currentStep}"]`);
        if (!currentStepElement) return false;

        const stepData = this.questions[this.currentStep];
        if (!stepData) return false;

        let isValid = true;

        // Clear previous errors
        currentStepElement.querySelectorAll('.error-message').forEach(error => error.remove());
        currentStepElement.querySelectorAll('.error').forEach(field => field.classList.remove('error'));

        // Only validate questions that should be shown
        stepData.questions.forEach((question, qIndex) => {
            if (!this.shouldShowQuestion(question)) {
                return; // Skip validation for hidden questions
            }

            if (question.required) {
                const questionElement = currentStepElement.querySelector(`[data-question-id="${question.id}"]`);
                if (!questionElement) return;

                const requiredFields = questionElement.querySelectorAll('[required]');
                
                requiredFields.forEach(field => {
                    if (field.type === 'radio') {
                        const radioGroup = questionElement.querySelectorAll(`[name="${field.name}"]`);
                        const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                        if (!isChecked) {
                            isValid = false;
                            this.showValidationError(field, 'Please select an option');
                        }
                    } else if (field.type === 'checkbox') {
                        const checkboxGroup = questionElement.querySelectorAll(`[name="${field.name}"]`);
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
            // Only save data for questions that should be shown
            if (!this.shouldShowQuestion(question)) {
                // Remove any existing data for hidden questions to prevent stale data
                if (this.userResponses[question.id]) {
                    delete this.userResponses[question.id];
                    console.log('🗑️ Removed data for hidden question:', question.id);
                }
                return;
            }

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
        const container = document.getElementById(window.currentQuestionnaireContainerId) ||
                          document.getElementById('questionnaire-container-modal') || 
                          document.getElementById('questionnaire-container');
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

                        // Check if this is the field_of_interest question and handle dynamic question showing/hiding
                        const questionBlock = input.closest('.question-block');
                        if (questionBlock && questionBlock.getAttribute('data-question-id') === 'field_of_interest') {
                            console.log('🔄 Field of interest changed, will update questions on next step...');
                            // Save the response immediately but don't re-render to avoid resetting the dropdown
                            this.userResponses[questionBlock.getAttribute('data-question-id')] = input.value;
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

                    // Add change listener for dynamic question updates
                    if (control.tagName === 'SELECT') {
                        control.addEventListener('change', () => {
                            const questionBlock = control.closest('.question-block');
                            if (questionBlock && questionBlock.getAttribute('data-question-id') === 'field_of_interest') {
                                console.log('🔄 Field of interest changed via dropdown, will update questions on next step...');
                                // Save the response immediately but don't re-render to avoid resetting the dropdown
                                this.userResponses[questionBlock.getAttribute('data-question-id')] = control.value;
                            }
                        });
                    }
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
        
        // Check if the selected course is international
        const selectedCourse = window.selectedCourseForQuestionnaire || '';
        const isInternationalCourse = selectedCourse.toLowerCase().includes('abroad') || 
                                    selectedCourse.toLowerCase().includes('international') ||
                                    selectedCourse.toLowerCase().includes('global');
        
        console.log(`🌐 Course: ${selectedCourse}, Is International: ${isInternationalCourse}`);
        
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
        
        // For international courses, show ONLY international universities (ignore state preference)
        if (isInternationalCourse) {
            const internationalUniversities = universities.filter(uni => {
                // Check for explicit isInternational flag first
                if (uni.isInternational === true) {
                    console.log(`✅ International uni (flag): ${uni.name} - ${uni.location}`);
                    return true;
                }
                
                // If isInternational is false or undefined, check location carefully
                if (uni.isInternational === false) {
                    console.log(`❌ Explicitly domestic uni: ${uni.name} - ${uni.location}`);
                    return false;
                }
                
                // If no location data, exclude
                if (!uni.location) {
                    console.log(`❌ No location data: ${uni.name}`);
                    return false;
                }
                
                const location = uni.location.toLowerCase();
                
                // First, explicitly exclude ANY Indian locations
                const isIndianLocation = location.includes('mumbai') || 
                       location.includes('maharashtra') || 
                       location.includes('delhi') || 
                       location.includes('bangalore') || 
                       location.includes('bengaluru') || 
                       location.includes('hyderabad') || 
                       location.includes('chennai') || 
                       location.includes('kolkata') || 
                       location.includes('pune') || 
                       location.includes('ahmedabad') || 
                       location.includes('jaipur') || 
                       location.includes('lucknow') || 
                       location.includes('kanpur') || 
                       location.includes('nagpur') || 
                       location.includes('indore') || 
                       location.includes('bhopal') || 
                       location.includes('visakhapatnam') || 
                       location.includes('patna') || 
                       location.includes('ludhiana') || 
                       location.includes('agra') || 
                       location.includes('nashik') || 
                       location.includes('faridabad') || 
                       location.includes('meerut') || 
                       location.includes('rajkot') || 
                       location.includes('kalyan') || 
                       location.includes('vasai') || 
                       location.includes('varanasi') || 
                       location.includes('srinagar') || 
                       location.includes('aurangabad') || 
                       location.includes('dhanbad') || 
                       location.includes('amritsar') || 
                       location.includes('navi mumbai') || 
                       location.includes('allahabad') || 
                       location.includes('ranchi') || 
                       location.includes('howrah') || 
                       location.includes('coimbatore') || 
                       location.includes('jabalpur') || 
                       location.includes('gwalior') || 
                       location.includes('vijayawada') || 
                       location.includes('jodhpur') || 
                       location.includes('madurai') || 
                       location.includes('raipur') || 
                       location.includes('kota') || 
                       location.includes('guwahati') || 
                       location.includes('chandigarh') || 
                       location.includes('solapur') || 
                       location.includes('hubli') || 
                       location.includes('tiruchirappalli') || 
                       location.includes('bareilly') || 
                       location.includes('moradabad') || 
                       location.includes('mysore') || 
                       location.includes('gurgaon') || 
                       location.includes('aligarh') || 
                       location.includes('jalandhar') || 
                       location.includes('bhubaneswar') || 
                       location.includes('salem') || 
                       location.includes('warangal') || 
                       location.includes('mira') || 
                       location.includes('bhiwandi') || 
                       location.includes('saharanpur') || 
                       location.includes('gorakhpur') || 
                       location.includes('bikaner') || 
                       location.includes('amravati') || 
                       location.includes('noida') || 
                       location.includes('jamshedpur') || 
                       location.includes('bhilai') || 
                       location.includes('cuttack') || 
                       location.includes('firozabad') || 
                       location.includes('kochi') || 
                       location.includes('bhavnagar') || 
                       location.includes('dehradun') || 
                       location.includes('durgapur') || 
                       location.includes('asansol') || 
                       location.includes('nanded') || 
                       location.includes('kolhapur') || 
                       location.includes('ajmer') || 
                       location.includes('gulbarga') || 
                       location.includes('jamnagar') || 
                       location.includes('ujjain') || 
                       location.includes('loni') || 
                       location.includes('siliguri') || 
                       location.includes('jhansi') || 
                       location.includes('ulhasnagar') || 
                       location.includes('nellore') || 
                       location.includes('jammu') || 
                       location.includes('sangli') || 
                       location.includes('india') ||
                       location.includes('bharatiya') ||
                       location.includes('uttar pradesh') ||
                       location.includes('tamil nadu') ||
                       location.includes('west bengal') ||
                       location.includes('rajasthan') ||
                       location.includes('kerala') ||
                       location.includes('gujarat') ||
                       location.includes('karnataka') ||
                       location.includes('andhra pradesh') ||
                       location.includes('telangana') ||
                       location.includes('bihar') ||
                       location.includes('odisha') ||
                       location.includes('punjab') ||
                       location.includes('haryana') ||
                       location.includes('jharkhand') ||
                       location.includes('assam') ||
                       location.includes('chhattisgarh') ||
                       location.includes('himachal pradesh') ||
                       location.includes('jammu and kashmir') ||
                       location.includes('uttarakhand') ||
                       location.includes('goa') ||
                       location.includes('tripura') ||
                       location.includes('meghalaya') ||
                       location.includes('manipur') ||
                       location.includes('nagaland') ||
                       location.includes('arunachal pradesh') ||
                       location.includes('mizoram') ||
                       location.includes('sikkim');
                
                if (isIndianLocation) {
                    console.log(`❌ Indian location excluded: ${uni.name} - ${uni.location}`);
                    return false;
                }
                
                // Now check for explicit international locations
                const isInternationalLocation = location.includes('usa') ||
                       location.includes('florida') || 
                       location.includes('canada') || 
                       location.includes('australia') || 
                       location.includes('uk') || 
                       location.includes('united kingdom') || 
                       location.includes('singapore') || 
                       location.includes('dubai') ||
                       location.includes('new york') ||
                       location.includes('california') ||
                       location.includes('texas') ||
                       location.includes('london') ||
                       location.includes('melbourne') ||
                       location.includes('sydney') ||
                       location.includes('toronto') ||
                       location.includes('vancouver') ||
                       location.includes('germany') ||
                       location.includes('france') ||
                       location.includes('netherlands') ||
                       location.includes('switzerland') ||
                       location.includes('wisconsin') ||
                       location.includes('illinois') ||
                       location.includes('michigan') ||
                       location.includes('pennsylvania') ||
                       location.includes('ohio') ||
                       location.includes('north carolina') ||
                       location.includes('georgia') ||
                       location.includes('virginia') ||
                       location.includes('washington') ||
                       location.includes('massachusetts') ||
                       location.includes('arizona') ||
                       location.includes('tennessee') ||
                       location.includes('missouri') ||
                       location.includes('maryland') ||
                       location.includes('minnesota') ||
                       location.includes('colorado') ||
                       location.includes('alabama') ||
                       location.includes('south carolina') ||
                       location.includes('louisiana') ||
                       location.includes('kentucky') ||
                       location.includes('oregon') ||
                       location.includes('oklahoma') ||
                       location.includes('connecticut') ||
                       location.includes('utah') ||
                       location.includes('iowa') ||
                       location.includes('nevada') ||
                       location.includes('arkansas') ||
                       location.includes('mississippi') ||
                       location.includes('kansas') ||
                       location.includes('new mexico') ||
                       location.includes('nebraska') ||
                       location.includes('west virginia') ||
                       location.includes('idaho') ||
                       location.includes('hawaii') ||
                       location.includes('new hampshire') ||
                       location.includes('maine') ||
                       location.includes('montana') ||
                       location.includes('rhode island') ||
                       location.includes('delaware') ||
                       location.includes('south dakota') ||
                       location.includes('north dakota') ||
                       location.includes('alaska') ||
                       location.includes('vermont') ||
                       location.includes('wyoming');
                
                // Only accept if location is explicitly international
                if (isInternationalLocation) {
                    console.log(`✅ International uni (location): ${uni.name} - ${uni.location}`);
                    return true;
                } else {
                    console.log(`❌ Location not recognized as international: ${uni.name} - ${uni.location}`);
                    return false;
                }
            });            console.log(`🌍 International course detected - showing ${internationalUniversities.length} global universities regardless of state preference`);
            console.log(`📍 User is based in: ${preferredState} (for reference only)`);
            return internationalUniversities;
        }
        
        // For domestic courses, remove all foreign universities when Indian state is selected
        const indianUniversities = universities.filter(uni => {
            // Keep universities that are explicitly NOT international
            if (uni.isInternational === true) return false;
            
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
                   !location.includes('texas') &&
                   !location.includes('london') &&
                   !location.includes('melbourne') &&
                   !location.includes('sydney') &&
                   !location.includes('toronto') &&
                   !location.includes('vancouver') &&
                   !location.includes('germany') &&
                   !location.includes('france') &&
                   !location.includes('netherlands') &&
                   !location.includes('switzerland');
        });
        
        console.log(`🇮🇳 After removing foreign universities: ${indianUniversities.length} universities`);
        
        // For international courses, return early - no state filtering needed
        if (isInternationalCourse) {
            // We already returned international universities above
            return universities.filter(uni => {
                if (uni.isInternational) return true;
                if (!uni.location) return false;
                
                const location = uni.location.toLowerCase();
                return location.includes('usa') || 
                       location.includes('florida') || 
                       location.includes('canada') || 
                       location.includes('australia') || 
                       location.includes('uk') || 
                       location.includes('singapore') || 
                       location.includes('dubai') ||
                       location.includes('new york') ||
                       location.includes('california') ||
                       location.includes('texas') ||
                       location.includes('london') ||
                       location.includes('melbourne') ||
                       location.includes('sydney') ||
                       location.includes('toronto') ||
                       location.includes('vancouver') ||
                       location.includes('germany') ||
                       location.includes('france') ||
                       location.includes('netherlands') ||
                       location.includes('switzerland');
            });
        }
        
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
            'computer_science': ['computer', 'it', 'information technology', 'software', 'mca', 'bca', 'computer science', 'm.tech', 'technology', 'computer applications'],
            'data_science': ['data science', 'analytics', 'data analytics', 'big data', 'machine learning', 'm.tech', 'technology', 'mca'],
            'artificial_intelligence': ['artificial intelligence', 'ai', 'machine learning', 'ml', 'deep learning', 'm.tech', 'technology', 'mca'],
            'cyber_security': ['cyber security', 'cybersecurity', 'information security', 'network security', 'm.tech', 'technology', 'mca'],
            'software_development': ['software', 'programming', 'development', 'coding', 'computer science', 'm.tech', 'technology', 'mca'],
            'web_development': ['web development', 'web design', 'frontend', 'backend', 'full stack', 'mca'],
            'mobile_app_development': ['mobile', 'app development', 'android', 'ios', 'flutter', 'mca'],
            'cloud_computing': ['cloud', 'aws', 'azure', 'devops', 'cloud computing', 'mca'],
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
            'mechanical_engineering': ['mechanical', 'engineering', 'b.tech', 'm.tech', 'technology', 'mech'],
            'electrical_engineering': ['electrical', 'electronics', 'engineering', 'b.tech', 'm.tech', 'technology', 'eee'],
            'civil_engineering': ['civil', 'engineering', 'construction', 'b.tech', 'm.tech', 'technology'],
            'automobile_engineering': ['automobile', 'automotive', 'engineering', 'b.tech', 'm.tech', 'technology'],
            'design_creative': ['design', 'creative', 'graphic design', 'fashion', 'interior design']
        };
        
        // Legacy field mapping for direct field names
        const legacyFieldMapping = {
            'Management': ['management', 'mba', 'business', 'administration', 'bba'],
            'Engineering': ['engineering', 'b.tech', 'm.tech', 'btech', 'mtech', 'technology', 'mechanical', 'electrical', 'civil', 'computer'],
            'Computer Applications': ['computer', 'it', 'information technology', 'software', 'mca', 'bca', 'computer applications'],
            'Data Science': ['data science', 'analytics', 'data analytics', 'big data', 'machine learning', 'mca'],
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
            
            // Store responses globally for comparison system
            window.currentUserResponses = { ...this.userResponses };
            console.log('💾 User responses stored globally for comparison system');
            
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
                console.log('⚠️ No completion callback found - showing results directly');
                // Show university recommendations directly in this tab
                this.showUniversityRecommendations(results);
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

    // Map field of interest to actual course name for university filtering
    mapFieldOfInterestToCourseName(fieldOfInterest) {
        const fieldMapping = {
            // Business & Management
            'business_management': 'Online MBA',
            'finance_accounting': 'Online MBA (Finance)',
            'marketing_sales': 'Online MBA (Marketing)',
            'human_resources': 'Online MBA (HR)',
            'operations_supply_chain': 'Online MBA (Operations)',
            'entrepreneurship': 'Online MBA',
            
            // Technology & IT
            'data_science': 'Data Science',
            'artificial_intelligence': 'AI & Machine Learning',
            'cyber_security': 'Cyber Security',
            'cloud_computing': 'Cloud Computing',
            'software_development': 'Software Development',
            'web_development': 'Web Development',
            'mobile_app_development': 'Mobile App Development',
            'digital_marketing': 'Digital Marketing',
            
            // Engineering
            'mechanical_engineering': 'Mechanical Engineering',
            'electrical_engineering': 'Electrical Engineering',
            'civil_engineering': 'Civil Engineering',
            'computer_engineering': 'Computer Engineering',
            'automobile_engineering': 'Automobile Engineering',
            
            // Healthcare
            'healthcare_management': 'Healthcare Management',
            'public_health': 'Public Health',
            'hospital_administration': 'Hospital Administration',
            
            // International Education
            'study_abroad_mba': 'MBA Abroad',
            'study_abroad_ms': 'MS Abroad',
            'study_abroad_engineering': 'Engineering Abroad',
            'study_abroad_management': 'Management Abroad'
        };
        
        return fieldMapping[fieldOfInterest] || fieldOfInterest;
    }

    showUniversityRecommendations(results) {
        console.log('🏛️ Showing university recommendations based on questionnaire results');
        console.log('📊 Results:', results);
        console.log('🔍 Database check - universityDatabase type:', typeof universityDatabase);
        console.log('🔍 Database check - universityDatabase length:', universityDatabase?.length);
        console.log('🔍 Renderer check - popularProgramsRenderer type:', typeof popularProgramsRenderer);
        
        // Get course name - prioritize the course selected from popular programs
        let courseName = window.selectedCourseForQuestionnaire || 
                        this.getUrlParameter('course') || 
                        this.mapFieldOfInterestToCourseName(results.field_of_interest) || 
                        'Your Selected Course';
        
        console.log('🎓 Selected course for recommendations:', courseName);
        
        // Update global variable (don't overwrite if already set from popular programs)
        if (!window.selectedCourseForQuestionnaire) {
            window.selectedCourseForQuestionnaire = courseName;
        }
        
        // Get the container
        const container = document.getElementById(window.currentQuestionnaireContainerId) || 
                          document.getElementById('questionnaire-container');
        
        if (!container) {
            console.error('❌ Container not found for university recommendations');
            console.log('🔍 Available containers:', document.querySelectorAll('[id*="questionnaire"]'));
            return;
        }

        // Show loading first
        container.innerHTML = `
            <div class="recommendations-loading text-center py-5">
                <div class="loading-spinner mb-3"></div>
                <h3>🎯 Analyzing Your Responses...</h3>
                <p>Finding the perfect universities for your ${courseName} journey</p>
            </div>
        `;

        // Get universities with shorter timeout
        setTimeout(() => {
            let relevantUniversities = [];
            
            if (typeof universityDatabase !== 'undefined' && universityDatabase.length > 0) {
                // Check if this is an international course first
                const isInternationalCourse = courseName.toLowerCase().includes('abroad') || 
                                            courseName.toLowerCase().includes('international') ||
                                            courseName.toLowerCase().includes('global');
                
                if (isInternationalCourse) {
                    // For international courses, extract the base course type for matching
                    let baseCourseType = courseName.toLowerCase();
                    baseCourseType = baseCourseType.replace(/\s*(abroad|international|global)\s*/g, '').trim();
                    console.log(`🌍 International course detected: "${courseName}" -> base type: "${baseCourseType}"`);
                    
                    relevantUniversities = universityDatabase.filter(university => {
                        // First, check if it's an international university
                        if (university.isInternational !== true) {
                            return false;
                        }
                        
                        // Then check if it offers the base course type
                        return university.courses && university.courses.some(course => 
                            course.toLowerCase().includes(baseCourseType) ||
                            baseCourseType.includes(course.toLowerCase())
                        );
                    });
                    
                    console.log(`✅ Found ${relevantUniversities.length} international universities for ${courseName}`);
                } else {
                    // For domestic courses, use regular matching
                    console.log(`🔍 Searching for universities offering: "${courseName}"`);
                    relevantUniversities = universityDatabase.filter(university => {
                        const hasMatch = university.courses && university.courses.some(course => 
                            course.toLowerCase().includes(courseName.toLowerCase()) ||
                            courseName.toLowerCase().includes(course.toLowerCase())
                        );
                        if (hasMatch) {
                            console.log(`   ✓ ${university.name} offers matching courses:`, university.courses);
                        }
                        return hasMatch;
                    });
                    
                    console.log(`✅ Found ${relevantUniversities.length} universities for ${courseName}`);
                }
                
                // If no specific matches found, show top universities
                if (relevantUniversities.length === 0) {
                    console.log('ℹ️ No specific matches, showing top universities');
                    if (isInternationalCourse) {
                        // For international courses, only show international universities
                        relevantUniversities = universityDatabase.filter(uni => uni.isInternational === true).slice(0, 15);
                        console.log(`🌍 Showing ${relevantUniversities.length} international fallback universities`);
                    } else {
                        relevantUniversities = universityDatabase.slice(0, 15);
                    }
                }
            } else {
                console.error('❌ University database not available or empty');
                console.log('🔍 Checking database:', typeof universityDatabase, universityDatabase?.length);
                container.innerHTML = `
                    <div class="alert alert-warning text-center">
                        <h4>⚠️ Database Loading</h4>
                        <p>University database is still loading. Please refresh the page in a moment.</p>
                        <button class="btn btn-primary" onclick="location.reload()">
                            <i class="fas fa-refresh me-2"></i>Refresh Page
                        </button>
                    </div>
                `;
                return;
            }

            // Apply filtering based on questionnaire results
            if (results.field_of_interest) {
                console.log(`🎯 Applying field of interest filtering for: ${results.field_of_interest} (${relevantUniversities.length} universities before filtering)`);
                relevantUniversities = this.filterUniversitiesByFieldOfInterest(relevantUniversities, results.field_of_interest);
                console.log(`📊 After field of interest filtering: ${relevantUniversities.length} universities remaining`);
            }

            // Check if this is an international course
            const isInternationalCourse = courseName.toLowerCase().includes('abroad') || 
                                        courseName.toLowerCase().includes('international') ||
                                        courseName.toLowerCase().includes('global');

            if (results.preferred_state && results.preferred_state !== 'no_preference' && !isInternationalCourse) {
                console.log('🌍 Applying location filtering for state:', results.preferred_state);
                relevantUniversities = relevantUniversities.filter(university => {
                    const location = (university.location || '').toLowerCase();
                    const state = results.preferred_state.toLowerCase().replace(/_/g, ' ');
                    return location.includes(state);
                });
            } else if (isInternationalCourse) {
                console.log('🌍 Skipping state filtering for international course:', courseName);
            }

            // Enrich universities with ratings and explanations from course database
            console.log('💎 Starting university enrichment process...');
            try {
                if (typeof popularProgramsRenderer !== 'undefined' && popularProgramsRenderer.enrichUniversitiesWithCourseData) {
                    console.log('💎 Using popular programs renderer for enrichment');
                    console.log('🔍 Course name for enrichment:', courseName);
                    console.log('📊 Universities before enrichment:', relevantUniversities.length);
                    
                    relevantUniversities = popularProgramsRenderer.enrichUniversitiesWithCourseData(relevantUniversities, courseName);
                    
                    console.log('📊 Universities after enrichment:', relevantUniversities.length);
                    console.log('💰 Sample fees check:', relevantUniversities.slice(0, 3).map(u => ({
                        name: u.name,
                        fees: u.fees,
                        matchRating: u.matchRating
                    })));

                    // Post-enrichment fees fallback for universities that still don't have fees
                    let courseName_clean = courseName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
                    let courseData = null;
                    if (typeof coursesDatabase !== 'undefined') {
                        courseData = coursesDatabase.find(course => 
                            course.id === courseName_clean || 
                            course.name.toLowerCase().includes(courseName.toLowerCase()) ||
                            courseName.toLowerCase().includes(course.name.toLowerCase())
                        );
                    }

                    relevantUniversities.forEach(university => {
                        if (!university.fees || (!university.fees.min && !university.fees.max && typeof university.fees !== 'number')) {
                            console.log(`💰 Post-enrichment: Adding fallback fees for ${university.name}`);
                            
                            // Try to get fees from course database first
                            if (courseData && courseData.fees) {
                                university.fees = courseData.fees;
                                console.log(`💰 Applied course default fees for ${university.name}:`, courseData.fees);
                            } else {
                                // Generate reasonable estimates
                                const uniName = university.name.toLowerCase();
                                let estimatedFees = { min: 50000, max: 300000 };
                                
                                if (uniName.includes('iit') || uniName.includes('iim') || uniName.includes('iisc')) {
                                    estimatedFees = { min: 200000, max: 800000 };
                                } else if (uniName.includes('nmims') || uniName.includes('manipal') || uniName.includes('vit')) {
                                    estimatedFees = { min: 150000, max: 500000 };
                                } else if (uniName.includes('amity') || uniName.includes('lpu') || uniName.includes('lovely')) {
                                    estimatedFees = { min: 100000, max: 350000 };
                                } else if (uniName.includes('ignou') || uniName.includes('state') || uniName.includes('government')) {
                                    estimatedFees = { min: 20000, max: 100000 };
                                }
                                
                                university.fees = estimatedFees;
                                console.log(`💰 Applied estimated fees for ${university.name}:`, estimatedFees);
                            }
                        }
                    });
                } else {
                    console.log('⚠️ Popular programs renderer not available, using fallback enrichment');
                    // Enhanced fallback enrichment with course database lookup
                    try {
                        // Try to find course data for fees
                        let courseData = null;
                        if (typeof coursesDatabase !== 'undefined') {
                            const courseId = courseName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
                            courseData = coursesDatabase.find(course => 
                                course.id === courseId || 
                                course.name.toLowerCase().includes(courseName.toLowerCase()) ||
                                courseName.toLowerCase().includes(course.name.toLowerCase())
                            );
                            console.log('📊 Found course data for fees:', courseData?.name);
                        }
                        
                        relevantUniversities = relevantUniversities.map((university, index) => {
                            const enrichedUniversity = { ...university };
                            
                            // Generate realistic match rating
                            const baseRating = 75 + Math.floor(Math.random() * 20); // 75-95%
                            const bonusRating = Math.floor(Math.random() * 8); // 0-7% bonus
                            enrichedUniversity.matchRating = Math.min(98, baseRating + bonusRating);
                            
                            // Try to get real fees from course database
                            if (courseData && courseData.realFeesData) {
                                const uniNameVariants = [
                                    university.name,
                                    university.name.replace(/\s*\(.*?\)\s*/g, '').trim(),
                                    university.name.split('(')[0].trim(),
                                    university.name.replace(/University|College|Institute/gi, '').trim(),
                                    university.name.replace(/\s+University$/i, '').trim(),
                                    university.name.replace(/\s+College$/i, '').trim(),
                                    university.name.replace(/\s+Institute$/i, '').trim(),
                                    // Additional variants for better matching
                                    university.name.replace(/^Dr\.?\s+/i, '').trim(),
                                    university.name.replace(/\s*-\s*.*$/, '').trim(),
                                    university.name.split(',')[0].trim(),
                                    university.name.split(' - ')[0].trim()
                                ];
                                
                                console.log(`🔍 Trying to match fees for ${university.name} with variants:`, uniNameVariants);
                                
                                let feesFound = false;
                                for (const variant of uniNameVariants) {
                                    const realFees = courseData.realFeesData[variant];
                                    if (realFees && realFees.fee) {
                                        enrichedUniversity.fees = {
                                            min: realFees.fee,
                                            max: realFees.fee,
                                            details: realFees
                                        };
                                        console.log(`💰 Found real fees for ${university.name} (matched as "${variant}"): ₹${realFees.fee.toLocaleString()}`);
                                        feesFound = true;
                                        break;
                                    }
                                }
                                
                                // If exact matching fails, try partial matching
                                if (!feesFound) {
                                    console.log(`🔄 Trying partial matching for ${university.name}`);
                                    const realFeesKeys = Object.keys(courseData.realFeesData);
                                    for (const feesKey of realFeesKeys) {
                                        for (const variant of uniNameVariants) {
                                            if (variant.length > 3 && (
                                                feesKey.toLowerCase().includes(variant.toLowerCase()) ||
                                                variant.toLowerCase().includes(feesKey.toLowerCase()) ||
                                                feesKey.toLowerCase().replace(/\s+/g, '') === variant.toLowerCase().replace(/\s+/g, '')
                                            )) {
                                                const realFees = courseData.realFeesData[feesKey];
                                                if (realFees && realFees.fee) {
                                                    enrichedUniversity.fees = {
                                                        min: realFees.fee,
                                                        max: realFees.fee,
                                                        details: realFees
                                                    };
                                                    console.log(`💰 Found real fees via partial match for ${university.name} (matched "${variant}" with "${feesKey}"): ₹${realFees.fee.toLocaleString()}`);
                                                    feesFound = true;
                                                    break;
                                                }
                                            }
                                        }
                                        if (feesFound) break;
                                    }
                                }
                                
                                // Get explanation if available using same improved matching
                                for (const variant of uniNameVariants) {
                                    const explanation = courseData.universityExplanations?.[variant];
                                    if (explanation) {
                                        enrichedUniversity.matchRating = explanation.rating;
                                        enrichedUniversity.matchExplanation = explanation.explanation;
                                        console.log(`📝 Found explanation for ${university.name}: ${explanation.rating}%`);
                                        break;
                                    }
                                }
                            }
                            
                            // Fallback fees if not found from course database
                            if (!enrichedUniversity.fees || (!enrichedUniversity.fees.min && !enrichedUniversity.fees.max)) {
                                console.log(`💰 No specific fees found for ${university.name}, using fallback fees`);
                                
                                // Use university's own fees if available
                                if (university.fees) {
                                    enrichedUniversity.fees = university.fees;
                                    console.log(`💰 Using university default fees for ${university.name}:`, university.fees);
                                } 
                                // Use course general fees as fallback
                                else if (courseData && courseData.fees) {
                                    enrichedUniversity.fees = courseData.fees;
                                    console.log(`💰 Using course default fees for ${university.name}:`, courseData.fees);
                                }
                                // Generate reasonable fee estimates based on university type
                                else {
                                    const uniName = university.name.toLowerCase();
                                    let estimatedFees = { min: 50000, max: 300000 }; // Default range
                                    
                                    if (uniName.includes('iit') || uniName.includes('iim') || uniName.includes('iisc')) {
                                        estimatedFees = { min: 200000, max: 800000 }; // Premium institutes
                                    } else if (uniName.includes('nmims') || uniName.includes('manipal') || uniName.includes('vit')) {
                                        estimatedFees = { min: 150000, max: 500000 }; // Private premium
                                    } else if (uniName.includes('amity') || uniName.includes('lpu') || uniName.includes('lovely')) {
                                        estimatedFees = { min: 100000, max: 350000 }; // Private mid-tier
                                    } else if (uniName.includes('ignou') || uniName.includes('state') || uniName.includes('government')) {
                                        estimatedFees = { min: 20000, max: 100000 }; // Government/distance
                                    }
                                    
                                    enrichedUniversity.fees = estimatedFees;
                                    console.log(`💰 Using estimated fees for ${university.name}:`, estimatedFees);
                                }
                            }
                            
                            // Fallback explanation if not found
                            if (!enrichedUniversity.matchExplanation) {
                                const explanations = [
                                    `Strong academic credentials with ${university.accreditation || 'quality accreditation'}, offering excellent ${courseName} curriculum and career opportunities.`,
                                    `Established institution with comprehensive programs, ideal for ${courseName} aspirants seeking quality education and industry recognition.`,
                                    `Quality education provider with robust ${courseName} programs aligned with industry requirements and excellent placement support.`,
                                    `Well-recognized university offering comprehensive ${courseName} education with modern facilities and experienced faculty.`,
                                    `Reputed institution providing industry-relevant ${courseName} curriculum with strong academic foundation and career guidance.`
                                ];
                                
                                const hash = university.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                                enrichedUniversity.matchExplanation = explanations[hash % explanations.length];
                            }
                            
                            return enrichedUniversity;
                        });
                    } catch (error) {
                        console.error('❌ Error in fallback enrichment:', error);
                    }
                }
                
                // Apply budget filtering - INCLUSIVE approach
                if (results.budget_range && results.budget_range !== 'employer_sponsored') {
                    console.log('💰 Applying INCLUSIVE budget filtering for:', results.budget_range);
                    const budgetBeforeCount = relevantUniversities.length;
                    
                    relevantUniversities = relevantUniversities.filter(university => {
                        if (!university.fees) {
                            console.log(`✅ No fees data for ${university.name}, INCLUDING in results (contact for details)`);
                            return true; // INCLUDE universities without fees data
                        }
                        
                        let minFee = 0;
                        let maxFee = 0;
                        
                        if (typeof university.fees === 'number') {
                            minFee = maxFee = university.fees;
                        } else if (university.fees.min && university.fees.max) {
                            minFee = university.fees.min;
                            maxFee = university.fees.max;
                        } else if (university.fees.min) {
                            minFee = maxFee = university.fees.min;
                        } else if (university.fees.max) {
                            minFee = maxFee = university.fees.max;
                        }
                        
                        let budgetMax = 0;
                        switch (results.budget_range) {
                            case 'below_50k':
                                budgetMax = 50000;
                                break;
                            case '50k_1l':
                                budgetMax = 100000;
                                break;
                            case '1l_2l':
                                budgetMax = 200000;
                                break;
                            case '2l_3l':
                                budgetMax = 300000;
                                break;
                            case '3l_5l':
                                budgetMax = 500000;
                                break;
                            case '5l_8l':
                                budgetMax = 800000;
                                break;
                            case '8l_12l':
                                budgetMax = 1200000;
                                break;
                            case '12l_20l':
                                budgetMax = 2000000;
                                break;
                            case 'above_20l':
                                budgetMax = 999999999; // No upper limit
                                break;
                            default:
                                budgetMax = 999999999; // No filter if unknown budget
                        }
                        
                        // SMART BUDGET FILTERING: Check if university has ANY fees within budget
                        // If min fee is within budget OR if it's a range that overlaps with budget
                        const hasAffordableOption = minFee <= budgetMax || 
                                                  (minFee > budgetMax && maxFee > minFee && minFee <= budgetMax * 1.5);
                        
                        if (hasAffordableOption) {
                            console.log(`✅ Budget match: ${university.name} - ₹${minFee.toLocaleString()}-₹${maxFee.toLocaleString()} fits ₹${budgetMax.toLocaleString()} budget`);
                        } else {
                            console.log(`❌ Budget exceeded: ${university.name} - ₹${minFee.toLocaleString()}-₹${maxFee.toLocaleString()} > ₹${budgetMax.toLocaleString()}`);
                        }
                        
                        return hasAffordableOption;
                    });
                    
                    console.log(`💰 INCLUSIVE budget filtering complete: ${budgetBeforeCount} → ${relevantUniversities.length} universities`);
                }
                
                // Sort by match rating (highest to lowest)
                relevantUniversities.sort((a, b) => (b.matchRating || 0) - (a.matchRating || 0));
                
                console.log('✅ University enrichment completed, showing results...');
            } catch (error) {
                console.error('❌ Error during enrichment:', error);
                // Continue without enrichment
            }

            // Always show results, even if enrichment fails
            this.renderUniversityRecommendations(container, relevantUniversities, courseName, results);
        }, 800); // Reduced from 1500ms to 800ms
    }

    renderUniversityRecommendations(container, universities, courseName, results) {
        console.log('🎨 Rendering', universities.length, 'university recommendations');
        
        if (universities.length === 0) {
            container.innerHTML = `
                <div class="no-results text-center py-5">
                    <div class="mb-4">
                        <i class="fas fa-search fa-3x text-muted"></i>
                    </div>
                    <h3>No Universities Found</h3>
                    <p>We couldn't find universities matching your specific criteria for ${courseName}.</p>
                    <p>Try adjusting your preferences or contact our counselors for personalized guidance.</p>
                    
                    <!-- Expert Consultation Call-to-Action -->
                    <div style="
                        margin: 2rem auto;
                        padding: 1.5rem;
                        background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
                        border: 2px solid #0ea5e9;
                        border-radius: 12px;
                        max-width: 500px;
                    ">
                        <p style="
                            margin-bottom: 1rem;
                            color: #0369a1;
                            font-size: 1.1rem;
                            font-weight: 600;
                        ">Not seeing any results or universities matching your requirements?</p>
                        <a href="javascript:void(0)" onclick="contactUniversity('Expert Consultation')" style="
                            color: #0284c7;
                            text-decoration: underline;
                            font-weight: 600;
                            font-size: 1rem;
                            cursor: pointer;
                            transition: color 0.2s ease;
                        " onmouseover="this.style.color='#0369a1'" onmouseout="this.style.color='#0284c7'">
                            Click here to share your details
                        </a>
                        <span style="color: #0369a1; font-size: 1rem;"> & our expert counselors will connect with you.</span>
                    </div>
                    
                    <div class="mt-4">
                        <button class="btn btn-primary me-3" onclick="location.reload()">
                            <i class="fas fa-redo me-2"></i>Retake Assessment
                        </button>
                        <a href="index.html" class="btn btn-outline-primary">
                            <i class="fas fa-home me-2"></i>Back to Home
                        </a>
                    </div>
                </div>
            `;
            return;
        }

        // Limit to top 12 universities for better display
        const topUniversities = universities.slice(0, 12);

        const recommendationsHTML = `
            <div class="university-recommendations">
                <!-- Comparison Controls Header -->
                <div style="
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                    margin-bottom: 1.5rem;
                    padding: 1rem 1.5rem;
                    background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
                    border-radius: 16px;
                    border: 2px solid #c7d2fe;
                ">
                    <div>
                        <h4 style="margin: 0; font-size: 1.25rem; font-weight: 700; color: #1e293b;">
                            📚 Your Recommended Universities
                        </h4>
                        <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #64748b;">
                            Select universities to compare side-by-side
                        </p>
                    </div>
                    <div style="display: flex; gap: 0.75rem;">
                        <button id="selectAllBtn" onclick="window.toggleSelectAll()" style="
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            border: none;
                            padding: 0.75rem 1.5rem;
                            border-radius: 12px;
                            font-weight: 600;
                            font-size: 0.95rem;
                            cursor: pointer;
                            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
                            transition: all 0.3s ease;
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(102, 126, 234, 0.4)'"
                           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(102, 126, 234, 0.3)'">
                            <i class="fas fa-check-double"></i>
                            <span id="selectAllText">Select All</span>
                        </button>
                    </div>
                </div>
                
                <!-- Universities Grid - Professional Display -->
                <div id="universitiesGrid" class="universities-grid" style="
                    display: grid; 
                    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
                    gap: 1.5rem; 
                    margin-top: 0;
                ">
                    ${topUniversities.map((university, index) => this.generateProfessionalUniversityCard(university, index + 1)).join('')}
                </div>

                <div class="recommendations-footer text-center mt-5 pt-4 border-top">
                    <div class="footer-actions" style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; align-items: center;">
                        <button class="btn btn-outline-primary btn-lg" onclick="location.reload()">
                            <i class="fas fa-redo me-2"></i>Retake Assessment
                        </button>
                        
                        <button id="exploreOtherStatesBtn" class="btn btn-success btn-lg" data-course-name="${courseName}" style="
                            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                            border: none;
                            box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.3);
                        ">
                            <i class="fas fa-map-marked-alt me-2"></i>Explore Other States
                        </button>
                    </div>
                </div>
                
                <!-- Sticky Compare Button -->
                <div id="stickyCompareBtn" style="
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    z-index: 1000;
                    display: none;
                    animation: slideInUp 0.3s ease-out;
                ">
                    <button onclick="window.openComparisonModal()" style="
                        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                        color: white;
                        border: none;
                        padding: 1.25rem 2rem;
                        border-radius: 50px;
                        font-weight: 700;
                        font-size: 1.1rem;
                        cursor: pointer;
                        box-shadow: 0 10px 30px rgba(245, 158, 11, 0.4);
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;
                        gap: 0.75rem;
                    " onmouseover="this.style.transform='translateY(-4px) scale(1.05)'; this.style.boxShadow='0 15px 40px rgba(245, 158, 11, 0.5)'"
                       onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 10px 30px rgba(245, 158, 11, 0.4)'">
                        <span style="
                            background: white;
                            color: #d97706;
                            width: 2rem;
                            height: 2rem;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-weight: 800;
                            font-size: 1rem;
                        " id="compareCount">0</span>
                        <span>Compare Universities</span>
                        <i class="fas fa-chart-bar"></i>
                    </button>
                </div>
            </div>

            <style>
                .university-recommendations {
                    animation: fadeInUp 0.6s ease-out;
                }
                
                .recommendations-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 3rem 2rem;
                    border-radius: 20px;
                    margin: -2rem -2rem 3rem -2rem;
                }
                
                .success-badge {
                    animation: bounce 1s ease-out;
                }
                
                .summary-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 15px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    margin-bottom: 1rem;
                }
                
                .summary-card h4 {
                    color: #667eea;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                
                .university-card {
                    background: white;
                    border-radius: 20px;
                    padding: 1.5rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .university-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                
                .university-rank {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                }
                
                .rank-badge {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 0.3rem 0.8rem;
                    border-radius: 15px;
                    font-weight: 600;
                    font-size: 0.9rem;
                }
                
                .university-logo-container {
                    text-align: center;
                    margin-bottom: 1rem;
                }
                
                .university-logo {
                    width: 80px;
                    height: 80px;
                    object-fit: contain;
                    border-radius: 10px;
                }
                
                .university-name {
                    color: #333;
                    font-weight: 600;
                    margin-bottom: 0.8rem;
                    line-height: 1.3;
                }
                
                .university-location {
                    color: #666;
                    margin-bottom: 1rem;
                }
                
                .feature-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 0.5rem;
                    color: #555;
                    font-size: 0.9rem;
                }
                
                .feature-item i {
                    color: #667eea;
                }
                
                .no-results {
                    background: white;
                    border-radius: 20px;
                    padding: 3rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .recommendations-loading {
                    background: white;
                    border-radius: 20px;
                    padding: 3rem;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40%, 43% {
                        transform: translateY(-15px);
                    }
                    70% {
                        transform: translateY(-7px);
                    }
                    90% {
                        transform: translateY(-3px);
                    }
                }
            </style>
        `;

        container.innerHTML = recommendationsHTML;
        
        // Add event listener for "Explore Other States" button
        setTimeout(() => {
            const exploreBtn = document.getElementById('exploreOtherStatesBtn');
            if (exploreBtn) {
                const courseNameFromBtn = exploreBtn.getAttribute('data-course-name');
                console.log('✅ Explore Other States button found!');
                console.log('📚 Course Name:', courseNameFromBtn);
                
                exploreBtn.addEventListener('click', function() {
                    console.log('🖱️ Explore Other States button clicked!');
                    console.log('🎓 Opening state explorer for:', courseNameFromBtn);
                    
                    if (typeof window.openStateExplorer === 'function') {
                        window.openStateExplorer(courseNameFromBtn);
                    } else {
                        console.error('❌ openStateExplorer function not found!');
                        // Fallback: direct window.open
                        const encodedCourseName = encodeURIComponent(courseNameFromBtn || 'All Courses');
                        window.open(`state-explorer.html?course=${encodedCourseName}`, '_blank');
                    }
                });
            } else {
                console.error('❌ Explore Other States button not found in DOM!');
            }
        }, 100);
        
        // Scroll to results
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    generateProfessionalUniversityCard(university, rank) {
        // Debug fees data
        console.log(`💰 Generating card for ${university.name}:`, {
            fees: university.fees,
            feesType: typeof university.fees,
            hasFeesMin: university.fees?.min,
            hasFeesMax: university.fees?.max
        });
        
        // Generate location badge if it's from neighboring state or other location
        let locationBadge = '';
        if (university.isNeighboringState) {
            locationBadge = `
                <div style="
                    position: absolute; top: 4.5rem; right: 1rem;
                    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                    color: white; padding: 0.375rem 0.75rem; border-radius: 12px;
                    font-size: 0.75rem; font-weight: 600; font-family: 'Inter', sans-serif;
                    box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
                ">🌍 Nearby State</div>
            `;
        } else if (university.isOtherLocation) {
            locationBadge = `
                <div style="
                    position: absolute; top: 4.5rem; right: 1rem;
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
        
        // Generate fees display - Enhanced with multiple formats
        let feesText = 'Contact for fees';
        let feesColor = '#166534'; // Default green
        
        // Helper function to format fees
        const formatFee = (amount) => {
            if (amount >= 100000) {
                // 1 lakh and above - show in lakhs
                return `₹${(amount / 100000).toFixed(1)}L`;
            } else if (amount >= 1000) {
                // 1K to 99K - show in thousands
                return `₹${Math.round(amount / 1000)}K`;
            } else {
                // Less than 1K - show as is
                return `₹${amount.toLocaleString()}`;
            }
        };

        if (university.fees) {
            if (university.fees.min && university.fees.max && university.fees.min !== university.fees.max) {
                // Range format
                feesText = `${formatFee(university.fees.min)} - ${formatFee(university.fees.max)}`;
            } else if (university.fees.min) {
                // Single fee from min
                feesText = `${formatFee(university.fees.min)}/year`;
            } else if (university.fees.max) {
                // Single fee from max
                feesText = `${formatFee(university.fees.max)}/year`;
            } else if (typeof university.fees === 'number') {
                // Direct number
                feesText = `${formatFee(university.fees)}/year`;
            }
            
            // Color coding based on fee range
            const avgFee = university.fees.min || university.fees.max || university.fees;
            if (avgFee <= 50000) {
                feesColor = '#059669'; // Green for low fees
            } else if (avgFee <= 200000) {
                feesColor = '#d97706'; // Orange for medium fees  
            } else {
                feesColor = '#dc2626'; // Red for high fees
            }
        }
        
        // Get percentage rating and explanation from course database if available
        // Match explanation (keep this for context)
        let matchExplanation = '';
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
            <div class="university-card" data-university-name="${university.name}" data-university-location="${university.location || ''}" style="
                background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
                border: 1px solid rgba(148, 163, 184, 0.1);
                border-radius: 20px; padding: 2rem; position: relative;
                box-shadow: 0 8px 25px rgba(15, 23, 42, 0.08), 0 3px 10px rgba(15, 23, 42, 0.03);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                overflow: hidden;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 40px rgba(15, 23, 42, 0.12), 0 8px 16px rgba(15, 23, 42, 0.05)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(15, 23, 42, 0.08), 0 3px 10px rgba(15, 23, 42, 0.03)'">
                
                <!-- Comparison Checkbox - Top Right -->
                <div style="position: absolute; top: 1rem; right: 1rem; z-index: 10;">
                    <label style="
                        display: flex; align-items: center; gap: 0.5rem;
                        background: white; padding: 0.5rem 0.75rem; border-radius: 12px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        cursor: pointer; transition: all 0.3s ease;
                        border: 2px solid transparent;
                    " class="comparison-checkbox-label" onmouseover="this.style.borderColor='#667eea'; this.style.transform='scale(1.05)'" onmouseout="this.style.borderColor='transparent'; this.style.transform='scale(1)'">
                        <input type="checkbox" class="university-compare-checkbox" 
                               data-university-id="${university.name.replace(/[^a-zA-Z0-9]/g, '-')}"
                               data-university-data='${JSON.stringify({
                                   name: university.name,
                                   location: university.location,
                                   rating: university.rating,
                                   fees: university.fees,
                                   matchScore: university.matchScore,
                                   courses: university.courses,
                                   approvals: university.approvals,
                                   accreditation: university.accreditation,
                                   nirfRank: university.nirfRank
                               })}'
                               style="
                                   width: 1.25rem; height: 1.25rem; cursor: pointer;
                                   accent-color: #667eea;
                               "
                               onchange="window.updateCompareButton()">
                        <span style="font-size: 0.875rem; font-weight: 600; color: #334155;">Compare</span>
                    </label>
                </div>
                
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
                        
                        <!-- University Details Row -->
                        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
                            ${university.accreditation && !university.accreditation.toLowerCase().includes('nirf') ? `
                                <div style="
                                    display: inline-flex; align-items: center; gap: 0.375rem;
                                    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
                                    border: 1px solid #a7f3d0; color: #059669;
                                    padding: 0.25rem 0.5rem; border-radius: 6px;
                                    font-size: 0.75rem; font-weight: 600;
                                ">
                                    🏆 ${university.accreditation}
                                </div>
                            ` : ''}
                            
                            ${university.nirfRanking ? `
                                <div style="
                                    display: inline-flex; align-items: center; gap: 0.375rem;
                                    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                                    border: 1px solid #fbbf24; color: #92400e;
                                    padding: 0.25rem 0.5rem; border-radius: 6px;
                                    font-size: 0.75rem; font-weight: 600;
                                ">
                                    🏅 NIRF #${university.nirfRanking}
                                </div>
                            ` : ''}
                            
                            ${university.approvals && university.approvals.length > 0 ? `
                                <div style="
                                    display: inline-flex; align-items: center; gap: 0.375rem;
                                    background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
                                    border: 1px solid #a5b4fc; color: #3730a3;
                                    padding: 0.25rem 0.5rem; border-radius: 6px;
                                    font-size: 0.75rem; font-weight: 600;
                                ">
                                    ✅ ${university.approvals.slice(0, 2).join(', ')}${university.approvals.length > 2 ? ' +' + (university.approvals.length - 2) : ''}
                                </div>
                            ` : ''}
                        </div>
                        
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
                            <div style="
                                display: inline-flex; align-items: center; gap: 0.5rem;
                                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                                border: 1px solid #bbf7d0; color: ${feesColor};
                                padding: 0.375rem 0.75rem; border-radius: 8px;
                                font-size: 0.875rem; font-weight: 600;
                            ">
                                💰 ${feesText}
                            </div>
                        </div>
                    </div>
                </div>
                
                ${matchExplanation}
                
                <!-- Action Buttons -->
                <div style="margin-top: 1.5rem;">
                    <button onclick="contactUniversity('${university.name}')" style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white; border: none; padding: 0.875rem 1.5rem;
                        border-radius: 12px; font-weight: 600; cursor: pointer;
                        transition: all 0.3s ease; font-size: 0.9rem; width: 100%;
                        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
                    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.4)'"
                       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(102, 126, 234, 0.3)'">
                        📞 Get Free Counseling
                    </button>
                </div>
            </div>
        `;
    }

    displaySelectedCourse() {
        // Get the selected course from global variable or URL parameter
        const selectedCourse = window.selectedCourseForQuestionnaire || this.getUrlParameter('course') || '';
        
        if (selectedCourse) {
            const courseDisplay = document.getElementById('selected-course-display');
            const courseName = document.getElementById('selected-course-name');
            
            if (courseDisplay && courseName) {
                courseName.textContent = selectedCourse;
                courseDisplay.style.display = 'block';
            }
        }
    }
    
    getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    init() {
        this.currentStep = 0;
        this.userResponses = {};
        
        // Display selected course if available
        this.displaySelectedCourse();
        
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
        
        // Set the container ID globally so renderCurrentStep can find it
        window.currentQuestionnaireContainerId = containerId;
        
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

// Global functions for university recommendations
window.contactUniversity = function(universityName) {
    console.log('📞 Showing contact form for:', universityName);
    
    // Determine if this is expert consultation or university-specific
    const isExpertConsultation = universityName === 'Expert Consultation';
    const displayName = isExpertConsultation ? 'Expert Consultation' : universityName;
    const headerTitle = isExpertConsultation ? 'Get Expert Guidance' : 'Get Expert Guidance';
    const headerSubtitle = isExpertConsultation ? 'Expert Consultation' : 'University Consultation';
    const description = isExpertConsultation ? 
        'Our expert counselors will help you find the perfect course and university based on your profile and preferences.' :
        'Get comprehensive details about admission, fees, scholarships, and career opportunities.';
    const selectedUniversitySection = isExpertConsultation ? '' : `
        <div style="
            background: rgba(255,255,255,0.2); padding: 0.8rem 1rem;
            border-radius: 15px; margin-bottom: 0.8rem;
            backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3);
        ">
            <div style="font-size: 0.75rem; opacity: 0.9; margin-bottom: 0.2rem;">Selected University</div>
            <strong style="font-size: 1rem; display: block;">${universityName}</strong>
        </div>
    `;
    const messagePlaceholder = isExpertConsultation ?
        'Tell us about your educational background, preferred course, budget, and any specific requirements...' :
        `Any specific questions about ${universityName}? e.g., admission requirements, scholarship opportunities, etc.`;
    
    // Enhanced contact form modal
    const modalHTML = `
        <div class="enhanced-contact-modal" id="enhancedContactModal" style="
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
            backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
            z-index: 10003; display: flex; align-items: center; justify-content: center;
            opacity: 0; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 1rem;
        ">
            <div class="enhanced-modal-content" style="
                width: 100%; max-width: 550px; 
                background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
                border-radius: 25px; overflow: hidden;
                box-shadow: 
                    0 25px 50px rgba(0, 0, 0, 0.15),
                    0 15px 35px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.9);
                transform: scale(0.85) translateY(30px);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                border: 2px solid rgba(102, 126, 234, 0.1);
                position: relative;
            ">
                <!-- Enhanced Header with gradient and pattern -->
                <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white; padding: 1.5rem 1.5rem; text-align: center; position: relative;
                    overflow: hidden;
                ">
                    <!-- Background Pattern -->
                    <div style="
                        position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                        background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                                   radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
                    "></div>
                    
                    <!-- Enhanced Close Button -->
                    <button onclick="closeEnhancedContactModal()" style="
                        position: absolute; top: 1rem; right: 1rem; z-index: 999;
                        background: rgba(255,255,255,0.25); border: none; color: white;
                        width: 36px; height: 36px; border-radius: 50%; cursor: pointer;
                        display: flex; align-items: center; justify-content: center;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        font-size: 1.2rem; font-weight: bold;
                        border: 2px solid rgba(255,255,255,0.4);
                        backdrop-filter: blur(15px);
                    " onmouseover="this.style.background='rgba(255,255,255,0.35)'; this.style.transform='scale(1.1) rotate(90deg)'; this.style.boxShadow='0 4px 15px rgba(255,255,255,0.3)'"
                       onmouseout="this.style.background='rgba(255,255,255,0.25)'; this.style.transform='scale(1) rotate(0deg)'; this.style.boxShadow='none'">✕</button>
                    
                    <!-- Header Content -->
                    <div style="position: relative; z-index: 2;">
                        <div style="
                            display: inline-block; padding: 0.5rem 1rem; 
                            background: rgba(255,255,255,0.2); border-radius: 25px;
                            font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem;
                            backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3);
                        ">🎓 ${headerSubtitle}</div>
                        
                        <h3 style="
                            margin: 0 0 0.8rem 0; font-size: 1.75rem; font-weight: 700;
                            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        ">${headerTitle}</h3>
                        
                        ${selectedUniversitySection}
                        
                        <p style="
                            margin: 0; opacity: 0.95; font-size: 0.95rem; line-height: 1.5;
                            font-weight: 400;
                        ">${description}</p>
                    </div>
                </div>
                
                <!-- Enhanced Form Section -->
                <div style="padding: 1.5rem;">
                    <form id="enhancedContactForm" style="display: grid; gap: 1rem;">
                        <!-- Name and Email Row -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="form-group">
                                <label style="
                                    display: block; font-weight: 600; margin-bottom: 0.6rem; 
                                    color: #2d3748; font-size: 0.9rem;
                                ">Full Name <span style="color: #e53e3e;">*</span></label>
                                <input type="text" name="fullName" required style="
                                    width: 100%; padding: 1rem; border: 2px solid #e2e8f0;
                                    border-radius: 12px; font-size: 1rem; 
                                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                    background: #fafbfc;
                                " onfocus="this.style.borderColor='#667eea'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                                   onblur="this.style.borderColor='#e2e8f0'; this.style.background='#fafbfc'; this.style.boxShadow='none'"
                                   placeholder="Enter your full name">
                            </div>
                            <div class="form-group">
                                <label style="
                                    display: block; font-weight: 600; margin-bottom: 0.6rem; 
                                    color: #2d3748; font-size: 0.9rem;
                                ">Email Address <span style="color: #e53e3e;">*</span></label>
                                <input type="email" name="email" required style="
                                    width: 100%; padding: 1rem; border: 2px solid #e2e8f0;
                                    border-radius: 12px; font-size: 1rem; 
                                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                    background: #fafbfc;
                                " onfocus="this.style.borderColor='#667eea'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                                   onblur="this.style.borderColor='#e2e8f0'; this.style.background='#fafbfc'; this.style.boxShadow='none'"
                                   placeholder="your.email@example.com">
                            </div>
                        </div>
                        
                        <!-- Phone and Course Row -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="form-group">
                                <label style="
                                    display: block; font-weight: 600; margin-bottom: 0.6rem; 
                                    color: #2d3748; font-size: 0.9rem;
                                ">Phone Number <span style="color: #e53e3e;">*</span></label>
                                <input type="tel" name="phone" required style="
                                    width: 100%; padding: 1rem; border: 2px solid #e2e8f0;
                                    border-radius: 12px; font-size: 1rem; 
                                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                    background: #fafbfc;
                                " onfocus="this.style.borderColor='#667eea'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                                   onblur="this.style.borderColor='#e2e8f0'; this.style.background='#fafbfc'; this.style.boxShadow='none'"
                                   placeholder="+91 9876543210">
                            </div>
                            <div class="form-group">
                                <label style="
                                    display: block; font-weight: 600; margin-bottom: 0.6rem; 
                                    color: #2d3748; font-size: 0.9rem;
                                ">Course Interest</label>
                                <input type="text" name="course" style="
                                    width: 100%; padding: 1rem; border: 2px solid #e2e8f0;
                                    border-radius: 12px; font-size: 1rem; 
                                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                    background: #fafbfc;
                                " onfocus="this.style.borderColor='#667eea'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                                   onblur="this.style.borderColor='#e2e8f0'; this.style.background='#fafbfc'; this.style.boxShadow='none'"
                                   placeholder="e.g., MBA, B.Tech, etc."
                                   value="${window.selectedCourseForQuestionnaire || ''}">
                            </div>
                        </div>
                        
                        <!-- Message -->
                        <div class="form-group">
                            <label style="
                                display: block; font-weight: 600; margin-bottom: 0.6rem; 
                                color: #2d3748; font-size: 0.9rem;
                            ">Additional Message (Optional)</label>
                            <textarea name="message" rows="2" style="
                                width: 100%; padding: 1rem; border: 2px solid #e2e8f0;
                                border-radius: 12px; font-size: 1rem; resize: vertical;
                                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                background: #fafbfc; font-family: inherit;
                            " onfocus="this.style.borderColor='#667eea'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(102, 126, 234, 0.1)'"
                               onblur="this.style.borderColor='#e2e8f0'; this.style.background='#fafbfc'; this.style.boxShadow='none'"
                               placeholder="${messagePlaceholder}"></textarea>
                        </div>
                        
                        <!-- Submit Button -->
                        <button type="submit" style="
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white; border: none; padding: 1.2rem 2.5rem;
                            border-radius: 15px; font-weight: 900; cursor: pointer;
                            font-size: 1.3rem; margin-top: 0.5rem;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
                            position: relative; overflow: hidden;
                            letter-spacing: 1px;
                        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 35px rgba(102, 126, 234, 0.4)'"
                           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(102, 126, 234, 0.3)'">
                            <span style="position: relative; z-index: 2; font-weight: 900; font-size: 1.3rem;">
                                SUBMIT
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('enhancedContactModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal with animation
    setTimeout(() => {
        const modal = document.getElementById('enhancedContactModal');
        if (modal) {
            modal.style.opacity = '1';
            const content = modal.querySelector('.enhanced-modal-content');
            if (content) {
                content.style.transform = 'scale(1) translateY(0)';
            }
        }
    }, 10);
    
    // Handle form submission
    setTimeout(() => {
        const form = document.getElementById('enhancedContactForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Show success message and close modal
                closeEnhancedContactModal();
                
                // Show enhanced success notification
                setTimeout(() => {
                    showSuccessNotification(data, universityName);
                }, 300);
                
                // Send to WhatsApp in background (optional)
                setTimeout(() => {
                    const message = `Hi! I'm interested in ${universityName}. Here are my details:
                    
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Course Interest: ${data.course || window.selectedCourseForQuestionnaire || 'Not specified'}
${data.message ? `Message: ${data.message}` : ''}

Please provide complete details about admission process, fees, scholarships, and placement information.`;
                    
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=919076114175&text=${encodeURIComponent(message)}`;
                    // Optional: Open WhatsApp in background
                    // window.open(whatsappUrl, '_blank');
                }, 1000);
            });
        }
    }, 100);
};

window.closeEnhancedContactModal = function() {
    const modal = document.getElementById('enhancedContactModal');
    if (modal) {
        modal.style.opacity = '0';
        const content = modal.querySelector('.enhanced-modal-content');
        if (content) {
            content.style.transform = 'scale(0.9) translateY(20px)';
        }
        setTimeout(() => {
            modal.remove();
        }, 400);
    }
};

window.viewUniversityDetails = function(universityName) {
    console.log('👁️ Viewing details for:', universityName);
    alert(`Detailed information about ${universityName} will be available soon. Please contact our counselors for more information.`);
};

window.contactCounselor = function() {
    console.log('🗣️ Contacting counselor');
    const message = "Hi, I completed the course assessment and would like to speak with a counselor about university recommendations.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919076114175&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

console.log('✅ Enhanced AI Questionnaire COMPREHENSIVE version loaded successfully');

// Enhanced Success Notification Function
window.showSuccessNotification = function(formData, universityName) {
    const notificationHTML = `
        <div class="success-notification" id="successNotification" style="
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%);
            border-radius: 25px; padding: 3rem 2.5rem; text-align: center;
            box-shadow: 
                0 32px 64px rgba(16, 185, 129, 0.2),
                0 16px 32px rgba(16, 185, 129, 0.1),
                0 0 0 1px rgba(16, 185, 129, 0.1);
            border: 2px solid #10b981;
            z-index: 10004; max-width: 500px; width: 90%;
            opacity: 0; transform: translate(-50%, -50%) scale(0.8);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        ">
            <!-- Success Icon -->
            <div style="
                width: 80px; height: 80px; border-radius: 50%;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                margin: 0 auto 2rem auto; display: flex; align-items: center; justify-content: center;
                color: white; font-size: 2.5rem; box-shadow: 0 12px 25px rgba(16, 185, 129, 0.3);
                animation: successPulse 2s ease-in-out infinite;
            ">✓</div>
            
            <!-- Success Content -->
            <h3 style="
                margin: 0 0 1rem 0; font-size: 1.8rem; font-weight: 700;
                color: #065f46; text-shadow: 0 2px 4px rgba(16, 185, 129, 0.1);
            ">Thank You, ${formData.fullName}!</h3>
            
            <div style="
                background: rgba(16, 185, 129, 0.1); padding: 1.2rem; border-radius: 15px;
                margin-bottom: 1.5rem; border: 1px solid rgba(16, 185, 129, 0.2);
            ">
                <p style="
                    margin: 0; font-size: 1.1rem; color: #065f46; font-weight: 600;
                    line-height: 1.6;
                ">Your inquiry for <strong>${universityName}</strong> has been successfully submitted!</p>
            </div>
            
            <!-- Next Steps -->
            <div style="
                text-align: left; background: #fafbfc; padding: 1.5rem; border-radius: 15px;
                margin-bottom: 2rem; border: 1px solid #e2e8f0;
            ">
                <h4 style="
                    margin: 0 0 1rem 0; font-size: 1.1rem; color: #374151; font-weight: 700;
                    display: flex; align-items: center; gap: 0.5rem;
                ">
                    <span style="color: #10b981;">📋</span>
                    What Happens Next?
                </h4>
                <div style="display: grid; gap: 0.8rem; font-size: 0.95rem; color: #4b5563;">
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                        <span style="
                            color: #10b981; font-weight: bold; width: 20px; text-align: center;
                        ">1.</span>
                        <span>Our expert counselors will review your profile</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                        <span style="
                            color: #10b981; font-weight: bold; width: 20px; text-align: center;
                        ">2.</span>
                        <span>You'll receive a call within 2-4 hours</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                        <span style="
                            color: #10b981; font-weight: bold; width: 20px; text-align: center;
                        ">3.</span>
                        <span>Get detailed info about fees, scholarships & placements</span>
                    </div>
                </div>
            </div>
            
            <!-- Contact Details -->
            <div style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white; padding: 1.5rem; border-radius: 15px; margin-bottom: 2rem;
            ">
                <h4 style="margin: 0 0 1rem 0; font-size: 1rem; opacity: 0.9;">Your Details Submitted:</h4>
                <div style="display: grid; gap: 0.5rem; font-size: 0.9rem;">
                    <div><strong>📧 Email:</strong> ${formData.email}</div>
                    <div><strong>📱 Phone:</strong> ${formData.phone}</div>
                    <div><strong>🎓 Course:</strong> ${formData.course || 'Not specified'}</div>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="closeSuccessNotification()" style="
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    color: white; border: none; padding: 1rem 2rem; border-radius: 12px;
                    font-weight: 700; cursor: pointer; font-size: 1rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 25px rgba(16, 185, 129, 0.4)'"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 20px rgba(16, 185, 129, 0.3)'">
                    Got It! 👍
                </button>
            </div>
        </div>
        
        <style>
            @keyframes successPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        </style>
    `;
    
    // Add notification to page
    document.body.insertAdjacentHTML('beforeend', notificationHTML);
    
    // Show notification with animation
    setTimeout(() => {
        const notification = document.getElementById('successNotification');
        if (notification) {
            notification.style.opacity = '1';
            notification.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }, 100);
    
    // Auto close after 10 seconds
    setTimeout(() => {
        closeSuccessNotification();
    }, 10000);
};

window.closeSuccessNotification = function() {
    const notification = document.getElementById('successNotification');
    if (notification) {
        notification.style.opacity = '0';
        notification.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }
};

/**
 * Open state explorer in a new tab
 */
window.openStateExplorer = function(courseName) {
    console.log('🚀 openStateExplorer called with course:', courseName);
    
    const finalCourseName = courseName || window.selectedCourseForQuestionnaire || 'All Courses';
    console.log('✅ Final course name:', finalCourseName);
    
    const encodedCourseName = encodeURIComponent(finalCourseName);
    const explorerUrl = `state-explorer.html?course=${encodedCourseName}`;
    
    console.log('🌐 Opening URL:', explorerUrl);
    
    const newWindow = window.open(explorerUrl, '_blank');
    
    if (newWindow) {
        console.log('✅ New tab opened successfully!');
    } else {
        console.error('❌ Failed to open new tab - popup blocker may be active');
        alert('Please allow popups for this site to explore universities by state.');
    }
};

/**
 * Update the sticky compare button count and visibility
 */
window.updateCompareButton = function() {
    const checkboxes = document.querySelectorAll('.university-compare-checkbox:checked');
    const count = checkboxes.length;
    const compareBtn = document.getElementById('stickyCompareBtn');
    const compareCount = document.getElementById('compareCount');
    
    console.log(`📊 Compare button updated: ${count} universities selected`);
    
    if (count >= 2) {
        compareBtn.style.display = 'block';
        compareCount.textContent = count;
    } else {
        compareBtn.style.display = 'none';
    }
};

/**
 * Store selected universities globally for comparison
 */
window.selectedUniversities = [];

/**
 * Open comparison modal with intelligent analysis
 */
window.openComparisonModal = function() {
    console.log('🎯 Opening comparison modal...');
    
    // Get all checked universities
    const checkboxes = document.querySelectorAll('.university-compare-checkbox:checked');
    
    if (checkboxes.length < 2) {
        alert('Please select at least 2 universities to compare!');
        return;
    }
    
    // Extract university data
    const universities = Array.from(checkboxes).map(checkbox => {
        try {
            return JSON.parse(checkbox.getAttribute('data-university-data'));
        } catch (e) {
            console.error('Error parsing university data:', e);
            return null;
        }
    }).filter(u => u !== null);
    
    console.log('📚 Universities to compare:', universities);
    
    // Calculate comparison scores
    const comparison = window.compareUniversities(universities);
    
    // Display comparison modal
    window.showComparisonModal(comparison);
};

/**
 * Toggle Select All / Deselect All for university checkboxes
 */
window.toggleSelectAll = function() {
    const checkboxes = document.querySelectorAll('.university-compare-checkbox');
    const selectAllBtn = document.getElementById('selectAllText');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    
    if (allChecked) {
        // Deselect all
        checkboxes.forEach(cb => cb.checked = false);
        selectAllBtn.textContent = 'Select All';
        console.log('✅ Deselected all universities');
    } else {
        // Select all
        checkboxes.forEach(cb => cb.checked = true);
        selectAllBtn.textContent = 'Deselect All';
        console.log('✅ Selected all universities');
    }
    
    // Update compare button
    window.updateCompareButton();
};

/**
 * Show beautiful comparison modal with results
 */
window.showComparisonModal = function(comparison) {
    console.log('🎨 Rendering comparison modal...', comparison);
    
    const { results, userProfile } = comparison;
    
    // Generate comparison cards HTML
    const comparisonCardsHTML = results.map((result, index) => {
        const { university, scores, personalizedMessage, overallScore, rank } = result;
        
        // Medal/Badge based on rank
        let rankBadge = '';
        if (rank === 1) {
            rankBadge = `<div style="
                position: absolute; top: -15px; right: 20px;
                background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
                color: #d97706; padding: 0.5rem 1rem; border-radius: 20px;
                font-weight: 800; font-size: 0.9rem; box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
            ">🏆 Best Match</div>`;
        } else if (rank === 2) {
            rankBadge = `<div style="
                position: absolute; top: -15px; right: 20px;
                background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%);
                color: #64748b; padding: 0.5rem 1rem; border-radius: 20px;
                font-weight: 800; font-size: 0.9rem; box-shadow: 0 4px 15px rgba(192, 192, 192, 0.4);
            ">🥈 Great Option</div>`;
        } else if (rank === 3) {
            rankBadge = `<div style="
                position: absolute; top: -15px; right: 20px;
                background: linear-gradient(135deg, #cd7f32 0%, #daa06d 100%);
                color: white; padding: 0.5rem 1rem; border-radius: 20px;
                font-weight: 800; font-size: 0.9rem; box-shadow: 0 4px 15px rgba(205, 127, 50, 0.4);
            ">🥉 Solid Choice</div>`;
        }
        
        return `
            <div style="
                background: white;
                border-radius: 24px;
                padding: 2.5rem;
                margin-bottom: 2rem;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                border: 3px solid ${rank === 1 ? '#ffd700' : rank === 2 ? '#c0c0c0' : '#e2e8f0'};
                position: relative;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 15px 50px rgba(0, 0, 0, 0.15)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 40px rgba(0, 0, 0, 0.1)'">
                
                ${rankBadge}
                
                <!-- University Header -->
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; font-size: 1.75rem; font-weight: 800; color: #1e293b;">
                            ${university.name}
                        </h3>
                        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                            <span style="color: #64748b; font-size: 0.95rem;">
                                📍 ${university.location || 'Online'}
                            </span>
                            <span style="color: #64748b; font-size: 0.95rem;">
                                ⭐ ${university.rating || '4.0'}/5.0
                            </span>
                        </div>
                    </div>
                    
                    <!-- Overall Score Circle -->
                    <div style="
                        width: 120px; height: 120px;
                        border-radius: 50%;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        display: flex; flex-direction: column; align-items: center; justify-content: center;
                        color: white;
                        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
                    ">
                        <div style="font-size: 2.5rem; font-weight: 800; line-height: 1;">
                            ${overallScore}
                        </div>
                        <div style="font-size: 0.75rem; font-weight: 600; opacity: 0.9;">
                            Match Score
                        </div>
                    </div>
                </div>
                
                <!-- Personalized Message -->
                <div style="
                    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                    border-left: 4px solid #3b82f6;
                    padding: 1.5rem;
                    border-radius: 12px;
                    margin-bottom: 2rem;
                ">
                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                        <div style="font-size: 2rem;">💡</div>
                        <div>
                            <h4 style="margin: 0 0 0.75rem 0; font-size: 1.1rem; font-weight: 700; color: #1e40af;">
                                Why This University is Perfect for You
                            </h4>
                            <p style="margin: 0; color: #1e293b; line-height: 1.7; font-size: 1rem;">
                                ${personalizedMessage}
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Score Breakdown -->
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin: 0 0 1rem 0; font-size: 1.2rem; font-weight: 700; color: #1e293b;">
                        📊 Detailed Score Breakdown
                    </h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        ${generateScoreBar('Location Match', scores.location, 25, '#10b981')}
                        ${generateScoreBar('Budget Fit', scores.fees, 20, '#3b82f6')}
                        ${generateScoreBar('Rating Quality', scores.rating, 15, '#f59e0b')}
                        ${generateScoreBar('Accreditation', scores.accreditation, 15, '#8b5cf6')}
                        ${generateScoreBar('Career Alignment', scores.careerFit, 15, '#ec4899')}
                        ${generateScoreBar('Flexibility', scores.flexibility, 5, '#14b8a6')}
                    </div>
                </div>
                
                <!-- Action Button -->
                <button onclick="contactUniversity('${university.name}')" style="
                    width: 100%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white; border: none; padding: 1.25rem 2rem;
                    border-radius: 16px; font-weight: 700; font-size: 1.1rem;
                    cursor: pointer; transition: all 0.3s ease;
                    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 30px rgba(102, 126, 234, 0.4)'"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.3)'">
                    📞 Get Free Counseling for ${university.name}
                </button>
            </div>
        `;
    }).join('');
    
    // Create modal HTML
    const modalHTML = `
        <div id="comparisonModal" style="
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(5px);
            z-index: 10000; display: flex; align-items: center; justify-content: center;
            padding: 2rem; animation: fadeIn 0.3s ease-out;
        " onclick="if(event.target.id === 'comparisonModal') window.closeComparisonModal()">
            <div class="comparison-modal-content" style="
                background: #f8fafc;
                border-radius: 32px;
                max-width: 1200px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                padding: 3rem;
                position: relative;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                animation: slideInUp 0.4s ease-out;
                
                /* Modern Scrollbar Styling */
                scrollbar-width: thin;
                scrollbar-color: #667eea #e2e8f0;
            " onclick="event.stopPropagation()">
                
                <!-- Close Button -->
                <button onclick="window.closeComparisonModal()" style="
                    position: absolute; top: 2rem; right: 2rem;
                    width: 40px; height: 40px;
                    border-radius: 50%;
                    background: white;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    z-index: 10;
                " onmouseover="this.style.transform='rotate(90deg) scale(1.1)'; this.style.background='#fee2e2'; this.style.color='#dc2626'"
                   onmouseout="this.style.transform='rotate(0) scale(1)'; this.style.background='white'; this.style.color='inherit'">
                    ×
                </button>
                
                <!-- Header -->
                <div style="text-align: center; margin-bottom: 3rem;">
                    <h2 style="
                        font-size: 2.5rem; font-weight: 800; margin: 0 0 1rem 0;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    ">
                        🎯 Your Personalized University Comparison
                    </h2>
                    <p style="font-size: 1.1rem; color: #64748b; margin: 0;">
                        Based on your preferences for <strong>${userProfile.course}</strong> with ${results.length} universities analyzed
                    </p>
                </div>
                
                <!-- Comparison Cards -->
                ${comparisonCardsHTML}
                
                <!-- Footer -->
                <div style="
                    text-align: center;
                    padding-top: 2rem;
                    border-top: 2px solid #e2e8f0;
                    margin-top: 2rem;
                ">
                    <p style="color: #64748b; font-size: 0.95rem; margin: 0 0 1rem 0;">
                        💡 Need help deciding? Our counselors are here to guide you!
                    </p>
                    <button onclick="contactUniversity('EduConnect')" style="
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                        color: white; border: none; padding: 1rem 2.5rem;
                        border-radius: 12px; font-weight: 600; font-size: 1rem;
                        cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                    ">
                        📞 Talk to a Counselor Now
                    </button>
                </div>
            </div>
        </div>
        
        <style>
            /* Professional Custom Scrollbar for Comparison Modal */
            .comparison-modal-content::-webkit-scrollbar {
                width: 8px;
            }
            
            .comparison-modal-content::-webkit-scrollbar-track {
                background: #f1f5f9;
                border-radius: 4px;
            }
            
            .comparison-modal-content::-webkit-scrollbar-thumb {
                background: #94a3b8;
                border-radius: 4px;
                transition: background 0.2s ease;
            }
            
            .comparison-modal-content::-webkit-scrollbar-thumb:hover {
                background: #667eea;
            }
            
            /* Firefox scrollbar */
            .comparison-modal-content {
                scrollbar-width: thin;
                scrollbar-color: #94a3b8 #f1f5f9;
                scroll-behavior: smooth;
            }
        </style>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add smooth scroll to top button for long modals
    setTimeout(() => {
        const modalContent = document.querySelector('.comparison-modal-content');
        if (modalContent && modalContent.scrollHeight > modalContent.clientHeight) {
            // Modal has scrollable content
            console.log('📜 Modal has scrollable content - custom scrollbar applied');
        }
    }, 100);
};

/**
 * Generate score bar for modal
 */
function generateScoreBar(label, score, maxScore, color) {
    const percentage = Math.round((score / maxScore) * 100);
    
    return `
        <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 0.875rem; font-weight: 600; color: #475569;">${label}</span>
                <span style="font-size: 0.875rem; font-weight: 700; color: ${color};">${score}/${maxScore}</span>
            </div>
            <div style="
                height: 10px;
                background: #e2e8f0;
                border-radius: 10px;
                overflow: hidden;
            ">
                <div style="
                    width: ${percentage}%;
                    height: 100%;
                    background: linear-gradient(90deg, ${color} 0%, ${color}dd 100%);
                    border-radius: 10px;
                    transition: width 0.6s ease-out;
                "></div>
            </div>
        </div>
    `;
}

/**
 * Close comparison modal
 */
window.closeComparisonModal = function() {
    const modal = document.getElementById('comparisonModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    }
};
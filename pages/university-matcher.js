import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styles from '../styles/UniversityMatcher.module.css';
import { trackQuestionnaireStart, trackQuestionnaireComplete } from '../utils/activityTracker';

const UniversityMatcher = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [universities, setUniversities] = useState([]);
  
  // Function to determine grid class based on item count
  const getGridClass = (count, baseClass) => {
    if (count <= 8) {
      return `${baseClass} ${styles[`centerGrid${count}`]}`;
    }
    return `${baseClass} ${styles.centerGridWrap}`;
  };
  
  const [formData, setFormData] = useState({
    // Step 1: Course Level/Degree Type (College Vidya's first question)
    degreeType: '',
    
    // Step 2: Specific Course Selection (filtered based on degree type)
    preferredCourse: '',
    specialization: '',
    
    // Step 3: Current Education Status & Background
    currentEducation: '',
    workExperience: '',
    
    // Step 4: Study Mode & Format Preferences
    studyMode: '',
    learningFormat: '',
    classTiming: '',
    
    // Step 5: Location Preferences
    preferredLocation: '',
    locationFlexibility: '',
    
    // Step 6: Budget & Financial Details  
    budgetRange: '',
    feePaymentMode: '',
    emiPreference: '',
    
    // Step 7: Career Goals & Objectives
    careerObjective: '',
    currentJobRole: '',
    targetIndustry: '',
    salaryExpectation: '',
    
    // Step 8: Timeline & Duration
    whenToStart: '',
    studyTimeAvailable: '',
    
    // Step 9: University Preferences & Priorities
    universityType: '',
    accreditationImportant: '',
    placementImportant: '',
    facultyExperience: '',
    
    // Step 10: Additional Requirements & Filters
    entranceExamPreference: '',
    scholarshipRequired: '',
    additionalServices: []
  });

  // Filtered courses based on selected degree type
  const [filteredCourses, setFilteredCourses] = useState([]);
  
  // Error message state
  const [errorMessage, setErrorMessage] = useState('');

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Check if data already loaded in window
        if (window.universityDatabase && window.coursesDatabase) {
          console.log('✅ Data already loaded in window scope');
          setCourses(window.coursesDatabase);
          setUniversities(window.universityDatabase);
          return;
        }

        // Load unified database from public folder
        const unifiedResponse = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
        const unifiedText = await unifiedResponse.text();
        
        // Replace const with var to avoid redeclaration errors
        const modifiedText = unifiedText
          .replace(/const universityDatabase/g, 'var universityDatabase')
          .replace(/const coursesDatabase/g, 'var coursesDatabase');
        
        // Execute in global scope using Function constructor
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        // Now access the databases from window scope
        if (window.coursesDatabase && Array.isArray(window.coursesDatabase)) {
          setCourses(window.coursesDatabase);
          console.log('✅ Loaded', window.coursesDatabase.length, 'courses from unified database');
        } else {
          console.error('❌ coursesDatabase not found in window scope');
        }

        if (window.universityDatabase && Array.isArray(window.universityDatabase)) {
          setUniversities(window.universityDatabase);
          console.log('✅ Loaded', window.universityDatabase.length, 'universities from unified database');
        } else {
          console.error('❌ universityDatabase not found in window scope');
        }
        
      } catch (error) {
        console.error('❌ Error loading data:', error);
      }
    };

    loadData();
  }, []);

  // If the page is opened with query params (degreeType, preferredCourse), prefill formData
  useEffect(() => {
    if (!router || !router.query) return;

    const { degreeType, preferredCourse } = router.query;
    if (degreeType || preferredCourse) {
      setFormData(prev => ({
        ...prev,
        degreeType: degreeType || prev.degreeType,
        preferredCourse: preferredCourse || prev.preferredCourse
      }));

      // If degreeType exists, filter courses and auto-advance to step 2 after data loads
      setTimeout(() => {
        if (degreeType) {
          setCurrentStep(2);
        }
      }, 300);
    }
  }, [router.query]);

  // Filter courses when degree type OR courses data changes
  useEffect(() => {
    if (formData.degreeType && courses.length > 0) {
      // Track questionnaire start when user selects first option
      trackQuestionnaireStart({ degreeType: formData.degreeType });
      
      const value = formData.degreeType;
      const filtered = courses.filter(course => {
        const level = course.level;
        
        if (value === 'PG Courses') {
          return level === 'Postgraduate';
        } else if (value === 'UG Courses') {
          return level === 'Undergraduate';
        } else if (value === 'Doctorate/Ph.D.') {
          return level === 'Doctorate' || (level === 'Graduate' && (
            course.name.toLowerCase().includes('phd') || 
            course.name.toLowerCase().includes('ph.d') || 
            course.name.toLowerCase().includes('doctorate') || 
            course.name.toLowerCase().includes('doctoral')
          ));
        } else if (value === 'Executive Education') {
          return level === 'Postgraduate' && course.name.toLowerCase().includes('executive');
        } else if (value === 'Job Guarantee') {
          return course.name.toLowerCase().includes('job') || course.name.toLowerCase().includes('placement');
        } else if (value === 'Study Abroad') {
          return course.name.toLowerCase().includes('international') || course.name.toLowerCase().includes('global');
        } else if (value === 'Advanced Diploma') {
          return level === 'Graduate' || course.name.toLowerCase().includes('diploma');
        } else if (value === 'Skilling & Certificate') {
          return level === 'Graduate' || course.name.toLowerCase().includes('certificate') || course.name.toLowerCase().includes('certification');
        }
        
        return level === 'Graduate'; // Default fallback
      });
      
      setFilteredCourses(filtered);
      console.log(`🔍 Filtered ${filtered.length} courses for degree type: ${value}`);
    }
  }, [formData.degreeType, courses]);

  const handleInputChange = (field, value) => {
    // Clear error message when user makes a selection
    setErrorMessage('');
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Auto-advance to next step after any selection
    const autoAdvanceDelay = 800; // 800ms delay for user to see their selection
    
    if (field === 'degreeType' && currentStep === 1) {
      // Filter courses immediately before advancing
      if (courses.length > 0) {
        const filtered = courses.filter(course => {
          const level = course.level;
          const courseName = course.name.toLowerCase();
          
          // Exclude PhD/Doctorate from UG courses
          const isPhD = courseName.includes('phd') || 
                       courseName.includes('ph.d') || 
                       courseName.includes('doctorate') || 
                       courseName.includes('doctoral');
          
          if (value === 'PG Courses') {
            return level === 'Postgraduate' && !isPhD;
          } else if (value === 'UG Courses') {
            // UG should ONLY be Undergraduate level, NO PhD
            return level === 'Undergraduate' && !isPhD;
          } else if (value === 'Doctorate/Ph.D.') {
            return level === 'Doctorate' || isPhD;
          } else if (value === 'Executive Education') {
            return level === 'Postgraduate' && courseName.includes('executive');
          } else if (value === 'Job Guarantee') {
            return courseName.includes('job') || courseName.includes('placement');
          } else if (value === 'Study Abroad') {
            return courseName.includes('international') || courseName.includes('global');
          } else if (value === 'Advanced Diploma') {
            return level === 'Graduate' || courseName.includes('diploma');
          } else if (value === 'Skilling & Certificate') {
            return level === 'Graduate' || courseName.includes('certificate') || courseName.includes('certification');
          }
          
          return level === 'Graduate'; // Default fallback
        });
        
        console.log(`🔍 Degree type selected: ${value}`);
        console.log(`📚 Total courses available: ${courses.length}`);
        console.log(`✅ Filtered ${filtered.length} courses for degree type: ${value}`);
        
        // Set filtered courses FIRST, then advance
        setFilteredCourses(filtered);
        
        // Auto-advance after delay
        setTimeout(() => {
          console.log(`🚀 Auto-advancing to step 2 with ${filtered.length} courses`);
          setCurrentStep(2);
        }, autoAdvanceDelay);
      } else {
        console.warn('⚠️ No courses loaded yet, cannot filter');
      }
    } else if (field === 'preferredCourse' && currentStep === 2) {
      // Auto-advance after course selection
      setTimeout(() => {
        console.log(`🚀 Auto-advancing to step 3 after course selection: ${value}`);
        setCurrentStep(3);
      }, autoAdvanceDelay);
    } else if (field === 'specialization' && currentStep === 3) {
      // Auto-advance after specialization selection
      setTimeout(() => {
        console.log(`🚀 Auto-advancing to step 4 after specialization selection: ${value}`);
        setCurrentStep(4);
      }, autoAdvanceDelay);
    } else if (field === 'currentEducation' && currentStep === 4) {
      // Auto-advance after education status selection
      setTimeout(() => {
        console.log(`🚀 Auto-advancing to step 5 after education selection: ${value}`);
        setCurrentStep(5);
      }, autoAdvanceDelay);
    } else if (field === 'workExperience' && currentStep === 4) {
      // Auto-advance after work experience selection
      setTimeout(() => {
        console.log(`🚀 Auto-advancing to step 5 after work experience selection: ${value}`);
        setCurrentStep(5);
      }, autoAdvanceDelay);
    } else if (field === 'studyMode' && currentStep === 5) {
      // Auto-advance after study mode selection
      setTimeout(() => {
        console.log(`🚀 Auto-advancing to step 6 after study mode selection: ${value}`);
        setCurrentStep(6);
      }, autoAdvanceDelay);
    } else if (field === 'preferredLocation' && currentStep === 6) {
      // Auto-advance after location selection
      setTimeout(() => {
        console.log(`🚀 Auto-advancing to step 7 after location selection: ${value}`);
        setCurrentStep(7);
      }, autoAdvanceDelay);
    } else if (field === 'budgetRange' && currentStep === 7) {
      // Auto-advance after budget selection
      setTimeout(() => {
        console.log(`🚀 Auto-advancing to step 8 after budget selection: ${value}`);
        setCurrentStep(8);
      }, autoAdvanceDelay);
    } else if ((field === 'careerObjective' || field === 'targetIndustry' || field === 'salaryExpectation') && currentStep === 8) {
      // Check if all 3 step 8 questions are answered, then auto-advance
      const updatedFormData = { ...formData, [field]: value };
      if (updatedFormData.careerObjective && updatedFormData.targetIndustry && updatedFormData.salaryExpectation) {
        setTimeout(() => {
          console.log(`🚀 Auto-advancing to step 9 - all career questions answered`);
          setCurrentStep(9);
        }, autoAdvanceDelay);
      }
    }
    // Step 9 is the last step, no auto-advance needed
  };

  const handleServiceChange = (service, checked) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter(s => s !== service)
    }));
  };

  const nextStep = () => {
    // Validation: Check if required field for current step is filled
    let isValid = true;
    let error = '';
    
    switch(currentStep) {
      case 1:
        if (!formData.degreeType) {
          isValid = false;
          error = 'Please select a degree type to continue';
        }
        break;
      case 2:
        if (!formData.preferredCourse) {
          isValid = false;
          error = 'Please select a course to continue';
        }
        break;
      case 3:
        if (!formData.specialization) {
          isValid = false;
          error = 'Please select a specialization to continue';
        }
        break;
      case 4:
        if (!formData.currentEducation) {
          isValid = false;
          error = 'Please select your current education status';
        }
        break;
      case 5:
        if (!formData.studyMode) {
          isValid = false;
          error = 'Please select a study mode to continue';
        }
        break;
      case 6:
        if (!formData.preferredLocation) {
          isValid = false;
          error = 'Please select a location preference';
        }
        break;
      case 7:
        if (!formData.budgetRange) {
          isValid = false;
          error = 'Please select a budget range to continue';
        }
        break;
      case 8:
        if (!formData.careerObjective) {
          isValid = false;
          error = 'Please select a career goal to continue';
        }
        break;
    }
    
    if (!isValid) {
      setErrorMessage(error);
      return;
    }
    
    // Clear error and advance
    setErrorMessage('');
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      // Reset current page selections before going back
      setErrorMessage('');
      
      // Clear formData for the current step
      const clearedFields = {};
      switch(currentStep) {
        case 2:
          clearedFields.preferredCourse = '';
          clearedFields.specialization = '';
          break;
        case 3:
          clearedFields.currentEducation = '';
          clearedFields.workExperience = '';
          break;
        case 4:
          clearedFields.studyMode = '';
          clearedFields.learningFormat = '';
          clearedFields.classTiming = '';
          break;
        case 5:
          clearedFields.preferredLocation = '';
          clearedFields.locationFlexibility = '';
          break;
        case 6:
          clearedFields.budgetRange = '';
          clearedFields.feePaymentMode = '';
          clearedFields.emiPreference = '';
          break;
        case 7:
          clearedFields.careerObjective = '';
          clearedFields.currentJobRole = '';
          clearedFields.targetIndustry = '';
          clearedFields.salaryExpectation = '';
          break;
        case 8:
          clearedFields.whenToStart = '';
          clearedFields.studyTimeAvailable = '';
          break;
        case 9:
          clearedFields.universityType = '';
          clearedFields.accreditationImportant = '';
          clearedFields.placementImportant = '';
          clearedFields.facultyExperience = '';
          clearedFields.entranceExamPreference = '';
          clearedFields.scholarshipRequired = '';
          clearedFields.additionalServices = [];
          break;
      }
      
      // Update formData with cleared fields
      setFormData(prev => ({
        ...prev,
        ...clearedFields
      }));
      
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    
    // Track questionnaire completion
    trackQuestionnaireComplete(formData);
    
    // Clear any existing data and store fresh form data
    localStorage.removeItem('universityMatcherData');
    localStorage.setItem('universityMatcherData', JSON.stringify(formData));
    
    // Simulate processing time
    setTimeout(() => {
      router.push('/university-matcher-results');
    }, 2000);
  };

  const getProgressPercentage = () => {
    return Math.round((currentStep / 9) * 100);
  };

  // Function to get course icon based on course name/category
  const getCourseIcon = (course) => {
    const courseName = (course.name || '').toLowerCase();
    const category = (course.category || '').toLowerCase();
    
    // MBA & Management programs
    if (courseName.includes('mba') || courseName.includes('pgdm') || courseName.includes('executive mba')) return '🎓';
    
    // Technology & Computer Science
    if (courseName.includes('mca') || courseName.includes('m.tech') || courseName.includes('m.sc') && category.includes('technology')) return '💻';
    if (courseName.includes('bca') || courseName.includes('b.tech') || courseName.includes('b.sc') && category.includes('technology')) return '💻';
    
    // Commerce programs
    if (courseName.includes('m.com')) return '💰';
    if (courseName.includes('b.com')) return '💼';
    if (courseName.includes('bba')) return '📊';
    
    // Arts & Humanities
    if (courseName.includes('ma ') || courseName.includes('m.a.') || category.includes('arts')) return '📚';
    if (courseName.includes('ba ') || courseName.includes('b.a.')) return '📖';
    
    // Data Science & Analytics
    if (courseName.includes('data science') || courseName.includes('analytics') || courseName.includes('big data')) return '📈';
    
    // AI & ML
    if (courseName.includes('artificial intelligence') || courseName.includes('machine learning') || courseName.includes('ai')) return '🤖';
    
    // Design & Creative
    if (courseName.includes('design') || category.includes('design')) return '🎨';
    
    // Law
    if (courseName.includes('law') || courseName.includes('llb') || courseName.includes('llm')) return '⚖️';
    
    // Study Abroad
    if (courseName.includes('abroad') || category.includes('international')) return '🌍';
    
    // Certificate & Diploma
    if (courseName.includes('certificate') || courseName.includes('certification')) return '📜';
    if (courseName.includes('diploma')) return '📋';
    
    // Healthcare & Medical
    if (courseName.includes('health') || courseName.includes('medical') || courseName.includes('nursing')) return '⚕️';
    
    // Engineering
    if (courseName.includes('engineering') || courseName.includes('b.e.') || courseName.includes('m.e.')) return '⚙️';
    
    // PhD & Research
    if (courseName.includes('phd') || courseName.includes('ph.d') || courseName.includes('doctorate')) return '🎖️';
    
    // Default based on level
    if (course.level === 'Postgraduate' || course.level === 'PG Courses') return '🎓';
    if (course.level === 'Undergraduate' || course.level === 'UG Courses') return '📚';
    
    // Final fallback
    return '📚';
  };

  // Comprehensive specialization mapping for each course when database has limited data
  const courseSpecializationMap = {
    // MBA Specializations (already in database, but keeping as backup)
    'MBA': [
      'Finance', 'Marketing', 'Human Resources',
      'Operations', 'Business Analytics', 'Digital Marketing',
      'International Business', 'Entrepreneurship', 'Supply Chain Management',
      'Project Management', 'Healthcare Management', 'IT Management',
      'Hospitality Management', 'Banking & Insurance', 'Retail Management',
      'Strategy', 'Data Science & Analytics', 'Financial Analytics',
      'Leadership', 'Innovation Management', 'E-Commerce', 'Investment Banking'
    ],
    'Executive MBA': ['Executive Leadership', 'Strategic Management', 'Global Business', 'Innovation'],
    'PGDM': ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics', 'Digital Business'],
    
    // MCA Specializations
    'MCA': [
      'Data Science', 'Cyber Security', 'Artificial Intelligence', 'Machine Learning',
      'Cloud Computing', 'Software Engineering', 'Mobile Application Development',
      'Web Technologies', 'Blockchain Technology', 'IoT', 'Big Data Analytics',
      'Computer Networks', 'Database Management', 'DevOps'
    ],
    'M.Tech': [
      'Computer Science', 'Software Engineering', 'Data Science', 'Cyber Security',
      'Artificial Intelligence', 'VLSI Design', 'Embedded Systems', 'Robotics',
      'Cloud Computing', 'Network Security', 'Machine Learning'
    ],
    
    // M.Sc Specializations
    'M.Sc': [
      'Physics', 'Chemistry', 'Mathematics', 'Statistics', 'Data Science',
      'Biotechnology', 'Microbiology', 'Biochemistry', 'Environmental Science',
      'Computer Science', 'Information Technology', 'Electronics', 'Botany',
      'Zoology', 'Psychology', 'Nutrition & Dietetics'
    ],
    
    // M.Com Specializations
    'M.Com': [
      'Accounting & Taxation', 'Banking & Insurance', 'Finance',
      'Business Economics', 'E-Commerce', 'International Finance',
      'Corporate Accounting', 'Auditing', 'Cost Accounting', 'Investment Management'
    ],
    
    // MA Specializations
    'MA': [
      'English Literature', 'Economics', 'Political Science', 'Sociology',
      'Psychology', 'History', 'Public Administration', 'Journalism & Mass Communication',
      'Education', 'Social Work', 'Philosophy', 'Geography', 'Hindi Literature'
    ],
    'M.A': [
      'Economics', 'Political Science', 'Sociology', 'Psychology',
      'History', 'Public Administration', 'Education', 'Social Work',
      'Journalism and Mass Communication', 'Journalism & Mass Communication',
      'Public Policy', 'Criminology and Police Administration',
      'Political Science and Public Administration', 'English Literature'
    ],
    'MSW': ['Community Development', 'Medical & Psychiatry', 'Human Resources', 'Rural Development'],
    
    // BBA Specializations
    'BBA': [
      'General Management', 'Finance', 'Marketing', 'Human Resources',
      'International Business', 'Entrepreneurship', 'Digital Marketing',
      'Business Analytics', 'Event Management', 'Retail Management',
      'Banking & Insurance', 'Operations Management', 'Tourism & Hospitality'
    ],
    
    // BCA Specializations
    'BCA': [
      'Data Science', 'Web Development', 'Software Development',
      'Cyber Security', 'Mobile App Development', 'Cloud Computing',
      'Artificial Intelligence', 'Machine Learning', 'Database Management',
      'Network Administration', 'Digital Marketing', 'E-Commerce'
    ],
    'B.Tech': [
      'Computer Science', 'Information Technology', 'Electronics & Communication',
      'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering',
      'Data Science', 'Artificial Intelligence', 'Cyber Security'
    ],
    
    // B.Sc Specializations
    'B.Sc': [
      'Physics', 'Chemistry', 'Mathematics', 'Botany', 'Zoology',
      'Biotechnology', 'Microbiology', 'Biochemistry', 'Computer Science',
      'Information Technology', 'Electronics', 'Statistics', 'Data Science',
      'Environmental Science', 'Nursing', 'Psychology', 'Nutrition & Dietetics',
      'Agriculture', 'Forestry', 'Animation & Multimedia'
    ],
    
    // B.Com Specializations
    'B.Com': [
      'Accounting & Finance', 'Banking & Insurance', 'Taxation',
      'E-Commerce', 'Business Management', 'Financial Markets',
      'International Business', 'Computer Applications', 'Corporate Accounting',
      'Cost Accounting', 'Auditing'
    ],
    
    // BA Specializations
    'BA': [
      'English Literature', 'Economics', 'Political Science', 'Sociology',
      'Psychology', 'History', 'Geography', 'Philosophy', 'Journalism',
      'Mass Communication', 'Education', 'Fine Arts',
      'Public Administration', 'Social Work', 'Tourism & Travel Management'
    ],
    'B.A': [
      'Economics', 'Political Science', 'Sociology', 'Psychology',
      'History', 'Education', 'Journalism', 'Public Administration', 'English Literature'
    ],
    
    // Law Specializations
    'LLB': [
      'Corporate Law', 'Criminal Law', 'Constitutional Law', 'Intellectual Property Law',
      'Tax Law', 'Cyber Law', 'International Law', 'Human Rights Law'
    ],
    'LLM': [
      'Corporate Law', 'Criminal Law', 'Constitutional Law', 'Intellectual Property Rights',
      'International Law', 'Human Rights', 'Tax Law', 'Cyber Law'
    ],
    
    // PhD Specializations
    'PhD': [
      'Management', 'Computer Science', 'Engineering', 'Commerce', 'Science',
      'Arts', 'Law', 'Education', 'Social Sciences'
    ],
    
    // Diploma & Certificate Specializations
    'PGDM': ['Finance', 'Marketing', 'HR', 'Operations', 'Business Analytics'],
    'Diploma': ['Engineering', 'Management', 'Computer Applications', 'Education'],
    
    // Other Professional Courses
    'BHM': ['Hotel Management', 'Catering Technology', 'Hospitality Administration'],
    'B.Ed': ['Education', 'Special Education', 'Physical Education'],
    'M.Ed': ['Education', 'Educational Technology', 'Curriculum & Instruction']
  };

  // Helper function to extract base course name from full course name
  const extractBaseCourse = (fullCourseName) => {
    if (!fullCourseName) return '';
    
    // Common course abbreviations to look for
    const courseAbbreviations = [
      'MBA', 'MCA', 'M.Tech', 'M.Sc', 'M.Com', 'MA', 'M.A', 'MSW', 'PGDM',
      'BBA', 'BCA', 'B.Tech', 'B.Sc', 'B.Com', 'BA', 'B.A', 'LLB', 'BHM',
      'PhD', 'DBA', 'Executive MBA', 'E-MBA'
    ];
    
    // Convert to uppercase for matching
    const upperCourse = fullCourseName.toUpperCase();
    
    // Try to find exact match first
    for (const abbr of courseAbbreviations) {
      if (upperCourse.includes(abbr.toUpperCase())) {
        return abbr;
      }
    }
    
    // If no match found, return the first word
    return fullCourseName.split(' ')[0];
  };

  // Function to aggregate specializations from university database for a specific course
  const getSpecializationsForCourse = (courseName) => {
    console.log('🔍 getSpecializationsForCourse called with:', courseName);
    console.log('📚 Universities available:', universities?.length || 0);
    
    if (!courseName) {
      console.log('⚠️ Missing courseName');
      return [];
    }
    
    // Extract base course name (e.g., "1-Year MBA Online" → "MBA")
    const baseCourse = extractBaseCourse(courseName);
    console.log(`🎯 Base course extracted: "${baseCourse}" from "${courseName}"`);
    
    // Define specializations to filter out - course-specific filtering
    const invalidSpecializationsByCourse = {
      // Arts courses should not have Computer Applications or technical subjects
      'BA': ['Computer Applications', 'Tamil', 'Hindi', 'Urdu', 'Sanskrit', 'English Language', 
             'Applied Tamil', 'Functional Tamil', 'English & Communication',
             'French', 'Spanish', 'German', 'Arabic', 'Persian', 'Bengali', 'Telugu',
             'Kannada', 'Malayalam', 'Punjabi', 'Marathi', 'Gujarati', 'Odia',
             'Social and Civic Studies', 'Yoga for Human Excellence'],
      
      // Commerce courses should not have Computer Applications or language subjects
      'BCom': ['Computer Applications', 'Tamil', 'Hindi', 'Urdu', 'Sanskrit', 'English Language',
               'Applied Tamil', 'Functional Tamil',
               'French', 'Spanish', 'German', 'Arabic', 'Persian', 'Bengali', 'Telugu',
               'Kannada', 'Malayalam', 'Punjabi', 'Marathi', 'Gujarati', 'Odia'],
      
      // BCA, MCA should ALLOW Computer Applications, only filter languages
      'BCA': ['Tamil', 'Hindi', 'Urdu', 'Sanskrit', 'Applied Tamil', 'Functional Tamil',
              'French', 'Spanish', 'German', 'Arabic', 'Persian', 'Bengali', 'Telugu',
              'Kannada', 'Malayalam', 'Punjabi', 'Marathi', 'Gujarati', 'Odia'],
      'MCA': ['Tamil', 'Hindi', 'Urdu', 'Sanskrit', 'Applied Tamil', 'Functional Tamil',
              'French', 'Spanish', 'German', 'Arabic', 'Persian', 'Bengali', 'Telugu',
              'Kannada', 'Malayalam', 'Punjabi', 'Marathi', 'Gujarati', 'Odia'],
      
      // Science courses - filter languages
      'BSc': ['Tamil', 'Hindi', 'Urdu', 'Sanskrit', 'Applied Tamil', 'Functional Tamil',
              'French', 'Spanish', 'German', 'Arabic', 'Persian', 'Bengali', 'Telugu',
              'Kannada', 'Malayalam', 'Punjabi', 'Marathi', 'Gujarati', 'Odia'],
      'MSc': ['Tamil', 'Hindi', 'Urdu', 'Sanskrit', 'Applied Tamil', 'Functional Tamil',
              'French', 'Spanish', 'German', 'Arabic', 'Persian', 'Bengali', 'Telugu',
              'Kannada', 'Malayalam', 'Punjabi', 'Marathi', 'Gujarati', 'Odia'],
    };
    
    // Get the filter list for this specific course, or use empty array (allow all)
    const invalidSpecializations = invalidSpecializationsByCourse[baseCourse] || [];
    
    const specializationsSet = new Set();
    let universitiesWithCourse = 0;
    
    // Try to get specializations from university database first
    if (universities && universities.length > 0) {
      universities.forEach(uni => {
        if (uni.courses && typeof uni.courses === 'object') {
          // Check if this university offers the course
          if (uni.courses[baseCourse]) {
            universitiesWithCourse++;
            
            // Get specializations for this course at this university
            const courseData = uni.courses[baseCourse];
            if (courseData.specializations && Array.isArray(courseData.specializations)) {
              courseData.specializations.forEach(spec => {
                // Filter out General, empty strings, and invalid specializations
                if (spec && spec.trim() !== '' && spec !== 'General' && !invalidSpecializations.includes(spec.trim())) {
                  specializationsSet.add(spec.trim());
                }
              });
            }
          }
        }
      });
    }
    
    // Convert Set to Array
    let specializations = Array.from(specializationsSet).sort();
    
    console.log(`📊 Found ${universitiesWithCourse} universities offering ${baseCourse}`);
    console.log(`📊 Specializations from database: ${specializations.length}`);
    
    // CLEANUP: Remove duplicate finance/HR/management terms
    const cleanupSpecializations = (specs) => {
      const cleanedSet = new Set();
      const excludePatterns = [
        'Finance Management',
        'Financial Management', 
        'Financial Services',
        'Banking & Financial Services',
        'Banking & Finance',
        'Finance & Accounting',
        'Financial Markets',
        'HR Management',
        'Human Resource Management',
        'Marketing Management',
        'Operations Management',
        'Strategic Management',
        'Leadership & Management',
        'Supply Chain' // Keep "Supply Chain Management" but remove just "Supply Chain"
      ];
      
      specs.forEach(spec => {
        // Skip if it's an exact match to excluded patterns
        if (excludePatterns.includes(spec)) {
          console.log(`❌ Filtering out duplicate: "${spec}"`);
          return;
        }
        
        // Replace HR with Human Resources
        if (spec === 'HR' || spec === 'Human Resource' || spec === 'HR & Operations') {
          cleanedSet.add('Human Resources');
          return;
        }
        
        // Keep the spec as-is if not filtered
        cleanedSet.add(spec);
      });
      
      return Array.from(cleanedSet).sort();
    };
    
    // Apply cleanup to remove duplicates
    specializations = cleanupSpecializations(specializations);
    console.log(`✅ After cleanup: ${specializations.length} unique specializations`);
    
    // If we got very few specializations from database (less than 3), use our comprehensive fallback
    if (specializations.length < 3) {
      console.log(`⚠️ Insufficient specializations in database, using fallback mapping`);
      
      // Use the comprehensive mapping
      if (courseSpecializationMap[baseCourse]) {
        specializations = courseSpecializationMap[baseCourse];
        console.log(`✅ Using ${specializations.length} fallback specializations for ${baseCourse}`);
      } else {
        // If no mapping found, provide generic specializations based on course type
        console.log(`⚠️ No fallback mapping for ${baseCourse}, using generic`);
        specializations = ['General', 'Core Subjects', 'Applied Studies', 'Research'];
      }
    }
    
    console.log('   First 20 specializations:', specializations.slice(0, 20).join(', '));
    
    return specializations;
  };

  const renderStep = () => {
    // Error message component to display above each step
    const ErrorDisplay = () => {
      if (!errorMessage) return null;
      return (
        <div className={styles.errorMessage}>
          <span className={styles.errorIcon}>⚠️</span>
          <span className={styles.errorText}>{errorMessage}</span>
        </div>
      );
    };
    
    switch(currentStep) {
      case 1:
        return (
          <div className={styles.stepContent}>
            <ErrorDisplay />
            <h2>🎓 What level of education are you planning to pursue?</h2>
            
            <div className={getGridClass(8, styles.degreeOptions)}>
              {[
                { value: 'PG Courses', label: 'PG Courses', icon: '🎓', desc: 'Master\'s Programs & Post Graduate Courses' },
                { value: 'Executive Education', label: 'Executive Education', icon: '💼', desc: 'Professional Development Programs' },
                { value: 'Doctorate/Ph.D.', label: 'Doctorate/Ph.D.', icon: '🎖️', desc: 'Research & Doctoral Programs' },
                { value: 'UG Courses', label: 'UG Courses', icon: '📚', desc: 'Bachelor\'s Degree Programs' },
                { value: 'Study Abroad', label: 'Study Abroad', icon: '🌍', desc: 'International Education' },
                { value: 'Advanced Diploma', label: 'Advanced Diploma', icon: '📜', desc: 'Specialized Diploma Courses' },
                { value: 'Skilling & Certificate', label: 'Skilling & Certificate', icon: '⚡', desc: 'Professional Certification Courses' }
              ].map(option => (
                <div 
                  key={option.value}
                  className={`${styles.degreeCard} ${formData.degreeType === option.value ? styles.selected : ''}`}
                  onClick={() => handleInputChange('degreeType', option.value)}
                >
                  <div className={styles.degreeIcon}>{option.icon}</div>
                  <div className={styles.degreeLabel}>{option.label}</div>
                  <div className={styles.degreeDesc}>{option.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        // Debug logging for step 2
        console.log('📍 Rendering Step 2');
        console.log('   - Degree Type:', formData.degreeType);
        console.log('   - Filtered Courses Count:', filteredCourses.length);
        console.log('   - Total Courses Count:', courses.length);
        
        return (
          <div className={styles.stepContent}>
            <ErrorDisplay />
            <h2>📚 Which course would you like to explore?</h2>
            <p className={styles.stepSubtitle}>
              Selected Degree: <strong>{formData.degreeType}</strong> 
              {filteredCourses.length > 0 && ` (${filteredCourses.length} courses available)`}
            </p>
            
            <div className={getGridClass(filteredCourses.length, styles.degreeOptions)}>
                {filteredCourses.length > 0 ? 
                  filteredCourses.map(course => (
                    <div 
                      key={course.id}
                      className={`${styles.degreeCard} ${formData.preferredCourse === course.name ? styles.selected : ''}`}
                      onClick={() => handleInputChange('preferredCourse', course.name)}
                    >
                      <div className={styles.degreeIcon}>{getCourseIcon(course)}</div>
                      <div className={styles.degreeLabel}>{course.name}</div>
                      <div className={styles.degreeDesc}>{course.category || 'Professional Course'}</div>
                    </div>
                  )) :
                  <div className={styles.noCourses}>
                    <p>⚠️ No courses found for {formData.degreeType || 'selected degree type'}</p>
                    <p style={{fontSize: '14px', marginTop: '10px', opacity: 0.7}}>
                      Total courses in database: {courses.length}
                    </p>
                    <button 
                      onClick={() => setCurrentStep(1)} 
                      className={styles.backButton}
                      style={{marginTop: '20px'}}
                    >
                      ← Go Back and Select Again
                    </button>
                  </div>
                }
              </div>
          </div>
        );

      case 3:
        return (
          <div className={styles.stepContent}>
            <ErrorDisplay />
            <h3>🎯 Choose Your Specialization</h3>
            <p className={styles.stepSubtitle}>
              Selected Course: <strong>{formData.preferredCourse}</strong>
            </p>
            <div className={(() => {
              const specializations = getSpecializationsForCourse(formData.preferredCourse);
              if (specializations.length > 0) {
                return getGridClass(specializations.length, styles.specializationOptions);
              }
              return getGridClass(6, styles.specializationOptions); // Default fallback has 6 options
            })()}>
              {(() => {
                const specializations = getSpecializationsForCourse(formData.preferredCourse);
                
                if (specializations.length > 0) {
                  return specializations.map((spec, index) => (
                    <div 
                      key={index}
                      className={`${styles.optionCard} ${formData.specialization === spec ? styles.selected : ''}`}
                      onClick={() => handleInputChange('specialization', spec)}
                    >
                      <div className={styles.optionIcon}>⚡</div>
                      <div className={styles.optionLabel}>{spec}</div>
                    </div>
                  ));
                }
                
                // Fallback specializations if none found in database
                return [
                  { value: 'finance', label: 'Finance & Banking', icon: '💰' },
                  { value: 'marketing', label: 'Marketing & Sales', icon: '📊' },
                  { value: 'hr', label: 'Human Resources', icon: '👥' },
                  { value: 'operations', label: 'Operations Management', icon: '⚙️' },
                  { value: 'strategy', label: 'Strategy & Consulting', icon: '🎯' },
                  { value: 'analytics', label: 'Data Analytics', icon: '📈' }
                ].map(option => (
                  <div 
                    key={option.value}
                    className={`${styles.optionCard} ${formData.specialization === option.value ? styles.selected : ''}`}
                    onClick={() => handleInputChange('specialization', option.value)}
                  >
                    <div className={styles.optionIcon}>{option.icon}</div>
                    <div className={styles.optionLabel}>{option.label}</div>
                  </div>
                ));
              })()}
            </div>
          </div>
        );

      case 4:
        return (
          <div className={styles.stepContent}>
            <ErrorDisplay />
            <h2>👤 What best describes your current professional status?</h2>
            
            <div className={(() => {
              let options = [];
              
              if (formData.degreeType === 'UG Courses') {
                options = [
                  { value: 'student-12th', label: '12th Grade Student', icon: '📚' },
                  { value: '12th-passout', label: '12th Pass Out', icon: '🎓' },
                  { value: 'working-professional', label: 'Working Professional', icon: '💼' },
                  { value: 'career-break', label: 'Career Break', icon: '⏸️' }
                ];
              } else if (formData.degreeType === 'PG Courses' || formData.degreeType === 'Executive Education') {
                options = [
                  { value: 'student-graduation', label: 'Final Year Graduate', icon: '🎓' },
                  { value: 'fresher', label: 'Recent Graduate (Fresher)', icon: '🌟' },
                  { value: 'working-professional', label: 'Working Professional', icon: '💼' },
                  { value: 'entrepreneur', label: 'Entrepreneur', icon: '🚀' },
                  { value: 'career-break', label: 'Career Break', icon: '⏸️' }
                ];
              } else if (formData.degreeType === 'Doctorate/Ph.D.') {
                options = [
                  { value: 'student-postgrad', label: 'Post Graduate Student', icon: '📖' },
                  { value: 'working-professional', label: 'Working Professional with PG', icon: '💼' },
                  { value: 'academic', label: 'Academic/Researcher', icon: '🔬' }
                ];
              } else {
                options = [
                  { value: 'student', label: 'Student', icon: '📚' },
                  { value: 'working-professional', label: 'Working Professional', icon: '💼' },
                  { value: 'fresher', label: 'Fresher', icon: '🌟' },
                  { value: 'career-break', label: 'Career Break', icon: '⏸️' }
                ];
              }
              
              return getGridClass(options.length, styles.optionGrid);
            })()}>
                {(() => {
                  let options = [];
                  
                  if (formData.degreeType === 'UG Courses') {
                    options = [
                      { value: 'student-12th', label: '12th Grade Student', icon: '📚' },
                      { value: '12th-passout', label: '12th Pass Out', icon: '🎓' },
                      { value: 'working-professional', label: 'Working Professional', icon: '💼' },
                      { value: 'career-break', label: 'Career Break', icon: '⏸️' }
                    ];
                  } else if (formData.degreeType === 'PG Courses' || formData.degreeType === 'Executive Education') {
                    options = [
                      { value: 'student-graduation', label: 'Final Year Graduate', icon: '🎓' },
                      { value: 'fresher', label: 'Recent Graduate (Fresher)', icon: '🌟' },
                      { value: 'working-professional', label: 'Working Professional', icon: '💼' },
                      { value: 'entrepreneur', label: 'Entrepreneur', icon: '🚀' },
                      { value: 'career-break', label: 'Career Break', icon: '⏸️' }
                    ];
                  } else if (formData.degreeType === 'Doctorate/Ph.D.') {
                    options = [
                      { value: 'student-postgrad', label: 'Post Graduate Student', icon: '📖' },
                      { value: 'working-professional', label: 'Working Professional with PG', icon: '💼' },
                      { value: 'academic', label: 'Academic/Researcher', icon: '🔬' }
                    ];
                  } else {
                    options = [
                      { value: 'student', label: 'Student', icon: '📚' },
                      { value: 'working-professional', label: 'Working Professional', icon: '💼' },
                      { value: 'fresher', label: 'Fresher', icon: '🌟' },
                      { value: 'career-break', label: 'Career Break', icon: '⏸️' }
                    ];
                  }
                  
                  return options.map(option => (
                    <div 
                      key={option.value}
                      className={`${styles.optionCard} ${formData.currentEducation === option.value ? styles.selected : ''}`}
                      onClick={() => handleInputChange('currentEducation', option.value)}
                    >
                      <div className={styles.optionIcon}>{option.icon}</div>
                      <div className={styles.optionLabel}>{option.label}</div>
                    </div>
                  ));
                })()}
              </div>

            {formData.currentEducation && (
              <div className={styles.stepContent}>
                <h3>💼 How many years of work experience do you have?</h3>
                <div className={getGridClass(6, styles.optionGrid)}>
                  {[
                    { value: 'none', label: 'No Work Experience', icon: '🆕' },
                    { value: '0-1', label: '0-1 Years', icon: '⭐' },
                    { value: '1-3', label: '1-3 Years', icon: '⭐⭐' },
                    { value: '3-5', label: '3-5 Years', icon: '⭐⭐⭐' },
                    { value: '5-10', label: '5-10 Years', icon: '👑' },
                    { value: '10+', label: '10+ Years', icon: '🏆' }
                  ].map(option => (
                    <div 
                      key={option.value}
                      className={`${styles.optionCard} ${formData.workExperience === option.value ? styles.selected : ''}`}
                      onClick={() => handleInputChange('workExperience', option.value)}
                    >
                      <div className={styles.optionIcon}>{option.icon}</div>
                      <div className={styles.optionLabel}>{option.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className={styles.stepContent}>
            <ErrorDisplay />
            <h2>💻 What's your preferred mode of learning?</h2>
            
            {(() => {
                const selectedCourse = filteredCourses.find(c => c.id === formData.preferredCourse);
                const availableModes = selectedCourse?.mode || ['Online', 'Distance', 'Regular', 'Hybrid'];
                
                return (
                  <>
                    <h3>📚 Select Your Study Mode</h3>
                    <div className={getGridClass(5, styles.compactGrid)}>
                      {[
                        { value: 'online', label: 'Online Learning', icon: '💻', available: availableModes.includes('Online') },
                        { value: 'distance', label: 'Distance Learning', icon: '📡', available: availableModes.includes('Distance') },
                        { value: 'regular', label: 'On-Campus', icon: '🏫', available: availableModes.includes('Regular') },
                        { value: 'hybrid', label: 'Hybrid Mode', icon: '🔄', available: availableModes.includes('Hybrid') },
                        { value: 'weekend', label: 'Weekend Only', icon: '📅', available: true }
                      ].filter(option => option.available).map(option => (
                        <div 
                          key={option.value}
                          className={`${styles.compactCard} ${formData.studyMode === option.value ? styles.selected : ''}`}
                          onClick={() => handleInputChange('studyMode', option.value)}
                        >
                          <div className={styles.compactIcon}>{option.icon}</div>
                          <div className={styles.compactLabel}>{option.label}</div>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}

            {formData.studyMode && (
              <>
                <h3>🎯 Which learning format suits you best?</h3>
                <div className={getGridClass(5, styles.compactGrid)}>
                  {[
                    { value: 'live-classes', label: 'Live Classes', icon: '🎥' },
                    { value: 'recorded', label: 'Recorded Videos', icon: '📹' },
                    { value: 'self-paced', label: 'Self-Paced', icon: '⚡' },
                    { value: 'blended', label: 'Blended Learning', icon: '🔀' },
                    { value: 'mentorship', label: 'Mentorship', icon: '👨‍🏫' }
                  ].map(option => (
                    <div 
                      key={option.value}
                      className={`${styles.compactCard} ${formData.learningFormat === option.value ? styles.selected : ''}`}
                      onClick={() => handleInputChange('learningFormat', option.value)}
                    >
                      <div className={styles.compactIcon}>{option.icon}</div>
                      <div className={styles.compactLabel}>{option.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );

      case 6:
        return (
          <div className={styles.stepContent}>
            <ErrorDisplay />
            <h2>📍 Which location would you prefer for your studies?</h2>
            
            <h3>🗺️ Select Your Preferred State or Region</h3>
            <div className={getGridClass(28, styles.compactGrid)}>
                {[
                  { value: 'delhi', label: 'Delhi NCR', icon: '🏛️' },
                  { value: 'maharashtra', label: 'Maharashtra', icon: '🏙️' },
                  { value: 'karnataka', label: 'Karnataka', icon: '🌆' },
                  { value: 'tamil-nadu', label: 'Tamil Nadu', icon: '🕌' },
                  { value: 'uttar-pradesh', label: 'Uttar Pradesh', icon: '🕉️' },
                  { value: 'west-bengal', label: 'West Bengal', icon: '🎭' },
                  { value: 'gujarat', label: 'Gujarat', icon: '🦁' },
                  { value: 'rajasthan', label: 'Rajasthan', icon: '🏰' },
                  { value: 'telangana', label: 'Telangana', icon: '💎' },
                  { value: 'kerala', label: 'Kerala', icon: '🌴' },
                  { value: 'punjab', label: 'Punjab', icon: '🌾' },
                  { value: 'haryana', label: 'Haryana', icon: '🌾' },
                  { value: 'bihar', label: 'Bihar', icon: '📿' },
                  { value: 'odisha', label: 'Odisha', icon: '🏛️' },
                  { value: 'jharkhand', label: 'Jharkhand', icon: '⛰️' },
                  { value: 'chhattisgarh', label: 'Chhattisgarh', icon: '🌲' },
                  { value: 'madhya-pradesh', label: 'Madhya Pradesh', icon: '🏞️' },
                  { value: 'assam', label: 'Assam', icon: '🫖' },
                  { value: 'himachal-pradesh', label: 'Himachal Pradesh', icon: '🏔️' },
                  { value: 'uttarakhand', label: 'Uttarakhand', icon: '⛰️' },
                  { value: 'goa', label: 'Goa', icon: '🏖️' },
                  { value: 'jammu-kashmir', label: 'Jammu & Kashmir', icon: '🏔️' },
                  { value: 'andhra-pradesh', label: 'Andhra Pradesh', icon: '🏺' },
                  { value: 'tripura', label: 'Tripura', icon: '🌸' },
                  { value: 'manipur', label: 'Manipur', icon: '💃' },
                  { value: 'meghalaya', label: 'Meghalaya', icon: '☔' },
                  { value: 'sikkim', label: 'Sikkim', icon: '🏔️' },
                  { value: 'any', label: 'Any State', icon: '🌍' }
                ].map(option => (
                  <div 
                    key={option.value}
                    className={`${styles.compactCard} ${formData.preferredLocation === option.value ? styles.selected : ''}`}
                    onClick={() => handleInputChange('preferredLocation', option.value)}
                  >
                    <div className={styles.compactIcon}>{option.icon}</div>
                    <div className={styles.compactLabel}>{option.label}</div>
                  </div>
                ))}
              </div>
          </div>
        );

      case 7:
        return (
          <div className={styles.stepContent}>
            <ErrorDisplay />
            <h2>💰 What's your investment budget for this course?</h2>
            <p>Help us recommend programs that align with your financial goals</p>
            
            {(() => {
              const selectedCourse = filteredCourses.find(c => c.id === formData.preferredCourse);
              const maxFees = selectedCourse?.fees?.max || 2000000;
              
              // Define budget ranges with their threshold values
              const budgetRanges = [
                { value: 'below-50k', label: 'Below ₹50,000', threshold: 0, upperLimit: 50000 },
                { value: '50k-1l', label: '₹50,000 - ₹1,00,000', threshold: 50000, upperLimit: 100000 },
                { value: '1l-2l', label: '₹1,00,000 - ₹2,00,000', threshold: 100000, upperLimit: 200000 },
                { value: '2l-5l', label: '₹2,00,000 - ₹5,00,000', threshold: 200000, upperLimit: 500000 },
                { value: '5l-10l', label: '₹5,00,000 - ₹10,00,000', threshold: 500000, upperLimit: 1000000 },
                { value: '10l-20l', label: '₹10,00,000 - ₹20,00,000', threshold: 1000000, upperLimit: 2000000 },
                { value: 'above-20l', label: 'Above ₹20,00,000', threshold: 2000000, upperLimit: Infinity },
              ];
              
              // Filter ranges to show only those where the upper limit is <= maxFees
              const relevantRanges = budgetRanges.filter(range => range.upperLimit <= maxFees);
              
              // If no ranges found, at least show the first range
              const showRanges = relevantRanges.length > 0 ? relevantRanges : [budgetRanges[0]];
              
              return (
                <>
                  <h3>💰 Select Your Total Course Budget</h3>
                  <div className={getGridClass(showRanges.length, styles.compactGrid)}>
                    {showRanges.map(range => (
                      <div 
                        key={range.value}
                        className={`${styles.compactCard} ${formData.budgetRange === range.value ? styles.selected : ''}`}
                        onClick={() => handleInputChange('budgetRange', range.value)}
                      >
                        <div className={styles.compactIcon}>💰</div>
                        <div className={styles.compactLabel}>{range.label}</div>
                      </div>
                    ))}
                    <div 
                      className={`${styles.compactCard} ${formData.budgetRange === 'no-constraint' ? styles.selected : ''}`}
                      onClick={() => handleInputChange('budgetRange', 'no-constraint')}
                    >
                      <div className={styles.compactIcon}>♾️</div>
                      <div className={styles.compactLabel}>No Budget Constraint</div>
                    </div>
                  </div>
                </>
              );
            })()}
            

            <h3>💳 How would you like to pay your fees?</h3>
            <div className={getGridClass(5, styles.compactGrid)}>
                {[
                  { value: 'lumpsum', label: 'One-time Payment', icon: '💰' },
                  { value: 'semester', label: 'Semester-wise', icon: '📅' },
                  { value: 'emi', label: 'EMI/Monthly', icon: '💳' },
                  { value: 'quarterly', label: 'Quarterly', icon: '🗓️' },
                  { value: 'flexible', label: 'Flexible Options', icon: '🔄' }
                ].map(option => (
                  <div 
                    key={option.value}
                    className={`${styles.compactCard} ${formData.feePaymentMode === option.value ? styles.selected : ''}`}
                    onClick={() => handleInputChange('feePaymentMode', option.value)}
                  >
                    <div className={styles.compactIcon}>{option.icon}</div>
                    <div className={styles.compactLabel}>{option.label}</div>
                  </div>
                ))}
              </div>
          </div>
        );

      case 8:
        return (
          <div className={styles.stepContent}>
            <ErrorDisplay />
            <h3>🎯 What's your primary career goal after completing this course?</h3>
            <div className={getGridClass(9, styles.compactGrid)}>
              {[
                { value: 'promotion', label: 'Get Promoted', icon: '📈' },
                { value: 'career-switch', label: 'Switch Career', icon: '🔄' },
                { value: 'salary-hike', label: 'Salary Increase', icon: '💰' },
                { value: 'leadership', label: 'Leadership Role', icon: '👑' },
                { value: 'entrepreneurship', label: 'Start Business', icon: '🚀' },
                { value: 'skill-upgrade', label: 'Skill Upgrade', icon: '🛠️' },
                { value: 'international', label: 'Work Abroad', icon: '🌍' },
                { value: 'consulting', label: 'Consulting', icon: '💼' },
                { value: 'knowledge', label: 'Knowledge Growth', icon: '🧠' }
              ].map(option => (
                <div 
                  key={option.value}
                  className={`${styles.compactCard} ${formData.careerObjective === option.value ? styles.selected : ''}`}
                  onClick={() => handleInputChange('careerObjective', option.value)}
                >
                  <div className={styles.compactIcon}>{option.icon}</div>
                  <div className={styles.compactLabel}>{option.label}</div>
                </div>
              ))}
            </div>

            <h3>🏢 Which industry or sector are you targeting?</h3>
            <div className={getGridClass(12, styles.compactGrid)}>
              {[
                { value: 'it-software', label: 'IT & Software', icon: '💻' },
                { value: 'banking-finance', label: 'Banking & Finance', icon: '🏦' },
                { value: 'consulting', label: 'Consulting', icon: '💼' },
                { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
                { value: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
                { value: 'retail-ecommerce', label: 'Retail & E-commerce', icon: '🛒' },
                { value: 'education', label: 'Education', icon: '📚' },
                { value: 'media', label: 'Media & Entertainment', icon: '🎬' },
                { value: 'government', label: 'Government', icon: '🏛️' },
                { value: 'ngo', label: 'NGO/Social', icon: '🤝' },
                { value: 'startup', label: 'Startup', icon: '🚀' },
                { value: 'others', label: 'Others', icon: '🔧' }
              ].map(option => (
                <div 
                  key={option.value}
                  className={`${styles.compactCard} ${formData.targetIndustry === option.value ? styles.selected : ''}`}
                  onClick={() => handleInputChange('targetIndustry', option.value)}
                >
                  <div className={styles.compactIcon}>{option.icon}</div>
                  <div className={styles.compactLabel}>{option.label}</div>
                </div>
              ))}
            </div>

            <h3>💵 What's your expected salary range after course completion?</h3>
            <div className={getGridClass(8, styles.compactGrid)}>
              {[
                { value: 'below-5l', label: 'Below ₹5 LPA', icon: '💰' },
                { value: '5l-8l', label: '₹5 - ₹8 LPA', icon: '💰' },
                { value: '8l-12l', label: '₹8 - ₹12 LPA', icon: '💰' },
                { value: '12l-18l', label: '₹12 - ₹18 LPA', icon: '💰' },
                { value: '18l-25l', label: '₹18 - ₹25 LPA', icon: '💰' },
                { value: '25l-35l', label: '₹25 - ₹35 LPA', icon: '💰' },
                { value: 'above-35l', label: 'Above ₹35 LPA', icon: '💰' },
                { value: 'not-important', label: 'Not Primary Concern', icon: '🤷‍♂️' }
              ].map(option => (
                <div 
                  key={option.value}
                  className={`${styles.compactCard} ${formData.salaryExpectation === option.value ? styles.selected : ''}`}
                  onClick={() => handleInputChange('salaryExpectation', option.value)}
                >
                  <div className={styles.compactIcon}>{option.icon}</div>
                  <div className={styles.compactLabel}>{option.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className={styles.stepContent}>
            <h3>⏰ When are you planning to begin your course?</h3>
            <div className={getGridClass(6, styles.compactGrid)}>
              {[
                { value: 'immediately', label: 'Immediately', icon: '🚀' },
                { value: '1-month', label: 'Within 1 month', icon: '📅' },
                { value: '2-3-months', label: '2-3 months', icon: '🗓️' },
                { value: '4-6-months', label: '4-6 months', icon: '📆' },
                { value: 'next-academic', label: 'Next Academic', icon: '🎓' },
                { value: 'flexible', label: 'Flexible Timeline', icon: '🔄' }
              ].map(option => (
                <div 
                  key={option.value}
                  className={`${styles.compactCard} ${formData.whenToStart === option.value ? styles.selected : ''}`}
                  onClick={() => handleInputChange('whenToStart', option.value)}
                >
                  <div className={styles.compactIcon}>{option.icon}</div>
                  <div className={styles.compactLabel}>{option.label}</div>
                </div>
              ))}
            </div>

            <h3>📚 How many hours per week can you dedicate to studying?</h3>
            <div className={getGridClass(6, styles.compactGrid)}>
              {[
                { value: 'full-time', label: 'Full-time (40+ hrs)', icon: '⏰' },
                { value: 'part-time-high', label: 'Part-time High (20-40 hrs)', icon: '🕐' },
                { value: 'part-time-medium', label: 'Part-time Medium (10-20 hrs)', icon: '🕑' },
                { value: 'part-time-low', label: 'Part-time Low (5-10 hrs)', icon: '🕒' },
                { value: 'weekend-only', label: 'Weekend Only', icon: '🌅' },
                { value: 'flexible', label: 'Flexible Schedule', icon: '🔄' }
              ].map(option => (
                <div 
                  key={option.value}
                  className={`${styles.compactCard} ${formData.studyTimeAvailable === option.value ? styles.selected : ''}`}
                  onClick={() => handleInputChange('studyTimeAvailable', option.value)}
                >
                  <div className={styles.compactIcon}>{option.icon}</div>
                  <div className={styles.compactLabel}>{option.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.finalStep}>
              {isLoading && (
                <div className={styles.loadingState}>
                  <div className={styles.spinner}></div>
                  <h3>🔍 Finding Your Perfect Matches...</h3>
                  <p>Analyzing {universities.length} universities based on your preferences...</p>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>University Matcher - Find Your Perfect Match | EduConnect</title>
        <meta name="description" content="Find your perfect university with our AI-powered matcher. Get personalized recommendations based on your preferences, budget, and career goals." />
        <meta name="keywords" content="university matcher, college finder, education counseling, course selection" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.matcherContainer}>
          {/* Navigation Buttons - Moved to Top */}
          <div className={styles.navigationButtons}>
            {currentStep > 1 && (
              <button 
                type="button" 
                onClick={prevStep}
                className={styles.prevButton}
              >
                ← Previous
              </button>
            )}
            
            {currentStep === 9 && (
              <button 
                type="button" 
                onClick={handleSubmit}
                className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Finding Matches...' : '🎯 Find My Perfect Matches'}
              </button>
            )}
          </div>

          {/* Step Content */}
          {renderStep()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UniversityMatcher;
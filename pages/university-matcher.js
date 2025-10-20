import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styles from '../styles/UniversityMatcher.module.css';

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

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load courses data from public folder
        const coursesResponse = await fetch('/assets/js/comprehensive-courses-database.js');
        const coursesText = await coursesResponse.text();
        
        // Match the correct variable name: coursesDatabase
        const coursesMatch = coursesText.match(/const\s+coursesDatabase\s*=\s*(\[[\s\S]*?\]);/);
        if (coursesMatch) {
          const coursesData = eval(coursesMatch[1]);
          setCourses(coursesData);
          console.log('✅ Loaded', coursesData.length, 'courses');
        } else {
          console.error('❌ Could not parse courses database');
        }

        // Load universities data from public folder
        const universitiesResponse = await fetch('/assets/js/comprehensive-university-database.js');
        const universitiesText = await universitiesResponse.text();
        
        // Match the correct variable name: universityDatabase
        const universitiesMatch = universitiesText.match(/const\s+universityDatabase\s*=\s*(\[[\s\S]*?\]);/);
        if (universitiesMatch) {
          const universitiesData = eval(universitiesMatch[1]);
          setUniversities(universitiesData);
          console.log('✅ Loaded', universitiesData.length, 'universities');
        } else {
          console.error('❌ Could not parse universities database');
        }
      } catch (error) {
        console.error('❌ Error loading data:', error);
      }
    };

    loadData();
  }, []);

  // Filter courses when degree type OR courses data changes
  useEffect(() => {
    if (formData.degreeType && courses.length > 0) {
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
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    
    // Clear any existing data and store fresh form data
    localStorage.removeItem('universityMatcherData');
    localStorage.setItem('universityMatcherData', JSON.stringify(formData));
    
    // Simulate processing time
    setTimeout(() => {
      router.push('/university-matcher-results');
    }, 2000);
  };

  const getProgressPercentage = () => {
    return Math.round((currentStep / 8) * 100);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className={styles.stepContent}>
            <h2>🎓 Which degree are you interested in?</h2>
            
            <div className={getGridClass(8, styles.degreeOptions)}>
              {[
                { value: 'PG Courses', label: 'PG Courses', icon: '🎓', desc: 'Master\'s Programs & Post Graduate Courses' },
                { value: 'Executive Education', label: 'Executive Education', icon: '💼', desc: 'Professional Development Programs' },
                { value: 'Doctorate/Ph.D.', label: 'Doctorate/Ph.D.', icon: '🎖️', desc: 'Research & Doctoral Programs' },
                { value: 'UG Courses', label: 'UG Courses', icon: '📚', desc: 'Bachelor\'s Degree Programs' },
                { value: 'Job Guarantee', label: 'Job Guarantee', icon: '💯', desc: 'Placement Assured Programs' },
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
        return (
          <div className={styles.stepContent}>
            <h2>📚 What do you want to study?</h2>
            
            <div className={getGridClass(filteredCourses.length, styles.courseOptions)}>
                {filteredCourses.length > 0 ? 
                  filteredCourses.map(course => (
                    <div 
                      key={course.id}
                      className={`${styles.courseCard} ${formData.preferredCourse === course.id ? styles.selected : ''}`}
                      onClick={() => handleInputChange('preferredCourse', course.id)}
                    >
                      <div className={styles.courseIcon}>📚</div>
                      <div className={styles.courseName}>{course.name}</div>
                      {course.fees && (
                        <div className={styles.courseFees}>
                          ₹{course.fees.min?.toLocaleString()} - ₹{course.fees.max?.toLocaleString()}
                        </div>
                      )}
                    </div>
                  )) :
                  <p>Please select a degree type first</p>
                }
              </div>

            {formData.preferredCourse && (
              <div className={styles.stepContent}>
                <h3>🎯 Specialization/Stream</h3>
                <div className={(() => {
                  const selectedCourse = filteredCourses.find(c => c.id === formData.preferredCourse);
                  if (selectedCourse && selectedCourse.specializations) {
                    return getGridClass(selectedCourse.specializations.length, styles.specializationOptions);
                  }
                  return getGridClass(6, styles.specializationOptions); // Default fallback has 6 options
                })()}>
                  {(() => {
                    const selectedCourse = filteredCourses.find(c => c.id === formData.preferredCourse);
                    if (selectedCourse && selectedCourse.specializations) {
                      return selectedCourse.specializations.map((spec, index) => (
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
            )}
          </div>
        );

      case 3:
        return (
          <div className={styles.stepContent}>
            <h2>👤 Tell us about your current status</h2>
            
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
                  { value: 'entrepreneur', label: 'Entrepreneur/Business Owner', icon: '🚀' },
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
                      { value: 'entrepreneur', label: 'Entrepreneur/Business Owner', icon: '🚀' },
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
                <h3>💼 Work Experience</h3>
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

      case 4:
        return (
          <div className={styles.stepContent}>
            <h2>💻 How do you prefer to study?</h2>
            
            {(() => {
                const selectedCourse = filteredCourses.find(c => c.id === formData.preferredCourse);
                const availableModes = selectedCourse?.mode || ['Online', 'Distance', 'Regular', 'Hybrid'];
                
                return (
                  <>
                    <h3>📚 Preferred Study Mode</h3>
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
              <div className={styles.stepContent}>
                <h3>🎯 Learning Format</h3>
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
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className={styles.stepContent}>
            <h2>📍 Where do you want to study?</h2>
            
            <h3>🗺️ Preferred State/Region</h3>
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

      case 6:
        return (
          <div className={styles.stepContent}>
            <h2>💰 What's your budget?</h2>
            <p>Help us find courses that fit your financial plan</p>
            
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
                  <div className={styles.stepContent}>
                    <h3>💰 Total Course Budget</h3>
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
                  </div>
                </>
              );
            })()}
            

            <div className={styles.stepContent}>
              <h3>💳 Fee Payment Preference</h3>
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


          </div>
        );

      case 7:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepContent}>
              <h3>🎯 Primary Career Objective</h3>
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
            </div>

            <div className={styles.stepContent}>
              <h3>🏢 Target Industry/Sector</h3>
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
            </div>

            <div className={styles.stepContent}>
              <h3>💵 Expected Salary Post Course</h3>
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
          </div>
        );

      case 8:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepContent}>
              <h3>⏰ When do you want to start?</h3>
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
            </div>

            <div className={styles.stepContent}>
              <h3>📚 Study Time Available</h3>
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
          {/* Step Content - Direct without container */}
          {renderStep()}

          {/* Navigation Buttons */}
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
            
            {currentStep < 8 ? (
              <button 
                type="button" 
                onClick={nextStep}
                className={styles.nextButton}
              >
                Next →
              </button>
            ) : (
              <button 
                type="button" 
                onClick={handleSubmit}
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Finding Matches...' : '🎯 Find My Perfect Matches'}
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UniversityMatcher;
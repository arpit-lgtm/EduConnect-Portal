import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LoginModal from '../components/login/LoginModal';
import Toast from '../components/common/Toast';
import { useAuth } from '../contexts/AuthContext';
import { trackUniversityContact } from '../utils/activityTracker';
import styles from '../styles/UniversityMatcherResults.module.css';
import { getUniversityLogo } from '../utils/universityLogoMap';

const UniversityMatcherResults = () => {
  const router = useRouter();
  const { isLoggedIn, isLoading: authLoading, userData } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [matchedUniversities, setMatchedUniversities] = useState([]);
  const [allUniversitiesWithCourse, setAllUniversitiesWithCourse] = useState([]); // All universities with the course (for filtering)
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter states
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [availableStates, setAvailableStates] = useState([]);
  const [availableCountries, setAvailableCountries] = useState([]);
  
  // Contact modal state
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    gender: '',
    dob: '',
    city: '',
    state: '',
    qualification: ''
  });



  useEffect(() => {
    // Wait for auth to load
    if (authLoading) return;
    
    // Check if user is logged in
    if (!isLoggedIn) {
      setShowLoginModal(true);
      setIsLoading(false);
      return;
    }
    
    // Load form data from localStorage
    const storedData = localStorage.getItem('universityMatcherData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setFormData(data);
      
      // Set initial state filter based on questionnaire selection
      if (data.preferredLocation && data.preferredLocation !== 'any') {
        // Convert lowercase-hyphenated format to proper case
        // E.g., 'maharashtra' -> 'Maharashtra', 'tamil-nadu' -> 'Tamil Nadu'
        const stateMapping = {
          'delhi': 'Delhi',
          'maharashtra': 'Maharashtra',
          'karnataka': 'Karnataka',
          'tamil-nadu': 'Tamil Nadu',
          'uttar-pradesh': 'Uttar Pradesh',
          'west-bengal': 'West Bengal',
          'gujarat': 'Gujarat',
          'rajasthan': 'Rajasthan',
          'telangana': 'Telangana',
          'kerala': 'Kerala',
          'punjab': 'Punjab',
          'haryana': 'Haryana',
          'bihar': 'Bihar',
          'odisha': 'Odisha',
          'jharkhand': 'Jharkhand',
          'chhattisgarh': 'Chhattisgarh',
          'madhya-pradesh': 'Madhya Pradesh',
          'assam': 'Assam',
          'himachal-pradesh': 'Himachal Pradesh',
          'uttarakhand': 'Uttarakhand',
          'goa': 'Goa',
          'jammu-kashmir': 'Jammu and Kashmir',
          'andhra-pradesh': 'Andhra Pradesh',
          'tripura': 'Tripura',
          'manipur': 'Manipur',
          'meghalaya': 'Meghalaya',
          'sikkim': 'Sikkim'
        };
        
        const mappedState = stateMapping[data.preferredLocation];
        if (mappedState) {
          console.log('🎯 Initial state filter set to:', mappedState);
          setSelectedState(mappedState);
        }
      }
      
      loadUniversities(data);
    } else {
      // No data found, redirect back to matcher
      router.push('/university-matcher');
    }
  }, [isLoggedIn, authLoading]);

  // Apply filters when filter states change
  useEffect(() => {
    if (allUniversitiesWithCourse.length > 0) {
      applyFilters();
    }
  }, [selectedState, selectedCountry, allUniversitiesWithCourse]);

  // Contact form handlers
  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactClick = async (university) => {
    if (!isLoggedIn || !userData) {
      alert('Please log in to express interest in universities');
      return;
    }

    try {
      // Prepare lead data with all questionnaire responses
      const leadData = {
        userData: userData,
        questionnaireData: formData,
        universityName: university.name,
        universityLocation: university.location,
        courseDetails: {
          courseName: formData?.courseType,
          specialization: formData?.specialization
        }
      };

      // Send to API
      const response = await fetch('/api/save-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      });

      const result = await response.json();

      if (result.success) {
        // Track this activity
        await trackUniversityContact(university.name, formData);
        
        // Show toast notification
        setShowToast(true);
        console.log('Lead saved successfully:', result.leadId);
        
        // Redirect to homepage after 4 seconds
        setTimeout(() => {
          router.push('/');
        }, 4000);
      } else {
        throw new Error('Failed to save lead');
      }
    } catch (error) {
      console.error('Error saving lead:', error);
      // Show toast even on error
      setShowToast(true);
      
      // Redirect to homepage after 4 seconds
      setTimeout(() => {
        router.push('/');
      }, 4000);
    }
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactFormData);
    
    // Show toast notification instead of alert
    setShowToast(true);
    setShowContactModal(false);
    
    setContactFormData({
      fullName: '',
      contactNumber: '',
      email: '',
      gender: '',
      dob: '',
      city: '',
      state: '',
      qualification: ''
    });
  };

  const loadUniversities = async (data) => {
    try {
      // Check if data already loaded
      if (window.universityDatabase && Array.isArray(window.universityDatabase)) {
        console.log('✅ Data already loaded in window scope');
        
        // Universities to exclude from results (duplicates removed)
        const excludeUniversities = [
          'CDE Amu',
          'IIM Indore Timespro',
          'UPES (Online)', // Keep UPES CCE
          'Svu Gajraula Wilp',
          'SRM University (Online)',
          'Symbiosis Distance Learning', // Keep Symbiosis SCDL
          'Sgvu Engineering',
          'Smude Sikkim Manipal University',
          'Mahe Manipal',
          'Kuk Dde',
          'Jain University (Distance Education)', // Keep only Online version
          'Jgu (Online) Coursera' // Keep only O P Jindal Global University
        ];

        // Filter out excluded universities
        const filteredDatabase = window.universityDatabase.filter(uni => {
          const nameLower = uni.name.toLowerCase();
          return !excludeUniversities.some(excluded => 
            nameLower.includes(excluded.toLowerCase())
          );
        });
        
        console.log(`📊 Total universities: ${window.universityDatabase.length}, After duplicate filter: ${filteredDatabase.length}`);
        
        setUniversities(filteredDatabase);
        
        // 🔒 SERVER-SIDE MATCHING #1 - Algorithm completely hidden from browser!
        console.log('🔐 Calling server-side matching API (location-filtered)...');
        
        // Match universities via SERVER API (with location filter)
        const matchResponse = await fetch('/api/match-universities', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formData: data, filterByLocation: true })
        });
        const matchData = await matchResponse.json();
        const matched = matchData.universities || [];
        
        // Get ALL universities with course (without location filter) for dropdown
        const allResponse = await fetch('/api/match-universities', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formData: { ...data, preferredLocation: 'any' }, filterByLocation: false })
        });
        const allData = await allResponse.json();
        const allWithCourse = allData.universities || [];
        
        console.log(`✅ Server matched ${matched.length} universities (filtered), ${allWithCourse.length} total`);
        
        // Fetch College Vidya ratings for matched universities
        const matchedWithRatings = await fetchCollegeVidyaRatings(matched);
        
        // Fetch ratings for ALL universities with the course as well
        const allWithCourseAndRatings = await fetchCollegeVidyaRatings(allWithCourse);
        
        setMatchedUniversities(matchedWithRatings);
        setAllUniversitiesWithCourse(allWithCourseAndRatings); // Store all universities with course
        setFilteredUniversities(matchedWithRatings);
        
        // Extract available states and countries from ALL universities with the course
        extractAvailableLocations(allWithCourseAndRatings);
        
        console.log('✅ Matched', matchedWithRatings.length, 'universities');
        setIsLoading(false);
        return;
      }

      // Load unified database from secure API endpoint
      const universitiesResponse = await fetch('/api/comprehensive-database');
      const universitiesText = await universitiesResponse.text();
      
      // Replace const with var to avoid redeclaration errors
      const modifiedText = universitiesText
        .replace(/const universityDatabase/g, 'var universityDatabase')
        .replace(/const coursesDatabase/g, 'var coursesDatabase');
      
      // Execute in global scope using Function constructor
      const executeGlobal = new Function(modifiedText);
      executeGlobal.call(window);
      
      // Now access the database from window scope
      if (window.universityDatabase && Array.isArray(window.universityDatabase)) {
        
        // Universities to exclude from results (duplicates removed)
        const excludeUniversities = [
          'CDE Amu',
          'IIM Indore Timespro',
          'UPES (Online)', // Keep UPES CCE
          'Svu Gajraula Wilp',
          'SRM University (Online)',
          'Symbiosis Distance Learning', // Keep Symbiosis SCDL
          'Sgvu Engineering',
          'Smude Sikkim Manipal University',
          'Mahe Manipal',
          'Kuk Dde',
          'Jain University (Distance Education)', // Keep only Online version
          'Jgu (Online) Coursera' // Keep only O P Jindal Global University
        ];

        // Filter out excluded universities
        const filteredDatabase = window.universityDatabase.filter(uni => {
          const nameLower = uni.name.toLowerCase();
          return !excludeUniversities.some(excluded => 
            nameLower.includes(excluded.toLowerCase())
          );
        });
        
        console.log(`📊 Total universities: ${window.universityDatabase.length}, After duplicate filter: ${filteredDatabase.length}`);
        
        setUniversities(filteredDatabase);
        
        // 🔒 SERVER-SIDE MATCHING #2 - Algorithm completely hidden from browser!
        console.log('🔐 Calling server-side matching API (second call)...');
        
        // Match universities via SERVER API
        const matchResponse2 = await fetch('/api/match-universities', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formData: data, filterByLocation: true })
        });
        const matchData2 = await matchResponse2.json();
        const matched = matchData2.universities || [];
        
        // Get ALL universities with course
        const allResponse2 = await fetch('/api/match-universities', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formData: { ...data, preferredLocation: 'any' }, filterByLocation: false })
        });
        const allData2 = await allResponse2.json();
        const allWithCourse = allData2.universities || [];
        
        console.log(`✅ Server matched ${matched.length} universities`);
        
        // Fetch College Vidya ratings for matched universities
        const matchedWithRatings = await fetchCollegeVidyaRatings(matched);
        
        // Fetch ratings for ALL universities with the course as well
        const allWithCourseAndRatings = await fetchCollegeVidyaRatings(allWithCourse);
        
        setMatchedUniversities(matchedWithRatings);
        setAllUniversitiesWithCourse(allWithCourseAndRatings); // Store all universities with course
        setFilteredUniversities(matchedWithRatings);
        
        // Extract available states and countries from ALL universities with the course
        extractAvailableLocations(allWithCourseAndRatings);
        
        console.log('✅ Matched', matchedWithRatings.length, 'universities');
      } else {
        console.error('❌ universityDatabase not found in window scope');
        setMatchedUniversities([]);
        setFilteredUniversities([]);
      }
      
    } catch (error) {
      console.error('❌ Error loading universities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCollegeVidyaRatings = async (universities) => {
    try {
      // Load ratings database from secure API
      const ratingsResponse = await fetch('/api/university-ratings');
      const ratingsText = await ratingsResponse.text();
      
      // Extract ratings object
      const ratingsMatch = ratingsText.match(/const\s+universityRatings\s*=\s*(\{[\s\S]*?\});/);
      let ratingsData = {};
      
      if (ratingsMatch) {
        ratingsData = eval('(' + ratingsMatch[1] + ')');
      }
      
      // Map ratings to universities
      const universitiesWithRatings = universities.map((uni) => {
        const ratings = ratingsData[uni.id] || ratingsData['default'] || {};
        
        return {
          ...uni,
          collegeVidyaRating: {
            studentRating: ratings.studentRating || uni.rating || 3.5,
            googleRating: ratings.googleRating || (uni.rating ? uni.rating + 0.3 : 4.0),
            googleReviews: ratings.googleReviews || uni.reviews || 100
          }
        };
      });
      
      return universitiesWithRatings;
    } catch (error) {
      console.warn('Failed to load ratings database', error);
      // Fallback to database values
      return universities.map(uni => ({
        ...uni,
        collegeVidyaRating: {
          studentRating: uni.rating || 3.5,
          googleRating: uni.rating ? uni.rating + 0.3 : 4.0,
          googleReviews: uni.reviews || 100
        }
      }));
    }
  };

  // 🔒 REMOVED: matchUniversities function - Now handled server-side for security!
  // Algorithm logic is completely hidden from browser and runs on server only.
  // See: /pages/api/match-universities.js

  const extractAvailableLocations = (universities) => {
    const indianStates = new Set();
    const overseasCountries = new Set();
    
    const stateList = [
      'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Delhi', 'Uttar Pradesh', 
      'Gujarat', 'Rajasthan', 'West Bengal', 'Madhya Pradesh', 'Kerala',
      'Punjab', 'Haryana', 'Bihar', 'Odisha', 'Telangana', 'Andhra Pradesh',
      'Assam', 'Jharkhand', 'Chhattisgarh', 'Uttarakhand', 'Goa',
      'Himachal Pradesh', 'Jammu and Kashmir', 'Manipur', 'Meghalaya',
      'Mizoram', 'Nagaland', 'Sikkim', 'Tripura', 'Arunachal Pradesh'
    ];

    universities.forEach(uni => {
      if (uni.location) {
        const location = uni.location;
        
        // Check if it's an overseas university first
        if (isOverseas(location)) {
          // Extract country (last part after comma)
          const parts = location.split(',').map(p => p.trim());
          const country = parts[parts.length - 1];
          if (country && country !== '') {
            overseasCountries.add(country);
          }
        } else {
          // It's in India - extract state
          // First try to find from known state list
          const foundState = stateList.find(state => 
            location.includes(state)
          );
          if (foundState) {
            indianStates.add(foundState);
          } else {
            // Try to extract from location string (usually second-to-last part)
            const parts = location.split(',').map(p => p.trim());
            if (parts.length >= 2) {
              const possibleState = parts[parts.length - 2];
              if (possibleState && possibleState !== 'India') {
                indianStates.add(possibleState);
              }
            }
          }
        }
      }
    });

    setAvailableStates(Array.from(indianStates).sort());
    setAvailableCountries(Array.from(overseasCountries).sort());
  };

  const applyFilters = () => {
    let filtered = [...allUniversitiesWithCourse];

    console.log('🔍 Applying filters...');
    console.log('   Selected State:', selectedState);
    console.log('   Selected Country:', selectedCountry);
    console.log('   Total universities before filter:', filtered.length);

    // Apply either state filter OR country filter, not both
    if (selectedState !== 'all') {
      // State filter (India only)
      console.log('   Filtering by state:', selectedState);
      filtered = filtered.filter(uni => {
        const isIndian = uni.location && !isOverseas(uni.location);
        const matchesState = uni.location && uni.location.includes(selectedState);
        
        if (matchesState) {
          console.log('   ✅ Matches:', uni.name, '-', uni.location);
        }
        
        return isIndian && matchesState;
      });
      console.log('   Universities after state filter:', filtered.length);
    } else if (selectedCountry !== 'all') {
      // Country filter (Overseas only)
      console.log('   Filtering by country:', selectedCountry);
      filtered = filtered.filter(uni => 
        uni.location && 
        isOverseas(uni.location) && 
        uni.location.includes(selectedCountry)
      );
      console.log('   Universities after country filter:', filtered.length);
    } else {
      console.log('   No filter applied - showing all universities');
    }
    // If both are 'all', filtered already contains allUniversitiesWithCourse
    // This shows ALL universities with the selected course, regardless of location

    console.log('   Final filtered count:', filtered.length);
    setFilteredUniversities(filtered);
  };

  const isOverseas = (location) => {
    const indiaKeywords = [
      'india', 'delhi', 'mumbai', 'bangalore', 'chennai', 'kolkata', 'hyderabad', 
      'pune', 'ahmedabad', 'jaipur', 'lucknow', 'maharashtra', 'karnataka', 
      'tamil nadu', 'gujarat', 'rajasthan', 'uttar pradesh', 'madhya pradesh', 
      'kerala', 'punjab', 'haryana', 'andhra pradesh', 'telangana', 'west bengal',
      'bihar', 'odisha', 'assam', 'jharkhand', 'chhattisgarh', 'uttarakhand',
      'goa', 'himachal pradesh', 'jammu and kashmir', 'manipur', 'meghalaya',
      'mizoram', 'nagaland', 'sikkim', 'tripura', 'arunachal pradesh',
      'chandigarh', 'puducherry', 'lakshadweep', 'andaman and nicobar',
      'noida', 'gurgaon', 'gurugram', 'faridabad', 'ghaziabad', 'kanpur',
      'patna', 'bhopal', 'indore', 'vadodara', 'surat', 'visakhapatnam',
      'kochi', 'coimbatore', 'mysore', 'bhubaneswar', 'ranchi', 'raipur'
    ];
    return !indiaKeywords.some(keyword => location.toLowerCase().includes(keyword));
  };

  const clearFilters = () => {
    setSelectedState('all');
    setSelectedCountry('all');
  };

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
  };

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Finding Your Perfect Universities... | EduConnect</title>
        </Head>
        <Header />
        <div className={styles.loadingContainer}>
          <div className={styles.loader}></div>
          <h2>🔍 Finding Your Perfect Universities...</h2>
          <p>Analyzing your preferences and matching with the best universities</p>
        </div>
        <Footer />
      </>
    );
  }

  // Show login modal if not authenticated
  if (!isLoggedIn) {
    return (
      <>
        <Head>
          <title>Login Required | EduConnect</title>
        </Head>
        <Header />
        <div className={styles.loginRequiredContainer}>
          <div className={styles.loginRequiredContent}>
            <div className={styles.loginIcon}>🔒</div>
            <h2>Login Required</h2>
            <p>Please login to view your personalized university matches</p>
            <button 
              className={styles.loginButton}
              onClick={() => setShowLoginModal(true)}
            >
              Login to Continue
            </button>
          </div>
        </div>
        <LoginModal 
          isOpen={showLoginModal} 
          onClose={() => {
            setShowLoginModal(false);
            // Reload page after login to show results
          }}
          onLoginSuccess={() => {
            setShowLoginModal(false);
            window.location.reload();
          }}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Your Matched Universities | EduConnect</title>
        <meta name="description" content="Universities matched based on your preferences" />
      </Head>

      <Header />

      <div className={styles.container}>
        <div className={styles.resultsWrapper}>
          <div className={styles.mainContent}>
            {/* Filters Sidebar */}
            <aside className={styles.filtersSidebar}>
              <h3>🔍 Filters</h3>

              {/* India States Filter */}
              <div className={styles.filterGroup}>
                <h4>🇮🇳 India</h4>
                <select 
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    if (e.target.value !== 'all') {
                      setSelectedCountry('all'); // Reset overseas filter
                    }
                  }}
                  className={styles.filterSelect}
                >
                  <option value="all">All States</option>
                  {availableStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Overseas Countries Filter */}
              <div className={styles.filterGroup}>
                <h4>🌍 Overseas</h4>
                <select 
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    if (e.target.value !== 'all') {
                      setSelectedState('all'); // Reset India filter
                    }
                  }}
                  className={styles.filterSelect}
                >
                  <option value="all">All Countries</option>
                  {availableCountries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <button className={styles.clearFilters} onClick={clearFilters}>
                Clear All Filters
              </button>
            </aside>

            {/* Universities List */}
            <div className={styles.universitiesList}>
              {filteredUniversities.length > 0 ? (
                filteredUniversities.map((university, index) => (
                  <div 
                    key={index} 
                    className={styles.universityCard}
                  >
                    {/* Match Circle - Top Right with CSS variable for progress */}
                    <div 
                      className={styles.matchCircle}
                      style={{ '--progress': `${university.matchScore}%` }}
                    >
                      {university.matchScore}%
                    </div>

                    {/* Left Side: University Logo */}
                    <div className={styles.leftSection}>
                      <div className={styles.logoWrapper}>
                        {getUniversityLogo(university.name) ? (
                          <img 
                            src={getUniversityLogo(university.name)} 
                            alt={university.name}
                            className={styles.universityLogoImg}
                          />
                        ) : (
                          <div className={styles.universityLogoInitials}>
                            {getInitials(university.name)}
                          </div>
                        )}
                      </div>
                      
                      {/* CONTACT Button - Always show */}
                      <button 
                        className={styles.contactButton}
                        onClick={() => handleContactClick(university)}
                      >
                        <span className={styles.contactText}>CONTACT US</span>
                        <span className={styles.contactTextAlt}>KNOW MORE</span>
                      </button>
                    </div>

                    {/* Right Side: Partitioned Details - Always show */}
                    <div className={styles.rightSection}>
                        {/* University Name on Top */}
                        <h3 className={styles.universityNameTop}>{university.name}</h3>
                        
                        <div className={styles.detailsGrid}>
                        
                        {/* Location Partition */}
                        <div className={styles.detailPartition}>
                          <div className={styles.partitionLabel}>LOCATION</div>
                          <div className={styles.partitionValue}>
                            <span className={styles.pinIcon}>📍</span>
                            <span>{university.location}</span>
                          </div>
                        </div>

                        {/* Student Rating Partition */}
                        <div className={styles.detailPartition}>
                          <div className={styles.partitionLabel}>STUDENT RATING</div>
                          <div className={styles.partitionValue}>
                            <span className={styles.star}>⭐</span>
                            <span>{university.collegeVidyaRating?.studentRating || university.rating || 'N/A'}/5</span>
                          </div>
                        </div>

                        {/* Google Rating Partition */}
                        <div className={styles.detailPartition}>
                          <div className={styles.partitionLabel}>GOOGLE RATING</div>
                          <div className={styles.partitionValue}>
                            <span className={styles.star}>⭐</span>
                            <span>{university.collegeVidyaRating?.googleRating || university.rating || 'N/A'}/5</span>
                          </div>
                          {(university.collegeVidyaRating?.googleReviews || university.reviews) && (
                            <div className={styles.reviewCount}>
                              {university.collegeVidyaRating?.googleReviews || university.reviews} reviews
                            </div>
                          )}
                        </div>

                        {/* Approvals Partition */}
                        <div className={styles.detailPartition}>
                          <div className={styles.partitionLabel}>APPROVALS</div>
                          <div className={styles.approvalBadges}>
                            {university.approvals && Array.isArray(university.approvals) ? (
                              university.approvals.slice(0, 8).map((approval, i) => (
                                <span key={i} className={styles.approvalBadge}>{approval}</span>
                              ))
                            ) : university.accreditation ? (
                              typeof university.accreditation === 'string' ? (
                                <span className={styles.approvalBadge}>{university.accreditation}</span>
                              ) : Array.isArray(university.accreditation) ? (
                                university.accreditation.slice(0, 8).map((acc, i) => (
                                  <span key={i} className={styles.approvalBadge}>{acc}</span>
                                ))
                              ) : null
                            ) : null}
                          </div>
                        </div>

                        {/* Fees Partition */}
                        <div className={styles.detailPartition}>
                          <div className={styles.partitionLabel}>FEES</div>
                          <div className={styles.partitionValue}>
                            {(() => {
                              console.log('💰 Fee Display Debug:', {
                                universityName: university.name,
                                feesType: typeof university.fees,
                                feesData: university.fees,
                                selectedCourse: formData?.preferredCourse
                              });
                              
                              if (!university.fees) return 'Contact University';
                              
                              // Check if fees is an object (new format with course-specific fees)
                              if (typeof university.fees === 'object' && !Array.isArray(university.fees)) {
                                // Try to get fee for the selected course (case-insensitive)
                                const courseName = formData?.preferredCourse;
                                
                                console.log('   Looking for course:', courseName);
                                console.log('   Available courses in fees:', Object.keys(university.fees));
                                
                                if (courseName) {
                                  // Try different case variations
                                  const courseFee = university.fees[courseName] || 
                                                   university.fees[courseName.toUpperCase()] ||
                                                   university.fees[courseName.toLowerCase()] ||
                                                   university.fees[courseName.trim()];
                                  
                                  if (courseFee) {
                                    console.log('   ✅ Found fee:', courseFee);
                                    return `₹${courseFee.toLocaleString('en-IN')}`;
                                  } else {
                                    console.log('   ❌ Course fee not found');
                                  }
                                }
                                
                                // If no match found, show fee range from available courses
                                const feeValues = Object.values(university.fees).filter(f => typeof f === 'number');
                                if (feeValues.length > 0) {
                                  const minFee = Math.min(...feeValues);
                                  const maxFee = Math.max(...feeValues);
                                  console.log('   💵 Showing fee range:', minFee, '-', maxFee);
                                  if (minFee === maxFee) {
                                    return `₹${minFee.toLocaleString('en-IN')}`;
                                  }
                                  return `₹${minFee.toLocaleString('en-IN')} - ₹${maxFee.toLocaleString('en-IN')}`;
                                }
                                
                                return 'Contact University';
                              }
                              
                              // Old format: fees is a single number
                              console.log('   💵 Single fee format:', university.fees);
                              return `₹${university.fees.toLocaleString('en-IN')}`;
                            })()}
                          </div>
                        </div>

                      </div>
                      </div>
                  </div>
                ))
              ) : (
                <div className={styles.noResults}>
                  <h2>😔 No universities found</h2>
                  <p>Try adjusting your filters or go back to modify your answers.</p>
                  <button 
                    className={styles.retryButton}
                    onClick={() => router.push('/university-matcher')}
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>

            {/* Right Content Area - For Videos & Additional Content */}
            <div className={styles.rightContent}>
              <h3>📹 Featured Content</h3>
              <div className={styles.rightContentContainer}>
                <div className={styles.videoContainer}>
                  <video 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.featuredVideo}
                  >
                    <source src="/videos/DPU 1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className={styles.videoOverlay}>
                    <h4>DY Patil University Online</h4>
                    <p>Discover World-Class Education & Career Opportunities</p>
                  </div>
                </div>
                
                <div className={styles.additionalContent}>
                  <div className={styles.contentCard}>
                    <h5>🎓 Career Guidance</h5>
                    <p>Expert counselors available to guide your educational journey</p>
                  </div>
                  <div className={styles.contentCard}>
                    <h5>📚 Course Resources</h5>
                    <p>Access comprehensive study materials and industry insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className={styles.modalOverlay} onClick={() => setShowContactModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setShowContactModal(false)}>
              ✕
            </button>
            <h2 className={styles.modalHeader}>Consult with our expert counsellors</h2>
            <form className={styles.contactForm} onSubmit={handleContactFormSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={contactFormData.fullName}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contactNumber">Contact Number *</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={contactFormData.contactNumber}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactFormData.email}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
                    name="gender"
                    value={contactFormData.gender}
                    onChange={handleContactFormChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="dob">Date of Birth *</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={contactFormData.dob}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={contactFormData.city}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={contactFormData.state}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="qualification">Highest Qualification *</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    value={contactFormData.qualification}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <Toast 
          message="Thank you for your interest! Our expert counselors will contact you shortly."
          type="success"
          onClose={() => setShowToast(false)}
          duration={4000}
        />
      )}

      <Footer />
    </>
  );
};

export default UniversityMatcherResults;

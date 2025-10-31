import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styles from '../styles/UniversityMatcherResults.module.css';
import { getUniversityLogo } from '../utils/universityLogoMap';

const UniversityMatcherResults = () => {
  const router = useRouter();
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
  }, []);

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

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactFormData);
    alert('Thank you! Our expert counsellors will contact you soon.');
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
        
        // Match universities based on form data (this respects location filter)
        const matched = matchUniversities(filteredDatabase, data);
        
        // Get universities with the course but WITHOUT location filter for state/country dropdown
        const allWithCourse = matchUniversities(filteredDatabase, { ...data, preferredLocation: 'any' });
        
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

      // Load unified database from public folder
      const universitiesResponse = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
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
        
        // Match universities based on form data (this respects location filter)
        const matched = matchUniversities(filteredDatabase, data);
        
        // Get universities with the course but WITHOUT location filter for state/country dropdown
        const allWithCourse = matchUniversities(filteredDatabase, { ...data, preferredLocation: 'any' });
        
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
      // Load ratings database from file
      const ratingsResponse = await fetch('/assets/js/university-ratings-database.js');
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

  const matchUniversities = (universitiesData, formData) => {
    if (!universitiesData || universitiesData.length === 0) {
      return [];
    }

    // Get the actual course name from coursesDatabase if we have course ID
    let courseNameToMatch = formData.preferredCourse;
    console.log('🔍 Initial course from formData:', formData.preferredCourse);
    console.log('🔍 Full formData:', formData);
    
    // The preferredCourse is already the course name (like "MBA", "BCA", etc.)
    // Just use it directly for matching
    if (!courseNameToMatch) {
      console.error('❌ No course specified in formData');
      return [];
    }
    
    console.log(`🔍 Matching course: ${courseNameToMatch}`);

    // Filter universities based on the form criteria
    console.log('🔍 Total universities to check:', universitiesData.length);
    console.log('🔍 Looking for course:', courseNameToMatch);
    
    let filtered = universitiesData.map(uni => {
      let score = 0;

      // Match selected course (CRITICAL - must have the course)
      let hasCourse = false;
      if (courseNameToMatch && uni.courses) {
        // Handle both array format (old) and object format (new)
        if (Array.isArray(uni.courses)) {
          hasCourse = uni.courses.some(course => {
            // Try exact match first
            if (course.toLowerCase() === courseNameToMatch.toLowerCase()) return true;
            // Try partial match (e.g., "MBA" matches "1-Year MBA Online")
            if (courseNameToMatch.toLowerCase().includes(course.toLowerCase())) return true;
            if (course.toLowerCase().includes(courseNameToMatch.toLowerCase())) return true;
            return false;
          });
        } else if (typeof uni.courses === 'object') {
          // Object format: { "MBA": { specializations: [...] }, "BCA": {...} }
          hasCourse = Object.keys(uni.courses).some(courseKey => {
            // Try exact match first
            if (courseKey.toLowerCase() === courseNameToMatch.toLowerCase()) return true;
            // Try partial match
            if (courseNameToMatch.toLowerCase().includes(courseKey.toLowerCase())) return true;
            if (courseKey.toLowerCase().includes(courseNameToMatch.toLowerCase())) return true;
            return false;
          });
        }
        
        if (hasCourse) {
          score += 40; // High weight for course match
          console.log(`✅ ${uni.name} has course ${courseNameToMatch}`);
        }
      }

      // If university doesn't have the selected course, skip it
      if (courseNameToMatch && !hasCourse) {
        return null; // Will be filtered out
      }

      // Filter by location if a specific state is selected (not "any" or "any-state")
      if (formData.preferredLocation && 
          formData.preferredLocation !== 'any' && 
          formData.preferredLocation !== 'any-state') {
        
        // Normalize strings for comparison
        const normalize = (s) => (s || '').toString().toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ').trim();
        const targetLocation = normalize(formData.preferredLocation);
        
        // Extract state from "City, State" format
        let uniState = '';
        let uniLocation = normalize(uni.location || '');
        
        if (uni.location && uni.location.includes(',')) {
          const parts = uni.location.split(',').map(p => normalize(p.trim()));
          uniState = parts[1] || parts[0]; // Get state part (after comma)
        } else {
          uniState = normalize(uni.state || uni.location || '');
        }
        
        // Check if location matches (check both full location and extracted state)
        const locationMatch = uniState.includes(targetLocation) || 
                             targetLocation.includes(uniState) ||
                             uniLocation.includes(targetLocation) ||
                             targetLocation.includes(uniLocation);
        
        if (!locationMatch) {
          return null; // Will be filtered out
        }
        score += 15; // Bonus for matching location
      }

      // Match study mode (check both uni.mode array and uni.programs)
      if (formData.studyMode) {
        let hasMatchingMode = false;
        
        // Normalize study mode for comparison (remove hyphens, extra spaces, etc.)
        const normalizeMode = (str) => str.toLowerCase().trim().replace(/-/g, ' ').replace(/\s+/g, ' ');
        const targetMode = normalizeMode(formData.studyMode);
        
        // Check direct mode property (most common in database)
        if (uni.mode && Array.isArray(uni.mode)) {
          hasMatchingMode = uni.mode.some(mode => {
            const uniMode = normalizeMode(mode);
            // Check if either contains the other (more flexible matching)
            const modeMatch = uniMode.includes(targetMode) || 
                             targetMode.includes(uniMode) ||
                             uniMode.split(' ').some(word => targetMode.includes(word)) ||
                             targetMode.split(' ').some(word => uniMode.includes(word));
            return modeMatch;
          });
        }
        
        // Fallback: Check programs array if mode not found
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
          return null; // Filter out if study mode doesn't match
        }
      }

      // Match degree type
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

      // Match budget range
      if (formData.budgetRange && uni.fees) {
        const budgetRanges = {
          'Below ₹50,000': { min: 0, max: 50000 },
          '₹50,000 - ₹1,00,000': { min: 50000, max: 100000 },
          '₹1,00,000 - ₹2,00,000': { min: 100000, max: 200000 },
          '₹2,00,000 - ₹5,00,000': { min: 200000, max: 500000 },
          'Above ₹5,00,000': { min: 500000, max: 10000000 }
        };
        const range = budgetRanges[formData.budgetRange];
        
        // Get fee for the selected course
        let courseFee = null;
        if (typeof uni.fees === 'object' && !Array.isArray(uni.fees)) {
          // fees is an object with course names as keys
          // Try exact match first, then uppercase version (most courses are uppercase in fees object)
          courseFee = uni.fees[courseNameToMatch] || 
                     uni.fees[courseNameToMatch.toUpperCase()] ||
                     uni.fees[courseNameToMatch.toLowerCase()];
        } else {
          // Old format: fees is a single number
          courseFee = uni.fees;
        }
        
        if (range && courseFee && courseFee >= range.min && courseFee <= range.max) {
          score += 20;
        }
      }

      // Give base score to all universities
      if (score === 0) score = 10;

      return {
        ...uni,
        matchScore: score
      };
    }).filter(uni => uni !== null); // Remove universities without the course

    // Sort by match score
    filtered.sort((a, b) => b.matchScore - a.matchScore);

    // Return top 50 results
    return filtered.slice(0, 50);
  };

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
                        onClick={() => setShowContactModal(true)}
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
              <div className={styles.rightContentPlaceholder}>
                <p>Videos and additional content will be displayed here</p>
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

      <Footer />
    </>
  );
};

export default UniversityMatcherResults;

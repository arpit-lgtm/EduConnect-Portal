import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styles from '../styles/CourseDetails.module.css';
import coursesData from '../lib/courseData';
import { getUniversityLogo } from '../utils/universityLogoMap';

export default function CourseDetails() {
  const router = useRouter();
  const { courseId, courseName, displayName } = router.query;
  const [universities, setUniversities] = useState([]);
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCourseInfo, setCurrentCourseInfo] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [contactFormData, setContactFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    gender: '',
    dateOfBirth: '',
    city: '',
    state: '',
    currentQualification: ''
  });

  useEffect(() => {
    async function fetchUniversities() {
      // Wait for router to be ready and support both courseId and courseName
      if (!router.isReady) return;

      // Use either courseId OR find courseId by courseName
      let actualCourseId = courseId;

      // Fallback: read search params directly (helps with hydration/navigation cases)
      if (!actualCourseId && typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        if (params.get('courseId')) actualCourseId = params.get('courseId');
        if (!actualCourseId && params.get('courseName')) {
          const name = params.get('courseName');
          actualCourseId = Object.keys(coursesData).find(key => 
            coursesData[key].title.toLowerCase() === name.toLowerCase()
          );
        }
      }

      if (!actualCourseId && courseName) {
        // Find courseId by matching courseName (when passed as query)
        actualCourseId = Object.keys(coursesData).find(key => 
          coursesData[key].title.toLowerCase() === courseName.toLowerCase()
        );
      }

      if (!actualCourseId) {
        console.log('No courseId or courseName provided');
        setLoading(false);
        return;
      }

      console.log('Fetching universities for courseId:', actualCourseId);

      try {
        // The comprehensive database sets global variables, so we access them from window
        let uniDatabase = null;
        
        if (typeof window !== 'undefined' && window.universityDatabase) {
          // Database already loaded globally
          uniDatabase = window.universityDatabase;
        } else {
          // Load the database script
          const response = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
          const scriptText = await response.text();
          
          // Execute the script to populate global variables
          eval(scriptText);
          
          // Now access from window
          uniDatabase = window.universityDatabase;
        }

        console.log('Database loaded, total universities:', uniDatabase?.length);

        if (!uniDatabase || !Array.isArray(uniDatabase) || uniDatabase.length === 0) {
          console.error('University database is empty or invalid');
          setLoading(false);
          return;
        }

        const courseInfo = coursesData[actualCourseId];

        if (!courseInfo) {
          console.error('Course not found for ID:', actualCourseId);
          setLoading(false);
          return;
        }

        console.log('Course info:', courseInfo);
        
        // Store course info in state for later use
        setCurrentCourseInfo(courseInfo);

        // Get normalized course type from the title (handle M.Com, M.Tech patterns)
        // Instead of generic matching, use multiple keywords for better specificity
        const titleWords = courseInfo.title.toUpperCase().replace(/[^\w\s]/g, '').split(' ');
        
        // Extract base course type
        let courseType = titleWords.find(word => 
          ['MBA', 'MCA', 'BBA', 'BCA', 'MCOM', 'BCOM', 'MSC', 'BSC', 'MTECH', 'BTECH', 'MA', 'BA', 'PHD', 'PGDM', 'MS'].includes(word)
        ) || 'MBA';

        // Determine course level (UG/PG) - CRITICAL for filtering
        const ugCourses = ['BBA', 'BCA', 'BCOM', 'BSC', 'BTECH', 'BA'];
        const pgCourses = ['MBA', 'MCA', 'MCOM', 'MSC', 'MTECH', 'MA', 'PHD', 'PGDM', 'MS'];
        const isUGCourse = ugCourses.includes(courseType);
        const isPGCourse = pgCourses.includes(courseType);

        // Check if course is "Online" mode
        const isOnlineCourse = courseInfo.title.toLowerCase().includes('online') || 
                               courseInfo.category?.toLowerCase().includes('online');

        console.log('Course Analysis:', {
          courseType,
          isUGCourse,
          isPGCourse,
          isOnlineCourse,
          title: courseInfo.title
        });

        // Extract specialization/focus keywords for better matching
        const specializationKeywords = [];
        const title = courseInfo.title.toUpperCase();
        
        // Extract specific specializations to make matching more precise
        if (title.includes('FINANCE')) specializationKeywords.push('FINANCE');
        if (title.includes('MARKETING')) specializationKeywords.push('MARKETING');
        if (title.includes('HR') || title.includes('HUMAN RESOURCE')) specializationKeywords.push('HR');
        if (title.includes('OPERATIONS')) specializationKeywords.push('OPERATIONS');
        if (title.includes('BUSINESS ANALYTICS') || title.includes('ANALYTICS')) specializationKeywords.push('ANALYTICS', 'BUSINESS ANALYTICS');
        if (title.includes('DATA SCIENCE')) specializationKeywords.push('DATA SCIENCE', 'DATA');
        if (title.includes('COMPUTER SCIENCE') || title.includes('CSE')) specializationKeywords.push('COMPUTER SCIENCE', 'CS');
        if (title.includes('ARTIFICIAL INTELLIGENCE') || title.includes('AI')) specializationKeywords.push('AI', 'ARTIFICIAL INTELLIGENCE');
        if (title.includes('CYBER SECURITY')) specializationKeywords.push('CYBER SECURITY', 'SECURITY');
        if (title.includes('CLOUD COMPUTING')) specializationKeywords.push('CLOUD');
        if (title.includes('BLOCKCHAIN')) specializationKeywords.push('BLOCKCHAIN');
        if (title.includes('ROBOTICS')) specializationKeywords.push('ROBOTICS');
        if (title.includes('ECONOMICS')) specializationKeywords.push('ECONOMICS');
        if (title.includes('PSYCHOLOGY')) specializationKeywords.push('PSYCHOLOGY');
        if (title.includes('ENGLISH')) specializationKeywords.push('ENGLISH');
        if (title.includes('ACCOUNTING')) specializationKeywords.push('ACCOUNTING');
        if (title.includes('FINTECH')) specializationKeywords.push('FINTECH');
        if (title.includes('HEALTHCARE')) specializationKeywords.push('HEALTHCARE');
        if (title.includes('INTERNATIONAL BUSINESS')) specializationKeywords.push('INTERNATIONAL');
        if (title.includes('EXECUTIVE')) specializationKeywords.push('EXECUTIVE');
        if (title.includes('LEADERSHIP')) specializationKeywords.push('LEADERSHIP');
        if (title.includes('PROJECT MANAGEMENT')) specializationKeywords.push('PROJECT');
        if (title.includes('SUPPLY CHAIN')) specializationKeywords.push('SUPPLY CHAIN');
        if (title.includes('DIGITAL MARKETING')) specializationKeywords.push('DIGITAL MARKETING');

        console.log('Extracted course type:', courseType, 'Keywords:', specializationKeywords);

        // Check if this is a Study Abroad course
        const isStudyAbroad = courseInfo.category === 'Study Abroad';
        
        // Extract target country from course title for Study Abroad
        let targetCountry = null;
        if (isStudyAbroad) {
          const title = courseInfo.title;
          if (title.includes('USA')) targetCountry = 'USA';
          else if (title.includes('Canada')) targetCountry = 'Canada';
          else if (title.includes('UK')) targetCountry = 'UK';
          else if (title.includes('Australia')) targetCountry = 'Australia';
          else if (title.includes('Singapore')) targetCountry = 'Singapore';
          else if (title.includes('Germany')) targetCountry = 'Germany';
          else if (title.includes('Dubai')) targetCountry = 'Dubai';
          else if (title.includes('Europe')) targetCountry = 'Europe';
        }

        console.log('Is Study Abroad:', isStudyAbroad, 'Target Country:', targetCountry);

        // Filter universities based on Study Abroad or Indian courses
        const overseasKeywords = ['USA', 'UK', 'Canada', 'Australia', 'Singapore', 'England', 'California', 'Massachusetts', 'Florida', 'Wisconsin', 'Texas', 'Michigan', 'Minnesota', 'Boston', 'London', 'Melbourne', 'Toronto', 'Ontario', 'Victoria', 'Durham', 'Germany', 'Berlin', 'Munich', 'Dubai', 'UAE', 'France', 'Paris', 'Spain', 'Netherlands'];
        
        // Define premium institutes (IIMs, IITs, IISc) - should be excluded from UG and Online courses
        const premiumInstitutes = ['IIM', 'IIT', 'IISC', 'INDIAN INSTITUTE OF MANAGEMENT', 'INDIAN INSTITUTE OF TECHNOLOGY', 'INDIAN INSTITUTE OF SCIENCE'];
        
        const isPremiumInstitute = (uniName) => {
          const nameUpper = uniName.toUpperCase();
          return premiumInstitutes.some(prefix => nameUpper.includes(prefix));
        };

        let matchingUniversities = uniDatabase
          .filter(uni => {
            const isOverseas = overseasKeywords.some(keyword => 
              uni.location?.includes(keyword)
            );

            // RULE 1: For UG courses - EXCLUDE IIMs/IITs (they don't offer UG programs)
            if (isUGCourse && isPremiumInstitute(uni.name)) {
              console.log(`❌ Excluding ${uni.name} from UG course ${courseType}`);
              return false;
            }

            // RULE 2: For Online courses - EXCLUDE IIMs/IITs (show tier-2 universities instead)
            if (isOnlineCourse && isPremiumInstitute(uni.name)) {
              console.log(`❌ Excluding ${uni.name} from Online course ${courseType}`);
              return false;
            }

            // For Study Abroad courses: ONLY show overseas universities from target country
            if (isStudyAbroad) {
              if (!isOverseas) return false; // Must be overseas
              
              // Match specific country if specified
              if (targetCountry) {
                if (targetCountry === 'Europe') {
                  // For Europe, accept UK, France, Spain, Netherlands, Germany
                  return uni.location?.includes('UK') || 
                         uni.location?.includes('England') ||
                         uni.location?.includes('France') || 
                         uni.location?.includes('Spain') || 
                         uni.location?.includes('Netherlands') ||
                         uni.location?.includes('Germany');
                }
                return uni.location?.includes(targetCountry);
              }
              
              return true; // Any overseas university if no specific country
            }
            
            // For regular courses: ONLY show Indian universities (exclude overseas)
            if (isOverseas) return false;

            // Match courses - improved matching with specialization awareness
            // Support both coursesList (array) and courses (object) formats
            let courseArray = [];
            if (uni.coursesList && Array.isArray(uni.coursesList)) {
              courseArray = uni.coursesList;
            } else if (uni.courses) {
              if (Array.isArray(uni.courses)) {
                courseArray = uni.courses;
              } else if (typeof uni.courses === 'object') {
                courseArray = Object.keys(uni.courses);
              }
            }

            const hasMatch = courseArray.some(course => {
              const courseStr = typeof course === 'string' ? course : course.name;
              const normalizedCourse = courseStr.toUpperCase().replace(/[.\s-]/g, '');
              const normalizedType = courseType.replace(/[.\s-]/g, '');
              
              // Must match base course type
              if (!normalizedCourse.includes(normalizedType)) return false;
              
              // If we have specialization keywords, prefer universities offering those
              if (specializationKeywords.length > 0) {
                // Give higher preference to courses with matching specializations
                return specializationKeywords.some(keyword => 
                  courseStr.toUpperCase().includes(keyword)
                ) || normalizedCourse.includes(normalizedType);
              }
              
              return true;
            });
            return hasMatch;
          })
          .map(uni => ({
            id: uni.id || uni.name.toLowerCase().replace(/ /g, '-'),
            name: uni.name,
            location: uni.location,
            accreditation: uni.accreditation || 'NAAC',
            rating: uni.rating || 4.0,
            nirfRanking: uni.nirfRanking,
            approvals: uni.approvals || [],
            acceptanceRate: uni.acceptanceRate || '75%',
            placementRate: uni.placementRate || '85%',
            fees: uni.fees || {}, // Keep the complete fees object for comparison page
            feesRange: typeof uni.fees === 'object' && uni.fees[courseType]
              ? {
                  min: uni.fees[courseType],
                  max: Math.round(uni.fees[courseType] * 1.2)
                }
              : typeof uni.fees === 'object' && uni.fees[courseType.replace('M.', '').replace('B.', '')]
              ? {
                  min: uni.fees[courseType.replace('M.', '').replace('B.', '')],
                  max: Math.round(uni.fees[courseType.replace('M.', '').replace('B.', '')] * 1.2)
                }
              : {
                  min: 50000,
                  max: 100000
                },
            logo: `/images/universities/${uni.name.replace(/ /g, '-')}.png`,
            mode: uni.mode || ['Regular'],
            establishedYear: uni.establishedYear,
            // Add missing comparison fields
            studentsRating: uni.studentsRating || 'N/A',
            onlineClasses: uni.onlineClasses !== undefined ? uni.onlineClasses : false,
            duration: uni.duration || 'N/A',
            eligibility: uni.eligibility || 'Contact University',
            courses: uni.courses || []
          }));

        console.log('Matching universities before sorting:', matchingUniversities.length, isStudyAbroad ? `(${targetCountry} universities)` : '(Indian universities)');

        // TRUE RANDOM selection on each page load - different universities every time
        // Use Math.random() for genuine randomization instead of deterministic seed
        const randomSeed = Math.random() * 1000000; // Completely random each time
        
        // Add specialization scoring first
        matchingUniversities = matchingUniversities.map((uni, index) => {
          // Add specialization bonus if university offers matching specializations
          let specializationBonus = 0;
          if (specializationKeywords.length > 0 && uni.courses) {
            // Get course array - support both formats
            let courseArray = [];
            if (uni.coursesList && Array.isArray(uni.coursesList)) {
              courseArray = uni.coursesList;
            } else if (Array.isArray(uni.courses)) {
              courseArray = uni.courses;
            } else if (typeof uni.courses === 'object') {
              courseArray = Object.keys(uni.courses);
            }
            
            const courseMatches = courseArray.filter(c => {
              const cStr = typeof c === 'string' ? c : c.name;
              return specializationKeywords.some(kw => cStr.toUpperCase().includes(kw));
            });
            specializationBonus = courseMatches.length * 500; // Boost universities with matching specializations
          }
          
          return {
            ...uni,
            _specializationScore: specializationBonus,
            _randomScore: Math.random() * 10000 // Pure random score for shuffling
          };
        });
        
        // Sort all universities
        const sortedUniversities = matchingUniversities
          .sort((a, b) => {
            // Primary sort: rating tier (group by 0.4 intervals for variety within quality tiers)
            const aTier = Math.floor(a.rating / 0.4);
            const bTier = Math.floor(b.rating / 0.4);
            if (aTier !== bTier) return bTier - aTier;
            
            // Secondary sort: specialization match (universities with matching specializations get priority)
            const specDiff = b._specializationScore - a._specializationScore;
            if (Math.abs(specDiff) > 100) return specDiff;
            
            // Within same tier and specialization level: pure random
            return b._randomScore - a._randomScore;
          })
          .map(({ _specializationScore, _randomScore, ...uni }) => uni); // Remove temp scores

        // Display top 7 on the course details page
        const top7Universities = sortedUniversities.slice(0, 7);
        
        console.log('Total matching universities:', sortedUniversities.length);
        console.log('Top 7 universities for display:', top7Universities.map(u => u.name));

        // Store top 7 for display
        setUniversities(top7Universities);
        
        // Store ALL matching universities in sessionStorage for the comparison modal
        // This ensures the modal shows all universities, not just the top 7
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('allUniversitiesForCourse', JSON.stringify(sortedUniversities));
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading universities:', error);
        setLoading(false);
      }
    }

    fetchUniversities();
  }, [courseId, courseName]);

  const handleCompareToggle = (universityName) => {
    // Get full university data for the selected university
    const selectedUniversity = universities.find(uni => uni.name === universityName);
    
    if (!selectedUniversity) {
      console.error('University not found:', universityName);
      return;
    }

    // Store in session storage
    sessionStorage.setItem('compareUniversities', JSON.stringify([selectedUniversity]));
    sessionStorage.setItem('compareCourse', currentCourseInfo?.title || courseName || 'Course Comparison');
    
    // Get ALL universities from sessionStorage (not just the top 7 displayed)
    const allUniversities = sessionStorage.getItem('allUniversitiesForCourse');
    if (allUniversities) {
      sessionStorage.setItem('availableUniversities', allUniversities);
      console.log('📋 Loaded all universities for modal:', JSON.parse(allUniversities).length);
    } else {
      // Fallback to displayed universities if all universities not available
      sessionStorage.setItem('availableUniversities', JSON.stringify(universities));
      console.log('⚠️ Using displayed universities as fallback');
    }
    
    // Open comparison page in new tab
    window.open('/compare-universities', '_blank');
  };

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
    // Add your form submission logic here (e.g., API call)
    alert('Thank you! Our expert counsellors will contact you shortly.');
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

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
  };

  // Get the actual courseId being used - only on client side
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCategory, setCourseCategory] = useState('');

  useEffect(() => {
    if (router.isReady) {
      const actualCourseId = courseId || (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('courseId'));
      const actualDisplayName = displayName || (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('displayName'));
      const courseInfo = coursesData[actualCourseId];
      
      // Use displayName if available (from card click), otherwise use courseData title
      setCourseTitle(actualDisplayName || courseInfo?.title || '');
      setCourseCategory(courseInfo?.category || '');
    }
  }, [router.isReady, courseId, displayName]);

  return (
    <>
      <Header />
      <main className={styles.courseDetailsPage}>
        <div className={styles.universitiesSection}>
          <div className={styles.container}>
            {/* Course title removed from here - now in header */}
            {/* Subtitle also removed */}

            {loading ? (
              <div className={styles.loading}>Loading universities...</div>
            ) : universities.length > 0 ? (
              <div className={styles.mainContentGrid}>
                {/* Left Column: University Cards */}
                <div className={styles.universityGrid}>
                {universities.map((uni, index) => {
                  const rank = index + 1;
                  const rating = uni.rating || 4.0;
                  
                  // Format fees
                  const formatFee = (amount) => {
                    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
                    else if (amount >= 1000) return `₹${Math.round(amount / 1000)}K`;
                    else return `₹${amount.toLocaleString()}`;
                  };
                  
                  const feesText = uni.feesRange?.min && uni.feesRange?.max && uni.feesRange.min !== uni.feesRange.max
                    ? `${formatFee(uni.feesRange.min)} - ${formatFee(uni.feesRange.max)}`
                    : `${formatFee(uni.feesRange?.min || uni.feesRange?.max || 50000)}`;

                  return (
                    <div
                      key={uni.id}
                      className={styles.collegeVidyaCard}
                    >
                      {/* Compare Button - Top Right */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCompareToggle(uni.name);
                        }}
                        className={styles.compareBtn}
                        style={{
                          background: '#0074d9'
                        }}
                      >
                        + Add to Compare
                      </button>

                      {/* Card Layout: Logo on Left, Content on Right */}
                      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        
                        {/* Left Column: University Logo + CONTACT Button */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                          {/* University Logo */}
                          <div className={styles.universityLogo}>
                            {getUniversityLogo(uni.name) ? (
                              <img 
                                src={getUniversityLogo(uni.name)} 
                                alt={uni.name}
                                style={{
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain'
                                }}
                              />
                            ) : (
                              <div style={{
                                fontSize: '2rem',
                                color: 'white',
                                fontWeight: '700',
                                letterSpacing: '1px'
                              }}>
                                {getInitials(uni.name)}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Middle Content - University Info */}
                        <div style={{ flex: 1 }}>
                          {/* University Name */}
                          <h3 className={styles.universityName}>{uni.name}</h3>

                          {/* Partitions Grid - ALL IN ONE ROW */}
                          <div className={styles.partitionsGrid}>
                            
                            {/* Approvals Partition */}
                            <div className={styles.partition}>
                              <div className={styles.partitionLabel}>Approvals</div>
                              <div className={styles.partitionContent}>
                                {uni.approvals && uni.approvals.length > 0 ? (
                                  <div className={styles.approvalsList}>
                                    {uni.approvals.slice(0, 3).map((approval, i) => (
                                      <span key={i} className={styles.approvalTag}>{approval}</span>
                                    ))}
                                    {uni.approvals.length > 3 && (
                                      <span className={styles.moreTag}>+{uni.approvals.length - 3}</span>
                                    )}
                                  </div>
                                ) : (
                                  <span className={styles.naText}>N/A</span>
                                )}
                              </div>
                            </div>

                            {/* Student Rating Partition */}
                            <div className={styles.partition}>
                              <div className={styles.partitionLabel}>Student Rating</div>
                              <div className={styles.partitionContent}>
                                <div className={styles.ratingDisplay}>
                                  <span className={styles.ratingStars}>⭐</span>
                                  <span className={styles.ratingValue}>{rating.toFixed(1)}/5</span>
                                </div>
                              </div>
                            </div>

                            {/* Location Partition */}
                            <div className={styles.partition}>
                              <div className={styles.partitionLabel}>Location</div>
                              <div className={styles.partitionContent}>
                                <span className={styles.locationText}>📍 {uni.location}</span>
                              </div>
                            </div>

                            {/* NIRF Ranking Partition */}
                            <div className={styles.partition}>
                              <div className={styles.partitionLabel}>NIRF Ranking</div>
                              <div className={styles.partitionContent}>
                                {uni.nirfRanking ? (
                                  <span className={styles.rankingBadge}>#{uni.nirfRanking}</span>
                                ) : (
                                  <span className={styles.naText}>N/A</span>
                                )}
                              </div>
                            </div>

                            {/* Accreditation Partition */}
                            <div className={styles.partition}>
                              <div className={styles.partitionLabel}>Accreditation</div>
                              <div className={styles.partitionContent}>
                                {uni.accreditation && !uni.accreditation.toLowerCase().includes('nirf') ? (
                                  <span className={styles.accreditationBadge}>{uni.accreditation}</span>
                                ) : (
                                  <span className={styles.naText}>N/A</span>
                                )}
                              </div>
                            </div>

                            {/* Fee and offers Partition */}
                            <div className={styles.partition}>
                              <div className={styles.partitionLabel}>Fee and offers</div>
                              <div className={styles.partitionContent}>
                                <div className={styles.feeDisplay}>
                                  <span className={styles.feeAmount}>{feesText}</span>
                                  <span className={styles.feePeriod}>Per Sem</span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Right Sidebar: Video + Why Trust Us */}
              <div className={styles.rightSidebar}>
                {/* Video Section - VERTICAL REEL STYLE */}
                <div className={styles.videoSection}>
                  {/* Title removed - just video like a reel */}
                  <div className={styles.videoThumbnailContainer}>
                    <video 
                      className={styles.videoThumbnail}
                      poster="/images/boy.png"
                      controls
                      loop
                      playsInline
                    >
                      <source src="/videos/Global MBA-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div 
                      className={styles.playOverlay}
                      onClick={(e) => {
                        const video = e.target.closest(`.${styles.videoThumbnailContainer}`).querySelector('video');
                        if (video) {
                          video.play();
                          e.currentTarget.style.display = 'none';
                        }
                      }}
                    >
                      <div className={styles.playIcon}></div>
                    </div>
                  </div>
                  <div className={styles.videoInfo}>
                    <div className={styles.videoName}>Global MBA Experience</div>
                    <div className={styles.videoMeta}>World-class international education</div>
                  </div>
                </div>

                {/* Why Trust Us Section */}
                <div className={styles.whyTrustSection}>
                  <h3 className={styles.whyTrustTitle}>
                    Why choose us? 
                    <span style={{ fontSize: '1.3rem' }}>🛡️</span>
                  </h3>
                  <ul className={styles.trustList}>
                    <li className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span className={styles.trustText}>Career Placement Assistance</span>
                    </li>
                    <li className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span className={styles.trustText}>Private Student Network Access</span>
                    </li>
                    <li className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span className={styles.trustText}>Study Materials & Resources</span>
                    </li>
                    <li className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span className={styles.trustText}>Round-the-Clock Student Care</span>
                    </li>
                    <li className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span className={styles.trustText}>Professional Networking Opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            ) : (
              <div className={styles.noUniversities}>
                <h3>No Universities Found</h3>
                <p>We couldn't find any universities offering this course at the moment. Please try a different course or contact our counselors for assistance.</p>
              </div>
            )}

            {/* Loan/EMI Partners Section */}
            {universities.length > 0 && (
              <div className={styles.loanPartnersSection}>
                <h3 className={styles.loanPartnersTitle}>Our Loan/EMI Partners</h3>
                <p className={styles.loanPartnersSubtitle}>Flexible financing options for your education</p>
                <div className={styles.loanPartnersGrid}>
                  <div className={styles.loanPartnerCard}>
                    <img 
                      src="/images/fibe.png" 
                      alt="Fibe" 
                      className={styles.loanPartnerLogo}
                    />
                  </div>
                  <div className={styles.loanPartnerCard}>
                    <img 
                      src="/images/liquiloans.png" 
                      alt="LiquiLoans" 
                      className={`${styles.loanPartnerLogo} ${styles.zoomedLogo}`}
                    />
                  </div>
                  <div className={styles.loanPartnerCard}>
                    <img 
                      src="/images/avanse.png" 
                      alt="Avanse" 
                      className={styles.loanPartnerLogo}
                    />
                  </div>
                  <div className={styles.loanPartnerCard}>
                    <img 
                      src="/images/propelld.png" 
                      alt="Propelld" 
                      className={`${styles.loanPartnerLogo} ${styles.zoomedLogo}`}
                    />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
      <Footer />

      {/* Contact Modal */}
      {showContactModal && (
        <div className={styles.modalOverlay} onClick={() => setShowContactModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setShowContactModal(false)}>
              ×
            </button>
            <div className={styles.modalHeader}>
              <h2>Consult with our expert counsellors</h2>
              <p>Fill in your details and we'll get back to you shortly</p>
            </div>
            <form onSubmit={handleContactFormSubmit} className={styles.contactForm}>
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
                    placeholder="Enter your full name"
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
                    placeholder="Enter your contact number"
                    pattern="[0-9]{10}"
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
                    placeholder="Enter your email"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={contactFormData.gender}
                    onChange={handleContactFormChange}
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
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={contactFormData.dob}
                    onChange={handleContactFormChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="qualification">Current Qualification *</label>
                  <select
                    id="qualification"
                    name="qualification"
                    value={contactFormData.qualification}
                    onChange={handleContactFormChange}
                    required
                  >
                    <option value="">Select Qualification</option>
                    <option value="10th">10th Pass</option>
                    <option value="12th">12th Pass</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={contactFormData.city}
                    onChange={handleContactFormChange}
                    required
                    placeholder="Enter your city"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={contactFormData.state}
                    onChange={handleContactFormChange}
                    required
                    placeholder="Enter your state"
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit Details
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
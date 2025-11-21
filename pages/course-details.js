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
          // Load the database from secure API endpoint
          const response = await fetch('/api/comprehensive-database');
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

        // Get normalized course type from the title (handle M.Com, M.Tech, B.Com patterns)
        const titleUpper = courseInfo.title.toUpperCase();
        
        // Extract base course type - check patterns first, then individual words
        let courseType = 'MBA'; // default
        
        // Check for BACHELOR patterns first (BBA, BCA, B.Com, B.Sc, B.Tech)
        if (titleUpper.includes('BACHELOR') && titleUpper.includes('BUSINESS')) {
          courseType = 'BBA';
        } else if (titleUpper.includes('BACHELOR') && titleUpper.includes('COMPUTER')) {
          courseType = 'BCA';
        } else if (titleUpper.includes('BACHELOR') && titleUpper.includes('COMMERCE')) {
          courseType = 'BCOM';
        } else if (titleUpper.includes('BACHELOR') && titleUpper.includes('SCIENCE')) {
          courseType = 'BSC';
        } else if (titleUpper.includes('BACHELOR') && titleUpper.includes('TECH')) {
          courseType = 'BTECH';
        } else if (titleUpper.includes('BACHELOR') && titleUpper.includes('ARTS')) {
          courseType = 'BA';
        }
        // Check for compound patterns (M.Com, B.Com, M.Tech, B.Tech, M.Sc, B.Sc)
        else if (titleUpper.includes('M.COM') || titleUpper.includes('MCOM') || (titleUpper.includes('M COM') && titleUpper.includes('COM'))) {
          courseType = 'MCOM';
        } else if (titleUpper.includes('B.COM') || titleUpper.includes('BCOM') || (titleUpper.includes('B COM') && titleUpper.includes('COM'))) {
          courseType = 'BCOM';
        } else if (titleUpper.includes('M.TECH') || titleUpper.includes('MTECH') || (titleUpper.includes('M TECH') && titleUpper.includes('TECH'))) {
          courseType = 'MTECH';
        } else if (titleUpper.includes('B.TECH') || titleUpper.includes('BTECH') || (titleUpper.includes('B TECH') && titleUpper.includes('TECH'))) {
          courseType = 'BTECH';
        } else if (titleUpper.includes('M.SC') || titleUpper.includes('MSC') || (titleUpper.includes('M SC') && titleUpper.includes('SC'))) {
          courseType = 'MSC';
        } else if (titleUpper.includes('B.SC') || titleUpper.includes('BSC') || (titleUpper.includes('B SC') && titleUpper.includes('SC'))) {
          courseType = 'BSC';
        } else {
          // Check for standard words
          const titleWords = titleUpper.replace(/[^\w\s]/g, '').split(' ');
          courseType = titleWords.find(word => 
            ['MBA', 'MCA', 'BBA', 'BCA', 'MA', 'BA', 'PHD', 'PGDM', 'MS'].includes(word)
          ) || 'MBA';
        }

        // Determine course level (UG/PG) - CRITICAL for filtering
        const ugCourses = ['BBA', 'BCA', 'BCOM', 'BSC', 'BTECH', 'BA'];
        const pgCourses = ['MBA', 'MCA', 'MCOM', 'MSC', 'MTECH', 'MA', 'PHD', 'PGDM', 'MS'];
        const isUGCourse = ugCourses.includes(courseType);
        const isPGCourse = pgCourses.includes(courseType);

        // Check if course is "Online" or "Distance" mode (both are online learning)
        const titleLower = courseInfo.title.toLowerCase();
        const categoryLower = courseInfo.category?.toLowerCase() || '';
        const isOnlineCourse = titleLower.includes('online') || 
                               titleLower.includes('distance') ||
                               categoryLower.includes('online') ||
                               categoryLower.includes('distance');

        console.log('🔍 COURSE ANALYSIS:', {
          courseType,
          isUGCourse,
          isPGCourse,
          isOnlineCourse,
          title: courseInfo.title,
          category: courseInfo.category
        });
        
        if (isUGCourse) {
          console.log('✅ This is a UG COURSE - IIT/IIM will be EXCLUDED');
        }
        if (isOnlineCourse) {
          console.log('✅ This is an ONLINE COURSE - IIT/IIM will be EXCLUDED');
        }

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

        console.log('🔒 Using server-side ranking API for security...');

        // 🔒 SERVER-SIDE RANKING - Algorithm is now hidden!
        const rankingResponse = await fetch('/api/rank-universities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            courseType: courseType,
            courseTitle: title || courseType,
            specialization: specializationKeywords.length > 0 ? specializationKeywords[0] : null,
            specializationKeywords: specializationKeywords,
            limit: 100 // Get more for comparison modal
          })
        });

        if (!rankingResponse.ok) {
          console.log('❌ Ranking API response not OK:', rankingResponse.status);
          throw new Error('Failed to fetch ranked universities');
        }

        const responseData = await rankingResponse.json();
        console.log('📦 API Response:', responseData);
        
        const { universities: sortedUniversities } = responseData;

        console.log('🔍 sortedUniversities type:', typeof sortedUniversities);
        console.log('🔍 sortedUniversities is array?', Array.isArray(sortedUniversities));
        console.log('🔍 sortedUniversities length:', sortedUniversities?.length);

        if (!sortedUniversities || sortedUniversities.length === 0) {
          console.log('⚠️ No universities returned from API');
          setUniversities([]);
          setLoading(false);
          return;
        }

        // Display top 7 on the course details page
        const top7Universities = sortedUniversities.slice(0, 7);
        
        console.log('✅ Got', sortedUniversities.length, 'ranked universities from server');
        console.log('📊 Top 7 universities for display:', top7Universities);
        console.log('📋 Top 7 names:', top7Universities.map(u => u.name));

        // Store top 7 for display
        console.log('💾 Setting universities state with', top7Universities.length, 'universities');
        setUniversities(top7Universities);
        
        // Store ALL matching universities in sessionStorage for the comparison modal
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
    
    // OPEN COMPARISON PAGE IMMEDIATELY - Animation shows when NEW page loads!
    console.log('🚀 OPENING COMPARE PAGE IMMEDIATELY!');
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

  // Map university names to their page URLs
  const getUniversityPageURL = (universityName) => {
    const nameToURLMap = {
      'Amity University': '/university/amity-university',
      'Manipal University': '/university/manipal-university',
      'NMIMS University': '/university/nmims',
      'MIT School of Distance Education Pune': '/university/mit-university',
      'DY Patil University Navi Mumbai': '/university/dy-patil-navi-mumbai',
      'DY Patil University Pune': '/university/dy-patil-pune',
      'Vivekananda Global': '/university/vivekananda-global',
      'Bharathiar University (Distance Education)': '/university/bharathiar-university-online',
      'Bharathidasan University (Distance Education)': '/university/bharathidasan-university-distance-education',
      'Annamalai (Distance Education)': '/university/annamalai-university',
      'Anna University (Distance Education)': '/university/anna-university',
      'Andhra University (Distance Education)': '/university/andhra-university',
      'ANUCDE Acharya Nagarjuna (Distance Education)': '/university/anucde-acharya-nagarjuna-university',
      'BIHER Bharath Institute': '/university/biher-bharath-institute',
      'BITS Pilani WILP': '/university/bits-pilani-wilp',
      'BIMTECH Greater Noida': '/university/bimtech-greater-noida',
      'Birchwood University': '/university/birchwood-university',
      'Chandigarh University (Online)': '/university/chandigarh-university-online',
      'Chitkara University (Online)': '/university/chitkara-university-online',
      'Atlas SkillTech': '/university/atlas-skilltech',
      'Amrita University': '/university/amrita-university',
      'DDU Gorakhpur University': '/university/ddu-gorakhpur-university',
      'Deakin University Melbourne': '/university/deakin-university-melbourne',
      'Dibrugarh University (Distance Education)': '/university/dibrugarh-university-distance-education',
      'DU SOL': '/university/du-sol-school-of-open-learning',
      'GLA University': '/university/gla-university-online',
      // Add more mappings as needed
    };
    
    return nameToURLMap[universityName] || null;
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

            {/* REMOVED LOADING MESSAGE - Animation handles the loading state */}
            {universities.length > 0 ? (
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
                      onClick={() => {
                        const universityURL = getUniversityPageURL(uni.name);
                        if (universityURL) {
                          window.open(universityURL, '_blank');
                        } else {
                          console.log('No URL mapped for university:', uni.name);
                        }
                      }}
                      style={{ cursor: getUniversityPageURL(uni.name) ? 'pointer' : 'default' }}
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
                      poster="/images/testimonials/mba-thumb.jpg"
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
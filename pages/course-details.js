import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styles from '../styles/CourseDetails.module.css';
import coursesData from './courseData';

export default function CourseDetails() {
  const router = useRouter();
  const { courseId, courseName, displayName } = router.query;
  const [universities, setUniversities] = useState([]);
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const [loading, setLoading] = useState(true);

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
        // Import the comprehensive database
        const module = await import('../public/assets/js/comprehensive-unified-database-COMPLETE.js');
        
        // Access universityDatabase from module.default (CommonJS export)
        const uniDatabase = module.default?.universityDatabase || module.universityDatabase;

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

        // Get normalized course type from the title (handle M.Com, M.Tech patterns)
        // Instead of generic matching, use multiple keywords for better specificity
        const titleWords = courseInfo.title.toUpperCase().replace(/[^\w\s]/g, '').split(' ');
        
        // Extract base course type
        let courseType = titleWords.find(word => 
          ['MBA', 'MCA', 'BBA', 'BCA', 'MCOM', 'BCOM', 'MSC', 'BSC', 'MTECH', 'BTECH', 'MA', 'BA', 'PHD', 'PGDM', 'MS'].includes(word)
        ) || 'MBA';

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
        
        let matchingUniversities = uniDatabase
          .filter(uni => {
            const isOverseas = overseasKeywords.some(keyword => 
              uni.location?.includes(keyword)
            );

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
            const hasMatch = uni.courses?.some(course => {
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
            fees: typeof uni.fees === 'object' && uni.fees[courseType]
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
            establishedYear: uni.establishedYear
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
            const courseMatches = uni.courses.filter(c => {
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
        
        // Sort and select top universities
        matchingUniversities = matchingUniversities
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
          .slice(0, 5)
          .map(({ _specializationScore, _randomScore, ...uni }) => uni); // Remove temp scores

        console.log('Top 5 universities for', actualCourseId, ':', matchingUniversities.map(u => u.name));

        setUniversities(matchingUniversities);
        setLoading(false);
      } catch (error) {
        console.error('Error loading universities:', error);
        setLoading(false);
      }
    }

    fetchUniversities();
  }, [courseId, courseName]);

  const handleCompareToggle = (universityName) => {
    setSelectedForCompare(prev => {
      if (prev.includes(universityName)) {
        return prev.filter(name => name !== universityName);
      }
      if (prev.length < 3) {
        return [...prev, universityName];
      }
      alert('You can compare maximum 3 universities at a time');
      return prev;
    });
  };

  // Get university logo path
  const getUniversityLogo = (universityName) => {
    const logoMap = {
      'Amity University': 'Amity University.png',
      'Amrita University': 'Amrita University.png',
      'Atlas SkillTech University': 'Atlas Skilltech University.png',
      'BIMTECH': 'BIMTECH University.png',
      'Birchwood University': 'Birchwood University Online.png',
      'BITS Pilani': 'BITS Pilani.png',
      'Chandigarh University': 'Chandigarh University.png',
      'Chitkara University': 'Chitkara University.png',
      'D.Y. Patil University': 'DY Patil University.png',
      'DPU': 'DPU.png',
      'Galgotias University': 'Galgotia University.png',
      'GLA University': 'GLA University.png',
      'Graphic Era University': 'Graphic Era University.png',
      'IIIT Bangalore': 'IIIT Bangalore.png',
      'IIM Indore': 'IIM Indore.png',
      'IIM Kozhikode': 'IIM Kozhikode.png',
      'IIT Guwahati': 'IIT Guwahati.png',
      'Jain University': 'Jain University.png',
      'Kalinga University': 'Kalinga University.png',
      'KIIT University': 'KIIT University.png',
      'Lovely Professional University': 'LPU University.png',
      'Manipal University': 'Manipal University.png',
      'NMIMS': 'NMIMS University.png',
      'O.P. Jindal University': 'O P Jindal University.png',
      'Sharda University': 'Sharda University.png',
      'Shoolini University': 'Shoolini University.png',
      'Sikkim Manipal University': 'Sikkim Manipal University.png',
      'SRM University': 'SRM University.png',
      'Symbiosis': 'Symbiosis SCDL.png',
      'UPES': 'UPES University.png',
      'Uttaranchal University': 'Uttaranchal University.png',
      'Vignan University': 'Vignans University.png',
    };
    
    for (const [key, filename] of Object.entries(logoMap)) {
      if (universityName.includes(key) || key.includes(universityName.split('(')[0].trim())) {
        return `/images/universities/${filename}`;
      }
    }
    
    return null;
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
      <Header courseTitle={courseTitle} />
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
                  
                  const feesText = uni.fees.min && uni.fees.max && uni.fees.min !== uni.fees.max
                    ? `${formatFee(uni.fees.min)} - ${formatFee(uni.fees.max)}`
                    : `${formatFee(uni.fees.min || uni.fees.max || 50000)}`;

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
                          background: selectedForCompare.includes(uni.name) ? '#10b981' : '#0074d9'
                        }}
                      >
                        {selectedForCompare.includes(uni.name) ? '✓ Added to compare' : '+ Add to compare'}
                      </button>

                      {/* Card Layout: Logo on Left, Content on Right */}
                      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        
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

                        {/* Right Content */}
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
                                {uni.accreditation ? (
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
                      autoPlay
                      loop
                      muted
                      playsInline
                      onClick={(e) => e.target.play()}
                    >
                      <source src="/videos/Global MBA-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div 
                      className={styles.playOverlay}
                      onClick={(e) => {
                        const video = e.target.closest(`.${styles.videoThumbnailContainer}`).querySelector('video');
                        if (video) {
                          video.muted = false;
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
    </>
  );
}
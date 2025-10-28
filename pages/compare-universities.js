import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styles from '../styles/CompareUniversities.module.css';
import universityLogoMap from '../utils/universityLogoMap';

export default function CompareUniversities() {
  const router = useRouter();
  const [universities, setUniversities] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [loading, setLoading] = useState(true);
  const [dataReady, setDataReady] = useState(false);
  
  // New state for interactive comparison
  const [selectedUniversities, setSelectedUniversities] = useState([null, null, null, null, null]); // 5 slots
  const [availableUniversities, setAvailableUniversities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentSlotIndex, setCurrentSlotIndex] = useState(null);
  const [showComparison, setShowComparison] = useState(false); // Hide comparison table by default
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState(''); // State filter

  // Map display course names to database keys
  const getCourseKey = (displayName) => {
    if (!displayName) return null;
    
    console.log('🔍 getCourseKey called with:', displayName);
    
    const normalizedName = displayName.toLowerCase().trim();
    
    // Direct mappings for common course variations
    const courseMap = {
      'master of commerce': 'M.Com',
      'm.com': 'M.Com',
      'mcom': 'M.Com',
      'master of business administration': 'MBA',
      'mba': 'MBA',
      'master of computer applications': 'MCA',
      'mca': 'MCA',
      'bachelor of business administration': 'BBA',
      'bba': 'BBA',
      'bachelor of computer applications': 'BCA',
      'bca': 'BCA',
      'bachelor of commerce': 'B.Com',
      'b.com': 'B.Com',
      'bcom': 'B.Com',
      'bachelor of arts': 'BA',
      'ba': 'BA',
      'master of arts': 'MA',
      'ma': 'MA',
      'bachelor of technology': 'B.Tech',
      'b.tech': 'B.Tech',
      'btech': 'B.Tech',
      'master of technology': 'M.Tech',
      'm.tech': 'M.Tech',
      'mtech': 'M.Tech',
      'bachelor of science': 'B.Sc',
      'b.sc': 'B.Sc',
      'bsc': 'B.Sc',
      'master of science': 'M.Sc',
      'm.sc': 'M.Sc',
      'msc': 'M.Sc',
      'bachelor of education': 'B.Ed',
      'b.ed': 'B.Ed',
      'bed': 'B.Ed',
      'master of education': 'M.Ed',
      'm.ed': 'M.Ed',
      'med': 'M.Ed',
      'doctor of philosophy': 'PhD',
      'phd': 'PhD',
      'ph.d': 'PhD',
      'post graduate diploma in management': 'PGDM',
      'pgdm': 'PGDM',
      'executive mba': 'Executive MBA',
      'executive education': 'Executive Education',
      'executive program': 'Executive MBA',
      'executive': 'Executive MBA'
    };
    
    // Try exact match first
    if (courseMap[normalizedName]) {
      console.log('✅ Exact match found:', courseMap[normalizedName]);
      return courseMap[normalizedName];
    }
    
    // Handle "X in Y" pattern - extract the base degree
    // Example: "M.Com in Advanced Accounting" -> "M.Com"
    // Example: "Executive Program in HR Analytics" -> "Executive MBA"
    const inPattern = displayName.match(/^([A-Za-z\s]+)(?:\s+in\s+|$)/i);
    if (inPattern) {
      const baseDegree = inPattern[1].toLowerCase().trim();
      if (courseMap[baseDegree]) {
        console.log('✅ "in" pattern match:', courseMap[baseDegree]);
        return courseMap[baseDegree];
      }
    }
    
    // Try to extract degree abbreviation from start of string
    // Match patterns like "MBA", "M.Com", "B.Tech" at the beginning
    const degreePattern = displayName.match(/^([A-Z]\.?[A-Za-z\.]+)/);
    if (degreePattern) {
      const degree = degreePattern[1].toLowerCase().replace(/\s+/g, '').trim();
      if (courseMap[degree]) {
        console.log('✅ Degree pattern match:', courseMap[degree]);
        return courseMap[degree];
      }
    }
    
    // Check if the display name contains any of the keys
    for (const [key, value] of Object.entries(courseMap)) {
      if (normalizedName.includes(key)) {
        console.log('✅ Contains match:', value);
        return value;
      }
    }
    
    // Try to extract abbreviation from display name
    const words = displayName.split(' ');
    const abbreviation = words.map(w => w[0]).join('').toUpperCase();
    
    // Check if abbreviation exists in university courses
    if (universities.length > 0 && universities[0].courses) {
      const matchingCourse = universities[0].courses.find(c => 
        c.toUpperCase() === abbreviation || c.toUpperCase().replace(/\./g, '') === abbreviation
      );
      if (matchingCourse) {
        console.log('✅ Abbreviation match:', matchingCourse);
        return matchingCourse;
      }
    }
    
    console.log('⚠️ No match found, returning original:', displayName);
    // Fallback: return original name
    return displayName;
  };

  // Extract duration for the selected course from multi-course duration string
  const extractDurationForCourse = (durationString, courseKey) => {
    if (!durationString || durationString === 'N/A') return 'N/A';
    if (!courseKey) return durationString;
    
    // Determine course level from courseKey
    let level = null;
    
    // PG courses
    if (['MBA', 'MCA', 'M.Com', 'MA', 'M.Tech', 'M.Sc', 'M.Ed', 'LLM', 'MJMC', 'PG Diploma', 'PGDM', 'Executive MBA'].includes(courseKey)) {
      level = 'PG';
    } 
    // UG courses
    else if (['BBA', 'BCA', 'B.Com', 'BA', 'B.Tech', 'B.Sc', 'B.Ed', 'LLB', 'BJMC'].includes(courseKey)) {
      level = 'UG';
    } 
    // PhD
    else if (courseKey === 'PhD' || courseKey === 'Ph.D') {
      level = 'PhD';
    }
    // Advanced Diploma
    else if (courseKey === 'Adv Diploma') {
      level = 'Adv Diploma';
    }
    // Skilling Certificate
    else if (courseKey === 'Certificate' || courseKey.toLowerCase().includes('skilling')) {
      level = 'Skilling Cert';
    }
    // Diploma
    else if (courseKey === 'Diploma') {
      level = 'Diploma';
    }
    
    // If no level determined, return original string
    if (!level) return durationString;
    
    // Extract matching portion: "PG:2 years" from "PG:2 years / UG:3 years / ..."
    const regex = new RegExp(`${level}:([^/]+)`, 'i');
    const match = durationString.match(regex);
    
    if (match && match[1]) {
      return match[1].trim();
    }
    
    // Fallback: return original string if no match found
    return durationString;
  };

  useEffect(() => {
    // Get data from session storage
    const selectedUnivs = sessionStorage.getItem('compareUniversities');
    const course = sessionStorage.getItem('compareCourse');
    const availableUnivs = sessionStorage.getItem('availableUniversities');
    
    console.log('🔍 RAW sessionStorage values:', { 
      selectedUnivs: selectedUnivs ? 'exists' : 'null', 
      course: course,
      availableUnivs: availableUnivs ? 'exists' : 'null'
    });
    
    // Load initially selected university (first one added)
    if (selectedUnivs) {
      const parsedUnivs = JSON.parse(selectedUnivs);
      console.log('🔍 Initial university from sessionStorage:', parsedUnivs);
      
      // Set first university in slot 0
      const newSlots = [null, null, null, null, null];
      if (parsedUnivs.length > 0) {
        newSlots[0] = parsedUnivs[0];
      }
      setSelectedUniversities(newSlots);
      setUniversities(parsedUnivs); // Keep for backward compatibility
    }
    
    // Load all available universities for the modal
    if (availableUnivs) {
      const parsedAvailable = JSON.parse(availableUnivs);
      console.log('🔍 Available universities loaded:', parsedAvailable.length);
      setAvailableUniversities(parsedAvailable);
    }
    
    if (course && course.trim() !== '') {
      console.log('🔍 Course name from sessionStorage:', course);
      setCourseName(course);
      setLoading(false);
      setTimeout(() => setDataReady(true), 0);
    } else {
      console.error('❌ NO COURSE NAME IN SESSION STORAGE!');
      setLoading(false);
    }
  }, []);
  
  // Debug: Log courseName whenever it changes
  useEffect(() => {
    console.log('🔍 courseName state updated:', courseName, '(length:', courseName?.length, ')');
    // Force component to wait until courseName is set
    if (courseName && courseName.trim() !== '') {
      console.log('✅ courseName is now set, component will re-render with correct data');
    }
  }, [courseName]);

  // Comparison criteria with renamed labels
  const comparisonCriteria = [
    { key: 'nirfRanking', label: 'NIRF Ranking' },
    { key: 'wesApproval', label: 'WES International Approval' },
    { key: 'approvals', label: 'Accreditations' },
    { key: 'eligibility', label: 'Eligibility Criteria' },
    { key: 'duration', label: 'Program Duration' },
    { key: 'educationMode', label: 'Learning Mode' },
    { key: 'onlineClasses', label: 'Live Sessions' },
    { key: 'studentsRating', label: 'Student Ratings' },
    { key: 'establishedYear', label: 'Year of Establishment' },
    { key: 'semesterFees', label: 'Semester Fees' }
  ];

  const getUniversityLogo = (name) => {
    try {
      // Check exact mapping first
      if (universityLogoMap[name]) {
        return `/images/universities/${universityLogoMap[name]}`;
      }
      
      // Try to find partial match (case-insensitive)
      const nameLower = name.toLowerCase();
      for (const [dbName, logoFile] of Object.entries(universityLogoMap)) {
        if (dbName.toLowerCase() === nameLower) {
          return `/images/universities/${logoFile}`;
        }
      }
      
      // Try fuzzy match - extract key words and compare
      const skipWords = ['university', 'online', 'distance', 'education', 'the', 'of'];
      const nameWords = name.toLowerCase()
        .replace(/[()]/g, '')
        .split(/\s+/)
        .filter(w => w.length > 2 && !skipWords.includes(w));
      
      for (const [dbName, logoFile] of Object.entries(universityLogoMap)) {
        const dbWords = dbName.toLowerCase()
          .replace(/[()]/g, '')
          .split(/\s+/)
          .filter(w => w.length > 2 && !skipWords.includes(w));
        
        // Check if at least 60% of words match
        const matches = nameWords.filter(nw => 
          dbWords.some(dw => dw.includes(nw) || nw.includes(dw))
        );
        
        if (matches.length >= Math.ceil(nameWords.length * 0.6)) {
          console.log(`📸 Logo match found: "${name}" → "${dbName}" → ${logoFile}`);
          return `/images/universities/${logoFile}`;
        }
      }
      
      console.warn(`⚠️ No logo found for: ${name}`);
      return null;
    } catch (error) {
      console.error('Error getting university logo:', error);
      return null;
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .filter(word => word.length > 0)
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Handler to open modal and select university for a specific slot
  const handleAddToSlot = (slotIndex) => {
    setCurrentSlotIndex(slotIndex);
    setShowModal(true);
    setSearchTerm('');
    setSelectedState(''); // Reset state filter
  };

  // Handler to select a university from modal
  const handleSelectUniversity = (university) => {
    // Check if university is already selected in another slot
    const isDuplicate = selectedUniversities.some(uni => uni?.name === university.name);
    if (isDuplicate) {
      alert('This university is already selected for comparison');
      return;
    }

    // Add to current slot
    const newSlots = [...selectedUniversities];
    newSlots[currentSlotIndex] = university;
    setSelectedUniversities(newSlots);
    
    // Update universities array for backward compatibility
    const filledUniversities = newSlots.filter(uni => uni !== null);
    setUniversities(filledUniversities);
    
    // Close modal
    setShowModal(false);
    setCurrentSlotIndex(null);
  };

  // Handler to remove a university from a slot
  const handleRemoveFromSlot = (slotIndex) => {
    const newSlots = [...selectedUniversities];
    newSlots[slotIndex] = null;
    setSelectedUniversities(newSlots);
    
    // Update universities array
    const filledUniversities = newSlots.filter(uni => uni !== null);
    setUniversities(filledUniversities);
  };

  // Extract unique states from available universities
  const uniqueStates = [...new Set(availableUniversities.map(uni => {
    // Extract state from location string (e.g., "Mumbai, Maharashtra" -> "Maharashtra")
    const location = uni.location || '';
    const parts = location.split(',').map(p => p.trim());
    return parts[parts.length - 1]; // Get last part (usually the state)
  }).filter(Boolean))].sort();

  // Filter available universities based on search and state - SHOW ALL UNIVERSITIES
  const filteredUniversities = availableUniversities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !selectedState || uni.location?.includes(selectedState);
    return matchesSearch && matchesState;
  });

  const formatData = (uni, key) => {
    // Debug: Log courseName to verify it's available
    if (key === 'duration' || key === 'semesterFees') {
      console.log(`🔍 formatData called for ${key}:`, { 
        courseName, 
        courseNameLength: courseName?.length,
        isEmpty: courseName === '',
        key, 
        uniName: uni.name 
      });
    }
    
    switch(key) {
      case 'nirfRanking':
        return uni.nirfRanking ? `Rank ${uni.nirfRanking}` : 'Not Ranked';
      
      case 'approvals':
        return uni.approvals && uni.approvals.length > 0 
          ? uni.approvals.filter(a => a && a.trim() !== '').join(', ') 
          : 'N/A';
      
      case 'wesApproval':
        // Check if WES is in the approvals array
        const hasWES = uni.approvals && uni.approvals.some(approval => 
          approval.toUpperCase().includes('WES')
        );
        return hasWES ? 'Yes' : 'No';
      
      case 'eligibility':
        return uni.eligibility || 'Contact University';
      
      case 'duration':
        console.log('🔍 Duration check:', { 
          uniName: uni.name, 
          duration: uni.duration,
          courseNameFromState: courseName,
          courseNameType: typeof courseName,
          courseNameLength: courseName?.length,
          isEmptyString: courseName === '',
          isFalsy: !courseName
        });
        
        // CRITICAL CHECK: If courseName is empty, return raw duration
        if (!courseName || courseName === '') {
          console.error('❌ DURATION: courseName is empty! Returning raw duration');
          return uni.duration || 'N/A';
        }
        
        const courseKey = getCourseKey(courseName);
        console.log('🔍 Course key extracted:', { courseName, courseKey });
        
        const extractedDuration = extractDurationForCourse(uni.duration, courseKey);
        console.log('🔍 Duration extracted:', { courseKey, extractedDuration, originalDuration: uni.duration });
        return extractedDuration;
      
      case 'educationMode':
        // Use the mode array from database
        return uni.mode && uni.mode.length > 0 
          ? uni.mode.join(' + ') 
          : 'Online';
      
      case 'onlineClasses':
        console.log('🔍 Online Classes check:', { uniName: uni.name, onlineClasses: uni.onlineClasses });
        // It's a boolean in the database
        return uni.onlineClasses === true ? 'Yes' : 'No';
      
      case 'studentsRating':
        console.log('🔍 Students Rating check:', { uniName: uni.name, studentsRating: uni.studentsRating });
        return uni.studentsRating || 'N/A';
      
      case 'semesterFees':
        console.log('🔍 Semester Fees START:', {
          hasFeesObject: !!uni.fees,
          courseName,
          courseNameEmpty: courseName === '',
          courseNameLength: courseName?.length
        });
        
        // Calculate exact semester fees from total fees
        if (!courseName || courseName === '') {
          console.error('❌ SEMESTER FEES: courseName is empty!');
          return 'N/A';
        }
        
        if (uni.fees && courseName) {
          // Get the proper course key from the database
          const courseKey = getCourseKey(courseName);
          const courseFee = uni.fees[courseKey];
          console.log('🔍 Semester Fees check:', { 
            uniName: uni.name, 
            courseName, 
            courseKey, 
            courseFee, 
            feesObjectKeys: Object.keys(uni.fees || {}),
            allFees: uni.fees 
          });
          
          if (courseFee && typeof courseFee === 'number') {
            const semesterFee = Math.round(courseFee / 4); // 2 years = 4 semesters
            return `₹${semesterFee.toLocaleString('en-IN')}`;
          }
        }
        console.log('🔍 Semester Fees - No data:', { 
          hasFeesObject: !!uni.fees, 
          courseName,
          courseKey: getCourseKey(courseName)
        });
        return 'N/A';
      
      case 'establishedYear':
        return uni.establishedYear || uni.establishmentDate || 'N/A';
      
      default:
        return 'N/A';
    }
  };

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.loading}>Loading comparison...</div>
        <Footer />
      </div>
    );
  }

  // Wait for courseName to be loaded from sessionStorage
  if (!courseName || courseName.trim() === '' || !dataReady) {
    return (
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.loading}>Loading course data...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        {/* University Selection Slots */}
        <div className={styles.selectionContainer}>
          <h2 className={styles.selectionTitle}>{courseName}</h2>
          <p className={styles.selectionSubtitle}>Select up to 5 universities to compare</p>
          
          {/* Compare Button - Moved to top */}
          <div className={styles.compareButtonContainer}>
            <button 
              className={styles.mainCompareButton}
              disabled={selectedUniversities.filter(uni => uni !== null).length < 2}
              onClick={() => setShowComparison(true)}
            >
              Compare Universities ({selectedUniversities.filter(uni => uni !== null).length})
            </button>
          </div>
          
          <div className={styles.slotsContainer}>
            {selectedUniversities.map((uni, index) => (
              <div key={index} className={styles.slot}>
                {uni ? (
                  // Filled slot with university
                  <div className={styles.filledSlot}>
                    <button 
                      className={styles.removeButton}
                      onClick={() => handleRemoveFromSlot(index)}
                      title="Remove university"
                    >
                      ✕
                    </button>
                    <div className={styles.slotLogoContainer}>
                      {getUniversityLogo(uni.name) ? (
                        <img 
                          src={getUniversityLogo(uni.name)} 
                          alt={uni.name}
                          className={styles.slotLogo}
                        />
                      ) : (
                        <div className={styles.slotInitials}>
                          {getInitials(uni.name)}
                        </div>
                      )}
                    </div>
                    <div className={styles.slotName}>{uni.name}</div>
                  </div>
                ) : (
                  // Empty slot with "Add to Compare" button
                  <div className={styles.emptySlot} onClick={() => handleAddToSlot(index)}>
                    <div className={styles.addIcon}>+</div>
                    <div className={styles.addText}>Add to Compare</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal for selecting universities */}
        {showModal && (
          <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3>Select University</h3>
                <button className={styles.modalClose} onClick={() => setShowModal(false)}>✕</button>
              </div>
              
              <div className={styles.modalSearch}>
                <input 
                  type="text"
                  placeholder="Search universities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
                
                <select 
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className={styles.stateFilter}
                >
                  <option value="">All States</option>
                  {uniqueStates.map((state, idx) => (
                    <option key={idx} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className={styles.modalList}>
                {filteredUniversities.length > 0 ? (
                  filteredUniversities.map((uni, index) => {
                    const isSelected = selectedUniversities.some(selected => selected?.name === uni.name);
                    return (
                      <div 
                        key={index} 
                        className={`${styles.modalItem} ${isSelected ? styles.modalItemSelected : ''}`}
                        onClick={() => handleSelectUniversity(uni)}
                        style={{ cursor: isSelected ? 'not-allowed' : 'pointer' }}
                      >
                        <div className={styles.modalItemLogo}>
                          {getUniversityLogo(uni.name) ? (
                            <img 
                              src={getUniversityLogo(uni.name)} 
                              alt={uni.name}
                              className={styles.modalItemLogoImg}
                            />
                          ) : (
                            <div className={styles.modalItemInitials}>
                              {getInitials(uni.name)}
                            </div>
                          )}
                        </div>
                        <div className={styles.modalItemInfo}>
                          <div className={styles.modalItemName}>{uni.name}</div>
                          <div className={styles.modalItemLocation}>{uni.location}</div>
                        </div>
                        {isSelected && <span className={styles.selectedBadge}>✓ Already Selected</span>}
                      </div>
                    );
                  })
                ) : (
                  <div className={styles.noResults}>No universities found</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table - Only shown after clicking Compare button */}
        {showComparison && universities.length >= 2 && (
          <div className={styles.comparisonContainer}>
          
          {/* Header Row - University Logos and Names (NO BLUE BACKGROUND) */}
          <div className={styles.headerRow}>
            <div className={styles.labelColumn}>
              <div className={styles.labelHeader}>Comparison Criteria</div>
            </div>
            
            {universities.map((uni, index) => (
              <div key={index} className={styles.universityColumn}>
                <div className={styles.universityName}>{uni.name}</div>
              </div>
            ))}
          </div>

          {/* Comparison Rows */}
          {comparisonCriteria.map((criterion, idx) => (
            <div key={idx} className={styles.comparisonRow}>
              <div className={styles.labelColumn}>
                <div className={styles.criterionLabel}>{criterion.label}</div>
              </div>
              
              {universities.map((uni, uniIdx) => (
                <div key={uniIdx} className={styles.universityColumn}>
                  <div className={styles.dataCell}>
                    {formatData(uni, criterion.key)}
                  </div>
                </div>
              ))}
            </div>
          ))}

        </div>
        )}

        {/* Loan/EMI Partners Section */}
        <div className={styles.loanPartnersSection}>
          <h3 className={styles.loanPartnersTitle}>Our Loan/EMI Partners</h3>
          <p className={styles.loanPartnersSubtitle}>Flexible financing options for your education</p>
          <div className={styles.loanPartnersGrid}>
            <div className={styles.loanPartnerCard}>
              <img src="/images/fibe.png" alt="Fibe" className={styles.loanPartnerLogo} />
            </div>
            <div className={styles.loanPartnerCard}>
              <img src="/images/liquiloans.png" alt="LiquiLoans" className={`${styles.loanPartnerLogo} ${styles.zoomedLogo}`} />
            </div>
            <div className={styles.loanPartnerCard}>
              <img src="/images/avanse.png" alt="Avanse" className={styles.loanPartnerLogo} />
            </div>
            <div className={styles.loanPartnerCard}>
              <img src="/images/propelld.png" alt="Propelld" className={`${styles.loanPartnerLogo} ${styles.zoomedLogo}`} />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

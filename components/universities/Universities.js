import React, { useState, useEffect } from 'react';
import styles from './Universities.module.css';
import { universityLogoMap, getUniversityLogo } from '../../utils/universityLogoMap';

export default function Universities() {
  const [showAll, setShowAll] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUniversities() {
      try {
        // Import the comprehensive database from public folder
        // In Next.js, we need to load it via script tag and wait for it
        let uniDatabase;
        
        // Function to check if database is loaded
        const checkDatabase = () => {
          return new Promise((resolve) => {
            const checkInterval = setInterval(() => {
              if (typeof window !== 'undefined' && window.universityDatabase) {
                clearInterval(checkInterval);
                resolve(window.universityDatabase);
              }
            }, 100); // Check every 100ms
            
            // Timeout after 10 seconds
            setTimeout(() => {
              clearInterval(checkInterval);
              resolve(null);
            }, 10000);
          });
        };
        
        // If already loaded, use it
        if (typeof window !== 'undefined' && window.universityDatabase) {
          uniDatabase = window.universityDatabase;
          console.log('✅ Loaded from window.universityDatabase (already available)');
        } else {
          // Load the script dynamically if not already loaded
          const existingScript = document.querySelector('script[src="/assets/js/comprehensive-unified-database-COMPLETE.js"]');
          
          if (!existingScript) {
            const script = document.createElement('script');
            script.src = '/assets/js/comprehensive-unified-database-COMPLETE.js';
            script.async = true;
            document.head.appendChild(script);
          }
          
          // Wait for database to be available
          console.log('⏳ Waiting for database to load...');
          uniDatabase = await checkDatabase();
        }

        if (!uniDatabase || !Array.isArray(uniDatabase)) {
          console.error('❌ University database is empty or invalid');
          setLoading(false);
          return;
        }
        
        console.log(`📚 Total universities in database: ${uniDatabase.length}`);

        // Universities to exclude from carousel (duplicates)
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
        const filteredDatabase = uniDatabase.filter(uni => {
          const nameLower = uni.name.toLowerCase();
          return !excludeUniversities.some(excluded => 
            nameLower.includes(excluded.toLowerCase())
          );
        });

        // Add new universities for carousel (only those NOT in database)
        const newUniversities = [
          {
            id: 'new-2',
            name: 'University of Hyderabad',
            courses: ['MBA', 'MCA', 'M.Sc', 'M.A'],
            fees: { 'MBA': 45000, 'MCA': 40000, 'M.Sc': 35000, 'M.A': 30000 },
            website: 'https://www.uohyd.ac.in'
          },
          {
            id: 'new-3',
            name: 'Harvard Business School',
            courses: ['MBA', 'Executive Education'],
            fees: { 'MBA': 500000, 'Executive Education': 300000 },
            website: 'https://www.hbs.edu'
          },
          {
            id: 'new-4',
            name: 'INSEAD Business School',
            courses: ['MBA', 'Executive MBA', 'PhD'],
            fees: { 'MBA': 450000, 'Executive MBA': 400000, 'PhD': 350000 },
            website: 'https://www.insead.edu'
          },
          {
            id: 'new-5',
            name: 'London Business School',
            courses: ['MBA', 'Masters in Finance', 'Executive MBA'],
            fees: { 'MBA': 480000, 'Masters in Finance': 420000, 'Executive MBA': 450000 },
            website: 'https://www.london.edu'
          },
          {
            id: 'new-6',
            name: 'Melbourne Business School',
            courses: ['MBA', 'Executive MBA', 'Masters'],
            fees: { 'MBA': 400000, 'Executive MBA': 380000, 'Masters': 350000 },
            website: 'https://www.mbs.edu'
          }
        ];

        // Combine filtered database with new universities
        const combinedDatabase = [...filteredDatabase, ...newUniversities];

        // Transform database format to component format
        const transformedUniversities = combinedDatabase.map((uni, index) => {
          // Get the logo path using the universityLogoMap (already returns full path)
          const logoPath = getUniversityLogo(uni.name);
          
          // Log universities with potential logo issues
          if (!logoPath || logoPath.includes('default-university-logo')) {
            console.warn(`No logo mapping found for: ${uni.name}`);
          }
          
          // Special handling for universities with detail pages - link to custom pages
          let linkUrl = uni.website || '#';
          const uniName = uni.name ? uni.name.toLowerCase() : '';
          const uniId = uni.id || '';
          
          if (uniName.includes('amity university') || uniId === 'amity-university-distance-education') {
            linkUrl = '/university/amity-university';
          } else if (uniName.includes('manipal') || uniId === 'manipal-university-online') {
            linkUrl = '/university/manipal-university';
          } else if (uniName.includes('nmims') || uniId === 'nmims-online') {
            linkUrl = '/university/nmims';
          } else if ((uniName.includes('d.y. patil') || uniName.includes('dy patil')) && uniName.includes('navi mumbai')) {
            linkUrl = '/university/dy-patil-navi-mumbai';
          } else if (uniId === 'dy-patil-university-online' || uniId.includes('dy-patil-vidyapeeth')) {
            linkUrl = '/university/dy-patil-pune';
          } else if ((uniName.includes('d.y. patil') || uniName.includes('dy patil')) && (uniName.includes('pune') || uniName.includes('vidyapeeth'))) {
            linkUrl = '/university/dy-patil-pune';
          } else if (uniName.includes('vivekananda global') || uniId === 'vivekananda-global-university-online') {
            linkUrl = '/university/vivekananda-global';
          } else if (uniName.includes('mit') && uniName.includes('pune')) {
            linkUrl = '/university/mit-university';
          } else if (uniName.includes('mit university')) {
            linkUrl = '/university/mit-university';
          }
          
          // Get accurate course count from database
          let courseCount = '0 Courses';
          if (uni.courses) {
            if (Array.isArray(uni.courses)) {
              courseCount = `${uni.courses.length} Courses`;
            } else if (typeof uni.courses === 'object') {
              const numCourses = Object.keys(uni.courses).length;
              courseCount = `${numCourses} Course${numCourses !== 1 ? 's' : ''}`;
            }
          }
          
          return {
            id: index + 1,
            name: uni.name,
            logo: logoPath, // getUniversityLogo already returns full path
            courses: courseCount,
            link: linkUrl
          };
        });

        // Priority universities to display first
        const priorityUniversityNames = [
          'Amity University',
          'Manipal',
          'NMIMS',
          'D.Y. Patil',
          'Vivekananda Global',
          'MIT'
        ];

        // Sort universities to show priority ones first
        const sortedUniversities = transformedUniversities.sort((a, b) => {
          const aIsPriority = priorityUniversityNames.some(name => 
            a.name.toLowerCase().includes(name.toLowerCase())
          );
          const bIsPriority = priorityUniversityNames.some(name => 
            b.name.toLowerCase().includes(name.toLowerCase())
          );
          
          if (aIsPriority && !bIsPriority) return -1;
          if (!aIsPriority && bIsPriority) return 1;
          return 0;
        });

        setUniversities(sortedUniversities);
        setLoading(false);
        console.log(`Loaded ${sortedUniversities.length} universities from database`);

        setUniversities(transformedUniversities);
        setLoading(false);
        console.log(`Loaded ${transformedUniversities.length} universities from database`);
      } catch (error) {
        console.error('Error loading universities:', error);
        setLoading(false);
      }
    }

    loadUniversities();
  }, []);

  const displayedUniversities = showAll ? universities : universities.slice(0, 16);

  if (loading) {
    return (
      <section className={styles.universitiesSection}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Loading universities...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="universities" className={styles.universitiesSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Discover 100+ Top Universities & Compare Across 30+ Key Parameters
        </h2>
        
        <div className={styles.universitiesGrid}>
          {displayedUniversities.map(university => (
            <a 
              href={university.link} 
              key={university.id}
              className={styles.universityCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.logoContainer}>
                <img 
                  src={university.logo} 
                  alt={university.name}
                  className={styles.universityLogo}
                  onError={(e) => {
                    // Fallback to a default logo if image fails to load
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = '/images/universities/default-university-logo.png';
                    e.target.style.objectFit = 'contain';
                  }}
                />
              </div>
              <div className={styles.universityInfo}>
                <p className={styles.coursesCount}>{university.courses}</p>
                <h3 className={styles.universityName}>{university.name}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.viewMoreContainer}>
          {!showAll ? (
            <button 
              onClick={() => setShowAll(true)} 
              className={styles.viewMoreButton}
            >
              VIEW MORE UNIVERSITIES
              <span className={styles.arrowIcon}>→</span>
            </button>
          ) : (
            <button 
              onClick={() => setShowAll(false)} 
              className={styles.viewMoreButton}
            >
              VIEW LESS
              <span className={styles.arrowIcon}>↑</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

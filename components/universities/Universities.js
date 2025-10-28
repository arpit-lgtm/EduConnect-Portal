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
        // Import the comprehensive database
        const module = await import('../../public/assets/js/comprehensive-unified-database-COMPLETE.js');
        const uniDatabase = module.default?.universityDatabase || module.universityDatabase;

        if (!uniDatabase || !Array.isArray(uniDatabase)) {
          console.error('University database is empty or invalid');
          setLoading(false);
          return;
        }

        // Universities to exclude from carousel (duplicates)
        const excludeUniversities = [
          'CDE Amu',
          'IIM Indore Timespro',
          'UPES (Online)', // Keep UPES CCE
          'Svu Gajraula Wilp',
          'SRM University (Online)',
          'Symbiosis Distance Learning', // Keep main Symbiosis
          'Sgvu Engineering',
          'Smude Sikkim Manipal University',
          'Mahe Manipal',
          'Kuk Dde',
          'Jain University (Distance Education)' // Keep only Online version
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
          // Get the logo filename using the universityLogoMap
          const logoFilename = getUniversityLogo(uni.name);
          
          // Log universities with potential logo issues
          if (!logoFilename || logoFilename === 'default-university-logo.png') {
            console.warn(`No logo mapping found for: ${uni.name}`);
          }
          
          return {
            id: index + 1,
            name: uni.name,
            logo: `/images/universities/${logoFilename}`,
            courses: uni.courses ? `${uni.courses.length} Courses` : '0 Courses',
            link: uni.website || '#'
          };
        });

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
    <section className={styles.universitiesSection}>
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

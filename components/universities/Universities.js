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
          'Jgu (Online) Coursera', // Keep only O P Jindal Global University
          'BITS Pilani (WILP)' // Keep only BITS Pilani
        ];

        // Filter out excluded universities
        const filteredDatabase = uniDatabase.filter(uni => {
          const nameLower = uni.name.toLowerCase();
          return !excludeUniversities.some(excluded => 
            nameLower.includes(excluded.toLowerCase())
          );
        });

        // Remove duplicate universities by name (keep first occurrence only)
        const seenNames = new Set();
        const deduplicatedDatabase = filteredDatabase.filter(uni => {
          const normalizedName = uni.name.toLowerCase().trim();
          if (seenNames.has(normalizedName)) {
            console.log(`🗑️ Removing duplicate: ${uni.name}`);
            return false;
          }
          seenNames.add(normalizedName);
          return true;
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

        // Combine deduplicated database with new universities
        const combinedDatabase = [...deduplicatedDatabase, ...newUniversities];

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
          } else if (uniName.includes('alagappa university') || uniName.includes('alagappa')) {
            linkUrl = '/university/alagappa-university';
          } else if (uniName.includes('aligarh muslim university') || uniName.includes('aligarh muslim') || uniId === 'aligarh-muslim-university-online') {
            linkUrl = '/university/aligarh-muslim-university';
          } else if (uniName.includes('amrita university') || uniName.includes('amrita') || uniId === 'amrita-university-online') {
            linkUrl = '/university/amrita-university';
          } else if (uniName.includes('andhra university') || uniName.includes('andhra') || uniId === 'andhra-university-online') {
            linkUrl = '/university/andhra-university';
          } else if (uniName.includes('annamalai university') || uniName.includes('annamalai') || uniId === 'annamalai-university-distance-education') {
            linkUrl = '/university/annamalai-university';
          } else if (uniName.includes('anna university') || uniId === 'anna-university-online') {
            linkUrl = '/university/anna-university';
          } else if (uniName.includes('anucde') || uniName.includes('acharya nagarjuna') || uniId === 'anucde-acharya-nagarjuna-distance-education') {
            linkUrl = '/university/anucde-acharya-nagarjuna-university';
          } else if (uniName.includes('atlas skilltech') || uniName.includes('atlas') || uniId === 'atlas-skilltech-university') {
            linkUrl = '/university/atlas-skilltech';
          } else if (uniName.includes('bimtech') || uniName.includes('birla institute of management') || uniId === 'bimtech-greater-noida') {
            linkUrl = '/university/bimtech-greater-noida';
          } else if (uniName.includes('bits pilani') || uniName.includes('wilp') || uniId === 'bits-pilani-wilp') {
            linkUrl = '/university/bits-pilani-wilp';
          } else if (uniName.includes('biher') || uniName.includes('bharath institute') || uniId === 'biher-bharath-institute') {
            linkUrl = '/university/biher-bharath-institute';
          } else if (uniName.includes('bharathiar university') || uniName.includes('bharathiar') || uniId === 'bharathiar-university-distance-education') {
            linkUrl = '/university/bharathiar-university-online';
          } else if (uniName.includes('bharathidasan university') || uniName.includes('bharathidasan') || uniId === 'bharathidasan-university-distance-education') {
            linkUrl = '/university/bharathidasan-university-distance-education';
          } else if (uniName.includes('birchwood university') || uniName.includes('birchwood') || uniId === 'birchwood-university') {
            linkUrl = '/university/birchwood-university';
          } else if (uniName.includes('chandigarh university') && uniName.includes('online') || uniId === 'chandigarh-university-distance') {
            linkUrl = '/university/chandigarh-university-online';
          } else if (uniName.includes('chitkara university') || uniName.includes('chitkara') || uniId === 'chitkara-university-online') {
            linkUrl = '/university/chitkara-university-online';
          } else if (uniName.includes('deen dayal upadhyay gorakhpur') || uniName.includes('deen dayal upadhyay') || uniName.includes('ddu gorakhpur') || uniId === 'ddu-gorakhpur-university') {
            linkUrl = '/university/ddu-gorakhpur-university';
          } else if (uniName.includes('deakin university') || uniName.includes('deakin melbourne') || uniId === 'deakin-university-melbourne') {
            linkUrl = '/university/deakin-university-melbourne';
          } else if (uniName.includes('dibrugarh university') || uniName.includes('dibrugarh') || uniId === 'dibrugarh-university-distance-education') {
            linkUrl = '/university/dibrugarh-university-distance-education';
          } else if (uniName.includes('durham university') || uniName.includes('durham') || uniId === 'durham-university') {
            linkUrl = '/university/durham-university';
          } else if (uniName.includes('edgewood university') || uniName.includes('edgewood') || uniId === 'edgewood-university') {
            linkUrl = '/university/edgewood-university';
          } else if (uniName.includes('eflu') || uniName.includes('english and foreign languages university') || uniId === 'eflu-distance-education') {
            linkUrl = '/university/eflu-distance-education';
          } else if (uniName.includes('esgci') || uniName.includes('école supérieure de gestion') || uniId === 'esgci-school-of-business') {
            linkUrl = '/university/esgci-school-of-business';
          } else if (uniName.includes('du sol') || uniName.includes('delhi university') || uniName.includes('school of open learning') || uniId === 'du-sol-school-of-open-learning') {
            linkUrl = '/university/du-sol-school-of-open-learning';
          } else if (uniName.includes('galgotias university') && uniName.includes('online') || uniId === 'galgotias-university-online') {
            linkUrl = '/university/galgotias-university-online';
          } else if (uniName.includes('gla university') || uniName.includes('gla') || uniId === 'gla-university-online') {
            linkUrl = '/university/gla-university-online';
          } else if (uniName.includes('golden gate') || uniId === 'golden-gate-university') {
            linkUrl = '/university/golden-gate-university';
          } else if (uniName.includes('graphic era') || uniId === 'graphic-era-university-online') {
            linkUrl = '/university/graphic-era-university-online';
          } else if (uniName.includes('guru kashi') || uniId === 'guru-kashi-university-online') {
            linkUrl = '/university/guru-kashi-university-online';
          } else if (uniName.includes('gitam') || uniId === 'gitam-university-distance-education') {
            linkUrl = '/university/gitam-university-distance-education';
          } else if (uniName.includes('harvard') || uniId === 'harvard-university-online') {
            linkUrl = '/university/harvard-university-online';
          } else if (uniName.includes('himachal pradesh university') || uniName.includes('hpu') || uniId === 'hpu-himachal-pradesh-university-distance-education') {
            linkUrl = '/university/hpu-himachal-pradesh-university-distance-education';
          } else if (uniName.includes('kerala university') || uniName.includes('ideku') || uniId === 'ideku-kerala-university-distance-education') {
            linkUrl = '/university/ideku-kerala-university-distance-education';
          } else if (uniName.includes('ignou') || uniName.includes('indira gandhi') || uniId === 'ignou') {
            linkUrl = '/university/ignou';
          } else if (uniName.includes('iiit bangalore') || uniName.includes('iiitb') || uniId === 'iiit-bangalore') {
            linkUrl = '/university/iiit-bangalore';
          } else if (uniName.includes('iit dharwad') || uniId === 'iit-dharwad') {
            linkUrl = '/university/iit-dharwad';
          } else if (uniName.includes('iim ahmedabad') || uniName.includes('iima') || uniId === 'iim-ahmedabad') {
            linkUrl = '/university/iim-ahmedabad';
          } else if (uniName.includes('iim amritsar') || uniId === 'iim-amritsar') {
            linkUrl = '/university/iim-amritsar';
          } else if (uniName.includes('iim bangalore') || uniName.includes('iimb') || uniId === 'iim-bangalore') {
            linkUrl = '/university/iim-bangalore';
          } else if (uniName.includes('iim bodh gaya') || uniName.includes('iim bodhgaya') || uniId === 'iim-bodh-gaya') {
            linkUrl = '/university/iim-bodh-gaya';
          } else if (uniName.includes('iim calcutta') || uniName.includes('iimc') || uniId === 'iim-calcutta') {
            linkUrl = '/university/iim-calcutta';
          } else if (uniName.includes('iim indore') || uniId === 'iim-indore') {
            linkUrl = '/university/iim-indore';
          } else if (uniName.includes('iim jammu') || uniId === 'iim-jammu') {
            linkUrl = '/university/iim-jammu';
          } else if (uniName.includes('iim kashipur') || uniId === 'iim-kashipur') {
            linkUrl = '/university/iim-kashipur';
          } else if (uniName.includes('iim kozhikode') || uniName.includes('iimk') || uniId === 'iim-kozhikode') {
            linkUrl = '/university/iim-kozhikode';
          } else if (uniName.includes('iim lucknow') || uniName.includes('iiml') || uniId === 'iim-lucknow') {
            linkUrl = '/university/iim-lucknow';
          } else if (uniName.includes('iim mumbai') || uniId === 'iim-mumbai') {
            linkUrl = '/university/iim-mumbai';
          } else if (uniName.includes('iim nagpur') || uniId === 'iim-nagpur') {
            linkUrl = '/university/iim-nagpur';
          } else if (uniName.includes('iim raipur') || uniId === 'iim-raipur') {
            linkUrl = '/university/iim-raipur';
          } else if (uniName.includes('iim ranchi') || uniId === 'iim-ranchi') {
            linkUrl = '/university/iim-ranchi';
          } else if (uniName.includes('iim rohtak') || uniId === 'iim-rohtak') {
            linkUrl = '/university/iim-rohtak';
          } else if (uniName.includes('iim sambalpur') || uniId === 'iim-sambalpur') {
            linkUrl = '/university/iim-sambalpur';
          } else if (uniName.includes('iim shillong') || uniId === 'iim-shillong') {
            linkUrl = '/university/iim-shillong';
          } else if (uniName.includes('iim sirmaur') || uniId === 'iim-sirmaur') {
            linkUrl = '/university/iim-sirmaur';
          } else if (uniName.includes('iim trichy') || uniName.includes('iim tiruchirappalli') || uniId === 'iim-trichy') {
            linkUrl = '/university/iim-trichy';
          } else if (uniName.includes('iim udaipur') || uniId === 'iim-udaipur') {
            linkUrl = '/university/iim-udaipur';
          } else if (uniName.includes('iim visakhapatnam') || uniName.includes('iim vishakhapatnam') || uniId === 'iim-visakhapatnam') {
            linkUrl = '/university/iim-visakhapatnam';
          } else if (uniName.includes('iisc bangalore') || uniName.includes('indian institute of science') || uniId === 'iisc-bangalore') {
            linkUrl = '/university/iisc-bangalore';
          } else if (uniName.includes('iit bombay') || uniId === 'iit-bombay') {
            linkUrl = '/university/iit-bombay';
          } else if (uniName.includes('iit delhi') || uniId === 'iit-delhi') {
            linkUrl = '/university/iit-delhi';
          } else if (uniName.includes('iit guwahati') || uniId === 'iit-guwahati') {
            linkUrl = '/university/iit-guwahati';
          } else if (uniName.includes('chaudhary charan singh') || uniName.includes('ccsu meerut') || uniId === 'ccsu-meerut') {
            linkUrl = '/university/ccsu-meerut';
          }
          
          // Custom course counts for universities with detailed pages
          const customCourseCounts = {
            'amity university': '12 Courses',
            'manipal': '10 Courses', 
            'nmims': '8 Courses',
            'd.y. patil': '6 Courses',
            'vivekananda global': '8 Courses',
            'mit': '7 Courses',
            'alagappa university': '8 Courses',
            'alagappa': '8 Courses',
            'aligarh muslim university': '4 Courses',
            'aligarh muslim': '4 Courses',
            'amrita university': '6 Courses',
            'amrita': '6 Courses',
            'andhra university': '5 Courses',
            'andhra': '5 Courses',
            'annamalai university': '6 Courses',
            'annamalai': '6 Courses',
            'anna university': '2 Courses',
            'anucde': '6 Courses',
            'acharya nagarjuna': '6 Courses',
            'atlas skilltech': '5 Courses',
            'atlas': '5 Courses',
            'bimtech': '5 Courses',
            'birla institute of management': '5 Courses',
            'bits pilani': '4 Courses',
            'wilp': '4 Courses',
            'biher': '4 Courses',
            'bharath institute': '4 Courses',
            'bharathiar university': '1 Course',
            'bharathiar': '1 Course',
            'bharathidasan university': '42 Courses',
            'bharathidasan': '42 Courses',
            'birchwood university': '9 Courses',
            'birchwood': '9 Courses',
            'chandigarh university': '11 Courses',
            'chitkara university': '1 Course',
            'chitkara': '1 Course',
            'deen dayal upadhyay gorakhpur': '6 Courses',
            'deen dayal upadhyay': '6 Courses',
            'ddu gorakhpur': '6 Courses',
            'deakin university': '4 Courses',
            'deakin melbourne': '4 Courses',
            'dibrugarh university': '1 Course',
            'dibrugarh': '1 Course',
            'durham university': '1 Course',
            'durham': '1 Course',
            'edgewood university': '13 Courses',
            'edgewood': '13 Courses',
            'eflu': '3 Courses',
            'english and foreign languages university': '3 Courses',
            'esgci': '2 Courses',
            'école supérieure de gestion': '2 Courses',
            'du sol': '26 Courses',
            'delhi university': '12 Courses',
            'school of open learning': '12 Courses',
            'galgotias university online': '8 Courses',
            'galgotias online': '8 Courses',
            'gla university': '10 Courses',
            'gla': '10 Courses',
            'golden gate university': '11 Courses',
            'golden gate': '11 Courses',
            'ggu': '11 Courses',
            'graphic era university': '6 Courses',
            'graphic era': '6 Courses',
            'guru kashi university': '8 Courses',
            'guru kashi': '8 Courses',
            'gitam university': '11 Courses',
            'gitam': '11 Courses',
            'harvard university': '2 Courses',
            'harvard': '2 Courses',
            'himachal pradesh university': '17 Courses',
            'hpu': '17 Courses',
            'kerala university': '26 Courses',
            'ideku': '26 Courses',
            'ignou': '36 Courses',
            'indira gandhi national open university': '36 Courses',
            'iiit bangalore': '9 Courses',
            'iiitb': '9 Courses',
            'iit dharwad': '1 Course',
            'iim ahmedabad': '7 Courses',
            'iima': '7 Courses',
            'iim amritsar': '3 Courses',
            'iim bangalore': '5 Courses',
            'iimb': '5 Courses',
            'iim bodh gaya': '2 Courses',
            'iim bodhgaya': '2 Courses',
            'iim calcutta': '5 Courses',
            'iimc': '5 Courses',
            'iim indore': '5 Courses',
            'iim jammu': '3 Courses',
            'iim kashipur': '10 Courses',
            'iim kozhikode': '5 Courses',
            'iimk': '5 Courses',
            'iim lucknow': '11 Courses',
            'iiml': '11 Courses',
            'iim mumbai': '3 Courses',
            'iim nagpur': '6 Courses',
            'iim raipur': '12 Courses',
            'iim ranchi': '7 Courses',
            'iim rohtak': '9 Courses',
            'iim sambalpur': '4 Courses',
            'iim shillong': '6 Courses',
            'iim sirmaur': '3 Courses',
            'iim trichy': '3 Courses',
            'iim tiruchirappalli': '3 Courses',
            'iim udaipur': '6 Courses',
            'iim visakhapatnam': '7 Courses',
            'iim vishakhapatnam': '7 Courses',
            'iisc bangalore': '2 Courses',
            'indian institute of science': '2 Courses',
            'iit bombay': '3 Courses',
            'iit delhi': '4 Courses',
            'iit guwahati': '3 Courses',
            'chaudhary charan singh': '6 Courses',
            'ccsu': '6 Courses'
          };
          
          // Get accurate course count - check custom counts first, then database
          let courseCount = '0 Courses';
          
          // Check if this university has a custom course count
          const customCount = Object.keys(customCourseCounts).find(key => 
            uniName.includes(key.toLowerCase())
          );
          
          if (customCount) {
            courseCount = customCourseCounts[customCount];
          } else if (uni.courses) {
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
        console.log(`✅ Loaded ${sortedUniversities.length} universities from database`);
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
          {displayedUniversities.map(university => {
            // Check if link is internal (starts with /)
            const isInternalLink = university.link && university.link.startsWith('/');
            
            return (
              <a 
                href={university.link} 
                key={university.id}
                className={styles.universityCard}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // OPEN LINK IMMEDIATELY - Animation shows when external page loads
                  console.log('🎯 UNIVERSITY CARD CLICKED!', university.name);
                  console.log('🔗 Link:', university.link, 'Internal:', isInternalLink);
                  // Link opens normally via href attribute
                }}
              >
                <div className={styles.logoContainer}>
                  <img 
                    src={university.logo} 
                    alt={university.name}
                    className={styles.universityLogo}
                    onError={(e) => {
                      // Hide broken images instead of showing fallback
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className={styles.universityInfo}>
                  <p className={styles.coursesCount}>{university.courses}</p>
                  <h3 className={styles.universityName}>{university.name}</h3>
                </div>
              </a>
            );
          })}
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

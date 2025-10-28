import React, { useState, useEffect } from 'react';
import styles from './Universities.module.css';

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

        // Transform database format to component format
        const transformedUniversities = uniDatabase.map((uni, index) => ({
          id: index + 1,
          name: uni.name,
          logo: `/images/universities/${uni.name.replace(/ /g, '-')}.png`,
          courses: uni.courses ? `${uni.courses.length} Courses` : '0 Courses',
          link: '#' // You can add actual links from database if available
        }));

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
      logo: '/images/universities/Amity University.png',
      courses: '78 Courses',
      link: 'https://www.amityonline.com'
    },
    {
      id: 2,
      name: 'Jain University',
      logo: '/images/universities/Jain University.png',
      courses: '69 Courses',
      link: 'https://www.jainuniversity.ac.in'
    },
    {
      id: 3,
      name: 'DY Patil University',
      logo: '/images/universities/DY Patil University Mumbai.png',
      courses: '38 Courses',
      link: 'https://www.dpu.edu.in'
    },
    {
      id: 4,
      name: 'Golden Gate University',
      logo: '/images/universities/Golden Gate University.png',
      courses: '35 Courses',
      link: 'https://www.ggu.edu'
    },
    {
      id: 5,
      name: 'MAHE Manipal Online',
      logo: '/images/universities/Mahe Manipal.png',
      courses: '37 Courses',
      link: 'https://online.manipal.edu'
    },
    {
      id: 6,
      name: 'IIM Nagpur',
      logo: '/images/universities/IIM Nagpur.png',
      courses: '9 Courses',
      link: 'https://www.iimnagpur.ac.in'
    },
    {
      id: 7,
      name: 'Chandigarh University',
      logo: '/images/universities/Chandigarh University.png',
      courses: '52 Courses',
      link: 'https://www.cuchd.in'
    },
    {
      id: 8,
      name: 'LPU University',
      logo: '/images/universities/Lovely Professional University.png',
      courses: '65 Courses',
      link: 'https://www.lpu.in'
    },
    {
      id: 9,
      name: 'Manipal University',
      logo: '/images/universities/Manipal University.png',
      courses: '43 Courses',
      link: 'https://www.manipal.edu'
    },
    {
      id: 10,
      name: 'Uttaranchal University',
      logo: '/images/universities/Uttaranchal University.png',
      courses: '45 Courses',
      link: 'https://www.uumail.in'
    },
    {
      id: 11,
      name: 'Sikkim Manipal University',
      logo: '/images/universities/Sikkim Manipal University.png',
      courses: '28 Courses',
      link: 'https://www.smude.edu.in'
    },
    {
      id: 12,
      name: 'Shoolini University',
      logo: '/images/universities/Shoolini University.png',
      courses: '32 Courses',
      link: 'https://www.shooliniuniversity.com'
    },
    {
      id: 13,
      name: 'IIM Kozhikode',
      logo: '/images/universities/IIM Kozhikode.png',
      courses: '8 Courses',
      link: 'https://www.iimk.ac.in'
    },
    {
      id: 14,
      name: 'Deakin University',
      logo: '/images/universities/Deakin University.png',
      courses: '12 Courses',
      link: 'https://www.deakin.edu.au'
    },
    {
      id: 15,
      name: 'IIM Raipur',
      logo: '/images/universities/IIM Raipur.png',
      courses: '6 Courses',
      link: 'https://www.iimraipur.ac.in'
    },
    {
      id: 16,
      name: 'IIM Visakhapatnam',
      logo: '/images/universities/IIM Visakhapatnam.png',
      courses: '5 Courses',
      link: 'https://www.iimv.ac.in'
    },
    {
      id: 17,
      name: 'Cornell University',
      logo: '/images/universities/Cornell University.png',
      courses: '15 Courses',
      link: 'https://www.cornell.edu'
    },
    {
      id: 18,
      name: 'Duke Corporate Education',
      logo: '/images/universities/Duke Corporate Education.png',
      courses: '10 Courses',
      link: 'https://www.dukece.com'
    },
    {
      id: 19,
      name: 'The Wharton School',
      logo: '/images/universities/The Wharton School.png',
      courses: '8 Courses',
      link: 'https://www.wharton.upenn.edu'
    },
    {
      id: 20,
      name: 'BITS Pilani',
      logo: '/images/universities/BITS Pilani.png',
      courses: '18 Courses',
      link: 'https://www.bits-pilani.ac.in'
    },
    {
      id: 21,
      name: 'Symbiosis SCDL',
      logo: '/images/universities/Symbiosis SCDL.png',
      courses: '42 Courses',
      link: 'https://www.scdl.net'
    },
    {
      id: 22,
      name: 'MICA',
      logo: '/images/universities/MICA.png',
      courses: '12 Courses',
      link: 'https://www.mica.ac.in'
    },
    {
      id: 23,
      name: 'IIM Indore',
      logo: '/images/universities/IIM Indore.png',
      courses: '7 Courses',
      link: 'https://www.iimidr.ac.in'
    },
    {
      id: 24,
      name: 'IIIT Bangalore',
      logo: '/images/universities/IIIT Bangalore.png',
      courses: '14 Courses',
      link: 'https://www.iiitb.ac.in'
    },
    {
      id: 25,
      name: 'Sharda University',
      logo: '/images/universities/Sharda University.png',
      courses: '28 Courses',
      link: 'https://www.sharda.ac.in'
    },
    {
      id: 26,
      name: 'GLA University',
      logo: '/images/universities/GLA University.png',
      courses: '34 Courses',
      link: 'https://www.gla.ac.in'
    },
    {
      id: 27,
      name: "Lingaya's University",
      logo: "/images/universities/Lingaya's University.png",
      courses: '28 Courses',
      link: 'https://www.lingayasvidyapeeth.edu.in'
    },
    {
      id: 28,
      name: 'O P Jindal University',
      logo: '/images/universities/O P Jindal University.png',
      courses: '22 Courses',
      link: 'https://www.jgu.edu.in'
    },
    {
      id: 29,
      name: 'KIIT University',
      logo: '/images/universities/KIIT University.png',
      courses: '38 Courses',
      link: 'https://www.kiit.ac.in'
    },
    {
      id: 30,
      name: 'SRM University',
      logo: '/images/universities/SRM University.png',
      courses: '26 Courses',
      link: 'https://www.srmist.edu.in'
    },
    {
      id: 31,
      name: 'Amrita University',
      logo: '/images/universities/Amrita University.png',
      courses: '20 Courses',
      link: 'https://www.amrita.edu'
    },
    {
      id: 32,
      name: 'IIM Sirmaur',
      logo: '/images/universities/IIM Sirmaur.png',
      courses: '5 Courses',
      link: 'https://www.iimsirmaur.ac.in'
    },
    {
      id: 33,
      name: 'IIM Amritsar',
      logo: '/images/universities/IIM Amritsar.png',
      courses: '4 Courses',
      link: 'https://www.iimamritsar.ac.in'
    },
    {
      id: 34,
      name: 'Woolf University',
      logo: '/images/universities/Woolf University.png',
      courses: '8 Courses',
      link: 'https://www.woolf.university'
    },
    {
      id: 35,
      name: 'LIBA',
      logo: '/images/universities/LIBA.png',
      courses: '10 Courses',
      link: 'https://www.liba.edu'
    },
    {
      id: 36,
      name: 'GIM',
      logo: '/images/universities/GIM.png',
      courses: '12 Courses',
      link: 'https://www.gim.ac.in'
    },
    {
      id: 37,
      name: 'University of Maryland',
      logo: '/images/universities/University of Maryland.png',
      courses: '16 Courses',
      link: 'https://www.umd.edu'
    },
    {
      id: 38,
      name: 'Michigan State University',
      logo: '/images/universities/Michigan State University.png',
      courses: '14 Courses',
      link: 'https://www.msu.edu'
    },
    {
      id: 39,
      name: 'MIT University',
      logo: '/images/universities/MIT University.png',
      courses: '38 Courses',
      link: 'https://www.mit.edu'
    },
    {
      id: 40,
      name: "Vignan's University",
      logo: "/images/universities/Vignan's University.png",
      courses: '25 Courses',
      link: 'https://www.vignansuniversity.ac.in'
    },
    {
      id: 41,
      name: 'Chitkara University',
      logo: '/images/universities/Chitkara University.png',
      courses: '30 Courses',
      link: 'https://www.chitkara.edu.in'
    },
    {
      id: 42,
      name: 'Manav Racha University',
      logo: '/images/universities/Manav Racha University.png',
      courses: '31 Courses',
      link: 'https://www.mru.edu.in'
    },
    {
      id: 43,
      name: 'Vivekananda Global University',
      logo: '/images/universities/Vivekananda Global University.png',
      courses: '18 Courses',
      link: 'https://www.vgu.ac.in'
    },
    {
      id: 44,
      name: 'Presidency University',
      logo: '/images/universities/Presidency University.png',
      courses: '22 Courses',
      link: 'https://www.presidencyuniversity.in'
    },
    {
      id: 45,
      name: 'Kalinga University',
      logo: '/images/universities/Kalinga University.png',
      courses: '24 Courses',
      link: 'https://www.kalingauniversity.com'
    },
    {
      id: 46,
      name: 'Mody University',
      logo: '/images/universities/Mody University.png',
      courses: '20 Courses',
      link: 'https://www.modyuniversity.ac.in'
    },
    {
      id: 47,
      name: 'Graphic Era University',
      logo: '/images/universities/Graphic Era University.png',
      courses: '26 Courses',
      link: 'https://www.geu.ac.in'
    },
    {
      id: 48,
      name: 'Guru Kashi University',
      logo: '/images/universities/Guru Kashi University.png',
      courses: '18 Courses',
      link: 'https://www.gurukashiuniversity.in'
    },
    {
      id: 49,
      name: 'Shri Venkateshwara University',
      logo: '/images/universities/Shri Venkateshwara University.png',
      courses: '22 Courses',
      link: 'https://www.svu.ac.in'
    },
    {
      id: 50,
      name: 'Chaudhary Charan Singh University',
      logo: '/images/universities/Chaudhary Charan Singh University.png',
      courses: '16 Courses',
      link: 'https://www.ccsuniversity.ac.in'
    },
    {
      id: 51,
      name: 'Galgotia University',
      logo: '/images/universities/Galgotia University.png',
      courses: '28 Courses',
      link: 'https://www.galgotiasuniversity.edu.in'
    },
    {
      id: 52,
      name: 'BIMTECH Online',
      logo: '/images/universities/BIMTECH University.png',
      courses: '14 Courses',
      link: 'https://www.bimtech.ac.in'
    },
    {
      id: 53,
      name: 'IMT Ghaziabad',
      logo: '/images/universities/IMT Ghaziabad.png',
      courses: '11 Courses',
      link: 'https://www.imt.edu'
    },
    {
      id: 54,
      name: 'Queen Margaret University',
      logo: '/images/universities/Queen Margaret University.png',
      courses: '9 Courses',
      link: 'https://www.qmu.ac.uk'
    },
    {
      id: 55,
      name: 'University of Toledo',
      logo: '/images/universities/University of Toledo.png',
      courses: '12 Courses',
      link: 'https://www.utoledo.edu'
    },
    {
      id: 56,
      name: 'Edgewood University',
      logo: '/images/universities/Edgewood University.png',
      courses: '8 Courses',
      link: 'https://www.edgewood.edu'
    },
    {
      id: 57,
      name: 'Atlas Skilltech University',
      logo: '/images/universities/Atlas Skilltech University.png',
      courses: '15 Courses',
      link: 'https://www.atlasuniversity.edu.in'
    },
    {
      id: 58,
      name: 'Birchwood University',
      logo: '/images/universities/Birchwood University Online.png',
      courses: '10 Courses',
      link: 'https://www.birchwooduniversity.com'
    },
    {
      id: 59,
      name: 'SSBM',
      logo: '/images/universities/SSBM.png',
      courses: '7 Courses',
      link: 'https://www.ssbm.ch'
    },
    {
      id: 60,
      name: 'ESGCI School of Business',
      logo: '/images/universities/ESGCI School of Business.png',
      courses: '9 Courses',
      link: 'https://www.esgci.com'
    },
    {
      id: 61,
      name: 'Harappa School of Leadership',
      logo: '/images/universities/Harappa School of Leadership.png',
      courses: '6 Courses',
      link: 'https://harappa.education'
    },
    {
      id: 62,
      name: 'University of Applied Management',
      logo: '/images/universities/University of Applied Management.png',
      courses: '11 Courses',
      link: 'https://www.fham.de'
    }
  ];

  const displayedUniversities = showAll ? universities : universities.slice(0, 16);

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

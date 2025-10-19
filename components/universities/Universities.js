import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Universities.module.css';

export default function Universities() {
  const [showAll, setShowAll] = useState(false);

  const universities = [
    {
      id: 1,
      name: 'Amity University',
      logo: '/images/universities/Amity University.png',
      courses: '78 Courses',
      link: '/university/amity-university-online'
    },
    {
      id: 2,
      name: 'Jain University',
      logo: '/images/universities/Jain University.png',
      courses: '69 Courses',
      link: '/university/jain-university-online'
    },
    {
      id: 3,
      name: 'DY Patil University',
      logo: '/images/universities/DPU.png',
      courses: '38 Courses',
      link: '/university/dy-patil-university-online'
    },
    {
      id: 4,
      name: 'Golden Gate University',
      logo: '/images/universities/Golden Gate University.png',
      courses: '35 Courses',
      link: '/university/golden-gate-university'
    },
    {
      id: 5,
      name: 'MAHE Manipal Online',
      logo: '/images/universities/Mahe Manipal.png',
      courses: '37 Courses',
      link: '/university/mahe-manipal-online'
    },
    {
      id: 6,
      name: 'IIM Nagpur',
      logo: '/images/universities/IIM Nagpur.png',
      courses: '9 Courses',
      link: '/university/iim-nagpur'
    },
    {
      id: 7,
      name: 'Chandigarh University',
      logo: '/images/universities/Chandigarh University.png',
      courses: '52 Courses',
      link: '/university/chandigarh-university-online'
    },
    {
      id: 8,
      name: 'LPU University',
      logo: '/images/universities/LPU University.png',
      courses: '65 Courses',
      link: '/university/lpu-university-online'
    },
    {
      id: 9,
      name: 'Manipal University',
      logo: '/images/universities/Manipal University.png',
      courses: '43 Courses',
      link: '/university/manipal-university-online'
    },
    {
      id: 10,
      name: 'Uttaranchal University',
      logo: '/images/universities/Uttaranchal University.png',
      courses: '45 Courses',
      link: '/university/uttaranchal-university-online'
    },
    {
      id: 11,
      name: 'Sikkim Manipal University',
      logo: '/images/universities/Sikkim Manipal University.png',
      courses: '28 Courses',
      link: '/university/sikkim-manipal-university-online'
    },
    {
      id: 12,
      name: 'Shoolini University',
      logo: '/images/universities/Shoolini University.png',
      courses: '32 Courses',
      link: '/university/shoolini-university-online'
    },
    {
      id: 13,
      name: 'IIM Kozhikode',
      logo: '/images/universities/IIM Kozhikode.png',
      courses: '8 Courses',
      link: '/university/iim-kozhikode'
    },
    {
      id: 14,
      name: 'Deakin University',
      logo: '/images/universities/Deakin University.png',
      courses: '12 Courses',
      link: '/university/deakin-university'
    },
    {
      id: 15,
      name: 'IIM Raipur',
      logo: '/images/universities/IIM Raipur.png',
      courses: '6 Courses',
      link: '/university/iim-raipur'
    },
    {
      id: 16,
      name: 'IIM Visakhapatnam',
      logo: '/images/universities/IIM Visakhapatnam.png',
      courses: '5 Courses',
      link: '/university/iim-visakhapatnam'
    },
    {
      id: 17,
      name: 'Cornell University',
      logo: '/images/universities/Cornell University.png',
      courses: '15 Courses',
      link: '/university/cornell-university'
    },
    {
      id: 18,
      name: 'Duke Corporate Education',
      logo: '/images/universities/Duke Corporate Education.png',
      courses: '10 Courses',
      link: '/university/duke-corporate-education'
    },
    {
      id: 19,
      name: 'The Wharton School',
      logo: '/images/universities/The Wharton School.png',
      courses: '8 Courses',
      link: '/university/wharton-school'
    },
    {
      id: 20,
      name: 'BITS Pilani',
      logo: '/images/universities/BITS Pilani.png',
      courses: '18 Courses',
      link: '/university/bits-pilani'
    },
    {
      id: 21,
      name: 'Symbiosis SCDL',
      logo: '/images/universities/Symbiosis SCDL.png',
      courses: '42 Courses',
      link: '/university/symbiosis-scdl-online'
    },
    {
      id: 22,
      name: 'MICA',
      logo: '/images/universities/MICA.png',
      courses: '12 Courses',
      link: '/university/mica'
    },
    {
      id: 23,
      name: 'IIM Indore',
      logo: '/images/universities/IIM Indore.png',
      courses: '7 Courses',
      link: '/university/iim-indore'
    },
    {
      id: 24,
      name: 'IIIT Bangalore',
      logo: '/images/universities/IIIT Bangalore.png',
      courses: '14 Courses',
      link: '/university/iiit-bangalore'
    },
    {
      id: 25,
      name: 'Sharda University',
      logo: '/images/universities/Sharda University.png',
      courses: '28 Courses',
      link: '/university/sharda-university-online'
    },
    {
      id: 26,
      name: 'GLA University',
      logo: '/images/universities/GLA University.png',
      courses: '34 Courses',
      link: '/university/gla-university-online'
    },
    {
      id: 27,
      name: "Lingaya's University",
      logo: "/images/universities/Lingaya's University.png",
      courses: '28 Courses',
      link: '/university/lingayas-university-online'
    },
    {
      id: 28,
      name: 'O P Jindal University',
      logo: '/images/universities/O P Jindal University.png',
      courses: '22 Courses',
      link: '/university/op-jindal-university'
    },
    {
      id: 29,
      name: 'KIIT University',
      logo: '/images/universities/KIIT University.png',
      courses: '38 Courses',
      link: '/university/kiit-university-online'
    },
    {
      id: 30,
      name: 'SRM University',
      logo: '/images/universities/SRM University.png',
      courses: '26 Courses',
      link: '/university/srm-university-online'
    },
    {
      id: 31,
      name: 'Amrita University',
      logo: '/images/universities/Amrita University.png',
      courses: '20 Courses',
      link: '/university/amrita-university-online'
    },
    {
      id: 32,
      name: 'IIM Sirmaur',
      logo: '/images/universities/IIM Sirmaur.png',
      courses: '5 Courses',
      link: '/university/iim-sirmaur'
    },
    {
      id: 33,
      name: 'IIM Amritsar',
      logo: '/images/universities/IIM Amritsar.png',
      courses: '4 Courses',
      link: '/university/iim-amritsar'
    },
    {
      id: 34,
      name: 'Woolf University',
      logo: '/images/universities/Woolf University.png',
      courses: '8 Courses',
      link: '/university/woolf-university'
    },
    {
      id: 35,
      name: 'LIBA',
      logo: '/images/universities/LIBA.png',
      courses: '10 Courses',
      link: '/university/liba'
    },
    {
      id: 36,
      name: 'GIM',
      logo: '/images/universities/GIM.png',
      courses: '12 Courses',
      link: '/university/gim'
    },
    {
      id: 37,
      name: 'University of Maryland',
      logo: '/images/universities/University of Maryland.png',
      courses: '16 Courses',
      link: '/university/university-of-maryland'
    },
    {
      id: 38,
      name: 'Michigan State University',
      logo: '/images/universities/Michigan State University.png',
      courses: '14 Courses',
      link: '/university/michigan-state-university'
    },
    {
      id: 39,
      name: 'MIT University',
      logo: '/images/universities/MIT University.png',
      courses: '38 Courses',
      link: '/university/mit-university-online'
    },
    {
      id: 40,
      name: "Vignan's University",
      logo: "/images/universities/Vignan's University.png",
      courses: '25 Courses',
      link: '/university/vignans-university-online'
    },
    {
      id: 41,
      name: 'Chitkara University',
      logo: '/images/universities/Chitkara University.png',
      courses: '30 Courses',
      link: '/university/chitkara-university-online'
    },
    {
      id: 42,
      name: 'Manav Racha University',
      logo: '/images/universities/Manav Racha University.png',
      courses: '31 Courses',
      link: '/university/manav-rachna-university-online'
    },
    {
      id: 43,
      name: 'Vivekananda Global University',
      logo: '/images/universities/Vivekananda Global University.png',
      courses: '18 Courses',
      link: '/university/vivekananda-global-university'
    },
    {
      id: 44,
      name: 'Presidency University',
      logo: '/images/universities/Presidency University.png',
      courses: '22 Courses',
      link: '/university/presidency-university-online'
    },
    {
      id: 45,
      name: 'Kalinga University',
      logo: '/images/universities/Kalinga University.png',
      courses: '24 Courses',
      link: '/university/kalinga-university-online'
    },
    {
      id: 46,
      name: 'Mody University',
      logo: '/images/universities/Mody University.png',
      courses: '20 Courses',
      link: '/university/mody-university-online'
    },
    {
      id: 47,
      name: 'Graphic Era University',
      logo: '/images/universities/Graphic Era University.png',
      courses: '26 Courses',
      link: '/university/graphic-era-university-online'
    },
    {
      id: 48,
      name: 'Guru Kashi University',
      logo: '/images/universities/Guru Kashi University.png',
      courses: '18 Courses',
      link: '/university/guru-kashi-university-online'
    },
    {
      id: 49,
      name: 'Shri Venkateshwara University',
      logo: '/images/universities/Shri Venkateshwara University.png',
      courses: '22 Courses',
      link: '/university/shri-venkateshwara-university-online'
    },
    {
      id: 50,
      name: 'Chaudhary Charan Singh University',
      logo: '/images/universities/Chaudhary Charan Singh University.png',
      courses: '16 Courses',
      link: '/university/chaudhary-charan-singh-university'
    },
    {
      id: 51,
      name: 'Galgotia University',
      logo: '/images/universities/Galgotia University.png',
      courses: '28 Courses',
      link: '/university/galgotia-university-online'
    },
    {
      id: 52,
      name: 'BIMTECH Online',
      logo: '/images/universities/BIMTECH Online.png',
      courses: '14 Courses',
      link: '/university/bimtech-online'
    },
    {
      id: 53,
      name: 'IMT Ghaziabad',
      logo: '/images/universities/IMT Ghaziabad.png',
      courses: '11 Courses',
      link: '/university/imt-ghaziabad'
    },
    {
      id: 54,
      name: 'Queen Margaret University',
      logo: '/images/universities/Queen Margaret University.png',
      courses: '9 Courses',
      link: '/university/queen-margaret-university'
    },
    {
      id: 55,
      name: 'University of Toledo',
      logo: '/images/universities/University of Toledo.png',
      courses: '12 Courses',
      link: '/university/university-of-toledo'
    },
    {
      id: 56,
      name: 'Edgewood University',
      logo: '/images/universities/Edgewood University.png',
      courses: '8 Courses',
      link: '/university/edgewood-university'
    },
    {
      id: 57,
      name: 'Atlas Skilltech University',
      logo: '/images/universities/Atlas Skilltech University.png',
      courses: '15 Courses',
      link: '/university/atlas-skilltech-university'
    },
    {
      id: 58,
      name: 'Birchwood University',
      logo: '/images/universities/Birchwood University Online.png',
      courses: '10 Courses',
      link: '/university/birchwood-university-online'
    },
    {
      id: 59,
      name: 'SSBM',
      logo: '/images/universities/SSBM.png',
      courses: '7 Courses',
      link: '/university/ssbm'
    },
    {
      id: 60,
      name: 'ESGCI School of Business',
      logo: '/images/universities/ESGCI School of Business.png',
      courses: '9 Courses',
      link: '/university/esgci-school-of-business'
    },
    {
      id: 61,
      name: 'Harappa School of Leadership',
      logo: '/images/universities/Harappa School of Leadership.png',
      courses: '6 Courses',
      link: '/university/harappa-school-of-leadership'
    },
    {
      id: 62,
      name: 'University of Applied Management',
      logo: '/images/universities/University of Applied Management.png',
      courses: '11 Courses',
      link: '/university/university-of-applied-management'
    },
    {
      id: 63,
      name: 'Sanskriti University Engineering',
      logo: '/images/universities/Sanskriti University Engineering.png',
      courses: '13 Courses',
      link: '/university/sanskriti-university-engineering'
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
            <Link 
              href={university.link} 
              key={university.id}
              className={styles.universityCard}
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
            </Link>
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

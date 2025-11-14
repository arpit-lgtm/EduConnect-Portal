import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIITBangalore = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive Diploma in Data Science & AI', fee: 325000, duration: '12 months', specializations: 1 },
    { name: 'ePGP In Software Development', fee: 183000, duration: '9.5 Months', specializations: 1 },
    { name: 'Executive Diploma in Machine Learning and AI', fee: 335000, duration: '13 Months', specializations: 1 },
    { name: 'PG Certificate Program', fee: 180000, duration: '8 Months', specializations: 1 },
    { name: 'Job - Linked Program', fee: 120000, duration: '8 - 8.5 Months', specializations: 1 },
    { name: 'IIIT Online PG Course', fee: 325000, duration: '12 months', specializations: 6 },
    { name: 'Cloud Computing Program (Executive)', fee: 180000, duration: '8 Months', specializations: 1 },
    { name: 'DevOps Program (Executive)', fee: 180000, duration: '8 Months', specializations: 1 },
    { name: 'Executive Program in Generative AI for Leaders', fee: 175000, duration: '5 Months', specializations: 1 },
  ];

  const keyHighlights = [
    'Established in 1969 as one of the first IITs in India following Kothari Commission recommendations',
    'NIRF Ranked 74th in Engineering Category 2022',
    'NAAC A+ Grade accreditation with highest quality standards',
    'Institute of Eminence designation from Government of India',
    'UGC, AICTE, WES, and NAAC A+ approved programs',
    '100% placement record for many years - complete satisfaction in employment',
    'Remarkable faculty with expertise in engineering, science, and technology disciplines',
    'Well-equipped laboratories, research centres, libraries, sports facilities, and dormitories',
    'International Student Exchange Program with top worldwide academic universities',
    'Strong industry relationships supporting internships, industrial visits, and collaborative research',
    'Promotes entrepreneurship through incubation facilities and startup assistance programs',
    'Collaborative and interdisciplinary research culture addressing challenging issues',
    'Substantial and distinguished alumni network in major national and international organisations'
  ];

  const approvals = ['UGC', 'AICTE', 'NIRF', 'WES', 'NAAC A+'];
  const nirfRank = 'Rank 74th - Engineering Category';
  const accreditation = 'NAAC A+ Grade';

  const placementPartners = [
    'Accenture', 'Amazon', 'American Express', 'Deloitte', 'EY', 'HCL',
    'Infosys', 'ITC', 'KPMG', 'L&T', 'Mahindra', 'Microsoft',
    'Hindustan Unilever Limited', 'Google', 'IBM', 'TCS',
    'Wipro', 'Cognizant', 'Capgemini', 'Oracle'
  ];

  const faqs = [
    {
      question: 'What programs does IIIT Bangalore offer?',
      answer: 'IIIT Bangalore offers various programs in Computer Science, Information Technology, Electronics & Communication, and related fields. Programs include B.Tech, M.Tech, PhD, and executive programs for working professionals.'
    },
    {
      question: 'Is IIIT Bangalore a recognized institution?',
      answer: 'Yes, IIIT Bangalore is a recognized premier institution approved by UGC and AICTE. All degrees from IIIT Bangalore are valid for higher education and employment in India and abroad.'
    },
    {
      question: 'What is the admission process for IIIT Bangalore?',
      answer: 'Admission to IIIT Bangalore programs is typically based on national level entrance exams like JEE Main, GATE, or other relevant qualifying examinations. Candidates need to meet the eligibility criteria and cutoff marks for their chosen program.'
    },
    {
      question: 'Does IIIT Bangalore offer online programs?',
      answer: 'IIIT Bangalore offers certain executive and certificate programs in online/blended mode for working professionals. These programs maintain the same quality standards as on-campus programs.'
    },
    {
      question: 'What are the placement opportunities at IIIT Bangalore?',
      answer: 'IIIT Bangalore has excellent placement records with leading IT companies, startups, and research organizations recruiting from campus. The dedicated placement cell provides comprehensive support for career development and job placement.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIIT Bangalore - International Institute of Information Technology | MBA NINJA</title>
        <meta name="description" content="IIIT Bangalore - Premier institute for IT education. UGC & AICTE approved. Quality programs in Computer Science and allied fields." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIIT Bangalore.png" 
                alt="IIIT Bangalore Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => {
                  e.target.src = '/images/universities/default-university.png';
                }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Bangalore, Karnataka</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(912 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {approvals.map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>{nirfRank}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>{accreditation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {['about', 'courses', 'admissions', 'placements', 'faqs'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'courses' ? 'Programs' : tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IIIT Bangalore</h2>
              <div className={styles.aboutContent}>
                <p>
                  The International Institution of Information Technology Bangalore (IIIT Bangalore) is a top engineering 
                  institution in India, located in the dynamic city of Bangalore, Karnataka. IIIT Bangalore has established 
                  itself as a top university for engineering education due to its academic rigor, research achievements, and 
                  innovation-driven culture.
                </p>
                <p>
                  IIIT Bangalore provides undergraduate, postgraduate, and doctorate engineering, technology, and science programs. 
                  Bachelor of Technology (B.Tech), Master of Technology (M.Tech), Master of Science (M.Sc), and Doctor of Philosophy 
                  (Ph.D.) programs are available at the institute. These programs are intended to offer students a solid foundation 
                  in academic knowledge and the practical abilities required to face real-world situations.
                </p>
                <p>
                  The faculty of IIIT Bangalore is noteworthy, with highly skilled academics, researchers, and industry specialists. 
                  They have a strong desire to share knowledge with students. They use new teaching approaches, interactive classroom 
                  sessions, and research-oriented projects. The faculty's dedication to quality and mentorship is critical in creating 
                  the next generation of engineers and scientists.
                </p>
                <p>
                  The institution invites students and faculty members to participate in cutting-edge research initiatives in various 
                  fields. IIIT Bangalore has cutting-edge research facilities, labs, and centers of excellence, allowing for 
                  revolutionary research and innovation. The institute's research output is well-known and contributes to technological, 
                  scientific, and societal developments.
                </p>
                <p>
                  IIIT Bangalore is a premier engineering university consistently ranked among India's top universities. In NIRF 2022, 
                  the university was placed 74th in the Engineering category. The institute has won honours, such as the "Institute of 
                  Eminence" designation from the Government of India. IIIT Bangalore has kept its 100% placement record for many years 
                  now with its employment facilities and opportunities.
                </p>

                <h3>Key Highlights</h3>
                <div className={styles.highlightsList}>
                  {keyHighlights.map((highlight, idx) => (
                    <div key={idx} className={styles.highlightItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>1969</div>
                    <div className={styles.statLabel}>Year Established</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>9</div>
                    <div className={styles.statLabel}>Programs Offered</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>74</div>
                    <div className={styles.statLabel}>NIRF Rank 2022</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>100%</div>
                    <div className={styles.statLabel}>Placement Record</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                IIIT Bangalore offers 9 executive programs in cutting-edge technology domains.
              </p>
              
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Specializations</th>
                      <th>Duration</th>
                      <th>Total Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.specializations} {course.specializations === 1 ? 'Option' : 'Options'}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>NIRF Rank 74 Excellence in IT Education:</strong> IIIT Bangalore offers industry-aligned executive programs 
                with strong emphasis on research and innovation. NAAC A+ accredited and Institute of Eminence with UGC, AICTE, and 
                WES approvals. 100% placement record for many years with top recruiters including Accenture, Amazon, American Express, 
                Deloitte, HCL, Infosys, Microsoft, and more. World-class faculty with extensive industry and research experience. 
                International Student Exchange Program with top worldwide universities. Hands-on learning with well-equipped laboratories, 
                research centres, and state-of-the-art infrastructure.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>IIIT Bangalore follows a merit-based admission process through national level entrance examinations.</p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Check Eligibility</h3>
                    <p>Review the eligibility criteria for your chosen program. Most programs require relevant qualifying examinations like JEE Main, GATE, or equivalent.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Appear for Entrance Exam</h3>
                    <p>Register and appear for the relevant entrance examination. Ensure you meet the minimum qualifying marks as specified by the institute.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Apply Online</h3>
                    <p>Visit the official IIIT Bangalore website and fill out the online application form with accurate personal and academic details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Upload required documents including mark sheets, entrance exam scorecard, ID proof, and other certificates as specified.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Selection & Admission</h3>
                    <p>Based on merit and availability of seats, shortlisted candidates will be offered admission. Complete the fee payment and enrollment process to confirm your seat.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> Bachelor's degree in Engineering/Technology with minimum 60% marks. Valid GATE score required for most specializations</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PGP/MBA Programs:</strong> Bachelor's degree from recognized university with minimum 50% marks. CAT/GMAT score or relevant entrance exam qualification</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree with 60% marks. Research aptitude demonstrated through GATE/NET or equivalent. Interview and proposal required</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement & Career Support</h2>
              <p className={styles.sectionDesc}>
                IIIT Bangalore boasts a 100% placement record with students engaged by leading businesses across various industries
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Record</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>100% placement record maintained for many years - complete student satisfaction</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Specialized Placement Cell working directly with students to promote employability</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Strong industry relationships supporting internships and collaborative research</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Graduates working in consulting, banking, finance, IT, manufacturing, and retail</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Extensive corporate partnerships with renowned recruiters across industries</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Alumni network in major national and international organisations</span>
                </div>
              </div>

              <h3>Our Recruitment Partners</h3>
              <div className={styles.partnersGrid}>
                {placementPartners.map((partner, idx) => (
                  <div key={idx} className={styles.partnerCard}>
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IIITBangalore;
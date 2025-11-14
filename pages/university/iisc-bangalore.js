import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIScBangalore = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Doctor of Philosophy (PhD)', fee: 708000, duration: '3 Years', specializations: 42 },
    { name: 'Part-Time PhD', fee: 708000, duration: '3 Years', specializations: 42 }
  ];

  const keyHighlights = [
    'Established in 1909 - India\'s Premier Research Institute',
    'Ranked #1 in NIRF 2024 University Category',
    'Ranked #2 in NIRF 2024 Overall Category',
    'Institute of Eminence (IOE) Status by Government of India',
    'NAAC A+ Grade Accreditation with Excellence',
    '42 Departments & Centers Across Six Divisions',
    'Approximately 4,000 Students in Postgraduate & Doctoral Programs',
    'Four-Year Undergraduate Research Program in Fundamental Sciences',
    '440 Acres Lush Green Campus in Tech Hub Bengaluru',
    'Global Partnerships with Leading Technology Firms'
  ];

  const placementPartners = [
    'Google',
    'Microsoft',
    'Amazon',
    'Airtel',
    'Deloitte',
    'Ernst & Young',
    'L&T',
    'Siemens',
    'Tata Motors',
    'ISRO',
    'DRDO',
    'BARC',
    'Intel',
    'IBM',
    'Qualcomm',
    'Samsung',
    'Oracle',
    'Cisco',
    'Adobe',
    'TCS Research',
    'Wipro'
  ];

  const faqs = [
    {
      question: 'What are the programs offered at the Indian Institute of Science (IISc), Bangalore?',
      answer: 'IISc offers B.Sc (Research), M.Sc, M.Tech, Master of Management, PhD, and Part-Time PhD across 42 departments in science and engineering.'
    },
    {
      question: 'Does IISc offer courses in online mode?',
      answer: 'IISc focuses on residential programs but offers emerging online continuing education, executive programs, and specialized certificate courses. Check official website.'
    },
    {
      question: 'What are the qualifications required for admission at IISc?',
      answer: 'UG: JEE Advanced/KVPY/NEET-UG. PG: Bachelor\'s degree + GATE/CEED. PhD: Master\'s + GATE/UGC-NET/CSIR-NET. International: GRE scores accepted.'
    },
    {
      question: 'What are the ranking and accreditation of IISc Bangalore?',
      answer: 'IISc ranks #1 NIRF 2024 University, #2 Overall, Institute of Eminence (IOE) 2018, NAAC A+, premier research institution globally.'
    },
    {
      question: 'How to contact IISc for program information?',
      answer: 'Visit www.iisc.ac.in for programs, admissions, eligibility. Contact admissions office via email/phone. Campus: 440-acre, Bengaluru, Karnataka.'
    }
  ];

  return (
    <>
      <Head>
        <title>IISc Bangalore | Indian Institute of Science - PhD & Research Programs</title>
        <meta name="description" content="Explore research programs from IISc Bangalore - Ranked #1 NIRF 2024 University, #2 Overall, NAAC A+. PhD & Part-Time PhD across 42 departments." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IISc Bangalore.png" 
                alt="IISc Bangalore Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Bengaluru, Karnataka</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.7/5</span>
                    <span className={styles.reviews}>(263 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'NAAC A+', 'IoE'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 1 (University 2024)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>NAAC A+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {['about', 'courses', 'admissions', 'placements', 'faqs'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'courses' ? 'Programs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IISc Bangalore</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Science (IISc) Bangalore stands as India's most prestigious and distinguished scientific research institution, established in 1909 through the visionary philanthropy of industrialist Jamsetji Nusserwanji Tata, generous support from the Mysore royal family, and collaborative partnership with the Government of India. For over a century, IISc has maintained unwavering commitment to advancing scientific and technological knowledge, conducting groundbreaking research addressing fundamental questions and practical challenges, and educating successive generations of exceptional scientists, engineers, and researchers who have shaped India's scientific landscape and contributed significantly to global knowledge advancement.
                </p>
                <p>
                  IISc's institutional philosophy emphasizes achieving optimal balance between acquiring fundamental scientific knowledge and applying research discoveries for industrial advancement and social benefit. This distinctive approach has cultivated an environment where theoretical investigations coexist harmoniously with applied research, enabling breakthrough discoveries that address pressing societal challenges spanning healthcare, energy sustainability, environmental conservation, materials innovation, information technology, biotechnology, and emerging interdisciplinary domains. The institute's esteemed reputation attracts exceptional young faculty trained in premier global laboratories, supporting diverse interdisciplinary research output that transcends traditional disciplinary boundaries and addresses complex problems requiring integrated approaches.
                </p>
                <p>
                  The institute's comprehensive academic structure encompasses over 42 departments and research centers organized into six major divisions spanning Biological Sciences, Chemical Sciences, Electrical, Electronics, and Computer Sciences, Interdisciplinary Research, Mechanical Sciences, and Physical and Mathematical Sciences. IISc currently enrolls approximately 4,000 exceptional students pursuing advanced postgraduate and doctoral programs, while a specialized four-year undergraduate Bachelor of Science (Research) program offers research-driven education to talented young learners in fundamental sciences. Located on a magnificent 440-acre campus featuring lush greenery in Bengaluru's technology hub, IISc provides state-of-the-art research infrastructure, sophisticated laboratories, extensive library resources, high-performance computing facilities, and collaborative spaces fostering innovation, discovery, and transformative learning experiences.
                </p>
              </div>

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
                  <div className={styles.statNumber}>#1</div>
                  <div className={styles.statLabel}>NIRF University</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>#2</div>
                  <div className={styles.statLabel}>NIRF Overall</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>42+</div>
                  <div className={styles.statLabel}>Departments & Centers</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>4,000+</div>
                  <div className={styles.statLabel}>Research Scholars</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Advanced research programs designed for aspiring scientists and engineers pursuing scholarly excellence
              </p>
              
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Departments Available</th>
                      <th>Duration</th>
                      <th>Total Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.specializations} Department{course.specializations > 1 ? 's' : ''}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Fellowships, scholarships, and financial assistance available for eligible candidates. Research assistantships provided.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Comprehensive enrollment pathway to join India's premier scientific research institution
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Visit the official IISc Bangalore website and navigate to admissions section. Register with valid mobile number and email ID to obtain application credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Completion</h3>
                    <p>Enter comprehensive information including personal details, academic qualifications, entrance exam scores (GATE/UGC-NET/CSIR-NET), research interests, and upload necessary documents in scanned format.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Course Selection</h3>
                    <p>Select appropriate program and department based on academic background, research interests, and career aspirations. Review eligibility criteria carefully.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Review completed application thoroughly, pay application fees through online payment gateway, and submit. Save PDF confirmation for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Interview & Selection</h3>
                    <p>Shortlisted candidates receive interview call letters. Successfully clear departmental interview assessment. IISc prepares merit list and offers admission to selected candidates.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Undergraduate: JEE Advanced/KVPY/NEET-UG with exceptional scores required</li>
                  <li>Master's: Bachelor's degree + GATE/CEED scores mandatory</li>
                  <li>PhD: Master's degree + GATE/UGC-NET/CSIR-NET qualification essential</li>
                  <li>International applicants: GRE scores accepted with appropriate credentials</li>
                  <li>Fellowships and research assistantships available for doctoral students</li>
                  <li>Merit-based scholarships and government fellowships accessible</li>
                </ul>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD in Science:</strong> Master's degree in Science with minimum 60% marks or first class. CSIR/UGC NET, GATE, or equivalent national examination qualification preferred</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD in Engineering:</strong> M.Tech/M.E. with minimum 60% marks or Bachelor's with exceptional GATE score. Research proposal and interview mandatory for selection</span>
                </div>
              </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement Highlights</h2>
              <p className={styles.sectionDesc}>
                Outstanding career opportunities with premier global corporations, research institutions, and academia
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>Excellent</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Recruiters</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Premium</h3>
                  <p>Salary Packages</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Global</h3>
                  <p>Opportunities</p>
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

          {/* FAQs Section */}
          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Detailed responses addressing essential inquiries about IISc Bangalore's distinguished research programs
              </p>

              <div className={styles.faqsList}>
                {faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>
                      <span className={styles.qIcon}>Q.</span>
                      {faq.question}
                    </h3>
                    <p className={styles.faqAnswer}>
                      <span className={styles.aIcon}>A.</span>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IIScBangalore;
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const CCSUMeerut = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online BBA', fee: 72200, duration: '4 Years', specializations: 1 },
    { name: 'Online BBA Honours', fee: 72200, duration: '4 Years', specializations: 1 },
    { name: 'Online MA', fee: 22200, duration: '2 Years', specializations: 5 },
    { name: 'Online MBA', fee: 44200, duration: '2 Years', specializations: 2 },
    { name: 'Online M.Com', fee: 22200, duration: '2 Years', specializations: 1 },
    { name: 'Online MCA', fee: 52200, duration: '2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Established in 1965 with 222-acre campus',
    'NAAC A++ accredited university',
    'NIRF Rank 99, UGC approved',
    'First university to offer MPhil and PhD programs',
    'Affiliated with 109 colleges and 252 professional institutions',
    'Semester system with continuous assessment',
    'Grants from DBT, UGC, ICAR, AICTE, DST, CSIR',
    'Students excel in GATE, ARS, NET, GRE, Civil Services',
    'World-class facilities: library, labs, hostels, gymnasium',
    'Online and distance learning programs available'
  ];

  const placementPartners = [
    'Google', 'Accenture', 'Amazon', 'Bata', 'Bosch',
    'Capgemini', 'Deloitte', 'Fractal', 'H&M', 'HCL',
    'Infosys', 'ISRO', 'ITC', 'Kantar', 'Microsoft',
    'NTT Data', 'Paytm', 'Wipro', 'Genpact', 'Apple'
  ];

  const faqs = [
    {
      question: 'What facilities are offered by Chaudhary Charan Singh University?',
      answer: 'CCSU offers comprehensive facilities including a well-equipped library, gymnasium, separate hostels for girls and boys, indoor stadium, medical center, modern laboratories, spacious auditorium, botanical and rose gardens, canteen, and guest house across its 222-acre campus.'
    },
    {
      question: 'What was the previous name of Chaudhary Charan Singh University?',
      answer: 'The university was originally established as Meerut University in 1965. It was later renamed Chaudhary Charan Singh University in honor of the former Prime Minister of India, recognizing his contributions to education and rural development.'
    },
    {
      question: 'What courses are offered by CCSU?',
      answer: 'CCSU offers online BBA, BBA Honours, MA (Economics, Sociology, Political Science, English), MBA (Marketing, HR, Finance), M.Com, and MCA. The university also provides undergraduate diplomas and advanced diplomas in journalism, mass communication, business studies, and various other fields.'
    },
    {
      question: 'What steps are included in applying for a program at CCSU?',
      answer: 'Visit the official CCSU website, register for your desired program, log in and select the course, fill the application form, upload required documents, pay the fees, and submit. Candidates must also create ABC ID and DEB ID as per UGC guidelines.'
    },
    {
      question: 'Who are the placement partners at Chaudhary Charan Singh University?',
      answer: 'CCSU partners with leading companies including Google, Amazon, Microsoft, Accenture, Deloitte, Infosys, Wipro, HCL, TCS, Capgemini, Bosch, ISRO, and many other national and international organizations offering diverse career opportunities to graduates.'
    },
    {
      question: 'Does Chaudhary Charan Singh University offer EMI options?',
      answer: 'CCSU does not directly offer EMI options, but students can access third-party loan providers. The university provides scholarships and loan facilities to help students. Check the official website for specific scholarship criteria and application procedures.'
    }
  ];

  return (
    <>
      <Head>
        <title>CCSU Meerut Online Programs | BBA, MBA, MA, M.Com, MCA</title>
        <meta name="description" content="Chaudhary Charan Singh University Meerut online programs - NAAC A++, NIRF Rank 99. Online BBA, MBA, MA, M.Com, MCA courses with UGC approval." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Chaudhary Charan Singh University.png" 
                alt="Chaudhary Charan Singh University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Meerut, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(269 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'NAAC A++', 'AIU'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 99 (Overall)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>NAAC A++</span>
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
                {tab === 'faqs' ? 'FAQ' : tab === 'courses' ? 'Programs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Chaudhary Charan Singh University, Meerut</h2>
              <div className={styles.aboutContent}>
                <p>
                  Chaudhary Charan Singh University (CCSU), established in 1965, stands as one of India's premier educational institutions with a rich legacy spanning nearly six decades. Originally founded as Meerut University, the institution was later renamed to honor former Prime Minister Chaudhary Charan Singh, recognizing his outstanding contributions to education, agriculture, and rural development. Sprawling across 222 acres of picturesque land, the university campus features extensive playgrounds, experimental fields, botanical gardens, rose gardens, and modern infrastructure supporting academic excellence, research innovation, and holistic student development. CCSU earned the distinction of being the first university in India to offer MPhil and PhD programs just eight years after its establishment, demonstrating early commitment to advanced research and scholarly pursuits that continues today.
                </p>
                <p>
                  The university encompasses five specialized faculties offering comprehensive education across diverse disciplines through 22 UGC-sponsored courses and 35 self-financed job-oriented programs designed to meet contemporary industry demands. CCSU maintains affiliation with an extensive network of 109 colleges, one constituent college, and 252 professional colleges and institutions, creating a vast educational ecosystem serving thousands of students across Uttar Pradesh. The university's academic framework emphasizes continuous student development through a semester system complemented by regular assessments including tests, seminars, group discussions, quizzes, practical sessions, and projects that ensure comprehensive skill development beyond traditional examinations. Faculty members at CCSU are highly qualified, experienced professionals committed to delivering quality education and mentoring students toward academic excellence and professional success.
                </p>
                <p>
                  CCSU has embraced digital transformation by launching robust online education programs meeting modern learners' demands for flexible, accessible higher education. The online learning portfolio includes BBA, BBA Honours, MA in multiple specializations (Economics, Sociology, Political Science, English), MBA with concentrations in Marketing, HR, and Finance, M.Com, and MCA, all delivered through sophisticated learning management systems featuring recorded lectures, live interactive sessions, comprehensive study materials, and regular assessments. Students benefit from instruction by qualified faculty, exposure to international and guest faculty, and practical learning opportunities that mirror on-campus program quality. The university maintains the same rigorous academic standards, curriculum depth, and evaluation methods across online and traditional programs, ensuring degree holders receive education valued equally by employers and higher education institutions worldwide.
                </p>
                <p>
                  Research excellence forms a cornerstone of CCSU's institutional mission, evidenced by substantial grants received from prestigious statutory bodies including DBT, UGC, ICAR, AICTE, DST, UPSTC, CSIR, and various other funding agencies supporting cutting-edge investigations across sciences, engineering, social sciences, and humanities. The university's commitment to quality education is reflected in outstanding student performance in competitive examinations including GATE, ARS, NET, GRE, and civil services, with CCSU graduates consistently achieving high rankings and securing prestigious positions in international and Indian educational institutions, research organizations, government agencies, and corporate sectors. Accredited with NAAC A++ grade and ranked 99th nationally by NIRF, CCSU continues advancing its mission of providing accessible, affordable, quality education while fostering innovation, research, and societal contribution through knowledge creation and dissemination.
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
            </div>
          )}

          {/* Programs Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
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
                        <td>{course.specializations} Option{course.specializations > 1 ? 's' : ''}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionIntro}>
                CCSU's streamlined online admission process ensures easy enrollment for students seeking quality education through flexible learning modes.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>
                      Navigate to the official CCSU website and carefully verify you're on the authentic university portal to avoid duplicate or fraudulent websites. Familiarize yourself with available programs, eligibility criteria, fee structures, and admission timelines before beginning the application process.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Register & Login</h3>
                    <p>
                      Complete the registration process by providing basic personal information and creating login credentials. After registration, log in to your account and select your desired program. Carefully review eligibility criteria for your chosen program to ensure you meet all requirements before proceeding with the application.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Complete Application Form</h3>
                    <p>
                      Fill the comprehensive online application form with accurate personal, academic, and contact details. Upload all required documents including educational certificates, identity proof, photographs, and any program-specific documents. Create your ABC ID (Academic Bank of Credits) and DEB ID as mandated by UGC guidelines for online programs.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Submission</h3>
                    <p>
                      Pay the program fees through the secure online payment gateway using available payment methods including credit/debit cards, net banking, or UPI. After successful payment, carefully review all entered information for accuracy, then submit your completed application. Save the confirmation receipt for future reference and admission processing.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/B.Com/BBA/BCA):</strong> 10+2 from recognized board with minimum 45-50% marks depending on program. Age limit as per university norms</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/M.Com/MBA/MCA):</strong> Bachelor's degree in relevant discipline with minimum 50% aggregate from UGC recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Distance Education Programs:</strong> Same eligibility as regular mode. ABC ID and DEB ID creation mandatory as per UGC guidelines. Working professionals eligible</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionIntro}>
                CCSU maintains strong industry connections with leading organizations regularly recruiting skilled graduates across diverse sectors.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>85%+</h3>
                  <p>Placement Rate</p>
                </div>
              </div>

              <h3>Top Recruiters</h3>
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

export default CCSUMeerut;

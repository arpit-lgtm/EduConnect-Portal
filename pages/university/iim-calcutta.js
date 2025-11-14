import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMCalcutta = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive Program In Finance', fee: 464325, duration: '12 Months', specializations: 1 },
    { name: 'IIM Online Courses', fee: 464325, duration: '12 Months', specializations: 1 },
    { name: 'Executive MBA', fee: 3100000, duration: '1 Year', specializations: 1 },
    { name: 'Online MBA', fee: 3100000, duration: '2 Years', specializations: 1 },
    { name: 'Leadership Program', fee: 845000, duration: '12 Months', specializations: 1 },
  ];

  const keyHighlights = [
    'India\'s first IIM established in November 1961',
    'Ranked 4th in NIRF 2024 Management Category',
    'Triple accreditation: EQUIS, AACSB, and AMBA',
    'Collaboration with Alfred P. Sloan School of Management',
    'Offers online MBA, Executive MBA, and PGDBA programs',
    'Global center of excellence in management education',
    'Strong industry partnerships with top Fortune 500 companies',
    'Highest internship package of ₹2.5 LPA'
  ];

  const approvals = ['EQUIS', 'AACSB', 'AMBA'];
  const nirfRank = 'Rank 4 (2024)';
  const accreditation = 'EQUIS, AACSB, AMBA';

  const placementPartners = [
    'Google', 'Amazon', 'Microsoft', 'Deloitte', 'Capgemini', 'HCL',
    'Infosys', 'TCS', 'Wipro', 'EY', 'HP', 'Accenture'
  ];

  const faqs = [
    {
      question: 'Does IIM Calcutta offer online programs?',
      answer: 'Yes, IIM Calcutta offers online programs including Online MBA, Executive MBA, and Postgraduate Diploma in Business Analytics (PGDBA) with the same quality standards as on-campus programs.'
    },
    {
      question: 'Are the courses offered by IIM Calcutta in online mode valid?',
      answer: 'Yes, all online courses from IIM Calcutta are valid and recognized. They are approved by UGC and hold the same value as regular on-campus degrees in the industry.'
    },
    {
      question: 'Can we pursue an online examination at IIM Calcutta?',
      answer: 'Yes, IIM Calcutta conducts online examinations through their collaboration with Mercer, a global portal with over 2,000 proctors ensuring cheating-proof assessment processes.'
    },
    {
      question: 'Do I have to visit IIM Calcutta to pursue my online course?',
      answer: 'No, the online programs at IIM Calcutta are completely remote. However, some programs may have optional on-campus immersion sessions for networking and hands-on learning.'
    },
    {
      question: 'What courses are offered to the students at IIM Calcutta?',
      answer: 'IIM Calcutta offers Online MBA, Executive MBA, PGDBA, and various doctoral programs in specializations like Economics, Finance, Marketing, HR, Strategic Management, and more.'
    },
    {
      question: 'What is the eligibility for IIM Calcutta online programs?',
      answer: 'Eligibility varies by program. Most require a bachelor\'s degree with good academic record and CAT/GMAT scores. Work experience may be required for executive programs.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Calcutta Online Programs | Ranked 4th in NIRF 2024</title>
        <meta name="description" content="IIM Calcutta - India's first IIM offering online MBA, Executive MBA, and PGDBA programs. Triple accredited (EQUIS, AACSB, AMBA) with NIRF Rank 4." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Calcutta.png" 
                alt="IIM Calcutta Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Kolkata, West Bengal</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.7/5</span>
                    <span className={styles.reviews}>(600+ Reviews)</span>
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
              <h2>About IIM Calcutta</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIM Calcutta stands as India's pioneering management institute, established in November 1961 
                  through a groundbreaking collaboration between the Government of India, MIT's Alfred P. Sloan 
                  School of Management, The Ford Foundation, the Government of West Bengal, and leading Indian 
                  industry partners. This historic partnership laid the foundation for world-class management 
                  education in India.
                </p>
                <p>
                  As an autonomous institution with global recognition, IIM Calcutta has consistently delivered 
                  exceptional management education through its comprehensive portfolio of postgraduate programs, 
                  doctoral research initiatives, executive training courses, and strategic consulting engagements. 
                  The institute pioneered professional management education in India, setting standards that 
                  continue to influence business schools nationwide.
                </p>
                <p>
                  Today, IIM Calcutta represents a Global Center of Excellence across all management disciplines, 
                  deeply rooted in Indian societal values while maintaining international standards. Recognized 
                  as one of Asia's finest business schools, the institute attracts leading global companies and 
                  consistently delivers outstanding career opportunities with premium salary packages for its 
                  graduates.
                </p>
                <p>
                  The online programs portfolio includes Master of Business Administration (MBA), Executive MBA 
                  for experienced professionals, and the specialized Postgraduate Diploma in Business Analytics 
                  (PGDBA). With triple international accreditation from EQUIS, AACSB, and AMBA, plus CEMS MIM 
                  recognition, IIM Calcutta maintains its prestigious NIRF Rank 4 (2024) position in the 
                  management category.
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
                  <div className={styles.statNumber}>₹1.14 Cr</div>
                  <div className={styles.statLabel}>Highest Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Avg. Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3X</div>
                  <div className={styles.statLabel}>Interview Opportunities</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Premium online programs engineered for ambitious professionals seeking transformative career growth
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
                        <td>{course.specializations} Option{course.specializations > 1 ? 's' : ''}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Scholarships available including Aditya Birla Group, T. Thomas Scholarship, OP Jindal, and Ratan Tata Trust.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Strategic pathway to join India's most prestigious management institute
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Qualify CAT/GMAT</h3>
                    <p>Demonstrate academic excellence through competitive CAT or GMAT scores aligned with program-specific requirements and benchmarks.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Register Online</h3>
                    <p>Access the official IIM Calcutta admissions portal and complete registration using verified credentials including professional email, contact information, and identity details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application</h3>
                    <p>Authenticate using registered credentials and meticulously complete the comprehensive application form with precise personal, academic, and professional information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Documents</h3>
                    <p>Upload digitized versions of essential documents including academic transcripts, government-issued identification, professional experience certificates, and supporting credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Personal Interview</h3>
                    <p>Shortlisted candidates participate in rigorous Personal Interview rounds. Final selection determined through holistic evaluation of entrance scores, interview performance, and comprehensive profile assessment.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/PGDM Programs:</strong> Bachelor's degree with minimum 50% aggregate (45% for SC/ST/PWD). Valid CAT/GMAT score required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive MBA Programs:</strong> Graduation with minimum 5 years professional work experience in managerial/leadership roles</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Certificate Courses:</strong> Bachelor's degree from recognized university. Relevant work experience preferred</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Fellow Program (PhD):</strong> Master's degree or professional qualification like CA/ICWA/CS with strong academic credentials</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>CAT/GMAT score required for most programs</li>
                  <li>Minimum 50% marks in graduation (45% for SC/ST/PWD)</li>
                  <li>Work experience required for Executive MBA programs</li>
                  <li>Create ABC ID as per UGC guidelines</li>
                  <li>Multiple scholarship options available</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement Highlights</h2>
              <p className={styles.sectionDesc}>
                Unparalleled career advancement opportunities with Fortune 500 companies and global industry leaders
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹1.14 Crore</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>21%</h3>
                  <p>Average Package Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹2.5 LPA</h3>
                  <p>Highest Internship</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
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
                Comprehensive answers addressing key inquiries about IIM Calcutta's transformative online programs
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

              <div className={styles.contactCta}>
                <h3>Still have questions?</h3>
                <p>Our expert counselors are here to help you make the right decision</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Talk to Our Experts</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IIMCalcutta;

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMIndore = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive Program in Sales and Marketing', fee: 200000, duration: '12 Months', specializations: 1 },
    { name: 'Executive Program in Healthcare Management', fee: 300000, duration: '12 Months', specializations: 1 },
    { name: 'Executive Program In Digital Transformation', fee: 250000, duration: '12 Months', specializations: 1 },
    { name: 'Executive Certificate Program in Strategy and Leadership', fee: 300000, duration: '12 Months', specializations: 3 },
    { name: 'IIM Online Courses', fee: 373000, duration: '12 - 24 Months', specializations: 8 },
  ];

  const keyHighlights = [
    'Established in 1996 - One of India\'s premier IIMs',
    'Ranked 8th in NIRF 2024 Management Category',
    'Triple accreditation: EQUIS, AACSB, and AMBA',
    'Only IIM offering Integrated Program in Management (IPM) after 12th',
    'Strong industry collaborations with Fortune 500 companies',
    'Excellent placement record with top recruiters',
    'State-of-the-art campus and learning facilities',
    'Comprehensive scholarship programs available'
  ];

  const approvals = ['EQUIS', 'AACSB', 'AMBA'];
  const nirfRank = 'Rank 8 (2024)';
  const accreditation = 'EQUIS, AACSB, AMBA';

  const placementPartners = [
    'Amazon', 'Google', 'Microsoft', 'McKinsey', 'BCG', 'Deloitte',
    'KPMG', 'EY', 'Accenture', 'Wipro', 'TCS', 'Infosys'
  ];

  const faqs = [
    {
      question: 'Does IIM Indore offer online programs?',
      answer: 'Yes, IIM Indore offers various online executive certificate programs in Sales & Marketing, Healthcare, Digital Transformation, and Strategy & Leadership designed for working professionals.'
    },
    {
      question: 'What is the duration of online programs at IIM Indore?',
      answer: 'The duration varies by program - ranging from 6 months to 11 months. Most certificate programs are 11 months long with flexible learning schedules.'
    },
    {
      question: 'What is the Integrated Program in Management (IPM)?',
      answer: 'IPM is a unique 5-year integrated program offered by IIM Indore for students after 12th standard. It combines undergraduate and postgraduate management education.'
    },
    {
      question: 'What are the eligibility criteria for IIM Indore online programs?',
      answer: 'Eligibility varies by program. Most certificate programs require a bachelor\'s degree and relevant work experience. Specific requirements are mentioned for each program.'
    },
    {
      question: 'Is IIM Indore accredited internationally?',
      answer: 'Yes, IIM Indore has triple international accreditation from EQUIS, AACSB, and AMBA, placing it among the top 1% of business schools globally.'
    },
    {
      question: 'What kind of placement support does IIM Indore provide?',
      answer: 'IIM Indore has a dedicated Career Development Services team that provides comprehensive placement support with access to top recruiters across industries.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Indore Online Programs | Ranked 8th in NIRF 2024</title>
        <meta name="description" content="IIM Indore - Premier management institute offering online executive programs. Triple accredited (EQUIS, AACSB, AMBA) with NIRF Rank 8." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Indore.png" 
                alt="IIM Indore Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Indore, Madhya Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Established:</span>
                  <span className={styles.infoValue}>1996</span>
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
              <h2>About IIM Indore</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIM Indore emerged as India's sixth premier management institute in 1996, rapidly establishing 
                  itself as a leading business school across Asia through exceptional academic standards, 
                  groundbreaking research capabilities, and robust industry collaborations. Within a remarkably 
                  short timeframe, the institute has achieved recognition among the global elite of management 
                  education institutions.
                </p>
                <p>
                  IIM Indore pioneered the innovative five-year Integrated Programme in Management (IPM) in 2011, 
                  becoming the first IIM to offer direct admission to students immediately after completing their 
                  12th standard. This revolutionary program has achieved tremendous success and has been adopted 
                  by several other IIMs, demonstrating IIM Indore's leadership in educational innovation.
                </p>
                <p>
                  The institute delivers a comprehensive spectrum of programs including the flagship Post Graduate 
                  Programme in Management (PGP), rigorous Fellow Programme in Management (FPM) for doctoral 
                  candidates, intensive Executive Post Graduate Programme (EPGP), and diverse Executive Education 
                  initiatives. The online and executive programs are strategically crafted for ambitious 
                  professionals pursuing accelerated career advancement.
                </p>
                <p>
                  IIM Indore maintains triple international accreditation from EQUIS, AACSB, and AMBA, positioning 
                  it within an exclusive global cohort of premier business schools. Consistently featured among 
                  India's top 10 management institutes, IIM Indore secured the prestigious 8th position in NIRF 
                  2024 rankings within the management category.
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
                  <div className={styles.statNumber}>₹1 Cr+</div>
                  <div className={styles.statLabel}>Highest Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>250+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Placement Record</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Top 1%</div>
                  <div className={styles.statLabel}>Globally Accredited</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Elite executive programs meticulously designed for high-performing professionals driving organizational excellence
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
                <strong>Note:</strong> Flexible EMI options available. Scholarships for meritorious students and early bird discounts offered.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Comprehensive enrollment pathway to join one of Asia's most distinguished management institutes
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Check Eligibility</h3>
                    <p>Review program-specific eligibility criteria including educational qualifications and work experience requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Visit the official IIM Indore website and fill out the online application form with accurate details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Documents</h3>
                    <p>Upload required documents including educational certificates, ID proof, work experience letters, and passport-sized photograph.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Selection Process</h3>
                    <p>Shortlisted candidates participate in personal interview sessions, or undergo comprehensive profile evaluation based on academic excellence and professional achievements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Selected candidates receive official offer letters. Finalize admission by completing fee payment within designated timelines using available payment methods.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree in any discipline required for most programs</li>
                  <li>Work experience requirements vary by program</li>
                  <li>CAT/GMAT scores required for PGP and EPGP programs</li>
                  <li>IPM requires 12th pass with 60% marks and IPMAT entrance</li>
                  <li>Flexible payment options and EMI facilities available</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement Highlights</h2>
              <p className={styles.sectionDesc}>
                Outstanding career transformation opportunities with premier global corporations and industry frontrunners
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹1 Crore+</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>250+</h3>
                  <p>Recruiters</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Multiple</h3>
                  <p>International Offers</p>
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
                Detailed responses addressing essential inquiries about IIM Indore's distinguished online programs
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

export default IIMIndore;

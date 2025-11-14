import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const AligarhMuslimUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesData = [
    { name: 'Online Bachelor of Arts (BA)', fee: 27000, duration: '3 Years', specializations: 6 },
    { name: 'Online Bachelor of Commerce (B.Com)', fee: 43800, duration: '3 Years', specializations: 1 },
    { name: 'Online Master of Arts (MA)', fee: 31000, duration: '2 Years', specializations: 6 },
    { name: 'Online Master of Commerce (M.Com)', fee: 33000, duration: '2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Established in 1920 as prestigious Central University with excellence in digital education since 1920',
    'Distinguished A+ rating from the National Assessment and Accreditation Council (NAAC)',
    'Premier educational institution recognized by National Institutional Ranking Framework (NIRF)',
    'Bachelor of Arts and Bachelor of Commerce programs at undergraduate level with diverse specializations',
    'Master of Arts and Master of Commerce programs available incorporating Industry Projects and Internship Experience Components',
    'Digital Learning Platform with comprehensive course materials, interactive lecture sessions, and detailed tutorial resources',
    'Expert Faculty Excellence with distinguished professors possessing extensive practical experience',
    'Affordable Premium Education delivering top-tier online learning experiences at reasonable costs'
  ];

  const approvals = ['UGC-DEB', 'NAAC A+', 'NIRF Ranked', 'Central University'];
  const nirfRank = 'Top 10 Universities';
  const accreditation = 'NAAC A+ Grade';

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 
    'Tech Mahindra', 'Accenture', 'IBM', 'Microsoft', 'Google', 'Amazon', 'Flipkart'
  ];

  const faqs = [
    {
      question: 'Does Aligarh Muslim University\'s online degree program hold UGC approval?',
      answer: 'Absolutely. The online academic programs offered by Aligarh Muslim University carry complete UGC-DEB (University Grants Commission - Distance Education Bureau) authorization, ensuring academic credentials hold identical value to traditional campus-based degrees.'
    },
    {
      question: 'Which academic programs are available through Aligarh Muslim University\'s online platform?',
      answer: 'The university\'s online education portfolio encompasses BA, B.Com, MA, and M.Com programs featuring diverse specialization options across arts, commerce, and humanities disciplines.'
    },
    {
      question: 'What examination methodology does Aligarh Muslim University implement for online students?',
      answer: 'Online assessments follow a structured evaluation system with both continuous assessment and semester-end examinations. Students access examination modules via their personalized academic portal with secure proctoring systems.'
    },
    {
      question: 'What enrollment pathway does Aligarh Muslim University implement for online learners?',
      answer: 'The enrollment methodology operates entirely through digital channels. Begin with portal registration on the official website, complete application forms with OTP authentication, upload required documentation, finalize submission, and execute online payment. Preserve receipts for academic records.'
    }
  ];

  return (
    <>
      <Head>
        <title>Aligarh Muslim University Online - Distance Education Programs | MBA NINJA</title>
        <meta name="description" content="Explore Aligarh Muslim University's UGC-approved online degree programs. BA, B.Com, MA, M.Com with NAAC A+ accreditation." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Aligarh Muslim University.png" 
                alt="Aligarh Muslim University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Aligarh, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(2,500+ Reviews)</span>
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
                  <span className={styles.infoLabel}>NIRF Status:</span>
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
              <h2>About Aligarh Muslim University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Established in 1920, Aligarh Muslim University represents a distinguished extension of the prestigious 
                  Central University, which has been pioneering excellence in digital education since its inception. 
                  This esteemed institution has received comprehensive authorization from the University Grants Commission 
                  (UGC) to deliver both undergraduate and postgraduate academic programs through sophisticated online modalities.
                </p>
                <p>
                  Distinguished with an exceptional A+ rating from the National Assessment and Accreditation Council (NAAC), 
                  the university maintains its position among India's premier educational institutions as recognized by 
                  the National Institutional Ranking Framework (NIRF). The university's commitment to academic excellence 
                  is reflected through its innovative digital learning ecosystem and comprehensive support infrastructure.
                </p>
                <p>
                  The university's online division extends quality education through Bachelor of Arts and Bachelor of Commerce 
                  programs at the undergraduate level, alongside Master of Arts and Master of Commerce programs featuring 
                  diverse specialization tracks. These programs are enriched with Industry Projects and Internship Experience 
                  Components, ensuring students gain practical exposure alongside theoretical knowledge.
                </p>
                <p>
                  Students benefit from a specialized digital learning ecosystem that encompasses comprehensive course materials, 
                  interactive lecture sessions, and detailed tutorial resources within their academic programs. The university 
                  maintains a robust examination system conducted entirely through online platforms using their proprietary 
                  Learning Management System, ensuring academic integrity and accessibility.
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
                  <div className={styles.statNumber}>50K+</div>
                  <div className={styles.statLabel}>Students Annually</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Central</div>
                  <div className={styles.statLabel}>University Status</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A+</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Years Legacy</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our diverse range of UGC-approved online degree programs designed to advance your career
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
                        <td>{course.specializations}+ Options</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> EMI options available for all programs. 
                Affordable fee structure compared to other private universities.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Enrollment Pathway 2025</h2>
              <p className={styles.sectionDesc}>
                Navigate these streamlined steps to confirm your enrollment at Aligarh Muslim University's online programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Portal Registration</h3>
                    <p>Access the enrollment gateway through the official university portal and identify your preferred academic program along with qualification prerequisites.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Account Setup & Information Entry</h3>
                    <p>Input essential contact information including mobile credentials and password authentication. Complete verification through OTP validation sent to your registered contact.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Digitally upload scanned copies of academic transcripts, degree certificates, and official identification documents for administrative verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Finalization & Payment</h3>
                    <p>Execute final submission after comprehensive review of entered details, followed by secure online payment processing through encrypted gateway.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation Documentation</h3>
                    <p>Generate payment receipt and preserve completed application form for future academic references. Commence your educational trajectory.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/B.Com/BBA):</strong> 12th pass from recognized board with minimum 45-50% marks depending on program and category</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/M.Com/MBA):</strong> Bachelor's degree in relevant discipline with minimum 50% marks (45% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Distance Education Programs:</strong> Same as regular programs. ODL credentials maintain equivalency with conventional degrees per UGC certification</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Essential Guidelines</h3>
                <ul>
                  <li>Academic intake cycles occur biannually - January/February and July/August sessions following UGC regulations</li>
                  <li>Most academic programs waive entrance examination requirements</li>
                  <li>Establish ABC ID (Academic Bank of Credits) conforming to current UGC directives</li>
                  <li>Complete fee reimbursement available within designated timeframe per UGC framework</li>
                  <li>Documentation requirements: Secondary & senior secondary certificates, undergraduate degree (for postgraduate applicants), identification verification, passport photographs</li>
                  <li>ODL qualification credentials maintain equivalency with conventional degrees per UGC certification</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access career opportunities through our placement assistance and industry connections
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>85%</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹4.5L</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>200+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹12L</h3>
                  <p>Highest Package</p>
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

              <div className={styles.placementSupport}>
                <h3>Career Support Services</h3>
                <ul>
                  <li>Resume building and profile enhancement workshops</li>
                  <li>Interview preparation and mock interview sessions</li>
                  <li>Industry-specific skill development programs</li>
                  <li>Career counseling and guidance sessions</li>
                  <li>Placement assistance for working professionals</li>
                  <li>Alumni network access for career opportunities</li>
                </ul>
              </div>
            </div>
          )}

          {/* FAQs Section */}
          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common queries about Aligarh Muslim University Online programs
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

export default AligarhMuslimUniversity;
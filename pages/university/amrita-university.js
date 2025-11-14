import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const AmritaUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  // University data
  const approvals = ['UGC', 'AICTE', 'NAAC A++', 'NIRF'];
  const nirfRank = '#7 Best University in India (NIRF 2024)';
  const accreditation = 'NAAC A++ Grade';
  
  const keyHighlights = [
    'Ranked 7th Best University in India by NIRF 2024',
    'Distinguished A++ Grade from National Assessment and Accreditation Council (NAAC)',
    'Multi-disciplinary research-intensive private institution approved by University Grants Commission (UGC)',
    'World-class faculty comprising professors and mentors from India and abroad',
    'Industry-aligned curriculum designed to meet evolving market demands',
    'Comprehensive placement assistance with dedicated support system',
    'Innovative award-winning learning pedagogy delivering immersive educational experiences',
    'Amrita Technology Business Incubator (TBI) recognized as premier startup incubation facility'
  ];

  const programs = [
    {
      name: 'Online Bachelor of Business Administration (BBA)',
      duration: '3 Years',
      fees: '₹1,35,000',
      specializations: 4
    },
    {
      name: 'Online Bachelor of Computer Applications (BCA)',
      duration: '3 Years', 
      fees: '₹1,35,000',
      specializations: 4
    },
    {
      name: 'Online Bachelor of Commerce (B.Com)',
      duration: '3 Years',
      fees: '₹1,20,000',
      specializations: 4
    },
    {
      name: 'Online Master of Business Administration (MBA)',
      duration: '2 Years',
      fees: '₹1,70,000',
      specializations: 6
    },
    {
      name: 'Online Master of Computer Applications (MCA)',
      duration: '2 Years',
      fees: '₹1,40,000', 
      specializations: 4
    },
    {
      name: 'Online Master of Commerce (M.Com)',
      duration: '2 Years',
      fees: '₹90,000',
      specializations: 4
    }
  ];

  const placementPartners = [
    'Amazon', 'Cognizant', 'Deloitte', 'Godrej', 'HDFC Bank',
    'Honeywell', 'McKinsey & Company', 'Mphasis', 'TCS', 'Wipro'
  ];

  const faqs = [
    {
      question: "What is the admission process for Amrita University online programs?",
      answer: "The admission process is entirely online. Visit the official website, register on the portal, complete the application form with OTP verification, upload required documents, submit the application, and make online payment. Keep receipts for your records."
    },
    {
      question: "Are Amrita University online degrees UGC approved and valid?",
      answer: "Yes, all online degree programs offered by Amrita University are fully UGC approved and hold the same validity as regular degrees. The university is also NAAC A++ accredited and recognized by AICTE for technical programs."
    },
    {
      question: "What is the fee structure for Amrita online programs?",
      answer: "Fee structure varies by program: B.Com (₹1,20,000), BBA/BCA (₹1,35,000 each), MCA (₹1,40,000), MBA (₹1,70,000), M.Com (₹90,000). Fees can be paid semester-wise and EMI options are available through education loan partners."
    },
    {
      question: "What placement support does Amrita provide for online students?",
      answer: "Amrita provides comprehensive placement assistance including resume building, interview preparation, skill development workshops, and access to 300+ placement partners including Amazon, TCS, Wipro, Deloitte, and McKinsey & Company."
    },
    {
      question: "How are online classes conducted at Amrita University?",
      answer: "Classes are conducted through a sophisticated Learning Management System featuring live interactive sessions, recorded lectures for revision, digital study materials, online assessments, and virtual labs for practical learning."
    }
  ];

  return (
    <>
      <Head>
        <title>Amrita University Online - Distance Education Programs | MBA NINJA</title>
        <meta name="description" content="Explore Amrita University's UGC-approved online degree programs. 6 online programs with NAAC A++ accreditation and NIRF #7 ranking." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Amrita University.png" 
                alt="Amrita University Logo"
                className={styles.universityLogoLarge}
              />
            </div>
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Coimbatore, Tamil Nadu</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.8/5</span>
                    <span className={styles.reviews}>(3,200+ Reviews)</span>
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

        {/* Tabs Navigation */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {['about', 'courses', 'admissions', 'placements', 'faqs'].map((tab) => (
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

        {/* Tab Content */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Amrita University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Established in 2003, Amrita University stands as a distinguished multi-disciplinary research-intensive 
                  private university holding UGC approval and achieving remarkable recognition as the 7th Best University in India 
                  according to National Institutional Ranking Framework (NIRF) 2024. The institution has earned the highest A++ Grade 
                  from National Assessment and Accreditation Council (NAAC), reflecting its commitment to educational excellence.
                </p>
                
                <p>
                  Amrita Online represents the digital education division of Amrita University, delivering comprehensive 
                  education through entirely online modalities. The program features world-class faculty including professors and 
                  mentors from both Indian and international backgrounds, ensuring that online learners receive the same caliber 
                  of instruction as on-campus students.
                </p>
                
                <p>
                  The curriculum architecture mirrors regular course structures while maintaining industry alignment, designed with 
                  careful consideration of evolving technological trends and contemporary industry requirements. This approach ensures 
                  students receive immersive learning experiences that prepare them for dynamic professional environments.
                </p>
                
                <p>
                  Students benefit from comprehensive placement assistance through a dedicated support system that includes resume 
                  building, interview preparation, skill development workshops, and access to over 300 placement partners. The 
                  university's Amrita Technology Business Incubator (TBI) is recognized as a premier startup incubation facility in India.
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
                  <div className={styles.statNumber}>6</div>
                  <div className={styles.statLabel}>Online Programs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>#7</div>
                  <div className={styles.statLabel}>NIRF Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A++</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Placement Partners</div>
                </div>
              </div>
            </div>
          )}

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
                      <th>Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((program, idx) => (
                      <tr key={idx}>
                        <td className={styles.programName}>{program.name}</td>
                        <td>{program.specializations} Specializations</td>
                        <td>{program.duration}</td>
                        <td className={styles.fees}>{program.fees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                Join Amrita University through our streamlined online admission process designed for working professionals
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Portal Registration</h3>
                    <p>Access the enrollment gateway through the official Amrita University portal and identify your preferred academic program along with qualification prerequisites.</p>
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
                  <span><strong>UG Programs (BBA/BCA/B.Com):</strong> 10+2 or equivalent from recognized board with minimum 50% aggregate marks. Age limit may apply for certain programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MBA/MCA/M.Com):</strong> Bachelor's degree from UGC recognized university with minimum 50% marks in relevant discipline</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online/Distance Programs:</strong> Same eligibility as regular programs. Working professionals and fresh graduates both eligible for online programs</span>
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

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access career opportunities through our placement assistance and industry connections
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>90%</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹5.2L</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹15L</h3>
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

              <div className={styles.placementServices}>
                <h3>Placement Support Services</h3>
                <ul>
                  <li>Comprehensive resume development and portfolio building assistance</li>
                  <li>Industry-specific interview preparation and mock assessment sessions</li>
                  <li>Technical and soft skills enhancement workshops</li>
                  <li>Direct industry connections through alumni and corporate partnerships</li>
                  <li>Career counseling and guidance sessions</li>
                  <li>Placement assistance for working professionals</li>
                  <li>Alumni network access for career opportunities</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common queries about Amrita University Online programs
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

export default AmritaUniversity;
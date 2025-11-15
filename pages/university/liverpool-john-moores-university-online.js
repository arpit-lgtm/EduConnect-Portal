import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function LiverpoolJohnMooresPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['WES', 'AACSB', 'Privy Council', 'QAA'];
  const accreditation = 'Privy Council Accredited, AACSB';
  const nirfRank = 'International University (UK)';

  const keyHighlights = [
    'UK Privy Council chartered university established in 1992',
    'AACSB accredited business school (top 5% globally)',
    'WES recognized for degree equivalency in India',
    'QAA (Quality Assurance Agency) approved programs',
    '100% online MBA and MSc programs',
    'Internationally recognized UK degrees',
    'Study from India with flexible scheduling',
    'Strong global alumni network of 250,000+ graduates'
  ];

  const coursesData = [
    { name: 'Online Executive MBA', specializations: '6', duration: '18 Months', fee: 485000 },
    { name: 'Online Global MBA', specializations: '5', duration: '18 Months', fee: 485000 },
    { name: 'Master of Science (M.Sc)', specializations: '3', duration: '18 Months', fee: 504000 },
    { name: 'Online MBA', specializations: '6', duration: '18 Months', fee: 485000 },
    { name: 'Online One Year MBA', specializations: '1', duration: '18 Months', fee: 485000 },
    { name: 'Online M.Sc (Master of Science)', specializations: '2', duration: '18 Months', fee: 504000 }
  ];

  const placementPartners = [
    'KPMG', 'Deloitte', 'PwC', 'Ernst & Young', 'Accenture',
    'IBM', 'Microsoft', 'Amazon', 'Google', 'Barclays',
    'HSBC', 'Santander', 'NHS', 'BBC', 'Unilever'
  ];

  const faqs = [
    {
      question: 'What programs does Liverpool John Moores University offer for Indian students?',
      answer: 'LJMU offers 100% online MBA and M.Sc programs specifically designed for working professionals worldwide, including India. Programs include Executive MBA, Global MBA, regular MBA, and Master of Science in various specializations, all delivered entirely online.'
    },
    {
      question: 'Is LJMU degree recognized in India?',
      answer: 'Yes, Liverpool John Moores University is a UK Privy Council chartered university, and degrees are internationally recognized. The university is approved by WES (World Education Services) for degree equivalency evaluation in India. AACSB accreditation ensures global recognition of business programs.'
    },
    {
      question: 'What is the fee structure for online MBA and M.Sc programs?',
      answer: 'Online MBA programs (Executive, Global, and regular MBA) have a total fee of ₹4,85,000 for 18 months. M.Sc programs cost ₹5,04,000 for 18 months. Fees include tuition, online learning resources, and digital library access. Installment payment options may be available.'
    },
    {
      question: 'What specializations are available in the MBA programs?',
      answer: 'The Executive MBA and Online MBA offer 6 specializations, the Global MBA offers 5 specializations. Common areas include International Business, Finance, Marketing, Human Resource Management, Operations Management, and Strategic Management. Specific offerings may vary by program.'
    },
    {
      question: 'What is the duration of the programs and how are they delivered?',
      answer: 'All programs are 18 months in duration and delivered 100% online. Students access live and recorded lectures, participate in virtual discussions, complete assignments, and work on projects through LJMU\'s online learning platform. No physical campus visits are required.'
    },
    {
      question: 'Can I work while studying the online programs from India?',
      answer: 'Yes, absolutely. LJMU\'s online programs are specifically designed for working professionals. The flexible online format allows you to study at your own pace, access materials 24/7, and balance your education with full-time employment. Most students continue working while studying.'
    }
  ];

  return (
    <>
      <Head>
        <title>Liverpool John Moores University Online | MBA M.Sc Programs India | AACSB Accredited</title>
        <meta name="description" content="LJMU offers 100% online MBA and M.Sc programs for Indian students. UK Privy Council chartered, AACSB accredited, WES recognized. Study from India. Apply now!" />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Liverpool John Moores University.png" 
                alt="Liverpool John Moores University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Liverpool, United Kingdom</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.3/5</span>
                    <span className={styles.reviews}>(587 Reviews)</span>
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
              <h2>About Liverpool John Moores University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Liverpool John Moores University (LJMU) is a modern civic university located in Liverpool, United Kingdom. Established in 1992, LJMU has deep roots dating back to 1823, making it one of the longest-established higher education institutions in the UK. Named after Sir John Moores, the founder of Littlewoods, the university has grown to become a leading institution for practical, career-focused education.
                </p>
                <p>
                  LJMU is chartered by the Privy Council and holds AACSB accreditation for its business school, placing it among the top 5% of business schools worldwide. The university serves over 25,000 students including a significant international student community from more than 100 countries. All programs are approved by QAA (Quality Assurance Agency for Higher Education), the independent body that checks quality and standards in UK universities.
                </p>
                <p>
                  The university's online programs are delivered through a state-of-the-art learning management system that provides an immersive, interactive learning experience. Students access live lectures, recorded sessions, digital resources, virtual classrooms, and collaborative tools from anywhere in the world. The 100% online format means no physical campus visits are required, making it ideal for Indian students who want to earn a prestigious UK degree while continuing to work.
                </p>
                <p>
                  LJMU degrees are recognized by WES (World Education Services) for credential evaluation in India and other countries, making them valuable for global career opportunities. Join a thriving network of 250,000+ LJMU alumni across the globe, including business leaders, entrepreneurs, athletes, researchers, and creative professionals.
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
                  <div className={styles.statNumber}>250,000+</div>
                  <div className={styles.statLabel}>Global Alumni</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>25,000+</div>
                  <div className={styles.statLabel}>Current Students</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Top 5%</div>
                  <div className={styles.statLabel}>AACSB Accredited</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>18 Months</div>
                  <div className={styles.statLabel}>Fast-Track Programs</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our AACSB accredited MBA and M.Sc programs for international students
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
                <strong>Note:</strong> 100% online delivery. 18-month fast-track programs. Fees include tuition and digital resources. Installment options available. WES verification for Indian students.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple and transparent admission process for international students
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Check Eligibility</h3>
                    <p>Review program-specific requirements including educational qualifications, work experience (for MBA), and English proficiency standards.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Prepare Documents</h3>
                    <p>Gather academic transcripts, degree certificates, English proficiency test scores (IELTS/TOEFL), work experience letters, CV, letters of recommendation, and statement of purpose.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Application</h3>
                    <p>Complete the application form on LJMU's official website, upload all required documents, and pay the application fee online.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Review</h3>
                    <p>The international admissions team reviews your application and supporting documents. This process typically takes 2-4 weeks.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Receive Offer Letter</h3>
                    <p>If accepted, you'll receive a conditional or unconditional offer letter via email with enrollment instructions.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Enroll & Begin Studies</h3>
                    <p>Accept your offer, pay the tuition fee, receive login credentials for the online learning platform, and begin your program with orientation.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA Programs:</strong> Bachelor's degree from recognized university (any discipline) with good academic standing</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Work Experience:</strong> Minimum 2-3 years of professional work experience for MBA programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Sc Programs:</strong> Bachelor's degree in relevant field with minimum 55-60% or equivalent</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>English Proficiency:</strong> IELTS 6.5+ (no band below 6.0) or TOEFL iBT 88+</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>100% online delivery with no campus visits required</li>
                  <li>Live and recorded lectures available for flexibility</li>
                  <li>All programs are 18 months duration (fast-track)</li>
                  <li>WES verification available for credential evaluation in India</li>
                  <li>Installment payment options may be available</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Comprehensive career services for online students worldwide
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>250,000+</h3>
                  <p>Alumni Network</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Career Support</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Global</h3>
                  <p>Job Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Lifetime</h3>
                  <p>Access to Services</p>
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
                Find answers to common queries about LJMU online programs
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
}

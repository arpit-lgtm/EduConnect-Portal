import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function JainUniversityOnline() {
  const [activeTab, setActiveTab] = useState('about');

  const courses = [
    { name: 'Online MA', duration: '2 Years', fee: 90000, mode: 'Online' },
    { name: 'Online M.Com', duration: '2 Years', fee: 110000, mode: 'Online' },
    { name: 'Online B.Com', duration: '3 Years', fee: 90000, mode: 'Online' },
    { name: 'Online MCA', duration: '2 Years', fee: 160000, mode: 'Online' },
    { name: 'Online BBA', duration: '3 Years', fee: 150000, mode: 'Online' },
    { name: 'Online MBA', duration: '2 Years', fee: 196000, mode: 'Online' },
    { name: 'Online MBA Dual', duration: '2 Years', fee: 196000, mode: 'Online' },
    { name: 'Online B.Com Honours', duration: '3 Years', fee: 127500, mode: 'Online' },
    { name: 'Online BCA', duration: '3 Years', fee: 165000, mode: 'Online' }
  ];

  const placementPartners = [
    'ICICI Bank', 'Hitachi', 'Honeywell', 'Infosys', 'Johnson Controls',
    'Kelloggs', 'KPMG', 'PWC', 'Google', 'Facebook',
    'EY', 'Flipkart', 'Amazon', 'TCS', 'Wipro',
    'HCL', 'Accenture', 'Deloitte', 'Microsoft', 'IBM', 'Oracle'
  ];

  const keyHighlights = [
    'UGC-DEB Approved for Online Mode with Full Recognition',
    'NAAC A++ Accredited Institution with Excellence in Education',
    'NIRF Rank 65 in University Category 2023',
    'QS Ranked Among India\'s Top 100 Universities',
    '30+ Years Legacy of the Prestigious Jain Group',
    '2000+ Hiring Partners Including KPMG, Infosys, Google, EY',
    '70+ Elective Courses Across Multiple Specializations',
    'Access to 20,000+ LinkedIn Learning Courses for Skill Enhancement'
  ];

  const faqs = [
    {
      question: 'Is the online degree given by Jain Online approved and entitled?',
      answer: 'Yes, approved by UGC-DEB for online mode. NAAC A++ accredited, NIRF Rank 65, and recognized equivalently to on-campus degrees.'
    },
    {
      question: 'What are the eligibility criteria for online degree programs?',
      answer: 'UG programs require 10+2. PG programs need bachelor\'s degree with minimum 50%. Professional experience beneficial for executive programs.'
    },
    {
      question: 'Which online courses are offered by Jain Online?',
      answer: 'MBA (22 specializations), MCA (9 specializations), BBA (8 specializations), BCA (5 specializations), B.Com, M.Com, MA, and certificate programs.'
    },
    {
      question: 'What is the fee for the online MBA from Jain University?',
      answer: 'Online MBA fee is ₹1,96,000 for 2 years. 0% EMI options available with flexible installment plans for working professionals.'
    },
    {
      question: 'What are the facilities at Jain Online University?',
      answer: '70+ electives, 20K+ LinkedIn Learning courses, on-campus events, global partnerships, 2K+ hiring corporates, and comprehensive LMS platform with study materials.'
    }
  ];

  return (
    <>
      <Head>
        <title>Jain University Online - UGC Approved Online Degrees</title>
        <meta name="description" content="Jain University Online offers UGC-DEB approved degrees with NAAC A++ accreditation. NIRF Rank 65. 2000+ hiring partners with 70+ electives and global exposure." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Jain University.png" 
                alt="Jain University Online Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => {
                  e.target.src = '/images/universities/default-university-logo.png';
                }}
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
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(500+ Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC-DEB', 'AICTE', 'NAAC A++'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 65 (Overall 2023)</span>
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
            {['about', 'programs', 'admissions', 'placements', 'faq'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'faq' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>

        {/* About Section */}
        {activeTab === 'about' && (
          <div className={styles.section}>
            <h2>About Jain University Online</h2>
            <div className={styles.aboutContent}>
              <p>
                Jain Online represents the comprehensive e-learning platform of the esteemed Jain Deemed To Be University, strategically headquartered in Bengaluru, Karnataka's technology capital. The Jain Group brings an impressive legacy spanning over three decades of excellence in delivering quality education across India and beyond. This prestigious institution has established remarkable credentials not only in academic instruction but also in groundbreaking research initiatives and entrepreneurship development programs that foster innovation and business acumen. The university's multifaceted approach ensures students receive holistic education combining theoretical foundations with practical applications, preparing them for leadership roles in diverse professional domains and competitive global markets.
              </p>
              
              <p>
                The core vision driving Jain Online centers on democratizing access to higher education by providing world-class degree programs without compromising educational quality, enabling students to learn from their homes and working professionals to upskill while maintaining career continuity. The university holds prestigious UGC-DEB approval for offering courses in online mode, ensuring complete legitimacy and employer recognition. Jain University has earned distinguished rankings including placement among India's top 100 universities by QS World Ranking, 5-star rating in the Young Universities category, and NIRF Rank 65 in the University Category. Additionally, Jain University serves as an authorized partner for the "Study in India (SII)" program, reinforcing its commitment to international education standards. The platform offers comprehensive undergraduate, postgraduate, certification, and PGCP courses across Management, Commerce, Computer Applications, and Arts domains, with select professional programs delivered in collaboration with accredited universities in the United Kingdom and United States.
              </p>
              
              <p>
                Jain Online's infrastructure comprises collaborations with over 7 leading global professional bodies, an extensive curriculum featuring 70+ elective courses, partnerships with 2000+ hiring corporates including industry leaders like KPMG, Infosys, Facebook, EY, Google, and Flipkart, plus access to 20,000+ courses on LinkedIn Learning for continuous skill enhancement. The curriculum design matches on-campus program standards and is delivered by world-renowned faculty members who bring both academic rigor and industry insights to the virtual classroom. Students benefit from numerous on-campus events, workshops, and interactive sessions designed to enrich the learning experience beyond digital boundaries. The platform provides provisions for international study tours offering global exposure, ensuring students develop cross-cultural competencies essential for modern business environments. With 0% interest EMI options, flexible payment plans, comprehensive Learning Management System (LMS), and degree certificates equivalent to traditional on-campus degrees, Jain Online stands as a premier choice for learners seeking recognized, quality online education.
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
                <div className={styles.statNumber}>2000+</div>
                <div className={styles.statLabel}>Hiring Partners</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>NIRF 65</div>
                <div className={styles.statLabel}>University Ranking</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>70+</div>
                <div className={styles.statLabel}>Elective Courses</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>NAAC A++</div>
                <div className={styles.statLabel}>Accreditation</div>
              </div>
            </div>
          </div>
        )}

        {/* Programs Section */}
        {activeTab === 'programs' && (
          <div className={styles.section}>
            <h2>Programs Offered</h2>
            <p className={styles.sectionDesc}>
              Comprehensive range of UGC-DEB approved online degree programs designed for career advancement and skill development
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
                  {courses.map((course, index) => (
                    <tr key={index}>
                      <td className={styles.courseName}>{course.name}</td>
                      <td>{course.mode}</td>
                      <td>{course.duration}</td>
                      <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.courseNote}>
              <strong>Note:</strong> 0% interest EMI options available with flexible installment plans. 
              Access to 20,000+ LinkedIn Learning courses included with all programs.
            </div>
          </div>
        )}

        {/* Admissions Section */}
        {activeTab === 'admissions' && (
          <div className={styles.section}>
            <h2>Admission Process</h2>
            <p className={styles.sectionDesc}>
              Streamlined online admission process with no entrance exam requirement. Admissions open twice yearly in January and July.
            </p>

            <div className={styles.admissionSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Online Registration</h3>
                  <p>Visit Jain Online's official website and click the "Apply Now" button to initiate your application process. Register yourself with basic personal details including name, email address, and mobile number for identity verification. You will receive an automated email with a verification link to confirm your email address and a one-time password (OTP) on your mobile for authentication, ensuring secure registration.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Login & Form Completion</h3>
                  <p>After email verification, you will receive login credentials (username and password) via email. Use these credentials to access your applicant portal and complete the comprehensive online enrollment form. Fill in all required fields with accurate information including educational qualifications, work experience details, program preferences, and specialization choices. Upload high-quality scanned copies of all required documents such as mark sheets, degree certificates, passport-size photographs, and valid government-issued identity proofs.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Document Submission</h3>
                  <p>Ensure all uploaded documents are clear, legible, and in the specified format (typically PDF or JPG). Required documents typically include 10th and 12th mark sheets for undergraduate programs, bachelor's degree certificates and mark sheets for postgraduate programs, transfer certificate, migration certificate if applicable, and category certificate if claiming reservation benefits. The admissions team will verify all submitted documents for authenticity and completeness before processing your application further.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Fee Payment & Enrollment</h3>
                  <p>Complete your fee payment using secure online methods including Net Banking, Credit/Debit Card, UPI, or avail easy EMI options with 0% interest available exclusively for working professionals. Jain Online offers flexible installment plans including 16-month EMI for PG courses and 24-month EMI for UG courses with one advance EMI and no hidden charges. Upon successful payment confirmation, you will receive immediate access to the Learning Management System (LMS) complete with study materials, video lectures, assignment portals, and all necessary learning resources to commence your educational journey.</p>
                </div>
              </div>
            </div>

            <h3>Eligibility Criteria</h3>
            <div className={styles.highlightsList}>
              <div className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Undergraduate Programs (BBA/BCA/B.Com):</strong> 10+2 or equivalent examination from recognized board with minimum 50% aggregate. Subject-specific requirements may apply for certain programs</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Postgraduate Programs (MBA/MCA/M.Com/MA):</strong> Bachelor's degree in any discipline from recognized university with minimum 50% marks (45% for reserved categories). Work experience beneficial but not mandatory</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Important:</strong> All candidates must create ABC ID (Academic Bank of Credits) and DEB ID as per latest UGC guidelines for admission. Degree obtained through online mode is equivalent to traditional on-campus degree</span>
              </div>
            </div>

            <div className={styles.importantNote}>
              <h3>Important Information</h3>
              <ul>
                <li>Admissions open twice a year - January and July batches</li>
                <li>No entrance examination required for admission</li>
                <li>Create ABC ID (Academic Bank of Credits) as per UGC guidelines</li>
                <li>Degrees equivalent to traditional on-campus degrees with full UGC recognition</li>
                <li>Documents required: 10th & 12th mark sheets, graduation degree (for PG programs), ID proof, photographs</li>
                <li>International study tours and on-campus events for holistic learning experience</li>
              </ul>
            </div>
          </div>
        )}

        {/* Placements Section */}
        {activeTab === 'placements' && (
          <div className={styles.section}>
            <h2>Career Support & Placements</h2>
            <p className={styles.sectionDesc}>
              Jain Online provides comprehensive placement assistance through E-hire portal with access to 2000+ hiring partners across industries
            </p>

            <div className={styles.placementHighlights}>
              <div className={styles.placementCard}>
                <h3>2000+</h3>
                <p>Hiring Partners</p>
              </div>
              <div className={styles.placementCard}>
                <h3>50%</h3>
                <p>Average Salary Hike</p>
              </div>
              <div className={styles.placementCard}>
                <h3>300+</h3>
                <p>Active Recruiters</p>
              </div>
              <div className={styles.placementCard}>
                <h3>3X</h3>
                <p>Interview Opportunities</p>
              </div>
            </div>

            <h3>Our Recruitment Partners</h3>
            <div className={styles.partnersGrid}>
              {placementPartners.map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  {partner}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <p className={styles.sectionDesc}>
              Find answers to common questions about Jain University Online programs and admissions
            </p>

            <div className={styles.faqsList}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
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
}

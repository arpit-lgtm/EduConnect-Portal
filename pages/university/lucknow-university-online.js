import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function LucknowUniversityOnlinePage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'NIRF 101-150', 'NAAC A++'];
  const accreditation = 'NAAC A++ Grade';
  const nirfRank = '101-150 (University Category)';

  const keyHighlights = [
    'Established in 1920 - Over 100 years of academic excellence',
    'NAAC A++ accredited with highest grade',
    'NIRF Rank 101-150 in University category',
    'UGC Category 1 University of Uttar Pradesh',
    '219 acres campus in historic Lucknow city',
    '10 faculties with 47 different departments',
    'Over 550 associated colleges and 17 institutes/centers',
    'Online B.Com and M.Com programs through LUCODE'
  ];

  const coursesData = [
    { name: 'Doctor of Philosophy (Ph.D.)', specializations: 'Multiple', duration: '3 Years', fee: 162582 },
    { name: 'Online B.Com', specializations: '5', duration: '3 Years', fee: 25662 },
    { name: 'Online M.Com', specializations: '4', duration: '2 Years', fee: 17108 }
  ];

  const placementPartners = [
    'ICICI Bank', 'American Express', 'Bosch', 'Cognizant',
    'HCL', 'Paytm', 'Samsung', 'Bajaj', 'Colgate', 'MRF'
  ];

  const faqs = [
    {
      question: 'What are the courses offered by Lucknow University?',
      answer: 'Lucknow University offers 15 undergraduate programs and 67 postgraduate programs across arts, science, commerce, law, management, and engineering. Online education through LUCODE includes B.Com and M.Com programs with multiple specializations. Doctoral programs (Ph.D.) are available in various disciplines.'
    },
    {
      question: 'Does Lucknow University offer Online Courses?',
      answer: 'Yes, Lucknow University has started Online Education through LUCODE (Lucknow University Centre for Online and Distance Education) for B.Com and M.Com programs. These UGC-approved online programs provide quality education with flexible learning options for working professionals and students.'
    },
    {
      question: 'What are the approval and accreditation of Lucknow University?',
      answer: 'Lucknow University is approved by the University Grants Commission (UGC) and is the only state university of Uttar Pradesh awarded "Category 1" University status by UGC. It is accredited with the highest A++ grade by NAAC and ranks 101-150 in NIRF University category.'
    },
    {
      question: 'How to contact Lucknow University?',
      answer: 'You can contact Lucknow University through their official website, admission office, or LUCODE center. The campus is located in Lucknow, Uttar Pradesh. For online programs, dedicated student support and helpline services are available for queries related to admissions, examinations, and course content.'
    }
  ];

  return (
    <>
      <Head>
        <title>Lucknow University Online - UGC Approved NAAC A++ | Online B.Com M.Com | MBA NINJA</title>
        <meta name="description" content="Lucknow University Online through LUCODE - NAAC A++ Grade, UGC Category 1. Online B.Com, M.Com programs. Established 1920. NIRF Rank 101-150. 100+ years of academic excellence in UP." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/LUCKNOW UNIVERSITY.png" 
                alt="Lucknow University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Lucknow, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.5/5 (328 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {approvals.map(approval => (
                      <span key={approval} className={styles.badge}>{approval}</span>
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
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About University of Lucknow</h2>
              
              <div className={styles.aboutContent}>
                <p>
                  Lucknow University is one of the premier institutions renowned for its academic excellence. 
                  Established in 1920 in the historic city of Lucknow, the university offers a diverse range 
                  of undergraduate, postgraduate, and doctoral programs in numerous academic disciplines such 
                  as arts, science, commerce, law, management, and engineering.
                </p>

                <p>
                  The university has a historic campus that combines traditional and modern architecture, 
                  reflecting the rich cultural heritage. Spread over 219 acres in the heart of Lucknow, 
                  the campus has 10 faculties with 47 departments offering 15 undergraduate programs and 
                  67 postgraduate programs supported by over 478 teaching faculty members.
                </p>

                <p>
                  Lucknow University is approved by the University Grants Commission (UGC) and is the only 
                  state university of Uttar Pradesh awarded "Category 1" University status by UGC. The 
                  university is accredited with the highest A++ grade by NAAC and ranks in the 101-150 
                  range in NIRF University category 2023.
                </p>

                <h3>Key Highlights</h3>
                <div className={styles.highlightsList}>
                  {keyHighlights.map((highlight, index) => (
                    <div key={index} className={styles.highlightItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <h3>University Statistics</h3>
                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>1920</div>
                    <div className={styles.statLabel}>Established</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>219</div>
                    <div className={styles.statLabel}>Acres Campus</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>47</div>
                    <div className={styles.statLabel}>Departments</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>A++</div>
                    <div className={styles.statLabel}>NAAC Grade</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              
              <p className={styles.sectionDesc}>
                Lucknow University offers comprehensive educational programs at undergraduate, postgraduate, 
                and doctoral levels. The university has started Online Education through LUCODE for B.Com 
                and M.Com programs with flexible learning options.
              </p>

              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Specializations</th>
                      <th>Duration</th>
                      <th>Total Fee (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, index) => (
                      <tr key={index}>
                        <td>{course.name}</td>
                        <td>{course.specializations === '1' ? '1 Option' : `${course.specializations}+ Options`}</td>
                        <td>{course.duration}</td>
                        <td>₹{course.fee.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className={styles.courseNote}>
                <strong>Note:</strong> Fee structure is very reasonable as Lucknow University is a public 
                university. Various scholarships and fellowships are available to assist students in their 
                academic journey. Contact the admissions office for detailed program information.
              </p>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                Students willing to enroll in Lucknow University must follow the comprehensive admission 
                process to secure their admission. The process includes application submission, entrance 
                exams, centralized counseling, and document verification.
              </p>

              <div className={styles.stepContent}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Visit the official website, register with mobile number/email, fill the application form with accurate information, and upload required documents.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Written Entrance Exam</h3>
                    <p>Appear for the entrance exam after receiving admit card. For courses with CUET admission, students may be required to attend CUET exam instead of university entrance exam.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Centralized Counselling</h3>
                    <p>Based on entrance exam performance, students are called for centralized counseling. A merit list is prepared for eligible students by the university.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Offer & Document Verification</h3>
                    <p>Students receive admission offers according to merit rank. Appear for document verification at Lucknow University with original certificates.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Payment of Admission Fee</h3>
                    <p>After successful document verification, pay the admission fee to complete the admission process. Save confirmation receipt for future reference.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Undergraduate Programs:</strong> 10+2 from recognized board with minimum percentage as per program requirements</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Postgraduate Programs:</strong> Bachelor's degree from recognized university in relevant discipline with minimum marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online B.Com:</strong> 10+2 in any stream from recognized board</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online M.Com:</strong> B.Com or equivalent degree from recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Ph.D. Programs:</strong> Master's degree with minimum 55% marks or equivalent, qualifying exam (UGC NET/JRF) recommended</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Create ABC ID and DEB ID as per latest UGC guidelines for admission</li>
                  <li>Admissions conducted twice a year in July/August and January/February sessions</li>
                  <li>Various scholarships available: Central Sector Scheme, National Means Cum Merit, Post Matric Scholarships for Minorities</li>
                  <li>Junior Research Fellowship and PM Scholarship Scheme for eligible students</li>
                  <li>Semester-based examination pattern for UG/PG programs, annual exams for professional courses</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements & Career Support</h2>
              <p className={styles.sectionDesc}>
                The Central Placement Cell at Lucknow University ensures that every student is placed after 
                completion of their academic journey. The Cell collaborates with industry leaders for hiring 
                and placement drives, and provides career counseling by identifying student potential and 
                mapping their competencies.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>💼</div>
                  <h3>Industry Leaders</h3>
                  <p>MNCs and leading companies across Banking, IT, Manufacturing, and Services sectors</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>📈</div>
                  <h3>Average Salary Hike</h3>
                  <p>50% average salary increase post-placement</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>🎯</div>
                  <h3>Career Counseling</h3>
                  <p>Personalized guidance for identifying potential and career mapping</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>🌐</div>
                  <h3>Hiring Partners</h3>
                  <p>300+ companies participate in placement drives annually</p>
                </div>
              </div>

              <h3>Our Placement Partners</h3>
              <div className={styles.partnersGrid}>
                {placementPartners.map((partner, index) => (
                  <div key={index} className={styles.partnerCard}>{partner}</div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Section */}
          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common queries about Lucknow University programs, admissions, and career opportunities
              </p>

              <div className={styles.faqsList}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3><span className={styles.qIcon}>Q:</span> {faq.question}</h3>
                    <p><span className={styles.aIcon}>A:</span> {faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className={styles.contactCta}>
                <h3>Still have questions?</h3>
                <p>Contact our admissions team for personalized guidance and detailed information about Lucknow University programs.</p>
                <Link href="/contact" className={styles.ctaButton}>Contact Admissions Team</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const DYPatilPune = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online MBA', fee: 189400, duration: '2 Years', specializations: 17 },
    { name: 'Online MBA Dual', fee: 189400, duration: '2 Years', specializations: 3 },
    { name: 'Online BBA', fee: 145400, duration: '3 Years', specializations: 10 },
    { name: 'Online MCA', fee: 140000, duration: '2 Years', specializations: 3 },
    { name: 'MBA WX', fee: 250000, duration: '2 Years', specializations: 5 },
    { name: 'Online Certificate Programs', fee: 28000, duration: '6 Months', specializations: 2 },
  ];

  const keyHighlights = [
    'NAAC A++ accredited deemed-to-be university with CGPA 3.64',
    'Ranked 44th in University Category by NIRF rankings',
    'UGC-DEB, AICTE, AIU, ISO, WES approved institution',
    'Established in 2003 with strong medical and healthcare heritage',
    'Dedicated online learning center (DPU-COL) for digital education',
    'Comprehensive LMS with e-learning toolkit and digital libraries',
    'Separate placement cell exclusively for online students',
    'Network of 1,00,000+ alumni across the globe'
  ];

  const approvals = ['UGC-DEB', 'AICTE', 'NAAC A++', 'AIU', 'ISO', 'WES'];
  const nirfRank = 'Rank 44';
  const accreditation = 'NAAC A++ (CGPA 3.64)';

  const placementPartners = [
    'American Express', 'HDFC Bank', 'Bajaj', 'Airtel', 'Apollo', 
    'BSNL', 'Capgemini', 'Cognizant', 'EY', 'L&T', 'Microsoft', 'Nestle'
  ];

  const faqs = [
    {
      question: 'Are DY Patil online degrees UGC approved?',
      answer: 'Yes, Dr. D.Y. Patil Vidyapeeth Pune is fully approved by UGC-DEB for offering online programs. The online degrees are equivalent to regular degrees and recognized nationwide for employment and higher studies.'
    },
    {
      question: 'What is the difference between regular and online degrees?',
      answer: 'Online degrees from DY Patil maintain the same academic standards, curriculum, and faculty as regular programs. The primary difference is the delivery mode - online students access classes virtually while enjoying the same recognition and value as on-campus degrees.'
    },
    {
      question: 'How are examinations conducted?',
      answer: 'DY Patil follows a semester system with 70% weightage for Term End Semester Examination (TESE) and 30% for Internal Assessment Evaluation (IAE). Exams are conducted online at designated centers with proper proctoring.'
    },
    {
      question: 'Does DY Patil provide placement support?',
      answer: 'Yes, the university has a dedicated placement cell for online students partnering with leading companies like American Express, HDFC Bank, and Bajaj. The average placement package is 4.6 LPA with a 9% annual hike.'
    },
    {
      question: 'What EMI and loan options are available?',
      answer: 'DY Patil assists students in securing education loans from major banks. The university also offers fee concessions for SC/ST (100% waiver), OBC (50% through EBC scheme), and open category students (50% waiver).'
    },
    {
      question: 'How flexible is the online learning schedule?',
      answer: 'The program is designed for maximum flexibility with recorded lectures, digital study materials accessible 24/7, weekend live sessions, and self-paced learning modules allowing students to balance work and studies effectively.'
    }
  ];

  return (
    <>
      <Head>
        <title>DY Patil University Pune Online - Distance MBA & Degree Programs | EduConnect</title>
        <meta name="description" content="Join DY Patil Vidyapeeth Pune for UGC-approved online MBA and degrees. NAAC A++ accredited, NIRF Rank 44 with excellent career support." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/DY Patil Vidyapeeth Pune.png" 
                alt="DY Patil Pune Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Pune, Maharashtra</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.7/5</span>
                    <span className={styles.reviews}>(738 Reviews)</span>
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

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {['about', 'courses', 'admissions', 'placements', 'faqs'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About DY Patil University Pune Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Dr. D.Y. Patil Vidyapeeth, established in 2003, stands as a premier deemed-to-be university 
                  in Pune with a distinguished legacy in medical education and comprehensive academic offerings. 
                  Beginning as a medical institution, the university has evolved into a multidisciplinary center 
                  of excellence providing world-class education across healthcare, management, engineering, and technology.
                </p>
                <p>
                  The Centre for Online Learning (DPU-COL) brings the university's academic excellence to students 
                  nationwide through innovative digital platforms. With NAAC A++ accreditation (CGPA 3.64/4.0) and 
                  NIRF Rank 44, DY Patil demonstrates unwavering commitment to educational quality and student success.
                </p>
                <p>
                  DY Patil online programs feature comprehensive Learning Management System support, virtual live lectures, 
                  extensive digital resources, and experienced faculty committed to student development. The university's 
                  motto of equitable access to higher education drives its mission to make quality education affordable 
                  and accessible to all deserving students.
                </p>
                <p>
                  With approval from UGC-DEB, AICTE, ISO, WES, and other prestigious bodies, DY Patil ensures that 
                  online degrees carry the same recognition as traditional programs. The dedicated placement cell for 
                  online students partners with top companies ensuring excellent career opportunities for graduates.
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
                  <div className={styles.statNumber}>1L+</div>
                  <div className={styles.statLabel}>Global Alumni</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Rank 44</div>
                  <div className={styles.statLabel}>NIRF University</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>4.6 LPA</div>
                  <div className={styles.statLabel}>Average Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>9%</div>
                  <div className={styles.statLabel}>Package Hike</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Comprehensive UGC-approved programs designed for working professionals
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
                <strong>Note:</strong> Education loans available from major banks. Fee waivers for eligible categories.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple enrollment process for aspiring learners
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Portal Registration</h3>
                    <p>Visit DY Patil Vidyapeeth Online website and register using email and mobile for portal access.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Form</h3>
                    <p>Log in with received credentials, access online application, and fill all required information accurately.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Attach required documents along with application form ensuring accuracy to avoid rejection.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Complete fee payment through debit/credit cards, demand draft, or NEFT to university bank account.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Verification & Confirmation</h3>
                    <p>University verifies documents and sends admission confirmation via email/SMS with student login details.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Essential Information</h3>
                <ul>
                  <li>Admissions twice yearly - July/August and January/February sessions</li>
                  <li>No entrance examination required</li>
                  <li>ABC ID and DEB ID creation mandatory per UGC guidelines</li>
                  <li>100% fee refund available within specified period</li>
                  <li>Required documents: Educational certificates, ID proof, photographs</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support Services</h2>
              <p className={styles.sectionDesc}>
                Dedicated placement assistance connecting graduates with leading employers
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>4.6 LPA</h3>
                  <p>Average Placement</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>9%</h3>
                  <p>Salary Hike YoY</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Companies</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Support Access</p>
                </div>
              </div>

              <h3>Recruitment Partners</h3>
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
              <p className={styles.sectionDesc}>
                Answers to common queries about DY Patil online programs
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
                <h3>Need Guidance?</h3>
                <p>Our counselors are available to help you choose the right program</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Talk to Our Team</button>
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

export default DYPatilPune;

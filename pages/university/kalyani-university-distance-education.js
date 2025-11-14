import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function KalyaniPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'DEB', 'NAAC A', 'AIU', 'West Bengal State University'];
  const accreditation = 'NAAC A Grade';
  const nirfRank = 'Not Ranked in NIRF';

  const keyHighlights = [
    'NAAC A accredited state university established in 1960',
    'UGC-DEB approved distance education programs',
    '60+ years of academic excellence in West Bengal',
    'Flexible learning for working professionals and homemakers',
    'Affordable fee structure with installment options',
    'Recognized degrees with pan-India validity',
    'Comprehensive study material in English and Bengali',
    'Strong alumni network across India'
  ];

  const coursesData = [
    { name: 'MBA (Master of Business Administration)', specializations: '8', duration: '2 Years', fee: 48000 },
    { name: 'M.Com (Master of Commerce)', specializations: '4', duration: '2 Years', fee: 32000 },
    { name: 'MA (Master of Arts)', specializations: '15', duration: '2 Years', fee: 28000 },
    { name: 'MSc (Master of Science)', specializations: '10', duration: '2 Years', fee: 35000 },
    { name: 'M.Ed (Master of Education)', specializations: '3', duration: '2 Years', fee: 40000 },
    { name: 'B.Com (Bachelor of Commerce)', specializations: '3', duration: '3 Years', fee: 27000 },
    { name: 'BA (Bachelor of Arts)', specializations: '18', duration: '3 Years', fee: 24000 },
    { name: 'BSc (Bachelor of Science)', specializations: '12', duration: '3 Years', fee: 30000 },
    { name: 'B.Ed (Bachelor of Education)', specializations: '2', duration: '2 Years', fee: 45000 }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture',
    'ICICI Bank', 'HDFC Bank', 'SBI', 'Government Schools', 
    'Educational Institutions', 'Private Colleges', 'Corporate Training Centers'
  ];

  const faqs = [
    {
      question: 'What programs does Kalyani University offer through distance education?',
      answer: 'Kalyani University offers UGC-DEB approved distance education programs including MBA, M.Com, MA, MSc, M.Ed at postgraduate level and B.Com, BA, BSc, B.Ed at undergraduate level. Programs are available in various specializations across Commerce, Arts, Science, Management, and Education streams.'
    },
    {
      question: 'Is the distance education degree from Kalyani University valid?',
      answer: 'Yes, absolutely. Kalyani University distance education degrees are UGC-DEB approved and have pan-India validity. They are recognized for higher education, government jobs, and private sector employment. The university has NAAC A accreditation ensuring quality education standards.'
    },
    {
      question: 'What is the fee structure and payment options?',
      answer: 'Kalyani University offers affordable fee structure ranging from ₹24,000 to ₹48,000 for complete programs. Fees can be paid in installments (semester-wise). Payment can be made through online banking, demand draft, or at designated collection centers. No hidden charges apply.'
    },
    {
      question: 'How are classes and examinations conducted?',
      answer: 'Classes are conducted through self-learning study materials, online lectures, and periodic contact sessions at study centers. Examinations are held at authorized centers across West Bengal and other states. Students receive exam schedules well in advance. Both online and offline exam modes are available.'
    },
    {
      question: 'What support services are available for distance learners?',
      answer: 'Kalyani University provides comprehensive support including printed study materials in English and Bengali, online learning portal, doubt clearing sessions, regular assignments, project guidance, library access, and dedicated student helpdesk. Study centers conduct periodic contact classes for difficult subjects.'
    },
    {
      question: 'Can I pursue higher education after completing distance education from Kalyani University?',
      answer: 'Yes, distance education degrees from Kalyani University are valid for pursuing higher education. Students can apply for Ph.D., professional courses, or other postgraduate programs at any UGC recognized university. The UGC-DEB approval ensures acceptance at all institutions for further studies.'
    }
  ];

  return (
    <>
      <Head>
        <title>Kalyani University Distance Education | UGC-DEB Approved Programs | MBA NINJA</title>
        <meta name="description" content="Kalyani University Distance Education - UGC-DEB approved MBA, M.Com, MA, BA, B.Com programs. NAAC A Grade. Affordable fees from ₹24,000. 60+ years excellence. Flexible learning for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Kalyani University.png" 
                alt="Kalyani University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Kalyani, West Bengal</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.0/5</span>
                    <span className={styles.reviews}>(142 Reviews)</span>
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
              <h2>About Kalyani University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  University of Kalyani, established in 1960, is one of the premier state universities in West Bengal. Located in the planned township of Kalyani, the university has been providing quality education for over six decades. The Directorate of Distance Education was established to make higher education accessible to students who cannot attend regular classes due to professional or personal commitments.
                </p>
                <p>
                  With NAAC A grade accreditation and UGC-DEB approval, Kalyani University's distance education programs maintain the same academic rigor and quality as regular programs. The university offers a wide range of undergraduate and postgraduate courses across Commerce, Arts, Science, Management, and Education streams, catering to diverse educational needs of students across India.
                </p>
                <p>
                  The distance education mode at Kalyani University combines self-learning materials, online resources, contact sessions, and practical assignments to ensure comprehensive learning. Study materials are provided in both English and Bengali, making education accessible to a wider student base. The university's strong emphasis on quality education and affordable fee structure makes it a preferred choice for distance learners.
                </p>
                <p>
                  Kalyani University has established a robust support system for distance learners including dedicated study centers, online learning portals, regular doubt clearing sessions, and comprehensive student support services. The university's commitment to inclusive education and academic excellence has helped thousands of students achieve their educational goals while managing their professional and personal responsibilities.
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
                  <div className={styles.statNumber}>40,000+</div>
                  <div className={styles.statLabel}>Distance Learners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>60+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>UGC-DEB Approved</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>150+</div>
                  <div className={styles.statLabel}>Study Centers</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of UGC-DEB approved distance education programs
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
                <strong>Note:</strong> Semester-wise fee payment option available. Study materials provided in English and Bengali. All programs include comprehensive learning resources and online support.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple and transparent admission process for distance education programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit University Portal</h3>
                    <p>Go to Kalyani University's distance education website and click on "Online Admission" to access the application portal.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Register & Create Account</h3>
                    <p>Create an account using your email ID and mobile number. Verify your details through OTP for security.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Complete the online application form with accurate personal, educational, and contact information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Upload scanned copies of required documents including educational certificates, ID proof, caste certificate (if applicable), and passport-size photographs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Admission Fee</h3>
                    <p>Complete fee payment through online banking, credit/debit card, or UPI. Download the payment receipt for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Receive Confirmation</h3>
                    <p>Get admission confirmation via email and SMS. Download your ID card and access the student learning portal to begin your studies.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/M.Com/MA/MSc/M.Ed:</strong> Bachelor's degree from UGC recognized university with minimum 45% marks (40% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Com/BA/BSc:</strong> 10+2 or equivalent from recognized board with minimum 40% marks (35% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Ed:</strong> Bachelor's degree with minimum 50% marks and subject eligibility as per NCTE norms</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> No upper age limit for most programs</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions are open for both January and July sessions</li>
                  <li>Document verification will be done at designated study centers</li>
                  <li>Original certificates must be produced at the time of verification</li>
                  <li>Transfer certificate and migration certificate required for undergraduate programs</li>
                  <li>Semester-wise fee payment option available</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Career guidance and placement assistance for distance education students
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>800+</h3>
                  <p>Students Placed Annually</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>150+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>35%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Career Support</p>
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
                Find answers to common queries about Kalyani University distance education programs
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

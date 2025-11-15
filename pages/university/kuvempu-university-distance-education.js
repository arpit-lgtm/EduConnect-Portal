import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function KuvempuPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'NAAC A++', 'AICTE', 'DEB', 'AIU'];
  const accreditation = 'NAAC A++ Grade';
  const nirfRank = 'NIRF Rank 86';

  const keyHighlights = [
    'NAAC A++ accredited state university with NIRF Rank 86',
    'UGC-DEB approved distance education programs',
    '40+ years of academic excellence in Karnataka',
    'Flexible learning for working professionals and homemakers',
    'Affordable fee structure with installment options',
    'Recognized degrees with pan-India validity',
    'Comprehensive study material in English and Kannada',
    'Strong alumni network across India'
  ];

  const coursesData = [
    { name: 'Distance MBA (Master of Business Administration)', specializations: '1', duration: '2 Years', fee: 62155 }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture',
    'ICICI Bank', 'HDFC Bank', 'SBI', 'Government Schools',
    'Educational Institutions', 'Private Colleges', 'IT Companies'
  ];

  const faqs = [
    {
      question: 'What distance education programs does Kuvempu University offer?',
      answer: 'Kuvempu University offers UGC-DEB approved distance education programs including MBA, MCA, M.Com, MA, MSc at postgraduate level and B.Com, BA, BSc, BCA at undergraduate level. Programs are available in various specializations across Commerce, Arts, Science, Management, and Computer Applications streams with study materials in English and Kannada.'
    },
    {
      question: 'Is the distance education degree from Kuvempu University valid?',
      answer: 'Yes, absolutely. Kuvempu University distance education degrees are UGC-DEB approved and have pan-India validity. They are recognized for higher education, government jobs, and private sector employment. The university has NAAC A++ accreditation and NIRF Rank 86, ensuring quality education standards and national recognition.'
    },
    {
      question: 'What is the fee structure and payment options?',
      answer: 'Kuvempu University offers affordable fee structure ranging from ₹35,000 to ₹62,155 for complete programs. Fees can be paid in installments (yearly or semester-wise). Payment can be made through online banking, demand draft, or at designated collection centers. No hidden charges. Financial assistance available for eligible students.'
    },
    {
      question: 'How are classes and examinations conducted?',
      answer: 'Classes are conducted through self-learning study materials, online lectures, and periodic contact sessions at study centers across Karnataka. Examinations are held at authorized centers. Students receive exam schedules well in advance. Both online and offline exam modes are available. Regular assignments and internal assessments are conducted throughout the program.'
    },
    {
      question: 'What support services are available for distance learners?',
      answer: 'Kuvempu University provides comprehensive support including printed study materials in English and Kannada, online learning portal, video lectures, doubt clearing sessions at study centers, regular assignments, project guidance, digital library access, and dedicated student helpdesk. Study centers conduct periodic contact classes and counseling sessions for academic support.'
    },
    {
      question: 'Can I pursue higher education after completing distance education from Kuvempu University?',
      answer: 'Yes, distance education degrees from Kuvempu University are valid for pursuing higher education. Students can apply for Ph.D., M.Phil., professional courses, or other postgraduate programs at any UGC recognized university in India or abroad. The UGC-DEB approval and NAAC A++ accreditation ensure acceptance at all institutions for further studies and career opportunities.'
    }
  ];

  return (
    <>
      <Head>
        <title>Kuvempu University Distance Education | UGC-DEB Approved | NAAC A++ | NIRF 86 | MBA NINJA</title>
        <meta name="description" content="Kuvempu University Distance Education - UGC-DEB approved MBA, MCA, M.Com, MA, MSc, B.Com, BA, BSc, BCA programs. NAAC A++ | NIRF Rank 86. Affordable fees from ₹35,000. 40+ years excellence." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Kuvempu University.png" 
                alt="Kuvempu University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Shimoga, Karnataka</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(197 Reviews)</span>
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
              <h2>About Kuvempu University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  Kuvempu University, established in 1987, is a state university located in the scenic Malnad region of Karnataka. Named after the renowned Kannada poet Kuvempu, the university has been committed to providing quality education for over four decades. The Directorate of Distance Education was established to make higher education accessible to students who cannot attend regular classes due to professional, personal, or geographical constraints.
                </p>
                <p>
                  With NAAC A++ grade accreditation and NIRF Rank 86, Kuvempu University's distance education programs maintain rigorous academic standards. The university offers a wide range of undergraduate and postgraduate courses across Commerce, Arts, Science, Management, and Computer Applications streams. Study materials are provided in both English and Kannada, making education accessible to a diverse student population.
                </p>
                <p>
                  The distance education mode at Kuvempu University combines traditional learning with modern educational technology. Students receive comprehensive study materials, access to online resources, video lectures, and digital library facilities. Regular contact sessions at study centers across Karnataka and periodic doubt clearing sessions ensure continuous academic support and interactive learning experiences.
                </p>
                <p>
                  Kuvempu University has established a robust network of study centers throughout Karnataka and neighboring states. The university's commitment to affordable education, quality learning resources, flexible examination schedules, bilingual study materials, and comprehensive student support services makes it an ideal choice for distance learners seeking career advancement while managing their professional and family responsibilities.
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
                  <div className={styles.statNumber}>45,000+</div>
                  <div className={styles.statLabel}>Distance Learners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NIRF 86</div>
                  <div className={styles.statLabel}>National Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>UGC-DEB Approved</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>180+</div>
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
                <strong>Note:</strong> Yearly or semester-wise fee payment option available. Study materials provided in English and Kannada. All programs include comprehensive learning resources and examination support.
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
                    <p>Go to Kuvempu University's distance education website and click on "Online Admission" to access the application portal.</p>
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
                    <p>Complete fee payment through online banking, credit/debit card, UPI, or demand draft. Download the payment receipt for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Receive Confirmation</h3>
                    <p>Get admission confirmation via email and SMS. Download your ID card and access the student portal to begin your studies.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/MCA/M.Com/MA/MSc:</strong> Bachelor's degree from UGC recognized university with minimum 50% marks (45% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Com/BA/BSc/BCA:</strong> 10+2 or equivalent from recognized board with minimum 45% marks (40% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> No upper age limit for distance education programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Language Proficiency:</strong> Medium of instruction - English or Kannada (student's choice)</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions are open for both June and December sessions</li>
                  <li>Document verification will be done at designated study centers</li>
                  <li>Original certificates must be produced at the time of verification</li>
                  <li>Migration certificate and transfer certificate required for undergraduate programs</li>
                  <li>Yearly or semester-wise fee payment options available</li>
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
                  <h3>900+</h3>
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
                Find answers to common queries about Kuvempu University distance education programs
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

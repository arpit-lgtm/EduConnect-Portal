import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function KurukshetraPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'NAAC A+', 'AICTE', 'Category 1 State University'];
  const accreditation = 'NAAC A+ Grade';
  const nirfRank = 'Ranked 8th among State Universities';

  const keyHighlights = [
    'NAAC A+ accredited state university ranked 8th among state universities',
    'UGC-DEB approved distance education programs',
    '50+ years of academic excellence in Haryana',
    'Flexible learning for working professionals',
    'Affordable fee structure with installment options',
    'Recognized degrees with national validity',
    'Comprehensive study material and online support',
    'Strong alumni network across India'
  ];

  const coursesData = [
    { name: 'Online MBA (Master of Business Administration)', specializations: '6', duration: '2 Years', fee: 98545 },
    { name: 'Online MCA (Master of Computer Applications)', specializations: '1', duration: '2 Years', fee: 76647 },
    { name: 'Online M.Com (Master of Commerce)', specializations: '1', duration: '2 Years', fee: 54036 },
    { name: 'Online MA (Master of Arts)', specializations: '3', duration: '2 Years', fee: 54036 },
    { name: 'Online BBA (Bachelor of Business Administration)', specializations: '1', duration: '3 Years', fee: 72661 },
    { name: 'Online B.Com (Bachelor of Commerce)', specializations: '1', duration: '3 Years', fee: 72661 },
    { name: 'Online BA (Bachelor of Arts)', specializations: '5', duration: '3 Years', fee: 72661 }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture',
    'ICICI Bank', 'HDFC Bank', 'SBI', 'Government Departments',
    'Educational Institutions', 'Private Companies', 'IT Services'
  ];

  const faqs = [
    {
      question: 'What online programs does Kurukshetra University offer?',
      answer: 'Kurukshetra University offers UGC-DEB approved online/distance education programs including MBA, MCA, M.Com, MA at postgraduate level and BBA, B.Com, BA at undergraduate level. Programs are available in various specializations across Commerce, Arts, Science, Management, and Computer Applications streams.'
    },
    {
      question: 'Is the online degree from Kurukshetra University valid?',
      answer: 'Yes, absolutely. Kurukshetra University online degrees are UGC-DEB approved and have pan-India validity. They are recognized for higher education, government jobs, and private sector employment. The university has NAAC A+ accreditation and is ranked 8th among state universities, ensuring quality education standards.'
    },
    {
      question: 'What is the fee structure and payment options?',
      answer: 'Kurukshetra University offers affordable fee structure ranging from ₹54,036 to ₹98,545 for complete programs. Fees can be paid in installments (semester-wise or yearly). Payment can be made through online banking, demand draft, or at designated collection centers. No hidden charges apply.'
    },
    {
      question: 'How are classes and examinations conducted?',
      answer: 'Classes are conducted through self-learning study materials, online lectures, and periodic contact sessions at study centers. Examinations are held at authorized centers across Haryana and other states. Students receive exam schedules well in advance. Both online and offline exam modes are available depending on the program.'
    },
    {
      question: 'What support services are available for distance learners?',
      answer: 'Kurukshetra University provides comprehensive support including printed study materials, online learning portal, video lectures, doubt clearing sessions, regular assignments, project guidance, library access through digital resources, and dedicated student helpdesk. Study centers conduct periodic contact classes and counseling sessions.'
    },
    {
      question: 'Can I pursue higher education after completing online education from Kurukshetra University?',
      answer: 'Yes, online/distance education degrees from Kurukshetra University are valid for pursuing higher education. Students can apply for Ph.D., professional courses, or other postgraduate programs at any UGC recognized university. The UGC-DEB approval ensures acceptance at all institutions for further studies and government jobs.'
    }
  ];

  return (
    <>
      <Head>
        <title>Kurukshetra University Online Programs | UGC-DEB Approved | NAAC A+ | MBA NINJA</title>
        <meta name="description" content="Kurukshetra University Online Education - UGC-DEB approved MBA, MCA, M.Com, MA, BBA, B.Com, BA programs. NAAC A+ Grade. Ranked 8th among state universities. Affordable fees from ₹54,036." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Kurukshetra University.png" 
                alt="Kurukshetra University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Kurukshetra, Haryana</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.3/5</span>
                    <span className={styles.reviews}>(213 Reviews)</span>
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
              <h2>About Kurukshetra University Online Programs</h2>
              <div className={styles.aboutContent}>
                <p>
                  Kurukshetra University, established in 1956, is one of the oldest and most prestigious state universities in North India. Located in the holy city of Kurukshetra, Haryana, the university has been a pioneer in higher education for over five decades. The Directorate of Distance Education was established to extend quality education to students who cannot attend regular classes due to work, family, or geographical constraints.
                </p>
                <p>
                  With NAAC A+ grade accreditation and UGC-DEB approval, Kurukshetra University's online and distance education programs maintain high academic standards. Ranked 8th among state universities in India, the university offers a wide range of undergraduate and postgraduate courses across Commerce, Arts, Science, Management, and Computer Applications streams, catering to diverse educational aspirations.
                </p>
                <p>
                  The online education mode at Kurukshetra University combines traditional study materials with modern online learning tools. Students receive comprehensive printed materials, access to online lectures, video content, and digital library resources. Regular contact sessions at study centers and online doubt clearing sessions ensure continuous learning support and academic guidance.
                </p>
                <p>
                  Kurukshetra University has established a robust network of study centers across Haryana and neighboring states. The university's commitment to affordable education, quality learning resources, flexible examination schedules, and comprehensive student support services makes it an ideal choice for distance learners seeking career advancement and academic growth while managing their professional responsibilities.
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
                  <div className={styles.statNumber}>35,000+</div>
                  <div className={styles.statLabel}>Distance Learners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>UGC-DEB Approved</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>120+</div>
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
                Explore our comprehensive range of UGC-DEB approved online programs
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
                <strong>Note:</strong> Semester-wise or yearly fee payment option available. Study materials provided in printed and digital format. All programs include comprehensive learning resources and examination support.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple and transparent admission process for online/distance education programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit University Portal</h3>
                    <p>Go to Kurukshetra University's distance education website and click on "Online Admission" to access the application portal.</p>
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
                  <span><strong>MBA/MCA/M.Com/MA:</strong> Bachelor's degree from UGC recognized university with minimum 45% marks (40% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BBA/B.Com/BA:</strong> 10+2 or equivalent from recognized board with minimum 45% marks (40% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> No upper age limit for distance education programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Work Experience:</strong> Not mandatory for admission</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions are open for both January and July sessions</li>
                  <li>Document verification will be done at designated study centers</li>
                  <li>Original certificates must be produced at the time of verification</li>
                  <li>Migration certificate required for students from other universities/states</li>
                  <li>Semester-wise or yearly fee payment options available</li>
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
                  <h3>600+</h3>
                  <p>Students Placed Annually</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>120+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>30%</h3>
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
                Find answers to common queries about Kurukshetra University online programs
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

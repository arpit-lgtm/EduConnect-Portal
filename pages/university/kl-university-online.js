import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function KLPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'NAAC A++', 'AICTE', 'Category I Deemed University'];
  const accreditation = 'NAAC A++ Grade';
  const nirfRank = 'Category I Deemed University';

  const keyHighlights = [
    'Category I Deemed-to-be University with NAAC A++ accreditation',
    'UGC-entitled online programs for working professionals',
    'Industry-integrated curriculum with practical focus',
    'Flexible learning with live and recorded sessions',
    'Advanced Learning Management System (LMS)',
    'Strong industry partnerships and placement support',
    'Affordable fee structure with EMI options',
    'Pan-India validity with international recognition'
  ];

  const coursesData = [
    { name: 'Online BBA (Bachelor of Business Administration)', specializations: '3', duration: '3 Years', fee: 72000 },
    { name: 'Online BCA (Bachelor of Computer Applications)', specializations: '3', duration: '3 Years', fee: 72000 },
    { name: 'Online MCA (Master of Computer Applications)', specializations: '4', duration: '2 Years', fee: 60000 },
    { name: 'Online MBA (Master of Business Administration)', specializations: '2', duration: '2 Years', fee: 60000 }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture',
    'Amazon', 'Google', 'Microsoft', 'Deloitte', 'EY',
    'ICICI Bank', 'HDFC Bank', 'IBM', 'HCL', 'Tech Mahindra'
  ];

  const faqs = [
    {
      question: 'What online programs does KL University offer?',
      answer: 'KL University offers UGC-entitled online programs including BBA, BCA, MCA, and MBA with various specializations. All programs are designed for working professionals and students seeking flexible learning options with industry-relevant curriculum and comprehensive digital resources.'
    },
    {
      question: 'Is the KL online degree valid and recognized?',
      answer: 'Yes, absolutely. KL University is a NAAC A++ accredited Category I Deemed-to-be University. The online degrees are UGC-entitled and have the same value as regular degrees. They are valid for higher education, government jobs, and private sector employment across India and internationally.'
    },
    {
      question: 'What is the fee structure and payment options?',
      answer: 'KL online programs range from ₹60,000 to ₹72,000 for complete programs. Fees can be paid semester-wise or through easy EMI options. Payment methods include online banking, credit/debit card, and UPI. Scholarship opportunities are available for eligible students based on merit and need.'
    },
    {
      question: 'How are classes and examinations conducted?',
      answer: 'Classes are conducted through live interactive online sessions and pre-recorded video lectures accessible 24/7 via the Learning Management System. Examinations are conducted online at scheduled times. Students receive regular assignments, quizzes, and projects for continuous evaluation throughout the program.'
    },
    {
      question: 'What support services are available for online learners?',
      answer: 'KL provides comprehensive support including dedicated student mentor, 24/7 LMS access, digital library with e-resources, regular doubt clearing sessions, technical support desk, career counseling, placement assistance, and faculty interaction through live webinars and discussion forums.'
    },
    {
      question: 'Does KL University provide placement assistance for online students?',
      answer: 'Yes, KL offers robust placement assistance to online students through its dedicated career development cell. Students get access to job opportunities, resume workshops, mock interviews, industry certifications, networking events, and recruitment drives with 300+ partner companies.'
    }
  ];

  return (
    <>
      <Head>
        <title>KL University Online Programs | NAAC A++ | Category I Deemed University | MBA NINJA</title>
        <meta name="description" content="KL University Online Education - UGC-entitled BBA, BCA, MCA, MBA programs. NAAC A++ | Category I Deemed University. Flexible learning for working professionals. Placement assistance available." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/KL University.png" 
                alt="KL University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Guntur, Andhra Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.0/5</span>
                    <span className={styles.reviews}>(328 Reviews)</span>
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
              <h2>About KL University Online Programs</h2>
              <div className={styles.aboutContent}>
                <p>
                  Koneru Lakshmaiah Education Foundation (KLEF), commonly known as KL University, is a NAAC A++ accredited Category I Deemed-to-be University recognized by UGC. With a strong focus on innovation, research, and entrepreneurship, KL University has established itself as one of the leading private universities in South India. The online programs extend the university's commitment to quality education to working professionals and distance learners.
                </p>
                <p>
                  KL University's online education platform combines academic excellence with technological innovation. Programs are UGC-entitled and designed with industry collaboration to ensure graduates are job-ready. The university offers a state-of-the-art Learning Management System featuring live interactive classes, extensive digital library, video lectures, and virtual labs for practical learning experiences.
                </p>
                <p>
                  The online programs at KL University emphasize industry-relevant skills through case studies, industry projects, guest lectures from corporate leaders, and hands-on assignments. The flexible learning model allows students to balance their professional and personal commitments while pursuing higher education. Students benefit from KL's strong industry partnerships and dedicated placement cell.
                </p>
                <p>
                  With experienced faculty, comprehensive student support services, and affordable fee structure with EMI options, KL University provides an ideal platform for career advancement. The university's commitment to holistic education, practical learning, and student success makes it a preferred choice for online education in India.
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
                  <div className={styles.statNumber}>25,000+</div>
                  <div className={styles.statLabel}>Students Enrolled</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Category I</div>
                  <div className={styles.statLabel}>Deemed University</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Placement Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>UGC-Entitled Degrees</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of UGC-entitled online programs
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
                <strong>Note:</strong> Semester-wise fee payment option available. EMI facilities provided. All programs include LMS access, live sessions, digital learning resources, and placement assistance.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple and transparent admission process for online programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit KL Online Portal</h3>
                    <p>Go to KL University's online education website and click on "Apply Online" to access the application portal.</p>
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
                    <p>Complete the online application form with accurate personal, educational, and professional information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Upload scanned copies of required documents including educational certificates, ID proof, work experience letters (if applicable), and passport-size photographs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Admission Fee</h3>
                    <p>Complete fee payment through online banking, credit/debit card, UPI, or choose EMI option. Download the payment receipt for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Get LMS Access</h3>
                    <p>Receive admission confirmation via email and SMS. Get your student ID and LMS login credentials to start your online learning journey.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/MCA:</strong> Bachelor's degree from UGC recognized university with minimum 50% marks (45% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BBA/BCA:</strong> 10+2 or equivalent from recognized board with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> No upper age limit for online programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Work Experience:</strong> Not mandatory but preferred for MBA programs</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions are open throughout the year with quarterly intake batches</li>
                  <li>Document verification will be done online through the portal</li>
                  <li>Original certificates must be produced at the time of final verification</li>
                  <li>Semester-wise fee payment and EMI options available</li>
                  <li>Merit-based scholarships available for eligible students</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Comprehensive placement assistance and career support for online students
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>1500+</h3>
                  <p>Students Placed Annually</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
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
                Find answers to common queries about KL online programs
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

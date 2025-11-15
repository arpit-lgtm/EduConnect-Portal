import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function KIITPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'NAAC A++', 'NIRF', 'AICTE', 'AIU'];
  const accreditation = 'NAAC A++ Grade';
  const nirfRank = 'NIRF Rank 16';

  const keyHighlights = [
    'NAAC A++ accredited deemed university with NIRF Rank 16',
    'Flexible online programs for working professionals',
    'Industry-aligned curriculum with practical learning',
    'Live interactive sessions and recorded lectures',
    'Comprehensive learning management system',
    'Placement assistance and career support',
    'Affordable EMI options available',
    'UGC-entitled degrees with national recognition'
  ];

  const coursesData = [
    { name: 'Online MCA (Master of Computer Applications)', specializations: '1', duration: '2 Years', fee: 160000 },
    { name: 'Online B.Com (Bachelor of Commerce)', specializations: '1', duration: '3 Years', fee: 205200 },
    { name: 'Online M.Com (Master of Commerce)', specializations: '2', duration: '2 Years', fee: 205200 },
    { name: 'Online MA (Master of Arts)', specializations: '3', duration: '2 Years', fee: 205200 },
    { name: 'Online BA (Bachelor of Arts)', specializations: '1', duration: '3 Years', fee: 205200 },
    { name: 'PhD (Doctor of Philosophy)', specializations: '1', duration: '3 Years', fee: 250000 },
    { name: 'Part-Time PhD', specializations: '1', duration: '3 Years', fee: 250000 }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture',
    'Amazon', 'Microsoft', 'Google', 'Deloitte', 'EY',
    'KPMG', 'PwC', 'IBM', 'HCL', 'Tech Mahindra'
  ];

  const faqs = [
    {
      question: 'What online programs does KIIT University offer?',
      answer: 'KIIT University offers UGC-entitled online programs including MCA, B.Com, M.Com, MA, BBA, BA, and PhD across various specializations. All programs are designed for working professionals with flexible learning schedules, live interactive sessions, and comprehensive digital learning resources.'
    },
    {
      question: 'Is the KIIT online degree valid and recognized?',
      answer: 'Yes, absolutely. KIIT University is a NAAC A++ accredited deemed university with NIRF Rank 16. The online degrees are UGC-entitled and have the same value as regular degrees. They are valid for higher education, government jobs, and private sector employment across India and internationally.'
    },
    {
      question: 'What is the fee structure and payment options?',
      answer: 'KIIT online programs range from ₹1,60,000 to ₹2,50,000 for complete programs. Fees can be paid semester-wise or through easy EMI options. Payment can be made through online banking, credit/debit card, or UPI. Financial assistance and scholarship options are available for eligible students.'
    },
    {
      question: 'How are classes and examinations conducted?',
      answer: 'Classes are conducted through live interactive online sessions and pre-recorded lectures accessible 24/7 through the Learning Management System (LMS). Examinations are conducted online at scheduled times. Students receive assignments, projects, and case studies for continuous assessment throughout the semester.'
    },
    {
      question: 'What support services are available for online learners?',
      answer: 'KIIT provides comprehensive support including dedicated student success manager, 24/7 LMS access, digital library with e-books and journals, doubt clearing sessions, technical support, career counseling, placement assistance, and regular faculty interaction through webinars and discussion forums.'
    },
    {
      question: 'Does KIIT provide placement assistance for online students?',
      answer: 'Yes, KIIT offers placement assistance to online students through its dedicated career services cell. Students get access to job postings, resume building workshops, interview preparation, industry connects, and recruitment drives. KIIT has partnerships with 500+ companies for placement opportunities.'
    }
  ];

  return (
    <>
      <Head>
        <title>KIIT University Online Programs | NAAC A++ | NIRF Rank 16 | MBA NINJA</title>
        <meta name="description" content="KIIT University Online Education - UGC-entitled MCA, B.Com, M.Com, MA, BBA, BA, PhD programs. NAAC A++ | NIRF Rank 16. Flexible learning for working professionals. Placement assistance available." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/KIIT University.png" 
                alt="KIIT University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Bhubaneswar, Odisha</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.7/5</span>
                    <span className={styles.reviews}>(268 Reviews)</span>
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
              <h2>About KIIT University Online Programs</h2>
              <div className={styles.aboutContent}>
                <p>
                  Kalinga Institute of Industrial Technology (KIIT) is a NAAC A++ accredited deemed-to-be university with NIRF Rank 16, making it one of India's top private universities. Established in 1992, KIIT has grown into a multi-disciplinary institution with a strong focus on innovation, research, and industry collaboration. The online programs are designed to extend quality education to working professionals and students who cannot attend regular classes.
                </p>
                <p>
                  KIIT's online education platform combines cutting-edge technology with academic excellence. Programs are UGC-entitled and maintain the same rigorous standards as on-campus degrees. The university offers a comprehensive Learning Management System (LMS) with live interactive sessions, recorded lectures, digital library access, and continuous assessment through assignments and projects.
                </p>
                <p>
                  With a strong emphasis on practical learning and industry relevance, KIIT's online programs feature case studies, real-world projects, and guest lectures from industry experts. The flexible learning model allows students to balance their professional commitments while advancing their education. Students benefit from KIIT's extensive industry network and placement support services.
                </p>
                <p>
                  KIIT has established itself as a leader in online education with state-of-the-art infrastructure, experienced faculty, and student-centric approach. The university's commitment to quality education, affordable fee structure with EMI options, and comprehensive student support makes it an ideal choice for distance learners seeking career advancement and skill development.
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
                  <div className={styles.statNumber}>30,000+</div>
                  <div className={styles.statLabel}>Students Enrolled</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NIRF 16</div>
                  <div className={styles.statLabel}>National Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>500+</div>
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
                    <h3>Visit KIIT Online Portal</h3>
                    <p>Go to KIIT University's online education website and click on "Apply Now" to access the application portal.</p>
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
                  <span><strong>MCA:</strong> Bachelor's degree in Computer Science/IT or relevant field with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Com/MA:</strong> Bachelor's degree from UGC recognized university with minimum 50% marks (45% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Com/BBA/BA:</strong> 10+2 or equivalent from recognized board with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD:</strong> Master's degree with minimum 55% marks and qualifying entrance test</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions are open throughout the year with multiple intake batches</li>
                  <li>Document verification will be done online through the portal</li>
                  <li>Original certificates must be produced at the time of final verification</li>
                  <li>Semester-wise fee payment and EMI options available</li>
                  <li>Scholarship opportunities available for meritorious students</li>
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
                  <h3>2000+</h3>
                  <p>Students Placed Annually</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>500+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>40%</h3>
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
                Find answers to common queries about KIIT online programs
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

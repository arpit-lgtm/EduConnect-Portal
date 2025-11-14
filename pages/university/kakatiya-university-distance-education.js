import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function KakatiyaPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'DEB', 'NAAC A+', 'AICTE', 'AIU'];
  const accreditation = 'NAAC A+ Grade';
  const nirfRank = 'Not Ranked in NIRF';

  const keyHighlights = [
    'NAAC A+ accredited state university',
    'UGC-DEB approved distance education programs',
    '70+ years of academic excellence since 1976',
    'Flexible learning modes for working professionals',
    'Industry-relevant curriculum updated regularly',
    'Affordable fee structure with EMI options',
    'Recognized degree with pan-India validity',
    'Comprehensive study material and online support'
  ];

  const coursesData = [
    { name: 'MBA (Master of Business Administration)', specializations: '10', duration: '2 Years', fee: 55000 },
    { name: 'MCA (Master of Computer Applications)', specializations: '3', duration: '2 Years', fee: 50000 },
    { name: 'M.Com (Master of Commerce)', specializations: '5', duration: '2 Years', fee: 35000 },
    { name: 'MA (Master of Arts)', specializations: '12', duration: '2 Years', fee: 30000 },
    { name: 'MSc (Master of Science)', specializations: '8', duration: '2 Years', fee: 40000 },
    { name: 'BBA (Bachelor of Business Administration)', specializations: '6', duration: '3 Years', fee: 45000 },
    { name: 'BCA (Bachelor of Computer Applications)', specializations: '2', duration: '3 Years', fee: 42000 },
    { name: 'B.Com (Bachelor of Commerce)', specializations: '4', duration: '3 Years', fee: 30000 },
    { name: 'BA (Bachelor of Arts)', specializations: '15', duration: '3 Years', fee: 25000 }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Capgemini',
    'Tech Mahindra', 'HCL', 'ICICI Bank', 'HDFC Bank', 'Deloitte',
    'Government Departments', 'Educational Institutions'
  ];

  const faqs = [
    {
      question: 'What programs does Kakatiya University offer through distance education?',
      answer: 'Kakatiya University offers UGC-DEB approved distance education programs including MBA, MCA, M.Com, MA, MSc at postgraduate level and BBA, BCA, B.Com, BA at undergraduate level. All programs are designed for working professionals and students who prefer flexible learning.'
    },
    {
      question: 'Is Kakatiya University distance education degree valid?',
      answer: 'Yes, Kakatiya University distance education degrees are fully valid and recognized. The programs are approved by UGC-DEB (Distance Education Bureau) and the degrees have pan-India validity, accepted for higher education and employment opportunities.'
    },
    {
      question: 'What is the fee structure for distance programs?',
      answer: 'Kakatiya University offers affordable fee structure ranging from ₹25,000 to ₹55,000 for complete programs. EMI options are available to ease the financial burden. The fee includes study material, online resources, and examination fees.'
    },
    {
      question: 'How is the examination conducted for distance students?',
      answer: 'Examinations are conducted at authorized examination centers across multiple cities. Students receive admit cards before exams. The university also provides online examination options for certain programs, ensuring flexibility for working professionals.'
    },
    {
      question: 'What support does Kakatiya University provide to distance learners?',
      answer: 'The university provides comprehensive study materials, online learning resources, doubt clearing sessions, regular assignments, and dedicated student support. A learning management system helps students access materials and track their progress throughout the program.'
    },
    {
      question: 'Can I pursue higher education after completing distance education from Kakatiya University?',
      answer: 'Absolutely! Kakatiya University distance education degrees are recognized for higher education. Graduates can pursue Ph.D., professional courses, or other postgraduate programs. The UGC-DEB approval ensures acceptance at all recognized institutions.'
    }
  ];

  return (
    <>
      <Head>
        <title>Kakatiya University Distance Education | UGC-DEB Approved Programs | MBA NINJA</title>
        <meta name="description" content="Kakatiya University Distance Education - UGC-DEB approved MBA, MCA, M.Com, MA, BBA, BCA programs. NAAC A+ Grade. Affordable fees from ₹25,000. Flexible learning for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Kakatiya University.png" 
                alt="Kakatiya University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Warangal, Telangana</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.1/5</span>
                    <span className={styles.reviews}>(156 Reviews)</span>
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
              <h2>About Kakatiya University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  Kakatiya University, established in 1976, is a premier state university located in Warangal, Telangana. The university has been at the forefront of providing quality education through its distance education programs, making higher education accessible to students across India. With NAAC A+ accreditation and UGC-DEB approval, the university ensures that all distance learning programs meet the highest academic standards.
                </p>
                <p>
                  The Directorate of Distance Education at Kakatiya University offers a wide range of undergraduate and postgraduate programs designed specifically for working professionals, homemakers, and students who cannot attend regular classes. The flexible learning model allows students to balance their education with personal and professional commitments while earning a recognized degree.
                </p>
                <p>
                  Kakatiya University's distance education programs are known for their comprehensive curriculum, quality study materials, and robust student support system. The university leverages modern technology to provide online resources, virtual classrooms, and digital libraries, ensuring that distance learners have access to the same quality of education as on-campus students.
                </p>
                <p>
                  With over 70 years of academic excellence, Kakatiya University has established itself as a trusted name in higher education. The university's commitment to affordability, accessibility, and quality has helped thousands of students achieve their educational and career goals through distance learning programs.
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
                  <div className={styles.statNumber}>50,000+</div>
                  <div className={styles.statLabel}>Distance Learners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>70+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>UGC-DEB Approved</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>200+</div>
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
                <strong>Note:</strong> EMI options available starting at ₹5,000/month. Flexible payment plans to support your education journey. All programs include comprehensive study material and online support.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple and hassle-free admission process for distance education programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>Go to Kakatiya University's distance education portal and click on "New Admission" to begin your application.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Online Application</h3>
                    <p>Complete the online application form with accurate personal, educational, and contact details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Upload scanned copies of required documents including educational certificates, ID proof, and photographs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Fees Online</h3>
                    <p>Complete the fee payment through secure online payment gateway. EMI options available for eligible students.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Application</h3>
                    <p>Review all details carefully and submit your application. Download the acknowledgment receipt for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Receive Confirmation</h3>
                    <p>Get admission confirmation via email and SMS. Access your student portal to download study materials and track progress.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/MCA/M.Com/MA/MSc:</strong> Bachelor's degree from recognized university with minimum 50% marks (45% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BBA/BCA/B.Com/BA:</strong> 10+2 or equivalent from recognized board with minimum 45% marks (40% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> No upper age limit for distance education programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Work Experience:</strong> Not mandatory but preferred for MBA program</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions are open twice a year (January and July sessions)</li>
                  <li>All documents must be self-attested before uploading</li>
                  <li>Original documents verification required at study center</li>
                  <li>Migration and transfer certificates needed for undergraduate programs</li>
                  <li>Refund policy applicable as per university norms</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Comprehensive career assistance and placement support for distance learners
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>1,000+</h3>
                  <p>Students Placed Annually</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>200+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>40%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Assistance</p>
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
                Find answers to common queries about Kakatiya University distance education programs
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

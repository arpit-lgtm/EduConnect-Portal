import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const JamiaHamdardOnline = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online BCA', fee: '₹96,000', duration: '3 Years' },
    { name: 'Online BBA', fee: '₹84,000', duration: '3 Years' },
    { name: 'Online B.Com', fee: '₹54,500', duration: '3 Years' },
    { name: 'Online MA (2 Specializations)', fee: '₹26,000', duration: '2 Years' },
    { name: 'Online MBA (7 Specializations)', fee: '₹1,03,500', duration: '2 Years' },
    { name: 'Online MCA', fee: '₹87,500', duration: '2 Years' },
    { name: 'Advanced PG Diploma (3 Specializations)', fee: '₹16,500', duration: '1 Year' },
    { name: 'Diploma in Foreign Language (2 Languages)', fee: '₹9,500', duration: '1 Year' },
    { name: 'Online Diploma Program', fee: '₹11,500', duration: '1 Year' }
  ];

  const keyHighlights = [
    'UGC-approved Deemed-to-be University with NAAC A accreditation',
    'NIRF Rank 45 - recognized among India\'s top institutions',
    'Flexible online learning with interactive virtual classrooms',
    'NBA-accredited programs ensuring quality education',
    'Comprehensive digital library and online resources',
    'Expert faculty with extensive industry experience',
    'Affordable fee structure with EMI options available',
    'Strong placement support with 300+ hiring partners'
  ];

  const approvals = ['UGC', 'AICTE', 'NAAC A', 'NBA'];
  const nirfRank = 'Rank 45';
  const accreditation = 'NAAC A';

  const placementPartners = [
    'Apollo', 'Deloitte', 'Johnson Controls', 'Microsoft',
    'HDFC Bank', 'Infosys', 'ITC', 'KPMG',
    'OYO', 'Genpact', 'Dell', 'Tech Mahindra',
    'FedEx', 'Accenture', 'Wipro', 'TCS',
    'Cognizant', 'HCL', 'IBM', 'Oracle', 'Amazon'
  ];

  const faqs = [
    {
      question: 'Are online programs at Jamia Hamdard University legitimate?',
      answer: 'Yes, all online programs offered by Jamia Hamdard are fully approved by UGC-DEB (University Grants Commission - Distance Education Bureau) and are equivalent to regular degrees. The university is a deemed-to-be institution with NAAC A accreditation.'
    },
    {
      question: 'What online courses are available at Jamia Hamdard University?',
      answer: 'Jamia Hamdard offers a wide range of online programs including BCA, BBA, B.Com, MA (2 specializations), MBA (7 specializations), MCA, Advanced PG Diploma (3 specializations), Foreign Language Diplomas (2 languages), and various other diploma programs.'
    },
    {
      question: 'What are the admission requirements for Jamia Hamdard University programs?',
      answer: 'For UG programs, candidates need 10+2 with 50% marks. For PG programs, a bachelor\'s degree with 50% marks is required. MBA requires graduation in any discipline, while MCA requires Mathematics background. There is no age limit for online programs.'
    },
    {
      question: 'Is a scholarship available for Jamia Hamdard\'s online programs?',
      answer: 'While the university offers competitive and affordable fee structures, students can apply for government scholarships designed for minorities, SC/ST, OBC, and specially-abled candidates. EMI payment options are also available through partner financial institutions.'
    },
    {
      question: 'What are the placement prospects for Jamia Hamdard University students?',
      answer: 'Jamia Hamdard provides dedicated placement support with partnerships across 300+ companies including Apollo, Deloitte, Microsoft, HDFC Bank, and other leading organizations. Students have access to career counseling, skill development programs, and job placement assistance.'
    },
    {
      question: 'Is Jamia Hamdard offering online courses recognized for government jobs?',
      answer: 'Yes, degrees obtained through Jamia Hamdard\'s online programs are UGC-approved and are valid for government job applications, just like regular degrees. They hold equal recognition and value in both public and private sectors.'
    }
  ];

  return (
    <>
      <Head>
        <title>Jamia Hamdard Online - Distance Education Programs | EduConnect</title>
        <meta name="description" content="Explore Jamia Hamdard University's UGC-approved online degree programs. MBA, BCA, BBA, B.Com, MCA and more with placement support." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Jamia Hamdard University.png" 
                alt="Jamia Hamdard University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 New Delhi, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(450 Reviews)</span>
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
              <h2>About Jamia Hamdard Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Jamia Hamdard is a prestigious deemed-to-be university established in 1989 in New Delhi, India. Founded with a vision to provide high-quality education and foster academic excellence, the university has grown into one of India's most respected educational institutions. Through its online platform, Jamia Hamdard extends its exceptional programs to a global audience, making quality education accessible to students worldwide regardless of geographical boundaries.
                </p>
                <p>
                  The university offers a comprehensive range of online degrees across multiple disciplines including Medicine, Pharmacy, Nursing, Management, Sciences, Humanities, and Information Technology. With NAAC A accreditation and NIRF Rank 45, Jamia Hamdard maintains the highest standards of academic excellence. The online learning platform provides a seamless educational experience with interactive virtual classrooms, comprehensive digital resources, and opportunities for collaboration with faculty and peers.
                </p>
                <p>
                  Jamia Hamdard's online education initiative is designed specifically for working professionals, international students, and individuals seeking to enhance their skills or embark on new career paths. The university takes pride in its distinguished faculty members who are leaders in their respective fields, bringing extensive industry experience and academic rigor to virtual classrooms.
                </p>
                <p>
                  Students gain access to cutting-edge study resources including digital libraries, research databases, and online publications, enabling them to broaden their knowledge and stay current with advances in their chosen fields. The university is committed to providing a comprehensive approach to education with extracurricular activities, virtual events, and student clubs that foster a sense of community and enhance the overall educational experience.
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
                  <div className={styles.statNumber}>45</div>
                  <div className={styles.statLabel}>NIRF Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Avg. Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>1989</div>
                  <div className={styles.statLabel}>Established</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our diverse range of UGC-approved online degree programs designed to advance your career
              </p>
              
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Duration</th>
                      <th>Total Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>{course.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Flexible EMI payment options available through partner financial institutions. Students can avail government scholarships for minorities, SC/ST, OBC, and specially-abled candidates. All programs are UGC-approved and equivalent to regular degrees.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Jamia Hamdard Online
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Program Selection</h3>
                    <p>Visit the official website and browse through available online programs. Review the course structure, specializations, and eligibility requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Complete the new student registration form on the admission portal. Enter your contact details to receive login credentials via SMS and email.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Form</h3>
                    <p>Fill out the comprehensive application form with accurate personal, academic, and contact information. Upload required documents including educational certificates and ID proof.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Complete the fee payment through the official e-payment portal. Avoid refreshing the page during payment processing.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation</h3>
                    <p>Receive admission confirmation via email and SMS. Download and save the application form and fee receipt for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Course Access</h3>
                    <p>Access the Learning Management System with your credentials. Begin your academic journey with comprehensive study materials and resources.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs:</strong> 10+2 from a recognized board with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs:</strong> Bachelor's degree from a UGC-recognized university with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA:</strong> Graduation in any discipline from a recognized university (entrance test may apply)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MCA:</strong> Bachelor's degree with Mathematics at 10+2 level or graduation level</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diploma Programs:</strong> 10+2 or equivalent qualification from a recognized board</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> No age limit for admission to online programs</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions open twice a year - January/February and July/August batches</li>
                  <li>Create ABC ID (Academic Bank of Credits) as per UGC guidelines</li>
                  <li>100% fee refund available within specified period as per UGC policy</li>
                  <li>Documents required: 10th & 12th certificates, graduation degree (for PG programs), ID proof, photographs</li>
                  <li>Online degrees from Jamia Hamdard are UGC-approved and equivalent to regular degrees</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access extensive career opportunities through our robust placement ecosystem
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Active Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>More Interview Calls</p>
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
                Find answers to common queries about Jamia Hamdard Online programs
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
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default JamiaHamdardOnline;

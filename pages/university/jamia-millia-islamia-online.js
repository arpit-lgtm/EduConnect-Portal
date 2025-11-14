import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const JamiaMilliaIslamiaOnline = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online BA (General)', fee: '₹21,600', duration: '3 Years' },
    { name: 'Online B.Com (2 Specializations)', fee: '₹21,600', duration: '3 Years' },
    { name: 'Online BBA (Finance & Accounts)', fee: '₹26,400', duration: '3 Years' },
    { name: 'Online M.Com', fee: '₹10,000', duration: '2 Years' },
    { name: 'Online MA (7 Specializations)', fee: '₹10,400', duration: '2 Years' },
    { name: 'Online MBA', fee: '₹44,200', duration: '2 Years' },
    { name: 'Doctor of Philosophy (PhD)', fee: '₹23,100', duration: '2 Years' }
  ];

  const keyHighlights = [
    'NIRF Rank 3 - Among India\'s top 10 premier institutions',
    'Central University status with NAAC A++ accreditation',
    'UGC and UGC-DEB approved online programs',
    'Founded in 1920 with rich heritage and legacy of excellence',
    'Flexible weekend counseling sessions for working professionals',
    'Comprehensive self-learning study materials provided',
    'Strong placement support with leading MNCs and organizations',
    'Affordable fee structure starting from ₹10,000 per year'
  ];

  const approvals = ['UGC', 'AICTE', 'NAAC A++'];
  const nirfRank = 'Rank 3';
  const accreditation = 'NAAC A++';

  const placementPartners = [
    'HDFC Bank', 'Infosys', 'ITC', 'KPMG',
    'OYO', 'Genpact', 'Dell', 'Johnson Controls',
    'FedEx', 'Tech Mahindra', 'Honda', 'Vedantu',
    'Hindustan Times', 'Accenture', 'Wipro', 'TCS',
    'Cognizant', 'HCL', 'IBM', 'Oracle', 'Amazon'
  ];

  const faqs = [
    {
      question: 'How to Contact JMI, Centre for Distance & Online Education?',
      answer: 'You can contact Jamia Millia Islamia\'s Centre for Distance & Online Education through their official website, email at cdeonline@jmi.ac.in, or call their helpline during working hours. The administrative office is located at Jamia Millia Islamia, Jamia Nagar, New Delhi - 110025.'
    },
    {
      question: 'Are the online degrees offered to the students in Jamia Millia Islamia Valid?',
      answer: 'Yes, absolutely. All online degrees offered by Jamia Millia Islamia are fully approved by UGC-DEB (Distance Education Bureau) and are equivalent to regular degrees. The university is a Central University with NAAC A++ accreditation and NIRF Rank 3, ensuring the highest standards of education.'
    },
    {
      question: 'Is the online degree valid to apply for Government jobs?',
      answer: 'Yes, degrees obtained through Jamia Millia Islamia\'s online programs are UGC-approved and are valid for government job applications. They hold the same recognition as regular degrees and are accepted by central and state government departments, PSUs, and other public sector organizations.'
    },
    {
      question: 'Do Students have to appear at examination centers in the online learning program of Jamia Millia Islamia?',
      answer: 'The examination pattern includes both internal assessments and term-end examinations. While many assessments can be completed online, some programs may require students to appear at designated examination centers. The university provides multiple examination centers across India for student convenience.'
    },
    {
      question: 'Do Online learning and Regular programs offer the same value in Jamia Millia Islamia?',
      answer: 'Yes, online learning programs at Jamia Millia Islamia maintain the same academic standards, curriculum, and quality as regular programs. The degrees are equivalent, and the learning outcomes are identical. The only difference is the mode of delivery - online programs offer more flexibility for working professionals.'
    },
    {
      question: 'What are the top part-time courses offered by government-approved universities in India?',
      answer: 'Popular part-time/online courses include MBA, MA, M.Com, BBA, BA, B.Com, MCA, and various certificate programs. Jamia Millia Islamia offers high-quality online programs in Arts, Commerce, Management, and Research (PhD) with flexible learning schedules suitable for working professionals.'
    }
  ];

  return (
    <>
      <Head>
        <title>Jamia Millia Islamia Online - Distance Education Programs | EduConnect</title>
        <meta name="description" content="Explore Jamia Millia Islamia's UGC-approved online degree programs. MBA, MA, M.Com, BBA, BA and more with NIRF Rank 3." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Jamia Millia Islamia University.png" 
                alt="Jamia Millia Islamia University Logo" 
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
                    <span className={styles.ratingText}>4.6/5</span>
                    <span className={styles.reviews}>(520 Reviews)</span>
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
              <h2>About Jamia Millia Islamia Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Jamia Millia Islamia, deemed to be a University, was founded in 1920 in Aligarh, United Indian Province, by visionary reformers and freedom fighters including Maulana Mohammed Ali Jauhar, Dr. Mukhtar Ahmad Ansari, Hakim Ajmal Khan, Dr. Zakir Husain, Mahatma Gandhi, and Maulana Abul Kalam Azad. In 1988, the institution was granted the status of Central University by an Act of Parliament, and it was later relocated to New Delhi. For over a century, Jamia Millia Islamia has been committed to offering high-quality education with excellence and dedication to students from across India and beyond.
                </p>
                <p>
                  The university's Centre for Distance & Online Education (formerly CDOL) has been excelling for many years, providing accessible education to working professionals and students who cannot attend regular classes. In 2021, Jamia Millia Islamia launched comprehensive online programs, enabling students worldwide to pursue their educational aspirations with flexibility and convenience. The university maintains well-equipped learner support centers, extensive library facilities, and scheduled counseling sessions that help students navigate the online learning mode with ease and better understanding.
                </p>
                <p>
                  Currently, Jamia Millia Islamia Online offers diverse study programs including Bachelor's degrees in Arts, Commerce, and Business Administration, Master's degrees in various disciplines like Hindi, History, Public Administration, Commerce, Business Administration, English, Sociology, Human Resource Management, Political Science, and Education. The university also offers doctoral programs for advanced research.
                </p>
                <p>
                  With its NIRF Rank 3, NAAC A++ grade, and numerous specialized centers like the Centre for Peace and Conflict Resolution, FTK Centre for Information Technology, and Academy of International Studies, Jamia provides a comprehensive and enriching educational experience that combines academic rigor with practical application.
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
                  <div className={styles.statNumber}>3</div>
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
                  <div className={styles.statNumber}>1920</div>
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
                <strong>Note:</strong> All programs are UGC-DEB approved and equivalent to regular degrees. Fee concessions and scholarships available as per state and central government norms for eligible students. The university offers flexible payment options. Weekend counseling sessions and self-learning study materials provided to all students.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Jamia Millia Islamia Online
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Course Selection</h3>
                    <p>Visit the official Jamia Millia Islamia website and explore the available online programs. Review the eligibility criteria, course structure, and specialization options carefully.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>New User Registration</h3>
                    <p>Access the admission portal and click on 'New Student Login'. Register with your mobile number and create a password to receive login credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Login to the portal with your credentials. Complete the online application form with accurate information including date of birth, educational qualifications, address, and personal details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload</h3>
                    <p>Upload all mandatory documents including educational certificates, ID proof, photographs, and any other documents as specified by the university.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Make the fee payment through the official e-payment portal. Do not refresh the page during payment processing. Save the transaction receipt for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Confirmation</h3>
                    <p>After successful payment, you will receive confirmation via email or SMS. Download and save your application form and fee receipt. Access begins post-verification.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BA/B.Com/BBA:</strong> 10+2 from a recognized board with minimum 45% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MA Programs:</strong> Bachelor's degree from a UGC-recognized university with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Com:</strong> Bachelor's degree in Commerce or related field with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA:</strong> Graduation in any discipline from a recognized university (minimum 50% marks)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD:</strong> Master's degree with minimum 55% marks (50% for SC/ST candidates)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> No age bar for admission to online/distance learning programs</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions open twice a year - January/February and July/August batches</li>
                  <li>All candidates must create ABC ID and DEB ID as per UGC guidelines</li>
                  <li>100% fee refund available within specified period as per university norms</li>
                  <li>Documents required: 10th & 12th certificates, graduation degree (for PG), ID proof, photographs</li>
                  <li>Degrees obtained through ODL mode are equivalent to traditional degrees - UGC approved</li>
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
                Find answers to common queries about Jamia Millia Islamia Online programs
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

export default JamiaMilliaIslamiaOnline;

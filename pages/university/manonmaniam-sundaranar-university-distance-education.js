import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const ManonmaniamSundaranarUniversityDE = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const data = window.universityDatabase.find(
          uni => uni.id === 'manonmaniam-sundaranar-university-distance-education'
        );
        setUniversityData(data);
      } else {
        const response = await fetch('/api/comprehensive-database');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const data = window.universityDatabase.find(
          uni => uni.id === 'manonmaniam-sundaranar-university-distance-education'
        );
        setUniversityData(data);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'M.A. Tamil', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.A. English', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.A. History', fee: 'Contact University', duration: '2 Years', specializations: 2 },
    { name: 'M.A. Economics', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.A. Mass Communication & Journalism', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.Com', fee: 'Contact University', duration: '2 Years', specializations: 2 },
    { name: 'M.L.I.Sc.', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.Sc. Mathematics', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.Sc. Physics', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.Sc. Chemistry', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'B.A. Tamil', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.A. English', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.A. History', fee: 'Contact University', duration: '3 Years', specializations: 2 },
    { name: 'B.A. Economics', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.B.A.', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.Com', fee: 'Contact University', duration: '3 Years', specializations: 2 },
    { name: 'B.L.I.Sc.', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.Sc. Mathematics', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.Sc. Physics', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.Sc. Chemistry', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'Certificate in Library & Information Science', fee: 'Contact University', duration: '6 Months', specializations: 1 },
    { name: 'Certificate in Yoga for Human Excellence', fee: 'Contact University', duration: '6 Months', specializations: 1 },
    { name: 'Diploma in Yoga for Human Excellence', fee: 'Contact University', duration: '1 Year', specializations: 1 },
    { name: 'PGDCA', fee: 'Contact University', duration: '1 Year', specializations: 1 },
  ];

  const keyHighlights = [
    'Public university founded in 1990 through Tamil Nadu State Government legislation',
    'UGC-sanctioned institution delivering quality remote learning programs',
    'Honors Professor P. Sundaram Pillai, distinguished Tamil literary scholar',
    'Centre for Distance and Online Education embracing "Reaching the Unreached" philosophy',
    'Economical fee structures promoting educational accessibility for all demographics',
    'Contemporary curriculum regularly updated to match evolving industry demands',
    'Experienced teaching professionals offering continuous academic mentorship',
    'Career development services including professional training and internship programs from 5th semester onward'
  ];

  const approvals = ['UGC'];
  const accreditation = 'Government University';

  const placementPartners = [
    'HCL', 'TCS', 'Wipro', 'Infosys', 'Cognizant', 
    'Capgemini', 'Tech Mahindra', 'IBM'
  ];

  const faqs = [
    {
      question: 'Does Manonmaniam Sundaranar University offer valid distance education credentials?',
      answer: 'Affirmative. As a UGC-sanctioned public institution established through Tamil Nadu Government Act in 1990, all distance learning credentials issued by the Centre for Distance and Online Education maintain full recognition for employment across governmental and private sectors, as well as for advanced academic pursuits.'
    },
    {
      question: 'Which academic programs does the university provide through distance learning?',
      answer: 'The institution administers 24 diverse programs spanning Undergraduate tracks (B.A., B.Com, B.Sc., B.B.A., B.L.I.Sc.), Postgraduate degrees (M.A., M.Com, M.Sc., M.L.I.Sc.), and specialized Certificate/Diploma credentials in disciplines including Yoga Sciences, Library Information Science, and PGDCA across multiple subject areas.'
    },
    {
      question: 'Are distance education qualifications acceptable for government employment?',
      answer: 'Certainly. Credentials earned through the Centre for Distance and Online Education carry complete legitimacy for public sector positions, given the university\'s UGC authorization and establishment under Tamil Nadu State Government mandate, ensuring equivalent status with traditional degrees.'
    },
    {
      question: 'What are the program costs?',
      answer: 'The university implements highly competitive and economically accessible fee frameworks designed to enable educational opportunity for working adults and diverse student populations. Program-specific costs vary. For comprehensive fee schedules, prospective students should consult the admissions office or review the official institutional website.'
    },
    {
      question: 'Does the university provide financial assistance programs?',
      answer: 'Multiple scholarship opportunities exist including academic merit awards, single-girl child grants, minority student support programs, and various state-sponsored financial aid initiatives. Eligibility requirements and application procedures are detailed on the official university portal.'
    },
    {
      question: 'What are the contact details for Manonmaniam Sundaranar University?',
      answer: 'Communication Address: The Director, Directorate of Distance and Continuing Education, Manonmaniam Sundaranar University, Tirunelveli – 627 012, Tamil Nadu. Complete contact information including telephone numbers, electronic mail addresses, and web-based inquiry forms are accessible through the official website.'
    }
  ];

  return (
    <>
      <Head>
        <title>Manonmaniam Sundaranar University Distance Education | M.S. University</title>
        <meta name="description" content="Explore Manonmaniam Sundaranar University's UGC-approved distance education programs. Government university offering 24 courses in BA, MA, BSc, MSc, BBA, BCom, MCom and more." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Manonmaniam Sundaranar University.png" 
                alt="Manonmaniam Sundaranar University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Tirunelveli, Tamil Nadu</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.5/5</span>
                    <span className={styles.reviews}>(263 Reviews)</span>
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
                  <span className={styles.infoLabel}>University Type:</span>
                  <span className={styles.infoValue}>{accreditation}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Established:</span>
                  <span className={styles.infoValue}>1990</span>
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
              <h2>About Manonmaniam Sundaranar University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  Founded in 1990 by the Tamil Nadu Government, Manonmaniam Sundaranar University stands as a 
                  distinguished public institution committed to delivering exceptional educational experiences. 
                  Headquartered in Tirunelveli, Tamil Nadu, this government-operated university has established 
                  itself as a beacon of academic excellence and accessibility throughout the region.
                </p>
                <p>
                  The institution honors the legacy of Professor P. Sundaram Pillai (1855-1897), a celebrated 
                  Tamil literary scholar whose contributions to Tamil literature remain influential. His renowned 
                  composition "Tamil Thaai Vazhthu" serves as the official ceremonial anthem performed at Tamil Nadu 
                  state functions, embodying the university's deep cultural heritage and commitment to linguistic tradition.
                </p>
                <p>
                  Operating through its Centre for Distance and Online Education, the university champions the philosophy 
                  "Reaching the Unreached," demonstrating its dedication to democratizing higher education. This initiative 
                  ensures that quality academic programs remain accessible to working professionals, homemakers, and 
                  individuals facing geographical or temporal constraints that prevent traditional campus attendance.
                </p>
                <p>
                  The Centre administers 24 diverse academic programs spanning Undergraduate, Postgraduate, and 
                  Diploma/Certificate categories. As a UGC-sanctioned institution, the university maintains contemporary, 
                  regularly updated curricula that reflect current industry requirements and academic standards. The 
                  dedicated faculty corps provides continuous mentorship and academic guidance, ensuring personalized 
                  attention and comprehensive support throughout each student's educational journey.
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
                  <div className={styles.statNumber}>1990</div>
                  <div className={styles.statLabel}>Year Established</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>24</div>
                  <div className={styles.statLabel}>Distance Courses</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Avg. Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our diverse range of UGC-approved distance education programs across Arts, Science, Commerce, and Management
              </p>
              
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Specializations</th>
                      <th>Duration</th>
                      <th>Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.specializations === 2 ? 'Tamil/English Medium' : course.specializations === 1 ? 'Available' : course.specializations}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>{course.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> M.S. University offers budget-friendly fee structure. 
                Contact the university admission office or visit the official website for detailed program fees.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Manonmaniam Sundaranar University Distance Education
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>Go to the official M.S. University website and review admission requirements and required documents section.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Register & Fill Application</h3>
                    <p>Register with email and phone number, then fill application form with personal, academic, and contact details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Upload scanned documents including photograph, signature, qualifications, certificates, and category certificate if applicable.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Print & Send Application</h3>
                    <p>Print the application form and send it to: The Director, Directorate of Distance and Continuing Education, Manonmaniam Sundaranar University, Tirunelveli – 627 012.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Receive Credentials & Pay Fees</h3>
                    <p>Upon receipt of application, university provides login credentials. Log in to student portal and pay the fees to confirm enrollment.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/BSc/BCom/BBA/BLISc):</strong> 10+2 or equivalent from recognized board</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/MSc/MCom/MLISc):</strong> Bachelor's degree in relevant discipline from recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Certificate/Diploma Programs:</strong> Specific eligibility varies by program - check official website for details</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Create ABC ID (Academic Bank of Credits) as per UGC guidelines</li>
                  <li>Admission twice a year: July/August and January/February batches</li>
                  <li>100% fee refund available within specified period as per UGC policy</li>
                  <li>Distance education degree equivalent to regular degree (UGC notice)</li>
                  <li>Required documents: 10th & 12th certificates, graduation degree (for PG), ID proof, photographs, category certificate (if applicable)</li>
                  <li>Ensure valid and working email ID and phone number for verification process</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                M.S. University provides comprehensive placement support and career guidance to distance education students
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>65%+</h3>
                  <p>Minimum Marks for Eligibility</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>5th Sem</h3>
                  <p>Placement Eligibility Starts</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
              </div>

              <h3>Placement Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Dedicated placement cell for distance education students</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Training and internship programs for practical experience</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Students scoring 65% or above throughout course are eligible</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Placement opportunities available after 5th semester</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Career counseling and guidance sessions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Resume building and interview preparation support</span>
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
                Find answers to common queries about Manonmaniam Sundaranar University Distance Education programs
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

export default ManonmaniamSundaranarUniversityDE;

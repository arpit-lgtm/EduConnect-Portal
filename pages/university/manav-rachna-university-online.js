import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const ManavRachnaUniversityOnline = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const data = window.universityDatabase.find(
          uni => uni.id === 'manav-rachna-university-online'
        );
        setUniversityData(data);
      } else {
        const response = await fetch('/api/comprehensive-database');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const data = window.universityDatabase.find(
          uni => uni.id === 'manav-rachna-university-online'
        );
        setUniversityData(data);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'Online MBA', fee: 128000, duration: '2 Years', specializations: 15 },
    { name: 'Online BBA', fee: 162000, duration: '3 Years', specializations: 4 },
    { name: 'Online BCA', fee: 162000, duration: '3 Years', specializations: 3 },
    { name: 'Online B.Com', fee: 102000, duration: '3 Years', specializations: 1 },
    { name: 'Online BA', fee: 102000, duration: '3 Years', specializations: 2 },
    { name: 'Online MCA', fee: 108000, duration: '2 Years', specializations: 3 },
    { name: 'Online M.Com', fee: 108000, duration: '2 Years', specializations: 1 },
    { name: 'Online MA', fee: 108000, duration: '2 Years', specializations: 2 },
    { name: 'Online BA Honours', fee: 102000, duration: '3 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Official recognition from UGC-DEB for digital and distance learning programs',
    'NAAC A grade accreditation demonstrating superior academic standards',
    'WES-recognized credentials accepted globally for employment and higher studies',
    'AICTE validation for technology-focused programs ensuring industry alignment',
    'Complimentary premium Udemy course library access for skill enhancement',
    'Career advancement support through partnerships with Fortune 500 companies including Accenture, Microsoft, HCL, Deloitte',
    'Secure AI-monitored remote examination system',
    'Flexible payment plans with zero-interest EMI options and merit-based scholarships'
  ];

  const approvals = ['UGC-DEB', 'AICTE', 'NAAC A', 'WES'];
  const nirfRank = 'Rank 72';
  const accreditation = 'NAAC A';

  const placementPartners = [
    'Accenture', 'Microsoft', 'HCL', 'Deloitte', 'Amazon', 'HP', 
    'Cognizant', 'IBM', 'Infosys', 'KPMG', 'Wipro', 'TCS'
  ];

  const faqs = [
    {
      question: 'Does Manav Rachna University have UGC approval for online programs?',
      answer: 'Absolutely. The Centre for Distance and Online Education (CDOE) operates with complete UGC-DEB authorization, ensuring that digital degrees carry identical recognition and credibility as traditional campus-based qualifications for both public and private sector employment.'
    },
    {
      question: 'Which academic programs are available through online mode?',
      answer: 'The university provides 9 comprehensive digital programs: MBA featuring 15 concentration areas, BBA, BCA, B.Com, BA, MCA, M.Com, MA, and BA Honours spanning Business Administration, Information Technology, Commerce, and Humanities disciplines.'
    },
    {
      question: 'What is the instructional and assessment methodology?',
      answer: 'Academic content is delivered via the university\'s proprietary Learning Management System featuring real-time interactive sessions, on-demand recorded modules, simulated laboratory environments, and peer collaboration forums implementing the Four Quadrant Learning Methodology. Assessments utilize sophisticated AI-based remote proctoring technology.'
    },
    {
      question: 'Is career placement assistance provided to online learners?',
      answer: 'Every digital program incorporates comprehensive career development services including corporate leadership webinars, industry professional networking events, and direct recruitment initiatives. Students gain access to employment opportunities with premier organizations such as Accenture, Microsoft, HCL, Deloitte, HP, and Amazon.'
    },
    {
      question: 'Are financial aid options or installment plans available?',
      answer: 'The university provides merit-based scholarship programs for qualifying candidates alongside convenient EMI arrangements through LiquiLoans partnership. Zero-interest installment options span 16 months for postgraduate and 24 months for undergraduate programs with flexible payment structures.'
    },
    {
      question: 'How does the enrollment process work?',
      answer: 'Admission follows a streamlined digital process: (1) Complete the web-based application portal, (2) Submit digitized supporting documentation, (3) Receive admission decision based on eligibility verification, (4) Confirm enrollment through fee settlement, (5) Complete identity verification followed by official registration and learning platform access.'
    }
  ];

  return (
    <>
      <Head>
        <title>Manav Rachna University Online - Distance Education Programs | EduConnect</title>
        <meta name="description" content="Explore Manav Rachna University's UGC-approved online degree programs. MBA, BBA, BCA, B.Com, BA, MCA with 100% placement support and free Udemy access." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Manav Racha University.png" 
                alt="Manav Rachna University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Faridabad, Haryana</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.2/5</span>
                    <span className={styles.reviews}>(487 Reviews)</span>
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
              <h2>About Manav Rachna University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Established in 2004 as Manav Rachna College of Engineering, this institution achieved university 
                  status a decade later in 2014. Situated in Faridabad, it has emerged as a premier educational hub 
                  serving Northern India with distinction. Over the years, the institution has successfully expanded 
                  its academic portfolio from traditional engineering disciplines to encompass a wide spectrum of 
                  programs delivered both on-campus and through digital platforms.
                </p>
                <p>
                  The Centre for Distance and Online Education (CDOE) represents Manav Rachna University's dedicated 
                  division for delivering high-quality virtual learning experiences. With comprehensive approvals from 
                  UGC-DEB, AICTE, and WES, alongside its NAAC A grade status, CDOE maintains the authority to award 
                  fully online degrees that carry equivalent recognition to traditional on-campus qualifications.
                </p>
                <p>
                  Academic offerings span diverse fields including Business Management, Computer Technology, Commerce, 
                  and Liberal Arts at both foundational and advanced degree levels. The learning methodology combines 
                  synchronous live sessions, asynchronous recorded content, virtual laboratory experiences, and 
                  collaborative discussion forums to create an engaging educational ecosystem.
                </p>
                <p>
                  The university implements a unique Four Quadrant Learning Methodology: students begin with guided 
                  instructional sessions, progress through independent study modules, participate in collaborative 
                  knowledge-building activities, and conclude with comprehensive performance assessments. Every program 
                  integrates career preparation components, featuring corporate webinars, expert mentorship sessions, 
                  and recruitment opportunities with leading organizations. Additionally, learners receive complimentary 
                  access to premium Udemy courses, enhancing their professional skill development journey.
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
                  <div className={styles.statNumber}>72</div>
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
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Online Learning</div>
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
                <strong>Note:</strong> EMI options available through LiquiLoans with 0% interest. 
                UG courses: 24 months tenure, PG courses: 16 months tenure with one advance EMI.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Manav Rachna University Online
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Online Application</h3>
                    <p>Complete and submit the online application form with accurate personal and academic information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Submit scanned copies of all necessary documents including mark sheets, certificates, and ID proof.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Selection Process</h3>
                    <p>University reviews applications and selects students based on eligibility criteria. No entrance exam required.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Accept Admission & Pay Fees</h3>
                    <p>Receive admission letter, accept the offer, and complete fee payment through secure payment gateway.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification & Enrollment</h3>
                    <p>Physical verification of documents is conducted, followed by official enrollment and LMS access.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Online Programs (BBA/BCA/B.Com/BA):</strong> 10+2 or equivalent from recognized board with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Online Programs (MBA/MCA/M.Com/MA):</strong> Bachelor's degree from recognized university with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Relaxation:</strong> 5% relaxation in marks for SC/ST/OBC candidates as per government norms</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Fresh batches generally start in January every year</li>
                  <li>Admissions on direct basis considering eligibility criteria</li>
                  <li>Create ABC ID and DEB ID as per latest UGC guidelines</li>
                  <li>Online degrees equivalent to traditional degrees (UGC notice)</li>
                  <li>Required documents: 10th & 12th mark sheets, graduation degree (for PG), ID proof, photographs</li>
                  <li>Scholarships and EMI facilities available for eligible students</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                All online programs are placement-linked with comprehensive career support services
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Linked Programs</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Top Company Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>More Interview Opportunities</p>
                </div>
              </div>

              <h3>Placement Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Regular webinars with industry experts and thought leaders</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Interactive sessions with hiring managers from top companies</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Dedicated placement drives and campus recruitment opportunities</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Resume building and interview preparation workshops</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Industry-relevant curriculum with practical case studies</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Free access to Udemy courses for additional skill development</span>
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
                Find answers to common queries about Manav Rachna University Online programs
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

export default ManavRachnaUniversityOnline;

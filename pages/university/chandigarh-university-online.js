import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const ChandigarhUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const chandigarhData = window.universityDatabase.find(
          uni => uni.id === 'chandigarh-university-distance'
        );
        setUniversityData(chandigarhData);
      } else {
        const response = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const chandigarhData = window.universityDatabase.find(
          uni => uni.id === 'chandigarh-university-distance'
        );
        setUniversityData(chandigarhData);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'Online MBA', fee: 160000, duration: '2 Years', specializations: '15 Specializations' },
    { name: 'Online BBA', fee: 150000, duration: '3 Years', specializations: '8 Specializations' },
    { name: 'Online BCA', fee: 120000, duration: '3 Years', specializations: '3 Specializations' },
    { name: 'Online B.Com', fee: 90000, duration: '3 Years', specializations: '4 Specializations' },
    { name: 'Online MCA', fee: 140000, duration: '2 Years', specializations: '2 Specializations' },
    { name: 'Online M.Com', fee: 100000, duration: '2 Years', specializations: '3 Specializations' },
    { name: 'Online BA', fee: 75000, duration: '3 Years', specializations: '6 Specializations' },
    { name: 'Online MA', fee: 85000, duration: '2 Years', specializations: '5 Specializations' },
    { name: 'Online B.Sc', fee: 95000, duration: '3 Years', specializations: '4 Specializations' },
    { name: 'Online M.Sc', fee: 110000, duration: '2 Years', specializations: '3 Specializations' },
    { name: 'Online LLB', fee: 180000, duration: '3 Years', specializations: '2 Specializations' }
  ];

  const keyHighlights = [
    'NIRF Rank 20 among all universities in India in 2024',
    'UGC-DEB approved online learning programs with full recognition',
    'NAAC A+ accredited institution ensuring quality education',
    'Collaborations with Harvard, MIT, Stanford for certificate programs',
    '411 global tie-ups providing international exposure',
    'Industry-aligned curriculum with practical learning approach',
    'Advanced Learning Management System for seamless online education',
    'Live interactive sessions with recorded lectures for flexibility',
    'Dedicated career services and placement support',
    '24/7 technical and academic support for online learners'
  ];

  const approvals = ['UGC-DEB', 'NAAC A+', 'AICTE', 'BCI'];
  const nirfRank = 'NIRF Rank 20';
  const accreditation = 'NAAC A+ Grade';

  const placementPartners = [
    'Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 'Wipro', 
    'Accenture', 'Deloitte', 'IBM', 'Cognizant', 'HCL', 'Tech Mahindra'
  ];

  const faqs = [
    {
      question: 'What online programs does Chandigarh University offer?',
      answer: 'Chandigarh University offers 11 comprehensive online programs including MBA, BBA, BCA, B.Com, MCA, M.Com, BA, MA, B.Sc, M.Sc, and LLB with multiple specializations in each program.'
    },
    {
      question: 'Is Chandigarh University online degree valid and recognized?',
      answer: 'Yes, all online degrees from Chandigarh University are UGC-DEB approved and NAAC A+ accredited. The university holds NIRF Rank 20, making the degrees equivalent to regular on-campus programs with full industry recognition.'
    },
    {
      question: 'How are online classes conducted?',
      answer: 'Classes are conducted through an advanced Learning Management System with live interactive sessions, recorded lectures, digital study materials, virtual labs, and online examinations. Students get 24/7 access to course content.'
    },
    {
      question: 'What international collaborations does the university have?',
      answer: 'Chandigarh University has collaborations with Harvard, MIT, Stanford for certificate programs and 411 global tie-ups providing international exposure, student exchange programs, and global career opportunities.'
    },
    {
      question: 'What placement support is available for online students?',
      answer: 'Online students receive full placement support including career counseling, resume building, interview preparation, and access to the same placement opportunities as on-campus students through virtual recruitment drives.'
    }
  ];

  return (
    <>
      <Head>
        <title>Chandigarh University Online - UGC Approved Distance Learning | EduConnect</title>
        <meta name="description" content="Explore Chandigarh University's UGC-approved online programs. NIRF Rank 20, NAAC A+ accredited with 11 programs including MBA, BBA, BCA, and global collaborations." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Chandigarh University.png" 
                alt="Chandigarh University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Mohali, Punjab</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.8/5</span>
                    <span className={styles.reviews}>(2,156 Reviews)</span>
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
              <h2>About Chandigarh University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Chandigarh University, with an impressive NIRF Rank 20 among all universities in India, stands as one of 
                  the country's premier educational institutions. The university's online learning division brings the same 
                  quality education to students worldwide through UGC-DEB approved programs that hold equal value to 
                  traditional on-campus degrees.
                </p>
                <p>
                  With NAAC A+ accreditation, Chandigarh University ensures the highest standards of academic excellence 
                  and institutional quality. The university has established itself as a leader in innovative education 
                  through strategic collaborations with world-renowned institutions including Harvard, MIT, and Stanford 
                  for specialized certificate programs.
                </p>
                <p>
                  The university boasts 411 global tie-ups, providing students with unprecedented international exposure 
                  and career opportunities. These partnerships span across various sectors including technology, business, 
                  research, and innovation, ensuring students receive a globally relevant education that prepares them 
                  for the international job market.
                </p>
                <p>
                  Chandigarh University's online learning platform leverages cutting-edge technology to deliver an 
                  immersive educational experience. The advanced Learning Management System provides seamless access 
                  to live interactive sessions, recorded lectures, digital libraries, virtual labs, and comprehensive 
                  student support services available 24/7.
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
                  <div className={styles.statNumber}>11</div>
                  <div className={styles.statLabel}>Online Programs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>411</div>
                  <div className={styles.statLabel}>Global Tie-ups</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>20</div>
                  <div className={styles.statLabel}>NIRF Ranking</div>
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
                Explore our comprehensive range of UGC-approved online degree programs with international collaborations
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
                        <td>{course.specializations}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> EMI options available with 0% interest plans. 
                Harvard, MIT, Stanford certificate programs available as add-ons. Digital library access included.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Chandigarh University Online
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Register Online</h3>
                    <p>Complete the online application form on the university website with your academic credentials and personal information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Documents</h3>
                    <p>Upload required documents including mark sheets, ID proof, photographs, and other relevant certificates through the online portal.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Complete application fee payment and participate in virtual interview if required based on the program requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Verification & Confirmation</h3>
                    <p>University admission team reviews your application and documents. Upon approval, receive confirmation via email.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Start Learning</h3>
                    <p>Access the Learning Management System, course materials, and begin your academic journey with global collaborations.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Online Programs (BBA/BCA/B.Com):</strong> 10+2 or equivalent from recognized board with minimum 50% marks. No entrance examination required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Online Programs (MBA/MCA/M.Com):</strong> Bachelor's degree from UGC recognized university with 50% aggregate. Work experience preferred for MBA specializations</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Certificate/Diploma Programs:</strong> Graduation for PG programs, 12th for UG programs. NIRF Rank 20 with 411 global tie-ups including Harvard, MIT, Stanford collaborations</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>NIRF Rank 20 among all universities in India with global recognition</li>
                  <li>411 global tie-ups with Harvard, MIT, Stanford collaborations</li>
                  <li>Advanced Learning Management System with 24/7 technical support</li>
                  <li>No entrance examination required for most programs</li>
                  <li>Documents required: 10th & 12th certificates, graduation degree, ID proof, photographs</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access extensive career opportunities through our robust placement ecosystem and global partnerships
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>411</h3>
                  <p>Global University Tie-ups</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>20</h3>
                  <p>NIRF University Ranking</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Support Available</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>24/7</h3>
                  <p>Student Support Services</p>
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
                Find answers to common queries about Chandigarh University Online programs
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
};

export default ChandigarhUniversity;
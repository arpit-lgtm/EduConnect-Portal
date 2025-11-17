import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const ChitkaraUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const chitkaraData = window.universityDatabase.find(
          uni => uni.id === 'chitkara-university-online'
        );
        setUniversityData(chitkaraData);
      } else {
        const response = await fetch('/api/comprehensive-database');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const chitkaraData = window.universityDatabase.find(
          uni => uni.id === 'chitkara-university-online'
        );
        setUniversityData(chitkaraData);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'Online MBA', fee: 200000, duration: '2 Years', specializations: '8 Specializations' }
  ];

  const keyHighlights = [
    'NIRF Rank 64 in Management category for excellence in MBA education',
    'UGC approved university with full recognition for online programs',
    'NAAC A+ accreditation ensuring high-quality educational standards',
    'Established in 2008 with rapid growth and industry recognition',
    'Strong industry partnerships and global university collaborations',
    'Modern curriculum aligned with current market requirements',
    'Experienced faculty with industry and academic expertise',
    'Advanced online learning platform with interactive features',
    'Comprehensive student support services and career guidance',
    'Focus on practical learning through case studies and projects'
  ];

  const approvals = ['UGC', 'NAAC A+', 'AICTE'];
  const nirfRank = 'NIRF Rank 64 (Management)';
  const accreditation = 'NAAC A+ Grade';

  const placementPartners = [
    'Wipro', 'TCS', 'Infosys', 'HCL Technologies', 'Tech Mahindra', 
    'Cognizant', 'Accenture', 'IBM', 'Microsoft', 'Google', 'Amazon', 'Deloitte'
  ];

  const faqs = [
    {
      question: 'What MBA specializations does Chitkara University offer online?',
      answer: 'Chitkara University offers Online MBA with 8 specializations including Finance, Marketing, Human Resources, Operations, International Business, Digital Marketing, Business Analytics, and Entrepreneurship, all designed to meet current industry demands.'
    },
    {
      question: 'Is Chitkara University online MBA degree valid and recognized?',
      answer: 'Yes, Chitkara University is UGC approved and NAAC A+ accredited. The online MBA degree holds the same value as the regular on-campus program and is recognized by employers and for higher education worldwide.'
    },
    {
      question: 'How are online classes conducted at Chitkara University?',
      answer: 'Classes are conducted through an advanced online learning platform featuring live interactive sessions, recorded lectures, digital study materials, virtual case study discussions, and online assessments with faculty support.'
    },
    {
      question: 'What is the fee structure and payment options?',
      answer: 'The Online MBA program fees are ₹2,00,000 for 2 years. Payment can be made through easy EMI options, educational loans, and flexible installment plans to make quality education accessible to all students.'
    },
    {
      question: 'What career support services are available?',
      answer: 'Chitkara University provides comprehensive career support including resume building, interview preparation, industry networking events, placement assistance, and access to job opportunities through industry partnerships.'
    }
  ];

  return (
    <>
      <Head>
        <title>Chitkara University Online MBA - UGC Approved Distance Learning | EduConnect</title>
        <meta name="description" content="Explore Chitkara University's UGC-approved Online MBA with 8 specializations. NIRF Rank 64 in Management, NAAC A+ accredited with ₹2,00,000 fees." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Chitkara University.png" 
                alt="Chitkara University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Punjab & Himachal Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(1,678 Reviews)</span>
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
              <h2>About Chitkara University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Chitkara University, established in 2008, has rapidly emerged as one of India's leading private universities, 
                  earning recognition through its NIRF Rank 64 in the Management category. The university has built a strong 
                  reputation for academic excellence, innovation, and industry-relevant education across its campuses in 
                  Punjab and Himachal Pradesh.
                </p>
                <p>
                  With UGC approval and NAAC A+ accreditation, Chitkara University ensures that its online programs maintain 
                  the same rigorous academic standards as its on-campus offerings. The university's online MBA program is 
                  specifically designed for working professionals and students seeking flexible learning options without 
                  compromising on educational quality.
                </p>
                <p>
                  The university has established strong partnerships with leading industry players and global universities, 
                  providing students with exposure to real-world business challenges and international perspectives. This 
                  approach ensures that graduates are well-prepared to meet the demands of today's dynamic business environment.
                </p>
                <p>
                  Chitkara University's commitment to innovation is reflected in its advanced online learning platform, 
                  which provides an immersive educational experience through interactive sessions, practical case studies, 
                  and comprehensive student support services designed to facilitate academic and professional success.
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
                  <div className={styles.statNumber}>8</div>
                  <div className={styles.statLabel}>MBA Specializations</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>64</div>
                  <div className={styles.statLabel}>NIRF Management Rank</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
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
                Explore our UGC-approved Online MBA program with comprehensive specializations for career advancement
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
                <strong>Note:</strong> Industry-aligned curriculum with internships and placement support. 
                100% online flexibility with weekend live sessions. Industry mentorship included.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Chitkara University Online MBA
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Fill out the comprehensive online application form with your academic qualifications, work experience, and personal details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Upload required documents including graduation certificates, mark sheets, work experience letters, and identity proof.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Processing</h3>
                    <p>Complete application fee payment and participate in counseling session if required based on your chosen program.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Confirmation</h3>
                    <p>Receive admission letter upon approval and complete enrollment formalities with fee payment and course selection.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Begin Studies</h3>
                    <p>Access Learning Management System, attend orientation, and start your academic journey with dedicated student support.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Online Programs (BBA/BCA/B.Com):</strong> 10+2 from recognized board with minimum 50% marks. Weekend live sessions for working professionals</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Online Programs (MBA/MCA):</strong> Bachelor's degree from UGC recognized university with 50% aggregate. Work experience preferred for MBA specializations</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Certificate/Diploma Programs:</strong> Graduation for PG programs. Industry partnerships for internships. NIRF Rank 64 in Management category</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>NIRF Rank 64 in Management category with industry-focused curriculum</li>
                  <li>100% online programs with weekend live sessions for working professionals</li>
                  <li>Industry partnerships for internships and placement opportunities</li>
                  <li>Flexible learning schedule with recorded lectures and digital resources</li>
                  <li>Documents required: 10th & 12th certificates, graduation degree, ID proof, work experience (if applicable)</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Chitkara University provides comprehensive career support to help Online MBA students achieve their professional goals
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>64</h3>
                  <p>NIRF Management Ranking</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>85%</h3>
                  <p>Placement Success Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>500+</h3>
                  <p>Industry Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹12 LPA</h3>
                  <p>Average CTC Package</p>
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

          {/* FAQ Section */}
          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
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
                <h3>Need more information?</h3>
                <p>Connect with our admission counselors for personalized guidance</p>
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

export default ChitkaraUniversity;
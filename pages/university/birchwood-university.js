import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const BirchwoodUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const birchwoodData = window.universityDatabase.find(
          uni => uni.id === 'birchwood-university'
        );
        setUniversityData(birchwoodData);
      } else {
        const response = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const birchwoodData = window.universityDatabase.find(
          uni => uni.id === 'birchwood-university'
        );
        setUniversityData(birchwoodData);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'MBA', fee: 403211, duration: '2 Years', specializations: '10 Specializations' },
    { name: 'DBA (Doctor of Business Administration)', fee: 600000, duration: '3 Years', specializations: '1 Option' },
    { name: 'Global MBA', fee: 450000, duration: '18 Months', specializations: '8 Specializations' },
    { name: 'Executive MBA', fee: 500000, duration: '2 Years', specializations: '6 Specializations' },
    { name: 'PhD in Management', fee: 550000, duration: '3-4 Years', specializations: 'Multiple Areas' },
    { name: 'Master of Finance', fee: 380000, duration: '18 Months', specializations: '3 Specializations' },
    { name: 'Master of Marketing', fee: 380000, duration: '18 Months', specializations: '2 Specializations' },
    { name: 'Master of Data Analytics', fee: 420000, duration: '18 Months', specializations: '1 Option' },
    { name: 'Certificate Programs', fee: 150000, duration: '6-12 Months', specializations: '15+ Options' }
  ];

  const keyHighlights = [
    'Located in Orlando, Florida, USA with global recognition',
    'CIE (Council for International Education) accredited institution',
    '4.7/5 rating from international students and professionals',
    '100% online programs with flexible learning schedules',
    'US-based education with global curriculum standards',
    'Industry-relevant programs designed for working professionals',
    'International faculty with real-world business experience',
    'Pathway programs for career advancement and skill development',
    'Networking opportunities with global business leaders',
    'Career support services and alumni network worldwide'
  ];

  const approvals = ['CIE Accredited', 'US Recognition', 'Global Standards'];
  const nirfRank = 'International University';
  const accreditation = 'CIE Accredited';

  const placementPartners = [
    'Amazon', 'Microsoft', 'Google', 'Apple', 'Meta', 
    'Tesla', 'Netflix', 'Uber', 'Airbnb', 'LinkedIn', 'Twitter', 'Oracle'
  ];

  const faqs = [
    {
      question: 'Is Birchwood University globally recognized?',
      answer: 'Yes, Birchwood University is CIE (Council for International Education) accredited and globally recognized. The university is based in Orlando, Florida, USA, and offers internationally accepted degree programs.'
    },
    {
      question: 'What programs does Birchwood University offer?',
      answer: 'Birchwood University offers 9 comprehensive programs including MBA, DBA, Global MBA, Executive MBA, PhD in Management, Master of Finance, Master of Marketing, Master of Data Analytics, and various certificate programs.'
    },
    {
      question: 'How are classes conducted at Birchwood University?',
      answer: 'All programs at Birchwood University are 100% online with flexible learning schedules. Students can access coursework, attend virtual classes, and interact with international faculty from anywhere in the world.'
    },
    {
      question: 'What is the fee structure?',
      answer: 'Fees range from ₹1,50,000 for certificate programs to ₹6,00,000 for DBA programs. MBA programs start from ₹4,03,211. Payment plans and international financing options are available.'
    },
    {
      question: 'Is the degree valid for career advancement?',
      answer: 'Yes, Birchwood University degrees are internationally recognized and accepted by employers worldwide. The programs are designed for working professionals seeking career advancement and global opportunities.'
    }
  ];

  return (
    <>
      <Head>
        <title>Birchwood University - Global Online MBA & Business Programs | EduConnect</title>
        <meta name="description" content="Explore Birchwood University's CIE-accredited online programs from Orlando, Florida. MBA, DBA, Global MBA with 4.7/5 rating and international recognition." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Birchwood University Online.png" 
                alt="Birchwood University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Orlando, Florida, USA</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.7/5</span>
                    <span className={styles.reviews}>(1,254 Reviews)</span>
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
                  <span className={styles.infoLabel}>Recognition:</span>
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
              <h2>About Birchwood University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Birchwood University, located in Orlando, Florida, USA, is a globally recognized institution offering 
                  world-class online business education. With CIE (Council for International Education) accreditation, 
                  the university maintains international standards of academic excellence and provides students with 
                  globally accepted degree programs that open doors to international career opportunities.
                </p>
                <p>
                  The university has earned an impressive 4.7/5 rating from international students and professionals, 
                  reflecting its commitment to quality education, innovative curriculum, and student success. Birchwood 
                  University specializes in business and management programs designed specifically for working professionals 
                  who seek to advance their careers while maintaining their current commitments.
                </p>
                <p>
                  With 100% online delivery, Birchwood University offers unprecedented flexibility, allowing students from 
                  around the world to access US-based education without geographical constraints. The programs are taught 
                  by experienced international faculty who bring real-world business experience and global perspectives 
                  to the virtual classroom.
                </p>
                <p>
                  The university's curriculum is designed to meet current industry demands, incorporating the latest business 
                  practices, technological innovations, and global market trends. Students benefit from networking opportunities 
                  with peers and professionals worldwide, creating valuable connections that last beyond graduation.
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
                  <div className={styles.statNumber}>9</div>
                  <div className={styles.statLabel}>Programs Offered</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Online Learning</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>4.7/5</div>
                  <div className={styles.statLabel}>Student Rating</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Global</div>
                  <div className={styles.statLabel}>Recognition</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of CIE-accredited online business programs designed for global professionals
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
                <strong>Note:</strong> All programs are 100% online with flexible scheduling. 
                International financing options available. Pathway programs available for career advancement.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Birchwood University
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Register Online</h3>
                    <p>Complete the international application form on the university website with your academic and professional details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Documents</h3>
                    <p>Upload transcripts, ID documents, English proficiency scores, and professional experience certificates for verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Complete application fee payment and participate in virtual interview if required for program admission.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Verification & Confirmation</h3>
                    <p>University reviews your application and conducts background verification. Upon approval, receive admission confirmation.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Start Learning</h3>
                    <p>Access your online learning platform, course materials, and begin your global education journey.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/PGDM Programs:</strong> Bachelor's degree from recognized university with minimum 50% marks. TOEFL/IELTS scores required for English proficiency</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BBA/B.Com Programs:</strong> 10+2 from recognized board with minimum 50% marks. English language proficiency demonstrated through test scores</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>International Students:</strong> Valid passport, English proficiency scores, transcripts apostilled, work experience certificates (for MBA). CIE accredited programs with global recognition</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>CIE accredited programs with global recognition and acceptance</li>
                  <li>100% online programs with flexible scheduling for working professionals</li>
                  <li>International faculty with real-world business experience</li>
                  <li>English proficiency required - TOEFL/IELTS scores or equivalent</li>
                  <li>Documents required: Transcripts, ID proof, work experience certificates, English proficiency scores</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Global Opportunities</h2>
              <p className={styles.sectionDesc}>
                Access extensive global career opportunities through our international network and industry partnerships
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>Global</h3>
                  <p>Career Network Access</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>4.7/5</h3>
                  <p>Student Satisfaction Rating</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Online Learning Flexibility</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>International</h3>
                  <p>Recognition & Acceptance</p>
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
                Find answers to common queries about Birchwood University online programs
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

export default BirchwoodUniversity;
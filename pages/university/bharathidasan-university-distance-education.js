import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const BharathidasanUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const bharathidasanData = window.universityDatabase.find(
          uni => uni.id === 'bharathidasan-university-distance-education'
        );
        setUniversityData(bharathidasanData);
      } else {
        const response = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const bharathidasanData = window.universityDatabase.find(
          uni => uni.id === 'bharathidasan-university-distance-education'
        );
        setUniversityData(bharathidasanData);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'MBA', fee: 36000, duration: '2 Years', specializations: '8 Specializations' },
    { name: 'MCA', fee: 30000, duration: '2 Years', specializations: '3 Specializations' },
    { name: 'MSc Computer Science', fee: 24000, duration: '2 Years', specializations: '4 Specializations' },
    { name: 'MA English', fee: 18000, duration: '2 Years', specializations: '2 Specializations' },
    { name: 'MA Tamil', fee: 18000, duration: '2 Years', specializations: '2 Specializations' },
    { name: 'MA Economics', fee: 18000, duration: '2 Years', specializations: '3 Specializations' },
    { name: 'MSc Mathematics', fee: 24000, duration: '2 Years', specializations: '2 Specializations' },
    { name: 'MSc Physics', fee: 24000, duration: '2 Years', specializations: '3 Specializations' },
    { name: 'MSc Chemistry', fee: 24000, duration: '2 Years', specializations: '3 Specializations' },
    { name: 'BBA', fee: 27000, duration: '3 Years', specializations: '6 Specializations' },
    { name: 'BCA', fee: 27000, duration: '3 Years', specializations: '4 Specializations' },
    { name: 'BCom', fee: 21000, duration: '3 Years', specializations: '5 Specializations' },
    { name: 'BA English', fee: 15000, duration: '3 Years', specializations: '3 Specializations' },
    { name: 'BA Tamil', fee: 15000, duration: '3 Years', specializations: '2 Specializations' },
    { name: 'BSc Computer Science', fee: 24000, duration: '3 Years', specializations: '4 Specializations' }
  ];

  const keyHighlights = [
    'Established in 1982 as a state university in Tamil Nadu',
    'Centre for Distance Education (CDE) founded in 1992',
    'NIRF Rank 36 among all universities in India',
    'NAAC A+ accreditation ensuring high quality education',
    'UGC-DEB approved distance education programs',
    'AICTE approved technical programs',
    '60+ programs including 15 UG & 26 PG courses',
    '4 faculties across 39 departments and 29 research centres',
    'Weekend classes on Saturdays and Sundays',
    'Degrees equivalent to regular mode with same academic value'
  ];

  const approvals = ['UGC', 'NAAC A+', 'AICTE'];
  const nirfRank = 'NIRF Rank 36';
  const accreditation = 'NAAC A+ Grade';

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL Technologies', 
    'Tech Mahindra', 'Capgemini', 'Accenture', 'IBM', 'Microsoft'
  ];

  const faqs = [
    {
      question: 'What programs does Bharathidasan University offer in distance education?',
      answer: 'Bharathidasan University offers 60+ programs including 15 undergraduate and 26 postgraduate courses. Popular programs include MBA, MCA, BBA, BCA, MSc Computer Science, and various arts and science degrees.'
    },
    {
      question: 'Is Bharathidasan University distance education degree valid?',
      answer: 'Yes, all distance education degrees from Bharathidasan University are UGC-DEB approved and NAAC A+ accredited. The degrees hold the same value and recognition as regular on-campus programs.'
    },
    {
      question: 'How are classes conducted?',
      answer: 'Bharathidasan University conducts weekend classes on Saturdays and Sundays. The Centre for Distance Education provides study materials, online resources, and academic support through various learning centers.'
    },
    {
      question: 'What is the fee structure?',
      answer: 'Fees vary by program - undergraduate courses range from ₹15,000-₹27,000 for 3 years, while postgraduate courses range from ₹18,000-₹36,000 for 2 years. Payment can be made in installments.'
    },
    {
      question: 'What is the admission process?',
      answer: 'Admission is through online application on the university website. Submit required documents, pay application fee, and receive confirmation. Most programs have open admission without entrance exams.'
    }
  ];

  return (
    <>
      <Head>
        <title>Bharathidasan University Distance Education - Online Programs | EduConnect</title>
        <meta name="description" content="Explore Bharathidasan University's UGC-approved distance education programs. NIRF Rank 36, NAAC A+ accredited with 60+ courses including MBA, MCA, BBA." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Bharathidasan University.png" 
                alt="Bharathidasan University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Tiruchirappalli, Tamil Nadu</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(892 Reviews)</span>
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
              <h2>About Bharathidasan University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  Bharathidasan University, established in 1982, is a state university located in Tiruchirappalli, Tamil Nadu. 
                  Named after the great Tamil poet Bharathidasan, the university has been a pioneer in higher education and 
                  research. The Centre for Distance Education (CDE) was founded in 1992 to extend quality education to students 
                  who cannot attend regular classes due to various constraints.
                </p>
                <p>
                  With an impressive NIRF Rank 36 among all universities in India and NAAC A+ accreditation, Bharathidasan University 
                  maintains the highest standards of academic excellence. The university offers UGC-DEB approved distance education 
                  programs that are equivalent to regular degree programs, ensuring students receive globally recognized qualifications.
                </p>
                <p>
                  The university comprises 4 faculties spanning 39 departments and 29 research centres, offering comprehensive 
                  educational opportunities. With over 60 programs including 15 undergraduate and 26 postgraduate courses, 
                  students can choose from diverse fields including management, computer applications, sciences, and humanities.
                </p>
                <p>
                  A unique feature of Bharathidasan University's distance education is the weekend classes conducted on Saturdays 
                  and Sundays, providing flexibility for working professionals while ensuring quality face-to-face interaction 
                  with faculty members.
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
                  <div className={styles.statNumber}>60+</div>
                  <div className={styles.statLabel}>Programs Offered</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>39</div>
                  <div className={styles.statLabel}>Departments</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>29</div>
                  <div className={styles.statLabel}>Research Centres</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>UGC Approved</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of UGC-approved distance education programs with weekend classes
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
                <strong>Note:</strong> Weekend classes conducted on Saturdays and Sundays. 
                Additional programs available in Arts, Science, and Commerce streams. Payment can be made in installments.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Bharathidasan University Distance Education
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Register Online</h3>
                    <p>Visit the official university website and complete the online application form with your academic and personal details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Documents</h3>
                    <p>Upload required documents including mark sheets, ID proof, photographs, and relevant certificates digitally.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Complete the application fee and course fees through online payment gateway or demand draft as specified.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Verification & Confirmation</h3>
                    <p>University reviews your application and documents. Upon approval, you'll receive admission confirmation via email.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Start Learning</h3>
                    <p>Join weekend classes at the designated study center and access comprehensive learning resources.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Distance Programs (BA/B.Com/BBA/BCA):</strong> 12th pass from recognized board with minimum pass marks. 60+ programs including 15 UG courses available</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Distance Programs (MBA/MCA/M.Com/MA):</strong> Bachelor's degree in relevant stream with minimum 50% from UGC recognized university. 26 PG courses offered</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diploma/Certificate Programs:</strong> Specific requirements per program. Degrees equivalent to regular mode with same academic value. Weekend classes available</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Weekend classes on Saturdays and Sundays for working professionals</li>
                  <li>NIRF Rank 36 among all universities in India</li>
                  <li>60+ programs including 15 UG & 26 PG courses available</li>
                  <li>Degrees equivalent to regular mode with same academic value</li>
                  <li>Documents required: Educational certificates, mark sheets, ID proof, photographs</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access extensive career opportunities through our robust alumni network and industry connections
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>85%</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>250+</h3>
                  <p>Recruiting Companies</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹6.5L</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>36</h3>
                  <p>NIRF University Rank</p>
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
                Find answers to common queries about Bharathidasan University Distance Education programs
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

export default BharathidasanUniversity;
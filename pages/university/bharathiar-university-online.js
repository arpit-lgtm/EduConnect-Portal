import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const BharathiarUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const bharathiarData = window.universityDatabase.find(
          uni => uni.id === 'bharathiar-university-distance-education'
        );
        setUniversityData(bharathiarData);
      } else {
        const response = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const bharathiarData = window.universityDatabase.find(
          uni => uni.id === 'bharathiar-university-distance-education'
        );
        setUniversityData(bharathiarData);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'Part-Time PhD', fee: 8000, duration: '4-7 Years', specializations: 'Multiple Research Areas' }
  ];

  const keyHighlights = [
    'Established in 1981 by Government of Tamil Nadu under Bharathiar University Act',
    'Named after legendary Tamil poet Subramania Bharathiar',
    'School for Distance Education with 47 Learner Support Centres across regions',
    'Public university covering Coimbatore, Erode, Tirupur, and The Nilgiris',
    'UGC approved distance education programs with complete degree equivalency',
    'NAAC A++ accreditation ensuring highest quality education standards',
    '133 affiliated colleges providing extensive educational network',
    'Multiple undergraduate and postgraduate programs in distance mode'
  ];

  const approvals = ['UGC', 'NAAC A++'];
  const nirfRank = 'Top 10 Universities in India';
  const accreditation = 'NAAC A++ Grade';

  const placementPartners = [
    'Accenture', 'American Express', 'IndiaMART', 'ISRO', 'Moglix', 
    'Tata', 'Ericsson', 'Dell', 'Nike'
  ];

  const faqs = [
    {
      question: 'What are the programs offered by Bharathiar University Online?',
      answer: 'Bharathiar University offers Part-Time PhD programs for ₹8,000 over 4-7 years. The university also provides various undergraduate and postgraduate programs in distance mode including BBA, BA English Literature, B.Com, M.Com, MA Economics, MA Tamil Literature, and MA Career Guidance.'
    },
    {
      question: 'Is Bharathiar University\'s online degree valid?',
      answer: 'Yes, all degrees from Bharathiar University are UGC approved and NAAC A++ accredited. The university is a government-established public university with complete recognition, making degrees equivalent to regular on-campus programs.'
    },
    {
      question: 'What is the admission process?',
      answer: 'Admission to Bharathiar University online programs is conducted through online application. Candidates need to fill the application form, submit required documents, and pay the application fee. Eligibility criteria vary by program.'
    },
    {
      question: 'How are classes conducted?',
      answer: 'Classes are conducted through distance learning mode with study materials provided by the university. The university has 47 Learner Support Centres across different regions to assist students with their academic needs.'
    },
    {
      question: 'What support services are available?',
      answer: 'Bharathiar University provides comprehensive support through 47 Learner Support Centres, academic counseling, study materials, library access, and examination support for distance education students.'
    }
  ];

  return (
    <>
      <Head>
        <title>Bharathiar University Online - Distance Education Programs | EduConnect</title>
        <meta name="description" content="Explore Bharathiar University's UGC-approved online degree programs. NAAC A++ accredited with Part-Time PhD and distance education courses." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Bharathiar University.png" 
                alt="Bharathiar University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Coimbatore, Tamil Nadu</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.6/5</span>
                    <span className={styles.reviews}>(412 Reviews)</span>
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
                {tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Bharathiar University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Bharathiar University, established in 1981 by the Government of Tamil Nadu under the Bharathiar University Act, 
                  is named after the legendary Tamil poet Subramania Bharathiar. As a public university, it serves the districts 
                  of Coimbatore, Erode, Tirupur, and The Nilgiris, providing quality higher education to students across Tamil Nadu.
                </p>
                <p>
                  The university's School for Distance Education operates with 47 Learner Support Centres strategically located 
                  across different regions to ensure accessibility and support for distance learning students. With UGC approval 
                  and NAAC A++ accreditation, Bharathiar University maintains the highest standards of educational excellence.
                </p>
                <p>
                  With 133 affiliated colleges under its umbrella, Bharathiar University has built an extensive educational network 
                  that caters to diverse academic needs. The university offers comprehensive programs ranging from undergraduate 
                  to doctoral levels through its distance education mode, ensuring flexibility for working professionals and 
                  students who cannot attend regular classes.
                </p>
                <p>
                  The university leverages modern educational methodologies while preserving traditional academic values, 
                  providing students with quality study materials, academic counseling, and examination support through 
                  its well-established distance learning infrastructure.
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
                  <div className={styles.statNumber}>47</div>
                  <div className={styles.statLabel}>Learner Support Centres</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>133</div>
                  <div className={styles.statLabel}>Affiliated Colleges</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>40+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
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
                Explore our UGC-approved distance education programs designed for working professionals and students
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
                <strong>Note:</strong> Additional undergraduate and postgraduate programs available including BBA, BA English Literature, 
                B.Com, M.Com, MA Economics, MA Tamil Literature, and MA Career Guidance. Contact university for complete program details.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Bharathiar University Distance Education
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Register Online</h3>
                    <p>Visit the official Bharathiar University website and fill out the online application form with your personal and academic details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Documents</h3>
                    <p>Upload required documents including mark sheets, ID proof, photographs, and relevant certificates for verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Complete the application fee payment through online payment methods or demand draft as specified by the university.</p>
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
                    <p>Access study materials and support through the nearest Learner Support Centre and begin your academic journey.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Distance education programs equivalent to regular degree programs</li>
                  <li>47 Learner Support Centres across different regions for student assistance</li>
                  <li>Flexible study schedules suitable for working professionals</li>
                  <li>UGC approved programs with NAAC A++ accreditation</li>
                  <li>Documents required: Educational certificates, ID proof, photographs</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Bharathiar University graduates find success across various industries with strong career support
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>47</h3>
                  <p>Learner Support Centres</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>133</h3>
                  <p>Affiliated Colleges</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>40+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>UGC Approved Programs</p>
                </div>
              </div>

              <h3>Our Graduates Work At</h3>
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
                Find answers to common queries about Bharathiar University Distance Education programs
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

export default BharathiarUniversity;
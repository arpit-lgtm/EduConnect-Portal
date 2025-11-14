import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITJodhpur = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'PhD Program', fee: 30000, duration: '3 Years', specializations: 14 },
    { name: 'M.Tech Program', fee: 310000, duration: '1 Year (Executive)', specializations: 6 },
    { name: 'Online MBA (Technology)', fee: 840000, duration: '2 Years', specializations: 7 },
    { name: 'Online PG Diploma Program', fee: 310000, duration: '12 Months', specializations: 5 },
    { name: 'Online Executive MBA', fee: 840000, duration: '2 Years', specializations: 4 }
  ];

  const keyHighlights = [
    'Ranked 28th in NIRF 2024 Engineering Category',
    'Established in 2008, commenced operations 2013',
    '852-acre self-sustained campus in Jodhpur',
    '14+ specialized schools and departments',
    'Strong focus on AI, Data Science, and emerging technologies',
    'Executive programs designed for working professionals',
    'Online MBA and PG Diploma offerings in multiple domains',
    'Dual Master collaboration with University of Albany, SUNY',
    'Advanced research labs with 100% placement in select departments',
    'Flexible online learning with weekend sessions'
  ];

  const placementPartners = [
    'Google', 'Accenture', 'Amazon', 'Bosch', 'Capgemini',
    'Cognizant', 'Deloitte', 'HCL', 'IBM', 'Infosys',
    'ITC', 'KPMG', 'McKinsey and Company', 'Microsoft', 'TCS',
    'Wipro', 'Intel', 'Oracle', 'SAP', 'Adobe', 'Flipkart'
  ];

  const faqs = [
    {
      question: 'Are the online courses offered by IIT Jodhpur valid?',
      answer: 'Yes, all online programs from IIT Jodhpur hold complete institutional validity and NIRF recognition. These courses maintain equivalent academic rigor to on-campus offerings and are widely accepted by employers globally.'
    },
    {
      question: 'What courses are available at IIT Jodhpur?',
      answer: 'IIT Jodhpur offers B.Tech, M.Tech, PhD, Online MBA in Technology, PG Diploma programs, and Executive MBA for working professionals. Popular specializations include AI, Data Science, Computer Science, and multiple technology management domains.'
    },
    {
      question: 'What disciplines are offered at IIT Jodhpur?',
      answer: 'The institute features 14 specialized schools including AI & Data Science, Chemical Engineering, Civil Engineering, Electrical Engineering, Mechanical Engineering, Computer Science, Materials Engineering, Biosciences, Chemistry, Mathematics, Physics, Management & Entrepreneurship, and Liberal Arts.'
    },
    {
      question: 'Does IIT Jodhpur offer online programs?',
      answer: 'Yes, IIT Jodhpur provides comprehensive online programs including Executive M.Tech in AI, Online MBA in Technology, PG Diplomas in Data Engineering and AI/ML, and Executive MBA designed specifically for working professionals with flexible schedules and weekend sessions.'
    },
    {
      question: 'Do I need campus visits for exams?',
      answer: 'No, online programs utilize remote proctored examination systems. All lectures, study materials, and assessments are accessible online, eliminating mandatory campus visits while ensuring academic integrity through secure monitoring technology.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Jodhpur Online Programs | Executive M.Tech, MBA, PG Diploma</title>
        <meta name="description" content="IIT Jodhpur - Ranked 28th NIRF 2024 Engineering. Online MBA, Executive M.Tech AI, PG Diploma programs for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Jodhpur.png" 
                alt="IIT Jodhpur Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Jodhpur, Rajasthan</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.4/5</span>
                    <span className={styles.reviews}>(304 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'AICTE', 'NAAC A'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 28 (Engineering 2024)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>NAAC A</span>
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
              <h2>About IIT Jodhpur</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Jodhpur, established in 2008 under the patronage of the Ministry of Human Resource Development, Government of India, represents the nation's strategic initiative to expand access to premier technical education across diverse geographical regions. Initially commencing operations at IIT Kanpur's campus with 109 undergraduate students in mechanical, computer science, and electrical engineering disciplines, IIT Jodhpur transitioned to its permanent 852-acre self-sustained campus in 2013, showcasing remarkable institutional development within a brief timespan. Designated as an Institute of National Importance, IIT Jodhpur has rapidly emerged as a distinguished center for technological innovation, research excellence, and comprehensive higher education, consistently earning recognition through NIRF rankings and establishing its reputation among India's growing network of premier technical institutions.
                </p>
                <p>
                  IIT Jodhpur encompasses fourteen specialized academic schools and departments delivering diverse educational programs spanning engineering, sciences, management, and interdisciplinary domains. These specialized units include the School of Artificial Intelligence and Data Science, School of Liberal Arts, Chemical Engineering, Civil and Infrastructure Engineering, Electrical Engineering, Metallurgical and Materials Engineering, Mechanical Engineering, School of Management and Entrepreneurship, Biosciences and Bioengineering, Chemistry, Computer Science and Engineering, Humanities and Social Sciences, Mathematics, and Physics departments. This comprehensive academic structure enables students to pursue specialized learning pathways while benefiting from interdisciplinary research opportunities, collaborative projects, and exposure to cutting-edge developments across multiple domains, fostering well-rounded technical professionals equipped to address complex contemporary challenges requiring multifaceted expertise and innovative problem-solving approaches.
                </p>
                <p>
                  Research and innovation constitute fundamental pillars of IIT Jodhpur's institutional mission, evidenced by sophisticated laboratory facilities, advanced research centers, and active pursuit of sponsored projects addressing critical technological and societal challenges. The institute demonstrates particular strength in emerging technology domains including artificial intelligence, machine learning, data science, robotics, sustainable engineering, materials science, and interdisciplinary research areas attracting substantial funding from governmental agencies, industry collaborations, and international partnerships. Faculty members comprise accomplished scholars and researchers contributing to knowledge advancement through publications in prestigious international journals, patent applications, technology transfers, and collaborative research initiatives with leading global institutions and industry partners, creating vibrant research ecosystems where students engage directly in cutting-edge investigations and innovation activities.
                </p>
                <p>
                  IIT Jodhpur demonstrates strong commitment to democratizing quality technical education through innovative online program offerings specifically designed for working professionals seeking advanced qualifications and skill development without career disruptions. These flexible programs, including Executive M.Tech in Artificial Intelligence, Online MBA in Technology, PG Diploma in Data Engineering, and Executive MBA in multiple specializations, leverage sophisticated e-learning platforms, interactive digital resources, weekend scheduling, and evening sessions enabling employed individuals to pursue graduate education while maintaining professional commitments. The institute's dual master's collaboration with the University of Albany, SUNY, exemplifies international academic partnerships expanding global exposure opportunities for students. With exceptional placement records achieving 100% success in select departments and attracting leading national and international recruiters, IIT Jodhpur successfully fulfills its mission of developing technically proficient, innovation-oriented professionals contributing meaningfully to India's technological advancement and global competitiveness.
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
            </div>
          )}

          {/* Programs Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
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
                        <td>{course.specializations} Option{course.specializations > 1 ? 's' : ''}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                IIT Jodhpur employs comprehensive selection procedures ensuring admission of talented and motivated candidates through nationally recognized entrance assessments and holistic evaluation criteria.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>
                      Candidates must successfully complete relevant entrance examinations including JEE Main and JEE Advanced for undergraduate B.Tech programs, GATE (Graduate Aptitude Test in Engineering) for M.Tech admissions, and specialized departmental tests for doctoral programs. Online professional programs including Executive M.Tech, MBA, and PG Diplomas may have alternative admission criteria focusing on academic qualifications, professional experience, and entrance interviews rather than traditional competitive examinations.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>
                      Eligible candidates must complete detailed online application forms through IIT Jodhpur's official admission portal, providing comprehensive personal details, educational qualifications, entrance test scores, professional experience records, and uploading scanned copies of required documents including academic transcripts, certificates, identity proofs, photographs, caste certificates where applicable, and any additional materials specified for particular programs.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Verification & Selection</h3>
                    <p>
                      The admissions committee conducts rigorous verification of submitted credentials, academic records, entrance examination performance, and eligibility criteria compliance. Shortlisted candidates may be invited for personal interviews, group discussions, or counseling sessions depending on program requirements, where selection panels assess domain knowledge, communication abilities, research aptitude, professional experience, and alignment with program objectives and institutional values.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Enrollment</h3>
                    <p>
                      Selected candidates receive formal admission offers specifying program details, comprehensive fee structure, payment schedules, reporting dates, and enrollment procedures. Candidates must accept offers within specified timelines, pay required admission deposits through the online portal, submit original documents for verification, and complete enrollment formalities including biometric registration and orientation program participation to commence their transformative educational journey at IIT Jodhpur.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> Bachelor's degree in relevant engineering/science field with valid GATE score. Minimum 60% aggregate (55% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree in relevant discipline with GATE/NET/CSIR/equivalent qualification. Strong research interest required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive Programs:</strong> Bachelor's degree with minimum 2 years professional work experience in managerial/technical roles</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionDesc}>
                IIT Jodhpur's Career Development Cell consistently achieves outstanding placement outcomes, attracting leading companies from technology, consulting, manufacturing, and diverse industry sectors.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement in Select Depts</p>
                </div>
              </div>

              <h3>Top Recruiters</h3>
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

export default IITJodhpur;

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMNagpur = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'PGCP in Advanced Healthcare Management', fee: 300000, duration: '12 Months', specializations: 1 },
    { name: 'Leadership Program', fee: 370000, duration: '12 Months', specializations: 1 },
    { name: 'IIM Online Courses', fee: 370000, duration: '12 Months', specializations: 2 },
    { name: 'Executive MBA', fee: 1010000, duration: '2 Years', specializations: 1 },
    { name: 'Online MBA', fee: 950000, duration: '2 Years', specializations: 1 },
    { name: 'Operations & Supply Chain', fee: 133000, duration: '6 Months', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 31st in NIRF 2024 Management Category with score of 56.94',
    'Prestigious AACSB membership ensuring global business education standards',
    'Established in 2015 under mentorship of renowned IIM Ahmedabad',
    'Located at technologically advanced MIHAN campus in Nagpur, Maharashtra',
    'Globally recognized for creating value-driven leaders and global managers',
    'Industry-integrated curriculum with experiential learning methodologies',
    'Regular industry engagements, guest lectures, workshops, and conferences',
    'Diverse cultural environment celebrating all festivals with great enthusiasm'
  ];

  const approvals = ['NIRF', 'AACSB'];
  const nirfRank = 'Rank 31';
  const accreditation = 'NIRF, AACSB';

  const placementPartners = [
    'Google', 'Accenture', 'American Express', 'Deloitte', 'HCL', 'IBM',
    'ITC', 'Tata Power', 'Bajaj Capital', 'KPMG', 'PwC', 'TCS'
  ];

  const faqs = [
    {
      question: 'What comprehensive programs does IIM Nagpur offer for professionals?',
      answer: 'IIM Nagpur offers distinguished programs including Executive MBA, Online MBA, PGCP in Advanced Healthcare Management, Leadership Program, IIM Online Courses, and Operations & Supply Chain Management. Each program is meticulously designed to provide global exposure and enhanced vision to senior executives, enabling them to monitor and lead organizations efficiently by upgrading their skills and acquiring cutting-edge knowledge through industry-integrated curriculum and experiential learning approaches.'
    },
    {
      question: 'What global recognition does IIM Nagpur command?',
      answer: 'IIM Nagpur holds prestigious AACSB (Association to Advance Collegiate Schools of Business) membership, ensuring connection with global networks and enhancing quality of management education worldwide. Ranked 31st nationally in the NIRF 2024 Management category, the institute was established in 2015 under the mentorship of IIM Ahmedabad, one of India\'s most prestigious business schools, reflecting its commitment to academic excellence and innovative pedagogy.'
    },
    {
      question: 'How does IIM Nagpur support working professionals?',
      answer: 'IIM Nagpur\'s executive programs are specifically architected for working professionals, featuring flexible schedules, weekend sessions, and online learning components. The Career Development Services (CDS) remains active throughout the year, assisting students with industry-oriented skill development, personality enhancement, and career guidance. The institute provides comprehensive support to help professionals balance demanding work responsibilities with rigorous academic pursuits while maintaining continuous career momentum.'
    },
    {
      question: 'What placement support does IIM Nagpur provide?',
      answer: 'IIM Nagpur maintains robust Career Development Services (CDS) that assist students in developing industry-ready skills and enhancing abilities to compete with global competence. While placement support is primarily available for full-time MBA students, the prestigious IIM Nagpur brand on your resume attracts major firms and significantly enhances career prospects. Alumni experience substantial career progression including promotions, salary increments, and expanded leadership responsibilities across diverse industry sectors.'
    },
    {
      question: 'What makes IIM Nagpur\'s learning environment unique?',
      answer: 'IIM Nagpur offers a unique learning environment characterized by cultural diversity, regular industry events, and innovative pedagogy. The institute regularly organizes guest lectures, workshops, seminars, and conferences to expose students to real-world business challenges and opportunities. The technologically advanced MIHAN campus provides cutting-edge facilities including modern classrooms, well-stocked library, computer laboratories, auditorium, sports facilities, and collaborative spaces that foster holistic development.'
    },
    {
      question: 'Are IIM Nagpur\'s online programs professionally valuable?',
      answer: 'Absolutely. IIM Nagpur\'s online programs deliver identical academic rigor and quality as on-campus offerings, featuring globally competent education systems and curriculum designed by distinguished faculty. The programs provide global exposure, industry-based learning, and well-maintained revised curriculum that creates value-driven leaders and entrepreneurs. Certifications carry the official IIM Nagpur seal and AACSB recognition, significantly enhancing professional credibility and career advancement prospects across diverse industries globally.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Nagpur - Indian Institute of Management Nagpur Online | EduConnect</title>
        <meta name="description" content="Explore IIM Nagpur's online management programs. Established in 2015, ranked 31st in NIRF 2024. Executive MBA, online MBA, and specialized programs." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Nagpur.png" 
                alt="IIM Nagpur Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => { e.target.src = '/images/universities/default-university.png'; }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Nagpur, Maharashtra</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(392 Reviews)</span>
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
              <h2>About IIM Nagpur</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Nagpur represents a distinguished institution established in 2015 as part of 
                  India's new generation of IIMs, initially operating under the prestigious mentorship of IIM Ahmedabad. The institute 
                  was strategically relocated to its technologically advanced campus at MIHAN (Multi-modal International Hub Airport at 
                  Nagpur), Maharashtra in 2015, providing students with cutting-edge infrastructure and facilities. IIM Nagpur has 
                  rapidly emerged as a globally recognized management institution renowned for its commitment to creating value-driven 
                  leaders, global managers, entrepreneurs, and industry-based leaders.
                </p>
                <p>
                  Distinguished by its NIRF 2024 ranking of 31st among management institutions with a score of 56.94, IIM Nagpur 
                  exemplifies academic excellence despite its relatively recent establishment. The institute's commitment to superior 
                  education is validated through prestigious AACSB (Association to Advance Collegiate Schools of Business) membership, 
                  connecting it with global networks and ensuring the delivery of world-class management education that meets rigorous 
                  international quality benchmarks across all program offerings.
                </p>
                <p>
                  IIM Nagpur's comprehensive curriculum emphasizes a sophisticated combination of academic principles, practical 
                  applications, and experiential learning approaches. The institute employs innovative pedagogical techniques including 
                  case study methodology, role-plays, simulations, group discussions, and real-world projects to enhance students' 
                  learning experiences. Regular guest lectures and industry engagements provide students with invaluable insights into 
                  functional areas of business management, current industry trends, and emerging business challenges requiring innovative 
                  solutions.
                </p>
                <p>
                  The institution guides and upskills every individual with support from distinguished faculty, utilizing a well-maintained 
                  and regularly revised curriculum that reflects contemporary business requirements. IIM Nagpur's programs span MBA, PhD, 
                  PhD Executive, and MBA Executive, with executive programs specifically designed for working professionals seeking global 
                  exposure and enhanced vision to monitor and lead their organizations efficiently. The institute's emphasis on experiential 
                  learning and industry contacts, combined with a diverse cultural environment celebrating all festivals with great zeal, 
                  creates a holistic educational ecosystem that develops well-rounded management professionals.
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
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Average Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3X</div>
                  <div className={styles.statLabel}>Interview Opportunities</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>6</div>
                  <div className={styles.statLabel}>Program Options</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of online management programs designed for ambitious professionals
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
                        <td>{course.specializations} Options</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> EMI options available through trusted financial partners. 
                Education loans with competitive interest rates and flexible repayment terms.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at IIM Nagpur
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Portal Registration</h3>
                    <p>Access the official IIM Nagpur website and register on the admission portal. Create your credentials to access the application system and explore available certification programs with detailed curriculum, fees, and other relevant information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>Qualify in relevant entrance examinations including GRE, GMAT, GATE, or CAT with scores meeting minimum eligibility criteria. IIM Nagpur also conducts specific entrance examinations for executive programs to assess candidate aptitude and readiness.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Complete the detailed enrollment form with personal information, contact details, educational background, and professional experience. Attach all required documents ensuring accuracy and validity. Review thoroughly before proceeding to fee payment.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Shortlisting & Interview</h3>
                    <p>Shortlisted candidates based on entrance scores and application evaluation participate in personal interviews via advanced video conferencing. Demonstrate communication excellence, leadership potential, and strategic thinking during this critical assessment stage.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Final Selection</h3>
                    <p>Final selection determined through comprehensive evaluation of entrance scores, academic performance, interview assessment, and overall candidate potential. Selected candidates receive program access credentials via email and can commence their transformative learning journey.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university with minimum qualifying percentage</li>
                  <li>Competitive GRE/GMAT/GATE/CAT scores meeting program-specific requirements</li>
                  <li>Substantial professional experience for executive program tracks</li>
                  <li>Valid ABC ID and DEB ID as per latest UGC guidelines</li>
                  <li>Demonstrated proficiency in English for academic communication</li>
                  <li>All required documents must be accurate, valid, and properly attested</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access extensive career opportunities through our robust Career Development Services
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
                  <p>Career Support</p>
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
                Find answers to common queries about IIM Nagpur programs
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

export default IIMNagpur;

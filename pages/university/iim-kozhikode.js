import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMKozhikode = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA Online', fee: 1470000, duration: '1 - 2 Years', specializations: 1 },
    { name: 'HR Management', fee: 155000, duration: '6 Months', specializations: 1 },
    { name: 'Online MBA', fee: 2050000, duration: '2 Years', specializations: 1 },
    { name: 'IIM Online Courses', fee: 155000, duration: '6 Months', specializations: 1 },
    { name: 'Doctor of Philosophy', fee: 950000, duration: '2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 3rd in NIRF 2024 Management Category with outstanding score of 77.90',
    'Quadruple international accreditation from AMBA, EQUIS, AACSB, and WES',
    'Asia\'s first institution to offer interactive satellite-delivered learning',
    '42 strategic collaborations with premier international management institutes',
    'Exceptional placement success with 8.1% average CTC increase',
    '300+ distinguished hiring partners across diverse industry sectors',
    '2nd position in ARIIA 2021 for innovation and achievement excellence',
    'Industry-integrated curriculum with cutting-edge case-based pedagogy'
  ];

  const approvals = ['WES', 'AACSB', 'AMBA', 'EQUIS'];
  const nirfRank = 'Rank 3';
  const accreditation = 'AMBA, EQUIS, AACSB, WES';

  const placementPartners = [
    'Accenture', 'Amazon', 'Deloitte', 'ITC', 'Microsoft', 'PwC',
    'Google', 'McKinsey', 'BCG', 'Bain & Company', 'TCS', 'Infosys'
  ];

  const faqs = [
    {
      question: 'What distinguished executive postgraduate programs does IIM Kozhikode offer?',
      answer: 'IIM Kozhikode offers exceptional executive programs including the prestigious Executive MBA, specialized HR Management certification, comprehensive IIM Online Courses, premium Online MBA, and rigorous Doctor of Philosophy programs. Each program is meticulously designed to deliver transformative learning experiences that enhance leadership capabilities, strategic thinking, and industry-specific expertise for accomplished professionals.'
    },
    {
      question: 'What global recognition does IIM Kozhikode command?',
      answer: 'IIM Kozhikode holds prestigious international accreditations from AMBA, EQUIS, AACSB, and WES, ensuring global recognition and acceptance. The institute ranks 3rd nationally in the NIRF 2024 Management category and secured 2nd position in the Atal Ranking of Institutions on Innovation Achievements (ARIIA) 2021, reflecting its commitment to excellence, innovation, and impactful management education.'
    },
    {
      question: 'What placement success rates characterize IIM Kozhikode graduates?',
      answer: 'IIM Kozhikode maintains exceptional placement records with students experiencing an average 8.1% increase in CTC, 50% average salary hike, and access to 300+ distinguished hiring partners. The institute facilitates diverse career opportunities across consulting, technology, finance, and operations domains, with alumni securing leadership positions in premier national and international organizations.'
    },
    {
      question: 'Are IIM Kozhikode\'s online certifications professionally valuable?',
      answer: 'Absolutely. IIM Kozhikode\'s online programs deliver identical academic rigor and quality as on-campus offerings, featuring curriculum designed by the same distinguished faculty. Certifications carry the official IIM Kozhikode seal and prestigious international accreditations, significantly enhancing professional credibility, career advancement prospects, and earning potential across diverse industries globally.'
    },
    {
      question: 'What salary advancement can graduates anticipate?',
      answer: 'IIM Kozhikode alumni consistently experience substantial career progression including promotions, expanded leadership responsibilities, and significant salary increments averaging 50% or more. The combination of IIM Kozhikode\'s prestigious brand recognition, acquired strategic competencies, and enhanced management capabilities positions graduates for senior leadership roles commanding premium compensation packages.'
    },
    {
      question: 'Can working professionals pursue these programs effectively?',
      answer: 'Yes, IIM Kozhikode\'s online programs are specifically architected for ambitious working professionals, featuring flexible schedules, weekend sessions, interactive online modules, and self-paced learning components. This sophisticated design enables participants to balance demanding professional responsibilities with rigorous academic pursuits, ensuring continuous career momentum while acquiring transformative management education.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Kozhikode - Indian Institute of Management Kozhikode Online | EduConnect</title>
        <meta name="description" content="Explore IIM Kozhikode's online management programs. Established in 1996, ranked 3rd in NIRF 2024. Executive MBA, online MBA, and specialized programs." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Kozhikode.png" 
                alt="IIM Kozhikode Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => { e.target.src = '/images/universities/default-university.png'; }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Kozhikode, Kerala</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.1/5</span>
                    <span className={styles.reviews}>(899 Reviews)</span>
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
              <h2>About IIM Kozhikode</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Kozhikode stands as a distinguished institution established through collaborative 
                  governmental initiative in 1996, emerging as one of India's most prestigious management education centers. Strategically 
                  located in the culturally rich city of Kozhikode, Kerala, IIM Kozhikode has cultivated an exceptional reputation for 
                  delivering transformative management education that shapes visionary leaders and innovative business strategists.
                </p>
                <p>
                  Distinguished by its remarkable NIRF 2024 ranking of 3rd among management institutions with an outstanding score of 77.90, 
                  IIM Kozhikode exemplifies academic excellence and innovative pedagogy. The institute's commitment to superior education is 
                  validated through prestigious international accreditations from AMBA, EQUIS, AACSB, and WES, positioning it among an elite 
                  global cohort of business schools renowned for delivering world-class management education.
                </p>
                <p>
                  IIM Kozhikode pioneered interactive learning in Asia, becoming the continent's first institution to offer sophisticated 
                  learning modules to working professionals through satellite delivery systems. This innovative approach reflects the 
                  institute's unwavering commitment to accessibility and technological advancement in education. Through strategic collaborations 
                  with 42 premier international management institutes, IIM Kozhikode provides students with invaluable exposure to diverse 
                  business perspectives, cross-cultural management practices, and global industry trends.
                </p>
                <p>
                  The institution's distinguished faculty comprises accomplished scholars, renowned researchers, and industry veterans who 
                  bring extensive expertise across finance, marketing, operations, human resources, analytics, and strategic management. 
                  This exceptional faculty ensures that students receive mentorship transcending traditional pedagogical boundaries, fostering 
                  critical thinking, ethical leadership, innovation, and social responsibility—qualities that define successful management 
                  professionals in today's interconnected global economy.
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
                  <div className={styles.statNumber}>8.1%</div>
                  <div className={styles.statLabel}>Average CTC Increase</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Avg Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3X</div>
                  <div className={styles.statLabel}>Interview Opportunities</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our exceptional range of online management programs designed for ambitious professionals
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
                Follow these simple steps to secure your admission at IIM Kozhikode
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Assessment</h3>
                    <p>Meticulously review program-specific eligibility criteria outlined on the official IIM Kozhikode admission portal. Ensure strict compliance with academic qualifications and professional experience requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>Demonstrate academic excellence through exceptional performance in CAT, GMAT, or EMAT. These rigorous assessments evaluate quantitative reasoning, verbal proficiency, and analytical capabilities.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Complete the detailed online application form with meticulous accuracy. Submit comprehensive documentation including transcripts, professional credentials, resume, and letters of recommendation.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Personal Interview</h3>
                    <p>Shortlisted candidates participate in rigorous personal interviews via advanced video conferencing. Demonstrate communication excellence, leadership potential, and strategic thinking capabilities.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Final Selection</h3>
                    <p>Ultimate selection determined through comprehensive evaluation. Selected candidates receive official offer letters and complete enrollment formalities within stipulated timelines.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university with minimum qualifying percentage</li>
                  <li>Substantial work experience for executive program tracks</li>
                  <li>Competitive CAT/GMAT/EMAT scores meeting program-specific requirements</li>
                  <li>Demonstrated proficiency in English for academic communication</li>
                  <li>Strong academic record reflecting consistent high performance</li>
                  <li>Professional recommendations attesting to leadership capabilities</li>
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
                  <h3>8.1%</h3>
                  <p>Average CTC Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Avg Salary Hike</p>
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
                Find answers to common queries about IIM Kozhikode programs
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

export default IIMKozhikode;

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMLucknow = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA Online', fee: 2450000, duration: '1 - 2 Years', specializations: 1 },
    { name: 'Advanced Management', fee: 250000, duration: '1 Year', specializations: 1 },
    { name: 'IIM Online Courses', fee: 250000, duration: '6 Months', specializations: 1 },
    { name: 'Business Management', fee: 200000, duration: '1 Year', specializations: 1 },
    { name: 'Leadership and Management', fee: 225000, duration: '9 Months', specializations: 1 },
    { name: 'Strategic Management', fee: 230000, duration: '9 Months', specializations: 1 },
    { name: 'HR Management', fee: 220000, duration: '1 Year', specializations: 1 },
    { name: 'Marketing Management', fee: 215000, duration: '9 Months', specializations: 1 },
    { name: 'Finance Management', fee: 225000, duration: '1 Year', specializations: 1 },
    { name: 'Operations Management', fee: 210000, duration: '9 Months', specializations: 1 },
    { name: 'Business Analytics', fee: 235000, duration: '1 Year', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 7th in NIRF 2024 Management Category with exceptional academic performance',
    'Prestigious AACSB and AMBA international accreditations ensuring global standards',
    'One of the first six IIMs established by the Government of India in 1984',
    'Distinguished NIRF accreditation reflecting outstanding quality and excellence',
    'Comprehensive leadership development with cutting-edge management pedagogy',
    '250+ distinguished recruiting organizations across diverse industry sectors',
    'Exceptional placement outcomes with significant salary advancements',
    'State-of-the-art infrastructure supporting innovative learning methodologies'
  ];

  const approvals = ['NIRF', 'AACSB', 'AMBA'];
  const nirfRank = 'Rank 7';
  const accreditation = 'NIRF, AACSB, AMBA';

  const placementPartners = [
    'Deloitte', 'EY', 'KPMG', 'PwC', 'Accenture', 'Capgemini',
    'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Infosys', 'TCS', 'Wipro'
  ];

  const faqs = [
    {
      question: 'What comprehensive executive programs does IIM Lucknow offer?',
      answer: 'IIM Lucknow offers an extensive portfolio of executive programs including the prestigious Executive MBA, specialized certifications in HR Management, Finance Management, Marketing Management, Operations Management, Strategic Management, Leadership and Management, Business Analytics, Advanced Management, Business Management, and comprehensive IIM Online Courses. Each program is meticulously crafted to deliver transformative learning experiences that enhance leadership capabilities and strategic competencies for accomplished professionals.'
    },
    {
      question: 'What academic prestige does IIM Lucknow command?',
      answer: 'IIM Lucknow holds prestigious international accreditations from AACSB and AMBA, ensuring global recognition and acceptance. Established in 1984 as one of India\'s first six IIMs, the institute ranks 7th nationally in the NIRF 2024 Management category. This distinguished positioning reflects IIM Lucknow\'s unwavering commitment to academic excellence, innovative pedagogy, and impactful management education that shapes visionary business leaders.'
    },
    {
      question: 'What placement success characterizes IIM Lucknow graduates?',
      answer: 'IIM Lucknow maintains exceptional placement records with alumni experiencing substantial career advancements, significant salary increments, and access to 250+ distinguished recruiting organizations. The institute facilitates diverse career opportunities across consulting, banking, technology, manufacturing, and services sectors, with graduates securing leadership positions in premier national and multinational corporations.'
    },
    {
      question: 'Are IIM Lucknow\'s online certifications professionally valuable?',
      answer: 'Absolutely. IIM Lucknow\'s online programs deliver identical academic rigor and quality as on-campus offerings, featuring curriculum designed by distinguished faculty members. Certifications carry the official IIM Lucknow seal and prestigious international accreditations, significantly enhancing professional credibility, career advancement prospects, and earning potential across diverse industries globally.'
    },
    {
      question: 'What salary advancement can graduates anticipate?',
      answer: 'IIM Lucknow alumni consistently experience substantial career progression including promotions, expanded leadership responsibilities, and significant salary increments. The combination of IIM Lucknow\'s prestigious brand recognition, acquired strategic competencies, and enhanced management capabilities positions graduates for senior leadership roles commanding premium compensation packages across diverse industry sectors.'
    },
    {
      question: 'Can working professionals pursue these programs effectively?',
      answer: 'Yes, IIM Lucknow\'s online programs are specifically architected for ambitious working professionals, featuring flexible schedules, weekend sessions, interactive online modules, and self-paced learning components. This sophisticated design enables participants to balance demanding professional responsibilities with rigorous academic pursuits, ensuring continuous career momentum while acquiring transformative management education from one of India\'s most respected business schools.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Lucknow - Indian Institute of Management Lucknow Online | EduConnect</title>
        <meta name="description" content="Explore IIM Lucknow's online management programs. Established in 1984, ranked 7th in NIRF 2024. Executive MBA, online MBA, and specialized programs." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Lucknow.png" 
                alt="IIM Lucknow Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => { e.target.src = '/images/universities/default-university.png'; }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Lucknow, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.6/5</span>
                    <span className={styles.reviews}>(338 Reviews)</span>
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
              <h2>About IIM Lucknow</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Lucknow represents a distinguished institution established by the Government of India 
                  in 1984, emerging as one of the nation's six founding IIMs. Strategically located in Lucknow, the cultural capital of 
                  Uttar Pradesh, IIM Lucknow has cultivated an exceptional reputation for delivering transformative management education 
                  that shapes visionary leaders, innovative entrepreneurs, and strategic business thinkers who drive organizational 
                  excellence across diverse global industries.
                </p>
                <p>
                  Distinguished by its impressive NIRF 2024 ranking of 7th among management institutions, IIM Lucknow exemplifies academic 
                  excellence and innovative pedagogy that transcends conventional business education. The institute's commitment to superior 
                  education is validated through prestigious international accreditations from AACSB and AMBA, positioning it among an elite 
                  global cohort of business schools renowned for delivering world-class management education that meets rigorous international 
                  quality benchmarks.
                </p>
                <p>
                  IIM Lucknow's comprehensive curriculum integrates cutting-edge theoretical frameworks with practical industry applications, 
                  ensuring students develop sophisticated analytical capabilities, strategic decision-making skills, and ethical leadership 
                  qualities essential for navigating complex contemporary business environments. The institute's commitment to holistic 
                  development extends beyond classroom learning, encompassing experiential learning opportunities, industry interactions, 
                  international exposure, and leadership development initiatives that prepare graduates for senior management roles.
                </p>
                <p>
                  The institution's distinguished faculty comprises accomplished scholars, renowned researchers, and industry veterans who 
                  bring extensive expertise across finance, marketing, operations, human resources, information systems, and strategic 
                  management. This exceptional faculty ensures that students receive mentorship transcending traditional pedagogical 
                  boundaries, fostering critical thinking, ethical leadership, innovation, and social responsibility—qualities that define 
                  successful management professionals in today's interconnected global economy and rapidly evolving business landscape.
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
                  <div className={styles.statNumber}>250+</div>
                  <div className={styles.statLabel}>Recruiting Companies</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>11</div>
                  <div className={styles.statLabel}>Program Options</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>40+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3X</div>
                  <div className={styles.statLabel}>Career Growth</div>
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
                Follow these simple steps to secure your admission at IIM Lucknow
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Verification</h3>
                    <p>Thoroughly review program-specific eligibility criteria outlined on the official IIM Lucknow admission portal. Ensure strict compliance with academic qualifications, professional experience requirements, and entrance examination prerequisites.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>Demonstrate academic excellence through exceptional performance in CAT, GMAT, or other approved entrance examinations. These rigorous assessments evaluate quantitative reasoning, verbal proficiency, logical reasoning, and analytical capabilities essential for management education.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Complete the comprehensive online application form with meticulous accuracy. Submit required documentation including academic transcripts, professional credentials, detailed resume, statement of purpose, and letters of recommendation from qualified professionals.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Personal Interview</h3>
                    <p>Shortlisted candidates participate in rigorous personal interviews conducted by esteemed faculty panels via advanced video conferencing platforms. Demonstrate communication excellence, leadership potential, strategic thinking capabilities, and alignment with institutional values.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Final Selection</h3>
                    <p>Ultimate selection determined through holistic evaluation of academic performance, entrance examination scores, professional experience, interview performance, and overall candidate potential. Selected candidates receive official offer letters and complete enrollment formalities within stipulated timelines.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/PGPM Programs:</strong> Bachelor's degree with minimum 50% marks (45% for SC/ST/PwD). High CAT score required with minimum 90 percentile for shortlisting. Work experience advantageous but not mandatory for certain programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive MBA Programs:</strong> Bachelor's degree from recognized university with minimum 3-5 years of substantial professional experience. CAT/GMAT scores may be required for certain tracks. Leadership roles and managerial responsibilities preferred</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Programs:</strong> Bachelor's degree with relevant academic background. Direct admission process for online courses. ABC ID creation mandatory as per UGC regulations. Working professionals and fresh graduates both eligible</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Fellow Programs (Ph.D.):</strong> Master's degree with excellent academic record and minimum 55% marks. Research aptitude demonstrated through NET/GATE or equivalent. Prior research publications highly valued</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university with minimum qualifying percentage</li>
                  <li>Substantial professional experience for executive program tracks</li>
                  <li>Competitive CAT/GMAT scores meeting program-specific cutoff requirements</li>
                  <li>Demonstrated proficiency in English for academic communication</li>
                  <li>Strong academic record reflecting consistent high performance</li>
                  <li>Professional recommendations attesting to leadership capabilities and managerial potential</li>
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
                  <h3>250+</h3>
                  <p>Recruiting Companies</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>40+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Career Growth</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Support</p>
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
                Find answers to common queries about IIM Lucknow programs
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

export default IIMLucknow;

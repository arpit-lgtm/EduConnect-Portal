import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMJammu = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 992250, duration: '2 Years', specializations: 1 },
    { name: 'Doctor of Philosophy', fee: 700000, duration: '2 Years', specializations: 1 },
    { name: 'Online MBA', fee: 992250, duration: '2 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Youngest IIM established in 2016',
    'Ranked 42nd in NIRF 2024 Management Category',
    'Rapidly growing institution with modern infrastructure',
    'Focus on innovation and entrepreneurship',
    'Average package ₹15.5 LPA for freshers',
    'Average package ₹20 LPA for experienced candidates',
    '126 recruiters participated with 59 new companies',
    'Strong emphasis on holistic development'
  ];

  const approvals = ['AICTE', 'MHRD'];
  const nirfRank = 'Rank 42 (2024)';
  const accreditation = 'AICTE Approved';

  const placementPartners = [
    'Deloitte', 'KPMG', 'EY', 'PwC', 'Amazon', 'Flipkart',
    'ICICI Bank', 'HDFC Bank', 'Axis Bank', 'Jio', 'Airtel', 'Vodafone'
  ];

  const faqs = [
    {
      question: 'When was IIM Jammu established?',
      answer: 'IIM Jammu was established in 2016 as part of the government\'s initiative to expand quality management education. Despite being the youngest IIM, it has quickly established itself as a premier institution.'
    },
    {
      question: 'Does IIM Jammu offer online MBA programs?',
      answer: 'Yes, IIM Jammu offers online MBA programs designed for working professionals. The program maintains the same quality standards as the on-campus program with flexible learning schedules.'
    },
    {
      question: 'What is the placement record at IIM Jammu?',
      answer: 'IIM Jammu has excellent placement records with average packages of ₹15.5 LPA for freshers and ₹20 LPA for experienced candidates. 126 recruiters participated in recent placements including 59 new companies.'
    },
    {
      question: 'What are the eligibility criteria for IIM Jammu MBA programs?',
      answer: 'For MBA programs, candidates need a bachelor\'s degree with minimum 50% marks (45% for reserved categories) and a valid CAT score. Work experience may be preferred for executive programs.'
    },
    {
      question: 'Does IIM Jammu offer Ph.D. programs?',
      answer: 'Yes, IIM Jammu offers Doctor of Philosophy (Ph.D.) programs in various management disciplines for those interested in research and academia.'
    },
    {
      question: 'What is unique about IIM Jammu?',
      answer: 'As the youngest IIM, IIM Jammu brings fresh perspectives with modern infrastructure, emphasis on innovation and entrepreneurship, and a focus on emerging business challenges.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Jammu Online Programs | Ranked 42nd in NIRF 2024</title>
        <meta name="description" content="IIM Jammu - India's youngest IIM offering online MBA and Executive MBA programs. AICTE approved with NIRF Rank 42." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Jammu.png" 
                alt="IIM Jammu Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Nagrota, Jammu, J&K</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Established:</span>
                  <span className={styles.infoValue}>2016 (Youngest IIM)</span>
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
              <h2>About IIM Jammu</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIM Jammu represents India's newest generation of premier management institutes, established 
                  in 2016 as part of the Government of India's strategic initiative to expand world-class 
                  management education accessibility across the nation. As the youngest IIM, it embodies 
                  contemporary business education methodologies while maintaining the prestigious IIM legacy 
                  of excellence.
                </p>
                <p>
                  Despite its recent establishment, IIM Jammu has rapidly built an outstanding reputation for 
                  academic rigor and innovative thinking. The institute demonstrates unwavering commitment to 
                  developing transformative leaders capable of navigating complex contemporary business challenges 
                  while maintaining strong ethical foundations and social responsibility consciousness.
                </p>
                <p>
                  IIM Jammu delivers comprehensive programs including Master of Business Administration (MBA), 
                  Executive MBA for experienced professionals, and Doctor of Philosophy (Ph.D.) in Management 
                  for research scholars. The online and executive programs are strategically engineered for 
                  ambitious professionals pursuing career advancement without compromising their professional 
                  commitments.
                </p>
                <p>
                  The institute has achieved remarkable milestones within its brief operational history, including 
                  impressive placement records with average packages reaching ₹15.5 LPA for fresh graduates and 
                  ₹20 LPA for experienced candidates. Ranked 42nd by NIRF 2024 in the management category, IIM 
                  Jammu continues its upward trajectory in national rankings year after year.
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
                  <div className={styles.statNumber}>₹20 LPA</div>
                  <div className={styles.statLabel}>Avg. Package (Exp.)</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>₹15.5 LPA</div>
                  <div className={styles.statLabel}>Avg. Package (Freshers)</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>126</div>
                  <div className={styles.statLabel}>Recruiters</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>59</div>
                  <div className={styles.statLabel}>New Companies</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Contemporary programs strategically crafted for aspiring managers and pioneering researchers
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
                        <td>{course.specializations} Option{course.specializations > 1 ? 's' : ''}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Flexible payment options available. Merit-based scholarships offered to deserving candidates.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Streamlined enrollment pathway to India's most dynamic and rapidly advancing management institute
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>CAT Examination</h3>
                    <p>Participate in the Common Admission Test (CAT) administered by IIMs nationwide. Achieve competitive scores aligned with specific program requirements and selection benchmarks.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Complete the comprehensive online application form through IIM Jammu's official admissions portal with precise personal, academic, and professional information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Shortlisting</h3>
                    <p>Candidates undergo rigorous shortlisting evaluation based on CAT performance, academic credentials, and professional experience for advancement to subsequent selection stages.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>WAT & PI</h3>
                    <p>Shortlisted candidates participate in Written Ability Test (WAT) and Personal Interview (PI) sessions conducted by IIM Jammu's expert faculty panel.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Final Selection</h3>
                    <p>Final merit determination through composite evaluation of CAT scores, WAT performance, PI assessment, and comprehensive academic profile. Selected candidates receive official admission offers.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree with minimum 50% marks required (45% for reserved categories)</li>
                  <li>Valid CAT score mandatory for MBA admissions</li>
                  <li>Final year students can also apply</li>
                  <li>Work experience preferred for Executive MBA</li>
                  <li>Separate entrance for Ph.D. programs</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement Highlights</h2>
              <p className={styles.sectionDesc}>
                Exceptional career opportunities with rapidly expanding recruiter network and premium placement outcomes
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹20 LPA</h3>
                  <p>Avg. Package (Experienced)</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹15.5 LPA</h3>
                  <p>Avg. Package (Freshers)</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>126</h3>
                  <p>Total Recruiters</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>59</h3>
                  <p>New Companies</p>
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
                Comprehensive insights addressing critical inquiries about IIM Jammu's innovative programs
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

export default IIMJammu;

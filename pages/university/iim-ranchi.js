import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMRanchi = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Advanced General Management - IIM Course', fee: 170000, duration: '12 Months', specializations: 2 },
    { name: 'Leadership & Management', fee: 170000, duration: '12 Months', specializations: 2 },
    { name: 'Advanced General Management - Global MBA', fee: 170000, duration: '12 Months', specializations: 1 },
    { name: 'Advanced General Management - Online Executive MBA', fee: 170000, duration: '12 Months', specializations: 1 },
    { name: 'HR Management', fee: 150000, duration: '12 Months', specializations: 2 },
    { name: 'Online MBA', fee: 1250000, duration: '2 Years', specializations: 1 },
    { name: 'PhD (Fellow Program in Management)', fee: 300000, duration: '4 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 17th in NIRF 2024 Management Category',
    'Established in 2009 with IIM Calcutta mentorship and Government of Jharkhand support',
    'WES approved with AACSB and EMFD Global memberships for global recognition',
    'Only IIM offering full-time MBA program in Human Resources Management (MBA-HR)',
    'Research-based curriculum focused on practical management excellence',
    'Core values of Humility, Honesty, and Hard work for long-term success',
    '360-degree development with additional training programs and skill-enhancing services',
    'Strong panel of academicians from leading business schools nationwide'
  ];

  const approvals = ['NIRF Rank 17', 'WES', 'AACSB', 'EMFD Global'];
  const nirfRank = 'Rank 17';
  const accreditation = 'WES, AACSB, EMFD Global';

  const placementPartners = [
    'ICICI Bank', 'Accenture', 'Amazon', 'American Express', 'Axis Bank', 'Byjus',
    'Capgemini', 'Cognizant', 'Deloitte', 'EY', 'Flipkart', 'Godrej',
    'HCL', 'HDFC Bank', 'IBM', 'IndiaMART', 'Infosys', 'Paytm',
    'Reliance', 'Samsung', 'Tata', 'Wipro', 'Genpact', 'HSBC'
  ];

  const faqs = [
    {
      question: 'Which online programs are available at IIM Ranchi?',
      answer: 'IIM Ranchi offers Advanced General Management, Leadership & Management, Global MBA, Executive MBA, HR Management, Online MBA, and Fellow Program (PhD equivalent).'
    },
    {
      question: 'How can an online certification from IIM Ranchi benefit me?',
      answer: 'IIM Ranchi certifications provide WES and AACSB accreditation, enhancing strategic thinking and opening doors to multinational corporations and global career opportunities.'
    },
    {
      question: 'Is a Student Exchange Program provided in online courses at IIM Ranchi?',
      answer: 'IIM Ranchi offers virtual international collaboration through EMFD Global partnerships with global case studies, simulations, and projects with international cohorts.'
    },
    {
      question: 'Who are eligible for online courses available at IIM Ranchi?',
      answer: 'Candidates need a bachelor\'s degree with minimum academic standards. Executive programs require relevant work experience. Check specific program requirements.'
    },
    {
      question: 'Are there any financial aids provided at IIM Ranchi?',
      answer: 'Yes, IIM Ranchi offers flexible EMI options (6/9/12 months), no-cost EMI facilities, and education loans through partner financial institutions.'
    },
    {
      question: 'Who are the partner institutions of IIM Ranchi?',
      answer: 'IIM Ranchi partners with AACSB, EMFD Global, IIM Calcutta (mentor), and industry leaders for curriculum development and placement facilitation.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Ranchi - Indian Institute of Management Ranchi Online | EduConnect</title>
        <meta name="description" content="Explore IIM Ranchi's online management programs. Established in 2009, ranked 17th in NIRF 2024. WES approved with AACSB accreditation." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Ranchi.png" 
                alt="IIM Ranchi Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => { e.target.src = '/images/universities/default-university.png'; }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Ranchi, Jharkhand</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(827 Reviews)</span>
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
              <h2>About IIM Ranchi</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Ranchi stands as a distinguished member of India's premier business school ecosystem, 
                  established in 2009 through collaborative governmental initiative under the mentorship of IIM Calcutta and the Government 
                  of Jharkhand. Functioning under the aegis of the Ministry of Education, Government of India, IIM Ranchi has emerged as 
                  the ninth institution in the prestigious IIM network, cultivating an exceptional reputation for delivering transformative 
                  management education that shapes visionary leaders and innovative business strategists across diverse organizational sectors.
                </p>
                <p>
                  Distinguished as India's only institution offering a comprehensive full-time MBA program specializing in Human Resources 
                  Management (MBA-HR), IIM Ranchi exemplifies academic innovation and specialized expertise. The institute's research-oriented 
                  curriculum transcends conventional pedagogical approaches, integrating cutting-edge management theories with practical industry 
                  applications. This sophisticated educational framework, delivered by accomplished faculty comprising renowned scholars and 
                  industry veterans, ensures students develop comprehensive conceptual understanding alongside strategic thinking capabilities 
                  essential for navigating the complexities of contemporary global business environments.
                </p>
                <p>
                  Validated by prestigious international accreditations including WES approval, Association to Advance Collegiate Schools of 
                  Business (AACSB) membership, and EMFD Global association, IIM Ranchi maintains distinguished global recognition that 
                  significantly enhances career opportunities across national and international markets. The institute's foundational philosophy 
                  centers on cultivating core values of Humility, Honesty, and Hard Work—principles that define sustainable success in both 
                  individual professional trajectories and organizational excellence, preparing graduates to become ethical leaders who drive 
                  meaningful societal and business transformation.
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
                  <div className={styles.statNumber}>7</div>
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
                Follow these simple steps to secure your admission at IIM Ranchi
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>Go to the official website of IIM Ranchi and fill out the essential information in the application form, upload the required documents, and submit the form online.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Check Eligibility</h3>
                    <p>Before applying to the online courses at IIM Ranchi, you must go through its eligibility criteria as the university may ask for the required minimal educational credentials, work experience, and other program-specific criteria.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Additional Assessments</h3>
                    <p>Some additional review steps may also be asked by the university depending on the program chosen. This includes written aptitude tests or program-specific tests, and interviews.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>After being shortlisted, you need to pay the program fee immediately to confirm your admission.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation</h3>
                    <p>Download the confirmation document sent by the university & save your personalized login credentials for future reference.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/PGPM Programs:</strong> Bachelor's degree with minimum 50% aggregate. CAT/GMAT score required with competitive percentile</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive MBA:</strong> Graduation with 3-5 years professional work experience in managerial positions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Certificate Programs:</strong> Bachelor's degree from UGC recognized university. Valid ABC ID and DEB ID required</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university with minimum qualifying percentage</li>
                  <li>Work experience required for executive programs</li>
                  <li>Valid entrance exam scores (where applicable)</li>
                  <li>Valid ABC ID and DEB ID as per latest UGC guidelines</li>
                  <li>English language proficiency demonstrated</li>
                  <li>All required documents must be accurate and properly attested</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access extensive career opportunities through our robust placement support
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
                Find answers to common queries about IIM Ranchi programs
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

export default IIMRanchi;

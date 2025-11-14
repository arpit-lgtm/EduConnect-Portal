import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITRoorkee = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 350000, duration: '2 Years', specializations: 6 },
    { name: 'PG Certificate in 5G Technology and IoT', fee: 125000, duration: '6 Months', specializations: 3 },
    { name: 'PG Certificate in Strategic Supply Chain Management with AI', fee: 135000, duration: '6 Months', specializations: 4 },
    { name: 'PG Certificate in Data Science and Machine Learning', fee: 145000, duration: '8 Months', specializations: 5 },
    { name: 'PG Certificate in VLSI Design', fee: 120000, duration: '6 Months', specializations: 3 }
  ];

  const keyHighlights = [
    'Ranked 8th in NIRF 2024 Overall Category',
    'Ranked 6th in NIRF 2024 Engineering Category',
    'Established in 1847 - Oldest Technical Institute in Asia',
    'Located across 358.5 acres in Roorkee, Uttarakhand',
    'Additional campuses in Saharanpur and Greater Noida',
    '14 undergraduate and 24 postgraduate programs offered',
    '23 departments across engineering, architecture, management, humanities',
    'Highest package offered: INR 1.3 Cr to INR 2.15 Cr per annum',
    'Global alumni network of 40,000+ professionals',
    'Research excellence in AI, robotics, sustainable energy'
  ];

  const placementPartners = [
    'Accenture', 'Bajaj Auto', 'Tata Steel', 'BCG', 'Microsoft',
    'Amazon', 'Bank of America', 'Google', 'Goldman Sachs', 'Deloitte',
    'HCL', 'IBM', 'Infosys', 'TCS', 'Wipro',
    'Oracle', 'SAP', 'Adobe', 'Flipkart', 'L&T', 'Hindustan'
  ];

  const faqs = [
    {
      question: 'Does IIT Roorkee offer online courses?',
      answer: 'Yes, IIT Roorkee offers comprehensive online courses including Executive MBA, Post Graduate Certificates in 5G Technology and IoT, Strategic Supply Chain Management with AI, Data Science and Machine Learning, and VLSI Design. These programs are designed for working professionals with flexible learning schedules.'
    },
    {
      question: 'What courses are offered in online mode at IIT Roorkee?',
      answer: 'Online courses include Executive MBA degree, Post Graduate Certificate in 5G Technology and IoT, Post Graduate Certificate in Strategic Supply Chain Management with AI, Post Graduate Certificate in Data Science and Machine Learning, and Post Graduate Certificate in VLSI Design - all delivered through advanced online platforms.'
    },
    {
      question: 'Can I get admission at IIT Roorkee without any entrance examination?',
      answer: 'For Executive MBA and online certificate programs, the admission process may not require traditional entrance examinations like CAT. However, candidates need to meet specific eligibility criteria including educational qualifications and work experience requirements. Application review and interview rounds are conducted for final selection.'
    },
    {
      question: 'What is the fee structure for online programs at IIT Roorkee?',
      answer: 'Fees vary by program - Executive MBA is approximately ₹3.5 lakhs for 2 years, while PG Certificate programs range from ₹1.2 lakhs to ₹1.45 lakhs for 6-8 months duration. Detailed fee structure is available on the official website.'
    },
    {
      question: 'Are IIT Roorkee online degrees recognized globally?',
      answer: 'Yes, all degrees and certificates from IIT Roorkee, including online programs, hold complete institutional credibility and are recognized globally by employers and educational institutions. IIT Roorkee is ranked 8th in NIRF 2024 overall category and maintains world-class academic standards.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Roorkee - Oldest Technical Institute in Asia | NIRF Rank 8</title>
        <meta name="description" content="IIT Roorkee - Established in 1847, India's oldest technical institute. Ranked 8th in NIRF 2024. Offering Executive MBA and online programs for working professionals." />
        <meta name="keywords" content="IIT Roorkee, IITR, engineering college, online MBA, Executive MBA, online courses, NIRF ranking" />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Roorkee.png" 
                alt="IIT Roorkee Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Roorkee, Uttarakhand</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>5.0/5</span>
                    <span className={styles.reviews}>(1 Review)</span>
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
                  <span className={styles.infoValue}>Rank 8 (Overall 2024)</span>
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
              <h2>About IIT Roorkee</h2>
              <div className={styles.aboutContent}>
                <p>
                  Indian Institute of Technology Roorkee is an autonomous institute located in Uttarakhand, established in 1847 and originally named Thomas College of Civil Engineering. This prestigious institution holds the distinction of being the Oldest Technical Institute of Asia, predating even India's independence. Located in Haridwar District, the institute is spread over 358.5 acres of land in Roorkee, with two additional campuses in Saharanpur (30 km away) and Greater Noida, collectively serving as centers of excellence for technical education and research.
                </p>
                <p>
                  IIT Roorkee excels in offering top-notch academic courses to students across multiple disciplines. Currently, it offers over 14 undergraduate programs, 24 postgraduate programs, and numerous doctorate degrees. With 23 departments spanning engineering, architecture & planning, humanities & social sciences, management programs, and various other fields, the institute provides comprehensive educational opportunities. As per the National Institutional Ranking Framework 2024, IIT Roorkee is ranked 8th in the overall institutes category, 9th in the research category, 6th in the top engineering category, 6th in the innovation category, number 1 in architecture and planning category, and 18th in management category.
                </p>
                <p>
                  IIT Roorkee stands as India's premier institute, essentially famous for its B.Tech courses and rigorous academic standards. To gain admission at this prestigious institute, students must appear for the All India Examination JEE (Joint Entrance Examination), with exceptionally high cutoff scores ensuring only the most talented students secure admission. The full-time courses offered include B.Tech, B.Arch, M.Sc, M.Tech, MBA, and various PhD programs, with entrance examinations like JEE, IIT JAM, GATE, and CAT paving the way for aspiring students.
                </p>
                <p>
                  According to placement statistics, IIT Roorkee provides abundant placement opportunities with the highest packages offered ranging between INR 1.3 Crore to INR 2.15 Crore per annum. The institute's online courses include Executive MBA degree, Post Graduate Certificate in 5G Technology and IoT, Post Graduate Certificate in Strategic Supply Chain Management with AI, Post Graduate Certificate in Data Science and Machine Learning, Post Graduate Certificate in VLSI Design, and Post Graduate Certificate in Machine Learning for Finance, all designed for working professionals seeking career advancement without disrupting their professional commitments.
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
                Follow these steps to secure admission at IIT Roorkee for online and executive programs.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Submit your application to IIT Roorkee on Coursera or the official platform for your chosen program. After you submit your application, the IIT Roorkee admissions team will review your application thoroughly.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Verification & Review</h3>
                    <p>If your application is found to meet the preliminary eligibility conditions, you will be invited by IIT Roorkee for an interview. The admissions team verifies educational qualifications, work experience, and other relevant credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Interview Round</h3>
                    <p>Participate in the interview conducted by IIT Roorkee faculty and admissions panel. The interview assesses your domain knowledge, professional experience, communication skills, and alignment with program objectives.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Offer & Enrollment</h3>
                    <p>After the interview round, if your candidature is found fit for the Executive MBA degree or certificate program, you will receive an offer of admission from IIT Roorkee. Complete the enrollment formalities and fee payment to confirm your seat.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive MBA Program:</strong> Bachelor's degree from a recognized university. Minimum 3-5 years of relevant work experience required. No CAT/GMAT scores required. Leadership roles and managerial responsibilities preferred</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Certificate Programs:</strong> Bachelor's degree in Engineering/Technology for technical programs. Relevant subject background required for specialized certificates. Working professionals encouraged to apply with appropriate experience</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Programs:</strong> Direct admission process for most online courses. ABC ID creation mandatory as per UGC regulations. Degrees obtained through online mode equivalent to traditional degrees. Working professionals and fresh graduates eligible</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access exceptional career opportunities through comprehensive placement support and industry networks.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹2.15 Cr</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹1.3 Cr</h3>
                  <p>Average CTC Range</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>40,000+</h3>
                  <p>Global Alumni Network</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
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
                Find answers to common questions about IIT Roorkee online programs and admissions
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

export default IITRoorkee;

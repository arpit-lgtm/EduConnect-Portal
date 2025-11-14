import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const NMIMSUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online MBA', fee: 220000, duration: '2 Years', specializations: 7 },
    { name: 'Online BBA', fee: 150000, duration: '3 Years', specializations: 3 },
    { name: 'Online B.Com', fee: 108000, duration: '3 Years', specializations: 1 },
    { name: 'MBA (Working Executives)', fee: 400000, duration: '2 Years', specializations: 7 },
    { name: 'PhD', fee: 150000, duration: '3 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'NAAC A++ accredited with highest academic standards nationwide',
    'Ranked among Top 15 universities by NIRF consistently',
    'Over 40 years of excellence in management and professional education',
    'Located in Mumbai, India\'s financial capital with industry proximity',
    'Strong corporate connections with Fortune 500 companies',
    'World-class faculty with extensive industry and academic experience',
    'Comprehensive online platform ensuring seamless learning experience',
    'Outstanding placement records with leading multinational corporations'
  ];

  const approvals = ['UGC-DEB', 'AICTE', 'NAAC A++', 'NBA'];
  const nirfRank = 'Rank 21 (Management)';
  const accreditation = 'NAAC A++';

  const placementPartners = [
    'Deloitte', 'EY', 'KPMG', 'PwC', 'Accenture', 
    'Infosys', 'TCS', 'Wipro', 'Cognizant', 'Amazon', 'Google', 'Microsoft'
  ];

  const faqs = [
    {
      question: 'Is NMIMS online MBA equivalent to regular MBA?',
      answer: 'Yes, NMIMS online MBA is UGC-DEB approved and holds equal value to traditional on-campus MBA programs. The degree carries the same recognition for employment and further education opportunities.'
    },
    {
      question: 'What makes NMIMS stand out among business schools?',
      answer: 'NMIMS is renowned for its strong industry connections, experienced faculty from top B-schools, rigorous curriculum aligned with corporate needs, and exceptional placement records with Fortune 500 companies. The Mumbai location provides unparalleled industry exposure.'
    },
    {
      question: 'How are classes delivered in online programs?',
      answer: 'NMIMS uses a sophisticated Learning Management System featuring live interactive sessions with faculty, recorded lectures accessible 24/7, case study discussions, group projects, and regular assessments ensuring comprehensive learning.'
    },
    {
      question: 'What career support does NMIMS provide?',
      answer: 'NMIMS offers extensive career services including dedicated placement cell, resume building workshops, mock interviews, networking events with alumni, access to job portal, and direct recruitment drives by corporate partners.'
    },
    {
      question: 'Are scholarships available for online programs?',
      answer: 'Yes, NMIMS provides merit-based scholarships, need-based financial assistance, and special category reservations. Students can also avail education loans through partner financial institutions with competitive interest rates.'
    },
    {
      question: 'Can working professionals pursue these programs?',
      answer: 'Absolutely. NMIMS online programs are specifically designed for working professionals with flexible schedules, weekend sessions, recorded lectures, and minimal campus visits, allowing seamless balance between work and studies.'
    }
  ];

  return (
    <>
      <Head>
        <title>NMIMS Online - Distance Learning MBA & Degree Programs | EduConnect</title>
        <meta name="description" content="Join NMIMS Online for UGC-approved MBA and degree programs. NAAC A++ accredited, Top 15 NIRF ranked business school with excellent placements." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/NMIMS University.png" 
                alt="NMIMS Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Mumbai, Maharashtra</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.6/5</span>
                    <span className={styles.reviews}>(640 Reviews)</span>
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
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About NMIMS Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Narsee Monjee Institute of Management Studies (NMIMS) has been a cornerstone of management 
                  education in India since 1981, earning its reputation as one of the nation's premier business 
                  schools. With over four decades of academic excellence, NMIMS has shaped countless business 
                  leaders who drive innovation across diverse industries worldwide.
                </p>
                <p>
                  Strategically located in Mumbai, India's financial and commercial capital, NMIMS provides 
                  students unique access to corporate headquarters, industry leaders, and unparalleled networking 
                  opportunities. The university's online division extends this prestigious education to learners 
                  everywhere, maintaining the same rigorous standards and industry-relevant curriculum that made 
                  NMIMS a household name in management education.
                </p>
                <p>
                  NMIMS holds NAAC A++ accreditation demonstrating commitment to educational quality, and consistently 
                  ranks among India's top 15 universities in NIRF rankings. The institution offers comprehensive 
                  programs across Management, Commerce, Technology, and Liberal Arts, all designed to meet evolving 
                  industry requirements and prepare graduates for leadership roles.
                </p>
                <p>
                  Through advanced online learning technology, NMIMS delivers immersive educational experiences 
                  featuring live faculty interactions, contemporary case studies, collaborative projects, and 
                  robust career services. The strong alumni network spanning Fortune 500 companies provides 
                  students invaluable mentorship and career advancement opportunities in competitive job markets.
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
                  <div className={styles.statNumber}>40+ Years</div>
                  <div className={styles.statLabel}>Academic Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Top 15</div>
                  <div className={styles.statLabel}>NIRF Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A++</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Mumbai</div>
                  <div className={styles.statLabel}>Financial Capital</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Industry-aligned degree programs designed for ambitious professionals
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
                        <td>{course.specializations}+ Options</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> EMI facilities available through partner banks. Merit scholarships offered.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Begin your journey with NMIMS through our streamlined admission process
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Program Selection</h3>
                    <p>Explore program offerings on the NMIMS website, review eligibility requirements, and select the course aligned with your career objectives.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Create your account using valid email and mobile number. Complete two-factor verification to secure your profile.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Fill comprehensive application form with educational background, work experience, and personal information. Upload required documentation in specified formats.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Processing</h3>
                    <p>Complete application and program fees through secure payment gateway. Options include cards, net banking, UPI, and EMI facilities.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Confirmation</h3>
                    <p>Receive official admission letter with student credentials. Access orientation materials and Learning Management System to begin your academic journey.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Online Programs (BBA/B.Com):</strong> 10+2 from recognized board with minimum 50% marks. Selection based on academic merit</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/PGDM Programs:</strong> Bachelor's degree with minimum 50% aggregate. Professional experience considered. Two admission cycles annually (Jan/Feb, July/Aug)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Requirements:</strong> ABC ID creation mandatory per UGC directives. Documents: Academic transcripts, experience certificates, ID proof, photographs</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>Two admission cycles annually - January/February and July/August intakes</li>
                  <li>Selection based on academic merit and professional experience</li>
                  <li>ABC ID creation mandatory as per UGC directives</li>
                  <li>Documents needed: Academic transcripts, experience certificates, ID proof, photographs</li>
                  <li>UGC-mandated fee refund applicable within stipulated period</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                Connect with leading employers through our extensive corporate network
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>2,000+</h3>
                  <p>Annual Job Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>400+</h3>
                  <p>Corporate Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>60%</h3>
                  <p>Average Salary Growth</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Fortune 500</h3>
                  <p>Company Access</p>
                </div>
              </div>

              <h3>Leading Recruitment Partners</h3>
              <div className={styles.partnersGrid}>
                {placementPartners.map((partner, idx) => (
                  <div key={idx} className={styles.partnerCard}>
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Common queries about NMIMS Online programs answered
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
                <h3>Have Additional Questions?</h3>
                <p>Our enrollment advisors are ready to assist with your queries</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Connect with Counselors</button>
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

export default NMIMSUniversity;

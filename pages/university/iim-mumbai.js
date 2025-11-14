import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMMumbai = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 1170000, duration: '1 - 2 Years', specializations: 1 },
    { name: 'Doctor of Philosophy', fee: 600000, duration: '2 Years', specializations: 1 },
    { name: 'Online MBA', fee: 1500000, duration: '2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 6th in NIRF 2024 Management Category with exceptional score of 74.73',
    'Prestigious AACSB international accreditation ensuring global standards',
    'Formerly NITIE (National Institute of Industrial Engineering) with legacy since 1963',
    'Located in Mumbai - India\'s business capital with unparalleled industry connections',
    'Distinguished faculty of 59+ accomplished academicians and industry experts',
    'Alumni network of 10,000+ professionals across diverse global industries',
    'Strategic partnerships with premier companies like 3M, Abbott, Cipla, John Deere, EY',
    'Cutting-edge curriculum in Finance, Analytics, Project Management, HR, Operations, IT'
  ];

  const approvals = ['AACSB'];
  const nirfRank = 'Rank 6';
  const accreditation = 'AACSB';

  const placementPartners = [
    'Accenture', 'Amazon', 'EY', 'TCS', 'Wipro', 'Genpact',
    'Dell', 'JP Morgan', 'Deloitte', 'KPMG', 'IBM', 'HCL'
  ];

  const faqs = [
    {
      question: 'What distinguished programs does IIM Mumbai offer for working professionals?',
      answer: 'IIM Mumbai offers Executive MBA, Online MBA, PhD, and specialized MDPs across Finance, Analytics, Strategy, Operations, Marketing, and more.'
    },
    {
      question: 'What global recognition does IIM Mumbai command?',
      answer: 'IIM Mumbai holds AACSB accreditation (top 5% globally), ranks 6th in NIRF 2024, and has six decades of management excellence.'
    },
    {
      question: 'What placement success characterizes IIM Mumbai graduates?',
      answer: 'IIM Mumbai maintains exceptional placements with partners like 3M, Abbott, Cipla, Aditya Birla, EY, and premier companies across sectors.'
    },
    {
      question: 'How does IIM Mumbai\'s location benefit students?',
      answer: 'Located in India\'s business capital, students access corporate headquarters, industry leaders, live projects, and Mumbai\'s vibrant business ecosystem.'
    },
    {
      question: 'What makes IIM Mumbai\'s faculty exceptional?',
      answer: 'IIM Mumbai has 59+ accomplished faculty who are researchers, industry veterans, and consultants with expertise across all management domains.'
    },
    {
      question: 'Can working professionals pursue IIM Mumbai programs effectively?',
      answer: 'Yes, programs feature flexible schedules, weekend sessions, and online components to balance professional responsibilities with academic pursuits.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Mumbai - Indian Institute of Management Mumbai Online | EduConnect</title>
        <meta name="description" content="Explore IIM Mumbai's online management programs. Established in 1963, ranked 6th in NIRF 2024. Executive MBA, online MBA, and specialized programs." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Mumbai.png" 
                alt="IIM Mumbai Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => { e.target.src = '/images/universities/default-university.png'; }}
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
                    <span className={styles.ratingText}>3.8/5</span>
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
              <h2>About IIM Mumbai</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Mumbai, formerly known as the National Institute of Industrial Engineering 
                  (NITIE), represents a distinguished institution established in 1963 with a rich legacy of six decades in 
                  management education excellence. Strategically located in Mumbai, India's business and financial capital, IIM 
                  Mumbai has cultivated an exceptional reputation for delivering transformative management education that shapes 
                  visionary leaders, innovative entrepreneurs, and strategic business thinkers who drive organizational excellence 
                  across diverse global industries.
                </p>
                <p>
                  Distinguished by its remarkable NIRF 2024 ranking of 6th among management institutions with an outstanding score 
                  of 74.73, IIM Mumbai exemplifies academic excellence and innovative pedagogy that transcends conventional business 
                  education. The institute's commitment to superior education is validated through prestigious AACSB (Association to 
                  Advance Collegiate Schools of Business) international accreditation, positioning it among the top 5% of business 
                  schools globally that meet rigorous international quality benchmarks for management education at undergraduate, 
                  postgraduate, and doctoral levels.
                </p>
                <p>
                  IIM Mumbai's comprehensive curriculum integrates cutting-edge theoretical frameworks with practical industry 
                  applications across diverse functional areas including Finance, Analytics, Project Management, Human Resources, 
                  Operations Management, Sustainability Management, and Information Technology. The institute's strategic location in 
                  Mumbai provides unparalleled access to major corporate headquarters, industry leaders, financial institutions, and 
                  multinational corporations, enabling regular industry interactions, guest lectures from business pioneers, and live 
                  project opportunities that significantly enhance practical learning.
                </p>
                <p>
                  The institution's distinguished faculty comprises 59+ accomplished scholars, renowned researchers, and industry 
                  veterans who bring extensive expertise and maintain active industry consulting practices. This exceptional faculty 
                  ensures that students receive mentorship transcending traditional pedagogical boundaries, fostering critical thinking, 
                  ethical leadership, innovation, and social responsibility. With an alumni network of 10,000+ professionals occupying 
                  leadership positions across diverse global industries, IIM Mumbai continues to shape the future of management 
                  education in India and beyond.
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
                  <div className={styles.statNumber}>10K+</div>
                  <div className={styles.statLabel}>Alumni Network</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>59+</div>
                  <div className={styles.statLabel}>Expert Faculty</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>60+</div>
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
                Explore our prestigious range of online management programs designed for accomplished professionals
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
                Follow these simple steps to secure your admission at IIM Mumbai
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Begin your journey by accessing the official IIM Mumbai application portal and completing the comprehensive registration process. Create your credentials to access the application system and review program-specific requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Upload all required documentation including academic transcripts, professional credentials, detailed resume, entrance examination scores, and letters of recommendation. Ensure all documents are accurate, valid, and meet specified format requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Aptitude Test & Shortlisting</h3>
                    <p>Candidates are evaluated based on entrance examination performance (CAT/GMAT/GATE), academic record, and professional experience. Shortlisted candidates receive invitations for the subsequent interview stage based on comprehensive shortlisting score calculation.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Personal Interview</h3>
                    <p>Participate in rigorous personal interviews conducted by distinguished faculty panels. Demonstrate communication excellence, leadership potential, strategic thinking capabilities, domain knowledge, and alignment with institutional values during this critical evaluation stage.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Final Selection & Enrollment</h3>
                    <p>Final selection determined through holistic evaluation of academic performance, entrance scores, interview performance, and overall candidate potential. Selected candidates receive official offer letters and complete enrollment formalities to begin their transformative learning journey.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA Programs:</strong> Bachelor's degree with minimum 50% marks (45% for SC/ST/PWD). Valid CAT/GMAT score required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive MBA:</strong> Graduation with minimum 5 years professional work experience in managerial/leadership roles</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Programs:</strong> Bachelor's degree from recognized university. Working professionals and fresh graduates eligible</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university with minimum qualifying percentage</li>
                  <li>Competitive CAT/GMAT/GATE scores meeting program-specific requirements</li>
                  <li>Substantial professional experience for executive program tracks</li>
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
                  <h3>10K+</h3>
                  <p>Alumni Network</p>
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
                Find answers to common queries about IIM Mumbai programs
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

export default IIMMumbai;

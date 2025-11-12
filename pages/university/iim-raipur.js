import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMRaipur = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive PG Program in Management', fee: 1325000, duration: '2 Years', specializations: 1 },
    { name: 'IIM Online Courses', fee: 1325000, duration: '6 - 24 Months', specializations: 6 },
    { name: 'Online MBA', fee: 1325000, duration: '2 Years', specializations: 1 },
    { name: 'Leadership & Management', fee: 355200, duration: '5 Months', specializations: 2 },
    { name: 'Executive Program In Finance', fee: 70000, duration: '5 Months', specializations: 1 },
    { name: 'Machine Learning using R and Python', fee: 70000, duration: '6 Months', specializations: 1 },
    { name: 'Data Science & Machine Learning', fee: 70000, duration: '6 Months', specializations: 1 },
    { name: 'Executive Program In Marketing', fee: 75000, duration: '5 Months', specializations: 1 },
    { name: 'Executive Program In Operations', fee: 70000, duration: '5 Months', specializations: 1 },
    { name: 'Global Executive PG Program', fee: 1325000, duration: '2 Years', specializations: 1 },
    { name: 'Executive MBA', fee: 1325000, duration: '2 Years', specializations: 1 },
    { name: 'Doctor of Philosophy', fee: 910000, duration: '2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 14th in NIRF 2024 Management Category with exceptional score of 64.40',
    'Triple international accreditation from NIRF, WES, and AACSB ensuring global standards',
    'Awarded ET Cases Award for Social Initiative and Social Entrepreneurship excellence',
    'Established in 2010 as one of India\'s youngest yet most distinguished IIMs',
    'Asia\'s first institution to offer interactive satellite-delivered learning programs',
    'Cutting-edge facilities including modern classrooms, well-stocked library, computer labs',
    'Strategic collaborations with top national and international universities globally',
    'Robust alumni network with graduates in leadership positions across diverse industries'
  ];

  const approvals = ['NIRF', 'WES', 'AACSB'];
  const nirfRank = 'Rank 14';
  const accreditation = 'NIRF, WES, AACSB';

  const placementPartners = [
    'Accenture', 'Amazon', 'Cognizant', 'Deloitte', 'EY', 'HDFC Bank',
    'KPMG', 'PWC', 'Tata Motors', 'TCS', 'Tech Mahindra', 'Wipro'
  ];

  const faqs = [
    {
      question: 'What comprehensive executive programs does IIM Raipur offer?',
      answer: 'IIM Raipur offers an extensive portfolio of executive programs including Executive MBA, Executive PG Program in Management, Online MBA, Global Executive PG Program, Doctor of Philosophy, and specialized certifications in Leadership & Management, Finance, Marketing, Operations, Data Science & Machine Learning, and Machine Learning using R and Python. Additionally, IIM Online Courses provide diverse short-term programs in Business Finance, Leadership & Change Management, General Management, Operations Management with Six Sigma, and Digital Marketing, all designed to deliver transformative learning experiences for accomplished professionals.'
    },
    {
      question: 'What global recognition does IIM Raipur command?',
      answer: 'IIM Raipur holds prestigious triple international accreditation from NIRF, WES, and AACSB, ensuring global recognition and acceptance. Ranked 14th nationally in the NIRF 2024 Management category with an outstanding score of 64.40, the institute has also been awarded the ET Cases Award for Social Initiative/Social Entrepreneurship. Established in 2010, IIM Raipur represents one of India\'s youngest yet most distinguished business schools, pioneering interactive satellite-delivered learning in Asia and maintaining collaborations with premier international management institutes.'
    },
    {
      question: 'What placement success characterizes IIM Raipur graduates?',
      answer: 'IIM Raipur maintains exceptional placement records with the highest CTC offered around INR 46.50 lakhs per annum and average CTC approximately INR 67.64 lakhs per year for 2023. The institute has developed excellent relationships with 300+ renowned corporations across banking, consulting, manufacturing, information technology, e-commerce, and other diverse industries. Alumni consistently experience 50% average salary hikes, 3X increase in interview opportunities, and secure leadership positions in reputable firms globally, reflecting the institute\'s strong industry connections and quality education.'
    },
    {
      question: 'Are IIM Raipur\'s online certifications professionally valuable?',
      answer: 'Absolutely. IIM Raipur\'s online programs are provided via dedicated platforms delivering identical academic rigor and quality as on-campus offerings. The curriculum is designed by skilled teachers with current material and rigorous assessments, offering high-quality learning experiences. Certifications carry the official IIM Raipur seal and prestigious NIRF, WES, and AACSB accreditations, significantly enhancing professional credibility, career advancement prospects, and earning potential. The programs equip learners with knowledge and skills needed to thrive in professional roles while staying current with industry developments.'
    },
    {
      question: 'What makes IIM Raipur\'s learning environment exceptional?',
      answer: 'IIM Raipur provides cutting-edge amenities including modern classrooms, well-stocked library, computer laboratories, auditorium, sports facilities, dormitories, and leisure spaces. The institute emphasizes experiential learning and industry contacts, regularly hosting guest lectures, workshops, seminars, and conferences to expose students to real-world business issues and possibilities. Strategic collaborations with top national and international universities provide global exposure opportunities, while case-based pedagogy and research-driven curriculum ensure comprehensive skill development for contemporary business challenges.'
    },
    {
      question: 'Can working professionals pursue IIM Raipur programs effectively?',
      answer: 'Yes, IIM Raipur\'s online certification programs are specifically designed for working professionals, featuring flexible schedules and sophisticated online learning platforms. Programs provide thorough understanding of management principles, tools, and strategies through core courses, optional specializations, case studies, real-world applications, industry insights, and interactive learning activities. This architecture enables participants to balance demanding professional responsibilities with rigorous academic pursuits, ensuring continuous career momentum while acquiring transformative management education from one of India\'s most respected business schools.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Raipur - Indian Institute of Management Raipur Online | EduConnect</title>
        <meta name="description" content="Explore IIM Raipur's online management programs. Established in 2010, ranked 14th in NIRF 2024. Executive MBA, online MBA, and specialized programs." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Raipur.png" 
                alt="IIM Raipur Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => { e.target.src = '/images/universities/default-university.png'; }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Raipur, Chhattisgarh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(894 Reviews)</span>
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
              <h2>About IIM Raipur</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Raipur represents a distinguished institution established in 2010, emerging as one 
                  of India's youngest yet most prestigious business schools. Located in the capital city of Chhattisgarh, Raipur, IIM 
                  Raipur is dedicated to offering transformational learning experiences that equip students with the skills and knowledge 
                  needed to flourish in today's ever-changing business world. The institute has rapidly established itself among the most 
                  famous IIMs in the country, noted for its challenging academic programs, outstanding faculty, and emphasis on developing 
                  future leaders who can navigate complex contemporary business environments.
                </p>
                <p>
                  Distinguished by its impressive NIRF 2024 ranking of 14th among management institutions with an outstanding score of 
                  64.40, IIM Raipur exemplifies academic excellence and innovative pedagogy. The institute's commitment to superior 
                  education is validated through prestigious triple international accreditation from NIRF, WES, and AACSB, positioning it 
                  among an elite global cohort of business schools. IIM Raipur has been honored with the ET Cases Award for Social 
                  Initiative/Social Entrepreneurship, reflecting its commitment to creating socially responsible business leaders and 
                  contributing positively to society through management education and research.
                </p>
                <p>
                  IIM Raipur pioneered innovative learning methodologies in Asia, becoming the continent's first institution to offer 
                  interactive learning modules to working professionals through sophisticated satellite delivery systems. The institute 
                  provides comprehensive postgraduate and certificate programs including the flagship two-year Post Graduate Program in 
                  Management (PGP), one-year Executive Post Graduate Program in Management (EPGP), and numerous specialized short-term 
                  programs in Business Finance, Leadership & Change Management, General Management, Operations Management with Six Sigma, 
                  Data Science & ML with R & Python, and Digital Marketing.
                </p>
                <p>
                  The institution's highly qualified and experienced faculty consists of renowned academicians, industry experts, and 
                  thought leaders known for their research contributions, industrial skills, and dedication to teaching quality. IIM 
                  Raipur's curriculum emphasizes a combination of academic principles, practical applications, and experiential learning 
                  approaches through case studies, role-plays, simulations, group discussions, and real-world projects. The institute has 
                  cutting-edge facilities including modern classrooms, well-stocked library, computer laboratories, auditorium, sports 
                  facilities, and collaborative spaces. Strategic collaborations with top national and international universities provide 
                  global exposure possibilities, while a robust alumni network with graduates holding positions in reputable firms across 
                  banking, consulting, manufacturing, IT, e-commerce, and more sectors continues to strengthen the IIM Raipur legacy.
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
                  <div className={styles.statNumber}>12</div>
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
                Explore our extensive range of online management programs designed for ambitious professionals
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
                Follow these simple steps to secure your admission at IIM Raipur
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Program Discovery</h3>
                    <p>Navigate the official IIM Raipur website to discover all available certification programs. Examine program specifics, curriculum details, fee structure, duration, and other pertinent information to identify programs aligning with your career objectives.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Initiation</h3>
                    <p>Click the "Enroll Now" button to begin the enrollment process. Complete the applicable application or registration form, including all personal information, contact information, educational background, and professional experience details with meticulous accuracy.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Follow on-screen instructions to pay for the program using available payment methods. EMI options are available through trusted financial partners for candidates requiring flexible payment arrangements to manage program fees effectively.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>ABC & DEB ID Creation</h3>
                    <p>According to latest UGC guidelines, all candidates must create their ABC (Academic Bank of Credits) ID and DEB (Digital Education Board) ID to complete admission formalities and access program resources effectively.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Program Access</h3>
                    <p>Complete the registration by submitting the enrollment form and paying required fees. Receive program access information via email or other communication methods, enabling you to commence your transformative learning journey at IIM Raipur.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university with minimum qualifying percentage</li>
                  <li>Valid ABC ID and DEB ID as per latest UGC guidelines</li>
                  <li>Demonstrated proficiency in English for academic communication</li>
                  <li>Professional experience requirements vary by program type</li>
                  <li>All required documents must be accurate, valid, and properly submitted</li>
                  <li>UGC-approved online programs equivalent to traditional degrees</li>
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
                  <h3>₹67.64L</h3>
                  <p>Average CTC (2023)</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹46.50L</h3>
                  <p>Highest CTC (2023)</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Avg Salary Hike</p>
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
                Find answers to common queries about IIM Raipur programs
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

export default IIMRaipur;

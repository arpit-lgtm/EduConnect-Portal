import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function KalingaPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'AICTE', 'PCI', 'BCI', 'NCTE'];
  const accreditation = 'NAAC A Grade';
  const nirfRank = 'Not Ranked in NIRF';

  const keyHighlights = [
    'NAAC A accredited private university',
    'UGC and AICTE approved engineering programs',
    'State-of-the-art infrastructure and laboratories',
    '100+ industry partnerships for internships',
    'Placement assistance with top companies',
    'Research-oriented curriculum with practical focus',
    'International collaborations with leading universities',
    'Specialized centers of excellence for emerging technologies'
  ];

  const coursesData = [
    { name: 'B.Tech For Working Professionals', specializations: '3', duration: '3 - 3.5 Years', fee: 300000 },
    { name: 'B.Tech Lateral Entry', specializations: '3', duration: '3 - 3.5 Years', fee: 300000 },
    { name: 'Part-Time B.Tech', specializations: '3', duration: '3 - 3.5 Years', fee: 300000 },
    { name: 'B.Tech After Diploma', specializations: '3', duration: '3 - 3.5 Years', fee: 300000 }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Tech Mahindra',
    'Capgemini', 'HCL', 'IBM', 'Amazon', 'Microsoft',
    'L&T', 'Siemens', 'Bosch', 'Mahindra', 'Tata Motors',
    'Reliance', 'Adani', 'Vedanta'
  ];

  const faqs = [
    {
      question: 'What engineering programs does Kalinga University offer?',
      answer: 'Kalinga University offers comprehensive engineering programs at undergraduate and postgraduate levels. B.Tech programs include Computer Science, Mechanical, Civil, Electrical & Electronics, and Electronics & Communication. M.Tech specializations include Computer Science, VLSI Design, and Structural Engineering with various specialization options.'
    },
    {
      question: 'Is Kalinga University AICTE approved?',
      answer: 'Yes, Kalinga University is approved by AICTE (All India Council for Technical Education) and UGC. The university has NAAC A grade accreditation, ensuring that all engineering programs meet national quality standards and are recognized for higher education and employment.'
    },
    {
      question: 'What is the placement record at Kalinga University?',
      answer: 'Kalinga University has a strong placement record with 80%+ placement rate. The average package ranges from ₹3.5 to ₹6 LPA with highest packages going up to ₹12 LPA. The university has partnerships with over 100 companies including TCS, Infosys, Wipro, Amazon, and other leading organizations.'
    },
    {
      question: 'What facilities are available for engineering students?',
      answer: 'Kalinga University provides state-of-the-art facilities including modern laboratories, research centers, digital library with 50,000+ resources, high-speed internet, innovation hubs, incubation centers, sports facilities, and comfortable hostel accommodation. The campus is equipped with latest technology for practical learning.'
    },
    {
      question: 'Does Kalinga University offer scholarships?',
      answer: 'Yes, Kalinga University offers merit-based scholarships ranging from 10% to 50% fee waiver for deserving students. Scholarships are awarded based on JEE Main scores, 12th board marks, and university entrance exam performance. Special scholarships are also available for economically weaker sections.'
    },
    {
      question: 'What is the admission process for engineering programs?',
      answer: 'Admission to B.Tech programs is based on JEE Main scores or university entrance exam. Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with minimum 50% marks. For M.Tech, a B.Tech degree with minimum 55% is required along with GATE score or university entrance exam.'
    }
  ];

  return (
    <>
      <Head>
        <title>Kalinga University Engineering | AICTE Approved B.Tech & M.Tech Programs | MBA NINJA</title>
        <meta name="description" content="Kalinga University Engineering - AICTE & UGC approved B.Tech, M.Tech programs. NAAC A Grade. 80%+ placement rate. Top packages up to ₹12 LPA. Modern infrastructure & research facilities." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Kalinga University.png" 
                alt="Kalinga University Logo"
                className={styles.universityLogoLarge}
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
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.2/5</span>
                    <span className={styles.reviews}>(203 Reviews)</span>
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
              <h2>About Kalinga University Engineering</h2>
              <div className={styles.aboutContent}>
                <p>
                  Kalinga University, established in 2013, is a private university located in Raipur, Chhattisgarh. The university has quickly established itself as a premier institution for engineering education, offering industry-aligned programs with a strong focus on practical learning and research. With NAAC A grade accreditation and approvals from UGC and AICTE, Kalinga ensures world-class engineering education.
                </p>
                <p>
                  The Faculty of Engineering at Kalinga University is equipped with state-of-the-art laboratories, modern classrooms, and dedicated research centers. The university follows an outcome-based education model that emphasizes hands-on learning, project-based assignments, and industry internships. This approach ensures that students are job-ready and equipped with skills demanded by modern industries.
                </p>
                <p>
                  Kalinga University has established strong industry partnerships with leading companies across IT, manufacturing, construction, and electronics sectors. These collaborations provide students with opportunities for internships, live projects, industry visits, and campus placements. The university's placement cell works year-round to connect students with top recruiters.
                </p>
                <p>
                  With a focus on emerging technologies like Artificial Intelligence, Machine Learning, IoT, Robotics, and Sustainable Engineering, Kalinga prepares students for future challenges. The university also encourages entrepreneurship through its incubation center, where students can develop and launch their innovative ideas with mentorship and funding support.
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
                  <div className={styles.statNumber}>80%+</div>
                  <div className={styles.statLabel}>Placement Rate</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>₹12 LPA</div>
                  <div className={styles.statLabel}>Highest Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Industry Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Research Labs</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of AICTE approved engineering programs
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
                <strong>Note:</strong> EMI options available starting at ₹15,000/semester. Scholarships up to 50% available for meritorious students. Flexible payment plans to support your education journey.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these steps to secure your admission to engineering programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Register Online</h3>
                    <p>Visit Kalinga University's official website and complete the online registration with your basic details and contact information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Complete the detailed application form with academic history, program preferences, and personal information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Documents</h3>
                    <p>Upload required documents including mark sheets, ID proof, photographs, and JEE Main scorecard (if applicable).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Exam / JEE Main</h3>
                    <p>Appear for university entrance exam or submit valid JEE Main scores for admission consideration.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Counseling & Selection</h3>
                    <p>Attend online/offline counseling session. Seats are allotted based on merit and program availability.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Enrollment</h3>
                    <p>Pay the admission fee to confirm your seat. Complete enrollment formalities and receive your student ID.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Tech Programs:</strong> 10+2 with Physics, Chemistry, Mathematics with minimum 50% marks (45% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> B.Tech/B.E. degree in relevant discipline with minimum 55% marks (50% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Entrance Exam:</strong> Valid JEE Main score or university entrance exam required for B.Tech admission</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>GATE Score:</strong> Valid GATE score preferred for M.Tech admission (not mandatory)</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions open for July 2025 session</li>
                  <li>Lateral entry available for diploma holders in B.Tech programs</li>
                  <li>Merit-based scholarships up to 50% fee waiver available</li>
                  <li>Original documents verification required at time of admission</li>
                  <li>Hostel accommodation available on first-come-first-serve basis</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Comprehensive placement assistance ensuring bright career opportunities
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>80%+</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹12 LPA</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹4.5 LPA</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>500+</h3>
                  <p>Annual Placements</p>
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
                Find answers to common queries about Kalinga University engineering programs
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
}

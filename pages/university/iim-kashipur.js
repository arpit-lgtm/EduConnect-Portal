import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMKashipur = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive Programs In Finance', fee: 70000, duration: '5 Months', specializations: 2 },
    { name: 'Operations Management', fee: 70000, duration: '6 Months', specializations: 3 },
    { name: 'Leadership & Management', fee: 70000, duration: '5 Months', specializations: 1 },
    { name: 'IIM Online Courses', fee: 70000, duration: '6 - 24 Months', specializations: 8 },
    { name: 'HR', fee: 70000, duration: '5 Months', specializations: 2 },
    { name: 'Marketing', fee: 60000, duration: '5 Months', specializations: 2 },
    { name: 'AI and Machine Learning', fee: 160000, duration: '12 Months', specializations: 1 },
    { name: 'Executive MBA', fee: 1150000, duration: '2 Years', specializations: 1 },
    { name: 'Online Ph.D', fee: 1080000, duration: '3 Years', specializations: 1 },
    { name: 'Online MBA', fee: 1200000, duration: '2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'One of India\'s 20 prestigious IIMs renowned for management excellence',
    'NIRF 2024 Ranking 23rd - Consistent academic performance',
    'Triple accreditation from AACSB, EQUIS, and WES for global recognition',
    '42 international collaborations with premier global institutions',
    'Outstanding placement record with packages up to ₹46.50 LPA',
    '200+ recruiting partners across diverse industries',
    'Cutting-edge infrastructure with modern facilities and resources',
    'Industry-aligned curriculum with case studies and live projects'
  ];

  const approvals = ['NIRF', 'WES', 'AACSB', 'EQUIS'];
  const nirfRank = 'Rank 23';
  const accreditation = 'AACSB, EQUIS, WES';

  const placementPartners = [
    'ICICI Bank', 'Amazon', 'EY', 'IBM', 'KPMG', 'PwC',
    'Tata', 'Wipro', 'HSBC', 'Deloitte', 'Accenture', 'Microsoft'
  ];

  const faqs = [
    {
      question: 'How long does the online certificate program offered by IIM Kashipur last?',
      answer: 'Executive certificate programs at IIM Kashipur typically range from 5 to 12 months, depending on the specialization. The IIM Online Courses program offers exceptional flexibility with durations spanning 6 to 24 months, allowing professionals to customize their learning journey.'
    },
    {
      question: 'What are the requirements for enrolling in the online certificate program?',
      answer: 'Requirements typically include a bachelor\'s degree from a recognized university, relevant work experience for executive programs, valid entrance exam scores (CAT/GMAT/EMAT), and demonstrated proficiency in English. Specific requirements vary by program.'
    },
    {
      question: 'How does the online certificate program work?',
      answer: 'Programs feature comprehensive online learning through digital platforms with interactive sessions, case studies, and live projects. The flexible format accommodates working professionals while maintaining IIM Kashipur\'s rigorous academic standards.'
    },
    {
      question: 'What is the method of evaluation for the online certificate program?',
      answer: 'Comprehensive evaluation encompasses online examinations, case study analyses, capstone projects, peer discussions, and practical assignments. This holistic assessment framework ensures demonstration of both theoretical understanding and practical application capabilities.'
    },
    {
      question: 'What kind of certification do you get after finishing the online certificate program?',
      answer: 'IIM Kashipur\'s online programs carry prestigious accreditations from AACSB, EQUIS, and WES, ensuring global recognition. Certificates bear the official IIM Kashipur seal and are equivalent to on-campus credentials, enhancing professional credibility worldwide.'
    },
    {
      question: 'Can I pursue these programs while maintaining full-time employment?',
      answer: 'Yes, IIM Kashipur\'s online programs are specifically designed for working professionals, featuring flexible schedules, weekend sessions, and self-paced learning modules that enable participants to balance professional responsibilities with academic pursuits effectively.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Kashipur - Indian Institute of Management Kashipur Online | EduConnect</title>
        <meta name="description" content="Explore IIM Kashipur's online management programs. Established in 2011, ranked 23rd in NIRF 2024. Executive MBA, online certificates, and specialized programs." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Kashipur.png" 
                alt="IIM Kashipur Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => { e.target.src = '/images/universities/default-university.png'; }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Kashipur, Uttarakhand</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(876 Reviews)</span>
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
              <h2>About IIM Kashipur</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Kashipur represents a distinguished institution established through governmental collaboration in 2011, 
                  rapidly ascending among India's premier management education centers. Nestled in the picturesque town of Kashipur, Uttarakhand, 
                  IIM Kashipur has emerged as a beacon of excellence, delivering transformative management education that shapes future business leaders 
                  and visionary entrepreneurs.
                </p>
                <p>
                  Distinguished by its NIRF 2024 ranking of 23rd among management institutions, IIM Kashipur has cultivated a reputation for academic 
                  rigor and innovative pedagogy. The institute's commitment to excellence is reflected through prestigious accreditations from AACSB, 
                  EQUIS, and WES, positioning it among an elite group of globally recognized business schools that deliver world-class management education.
                </p>
                <p>
                  IIM Kashipur's philosophy centers on creating a conducive learning ecosystem that nurtures holistic development. The institute 
                  combines cutting-edge curriculum with experiential learning methodologies, ensuring that students acquire not merely theoretical 
                  knowledge but develop practical competencies essential for navigating the complexities of modern business landscapes.
                </p>
                <p>
                  The institution's faculty comprises accomplished scholars and industry veterans who bring extensive expertise across finance, 
                  marketing, operations, human resources, analytics, and strategic management. This distinguished faculty ensures that students receive 
                  mentorship that transcends traditional classroom boundaries, fostering critical thinking, innovation, and ethical leadership qualities 
                  that define successful management professionals in today's dynamic global economy.
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
                  <div className={styles.statNumber}>₹46.50 LPA</div>
                  <div className={styles.statLabel}>Highest Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>200+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>₹16.29 LPA</div>
                  <div className={styles.statLabel}>Average Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>42</div>
                  <div className={styles.statLabel}>Global Partnerships</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our diverse range of online management programs designed to advance your career
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
                Flexible payment plans to support your educational investment.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at IIM Kashipur
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Verification</h3>
                    <p>Review program-specific eligibility criteria on the official IIM Kashipur portal. Ensure you meet academic qualifications, professional experience, and other prerequisites.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>Appear for CAT, GMAT, or Executive Management Aptitude Test (EMAT). Score competitively to qualify for the next stage of selection.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Complete the online application form with accurate details. Upload required documents including transcripts, resume, SOP, and recommendation letters.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Personal Interview</h3>
                    <p>Shortlisted candidates participate in rigorous personal interviews via video conferencing. Demonstrate communication skills, leadership potential, and career objectives.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Selection and Enrollment</h3>
                    <p>Final selection based on comprehensive evaluation. Receive offer letter and complete enrollment formalities including fee payment within stipulated timelines.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university with minimum qualifying percentage</li>
                  <li>Relevant work experience required for executive programs</li>
                  <li>Valid CAT/GMAT/EMAT scores meeting program-specific cutoffs</li>
                  <li>Proficiency in English for effective academic communication</li>
                  <li>Strong academic record reflecting consistent performance</li>
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
                  <h3>₹16.29 LPA</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹15.40 LPA</h3>
                  <p>Median Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹46.50 LPA</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>200+</h3>
                  <p>Recruiting Partners</p>
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
                Find answers to common queries about IIM Kashipur programs
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

export default IIMKashipur;

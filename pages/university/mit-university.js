import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const MITUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online MBA', fee: 280000, duration: '2 Years', specializations: 10 },
    { name: 'Online Executive MBA', fee: 320000, duration: '18 Months', specializations: 6 },
    { name: 'Online MCA', fee: 210000, duration: '2 Years', specializations: 5 },
    { name: 'Online BBA', fee: 165000, duration: '3 Years', specializations: 8 },
    { name: 'Online BCA', fee: 175000, duration: '3 Years', specializations: 6 },
    { name: 'Online M.Tech', fee: 250000, duration: '2 Years', specializations: 4 },
    { name: 'Online B.Tech', fee: 200000, duration: '4 Years', specializations: 5 },
    { name: 'Online M.Sc', fee: 180000, duration: '2 Years', specializations: 6 },
  ];

  const keyHighlights = [
    'UGC-DEB and AICTE approved for premier online education delivery',
    'Strong emphasis on technology and innovation-driven learning',
    'Industry-aligned curriculum developed with corporate partners',
    'State-of-the-art virtual labs for practical skill development',
    'Experienced faculty from leading technology institutions',
    'Comprehensive placement support with tech-focused companies',
    'Flexible learning schedules with live and recorded sessions',
    'Advanced Learning Management System with AI-powered features'
  ];

  const approvals = ['UGC-DEB', 'AICTE', 'NAAC A'];
  const nirfRank = 'Not Ranked';
  const accreditation = 'NAAC A';

  const placementPartners = [
    'Microsoft', 'Google', 'Amazon', 'IBM', 'Infosys', 
    'Wipro', 'TCS', 'Cognizant', 'Accenture', 'Capgemini', 'Oracle', 'SAP'
  ];

  const faqs = [
    {
      question: 'Is MIT University online degree UGC approved?',
      answer: 'Yes, MIT University online programs are fully approved by UGC-DEB and AICTE. The online degrees are equivalent to regular on-campus degrees and recognized nationwide for employment in public and private sectors as well as for higher education.'
    },
    {
      question: 'What makes MIT University programs unique?',
      answer: 'MIT University offers technology-focused education with industry-aligned curriculum, virtual labs for hands-on experience, AI-powered learning platforms, strong placement support with tech giants, and faculty from leading institutions bringing real-world expertise to online classrooms.'
    },
    {
      question: 'Are practical labs available for online students?',
      answer: 'Yes, MIT provides access to state-of-the-art virtual labs enabling online students to gain practical experience in programming, data science, cloud computing, and other technical domains. These labs simulate real-world scenarios for comprehensive skill development.'
    },
    {
      question: 'What career support services are provided?',
      answer: 'MIT offers dedicated placement cell for online students, industry mentorship programs, resume building workshops, mock interviews, job portal access, partnerships with 100+ tech companies, and career counseling ensuring graduates secure rewarding positions.'
    },
    {
      question: 'Can I pursue MIT programs while working?',
      answer: 'Absolutely. MIT online programs are designed for working professionals with flexible schedules, weekend live classes, self-paced learning modules, recorded lectures available 24/7, and mobile-friendly platforms allowing seamless balance between work and education.'
    },
    {
      question: 'What specializations are available in MBA?',
      answer: 'MIT offers 10+ MBA specializations including Technology Management, Digital Marketing, Data Analytics, Finance, Human Resource Management, Operations, Information Systems, Innovation Management, Entrepreneurship, and Strategic Management catering to diverse career aspirations.'
    }
  ];

  return (
    <>
      <Head>
        <title>MIT University Online - Technology-Focused MBA MCA Degrees | EduConnect</title>
        <meta name="description" content="Join MIT University for UGC-approved online MBA, MCA, BCA programs. AICTE approved, technology-driven education with strong placement support." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/MIT University.png" 
                alt="MIT University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Pune, Maharashtra</span>
                </div>

                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.4/5</span>
                    <span className={styles.reviews}>(425 Reviews)</span>
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

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {['about', 'courses', 'admissions', 'placements', 'faqs'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About MIT University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  MIT University stands as a beacon of technology-driven education, merging academic excellence with 
                  innovative pedagogy to prepare students for the rapidly evolving digital economy. The institution's 
                  commitment to fostering technical competence, critical thinking, and entrepreneurial mindset positions 
                  graduates at the forefront of their respective industries.
                </p>
                <p>
                  The Online Learning Division extends MIT's educational philosophy to learners nationwide through 
                  cutting-edge digital platforms featuring AI-powered personalization, virtual laboratories, interactive 
                  content, and real-time faculty engagement. With UGC-DEB and AICTE approval, programs maintain the same 
                  rigorous standards as on-campus offerings while providing the flexibility modern learners require.
                </p>
                <p>
                  What distinguishes MIT is its industry-centric approach - curriculum designed in collaboration with 
                  leading technology companies, guest lectures from industry pioneers, live projects on emerging technologies, 
                  and placement partnerships with global tech giants. Students gain not just theoretical knowledge but 
                  practical skills immediately applicable in professional settings.
                </p>
                <p>
                  MIT's comprehensive support ecosystem includes dedicated mentors, 24/7 technical helpdesk, extensive 
                  digital resources, career counseling, and continuous skill enhancement programs. The university's emphasis 
                  on innovation, quality, and student success creates an environment where ambitious learners transform 
                  into accomplished professionals ready to shape the future through technology and leadership.
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
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Tech Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NAAC A</div>
                  <div className={styles.statLabel}>Accreditation</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>₹9L</div>
                  <div className={styles.statLabel}>Highest Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Virtual Labs</div>
                  <div className={styles.statLabel}>Practical Learning</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Technology-focused programs preparing students for digital economy
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
                <strong>Industry-Ready Curriculum:</strong> All programs include virtual labs, live projects, and industry certifications for comprehensive skill development.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Streamlined enrollment for technology enthusiasts and professionals
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Create account on MIT University portal using valid email and mobile number for secure access.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Program Selection</h3>
                    <p>Choose desired program and specialization after reviewing curriculum, career outcomes, and requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification</h3>
                    <p>Upload required academic certificates, ID proofs, and photographs ensuring clarity and authenticity.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Processing</h3>
                    <p>Complete payment through secure gateway with options for full payment or installment plans as applicable.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Confirmation</h3>
                    <p>Receive admission confirmation with LMS credentials, orientation schedule, and welcome kit details.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Essential Information</h3>
                <ul>
                  <li>Rolling admissions throughout the year</li>
                  <li>Eligibility: 10+2 for UG, Bachelor's degree for PG programs</li>
                  <li>No entrance examination for most programs</li>
                  <li>Orientation program for online learning tools</li>
                  <li>Scholarship opportunities for meritorious students</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Acceleration Services</h2>
              <p className={styles.sectionDesc}>
                Strategic placement support connecting talent with leading technology firms
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹5.5L</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹9L</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100+</h3>
                  <p>Tech Companies</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>85%</h3>
                  <p>Placement Rate</p>
                </div>
              </div>

              <h3>Recruitment Partners</h3>
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
                Common queries about MIT University online programs answered
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
                <h3>Ready to Start Your Journey?</h3>
                <p>Connect with our admission counselors for personalized guidance</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Get Started Today</button>
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

export default MITUniversity;

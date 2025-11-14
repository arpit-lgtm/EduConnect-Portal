import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITMadras = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Certificate Program in Programming & Data Science', fee: 165000, duration: '5 Months', specializations: 8 },
    { name: 'Pravartak\'s Data Analytics in Retail & E-commerce', fee: 160000, duration: '6 Months', specializations: 4 },
    { name: 'PhD Program', fee: 230000, duration: '3 Years', specializations: 15 },
    { name: 'M.Tech Program', fee: 246000, duration: '2 Years', specializations: 20 },
    { name: 'Part-Time PhD Program', fee: 93000, duration: '5 Years', specializations: 12 }
  ];

  const keyHighlights = [
    'Ranked 1st in NIRF 2024 Engineering Category (Score: 89.46)',
    'Established in 1959 - Second IIT of India',
    'World-renowned institution with global collaborations',
    'Research excellence in AI, robotics, and nanotechnology',
    'NAAC A Grade accredited institution',
    'Over 100+ undergraduate and postgraduate programs',
    'Multiple departments across engineering, sciences, management, and humanities',
    'State-of-the-art research facilities and innovation centers',
    'Strong industry partnerships for placements and internships',
    'Online programs through Center for Outreach & Digital Education'
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Microsoft', 'Goldman Sachs', 'Facebook',
    'IBM', 'Deloitte', 'McKinsey', 'BCG', 'Accenture',
    'TCS', 'Infosys', 'Wipro', 'HCL', 'Oracle',
    'SAP', 'Adobe', 'Flipkart', 'L&T', 'JP Morgan', 'Intel'
  ];

  const faqs = [
    {
      question: 'Are IIT Madras online programs recognized?',
      answer: 'Yes, all online programs from IIT Madras are fully recognized and carry the same institutional credibility as on-campus courses. These programs maintain equivalent academic standards and are valued globally by employers and educational institutions.'
    },
    {
      question: 'What programs does IIT Madras offer in online mode?',
      answer: 'IIT Madras offers various online programs including BS Degree in Data Science and Applications, Certificate Programs in Programming, Data Science, AI/ML, Data Analytics, and Executive Development Programs. These are delivered through the Center for Outreach & Digital Education.'
    },
    {
      question: 'What is the admission process for IIT Madras programs?',
      answer: 'Admission varies by program. For undergraduate programs, JEE Advanced is required. For M.Tech, valid GATE scores are mandatory. PhD admissions require NET/GATE qualification plus research aptitude. Online programs have specific eligibility criteria and application procedures through dedicated portals.'
    },
    {
      question: 'Does IIT Madras provide placement assistance?',
      answer: 'Yes, IIT Madras offers comprehensive placement support through its Career Development Center. The institute maintains strong industry connections with 300+ hiring partners, achieving excellent placement records with competitive compensation packages and international opportunities.'
    },
    {
      question: 'Are online degrees from IIT Madras equivalent to regular degrees?',
      answer: 'Yes, as per UGC regulations, degrees obtained through online mode are equivalent to traditional degrees. IIT Madras online programs maintain the same academic rigor, faculty expertise, and assessment standards as on-campus programs.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Madras - India's #1 Engineering Institute | NIRF Rank 1</title>
        <meta name="description" content="IIT Madras - Ranked 1st in NIRF 2024 Engineering. Offering M.Tech, PhD, and online programs with world-class research facilities and global recognition." />
        <meta name="keywords" content="IIT Madras, IITM, engineering college, online courses, M.Tech, PhD, NIRF ranking" />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Madras.png" 
                alt="IIT Madras Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Chennai, Tamil Nadu</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.3/5</span>
                    <span className={styles.reviews}>(356 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'NAAC A', 'AICTE'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 1 (Engineering 2024)</span>
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
              <h2>About IIT Madras</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Madras, established in 1959 as the second IIT of India through an Indo-German Agreement inaugurated by Prof. Humayun Kabir, stands as India's premier engineering institution, consistently ranking first in the NIRF Engineering Category. Located in Chennai, Tamil Nadu, IIT Madras has achieved remarkable excellence in technical education, cutting-edge research, and innovation, earning global recognition and producing distinguished alumni who have made significant contributions to technology, entrepreneurship, academia, and public service worldwide.
                </p>
                <p>
                  IIT Madras encompasses multiple departments delivering comprehensive educational programs spanning undergraduate B.Tech programs, dual-degree integrated programs, specialized M.Tech and M.Sc programs, professional MBA courses, and rigorous PhD programs across engineering, sciences, humanities, and management disciplines. The institute offers over 100 programs including innovative interdisciplinary courses aligned with contemporary technological advancements. The Center for Outreach & Digital Education extends IIT Madras's educational reach through online programs including the BS Degree in Data Science and Applications, certificate courses in programming, data science, AI/ML, and executive development programs designed for working professionals.
                </p>
                <p>
                  Research excellence constitutes a cornerstone of IIT Madras's institutional mission, evidenced by state-of-the-art research facilities, advanced laboratories, sophisticated instrumentation centers, and prolific publication records in prestigious international journals. The institute has established centers of excellence in artificial intelligence, robotics, nanotechnology, sustainable energy, advanced materials, biomedical engineering, and numerous other frontier areas attracting substantial research funding from governmental agencies, industry collaborations, and international partnerships. Faculty members at IIT Madras include recipients of prestigious national and international awards, demonstrating exceptional scholarly contributions and global research impact.
                </p>
                <p>
                  IIT Madras maintains strong commitment to bridging academia-industry gaps through comprehensive placement support, entrepreneurship initiatives, and robust alumni networks facilitating exceptional professional opportunities for graduates. The institute achieves outstanding placement records with leading national and international companies offering highly competitive compensation packages, including international placements exceeding ₹45 lakhs annually. The extensive alumni network, comprising accomplished professionals in leadership positions across technology companies, consulting firms, financial institutions, research organizations, and entrepreneurial ventures worldwide, actively contributes to IIT Madras's legacy through mentorship, recruitment, philanthropy, and collaborative initiatives.
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
                IIT Madras employs rigorous selection methodologies ensuring admission of exceptionally talented candidates through nationally recognized entrance examinations.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>Appear for relevant national-level entrance examinations such as JEE Advanced for B.Tech programs, GATE for M.Tech admissions, IIT JAM for M.Sc programs, CAT for MBA, and qualifying examinations like UGC-NET, GATE, or CSIR-NET for PhD programs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Submit your application through the official IIT Madras admission portal or relevant centralized platforms. Provide accurate personal information, academic credentials, entrance examination scores, and upload required documents including mark sheets, certificates, and identification proofs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Counseling & Selection</h3>
                    <p>Based on entrance examination performance, participate in centralized counseling processes such as JoSAA for B.Tech or departmental selection procedures for postgraduate programs. Exercise program and specialization choices according to merit rank and seat availability.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification & Enrollment</h3>
                    <p>Complete document verification by submitting original certificates for verification. Pay requisite fees and complete medical examination requirements. Finalize enrollment formalities to confirm admission at IIT Madras.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> Bachelor's degree in Engineering/Technology with minimum 60% marks (55% for SC/ST/PwD). Valid GATE score required for admission consideration</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree with minimum 60% marks (55% for SC/ST/PwD). Valid NET/GATE/CSIR qualification or equivalent. Research aptitude and academic excellence required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Programs:</strong> Varies by program. Online B.Sc Data Science requires 10+2. Certificate programs have flexible entry requirements. ABC ID creation mandatory as per UGC regulations</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                IIT Madras maintains exceptional placement records with comprehensive career development support and industry partnerships.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹45L+</h3>
                  <p>Highest International Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
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
                Find answers to common questions about IIT Madras programs and admissions
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

export default IITMadras;

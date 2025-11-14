import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITKharagpur = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'PhD Program', fee: 15000, duration: '3 Years', specializations: 23 },
    { name: 'M.Tech Program', fee: 100000, duration: '2 Years', specializations: 67 }
  ];

  const keyHighlights = [
    'Ranked 6th in NIRF 2023 Engineering Category',
    'Established in 1951 - First IIT of India',
    'Oldest technical institute in Asia (founded 1847)',
    'Located across 2100 acres in Kharagpur, West Bengal',
    '23 academic departments with 67+ programs',
    'Over 15+ B.Tech programs available',
    'Research-oriented with cutting-edge technology',
    'Approved by Ministry of HRD and accredited by NBA & AICTE',
    'Online and distance learning programs for working professionals',
    'Advanced facilities in AI, robotics, nanotechnology, biotechnology'
  ];

  const placementPartners = [
    'Google', 'Accenture', 'Amazon', 'BCG', 'Deloitte',
    'HCL', 'KPMG', 'Dell', 'JP Morgan', 'Microsoft',
    'IBM', 'Infosys', 'TCS', 'Wipro', 'Oracle',
    'SAP', 'Adobe', 'Flipkart', 'Goldman Sachs', 'L&T', 'Hindustan'
  ];

  const faqs = [
    {
      question: 'Are the online courses offered by IIT Kharagpur valid?',
      answer: 'Yes, all online programs from IIT Kharagpur are completely valid and hold the same institutional credibility as on-campus courses. These programs maintain equivalent academic rigor and are recognized globally by employers and educational institutions.'
    },
    {
      question: 'What courses are offered at IIT Kharagpur?',
      answer: 'IIT Kharagpur offers B.Tech, B.Arch, Dual Degree Programs, M.Tech, M.Sc, MBA, PhD programs, and various online certification courses. Popular areas include Computer Science, Electrical Engineering, Mechanical Engineering, Civil Engineering, Chemical Engineering, and more.'
    },
    {
      question: 'What disciplines are offered at IIT Kharagpur?',
      answer: 'The institute has 23 academic departments including Engineering & Architecture, Interdisciplinary Sciences & Engineering, Humanities & Social Sciences, Management Studies, Law, Sciences, Rural Development, and Biotechnology & Biosciences offering comprehensive educational programs.'
    },
    {
      question: 'Does IIT Kharagpur offer online programs?',
      answer: 'Yes, IIT Kharagpur provides online programs through various platforms including SWAYAM, NPTEL, and the Center for Continuing Education. These include certificate courses, diploma programs, and micro-specialization courses designed for working professionals with flexible schedules.'
    },
    {
      question: 'Do I need to visit campus for exams in online courses?',
      answer: 'No, online programs at IIT Kharagpur utilize remote proctored examination systems. All study materials, lectures, and assessments are available online through secure Learning Management Systems, eliminating the need for campus visits while maintaining academic integrity.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Kharagpur - India's First IIT | Ranked 6th NIRF 2023</title>
        <meta name="description" content="IIT Kharagpur - India's first IIT established in 1951. Ranked 6th in NIRF 2023 Engineering Category. 23 departments offering 67+ programs with world-class research facilities." />
        <meta name="keywords" content="IIT Kharagpur, IIT KGP, engineering college, online courses, PhD, M.Tech, NIRF ranking" />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Kharagpur.png" 
                alt="IIT Kharagpur Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Kharagpur, West Bengal</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.4/5</span>
                    <span className={styles.reviews}>(331 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'AICTE', 'NBA', 'NAAC A'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 6 (Engineering 2023)</span>
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
              <h2>About IIT Kharagpur</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Kharagpur, established in 1951, holds the distinguished honor of being India's first IIT and Asia's oldest technical institution, originally founded in 1847 as the Bengal Engineering College. Located on a sprawling 2100-acre campus in Kharagpur, West Bengal, IIT Kharagpur has pioneered technical education and research excellence in India for over seven decades, producing distinguished alumni who have contributed significantly to global technological advancement, entrepreneurship, and leadership across diverse sectors.
                </p>
                <p>
                  IIT Kharagpur encompasses 23 academic departments delivering comprehensive educational programs spanning engineering, architecture, planning, sciences, humanities, social sciences, management, and law. The institute offers over 15 undergraduate B.Tech programs, multiple dual-degree programs, specialized M.Tech and M.Sc programs, professional MBA courses, and rigorous PhD programs across all departments. This diverse academic portfolio ensures students access to cutting-edge knowledge, interdisciplinary learning opportunities, and specialized skill development aligned with contemporary industry requirements and emerging technological domains.
                </p>
                <p>
                  Research excellence constitutes a fundamental pillar of IIT Kharagpur's institutional mission, evidenced by advanced research facilities, state-of-the-art laboratories, sophisticated instrumentation centers, and prolific publication records in prestigious international journals. The institute has established centers of excellence in artificial intelligence, robotics, nanotechnology, biotechnology, sustainable energy, advanced materials, and numerous other frontier areas attracting substantial research funding from governmental agencies, industry collaborations, and international partnerships. Faculty members at IIT Kharagpur include recipients of prestigious national and international awards, demonstrating exceptional scholarly contributions and research impact.
                </p>
                <p>
                  IIT Kharagpur demonstrates strong commitment to bridging academia-industry gaps through comprehensive placement support, entrepreneurship initiatives, and robust alumni networks facilitating exceptional professional opportunities for graduates. The institute maintains excellent placement records with leading national and international companies participating in campus recruitment drives offering highly competitive compensation packages. The extensive alumni network, comprising accomplished professionals occupying leadership positions in technology companies, consulting firms, financial institutions, research organizations, and entrepreneurial ventures worldwide, consistently contributes to IIT Kharagpur's legacy while maintaining strong engagement with current students. The online and distance learning programs extend IIT Kharagpur's educational reach to working professionals seeking skill enhancement without career interruptions, thereby democratizing access to premium technical education.
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
                IIT Kharagpur employs rigorous selection methodologies ensuring admission of exceptionally talented candidates through nationally recognized entrance examinations and comprehensive evaluation frameworks.
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
                    <p>Submit your application through the official IIT Kharagpur admission portal within specified deadlines. Provide accurate personal information, academic credentials, entrance examination scores, and upload required documents including mark sheets, certificates, identification proofs, and category certificates if applicable.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Counseling & Selection</h3>
                    <p>Based on entrance examination performance and program availability, participate in centralized counseling processes such as JoSAA for B.Tech, CCMT for dual degree, or departmental selection procedures for postgraduate programs. Exercise program and specialization choices according to merit rank and seat availability.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification & Enrollment</h3>
                    <p>Complete document verification by submitting original certificates for verification. Pay requisite fees including admission fees, semester fees, hostel charges, and security deposits. Complete medical examination requirements and finalize enrollment formalities to confirm admission.</p>
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
                  <span><strong>PhD Programs:</strong> Master's degree with minimum 60% marks (55% for SC/ST/PwD). Valid NET/GATE/CSIR qualification or equivalent. Demonstrated research aptitude and academic excellence</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Programs:</strong> Basic eligibility varies by program. ABC ID creation mandatory as per UGC regulations. Working professionals encouraged to apply</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                IIT Kharagpur maintains exceptional placement records with comprehensive career development support and industry partnerships.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>95%+</h3>
                  <p>Placement Success</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹2.15 Cr</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹1.3 Cr</h3>
                  <p>Average CTC Range</p>
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
                Find answers to common questions about IIT Kharagpur programs and admissions
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

export default IITKharagpur;

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const AndhraUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  // University data
  const approvals = ['UGC', 'NAAC A', 'NIRF'];
  const nirfRank = '#25 Best University in India (NIRF 2024)';
  const accreditation = 'NAAC A Grade';
  
  const keyHighlights = [
    'Established 97 years ago in 1926 under the Madras Act, one of India\'s oldest educational institutions',
    'Ranked 25th Best University in India by National Institutional Ranking Framework (NIRF) 2024',
    'Accredited with A Grade by National Assessment and Accreditation Council (NAAC)',
    'University Grants Commission (UGC) approved for online degree programs delivery',
    'Proprietary Learning Management System (LMS) supporting comprehensive online education journey',
    'Industry-connected mentorship providing valuable insights from experienced professionals',
    'Accessible study materials including e-books, guides, and recorded lectures available 24/7',
    'Designed for working professionals enabling career advancement without career interruption'
  ];

  const programs = [
    {
      name: 'Online Master of Business Administration Plus (MBA Plus)',
      duration: '2 Years',
      fees: '₹87,200',
      specializations: 6
    },
    {
      name: 'Online Master of Business Administration (MBA)',
      duration: '2 Years', 
      fees: '₹62,200',
      specializations: 4
    },
    {
      name: 'Online Bachelor of Commerce (B.Com)',
      duration: '3 Years',
      fees: '₹60,000',
      specializations: 1
    },
    {
      name: 'Online Master of Computer Applications (MCA)',
      duration: '2 Years',
      fees: '₹76,200',
      specializations: 1
    },
    {
      name: 'Online Master of Arts (MA)',
      duration: '2 Years',
      fees: '₹57,500',
      specializations: 2
    }
  ];

  const placementPartners = [
    'ICICI Bank', 'Amazon', 'IBM', 'Infosys', 'Microsoft',
    'Reliance', 'Genpact', 'Apple', 'TCS', 'Wipro'
  ];

  const faqs = [
    {
      question: "What constitutes the enrollment methodology for Andhra University digital learning programs?",
      answer: "The registration process functions entirely through online channels. Access the university's official portal, initiate enrollment procedures, complete application documentation with mobile verification, submit required academic credentials, and execute payment transactions through secure gateways."
    },
    {
      question: "Do Andhra University online qualifications possess UGC validation and legal recognition?",
      answer: "Absolutely, all digital degree offerings from Andhra University maintain complete UGC authorization and possess identical legitimacy as traditional campus-based qualifications. The institution holds NAAC A accreditation and AICTE recognition for technical disciplines."
    },
    {
      question: "What financial structure applies to Andhra University online academic programs?",
      answer: "Cost framework differs by program selection: MBA Plus (₹87,200), MBA (₹62,200), B.Com (₹60,000), MCA (₹76,200), MA (₹57,500). Payment flexibility includes semester-based installments and EMI arrangements through educational financing partnerships."
    },
    {
      question: "What career development assistance does Andhra University extend to digital learners?",
      answer: "Andhra University delivers extensive career support encompassing professional resume development, interview readiness training, competency enhancement workshops, and connectivity with 300+ recruitment partners including Amazon, IBM, Microsoft, and Infosys."
    },
    {
      question: "How does Andhra University conduct online educational delivery?",
      answer: "Educational content delivery occurs through an advanced Learning Management System incorporating live interactive sessions, archived lecture recordings for review, comprehensive digital study materials, online evaluations, and continuous academic support mechanisms."
    }
  ];

  return (
    <>
      <Head>
        <title>Andhra University Online - Distance Education Programs | MBA NINJA</title>
        <meta name="description" content="Explore Andhra University's UGC-approved online degree programs. 5 online programs with NAAC A accreditation and NIRF #25 ranking." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Andhra University.png" 
                alt="Andhra University Logo"
                className={styles.universityLogoLarge}
              />
            </div>
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Visakhapatnam, Andhra Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.3/5</span>
                    <span className={styles.reviews}>(219+ Reviews)</span>
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
                  <span className={styles.infoLabel}>NIRF Status:</span>
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

        {/* Tabs Navigation */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {['about', 'courses', 'admissions', 'placements', 'faqs'].map((tab) => (
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

        {/* Tab Content */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Andhra University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Founded in 1926 under the Madras Act, Andhra University represents one of India's most venerable and 
                  distinguished educational establishments with a remarkable 97-year legacy of academic excellence. The 
                  institution has secured recognition as the 25th Best University in India according to the National 
                  Institutional Ranking Framework (NIRF) 2024, demonstrating its sustained commitment to quality education.
                </p>
                
                <p>
                  The university has been conferred with an A Grade by the National Assessment and Accreditation Council 
                  (NAAC) and possesses comprehensive approval from the University Grants Commission (UGC) for delivering 
                  academic programs through online modalities. This digital education initiative represents a natural 
                  evolution of the university's century-old commitment to accessible, quality higher education.
                </p>
                
                <p>
                  Andhra University's online division currently delivers Bachelor's and Master's degree programs including 
                  specialized offerings such as B.Com (Accountancy) and M.A. Sociology as integral components of its digital 
                  learning portfolio. The institution provides premium quality educational resources including e-books, 
                  comprehensive study guides, recorded tutorials, and live interactive lectures.
                </p>
                
                <p>
                  The university maintains regular practice examinations and discussion forums to ensure maximum educational 
                  value delivery to students. With a comprehensive infrastructure spanning 5 Colleges and 4 campuses, the 
                  institution offers diverse academic opportunities across 42 different subjects through its College of Arts 
                  and Commerce, while the College of Science & Technology encompasses over 21 departments delivering 63 study programs.
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
                  <div className={styles.statNumber}>5</div>
                  <div className={styles.statLabel}>Online Programs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>#25</div>
                  <div className={styles.statLabel}>NIRF Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>97</div>
                  <div className={styles.statLabel}>Years Legacy</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Discover our comprehensive selection of UGC-approved online degree programs crafted for professional advancement
              </p>
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Specializations</th>
                      <th>Duration</th>
                      <th>Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((program, idx) => (
                      <tr key={idx}>
                        <td className={styles.programName}>{program.name}</td>
                        <td>{program.specializations} Specializations</td>
                        <td>{program.duration}</td>
                        <td className={styles.fees}>{program.fees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                Experience Andhra University's efficient online admission methodology designed for working professionals
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Portal Registration</h3>
                    <p>Navigate to the official Andhra University online portal and initiate the enrollment process by selecting your desired academic program and reviewing qualification requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Account Setup & Information Entry</h3>
                    <p>Register with essential contact details including mobile number and create secure password credentials. Verify your account through OTP validation sent to your registered mobile device.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Upload digital copies of academic certificates, transcripts, and official identification documents for university verification and administrative processing.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Finalization & Payment</h3>
                    <p>Complete final application review and submit payment through the university's secure online payment gateway after thorough verification of all entered information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation Documentation</h3>
                    <p>Receive payment confirmation and preserve application documentation for future reference. Access Learning Management System credentials upon successful enrollment completion.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Essential Guidelines</h3>
                <ul>
                  <li>Academic admission sessions occur twice annually - January/February and July/August cycles per UGC guidelines</li>
                  <li>Direct admission process with no entrance examination requirements for most programs</li>
                  <li>Mandatory ABC ID (Academic Bank of Credits) creation following current UGC regulations</li>
                  <li>Full fee refund policy available within specified timeframe as per UGC framework</li>
                  <li>Required documentation: Educational certificates, degree transcripts, identity verification, passport photographs</li>
                  <li>Online degree qualifications maintain equivalency with traditional degrees per UGC certification</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Leverage career advancement opportunities through our comprehensive placement assistance and industry partnerships
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹4.2L</h3>
                  <p>Average Package</p>
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

              <div className={styles.placementServices}>
                <h3>Placement Support Services</h3>
                <ul>
                  <li>Professional resume development and comprehensive portfolio building assistance</li>
                  <li>Industry-focused interview preparation and simulated assessment sessions</li>
                  <li>Technical competency and soft skills enhancement workshops</li>
                  <li>Direct industry networking through established corporate partnerships and alumni connections</li>
                  <li>Personalized career counseling and professional guidance sessions</li>
                  <li>Specialized placement assistance tailored for working professionals</li>
                  <li>Alumni network access facilitating career advancement opportunities</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Discover answers to common inquiries about Andhra University Online programs
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

export default AndhraUniversity;
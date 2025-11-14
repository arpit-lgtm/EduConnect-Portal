import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const BIHERBharathInstitute = () => {
  const [activeTab, setActiveTab] = useState('about');

  // University data
  const approvals = ['UGC', 'AICTE', 'NAAC', 'NIRF 66'];
  const nirfRank = 'NIRF University 66';
  const accreditation = 'NAAC Accredited';
  
  const keyHighlights = [
    'Established in 1984 as deemed university with 40+ years of educational excellence',
    'NIRF University ranking 66 among top institutions in India as per NIRF 2024',
    'University Grants Commission (UGC) recognized deemed university status since 2002',
    'Multiple professional body approvals: AICTE, BCI, COA, INC, DCI, MCI, SIRO, PCI',
    'NAAC accredited institution ensuring quality education and institutional standards',
    '10,000+ students and 900+ faculty members across 6 campuses in Tamil Nadu & Puducherry',
    'Global collaboration with international advisory board from 40 eminent universities',
    'Strong placement support with training cell connecting to top market players in IT'
  ];

  const programs = [
    {
      name: 'Bachelor of Business Administration',
      duration: '3 Years',
      fees: '₹36,000',
      specializations: 6
    },
    {
      name: 'Bachelor of Arts in English Literature',
      duration: '3 Years',
      fees: '₹30,000',
      specializations: 4
    },
    {
      name: 'Bachelor of Commerce',
      duration: '3 Years',
      fees: '₹33,000',
      specializations: 8
    },
    {
      name: 'Master of Commerce',
      duration: '2 Years',
      fees: '₹40,000',
      specializations: 6
    }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL', 
    'Tech Mahindra', 'IBM', 'Accenture', 'Capgemini', 'L&T'
  ];

  const faqs = [
    {
      question: "What constitutes the admission methodology for BIHER online programs?",
      answer: "BIHER follows a streamlined admission process through online application submission, document verification, and merit-based selection. Candidates can apply directly through the university portal without entrance examinations for undergraduate and postgraduate programs offered in online mode."
    },
    {
      question: "Does BIHER maintain government recognition and accreditation for online education?",
      answer: "Yes, BIHER holds UGC recognition as a deemed university since 2002, multiple professional body approvals including AICTE, BCI, COA, INC, DCI, MCI, SIRO, PCI, and NAAC accreditation. NIRF University ranking 66 ensures quality education standards and complete employer acceptability."
    },
    {
      question: "What fee structure applies to BIHER online programs?",
      answer: "BIHER online program fees: Bachelor of Business Administration (₹36,000), Bachelor of Arts in English Literature (₹30,000), Bachelor of Commerce (₹33,000), and Master of Commerce (₹40,000). The fees include study materials, online learning resources, examination costs, and degree certification."
    },
    {
      question: "What career support services does BIHER provide to distance education students?",
      answer: "BIHER operates a dedicated Career Development Cell offering placement assistance, skill development workshops, industry networking events, and internship opportunities. Students receive comprehensive support for resume building, interview preparation, and career advancement guidance."
    },
    {
      question: "How does BIHER deliver distance education content and learning support?",
      answer: "Educational delivery combines online learning management systems, recorded video lectures, interactive study materials, virtual laboratories, and weekend contact programs. Students access 24/7 learning resources with faculty support through digital platforms and regional study centers."
    }
  ];

  return (
    <>
      <Head>
        <title>BIHER Bharath Institute - Distance Education Programs | MBA NINJA</title>
        <meta name="description" content="Explore BIHER's UGC-approved distance education programs. NAAC A grade deemed university offering affordable MBA, BBA, MCA & BCA degrees." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Bharath Institute of Higher Education and Research.png" 
                alt="BIHER Bharath Institute Logo"
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
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(240+ Reviews)</span>
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
                  <span className={styles.infoLabel}>Recognition:</span>
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
                {tab === 'faqs' ? 'FAQ' : tab === 'courses' ? 'Programs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About BIHER Bharath Institute</h2>
              <div className={styles.aboutContent}>
                <p>
                  Bharath Institute of Higher Education and Research (BIHER) stands as a prestigious deemed 
                  university established in 1984 with four decades of commitment to quality education and 
                  research excellence. Located in Chennai, Tamil Nadu, the institute has evolved as a 
                  comprehensive multi-disciplinary university offering diverse academic programs across 
                  multiple streams including Management, Engineering, Medical, and Applied Sciences.
                </p>
                
                <p>
                  BIHER maintains robust accreditation from the National Assessment and Accreditation Council 
                  (NAAC) with A grade recognition, demonstrating consistent commitment to educational quality 
                  and institutional excellence. The university holds UGC recognition as a deemed university, 
                  AICTE approval for technical programs, and DEC approval for distance education delivery.
                </p>
                
                <p>
                  The Distance Education division of BIHER specializes in providing flexible, accessible, 
                  and affordable higher education opportunities for working professionals, homemakers, and 
                  students seeking alternative learning pathways. The programs are designed to maintain 
                  academic rigor while accommodating diverse learning preferences and professional commitments.
                </p>
                
                <p>
                  With modern infrastructure, experienced faculty, and strong industry connections, BIHER 
                  continues to bridge the gap between traditional classroom education and contemporary 
                  learning needs through innovative distance education methodologies and comprehensive 
                  student support services ensuring successful academic outcomes.
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
                  <div className={styles.statNumber}>4</div>
                  <div className={styles.statLabel}>Distance Programs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>85%</div>
                  <div className={styles.statLabel}>Success Rate</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>40</div>
                  <div className={styles.statLabel}>Years Legacy</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Discover our comprehensive range of UGC-approved distance education programs for career advancement
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
                Navigate BIHER's streamlined admission procedure for distance education program enrollment
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application Submission</h3>
                    <p>Complete the online application form through BIHER's official distance education portal. Provide accurate personal, educational, and professional details along with program preferences and specialization choices.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload & Verification</h3>
                    <p>Upload scanned copies of educational certificates, identity proof, address proof, and passport-size photographs. Ensure all documents are clear and authenticated for smooth verification processing.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Assessment & Merit Review</h3>
                    <p>BIHER reviews applications based on educational qualifications and merit criteria. Most programs follow direct admission without entrance examinations, making the process accessible and straightforward.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Enrollment Confirmation</h3>
                    <p>Receive admission confirmation and complete enrollment through secure online fee payment. Choose from multiple payment options including installments and educational loan facilities.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Study Material Distribution & Orientation</h3>
                    <p>Receive comprehensive study materials and access to online learning platforms. Attend virtual orientation sessions introducing academic policies, examination procedures, and support services.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Undergraduate Programs:</strong> 10+2 qualification from recognized board with minimum 50% marks. Specific subject requirements apply for certain technical programs like B.Tech</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Postgraduate Programs:</strong> Bachelor's degree from a recognized university with minimum 50% marks. Relevant subject background required for specialized MBA and M.Sc programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Distance Education Programs:</strong> Direct admission without entrance examination for most programs. ABC ID creation mandatory as per UGC regulations. Working professionals and fresh graduates both eligible</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>Direct admission for most programs without entrance examination requirements</li>
                  <li>Flexible admission schedules with multiple intake sessions throughout the year</li>
                  <li>Educational loan assistance available through partner banks and financial institutions</li>
                  <li>Merit-based scholarships offered to deserving candidates and economically weaker sections</li>
                  <li>Credit transfer opportunities for relevant prior learning and professional certifications</li>
                  <li>Special consideration for defense personnel, government employees, and differently-abled candidates</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Advance your career through BIHER's comprehensive placement assistance and industry networking
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹6.5L</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹18L</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>85%</h3>
                  <p>Placement Success</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>150+</h3>
                  <p>Recruiting Companies</p>
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
                <h3>Career Development Services</h3>
                <ul>
                  <li>Dedicated Career Development Cell providing comprehensive placement assistance and career guidance</li>
                  <li>Professional skill development workshops including communication, leadership, and technical training</li>
                  <li>Industry-specific training programs and certification courses enhancing employability prospects</li>
                  <li>Resume building assistance and interview preparation sessions with mock interview practice</li>
                  <li>Direct recruitment drives and campus placement opportunities with leading companies</li>
                  <li>Internship placement assistance enabling practical experience and industry exposure</li>
                  <li>Alumni networking events and mentorship programs facilitating career advancement support</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common questions about BIHER distance education programs
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

export default BIHERBharathInstitute;
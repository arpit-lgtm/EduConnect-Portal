import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const AnnamalaiUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  // University data
  const approvals = ['UGC', 'NAAC A', 'DEB'];
  const nirfRank = 'Ranked Among Top 10 Universities in India';
  const accreditation = 'NAAC A Grade';
  
  const keyHighlights = [
    'Founded in 1929, representing over 95 years of educational excellence and heritage',
    'Recognized among Top 10 Universities in India with outstanding academic reputation',
    'NAAC A Grade accreditation ensuring superior quality educational standards',
    'University Grants Commission (UGC) approved for distance education program delivery',
    'Distance Education Directorate (AUDDE) established in 1979 with 45+ years experience',
    'Comprehensive academic portfolio offering 500+ regular courses and 200+ distance programs',
    'Flexible learning methodology designed specifically for working professionals',
    'Strong alumni network providing valuable career guidance and placement opportunities'
  ];

  const programs = [
    {
      name: 'Master of Business Administration (MBA)',
      duration: '2 Years',
      fees: '₹25,000',
      specializations: 12
    },
    {
      name: 'Master of Commerce (M.Com)',
      duration: '2 Years', 
      fees: '₹18,000',
      specializations: 8
    },
    {
      name: 'Master of Arts - English (MA English)',
      duration: '2 Years',
      fees: '₹15,000',
      specializations: 1
    },
    {
      name: 'Bachelor of Commerce (B.Com)',
      duration: '3 Years',
      fees: '₹12,000',
      specializations: 6
    },
    {
      name: 'Bachelor of Computer Applications (BCA)',
      duration: '3 Years',
      fees: '₹20,000',
      specializations: 1
    },
    {
      name: 'Bachelor of Arts (B.A.)',
      duration: '3 Years',
      fees: '₹10,000',
      specializations: 15
    }
  ];

  const placementPartners = [
    'Axis Bank', 'Capgemini', 'HCL Technologies', 'Mahindra Group', 'Wipro',
    'Tech Mahindra', 'IBM', 'Infosys', 'TCS', 'Accenture'
  ];

  const faqs = [
    {
      question: "How does the admission methodology function for Annamalai University distance education programs?",
      answer: "The enrollment process operates through the university's official portal. Candidates must navigate to the website, complete application forms with accurate information, submit required academic documentation, and finalize admission through fee payment at the Directorate of Distance Education office or online channels."
    },
    {
      question: "Are Annamalai University distance education degrees recognized by regulatory authorities?",
      answer: "Yes, all distance education qualifications from Annamalai University possess full UGC approval and maintain equivalent status with traditional campus degrees. The institution holds NAAC A accreditation and follows strict government guidelines for distance learning delivery."
    },
    {
      question: "What fee structure applies to Annamalai University distance learning programs?",
      answer: "The university maintains affordable and budget-friendly fee structures: MBA (₹25,000), M.Com (₹18,000), MA English (₹15,000), B.Com (₹12,000), BCA (₹20,000), and BA (₹10,000). Payment flexibility includes installment options with first installment due by 31st August and second by 31st January."
    },
    {
      question: "What employment assistance does Annamalai University provide to distance learning graduates?",
      answer: "Annamalai University operates a dedicated placement cell offering comprehensive career support including job placement assistance, interview preparation, skill development workshops, and connections with 300+ corporate partners across various industries."
    },
    {
      question: "What instructional delivery methods does Annamalai University employ for distance education?",
      answer: "Educational delivery combines multiple methodologies including comprehensive study materials, recorded lectures, interactive online sessions, regional study centers for guidance, and structured examination systems with both online and offline assessment options."
    }
  ];

  return (
    <>
      <Head>
        <title>Annamalai University Distance Education - Online Degree Programs | MBA NINJA</title>
        <meta name="description" content="Explore Annamalai University's UGC-approved distance education programs. 6 major programs with NAAC A accreditation and 95+ years heritage." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Annamalai University.png" 
                alt="Annamalai University Logo"
                className={styles.universityLogoLarge}
              />
            </div>
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Annamalainagar, Tamil Nadu</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.6/5</span>
                    <span className={styles.reviews}>(278+ Reviews)</span>
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
                  <span className={styles.infoLabel}>Ranking:</span>
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
              <h2>About Annamalai University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  Established in 1929, Annamalai University stands as one of India's most prestigious and historically 
                  significant educational institutions with over 95 years of academic excellence. The university has 
                  earned recognition among the Top 10 Universities in India, demonstrating its unwavering commitment 
                  to quality education and research advancement across multiple disciplines.
                </p>
                
                <p>
                  The Annamalai University Directorate of Distance Education (AUDDE) was pioneered in 1979, marking 
                  over four decades of innovative distance learning delivery. This extensive experience has positioned 
                  the institution as a leader in flexible education methodologies, serving students who require 
                  academic advancement without geographical or schedule constraints.
                </p>
                
                <p>
                  The university maintains comprehensive UGC approval for distance education programs and holds NAAC A 
                  Grade accreditation, ensuring that all academic offerings meet stringent quality standards. With an 
                  impressive portfolio of 500+ regular courses and 200+ distance learning programs, Annamalai University 
                  provides diverse educational opportunities across undergraduate, postgraduate, diploma, and certificate levels.
                </p>
                
                <p>
                  Located in Annamalainagar, Tamil Nadu, the institution serves a global student community through its 
                  robust distance education infrastructure. The university's commitment to accessible quality education 
                  has made it a preferred choice for working professionals seeking career advancement through academic 
                  qualification enhancement while maintaining their professional responsibilities.
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
                  <div className={styles.statNumber}>6</div>
                  <div className={styles.statLabel}>Major Programs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>95+</div>
                  <div className={styles.statLabel}>Years Heritage</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Total Courses</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of UGC-approved distance education programs designed for professional growth
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
                Navigate Annamalai University's streamlined distance education admission process for seamless enrollment
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>University Portal Access</h3>
                    <p>Visit the official Annamalai University website and navigate to the distance education admission section to explore available programs and their specific eligibility requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Form Completion</h3>
                    <p>Complete the comprehensive application form with accurate personal, academic, and contact information. Ensure all details are verified before submission to avoid processing delays.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification</h3>
                    <p>Submit required academic certificates, transcripts, identification documents, and photographs to the Directorate of Distance Education office along with your completed application form.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment Processing</h3>
                    <p>Complete the admission process by submitting the required fees through approved payment methods. Retain payment receipts for future reference and enrollment confirmation.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Confirmation</h3>
                    <p>Receive official admission confirmation and student enrollment number. Access study materials and examination schedules through the university's distance education portal.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Distance Programs (BA/B.Com/BBA/BCA):</strong> 10+2 from recognized board with minimum 50% marks. No age limit for distance education programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Distance Programs (MA/M.Com/MBA/MCA):</strong> Bachelor's degree with minimum 50% aggregate marks from UGC recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diploma Programs:</strong> Graduation degree for PG diplomas. 12th pass for UG diplomas. Work experience may be required for professional programs</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admission sessions available twice annually following UGC guidelines - July/August and January/February</li>
                  <li>Direct admission process without entrance examinations for most distance education programs</li>
                  <li>ABC ID (Academic Bank of Credits) creation mandatory as per latest UGC regulations</li>
                  <li>Comprehensive fee refund policy available within specified timeframe per UGC directives</li>
                  <li>Essential documents: Academic transcripts, degree certificates, identity proof, passport photographs</li>
                  <li>Distance education degrees maintain equivalency with regular degrees per UGC validation</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Advance your career through our comprehensive placement assistance and industry collaboration programs
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>400+</h3>
                  <p>Students Placed</p>
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
                  <li>Professional resume enhancement and career portfolio development assistance</li>
                  <li>Industry-specific interview preparation and mock assessment sessions</li>
                  <li>Technical and soft skills development workshops and training programs</li>
                  <li>Direct industry networking through established corporate partnerships and alumni connections</li>
                  <li>Personalized career counseling and professional development guidance</li>
                  <li>Specialized placement assistance designed for working professionals and career changers</li>
                  <li>Alumni mentorship programs facilitating professional growth and career advancement</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common questions about Annamalai University Distance Education programs
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

export default AnnamalaiUniversity;
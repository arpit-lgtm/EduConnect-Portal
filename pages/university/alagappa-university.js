import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const AlagappaUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const alagappaData = window.universityDatabase.find(
          uni => uni.name && uni.name.toLowerCase().includes('alagappa')
        );
        setUniversityData(alagappaData);
      } else {
        const response = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const alagappaData = window.universityDatabase.find(
          uni => uni.name && uni.name.toLowerCase().includes('alagappa')
        );
        setUniversityData(alagappaData);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'Online MBA (General)', fee: 80300, duration: '2 Years', specializations: 8 },
    { name: 'Online MA (Journalism)', fee: 60300, duration: '2 Years', specializations: 1 },
    { name: 'Online MA (Tamil)', fee: 30300, duration: '2 Years', specializations: 1 },
    { name: 'Online MA (English)', fee: 60300, duration: '2 Years', specializations: 1 },
    { name: 'Online M.Com', fee: 60300, duration: '2 Years', specializations: 3 },
    { name: 'Online BBA', fee: 60100, duration: '3 Years', specializations: 4 },
    { name: 'Online BA (Tamil)', fee: 30100, duration: '3 Years', specializations: 1 },
    { name: 'Online B.Com', fee: 60100, duration: '3 Years', specializations: 5 }
  ];

  const keyHighlights = [
    'Instituted through Tamil Nadu Legislative Act of 1985, achieving prestigious Category-1 designation from MHRD-UGC',
    'Distinguished NAAC A+ certification bearing 3.64 CGPA - Tamil Nadu\'s premier academic achievement',
    'Acclaimed as 2nd finest among 12 state universities with exclusive Category-1 recognition',
    'Positioned 4th in Swachhta Ranking 2018 for maintaining educational campus hygiene standards',
    'ISO quality assurance certification for superior higher education delivery',
    'UGC-sanctioned online academic programs ensuring complete degree equivalency',
    'Affiliated membership with AIU (Association of Indian Universities) and ACU (Association of Commonwealth Universities)',
    'Strategic international partnerships spanning USA, UK, Australia and additional global destinations'
  ];

  const approvals = ['UGC-DEB', 'NAAC A+', 'AIU', 'ACU'];
  const nirfRank = 'Category-1 MHRD';
  const accreditation = 'NAAC A+ (3.64 CGPA)';

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 
    'Tech Mahindra', 'L&T Infotech', 'HDFC Bank', 'ICICI Bank', 'SBI', 'Bajaj Finance', 'Reliance'
  ];

  const faqs = [
    {
      question: 'Does Alagappa University\'s online degree program hold UGC approval?',
      answer: 'Absolutely. The online academic programs offered by Alagappa University carry complete UGC-DEB (University Grants Commission - Distance Education Bureau) authorization, ensuring academic credentials hold identical value to traditional campus-based degrees.'
    },
    {
      question: 'Which academic programs are available through Alagappa University\'s online platform?',
      answer: 'The university\'s online education portfolio encompasses MBA, MA (Journalism, Tamil, English), M.Com, BBA, BA, B.Com, BCA, MCA, MSW, and M.Ed programs featuring diverse specialization options across multiple disciplines.'
    },
    {
      question: 'What examination methodology does Alagappa University implement for online students?',
      answer: 'Online assessments follow a dual-format structure: Section A presents 33 multiple-choice questions (without negative scoring) while Section B requires descriptive responses on standard A4 format. Students access examination modules via their personalized academic portal.'
    },
    {
      question: 'What makes Alagappa University special?',
      answer: 'Alagappa University is the only Category-1 status university in Tamil Nadu by MHRD-UGC, NAAC A+ accredited with 3.64 CGPA, and ranked among the cleanest educational institutions in India.'
    },
    {
      question: 'Can I get education loans for online programs?',
      answer: 'Yes, education loans are available through multiple financial partners with easy EMI options. The university offers affordable fee structure compared to other institutions.'
    },
    {
      question: 'What enrollment pathway does Alagappa University implement for online learners?',
      answer: 'The enrollment methodology operates entirely through digital channels. Begin with portal registration on the official website, complete application forms with OTP authentication, upload required documentation, finalize submission, and execute online payment. Preserve receipts for academic records.'
    }
  ];

  return (
    <>
      <Head>
        <title>Alagappa University Online - Distance Education Programs | MBA NINJA</title>
        <meta name="description" content="Explore Alagappa University's UGC-approved online degree programs. MBA, MA, M.Com, BBA, B.Com, BCA and more with NAAC A+ accreditation." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Alagappa University.png" 
                alt="Alagappa University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Karaikudi, Tamil Nadu</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(249 Reviews)</span>
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
              <h2>About Alagappa University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Founded in 1985 through a dedicated act of the Tamil Nadu State Legislature, Alagappa University 
                  emerges as a beacon of educational excellence in South India. Nestled within a sprawling 440-acre 
                  verdant campus in Karaikudi, this prestigious institution was conceptualized by the visionary 
                  educationalist and humanitarian Dr. Alagappa, embodying the philosophy of "Excellence in Action".
                </p>
                <p>
                  Distinguished as the exclusive Category-1 status institution in Tamil Nadu, as designated by 
                  MHRD-UGC (one among merely 60 universities nationwide), Alagappa University has carved its niche 
                  as an academic powerhouse. The university proudly holds NAAC A+ accreditation with an impressive 
                  CGPA of 3.64, securing its position as the 2nd ranked institution among 12 universities in the state.
                </p>
                <p>
                  The university's distance and online education wing serves as a gateway for students who seek 
                  quality education while managing professional commitments. Operating through a robust network 
                  of 2 Constituent Colleges, 9 educational centers, and 44 specialized departments across Sivaganga 
                  and Ramanathapuram districts, the institution welcomes over 1.12 lakh students annually across 
                  diverse educational modalities.
                </p>
                <p>
                  With prestigious affiliations to AIU (Association of Indian Universities) and ACU (Association 
                  of Commonwealth Universities), the university facilitates global academic partnerships with 
                  institutions across USA, UK, and Australia, providing students with international perspectives 
                  and cross-cultural learning opportunities.
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
                  <div className={styles.statNumber}>1.12L+</div>
                  <div className={styles.statLabel}>Students Annually</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Category-1</div>
                  <div className={styles.statLabel}>MHRD Status</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A+</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>440</div>
                  <div className={styles.statLabel}>Acres Campus</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our diverse range of UGC-approved online degree programs designed to advance your career
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
                <strong>Note:</strong> EMI options available for all programs. 
                Affordable fee structure compared to other private universities.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Enrollment Pathway 2025</h2>
              <p className={styles.sectionDesc}>
                Navigate these streamlined steps to confirm your enrollment at Alagappa University's online programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Portal Registration</h3>
                    <p>Access the enrollment gateway through the official university portal and identify your preferred academic program along with qualification prerequisites.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Account Setup & Information Entry</h3>
                    <p>Input essential contact information including mobile credentials and password authentication. Complete verification through OTP validation sent to your registered contact.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Digitally upload scanned copies of academic transcripts, degree certificates, and official identification documents for administrative verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Finalization & Payment</h3>
                    <p>Execute final submission after comprehensive review of entered details, followed by secure online payment processing through encrypted gateway.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation Documentation</h3>
                    <p>Generate payment receipt and preserve completed application form for future academic references. Commence your educational trajectory.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/B.Com/BBA/BCA):</strong> 10+2 pass from recognized board with minimum 50% marks. Age limit as per program specifications</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/M.Com/MBA/MCA):</strong> Bachelor's degree from UGC recognized university with minimum 50% aggregate marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diploma/Certificate Programs:</strong> 12th pass or graduation as per specific program requirements. Work experience required for some professional certifications</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Essential Guidelines</h3>
                <ul>
                  <li>Academic intake cycles occur biannually - January/February and July/August sessions following UGC regulations</li>
                  <li>Most academic programs waive entrance examination requirements</li>
                  <li>Establish ABC ID (Academic Bank of Credits) conforming to current UGC directives</li>
                  <li>Complete fee reimbursement available within designated timeframe per UGC framework</li>
                  <li>Documentation requirements: Secondary & senior secondary certificates, undergraduate degree (for postgraduate applicants), identification verification, passport photographs</li>
                  <li>ODL qualification credentials maintain equivalency with conventional degrees per UGC certification</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access career opportunities through our placement assistance and industry connections
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>3000+</h3>
                  <p>Job Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>200+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>2000+</h3>
                  <p>Internship Offers</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>85%</h3>
                  <p>Placement Success Rate</p>
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

              <div className={styles.placementSupport}>
                <h3>Career Support Services</h3>
                <ul>
                  <li>Resume building and profile enhancement workshops</li>
                  <li>Interview preparation and mock interview sessions</li>
                  <li>Industry-specific skill development programs</li>
                  <li>Career counseling and guidance sessions</li>
                  <li>Placement assistance for working professionals</li>
                  <li>Alumni network access for career opportunities</li>
                </ul>
              </div>
            </div>
          )}

          {/* FAQs Section */}
          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common queries about Alagappa University Online programs
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

export default AlagappaUniversity;
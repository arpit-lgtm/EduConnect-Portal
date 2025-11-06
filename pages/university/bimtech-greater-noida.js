import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const BIMTECHGreaterNoida = () => {
  const [activeTab, setActiveTab] = useState('about');

  // University data
  const approvals = ['AICTE', 'NBA', 'AACSB', 'SAQS'];
  const nirfRank = 'NIRF Management 64';
  const accreditation = 'AACSB Accredited';
  
  const keyHighlights = [
    'Established in 1988 under Birla Academy of Art and Culture with 36+ years of excellence',
    'NIRF Management ranking 64 among top business schools in India as per NIRF 2024',
    'AACSB (Association to Advance Collegiate Schools of Business) international accreditation',
    'NAAC A+ accreditation and NBA (National Board of Accreditation) approved',
    'All India Council for Technical Education (AICTE) approval for management programs',
    'Strong industry partnerships with 300+ hiring partners for placement assistance',
    'Alumni network of accomplished graduates in leading positions globally',
    'Comprehensive online programs with industry-relevant curriculum and practical learning'
  ];

  const programs = [
    {
      name: 'Online MBA',
      duration: '2 Years',
      fees: '₹2,75,000',
      specializations: 11
    },
    {
      name: 'Online MBA (Dual)',
      duration: '2 Years',
      fees: '₹2,75,000',
      specializations: 2
    },
    {
      name: 'Online PGDM',
      duration: '2 Years',
      fees: '₹2,75,000',
      specializations: 6
    },
    {
      name: 'Advanced Certificate in Operations Management',
      duration: '5 Months',
      fees: '₹50,000',
      specializations: 1
    },
    {
      name: 'Advanced Certificate in Marketing Management',
      duration: '5 Months',
      fees: '₹50,000',
      specializations: 1
    }
  ];

  const placementPartners = [
    'Deloitte', 'Amazon', 'McKinsey & Company', 'Accenture', 'KPMG', 
    'PwC', 'EY', 'Infosys', 'TCS', 'Wipro'
  ];

  const faqs = [
    {
      question: "What constitutes the admission methodology for BIMTECH Greater Noida programs?",
      answer: "BIMTECH follows a comprehensive admission process including CAT/XAT/GMAT scores, followed by Group Discussion and Personal Interview rounds. Candidates are evaluated based on academic performance, work experience, and leadership potential through structured assessment criteria."
    },
    {
      question: "Does BIMTECH Greater Noida maintain international accreditation and recognition?",
      answer: "Yes, BIMTECH holds prestigious AACSB (Association to Advance Collegiate Schools of Business) international accreditation, placing it among elite business schools globally. Additionally, it maintains NIRF Management ranking 64, AICTE approval, NBA accreditation, and NAAC A+ certification ensuring world-class educational standards."
    },
    {
      question: "What fee structure applies to BIMTECH online programs?",
      answer: "Online MBA and Online PGDM programs have fees of ₹2,75,000 for 2 years, while Advanced Certificate programs in Operations Management and Marketing Management cost ₹50,000 for 5 months each. The fees include comprehensive educational resources, industry exposure, and placement assistance."
    },
    {
      question: "What career advancement support does BIMTECH provide to graduates?",
      answer: "BIMTECH operates a dedicated Career Development Center offering comprehensive placement assistance with average packages of ₹12.5 LPA and highest of ₹35 LPA. The institute maintains 95%+ placement record with top-tier companies and extensive alumni network support."
    },
    {
      question: "How does BIMTECH deliver experiential learning and industry exposure?",
      answer: "Educational methodology combines case-based learning, simulation exercises, mandatory summer internships, live consulting projects, international immersion programs, and industry mentorship. Students gain practical experience through corporate partnerships and real-world problem-solving initiatives."
    }
  ];

  return (
    <>
      <Head>
        <title>BIMTECH Greater Noida - AACSB Accredited PGDM Programs | MBA NINJA</title>
        <meta name="description" content="Explore BIMTECH's AACSB accredited PGDM programs. NIRF Management 35 ranked with 95%+ placement record and ₹12.5 LPA average package." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/BIMTECH University.png" 
                alt="BIMTECH Greater Noida Logo"
                className={styles.universityLogoLarge}
              />
            </div>
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Greater Noida, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.4/5</span>
                    <span className={styles.reviews}>(320+ Reviews)</span>
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
                {tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About BIMTECH Greater Noida</h2>
              <div className={styles.aboutContent}>
                <p>
                  Birla Institute of Management Technology (BIMTECH) Greater Noida stands as one of India's 
                  most prestigious business schools, established in 1988 with a legacy of 36 years in 
                  management education excellence. The institute has consistently maintained its position 
                  among top business schools through innovative pedagogy and industry-aligned curriculum.
                </p>
                
                <p>
                  BIMTECH holds the coveted AACSB (Association to Advance Collegiate Schools of Business) 
                  international accreditation, achieved by less than 5% of business schools worldwide. This 
                  prestigious recognition places BIMTECH alongside elite global institutions and ensures 
                  international standard education delivery and quality assurance.
                </p>
                
                <p>
                  The institute offers comprehensive Post Graduate Diploma in Management (PGDM) programs 
                  with specialized tracks including International Business, Insurance Business Management, 
                  and Retail Management. The curriculum integrates theoretical knowledge with practical 
                  application through mandatory internships, live projects, and industry collaborations.
                </p>
                
                <p>
                  With NIRF Management ranking of 35 and strong placement records achieving 95%+ success 
                  rates, BIMTECH continues to produce industry-ready management professionals equipped 
                  with leadership skills and strategic thinking capabilities for the evolving business landscape.
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
                  <div className={styles.statLabel}>PGDM Programs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>AACSB</div>
                  <div className={styles.statLabel}>International Accreditation</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>95%</div>
                  <div className={styles.statLabel}>Placement Rate</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>15K+</div>
                  <div className={styles.statLabel}>Alumni Network</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Discover our AACSB accredited PGDM programs with specialized tracks for career advancement
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
                Navigate BIMTECH's comprehensive admission procedure for PGDM program enrollment
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination Qualification</h3>
                    <p>Secure valid scores in CAT/XAT/GMAT/CMAT entrance examinations. BIMTECH accepts multiple entrance test scores, providing flexibility for candidates to demonstrate academic aptitude through preferred examination modes.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application Submission</h3>
                    <p>Complete the comprehensive online application through BIMTECH's official portal, providing accurate academic transcripts, work experience details, and personal information for initial screening and shortlisting.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Group Discussion & Personal Interview</h3>
                    <p>Participate in structured Group Discussion followed by Personal Interview rounds conducted by experienced faculty and industry experts. These sessions evaluate communication skills, leadership potential, and program fit.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Final Selection & Admission Offer</h3>
                    <p>Receive admission decision based on composite scoring including entrance test performance, academic background, work experience, and interview evaluation. Successful candidates receive detailed admission packages.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Confirmation & Orientation</h3>
                    <p>Complete enrollment formalities including fee payment, document verification, and admission confirmation. Attend comprehensive orientation program introducing academic policies, campus facilities, and program expectations.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>Multiple entrance test scores accepted: CAT, XAT, GMAT, CMAT, and ATMA</li>
                  <li>Work experience considered advantageous but not mandatory for all programs</li>
                  <li>Educational loan assistance available through partner banks and financial institutions</li>
                  <li>Merit scholarships awarded to deserving candidates based on academic excellence</li>
                  <li>International student applications welcomed with additional documentation requirements</li>
                  <li>Rolling admission process with multiple intake opportunities throughout the year</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Advance your career through BIMTECH's comprehensive placement assistance and industry connections
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹12.5L</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹35L</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>95%</h3>
                  <p>Placement Success</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>200+</h3>
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
                <h3>Placement Support Services</h3>
                <ul>
                  <li>Comprehensive Career Development Center with dedicated placement officers and industry mentors</li>
                  <li>Professional resume building workshops and LinkedIn profile optimization sessions</li>
                  <li>Industry-specific interview preparation including mock interviews and feedback sessions</li>
                  <li>Leadership development programs and soft skills enhancement workshops</li>
                  <li>Direct recruitment partnerships with Fortune 500 companies and leading consulting firms</li>
                  <li>Summer internship placement assistance ensuring practical experience and pre-placement opportunities</li>
                  <li>Alumni mentorship programs connecting students with industry professionals for career guidance</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common questions about BIMTECH Greater Noida programs
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

export default BIMTECHGreaterNoida;
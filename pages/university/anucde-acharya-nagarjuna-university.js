import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const ANUCDEAcharyaNagarjunaUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  // University data
  const approvals = ['UGC-DEB', 'AICTE', 'AIU', 'NAAC A+'];
  const nirfRank = 'Top 10 Universities in India';
  const accreditation = 'NAAC A+ Grade';
  
  const keyHighlights = [
    'Established in 1976 as prestigious State University with 49 years of academic excellence',
    'Centre for Distance Education (ANUCDE) pioneering distance learning since decades',
    'Located strategically between Guntur and Vijayawada on Chennai-Kolkata National Highway',
    'UGC-DEB approved distance education programs ensuring complete degree equivalency',
    'NAAC A+ accreditation demonstrating commitment to superior educational quality',
    'Association of Indian Universities (AIU) and Commonwealth Universities (ACU) membership',
    'Affiliated with 450+ undergraduate, postgraduate, and professional colleges',
    'Pioneer institution in launching PG Science courses through distance education mode'
  ];

  const programs = [
    {
      name: 'Distance Master of Business Administration (MBA)',
      duration: '2 Years',
      fees: '₹38,000',
      specializations: 1
    }
  ];

  const placementPartners = [
    'Accenture', 'Amazon', 'Cognizant', 'Infosys', 'TCS', 
    'Wipro', 'IBM', 'Microsoft', 'Google', 'Capgemini'
  ];

  const faqs = [
    {
      question: "What constitutes the admission methodology for ANUCDE distance education programs?",
      answer: "The enrollment process operates through the official university website portal. Students register online, complete application forms with accurate personal and educational details, upload required documents including passport photographs and signatures, and finalize admission through secure fee payment via debit/credit cards, net banking, or demand draft."
    },
    {
      question: "Are ANUCDE distance education degrees recognized by regulatory authorities?",
      answer: "Absolutely, all distance education qualifications from ANUCDE possess full UGC-DEB and AICTE approval, maintaining equivalent status with traditional campus degrees. The university holds NAAC A+ accreditation and follows strict government guidelines for quality distance education delivery."
    },
    {
      question: "What fee structure applies to ANUCDE distance learning programs?",
      answer: "The Distance MBA program is offered at ₹38,000 for the complete 2-year duration, representing exceptional value for quality education. The university maintains affordable fee structures to ensure accessibility for students and working professionals across diverse economic backgrounds."
    },
    {
      question: "What career support services does ANUCDE provide to distance education graduates?",
      answer: "ANUCDE operates a dedicated placement and training cell offering comprehensive career assistance. Students receive interview preparation, skill development workshops, and access to recruitment opportunities with 300+ hiring partners, achieving an impressive 82% placement rate with 3.5 LPA median package."
    },
    {
      question: "What instructional delivery methods does ANUCDE employ for distance education?",
      answer: "Educational content delivery combines updated curriculum materials, supplementary examination facilities, extensive study center networks, and dual assessment methodology including 30% internal assessment and 70% end-term examinations. Admissions and examinations occur twice annually for maximum flexibility."
    }
  ];

  return (
    <>
      <Head>
        <title>ANUCDE Acharya Nagarjuna University Distance Education | MBA NINJA</title>
        <meta name="description" content="Explore ANUCDE's UGC-approved distance education MBA program. Established 1976, NAAC A+ accredited with 82% placement rate." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Anucde Acharya Nagarjuna University.png" 
                alt="ANUCDE Acharya Nagarjuna University Logo"
                className={styles.universityLogoLarge}
              />
            </div>
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Guntur-Vijayawada, Andhra Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.4/5</span>
                    <span className={styles.reviews}>(206+ Reviews)</span>
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
                {tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About ANUCDE - Acharya Nagarjuna University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  Established in 1976, Acharya Nagarjuna University represents one of India's most distinguished 
                  educational institutions with nearly five decades of academic excellence and innovation. The 
                  university's main campus strategically positioned between Guntur and Vijayawada on the prestigious 
                  Chennai-Kolkata National Highway demonstrates its accessibility and geographical significance.
                </p>
                
                <p>
                  The Centre for Distance Education (ANUCDE) stands as a pioneering force in distance learning 
                  methodology, offering premium quality education to students who require flexible academic 
                  advancement opportunities. This specialized division maintains comprehensive UGC-DEB and AICTE 
                  approval, ensuring that all academic credentials possess equivalent value to traditional campus-based degrees.
                </p>
                
                <p>
                  Acharya Nagarjuna University has earned recognition from the Association of Indian Universities (AIU) 
                  and Association of Commonwealth Universities (ACU), reflecting its commitment to maintaining 
                  international educational standards. The institution holds prestigious NAAC A+ accreditation, 
                  demonstrating sustained excellence in educational quality and infrastructure development.
                </p>
                
                <p>
                  The university's expansive network encompasses over 450 affiliated undergraduate, postgraduate, 
                  and professional colleges, establishing it as a major educational hub in Andhra Pradesh. ANUCDE 
                  pioneered the introduction of postgraduate science courses through distance education mode, 
                  showcasing its innovative approach to accessible higher education delivery.
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
                  <div className={styles.statNumber}>1</div>
                  <div className={styles.statLabel}>Distance Program</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>49</div>
                  <div className={styles.statLabel}>Years Legacy</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A+</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>450+</div>
                  <div className={styles.statLabel}>Affiliated Colleges</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our specialized distance education program designed for professional advancement
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
                        <td>{program.specializations} Specialization</td>
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
                Navigate ANUCDE's streamlined distance education admission process for seamless enrollment
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration Portal</h3>
                    <p>Access the official ANUCDE website and register for distance education programs. Create secure login credentials and verify your contact information through OTP authentication.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Form Completion</h3>
                    <p>Navigate to the application form section and complete all required fields with accurate personal details, educational background, and professional experience information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload Process</h3>
                    <p>Attach passport-size photographs with digital signature, academic transcripts, certificates, and identification documents as specified in the application requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment Execution</h3>
                    <p>Complete the admission process through secure online payment via debit/credit cards, net banking, or submit demand draft drawn in favor of the university.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Confirmation</h3>
                    <p>Receive official confirmation via email and SMS upon successful document verification and fee processing. Access study materials and examination schedules through student portal.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Essential Information</h3>
                <ul>
                  <li>Admission sessions conducted twice annually following UGC guidelines - July/August and January/February</li>
                  <li>Direct admission process without entrance examination requirements for Distance MBA program</li>
                  <li>ABC ID (Academic Bank of Credits) creation mandatory as per latest UGC regulations</li>
                  <li>Comprehensive fee refund policy available within specified timeframe per UGC directives</li>
                  <li>Required documents: Academic certificates, transcripts, identity proof, passport photographs</li>
                  <li>Distance education degrees maintain equivalency with regular degrees per UGC validation</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Advance your career through ANUCDE's comprehensive placement assistance and industry partnerships
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>82%</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹3.5L</h3>
                  <p>Median Package</p>
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
                  <li>Dedicated placement and training cell providing comprehensive career guidance</li>
                  <li>Professional interview preparation and communication skills development workshops</li>
                  <li>Industry-specific training programs and competency enhancement sessions</li>
                  <li>Direct corporate partnerships facilitating recruitment opportunities and internships</li>
                  <li>Personalized career counseling and professional development mentoring</li>
                  <li>Alumni network access enabling career advancement and professional networking</li>
                  <li>Supplementary examination facilities supporting academic flexibility for working professionals</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common questions about ANUCDE Distance Education programs
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

export default ANUCDEAcharyaNagarjunaUniversity;
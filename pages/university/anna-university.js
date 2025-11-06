import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const AnnaUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  // University data
  const approvals = ['UGC', 'NAAC A+', 'UPE'];
  const nirfRank = 'University with Potential for Excellence (UPE)';
  const accreditation = 'NAAC A+ Grade';
  
  const keyHighlights = [
    'Established in 1978 in Chennai, Tamil Nadu, representing 47 years of academic excellence',
    'Recognized as "University with Potential for Excellence" (UPE) by University Grants Commission',
    'Accredited with A+ Grade by National Assessment and Accreditation Council (NAAC)',
    'University Grants Commission (UGC) approved for digital education program delivery',
    'Dedicated Online Cell (CDE) for comprehensive distance education management',
    'Digital learning platforms designed to reach unreached geographical areas',
    'Focus on developing management and leadership capabilities in students',
    'Comprehensive support system for working professionals pursuing higher education'
  ];

  const programs = [
    {
      name: 'Doctor of Philosophy (PhD) - Regular Mode',
      duration: '3 Years',
      fees: '₹1,83,000',
      specializations: 1
    },
    {
      name: 'Doctor of Philosophy (PhD) - Part Time Mode',
      duration: '3 Years', 
      fees: '₹1,83,000',
      specializations: 1
    }
  ];

  const placementPartners = [
    'Google', 'ICICI Bank', 'Amazon', 'Dunzo', 'HCL',
    'Microsoft', 'Tata', 'PayPal', 'TCS', 'Infosys'
  ];

  const faqs = [
    {
      question: "How does the enrollment procedure work for Anna University online academic programs?",
      answer: "Admission methodology involves visiting the official university portal, verifying eligibility requirements for your selected program, creating account credentials, completing application documentation, uploading required academic certificates, and finalizing fee payment through secure online channels."
    },
    {
      question: "Are Anna University digital degrees recognized by UGC and legally equivalent to traditional qualifications?",
      answer: "Yes, Anna University's online educational offerings maintain complete UGC recognition and legal equivalency with conventional campus-based degrees. The institution holds NAAC A+ accreditation and University with Potential for Excellence (UPE) status."
    },
    {
      question: "What is the fee structure for Anna University online doctoral programs?",
      answer: "Both PhD programs (Regular and Part-time modes) are priced at ₹1,83,000 for the complete 3-year duration. The university provides flexible payment arrangements including semester-wise installments and scholarship opportunities for eligible candidates."
    },
    {
      question: "What career advancement support does Anna University provide for online learners?",
      answer: "Anna University offers comprehensive career development including professional CV enhancement, interview preparation workshops, skill development sessions, industry networking through established corporate partnerships, and access to placement opportunities with 300+ hiring partners."
    },
    {
      question: "What educational delivery methodology does Anna University employ for online programs?",
      answer: "Educational content delivery utilizes advanced digital platforms featuring live interactive lectures, recorded session access for review, comprehensive study materials, online assessment systems, and dedicated academic support throughout the learning journey."
    }
  ];

  return (
    <>
      <Head>
        <title>Anna University Online - Distance Education Programs | MBA NINJA</title>
        <meta name="description" content="Explore Anna University's UGC-approved online degree programs. 2 online PhD programs with NAAC A+ accreditation and UPE status." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Anna University.png" 
                alt="Anna University Logo"
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
                    <span className={styles.ratingText}>4.0/5</span>
                    <span className={styles.reviews}>(257+ Reviews)</span>
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
                  <span className={styles.infoLabel}>UGC Status:</span>
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
              <h2>About Anna University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Established in 1978 in Chennai, Tamil Nadu, Anna University stands as one of India's most 
                  prestigious and internationally recognized educational institutions with an impressive 47-year 
                  legacy of academic excellence. The university has earned the distinguished title of "University 
                  with Potential for Excellence" (UPE) from the University Grants Commission, highlighting its 
                  exceptional standards in higher education delivery.
                </p>
                
                <p>
                  The institution maintains NAAC A+ Grade accreditation and comprehensive UGC approval for 
                  delivering educational programs through digital platforms. Anna University's primary mission 
                  centers on democratizing education access across India, particularly reaching geographically 
                  remote areas where traditional educational infrastructure remains limited or unavailable.
                </p>
                
                <p>
                  Anna University's Online Cell (Centre for Distance Education) represents the university's 
                  strategic initiative to digitalize learning platforms nationwide. This specialized department 
                  focuses on developing management skills and leadership qualities among students, preparing 
                  the next generation to effectively navigate and lead in an increasingly volatile digital 
                  business environment.
                </p>
                
                <p>
                  The university currently offers doctoral-level programs through its online division, featuring 
                  both regular and part-time PhD options designed to accommodate diverse student needs. With 
                  advanced digital infrastructure and comprehensive academic support systems, Anna University 
                  ensures premium educational experiences for working professionals seeking advanced academic 
                  qualifications while maintaining their professional commitments.
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
                  <div className={styles.statNumber}>2</div>
                  <div className={styles.statLabel}>PhD Programs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>UPE</div>
                  <div className={styles.statLabel}>UGC Status</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A+</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>47</div>
                  <div className={styles.statLabel}>Years Legacy</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Doctoral Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our UGC-approved doctoral programs designed for advanced research and academic excellence
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
                Navigate Anna University's comprehensive online admission process designed for doctoral candidates
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Verification & Portal Access</h3>
                    <p>Access the official Anna University portal and verify eligibility requirements for your selected doctoral program. Review academic prerequisites and research area specifications thoroughly.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Account Registration & Authentication</h3>
                    <p>Create secure login credentials using valid contact information. Complete mobile number verification through OTP authentication system for account activation and future communications.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Completion & Documentation</h3>
                    <p>Complete comprehensive application form with academic history, research interests, and professional background. Upload required documents including academic transcripts, certificates, and identification proof.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Review & Fee Payment</h3>
                    <p>Thoroughly review all entered information for accuracy and completeness. Submit application fees through the university's secure payment gateway and retain transaction documentation.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation & Access Credentials</h3>
                    <p>Receive application confirmation and payment receipt via registered email. Obtain Learning Management System access credentials upon successful enrollment verification completion.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Essential Guidelines</h3>
                <ul>
                  <li>Doctoral admissions available twice annually - January/February and July/August cycles as per UGC guidelines</li>
                  <li>Research proposal submission may be required for certain specializations during application process</li>
                  <li>Mandatory ABC ID (Academic Bank of Credits) creation following current UGC regulatory framework</li>
                  <li>Complete fee refund policy available within specified timeframe as per UGC guidelines</li>
                  <li>Required documentation: Post-graduate certificates, research experience proof, identity verification, passport photographs</li>
                  <li>Online doctoral degrees maintain complete equivalency with traditional campus-based qualifications per UGC certification</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Research Opportunities</h2>
              <p className={styles.sectionDesc}>
                Advance your research career through our comprehensive support system and industry connections
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹6.5L</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Research Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Career Opportunities</p>
                </div>
              </div>

              <h3>Our Industry Partners</h3>
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
                  <li>Research proposal development and academic writing guidance assistance</li>
                  <li>Academic conference presentation training and publication support services</li>
                  <li>Research methodology workshops and statistical analysis training programs</li>
                  <li>Industry-academia collaboration opportunities through established research partnerships</li>
                  <li>Professional networking events and academic community engagement initiatives</li>
                  <li>Post-doctoral career guidance and higher education placement assistance</li>
                  <li>Alumni research network access facilitating collaborative research opportunities</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common inquiries about Anna University Online doctoral programs
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

export default AnnaUniversity;
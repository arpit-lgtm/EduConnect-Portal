import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const AtlasSkillTechUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  // University data
  const approvals = ['UGC', 'AICTE', 'NAAC', 'Mumbai University'];
  const nirfRank = 'Best Institution Overall 2024';
  const accreditation = 'UGC Recognized';
  
  const keyHighlights = [
    'Premier private university located in Mumbai focusing on design, technology, and management education',
    'Three specialized schools: ISDI (Design & Innovation), ISME (Management & Entrepreneurship), uGDX (Technology)',
    'University Grants Commission (UGC) recognition for comprehensive degree program delivery',
    'All India Council for Technical Education (AICTE) approval for technical education programs',
    'Curricular collaboration with international institutions including Parsons School of Design',
    'Industry-integrated learning with corporate partnerships and visiting faculty from leading companies',
    'State-of-the-art campus in Mumbai with modern facilities and technology integration',
    'Strong placement record with graduates joining companies like Deloitte, Apple, J.P. Morgan, and leading design houses'
  ];

  const programs = [
    {
      name: 'Bachelor of Business Administration (BBA)',
      duration: '4 Years',
      fees: '₹12,00,000',
      specializations: 8
    },
    {
      name: 'Master of Business Administration (MBA)',
      duration: '2 Years',
      fees: '₹8,00,000',
      specializations: 5
    },
    {
      name: 'Bachelor of Design (B.Des)',
      duration: '4 Years',
      fees: '₹14,00,000',
      specializations: 4
    },
    {
      name: 'Bachelor of Technology (B.Tech)',
      duration: '4 Years',
      fees: '₹16,00,000',
      specializations: 4
    },
    {
      name: 'Bachelor of Science in Finance (B.Sc Finance)',
      duration: '4 Years',
      fees: '₹10,00,000',
      specializations: 2
    }
  ];

  const placementPartners = [
    'Apple', 'Deloitte', 'J.P. Morgan', 'KPMG', 'PwC', 
    'EY', 'Anita Dongre', 'Masaba', 'Samsung', 'Philips'
  ];

  const faqs = [
    {
      question: "What constitutes the admission methodology for Atlas SkillTech University programs?",
      answer: "Admission procedures involve online application submission through the official university portal, followed by entrance examination or merit-based selection depending on the program. Candidates must complete documentation verification and fee payment to secure enrollment confirmation."
    },
    {
      question: "Does Atlas SkillTech University maintain regulatory approval and accreditation?",
      answer: "Yes, Atlas SkillTech University holds comprehensive UGC recognition, AICTE approval for technical programs, and NAAC A+ accreditation. These certifications ensure all academic programs meet national quality standards and maintain industry relevance."
    },
    {
      question: "What fee structure applies to Atlas SkillTech University programs?",
      answer: "Program fees vary by course selection: BBA (₹4,50,000), MBA (₹6,80,000), Executive MBA (₹8,50,000), and PGDM (₹5,20,000). Payment flexibility includes semester-wise installments and educational loan assistance through partner financial institutions."
    },
    {
      question: "What career advancement support does Atlas SkillTech University provide to graduates?",
      answer: "The university offers comprehensive placement assistance with dedicated career services including resume development, interview preparation, industry networking, and direct recruitment partnerships with leading companies achieving excellent placement records."
    },
    {
      question: "How does Atlas SkillTech University deliver educational content and learning experiences?",
      answer: "Educational delivery combines traditional classroom instruction with modern technology including interactive learning modules, case study methodologies, industry projects, guest lectures from professionals, and practical training sessions ensuring holistic skill development."
    }
  ];

  return (
    <>
      <Head>
        <title>Atlas SkillTech University - Management & Executive Programs | MBA NINJA</title>
        <meta name="description" content="Explore Atlas SkillTech University's UGC-approved BBA, MBA, Executive MBA and PGDM programs. NAAC A+ accredited with industry partnerships." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Atlas Skilltech University.png" 
                alt="Atlas SkillTech University Logo"
                className={styles.universityLogoLarge}
              />
            </div>
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Mumbai, Maharashtra</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.2/5</span>
                    <span className={styles.reviews}>(150+ Reviews)</span>
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
              <h2>About Atlas SkillTech University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Atlas SkillTech University represents the future of higher education, integrating design, 
                  technology, and management through three specialized schools: ISDI School of Design & 
                  Innovation, ISME School of Management & Entrepreneurship, and uGDX School of Technology. 
                  Located in Mumbai, the university focuses on creating industry-ready professionals through 
                  innovative pedagogical approaches.
                </p>
                
                <p>
                  The university maintains strategic partnerships with leading international institutions, 
                  including a curricular collaboration with Parsons School of Design, ranked among the 
                  top 3 Art & Design institutions globally. This collaboration ensures students receive 
                  world-class education aligned with global industry standards and best practices.
                </p>
                
                <p>
                  Atlas SkillTech University offers comprehensive undergraduate and postgraduate programs 
                  across Business Administration, Design, and Technology domains. The curriculum integrates 
                  practical industry exposure, live projects, internships, and mentorship from corporate 
                  leaders, ensuring graduates are well-prepared for the evolving professional landscape.
                </p>
                
                <p>
                  With state-of-the-art infrastructure in Mumbai's commercial hub and strong industry 
                  connections, Atlas SkillTech University continues to redefine experiential learning 
                  while fostering innovation, creativity, and entrepreneurship among students seeking 
                  to make a global impact in their chosen fields.
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
                  <div className={styles.statLabel}>Degree Programs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3</div>
                  <div className={styles.statLabel}>Specialized Schools</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>90%</div>
                  <div className={styles.statLabel}>Placement Rate</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Industry Partners</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Discover our comprehensive range of UGC-approved management and business programs
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
                Navigate Atlas SkillTech University's comprehensive admission procedure for program enrollment
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Program Selection & Application</h3>
                    <p>Browse available programs through the official university portal, review eligibility criteria, and initiate the online application process by registering with accurate personal and academic information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination & Assessment</h3>
                    <p>Participate in the designated entrance examination or merit-based selection process depending on program requirements. Prepare thoroughly for written tests, group discussions, and personal interview rounds.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification & Submission</h3>
                    <p>Submit authentic academic transcripts, degree certificates, identification documents, and passport photographs for administrative verification and admission processing through secure online channels.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Selection Confirmation & Fee Payment</h3>
                    <p>Receive admission selection notification and complete enrollment by submitting program fees through approved payment methods. Utilize installment options and educational loan facilities as required.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Orientation & Academic Commencement</h3>
                    <p>Attend mandatory orientation sessions, receive student identification credentials, access learning management systems, and commence academic activities according to the university calendar.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BBA/BCA Programs:</strong> 10+2 from recognized board with minimum 50% marks. Merit-based selection for undergraduate admissions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/PGDM Programs:</strong> Bachelor's degree with minimum 50% aggregate. CAT/MAT/CMAT/XAT score required. Work experience preferred</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diploma/Certificate Programs:</strong> Graduation for PG diplomas, 12th for UG certificates. Industry experience may add value for professional programs</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>Multiple admission cycles throughout the academic year for different program batches</li>
                  <li>Merit-based selection for undergraduate programs and entrance examination for postgraduate courses</li>
                  <li>Educational loan assistance available through partner banks and financial institutions</li>
                  <li>Scholarship opportunities for meritorious students and economically disadvantaged candidates</li>
                  <li>Industry internship placements integrated within curriculum for practical experience</li>
                  <li>International collaboration programs for global exposure and academic exchange</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Advance your career through our comprehensive placement assistance and industry networking programs
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹7.5L</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹18L</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>90%</h3>
                  <p>Placement Success</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100+</h3>
                  <p>Corporate Partners</p>
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
                  <li>Professional resume building and LinkedIn profile optimization services</li>
                  <li>Industry-specific interview preparation and mock assessment sessions</li>
                  <li>Leadership development and communication skills enhancement workshops</li>
                  <li>Direct corporate networking through established industry partnerships and alumni networks</li>
                  <li>Personalized career counseling and professional development mentoring</li>
                  <li>Internship placement assistance with leading companies and multinational corporations</li>
                  <li>Alumni mentorship programs facilitating career advancement and industry insights</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common questions about Atlas SkillTech University programs
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

export default AtlasSkillTechUniversity;
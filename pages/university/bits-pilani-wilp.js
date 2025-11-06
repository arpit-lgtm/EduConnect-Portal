import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const BITSPilaniWILP = () => {
  const [activeTab, setActiveTab] = useState('about');

  // University data
  const approvals = ['UGC', 'NAAC A', 'Institute of Eminence'];
  const nirfRank = 'NIRF Overall 25, Engineering 25';
  const accreditation = 'NAAC A Grade';
  
  const keyHighlights = [
    'Established in 1964 as Institute of Eminence with 60+ years of academic excellence',
    'NAAC A grade accredited institution ensuring highest educational quality standards',
    'NIRF Overall ranking 25 and Engineering ranking 25 among top institutions in India',
    'Online MBA and Executive MBA programs designed for working professionals',
    'University Grants Commission (UGC) recognition and deemed university status',
    'Institute of Eminence status granted by Government of India for world-class education',
    'Global alumni network of 6300+ CEOs and 7400+ founders with unicorn ventures',
    'Industry-integrated curriculum with practical learning and placement support'
  ];

  const programs = [
    {
      name: 'Online MBA',
      duration: '3 Years',
      fees: '₹3,13,000',
      specializations: 8
    },
    {
      name: 'Executive MBA',
      duration: '3 Years',
      fees: '₹3,13,000',
      specializations: 6
    },
    {
      name: 'Doctor of Philosophy',
      duration: '1-2 Years',
      fees: '₹24,500',
      specializations: 4
    },
    {
      name: 'Part-Time PhD',
      duration: '4-7 Years',
      fees: '₹3,70,400',
      specializations: 8
    }
  ];

  const placementPartners = [
    'Google', 'Microsoft', 'Amazon', 'Apple', 'Facebook', 
    'IBM', 'Intel', 'Cisco', 'Adobe', 'Oracle'
  ];

  const faqs = [
    {
      question: "What constitutes the admission methodology for BITS Pilani WILP programs?",
      answer: "BITS WILP follows a merit-based admission process requiring valid GATE scores for M.Tech, CAT/GMAT for MBA, and qualifying examinations for other programs. Working professionals must demonstrate minimum 2-3 years of relevant industry experience along with academic qualifications."
    },
    {
      question: "Does BITS Pilani maintain government recognition and accreditation?",
      answer: "Yes, BITS Pilani holds Institute of Eminence status, UGC recognition as deemed university, and NAAC A grade accreditation. Online degrees carry the same recognition and validity as regular BITS degrees, ensuring complete acceptability by employers and higher education institutions globally."
    },
    {
      question: "What fee structure applies to BITS Pilani online programs?",
      answer: "Program fees vary by specialization: Online MBA (₹3,13,000), Executive MBA (₹3,13,000), Doctor of Philosophy (₹24,500), and Part-Time PhD (₹3,70,400). These fees cover comprehensive learning resources, online delivery, industry projects, and degree certification."
    },
    {
      question: "What career advancement support does BITS Pilani WILP provide to working professionals?",
      answer: "WILP offers specialized career enhancement through skill-based curriculum, industry mentorship, project-based learning, and access to BITS alumni network. The program enables career transitions, promotions, and entrepreneurship opportunities while maintaining current employment."
    },
    {
      question: "How does BITS Pilani deliver WILP educational content and learning experiences?",
      answer: "WILP employs innovative blended learning methodology combining online lectures, interactive sessions, weekend workshops, industry projects, and laboratory components. The flexible schedule accommodates working professionals with evening classes and weekend intensive sessions."
    }
  ];

  return (
    <>
      <Head>
        <title>BITS Pilani WILP - Work Integrated Learning Programs | MBA NINJA</title>
        <meta name="description" content="Explore BITS Pilani WILP programs for working professionals. Institute of Eminence with NAAC A++, NIRF 24 ranked offering M.Tech, MBA, M.Sc & B.E." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/BITS Pilani.png" 
                alt="BITS Pilani WILP Logo"
                className={styles.universityLogoLarge}
              />
            </div>
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Pilani, Rajasthan (Multiple Centers)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.6/5</span>
                    <span className={styles.reviews}>(450+ Reviews)</span>
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
              <h2>About BITS Pilani WILP</h2>
              <div className={styles.aboutContent}>
                <p>
                  Birla Institute of Technology and Science (BITS) Pilani Work Integrated Learning Programs 
                  (WILP) represents a revolutionary approach to higher education for working professionals. 
                  Established in 1964, BITS Pilani has evolved as one of India's premier institutions with 
                  60 years of academic excellence and innovation in engineering and management education.
                </p>
                
                <p>
                  BITS Pilani holds the prestigious Institute of Eminence status granted by the Government 
                  of India, positioning it among the top 20 institutions in the country. The university 
                  maintains NAAC A++ accreditation, NIRF Overall ranking 24, and Engineering ranking 25, 
                  demonstrating consistent academic excellence and institutional quality.
                </p>
                
                <p>
                  The Work Integrated Learning Programs (WILP) division specializes in providing flexible, 
                  industry-relevant education to working professionals through innovative blended learning 
                  methodologies. WILP offers undergraduate and postgraduate programs in Engineering, 
                  Technology, Management, and Sciences designed to enhance career prospects without 
                  disrupting professional commitments.
                </p>
                
                <p>
                  With a global alumni network of over 50,000 professionals and strong industry partnerships, 
                  BITS Pilani WILP continues to bridge the gap between academic learning and practical 
                  application, enabling working professionals to achieve academic advancement and career growth 
                  simultaneously through world-class education delivery.
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
                  <div className={styles.statLabel}>WILP Programs</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A++</div>
                  <div className={styles.statLabel}>NAAC Grade</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>98%</div>
                  <div className={styles.statLabel}>Success Rate</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50K+</div>
                  <div className={styles.statLabel}>Global Alumni</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Discover our comprehensive WILP programs designed for working professionals seeking career advancement
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
                Navigate BITS Pilani WILP's comprehensive admission procedure for working professionals
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Verification & Application</h3>
                    <p>Verify eligibility criteria including educational qualifications and minimum work experience requirements. Complete online application through BITS WILP portal with accurate professional and academic credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination Qualification</h3>
                    <p>Submit valid scores from GATE (for M.Tech), CAT/GMAT (for MBA), or qualifying examinations for respective programs. BITS conducts program-specific entrance tests for candidates without standard test scores.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification & Assessment</h3>
                    <p>Submit authenticated academic transcripts, work experience certificates, and employer recommendation letters. BITS evaluates candidates based on academic performance, professional experience, and career progression.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Interview & Final Selection</h3>
                    <p>Participate in telephonic or video interview conducted by BITS faculty and industry experts. Interviews assess professional background, career objectives, and commitment to complete the rigorous WILP curriculum.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment & Program Commencement</h3>
                    <p>Complete enrollment formalities including fee payment and course registration. Attend mandatory orientation session introducing WILP methodology, learning platforms, and academic expectations for successful program completion.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>Minimum 2-3 years relevant work experience required for most WILP programs</li>
                  <li>Employer support and time allocation necessary for successful program completion</li>
                  <li>Flexible payment options available including employer sponsorship and educational loans</li>
                  <li>Multiple intake sessions annually providing flexibility for working professionals</li>
                  <li>Credit transfer opportunities available for relevant prior learning and certifications</li>
                  <li>International applicants welcomed with additional documentation and verification requirements</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Alumni Network</h2>
              <p className={styles.sectionDesc}>
                Leverage BITS Pilani's prestigious alumni network and career advancement opportunities through WILP
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹18L</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹45L</h3>
                  <p>Post-WILP Packages</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>90%</h3>
                  <p>Career Advancement</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>500+</h3>
                  <p>Industry Partners</p>
                </div>
              </div>

              <h3>Leading Organizations Employing BITS Alumni</h3>
              <div className={styles.partnersGrid}>
                {placementPartners.map((partner, idx) => (
                  <div key={idx} className={styles.partnerCard}>
                    {partner}
                  </div>
                ))}
              </div>

              <div className={styles.placementServices}>
                <h3>Career Enhancement Support</h3>
                <ul>
                  <li>Access to prestigious BITS Pilani alumni network spanning Fortune 500 companies globally</li>
                  <li>Industry mentorship programs connecting WILP students with senior professionals and executives</li>
                  <li>Career transition guidance for professionals seeking role changes or industry switches</li>
                  <li>Entrepreneurship support through incubation centers and startup acceleration programs</li>
                  <li>Leadership development workshops and executive communication skills enhancement</li>
                  <li>Project-based learning opportunities providing real-world problem-solving experience</li>
                  <li>Continuing education pathways for lifelong learning and professional development</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common questions about BITS Pilani WILP programs
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

export default BITSPilaniWILP;
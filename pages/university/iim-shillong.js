import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMShillong = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'PG Certification in General Management', fee: 170000, duration: '12 Months', specializations: 1 },
    { name: 'IIM Online Courses', fee: 170000, duration: '6-24 Months', specializations: 2 },
    { name: 'Executive MBA', fee: 1200000, duration: '2 Years', specializations: 1 },
    { name: 'Doctor of Philosophy (PhD)', fee: 1000000, duration: '2 Years', specializations: 1 },
    { name: 'Online MBA', fee: 1220000, duration: '2 Years', specializations: 1 },
    { name: 'Part Time PhD', fee: 1100000, duration: '4 Years', specializations: 1 }
  ];

  const keyHighlights = [
    '7th Institution in Prestigious IIM Network (Est. 2007)',
    'Ranked 24th in NIRF 2024 Management Category',
    'WES, AACSB, AMBA, and EFMD Global Member Accreditations',
    '13 International Collaborations with Premier Universities',
    'MoU with University of California (2022)',
    '100% Placement Assistance Record',
    'First in Asia to Offer Satellite-Based Learning',
    'Collaboration with CAHO for Healthcare Programs',
    'Multiple Merit-Based Financial Support Schemes',
    'Specialized Programs for Defence, RBI, IOCL Professionals'
  ];

  const placementPartners = [
    'ICICI Bank',
    'Axis Bank',
    'Deloitte',
    'Ernst & Young',
    'Godrej',
    'HDFC Bank',
    'IBM',
    'ITC',
    'Microsoft',
    'Reliance',
    'Samsung',
    'Tata Group',
    'HSBC',
    'Accenture',
    'Cognizant',
    'Capgemini',
    'American Express',
    'Flipkart',
    'Amazon',
    'Google',
    'Wipro'
  ];

  const faqs = [
    {
      question: 'Are online certificate courses offered by IIM Shillong valid for professional growth?',
      answer: 'Absolutely. Online certificate courses from IIM Shillong command exceptional professional credibility and are extensively recognized by leading employers worldwide. As the 7th institution within India\'s prestigious IIM ecosystem, established in 2007 through collaborative governmental initiative, IIM Shillong maintains distinguished global recognition validated by WES approval, AACSB membership, AMBA accreditation, and EFMD Global association. These prestigious international accreditations ensure that certifications hold substantial weight across global markets, significantly enhancing career advancement opportunities, leadership responsibilities, and professional earning potential. Employers across sectors recognize IIM Shillong credentials as indicators of rigorous academic training, strategic management competencies, and unwavering commitment to professional excellence.'
    },
    {
      question: 'Does IIM Shillong offer a Student exchange program in online courses?',
      answer: 'While traditional student exchange programs involving physical campus relocation are primarily structured for residential programs, IIM Shillong\'s online offerings provide sophisticated virtual international collaboration opportunities that transcend geographical constraints. Through the institute\'s prestigious network of 13 international collaborations with premier global universities, including the distinguished Memorandum of Understanding (MoU) with the University of California signed in 2022, and membership in EFMD Global, participants engage in enriching cross-cultural learning experiences. These virtual global learning opportunities encompass collaborative international case study analyses, diverse multicultural peer interactions, global business simulations, and exposure to contemporary international management practices—providing invaluable perspectives without requiring physical relocation or career interruption.'
    },
    {
      question: 'What is the option for students who missed their online lectures during the session?',
      answer: 'IIM Shillong demonstrates comprehensive commitment to flexible, accessible learning through sophisticated technological infrastructure that ensures no student misses critical educational content. All live online lectures are professionally recorded and made available through the institute\'s advanced Learning Management System (LMS), enabling students to access session recordings at their convenience for review and reinforcement. This thoughtful approach accommodates the diverse scheduling challenges that working professionals frequently encounter, ensuring that temporary commitments, travel requirements, or unexpected obligations do not compromise educational continuity. The recorded sessions feature high-quality audio-visual content, complete presentation materials, and interactive elements, providing comprehensive learning experiences equivalent to live attendance while offering flexibility essential for professional learners.'
    },
    {
      question: 'Is the admission to online courses entrance based in IIM Shillong?',
      answer: 'Admission requirements for IIM Shillong\'s online programs are thoughtfully tailored to each specific offering, reflecting the institute\'s commitment to identifying candidates possessing appropriate academic foundations and professional readiness for advanced management education. While traditional MBA programs typically require competitive scores in prestigious national entrance examinations such as CAT (Common Admission Test), MAT (Management Aptitude Test), or GMAT (Graduate Management Admission Test), several executive and specialized online programs offer direct admission pathways that evaluate candidates holistically based on academic qualifications, professional work experience, career achievements, and demonstrated leadership potential. This flexible admission approach ensures that accomplished professionals with proven track records can access transformative education without being constrained by entrance examination scheduling or preparation requirements.'
    },
    {
      question: 'Provide a list of the online courses offered by IIM Shillong.',
      answer: 'IIM Shillong offers a comprehensive, diverse portfolio of online management education programs designed to address varying career stages and professional development needs. Our distinguished offerings include: PG Certification in Advanced General Management (12 months), comprehensive IIM Online Courses spanning 6-24 months across multiple specializations, prestigious Executive MBA (2 years), intensive Online MBA (2 years), rigorous Doctor of Philosophy (PhD) program for scholarly research pursuits (2 years), and Part-Time PhD option for working professionals (4 years). Additionally, the institute provides specialized Management Development Programs (MDPs), Faculty Development Programs (FDPs), and customized executive education programs tailored for specific organizational sectors including defense personnel, RBI professionals, IOCL officials, and healthcare practitioners through our collaboration with CAHO. Each program features meticulously designed curriculum delivered by accomplished faculty, ensuring participants gain cutting-edge knowledge essential for leadership excellence.'
    },
    {
      question: 'What are some best online executive programs in India?',
      answer: 'IIM Shillong stands among India\'s foremost institutions offering exceptional online executive management programs recognized for academic rigor, practical relevance, and transformative career impact. Our distinguished Executive MBA program provides comprehensive management education for mid-career professionals aspiring to senior leadership roles, featuring integrated curriculum spanning strategic management, financial analysis, marketing strategy, operations excellence, and organizational leadership. The PG Certification in Advanced General Management offers intensive focused learning for professionals seeking rapid skill enhancement in specific domains. Our specialized online programs in Data Science & Analytics, Digital Marketing, Project Management, Financial Management, Human Resource Management, and Leadership & Management combine theoretical depth with practical applications, delivered through sophisticated online platforms that facilitate interactive engagement with accomplished faculty and diverse peer cohorts. These programs are strategically designed to accommodate demanding professional schedules while delivering education comparable to on-campus offerings.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Shillong - Indian Institute of Management Shillong Online | EduConnect</title>
        <meta name="description" content="Explore IIM Shillong's online management programs. 7th IIM established in 2007, ranked 24th in NIRF 2024. WES, AACSB, AMBA, EFMD accredited with 13 international collaborations." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Shillong.png" 
                alt="IIM Shillong Logo" 
                className={styles.universityLogoLarge}
              />
            </div>
            
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Shillong, Meghalaya</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.4/5</span>
                    <span className={styles.reviews}>(350+ Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    <div className={styles.badge}>
                      <span className={styles.badgeIcon}>✓</span>
                      <span>WES</span>
                    </div>
                    <div className={styles.badge}>
                      <span className={styles.badgeIcon}>✓</span>
                      <span>AACSB</span>
                    </div>
                    <div className={styles.badge}>
                      <span className={styles.badgeIcon}>✓</span>
                      <span>AMBA</span>
                    </div>
                    <div className={styles.badge}>
                      <span className={styles.badgeIcon}>✓</span>
                      <span>EFMD</span>
                    </div>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 24 (2024)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>WES, AACSB, AMBA, EFMD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
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

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IIM Shillong</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Shillong stands as the seventh distinguished institution within India's prestigious 
                  IIM ecosystem, established in 2007 through visionary collaborative initiative by the Ministry of Human Resource Development 
                  (HRD) and the Ministry of Development of the North Eastern Region (MDONER). Strategically located in the culturally rich 
                  and naturally scenic city of Shillong, Meghalaya, IIM Shillong has emerged as a beacon of management education excellence, 
                  cultivating innovative leaders who seamlessly integrate core ethical values with strategic business acumen. The institute's 
                  foundational vision centers on becoming a globally recognized management education platform while maintaining deep-rooted 
                  connection to Indian values, traditions, and sustainable development principles.
                </p>
                <p>
                  Distinguished by its remarkable NIRF 2024 ranking of 24th among management institutions with an outstanding score of 60.49, 
                  IIM Shillong exemplifies academic excellence that transcends conventional pedagogical approaches. The institute's unwavering 
                  commitment to superior education extends beyond knowledge impartation to emphasize cultivating strong ethical values, social 
                  responsibility, and sustainable business practices essential for meaningful national development. This holistic educational 
                  philosophy, validated through prestigious international accreditations from AACSB, AMBA, and EFMD Global, along with WES 
                  approval, positions IIM Shillong among an elite global cohort of business schools renowned for delivering transformative 
                  management education that shapes visionary leaders capable of driving organizational and societal transformation.
                </p>
                <p>
                  IIM Shillong pioneered technological innovation in Asian management education, becoming the continent's first institution to 
                  deliver sophisticated learning modules to working professionals through advanced satellite delivery systems—a groundbreaking 
                  achievement reflecting the institute's unwavering commitment to accessibility, technological advancement, and educational 
                  democratization. Through strategic collaborations with 13 premier international management institutions, including a prestigious 
                  Memorandum of Understanding (MoU) with the University of California signed in 2022, and partnership with the Consortium of 
                  Accredited Healthcare Organizations (CAHO), IIM Shillong provides students with invaluable exposure to diverse global business 
                  perspectives, cross-cultural management practices, contemporary industry trends, and specialized sector knowledge.
                </p>
                <p>
                  The institute's distinguished faculty comprises accomplished scholars, renowned researchers, industry veterans, and thought 
                  leaders who bring extensive expertise across finance, marketing, operations, human resources, analytics, strategic management, 
                  and emerging business domains. This exceptional faculty ensures students receive mentorship that transcends traditional 
                  pedagogical boundaries, fostering critical thinking, ethical leadership, innovation, analytical rigor, and social 
                  responsibility—qualities that define successful management professionals in today's interconnected global economy. IIM Shillong's 
                  comprehensive program portfolio spans Post-Graduate Programs (PGP), Post-Graduate Programs for Executives (PGPEx), Working 
                  Professional Programs, Doctoral Programs, Management Development Programs (MDPs), Faculty Development Programs (FDPs), and 
                  specialized certificate programs, ensuring diverse educational pathways addressing varying career stages and professional needs.
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
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Average Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3X</div>
                  <div className={styles.statLabel}>Interview Opportunities</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>6</div>
                  <div className={styles.statLabel}>Program Options</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Elite executive programs meticulously designed for high-performing professionals driving organizational excellence
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
                        <td>{course.specializations} Option{course.specializations > 1 ? 's' : ''}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Flexible EMI options available. Scholarships for meritorious students and early bird discounts offered.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                Follow these steps to secure your place at IIM Shillong
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Course Selection</h3>
                    <p>Visit the official IIM Shillong website and select your desired program from the comprehensive course list. Ensure the program aligns with your career goals and professional aspirations.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Click on "Apply Now" and fill out the registration form with accurate personal details, academic qualifications, and professional experience.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload</h3>
                    <p>Upload required documents including academic transcripts, work experience certificates, identity proof, and entrance exam scores (if applicable).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Review</h3>
                    <p>Your application will be thoroughly reviewed by the admissions committee. Selected candidates may be called for personal interviews or aptitude tests.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Upon selection, proceed to fee payment through convenient options including no-cost EMI (6, 9, or 12 months) and education loan facilities.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation</h3>
                    <p>Receive your admission confirmation letter and orientation schedule. Begin your transformative learning journey with IIM Shillong!</p>
                  </div>
                </div>
              </div>

              <div className={styles.eligibilityBox}>
                <h3>Eligibility Criteria</h3>
                <ul>
                  <li><strong>MBA Programs:</strong> Bachelor's degree with minimum 50% marks + valid CAT/MAT/GMAT score</li>
                  <li><strong>Executive Programs:</strong> Bachelor's degree + minimum 2-3 years work experience</li>
                  <li><strong>PhD Programs:</strong> Master's degree with strong research background + entrance test</li>
                  <li><strong>Certificate Programs:</strong> Varies by program (some offer direct admission)</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement Highlights</h2>
              <p className={styles.sectionDesc}>
                Outstanding career transformation opportunities with premier global corporations and industry frontrunners
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Recruiters</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Avg. Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>13</h3>
                  <p>International Tie-ups</p>
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
                Find answers to common queries about IIM Shillong programs
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

export default IIMShillong;
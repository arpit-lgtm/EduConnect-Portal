import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMUdaipur = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online MBA', fee: 1420800, duration: '2 Years', specializations: 10 },
    { name: 'Leadership & Management', fee: 339000, duration: '12 Months', specializations: 1 },
    { name: 'Operations Management', fee: 220000, duration: '6 Months', specializations: 1 },
    { name: 'IIM Online Courses', fee: 339000, duration: '12 Months', specializations: 5 },
    { name: 'Executive MBA', fee: 1420800, duration: '2 Years', specializations: 8 },
    { name: 'Doctor of Philosophy (PhD)', fee: 2450000, duration: '2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Established by Government of India in 2011 - Fastest Growing B-School',
    'Ranked 22nd in NIRF 2024 Management Category',
    'AACSB Accredited - Top 5% of World Business Schools',
    'QS World University Rankings & Financial Times MIM Rankings',
    '100% Placement for MBA Digital Enterprise Management',
    '7% Increase in Overall CTC Achievement',
    'Startup Innovation Grants on Climate Change Mitigation',
    'Strategic Partnerships with Global Business Schools',
    'Merit-Based Scholarships & Financial Support Available',
    'Expert Faculty with Research & Industry Expertise'
  ];

  const placementPartners = [
    'Accenture',
    'Airtel',
    'Amazon',
    'Cognizant',
    'Cipla Health',
    'Color Tokens',
    'Deloitte',
    'Google',
    'HDFC Bank',
    'HCL',
    'ICICI Bank',
    'Infosys',
    'KPMG',
    'L&T',
    'Microsoft',
    'Reliance',
    'TCS',
    'Wipro',
    'Ernst & Young',
    'PWC',
    'IBM'
  ];

  const faqs = [
    {
      question: 'Does IIM Udaipur offer online programs?',
      answer: 'Absolutely. IIM Udaipur offers comprehensive online management programs meticulously designed for ambitious professionals pursuing advanced careers without interrupting current employment trajectories. Established in 2011 by the Government of India as one of India\'s fastest-growing business schools, IIM Udaipur delivers transformative online education through its distinguished portfolio including a comprehensive two-year Online MBA spanning multiple specializations, specialized Leadership & Management certification (12 months), Operations Management program (6 months), versatile IIM Online Courses across diverse management domains, prestigious Executive MBA (2 years), and rigorous Doctor of Philosophy (PhD) program for scholarly research pursuits. Each program features sophisticated curriculum developed by accomplished faculty combining theoretical rigor with practical industry applications, delivered through advanced online learning platforms that facilitate interactive engagement, collaborative projects, and meaningful peer learning while accommodating demanding professional schedules.'
    },
    {
      question: 'Are the courses offered by IIM Udaipur in online mode valid?',
      answer: 'Unquestionably. Online courses offered by IIM Udaipur command exceptional validity, professional credibility, and industry recognition across national and international markets. As a government-approved institution operating under the Ministry of Education, Government of India, IIM Udaipur maintains prestigious accreditation from AACSB (Association to Advance Collegiate Schools of Business), positioning it within an elite cohort comprising the top 5% of business schools globally. The institute\'s remarkable achievement in securing 22nd rank in NIRF 2024 Management Category, combined with recognition in QS World University Rankings and Financial Times MIM Rankings, validates the superior quality of education delivered through all modalities. Leading employers across sectors—from multinational corporations to innovative startups—recognize IIM Udaipur online credentials as indicators of comprehensive management competencies, strategic thinking capabilities, analytical rigor, and professional excellence, significantly enhancing career advancement opportunities, leadership responsibilities, and earning potential.'
    },
    {
      question: 'Can we pursue online examinations at IIM Udaipur?',
      answer: 'Yes, IIM Udaipur\'s online programs incorporate sophisticated computer-based examination systems designed to assess student learning comprehensively while maintaining academic integrity and evaluation rigor equivalent to on-campus programs. Examinations are conducted through secure online portals enabling remote assessment without requiring physical campus attendance, thereby providing convenience essential for working professionals managing demanding careers alongside academic commitments. The comprehensive evaluation framework encompasses multiple assessment components including online examinations, assignments, collaborative projects, case study analyses, presentations, quizzes, and class participation, ensuring holistic measurement of knowledge acquisition, analytical capabilities, application skills, critical thinking development, and leadership competencies. Students receive detailed examination guidelines, technical requirements, and academic integrity protocols well in advance of scheduled assessments, supported by dedicated technical assistance teams addressing connectivity issues, platform difficulties, or assessment-related queries to ensure smooth examination experiences.'
    },
    {
      question: 'Do I have to visit IIM Udaipur to pursue my online course?',
      answer: 'IIM Udaipur\'s online programs are thoughtfully designed to provide comprehensive remote learning experiences that eliminate the necessity for regular campus attendance, making world-class management education accessible to working professionals regardless of geographical location, professional commitments, or personal circumstances. The entire curriculum, including live interactive sessions with distinguished faculty, recorded lectures enabling flexible learning, discussion forums fostering peer collaboration, group projects developing teamwork capabilities, and assessments measuring learning outcomes, is delivered through sophisticated online learning platforms that replicate the rigor, engagement, and transformational impact of traditional classroom experiences. However, certain programs may incorporate optional campus immersion components—typically brief residential modules spanning a few days—that offer invaluable opportunities for face-to-face interaction with renowned faculty, intensive workshops on specialized topics, networking with diverse peer cohorts, experiencing vibrant campus culture, and building lasting professional relationships that transcend the program duration.'
    },
    {
      question: 'What courses are offered to students at IIM Udaipur?',
      answer: 'IIM Udaipur offers a comprehensive, diverse portfolio of management education programs addressing varying career stages, professional development needs, and educational aspirations. Our distinguished flagship offerings include transformational two-year MBA program providing comprehensive management education, innovative one-year MBA specializing in Global Supply Chain Management (PGPX), cutting-edge one-year MBA specializing in Digital Enterprise Management responding to digital transformation imperatives, prestigious Post-Graduate Diploma in Business Administration specifically designed for working executives seeking accelerated career advancement, and rigorous Doctoral Program enabling aspiring scholars to pursue advanced research in management disciplines. For working professionals, we provide comprehensive Online MBA spanning multiple specializations, specialized Leadership & Management certification enhancing strategic capabilities, Operations Management program developing process excellence, versatile IIM Online Courses across diverse management domains, intensive Executive MBA for mid-career professionals, and Doctor of Philosophy (PhD) supporting research scholars. Each program features meticulously crafted curriculum combining theoretical foundations with practical applications, ensuring participants gain cutting-edge knowledge, analytical capabilities, and strategic thinking skills essential for leadership excellence.'
    },
    {
      question: 'What are some best online executive programs in India?',
      answer: 'IIM Udaipur stands among India\'s premier institutions offering exceptional online executive management programs distinguished by academic rigor, industry relevance, faculty excellence, innovative curriculum, and transformative career impact. Our Executive MBA program provides comprehensive management education specifically designed for mid-career professionals with substantial work experience seeking advancement to senior leadership positions, featuring integrated curriculum spanning strategic management, financial analysis, marketing strategy, operations excellence, organizational behavior, human resource management, technology management, and leadership development. The Online MBA offers flexible learning pathways across multiple specializations enabling professionals to customize their educational journey according to career aspirations, organizational needs, and personal interests. Our specialized Leadership & Management certification develops strategic leadership capabilities essential for navigating complex business environments, while Operations Management program enhances process excellence and operational efficiency. These programs balance rigorous theoretical foundations with practical industry applications through real-time case studies, business simulations, collaborative projects, industry interactions, and experiential learning, ensuring graduates possess contemporary knowledge, analytical capabilities, and strategic thinking skills essential for driving organizational success in dynamic global markets.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Udaipur Online Programs | MBA, Executive Programs & PhD</title>
        <meta name="description" content="Explore online programs from IIM Udaipur - Ranked 22nd NIRF 2024, AACSB Accredited. MBA, Executive MBA, PhD & Certificate Courses for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Udaipur.png" 
                alt="IIM Udaipur Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Udaipur, Rajasthan</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.4/5</span>
                    <span className={styles.reviews}>(339 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'AACSB', 'NAAC A'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 22 (Management 2024)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>NAAC A</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {['about', 'courses', 'admissions', 'placements', 'faqs'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'courses' ? 'Programs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IIM Udaipur</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Udaipur, established by the Government of India in 2011, has rapidly emerged as one of the nation's fastest-growing business schools, distinguished by its unwavering commitment to academic excellence, cutting-edge research, and transformative educational experiences. As a second-generation IIM, the institute aspires to establish a unique legacy of perfection in management education by seamlessly integrating fundamental teaching methodologies with groundbreaking research initiatives that address contemporary business challenges and societal needs.
                </p>
                <p>
                  IIM Udaipur boasts exceptional faculty comprising accomplished scholars with doctoral degrees from prestigious Indian and international institutions, bringing extensive expertise spanning strategic management, finance, marketing, operations, human resources, data analytics, digital transformation, and emerging business domains. This distinguished faculty ensures students receive mentorship that transcends traditional pedagogical boundaries, fostering critical thinking, ethical leadership, analytical rigor, innovation capabilities, and social responsibility—qualities that define successful management professionals in today's interconnected global economy.
                </p>
                <p>
                  The institute achieved prestigious AACSB accreditation in 2018, positioning itself within an elite global cohort comprising the top 5% of business schools worldwide. Additionally, IIM Udaipur secured remarkable recognition in QS World University Rankings for Masters in Management (MIM) and Financial Times MIM Rankings 2021, while achieving the distinguished 22nd position in NIRF 2024 Management Category rankings. The comprehensive program portfolio encompasses transformational two-year MBA, innovative one-year MBA in Global Supply Chain Management (PGPX), cutting-edge MBA in Digital Enterprise Management, executive programs for working professionals, online management courses, and rigorous doctoral programs.
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
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Placement Rate</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>7%</div>
                  <div className={styles.statLabel}>CTC Increase</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Top 5%</div>
                  <div className={styles.statLabel}>Global B-Schools</div>
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
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Comprehensive enrollment pathway to join one of India's fastest-growing management institutes
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Check Eligibility</h3>
                    <p>Review program-specific eligibility criteria including educational qualifications (Bachelor's degree), entrance exam requirements (CAT/GMAT for MBA programs), and work experience prerequisites.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Visit the official IIM Udaipur website and complete registration with valid mobile number and email ID, obtaining application number and credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Fill out comprehensive application form with accurate personal details, academic qualifications, CAT scores, work experience, and upload required documents in scanned format.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Complete application fee payment through available online methods and retain fee receipt confirmation for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Confirmation</h3>
                    <p>Receive admission confirmation through email or message notification. Selected candidates proceed with final enrollment and fee payment to secure admission.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university required for all programs</li>
                  <li>CAT/GMAT scores mandatory for MBA and Executive MBA programs</li>
                  <li>Work experience requirements vary by program (Executive programs: 2-5 years)</li>
                  <li>Online programs offer direct admission for eligible candidates</li>
                  <li>Flexible payment options and EMI facilities available</li>
                  <li>Merit-based scholarships and government fellowships accessible</li>
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
                  <h3>7%</h3>
                  <p>CTC Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Multiple</h3>
                  <p>International Offers</p>
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
                Detailed responses addressing essential inquiries about IIM Udaipur's distinguished online programs
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

export default IIMUdaipur;
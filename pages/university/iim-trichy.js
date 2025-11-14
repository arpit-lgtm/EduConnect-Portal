import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMTrichy = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 1180000, duration: '24 Months', specializations: 1 },
    { name: 'Online MBA', fee: 1180000, duration: '2 Years', specializations: 5 },
    { name: 'Doctor of Philosophy (PhD)', fee: 1000000, duration: '2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    '11th Prestigious Member of IIM Family (Est. 2011)',
    'Ranked 27th in NIRF 2024 Management Category',
    'AACSB and AMBA International Accreditations',
    'PGPM, PGPM-HR, PGPBM Programs AMBA Accredited',
    '175-Acre Campus Near Trichy International Airport',
    '100% Placement with Leading MNCs',
    'State-of-the-Art Infrastructure & Modern Facilities',
    'Strong Alumni Network Across Global Organizations',
    'Emphasis on Real-Time Case Studies & Problem-Solving',
    'Excellence in Research, Teaching & Consulting'
  ];

  const placementPartners = [
    'Google',
    'Amazon',
    'Capgemini',
    'Deloitte',
    'HCL',
    'IBM',
    'L&T',
    'Tata Motors',
    'Wipro',
    'Microsoft',
    'Cognizant',
    'Accenture',
    'HDFC Bank',
    'ICICI Bank',
    'Reliance',
    'Samsung',
    'TCS',
    'Infosys',
    'Tech Mahindra',
    'Flipkart',
    'Paytm'
  ];

  const faqs = [
    {
      question: 'Does IIM Trichy offer online programs?',
      answer: 'Yes, IIM Trichy offers exceptional online programs meticulously designed for ambitious professionals seeking transformative management education without interrupting their career progression. Our distinguished portfolio includes the prestigious Executive MBA program and comprehensive Online MBA, both spanning 24 months of intensive study, along with the rigorous Doctor of Philosophy (PhD) program for scholarly research pursuits. As the 11th institution within India\'s esteemed IIM ecosystem, established in 2011, IIM Trichy delivers world-class management education that seamlessly integrates cutting-edge theoretical knowledge with practical industry applications. Each program features sophisticated curriculum designed by accomplished faculty comprising renowned scholars, experienced researchers, and industry veterans, delivered through advanced online learning platforms that facilitate interactive engagement, collaborative projects, and meaningful peer learning while accommodating the demanding schedules of working professionals across geographical boundaries.'
    },
    {
      question: 'Are the courses offered by IIM Trichy in online mode Valid?',
      answer: 'Absolutely. Online courses offered by IIM Trichy command exceptional validity, credibility, and professional recognition across national and international markets. As a government-approved institution operating under the Ministry of Education, Government of India, IIM Trichy maintains prestigious accreditations from internationally renowned bodies including AACSB (Association to Advance Collegiate Schools of Business) and AMBA (Association of MBAs). These distinguished accreditations ensure that online programs adhere to the highest standards of management education quality, curriculum rigor, faculty qualifications, and learning outcomes assessment. The institute\'s remarkable NIRF 2024 ranking of 27th among management institutions, combined with specific AMBA accreditation for flagship programs including PGPM, PGPM-HR, and PGPBM, validates the superior quality of education delivered. Leading employers across sectors—from multinational corporations to innovative startups—recognize IIM Trichy online credentials as indicators of comprehensive management competencies, strategic thinking capabilities, and professional excellence, significantly enhancing career advancement opportunities and leadership responsibilities.'
    },
    {
      question: 'Can we pursue an online examination at IIM Trichy?',
      answer: 'Yes, IIM Trichy\'s online programs incorporate sophisticated computer-based examination systems designed to assess student learning comprehensively while maintaining academic integrity and evaluation rigor. Examinations are conducted through secure online platforms enabling remote assessment without requiring physical campus attendance, thereby providing convenience essential for working professionals. The evaluation framework encompasses multiple assessment components including online examinations, comprehensive assignments, collaborative projects, case study analyses, presentations, and class participation, ensuring holistic measurement of knowledge acquisition, analytical capabilities, application skills, and critical thinking development. Students must thoroughly review examination guidelines, technical requirements, and academic integrity protocols before scheduled assessments. The institute provides dedicated technical support teams to address any connectivity issues, platform difficulties, or assessment-related queries, ensuring smooth examination experiences that accurately reflect student capabilities while maintaining the academic standards and evaluation rigor expected from a premier IIM institution.'
    },
    {
      question: 'Do I have to Visit IIM Trichy to pursue my online course?',
      answer: 'IIM Trichy\'s online programs are thoughtfully designed to provide comprehensive remote learning experiences that eliminate the necessity for regular campus attendance, making world-class management education accessible to working professionals regardless of geographical location or professional commitments. The entire curriculum, including live interactive sessions, recorded lectures, discussion forums, collaborative projects, and assessments, is delivered through sophisticated online learning platforms that replicate the rigor and engagement of traditional classroom experiences. However, certain programs may incorporate optional campus immersion components—typically brief residential modules spanning a few days—that offer invaluable opportunities for face-to-face interaction with distinguished faculty, intensive workshops on specialized topics, networking with diverse peer cohorts, and experiencing the vibrant campus culture. These optional immersion sessions, while enriching the overall learning experience, are designed to minimize disruption to professional commitments, ensuring that geographical distance or career responsibilities do not compromise access to transformative management education.'
    },
    {
      question: 'What courses are offered to the students at IIM Trichy?',
      answer: 'IIM Trichy offers a comprehensive portfolio of management education programs addressing diverse career stages and professional development needs. Our flagship residential programs include the prestigious Post Graduate Program in Management (PGPM), specialized PGPM in Human Resources (PGPM-HR), and innovative Post Graduate Program in Business Management (PGPBM) conducted at the Chennai campus—all accredited by AMBA, reflecting superior educational quality. For working professionals, we provide the distinguished Executive Post Graduate Program (EPGP), comprehensive Online MBA spanning multiple specializations, and specialized Executive MBA designed for mid-career professionals aspiring to senior leadership roles. Our rigorous Fellow Program in Management (FPM) and Doctor of Philosophy (PhD) programs cater to aspiring scholars pursuing advanced research in management disciplines. Additionally, the institute offers specialized Management Development Programs (MDPs) and customized Executive Education Programs tailored to specific organizational needs, industry sectors, and functional domains. Each program features meticulously crafted curriculum combining theoretical rigor with practical applications, ensuring participants gain cutting-edge knowledge essential for leadership excellence in contemporary business environments.'
    },
    {
      question: 'What are some best online executive programs in India?',
      answer: 'IIM Trichy stands among India\'s premier institutions offering exceptional online executive management programs distinguished by academic rigor, industry relevance, faculty excellence, and transformative career impact. Our Executive MBA program provides comprehensive management education specifically designed for mid-career professionals with 5-10 years of experience seeking advancement to senior leadership positions. The program encompasses strategic management, financial analysis, marketing strategy, operations excellence, organizational behavior, and leadership development, delivered through sophisticated online platforms that facilitate meaningful interaction with accomplished faculty and diverse peer cohorts. Our Online MBA offers flexible learning pathways across multiple specializations enabling professionals to customize their educational journey according to career aspirations and organizational needs. These programs balance rigorous theoretical foundations with practical industry applications through real-time case studies, business simulations, collaborative projects, and industry interactions. The curriculum is continuously updated to incorporate emerging business trends, technological disruptions, and evolving management practices, ensuring graduates possess contemporary knowledge and skills essential for navigating complex, dynamic business environments while maintaining professional commitments and career progression.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Trichy - Indian Institute of Management Tiruchirappalli Online | EduConnect</title>
        <meta name="description" content="Explore IIM Trichy's online management programs. 11th IIM established in 2011, ranked 27th in NIRF 2024. AACSB and AMBA accredited with 100% placement." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Trichy.png" 
                alt="IIM Trichy Logo" 
                className={styles.universityLogoLarge}
              />
            </div>
            
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Tiruchirappalli, Tamil Nadu</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(400+ Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    <div className={styles.badge}>
                      <span className={styles.badgeIcon}>✓</span>
                      <span>AACSB</span>
                    </div>
                    <div className={styles.badge}>
                      <span className={styles.badgeIcon}>✓</span>
                      <span>AMBA</span>
                    </div>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 27 (2024)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>AACSB, AMBA</span>
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
              <h2>About IIM Trichy</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Tiruchirappalli (IIM Trichy) stands as the 11th prestigious member of India's 
                  distinguished IIM ecosystem, established in 2011 through visionary governmental initiative to expand management education 
                  excellence across the nation. Strategically located in the culturally rich and historically significant city of 
                  Tiruchirappalli, Tamil Nadu—a vibrant center renowned for spirituality, art, education, and cultural heritage—the institute 
                  occupies an expansive 175-acre campus situated 11 kilometers from Tiruchirappalli International Airport on the 
                  Trichy-Pudukottai highway. This scenic campus environment provides an inspiring backdrop conducive to transformative learning 
                  experiences, fostering contemplative thinking, innovative ideation, and holistic personal development alongside rigorous 
                  academic pursuits that define the distinguished IIM tradition of excellence.
                </p>
                <p>
                  IIM Trichy exemplifies institutional commitment to transforming India's management education landscape by delivering quality 
                  education that extends beyond traditional on-campus modalities to encompass innovative online learning formats, thereby 
                  democratizing access to world-class management education for working professionals nationwide. The institute offers 
                  comprehensive program portfolio spanning prestigious Post Graduate Program in Management (PGPM), specialized Fellow Program in 
                  Management (FPM) for doctoral research, intensive Executive Post Graduate Program (EPGP), and diverse Executive Education 
                  Programs designed for varying career stages and professional development needs. Distinguished by its NIRF 2024 ranking of 27th 
                  among management institutions with a commendable score of 57.67, IIM Trichy demonstrates rapid ascent toward academic 
                  excellence, research contributions, and industry impact since its inception.
                </p>
                <p>
                  The institute's distinguished faculty members—accomplished scholars, experienced researchers, and seasoned industry 
                  practitioners—engage in cutting-edge research, innovative teaching methodologies, strategic consulting, and continuous 
                  enhancement of students' academic capabilities and professional competencies. Through rigorous curriculum emphasizing real-time 
                  case studies directly relevant to contemporary business challenges, IIM Trichy cultivates essential problem-solving abilities, 
                  quick decision-making skills, strategic thinking capabilities, and ethical leadership qualities among students. The state-of-the-art 
                  campus infrastructure encompasses modern classrooms equipped with advanced audio-visual technology, lecture halls designed for 
                  interactive learning, comprehensive library stocked with thousands of scholarly resources, sophisticated computer laboratories, 
                  recreational sports facilities promoting holistic development, auditoriums for cultural and academic events, and residential 
                  facilities creating a conducive environment for academic excellence and personal growth.
                </p>
                <p>
                  Validated through prestigious international accreditations from AACSB (Association to Advance Collegiate Schools of Business) 
                  and AMBA (Association of MBAs), with specific AMBA accreditation for flagship programs including PGPM, PGPM-HR, and PGPBM, IIM 
                  Trichy maintains distinguished global recognition ensuring graduates possess credentials respected across international markets. 
                  The institute's highly efficient placement cell collaborates closely with the Career Development Services (CDS) team to provide 
                  exceptional employment opportunities across diverse sectors including consulting, marketing, operations, finance, and technology. 
                  Students benefit from valuable internship experiences often leading to Pre-Placement Offers (PPOs), comprehensive pre-placement 
                  training encompassing personal interviews and group discussions, and placement seasons commencing in late November facilitating 
                  connections with 300+ leading recruiters. The vibrant alumni network actively contributes to student guidance, institutional 
                  development, and economic growth, while diverse student committees and clubs provide opportunities for leadership development, 
                  skill enhancement, and holistic personality development essential for successful management careers.
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
                  <div className={styles.statNumber}>3</div>
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
                Follow these steps to secure your place at IIM Trichy
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Course Selection</h3>
                    <p>Visit the official IIM Trichy online website and select your desired program ensuring alignment with your career goals, professional aspirations, and interests.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Verification</h3>
                    <p>Carefully review eligibility criteria including educational qualifications, required skills, work experience requirements, and any entrance examination prerequisites before proceeding.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Registration</h3>
                    <p>Create new registration on the IIM Trichy online portal by entering valid phone number, email ID, and completing two-step verification process to receive login credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Form</h3>
                    <p>Log in using your User ID and password to complete the comprehensive online application form with accurate personal, academic, and professional details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload</h3>
                    <p>Upload all required documents in scanned format ensuring clarity and legibility. Maintain digital copies of submitted documents for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Submission</h3>
                    <p>Complete fee payment through available options, print application form and payment receipt, and await admission confirmation from IIM Trichy!</p>
                  </div>
                </div>
              </div>

              <div className={styles.eligibilityBox}>
                <h3>Eligibility Criteria</h3>
                <ul>
                  <li><strong>MBA Programs:</strong> Bachelor's degree with minimum 50% aggregate + entrance exam scores (varies by program)</li>
                  <li><strong>Executive Programs:</strong> Bachelor's degree + relevant work experience (typically 2-5 years)</li>
                  <li><strong>PhD Programs:</strong> Master's degree with strong academic record + research aptitude</li>
                  <li><strong>Online Programs:</strong> Bachelor's degree + work experience as specified per program</li>
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
                  <p>Placement Record</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Avg. Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>PPO</h3>
                  <p>Pre-Placement Offers</p>
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
                Find answers to common queries about IIM Trichy programs
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

export default IIMTrichy;
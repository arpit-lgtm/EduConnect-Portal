import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMSirmaur = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online Global MBA', fee: 800000, duration: '2 Years', specializations: 1 },
    { name: 'IIM Online Courses', fee: 800000, duration: '2 Years', specializations: 5 },
    { name: 'Online Executive MBA', fee: 800000, duration: '2 Years', specializations: 11 }
  ];

  const keyHighlights = [
    'Institution of National Importance under Ministry of Education',
    'Ranked 57th in NIRF 2024 Management Category',
    'Third Generation IIM Established in 2015',
    'AICTE Approved & NIRF Recognized',
    'Average Package 13 LPA with 100% Placement',
    '142% Hike in Highest Placement Package',
    'Nodal Center for AICTE Quality Improvement Programs (QIP)',
    'Rigorous Curriculum with Industry Collaborations',
    'Emphasis on Holistic Development & Social Responsibility',
    'Merit & Need-Based Scholarship Schemes Available'
  ];

  const placementPartners = [
    'Google',
    'Accenture',
    'Amazon',
    'Deloitte',
    'Facebook',
    'HCL',
    'HP',
    'ITC',
    'Nestle',
    'TCS',
    'Wipro',
    'Microsoft',
    'IBM',
    'Cognizant',
    'Capgemini',
    'HDFC Bank',
    'ICICI Bank',
    'Reliance',
    'Tata Group',
    'Samsung',
    'Flipkart'
  ];

  const faqs = [
    {
      question: 'What is the average salary of IIM Sirmaur Graduates?',
      answer: 'IIM Sirmaur graduates achieve impressive career outcomes reflecting the institute\'s exceptional educational quality and industry recognition. The average annual compensation package stands at ₹13 lakhs per annum (LPA), demonstrating strong market confidence in graduate capabilities. Remarkably, the institute has witnessed an extraordinary 142% increase in the highest placement packages offered—a testament to growing employer recognition of IIM Sirmaur\'s commitment to producing industry-ready management professionals. With 100% placement record, our graduates secure prestigious positions across diverse sectors including consulting, technology, finance, marketing, operations, and strategic management with leading multinational corporations, innovative startups, and established conglomerates. These robust placement outcomes validate the institute\'s dedication to cultivating comprehensive management competencies, leadership acumen, and strategic thinking capabilities essential for career excellence in today\'s competitive business landscape.'
    },
    {
      question: 'Does IIM Sirmaur offer online programs?',
      answer: 'Yes, IIM Sirmaur offers a comprehensive suite of flexible online programs meticulously designed for accomplished professionals seeking advanced management education without interrupting their career trajectories. Our distinguished portfolio includes the prestigious Online Global MBA providing comprehensive international business education, versatile IIM Online Courses spanning multiple management specializations, and specialized Online Executive MBA featuring 11 diverse specialization options including Finance, Marketing, HR, Operations, Data Analytics, Digital Marketing, Healthcare Management, Project Management, Strategic Leadership, Business Analytics, and Technology Management. Each program spans two years of intensive study, featuring sophisticated curriculum that balances rigorous theoretical foundations with practical industry applications. Delivered through advanced online learning platforms facilitating interactive engagement with accomplished faculty and diverse global peer cohorts, these programs ensure working professionals access world-class management education while maintaining their professional commitments and career progression.'
    },
    {
      question: 'What are the eligibility criteria for online programs at IIM Sirmaur?',
      answer: 'Eligibility criteria for IIM Sirmaur\'s online programs are thoughtfully designed to ensure candidates possess appropriate academic foundations, professional experience, and intellectual capabilities necessary for advanced management education success. Generally, applicants must hold a bachelor\'s degree from a recognized university with specified minimum academic performance standards (typically 50% aggregate for general category candidates). Executive and specialized programs typically require relevant professional work experience ranging from 2-5 years, ensuring meaningful peer learning and practical application of advanced management concepts. The institute follows a comprehensive selection process governed by statutes, ordinances, and policies, evaluating candidates through submitted documentation including enrollment applications, detailed CV, recent photographs, academic transcripts with marks, experience certificates, and professional body certifications. Selected candidates participate in personal interviews assessing communication skills, leadership potential, and program fit before receiving final admission letters.'
    },
    {
      question: 'What are the contact details of the IIM Sirmaur?',
      answer: 'For comprehensive information regarding admission processes, program details, curriculum specifics, scholarship opportunities, and application procedures, prospective students are encouraged to visit the official IIM Sirmaur website, which provides extensive resources covering all aspects of the institute\'s offerings. The institute\'s scenic campus is strategically located at Rampur Ghat Road, Paonta Sahib, District Sirmaur, Himachal Pradesh—a serene environment conducive to focused learning and holistic development. Alternatively, candidates can connect directly with the dedicated admissions office through official university communication channels for personalized guidance, query resolution, and comprehensive support throughout the application journey. Our admissions team remains committed to providing timely, accurate information ensuring prospective students make well-informed educational decisions aligned with their professional aspirations and career objectives.'
    },
    {
      question: 'What is the NIRF Ranking of IIM Sirmaur?',
      answer: 'IIM Sirmaur holds the distinguished NIRF (National Institutional Ranking Framework) ranking of 57th position in the Management Category for 2024, with an impressive overall score of 50.92. This prestigious ranking, awarded by the Ministry of Education, Government of India, reflects the institute\'s rapid ascent toward academic excellence, research contributions, teaching methodology, learning resources, graduation outcomes, outreach initiatives, and perceived reputation among peers and stakeholders. As one of the youngest members of the IIM family, established in 2015, IIM Sirmaur has demonstrated remarkable progress in establishing itself among India\'s leading management institutions. The institute\'s selection as the nodal center for AICTE Quality Improvement Programs (QIP) further validates its educational quality and commitment to advancing management education standards across Indian academic institutions. This ranking positions IIM Sirmaur favorably for attracting exceptional students, accomplished faculty, industry collaborations, and international partnerships.'
    },
    {
      question: 'What are some best online executive programs in India?',
      answer: 'IIM Sirmaur offers exceptional online executive programs recognized among India\'s finest for combining academic rigor, practical relevance, industry alignment, and flexible delivery suited for working professionals. Our distinguished Online Executive MBA, featuring 11 comprehensive specialization options, provides transformative management education spanning Finance, Marketing, Human Resources, Operations Management, Data Analytics, Digital Marketing, Healthcare Management, Project Management, Strategic Leadership, Business Analytics, and Technology Management. Each specialization features meticulously crafted curriculum designed by accomplished faculty who bring extensive research expertise, consulting experience, and industry insights. The Online Global MBA offers sophisticated international business education incorporating global case studies, cross-cultural management perspectives, and contemporary international business practices. Our comprehensive IIM Online Courses provide focused learning pathways across diverse management domains. These programs balance theoretical depth with practical applications, delivered through advanced online platforms enabling synchronous and asynchronous learning, collaborative projects, and meaningful peer interactions while accommodating demanding professional schedules.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Sirmaur - Indian Institute of Management Sirmaur Online | EduConnect</title>
        <meta name="description" content="Explore IIM Sirmaur's online management programs. Established in 2015, ranked 57th in NIRF 2024. AICTE approved with 100% placement and average package 13 LPA." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Sirmaur.png" 
                alt="IIM Sirmaur Logo" 
                className={styles.universityLogoLarge}
              />
            </div>
            
            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Paonta Sahib, Sirmaur, HP</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.2/5</span>
                    <span className={styles.reviews}>(200+ Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    <div className={styles.badge}>
                      <span className={styles.badgeIcon}>✓</span>
                      <span>AICTE</span>
                    </div>
                    <div className={styles.badge}>
                      <span className={styles.badgeIcon}>✓</span>
                      <span>NIRF</span>
                    </div>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 57 (2024)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>AICTE, NIRF</span>
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
              <h2>About IIM Sirmaur</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Sirmaur stands as a prominent and distinguished institution within India's prestigious 
                  business education landscape, established in 2015 through visionary governmental initiative as an Institution of National 
                  Importance under the Ministry of Education, Government of India. Strategically located in the serene environment of Paonta 
                  Sahib, District Sirmaur, Himachal Pradesh—specifically at Rampur Ghat Road—the institute represents one of the youngest yet 
                  remarkably dynamic members of the IIM family. IIM Sirmaur was conceived with the ambitious objective of becoming a globally 
                  reputed institution in the management education field, providing world-class practical exposure and rigorous academic training 
                  that prepares students for exceptional future prospects in increasingly competitive global business environments.
                </p>
                <p>
                  Distinguished by its NIRF 2024 ranking of 57th in the Management Category with an impressive score of 50.92, IIM Sirmaur 
                  exemplifies rapid institutional development and unwavering commitment to educational excellence. The institute has cultivated 
                  exceptional reputation for delivering quality management education that seamlessly integrates rigorous curriculum, extensive 
                  industry collaborations, and comprehensive emphasis on holistic development, social responsibility, and global excellence. This 
                  multifaceted educational approach ensures that students develop not merely technical management competencies but also ethical 
                  leadership qualities, strategic thinking capabilities, social consciousness, and innovative problem-solving skills essential 
                  for driving meaningful organizational and societal transformation in contemporary business contexts.
                </p>
                <p>
                  IIM Sirmaur offers a comprehensive portfolio of management education programs spanning MBA degrees, sophisticated Executive 
                  Programs, specialized PG Diploma Programs, and rigorous PhD Programs designed for scholarly research pursuits. The institute's 
                  selection as the nodal center for AICTE Quality Improvement Programs (QIP)—serving faculty members from diverse institutions 
                  across India—reflects distinguished recognition of educational quality, research capabilities, and commitment to advancing 
                  management education standards nationally. Through its diverse program offerings delivered in both traditional on-campus mode 
                  and flexible online formats, IIM Sirmaur ensures accessibility for various learner segments including fresh graduates, working 
                  professionals, senior executives, and aspiring researchers, thereby democratizing access to world-class management education.
                </p>
                <p>
                  The institute's remarkable placement record underscores its success in preparing industry-ready management professionals. 
                  With 100% placement assistance and an average annual compensation package of ₹13 lakhs per annum, IIM Sirmaur graduates 
                  secure prestigious positions with leading organizations across diverse sectors. The extraordinary 142% increase in the 
                  highest placement packages reflects growing market recognition of graduate quality and capabilities. Beyond impressive 
                  placement outcomes, IIM Sirmaur demonstrates deep commitment to inclusive education through comprehensive scholarship schemes 
                  including Post Matric Scholarships for Minorities, Top Class Education scholarships for students with disabilities, National 
                  Means Cum Merit Scholarship, and Prime Minister's Scholarship Scheme for RPF/RPSF personnel, ensuring that talented individuals 
                  from all backgrounds can access transformative educational opportunities without financial constraints limiting their potential.
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
                Follow these steps to secure your place at IIM Sirmaur
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Submit online application form through the official IIM Sirmaur website with accurate personal details, academic qualifications, and professional experience.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Upload required documentation including: (i) Enrollment application, (ii) Detailed CV, (iii) Recent photograph with white background, (iv) Academic transcripts with marks, (v) Experience certificates (if any), (vi) Professional body certificates.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification</h3>
                    <p>Submitted documents undergo thorough verification and approval by the admissions committee to ensure authenticity and completeness.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Upon document approval, complete the program fee payment through convenient options including installments, no-cost EMI, or education loan facilities.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Interview & Assessment</h3>
                    <p>Receive written communication and Personal Interview (PI) call letter. Successfully clear the assessment based on criteria set by the institution.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Acceptance Letter</h3>
                    <p>Upon satisfactorily meeting all requirements, receive your official Acceptance Letter and commence your transformative learning journey!</p>
                  </div>
                </div>
              </div>

              <div className={styles.eligibilityBox}>
                <h3>Eligibility Criteria</h3>
                <ul>
                  <li><strong>Online MBA/Global MBA:</strong> Bachelor's degree from recognized university + relevant work experience</li>
                  <li><strong>Executive MBA:</strong> Bachelor's degree + minimum 2-3 years professional work experience</li>
                  <li><strong>PhD Programs:</strong> Master's degree with strong research background + entrance examination</li>
                  <li><strong>Diploma Programs:</strong> Bachelor's degree + work experience as specified per program</li>
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
                  <h3>13 LPA</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>142%</h3>
                  <p>Highest Package Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
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
                Find answers to common queries about IIM Sirmaur programs
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

export default IIMSirmaur;
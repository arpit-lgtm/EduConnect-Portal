import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMVisakhapatnam = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive Program in Management', fee: 160000, duration: '12 Months', specializations: 1 },
    { name: 'IIM Online Courses', fee: 75000, duration: '6-24 Months', specializations: 5 },
    { name: 'Executive Program in HR', fee: 75000, duration: '6 Months', specializations: 1 },
    { name: 'Executive Program in Operations', fee: 75000, duration: '6 Months', specializations: 2 },
    { name: 'Executive Program in Marketing', fee: 60000, duration: '4 Months', specializations: 2 },
    { name: 'Executive MBA', fee: 1190000, duration: '2 Years', specializations: 10 },
    { name: 'Online MBA', fee: 1190000, duration: '2 Years', specializations: 8 }
  ];

  const keyHighlights = [
    '20th IIM Established in 2015 by Government of India',
    'Ranked 26th in NIRF 2024 Management Category',
    'WES Approved & Internationally Recognized',
    '100% Placement with Average Package 16.61 LPA',
    'Highest Package 32.65 LPA Achievement',
    'Only IIM with Dr. B R Ambedkar Chair by MSJE, GOI',
    'International Collaborations with Macquarie & Bradford Universities',
    'State-of-the-Art Infrastructure & Modern Learning Facilities',
    'Distinguished Faculty from Premier Global Institutions',
    'Strong Industry Engagement & Live Project Opportunities'
  ];

  const placementPartners = [
    'ICICI Bank',
    'Accenture',
    'Amazon',
    'Deloitte',
    'HDFC Bank',
    'KPMG',
    'L&T',
    'PWC',
    'Reliance',
    'TCS',
    'Wipro',
    'Hindustan Unilever',
    'Google',
    'Microsoft',
    'IBM',
    'Cognizant',
    'Capgemini',
    'HCL',
    'Infosys',
    'Nestle',
    'Samsung'
  ];

  const faqs = [
    {
      question: 'What is the IIM Visakhapatnam online Executive Development Certification program?',
      answer: 'The IIM Visakhapatnam online Executive Development Certification program represents a prestigious suite of advanced management education offerings meticulously designed for ambitious professionals seeking transformative career advancement and leadership excellence. Established in 2015 as India\'s 20th Indian Institute of Management, IIM Visakhapatnam delivers world-class executive education through cutting-edge online programs encompassing Executive Program in Management (comprehensive 12-month general management certification), specialized IIM Online Courses spanning 6-24 months across multiple management domains, Executive Program in HR developing strategic human resource capabilities, Executive Program in Operations enhancing operational excellence, Executive Program in Marketing building advanced marketing competencies, prestigious Executive MBA (2 years) featuring 10 diverse specializations, and comprehensive Online MBA (2 years) offering 8 specialization options. Each certification program features sophisticated curriculum developed by distinguished faculty possessing doctoral degrees from premier institutions, combining rigorous theoretical foundations with practical industry applications delivered through advanced online platforms.'
    },
    {
      question: 'What distinguishes the online Executive Development Certification program?',
      answer: 'The online Executive Development Certification program from IIM Visakhapatnam distinguishes itself through multiple compelling dimensions of excellence. As one of India\'s top management institutes ranked 26th in NIRF 2024 Management Category with WES approval ensuring international recognition, the program delivers uncompromising academic quality equivalent to on-campus offerings. Distinguished faculty comprising accomplished scholars with extensive research expertise, consulting experience, and industry insights ensure transformative learning experiences. The sophisticated online learning platforms facilitate synchronous live sessions enabling real-time interaction with faculty and peers, asynchronous recorded lectures providing flexible learning, collaborative projects developing teamwork capabilities, comprehensive case studies fostering analytical thinking, business simulations enhancing decision-making skills, and industry interactions providing practical insights. Additionally, the institute\'s strong placement record with 100% placement rate, average package of 16.61 LPA representing 10.29% increase, and highest package achievement of 32.65 LPA validates the market recognition and career impact of IIM Visakhapatnam credentials.'
    },
    {
      question: 'Who is eligible to participate in the online Executive Development Certification program?',
      answer: 'Eligibility criteria for IIM Visakhapatnam\'s online Executive Development Certification programs are thoughtfully structured to ensure candidates possess appropriate academic foundations, professional experience, and intellectual capabilities necessary for advanced management education success. Generally, applicants must hold a bachelor\'s degree from a recognized university with specified minimum academic performance standards (typically 50% aggregate marks for general category candidates). Executive programs and specialized certifications typically require relevant professional work experience ranging from 2-5 years, ensuring participants bring meaningful workplace context that enriches peer learning, facilitates practical application of management concepts, and enables valuable experience sharing. For MBA programs, competitive scores in prestigious entrance examinations such as CAT, GMAT, or equivalent assessments may be required. The comprehensive selection process evaluates candidates through submitted documentation including application forms, academic transcripts, experience certificates, entrance exam scores where applicable, and professional achievements, followed by personal interviews assessing communication skills, leadership potential, career aspirations, and program fit.'
    },
    {
      question: 'What are the advantages of the Executive Development Certification online program?',
      answer: 'The Executive Development Certification online program from IIM Visakhapatnam offers multifaceted advantages that distinguish it as an exceptional educational investment for ambitious professionals. Career advancement opportunities manifest through prestigious IIM credential recognition by leading employers globally, significant salary increments averaging 10.29% as evidenced by recent placement statistics, enhanced leadership responsibilities, and accelerated progression to senior management positions. The flexible online delivery accommodates demanding professional schedules, eliminating geographical barriers and enabling learning without career interruption. Comprehensive curriculum spanning strategic management, financial analysis, marketing strategy, operations excellence, human resource management, data analytics, and digital transformation ensures holistic skill development. Access to distinguished faculty bringing extensive academic research and industry consulting expertise provides invaluable mentorship transcending traditional boundaries. Robust alumni network comprising successful professionals across diverse industries facilitates ongoing learning, networking, and career opportunities extending well beyond program completion. Cost-effective education with flexible EMI options and scholarship opportunities enhances accessibility without compromising quality.'
    },
    {
      question: 'How long will the online Executive Development Certification program last, and how will it be structured?',
      answer: 'IIM Visakhapatnam\'s online Executive Development Certification programs feature varied durations thoughtfully designed to address different learning objectives and professional commitments. Executive Program in Management spans comprehensive 12 months providing in-depth general management education, IIM Online Courses range from 6 to 24 months depending on selected specialization and learning depth, Executive Program in HR and Operations each require focused 6 months, Executive Program in Marketing condenses essential competencies into intensive 4 months, while Executive MBA and Online MBA extend across rigorous 2 years enabling comprehensive management education. The structure typically combines synchronous live virtual sessions scheduled during evenings or weekends accommodating working professionals, asynchronous recorded lectures enabling flexible self-paced learning, collaborative group projects developing teamwork and practical application capabilities, comprehensive case studies fostering analytical thinking and decision-making skills, assignments and quizzes ensuring continuous learning assessment, and culminating evaluations measuring overall competency development. This blended learning approach ensures comprehensive education while respecting professional commitments and personal circumstances of ambitious working professionals.'
    },
    {
      question: 'What are some best online executive programs in India?',
      answer: 'IIM Visakhapatnam stands among India\'s premier institutions offering exceptional online executive management programs distinguished by academic rigor, industry relevance, faculty excellence, innovative curriculum, and transformative career impact. Our Executive MBA featuring 10 comprehensive specializations provides extensive management education for mid-career professionals with substantial experience seeking advancement to senior leadership positions, encompassing strategic management, financial analysis, marketing strategy, operations excellence, organizational behavior, technology management, and leadership development. The Online MBA offering 8 diverse specializations enables professionals to customize educational journeys according to career aspirations and organizational needs. Our specialized Executive Programs in Management, HR, Operations, and Marketing provide focused learning pathways for rapid skill enhancement in specific domains. These programs balance rigorous theoretical foundations with practical industry applications through real-time case studies drawn from contemporary business challenges, business simulations replicating complex decision-making environments, collaborative projects enabling peer learning and teamwork development, and industry interactions providing valuable networking opportunities and practical insights, ensuring graduates possess contemporary knowledge, analytical capabilities, strategic thinking skills, and leadership competencies essential for driving organizational success.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Visakhapatnam Online Programs | MBA, Executive Programs & Certifications</title>
        <meta name="description" content="Explore online programs from IIM Visakhapatnam - Ranked 26th NIRF 2024, WES Approved. Executive MBA, Online MBA & Specialized Programs for professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Visakhapatnam.png" 
                alt="IIM Visakhapatnam Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Visakhapatnam, Andhra Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.0/5</span>
                    <span className={styles.reviews}>(818 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'AICTE', 'NAAC A'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 26 (Management 2024)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>NAAC A</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <h2>About IIM Visakhapatnam</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Visakhapatnam, established in 2015 by the Ministry of Human Resource Development, Government of India, has rapidly emerged as a leading business school distinguished by rigorous academic curriculum, cutting-edge research initiatives, and unwavering commitment to developing tomorrow's business leaders. Located in the vibrant coastal city of Visakhapatnam, Andhra Pradesh, IIM Visakhapatnam represents the 20th institution within India's prestigious IIM network, bringing world-class management education to the strategic eastern region of India while serving as a catalyst for regional economic development and business excellence.
                </p>
                <p>
                  The institute's educational philosophy extends beyond conventional management instruction, emphasizing holistic development of well-rounded business executives who possess not only comprehensive domain knowledge but also demonstrate strong leadership capabilities, ethical decision-making frameworks, global perspectives, and social responsibility. The curriculum undergoes continuous revision to maintain alignment with evolving business dynamics, integrating experiential learning methodologies, comprehensive case studies drawn from contemporary business challenges, sophisticated simulations replicating complex decision-making environments, and practical applications that sharpen students' analytical capabilities and strategic thinking competencies essential for navigating uncertain, volatile business landscapes.
                </p>
                <p>
                  IIM Visakhapatnam cultivates a robust research culture by encouraging faculty and students to pursue cutting-edge investigations addressing real-world business problems and societal challenges. Research centers and specialized programs focus on sustainable development, social entrepreneurship, digital transformation, rural marketing, technology management, and emerging business paradigms. Faculty members actively participate in national and international conferences, publish research articles in prestigious peer-reviewed journals, collaborate with leading global universities on joint research initiatives, and engage with industry through consulting projects, building a dynamic research ecosystem that encourages innovation, knowledge creation, and practical impact beyond academia.
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
                  <div className={styles.statNumber}>16.61 LPA</div>
                  <div className={styles.statLabel}>Average Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>32.65 LPA</div>
                  <div className={styles.statLabel}>Highest Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
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
                Comprehensive enrollment pathway to join one of India's leading coastal business schools
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Visit the official IIM Visakhapatnam website and navigate to the registration section. Complete registration with valid phone number and email ID for credential generation.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Verification</h3>
                    <p>Review and confirm program-specific eligibility requirements including minimal educational credentials (Bachelor's degree), work experience prerequisites, and other program-specific criteria.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Fill essential information, upload appropriate documents including academic transcripts, experience certificates, ID proof, and submit the comprehensive application form online.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Selection Process</h3>
                    <p>Undergo screening based on eligibility requirements, followed by additional review through written tests, interviews, or assessment techniques as determined appropriate by IIM Visakhapatnam.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Confirmation</h3>
                    <p>Upon receiving admission offer, pay program fees according to institute requirements. IIM Visakhapatnam confirms admission to the certificate program after successful fee payment.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university required for all programs</li>
                  <li>Work experience: Executive programs typically require 2-5 years</li>
                  <li>Online programs may offer direct admission for eligible candidates</li>
                  <li>Flexible payment options with installment facilities available</li>
                  <li>Merit-based scholarships and financial assistance programs accessible</li>
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
                  <h3>16.61 LPA</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>32.65 LPA</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>17%</h3>
                  <p>Dual Offers</p>
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
                Detailed responses addressing essential inquiries about IIM Visakhapatnam's distinguished online programs
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

export default IIMVisakhapatnam;
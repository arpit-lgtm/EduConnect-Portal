import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMSambalpur = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 1200000, duration: '1-2 Years', specializations: 1 },
    { name: 'Doctor of Philosophy (PhD)', fee: 725000, duration: '2 Years', specializations: 1 },
    { name: 'Online MBA', fee: 1200000, duration: '2 Years', specializations: 1 },
    { name: 'Online DBA Program', fee: 725000, duration: '3 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 50th in NIRF 2024 Management Category',
    'Established in 2015 in Sambalpur, Odisha',
    'Triple crown accredited with EQUIS, AMBA, and AACSB for global recognition',
    'Highest gender diversity among all IIMs with 46% girls in MBA program',
    'Situated between scenic beauty of twelve hills (Barapahad)',
    'Interactive and supportive work culture with helpful faculty',
    '130+ companies visited campus in latest placement drive',
    'Average CTC offered: 16 LPA with 30% increase in recruitment'
  ];

  const approvals = ['NIRF Rank 50', 'AACSB', 'AMBA', 'EQUIS'];
  const nirfRank = 'Rank 50';
  const accreditation = 'AACSB, AMBA, EQUIS';

  const placementPartners = [
    'Google', 'ICICI Bank', 'Accenture', 'Amazon', 'Byjus', 'Cognizant',
    'Deloitte', 'Flipkart', 'HP', 'Infosys', 'L&T', 'TCS',
    'Genpact', 'Ernst & Young', 'Amul', 'Bajaj'
  ];

  const faqs = [
    {
      question: 'What is the average salary of IIM Sambalpur?',
      answer: 'IIM Sambalpur graduates achieve impressive career outcomes, with average annual compensation packages reaching ₹16 lakhs per annum (LPA), reflecting strong market recognition of the institute\'s educational quality and graduate capabilities. The institute has witnessed remarkable 30% growth in recruitment activity, with 130+ distinguished organizations actively participating in comprehensive placement drives. Premier recruiters including Ernst & Young (EY), Deloitte, Amul, and Bajaj Group demonstrate strong confidence in IIM Sambalpur talent, offering diverse roles spanning consulting, finance, marketing, operations, and strategic management. These robust placement outcomes validate the institute\'s commitment to producing industry-ready professionals equipped with sophisticated management competencies and leadership potential.'
    },
    {
      question: 'Does IIM Sambalpur offer online or executive programs?',
      answer: 'Yes, IIM Sambalpur offers a comprehensive suite of flexible learning programs designed specifically for accomplished professionals seeking advanced management education without interrupting their career trajectories. Our distinguished offerings include the prestigious Executive MBA program, versatile Online MBA, rigorous PhD (Doctor of Philosophy) for scholarly pursuits, and the innovative Online DBA (Doctor of Business Administration) Program. Each program features meticulously designed curriculum that balances theoretical rigor with practical application, delivered through sophisticated online learning platforms that facilitate interactive engagement with accomplished faculty and diverse peer cohorts. These programs are strategically architected to upskill senior executives, emerging leaders, and ambitious professionals with cutting-edge management knowledge, strategic thinking capabilities, and leadership competencies essential for driving organizational excellence in today\'s dynamic business landscape.'
    },
    {
      question: 'What are the criteria for online programs at IIM Sambalpur?',
      answer: 'IIM Sambalpur\'s admission criteria for online programs are thoughtfully designed to identify candidates possessing the academic foundations, professional experience, and intellectual capabilities necessary for advanced management education success. Generally, candidates must hold a bachelor\'s degree from a recognized university with specified minimum academic performance standards. Admission requires valid scores from prestigious entrance examinations including GMAT (Graduate Management Admission Test), GRE (Graduate Record Examination), CAT (Common Admission Test), CSIR (Council of Scientific & Industrial Research), or GATE (Graduate Aptitude Test in Engineering), depending on the specific program. Selected programs may require the IIM Sambalpur Aptitude Test (IIMSAT). Additionally, executive and specialized programs typically mandate relevant professional work experience to ensure meaningful peer learning and practical application of advanced management concepts. Detailed program-specific requirements ensure optimal matching between candidate capabilities and program expectations.'
    },
    {
      question: 'What are the contact details of IIM Sambalpur?',
      answer: 'For comprehensive information regarding admission processes, program details, curriculum specifics, and application procedures, prospective students are encouraged to visit the official IIM Sambalpur website, which provides detailed resources covering all aspects of the institute\'s offerings. Alternatively, candidates can connect directly with the dedicated admissions office through the university\'s official communication channels for personalized guidance and query resolution. The institute\'s picturesque campus is strategically located in Goshala, Sambalpur, Odisha, embraced by the serene natural beauty of the Barapahad hills—an environment that inspires contemplative learning and holistic development. Our admissions team remains committed to providing comprehensive support throughout your application journey, ensuring you have all necessary information to make informed educational decisions aligned with your professional aspirations.'
    },
    {
      question: 'What is the last date to apply for IIM Sambalpur?',
      answer: 'Application deadlines for IIM Sambalpur programs vary based on specific program offerings, intake cycles, and admission schedules. To ensure you receive the most current and accurate information regarding application timelines, admission windows, entrance examination deadlines, and program-specific schedules, we strongly recommend consulting the official IIM Sambalpur website regularly. The admissions section provides comprehensive details on upcoming intake schedules, important dates, document submission requirements, and application process milestones. Early application is generally advisable, as it allows sufficient time for thorough application preparation, entrance examination scheduling, and thoughtful program selection. Our admissions team updates all deadline information regularly to ensure prospective students have access to timely, accurate guidance for their application planning.'
    },
    {
      question: 'Are there any financial aids provided at IIM Sambalpur?',
      answer: 'IIM Sambalpur demonstrates strong commitment to making world-class management education accessible through comprehensive financial support mechanisms designed to assist deserving candidates. The institute offers convenient no-cost EMI (Equated Monthly Installment) options and education loan facilitation through partner financial institutions, enabling students to manage educational investments alongside existing financial commitments. Beyond these flexible payment structures, IIM Sambalpur provides multiple scholarship opportunities including the prestigious Vyasakabi Fakir Mohan Senapati Scholarship honoring academic excellence, Prof. Ghanshyam Dash Scholarship recognizing outstanding potential, merit-based scholarships rewarding exceptional academic achievement, and dedicated scholarships supporting minority community students. These thoughtfully designed financial aid programs ensure that talented, ambitious individuals are not constrained by immediate financial circumstances in pursuing transformative educational opportunities that significantly enhance long-term career prospects and professional fulfillment.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Sambalpur - Indian Institute of Management Sambalpur Online | EduConnect</title>
        <meta name="description" content="Explore IIM Sambalpur's online management programs. Established in 2015, ranked 50th in NIRF 2024. Triple crown accredited with EQUIS, AMBA, and AACSB." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Sambalpur.png" 
                alt="IIM Sambalpur Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => { e.target.src = '/images/universities/default-university.png'; }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Sambalpur, Odisha</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.0/5</span>
                    <span className={styles.reviews}>(319 Reviews)</span>
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
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
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

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {['about', 'courses', 'admissions', 'placements', 'faqs'].map(tab => (
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
              <h2>About IIM Sambalpur</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Sambalpur represents one of the newest yet remarkably dynamic additions to India's 
                  prestigious IIM ecosystem, established in 2015 through visionary governmental initiative. Nestled amidst the breathtaking 
                  natural beauty of Barapahad—a picturesque expanse of twelve hills in Sambalpur, Odisha—the institute harmoniously blends 
                  serene environmental surroundings with cutting-edge management education excellence. This unique geographical setting 
                  provides an inspiring backdrop for transformative learning experiences, fostering contemplative thinking, innovative 
                  ideation, and holistic personal development alongside rigorous academic pursuits that define the distinguished IIM tradition.
                </p>
                <p>
                  IIM Sambalpur offers a comprehensive portfolio of management education programs spanning MBA specializations and doctoral 
                  programs, each featuring meticulously crafted curriculum that undergoes continuous refinement to incorporate contemporary 
                  business trends, emerging technologies, and evolving industry requirements. The institute's recently launched online executive 
                  programs demonstrate strategic responsiveness to professional development needs, designed specifically for senior executives 
                  and organizational leaders seeking to enhance leadership acumen, strategic management capabilities, and transformational 
                  competencies. Distinguished by its NIRF 2024 ranking of 50th among India's management institutions, IIM Sambalpur exemplifies 
                  rapid ascent toward academic excellence and growing recognition within the competitive business education landscape.
                </p>
                <p>
                  Admission to IIM Sambalpur reflects the institute's commitment to identifying and nurturing exceptional talent capable of 
                  driving meaningful organizational and societal transformation. The rigorous selection process emphasizes performance in 
                  prestigious national and international entrance examinations including CAT, GRE, GMAT, GATE, and CSIR NET, ensuring that 
                  admitted students possess strong analytical capabilities, intellectual curiosity, and leadership potential. The institute's 
                  globally competitive curriculum, particularly in executive programs, is strategically architected to address futuristic 
                  organizational requirements, incorporating highly flexible learning methodologies and continuously updated content that 
                  enables professionals to excel in increasingly complex global business environments.
                </p>
                <p>
                  IIM Sambalpur distinguishes itself through state-of-the-art infrastructure encompassing modern residential facilities, 
                  comprehensive library resources, advanced technological amenities, and collaborative learning spaces that facilitate academic 
                  excellence and holistic student development. Remarkably, the institute maintains the highest gender diversity among all IIM 
                  institutions, with women comprising 46% of MBA program enrollment—a testament to IIM Sambalpur's unwavering commitment to 
                  inclusive education and equitable opportunities. This diverse, supportive learning environment, complemented by accomplished 
                  faculty comprising renowned scholars and industry practitioners, cultivates collaborative excellence, diverse perspectives, 
                  and transformative leadership capabilities that prepare graduates for impactful careers across global organizational contexts.
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
                  <div className={styles.statNumber}>4</div>
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
                Explore our comprehensive range of online management programs designed for ambitious professionals
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
                        <td>{course.specializations} Options</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> EMI options available through trusted financial partners. 
                Education loans with competitive interest rates and flexible repayment terms.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at IIM Sambalpur
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Registration</h3>
                    <p>Visit the official website of IIM Sambalpur and register yourself with the required information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Login Credentials</h3>
                    <p>After completing registration, you will receive your personnel login credentials on the website.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Log in with received credentials and click on the online application tab. Fill in your entrance exam scores.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Complete the application form with accurate information and attach all required documents.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Review and Submit</h3>
                    <p>Before submitting the form, pay the fee and review your application thoroughly.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university with minimum qualifying percentage</li>
                  <li>Minimum required marks in entrance exams (GMAT/GRE/CAT/CSIR/GATE)</li>
                  <li>Work experience as specified by the program</li>
                  <li>Valid entrance test scores (IIM Sambalpur Aptitude Test for some programs)</li>
                  <li>Valid ABC ID and DEB ID as per latest UGC guidelines</li>
                  <li>All required documents must be accurate and properly attested</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access extensive career opportunities through our robust Career Development Services
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>16 LPA</h3>
                  <p>Average CTC</p>
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
                Find answers to common queries about IIM Sambalpur programs
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

export default IIMSambalpur;

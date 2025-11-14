import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITVaranasi = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'PhD Program', fee: 96000, duration: '3 Years', specializations: 16 },
    { name: 'M.Tech Program', fee: 92630, duration: '2 Years', specializations: 14 }
  ];

  const keyHighlights = [
    'Ranked 15th in NIRF 2023 Engineering Category',
    'Established in 1919, completed 100 years in 2019',
    'One of India\'s oldest engineering institutions',
    'Located within 400-acre Banaras Hindu University campus',
    'Initially known as Banaras Engineering College (BENCO)',
    '16 departments and 3 interdisciplinary schools',
    '30,000+ students - India\'s largest residential university',
    'Pioneers in electrical, ceramic, and mechanical engineering',
    'Average placement: ₹23.13 LPA, Highest: ₹1.2 CPA',
    'Recognized by UGC and AICTE'
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Microsoft', 'IBM', 'Accenture',
    'KPMG', 'Paytm', 'PWC', 'Dell', 'JP Morgan',
    'Deloitte', 'Oracle', 'SAP', 'Infosys', 'TCS', 'Wipro'
  ];

  const faqs = [
    {
      question: 'Does IIT (BHU) Varanasi offer online courses?',
      answer: 'Yes, IIT BHU Varanasi provides online certificate and degree-level courses alongside executive programs for working professionals without entrance examination requirements, requiring only basic eligibility verification.'
    },
    {
      question: 'What disciplines are offered in online mode at IIT (BHU) Varanasi?',
      answer: 'Online programs include Executive MBA in Finance, Executive M.Tech in Big Data/Blockchain/Cloud Computing, PG Certifications in Cybersecurity, Logistics, Financial Planning, and Business Data Analytics.'
    },
    {
      question: 'Are online courses offered at IIT (BHU) Varanasi valid for international jobs?',
      answer: 'Yes, all online courses and certifications from IIT BHU Varanasi carry international recognition and are valued by global employers for technical and managerial positions.'
    },
    {
      question: 'Does IIT (BHU) Varanasi offer financial aid or scholarships?',
      answer: 'Yes, merit-cum-means scholarships are available to approximately 25% of UG students. Central and state governments also provide various financial aids. EMI facilities are accessible.'
    },
    {
      question: 'Can I get admission at IIT (BHU) Varanasi without entrance examination?',
      answer: 'Online certificate and degree programs accept applications without entrance exams after verifying basic eligibility criteria. Regular programs require JEE/GATE/JAM/NET qualifications based on program level.'
    },
    {
      question: 'What is the campus infrastructure like at IIT BHU Varanasi?',
      answer: 'The 400-acre campus within BHU features comprehensive facilities including modern laboratories, extensive library resources, hostel accommodations, sports complexes, medical center, and advanced research infrastructure supporting holistic development.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT (BHU) Varanasi Online Programs | M.Tech, PhD, Executive MBA</title>
        <meta name="description" content="IIT BHU Varanasi - Ranked 15th NIRF 2023 Engineering. Centenary institution offering M.Tech, PhD, executive programs with excellent placements." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Varanasi.png" 
                alt="IIT Varanasi Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Varanasi, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(378 Reviews)</span>
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
                  <span className={styles.infoValue}>Rank 15 (Engineering 2023)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>NAAC A</span>
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
              <h2>About IIT (BHU) Varanasi</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIT (BHU) Varanasi was established in 1919 as Banaras Engineering College (BENCO), celebrating its centenary milestone in 2019. The institute holds the distinguished legacy of introducing electrical, ceramic, and mechanical engineering disciplines to India's academic landscape. Located within the historic 400-acre Banaras Hindu University campus in Varanasi, Uttar Pradesh, it evolved into IIT status while maintaining deep-rooted traditions of academic excellence. The campus accommodates 30,000+ students in residential facilities, earning recognition as India's largest residential university fostering vibrant academic communities and cultural diversity.
                </p>
                <p>
                  The institute comprises 16 specialized departments, 3 interdisciplinary schools, and humanities section offering diverse undergraduate, postgraduate, and doctoral programs. The curriculum undergoes regular revision aligning with latest education policies, industry requirements, and emerging technological trends. Academic programs emphasize value-based learning integrated with hands-on engineering skills through project-based learning, laboratory experimentation, and industry internships. Faculty members engage in cutting-edge research across nanotechnology, renewable energy, artificial intelligence, advanced materials, and environmental engineering, attracting substantial funding from governmental and industry partnerships.
                </p>
                <p>
                  IIT BHU Varanasi ranks 15th in NIRF 2023 Engineering Category, reflecting sustained commitment to academic quality and research impact. The Training and Placement Cell collaborates with leading companies across technology, consulting, manufacturing, and finance sectors conducting comprehensive placement drives. The institute achieves exceptional placements with average packages of ₹23.13 LPA and highest offers reaching ₹1.2 Crore Per Annum, with top recruiters including Google, Amazon, Microsoft, IBM, Accenture, and major consulting firms. Comprehensive campus infrastructure includes modern library resources, research laboratories, computational facilities, sports complexes, and student activity centers supporting holistic development.
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
            </div>
          )}

          {/* Programs Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
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
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                IIT BHU Varanasi selects candidates through nationally recognized entrance examinations.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination Clearance</h3>
                    <p>Clear relevant national entrance examinations including JEE Advanced for undergraduate programs, GATE for M.Tech admissions, or JAM/NET for PhD programs. Achievement of minimum qualifying marks as per category-specific requirements is essential to proceed with the application process.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Registration and Application</h3>
                    <p>Register on the official IIT BHU admission portal or through centralized platforms like JoSAA for B.Tech programs. Provide complete personal information, educational qualifications, entrance test scores, and upload necessary documents such as mark sheets, certificates, and identity proofs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Evaluation and Selection</h3>
                    <p>Based on entrance examination performance and academic credentials, participate in the selection process which may include counseling sessions for program allocation. PhD candidates undergo additional evaluation through interviews and research proposal assessments conducted by respective departments.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Confirmation</h3>
                    <p>Complete the document verification process by submitting original academic certificates and other required credentials. Pay the program fees within the deadline, undergo mandatory medical examination, and finalize enrollment formalities to secure your admission at IIT BHU Varanasi.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> Bachelor's degree in relevant engineering/technology field with valid GATE score. Minimum qualifying marks as per category requirements</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree in relevant discipline with NET/GATE/JAM/equivalent qualification demonstrating research potential and academic excellence</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Programs:</strong> Bachelor's degree with relevant work experience for executive programs. Program-specific eligibility applies for certifications</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionDesc}>
                IIT BHU Varanasi's efficient training and placement cell collaborates with leading corporations, organizing on-campus recruitment drives and counseling sessions ensuring exceptional career opportunities.
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
                  <h3>₹23.13L</h3>
                  <p>Average Package</p>
                </div>
              </div>

              <h3>Top Recruiters</h3>
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

export default IITVaranasi;

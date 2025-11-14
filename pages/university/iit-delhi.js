import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITDelhi = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 1260000, duration: '1-2 Years', specializations: 1 },
    { name: 'Doctor of Philosophy (PhD)', fee: 29900, duration: '1-2 Years', specializations: 1 },
    { name: 'M.Tech Program', fee: 800000, duration: '2 Years', specializations: 12 },
    { name: 'Part-Time PhD', fee: 239400, duration: '1-2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 4th in NIRF 2024 Overall, 3rd in Engineering',
    'QS World Rank 48 in Engineering & Technology 2023',
    'Established in 1961 by PM Jawaharlal Nehru',
    'BTech CSE packages exceed ₹1 Crore annually',
    'Partnerships with 100+ universities in 40 countries',
    'UNESCO & Ford Foundation supported foundation',
    'Annual enrollment of ~1,000 undergraduate students',
    'Top recruiters: Google, Amazon, Microsoft, Flipkart',
    'State-of-the-art research facilities and labs',
    'Vibrant student community with 40+ technical societies'
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Deloitte', 'Flipkart', 'Infosys',
    'PWC', 'TCS', 'Tech Mahindra', 'Microsoft', 'IBM',
    'Goldman Sachs', 'JP Morgan', 'McKinsey', 'BCG', 'Accenture',
    'Oracle', 'SAP', 'Adobe', 'Intel', 'Qualcomm', 'Samsung'
  ];

  const faqs = [
    {
      question: 'What programs does IIT Delhi offer for working professionals?',
      answer: 'IIT Delhi offers Executive MBA, Part-time PhD, Executive Development Programs, and certificate courses in Data Science, AI, Machine Learning.'
    },
    {
      question: 'What is the admission process for PhD programs at IIT Delhi?',
      answer: 'Master\'s degree + GATE/national test, written exam, interview with research proposal. Full-time: 4-5 years, Part-time: 5-7 years. Financial support included.'
    },
    {
      question: 'Does IIT Delhi have international collaborations?',
      answer: 'Yes, IIT Delhi collaborates with 100+ universities across 40 countries including MIT, Stanford, Cambridge, ETH Zurich, NUS, and TUM.'
    },
    {
      question: 'What are the placement statistics for IIT Delhi graduates?',
      answer: 'IIT Delhi reports 300+ recruiters, highest packages exceeding ₹1 Crore, average ₹15-25 Lakhs across sectors with extensive alumni network support.'
    },
    {
      question: 'What facilities are available on IIT Delhi campus?',
      answer: 'Modern classrooms, research labs, computing centers, 400,000+ books library, hostels, sports (swimming, gymnasium, courts), medical, cafeterias, shopping complex.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Delhi Online Programs | Executive MBA, M.Tech, PhD</title>
        <meta name="description" content="Explore online programs from IIT Delhi - Ranked 4th NIRF 2024, QS Rank 48. Executive MBA, M.Tech, PhD programs for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Delhi.png" 
                alt="IIT Delhi Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Hauz Khas, South Delhi</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.6/5</span>
                    <span className={styles.reviews}>(872 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'AICTE', 'NAAC A', 'NBA'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 4 (Overall 2024)</span>
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
              <h2>About IIT Delhi</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Delhi, established in 1961 when Prime Minister Jawaharlal Nehru laid its foundation stone, stands as one of India's most prestigious technical institutions and has consistently maintained its position among the nation's top engineering colleges. Initially supported by UNESCO and the Ford Foundation, IIT Delhi has evolved into a world-class research university recognized globally for academic excellence, groundbreaking research, technological innovation, and transformative contributions to engineering education. Designated as an Institute of National Importance under the Institutes of Technology Act, the institute occupies a sprawling campus in Hauz Khas, South Delhi, providing modern infrastructure, state-of-the-art laboratories, extensive library resources, comfortable residential facilities, and vibrant academic environments conducive to learning, research, and holistic student development.
                </p>
                <p>
                  IIT Delhi encompasses 16 specialized academic departments and centers spanning Aerospace Engineering, Applied Mechanics, Biochemical Engineering and Biotechnology, Chemical Engineering, Chemistry, Civil Engineering, Computer Science and Engineering, Electrical Engineering, Energy Studies, Humanities and Social Sciences, Management Studies, Materials Science and Engineering, Mathematics, Mechanical Engineering, Physics, and Textile Technology. The institute offers comprehensive educational programs including Bachelor of Technology across diverse specializations, integrated dual-degree programs, Master of Technology, Master of Science, MBA, Executive MBA for working professionals, Master of Design, and rigorous doctoral programs facilitating advanced research across multidisciplinary domains. IIT Delhi's faculty comprises distinguished scholars, researchers, and industry experts who have earned prestigious national and international recognitions for academic contributions, research innovations, and professional achievements.
                </p>
                <p>
                  Research excellence constitutes a fundamental pillar of IIT Delhi's mission, evidenced by numerous specialized research centers, extensive sponsored projects worth hundreds of crores annually, prolific publication records in top-tier international journals, substantial patent portfolios, and collaborative initiatives addressing critical challenges in energy, environment, healthcare, infrastructure, artificial intelligence, and sustainable development. The institute has fostered a thriving entrepreneurial ecosystem through dedicated incubation facilities, mentorship programs, funding opportunities, and industry connections, nurturing successful startups across technology sectors and contributing significantly to India's innovation landscape. IIT Delhi maintains extensive international collaborations with over 100 prestigious universities across 40 countries, facilitating student exchanges, joint research programs, faculty collaborations, and global learning opportunities.
                </p>
                <p>
                  Consistently ranked among India's top five institutions by NIRF and featuring prominently in global rankings including QS World University Rankings (48th in Engineering & Technology), THE World Rankings, and other international assessments, IIT Delhi has earned worldwide recognition for research impact, academic reputation, graduate employability, and institutional excellence. The institute's illustrious alumni network spans 50,000+ graduates occupying leadership positions in technology companies, consulting firms, financial institutions, research organizations, academic institutions, government agencies, and entrepreneurial ventures worldwide, consistently contributing to IIT Delhi's legacy while maintaining strong engagement with current students through mentorship, recruitment, philanthropy, and collaborative initiatives that reinforce the institution's enduring commitment to developing future leaders, innovators, and scholars who will drive technological advancement and societal progress.
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
              <p className={styles.sectionIntro}>
                IIT Delhi's comprehensive admissions process ensures selection of the most talented and motivated candidates through rigorous national-level examinations and holistic evaluation criteria.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>
                      Candidates must appear for relevant national-level entrance examinations: JEE Main and JEE Advanced for B.Tech admissions, GATE (Graduate Aptitude Test in Engineering) for M.Tech programs, CAT/GMAT for MBA and Executive MBA, CEED/UCEED for Design programs, and department-specific entrance tests for doctoral programs. These examinations rigorously assess candidates' aptitude, domain knowledge, analytical abilities, problem-solving skills, and research potential through comprehensive objective and subjective question formats.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>
                      Following entrance examination results, eligible candidates must complete detailed online application forms through IIT Delhi's official admission portal, providing comprehensive personal information, educational qualifications, test scores, work experience details (for executive programs), and uploading scanned copies of required documents including academic transcripts, certificates, identity proof, photographs, and relevant supporting materials.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Selection Process</h3>
                    <p>
                      The admissions committee conducts comprehensive evaluation based on entrance test performance, academic records, relevant work experience, research proposals (for PhD), letters of recommendation, statement of purpose, and alignment with program requirements. Shortlisted candidates may be invited for personal interviews, group discussions, written tests, or counseling rounds depending on the program, where selection panels assess candidates' domain knowledge, communication skills, research aptitude, and overall suitability for academic pursuits.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Offer & Enrollment</h3>
                    <p>
                      Successful candidates receive formal admission offers detailing program specifics, fee structure, reporting dates, and enrollment procedures. Candidates must accept offers within stipulated timelines, pay required admission deposits to secure enrollment, complete medical examinations, submit original documents for verification, and report to campus on scheduled dates for physical document verification, biometric registration, hostel allocation, orientation programs, and commencement of academic activities.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech/M.Des Programs:</strong> Bachelor's degree in Engineering/Technology/Design with minimum 60% marks (55% for reserved categories). Valid GATE score required for most programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree with 60% marks or Bachelor's with exceptional academic record. GATE/NET qualification preferred. Research aptitude test and interview mandatory</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/Executive Programs:</strong> Bachelor's degree with minimum 60% marks. Valid CAT score and minimum 2-3 years work experience required for executive programs</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionIntro}>
                IIT Delhi's Training & Placement Cell consistently achieves exceptional placement records, attracting leading national and international companies across diverse industries.
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
                  <h3>₹1+ Cr</h3>
                  <p>Highest Package</p>
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

export default IITDelhi;

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const HPUHimachalPradeshUniversityDistanceEducation = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'BA', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'B.Ed', fee: 0, duration: '2 Years', category: 'Undergraduate' },
    { name: 'B.Com', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BCA', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'MCA', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. English', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. Sociology', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. Sanskrit', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. Music', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. Public Administration', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. Hindi', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. Pol. Science', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. History', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. Economics', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.Sc. Math', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. Education', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.A. Journalism', fee: 0, duration: '2 Years', category: 'Postgraduate' },
  ];

  const keyHighlights = [
    'Founded in 1971 with the Management Studies Department, later became HPU Business School',
    'Beautiful campus located at Dummer Hill of Shimla surrounded by natural resources',
    'UGC, AICTE, and NAAC A Grade approved and accredited university',
    'MBA program excelling globally with professionals from Middle East, South Asia, and African countries',
    'Unique learning experience with excellent climate and amazing infrastructure at beautiful location',
    'Multiple departments: Civil Engineering, Computer Science, Electronics & Communication, Electrical Engineering, Applied Science',
    'Comprehensive distance education programs: UG, PG, and Diploma courses',
    'Students regularly selected in national and international competitive examinations like SET, NET & JRF',
    'Industry Interaction Programme with experts conducting live interactive sessions',
    'Scholarship opportunities under Mentorship Scheme and SBA scholarships for various categories',
    'Campus set among silver oaks, deodar trees, rhododendrons creating amazing atmosphere',
    'Strong focus on economic, social, cultural, and ethical awareness'
  ];

  const approvals = ['UGC', 'AICTE', 'NAAC A'];
  const accreditation = 'NAAC A Grade';

  const placementPartners = [
    'Google', 'Amazon', 'Capgemini', 'Deloitte',
    'Flipkart', 'IBM', 'KPMG', 'Microsoft',
    'TCS', 'Air India', 'IDBI', 'SAIL',
    'ITC', 'Airtel', 'Bank of America', 'Tata International',
    'BHEL', 'Bank of Punjab', 'HCL', 'HDFC',
    'ICICI Bank', 'Wipro', 'Infosys', 'Tech Mahindra'
  ];

  const faqs = [
    {
      question: 'Are the courses offered to the students in distance mode at Himachal Pradesh University?',
      answer: 'Yes, Himachal Pradesh University offers comprehensive distance education programs through its Distance Education Department. The university provides undergraduate programs (BA, B.Ed, B.Com, BCA), postgraduate programs (M.A. in various disciplines, M.Sc., MCA, M.A. Journalism), and diploma programs (PGDCA, DTG, DYS, PGHRD) in distance mode, allowing students to pursue quality education with flexibility.'
    },
    {
      question: 'What courses are offered at Himachal Pradesh University Distance Education?',
      answer: 'HPU Distance Education offers a variety of courses including Undergraduate programs: BA, B.Ed, B.Com, BCA; Postgraduate programs: M.A. (English, Sociology, Economics, Sanskrit, Music, Public Administration, Hindi, Political Science, History), M.Sc. Math, M.A. Education, MCA, M.A. Journalism; and Diploma programs: PGDCA, DTG, DYS, PGHRD. All programs are designed with updated curriculum and comprehensive study materials.'
    },
    {
      question: 'Can we give online examinations of Himachal Pradesh University Distance Education?',
      answer: 'Examinations at HPU Distance Education are conducted at designated examination centers. Students need to appear at these centers following the guidelines provided by the university. The evaluation is based on two main factors: assignments (which must be submitted at the study center by specified dates) and final examinations. It is crucial to check all updates on the university website and portal regularly.'
    },
    {
      question: 'What are the disciplines that are offered at Himachal Pradesh University Distance Education?',
      answer: 'HPU Distance Education offers programs across multiple disciplines including Arts & Humanities (English, Hindi, Sanskrit, History, Music), Social Sciences (Sociology, Political Science, Public Administration, Economics), Education (B.Ed, M.A. Education), Commerce (B.Com), Computer Applications (BCA, MCA), Mathematics (M.Sc. Math), and Mass Communication (M.A. Journalism), providing comprehensive options for students.'
    },
    {
      question: 'How to contact Himachal Pradesh University Distance Education?',
      answer: 'Students can contact Himachal Pradesh University through the official university website, visit the Distance Education Department at the Shimla campus, or reach out through designated study centers. The university maintains an updated portal and website where students can access all information, updates, examination schedules, and contact details for various departments and support services.'
    }
  ];

  return (
    <>
      <Head>
        <title>HPU Himachal Pradesh University Distance Education - BA, B.Com, MA, MCA | MBA NINJA</title>
        <meta name="description" content="Himachal Pradesh University Distance Education - NAAC A Grade. Founded 1971. UG, PG, Diploma programs. Beautiful Shimla campus. UGC-AICTE approved." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Himachal Pradesh University.png" 
                alt="Himachal Pradesh University Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => {
                  e.target.src = '/images/universities/default-university.png';
                }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Shimla, Himachal Pradesh, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.4/5</span>
                    <span className={styles.reviews}>(258 Reviews)</span>
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
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>{accreditation}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Established:</span>
                  <span className={styles.infoValue}>1971</span>
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
                {tab === 'courses' ? 'Programs & Fees' : tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Himachal Pradesh University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  Himachal Pradesh University was founded in 1971 with the Management Studies Department, which was established 
                  30 years back and later it became Himachal Pradesh University Business School. The students can pursue regular 
                  and distance education programs from the university with equal quality and recognition. The MBA (Master of Business 
                  Administration) program from this university is excelling not just in India, but all over the world.
                </p>
                <p>
                  Many professionals from the global market have pursued business programs at this institute. They have re-engineered 
                  the management process in the schools, bringing international best practices to Indian education. Many foreign students 
                  from the Middle East, South Asia, and African Countries are trained in University Departments, showcasing the university's 
                  global reach and reputation.
                </p>
                <p>
                  With an excellent climate and amazing infrastructure at a beautiful location, the learning experience at HPU is unique 
                  and extraordinary. The university has various departments that offer distinct courses to the students like Department of 
                  Civil Engineering, the Department of Computer Science & Engineering, the Department of Electronics and Communication, 
                  the Department of Electrical Engineering, and the Department of Applied Science and Humanities.
                </p>
                <p>
                  In distance mode, the university offers undergraduate programs that are BA, B.Ed, and B.Com, BCA. Other postgraduate 
                  and diploma programs offered to the students are M.A. (English, Sociology, Economics, Sanskrit, Music, Public Administration, 
                  Hindi, Political Science, History), M.Sc. Math, M.A. Education, MCA, M.A. Journalism, PGDCA, DTG, DYS, PGHRD. This 
                  comprehensive range ensures students have diverse options across multiple disciplines.
                </p>
                <p>
                  The main headquarters of the University are at Dummer Hill of Shimla. The University is beautifully settled among 
                  the natural resources all around like silver oaks, deodar trees, rhododendrons, and many more. It offers an amazing 
                  atmosphere to learn and get better with the skills. The scenic beauty and peaceful environment create an ideal setting 
                  for academic pursuits and personal growth.
                </p>
                <p>
                  The university makes students aware of economic, social, cultural, and other important ethics, preparing them to be 
                  responsible citizens and professionals. Every year many students get selected in the national and international competitive 
                  entrance examinations, like SET, NET & JRF, demonstrating the quality of education provided.
                </p>
                <p>
                  If we talk about the regulatory bodies of the University, all the centers, departments, schools, model schools, and 
                  institutes are regulated by government bodies like the University Grants Commission (UGC), National Assessment & 
                  Accreditation Council (NAAC) A grade, All India Council for Technical Education (AICTE), and many more, ensuring 
                  the highest standards of quality and compliance.
                </p>

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
                    <div className={styles.statNumber}>54+</div>
                    <div className={styles.statLabel}>Years of Legacy (1971)</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>17</div>
                    <div className={styles.statLabel}>Programs Offered</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>NAAC A</div>
                    <div className={styles.statLabel}>Grade Accreditation</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>Global</div>
                    <div className={styles.statLabel}>Student Base</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                HPU Distance Education offers 17 comprehensive programs across undergraduate, postgraduate, and diploma levels.
              </p>
              
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Duration</th>
                      <th>Category</th>
                      <th>Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.duration}</td>
                        <td>{course.category}</td>
                        <td className={styles.fee}>Distance Education</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>NAAC A Grade Quality:</strong> All programs are UGC-AICTE approved with comprehensive study materials and 
                updated curriculum. Scholarship opportunities available under Mentorship Scheme and SBA scholarships for minorities, 
                Divyang, OBC, General Category, SC, ST students. Beautiful Shimla campus with study centers for student convenience.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p>HPU offers quality education through a simple online application process for distance education programs.</p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Choose the Right Course</h3>
                    <p>Select the course that aligns with your career goals and aspirations. Check the eligibility criteria to ensure you meet all the requirements for the selected course before proceeding.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Complete online registration at the university portal using your phone number and email ID. Make sure to add a functional ID and phone number to have a smooth verification process.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Receive Login Details</h3>
                    <p>After registration, you will receive login details on your registered phone number or email address. Use these credentials to access your application portal.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>After logging in, fill in the correct details in the application form. Check the information filled twice to ensure accuracy and completeness before submission.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Scan all required documents and upload them on your portal. Ensure all documents are clear and properly scanned for verification purposes.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Payment & Confirmation</h3>
                    <p>You will get the payment details on the portal. Complete the payment step and take a print of the receipt for future reference and admission confirmation.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/B.Com/BCA):</strong> 12th pass from recognized board with minimum qualifying marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Ed Program:</strong> Bachelor's degree from recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/M.Sc/MCA):</strong> Bachelor's degree in relevant discipline from accredited institution</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diploma Programs:</strong> Specific eligibility as per program requirements</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>ABC & DEB ID:</strong> Create ABC ID and DEB ID as per latest UGC guidelines</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Admissions:</strong> Twice a year in July/August and January/February sessions</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                HPU focuses on providing top-class job opportunities through Industry Interaction Programmes and career development initiatives.
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
                  <h3>Global</h3>
                  <p>Career Network</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Industry Interaction Programme with experts from different fields conducting live sessions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Real-time exposure to corporate world challenges and working directions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Interactive sessions with industry experts building student confidence and motivation</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Strong placement network with top companies across diverse sectors</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Career guidance and counseling to help students build better careers</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Comprehensive preparation for competitive examinations like SET, NET & JRF</span>
                </div>
              </div>

              <h3>Leading Recruitment Partners</h3>
              <div className={styles.partnersGrid}>
                {placementPartners.map((partner, idx) => (
                  <div key={idx} className={styles.partnerCard}>
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HPUHimachalPradeshUniversityDistanceEducation;
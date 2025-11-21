import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const MANUUDistanceEducation = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const data = window.universityDatabase.find(
          uni => uni.id === 'manuu-maulana-azad-national-urdu-university-distance'
        );
        setUniversityData(data);
      } else {
        const response = await fetch('/api/comprehensive-database');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const data = window.universityDatabase.find(
          uni => uni.id === 'manuu-maulana-azad-national-urdu-university-distance'
        );
        setUniversityData(data);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'M.A. Urdu', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.A. English', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.A. Arabic', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.A. Islamic Studies', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.A. History', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'M.A. Hindi', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'B.A.', fee: 'Contact University', duration: '3 Years', specializations: 'Multiple' },
    { name: 'B.Com', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.Sc (Physical Sciences)', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.Sc (Life Sciences)', fee: 'Contact University', duration: '3 Years', specializations: 1 },
    { name: 'B.Ed.', fee: 'Contact University', duration: '2 Years', specializations: 1 },
    { name: 'Diploma in Teaching English', fee: 'Contact University', duration: '1 Year', specializations: 1 },
    { name: 'Diploma in Early Childhood Care and Education', fee: 'Contact University', duration: '1 Year', specializations: 1 },
    { name: 'Certificate Course in Functional English', fee: 'Contact University', duration: '6 Months', specializations: 1 },
    { name: 'Diploma in Journalism & Mass Communication', fee: 'Contact University', duration: '1 Year', specializations: 1 },
    { name: 'Diploma in School Leadership and Management', fee: 'Contact University', duration: '1 Year', specializations: 1 },
    { name: 'Certificate Course in Proficiency in Urdu through English', fee: 'Contact University', duration: '6 Months', specializations: 1 },
  ];

  const keyHighlights = [
    'Federally-chartered institution founded via Parliamentary mandate in 1988',
    'Dedicated to freedom movement leader Maulana Abdul Kalam Azad, independent India\'s inaugural Education Minister',
    'UGC-sanctioned institution with NAAC A+ Grade academic excellence certification',
    'Institutional campus spanning 200+ acres within Telangana State',
    '7 specialized schools delivering comprehensive multidisciplinary programs',
    '19 academic departments administering undergraduate, postgraduate, and doctoral courses',
    '9 specialized research institutes advancing scholarly knowledge and innovation',
    '143+ learner assistance facilities and 20 program delivery sites nationwide',
    '9 regional hubs complemented by 6 sub-regional facilities across India',
    'CBCS (Choice Based Credit System) framework with MOOCs platform integration',
    'SAMARTH ERP digital platform ensuring efficient enrollment processing'
  ];

  const approvals = ['UGC', 'NAAC A+'];
  const accreditation = 'NAAC A+ Grade';

  const placementPartners = [
    'Accenture', 'Axis Bank', 'Capgemini', 'Flipkart', 
    'Infosys', 'KPMG', 'Nestle', 'TCS', 'IBM', 'Wipro', 'HCL', 'Cognizant'
  ];

  const faqs = [
    {
      question: 'Are the courses offered by Maulana Azad National Urdu University valid?',
      answer: 'Affirmative. MANUU functions as a federally-administered institution chartered through Parliamentary legislation in 1988, maintaining both UGC entitlement and NAAC A+ Grade accreditation. All academic programs administered via the Directorate of Distance Education (DDE) possess complete recognition and legitimacy for employment within governmental and private sectors, additionally qualifying for advanced academic pursuits.'
    },
    {
      question: 'What courses are offered in distance mode at MANUU?',
      answer: 'MANUU administers 6 master\'s degree programs (M.A. in Urdu, English, Hindi, History, Arabic, and Islamic Studies), 4 bachelor\'s degree programs (B.A., B.Sc., B.Com., and B.Ed.), diploma credentials in Teaching English, Journalism & Mass Communication, and School Leadership, complemented by certification courses in Functional English and Urdu language proficiency.'
    },
    {
      question: 'Which disciplines are offered in distance mode?',
      answer: 'Remote learning at MANUU encompasses Arts & Social Sciences, Education & Training, Languages & Linguistics, Commerce & Business Management, Sciences (covering Physical and Life Sciences), Journalism & Mass Communication, alongside specialized curricula in Islamic Studies and Urdu linguistic development.'
    },
    {
      question: 'Does MANUU have regional centers for distance education students?',
      answer: 'Indeed, MANUU operates an extensive educational infrastructure featuring 9 regional hubs (Bengaluru, Darbhanga, Kolkata, Patna, Srinagar, Bhopal, Delhi, Mumbai, Ranchi) complemented by 6 sub-regional facilities (Amravati, Jammu, Nuh, Hyderabad, Lucknow), together with 143+ learner assistance centers and 20 program delivery sites distributed nationwide.'
    },
    {
      question: 'Does MANUU offer study material to distance education students?',
      answer: 'Certainly. The Directorate of Distance Education furnishes comprehensive instructional materials to all matriculated learners. The institution has deployed SAMARTH ERP infrastructure for enhanced accessibility and distribution of educational resources. Instructional materials are specifically designed to facilitate autonomous learning progression in remote education formats.'
    },
    {
      question: 'What is the admission process?',
      answer: 'Enrollment procedures are conducted through the SAMARTH ERP digital platform. Prospective learners may submit applications electronically via MANUU\'s official web portal. The institution extends scholarships and fellowships to qualifying candidates. Contact the Directorate of Distance Education to obtain specific enrollment timelines and prerequisites for your selected academic program.'
    }
  ];

  return (
    <>
      <Head>
        <title>MANUU Distance Education - Maulana Azad National Urdu University</title>
        <meta name="description" content="Explore MANUU's UGC-approved distance education programs. Central University offering MA, BA, BSc, BCom, BEd, Diploma and Certificate courses with NAAC A+ accreditation." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Manuu Maulana Azad National Urdu University.png" 
                alt="MANUU Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Hyderabad, Telangana</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.4/5</span>
                    <span className={styles.reviews}>(283 Reviews)</span>
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
                  <span className={styles.infoLabel}>University Type:</span>
                  <span className={styles.infoValue}>Central University</span>
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
              <h2>About Maulana Azad National Urdu University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  Maulana Azad National Urdu University (MANUU) operates as a Central University, constituted through 
                  Parliamentary legislation in 1988. The institution occupies an expansive 200-acre campus in Telangana 
                  State, honoring the memory of freedom movement leader Maulana Abdul Kalam Azad, who served as independent 
                  India's inaugural Minister of Education. This establishment was conceived to advance scientific, technical, 
                  and higher educational foundations throughout the nation.
                </p>
                <p>
                  Holding UGC entitlement alongside NAAC A+ Grade accreditation, the university demonstrates unwavering 
                  commitment to educational excellence. MANUU's academic framework encompasses 7 specialized schools: 
                  Arts & Social Sciences, Education and Training, Languages Linguistics and Indology, Technology (Computer 
                  Science & Information Technology), Commerce and Business Management, Journalism and Mass Communication, 
                  and Sciences, creating a comprehensive multidisciplinary learning environment.
                </p>
                <p>
                  The institutional structure comprises approximately 19 academic departments delivering undergraduate, 
                  postgraduate, and doctoral programs across diverse disciplines. MANUU operates 9 research institutes 
                  providing specialized academic, professional, and technical expertise, including AICSSEIP, CPDUMT, CUCS, 
                  HKSCDS, UGC-HRDC, CIT, CPKU, CWS, and IMC, fostering innovation and scholarly advancement.
                </p>
                <p>
                  The Directorate of Distance Education (DDE) at MANUU extends educational access nationwide through an 
                  extensive network of 9 regional hubs and 6 sub-regional facilities. With over 143 learner assistance 
                  centers and 20 program delivery sites, the university facilitates enrollment via the SAMARTH ERP platform. 
                  DDE administers 6 master's degree programs, 4 bachelor's programs, and multiple diploma and certification 
                  courses, all featuring updated curricula and CBCS (Choice Based Credit System) framework implementation.
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
                  <div className={styles.statNumber}>1988</div>
                  <div className={styles.statLabel}>Year Established</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>143+</div>
                  <div className={styles.statLabel}>Learner Support Centers</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Avg. Salary Hike</div>
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
                Explore comprehensive distance education programs across Arts, Sciences, Commerce, Education, and specialized disciplines
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
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{typeof course.specializations === 'number' ? 'Available' : course.specializations}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>{course.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> MANUU offers affordable education with scholarships and fellowships available for eligible students. 
                Contact the Directorate of Distance Education for specific fee details and financial aid options.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these steps to secure admission at MANUU Directorate of Distance Education
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Portal</h3>
                    <p>Access the MANUU official website and navigate to the Directorate of Distance Education admission section.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Select Your Course</h3>
                    <p>Review available programs and check eligibility criteria for your desired course.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={steps.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Register via SAMARTH ERP</h3>
                    <p>Create account on SAMARTH ERP system and fill online application form with accurate details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Documents</h3>
                    <p>Upload required documents including academic certificates, ID proof, photographs, and category certificate if applicable.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Complete Fee Payment</h3>
                    <p>Pay application and course fees through online payment gateway to confirm enrollment.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/BSc/BCom):</strong> 10+2 or equivalent from recognized board</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Ed. Program:</strong> Bachelor's degree with minimum percentage as per program requirements</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA in Urdu/English/Hindi/History/Arabic/Islamic Studies):</strong> Bachelor's degree in relevant subject from recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diploma Programs:</strong> Graduation for PG Diplomas; 12th pass for UG Diplomas</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Certificate Courses:</strong> Specific eligibility varies by program</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Central University established by Act of Parliament (1988)</li>
                  <li>UGC entitled and NAAC A+ Grade accredited</li>
                  <li>Admissions facilitated through SAMARTH ERP system</li>
                  <li>Create ABC ID (Academic Bank of Credits) as per UGC guidelines</li>
                  <li>Distance education degrees equivalent to regular degrees</li>
                  <li>143+ learner support centers and 20 study program centers available</li>
                  <li>Scholarships and fellowships available for eligible students</li>
                  <li>9 regional centers across India: Bengaluru, Darbhanga, Kolkata, Patna, Srinagar, Bhopal, Delhi, Mumbai, Ranchi</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Specialized placement cell ensuring better job and career opportunities through comprehensive training programs
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>Since 2012</h3>
                  <p>Central Placement Cell</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>More Interview Opportunities</p>
                </div>
              </div>

              <h3>Placement Training Programs</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Personality development programs for professional growth</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Group discussion practice sessions for communication skills</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Mock interview sessions for real-world preparation</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Industry to Institute Convergence expert interaction sessions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Industry internship programs for practical experience</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Communication skills development programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Entrepreneurship development programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Pre-placement training and English language courses</span>
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
                Find answers to common queries about MANUU Distance Education programs
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

export default MANUUDistanceEducation;

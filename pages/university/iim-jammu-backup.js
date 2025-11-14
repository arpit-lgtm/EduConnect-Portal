import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMJammu = () => {
  const [activeTab, setActiveTab] = useState('about');

  const courses = [
    { name: 'Executive MBA', fee: '₹9,92,250', duration: '2 Years' },
    { name: 'Doctor of Philosophy', fee: '₹7,00,000', duration: '2 Years' },
    { name: 'Online MBA', fee: '₹9,92,250', duration: '2 Years' }
  ];

  const highlights = [
    'Established in 2016, one of the youngest IIM branches',
    'Ranked 42nd in NIRF 2024 Management Category',
    'Globally recognized and competent education programs',
    'Located in picturesque Jammu with scenic beauty',
    'Core values: Collaboration, Excellence, Integrity, Innovation',
    'Focus on developing industry-oriented skills',
    'Average package for freshers: ₹15.5 LPA',
    'Average package for experienced: ₹20 LPA with 19% increase'
  ];

  const placements = [
    { title: 'Average (Freshers)', value: '₹15.5 LPA', icon: '💰' },
    { title: 'Average (Experienced)', value: '₹20 LPA', icon: '📈' },
    { title: 'Total Recruiters', value: '126', icon: '🏢' },
    { title: 'New Recruiters', value: '59', icon: '🎯' }
  ];

  const faqs = [
    {
      question: 'What is the highest package in IIM Jammu?',
      answer: 'IIM Jammu offers competitive packages with an average of ₹15.5 LPA for freshers and ₹20 LPA for experienced professionals. The average package has increased by 19% over the previous year with 126 recruiters participating.'
    },
    {
      question: 'What are the eligibility criteria for EMBA at Online IIM Jammu?',
      answer: 'For Executive MBA at IIM Jammu, candidates need a bachelor\'s degree with minimum 50% marks, valid CAT/GMAT/GRE score, and relevant work experience. The program is designed for working professionals seeking career advancement.'
    },
    {
      question: 'How to contact IIM Jammu Online?',
      answer: 'You can contact IIM Jammu through their official website, email at admissions@iimj.ac.in, or visit the campus at Nagrota, Jammu, J&K. The admission office provides comprehensive support for online program queries.'
    },
    {
      question: 'What is the last date for the Online IIM Jammu application 2024?',
      answer: 'Application dates vary by program and admission cycle. IIM Jammu typically has multiple admission windows throughout the year. Visit the official website or contact the admissions office for current deadlines.'
    },
    {
      question: 'What are some best online executive programs in India?',
      answer: 'IIM Jammu offers Executive MBA, Online MBA, and PhD programs designed for working professionals. These programs provide flexibility while maintaining the same quality standards as on-campus programs with global recognition.'
    },
    {
      question: 'Can I pursue a doctorate program while working?',
      answer: 'Yes, IIM Jammu offers a PhD program specifically designed for working professionals. The program allows you to continue your career while pursuing doctoral studies with flexible scheduling and online components.'
    },
    {
      question: 'Can I pursue an MBA without a good CAT score?',
      answer: 'IIM Jammu accepts CAT, GMAT, and GRE scores. While a competitive score is important, the institute also considers work experience, academic record, and performance in personal interviews for holistic evaluation.'
    },
    {
      question: 'Which top IIMs offer online management courses other than IIM Jammu?',
      answer: 'Other IIMs offering online programs include IIM Calcutta, IIM Ahmedabad, IIM Bangalore, IIM Indore, IIM Amritsar, and IIM Bodh Gaya with diverse specializations in management, finance, marketing, and operations.'
    },
    {
      question: 'What scholarships are available at IIM Jammu?',
      answer: 'IIM Jammu offers scholarships for meritorious students for SEP, scholarships for economically weaker sections (EWS), and specific scholarships for students from EWS category to support deserving candidates.'
    },
    {
      question: 'What is the examination pattern at IIM Jammu?',
      answer: 'IIM Jammu follows a comprehensive evaluation pattern with 30% weightage for internal assessment (assignments, quizzes, activities) and 70% for end-term examinations conducted at the end of each semester.'
    }
  ];

  const admissionSteps = [
    'Visit official IIM Jammu website and register with valid credentials',
    'Appear for CAT/GMAT/GRE entrance examination and qualify',
    'Shortlisted candidates based on entrance scores',
    'Login to student portal with received credentials',
    'Submit entrance exam scores on the application portal',
    'Fill application form with qualifications and work experience details',
    'Upload required valid documents (academic certificates, ID proof)',
    'Pay program fee online and submit application',
    'Print application form and fee receipt for future reference',
    'Attend Personal Interview (PI) if shortlisted',
    'Receive offer letter upon successful selection'
  ];

  return (
    <>
      <Head>
        <title>IIM Jammu Online Programs | Ranked 42nd in NIRF 2024</title>
        <meta name="description" content="IIM Jammu - Established 2016, offering online MBA, Executive MBA, and PhD programs. NIRF Rank 42 with focus on innovation and entrepreneurship." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.logoSection}>
              <img src="/images/iim-jammu-logo.png" alt="IIM Jammu Logo" className={styles.universityLogo} />
            </div>
            <h1 className={styles.universityName}>Indian Institute of Management Jammu</h1>
            <p className={styles.universityTagline}>Developing Global Leaders Through Innovation & Excellence</p>
            
            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Established:</span>
                <span className={styles.value}>2016</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>NIRF Ranking:</span>
                <span className={styles.value}>42nd (2024)</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>Nagrota, J&K</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Programs:</span>
                <span className={styles.value}>3 Online Courses</span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Apply Now</button>
              <button className={styles.secondaryBtn}>Download Brochure</button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNavigation}>
          <button 
            className={activeTab === 'about' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={activeTab === 'courses' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('courses')}
          >
            Courses
          </button>
          <button 
            className={activeTab === 'admissions' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('admissions')}
          >
            Admissions
          </button>
          <button 
            className={activeTab === 'placements' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('placements')}
          >
            Placements
          </button>
        </div>

        {/* Content Section */}
        <div className={styles.contentSection}>
          {activeTab === 'about' && (
            <div className={styles.aboutSection}>
              <h2>About IIM Jammu</h2>
              <div className={styles.aboutContent}>
                <p>
                  Indian Institute of Management has now become a brand in the education sector and prominently leading its way with its high-quality research, world-class education, executive education, and many other facilities. IIM Jammu is situated in Jammu and Kashmir and it was established in 2016, which makes it among the youngest branches of IIMs.
                </p>
                <p>
                  IIM Jammu Online offers globally recognized and competent education through specially designed programs. The institute offers different doctoral, postgraduate, executive, and faculty development programs in various specializations. The main objective of the institute is to develop global competitive leaders and entrepreneurs who can outperform and lead the corporate world and society.
                </p>
                <p>
                  IIM Jammu Online is among the top B-Schools in India and with top-notch facilitating and education to remain seated at the top place, the institute has clear core values of collaboration, excellence, integrity, innovation, and entrepreneurship. The education offered at the institute focuses on developing industry-oriented skills and abilities in a candidate for making globally competent leaders.
                </p>
                <p>
                  IIM Jammu Online is globally recognized and ranked 42 under the 'Management' category by the National Institutional Ranking Framework (NIRF). The institute is situated in the picturesque city of Jammu and is surrounded by scenic beauty with a rich heritage and culture.
                </p>
              </div>

              <h3>Key Highlights</h3>
              <div className={styles.highlightsList}>
                {highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlightItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <h3>Why Choose IIM Jammu?</h3>
              <div className={styles.whyChoose}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🎓</div>
                  <h4>Innovation Focus</h4>
                  <p>Emphasis on entrepreneurship and innovation-based learning for developing future leaders</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🏆</div>
                  <h4>Global Recognition</h4>
                  <p>NIRF Rank 42 with globally recognized programs and industry partnerships</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🌍</div>
                  <h4>Scenic Location</h4>
                  <p>Beautiful campus in Jammu with rich heritage, culture, and conducive learning environment</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>💼</div>
                  <h4>Strong Placements</h4>
                  <p>Average package ₹15.5 LPA for freshers, ₹20 LPA for experienced with 126 recruiters</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.coursesSection}>
              <h2>Online Programs Offered</h2>
              <div className={styles.coursesList}>
                {courses.map((course, index) => (
                  <div key={index} className={styles.courseCard}>
                    <h3>{course.name}</h3>
                    <div className={styles.courseDetails}>
                      <div className={styles.courseInfo}>
                        <span className={styles.label}>Fee:</span>
                        <span className={styles.value}>{course.fee}</span>
                      </div>
                      <div className={styles.courseInfo}>
                        <span className={styles.label}>Duration:</span>
                        <span className={styles.value}>{course.duration}</span>
                      </div>
                    </div>
                    <button className={styles.enrollBtn}>Enroll Now</button>
                  </div>
                ))}
              </div>

              <h3>Additional Programs</h3>
              <div className={styles.aboutContent}>
                <p>
                  IIM Jammu also offers various other programs including MBA (Hospital Administration and Health Care Management), Dual Degree (B.Tech + MBA) with IIT Jammu, IPM (BBA + MBA), EMBA - Corporate Affairs & Management, Management Development Programs, and Faculty Development Programs.
                </p>
              </div>

              <h3>Program Specializations</h3>
              <div className={styles.specializationGrid}>
                <div className={styles.specCard}>General Management</div>
                <div className={styles.specCard}>Finance Management</div>
                <div className={styles.specCard}>Marketing Management</div>
                <div className={styles.specCard}>Human Resource Management</div>
                <div className={styles.specCard}>Operations Management</div>
                <div className={styles.specCard}>Business Analytics</div>
                <div className={styles.specCard}>Healthcare Management</div>
                <div className={styles.specCard}>Corporate Affairs</div>
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.admissionsSection}>
              <h2>Admission Process</h2>
              <div className={styles.aboutContent}>
                <p>
                  Students who are willing to get admission at the IIM Jammu and online programs offered at IIM Jammu are required to first appear for the entrance exams GRE/GMAT/CAT/JRF/UGC-NET relevant to their specific program. Only qualified students are eligible to enroll at the institute and then further admission process is started.
                </p>
              </div>
              
              <div className={styles.stepsContainer}>
                {admissionSteps.map((step, index) => (
                  <div key={index} className={styles.stepItem}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <div className={styles.stepContent}>{step}</div>
                  </div>
                ))}
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.eligibilityBox}>
                <ul>
                  <li>Bachelor's degree from a recognized university with minimum 50% marks</li>
                  <li>Valid CAT/GMAT/GRE score as per program requirements</li>
                  <li>Work experience required for Executive MBA and PhD programs</li>
                  <li>Qualifying scores in entrance examinations</li>
                  <li>Successful completion of Personal Interview (PI)</li>
                </ul>
              </div>

              <h3>Financial Aid & Scholarships</h3>
              <div className={styles.scholarshipGrid}>
                <div className={styles.scholarshipCard}>
                  <h4>Merit Scholarships for SEP</h4>
                  <p>For meritorious students in Student Exchange Program</p>
                </div>
                <div className={styles.scholarshipCard}>
                  <h4>EWS Scholarships</h4>
                  <p>Support for economically weaker sections</p>
                </div>
                <div className={styles.scholarshipCard}>
                  <h4>Category-Based Aid</h4>
                  <p>Financial assistance for students from reserved categories</p>
                </div>
                <div className={styles.scholarshipCard}>
                  <h4>Education Loans</h4>
                  <p>Easy loan facilities through partner banks</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.placementsSection}>
              <h2>Placement Highlights</h2>
              <div className={styles.aboutContent}>
                <p>
                  The dedicated placement cell of IIM Jammu Online remains active throughout the year. The main objective of the placement cell is not only to get students placed but to assist every individual throughout their academic journey and make every individual a global leader equipped with industry-oriented skills and all the required abilities to perform well and run an organization effortlessly.
                </p>
              </div>

              <div className={styles.placementHighlights}>
                {placements.map((item, index) => (
                  <div key={index} className={styles.placementCard}>
                    <div className={styles.placementIcon}>{item.icon}</div>
                    <div className={styles.placementValue}>{item.value}</div>
                    <div className={styles.placementTitle}>{item.title}</div>
                  </div>
                ))}
              </div>

              <h3>Top Recruiting Companies</h3>
              <div className={styles.recruitersGrid}>
                <div className={styles.recruiterCard}>Google</div>
                <div className={styles.recruiterCard}>Amazon</div>
                <div className={styles.recruiterCard}>Capgemini</div>
                <div className={styles.recruiterCard}>Deloitte</div>
                <div className={styles.recruiterCard}>HCL</div>
                <div className={styles.recruiterCard}>IBM</div>
                <div className={styles.recruiterCard}>ITC</div>
                <div className={styles.recruiterCard}>Microsoft</div>
                <div className={styles.recruiterCard}>Decathlon</div>
                <div className={styles.recruiterCard}>PayPal</div>
                <div className={styles.recruiterCard}>CISCO</div>
                <div className={styles.recruiterCard}>Dell</div>
              </div>

              <h3>Placement Support</h3>
              <div className={styles.rolesGrid}>
                <div className={styles.roleCard}>Workshops & Training</div>
                <div className={styles.roleCard}>Guest Lectures</div>
                <div className={styles.roleCard}>Placement Drives</div>
                <div className={styles.roleCard}>Webinars</div>
                <div className={styles.roleCard}>Skill Development</div>
                <div className={styles.roleCard}>Career Counseling</div>
                <div className={styles.roleCard}>Industry Networking</div>
                <div className={styles.roleCard}>Resume Building</div>
              </div>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
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
      </div>

      <Footer />
    </>
  );
};

export default IIMJammu;

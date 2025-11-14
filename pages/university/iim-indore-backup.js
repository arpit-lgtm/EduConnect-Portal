import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMIndore = () => {
  const [activeTab, setActiveTab] = useState('about');

  const courses = [
    { name: 'Executive Program in Sales and Marketing', fee: '₹2,00,000', duration: '12 Months' },
    { name: 'Executive Program in Healthcare Management', fee: '₹3,00,000', duration: '12 Months' },
    { name: 'Executive Program In Digital Transformation', fee: '₹2,50,000', duration: '12 Months' },
    { name: 'Executive Certificate Program in Strategy and Leadership', fee: '₹3,00,000', duration: '12 Months' },
    { name: 'IIM Online Courses', fee: '₹3,73,000', duration: '12-24 Months' }
  ];

  const highlights = [
    'Established in 1996, nurtured by Ministry of Education, GOI',
    'Ranked 8th in NIRF 2024 Management Category',
    'Triple accreditation: EQUIS, AACSB, and AMBA',
    'Member of AACSB Business Education Alliance',
    '3rd largest institute based on student exchange programs',
    'Offers both online and on-campus programs',
    'Only IIM offering IPM program after 12th standard',
    'Average package increased by 21% with highest of ₹1.14 Crore'
  ];

  const placements = [
    { title: 'Highest Package', value: '₹1.14 Crore', icon: '💰' },
    { title: 'Average Hike', value: '50%', icon: '📈' },
    { title: 'Hiring Partners', value: '300+', icon: '🏢' },
    { title: 'New Recruiters', value: '30+', icon: '🎯' }
  ];

  const faqs = [
    {
      question: 'Does IIM Indore offer online programs?',
      answer: 'Yes, IIM Indore offers various online programs including Executive MBA, Online MBA, Executive Programs in Sales & Marketing, Healthcare Management, Digital Transformation, Strategy & Leadership, and many specialized certificate courses.'
    },
    {
      question: 'How are the results of courses declared at IIM Indore?',
      answer: 'Results are declared online through the student portal. Students can check their results on the official website after the notification. The evaluation includes 30% internal assessment and 70% end-term examination.'
    },
    {
      question: 'Are the courses offered by IIM Indore in online mode valid?',
      answer: 'Yes, all online courses from IIM Indore are valid and UGC-approved. They hold the same value as regular on-campus degrees and are recognized by top recruiters worldwide.'
    },
    {
      question: 'Can we pursue an online examination at IIM Indore?',
      answer: 'Yes, IIM Indore conducts online examinations using dedicated platforms like Proctored Zoom, Google Meet with webcam monitoring, screen recording, and audio recording to ensure integrity.'
    },
    {
      question: 'What are the contact details of IIM Indore?',
      answer: 'You can contact IIM Indore through their official website, email, or phone. The institute is located in Prabandh Shikhar, Rau-Pithampur Road, Indore, Madhya Pradesh.'
    },
    {
      question: 'Do I have to visit IIM Indore to pursue my online course?',
      answer: 'No, online programs are completely remote. However, some programs may have optional on-campus immersion sessions for networking and hands-on learning experiences.'
    },
    {
      question: 'What courses are offered to the students at IIM Indore?',
      answer: 'IIM Indore offers EPGP, PGP-HRM, EFPM, PGPMX, PGP, IPM, FPM, and various executive education programs in Business Analytics, Finance, Marketing, HR, Operations, and Strategy & Entrepreneurship.'
    },
    {
      question: 'What are some best online executive programs in India?',
      answer: 'IIM Indore offers Executive Programs in Sales & Marketing, Healthcare Management, Digital Transformation, Strategy & Leadership, Finance, and specialized certificate programs with industry-oriented curriculum.'
    },
    {
      question: 'Can I pursue a doctorate program while working?',
      answer: 'Yes, IIM Indore offers Fellow Programme in Management (FPM) and Executive Fellow Programme designed for working professionals to pursue doctoral studies while continuing their careers.'
    },
    {
      question: 'Which top IIMs offer online management courses other than IIM Indore?',
      answer: 'Other IIMs offering online programs include IIM Calcutta, IIM Ahmedabad, IIM Bangalore, IIM Amritsar, IIM Jammu, and IIM Bodh Gaya with diverse specializations in management education.'
    }
  ];

  const admissionSteps = [
    'Select the best course that aligns with your career and educational goals',
    'Check basic eligibility criteria including educational qualifications and work experience',
    'Visit official IIM Indore website and register with valid details',
    'Appear for CAT/GMAT/GRE entrance examination and qualify with competitive scores',
    'Login with credentials and fill the application form completely',
    'Upload required documents (academic certificates, ID proof, work experience)',
    'Pay the application fee online and download receipt',
    'Shortlisted candidates called for Personal Interview (PI)'
  ];

  return (
    <>
      <Head>
        <title>IIM Indore Online Programs | Ranked 8th in NIRF 2024</title>
        <meta name="description" content="IIM Indore - Established 1996, offering online MBA, Executive programs, and specialized courses. Triple accredited (EQUIS, AACSB, AMBA) with NIRF Rank 8." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.logoSection}>
              <img src="/images/iim-indore-logo.png" alt="IIM Indore Logo" className={styles.universityLogo} />
            </div>
            <h1 className={styles.universityName}>Indian Institute of Management Indore</h1>
            <p className={styles.universityTagline}>Excellence in Management Education & Research Since 1996</p>
            
            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Established:</span>
                <span className={styles.value}>1996</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>NIRF Ranking:</span>
                <span className={styles.value}>8th (2024)</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Accreditation:</span>
                <span className={styles.value}>EQUIS, AACSB, AMBA</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Programs:</span>
                <span className={styles.value}>5 Online Courses</span>
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
              <h2>About IIM Indore</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIM Indore, also known as the Indian Institute of Management Indore was established in 1996 and since then it has been nurtured by the Ministry of Education, Government of India. It is located in the City of Madhya Pradesh Indore. It is an essential institution as per the Indian Institutes of Management Act 2017. This institute offers quality education to students by adhering to academic excellence, researching innovative ideas, and dwelling on all the factors of leadership.
                </p>
                <p>
                  The Institute offers both online and on-campus programs. Students can apply for courses like Executive Post Graduate Programme in Management (EPGP), Post Graduate Programme in Human Resource Management (PGP-HRM), Executive Fellow Programme in Management (EFPM), Post Graduate Programme in Management for Working Executives (PGPMX), Post Graduate Programme in Management (PGP), Five Year Integrated Programme in Management (IPM), Fellow Programme in Management (FPM), and many more.
                </p>
                <p>
                  Executive Education is offered to students in disciplines like Business Analytics, General Management, Human Resource Management, Finance and Investment Banking, Information Systems, Sales and Marketing, Operations Management, Strategy and Entrepreneurship. Executive programs are offered online through various platforms, by offering online study material to the students.
                </p>
                <p>
                  The Institute is accredited by the European Quality Improvement System, and the Association to Advance Collegiate Schools of Business and is a prestigious and renowned member of the Association of MBA. It is also a member of the AACSB Business Education Alliance. Recently the institute got 8th rank by National Institutional Ranking Framework 2024.
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

              <h3>Why Choose IIM Indore?</h3>
              <div className={styles.whyChoose}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🎓</div>
                  <h4>Academic Excellence</h4>
                  <p>Top-notch education with expert faculty focused on research and innovation in management</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🏆</div>
                  <h4>Triple Accredited</h4>
                  <p>EQUIS, AACSB, and AMBA accreditation ensuring world-class standards</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🌍</div>
                  <h4>Global Programs</h4>
                  <p>3rd largest institute for student exchange with international partnerships</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>💼</div>
                  <h4>Outstanding Placements</h4>
                  <p>Highest package ₹1.14 Crore with 180+ recruiters including 30+ new companies</p>
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

              <h3>Specialization Domains</h3>
              <div className={styles.specializationGrid}>
                <div className={styles.specCard}>Business Analytics</div>
                <div className={styles.specCard}>General Management</div>
                <div className={styles.specCard}>Human Resource Management</div>
                <div className={styles.specCard}>Finance & Investment Banking</div>
                <div className={styles.specCard}>Information Systems</div>
                <div className={styles.specCard}>Sales & Marketing</div>
                <div className={styles.specCard}>Operations Management</div>
                <div className={styles.specCard}>Strategy & Entrepreneurship</div>
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.admissionsSection}>
              <h2>Admission Process</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIM Indore offers various online and on-campus programs. However, the eligibility criteria for all the courses vary. Many examinations like the Common Admission Test (CAT), or Graduate Management Admission Test (GMAT) scores are required for admission to some courses.
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
                  <li>Bachelor's degree from a recognized university</li>
                  <li>Minimum 50% marks in graduation (45% for reserved categories)</li>
                  <li>Valid CAT/GMAT/GRE score as per program requirements</li>
                  <li>Work experience varies by program (required for executive programs)</li>
                  <li>English proficiency for online programs</li>
                </ul>
              </div>

              <h3>Financial Aid & Scholarships</h3>
              <div className={styles.scholarshipGrid}>
                <div className={styles.scholarshipCard}>
                  <h4>Merit-Based Scholarships</h4>
                  <p>For top performers in entrance examinations</p>
                </div>
                <div className={styles.scholarshipCard}>
                  <h4>Need-Based Scholarships</h4>
                  <p>Financial assistance for economically weaker sections</p>
                </div>
                <div className={styles.scholarshipCard}>
                  <h4>Diversity Scholarships</h4>
                  <p>Supporting diverse talent from various backgrounds</p>
                </div>
                <div className={styles.scholarshipCard}>
                  <h4>Corporate Scholarships</h4>
                  <p>Sponsored programs by leading corporate partners</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.placementsSection}>
              <h2>Placement Highlights</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Institute is offering various placement options to the students. Every year the institute graduates get high salary packages in various industries in domestic and international ventures. The Institute has offered its highest package of ₹1.14 Crore and the average package increased by 21%. Currently, students get job opportunities in sectors like Consulting, Marketing & Management, Human Resource, Operations, and many more.
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
                <div className={styles.recruiterCard}>Accenture</div>
                <div className={styles.recruiterCard}>Capgemini</div>
                <div className={styles.recruiterCard}>Deloitte</div>
                <div className={styles.recruiterCard}>HCL</div>
                <div className={styles.recruiterCard}>IBM</div>
                <div className={styles.recruiterCard}>Infosys</div>
                <div className={styles.recruiterCard}>KPMG</div>
                <div className={styles.recruiterCard}>Microsoft</div>
                <div className={styles.recruiterCard}>Reliance</div>
                <div className={styles.recruiterCard}>Tata Motors</div>
                <div className={styles.recruiterCard}>TCS</div>
              </div>

              <h3>Job Domains</h3>
              <div className={styles.rolesGrid}>
                <div className={styles.roleCard}>Consulting</div>
                <div className={styles.roleCard}>Marketing & Management</div>
                <div className={styles.roleCard}>Human Resources</div>
                <div className={styles.roleCard}>Operations</div>
                <div className={styles.roleCard}>Finance Transformation</div>
                <div className={styles.roleCard}>Business Analytics</div>
                <div className={styles.roleCard}>Strategy Consulting</div>
                <div className={styles.roleCard}>Investment Banking</div>
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

export default IIMIndore;

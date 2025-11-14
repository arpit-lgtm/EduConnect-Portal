import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMCalcutta = () => {
  const [activeTab, setActiveTab] = useState('about');

  const courses = [
    { name: 'Executive Program In Finance', fee: '₹4,64,325', duration: '12 Months' },
    { name: 'IIM Online Courses', fee: '₹4,64,325', duration: '12 Months' },
    { name: 'Executive MBA', fee: '₹31,00,000', duration: '1 Year' },
    { name: 'Online MBA', fee: '₹31,00,000', duration: '2 Years' },
    { name: 'Leadership Program', fee: '₹8,45,000', duration: '12 Months' }
  ];

  const highlights = [
    'India\'s first IIM established in November 1961',
    'Ranked 4th in NIRF 2024 Management Category',
    'Triple accreditation: EQUIS, AACSB, and AMBA',
    'Collaboration with Alfred P. Sloan School of Management',
    'Offers online MBA, Executive MBA, and PGDBA programs',
    'Global center of excellence in management education',
    'Strong industry partnerships with top Fortune 500 companies',
    'Highest internship package of ₹2.5 LPA'
  ];

  const placements = [
    { title: 'Highest Package', value: '₹1.14 Crore', icon: '💰' },
    { title: 'Average Hike', value: '50%', icon: '📈' },
    { title: 'Top Recruiters', value: '300+', icon: '🏢' },
    { title: 'Interview Opportunities', value: '3X Increase', icon: '🎯' }
  ];

  const faqs = [
    {
      question: 'Does IIM Calcutta offer online programs?',
      answer: 'Yes, IIM Calcutta offers online programs including Online MBA, Executive MBA, and Postgraduate Diploma in Business Analytics (PGDBA) with the same quality standards as on-campus programs.'
    },
    {
      question: 'Are the courses offered by IIM Calcutta in online mode valid?',
      answer: 'Yes, all online courses from IIM Calcutta are valid and recognized. They are approved by UGC and hold the same value as regular on-campus degrees in the industry.'
    },
    {
      question: 'Can we pursue an online examination at IIM Calcutta?',
      answer: 'Yes, IIM Calcutta conducts online examinations through their collaboration with Mercer, a global portal with over 2,000 proctors ensuring cheating-proof assessment processes.'
    },
    {
      question: 'Do I have to visit IIM Calcutta to pursue my online course?',
      answer: 'No, the online programs at IIM Calcutta are completely remote. However, some programs may have optional on-campus immersion sessions for networking and hands-on learning.'
    },
    {
      question: 'What courses are offered to the students at IIM Calcutta?',
      answer: 'IIM Calcutta offers Online MBA, Executive MBA, PGDBA, and various doctoral programs in specializations like Economics, Finance, Marketing, HR, Strategic Management, and more.'
    },
    {
      question: 'What is the eligibility for IIM Calcutta online programs?',
      answer: 'Eligibility varies by program. Most require a bachelor\'s degree with good academic record and CAT/GMAT scores. Work experience may be required for executive programs.'
    },
    {
      question: 'What scholarships are available at IIM Calcutta?',
      answer: 'IIM Calcutta offers merit-based scholarships, Aditya Birla Group Scholarship, T. Thomas Scholarship, OP Jindal Scholarship, Ratan Tata Trust scholarships, and EWS category scholarships.'
    },
    {
      question: 'Which top IIMs offer online management courses other than IIM Calcutta?',
      answer: 'Other IIMs offering online programs include IIM Ahmedabad, IIM Bangalore, IIM Indore, IIM Amritsar, IIM Jammu, and IIM Bodh Gaya with various specializations.'
    },
    {
      question: 'Can I pursue an MBA without a good CAT score?',
      answer: 'While CAT score is important, IIM Calcutta also considers GMAT scores for some programs. Executive programs may have relaxed entrance exam requirements with emphasis on work experience.'
    },
    {
      question: 'What are the placement opportunities at IIM Calcutta?',
      answer: 'IIM Calcutta offers excellent placement with highest package of ₹1.14 Crore, average package increase of 21%, and roles in AI, Data Science, Analytics, Finance, and Consulting domains.'
    }
  ];

  const admissionSteps = [
    'Visit the official IIM Calcutta website and register with valid credentials',
    'Qualify CAT/GMAT examination with competitive scores',
    'Login with user ID and password received on registered email',
    'Fill application form with accurate personal and academic details',
    'Upload required documents (academic certificates, ID proof, work experience)',
    'Pay application fee online and download receipt',
    'Shortlisted candidates called for Personal Interview (PI)',
    'Final selection based on entrance scores, PI performance, and profile'
  ];

  return (
    <>
      <Head>
        <title>IIM Calcutta Online Programs | Ranked 4th in NIRF 2024</title>
        <meta name="description" content="IIM Calcutta - India's first IIM offering online MBA, Executive MBA, and PGDBA programs. Triple accredited (EQUIS, AACSB, AMBA) with NIRF Rank 4." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Calcutta.png" 
                alt="IIM Calcutta Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Kolkata, West Bengal</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Established:</span>
                  <span className={styles.infoValue}>1961 (India's First IIM)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 4 (2024 Management)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <div className={styles.approvalBadges}>
                    <div className={styles.badge}>
                      <span className={styles.badgeIcon}>✓</span>
                      <span>EQUIS</span>
                    </div>
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
                  <span className={styles.infoLabel}>Programs:</span>
                  <span className={styles.infoValue}>5 Online Courses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
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
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IIM Calcutta</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIM Calcutta (The Indian Institute of Management Calcutta) was established in November 1961 as the 1st National Institute for Post-Graduate Studies & Research in Management by the Government of India. They collaborated with top institutes like the Alfred P. Sloan School of Management, The Ford Foundation, the Government of West Bengal, and Indian industry.
                </p>
                <p>
                  This is an autonomous body that maintains a global reputation and imparts top-quality management study programs with a pioneer in offering professional management courses in India through its postgraduate and doctoral level programs, research, executive training programs, and consulting activities.
                </p>
                <p>
                  The institute is emerging as a Global Center of Excellence in all branches of Management Education that are deeply embedded in the societal values of India. At present, IIM Calcutta is one of the finest Business Schools in Asia. It offers top opportunities as it attracts top companies from all over the world and provides jobs and career opportunities with high salary packages.
                </p>
                <p>
                  Online programs at IIM Calcutta are Master of Business Administration, Master of Business Administration for Executive Programs, and Postgraduate Diploma in Business Analytics (PGDBA). The Institute is accredited by CEMS MIM- Master's in International Management Education, EQUIS, Association of MBA, and AACSB. It is ranked as the number 4 institution by NIRF 2024 ranking in the category of management institution.
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

              <h3>Why Choose IIM Calcutta?</h3>
              <div className={styles.whyChoose}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🎓</div>
                  <h4>India's First IIM</h4>
                  <p>Pioneer institute established in 1961 with global recognition and excellence in management education</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🏆</div>
                  <h4>Triple Accredited</h4>
                  <p>EQUIS, AACSB, and AMBA accreditation ensuring world-class education standards</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🌍</div>
                  <h4>Global Collaborations</h4>
                  <p>Partnerships with MIT Sloan, Ford Foundation, and top international institutions</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>💼</div>
                  <h4>Top Placements</h4>
                  <p>Highest package ₹1.14 Crore with recruiters like Google, Amazon, Microsoft, Deloitte</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
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

              <h3>Program Specializations</h3>
              <div className={styles.specializationGrid}>
                <div className={styles.specCard}>Finance & Control</div>
                <div className={styles.specCard}>Marketing Management</div>
                <div className={styles.specCard}>Human Resource Management</div>
                <div className={styles.specCard}>Strategic Management</div>
                <div className={styles.specCard}>Business Analytics</div>
                <div className={styles.specCard}>Economics</div>
                <div className={styles.specCard}>Operations Management</div>
                <div className={styles.specCard}>Organizational Behavior</div>
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <div className={styles.aboutContent}>
                <p>
                  If you want to pursue any course from IIM Calcutta, you need to appear for the CAT Examination and clear it with good marks and rank. Then a list will be released by the institute that invites the students for further admission process.
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
                  <li>Minimum 50% marks in graduation (45% for SC/ST/PWD candidates)</li>
                  <li>Valid CAT/GMAT score as per program requirements</li>
                  <li>Work experience required for Executive MBA programs</li>
                  <li>English proficiency for international applicants</li>
                </ul>
              </div>

              <h3>Financial Aid & Scholarships</h3>
              <div className={styles.scholarshipGrid}>
                <div className={styles.scholarshipCard}>
                  <h4>Aditya Birla Group Scholarship</h4>
                  <p>Merit-based scholarship for top performers</p>
                </div>
                <div className={styles.scholarshipCard}>
                  <h4>T. Thomas Scholarship</h4>
                  <p>Financial assistance for deserving students</p>
                </div>
                <div className={styles.scholarshipCard}>
                  <h4>OP Jindal Scholarship</h4>
                  <p>Engineering & Management scholarship program</p>
                </div>
                <div className={styles.scholarshipCard}>
                  <h4>Ratan Tata Trust</h4>
                  <p>Support for economically weaker sections</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement Highlights</h2>
              <div className={styles.aboutContent}>
                <p>
                  The university is known for its amazing placement drive that offers top-notch and world-class facilities to the students. Many companies and recruiters participate in the placement drive. As per the data released by IIM Calcutta, the University offers the highest internship package of 2.5 LPA and the mean internship package of 1.5 LPA.
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
                <div className={styles.recruiterCard}>Microsoft</div>
                <div className={styles.recruiterCard}>Deloitte</div>
                <div className={styles.recruiterCard}>Capgemini</div>
                <div className={styles.recruiterCard}>HCL</div>
                <div className={styles.recruiterCard}>Infosys</div>
                <div className={styles.recruiterCard}>TCS</div>
                <div className={styles.recruiterCard}>Wipro</div>
                <div className={styles.recruiterCard}>EY</div>
                <div className={styles.recruiterCard}>HP</div>
                <div className={styles.recruiterCard}>Accenture</div>
              </div>

              <h3>Job Roles Offered</h3>
              <div className={styles.rolesGrid}>
                <div className={styles.roleCard}>Data Scientist</div>
                <div className={styles.roleCard}>Business Analyst</div>
                <div className={styles.roleCard}>AI Researcher</div>
                <div className={styles.roleCard}>Quantitative Research</div>
                <div className={styles.roleCard}>ML Engineer</div>
                <div className={styles.roleCard}>Finance Transformation</div>
                <div className={styles.roleCard}>Analytic Consulting</div>
                <div className={styles.roleCard}>Management Consultant</div>
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

export default IIMCalcutta;

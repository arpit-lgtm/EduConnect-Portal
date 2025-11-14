import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const GitamUniversityDistanceEducation = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'MBA (General)', fee: 0, duration: '2 Years', specializations: 1 },
    { name: 'MBA (HRM)', fee: 0, duration: '2 Years', specializations: 1 },
    { name: 'M.Sc Biotechnology', fee: 0, duration: '2 Years', specializations: 1 },
    { name: 'MA English', fee: 0, duration: '2 Years', specializations: 1 },
    { name: 'MA Economics', fee: 0, duration: '2 Years', specializations: 1 },
    { name: 'M.Com', fee: 0, duration: '2 Years', specializations: 1 },
    { name: 'MCA', fee: 0, duration: '2 Years', specializations: 1 },
    { name: 'BA', fee: 0, duration: '3 Years', specializations: 1 },
    { name: 'BCom', fee: 0, duration: '3 Years', specializations: 1 },
    { name: 'Dip. in Env & Sust. Mgmt', fee: 0, duration: '1 Year', specializations: 1 },
    { name: 'Dip. in Communicative English', fee: 0, duration: '1 Year', specializations: 1 },
  ];

  const keyHighlights = [
    'Established on 09-09-2009 as Centre for Distance Learning (CDL) by Gandhi Institute of Technology and Management',
    'Founded in 1980 by Dr. M.V.V.S. Murthi, former Member of Parliament and renowned philanthropist',
    'UGC-AICTE-DEC recognized and accredited with government approval',
    'Offering 7 PG Programs, 2 UG programs, and 2 Diploma courses',
    'Updated and revised curriculum with comprehensive study materials',
    'Follows grading system with performance-based grade allocation',
    'Multiple study centers across regions for student convenience and accessibility',
    'Average placement package of 4 LPA with top leading companies hiring CDL students',
    'Internal assessment (30 marks) and end-term examination (70 marks) evaluation pattern',
    'Affordable programs making quality education accessible to all students'
  ];

  const approvals = ['UGC', 'AICTE', 'DEC'];
  const nirfRank = 'UGC-AICTE Recognized';
  const accreditation = 'UGC-AICTE-DEC Approved';

  const placementPartners = [
    'Accenture', 'Amazon', 'Bajaj Electricals', 'CocaCola',
    'TCS', 'Infosys', 'Wipro', 'Tech Mahindra',
    'HCL', 'Cognizant', 'IBM', 'Microsoft',
    'Capgemini', 'Oracle', 'SAP', 'Deloitte',
    'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Reliance'
  ];

  const faqs = [
    {
      question: 'Does GITAM offer distance education?',
      answer: 'Yes, GITAM University offers distance education through its Centre for Distance Learning (CDL), established on 09-09-2009. The CDL offers various UG, PG, and diploma programs in multiple disciplines including management, computer applications, arts, commerce, and sciences with UGC-AICTE-DEC recognition.'
    },
    {
      question: 'Is GITAM distance education valid for government jobs?',
      answer: 'Yes, GITAM distance education programs are valid for government jobs as they are UGC-AICTE-DEC recognized and approved. The degrees obtained through distance mode are equivalent to regular on-campus degrees and are accepted by government sectors, PSUs, and all major recruiters nationwide.'
    },
    {
      question: 'Will a student meet other learners when studying at the GCDL?',
      answer: 'Yes, GITAM CDL provides opportunities for student interaction through study centers allotted across various regions. Students can access these centers for study requirements, updates, and peer interaction. The university also conducts face-to-face classes and contact sessions where students can interact with faculty and fellow learners.'
    },
    {
      question: 'How to contact GITAM University?',
      answer: 'Students can contact GITAM University through the official website, visit designated study centers, or reach out to the Centre for Distance Learning office. The university provides comprehensive student support services including online sessions for answering questions, webinars, and special helplines for academic issues.'
    }
  ];

  return (
    <>
      <Head>
        <title>GITAM University Distance Education - MBA, MCA, BA, BCom Programs | MBA NINJA</title>
        <meta name="description" content="GITAM University Distance Education (CDL) - UGC-AICTE approved. MBA, MCA, MA, M.Com, BA, BCom programs. Established 2009. Average package 4 LPA." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/GITAM University.png" 
                alt="GITAM University Logo" 
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
                  <span className={styles.infoValue}>📍 Visakhapatnam, Andhra Pradesh, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.6/5</span>
                    <span className={styles.reviews}>(234 Reviews)</span>
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
                  <span className={styles.infoValue}>{nirfRank}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Recognition:</span>
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
                {tab === 'courses' ? 'Programs' : tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About GITAM University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  Gandhi Institute of Technology and Management was established in 1980 with the main aim and objective of bringing 
                  Mahatma Gandhi's vision of education in the form of an institution that has no barriers. Gandhi Institute of Technology 
                  and Management was led by a group of prominent intelligent leaders and people, which Dr. M.V.V.S. Murthi leads. He is 
                  a former Member of Parliament and a well-known philanthropist.
                </p>
                <p>
                  GITAM is the abbreviation for Gandhi Institute of Technology and Management and its separate Centre for Distance Learning 
                  (CDL) for distance education was established on 09-09-2009, a unique day. GITAM distance education is recognized and 
                  accredited by UGC-AICTE-DEC, ensuring that all programs meet national standards of quality and are accepted nationwide 
                  for employment and higher education.
                </p>
                <p>
                  There are a wide variety of courses offered at GITAM distance education CDL. All the courses offered at the university 
                  are divided into semester and year-wise modes and the qualification and eligibility criteria differ from course to course. 
                  GITAM University Distance Education CDL offers 7 PG Programs, 2 UG programs, and 2 Diploma courses, providing 
                  comprehensive options for students across different academic levels and career aspirations.
                </p>
                <p>
                  The Centre for Distance Learning of GITAM University offers various courses with different study materials of updated 
                  and revised curriculum. GITAM distance education follows a grading system and provides grades as per the student's 
                  performance at the end of each semester, ensuring transparent and fair evaluation. The university has tie-ups with 
                  various top-notch companies for placements, with an average package of 4 LPA for CDL students.
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
                    <div className={styles.statNumber}>44+</div>
                    <div className={styles.statLabel}>Years of Legacy (1980)</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>11</div>
                    <div className={styles.statLabel}>Total Programs</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>300+</div>
                    <div className={styles.statLabel}>Placement Partners</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>4 LPA</div>
                    <div className={styles.statLabel}>Average Package</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                GITAM University CDL offers 11 comprehensive distance education programs across PG, UG, and Diploma levels.
              </p>
              
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Specializations</th>
                      <th>Duration</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.specializations} {course.specializations === 1 ? 'Option' : 'Options'}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>
                          {course.name.startsWith('M') && !course.name.includes('Dip') ? 'Postgraduate' : 
                           course.name.startsWith('B') ? 'Undergraduate' :
                           course.name.includes('PG Dip') ? 'PG Diploma' : 'Diploma'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Affordable Excellence:</strong> GITAM offers reasonably priced programs with multiple study centers for accessibility. 
                Updated curriculum with comprehensive study materials provided by the university.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p>GITAM University Centre for Distance Learning follows a straightforward admission process.</p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>Students have to visit the official website of GITAM University and check for any latest updates or notifications issued by the university regarding the admission process.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Click Admission Tab</h3>
                    <p>After visiting the official website, students must navigate to the admission tab and access the application form for their desired program.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Students have to fill out the application form with the required information. While filling up the application form, students must select the course they are enrolling in and provide accurate details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Attach Required Documents</h3>
                    <p>Upload and attach all required documents with the application form including educational certificates, ID proof, photograph, and other supporting documents as per the program requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Application</h3>
                    <p>Students can apply after filling out the form and attaching the required documents. Review all information carefully before final submission.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/BCom):</strong> 12th pass from recognized board</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MBA/MCA/MA/M.Com):</strong> Bachelor's degree from accredited institution</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diploma Programs:</strong> 12th pass or equivalent qualification</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>For All Students:</strong> Create ABC ID and DEB ID as per latest UGC guidelines</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Admissions:</strong> Available twice a year in July/August and January/February sessions</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                GITAM Distance Education CDL assists students with better career opportunities through comprehensive placement support.
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
                  <p>More Interview Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>4 LPA</h3>
                  <p>Average Package</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Annual placement drives conducted by top leading companies</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Comprehensive student support services and career guidance</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Online sessions for answering questions and webinars</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Special helplines for academic and career-related issues</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Face-to-face interaction opportunities through study centers</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Industry-oriented curriculum ensuring job readiness</span>
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

export default GitamUniversityDistanceEducation;

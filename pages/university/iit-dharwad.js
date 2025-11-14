import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITDharwad = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'PhD Program', fee: 150000, duration: '3 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Established in 2016 by Ministry of Human Resource Development, Government of India',
    'Initially mentored by IIT Bombay with curriculum modeled on IIT Bombay standards',
    'Located in Dharwad, Karnataka, within 30 km radius of Hubli',
    'NIRF Rank 101-150 Range in Engineering Category',
    'UGC approved with globally competent infrastructure',
    'Commenced academic activities in July 2016 with B.Tech programs',
    'Eight different departments in Science and Technology fields',
    'Holistic learning approach with global exposure to engineering',
    'Diversified curriculum balancing science, technology, and social sciences',
    'Active Career Development Cell for placement assistance',
    'Hands-on engineering projects from initial years',
    'Multiple scholarship opportunities including merit-based and need-based aid'
  ];

  const approvals = ['UGC', 'MHRD'];
  const nirfRank = 'Rank 101-150 Range - Engineering Category';
  const accreditation = 'Government of India Approved';

  const placementPartners = [
    'Toshiba', 'HCL', 'Accenture', 'IBM', 'LG', 'Google',
    'Axis Bank', 'Capgemini', 'EY', 'Flipkart', 'ITC', 'KPMG',
    'L&T', 'Paytm', 'Genpact', 'Infosys', 'Wipro', 'TCS',
    'Microsoft', 'Amazon', 'Deloitte', 'Tech Mahindra'
  ];

  const faqs = [
    {
      question: 'What is the rank of IIT Dharwad Online?',
      answer: 'IIT Dharwad ranks 101-150 Range out of 200 colleges in India under the engineering category of NIRF (National Institutional Ranking Framework). The institute was established in 2016 and has quickly gained recognition for its quality education and research.'
    },
    {
      question: 'What is the average salary of IIT Dharwad?',
      answer: 'IIT Dharwad graduates receive competitive salary packages from leading companies. The placement cell, known as the Career Development Cell, works actively to ensure students acquire industry-oriented skills. Top recruiters include companies like Toshiba, HCL, Accenture, IBM, and LG.'
    },
    {
      question: 'How much percentile is required for IIT Dharwad?',
      answer: 'Admission to IIT Dharwad is based on national-level entrance exams like JEE, GATE, IIT JAM, CAT, CEED, and JRF depending on the program. The minimum percentile varies by program and year. Candidates must score according to the cut-off criteria set by the institute for their chosen program.'
    },
    {
      question: 'What is the last date to apply for IIT Dharwad Online?',
      answer: 'The application deadline for IIT Dharwad varies by program and admission cycle. According to latest UGC guidelines, admissions are conducted twice a year in July/August and January/February sessions. Students should check the official website for specific deadlines for their chosen program.'
    },
    {
      question: 'How to contact IIT Dharwad Online?',
      answer: 'Students can contact IIT Dharwad through their official website or visit the campus located within WALMI (Water and Land Management Institute) in Dharwad, Karnataka. The institute is accessible within a 30 km radius of Hubli, the second-largest city in Karnataka.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Dharwad - Indian Institute of Technology | Online & Distance Education | MBA NINJA</title>
        <meta name="description" content="IIT Dharwad - Est. 2016. NIRF Rank 101-150. Mentored by IIT Bombay. UGC approved programs. PhD and research programs available." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIIT Dharwad.png" 
                alt="IIT Dharwad Logo" 
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
                  <span className={styles.infoValue}>📍 Dharwad, Karnataka</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(294 Reviews)</span>
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
                {tab === 'courses' ? 'Programs & Fees' : tab === 'faqs' ? 'FAQ' : tab === 'courses' ? 'Programs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IIT Dharwad</h2>
              <div className={styles.aboutContent}>
                <p>
                  Indian Institute of Technology Dharwad is a prominent and leading institute in India that offers the best 
                  technical programs with a globally recognized curriculum and top-notch education. Indian Institute of Technology 
                  Dharwad Online is an independent premier Science and Technology Institute that was established by the MHRD 
                  (Ministry of Human Resource Development), Government of India in 2016.
                </p>
                <p>
                  Initially, IIT Dharwad Online was under the mentorship of IIT Bombay, and the academic activities of the 
                  institution commenced in July 2016 with B.Tech as their prime program, offered in 3 different specializations: 
                  Electrical Engineering, Computer Science, and Mechanical Engineering.
                </p>
                <p>
                  IIT Dharwad Online is situated in Dharwad, Karnataka, India. The current campus of the institution is located 
                  within the WALMI (Water and Land Management Institute). There are flexible transport facilities available to 
                  reach the institute and it is located within a 30 km radius of Hubli, the second largest city in Karnataka.
                </p>
                <p>
                  The campus of IIT Dharwad Online is technically advanced and has well-maintained and globally competent 
                  infrastructure with all the facilities a student requires during their academic journey. IIT Dharwad Online 
                  offers a flexible and highly accessible learning environment through online mode. The study materials offered 
                  at the institute are modeled and structured according to the curriculum of IIT Bombay.
                </p>
                <p>
                  The institute indulges students in practical tasks and projects of hands-on engineering from their initial year 
                  to give them global exposure to industry-based skills under the guidance of world-class faculty. IIT Dharwad 
                  Online offers various courses through eight different departments in the field of Science and Technology in 
                  multiple undergraduate, postgraduate, and doctoral-level programs.
                </p>
                <p>
                  IIT Dharwad Online focuses on giving global exposure to every individual with different creative and critical 
                  avenues on campus while offering hands-on engineering knowledge. The institute has a balanced blend of science 
                  and technological programs along with social science courses and encourages candidates to practice their relevant 
                  extracurricular activities along with their studies.
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
                    <div className={styles.statNumber}>2016</div>
                    <div className={styles.statLabel}>Year Established</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>8</div>
                    <div className={styles.statLabel}>Departments</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>101-150</div>
                    <div className={styles.statLabel}>NIRF Rank</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>IIT</div>
                    <div className={styles.statLabel}>Bombay Mentored</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                IIT Dharwad offers quality programs in Science and Technology with IIT Bombay curriculum standards.
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
                        <td>{course.specializations} {course.specializations === 1 ? 'Option' : 'Options'}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>IIT Excellence with IIT Bombay Standards:</strong> Curriculum modeled on IIT Bombay framework ensuring 
                world-class education. NIRF ranked engineering institute with UGC and MHRD approval. Hands-on engineering projects 
                from first year providing global industry exposure. Eight specialized departments in Science and Technology. Multiple 
                scholarship opportunities including Institute Merit-cum-Means scholarship, fee remission, and central sector scholarships 
                for SC/ST students. Active Career Development Cell with placements in top companies like Toshiba, HCL, Accenture, IBM, 
                and LG.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                Candidates interested in enrolling at Indian Institute of Technology Dharwad are required to appear for common 
                entrance exams JEE, GATE, IIT JAM, CAT, CEED, and JRF. Admission is based on cut-off basis - students who qualify 
                for these exams with minimum required score can proceed with the further admission process.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website & Register</h3>
                    <p>Visit the official website of IIT Dharwad Online and register yourself to get access to the admission portal. After registration, you will receive login credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Access Portal & Submit Scores</h3>
                    <p>After accessing the admission portal, click on the application tab and submit your scores for the relevant entrance exam you have appeared for (JEE, GATE, IIT JAM, CAT, CEED, JRF).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Cut-off Verification</h3>
                    <p>Further application process can only be availed if the candidate has scored according to the minimum criteria set by the cut-off. Submission of score will lead to the application form.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Provide required information related to qualifications, work experience, background details, etc. Attach required and relevant documents along with the form. Ensure all information and documents are valid and accurate.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Payment & Submission</h3>
                    <p>With the completion of all steps, proceed with the payment process. After payment, successfully submit your application form. According to latest UGC guidelines, create ABC ID and DEB ID for admission.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> Bachelor's degree in Engineering/Technology with minimum 60% marks (55% for SC/ST/PwD). Valid GATE score mandatory</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree in relevant discipline with minimum 60% marks. Research proposal, GATE/NET qualification, and interview required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive MBA:</strong> Bachelor's degree with minimum 60% marks and 3-5 years professional work experience in managerial or technical roles</span>
                </div>
              </div>

              <h3>Scholarship Opportunities</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Institute Merit-cum-Means scholarship</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Facilities of free messing of only basic menu</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Remission of fees</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Central sector scholarship scheme for top-class education for SC students</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Central sector scholarship scheme for top-class education for ST students</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>National scholarship for higher education for ST students</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement & Career Development</h2>
              <p className={styles.sectionDesc}>
                The Career Development Cell (CDC) at IIT Dharwad assists students in acquiring industry-oriented skills to compete in the global market
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
                  <p>Increase in Interviews</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Support</p>
                </div>
              </div>

              <h3>Career Development Cell (CDC)</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Dedicated Career Development Cell remains active throughout the program</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Focus on holistic development with theoretical and industry-relevant skills from first semester</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Develops leadership qualities, team spirit, and management skills through academic activities</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Partnerships with leading companies around the world for regular recruitment</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Best placement assistance among IITs with competitive salary packages</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Comprehensive industry-oriented skill development for global competitiveness</span>
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

export default IITDharwad;
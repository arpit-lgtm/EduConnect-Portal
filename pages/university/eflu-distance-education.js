import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const EFLUDistanceEducation = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Master of Arts', fee: 25000, duration: '2 Years', specializations: 6 },
    { name: 'Postgraduate Certificate in the Teaching of English', fee: 18000, duration: '1 Year', specializations: 1 },
    { name: 'Postgraduate Diploma in the Teaching of English', fee: 22000, duration: '1 Year', specializations: 1 },
  ];

  const keyHighlights = [
    'Founded in 1958 as Central Institute of English, transformed into a Central University in 2007',
    'Specializes in teaching 10 foreign languages including Arabic, French, Spanish, Russian, Korean, Chinese, German, Persian, Japanese, and Italian',
    'Multiple campus locations in Hyderabad (headquarters), Lucknow, and Shillong covering different regions',
    'Comprehensive structure with 7 schools and 26 academic departments',
    'Approved by UGC-DEB and accredited with NAAC A Grade certification',
    'Placement assistance with connections to 300+ hiring partners including Amazon, HP, IBM, Oracle, and TCS',
    'Strong focus on language education, linguistics, mass communication, and critical humanities',
    'Research-oriented approach with UGC fellowships for junior and senior research scholars',
    'Twice-yearly admission cycles in July/August and January/February sessions',
    'Evaluation system includes assignments and semester-end examinations at designated study centers'
  ];

  const approvals = ['UGC-DEB', 'NAAC A', 'Act of Parliament', 'Central University'];
  const nirfRank = 'NAAC A Grade';
  const accreditation = 'UGC-DEB, NAAC A';

  const placementPartners = [
    'Google', 'Accenture', 'Capgemini', 'Facebook', 
    'Infosys', 'KPMG', 'Reliance', 'Wipro', 
    'Amazon', 'HP', 'Toshiba', 'IBM', 'Oracle', 'TCS'
  ];

  const faqs = [
    {
      question: 'Are the distance education programs offered by EFLU recognized and valid?',
      answer: 'Yes, all distance education programs offered by EFLU are fully approved by UGC-DEB (University Grants Commission - Distance Education Bureau) and hold the same validity as regular on-campus degrees. EFLU is also accredited with NAAC A Grade, ensuring high-quality educational standards.'
    },
    {
      question: 'What courses are available through EFLU Distance Education mode?',
      answer: 'EFLU offers Master of Arts (M.A.) in English with various specializations including Linguistics, Mass Communication, Critical Humanities, Psychology, and Liberal Arts. Additionally, Postgraduate Certificate in the Teaching of English (PGCTE) and Postgraduate Diploma in the Teaching of English (PGDTE) are available through distance mode.'
    },
    {
      question: 'Which foreign languages can I study at EFLU?',
      answer: 'The university provides comprehensive training in 10 foreign languages: Arabic, French, Spanish, Russian, Korean, Chinese, German, Persian, Japanese, and Italian, along with extensive English language programs. The institution was specifically established to promote foreign language education in India.'
    },
    {
      question: 'Is online examination available for EFLU ODL programs?',
      answer: 'Students need to appear for semester-end examinations at designated exam centers assigned by the university. Assignments can be submitted at designated study centers. The university follows a structured evaluation schedule combining continuous assessment through assignments and semester-end examinations.'
    },
    {
      question: 'How many campuses does EFLU operate across India?',
      answer: 'EFLU has three campuses strategically located across India: the main headquarters in Hyderabad, a regional campus in Lucknow (established 1979) to serve the North region, and another campus in Shillong (established 1973) to cater to the North-East states.'
    },
    {
      question: 'What scholarship opportunities are available at EFLU?',
      answer: 'The university offers various educational aids including UGC Junior Research Fellowships, Senior Research Fellowships, UGC Non-Net Fellowships for research programs, and scholarships for postgraduate students. Students can visit the official university website for detailed information on eligibility criteria and application procedures.'
    }
  ];

  return (
    <>
      <Head>
        <title>English and Foreign Languages University Distance Education | EFLU ODL Programs</title>
        <meta name="description" content="Explore EFLU Distance Education programs including M.A., PGCTE, and PGDTE. UGC-DEB approved, NAAC A Grade accredited. Training in 10 foreign languages." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/English And Foreign Languages Universit.png" 
                alt="English and Foreign Languages University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Hyderabad, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.4/5</span>
                    <span className={styles.reviews}>(297 Reviews)</span>
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
                {tab === 'faqs' ? 'FAQ' : tab === 'courses' ? 'Programs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About English and Foreign Languages University</h2>
              <div className={styles.aboutContent}>
                <p>
                  The English and Foreign Languages University (EFLU) was originally established in 1958 in Hyderabad as the Central Institute of English (CIE), 
                  fulfilling Prime Minister Pandit Jawaharlal Nehru's visionary goal of providing superior education and training in English and foreign languages. 
                  The institution aimed to offer comprehensive research, instructional, and extension facilities for English language teaching, along with 
                  fostering deep interest in literary and cultural studies among students throughout the nation.
                </p>
                <p>
                  Beyond conducting regular teacher training programs, the institute established new standards through innovative conferences, contemporary courses, 
                  and regularly updated curricula that kept pace with evolving educational needs. In 1972, the institution was renamed as Central Institute of English and 
                  Foreign Languages (CIEFL) when it expanded to include three additional languages: German, French, and Russian. The following year in 1973, 
                  it achieved the prestigious status of a deemed-to-be university, marking a significant milestone in its academic journey.
                </p>
                <p>
                  The university's strategic expansion continued with the establishment of two additional campuses—one in Shillong in 1973 and another in Lucknow in 1979. 
                  This geographic diversification helped the institution extend quality language education to the North and North-East regions of India, 
                  addressing regional educational needs effectively. In 2006-2007, through an Act of Parliament, the institute was elevated to the status of 
                  Central University and renamed English & Foreign Languages University, reflecting its enhanced academic standing.
                </p>
                <p>
                  Currently, EFLU provides comprehensive training in 10 foreign languages: Arabic, French, Spanish, Russian, Korean, Chinese, German, Persian, 
                  Japanese, and Italian. The university operates through 7 schools and 26 departments, offering an extensive range of graduate, postgraduate, diploma, 
                  and research programs in language studies. The M.A. in English program covers diverse subjects including Linguistics, Mass Communication, 
                  Critical Humanities, Psychology, and Liberal Arts, preparing students for varied career paths.
                </p>
                <p>
                  The university's placement cell functions as an effective bridge between students and top industry recruiters, maintaining active connections with HR 
                  departments of leading companies. They proactively engage organizations interested in recruiting talented graduates, organizing regular lectures, 
                  workshops, CV preparation sessions, and achieving an impressive placement record exceeding 90% for various positions. Notable recruiters include 
                  Accendere Knowledge Management Services Pvt. Ltd., Mobius, Quantum Leap, Amazon, HP, Toshiba, IBM, Oracle, and TCS.
                </p>
                <p>
                  EFLU is recognized by the University Grants Commission Distance Education Bureau (UGC-DEB) and holds NAAC A Grade accreditation, ensuring 
                  high-quality educational standards. The university also offers various educational aids including UGC Junior Research Fellowships, Senior Research Fellowships, 
                  and UGC Non-Net Fellowships for research scholars, along with scholarship opportunities for postgraduate students pursuing advanced studies.
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
                  <div className={styles.statNumber}>67 Years</div>
                  <div className={styles.statLabel}>Academic Heritage</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>10 Languages</div>
                  <div className={styles.statLabel}>Foreign Language Training</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3 Campuses</div>
                  <div className={styles.statLabel}>Pan-India Presence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+ Partners</div>
                  <div className={styles.statLabel}>Placement Network</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Specialized distance education programs in English language teaching and education
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
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Twice-yearly admissions in July/August and January/February. No entrance examination required. Scholarships and UGC fellowships available.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Begin your language education journey at EFLU through our streamlined admission process
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Portal Registration</h3>
                    <p>Create an account on the university admission portal using a valid email address and mobile number. Ensure you use functional contact details for all future communications.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Credential Verification</h3>
                    <p>Complete the two-step verification process to authenticate your registered email and phone number. This security measure ensures protection of your application data.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Form Completion</h3>
                    <p>Fill in all personal and academic details accurately as per your official documents. Review each section carefully before proceeding to the next step to avoid errors.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload</h3>
                    <p>Upload scanned copies of your photograph, signature, educational certificates, and category certificates (if applicable). Ensure all documents are clear, legible, and in the specified format.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Confirmation</h3>
                    <p>Complete the course fee payment through the secure online payment gateway of the university. Upon successful payment, the School of Distance Education will verify all details and confirm your admission.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/BBA/B.Com):</strong> 10+2 or equivalent from recognized board. No entrance examination required - direct admission mode</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/MBA/M.Com):</strong> Bachelor's degree from UGC recognized university with minimum 50% marks in relevant discipline</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>ODL Programs:</strong> ABC ID and DEB ID mandatory per UGC guidelines. 100% fee refund available within specified period. Admissions twice annually</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>No entrance examination required for ODL programs - admissions granted in direct mode</li>
                  <li>All candidates must create ABC ID and DEB ID as per latest UGC guidelines</li>
                  <li>Admissions conducted twice annually in July/August and January/February sessions</li>
                  <li>100% fee refund available within specified period as per UGC fee refund policy</li>
                  <li>The School of Distance Education verifies all submitted information before confirming admission</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                Access exceptional career opportunities through EFLU's extensive corporate partnerships
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>3,000+</h3>
                  <p>Job Opportunities</p>
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
                  <h3>90%+</h3>
                  <p>Placement Success Rate</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Regular updates on upcoming placement drives and recruitment events</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Organized lectures and skill development workshops</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Professional CV preparation guidance and review sessions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Mock interview sessions and personality development training</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Direct engagement with international universities for higher education opportunities</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Networking opportunities with alumni and industry professionals</span>
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
              <p className={styles.sectionDesc}>
                Common inquiries about EFLU distance education programs addressed
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

              <div className={styles.contactCta}>
                <h3>Need Additional Information?</h3>
                <p>Our admissions advisors are available to address your specific queries</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Speak with Counselors</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EFLUDistanceEducation;

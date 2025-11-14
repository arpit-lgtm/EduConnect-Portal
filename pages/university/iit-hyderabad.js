import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITHyderabad = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'PhD Program', fee: 69000, duration: '3 Years', specializations: 11 },
    { name: 'M.Tech Program', fee: 572000, duration: '2 Years', specializations: 4 },
    { name: 'Part-Time PhD', fee: 342000, duration: '5 Years', specializations: 11 }
  ];

  const keyHighlights = [
    'Ranked 8th in NIRF 2024 Engineering Category',
    'QS World Ranking 691-700, QS Asia Ranking 248',
    'Ranked 3rd in ARIIA 2024 Innovation Rankings',
    'Established in 2008 by Government of India',
    '14 specialized departments spanning Engineering, Sciences, Design',
    'Strong research focus with vibrant innovation culture',
    'International collaborations with global institutions',
    'Advanced research facilities and modern laboratories',
    'Entrepreneurship incubation centers supporting startups',
    'Flexible online M.Tech programs for working professionals'
  ];

  const placementPartners = [
    'India Mart', 'Intellipaat', 'Mphasis', 'PWC', 'Tata Sky',
    'Sony', 'JP Morgan', 'Google', 'Microsoft', 'Amazon',
    'Deloitte', 'IBM', 'Infosys', 'TCS', 'Wipro',
    'Accenture', 'Capgemini', 'HCL', 'Oracle', 'SAP', 'Intel'
  ];

  const faqs = [
    {
      question: 'Are the online courses offered by IIT Hyderabad valid?',
      answer: 'Yes, all online programs from IIT Hyderabad carry full institutional validity and government recognition. These courses maintain identical academic standards to on-campus programs and are globally accepted by employers and educational institutions.'
    },
    {
      question: 'What are the courses offered at IIT Hyderabad?',
      answer: 'IIT Hyderabad offers B.Tech, M.Tech, M.Sc, M.Des, MA, PhD, and specialized online programs for working professionals. Popular programs include M.Tech in AI, Computer Science, Civil Engineering, and Mechanical & Aerospace Engineering available in flexible online formats.'
    },
    {
      question: 'What disciplines are available at IIT Hyderabad?',
      answer: 'The institute offers diverse specializations including Artificial Intelligence, Computer Science, Civil Engineering, Electrical Engineering, Mechanical & Aerospace Engineering, Biotechnology, Chemical Engineering, Materials Science, Chemistry, Mathematics, Physics, Design, and Liberal Arts programs.'
    },
    {
      question: 'Does IIT Hyderabad offer online programs?',
      answer: 'Yes, IIT Hyderabad provides comprehensive online M.Tech programs designed specifically for working professionals. These flexible programs feature weekend classes, online resources, and evening sessions enabling career advancement without employment interruption.'
    },
    {
      question: 'Do I need campus visits for online course exams?',
      answer: 'No, online programs utilize remote examination systems with secure proctoring technology. All assessments, lectures, and study materials are accessible online, eliminating mandatory campus visits while maintaining academic integrity.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Hyderabad Online Programs | M.Tech, PhD for Working Professionals</title>
        <meta name="description" content="IIT Hyderabad - Ranked 8th NIRF 2024 Engineering, 3rd ARIIA Innovation. M.Tech, PhD programs online. QS Ranked, research-focused excellence." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Hyderabad.png" 
                alt="IIT Hyderabad Logo" 
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
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(357 Reviews)</span>
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
                  <span className={styles.infoValue}>Rank 14 (Overall 2024)</span>
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
              <h2>About IIT Hyderabad</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Hyderabad, inaugurated in 2008 as one of India's premier technical institutions, exemplifies governmental commitment to advancing scientific and technological education across the nation. Designated as an Institute of National Importance, IIT Hyderabad has swiftly established itself among the country's foremost engineering colleges, consistently securing top-ten positions in NIRF rankings and earning recognition through multiple prestigious global assessments including QS World Rankings and ARIIA innovation metrics. The institution's remarkable trajectory from inception to excellence within merely fifteen years demonstrates exceptional organizational capabilities, visionary leadership, and unwavering dedication to academic superiority, research innovation, and societal contribution through technological advancement and knowledge creation.
                </p>
                <p>
                  IIT Hyderabad encompasses fourteen specialized academic departments delivering comprehensive educational programs across engineering, pure sciences, design, liberal arts, and interdisciplinary domains. These departments include cutting-edge specializations in Artificial Intelligence, Biotechnology, Climate Change, Computer Science and Engineering, Engineering Science, Materials Science and Metallurgical Engineering, Biomedical Engineering, Chemical Engineering, Civil Engineering, Electrical Engineering, Heritage Science and Technology, Mechanical and Aerospace Engineering, Chemistry, Mathematics, Design, and Liberal Arts, collectively providing students with extensive opportunities for specialized learning, research exploration, and professional development. The institute's interdisciplinary approach encourages collaborative research initiatives transcending traditional departmental boundaries, fostering innovative problem-solving methodologies addressing complex contemporary challenges requiring multifaceted expertise and diverse perspectives.
                </p>
                <p>
                  Research excellence constitutes a fundamental pillar of IIT Hyderabad's institutional mission, evidenced by its impressive third-place ranking in the ARIIA 2024 innovation assessments, recognizing outstanding achievements in fostering entrepreneurial mindsets, promoting technological innovations, and establishing robust startup ecosystems. The institute maintains state-of-the-art research facilities housing sophisticated instrumentation, advanced laboratories, computational resources, and specialized equipment enabling groundbreaking investigations across diverse scientific and engineering disciplines. Faculty members and research scholars actively pursue cutting-edge research projects spanning artificial intelligence, sustainable technologies, advanced materials, biomedical innovations, climate science, heritage preservation technologies, and numerous other contemporary domains attracting substantial sponsored funding from governmental agencies, industrial collaborations, and international research partnerships.
                </p>
                <p>
                  IIT Hyderabad demonstrates strong commitment to democratizing quality technical education through innovative online program offerings specifically designed for working professionals seeking advanced qualifications without career interruptions. These flexible M.Tech programs leverage sophisticated e-learning platforms, interactive digital resources, weekend scheduling, and evening sessions enabling employed individuals to pursue graduate education while maintaining professional commitments, thereby expanding access to premier technical education beyond traditional campus-based models. The institute's global recognition through QS World Rankings (691-700) and QS Asia Rankings (248th position) reflects its growing international reputation, extensive collaborative partnerships with leading global universities, research productivity, and commitment to maintaining world-class educational standards comparable to established international technical institutions.
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
                IIT Hyderabad employs rigorous selection methodologies ensuring admission of exceptionally talented and motivated candidates through nationally recognized entrance examinations and comprehensive evaluation frameworks.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>
                      Candidates must successfully complete relevant national-level entrance assessments including JEE Main and JEE Advanced for undergraduate engineering programs, GATE (Graduate Aptitude Test in Engineering) for postgraduate M.Tech admissions, and specialized departmental entrance tests for doctoral programs. Online professional programs may have alternative admission criteria focusing on academic qualifications, work experience, and professional achievements rather than traditional entrance examinations.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>
                      Eligible candidates must complete comprehensive online application forms through IIT Hyderabad's official admission portal, providing detailed personal information, educational qualifications, entrance test scores, professional experience details, and uploading scanned copies of required documents including academic transcripts, certificates, identity proofs, category certificates where applicable, and photographs meeting specified technical requirements.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification</h3>
                    <p>
                      The admissions committee conducts thorough verification of submitted documents, educational credentials, entrance examination scores, and eligibility criteria compliance. Shortlisted candidates may be invited for personal interviews, written assessments, or counseling sessions depending on program requirements, where selection panels evaluate candidates' domain knowledge, research aptitude, communication abilities, and alignment with program objectives.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Enrollment</h3>
                    <p>
                      Selected candidates receive formal admission offers specifying program details, fee structure, reporting dates, and enrollment procedures. Candidates must accept offers within designated timelines, pay required admission fees through the online portal, and complete final enrollment formalities including document submission, biometric registration, and orientation program participation to commence their transformative academic journey at IIT Hyderabad.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> Bachelor's degree in relevant engineering discipline with valid GATE score. Minimum 60% aggregate (55% for SC/ST)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree in relevant field with valid GATE/NET/equivalent score. Research aptitude required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive Programs:</strong> Bachelor's degree with minimum 2-3 years relevant work experience in managerial/professional roles</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionDesc}>
                IIT Hyderabad's dedicated placement cell consistently achieves excellent placement outcomes, attracting leading national and international companies across technology, consulting, finance, and diverse industry sectors.
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
                  <h3>100%</h3>
                  <p>Placement Rate</p>
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

export default IITHyderabad;

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITKanpur = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'PhD Program', fee: 69000, duration: '3 Years', specializations: 16 },
    { name: 'M.Tech Program', fee: 800000, duration: '2 Years', specializations: 14 }
  ];

  const keyHighlights = [
    'Ranked 4th in NIRF 2023 Engineering Category',
    'Established in 1959 with UNESCO assistance',
    'Premier institution approved by AICTE',
    'Historic Kanpur Indo-American Programme (1962-1972)',
    'Collaborated with 9 leading US institutions',
    'Research-oriented curriculum with global standards',
    '550+ highly qualified faculty members',
    'Recipients of national and international awards',
    'Almost 100% placement record in engineering',
    'Strong industry partnerships for recruitment'
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Capgemini', 'Deloitte', 'EY',
    'IBM', 'KPMG', 'Microsoft', 'Wipro', 'TCS',
    'Infosys', 'Accenture', 'Oracle', 'SAP', 'Intel',
    'Goldman Sachs', 'JP Morgan', 'McKinsey', 'BCG', 'Adobe', 'Flipkart'
  ];

  const faqs = [
    {
      question: 'Does IIT Kanpur offer online courses?',
      answer: 'Yes, IIT Kanpur provides online certification programs and professional development courses for working professionals with flexible self-paced learning.'
    },
    {
      question: 'What is the highest package offered to IIT Kanpur graduates?',
      answer: 'IIT Kanpur maintains almost 100% placement record with highly competitive packages from leading national and international companies.'
    },
    {
      question: 'What specialization domains are offered at IIT Kanpur?',
      answer: 'IIT Kanpur offers specializations in Computer Science, Electrical, Mechanical, Chemical, Aerospace Engineering, Sciences, Economics, Management, and interdisciplinary programs.'
    },
    {
      question: 'Can 10+2 pass-outs enroll in online PG certificate programs?',
      answer: 'Eligibility varies by program. Verify specific requirements through official channels before application.'
    },
    {
      question: 'Are IIT Kanpur online certifications recognized internationally?',
      answer: 'Yes, IIT Kanpur certifications carry global recognition and are valued by international firms for technical proficiency.'
    },
    {
      question: 'Is financial aid provided by IIT Kanpur?',
      answer: 'Yes, IIT Kanpur offers scholarships, merit-cum-means assistance, education loans, and government scheme support for accessible education.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Kanpur Online Programs | M.Tech, PhD, Professional Certifications</title>
        <meta name="description" content="IIT Kanpur - Ranked 4th NIRF 2023 Engineering. M.Tech, PhD programs. AICTE approved, 100% placement record. Premier technical education." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Kanpur.png" 
                alt="IIT Kanpur Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Kanpur, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.6/5</span>
                    <span className={styles.reviews}>(652 Reviews)</span>
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
                  <span className={styles.infoValue}>Rank 4 (Engineering 2023)</span>
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
              <h2>About IIT Kanpur</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Kanpur, established in 1959 by the Government of India, stands as one of the nation oldest and most prestigious technical institutions, consistently maintaining its position among India top five engineering colleges. Designated as an Institute of National Importance under the Institutes of Technology Act, IIT Kanpur was founded to maintain and elevate technical education quality standards across India while fostering research excellence and technological innovation. The institution historic significance is enhanced by the landmark Kanpur Indo-American Programme (KIAP) spanning 1962 to 1972, wherein IIT Kanpur received invaluable guidance and collaboration from nine leading American institutions including California Institute of Technology, Carnegie Institute of Technology, Massachusetts Institute of Technology, Case Institute of Technology, Ohio State University, Princeton University, University of California at Berkeley, Purdue University, and University of Michigan, enabling incorporation of global best practices and contemporary pedagogical approaches into curriculum design and institutional development.
                </p>
                <p>
                  IIT Kanpur encompasses comprehensive academic departments delivering diverse educational programs across engineering, sciences, economics, management, medical sciences, humanities, and interdisciplinary domains. The institution offers extensive course portfolios including undergraduate Bachelor of Technology programs across multiple engineering specializations, integrated dual-degree programs combining bachelor and master qualifications, two-year Master of Science programs, Master of Technology with optional PhD progression pathways, Master of Design, Master of Business Administration, Executive MBA for working professionals, Master of Public Policy, Master of Science by Research in Computer Science, Data Science, and Artificial Intelligence through CMinds initiative, and rigorous doctoral programs across all departments enabling advanced research pursuits. This comprehensive academic structure ensures students access diverse specialization options, interdisciplinary learning opportunities, and pathways aligning with varied career aspirations and intellectual interests.
                </p>
                <p>
                  Research excellence constitutes a fundamental pillar of IIT Kanpur institutional mission, evidenced by state-of-the-art research facilities, sophisticated instrumentation, extensive sponsored projects, and prolific publication records in prestigious international journals. The institute maintains over 550 highly qualified faculty members, many recipients of prestigious national and international awards including National Academy of Sciences membership, Fellow of the Academy of Scientific and Innovative Research, Indian National Science Academy recognition, Indian National Academy of Engineering honors, and Humboldt Research Awards, demonstrating exceptional scholarly contributions and research impact. Faculty expertise spans cutting-edge domains addressing contemporary challenges in technology, sustainability, healthcare, materials science, artificial intelligence, and numerous other frontier areas attracting substantial research funding from governmental agencies, industry collaborations, and international partnerships.
                </p>
                <p>
                  IIT Kanpur demonstrates strong commitment to bridging academia-industry gaps through comprehensive placement support, career development initiatives, and robust alumni networks facilitating exceptional professional opportunities for graduates. The institute maintains an almost 100% placement record, particularly impressive in engineering departments, with leading national and international companies participating in campus recruitment drives offering highly competitive compensation packages. The extensive alumni network comprising accomplished professionals occupying leadership positions in technology companies, consulting firms, financial institutions, research organizations, academic institutions, government agencies, and entrepreneurial ventures worldwide consistently contributes to IIT Kanpur legacy while maintaining strong engagement with current students through mentorship, recruitment, philanthropy, and collaborative initiatives. The flexible online certification programs and professional development courses extend IIT Kanpur educational reach to working professionals seeking skill enhancement without career interruptions, thereby democratizing access to premium technical education and fulfilling the institutional mission of developing technically proficient, innovation-oriented professionals contributing meaningfully to national development and global technological advancement.
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
                IIT Kanpur employs rigorous selection methodologies ensuring admission of exceptionally talented candidates through nationally recognized entrance examinations and comprehensive evaluation frameworks.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>
                      Candidates must successfully complete relevant national-level entrance assessments including JEE Main and JEE Advanced for undergraduate engineering programs, JAM (Joint Admission Test for MSc) for integrated science programs, GATE (Graduate Aptitude Test in Engineering) for M.Tech admissions, and specialized departmental entrance tests for doctoral programs evaluating research aptitude and domain expertise. Online certification courses may have alternative admission criteria focusing on academic qualifications and professional experience.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>
                      Eligible candidates must complete detailed online application forms through IIT Kanpur official admission portal, providing comprehensive personal information, educational qualifications, entrance test scores, cover letters, Statement of Purpose articulating research interests and career objectives, updated resumes highlighting academic achievements and professional experience, and uploading scanned copies of required documents including academic transcripts, certificates, identity proofs, and any additional materials specified for particular programs.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Selection Process</h3>
                    <p>
                      The admissions committee conducts thorough evaluation of applications based on entrance examination performance, academic records demonstrating consistent excellence, research proposals (for doctoral programs), letters of recommendation, Statement of Purpose quality, and alignment with departmental research strengths. Shortlisted candidates may be invited for personal interviews, written tests, or counseling rounds where selection panels assess domain knowledge, analytical abilities, communication skills, research potential, and overall suitability for rigorous academic programs.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Completion</h3>
                    <p>
                      Selected candidates receive formal admission offers detailing program specifics, comprehensive fee structure, payment schedules, reporting dates, and enrollment procedures. Candidates must accept offers within stipulated timelines, pay required admission deposits through designated channels, and complete final enrollment formalities including document verification, medical examinations, hostel allocation, and orientation program participation to commence their transformative educational journey at this premier institution renowned for academic excellence and research innovation.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> Bachelor's degree in relevant engineering/technology field with valid GATE score. Minimum 60% aggregate (55% for SC/ST/PwD)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree in relevant discipline with GATE/NET/NBHM/equivalent qualification. Strong research aptitude required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive Programs:</strong> Bachelor's degree with minimum 3 years relevant professional experience in technical/managerial positions</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionDesc}>
                IIT Kanpur Training and Placement Cell consistently achieves exceptional placement outcomes, attracting leading national and international companies across diverse industry sectors.
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
                  <h3>~100%</h3>
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

export default IITKanpur;

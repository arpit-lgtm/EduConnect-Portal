import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITBombay = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Doctor of Philosophy (PhD)', fee: 96000, duration: '3 Years', specializations: 1 },
    { name: 'M.Tech Program', fee: 210400, duration: '2 Years', specializations: 1 },
    { name: 'Part-Time PhD', fee: 51400, duration: '3 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 3rd in NIRF 2024 Engineering Category',
    'Established in 1958 with assistance from UNESCO and Soviet Union',
    'Campus spread over 550 acres in Powai, Mumbai',
    'Research-oriented programs with advanced laboratories',
    'Shanti Swaroop Bhatnagar & Padma Award recipients on faculty',
    'IITBombayX platform offering MOOCs in multiple fields',
    '15 hostels accommodating residential students',
    'Extensive international collaborations globally',
    '100+ companies participate in campus placement',
    'Excellence in innovation and entrepreneurship development'
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Microsoft', 'Bosch', 'HDFC Bank', 
    'IBM', 'Kantar', 'NTT Data', 'TCS', 'Zalaris',
    'CISCO', 'Intel', 'Qualcomm', 'Oracle', 'SAP',
    'Goldman Sachs', 'JP Morgan', 'McKinsey', 'BCG', 'Bain & Company',
    'Accenture'
  ];

  const faqs = [
    {
      question: 'Are the online courses offered by IIT Bombay valid?',
      answer: 'Yes, all online programs offered by IIT Bombay through authorized platforms are completely valid and recognized. IIT Bombay has launched IITBombayX, an innovative online learning platform delivering MOOCs (Massive Open Online Courses) across diverse engineering, science, management, and technology domains. These comprehensive programs maintain the same rigorous academic standards, distinguished faculty expertise, and quality curriculum as traditional on-campus offerings. The degrees and certificates awarded through properly authorized online channels carry full institutional recognition and are valued equivalently to conventional degrees by employers, educational institutions, and professional bodies worldwide. Students enrolled in these programs benefit from IIT Bombay\'s prestigious brand reputation, cutting-edge curriculum, interaction with expert faculty, access to comprehensive learning resources, and robust alumni networking opportunities that significantly enhance career prospects across global markets.'
    },
    {
      question: 'What are the courses offered to students at IIT Bombay?',
      answer: 'IIT Bombay offers an extensive portfolio of undergraduate, postgraduate, and doctoral programs spanning engineering, sciences, design, and management disciplines. The comprehensive course catalog includes Bachelor of Technology (B.Tech) across multiple engineering departments, integrated Dual Degree programs combining B.Tech and M.Tech, Bachelor of Science (B.S.), Bachelor of Design (B.Des), two-year Master of Science (M.Sc.), M.Sc. & Ph.D. Dual Degree programs, Master of Technology (M.Tech.) with optional Ph.D. progression, Master of Design (M.Des.), Master of Business Administration (MBA and Executive MBA), M.Sc.-Ph.D. Dual Degree in Energy specializations, Master of Public Policy (MPP), Master of Science by Research in Computer Science, Data Science, and Artificial Intelligence through CMinds, MA+Ph.D. Dual Degree in Philosophy, Master in Development Practice (MDP), and Master of Arts by Research (MA.Res.). Programs span departments including Aerospace Engineering, Civil Engineering, Earth Sciences, Electrical Engineering, Metallurgical Engineering and Materials Science, Chemical Engineering, Computer Science and Engineering, Energy Science and Engineering, and Mechanical Engineering, providing students exceptional opportunities for specialization, interdisciplinary research, and professional development.'
    },
    {
      question: 'What disciplines are offered at IIT Bombay?',
      answer: 'IIT Bombay encompasses 14 distinguished academic departments delivering world-class education and research opportunities across fundamental and applied disciplines. The institute offers comprehensive programs through Aerospace Engineering focusing on aircraft design and space technology, Civil Engineering addressing infrastructure and construction management, Earth Sciences exploring geological and environmental phenomena, Electrical Engineering advancing power systems and electronics, Metallurgical Engineering and Materials Science developing innovative materials, Chemical Engineering optimizing industrial processes, Computer Science and Engineering pioneering software and computational technologies, Energy Science and Engineering promoting sustainable energy solutions, Mechanical Engineering designing machines and systems, Mathematics providing theoretical foundations, Physics exploring fundamental natural laws, Chemistry investigating molecular sciences, Humanities and Social Sciences enriching liberal education, and Management Studies developing business leadership capabilities. Each department maintains internationally recognized faculty, state-of-the-art research facilities, collaborative industry partnerships, and comprehensive curricula integrating theoretical knowledge with practical applications, ensuring graduates acquire cutting-edge technical expertise, critical thinking abilities, innovation mindsets, and leadership qualities essential for addressing complex global challenges across diverse professional domains.'
    },
    {
      question: 'Does IIT Bombay offer online programs?',
      answer: 'Yes, IIT Bombay has strategically embraced online education through its innovative IITBombayX platform, which delivers high-quality Massive Open Online Courses (MOOCs) to learners worldwide. This comprehensive digital learning initiative provides accessible education across engineering, sciences, technology, management, and interdisciplinary fields without geographical limitations. The online programs maintain IIT Bombay\'s renowned academic rigor, distinguished faculty instruction, interactive learning methodologies, comprehensive study materials, regular assessments, peer collaboration opportunities, and robust support systems. Students enrolled in authorized online programs benefit from flexible learning schedules accommodating professional commitments, self-paced progression through coursework, live interactive sessions with expert faculty, recorded lectures enabling repeated review, discussion forums facilitating peer learning, group projects developing teamwork capabilities, and comprehensive examinations measuring competency development. Upon successful completion, participants earn recognized certificates and credentials carrying IIT Bombay\'s prestigious institutional endorsement, significantly enhancing career advancement prospects, professional credibility, and competitive advantage in dynamic global employment markets increasingly valuing continuous learning and technological proficiency.'
    },
    {
      question: 'Do I have to visit the campus to give exams for online courses?',
      answer: 'IIT Bombay\'s online examination system is thoughtfully designed to eliminate the necessity for physical campus visits, providing comprehensive remote assessment capabilities through secure digital platforms incorporating advanced proctoring technologies. Students enrolled in online programs complete all examinations through dedicated online portals featuring stringent security protocols, real-time monitoring systems, identity verification procedures, browser lockdown mechanisms, and integrity safeguards ensuring fair evaluation while maintaining academic standards. The institute provides detailed examination guidelines, technical support services, practice sessions familiarizing students with the assessment platform, and troubleshooting assistance addressing connectivity or technical challenges. Examinations are scheduled with sufficient advance notice allowing adequate preparation time, conducted at convenient timings accommodating diverse time zones, and monitored through sophisticated proctoring systems ensuring examination integrity. However, certain specialized programs or specific courses may occasionally require brief campus visits for intensive practical sessions, laboratory work, project presentations, or immersive learning experiences that cannot be effectively delivered remotely, though such requirements are clearly communicated during program enrollment with adequate advance notification enabling appropriate planning and arrangements for working professionals.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Bombay Online Programs | PhD, M.Tech & Research Programs</title>
        <meta name="description" content="Explore programs from IIT Bombay - Ranked 3rd NIRF 2024 Engineering. PhD, M.Tech & Part-Time PhD programs for working professionals and researchers." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Bombay.png" 
                alt="IIT Bombay Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Powai, Mumbai, Maharashtra</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Established:</span>
                  <span className={styles.infoValue}>1958</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>3rd (Engineering 2024)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Rating:</span>
                  <span className={styles.infoValue}>⭐ 4.6/5 (327 Reviews)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['NIRF', 'UGC', 'AICTE'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
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
                {tab === 'courses' ? 'Programs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IIT Bombay</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Bombay, established in 1958 with assistance from UNESCO and the Soviet Union, emerged as one of India's premier technical institutions dedicated to engineering excellence, scientific innovation, and technological advancement. Founded with just 14 academic departments, the institute rapidly transformed into a globally recognized center of learning attracting brilliant minds from across the nation and internationally. IIT Bombay's establishment marked a pivotal milestone in India's technological evolution, fostering indigenous capabilities in advanced engineering, applied sciences, and research domains critical for national development and industrial progress.
                </p>
                <p>
                  Located on a sprawling 550-acre campus in Powai, Mumbai, IIT Bombay functions as a comprehensive residential institution accommodating students across 15 well-equipped hostels providing modern amenities, recreational facilities, academic support services, and vibrant community environment. The campus infrastructure encompasses state-of-the-art laboratories, advanced research centers, extensive libraries, sports complexes, cultural venues, and collaborative spaces fostering innovation and interdisciplinary engagement. This self-contained academic township nurtures holistic development through diverse clubs, societies, technical competitions, cultural festivals, sports tournaments, and entrepreneurial initiatives complementing rigorous academic pursuits.
                </p>
                <p>
                  IIT Bombay's outstanding academic reputation reflects consistently in national and international rankings, securing 4th position in NIRF overall category, 3rd in engineering category, 7th in innovation category, and 10th in management category for 2024. These distinguished recognitions validate the institute's unwavering commitment to academic excellence, research impact, faculty quality, institutional resources, and graduate outcomes. The institute maintains active collaborations with prestigious international universities, research organizations, and industrial partners, facilitating student exchange programs, joint research initiatives, knowledge transfer activities, and global exposure opportunities enhancing educational experiences and career prospects.
                </p>
                <p>
                  Through the innovative IITBombayX platform, the institute extends quality education beyond geographical constraints, delivering Massive Open Online Courses (MOOCs) across diverse disciplines. This digital learning initiative democratizes access to world-class technical education, enabling working professionals, aspiring students, and lifelong learners to benefit from IIT Bombay's distinguished faculty expertise, comprehensive curriculum, and rigorous academic standards through flexible online delivery models incorporating live interactions, recorded lectures, interactive assessments, and collaborative learning experiences maintaining educational quality while accommodating diverse schedules and commitments.
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
              <p className={styles.admissionText}>
                Admission to IIT Bombay programs is highly competitive and merit-based, requiring candidates to demonstrate exceptional academic performance, aptitude, and potential for advanced study and research excellence.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>Candidates must appear for required entrance examinations - JEE Advanced for undergraduate programs, GATE for M.Tech programs, or institute-specific tests for PhD programs demonstrating subject mastery and analytical capabilities.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Complete comprehensive online application form available on official website, providing accurate personal details, educational qualifications, examination scores, research interests, and supporting documents including transcripts, certificates, and identity verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Fee Payment</h3>
                    <p>Submit non-refundable application processing fee through designated online payment gateway, with fee amount and payment methods specified by the institute for respective programs and candidate categories.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Selection Process</h3>
                    <p>Admission committee comprehensively evaluates applications considering entrance examination performance, academic records, research proposals (for doctoral programs), letters of recommendation, statement of purpose, and relevant achievements determining candidate suitability.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Offer</h3>
                    <p>Successful candidates receive official admission offers via email and postal communication detailing program specifics, fee structure, scholarship opportunities, enrollment procedures, reporting dates, and essential pre-arrival information facilitating smooth transition.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment & Fee Payment</h3>
                    <p>Accept admission offer within specified timeframe and complete enrollment formalities including fee payment, document verification, hostel allocation (if required), ID card issuance, and orientation program participation commencing academic journey.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement & Career Development</h2>
              <p>
                IIT Bombay's dedicated placement cell facilitates exceptional career opportunities connecting talented graduates with leading national and international organizations across diverse sectors including technology, consulting, finance, manufacturing, research, and entrepreneurship.
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

export default IITBombay;

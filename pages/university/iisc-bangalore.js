import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIScBangalore = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Doctor of Philosophy (PhD)', fee: 708000, duration: '3 Years', specializations: 42 },
    { name: 'Part-Time PhD', fee: 708000, duration: '3 Years', specializations: 42 }
  ];

  const keyHighlights = [
    'Established in 1909 - India\'s Premier Research Institute',
    'Ranked #1 in NIRF 2024 University Category',
    'Ranked #2 in NIRF 2024 Overall Category',
    'Institute of Eminence (IOE) Status by Government of India',
    'NAAC A+ Grade Accreditation with Excellence',
    '42 Departments & Centers Across Six Divisions',
    'Approximately 4,000 Students in Postgraduate & Doctoral Programs',
    'Four-Year Undergraduate Research Program in Fundamental Sciences',
    '440 Acres Lush Green Campus in Tech Hub Bengaluru',
    'Global Partnerships with Leading Technology Firms'
  ];

  const placementPartners = [
    'Google',
    'Microsoft',
    'Amazon',
    'Airtel',
    'Deloitte',
    'Ernst & Young',
    'L&T',
    'Siemens',
    'Tata Motors',
    'ISRO',
    'DRDO',
    'BARC',
    'Intel',
    'IBM',
    'Qualcomm',
    'Samsung',
    'Oracle',
    'Cisco',
    'Adobe',
    'TCS Research',
    'Wipro'
  ];

  const faqs = [
    {
      question: 'What are the programs offered at the Indian Institute of Science (IISc), Bangalore?',
      answer: 'The Indian Institute of Science (IISc) Bangalore offers comprehensive advanced education programs spanning undergraduate, postgraduate, and doctoral levels across science and engineering disciplines. The distinguished program portfolio includes a specialized four-year undergraduate Bachelor of Science (Research) program focused on delivering research-driven education to young learners in fundamental sciences including physics, chemistry, biology, mathematics, and materials science. At the postgraduate level, IISc offers rigorous Master of Science (M.Sc.), Master of Technology (M.Tech), and Master of Management programs across diverse specializations within its 42 departments and centers organized into six academic divisions. The flagship doctoral programs—Doctor of Philosophy (PhD) and Part-Time PhD—enable aspiring scholars to pursue advanced research in cutting-edge areas spanning engineering sciences, physical sciences, chemical sciences, biological sciences, interdisciplinary research, and management. Each program features meticulously designed curriculum combining theoretical depth with intensive research training, delivered by distinguished faculty possessing doctoral degrees from premier global institutions and extensive research expertise.'
    },
    {
      question: 'Does IISc offer courses in online mode?',
      answer: 'Currently, the Indian Institute of Science (IISc) Bangalore primarily focuses on delivering intensive research-driven education through on-campus residential programs that maximize student-faculty interaction, laboratory access, collaborative research opportunities, and immersive learning experiences essential for advanced scientific and technological education. While traditional degree programs like undergraduate, master\'s, and doctoral offerings require campus attendance to facilitate hands-on laboratory work, research project engagement, and collaborative investigations central to IISc\'s educational philosophy, the institute has been progressively exploring online and hybrid learning modalities for specific continuing education programs, executive education offerings, and specialized certificate courses. These emerging online initiatives leverage sophisticated technology platforms to extend IISc\'s expertise to working professionals and researchers who cannot relocate for full-time residential programs. For authoritative information regarding current online program availability, specific offerings, eligibility criteria, and enrollment procedures, prospective students should visit the official IISc Bangalore website or contact the admissions office directly for comprehensive guidance aligned with their educational aspirations and professional circumstances.'
    },
    {
      question: 'What are the qualifications required for admission at IISc?',
      answer: 'Admission qualifications at the Indian Institute of Science (IISc) Bangalore vary significantly across program levels, reflecting the institute\'s commitment to admitting exceptionally talented students with strong academic foundations and research aptitude. For the four-year undergraduate Bachelor of Science (Research) program, students must demonstrate outstanding performance in national-level entrance examinations including JEE Advanced, KVPY (Kishore Vaigyanik Protsahan Yojana), NEET-UG, or equivalent assessments, combined with exceptional academic records in 10+2 examinations. Master\'s program applicants typically require a bachelor\'s degree in relevant disciplines with specified minimum academic performance standards, along with valid scores in entrance examinations such as GATE (Graduate Aptitude Test in Engineering), CEED (Common Entrance Examination for Design), or IISc-specific entrance tests depending on the chosen specialization. Doctoral program candidates must possess a master\'s degree with strong academic credentials and demonstrate research potential through GATE scores, UGC-NET qualification, CSIR-NET certification, or equivalent national-level examination performance, followed by rigorous interviews assessing research aptitude, domain knowledge, problem-solving capabilities, and alignment with available faculty research interests. International applicants may submit GRE scores along with appropriate academic credentials from recognized institutions.'
    },
    {
      question: 'What are the ranking and accreditation of IISc Bangalore?',
      answer: 'The Indian Institute of Science (IISc) Bangalore commands extraordinary recognition as India\'s premier research institution, validated through exceptional rankings and prestigious accreditations from national and international assessment bodies. In NIRF (National Institutional Ranking Framework) 2024 rankings conducted by the Ministry of Education, Government of India, IISc achieved the remarkable distinction of securing #1 position in the University Category, demonstrating absolute leadership among Indian research universities, while simultaneously achieving the prestigious #2 position in the Overall Category across all higher education institutions nationwide. This exceptional performance reflects IISc\'s comprehensive excellence spanning research output, teaching quality, learning resources, graduation outcomes, outreach initiatives, inclusivity, and perceived reputation among academic peers and industry stakeholders. IISc received the distinguished Institute of Eminence (IOE) designation in 2018 from the Government of India, acknowledging its potential to achieve global eminence in research and education. Additionally, the National Assessment and Accreditation Council (NAAC) awarded IISc the highest A+ grade, validating superior standards in infrastructure, faculty qualifications, research productivity, student support services, and governance mechanisms. These remarkable achievements position IISc among the world\'s leading research institutions, attracting exceptional students, accomplished faculty, substantial research funding, and prestigious international collaborations.'
    },
    {
      question: 'How to contact IISc for program information?',
      answer: 'Prospective students seeking comprehensive information regarding programs, admission processes, eligibility criteria, research opportunities, financial assistance, and application procedures at the Indian Institute of Science (IISc) Bangalore have multiple accessible channels for obtaining authoritative guidance. The official IISc Bangalore website (www.iisc.ac.in) serves as the primary information resource, providing extensive details about all academic programs, admission requirements, application timelines, faculty profiles, research centers, facilities, campus life, and student support services. The website features dedicated sections for undergraduate admissions, postgraduate admissions, and doctoral admissions, each offering specific information, downloadable application forms, important dates, and frequently asked questions addressing common inquiries. Prospective applicants can directly contact the IISc Admissions Office through official communication channels including designated email addresses and telephone numbers published on the website for personalized assistance, query resolution, and comprehensive guidance throughout the application journey. The institute\'s scenic 440-acre campus is located in the heart of Bengaluru, Karnataka, India\'s technology hub, providing an inspiring environment conducive to focused learning, collaborative research, and holistic development. For international applicants, IISc provides dedicated support addressing visa procedures, documentation requirements, and transition assistance, ensuring smooth admission processes for talented students worldwide seeking to join India\'s most prestigious research institution.'
    }
  ];

  return (
    <>
      <Head>
        <title>IISc Bangalore | Indian Institute of Science - PhD & Research Programs</title>
        <meta name="description" content="Explore research programs from IISc Bangalore - Ranked #1 NIRF 2024 University, #2 Overall, NAAC A+. PhD & Part-Time PhD across 42 departments." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IISc Bangalore.png" 
                alt="IISc Bangalore Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Bengaluru, Karnataka</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Established:</span>
                  <span className={styles.infoValue}>1909</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>1st University, 2nd Overall 2024</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Rating:</span>
                  <span className={styles.infoValue}>⭐ 3.7/5 (263 Reviews)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'NAAC A+', 'IoE'].map((approval, idx) => (
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
              <h2>About IISc Bangalore</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Science (IISc) Bangalore stands as India's most prestigious and distinguished scientific research institution, established in 1909 through the visionary philanthropy of industrialist Jamsetji Nusserwanji Tata, generous support from the Mysore royal family, and collaborative partnership with the Government of India. For over a century, IISc has maintained unwavering commitment to advancing scientific and technological knowledge, conducting groundbreaking research addressing fundamental questions and practical challenges, and educating successive generations of exceptional scientists, engineers, and researchers who have shaped India's scientific landscape and contributed significantly to global knowledge advancement.
                </p>
                <p>
                  IISc's institutional philosophy emphasizes achieving optimal balance between acquiring fundamental scientific knowledge and applying research discoveries for industrial advancement and social benefit. This distinctive approach has cultivated an environment where theoretical investigations coexist harmoniously with applied research, enabling breakthrough discoveries that address pressing societal challenges spanning healthcare, energy sustainability, environmental conservation, materials innovation, information technology, biotechnology, and emerging interdisciplinary domains. The institute's esteemed reputation attracts exceptional young faculty trained in premier global laboratories, supporting diverse interdisciplinary research output that transcends traditional disciplinary boundaries and addresses complex problems requiring integrated approaches.
                </p>
                <p>
                  The institute's comprehensive academic structure encompasses over 42 departments and research centers organized into six major divisions spanning Biological Sciences, Chemical Sciences, Electrical, Electronics, and Computer Sciences, Interdisciplinary Research, Mechanical Sciences, and Physical and Mathematical Sciences. IISc currently enrolls approximately 4,000 exceptional students pursuing advanced postgraduate and doctoral programs, while a specialized four-year undergraduate Bachelor of Science (Research) program offers research-driven education to talented young learners in fundamental sciences. Located on a magnificent 440-acre campus featuring lush greenery in Bengaluru's technology hub, IISc provides state-of-the-art research infrastructure, sophisticated laboratories, extensive library resources, high-performance computing facilities, and collaborative spaces fostering innovation, discovery, and transformative learning experiences.
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
                  <div className={styles.statNumber}>#1</div>
                  <div className={styles.statLabel}>NIRF University</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>#2</div>
                  <div className={styles.statLabel}>NIRF Overall</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>42+</div>
                  <div className={styles.statLabel}>Departments & Centers</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>4,000+</div>
                  <div className={styles.statLabel}>Research Scholars</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Advanced research programs designed for aspiring scientists and engineers pursuing scholarly excellence
              </p>
              
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Departments Available</th>
                      <th>Duration</th>
                      <th>Total Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.specializations} Department{course.specializations > 1 ? 's' : ''}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Fellowships, scholarships, and financial assistance available for eligible candidates. Research assistantships provided.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Comprehensive enrollment pathway to join India's premier scientific research institution
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Visit the official IISc Bangalore website and navigate to admissions section. Register with valid mobile number and email ID to obtain application credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Completion</h3>
                    <p>Enter comprehensive information including personal details, academic qualifications, entrance exam scores (GATE/UGC-NET/CSIR-NET), research interests, and upload necessary documents in scanned format.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Course Selection</h3>
                    <p>Select appropriate program and department based on academic background, research interests, and career aspirations. Review eligibility criteria carefully.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Review completed application thoroughly, pay application fees through online payment gateway, and submit. Save PDF confirmation for future reference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Interview & Selection</h3>
                    <p>Shortlisted candidates receive interview call letters. Successfully clear departmental interview assessment. IISc prepares merit list and offers admission to selected candidates.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Undergraduate: JEE Advanced/KVPY/NEET-UG with exceptional scores required</li>
                  <li>Master's: Bachelor's degree + GATE/CEED scores mandatory</li>
                  <li>PhD: Master's degree + GATE/UGC-NET/CSIR-NET qualification essential</li>
                  <li>International applicants: GRE scores accepted with appropriate credentials</li>
                  <li>Fellowships and research assistantships available for doctoral students</li>
                  <li>Merit-based scholarships and government fellowships accessible</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement Highlights</h2>
              <p className={styles.sectionDesc}>
                Outstanding career opportunities with premier global corporations, research institutions, and academia
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>Excellent</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Recruiters</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Premium</h3>
                  <p>Salary Packages</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Global</h3>
                  <p>Opportunities</p>
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
                Detailed responses addressing essential inquiries about IISc Bangalore's distinguished research programs
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

export default IIScBangalore;
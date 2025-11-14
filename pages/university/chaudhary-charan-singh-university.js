import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const ChaudharyCharanSinghUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online BBA', fee: 72200, duration: '4 Years', specializations: 1 },
    { name: 'Online BBA Honours', fee: 72200, duration: '4 Years', specializations: 1 },
    { name: 'Online MA', fee: 22200, duration: '2 Years', specializations: 5 },
    { name: 'Online MBA', fee: 44200, duration: '2 Years', specializations: 2 },
    { name: 'Online M.Com', fee: 22200, duration: '2 Years', specializations: 1 },
    { name: 'Online MCA', fee: 52200, duration: '2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Established in 1965, 60 years of academic excellence',
    'NAAC A++ accredited institution',
    'Ranked 99th in NIRF Rankings 2024',
    'First university to offer M.Phil and PhD programs in India',
    '222-acre sprawling campus with modern facilities',
    'Affiliated with 109 colleges and 252 professional institutions',
    'UGC and AIU approved online programs',
    'Five specialized faculties offering diverse programs',
    'Receives research grants from DBT, UGC, ICAR, AICTE, DST, CSIR',
    'Students achieve high scores in GATE, NET, Civil Services examinations'
  ];

  const placementPartners = [
    'Google', 'Accenture', 'Amazon', 'Bata', 'Bosch',
    'Capgemini', 'Deloitte', 'Fractal', 'H&M', 'HCL',
    'Infosys', 'ISRO', 'ITC', 'Kantar', 'Microsoft',
    'NTT Data', 'Paytm', 'Wipro', 'Genpact', 'Apple'
  ];

  const faqs = [
    {
      question: 'What facilities are offered by Chaudhary Charan Singh University to its students?',
      answer: '222-acre campus with Central Library, sports facilities, hostels, labs, medical center, auditoriums, botanical gardens, and modern classrooms with digital resources.'
    },
    {
      question: 'What was the previous name of Chaudhary Charan Singh University?',
      answer: 'Originally established as Meerut University in 1965, renamed Chaudhary Charan Singh University to honor the fifth Prime Minister of India.'
    },
    {
      question: 'What courses are offered by CCSU?',
      answer: 'Online: BBA, MA (Economics, Sociology, Political Science, English), MBA (Marketing, HR, Finance), M.Com, MCA. Campus: UG, PG, M.Phil, PhD, diplomas, self-financed courses.'
    },
    {
      question: 'What steps are included in applying for a program offered by Chaudhary Charan Singh University?',
      answer: 'Visit official website, register, select program, fill application, upload documents, pay fee, submit form. Create ABC ID and DEB ID as per UGC guidelines.'
    },
    {
      question: 'Who are the placement partners at Chaudhary Charan Singh University?',
      answer: 'Google, Accenture, Amazon, Microsoft, Infosys, Wipro, HCL, TCS, Deloitte, Capgemini, Bosch, ISRO, Paytm, Bata, H&M, ITC, Fractal Analytics, Genpact, Apple.'
    },
    {
      question: 'What areas are covered under the self-financed scheme provided by Chaudhary Charan Singh University?',
      answer: 'Journalism, Mass Communication, Physical Education, Earth Sciences, Multimedia, Agricultural Science, Fine Arts, Applied Science, Legal Studies, GIS, Remote Sensing.'
    }
  ];

  return (
    <>
      <Head>
        <title>Chaudhary Charan Singh University Online | BBA, MBA, MA, MCA Programs</title>
        <meta name="description" content="CCSU Meerut online programs - NAAC A++ accredited, NIRF Rank 99. Online BBA, MBA, MA, MCA, M.Com courses with UGC approval." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Chaudhary Charan Singh University.png" 
                alt="Chaudhary Charan Singh University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Meerut, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(269 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'NAAC A++', 'AIU'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 99 (University)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>NAAC A++</span>
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
              <h2>About Chaudhary Charan Singh University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Chaudhary Charan Singh University, established in 1965 in Meerut, Uttar Pradesh, stands as one of India's premier state universities with a distinguished legacy spanning six decades of academic excellence, research innovation, and societal contribution. Originally founded as Meerut University and later renamed to honor Chaudhary Charan Singh, India's fifth Prime Minister and champion of agricultural development and social justice, the university has evolved into a comprehensive educational institution serving over 300,000 students through direct enrollment and affiliated colleges. The institution occupies a sprawling 222-acre campus featuring modern infrastructure, extensive green spaces, advanced laboratories, well-equipped classrooms, comprehensive library facilities, sports complexes, residential hostels, and state-of-the-art research centers creating an ideal environment for learning, research, and holistic student development.
                </p>
                <p>
                  CCSU has earned prestigious recognition including NAAC A++ accreditation reflecting exceptional quality standards and 99th position in NIRF University Rankings 2024, demonstrating national prominence among India's higher education institutions. The university holds the historic distinction of being the first institution in India to offer M.Phil. and Ph.D. programs, pioneering advanced research education and establishing traditions of scholarly excellence that continue enriching academic culture. Approved by the University Grants Commission (UGC) and recognized by the Association of Indian Universities (AIU), CCSU maintains rigorous academic standards while expanding access through innovative delivery modes including traditional on-campus programs, online education, and open & distance learning formats ensuring educational opportunities reach diverse student populations across geographical, economic, and social backgrounds.
                </p>
                <p>
                  The university encompasses five specialized faculties delivering comprehensive programs across sciences, humanities, commerce, law, education, engineering, and interdisciplinary domains. CCSU maintains extensive affiliations with 109 colleges, one constituent college, and 252 professional colleges and institutions across the region, creating a vast academic network serving millions of students pursuing undergraduate, postgraduate, diploma, and certificate programs. The institution's commitment to research excellence is evidenced by substantial grants from premier research funding bodies including the Department of Biotechnology (DBT), University Grants Commission (UGC), Indian Council of Agricultural Research (ICAR), All India Council for Technical Education (AICTE), Department of Science and Technology (DST), Uttar Pradesh State Council for Science and Technology (UPSTC), and Council of Scientific and Industrial Research (CSIR), enabling cutting-edge investigations addressing critical challenges in agriculture, environment, health, technology, and social development.
                </p>
                <p>
                  CCSU's academic curriculum emphasizes continuous student development through innovative pedagogical approaches including the semester system enabling structured progressive learning, regular assessments through examinations, quizzes, and assignments measuring understanding and retention, interactive seminars fostering intellectual discourse and presentation skills, collaborative group discussions promoting peer learning and diverse perspectives, computer laboratory sessions providing hands-on technical skills, practical workshops connecting theoretical knowledge with real-world applications, and guest lectures by industry professionals and academic experts enriching classroom learning with contemporary insights and professional perspectives. The university's distinguished faculty comprises highly qualified academics, experienced researchers, and industry professionals holding advanced degrees from premier institutions, contributing scholarly publications to international journals, securing competitive research grants, and maintaining active engagement with professional communities. CCSU graduates consistently demonstrate exceptional performance in competitive national examinations including GATE (Graduate Aptitude Test in Engineering), NET (National Eligibility Test), Civil Services examinations, and other prestigious assessments, securing high rankings and prestigious positions in governmental organizations, research institutions, multinational corporations, and academic organizations across India and internationally, validating the quality of education and comprehensive student preparation provided by this distinguished institution throughout its illustrious six-decade journey of academic excellence and societal service.
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
              <p className={styles.sectionIntro}>
                CCSU's streamlined online admission process ensures transparent, accessible, and efficient enrollment for prospective students seeking quality education.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>
                      Navigate to the authentic Chaudhary Charan Singh University official website ensuring access to legitimate admission portals. Exercise caution regarding duplicate fraudulent websites that may compromise personal information security or mislead applicants with false promises. Verify the official domain and look for secure HTTPS connection indicators before proceeding with any transactions or data submission.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Register & Select Program</h3>
                    <p>
                      Create a new account on the university portal by registering with valid credentials including email address and mobile number for communication. Carefully review eligibility criteria for desired programs including educational qualifications, minimum percentage requirements, age restrictions, and program-specific prerequisites. After successful registration, log in to your account and navigate to the program selection interface to choose the course aligned with your academic interests and career objectives.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Complete Application Form</h3>
                    <p>
                      Fill the comprehensive online application form with accurate personal information, educational backgrounds, contact details, and relevant data requested by the university system. Upload scanned copies of required documents including academic transcripts and certificates, identity proof, category certificates (if applicable), recent passport-size photographs meeting specified dimensions, and any additional supporting materials specified for particular programs. Ensure all documents are clear, legible, and in accepted formats to avoid processing delays.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Fee & Submit</h3>
                    <p>
                      Pay the application fee through available online payment methods including credit/debit cards, net banking, UPI, or other accepted digital channels. Carefully note transaction details and save payment confirmation for future reference. Review all entered information for accuracy and completeness before final submission. Click the submit button to complete the application process. Create your ABC ID (Academic Bank of Credits) and DEB ID as per latest UGC guidelines. Receive confirmation email with application reference number for tracking admission status.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/B.Com/BBA):</strong> 12th pass from recognized board with minimum 45-50% marks as per program requirements and reservation category</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/M.Com/MBA):</strong> Bachelor's degree in relevant subject with minimum 50% aggregate marks from UGC recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Distance Education:</strong> Same eligibility criteria. ABC ID and DEB ID required as per UGC guidelines. Working professionals and fresh graduates both eligible</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionIntro}>
                CCSU's Training & Placement Cell maintains strong industry partnerships, facilitating excellent career opportunities for graduates across diverse sectors.
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
                  <h3>90%+</h3>
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

export default ChaudharyCharanSinghUniversity;

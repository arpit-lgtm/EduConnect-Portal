import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const KeralaUniversityDistanceEducation = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    // Undergraduate Programs
    { name: 'BA Economics', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BA English', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BA History', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BA Malayalam', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BA Hindi', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BA Political Science', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BA Sociology', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'B.Com', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BSc Mathematics', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BSc Computer Science', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BCA', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    { name: 'BLISc', fee: 0, duration: '1 Year', category: 'Undergraduate' },
    { name: 'BBA', fee: 0, duration: '3 Years', category: 'Undergraduate' },
    // Postgraduate Programs
    { name: 'MA Economics', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MA English', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MA History', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MA Malayalam', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MA Hindi', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MA Political Science', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MA Public Administration', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MA Sociology', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'M.Com', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MSc Mathematics', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MSc Computer Science', fee: 0, duration: '2 Years', category: 'Postgraduate' },
    { name: 'MLISc', fee: 0, duration: '1 Year', category: 'Postgraduate' },
    { name: 'MBA', fee: 0, duration: '2 Years', category: 'Postgraduate' },
  ];

  const keyHighlights = [
    'Established in 1937 by Sri Chithira Thirunal Balaram Varma - 16th University of India',
    'First center of distance education in Kerala state (started 1976)',
    'NAAC A++ Grade accreditation ensuring highest quality standards',
    'UGC-DEB recognized School of Distance Education',
    'NIRF Rank 40 by National Institutional Ranking Framework, MHRD (2022)',
    'Located at Kariavattom Campus, Thiruvananthapuram with beautiful infrastructure',
    '223+ affiliated colleges with 41 teaching and research departments',
    '10 schools, 17 institutes, and 32 study centers across Kerala',
    'Comprehensive distance education programs across UG, PG, and diploma levels',
    'Affordable fee structure making education accessible to all sections of society',
    'Well-organized study materials supporting self-directed learning',
    'Focused on promoting education to groups deprived of basic facilities'
  ];

  const approvals = ['UGC-DEB', 'NIRF', 'NAAC A++'];
  const nirfRank = 'Rank 40 - NIRF 2022';
  const accreditation = 'NAAC A++ Grade';

  const faqs = [
    {
      question: 'Is Kerala University School of Distance Education UGC recognised?',
      answer: 'Yes, Kerala University School of Distance Education is recognized by the Distance Education Bureau, UGC (UGC-DEB). The university is also NAAC re-accredited with A++ Grade, ensuring the highest standards of quality education. All degrees obtained through distance mode are equivalent to regular degrees and are valid for employment and higher education.'
    },
    {
      question: 'How to contact the Kerala University School of Distance Education?',
      answer: 'Students can contact Kerala University School of Distance Education through the official university website at www.keralauniversity.ac.in or visit the School of Distance Education office at Kariavattom Campus, Thiruvananthapuram. The university also has 32 study centers across Kerala where students can seek assistance and guidance for their programs.'
    },
    {
      question: 'What are the Study Centres of Kerala University Distance Education?',
      answer: 'Kerala University Distance Education has 32 study centers located across different districts of Kerala. These centers provide students with access to study materials, counseling services, assignment submission facilities, and examination support. Students can visit their allotted study center for any academic requirements and updates.'
    },
    {
      question: 'Are the degree from Kerala University School of Distance Education Valid for Government jobs?',
      answer: 'Yes, degrees from Kerala University School of Distance Education are valid for government jobs. Since the university is UGC-DEB recognized and NAAC A++ accredited, all degrees obtained through distance mode are at par with regular degrees and are accepted by government sectors, PSUs, and all major employers across India and internationally.'
    },
    {
      question: 'Where to check the results of Kerala University Distance Education?',
      answer: 'Students can check their Kerala University Distance Education results on the official university website. The results are published online after the completion of semester examinations. Students need to log in to the university portal using their enrollment number and other required credentials to access their results, marks sheets, and grade cards.'
    }
  ];

  return (
    <>
      <Head>
        <title>Kerala University Distance Education - BA, B.Com, MA, MBA Programs | MBA NINJA</title>
        <meta name="description" content="Kerala University Distance Education - NAAC A++ Grade. Est. 1937. UGC-DEB approved. NIRF Rank 40. 26 UG & PG programs. Thiruvananthapuram campus." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Ideku Kerala University.png" 
                alt="Kerala University Logo" 
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
                  <span className={styles.infoValue}>📍 Thiruvananthapuram, Kerala, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.5/5</span>
                    <span className={styles.reviews}>(217 Reviews)</span>
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
            {['about', 'courses', 'admissions', 'faqs'].map(tab => (
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
              <h2>About Kerala University Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  The University of Travancore, later named the University of Kerala, was established in 1937 by Sri Chithira 
                  Thirunal Balaram Varma, the Maharaja of Travancore. The University of Kerala is the 16th University of India 
                  and holds a prestigious place in the history of Indian higher education. Following its establishment, 10 colleges 
                  in the Travancore state became the affiliated colleges of the University of Travancore after getting affiliation 
                  from the Madras University.
                </p>
                <p>
                  In 1976, the University of Kerala started the Department of Teaching and Research, which became the first center 
                  of distance education in the state of Kerala. This pioneering initiative made quality education accessible to students 
                  who could not attend regular on-campus programs. The School of Distance Education is located in the Kariavattom Campus 
                  of the University of Kerala, Thiruvananthapuram, providing a conducive environment for distance learning.
                </p>
                <p>
                  The objectives of the School of Distance Education are comprehensive and focused on social development. These include 
                  offering high-quality learning and education mainly to the group of people in society deprived of basic facilities like 
                  education, promoting the advancement of the education system of distance learning that helps in enhancing career prospects, 
                  making students ready with the required skills and training that are necessary for the upgradation of an individual career, 
                  encouraging students to participate in the activities of human resource development, and molding the traditional typical 
                  education system to make it interesting and enjoyable.
                </p>
                <p>
                  The University of Kerala has been recognized and accredited by prestigious bodies ensuring quality education. It has been 
                  re-accredited by NAAC with A++ Grade, the highest grade possible, demonstrating excellence in all parameters. The School 
                  of Distance Education is recognized by Distance Education Bureau, DEB-UGC, making all degrees equivalent to regular degrees.
                </p>
                <p>
                  The University of Kerala has been ranked 40th by NIRF (National Institutional Ranking Framework), MHRD, Indian Government 
                  in 2022, showcasing its academic excellence and research contributions. There are more than 223 colleges affiliated with 
                  the University, along with 41 teaching and research departments included under 10 schools, 17 institutes, and 32 study 
                  centers spread across Kerala.
                </p>
                <p>
                  Kerala University offers many courses in distance mode across various disciplines including Arts, Commerce, Science, 
                  Computer Applications, Business Administration, and Library & Information Science. The university provides comprehensive 
                  study materials and support through its network of study centers, ensuring students receive quality education with 
                  flexibility and affordability.
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
                    <div className={styles.statNumber}>88+</div>
                    <div className={styles.statLabel}>Years of Legacy (1937)</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>26</div>
                    <div className={styles.statLabel}>Programs Offered</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>40</div>
                    <div className={styles.statLabel}>NIRF Rank 2022</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>A++</div>
                    <div className={styles.statLabel}>NAAC Grade</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Kerala University Distance Education offers 26 comprehensive programs across undergraduate and postgraduate levels.
              </p>
              
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Duration</th>
                      <th>Category</th>
                      <th>Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.duration}</td>
                        <td>{course.category}</td>
                        <td className={styles.fee}>Distance Education</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>NAAC A++ Excellence:</strong> First distance education center in Kerala state. All programs UGC-DEB recognized 
                with well-organized study materials including printed notes, online tools, and multimedia content. Affordable fees with 
                scholarships and educational aids available. Flexibility to study at your own pace through 32 study centers across Kerala.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p>Kerala University Distance Education follows a straightforward online admission process.</p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Review Admission Instructions</h3>
                    <p>Carefully go through the admission instruction from the official website. Check important dates, eligibility criteria, and required documents for your chosen program.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Choose Course & Check Eligibility</h3>
                    <p>Choose the course as per your preference and check the eligibility criteria. Visit the online admission portal for the academic year on the website and click on the start registration button.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Login & Complete Registration</h3>
                    <p>Log in using your credentials and complete the registration process. Fill in all required personal and academic details accurately.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Complete the application by making the fee payment on the online payment gateway of the School of Distance Education. Ensure you receive payment confirmation.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Confirmation</h3>
                    <p>Admission will be confirmed only after the satisfactory fulfillment of the conditions as standardized by the University. You will receive confirmation via email or SMS.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/BSc):</strong> HSC passed or equivalent qualification</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Com:</strong> HSC passed with 45% marks for non-commerce streams</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BSc Math/Computer Science/BCA:</strong> HSC passed with Mathematics as subject</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BBA:</strong> HSC passed with 45% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs:</strong> Bachelor's degree with required CCPA (varies 4.5-6.0 by program)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA:</strong> BA/BSc/B.Com or equivalent with not less than 50% in Part III</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>ABC & DEB ID:</strong> Create ABC ID and DEB ID as per latest UGC guidelines</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Admissions:</strong> Twice a year in July/August and January/February sessions</span>
                </div>
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

export default KeralaUniversityDistanceEducation;
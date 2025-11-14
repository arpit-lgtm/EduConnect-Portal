import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITRopar = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Doctor of Philosophy', fee: 240000, duration: '2 Years', specializations: 8 },
    { name: 'M.Tech Program', fee: 94940, duration: '2 Years', specializations: 12 }
  ];

  const keyHighlights = [
    'Ranked 22nd in NIRF 2023 Engineering Category',
    'Established in 2008 by MHRD under IIT Act 2011',
    'Located in Punjab with 400+ acre campus',
    'Motto: "Deploy our intellect on the right path"',
    'Active consultation partnership with IIT Calcutta',
    '16 specialized academic departments',
    '415+ published research papers in global journals',
    '2nd position in average publications per author',
    'Average placement package: ₹13-18 LPA',
    'Top recruiters: Amazon, Adobe, Accenture, Microsoft'
  ];

  const placementPartners = [
    'Amazon', 'Adobe', 'Accenture', 'Microsoft', 'Google',
    'Bosch', 'Capgemini', 'Cognizant', 'EY', 'Godrej',
    'IBM', 'Infosys', 'KPMG', 'Paytm', 'PWC', 'Dell'
  ];

  const faqs = [
    {
      question: 'What is IIT Ropar famous for?',
      answer: 'IIT Ropar is distinguished for research-oriented education and quality publications. The institute emphasizes extensive research over quantity, securing second position in average publications per author nationally.'
    },
    {
      question: 'What rank is required for IIT Ropar?',
      answer: 'Admission requires qualifying JEE Advanced for B.Tech, valid GATE scores for M.Tech programs, and qualifying JAM/NET/GATE for PhD programs. Specific cutoffs vary by category and department.'
    },
    {
      question: 'What is the average salary in IIT Ropar?',
      answer: 'The average placement package ranges from ₹13-18 LPA with consistent 7% year-on-year growth. Top companies offer competitive packages to meritorious graduates.'
    },
    {
      question: 'How to contact IIT Ropar Online?',
      answer: 'Visit the official IIT Ropar website or admission portal for program queries, application procedures, and enrollment information. Contact details are available on the institute website.'
    },
    {
      question: 'Does IIT Ropar offer online programs?',
      answer: 'Yes, IIT Ropar provides executive online programs and professional certifications for working professionals alongside regular campus-based undergraduate, postgraduate, and doctoral programs.'
    },
    {
      question: 'What facilities are available at IIT Ropar campus?',
      answer: 'The campus features comprehensive facilities including modern library, hostel accommodation, sports infrastructure, institute bus service, medical center, guest house, and daycare amenities for holistic student development.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Ropar Online Programs | M.Tech, PhD, Executive Programs</title>
        <meta name="description" content="IIT Ropar - Ranked 22nd NIRF 2023 Engineering. M.Tech, PhD programs. Research-focused institute with excellent placements." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Ropar.png" 
                alt="IIT Ropar Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Rupnagar, Punjab</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.6/5</span>
                    <span className={styles.reviews}>(352 Reviews)</span>
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
                  <span className={styles.infoValue}>Rank 22 (Engineering 2023)</span>
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
              <h2>About IIT Ropar</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIT Ropar was established in 2008 by the Ministry of Human Resource Development under the Institutes of Technology Amendment Act 2011. Located in Rupnagar district of Punjab, the institute began operations at IIT Delhi before moving to its independent campus in 2009. The institutional motto, "Deploy our intellect on the right path," derives from the Gayatri Mantra, reflecting commitment to ethical technological advancement. The institute operates under active consultation with IIT Calcutta, ensuring continuous academic excellence and institutional development.
                </p>
                <p>
                  The institute offers comprehensive undergraduate, postgraduate, and doctoral programs across 16 specialized departments including engineering, sciences, and humanities. Academic programs emphasize hands-on engineering skills, research methodology, and industry-relevant competencies. IIT Ropar focuses on quality research over quantity, securing 2nd position nationally in average publications per author with over 415 research papers in prestigious international journals. The curriculum integrates cutting-edge areas like artificial intelligence, renewable energy, nanotechnology, and advanced materials science preparing graduates for leadership roles.
                </p>
                <p>
                  IIT Ropar ranks 22nd in NIRF 2023 Engineering Category, demonstrating sustained academic quality and research impact. The institute maintains strong industry partnerships with placement cell organizing regular recruitment drives, skill development workshops, and industry interactions. Average placement packages range from ₹13-18 LPA with consistent 7% year-on-year growth, attracting top recruiters including Amazon, Adobe, Microsoft, Accenture, Google, and leading consulting firms. The campus provides modern library resources, residential facilities, sports infrastructure, medical center, and research laboratories supporting holistic student development and innovation.
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
                  <div className={styles.statNumber}>NIRF 22</div>
                  <div className={styles.statLabel}>Engineering Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>₹18 LPA</div>
                  <div className={styles.statLabel}>Average Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>2008</div>
                  <div className={styles.statLabel}>Established</div>
                </div>
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

              <div className={styles.courseNote}>
                <strong>Note:</strong> Fee structure may vary for sponsored candidates. Scholarships and fee waivers available for economically weaker sections and reserved categories.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                IIT Ropar admits candidates through national entrance exams ensuring merit-based selection.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Qualification</h3>
                    <p>Appear for relevant national-level entrance examinations such as GATE for M.Tech programs or qualifying examinations like JAM/NET for PhD admissions. Candidates must secure qualifying marks as per their respective category requirements to be eligible for the next stage of the admission process.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Submit your application through the official IIT Ropar admission portal with accurate personal details, academic credentials, and entrance examination scores. Upload all required documents including mark sheets, degree certificates, category certificates if applicable, and valid identification proofs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Merit Assessment</h3>
                    <p>Applications are evaluated based on entrance examination performance, academic records, and research aptitude for PhD candidates. Shortlisted candidates may be called for interviews or written tests depending on the program requirements and departmental selection criteria.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Final Enrollment</h3>
                    <p>Complete document verification by submitting original certificates for authentication. Pay the requisite program fees within the stipulated deadline and complete medical examination formalities to finalize your enrollment at IIT Ropar.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> Bachelor's degree in relevant engineering/technology with valid GATE score. Minimum 60% aggregate or equivalent CGPA required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree in relevant field with NET/GATE/JAM qualification. Strong research inclination and academic background essential</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive Programs:</strong> Bachelor's degree with relevant work experience in technical or managerial capacity. Program-specific criteria apply</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions based on GATE scores for M.Tech and PhD programs</li>
                  <li>Executive programs have separate application process and deadlines</li>
                  <li>Scholarships available for SC/ST/PwD and economically weaker sections</li>
                  <li>Documents required: 10th & 12th certificates, graduation degree, GATE scorecard, ID proof, photographs</li>
                  <li>Online proctored examinations and virtual classroom sessions for distance programs</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionDesc}>
                IIT Ropar's placement cell maintains active engagement throughout programs, organizing industry interactions and recruitment drives attracting leading technology companies and multinational corporations.
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
                  <h3>₹13-18L</h3>
                  <p>Average Package</p>
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

export default IITRopar;

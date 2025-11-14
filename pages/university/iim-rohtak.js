import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMRohtak = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'HR Management', fee: 70000, duration: '5 Months + 1 Month (Tableau)', specializations: 1 },
    { name: 'Operations Management', fee: 70000, duration: '5 Months', specializations: 2 },
    { name: 'Data Analytics', fee: 70000, duration: '5 Months', specializations: 1 },
    { name: 'Executive Program in Marketing', fee: 60000, duration: '5 Months', specializations: 1 },
    { name: 'PGP in Management', fee: 695000, duration: '12 Months', specializations: 1 },
    { name: 'Online MBA', fee: 695000, duration: '1 Year', specializations: 1 },
    { name: 'Executive MBA', fee: 695000, duration: '1-2 Years', specializations: 1 },
    { name: 'Executive PG Diploma in Sports Management', fee: 786000, duration: '16 Months', specializations: 1 },
    { name: 'PhD', fee: 1000000, duration: '3 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 12th in NIRF 2024 Management Category with score of 66.49',
    'Established in 2010 by Ministry of HRD, Government of India',
    'WES approved with AACSB and AMBA accreditation for global recognition',
    'Awarded "Most Innovative Institute" by International Education Pride Awards 2021',
    '"Most Promising Higher Education Institute – North India" at Global India Education Forum',
    '"Best B School for Financial Studies in India" by Knowledge Review Magazine 2018',
    'International tie-ups with Singapore Management Institute, California State University, Kelley School of Business',
    '100% placement assistance to students with high-ending packages in the industry'
  ];

  const approvals = ['NIRF Rank 12', 'WES', 'AACSB', 'AMBA'];
  const nirfRank = 'Rank 12';
  const accreditation = 'WES, AACSB, AMBA';

  const placementPartners = [
    'ICICI Bank', 'Accenture', 'Axis Bank', 'Capgemini', 'Cognizant', 'Deloitte',
    'HDFC Bank', 'Reliance', 'Samsung', 'Genpact'
  ];

  const faqs = [
    {
      question: 'Is an online course from IIM Rohtak considered by recruiters?',
      answer: 'Yes, IIM Rohtak (ranked 12th NIRF 2024) with WES, AACSB, and AMBA accreditation commands exceptional recognition among global recruiters and employers.'
    },
    {
      question: 'Name some of the short-term certification courses offered by IIM Rohtak?',
      answer: 'IIM Rohtak offers 5-6 month certifications in Strategic HR Management, Advanced Operations Management, Business Data Analytics, and Contemporary Marketing Strategies.'
    },
    {
      question: 'Is an upskilling online certification course from IIM Rohtak credible at the global level?',
      answer: 'Yes, IIM Rohtak holds WES approval, AACSB membership, AMBA accreditation, and collaborations with Singapore, California, Indiana, and Ulster universities globally.'
    },
    {
      question: 'Do students enrolled in online programs get to attend classes at the campus of IIM Rohtak?',
      answer: 'Some programs offer optional campus immersion components for faculty interaction, workshops, case studies, and networking while maintaining online flexibility.'
    },
    {
      question: 'Name some of the top recruiters that hire IIM Rohtak passed outs?',
      answer: 'IIM Rohtak\'s 300+ hiring partners include ICICI, HDFC, Axis Bank, Accenture, Deloitte, Cognizant, Capgemini, Genpact, Reliance, Samsung, with packages up to ₹36L.'
    },
    {
      question: 'What are some best online executive programs in India?',
      answer: 'IIM Rohtak offers PGPM, Online MBA, Executive MBA, and certifications in HR, Operations, Data Analytics, and Marketing for working professionals.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Rohtak - Indian Institute of Management Rohtak Online | EduConnect</title>
        <meta name="description" content="Explore IIM Rohtak's online management programs. Established in 2010, ranked 12th in NIRF 2024. WES approved with AACSB and AMBA accreditation." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Rohtak.png" 
                alt="IIM Rohtak Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => { e.target.src = '/images/universities/default-university.png'; }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Rohtak, Haryana</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(888 Reviews)</span>
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
              <h2>About IIM Rohtak</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Management Rohtak stands as a distinguished pillar within India's prestigious business education 
                  landscape, established in 2010 through visionary initiative by the Ministry of Human Resource Development, Government of 
                  India. Conceived to deliver world-class management education that transforms ambitious professionals into strategic leaders, 
                  IIM Rohtak has cultivated an exceptional reputation for academic excellence, innovative pedagogy, and impactful research. 
                  The institute's ambitious vision centers on emerging as a globally recognized leader in management education, setting new 
                  benchmarks for quality, innovation, and societal impact across the business education ecosystem.
                </p>
                <p>
                  Distinguished by its remarkable NIRF 2024 ranking of 12th among India's management institutions, IIM Rohtak exemplifies 
                  unwavering commitment to educational excellence that shapes tomorrow's business leaders. The institute's comprehensive 
                  approach emphasizes cultivating leadership acumen, strategic thinking capabilities, and ethical decision-making competencies 
                  through meticulously designed learning programs. This dedication to transformative education, delivered by accomplished 
                  faculty comprising renowned scholars and seasoned industry practitioners, has positioned IIM Rohtak among India's elite 
                  top-tier management institutes, consistently producing graduates who drive meaningful organizational and societal transformation.
                </p>
                <p>
                  Validated through prestigious international accreditation by the Association of MBAs (AMBA), along with WES approval and 
                  AACSB membership, IIM Rohtak maintains distinguished global recognition that significantly enhances the professional 
                  credibility of its diverse program portfolio. The institute offers comprehensive educational pathways spanning undergraduate, 
                  postgraduate, executive, specialized certifications, and doctoral programs, all designed to address evolving management 
                  education needs across various career stages and professional contexts, ensuring accessibility for traditional students 
                  and working professionals alike.
                </p>
                <p>
                  IIM Rohtak's innovative Management Development Programs (MDPs) and short-term specialized courses represent strategic 
                  response to contemporary professional development requirements. Thoughtfully delivered through flexible online learning 
                  modalities, these programs enable working professionals to pursue targeted skill enhancement without interrupting their 
                  career progression. Each curriculum component is meticulously crafted to sharpen domain expertise, broaden strategic 
                  perspectives, and enhance practical competencies across specialized management disciplines including finance, marketing, 
                  operations, human resources, data analytics, and digital transformation—preparing professionals for leadership excellence 
                  in today's rapidly evolving global business environment.
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
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Average Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3X</div>
                  <div className={styles.statLabel}>Interview Opportunities</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>9</div>
                  <div className={styles.statLabel}>Program Options</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of online management programs designed for ambitious professionals
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
                        <td>{course.specializations} Options</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> EMI options available through trusted financial partners. 
                Education loans with competitive interest rates and flexible repayment terms.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at IIM Rohtak
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit University Website</h3>
                    <p>Visit the University website and select the program from a dropped-down list of programs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Apply Now</h3>
                    <p>Click on "Apply Now" and then fill in the required details in the registration form on the redirected webpage.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Personalized Credentials</h3>
                    <p>After successful registration, you will have your personalized credentials to log in to the admission portal.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application</h3>
                    <p>Fill in the declaration page, proceed to Payment section, then complete Applicant Details and Address Details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Review and Submit</h3>
                    <p>Review your application and submit it for final enrollment. Some programs may require entrance exams and personal interviews.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/PGP Programs:</strong> Bachelor's degree with minimum 50% marks (45% for SC/ST). CAT score with competitive percentile required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive MBA:</strong> Graduation with minimum 5 years professional experience in leadership or technical roles</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree with minimum 55% marks (50% for reserved categories). Research aptitude and proposal required</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Bachelor's degree from recognized university with minimum qualifying percentage</li>
                  <li>Work experience required for executive programs</li>
                  <li>Valid entrance exam scores (CAT/MAT/GMAT/GRE for specific programs)</li>
                  <li>Valid ABC ID and DEB ID as per latest UGC guidelines</li>
                  <li>English language proficiency demonstrated</li>
                  <li>All required documents must be accurate and properly attested</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access extensive career opportunities through our robust placement support
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
                  <p>Career Support</p>
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
                Find answers to common queries about IIM Rohtak programs
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

export default IIMRohtak;

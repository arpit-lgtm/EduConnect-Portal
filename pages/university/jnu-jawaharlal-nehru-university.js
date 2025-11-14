import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function JNUPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'NIRF', 'NAAC A++', 'AIU', 'Central University'];
  const accreditation = 'NAAC A++ (CGPA 3.91)';
  const nirfRank = 'Rank #2 (University)';

  const keyHighlights = [
    'NAAC A++ accredited with 3.91 CGPA on a scale of 4',
    'NIRF Rank #2 in University category',
    'UGC Centre for Excellence status',
    '10 schools across arts, sciences and engineering',
    'Student-teacher ratio of 10:1',
    '1000-acre campus in New Delhi',
    'Strong interdisciplinary research programs',
    'Global collaborations with leading universities'
  ];

  const coursesData = [
    { name: 'Doctor of Philosophy (Ph.D.)', specializations: '50', duration: '3-5 Years', fee: 400000 }
  ];

  const placementPartners = [
    'Google', 'Microsoft', 'Amazon', 'Accenture', 'Airtel', 
    'L&T', 'Siemens', 'JP Morgan', 'Government Organizations', 
    'Research Institutions', 'Educational Institutions', 'Policy Think Tanks'
  ];

  const faqs = [
    {
      question: 'What are the programs offered at Jawaharlal Nehru University?',
      answer: 'JNU offers interdisciplinary courses at undergraduate, postgraduate, and doctoral levels across diverse academic disciplines including Social Sciences, International Studies, Economics, Political Science, Sociology, History, Geography, and more through its 10 different schools and 4 Special Centres.'
    },
    {
      question: 'Does JNU offer Online Courses?',
      answer: 'JNU primarily focuses on on-campus programs. However, the university has adapted to modern learning with distance and online components for select doctoral programs. Students must check the official website for current online offerings and eligibility criteria.'
    },
    {
      question: 'What are the ranking and accreditation of Jawaharlal Nehru University?',
      answer: 'JNU is ranked #2 by NIRF in the university category and #1 by IIRF. The university has NAAC A++ accreditation with 3.91 points on a scale of 4. UGC has awarded JNU with Centre for Excellence status, highlighting its commitment to academic excellence.'
    },
    {
      question: 'What are the different schools in Jawaharlal Nehru University?',
      answer: 'JNU has 10 different schools including School of Social Sciences (SSS), School of International Studies (SIS), School of Language Literature & Culture Studies, School of Life Sciences, School of Physical Sciences, School of Environmental Sciences, School of Arts & Aesthetics, School of Computational & Integrative Sciences, School of Engineering, and School of Biotechnology.'
    },
    {
      question: 'How to contact JNU for admission inquiry?',
      answer: 'For admission inquiries, students can visit the official JNU website or contact the admission office at the university campus in New Delhi. The university conducts admissions through CUET (Common University Entrance Test) administered by the National Testing Agency (NTA).'
    },
    {
      question: 'What is the admission process at JNU?',
      answer: 'Admission to JNU is based on CUET performance. Students need to register on the NTA website, fill the application form, appear for CUET exam, and based on performance and cutoffs, appear for interview/viva voice at the university campus. Selected candidates receive admission offers.'
    }
  ];

  return (
    <>
      <Head>
        <title>JNU Jawaharlal Nehru University - Central University | MBA NINJA</title>
        <meta name="description" content="JNU Delhi - India's #2 ranked university. NIRF Rank 2, NAAC A++ (3.91 CGPA). Established 1969. UGC Centre of Excellence. PhD programs across 10 schools." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Jawaharlal Nehru University Delhi.png" 
                alt="JNU Jawaharlal Nehru University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 New Delhi, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.5/5</span>
                    <span className={styles.reviews}>(287 Reviews)</span>
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
              <h2>About Jawaharlal Nehru University (JNU)</h2>
              <div className={styles.aboutContent}>
                <p>
                  Jawaharlal Nehru University (JNU) is one of the most prominent and leading public universities in India. Established in 1969 by an act of Parliament, JNU is globally recognized for its excellence in education and research, robust academic programs, and engaging intellectual community. The university stands out for its exceptional research programs and emphasis on integrating various academic disciplines.
                </p>
                <p>
                  JNU maintains a consistent position among India's premier universities and enjoys global recognition for its contributions to research and higher education. The National Assessment and Accreditation Council (NAAC) has accredited JNU with A++ grade with 3.91 points on a scale of 4. The National Institutional Ranking Framework (NIRF) has ranked JNU #2 in the university category.
                </p>
                <p>
                  The academic structure of JNU has been divided into 10 different schools that include 4 Special Centres to provide quality education and social awareness. Each school focuses on a specific area of study, covering Social Sciences, International Studies, Language & Literature, Life Sciences, Physical Sciences, Environmental Sciences, Arts & Aesthetics, and more.
                </p>
                <p>
                  Faculty members at Jawaharlal Nehru University are esteemed scholars and researchers who make substantial contributions to their respective fields. The teacher-student ratio at JNU is 1:10, which offers remarkable opportunities for interaction and knowledge exchange. JNU is also known for being a hub for academic and political discussions with active student engagement.
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
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Avg. Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>10:1</div>
                  <div className={styles.statLabel}>Student-Teacher Ratio</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>1000</div>
                  <div className={styles.statLabel}>Acre Campus</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                JNU offers world-class doctoral and research programs across multiple disciplines
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
                        <td>{course.specializations}+ Options</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> EMI options available. Flexible payment plans to support your education journey.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these steps for admission to JNU through CUET
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit NTA Website</h3>
                    <p>Visit the official website of the National Testing Agency (NTA) for CUET registration.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Register for CUET</h3>
                    <p>Enter mobile number and email ID to register. A unique application number and password will be generated.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Sign in with credentials, fill in all required information, and attach necessary documents.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Review form, submit, and proceed with application fee payment through online payment gateway.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Appear for CUET</h3>
                    <p>Take the CUET exam at designated centers. Based on performance and JNU cutoffs, you'll be called for interview.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Ph.D. Programs:</strong> Master's degree from UGC recognized university with minimum 55% marks (50% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Postgraduate Programs:</strong> Bachelor's degree with minimum required percentage as per program requirements</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Undergraduate Programs:</strong> 10+2 from recognized board with required percentage for specific programs</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admission based on CUET performance and interview/viva voice</li>
                  <li>Apply on both NTA and JNU official websites</li>
                  <li>Create ABC ID as per latest UGC guidelines</li>
                  <li>Admission twice a year in July/August and January/February sessions</li>
                  <li>Check official website for program-specific eligibility</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                JNU Placement Cell ensures comprehensive career support for students
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Support</p>
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
                Find answers to common queries about JNU programs
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
                <h3>Still have questions?</h3>
                <p>Our expert counselors are here to help you make the right decision</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Talk to Our Experts</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

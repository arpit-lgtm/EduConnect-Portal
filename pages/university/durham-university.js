import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const DurhamUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online DBA', fee: 3900000, duration: '3 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Established in 1832, one of England\'s oldest and most prestigious universities',
    'Ranked #78 globally in QS World University Rankings 2024',
    'Positioned at #27 in QS World University Rankings 2024: Europe',
    'Triple-crown accreditation: AACSB, AMBA, and EFMD/EQUIS certified',
    'Member institution of the prestigious Russell Group for research excellence',
    '300+ degree programs spanning undergraduate and postgraduate levels',
    '17 unique collegiate communities fostering rich academic traditions',
    'International student body representing 120+ nations worldwide',
    'Over 4,300 expert faculty members delivering world-class instruction',
    '19 subjects ranked within global top 100 (QS Rankings by Subject 2024)'
  ];

  const approvals = ['AACSB', 'AMBA', 'EFMD/EQUIS', 'Russell Group'];
  const nirfRank = 'QS #78 (World)';
  const accreditation = 'AACSB, AMBA, EQUIS';

  const placementPartners = [
    'Google', 'Capgemini', 'Deloitte', 'HCL', 
    'Infosys', 'Microsoft', 'Tech Mahindra', 'Wipro', 
    'Dell', 'Apple', 'Amazon', 'Accenture'
  ];

  const faqs = [
    {
      question: 'Does Durham University hold prestigious recognition globally?',
      answer: 'Yes, Durham University (established 1832) holds triple-crown accreditation (AACSB, AMBA, EQUIS) and ranks #78 globally in QS 2024.'
    },
    {
      question: 'What is Durham University\'s current global ranking position?',
      answer: 'Durham ranks #78 globally (QS 2024), #27 in Europe, with 19 subjects in top 100 disciplines.'
    },
    {
      question: 'Are online degree programs available at Durham University?',
      answer: 'Yes, Durham offers comprehensive online programs for working professionals with the same academic rigor as campus-based offerings.'
    },
    {
      question: 'Is there an application fee required for Durham University admissions?',
      answer: 'Application fees vary by program. Verify specific details on the official website before submitting.'
    },
    {
      question: 'What scholarship opportunities and financial assistance does Durham offer?',
      answer: 'Durham provides Durham Grant Scheme, merit scholarships, hardship funds, government funding, and education loans through partner institutions.'
    },
    {
      question: 'Does Durham University maintain international accreditation standards?',
      answer: 'Yes, Durham holds triple-crown accreditation from AACSB, AMBA, and EFMD/EQUIS, placing it among elite business schools.'
    }
  ];

  return (
    <>
      <Head>
        <title>Durham University Online - DBA Programs & Global Education | EduConnect</title>
        <meta name="description" content="Explore Durham University's online programs. Triple-crown accredited (AACSB, AMBA, EQUIS), ranked #78 globally. Premium business education from England." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Durham University.png" 
                alt="Durham University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Durham, England (UK)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.4/5</span>
                    <span className={styles.reviews}>(195 Reviews)</span>
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
                  <span className={styles.infoLabel}>QS Ranking:</span>
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
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Durham University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Durham University has stood as a beacon of academic excellence since its foundation in 1832, 
                  earning global recognition for conducting cutting-edge research that creates meaningful impact 
                  across local and international communities. Located in the historic city of Durham, England, 
                  the institution has cultivated a remarkable heritage of empowering students and advancing knowledge 
                  for nearly two centuries.
                </p>
                <p>
                  With an impressive portfolio exceeding 300 undergraduate and postgraduate degree programs across 
                  diverse disciplines, Durham provides students exceptional breadth of academic choices to align 
                  their education with career aspirations. The university's commitment to educational excellence 
                  manifests in its #78 global ranking in QS World University Rankings 2024 and #27 position within 
                  Europe, establishing it as a premier destination for ambitious learners worldwide.
                </p>
                <p>
                  Durham's distinctive collegiate system comprises 17 individual communities, each fostering unique 
                  traditions while providing students with intimate academic environments within the broader university 
                  framework. This structure enables rich cultural exchange among an international student population 
                  representing over 120 nations, supported by more than 4,300 accomplished faculty members who deliver 
                  personalized instruction and mentorship.
                </p>
                <p>
                  The university holds triple-crown accreditation from AACSB, AMBA, and EFMD/EQUIS—a distinction 
                  achieved by less than 1% of business schools globally. As a proud member of the Russell Group, 
                  Durham demonstrates sustained commitment to research excellence. Through innovative online learning 
                  platforms, the university now extends its prestigious programs to working professionals internationally, 
                  maintaining rigorous academic standards while offering unprecedented flexibility for career advancement.
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
                  <div className={styles.statNumber}>193 Years</div>
                  <div className={styles.statLabel}>Academic Heritage</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>#78 Global</div>
                  <div className={styles.statLabel}>QS World Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Triple Crown</div>
                  <div className={styles.statLabel}>Accreditation</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>120+ Nations</div>
                  <div className={styles.statLabel}>Student Diversity</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Advanced doctoral programs designed for accomplished professionals and researchers
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
                        <td>{course.specializations} Option</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Flexible payment plans available. Multiple scholarship opportunities offered. Education loans facilitated through partner institutions.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Embark on your academic journey at Durham through our comprehensive admission pathway
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Course Selection & Eligibility</h3>
                    <p>Review available programs on Durham's official portal, carefully examine prerequisites for your chosen specialization, and confirm your qualifications meet admission standards.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Account Creation</h3>
                    <p>Establish your applicant profile on the university's admission platform using valid contact credentials. Verify your account through the two-step authentication process.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Complete the comprehensive application form including academic history, professional credentials, personal information, and program preferences. Upload all supporting documentation in required formats including transcripts, English proficiency scores, passport copies, and previous visa records (if applicable).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Submit application and initial program fees through the secure payment gateway. Multiple payment methods accepted including credit cards, bank transfers, and installment arrangements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Confirmation</h3>
                    <p>Upon successful review, receive your official acceptance letter with enrollment details. Access orientation resources and learning platform credentials to commence your Durham experience.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Master's/MBA Programs:</strong> Bachelor's degree with good academic standing. IELTS 6.5-7.0 or equivalent TOEFL score. Work experience preferred for MBA</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD/Research Programs:</strong> Master's degree in relevant field with strong academic record. Research proposal and references required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>International Students:</strong> Valid English proficiency tests (IELTS/TOEFL/PTE). Authentic certified documents. Early applications receive priority scholarship consideration</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>Submit applications well before deadlines to ensure thorough processing</li>
                  <li>International applicants must provide valid English proficiency test results</li>
                  <li>Ensure all documents are authentic, accurate, and properly certified</li>
                  <li>Early applications receive priority consideration for scholarship awards</li>
                  <li>Keep digital and physical copies of all submission materials</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                Access exceptional career opportunities through Durham's extensive corporate partnerships
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
                  <h3>9-12 Months</h3>
                  <p>Work Experience Option</p>
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
                Common inquiries about Durham University programs addressed
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

export default DurhamUniversity;

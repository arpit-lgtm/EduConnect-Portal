import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const HarvardUniversityOnline = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Doctor of Philosophy', fee: 708000, duration: '3 Years', specializations: 1 },
    { name: 'Executive MBA', fee: 2000000, duration: '15-24 Months', specializations: 1 },
  ];

  const keyHighlights = [
    'Established in 1636 in Cambridge, Massachusetts - one of the oldest universities in the world',
    'Member of the prestigious Ivy League Universities with globally recognized excellence',
    'Ranked 4th globally in QS World University Rankings 2025',
    'Student-teacher ratio of 1:7 ensuring personalized attention and guidance',
    '12 schools and institutes offering comprehensive education across all disciplines',
    '19 Harvard courses ranked 1st in the world by U.S. News in various disciplines',
    '29 courses ranked among the top 10 globally demonstrating academic superiority',
    'Over 70 extensive libraries housing the largest academic collection in the world',
    'Accredited by the New England Commission of Higher Education (NECHE)',
    'Classified as R1 university with "very high" research activity and innovation',
    'Historic architecture and vibrant intellectual environment fostering leadership',
    'Strong focus on interdisciplinary learning across humanities, sciences, and engineering'
  ];

  const approvals = ['QS World University Rankings'];
  const nirfRank = 'Ranked 4th in QS World Rankings';
  const accreditation = 'NECHE Accredited';

  const placementPartners = [
    'Google', 'Accenture', 'Amazon', 'Deloitte',
    'Facebook', 'KPMG', 'McKinsey and Company', 'Microsoft',
    'PWC', 'TCS', 'Goldman Sachs', 'J.P. Morgan',
    'Boston Consulting Group', 'Bain & Company', 'Morgan Stanley', 'Apple',
    'IBM', 'Intel', 'Cisco', 'Oracle'
  ];

  const faqs = [
    {
      question: 'What are the programs offered at Harvard University?',
      answer: 'Harvard University offers a wide range of undergraduate, postgraduate, and doctoral programs across 12 schools and institutes. Programs span humanities, social sciences, engineering, sciences, business, law, medicine, and public policy. Online programs currently include Executive MBA and Doctor of Philosophy (PhD) programs with world-class faculty and comprehensive curriculum.'
    },
    {
      question: 'What is the ranking of Harvard University?',
      answer: 'Harvard University is ranked 4th globally in the QS World University Rankings 2025. The university consistently ranks among the top 5 universities worldwide. Additionally, 19 Harvard programs rank 1st globally in their respective fields, including Business & Economics, Clinical Medicine, and Cell Biology. 29 courses are ranked in the top 10 globally by U.S. News.'
    },
    {
      question: 'How many schools does Harvard University have?',
      answer: 'Harvard University has 12 schools and institutes for different departments offering comprehensive education. These include Harvard College, Harvard Law School, Harvard Business School, Harvard Kennedy School, Harvard Medical School, Harvard School of Engineering and Applied Sciences, and several other prestigious schools and institutes.'
    },
    {
      question: 'What are the documents required for admission to Harvard University?',
      answer: 'Documents required include: completed application form (Common Application or Coalition Application), personal essays, academic transcripts from all previous institutions, standardized test scores (SAT/ACT for undergraduate, GRE/GMAT for postgraduate), letters of recommendation from academic or professional references, statement of purpose, detailed resume, language proficiency test scores (TOEFL/IELTS for international students), and application fee payment.'
    }
  ];

  return (
    <>
      <Head>
        <title>Harvard University Online - Executive MBA, PhD Programs | MBA NINJA</title>
        <meta name="description" content="Harvard University Online Programs - Ivy League Excellence. QS Rank 4th globally. Executive MBA & PhD programs. NECHE accredited. Est. 1636." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Harvard University.png" 
                alt="Harvard University Logo" 
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
                  <span className={styles.infoValue}>📍 Cambridge, Massachusetts, USA</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.5/5</span>
                    <span className={styles.reviews}>(263 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Global Ranking:</span>
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
                {tab === 'courses' ? 'Programs & Fees' : tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Harvard University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Harvard University is a globally recognized university highly acclaimed for high-quality education in a range of 
                  academic fields. It was established in 1636 in Cambridge, Massachusetts, making it one of the oldest universities 
                  in the world. Harvard University is a proud member of the highly acclaimed Ivy League Universities, representing 
                  the pinnacle of academic excellence and research innovation.
                </p>
                <p>
                  Being distinguished for academic excellence, Harvard University offers undergraduate, postgraduate, and doctoral 
                  courses in a wide range of academic disciplines such as humanities, social sciences, engineering, science, business, 
                  law, medicine, and public policy. Harvard University supports interdisciplinary education where students can integrate 
                  courses from different disciplines, fostering a holistic approach to learning and research.
                </p>
                <p>
                  Harvard University continues to rank among some of the best universities in the world. Harvard University ranks 4th 
                  globally in QS World University Rankings, demonstrating its consistent commitment to excellence. The university has 
                  been remarkably consistent in ranking among the top 5 universities in the world across multiple ranking systems. 
                  Some of the courses at Harvard University such as Business and Economics, Clinical Medicine, Cell Biology, and others 
                  globally rank 1st, showcasing subject-specific excellence.
                </p>
                <p>
                  There is a total of 29 courses at Harvard University that rank among the top 10 courses in the world according to 
                  U.S. News rankings. Courses at Harvard University are accredited by the New England Commission of Higher Education 
                  (NECHE), ensuring the highest standards of quality and academic rigor.
                </p>
                <p>
                  Harvard University offers a high-quality learning experience to its students with the support of distinguished faculty 
                  who are leaders in their respective fields. Harvard University has 12 schools and institutes for different departments, 
                  offering comprehensive education and research opportunities. Some of the prominent schools of Harvard University are 
                  Harvard College, Harvard Law School, Harvard Business School, and the Harvard Kennedy School.
                </p>
                <p>
                  Harvard University boasts an extensive library system with over 70 libraries which house the largest academic collection 
                  in the world, providing unparalleled resources for research and learning. The university fosters an environment of 
                  intellectual growth and leadership with historic architecture and beautiful grounds creating an inspiring atmosphere 
                  for academic pursuits. It is also a center of a vibrant intellectual and cultural environment where students from 
                  different ethnicities learn and live together, promoting diversity and global perspectives.
                </p>
                <p>
                  Harvard University is committed to promoting research and innovation with its numerous research institutes and initiatives. 
                  The university is classified as an R1 institution with "very high" research activity, demonstrating its leadership in 
                  advancing knowledge across all fields. It offers cutting-edge facilities for a vibrant student life with an emphasis on 
                  excellence in teaching, learning, and research.
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
                    <div className={styles.statNumber}>389</div>
                    <div className={styles.statLabel}>Years of Legacy (1636)</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>4th</div>
                    <div className={styles.statLabel}>QS Global Ranking</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>12</div>
                    <div className={styles.statLabel}>Schools & Institutes</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>70+</div>
                    <div className={styles.statLabel}>Libraries Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Harvard University offers world-class online programs designed for working professionals and researchers.
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
                        <td>{course.specializations} {course.specializations === 1 ? 'Option' : 'Options'}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Ivy League Excellence:</strong> All Harvard programs offer global recognition with degrees equivalent to on-campus 
                education. Monthly Payment Plan (MPP) available with $35 fee per semester. Need-based scholarships available for over 55% of students. 
                Financial aid and loan options through Harvard Financial Aid Office.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p>Admission to Harvard University is highly competitive and requires a comprehensive application process.</p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Complete Application Form</h3>
                    <p>Submit the Common Application or Coalition Application along with Harvard's supplementary questions. Provide complete personal information, academic history, and extracurricular involvement.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Required Documents</h3>
                    <p>Attach personal essays, academic transcripts from all previous institutions, standardized test scores (SAT/ACT for undergraduate, GRE/GMAT for postgraduate), and language proficiency scores if applicable.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Letters of Recommendation</h3>
                    <p>Provide letters of recommendation from academic or professional references who can speak to your capabilities, character, and potential for success at Harvard.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Statement of Purpose & Resume</h3>
                    <p>Submit a compelling Statement of Purpose outlining your academic goals and motivation. Include a detailed resume highlighting your academic achievements, work experience, and extracurricular activities.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Pay the application fee to complete your submission. Fee waivers may be available for eligible candidates.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Application Review & Interview</h3>
                    <p>The admissions committee thoroughly reviews all applications. Shortlisted candidates will be invited for an interview to assess fit and potential.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>7</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Decision</h3>
                    <p>Final admission decisions are based on holistic review of academic qualifications, essays, interview performance, recommendations, and overall potential for contribution to Harvard community.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive MBA:</strong> Bachelor's degree with significant work experience in leadership roles</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Doctor of Philosophy:</strong> Master's degree in relevant field with strong research background</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Language Proficiency:</strong> TOEFL/IELTS scores required for international students</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Standardized Tests:</strong> GRE/GMAT scores as per program requirements</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Strong Academic Record:</strong> Excellent academic performance with competitive GPA</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                Harvard University's Office of Career Services provides comprehensive support connecting students with global opportunities.
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
                  <h3>Global</h3>
                  <p>Career Network</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Comprehensive career counseling through Office of Career Services (OCS)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Career fairs, workshops, and networking events with industry leaders</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>On-campus recruiting by leading global companies across all sectors</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Extensive job listings and internship opportunities worldwide</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Strong alumni network providing mentorship and career guidance</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Global reputation ensuring opportunities in finance, consulting, technology, healthcare, law, and academia</span>
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

export default HarvardUniversityOnline;
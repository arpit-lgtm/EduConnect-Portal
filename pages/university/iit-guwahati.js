import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITGuwahati = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'B.Sc (Honours) in Data Science & AI', fee: 349000, duration: '3 Years', specializations: 1 },
    { name: 'M.Tech Program', fee: 220800, duration: '2 Years', specializations: 11 },
    { name: 'PhD Program', fee: 90750, duration: '3 Years', specializations: 11 }
  ];

  const keyHighlights = [
    'Ranked 7th in NIRF 2024 Engineering Category',
    'QS World Rank 364, 32nd for Research Citations per Faculty',
    '6th IIT established in 1994, programs started 1995',
    '285-hectare campus between Brahmaputra River and hills',
    'Top 100 world universities under 50 years old',
    '2nd in Swachhata Ranking by Government of India',
    '6th in SDG 7 ranking (Affordable & Clean Energy)',
    '5 interdisciplinary centers and 11 departments',
    'Progressive degree system: Certificate→Diploma→BSc→Honours',
    'World-class research labs and picturesque campus views'
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Microsoft', 'Goldman Sachs', 'JP Morgan',
    'McKinsey', 'BCG', 'Deloitte', 'Accenture', 'Infosys',
    'TCS', 'Wipro', 'IBM', 'Oracle', 'SAP',
    'Intel', 'Qualcomm', 'Samsung', 'Adobe', 'Flipkart', 'Uber'
  ];

  const faqs = [
    {
      question: 'What makes IIT Guwahati unique among IITs?',
      answer: 'Scenic 285-hectare campus between Brahmaputra River and hills, top 100 universities under 50 years, 32nd globally for research citations, 2nd in Swachhata Ranking.'
    },
    {
      question: 'What is the B.Sc Honours in Data Science & AI program structure?',
      answer: 'Four-year program with progressive credentials: Year 1-Certificate, Year 2-Diploma, Year 3-B.Sc, Year 4-B.Sc Honours in Data Science & AI.'
    },
    {
      question: 'What research facilities are available at IIT Guwahati?',
      answer: '11 departments with advanced labs, 5 interdisciplinary centers (Nanotech, Energy, Environment), Central Instrument Facility, and high-performance computing clusters.'
    },
    {
      question: 'How does IIT Guwahati support entrepreneurship?',
      answer: 'Technology Incubation Centre provides workspace, mentorship, funding access, prototyping facilities, and connections to VCs, angel investors, and Startup India.'
    },
    {
      question: 'What is campus life like at IIT Guwahati?',
      answer: 'Vibrant campus with Techniche festival, Alcheringa cultural fest, 60+ clubs, sports facilities, hostels, and diverse student community near Brahmaputra River.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Guwahati Online Programs | B.Sc AI, M.Tech, PhD</title>
        <meta name="description" content="Explore online programs from IIT Guwahati - Ranked 7th NIRF 2024 Engineering. B.Sc Data Science & AI, M.Tech, PhD programs in scenic campus." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Guwahati.png" 
                alt="IIT Guwahati Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Near Brahmaputra, Guwahati, Assam</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>5.0/5</span>
                    <span className={styles.reviews}>(368 Reviews)</span>
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
                  <span className={styles.infoValue}>Rank 7 (Engineering 2024)</span>
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
              <h2>About IIT Guwahati</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Guwahati, established in 1994 as the sixth member of the prestigious IIT system, commenced academic programs in 1995 and has rapidly emerged as one of India's premier technical institutions recognized nationally and internationally for academic excellence, research innovation, and societal impact. Designated as an Institute of National Importance under the Institutes of Technology Act, IIT Guwahati occupies a breathtakingly scenic 285-hectare campus situated approximately 20 kilometers from Guwahati city center, nestled between the mighty Brahmaputra River and picturesque hills, providing an inspiring natural environment that fosters learning, research, creativity, and holistic personal development. This strategic location in Northeast India positions the institute as a vital educational and research hub serving the region while maintaining strong collaborative connections with institutions, industries, and research organizations across India and globally.
                </p>
                <p>
                  IIT Guwahati encompasses 11 specialized academic departments spanning Biosciences and Bioengineering, Chemical Engineering, Chemistry, Civil Engineering, Computer Science and Engineering, Design, Electronics and Electrical Engineering, Humanities and Social Sciences, Mathematics, Mechanical Engineering, and Physics, complemented by five interdisciplinary research centers focusing on Nanotechnology, Environment, Energy, Rural Technology, and Advanced Materials. The institute offers comprehensive educational programs including Bachelor of Technology across multiple engineering disciplines, innovative integrated dual-degree programs, Master of Technology in specialized domains, Master of Science, Master of Design, and rigorous doctoral programs enabling advanced research across diverse fields. IIT Guwahati's distinguished faculty comprises accomplished scholars, researchers, and experts who have earned prestigious national and international recognitions for academic contributions, research innovations, and professional achievements, ensuring students receive world-class education grounded in both theoretical foundations and practical applications.
                </p>
                <p>
                  Research excellence forms a cornerstone of IIT Guwahati's institutional mission, evidenced by sophisticated research infrastructure, extensive sponsored projects worth hundreds of crores annually, prolific publication records in prestigious international journals, substantial patent portfolios, and collaborative initiatives addressing critical challenges in energy, environment, healthcare, infrastructure, materials science, artificial intelligence, and sustainable development. The institute has earned notable recognition for research impact, achieving 32nd position globally in QS rankings for Research Citations per Faculty, demonstrating the international influence and scholarly contributions of its academic community. IIT Guwahati pioneered sustainable campus practices, earning 2nd rank in Swachhata Ranking by the Government of India and 6th position in SDG 7 focusing on Affordable and Clean Energy, showcasing institutional commitment to environmental responsibility and sustainable development integrated throughout operations, curriculum, research, and community engagement.
                </p>
                <p>
                  Consistently ranked among India's top ten engineering institutions by NIRF and featured in global rankings including QS World University Rankings, THE World Rankings, and recognition among top 100 universities in the world under 50 years old, IIT Guwahati has achieved remarkable distinction within a relatively brief operational history. The institute has cultivated a thriving entrepreneurial ecosystem through dedicated incubation facilities, mentorship programs, funding opportunities, and industry connections, nurturing successful startups across technology sectors. IIT Guwahati's growing alumni network comprises accomplished professionals occupying leadership positions in technology companies, research institutions, academic organizations, consulting firms, government agencies, and entrepreneurial ventures worldwide, consistently contributing to the institute's legacy while maintaining strong engagement with current students through mentorship, recruitment, philanthropy, and collaborative initiatives that reinforce IIT Guwahati's enduring commitment to developing future leaders, innovators, and scholars who will drive technological advancement and societal progress.
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
                IIT Guwahati's rigorous admissions process ensures selection of the most talented and motivated candidates through comprehensive national-level examinations and holistic evaluation criteria.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>
                      Candidates must appear for relevant national-level entrance examinations based on the program: JEE Main and JEE Advanced for B.Tech admissions ensuring rigorous assessment of mathematical, physical sciences, and problem-solving abilities; GATE (Graduate Aptitude Test in Engineering) for M.Tech programs evaluating domain knowledge and analytical skills; specialized entrance tests for the innovative B.Sc (Honours) in Data Science & AI program assessing mathematical foundations, logical reasoning, and aptitude for data-driven disciplines; and department-specific research entrance tests and interviews for doctoral programs evaluating research aptitude, domain expertise, and scholarly potential.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>
                      Following entrance examination results, eligible candidates must complete comprehensive online application forms through IIT Guwahati's official admission portal, providing detailed personal information, educational qualifications, test scores, and uploading scanned copies of required documents including academic transcripts, certificates, identity proof, category certificates where applicable, photographs, and any additional materials specified for particular programs such as research proposals for doctoral admissions.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Evaluation & Selection</h3>
                    <p>
                      The admissions committee conducts thorough evaluation of applications based on entrance test performance, academic records demonstrating consistent excellence, research aptitude (particularly for graduate programs), letters of recommendation, statement of purpose articulating academic goals and research interests, and alignment with program requirements and departmental research strengths. Shortlisted candidates may be invited for personal interviews, written tests, or counseling rounds depending on the program, where selection panels assess domain knowledge, communication skills, research potential, and overall suitability.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Offer & Enrollment</h3>
                    <p>
                      Successful candidates receive formal admission offers detailing program specifics, comprehensive fee structure, reporting dates, and enrollment procedures. Candidates must accept offers within stipulated timelines, pay required admission deposits to secure enrollment, complete medical examinations, submit original documents for verification during physical reporting to the scenic IIT Guwahati campus, and participate in orientation programs introducing academic policies, campus facilities, student support services, and vibrant campus culture before commencing transformative academic journeys.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Programs:</strong> Bachelor's degree in Engineering/Technology with minimum 60% aggregate marks (55% for SC/ST/PwD categories). Valid GATE score required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PhD Programs:</strong> Master's degree with 60% marks or exceptional Bachelor's degree with GATE qualification. Research aptitude, proposal, and interview mandatory</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BSc Data Science & Applications:</strong> 12th pass with Mathematics. Valid JEE Main score or institute's entrance test performance for admission</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionIntro}>
                IIT Guwahati's dedicated Placement Cell consistently achieves outstanding placement outcomes, attracting leading companies from technology, consulting, finance, and diverse sectors.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>95%+</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>250+</h3>
                  <p>Recruiting Companies</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹2+ Cr</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
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

export default IITGuwahati;

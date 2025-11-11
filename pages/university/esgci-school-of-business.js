import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const ESGCISchoolOfBusiness = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online Doctorate Courses', fee: 850000, duration: '36 Months', specializations: 1 },
    { name: 'Online DBA Courses', fee: 850000, duration: '36 Months', specializations: 1 },
  ];

  const keyHighlights = [
    'Established in 1986 as a prestigious business school located in Paris, France',
    'Strong emphasis on international business and management education for global careers',
    'Innovative and practical educational approach combining theory with real-world applications',
    'Experienced faculty comprising seasoned professionals and respected academics',
    'International exposure through partnerships with overseas universities and study abroad programs',
    'Vibrant campus community fostering collaborative learning through group projects and case studies',
    'French state recognition with over 20% international students from 65 nations worldwide',
    'Comprehensive placement assistance supporting internship and career opportunities',
    'Curriculum developed with industry professionals ensuring relevant skills and knowledge',
    'Strong alumni network of accomplished professionals providing mentorship and career guidance',
    'Accredited by ACBSP, IACBE, and Qualiopi ensuring high-quality education standards',
    'Emphasis on entrepreneurial spirit with programs supporting business startups and innovation'
  ];

  const approvals = ['ACBSP', 'IACBE', 'Qualiopi', 'French State Recognition'];
  const nirfRank = 'ACBSP & IACBE Accredited';
  const accreditation = 'ACBSP, IACBE, Qualiopi';

  const placementPartners = [
    'Accenture', 'Byjus', 'Deloitte', 'IBM', 
    'KPMG', 'Nestle', 'PWC', 'Hindustan Unilever', 
    'Coca-Cola', 'Microsoft', 'Amazon', 'Google'
  ];

  const faqs = [
    {
      question: 'Is ESGCI a reputable and recognized institution?',
      answer: 'Yes, ESGCI (École Supérieure de Gestion et Commerce International) is a prestigious business school established in 1986 in Paris, France. It is recognized by the French state and holds accreditations from ACBSP, IACBE, and Qualiopi. With over 20% international students from 65 nations, ESGCI has built a strong reputation for delivering quality international business education.'
    },
    {
      question: 'What academic programs and services does ESGCI provide?',
      answer: 'ESGCI offers comprehensive undergraduate and postgraduate programs focusing on international business and management. The institution provides Online Doctorate Courses and Online DBA (Doctor of Business Administration) programs. Services include placement assistance, industry partnerships, guest lectures, industrial visits, internships, and comprehensive career counseling through their dedicated placement cell.'
    },
    {
      question: 'Are ESGCI\'s programs designed with industry relevance in mind?',
      answer: 'Absolutely. ESGCI emphasizes hands-on learning through case studies, projects, and simulations to bridge the gap between theoretical knowledge and real-world application. The curriculum is developed in collaboration with industry professionals to ensure students acquire the skills and knowledge that employers actively seek in today\'s dynamic business environment.'
    },
    {
      question: 'Does ESGCI provide internship opportunities or practical training?',
      answer: 'Yes, ESGCI places high importance on practical training and offers extensive internship opportunities through its strong industry connections. The placement cell actively arranges industrial visits, connects students with potential employers through job fairs and campus recruiting campaigns, and facilitates internships with leading organizations to enhance students\' employability and professional readiness.'
    },
    {
      question: 'What are the admission requirements for ESGCI programs?',
      answer: 'Prospective students must submit an online application form along with required documentation including educational transcripts, letters of recommendation, and a statement of purpose. The admissions committee evaluates candidates based on academic accomplishments, work experience (if applicable), and other relevant characteristics. Shortlisted candidates are invited for an interview (in-person or video conference) to assess communication skills, motivation, and program fit.'
    },
    {
      question: 'Is there dedicated placement support available at ESGCI?',
      answer: 'Yes, ESGCI offers specialized placement support through a dedicated placement cell and career services department. They organize career development seminars, invite industry leaders for guest lectures, arrange internships, and connect students with potential employers through job fairs and campus recruitment drives. The institution maintains strong partnerships with 300+ hiring partners across various industries.'
    },
    {
      question: 'Are scholarships or financial assistance options available?',
      answer: 'ESGCI understands the importance of financial accessibility and offers EMI (Equated Monthly Installments) options, allowing students to pay tuition in monthly installments rather than lump sum payments. This flexible payment approach reduces financial burden and increases affordability. Students should contact the admissions office for detailed information on scholarship opportunities and financial aid programs.'
    },
    {
      question: 'Is ESGCI involved in international cooperation or exchange programs?',
      answer: 'Yes, ESGCI places high emphasis on international exposure and maintains collaborations with prestigious overseas universities. The institution offers study abroad programs enabling students to broaden their perspectives, explore different cultures, and develop a global mindset. These international tie-ups provide students with valuable opportunities for global networking and cross-cultural learning experiences.'
    }
  ];

  return (
    <>
      <Head>
        <title>ESGCI School of Business - Online DBA & Doctorate Programs | Paris, France</title>
        <meta name="description" content="Explore ESGCI School of Business online programs from Paris, France. ACBSP, IACBE & Qualiopi accredited. DBA & Doctorate programs for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/ESGCI School of Business.png" 
                alt="ESGCI School of Business Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Paris, France</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(394 Reviews)</span>
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
                  <span className={styles.infoLabel}>Recognition:</span>
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
                {tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About ESGCI School of Business</h2>
              <div className={styles.aboutContent}>
                <p>
                  Founded in 1986, ESGCI, formally known as École Supérieure de Gestion et de Commerce International, stands as a prestigious 
                  business school situated in the heart of Paris, France. Over nearly four decades, ESGCI has firmly established itself as a 
                  leading institution for students aspiring to excel in the global business landscape, with a concentrated focus on international 
                  business and management education. The school delivers a comprehensive and diversified learning experience through its extensive 
                  portfolio of undergraduate and postgraduate degree programs.
                </p>
                <p>
                  ESGCI distinguishes itself through its innovative and practical educational methodology. The curriculum is meticulously designed 
                  to equip students with essential skills and comprehensive knowledge required to thrive in today's rapidly evolving business 
                  environment. Academic courses seamlessly integrate theoretical foundations with real-world applications, enabling students to 
                  develop solid business principles while gaining valuable insights into diverse industry sectors and contemporary market dynamics.
                </p>
                <p>
                  One of ESGCI's most valuable assets lies in its distinguished faculty, comprising seasoned professionals and highly respected 
                  academics who bring extensive industry expertise directly into classroom settings. Faculty members demonstrate unwavering 
                  commitment to delivering superior educational quality while ensuring each student receives personalized attention and comprehensive 
                  support throughout their entire academic journey, fostering both intellectual growth and professional development.
                </p>
                <p>
                  ESGCI places paramount importance on international exposure, providing students with numerous opportunities to gain global perspectives 
                  and cross-cultural competencies. Through strategic partnerships with prestigious overseas universities and well-structured study 
                  abroad programs, students can broaden their worldview, immerse themselves in diverse cultures, and cultivate an essential global 
                  mindset that proves invaluable in international business careers.
                </p>
                <p>
                  The institution fosters a vibrant and inclusive campus community that encourages collaborative learning environments. Students 
                  actively engage in group projects, comprehensive case studies, and interactive discussions designed to enhance critical 
                  problem-solving abilities, teamwork skills, and professional communication competencies. Recognized by the French state with 
                  over 20% international student representation from 65 nations, ESGCI maintains an exceptionally diverse academic community.
                </p>
                <p>
                  ESGCI provides comprehensive placement assistance, actively supporting students in securing valuable internship opportunities and 
                  career positions. The institution maintains strong industry connections through an extensive network of corporate partnerships, 
                  facilitating guest lectures from industry leaders, organized industrial visits, internship placements, and direct job recruitment 
                  opportunities. The well-established alumni network comprises accomplished professionals across various industries, offering students 
                  invaluable connections, experienced mentorship, and expert career counseling.
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
                  <div className={styles.statNumber}>39 Years</div>
                  <div className={styles.statLabel}>Academic Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>65 Nations</div>
                  <div className={styles.statLabel}>Student Diversity</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Paris, France</div>
                  <div className={styles.statLabel}>Prestigious Location</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+ Partners</div>
                  <div className={styles.statLabel}>Placement Network</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Advanced doctoral business programs for accomplished professionals and researchers
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
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Flexible EMI payment plans available. Curriculum developed with industry professionals. Internationally recognized degrees from Paris, France.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Begin your doctoral journey at ESGCI through our comprehensive admission pathway
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Submit an online application form along with all required documentation including educational transcripts, letters of recommendation, and a comprehensive statement of purpose outlining your academic and career objectives.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Initial Evaluation</h3>
                    <p>The admissions committee thoroughly evaluates candidates based on academic accomplishments, professional work experience (if applicable), and other relevant qualifications. Shortlisted candidates receive notification for the next selection round.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Interview Assessment</h3>
                    <p>Shortlisted candidates are invited for an interview conducted either in-person or via video conference. The interview helps the admissions committee assess communication skills, professional motivation, and overall program fit.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Decision</h3>
                    <p>The admissions committee makes final decisions based on comprehensive evaluation of applications, submitted documentation, and interview performance. Successful candidates receive an official admission offer with detailed program and enrollment information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Confirmation</h3>
                    <p>Candidates receiving admission offers can accept by submitting proper acceptance documentation and paying required fees within the specified deadline. Upon completion, the enrollment process is finalized and access to learning resources is granted.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>Admission procedures and requirements may vary based on program and intake cycle</li>
                  <li>All candidates must create ABC ID and DEB ID as per latest UGC guidelines (for Indian students)</li>
                  <li>Flexible EMI payment options available to reduce financial burden</li>
                  <li>100% fee refund policy applicable within specified period by the university</li>
                  <li>Visit official ESGCI website or contact admissions office for most accurate information</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                Access exceptional career opportunities through ESGCI's extensive corporate partnerships
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
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Dedicated placement cell working directly with students to enhance employability</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Career development seminars and professional skill-building workshops</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Guest lectures from industry leaders providing real-world insights</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Organized industrial visits to leading organizations and companies</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Internship arrangements connecting students with potential employers</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Job fairs and campus recruiting campaigns with top-tier companies</span>
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
                Common inquiries about ESGCI School of Business programs addressed
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

export default ESGCISchoolOfBusiness;

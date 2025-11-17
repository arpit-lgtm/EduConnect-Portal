import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const AmityUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const amityData = window.universityDatabase.find(
          uni => uni.id === 'amity-university-distance-education'
        );
        setUniversityData(amityData);
      } else {
        const response = await fetch('/api/comprehensive-database');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const amityData = window.universityDatabase.find(
          uni => uni.id === 'amity-university-distance-education'
        );
        setUniversityData(amityData);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'Online MBA', fee: 199000, duration: '2 Years', specializations: 24 },
    { name: 'Online BBA', fee: 165000, duration: '3 Years', specializations: 1 },
    { name: 'Online BCA', fee: 150000, duration: '3 Years', specializations: 2 },
    { name: 'Online B.Com', fee: 99000, duration: '3 Years', specializations: 5 },
    { name: 'Online MCA', fee: 170000, duration: '2 Years', specializations: 3 },
    { name: 'Online M.Com', fee: 120000, duration: '2 Years', specializations: 3 },
    { name: 'Online BA', fee: 99000, duration: '3 Years', specializations: 7 },
    { name: 'Online MA', fee: 170000, duration: '2 Years', specializations: 2 },
    { name: 'MBA (Dual Specialization)', fee: 199000, duration: '2 Years', specializations: 6 },
    { name: 'Online B.Com Honours', fee: 165000, duration: '3 Years', specializations: 1 },
    { name: 'Online M.Sc', fee: 250000, duration: '2 Years', specializations: 1 },
    { name: 'Doctor of Philosophy', fee: 300000, duration: '3 Years', specializations: 5 },
    { name: 'MBA With Campus Immersion (For Executives)', fee: 475000, duration: '2 Years', specializations: 8 },
    { name: 'Online BBA+MBA Integrated Course', fee: 345800, duration: '4.5 Years', specializations: 1 },
    { name: 'Online BCA+MCA Integrated Course', fee: 304000, duration: '4.5 Years', specializations: 1 },
    { name: 'Online B.Com+MBA Integrated Course', fee: 283100, duration: '4.5 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Recognized by UGC-DEB for online and distance education programs',
    'NAAC A accredited institution with strong academic standards',
    'Ranked among India\'s top private universities by NIRF',
    'Over 1,00,000+ placement opportunities through industry partnerships',
    'Advanced Learning Management System for seamless online education',
    'Collaborations with leading global universities for international exposure',
    'Industry-aligned curriculum with practical case studies and projects',
    'Dedicated career support services and virtual job fairs'
  ];

  const approvals = ['UGC-DEB', 'AICTE', 'NAAC A', 'WES'];
  const nirfRank = 'Rank 32';
  const accreditation = 'NAAC A';

  const placementPartners = [
    'Google', 'Microsoft', 'Amazon', 'Accenture', 'Infosys', 
    'Wipro', 'TCS', 'HCL', 'Deloitte', 'EY', 'KPMG', 'PwC'
  ];

  const faqs = [
    {
      question: 'Is Amity University online program approved by UGC?',
      answer: 'Yes, Amity University\'s online programs are fully approved by UGC-DEB (University Grants Commission - Distance Education Bureau), making the degrees equivalent to regular on-campus programs.'
    },
    {
      question: 'What courses does Amity University offer in online mode?',
      answer: 'Amity University offers a wide range of online programs including MBA, BBA, BCA, B.Com, MCA, M.Com, BA, MA, M.Sc, and Doctoral programs across various specializations.'
    },
    {
      question: 'How are classes and exams conducted?',
      answer: 'Classes are conducted through Amity\'s proprietary Learning Management System (LMS) with live interactive sessions and recorded lectures. Examinations are held in online proctored mode with a mix of assignments, case studies, and MCQs.'
    },
    {
      question: 'Does Amity provide placement assistance for online students?',
      answer: 'Yes, Amity University offers comprehensive placement support with access to 1,00,000+ job opportunities, exclusive virtual job fairs, resume building workshops, and connections with 300+ hiring partners.'
    },
    {
      question: 'Can I get education loans for online programs?',
      answer: 'Yes, education loans are available through multiple financial partners with easy EMI options. Students can opt for no-cost EMI plans to manage their fees in affordable installments.'
    },
    {
      question: 'What is the admission process?',
      answer: 'The admission process is completely online. Visit the official website, fill the application form, submit required documents, pay the application fee, and await confirmation. No entrance exam is required for most programs.'
    }
  ];

  return (
    <>
      <Head>
        <title>Amity University Online - Distance Education Programs | EduConnect</title>
        <meta name="description" content="Explore Amity University's UGC-approved online degree programs. MBA, BBA, BCA, B.Com, MCA and more with 100% placement support." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Amity University.png" 
                alt="Amity University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Noida, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.7/5</span>
                    <span className={styles.reviews}>(667 Reviews)</span>
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
              <h2>About Amity University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Amity University stands as one of India's premier private educational institutions, consistently 
                  ranked among the top universities by NIRF (National Institutional Ranking Framework). The university's 
                  online and distance education division brings world-class education to students across the country, 
                  breaking geographical barriers while maintaining the same academic excellence as traditional programs.
                </p>
                <p>
                  With UGC-DEB approval, Amity's online programs are fully recognized and hold the same value as 
                  regular degrees. The university has earned NAAC A accreditation, demonstrating its commitment to 
                  quality education and continuous improvement in academic standards.
                </p>
                <p>
                  Amity University offers comprehensive programs across multiple disciplines including Management, 
                  Information Technology, Commerce, Arts, Humanities, and Sciences. With over 24 MBA specializations 
                  alone, students have the flexibility to choose career paths aligned with their goals and industry demands.
                </p>
                <p>
                  The university leverages cutting-edge technology through its proprietary Learning Management System (LMS), 
                  providing students with interactive live sessions, recorded lectures for flexible learning, digital study 
                  materials, and seamless examination processes. This modern approach to education ensures students receive 
                  quality instruction regardless of their location.
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
                  <div className={styles.statNumber}>1,00,000+</div>
                  <div className={styles.statLabel}>Placement Opportunities</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Avg. Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Online Learning</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our diverse range of UGC-approved online degree programs designed to advance your career
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
                <strong>Note:</strong> EMI options available starting from as low as ₹3,750/month. 
                No-cost EMI plans through trusted financial partners.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at Amity University Online
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Register Online</h3>
                    <p>Visit the official website and fill out the online application form with your personal and academic details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Documents</h3>
                    <p>Upload required documents including mark sheets, ID proof, and photograph for verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Complete the application fee payment through secure online payment gateway.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Verification & Confirmation</h3>
                    <p>University reviews your application and documents. Upon approval, you'll receive admission confirmation via email.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Start Learning</h3>
                    <p>Access your LMS credentials and begin your academic journey with orientation sessions.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Online Programs (BBA/BCA/B.Com):</strong> 10+2 or equivalent examination from recognized board with minimum 50% aggregate marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Online Programs (MBA/MCA/M.Com):</strong> Bachelor's degree from UGC recognized university with minimum 50% marks. Work experience preferred for MBA</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Certificate/Diploma Programs:</strong> Graduation degree for PG certificates. 12th pass for UG diplomas. Specific requirements vary by program</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions open twice a year - January/February and July/August batches</li>
                  <li>No entrance examination required for most programs</li>
                  <li>Create ABC ID (Academic Bank of Credits) as per UGC guidelines</li>
                  <li>100% fee refund available within specified period as per UGC policy</li>
                  <li>Documents required: 10th & 12th certificates, graduation degree (for PG programs), ID proof, photographs</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Access extensive career opportunities through our robust placement ecosystem
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>1,00,000+</h3>
                  <p>Job Opportunities Available</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Active Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>More Interview Calls</p>
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
                Find answers to common queries about Amity University Online programs
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
};

export default AmityUniversity;

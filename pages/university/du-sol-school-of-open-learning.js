import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/UniversityDetail.module.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function DUSOLSchoolOfOpenLearning() {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);

  // Load university database for comparison data
  useEffect(() => {
    const loadData = async () => {
      if (typeof window !== 'undefined') {
        try {
          const response = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
          const text = await response.text();
          const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
          const executeGlobal = new Function(modifiedText);
          executeGlobal.call(window);
          const duData = window.universityDatabase.find(uni => 
            uni.id === 'delhi-university' || uni.name.toLowerCase().includes('delhi university')
          );
          setUniversityData(duData);
        } catch (error) {
          console.error('Error loading university data:', error);
        }
      }
    };
    loadData();
  }, []);

  const coursesData = [
    { name: 'Online B.Com', fee: 9600, duration: '3 Years', specializations: '9 Specializations Available' },
    { name: 'Online M.Com', fee: 10000, duration: '2 Years', specializations: '6 Specializations Available' },
    { name: 'Online MA', fee: 12000, duration: '2 Years', specializations: '8 Specializations Available' },
    { name: 'Online BA', fee: 5000, duration: '3 Years', specializations: '12 Specializations Available' },
    { name: 'Online MBA', fee: 100000, duration: '2 Years', specializations: '45 Specializations Available' },
    { name: 'Online BBA', fee: 15200, duration: '3 Years', specializations: '25 Specializations Available' },
    { name: 'Online B.Com (Hons)', fee: 8320, duration: '3 Years', specializations: 'Honours Program' },
    { name: 'M.Tech for Working Professionals', fee: 258000, duration: '2 Years', specializations: '21 Specializations Available' },
    { name: 'B.Tech For Working Professionals', fee: 672000, duration: '3.5 Years', specializations: '14 Specializations Available' },
    { name: 'Online BCA', fee: 40200, duration: '3 Years', specializations: '10 Specializations Available' },
    { name: 'Ph.D Program', fee: 7130, duration: '5 Years', specializations: 'Research Program' },
    { name: 'Distance BCA', fee: 10000, duration: '3 Years', specializations: 'Computer Applications' },
    { name: 'Distance B.Com', fee: 10000, duration: '3 Years', specializations: 'Commerce Program' },
    { name: 'Distance B.Sc', fee: 10000, duration: '3 Years', specializations: 'Science Program' },
    { name: 'Online MCA', fee: 47500, duration: '2 Years', specializations: '8 Specializations Available' },
    { name: 'Distance BBA', fee: 10000, duration: '3 Years', specializations: 'Business Administration' },
    { name: 'Distance M.Sc', fee: 10000, duration: '2 Years', specializations: 'Science Program' },
    { name: 'Distance MA', fee: 10000, duration: '3 Years', specializations: '1 Specialization Available' },
    { name: 'Distance BA', fee: 10000, duration: '3 Years', specializations: 'Arts Program' },
    { name: 'Distance MCA', fee: 10000, duration: '2 Years', specializations: 'Computer Applications' },
    { name: 'Distance M.Com', fee: 10000, duration: '2 Years', specializations: 'Commerce Program' },
    { name: 'Distance B.Tech', fee: 10000, duration: '2 Years', specializations: 'Technology Program' },
    { name: 'Distance MBA', fee: 95000, duration: '2 Years', specializations: 'Management Program' },
    { name: 'Online M.Sc', fee: 250000, duration: '2 Years', specializations: '11 Specializations Available' },
    { name: 'Online Executive MBA', fee: 52571, duration: '1 - 2 Years', specializations: '6 Specializations Available' },
    { name: 'Distance M.Tech', fee: 248000, duration: '2 Years', specializations: 'Technology Program' }
  ];

  const placementPartners = [
    'Government of India', 'Ministry of External Affairs', 'UPSC', 'SSC',
    'Delhi Government', 'State Governments', 'Banking Sector', 'Insurance Companies',
    'Tata Consultancy Services', 'Infosys', 'Wipro', 'IBM India',
    'Deloitte', 'PwC', 'Ernst & Young', 'KPMG',
    'Delhi University', 'Jawaharlal Nehru University', 'All India Institute of Medical Sciences',
    'Indian Institute of Technology', 'Indian Institute of Management', 'Research Organizations'
  ];

  const keyHighlights = [
    'Part of University of Delhi - India\'s most prestigious educational institution',
    'Established 1962 - 62+ years of excellence in open & distance learning',
    'UGC recognized with NAAC A++ accreditation and central university status',
    'Most affordable fees among premier Indian universities',
    'Delhi University degree with global recognition and prestige',
    'Flexible learning system designed for working professionals',
    'Strong alumni network in government, corporate and academic sectors',
    'Admission based on merit - no entrance examination required'
  ];

  const approvals = ['UGC-DEB', 'AICTE', 'AIU', 'NAAC A++', 'Central University'];
  
  const accreditation = 'NAAC A++ (CGPA 3.6)';
  const nirfRank = 'Top 50 Central Universities';

  const faqs = [
    {
      question: 'Is DU SOL degree equivalent to regular Delhi University degree?',
      answer: 'Yes, DU SOL degree carries the same recognition as regular Delhi University degree. It is issued by University of Delhi and accepted globally for employment and higher studies.'
    },
    {
      question: 'What is the difference between SOL and regular DU admission?',
      answer: 'SOL offers flexible learning with distance education methodology, while maintaining DU\'s academic standards. Admission is merit-based without entrance exams, making it accessible to working professionals.'
    },
    {
      question: 'Are DU SOL graduates eligible for government jobs?',
      answer: 'Absolutely. DU SOL degree is fully recognized by all government departments, UPSC, SSC, and state public service commissions for recruitment purposes.'
    },
    {
      question: 'How are examinations conducted for SOL students?',
      answer: 'Examinations are conducted at designated centers across India. The evaluation system follows Delhi University standards with semester-wise assessments and comprehensive evaluation.'
    },
    {
      question: 'What career opportunities are available after DU SOL graduation?',
      answer: 'Graduates pursue careers in civil services, banking, corporate sector, research, teaching, and higher studies at premier institutions. The DU brand opens doors to excellent opportunities.'
    },
    {
      question: 'Is there any age limit or work experience requirement?',
      answer: 'There is no upper age limit. Working professionals, homemakers, and students who couldn\'t get regular admission can pursue DU SOL programs based on eligibility criteria.'
    }
  ];

  return (
    <>
      <Head>
        <title>DU SOL - Delhi University School of Open Learning | Prestigious Distance Education | EduConnect</title>
        <meta name="description" content="Study at Delhi University School of Open Learning (DU SOL). Get prestigious DU degree through distance education. UGC recognized programs with global recognition." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/University of Delhi.png" 
                alt="University of Delhi Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => {
                  e.target.src = "/images/universities/default-university.png";
                }}
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
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.6/5</span>
                    <span className={styles.reviews}>(852 Reviews)</span>
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
                  <span className={styles.infoLabel}>Ranking:</span>
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
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Delhi University School of Open Learning (DU SOL)</h2>
              <div className={styles.aboutContent}>
                <p>
                  Delhi University School of Open Learning (DU SOL), established in 1962, stands as India's 
                  premier institution for distance education, operating under the prestigious University of 
                  Delhi. As part of the central university system with NAAC A++ accreditation, DU SOL offers 
                  the same globally recognized Delhi University degree through flexible learning methodologies.
                </p>
                <p>
                  With over 62 years of excellence in open and distance learning, DU SOL has democratized 
                  access to quality higher education, enabling millions of students to earn a prestigious 
                  Delhi University degree while managing their personal and professional commitments. The 
                  institution maintains the academic rigor and standards of Delhi University while providing 
                  unprecedented flexibility in learning.
                </p>
                <p>
                  DU SOL's unique position as part of India's most prestigious university system ensures that 
                  its graduates receive the same recognition and opportunities as regular Delhi University 
                  alumni. The institution has produced numerous civil servants, corporate leaders, researchers, 
                  and academicians who have contributed significantly to India's growth story.
                </p>
                <p>
                  The School of Open Learning combines traditional academic excellence with modern pedagogical 
                  approaches, offering comprehensive support systems including study materials, online resources, 
                  contact classes, and academic counseling to ensure student success in their educational journey.
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
                  <div className={styles.statNumber}>1962</div>
                  <div className={styles.statLabel}>Established</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>5L+</div>
                  <div className={styles.statLabel}>Alumni Worldwide</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>26</div>
                  <div className={styles.statLabel}>Total Courses</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>184</div>
                  <div className={styles.statLabel}>Student Reviews</div>
                </div>
              </div>

              {/* Accreditation Section */}
              <h3>Accreditations & Approvals</h3>
              <div className={styles.accreditationSection}>
                <p className={styles.accreditationText}>
                  DU SOL is approved by leading educational bodies ensuring quality and recognition of degrees globally.
                </p>
                <div className={styles.accreditationGrid}>
                  <div className={styles.accreditationCard}>
                    <div className={styles.accreditationIcon}>🎓</div>
                    <div className={styles.accreditationInfo}>
                      <h4>UGC-DEB</h4>
                      <p>University Grants Commission - Distance Education Bureau Approved</p>
                    </div>
                  </div>
                  <div className={styles.accreditationCard}>
                    <div className={styles.accreditationIcon}>🏛️</div>
                    <div className={styles.accreditationInfo}>
                      <h4>AICTE</h4>
                      <p>All India Council for Technical Education Recognition</p>
                    </div>
                  </div>
                  <div className={styles.accreditationCard}>
                    <div className={styles.accreditationIcon}>🌐</div>
                    <div className={styles.accreditationInfo}>
                      <h4>AIU</h4>
                      <p>Association of Indian Universities Member</p>
                    </div>
                  </div>
                  <div className={styles.accreditationCard}>
                    <div className={styles.accreditationIcon}>⭐</div>
                    <div className={styles.accreditationInfo}>
                      <h4>NAAC A++</h4>
                      <p>National Assessment and Accreditation Council A++ Grade</p>
                    </div>
                  </div>
                  <div className={styles.accreditationCard}>
                    <div className={styles.accreditationIcon}>🏆</div>
                    <div className={styles.accreditationInfo}>
                      <h4>Central University</h4>
                      <p>Central Government University Status with National Recognition</p>
                    </div>
                  </div>
                </div>
                <div className={styles.accreditationNote}>
                  <strong>Global Recognition:</strong> DU SOL degrees are recognized by employers worldwide, 
                  eligible for government jobs, higher studies abroad, and accepted by leading multinational companies.
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Comprehensive range of undergraduate and postgraduate programs with Delhi University recognition
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
                        <td>{course.specializations}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>DU Advantage:</strong> All courses lead to Delhi University degree with global recognition. 
                Most affordable fees among premier universities. Admission based on merit without entrance examination.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Merit-based admission process for Delhi University School of Open Learning
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Register on DU SOL official portal during admission window. Fill application form with accurate personal and academic details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Merit List Publication</h3>
                    <p>Merit lists published based on best of four subjects for UG and graduation marks for PG programs. Check cutoff and eligibility status.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification</h3>
                    <p>Submit required documents including mark sheets, certificates, category certificates, and passport size photographs for verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Confirmation</h3>
                    <p>Pay admission fees through online portal or bank challan. Receive admission confirmation and student ID for course commencement.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Course Commencement</h3>
                    <p>Attend orientation session, collect study materials, and access online learning platform to begin your Delhi University journey.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Delhi University degree with global recognition and acceptance</li>
                  <li>Admission based on merit - no entrance examination required</li>
                  <li>Most affordable fees among premier central universities in India</li>
                  <li>Flexible learning with comprehensive academic support</li>
                  <li>Documents required: 10th, 12th certificates, graduation degree (for PG), caste/income certificate (if applicable)</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Opportunities & Alumni Success</h2>
              <p className={styles.sectionDesc}>
                Delhi University brand opens doors to prestigious career opportunities across sectors
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>85%</h3>
                  <p>Success Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹12 LPA</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>5L+</h3>
                  <p>Global Alumni</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Recognition Rate</p>
                </div>
              </div>

              <h3>Career Destinations</h3>
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
                Get answers to commonly asked questions about Delhi University School of Open Learning
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
                <h3>Ready to join India's premier university?</h3>
                <p>Get Delhi University degree with flexible learning and global recognition</p>
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
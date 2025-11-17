import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/UniversityDetail.module.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function DeakinUniversityMelbourne() {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);

  // Load university database for comparison data
  useEffect(() => {
    const loadData = async () => {
      if (typeof window !== 'undefined') {
        try {
          const response = await fetch('/api/comprehensive-database');
          const text = await response.text();
          const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
          const executeGlobal = new Function(modifiedText);
          executeGlobal.call(window);
          const deakinData = window.universityDatabase.find(uni => 
            uni.id === 'deakin-university-melbourne' || uni.name.toLowerCase().includes('deakin')
          );
          setUniversityData(deakinData);
        } catch (error) {
          console.error('Error loading university data:', error);
        }
      }
    };
    loadData();
  }, []);

  const coursesData = [
    { name: 'Online MBA', fee: 550000, duration: '2 Years', specializations: '1 Specialization' },
    { name: 'Online Executive MBA', fee: 400000, duration: '13 Months', specializations: '1 Specialization' },
    { name: 'Online Global MBA', fee: 550000, duration: '2 Years', specializations: '1 Specialization' },
    { name: '1 Year MBA Online', fee: 400000, duration: '13 Months', specializations: '1 Specialization' }
  ];

  const placementPartners = [
    'Accenture', 'Amazon', 'American Express', 'Fractal', 'IBM',
    'Infosys', 'McKinsey & Company', 'Microsoft', 'Google', 'Deloitte',
    'KPMG', 'EY', 'PwC', 'TCS', 'Wipro', 'Cognizant', 'Capgemini',
    'Tech Mahindra', 'HCL Technologies', 'Oracle'
  ];

  const keyHighlights = [
    'Ranked among top 1% business schools globally',
    'AACSB, EQUIS and WES accredited programs',
    '5-star QS rating for MBA program',
    'Delivered through upGrad partnership for Indian market',
    'Australia\'s #1 university careers service (2017-2020)',
    'Easy EMI options and flexible payment plans available',
    '300+ hiring partners and 50% average salary hike',
    'Industry-relevant curriculum with Harvard case studies'
  ];

  const approvals = ['WES', 'AACSB', 'EQUIS', 'UGC Recognition'];
  
  const accreditation = 'AACSB & EQUIS Accredited';
  const nirfRank = 'QS 5-Star Rating';

  const faqs = [
    {
      question: 'Is an MBA from Deakin worth it?',
      answer: 'Yes, Deakin MBA is highly valuable with 5-star QS rating, AACSB and EQUIS accreditation, and strong industry connections. It offers excellent ROI with 50% average salary hike and access to 300+ hiring partners.'
    },
    {
      question: 'What are the courses offered by Deakin Business School in Online mode?',
      answer: 'Deakin offers Online MBA (₹5.5L, 2 years), Online Executive MBA (₹4L, 13 months), Online Global MBA (₹5.5L, 2 years), and 1 Year MBA Online (₹4L, 13 months).'
    },
    {
      question: 'Are courses from Deakin valid in India?',
      answer: 'Yes, Deakin University degrees are UGC recognized and WES approved, making them valid for employment and higher studies in India. The programs are delivered through upGrad partnership.'
    },
    {
      question: 'How are examinations conducted for online MBA programs?',
      answer: 'Examinations are conducted through online proctored methodology using AI-based technology. You can give exams from home with a laptop having webcam and microphone facilities.'
    },
    {
      question: 'Does Deakin Business School provide career support?',
      answer: 'Yes, Deakin provides comprehensive career support including career coaching, interview preparation, 8-week capstone projects, and access to DeakinTALENT - Australia\'s #1 university careers service.'
    },
    {
      question: 'What are the EMI options available?',
      answer: 'Deakin offers flexible EMI options through various education loan partners, making it easier for students to pursue their MBA without financial constraints. Easy monthly payment plans are available.'
    }
  ];

  return (
    <>
      <Head>
        <title>Deakin University Melbourne Online (via upGrad) - Australian Degrees | EduConnect</title>
        <meta name="description" content="Study Deakin University's world-class online programs via upGrad. Australian degrees with Indian support. MBA, Data Analytics, IT, AI and more." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Deakin University.png" 
                alt="Deakin University Logo" 
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
                  <span className={styles.infoValue}>📍 Melbourne, Australia (Online via upGrad)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.8/5</span>
                    <span className={styles.reviews}>(892 Reviews)</span>
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
                {tab === 'courses' ? 'Programs' : tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Deakin University Melbourne</h2>
              <div className={styles.aboutContent}>
                <p>
                  Deakin University, established in 1974, is one of Australia's most progressive and innovative 
                  universities, consistently ranked among the top 1% of universities worldwide. Named after 
                  Australia's second Prime Minister Alfred Deakin, the university has built a global reputation 
                  for excellence in education, research, and industry engagement.
                </p>
                <p>
                  Through its strategic partnership with upGrad, Deakin University brings world-class Australian 
                  education to Indian students with local support and flexible learning options. This collaboration 
                  combines Deakin's academic excellence with upGrad's innovative online learning platform, 
                  creating an unparalleled educational experience.
                </p>
                <p>
                  As Australia's #1 university for student satisfaction in Victoria, Deakin University maintains 
                  a 5-star rating for teaching quality, student support, and overall student satisfaction. The 
                  university's commitment to industry-relevant education ensures that graduates are job-ready 
                  and equipped with skills demanded by global employers.
                </p>
                <p>
                  With over 280,000 alumni worldwide and strong industry connections across Australia and beyond, 
                  Deakin University offers students not just a degree but access to a global network of 
                  opportunities. The university's focus on innovation, technology, and real-world application 
                  makes it an ideal choice for ambitious professionals.
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
                  <div className={styles.statNumber}>#1</div>
                  <div className={styles.statLabel}>in Victoria for Student Satisfaction</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>280K+</div>
                  <div className={styles.statLabel}>Global Alumni</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>5★</div>
                  <div className={styles.statLabel}>Teaching Quality Rating</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>8</div>
                  <div className={styles.statLabel}>Online Programs</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore Deakin University's world-class online programs delivered via upGrad partnership
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
                <strong>Note:</strong> EMI options available starting from ₹15,000/month. 
                Australian degrees with global recognition and industry integration. Scholarship opportunities available.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Streamlined admission process for Deakin University online programs via upGrad
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Program Selection</h3>
                    <p>Choose your preferred program and schedule a counseling session to understand program details, career outcomes, and fee structure.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application & Documents</h3>
                    <p>Submit online application with academic transcripts, work experience certificates, and English proficiency proof if required.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Academic Assessment</h3>
                    <p>Undergo academic evaluation including profile review, aptitude assessment, and interview with admissions team.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Offer</h3>
                    <p>Receive conditional offer letter upon selection and complete enrollment formalities including fee payment and document verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Program Commencement</h3>
                    <p>Access learning platform, attend virtual orientation, and begin your journey with dedicated student success manager support.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/Business Programs:</strong> Bachelor's degree from recognized university with minimum 50-60% marks. Work experience preferred. IELTS/TOEFL preferred but not mandatory</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Master's Programs:</strong> Relevant undergraduate degree with good academic standing. English proficiency demonstration required for international students</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>International Recognition:</strong> Australian university degree with global recognition and UGC equivalence in India. Merit-based scholarships available</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Australian university degree with global recognition and UGC equivalence in India</li>
                  <li>Flexible EMI options with 0% interest plans through leading financial partners</li>
                  <li>Merit-based scholarships available for exceptional candidates</li>
                  <li>100% online delivery with live sessions and recorded lectures for flexibility</li>
                  <li>English proficiency: IELTS/TOEFL preferred but not mandatory for most programs</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Services & Placements</h2>
              <p className={styles.sectionDesc}>
                Comprehensive career support with global opportunities through Deakin's industry network
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>85%</h3>
                  <p>Employment Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹18 LPA</h3>
                  <p>Average Salary</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>280K+</h3>
                  <p>Global Alumni Network</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>500+</h3>
                  <p>Industry Partners</p>
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
                Get answers to commonly asked questions about Deakin University online programs
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
                <h3>Ready to start your Australian education journey?</h3>
                <p>Connect with our education consultants for personalized guidance</p>
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
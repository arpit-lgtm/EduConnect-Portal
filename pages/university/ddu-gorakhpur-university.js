import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/UniversityDetail.module.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function DDUGorakhpurUniversity() {
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
          const dduData = window.universityDatabase.find(uni => 
            uni.id === 'ddu-gorakhpur-university' || uni.name.toLowerCase().includes('gorakhpur')
          );
          setUniversityData(dduData);
        } catch (error) {
          console.error('Error loading university data:', error);
        }
      }
    };
    loadData();
  }, []);

  const coursesData = [
    { name: 'Online MBA', fee: 52500, duration: '2 Years', specializations: '2 Specializations' },
    { name: 'Online BBA', fee: 57500, duration: '3 Years', specializations: '1 Specialization' },
    { name: 'Online B.Com', fee: 56500, duration: '4 Years', specializations: '1 Specialization' },
    { name: 'Online B.Com (Hons)', fee: 56500, duration: '4 Years', specializations: 'General' },
    { name: 'Online MA', fee: 30500, duration: '2 Years', specializations: '1 Specialization' },
    { name: 'Online M.Com', fee: 32500, duration: '2 Years', specializations: '2 Specializations' }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra', 'Cognizant',
    'IBM', 'Accenture', 'Dell Technologies', 'Microsoft', 'Amazon', 'Google',
    'ICICI Bank', 'HDFC Bank', 'Axis Bank', 'State Bank of India',
    'Deloitte', 'Ernst & Young', 'KPMG', 'PwC'
  ];

  const keyHighlights = [
    'Established 1950 - Over 75 years of educational excellence',
    'UGC recognized state university with NAAC A++ accreditation',
    'First state university to emerge as leading higher studies centre after Independence',
    '12,000+ enrolled students with more than 50% women',
    '400+ teaching staff and 130+ programs',
    'Multiple national and international awards for innovative teaching practices',
    'Special Work-Linked Degree programs for working professionals',
    'QS Asia Rankings 2025: 751-800 band with 50-position jump'
  ];

  const approvals = ['UGC', 'NAAC A++', 'DEB', 'State University'];
  
  const accreditation = 'NAAC A++ (CGPA 3.5)';
  const nirfRank = 'QS Asia Rankings: 751-800';

  const faqs = [
    {
      question: 'Is DDUGU UGC-recognized?',
      answer: 'Yes, Deen Dayal Upadhyaya Gorakhpur University (DDUGU) is fully UGC-recognized with NAAC A++ accreditation. It is a state university established in 1950.'
    },
    {
      question: 'Which online courses are offered by DDUGU?',
      answer: 'DDUGU offers Online BBA, Online B.Com, Online B.Com (Hons), Online MBA, Online MA, and Online M.Com programs through distance education mode.'
    },
    {
      question: 'Do I need to take the CAT exam for the DDUGU online MBA?',
      answer: 'No, CAT exam is not mandatory for DDUGU online MBA admission. Admission is based on merit and academic qualifications.'
    },
    {
      question: 'Is DDUGU a government university?',
      answer: 'Yes, DDUGU is a state government university established in 1950 in Gorakhpur, Uttar Pradesh. It is the first state university to emerge as a leading higher studies centre after Independence.'
    },
    {
      question: 'What is the fee for DDU College Gorakhpur online MBA?',
      answer: 'The fee for DDUGU online MBA is ₹52,500 for the complete 2-year program with 2 specializations available.'
    },
    {
      question: 'Are DDUGU online degrees equivalent to regular degrees?',
      answer: 'Yes, online degrees from DDUGU are equivalent to regular degrees and are accepted by top recruiters worldwide including government and private sectors.'
    },
    {
      question: 'How are examinations conducted for online programs?',
      answer: 'Examinations are conducted in hybrid mode - online assignments and projects with offline semester exams at designated centers across India for program authenticity and credibility.'
    },
    {
      question: 'What career support is available after graduation?',
      answer: 'University provides placement assistance through its dedicated career services cell, industry connect programs, internship opportunities, and alumni mentorship for career development.'
    }
  ];

  return (
    <>
      <Head>
        <title>DDU Gorakhpur University Online - Distance Education Programs | EduConnect</title>
        <meta name="description" content="Explore DDU Gorakhpur University's UGC-approved online degree programs. Central university with 65+ years of excellence. MBA, MA, BA, BCom and more." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Deen Dayal Upadhyay Gorakhpur.png" 
                alt="Deen Dayal Upadhyay Gorakhpur University Logo" 
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
                  <span className={styles.infoValue}>📍 Gorakhpur, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.3/5</span>
                    <span className={styles.reviews}>(485 Reviews)</span>
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
              <h2>About DDU Gorakhpur University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Deen Dayal Upadhyaya Gorakhpur University, established in 1950, stands as one of India's premier 
                  state universities with over 75 years of educational excellence. Named after the great philosopher 
                  and social reformer Pandit Deendayal Upadhyaya, the university has been a beacon of quality higher 
                  education in Eastern Uttar Pradesh and beyond.
                </p>
                <p>
                  As a UGC-recognized state university with NAAC A++ accreditation, DDU Gorakhpur University has 
                  consistently maintained its reputation for academic rigor, research excellence, and holistic 
                  student development. The university's online programs combine traditional academic values with 
                  modern educational technology to deliver world-class education.
                </p>
                <p>
                  With an extensive alumni network of over 500,000 graduates serving in various sectors across 
                  India and abroad, DDU Gorakhpur University offers students not just education but a pathway to 
                  lifelong success. The university's commitment to affordable, accessible, and quality education 
                  makes it an ideal choice for aspiring students.
                </p>
                <p>
                  The university's online platform leverages cutting-edge technology to provide interactive learning 
                  experiences, ensuring that distance education students receive the same quality of instruction as 
                  their on-campus counterparts. Regular faculty interaction, doubt-solving sessions, and comprehensive 
                  study materials ensure academic success.
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
                  <div className={styles.statNumber}>65+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>500K+</div>
                  <div className={styles.statLabel}>Alumni Network</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>75%</div>
                  <div className={styles.statLabel}>Placement Success</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>6</div>
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
                Explore DDU Gorakhpur University's comprehensive range of UGC-approved online degree programs
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
                <strong>Note:</strong> EMI options available starting from ₹2,500/month. 
                Central university degrees valid for all government jobs and higher studies.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple and straightforward admission process for DDU Gorakhpur University online programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Complete the online application form on the university website with your academic details and personal information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload</h3>
                    <p>Submit required documents including mark sheets, ID proof, photographs, and other relevant certificates through the portal.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Merit Assessment</h3>
                    <p>University reviews your application based on academic merit. Interview may be conducted for selected programs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Complete admission fee payment upon selection confirmation and receive enrollment details and login credentials.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Start Learning</h3>
                    <p>Access online learning platform, download study materials, and begin your academic journey with faculty support.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/B.Com/BSc):</strong> 12th pass from recognized board with minimum pass marks. Merit-based admission with no entrance exam for most programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/M.Com/MBA):</strong> Bachelor's degree in relevant stream with minimum 50% aggregate from UGC recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Distance Education:</strong> Same eligibility criteria. NAAC A++ accredited with 12,000+ students. QS ranking 1001-1200 band (2024)</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>State university established in 1950 with UGC recognition</li>
                  <li>NAAC A++ accredited with 12,000+ students</li>
                  <li>Merit-based admission with no entrance exam requirement for most programs</li>
                  <li>Flexible payment options available for all courses</li>
                  <li>QS ranking in 1001-1200 band (2024) with strong academic reputation</li>
                  <li>Documents required: 10th & 12th certificates, graduation degree, ID proof, photographs</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Comprehensive placement assistance and career development support for DDU Gorakhpur University graduates
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>75%</h3>
                  <p>Placement Success Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>500K+</h3>
                  <p>Alumni Network</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹8 LPA</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>200+</h3>
                  <p>Recruiting Partners</p>
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
                Get answers to commonly asked questions about DDU Gorakhpur University online programs
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
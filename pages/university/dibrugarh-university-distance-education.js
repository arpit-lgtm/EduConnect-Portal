import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/UniversityDetail.module.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function DibругarhUniversityDistanceEducation() {
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
          const dibругархData = window.universityDatabase.find(uni => 
            uni.id === 'dibrugarh-university' || uni.name.toLowerCase().includes('dibrugarh')
          );
          setUniversityData(dibругархData);
        } catch (error) {
          console.error('Error loading university data:', error);
        }
      }
    };
    loadData();
  }, []);

  const coursesData = [
    { name: 'Distance MBA', fee: 35000, duration: '2 Years', specializations: 'Multiple Specializations' }
  ];

  const placementPartners = [
    'Oil India Limited', 'Indian Oil Corporation', 'Assam Petrochemicals Limited', 'ONGC',
    'State Bank of India', 'Axis Bank', 'HDFC Bank', 'ICICI Bank',
    'TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'HCL Technologies',
    'Assam Government', 'Central Government', 'Railway Recruitment Board',
    'Teaching Profession', 'Civil Services', 'Banking Sector', 'Research Organizations'
  ];

  const keyHighlights = [
    'Established 1965 - Easternmost university in India with 58+ years of excellence',
    'UGC recognized with NAAC A accreditation and state university status',
    'Directorate of Open and Distance Learning (DODL) established in 2001',
    'Offers Distance MBA at affordable fee of ₹35,000 for 2 years',
    'Vision to reach the unreached and provide opportunities to all students',
    'Multi-disciplinary approach with theoretical perspectives and cultural diversity',
    'Strong reputation in eastern region of India for quality education',
    'Focus on students who cannot pursue regular studies due to circumstances'
  ];

  const approvals = ['UGC', 'NAAC A', 'DEB', 'State University'];
  
  const accreditation = 'NAAC A (CGPA 2.8)';
  const nirfRank = 'Easternmost University';

  const faqs = [
    {
      question: 'Is Distance Education from Directorate of Open and Distance Learning of Dibrugarh University valid?',
      answer: 'Yes, Dibrugarh University is UGC recognized and NAAC A accredited. Distance education degrees from DODL are equivalent to regular degrees and valid for employment and higher studies.'
    },
    {
      question: 'What course is offered by Dibrugarh University Distance Education?',
      answer: 'Dibrugarh University Distance Education offers Distance MBA for ₹35,000 with a duration of 2 years through the Directorate of Open and Distance Learning (DODL).'
    },
    {
      question: 'What are the contact details of Dibrugarh University?',
      answer: 'Students can contact Dibrugarh University through their official website or visit the Directorate of Open and Distance Learning for admission and academic queries.'
    },
    {
      question: 'Does the university provide EMI facility for the Distance MBA course?',
      answer: 'The university does not offer direct EMI facility, but students can apply for government scholarships according to their eligibility criteria for financial assistance.'
    },
    {
      question: 'How are examinations conducted for Distance MBA?',
      answer: 'Examinations follow a pattern with internal assessment (assignments and practicals) carrying 20-30% weightage and end-term examinations carrying the remaining weightage.'
    },
    {
      question: 'Does Dibrugarh University provide placement support for distance education students?',
      answer: 'The dedicated placement cell primarily serves regular degree students. However, the university assists distance education students in skill enhancement and interview preparation for better career opportunities.'
    }
  ];

  return (
    <>
      <Head>
        <title>Dibrugarh University Distance Education - Northeast India's Premier University | EduConnect</title>
        <meta name="description" content="Study at Dibrugarh University through distance education. UGC-recognized programs with regional focus. MBA, MA, BA, BCom and more from Northeast India's leading university." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Dibrugarh University.png" 
                alt="Dibrugarh University Logo" 
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
                  <span className={styles.infoValue}>📍 Dibrugarh, Assam</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.2/5</span>
                    <span className={styles.reviews}>(324 Reviews)</span>
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
              <h2>About Dibrugarh University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Dibrugarh University, established in 1965, stands as Northeast India's premier institution of 
                  higher learning, playing a crucial role in the educational and cultural development of the region. 
                  Located in the tea capital of India, the university has been a beacon of knowledge and progress 
                  for over 58 years, serving students across the seven sister states.
                </p>
                <p>
                  As a UGC-recognized state university with NAAC A accreditation, Dibrugarh University has 
                  pioneered distance education in Northeast India since 1988. The university's distance education 
                  programs are designed to bridge educational gaps in remote areas while preserving and promoting 
                  the rich cultural heritage of the region.
                </p>
                <p>
                  The university takes pride in its unique position as an educational institution that understands 
                  the regional context, offers courses in local languages, and maintains strong connections with 
                  the oil and gas industry that dominates the regional economy. This regional expertise translates 
                  into better career opportunities for graduates within Northeast India.
                </p>
                <p>
                  With its commitment to affordable, quality education and focus on regional development, 
                  Dibrugarh University continues to be the preferred choice for students seeking higher education 
                  while staying connected to their cultural roots and regional opportunities.
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
                  <div className={styles.statNumber}>58+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>35+</div>
                  <div className={styles.statLabel}>Years Distance Education</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>70%</div>
                  <div className={styles.statLabel}>Regional Placement Rate</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>12</div>
                  <div className={styles.statLabel}>Distance Programs</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore Dibrugarh University's comprehensive range of distance education programs
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
                <strong>Note:</strong> Most affordable fees in Northeast India with installment facilities. 
                Courses available in English and Assamese languages. Study materials provided free of cost.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple admission process for Dibrugarh University distance education programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Application Form</h3>
                    <p>Download and fill the application form from university website or collect from authorized study centers across Northeast India.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Document Submission</h3>
                    <p>Submit completed form with required documents including mark sheets, certificates, and photographs to designated centers.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Pay admission fee through bank challan or online payment. Installment options available for economically weaker students.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation & Study Materials</h3>
                    <p>Receive admission confirmation and collect study materials from assigned study center or through postal service.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Academic Support</h3>
                    <p>Attend orientation sessions, contact classes, and access academic counseling services for successful completion.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Distance Programs (BA/B.Com):</strong> 12th pass from recognized board with minimum pass marks. Courses available in English and Assamese languages</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Distance Programs (MA/M.Com/MBA):</strong> Bachelor's degree in relevant subject with minimum 50% marks from UGC recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Regional Benefits:</strong> Study centers across seven sister states of Northeast India. Regional quota benefits and cultural integration for local students</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>UGC-recognized state university degrees valid throughout India</li>
                  <li>Study centers available across all seven sister states of Northeast India</li>
                  <li>Regional quota benefits and cultural integration for local students</li>
                  <li>Courses available in English and Assamese languages</li>
                  <li>Documents required: 10th & 12th certificates, graduation degree, caste certificate (if applicable)</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Regional Opportunities</h2>
              <p className={styles.sectionDesc}>
                Strong placement support with focus on regional opportunities in Northeast India
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>70%</h3>
                  <p>Regional Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹6 LPA</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>58+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100+</h3>
                  <p>Regional Partners</p>
                </div>
              </div>

              <h3>Major Employment Partners</h3>
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
                Get answers to commonly asked questions about Dibrugarh University distance education
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
                <h3>Ready to join Northeast India's premier university?</h3>
                <p>Our regional counselors understand your local needs and aspirations</p>
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
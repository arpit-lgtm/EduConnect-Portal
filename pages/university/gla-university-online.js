import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/UniversityDetail.module.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function GLAUniversityOnline() {
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
          const glaData = window.universityDatabase.find(uni => 
            uni.id === 'gla-university' || uni.name.toLowerCase().includes('gla')
          );
          setUniversityData(glaData);
        } catch (error) {
          console.error('Error loading university data:', error);
        }
      }
    };
    loadData();
  }, []);

  const coursesData = [
    { name: 'MBA', fee: 120000, duration: '2 Years', specializations: '12 Specializations' },
    { name: 'MBA (Executive)', fee: 140000, duration: '2 Years', specializations: '8 Specializations' },
    { name: 'MCA', fee: 180000, duration: '2 Years', specializations: '6 Specializations' },
    { name: 'MA', fee: 60000, duration: '2 Years', specializations: '15 Subjects' },
    { name: 'MSc', fee: 80000, duration: '2 Years', specializations: '10 Specializations' },
    { name: 'MCom', fee: 70000, duration: '2 Years', specializations: '5 Specializations' },
    { name: 'BBA', fee: 150000, duration: '3 Years', specializations: '8 Specializations' },
    { name: 'BCA', fee: 165000, duration: '3 Years', specializations: '5 Specializations' },
    { name: 'BCom', fee: 90000, duration: '3 Years', specializations: '6 Specializations' },
    { name: 'BA', fee: 75000, duration: '3 Years', specializations: '12 Subjects' },
    { name: 'BSc', fee: 120000, duration: '3 Years', specializations: '8 Specializations' },
    { name: 'Diploma Programs', fee: 45000, duration: '1 Year', specializations: '10 Programs' }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra',
    'IBM', 'Accenture', 'Cognizant', 'Capgemini', 'Microsoft',
    'Amazon', 'Google', 'Adobe', 'Oracle', 'SAP',
    'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank',
    'Deloitte', 'PwC', 'EY', 'KPMG', 'McKinsey & Company',
    'Aditya Birla Group', 'Reliance Industries', 'Tata Group'
  ];

  const keyHighlights = [
    'Established 2010 - Modern university with cutting-edge technology focus',
    'UGC recognized with NBA and NAAC accreditation',
    'Industry-integrated curriculum with 100+ corporate partnerships',
    'State-of-the-art online learning platform with AI-powered features',
    'Strong placement record with 95% success rate and premium packages',
    'Flexible learning options for working professionals and students',
    'Research-oriented approach with innovation and entrepreneurship focus',
    'Global exposure with international collaborations and exchange programs'
  ];

  const approvals = ['UGC', 'NAAC', 'NBA', 'AICTE', 'BCI'];
  
  const accreditation = 'NAAC A+ (CGPA 3.4)';
  const nirfRank = 'NIRF Band 101-150';

  const faqs = [
    {
      question: 'How does GLA University online learning platform work?',
      answer: 'GLA University offers a sophisticated online learning platform with live interactive classes, recorded lectures, digital library access, virtual labs, and AI-powered learning analytics for personalized education experience.'
    },
    {
      question: 'Are GLA University online degrees recognized by employers?',
      answer: 'Yes, GLA University online degrees are UGC-recognized and carry the same value as on-campus degrees. Our strong industry partnerships and placement record demonstrate employer acceptance and recognition.'
    },
    {
      question: 'What support is available for online students?',
      answer: 'Online students receive comprehensive support including dedicated academic counselors, 24/7 technical support, career guidance, industry mentorship, and access to all university facilities during visits.'
    },
    {
      question: 'How are practical sessions conducted for technical programs?',
      answer: 'Technical programs include virtual labs, simulation software, hands-on projects, industry internships, and periodic campus visits for practical exposure and laboratory work.'
    },
    {
      question: 'What are the career prospects after GLA University online programs?',
      answer: 'Graduates find opportunities in leading MNCs, startups, government sector, and entrepreneurship. Our placement cell provides continuous support with 95% success rate and packages ranging from 4-25 LPA.'
    },
    {
      question: 'Can I switch between online and offline modes during the course?',
      answer: 'GLA University offers flexible learning options allowing students to attend some classes on campus when convenient, providing a blended learning experience for optimal education outcomes.'
    }
  ];

  return (
    <>
      <Head>
        <title>GLA University Online - Modern Education with Technology Excellence | EduConnect</title>
        <meta name="description" content="Study at GLA University Online with cutting-edge technology and industry integration. UGC-recognized programs with 95% placement success. MBA, MCA, BBA and more." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/GLA University.png" 
                alt="GLA University Logo" 
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
                  <span className={styles.infoValue}>📍 Mathura, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.4/5</span>
                    <span className={styles.reviews}>(1,245 Reviews)</span>
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
              <h2>About GLA University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  GLA University, established in 2010, represents the new generation of Indian universities 
                  that seamlessly blend traditional academic excellence with cutting-edge technology and 
                  industry integration. Located in the historic city of Mathura, the university has quickly 
                  emerged as a leading institution known for its innovation-driven approach to education 
                  and strong industry partnerships.
                </p>
                <p>
                  The university's online programs leverage state-of-the-art learning management systems, 
                  AI-powered educational tools, and virtual reality experiences to deliver world-class 
                  education that matches global standards. With UGC recognition and multiple accreditations, 
                  GLA University ensures that its online students receive the same quality education and 
                  degree value as campus-based learners.
                </p>
                <p>
                  What sets GLA University apart is its unique focus on industry readiness and practical 
                  application. The curriculum is designed in collaboration with industry experts, ensuring 
                  that graduates are immediately employable and equipped with the skills demanded by modern 
                  employers. The university's extensive network of corporate partnerships provides students 
                  with real-world exposure and excellent placement opportunities.
                </p>
                <p>
                  GLA University's commitment to research, innovation, and entrepreneurship creates an 
                  ecosystem where students are encouraged to think creatively, solve complex problems, and 
                  develop leadership skills. The online programs maintain this culture through virtual 
                  innovation labs, online research projects, and digital collaboration platforms.
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
                  <div className={styles.statNumber}>14+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>95%</div>
                  <div className={styles.statLabel}>Placement Success</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Industry Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>12</div>
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
                Industry-aligned programs designed for the modern digital economy
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
                <strong>Industry Advantage:</strong> All programs include live projects, industry mentorship, 
                and certification courses. Advanced online learning platform with AI-powered personalized learning paths.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Streamlined online admission process for GLA University programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Complete online application form on GLA University portal. Upload required documents and pay application fee through secure payment gateway.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Assessment</h3>
                    <p>University reviews application for eligibility criteria. Some programs may require entrance test or personal interview conducted online.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Merit List & Selection</h3>
                    <p>Merit list published based on academic performance and entrance test scores. Selected candidates receive admission offer letter via email.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Confirmation</h3>
                    <p>Pay admission fees online to confirm seat. Receive student login credentials and access to online learning platform.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Program Commencement</h3>
                    <p>Attend virtual orientation session and begin classes on the advanced online platform with full academic support.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>UGC-recognized degrees with same value as on-campus programs</li>
                  <li>Advanced online learning platform with live classes and virtual labs</li>
                  <li>Flexible scheduling options for working professionals</li>
                  <li>Industry-integrated curriculum with practical exposure</li>
                  <li>Documents required: 10th & 12th certificates, graduation degree, work experience certificate (if applicable)</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement Excellence & Industry Partnerships</h2>
              <p className={styles.sectionDesc}>
                Outstanding placement record with leading companies across industries
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>95%</h3>
                  <p>Placement Success</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹15 LPA</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹25 LPA</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100+</h3>
                  <p>Hiring Partners</p>
                </div>
              </div>

              <h3>Top Recruiting Companies</h3>
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
                Get answers to commonly asked questions about GLA University online programs
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
                <h3>Ready to join the future of education?</h3>
                <p>Experience cutting-edge online learning with industry integration</p>
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
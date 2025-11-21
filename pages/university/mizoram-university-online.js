import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const MizoramUniversityOnline = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [universityData, setUniversityData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Load university database
    const loadData = async () => {
      if (window.universityDatabase) {
        const data = window.universityDatabase.find(
          uni => uni.id === 'mizoram-university-online'
        );
        setUniversityData(data);
      } else {
        const response = await fetch('/api/comprehensive-database');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        
        const data = window.universityDatabase.find(
          uni => uni.id === 'mizoram-university-online'
        );
        setUniversityData(data);
      }
    };
    
    loadData();
  }, []);

  const coursesData = [
    { name: 'Online MBA', fee: 50700, duration: '2 Years', specializations: 7 },
    { name: 'Online B.Com', fee: 36000, duration: '3 Years', specializations: 2 },
    { name: 'Online BBA', fee: 45000, duration: '3 Years', specializations: 2 },
    { name: 'Online M.Com', fee: 43400, duration: '2 Years', specializations: 1 },
    { name: 'Online MA', fee: 29200, duration: '2 Years', specializations: 2 },
    { name: 'Online BCA', fee: 64700, duration: '3 Years', specializations: 1 },
    { name: 'Master of Social Work', fee: 25200, duration: '2 Years', specializations: 1 },
    { name: 'Certificate in Foreign Languages', fee: 10200, duration: '6 Months', specializations: 2 },
    { name: 'Online Diploma Programs', fee: 6900, duration: '3-6 Months', specializations: 2 },
    { name: 'Online Certificate Programs', fee: 6900, duration: '3-6 Months', specializations: 4 },
    { name: 'Executive Program in Finance Management', fee: 9900, duration: '1 Year', specializations: 1 },
    { name: 'Executive Program in HRM', fee: 9900, duration: '1 Year', specializations: 1 },
    { name: 'Executive Program in Marketing', fee: 9900, duration: '1 Year', specializations: 1 },
    { name: 'Executive Program in Operations', fee: 9900, duration: '1 Year', specializations: 1 },
    { name: 'Executive Program in General Management', fee: 6900, duration: '6 Months', specializations: 1 },
    { name: 'Executive Program in IT Management', fee: 9900, duration: '1 Year', specializations: 1 },
    { name: 'Executive Program in Retail Management', fee: 9900, duration: '1 Year', specializations: 1 },
    { name: 'Online Executive PG Diploma', fee: 33000, duration: '1 Year', specializations: 4 },
    { name: 'Executive Program in Banking & Finance', fee: 9900, duration: '1 Year', specializations: 1 },
  ];

  const keyHighlights = [
    'UGC-sanctioned federally-administered institution chartered July 2nd, 2001',
    'NAAC A Grade certification validating superior academic quality standards',
    'National Institutional Ranking Framework position 78 among premier Indian universities',
    'Apprenticeship initiatives enabling simultaneous learning, income generation, and employment',
    'Innovative apprenticeship-integrated credentials where learners finance tuition through earned stipends',
    'Diverse academic portfolio: Apprenticeship, Degree, Executive, Bachelor, and Certificate programs',
    'Sophisticated Learning Management System infrastructure facilitating seamless digital education',
    'Internationally-recognized faculty complemented by seasoned educators and specialist mentors',
    'Comprehensive career development services including employment search and placement facilitation',
    'Industry specialist interactions providing real-world experience and professional networking'
  ];

  const approvals = ['UGC', 'NIRF', 'NAAC A'];
  const nirfRank = 'Rank 78';
  const accreditation = 'NAAC A';

  const placementPartners = [
    'Google', 'ICICI Bank', 'Amazon', 'Capgemini', 'Cognizant', 'Flipkart', 
    'Infosys', 'KPMG', 'Nestle', 'Tata Power', 'Wipro', 'TCS'
  ];

  const faqs = [
    {
      question: 'Is Mizoram University recognized by the Government?',
      answer: 'Affirmative. Mizoram University functions as a federally-administered institution chartered July 2nd, 2001, operating under UGC, Government of India governance. The establishment maintains complete governmental recognition and possesses NAAC A Grade certification with National Institutional Ranking Framework position 78, establishing its status among the nation\'s premier academic institutions.'
    },
    {
      question: 'What is the difference between a regular degree and an apprenticeship program?',
      answer: 'Conventional digital credentials emphasize academic instruction delivered through virtual classroom environments, whereas apprenticeship-integrated programs synthesize scholarly learning with practical vocational training. Within apprenticeship frameworks, participants receive stipend compensation during their studies, enabling them to finance their credential through inaugural-year earnings accumulated throughout program participation.'
    },
    {
      question: 'Does the online degree have the same value as an offline degree?',
      answer: 'Certainly. Digital credentials issued by Mizoram University maintain equivalent professional recognition compared to traditional on-campus qualifications. The institution holds UGC authorization, NAAC A accreditation, and NIRF ranking status. Educational quality standards, curricular content, instructional faculty, and assessment methodologies adhere to identical benchmarks across both digital and traditional learning modalities.'
    },
    {
      question: 'Can international students take admission to Mizoram University Online?',
      answer: 'Indeed, international learners qualify for enrollment in Mizoram University Online academic programs. The institution administers curricula structured for both domestic and international participant populations. International applicants should verify specific qualification prerequisites and documentation obligations via the official institutional web portal.'
    },
    {
      question: 'Are there any entrance exams for admission?',
      answer: 'No, enrollment procedures at Mizoram University Online operate on direct admission protocols without mandatory entrance examinations. Candidate selection derives from eligibility criteria fulfillment and application process completion. Prospective learners should access the official website, identify their desired curriculum, complete the application interface, submit requisite documentation, and finalize tuition payment.'
    },
    {
      question: 'What career support is provided?',
      answer: 'Mizoram University delivers comprehensive career development services encompassing: Employment search facilitation and individualized placement assistance, industry specialist interactions for professional networking, job-readiness competency training with real-world application experience, access to 300+ recruitment partner organizations, 50% average compensation enhancement for program completers, and 3X increased interview opportunity generation through placement services.'
    }
  ];

  return (
    <>
      <Head>
        <title>Mizoram University Online - Apprenticeship & Online Degree Programs</title>
        <meta name="description" content="Explore Mizoram University's UGC-approved online programs. NIRF Rank 78, NAAC A grade. Unique apprenticeship-linked degrees, MBA, BBA, BCA, BCom with placement support." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Mizoram University.png" 
                alt="Mizoram University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Aizawl, Mizoram</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.1/5</span>
                    <span className={styles.reviews}>(268 Reviews)</span>
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
              <h2>About Mizoram University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Chartered on July 2nd, 2001, Mizoram University operates as a federally-administered institution under 
                  the governance of the University Grants Commission, Government of India. The establishment maintains 
                  National Assessment & Accreditation Council validation with NAAC A Grade certification and occupies 
                  position 78 in the National Institutional Ranking Framework, securing its standing among the nation's 
                  premier academic institutions.
                </p>
                <p>
                  The institution delivers innovative digital learning programs specifically engineered to accelerate 
                  professional development through comprehensive educational pathways facilitating career advancement. 
                  Mizoram University Online administers five distinct program categories: Apprenticeship, Degree, 
                  Executive, Bachelor, and Certificate credentials, each meticulously structured to address diverse 
                  professional and educational objectives.
                </p>
                <p>
                  Among the university's distinctive academic offerings stands the Apprenticeship Embedded Online Degree 
                  initiative, which empowers learners to finance their credential through inaugural-year stipends earned 
                  during digital apprenticeship participation. This groundbreaking methodology enables participants to 
                  simultaneously acquire knowledge, generate income, and gain employment experience, integrating academic 
                  instruction with hands-on vocational training in specialized programs including B.Com in E-Commerce & 
                  E-Accounting and BBA in E-Business.
                </p>
                <p>
                  The academic portfolio encompasses comprehensive curricula across Marketing, Finance, Logistics, Supply 
                  Chain Management, Entrepreneurship, Big Data Analytics, and Commerce disciplines. Executive diploma and 
                  certificate credentials address IT-focused specializations including Application Development, Artificial 
                  Intelligence, Computer Applications, Cyber Security, and additional technology domains. All programs 
                  utilize sophisticated Learning Management System infrastructure, supported by internationally-recognized 
                  faculty, seasoned instructional professionals, and specialist mentors committed to delivering exceptional 
                  educational value.
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
                  <div className={styles.statNumber}>78</div>
                  <div className={styles.statLabel}>NIRF Ranking</div>
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
                Explore diverse online programs including Apprenticeship, Degree, Executive, and Certificate courses
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
                        <td>{typeof course.specializations === 'number' ? `${course.specializations}+ Options` : course.specializations}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{typeof course.fee === 'number' ? course.fee.toLocaleString() : course.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Apprenticeship programs allow students to earn stipend while studying, 
                potentially covering degree fees through apprenticeship earnings. Financial aid and scholarships available.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple online admission process with no entrance examination required
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>Go to Mizoram University Online official website and explore available programs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Click Apply Now</h3>
                    <p>Select "Apply Now" based on your program specification: Domestic, Abroad, or Apprenticeship.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Select Course & Fill Application</h3>
                    <p>Choose your online course and proceed to application form. Fill personal, academic, and professional details accurately.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Complete Registration Payment</h3>
                    <p>After being directed to payment page, complete the registration payment through secure gateway.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Receive Confirmation</h3>
                    <p>University confirms admission via email once the admission process is complete. Access LMS and begin learning journey.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BBA/BCA/BCom):</strong> 10+2 or equivalent from recognized board</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MBA/MCom/MA/MSW):</strong> Bachelor's degree from recognized university</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Apprenticeship Programs:</strong> Educational qualifications plus willingness to work during study period</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive/Certificate Programs:</strong> Varies by program - generally graduation or relevant work experience</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>No entrance examination required for admission</li>
                  <li>Create ABC ID as per UGC guidelines for online programs</li>
                  <li>Admissions available for domestic and international students</li>
                  <li>Apprenticeship programs enable earning while learning</li>
                  <li>Scholarships and fellowships offered to eligible students</li>
                  <li>Online degree holds same value as regular on-campus degree</li>
                  <li>Required documents: Academic certificates, ID proof, photographs</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Central Placement Cell established in 2012 offering comprehensive career support and job opportunities
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>Since 2012</h3>
                  <p>Dedicated Placement Cell</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Active Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>More Interview Opportunities</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Job search and one-on-one placement support for every student</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Industry expert sessions providing real-world insights and networking</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Job-ready skills training with hands-on real-time experience</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Expert guidance and coaching for better industry exposure</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Pre-placement training, seminars, and skill development workshops</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Interview preparation and communication skills enhancement</span>
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
                Find answers to common queries about Mizoram University Online programs
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
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MizoramUniversityOnline;

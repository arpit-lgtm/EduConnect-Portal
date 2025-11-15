import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function MadrasUniversityOnlinePage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC-DEB', 'AICTE', 'NIRF Rank 39', 'NAAC A++', 'NCTE'];
  const accreditation = 'NAAC A++ Grade';
  const nirfRank = '39th (Overall)';

  const keyHighlights = [
    'Established in 1857 - Oldest university in India',
    'Known as "Mother University" of South India',
    'NAAC A++ accredited with highest grade',
    'NIRF Rank 39 in overall category 2023',
    'UGC-DEB approved online and distance education',
    '25+ years experience in online/distance mode',
    '75+ courses offered in distance mode',
    'Located in Chennai, Tamil Nadu'
  ];

  const coursesData = [
    { name: 'Online MBA', specializations: '8', duration: '2 Years', fee: 48000 },
    { name: 'Online M.Com', specializations: '5', duration: '2 Years', fee: 32000 },
    { name: 'Online MA', specializations: '12', duration: '2 Years', fee: 28000 },
    { name: 'Online M.Sc', specializations: '8', duration: '2 Years', fee: 35000 },
    { name: 'Online BBA', specializations: '4', duration: '3 Years', fee: 42000 },
    { name: 'Online B.Com', specializations: '5', duration: '3 Years', fee: 30000 },
    { name: 'Online BA', specializations: '15', duration: '3 Years', fee: 27000 },
    { name: 'Online BSc', specializations: '10', duration: '3 Years', fee: 33000 }
  ];

  const placementPartners = [
    'Amazon', 'Cognizant', 'HCL', 'KPMG', 'PWC',
    'Tata', 'TCS', 'Wipro', 'Infosys', 'Tech Mahindra'
  ];

  const faqs = [
    {
      question: 'What are the top part-time courses offered by government-approved universities in India?',
      answer: 'Top part-time courses include Online MBA, M.Com, MA, M.Sc, BBA, B.Com, BA, and BSc programs offered by UGC-DEB approved universities. These programs allow working professionals to pursue higher education while continuing their employment.'
    },
    {
      question: 'Is Madras University valid?',
      answer: 'Yes, Madras University is one of the oldest and most reputed universities in India, established in 1857. It is UGC recognized, NAAC A++ accredited, and NIRF ranked. Degrees from Madras University have pan-India validity and are recognized for higher education and employment.'
    },
    {
      question: 'Does Madras University offer an online degree?',
      answer: 'Yes, Madras University offers UGC-DEB approved online degree programs including MBA, M.Com, MA, M.Sc at postgraduate level and BBA, B.Com, BA, BSc at undergraduate level. These programs have the same validity as regular on-campus degrees.'
    },
    {
      question: 'What is the last date for Madras University admission in 2023?',
      answer: 'Admission dates vary by program and intake. Madras University typically has multiple intake sessions throughout the year. Visit the official university website or contact the distance education center for current admission deadlines and application procedures.'
    },
    {
      question: 'How to contact Madras University Online?',
      answer: 'You can contact Madras University through their official website, directorate of distance education office in Chennai, or dedicated student helpline. The university provides comprehensive support including printed study materials, online portal, doubt clearing sessions, and student helpdesk.'
    }
  ];

  return (
    <>
      <Head>
        <title>Madras University Online - UGC-DEB Approved NAAC A++ | Online MBA BA B.Com | MBA NINJA</title>
        <meta name="description" content="Madras University Online - Established 1857, Mother University of South India. UGC-DEB approved online programs. NAAC A++, NIRF Rank 39. Online MBA, M.Com, MA, BA, B.Com courses. 25+ years experience." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/MADRAS UNIVERSITY.png" 
                alt="Madras University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Chennai, Tamil Nadu</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.0/5 (274 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {approvals.map(approval => (
                      <span key={approval} className={styles.badge}>{approval}</span>
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
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Madras University Online</h2>
              
              <div className={styles.aboutContent}>
                <p>
                  Madras University is one of the prominent and most reputed universities in the nation, 
                  known for its quality education and rich heritage. Established in 1857 in Chennai, Tamil 
                  Nadu, it is also known as the mother university of the majority of oldest universities in India.
                </p>

                <p>
                  The university expanded through the nineteenth century across the southern region of India, 
                  giving birth to some of the oldest and most prominent universities such as Mysore University 
                  (1916), Osmania University (1918), Andhra University (1926), Annamalai University (1929), 
                  Travancore University (1937), Sri Venkateswara University (1954), and many more.
                </p>

                <p>
                  Madras University has been known for its quality education with the main objective to reach 
                  the unreached and spread education to every individual willing to pursue further studies. 
                  The university offers online and distance modes of education, providing leverage to students 
                  from remote areas who are unable to pursue studies due to different hindrances. Online 
                  education has turned out to be a boon, enabling affordable and accessible higher education.
                </p>

                <h3>Key Highlights</h3>
                <div className={styles.highlightsList}>
                  {keyHighlights.map((highlight, index) => (
                    <div key={index} className={styles.highlightItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <h3>University Excellence</h3>
                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>1857</div>
                    <div className={styles.statLabel}>Established</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>39</div>
                    <div className={styles.statLabel}>NIRF Rank</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>75+</div>
                    <div className={styles.statLabel}>Distance Courses</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>A++</div>
                    <div className={styles.statLabel}>NAAC Grade</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              
              <p className={styles.sectionDesc}>
                Madras University offers UGC-DEB approved online degree programs across multiple disciplines. 
                Programs are designed to provide quality education with the same validity as regular on-campus 
                degrees, enabling working professionals and students to pursue higher education flexibly.
              </p>

              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Specializations</th>
                      <th>Duration</th>
                      <th>Total Fee (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, index) => (
                      <tr key={index}>
                        <td>{course.name}</td>
                        <td>{course.specializations === '1' ? '1 Option' : `${course.specializations}+ Options`}</td>
                        <td>{course.duration}</td>
                        <td>₹{course.fee.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className={styles.courseNote}>
                <strong>Note:</strong> All online programs from Madras University are UGC-DEB approved and have 
                the same validity as regular degrees. Fees can be paid in installments. Contact the directorate 
                of distance education for detailed program information and current fee structure.
              </p>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                Students willing to get admission at Madras University Online are requested to follow the 
                comprehensive admission process. Admissions are conducted on direct basis with no entrance 
                exams for most programs.
              </p>

              <div className={styles.stepContent}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>Visit the official website of Madras University and navigate to the admission section for online/distance programs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Registration</h3>
                    <p>Register on the admission portal with mobile number and email. Receive application number and password for login.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Login to admission portal, fill application form with accurate details, and upload all required documents (educational certificates, ID proof, photographs).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Review & Submit</h3>
                    <p>Carefully review the application for any errors or missing information. Submit the application after thorough verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Pay the application and program fee through available online payment methods. Save the confirmation mail and payment receipt for future reference.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online UG Programs (BBA/B.Com/BA/BSc):</strong> 10+2 from recognized board with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online PG Programs (MBA/M.Com/MA/M.Sc):</strong> Bachelor's degree from recognized university in relevant discipline</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Working Professionals:</strong> Can pursue programs while continuing employment - flexible learning schedule</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> No upper age limit for online/distance programs - suitable for all age groups</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Create ABC ID and DEB ID as per latest UGC guidelines for online program admission</li>
                  <li>Admissions conducted twice a year in July/August and January/February sessions</li>
                  <li>Degrees obtained through online mode are equivalent to traditional on-campus degrees</li>
                  <li>Study materials provided in both printed and digital formats for flexible learning</li>
                  <li>Examinations conducted at authorized centers - both online and offline modes available</li>
                  <li>100% fee refund policy within specified period as per UGC guidelines</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements & Career Support</h2>
              <p className={styles.sectionDesc}>
                Madras University assists students throughout their academic journey and focuses on providing 
                better future opportunities. The dedicated placement cell helps students in upskilling with 
                essential skills, personality development, and connecting them with potential employers across 
                various industries.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>💼</div>
                  <h3>Career Guidance</h3>
                  <p>Comprehensive career counseling and personality development programs</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>📈</div>
                  <h3>Average Salary Hike</h3>
                  <p>50% average salary increase for students post-completion</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>🎯</div>
                  <h3>Skill Development</h3>
                  <p>Regular workshops, seminars, and quiz competitions for knowledge enhancement</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>🌐</div>
                  <h3>Industry Connect</h3>
                  <p>300+ hiring partners across IT, Banking, Manufacturing, and Services sectors</p>
                </div>
              </div>

              <h3>Our Placement Partners</h3>
              <div className={styles.partnersGrid}>
                {placementPartners.map((partner, index) => (
                  <div key={index} className={styles.partnerCard}>{partner}</div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Section */}
          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Find answers to common queries about Madras University programs, admissions, and career opportunities
              </p>

              <div className={styles.faqsList}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3><span className={styles.qIcon}>Q:</span> {faq.question}</h3>
                    <p><span className={styles.aIcon}>A:</span> {faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className={styles.contactCta}>
                <h3>Still have questions?</h3>
                <p>Contact our admissions team for personalized guidance and detailed information about Madras University online programs.</p>
                <Link href="/contact" className={styles.ctaButton}>Contact Admissions Team</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

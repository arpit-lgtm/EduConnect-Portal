import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function MaharishiMarkandeshwarUniversityOnlinePage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC-DEB', 'AICTE', 'AIU', 'NIRF Rank 94', 'NAAC A++', 'ISO'];
  const accreditation = 'NAAC A++ Grade';
  const nirfRank = '94th (Overall)';

  const keyHighlights = [
    'Deemed-to-be university established in 1993',
    'UGC-DEB approved for online education',
    'NAAC A++ accredited with ISO certification',
    'NIRF Rank 94 in overall category',
    'Located in Mullana, Haryana',
    '30+ years of educational excellence',
    'Dedicated Centre for Distance and Online Education',
    'LMS-powered online courses with live and recorded lectures'
  ];

  const coursesData = [
    { name: 'Online BBA', specializations: '4', duration: '3 Years', fee: 105000 },
    { name: 'Online BCA', specializations: '1', duration: '3 Years', fee: 90000 },
    { name: 'Online B.Com', specializations: '5', duration: '3 Years', fee: 105000 },
    { name: 'Online B.Com Honours', specializations: '1', duration: '3 Years', fee: 105000 },
    { name: 'Online MBA', specializations: '9', duration: '2 Years', fee: 110000 },
    { name: 'Online M.Sc', specializations: '1', duration: '2 Years', fee: 70000 },
    { name: 'Online MCA', specializations: '1', duration: '2 Years', fee: 84000 }
  ];

  const placementPartners = [
    'ICICI Bank', 'Airtel', 'Axis Bank', 'Berger', 'HDFC Bank',
    'ITC', 'Cognizant', 'Infosys', 'WIPRO', 'TCS'
  ];

  const faqs = [
    {
      question: 'Does Maharishi Markandeshwar University offer placement for online courses?',
      answer: 'Yes, MMU offers robust placement support for online courses. The placement cell partners with companies like Cognizant, Infosys, ICICI Bank, WIPRO, and numerous others to provide excellent placement opportunities to students. The university has an efficient placement support system.'
    },
    {
      question: 'Can I get a scholarship for online course at MMDU?',
      answer: 'MMU offers various scholarships and fellowships for eligible students. Scholarships are available based on merit, entrance exam scores, and financial need. Students can inquire about specific scholarship programs during the admission process.'
    },
    {
      question: 'Is there LMS support at Maharishi Markandeshwar Online?',
      answer: 'Yes, MMU online education is LMS (Learning Management System) powered, which means students have access to all course content at one place. The platform provides live online lectures, recorded sessions, study materials, assignments, and interactive forums for a comprehensive learning experience.'
    },
    {
      question: 'Is the admission for MMDU online courses conducted online?',
      answer: 'Yes, the admission process for MMU online courses is fully conducted in online mode. Students can visit the official website, click "Enroll Now," get shortlisted by admission experts, pay the program fees, and receive confirmation via email without visiting the campus.'
    },
    {
      question: 'Can I give exams online or do I need to visit an exam centre?',
      answer: 'MMU has provisions for fully online proctored exams for online courses, which means students can take the exam from any location of their convenience. The exams are proctored live online using Artificial Intelligence to ensure integrity and fairness.'
    },
    {
      question: 'Is Maharishi Markandeshwar approved to provide online courses?',
      answer: 'Yes, Maharishi Markandeshwar University is approved by UGC-DEB (University Grants Commission - Distance Education Bureau) for online education. The university is also accredited by NAAC (A++), AICTE, AIU, and has NIRF Rank 94, ensuring quality and recognition of online programs.'
    }
  ];

  return (
    <>
      <Head>
        <title>MMU Online - Maharishi Markandeshwar University | UGC-DEB Approved NAAC A++ | MBA NINJA</title>
        <meta name="description" content="MMU Online - Maharishi Markandeshwar Deemed-to-be University. UGC-DEB approved online MBA, BBA, BCA, B.Com, MCA programs. NAAC A++, NIRF Rank 94. LMS-powered learning. Fully online proctored exams." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/MAHARISHI MARKANDESHWAR UNIVERSITY.png" 
                alt="Maharishi Markandeshwar University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Mullana, Haryana</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.7/5 (477 Reviews)</span>
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
              <h2>About Maharishi Markandeshwar University (MMU) Online</h2>
              
              <div className={styles.aboutContent}>
                <p>
                  Maharishi Markandeshwar University, located in Mullana, Haryana, was established in 1993 
                  under the guidance of Sh. Tarsem Garg. MMU is a deemed-to-be university of India that has 
                  received UGC approval for online education, providing quality higher education to students 
                  across the nation.
                </p>

                <p>
                  Starting as an institute of higher education providing graduation level education, the 
                  university has expanded massively over the years. It now provides courses across a very 
                  large domain of disciplines in online, offline, and distance modes. MMU has a dedicated 
                  Centre for Distance and Online Education responsible for handling all operations of online 
                  and distance programs.
                </p>

                <p>
                  The university has obtained numerous accreditations and recognitions including UGC-DEB, 
                  NAAC (A++ rating), AICTE, AIU, ACU, and ISO certification. MMU's highly qualified faculty, 
                  futuristic technological support, and dedicated administration make the learning experience 
                  comprehensive, irrespective of the mode of learning.
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
                    <div className={styles.statNumber}>1993</div>
                    <div className={styles.statLabel}>Established</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>94</div>
                    <div className={styles.statLabel}>NIRF Rank</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>20+</div>
                    <div className={styles.statLabel}>Accreditations</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>A++</div>
                    <div className={styles.statLabel}>NAAC Rating</div>
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
                MMU offers UGC-DEB approved online programs across undergraduate and postgraduate levels. 
                All courses are delivered through a blend of live online lectures and recorded sessions, 
                with LMS-powered access to comprehensive study materials and resources.
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
                <strong>Note:</strong> All online courses include placement services and career assistance. 
                Programs are industry-relevant with updated curriculum. EMI options available starting from 
                ₹5,000/month for most programs. Contact admissions for detailed fee structure and payment plans.
              </p>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                The admission process for MMU online courses is fully conducted in online mode. Fresh batches 
                generally start in October every year. Admissions are conducted on direct basis with no 
                entrance exams for most programs.
              </p>

              <div className={styles.stepContent}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>Visit the official MMU website and click on "Enroll Now" for online programs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Get Shortlisted</h3>
                    <p>Get shortlisted by the admission expert at Maharishi Markandeshwar University based on your eligibility.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Program Fees</h3>
                    <p>After getting shortlisted, pay the online program fees through available payment methods (EMI options available).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation</h3>
                    <p>After fees are processed by administration, you will be notified through email with login credentials for the LMS.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Start Learning</h3>
                    <p>Access the Learning Management System with your credentials and begin your academic journey with orientation.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online UG (BBA/BCA/B.Com/BA):</strong> 10+2 from recognized board with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online PG (MBA/MCA/M.Sc/M.Com):</strong> Graduation in relevant discipline with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Working Professionals:</strong> Can pursue programs while continuing employment with flexible schedule</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Exams:</strong> Fully online proctored exams using AI - take from any convenient location</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Create ABC ID and DEB ID as per UGC guidelines for admission</li>
                  <li>Admissions conducted twice a year in July/August and January/February (rolling admissions)</li>
                  <li>Degrees obtained through online mode equivalent to traditional on-campus degrees</li>
                  <li>LMS access provides all course content, live lectures, recorded sessions, and assignments at one place</li>
                  <li>EMI options available starting from ₹5,000/month for affordable fee payment</li>
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
                The placement support at MMU for online courses is efficient and robust. The university 
                partners with leading companies like Cognizant, Infosys, ICICI Bank, WIPRO, and numerous 
                others to provide the best placement opportunities to students. All online courses include 
                placement services and career assistance.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>💼</div>
                  <h3>Major Recruiters</h3>
                  <p>564+ companies including Cognizant, Infosys, WIPRO, ICICI Bank, HDFC Bank, and more</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>📈</div>
                  <h3>Salary Package</h3>
                  <p>₹21 Lakh highest package with 91% placement score</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>🎯</div>
                  <h3>Career Growth</h3>
                  <p>50% average salary hike and 3X increase in interview opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>🌐</div>
                  <h3>Hiring Partners</h3>
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
                Find answers to common queries about MMU programs, admissions, and career opportunities
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
                <p>Contact our admissions team for personalized guidance and detailed information about MMU online programs.</p>
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

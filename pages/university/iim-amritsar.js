import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMAmritsar = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 1074000, duration: '2 Years', specializations: 2 },
    { name: 'Online MBA', fee: 1074000, duration: '2 Years', specializations: 2 },
    { name: 'IIM Online Courses', fee: 1074000, duration: '2 Years', specializations: 2 }
  ];

  const keyHighlights = [
    'Established in 2015 as the 15th member of the prestigious IIM family',
    'Inaugurated by Surjit Singh Rakhra, then Minister of Higher Education & Language',
    'NIRF Ranked 47th in Management Category 2024',
    'AACSB and AMBA accredited ensuring global standards',
    'Average placement package of ₹16.51 LPA with consistent growth',
    'Highest package recorded at ₹36.25 LPA',
    '12.85% increase in average package year-on-year',
    '120+ top recruiters partnered with the institute',
    'Approved by AICTE and Association of Indian Universities',
    'Member of Association of Advance Collegiate Schools of Business (AACSB)',
    'Executive MBA with flexible online learning and 5 campus visits over 2 years',
    'MSc in Data Science & Management in collaboration with IIT Ropar',
    'Doctoral programs in 7 specialized disciplines',
    'Strategic location - 5 km from Railway station, 10 km from Airport',
    'Strong focus on global exposure and international collaborations',
    'Financial assistance and scholarships available for deserving students'
  ];

  const approvals = ['AICTE', 'AACSB', 'NIRF', 'AIU'];
  const nirfRank = 'Rank 47 - Management Category';
  const accreditation = 'AACSB & AMBA Accredited';

  const placementPartners = [
    'Google', 'ICICI Bank', 'Amazon', 'Capgemini', 'Deloitte', 'HCL',
    'Infosys', 'L&T', 'Microsoft', 'Paytm', 'TCS', 'Wipro'
  ];

  const faqs = [
    {
      question: 'Does IIM Amritsar offer online programs?',
      answer: 'Yes, IIM Amritsar offers Executive MBA and various online management programs designed for working professionals. These programs provide flexibility with online learning and minimal campus visits.'
    },
    {
      question: 'Are the courses offered by IIM Amritsar in online mode valid?',
      answer: 'Yes, all online programs offered by IIM Amritsar are approved by UGC and hold the same value as regular on-campus programs. The degrees are recognized by employers worldwide.'
    },
    {
      question: 'Can we pursue an online examination at IIM Amritsar?',
      answer: 'Yes, students enrolled in online programs can appear for online examinations. The institute has a strict proctoring system ensuring fair examination conduct. Assignments and projects are also submitted online through the student portal.'
    },
    {
      question: 'Do I have to visit IIM Amritsar to pursue my online course?',
      answer: 'For the Executive MBA program, students are required to visit the campus 5 times over the 2-year duration. This provides hands-on learning experiences, networking opportunities, and face-to-face interactions with faculty and peers.'
    },
    {
      question: 'What courses are offered to students at IIM Amritsar?',
      answer: 'IIM Amritsar offers MBA programs with specializations in Business Analytics and Human Resources, Executive MBA for working professionals, MSc in Data Science and Management (in collaboration with IIT Ropar), Doctoral programs in 7 disciplines, and Integrated B.Tech. and MBA program.'
    },
    {
      question: 'What is the average placement package at IIM Amritsar?',
      answer: 'The average placement package at IIM Amritsar is ₹16.51 LPA, with the highest package reaching ₹36.25 LPA. The institute has witnessed a 12.85% increase in average package over recent years, with 120+ top companies participating in placements.'
    },
    {
      question: 'Is financial assistance available at IIM Amritsar?',
      answer: 'Yes, IIM Amritsar offers various scholarships to deserving students. The institute has a dedicated Financial Aid Committee that manages scholarship awards and financial support. Students can also avail education loans from partner banks to cover their college expenses.'
    },
    {
      question: 'Can I pursue a doctorate program while working?',
      answer: 'Yes, working professionals can pursue doctoral programs at IIM Amritsar. The program structure accommodates working individuals, though specific requirements and time commitments should be verified with the admissions office.'
    },
    {
      question: 'What are the eligibility criteria for Executive MBA at IIM Amritsar?',
      answer: 'For Executive MBA, candidates must have graduated from any recognized university. Working professionals, entrepreneurs, and business owners can apply. There is no age limit and no entrance exam required for online executive programs.'
    },
    {
      question: 'Which top IIMs offer online management courses other than IIM Amritsar?',
      answer: 'Several top IIMs offer online management courses including IIM Ahmedabad, IIM Bangalore, IIM Calcutta, IIM Lucknow, IIM Indore, IIM Kozhikode, and IIM Bodh Gaya. These institutes provide various executive programs, certificate courses, and specialized management programs in online mode for working professionals.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Amritsar - Indian Institute of Management | Online MBA & Executive Programs | MBA NINJA</title>
        <meta name="description" content="IIM Amritsar - 15th member of IIM family. NIRF Rank 47. Est. 2015. AACSB & AMBA accredited. Executive MBA, Online MBA, MSc Data Science programs. Average package ₹16.51 LPA." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Amritsar.png" 
                alt="IIM Amritsar Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => {
                  e.target.src = '/images/universities/default-university.png';
                }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Amritsar, Punjab</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.8/5</span>
                    <span className={styles.reviews}>(357 Reviews)</span>
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
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IIM Amritsar</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIM Amritsar was established in 2015 with the support of the Ministry of Education (formerly known as 
                  Ministry of Human Resource and Development) and the Government of India. It is the 15th member of the 
                  prestigious IIM family and was inaugurated by Surjit Singh Rakhra, then Minister of Higher Education & Language.
                </p>
                <p>
                  IIM Amritsar welcomed its first batch in 2015-2017. The institute is located in Amritsar, Punjab, the 
                  religious land of the Golden Temple. It runs through the Punjab Institute of Technology Building, 
                  conveniently situated just 5 km from the Railway station and 10 km from the airport, making commuting easy.
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
                  <div className={styles.statNumber}>₹16.51 LPA</div>
                  <div className={styles.statLabel}>Average Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>₹36.25 LPA</div>
                  <div className={styles.statLabel}>Highest Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>120+</div>
                  <div className={styles.statLabel}>Recruiting Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NIRF 47</div>
                  <div className={styles.statLabel}>Management Rank</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Courses Offered at IIM Amritsar</h2>
              <p className={styles.sectionDesc}>
                Explore our range of management programs designed for working professionals and aspiring leaders.
              </p>

              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Specializations</th>
                      <th>Duration</th>
                      <th>Total Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.specializations} {course.specializations === 1 ? 'Option' : 'Options'}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Excellence in Management Education:</strong> IIM Amritsar, the 15th member of the IIM family, 
                offers world-class management education with AACSB and AMBA accreditation. Programs include specializations 
                in Business Analytics and Human Resources. The Executive MBA is designed for working professionals with 
                flexible online learning and 5 campus visits over 2 years. The institute also offers MSc in Data Science 
                & Management in collaboration with IIT Ropar, combining data analytics with management expertise. Doctoral 
                programs available in 7 disciplines. Average placement package of ₹16.51 LPA with 120+ top recruiters. 
                Witnessed 12.85% increase in average package. Highest package recorded at ₹36.25 LPA. Financial assistance 
                and scholarships available for deserving students.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                Follow these steps to secure your admission at IIM Amritsar for online and executive programs.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website & Register</h3>
                    <p>Visit the official website of IIM Amritsar and register yourself by entering basic details like name, address, phone number, and email ID. Complete the two-step verification process.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Login & Complete Application</h3>
                    <p>Login to the portal using your credentials and fill out the complete application form. Upload all required documents including mark sheets, ID proof, and photographs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Submit & Attend Interview</h3>
                    <p>After form submission, the institute will review your application and schedule an interview through telephonic or video conferencing mode to assess your suitability.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Receive Offer & Pay Fee</h3>
                    <p>If you successfully clear the interview, you will receive an offer letter with blocking amount. Pay the blocking amount to confirm your seat and complete the admission process.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Eligibility Criteria</h3>
                <ul>
                  <li><strong>For MBA Programs:</strong> Candidates must appear for CAT entrance examination. Admission is based on CAT score, academic credentials, and personal interview performance.</li>
                  <li><strong>For Executive Programs:</strong> Candidates must have graduated from any recognized university. Working professionals, entrepreneurs, and business owners can apply. No age limit. No entrance exam required for online executive programs.</li>
                  <li><strong>Important:</strong> All candidates must create their ABC ID and DEB ID as per latest UGC guidelines. Admissions are now available twice a year - July/August and January/February batches.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements at IIM Amritsar</h2>
              <p className={styles.sectionDesc}>
                IIM Amritsar offers exceptional job and career opportunities with placements in India and abroad, 
                maintaining an impressive track record with 120+ top recruiters.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹16.51 LPA</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹36.25 LPA</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>120+</h3>
                  <p>Recruiting Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>12.85%</h3>
                  <p>Package Increase</p>
                </div>
              </div>

              <h3>Placement Highlights</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>100% placement assistance for all students</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Average package of ₹16.51 LPA with consistent growth year-on-year</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Witnessed 12.85% increase in average package in recent years</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Highest package recorded at ₹36.25 LPA</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Top industries recruiting: Consulting & Strategy, IT, Finance, Analytics</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Partnerships with 120+ leading national and international companies</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Dedicated placement cell providing continuous support and guidance</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Students placed across diverse sectors including FMCG, E-commerce, Banking, and Technology</span>
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

          {activeTab === 'faqs' && (
            <div className={styles.section}>
              <h2>Frequently Asked Questions</h2>
              
              <div className={styles.faqContainer}>
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

export default IIMAmritsar;


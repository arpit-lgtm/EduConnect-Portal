import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function LIBAOnlinePage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['AICTE', 'AIU', 'NIRF Rank 42', 'SAQS', 'NBA'];
  const accreditation = 'NIRF Rank 42 in Management Category';
  const nirfRank = '42nd (Management)';

  const keyHighlights = [
    'NIRF Rank 42 in Management Category 2023',
    'Founded in 1979 with 95-year Loyola College legacy',
    'NBA accredited and AIU recognized institute',
    'Located in Chennai - Hub of business and industry',
    'Executive PG programs for working professionals',
    'Strong industry connections with top MNCs',
    'Values-driven leadership and ethical decision-making focus',
    'Active alumni network across industries and continents'
  ];

  const coursesData = [
    { name: 'Executive PG Program in Business Analytics', specializations: '1', duration: '12 Months', fee: 125000 },
    { name: 'Executive PG Program in HRM', specializations: '1', duration: '12 Months', fee: 120000 },
    { name: 'Executive PG Program in Finance', specializations: '1', duration: '12 Months', fee: 120000 },
    { name: 'Executive PG Program in Marketing', specializations: '1', duration: '12 Months', fee: 120000 },
    { name: 'PGDM (Post Graduate Diploma in Management)', specializations: '6', duration: '2 Years', fee: 480000 },
    { name: 'Executive PGDM', specializations: '4', duration: '15 Months', fee: 350000 }
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Deloitte', 'Facebook', 'IBM',
    'McKinsey and Company', 'Microsoft', 'Coca-Cola', 'Apple',
    'JP Morgan', 'Nike', 'ICICI Bank', 'HDFC Bank', 'RBI',
    'Britannia', 'Asian Paints', 'BYJUS'
  ];

  const faqs = [
    {
      question: 'What courses does LIBA provide?',
      answer: 'LIBA provides management programs including a two-year full-time PGDM, part-time PGDM for working professionals, Executive PG programs in Business Analytics, HRM, Finance, Marketing, and Ph.D. programs. All programs combine theoretical knowledge with practical experience.'
    },
    {
      question: 'What are the entrance requirements for LIBA?',
      answer: 'Candidates must have a bachelor\'s degree from a recognized university with minimum percentage. For PGDM, entrance test scores from CAT/XAT/GMAT/CMAT are required. Working professionals need relevant work experience for executive programs. Selection includes Written Ability Test (WAT) and Personal Interview (PI).'
    },
    {
      question: 'Does LIBA offer scholarships?',
      answer: 'Yes, LIBA offers various scholarships based on merit, entrance exam scores, and financial need. Scholarships are available for economically disadvantaged students and those with exceptional academic performance. Specific scholarship details are provided during the admission process.'
    },
    {
      question: 'What is the student-faculty ratio at LIBA?',
      answer: 'LIBA maintains a favorable student-faculty ratio to ensure personalized attention and quality interaction. The faculty includes experienced academicians and industry practitioners who bring wealth of knowledge to the classroom through case studies, research projects, and thought-provoking discussions.'
    },
    {
      question: 'Does LIBA provide prospects for worldwide exposure?',
      answer: 'Yes, LIBA offers several international exchange and collaboration programs with universities in Asia, Europe, and the United States. These programs allow students to experience different cultures, gain global perspectives, and build international networks that enhance their career prospects.'
    },
    {
      question: 'How is the job placement situation at LIBA?',
      answer: 'LIBA has excellent placement record with dedicated Placement Cell. Top recruiters include Deloitte, RBI, Britannia, ICICI Bank, HDFC Bank, Asian Paints, BYJUS, Google, Amazon, McKinsey, and other MNCs. The institute provides comprehensive placement assistance through industry connections and alumni network.'
    }
  ];

  return (
    <>
      <Head>
        <title>LIBA Online - Loyola Institute of Business Administration | Executive PG Programs | MBA NINJA</title>
        <meta name="description" content="LIBA Chennai - NIRF Rank 42 in Management. Executive PG Programs in Business Analytics, HRM, Finance, Marketing. NBA Accredited. 95-year legacy. Strong industry connections with top MNCs." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/LIBA.png" 
                alt="LIBA Logo"
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
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5 (674 Reviews)</span>
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
              <h2>About Loyola Institute of Business Administration (LIBA)</h2>
              
              <div className={styles.aboutContent}>
                <p>
                  Loyola Institute of Business Administration (LIBA), located in the lively city of Chennai, 
                  is a leading business school noted for its dedication to academic achievement and overall 
                  development of its students. Founded in 1979, LIBA has a solid reputation for developing 
                  corporate leaders that benefit society.
                </p>

                <p>
                  LIBA provides management programs ranging from a two-year full-time Post Graduate Diploma 
                  in Management (PGDM) through part-time PGDM programs for working professionals, executive 
                  education programs, and Ph.D. programs. The institute provides students with the skills and 
                  competencies needed to prosper in today's dynamic business world through a challenging program 
                  that combines theoretical knowledge and practical experience.
                </p>

                <p>
                  LIBA is a component of the prestigious Loyola College with a 95-year history. The institute 
                  is NBA accredited and recognized by the Association of Indian Universities (AIU). LIBA's 
                  faculty includes experienced academicians and industry practitioners who bring expertise and 
                  insights to the classroom, ensuring students have a meaningful learning experience.
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

                <h3>Ranking & Accreditation</h3>
                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>42</div>
                    <div className={styles.statLabel}>NIRF Rank (Management)</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>1979</div>
                    <div className={styles.statLabel}>Established</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>95+</div>
                    <div className={styles.statLabel}>Years Legacy</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>NBA</div>
                    <div className={styles.statLabel}>Accredited</div>
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
                LIBA offers comprehensive management programs designed for both fresh graduates and 
                working professionals. All programs emphasize values-driven leadership and ethical 
                decision-making.
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
                <strong>Note:</strong> Fee structure may vary. Please contact the admissions office for 
                detailed information on program fees, payment schedules, and available scholarships.
              </p>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                The admissions procedure at LIBA is multi-staged to ensure that worthy students are selected. 
                The process evaluates academic performance, entrance test scores, and personal attributes.
              </p>

              <div className={styles.stepContent}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Eligibility Check</h3>
                    <p>Candidates must have a bachelor's degree from a recognized university with minimum percentage. Entrance test scores from CAT/XAT/GMAT/CMAT are required.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Complete the online application form on the official LIBA website. Provide personal, educational information, and work experience (if applicable).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Test Scores</h3>
                    <p>Submit scores from recognized entrance tests such as CAT, XAT, GMAT, or CMAT. These scores are considered during the selection process.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Written Ability Test & Personal Interview</h3>
                    <p>Shortlisted candidates participate in WAT and PI rounds. WAT analyzes writing abilities and analytical thinking, while PI assesses communication skills and program suitability.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Final Selection</h3>
                    <p>Overall performance is evaluated including entrance exam scores, WAT/PI performance, academic record, and work experience. Selected candidates receive notification via email.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PGDM Programs:</strong> Bachelor's degree from recognized university in any discipline with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Entrance Tests:</strong> Valid CAT/XAT/GMAT/CMAT scores required for admission consideration</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive Programs:</strong> Relevant work experience (typically 2-5 years) required for executive PGDM and PG programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Selection Process:</strong> Includes Written Ability Test (WAT), Personal Interview (PI), and overall profile assessment</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Application deadlines vary by program - check official website for current dates</li>
                  <li>Scholarships available based on merit and entrance exam scores</li>
                  <li>International students welcome with valid visa and academic credentials</li>
                  <li>EMI payment options available for program fees</li>
                  <li>Campus facilities include hostels, library, computer labs, and sports infrastructure</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements & Career Support</h2>
              <p className={styles.sectionDesc}>
                LIBA offers students extensive placement assistance through its dedicated Placement Cell. 
                The institute's strong industry connections, business collaborations, and alumni network 
                play an important role in providing students with excellent placement opportunities.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>💼</div>
                  <h3>Top Recruiters</h3>
                  <p>Google, Amazon, Deloitte, McKinsey, Microsoft, JP Morgan, and other leading MNCs</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>📈</div>
                  <h3>Average Salary Hike</h3>
                  <p>50% average salary increase for students post-MBA</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>🎯</div>
                  <h3>Placement Rate</h3>
                  <p>Excellent placement record across industries including Banking, Consulting, IT, FMCG</p>
                </div>
                <div className={styles.placementCard}>
                  <div className={styles.placementIcon}>🌐</div>
                  <h3>Industry Connections</h3>
                  <p>300+ hiring partners and strong alumni network across industries</p>
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
                Find answers to common queries about LIBA programs, admissions, and career opportunities
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
                <p>Contact our admissions team for personalized guidance and detailed information about LIBA programs.</p>
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

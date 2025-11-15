import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function LibertyUniversityPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['AACSB', 'SACSCOC', 'ACBSP', 'CAATE'];
  const accreditation = 'SACSCOC Accredited';
  const nirfRank = 'International University (USA)';

  const keyHighlights = [
    'SACSCOC accredited private Christian university',
    'AACSB accredited business programs',
    'Founded in 1971 in Lynchburg, Virginia',
    'Over 700 programs across residential and online platforms',
    'Ranked among top online universities in the USA',
    'Flexible 100% online doctoral programs',
    'Study from India with internationally recognized US degree',
    'Strong global alumni network of 300,000+ graduates'
  ];

  const coursesData = [
    { name: 'Online DBA (Doctor of Business Administration)', specializations: '1', duration: '3 Years', fee: 2981074 }
  ];

  const placementPartners = [
    'Fortune 500 Companies', 'International Corporations', 'Consulting Firms',
    'Healthcare Organizations', 'Educational Institutions', 'Government Agencies',
    'Technology Companies', 'Financial Services', 'Global NGOs', 'Research Organizations'
  ];

  const faqs = [
    {
      question: 'What programs does Liberty University offer for Indian students?',
      answer: 'Liberty University offers an Online DBA (Doctor of Business Administration) program that Indian students can pursue from India. The program is 100% online, SACSCOC accredited, and provides an internationally recognized US doctoral degree.'
    },
    {
      question: 'Is Liberty University\'s online degree recognized in India?',
      answer: 'Yes, Liberty University is accredited by SACSCOC (Southern Association of Colleges and Schools Commission on Colleges), which is recognized by the US Department of Education. The degree is internationally recognized and can be verified through WES (World Education Services) for use in India.'
    },
    {
      question: 'What is the fee structure for the Online DBA program?',
      answer: 'The Online DBA program has a total fee of approximately ₹29,81,074 for the complete 3-year program. This includes tuition, course materials, and access to online resources. Payment plans and installment options may be available.'
    },
    {
      question: 'What are the admission requirements for the DBA program?',
      answer: 'Admission to the Online DBA program typically requires a master\'s degree (MBA or related field) from a recognized institution, professional work experience, TOEFL/IELTS scores for English proficiency, letters of recommendation, statement of purpose, and updated resume. Specific requirements may vary.'
    },
    {
      question: 'How is the online DBA program delivered?',
      answer: 'The program is delivered 100% online through Liberty University\'s learning management system. Students can access lectures, course materials, assignments, and participate in discussions from anywhere in India. Live sessions are recorded for flexibility across time zones.'
    },
    {
      question: 'Does Liberty University provide career support for international students?',
      answer: 'Yes, Liberty University offers career services including resume building, interview preparation, networking opportunities, and access to the global alumni network of 300,000+ graduates. Career counseling is available for online students worldwide.'
    }
  ];

  return (
    <>
      <Head>
        <title>Liberty University Online | DBA Programs in India | SACSCOC Accredited</title>
        <meta name="description" content="Liberty University Online offers SACSCOC accredited DBA programs for Indian students. Study from India, earn a US doctoral degree. AACSB accredited business school. Apply now!" />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Liberty University.png" 
                alt="Liberty University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Central Virginia, USA</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.4/5</span>
                    <span className={styles.reviews}>(197 Reviews)</span>
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
              <h2>About Liberty University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Liberty University, founded in 1971 by Dr. Jerry Falwell, is a private Christian university located in Lynchburg, Virginia, USA. With a mission to Train Champions for Christ, Liberty has grown to become one of the largest Christian universities in the world and a leading provider of online education in the United States.
                </p>
                <p>
                  Liberty University is regionally accredited by the Southern Association of Colleges and Schools Commission on Colleges (SACSCOC), the highest level of accreditation in the US education system. The business school holds prestigious AACSB accreditation, placing it among the top 5% of business schools globally. With over 700 programs offered across residential and online platforms, Liberty serves more than 100,000 students worldwide.
                </p>
                <p>
                  The university's online programs are delivered through a state-of-the-art learning management system that provides an immersive, interactive learning experience. Students access live lectures, recorded sessions, digital resources, virtual classrooms, and collaborative tools from anywhere in the world. The 100% online format means no physical campus visits are required, making it ideal for Indian students who want to earn a prestigious US degree while continuing to work.
                </p>
                <p>
                  For Indian students, Liberty University degrees can be verified through WES (World Education Services) for employment and further education opportunities in India and globally. Join a thriving network of 300,000+ Liberty University alumni across the globe, including business leaders, entrepreneurs, healthcare professionals, educators, and ministry leaders.
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
                  <div className={styles.statNumber}>300,000+</div>
                  <div className={styles.statLabel}>Global Alumni</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100,000+</div>
                  <div className={styles.statLabel}>Current Students</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Top 5%</div>
                  <div className={styles.statLabel}>AACSB Accredited</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50+ Years</div>
                  <div className={styles.statLabel}>Academic Excellence</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our SACSCOC accredited doctoral programs for international students
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
                        <td>{course.specializations}+ Options</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> 100% online program with flexible scheduling. Payment plans available. All fees include tuition, course materials, and online resources. WES verification available for Indian students.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple and transparent admission process for international students
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Check Eligibility</h3>
                    <p>Master's degree (MBA or related field) from a recognized university, minimum GPA requirements, professional work experience, and English proficiency (TOEFL/IELTS).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Prepare Documents</h3>
                    <p>Academic transcripts (with WES evaluation if required), TOEFL/IELTS scores, letters of recommendation (2-3), statement of purpose, updated resume/CV, and passport copy.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Application</h3>
                    <p>Complete the online application form on Liberty University's admissions portal, upload all required documents, and pay the application fee (non-refundable).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Application Review</h3>
                    <p>The admissions committee reviews your application, academic credentials, work experience, and supporting documents. This typically takes 2-4 weeks.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Receive Admission Decision</h3>
                    <p>Receive your admission decision via email. If accepted, you'll receive an offer letter with enrollment instructions and fee payment details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Enroll & Begin Studies</h3>
                    <p>Accept the offer, complete enrollment formalities, pay the tuition fee, and access the learning management system to begin your doctoral journey.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Educational Qualification:</strong> Master's degree (MBA, M.Com, or related field) from a recognized institution</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Academic Performance:</strong> Minimum GPA of 3.0 on a 4.0 scale (or equivalent)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Work Experience:</strong> Minimum 5 years of professional work experience preferred</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>English Proficiency:</strong> TOEFL score of 80+ (iBT) or IELTS score of 6.5+ (no band below 6.0)</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>WES evaluation of foreign degrees may be required</li>
                  <li>Letters of recommendation must be on official letterhead</li>
                  <li>Statement of purpose should clearly outline research interests</li>
                  <li>Application fee is non-refundable</li>
                  <li>Payment plans and installment options available for tuition</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Comprehensive career services for online doctoral students worldwide
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>300,000+</h3>
                  <p>Alumni Network</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Career Support</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Global</h3>
                  <p>Job Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Lifetime</h3>
                  <p>Access to Services</p>
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
                Find answers to common queries about Liberty University online programs
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
}

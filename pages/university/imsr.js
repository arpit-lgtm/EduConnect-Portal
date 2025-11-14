import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function IMSR() {
  const [activeTab, setActiveTab] = useState('about');

  const courses = [
    { name: 'Online DBA (Doctor of Business Administration)', duration: '3 Years', fee: 120000, mode: 'Online' }
  ];

  const placementPartners = [
    'Google', 'Accenture', 'Capgemini', 'Facebook', 'Fractal',
    'HDFC Bank', 'IBM', 'ITC', 'L&T', 'Microsoft',
    'Amazon', 'TCS', 'Wipro', 'Infosys', 'Deloitte',
    'EY', 'KPMG', 'PWC', 'HCL', 'Oracle', 'SAP'
  ];

  const keyHighlights = [
    'ISO 9001:2015 Certified Institution Ensuring Quality Standards',
    'Established in 2001 with 20+ Years of Distance Education Excellence',
    'Specialized in Online MBA, Executive MBA, and Doctoral Programs',
    '24/7 Study Material Access Through Advanced Digital Platform',
    'Flexible Learning for Working Professionals Without Career Break',
    '300+ Placement Partners Across Diverse Industries',
    'Affordable Fee Structure with Multiple Payment Options',
    'Unique Pathway to Earn "Dr." Title Through Online DBA Program'
  ];

  const faqs = [
    {
      question: 'What are the eligibility criteria for the MBA course?',
      answer: 'Bachelor\'s degree in any discipline with minimum 50% marks from recognized university. Work experience preferred but not mandatory.'
    },
    {
      question: 'Will I receive study material after admission from the Indian Management School and Research Centre?',
      answer: 'Yes, 24/7 accessible study materials through official portal. Can be accessed via mobile, tablet, or laptop anytime, anywhere.'
    },
    {
      question: 'Can I pursue a PhD at another institute or university after completing an MBA program from the Indian Management School and Research Centre?',
      answer: 'Absolutely. IMSR degrees are widely recognized and accepted by universities globally for further doctoral studies and research programs.'
    },
    {
      question: 'When will I receive the mark sheet and program certificate after the examination?',
      answer: 'Mark sheets issued within 45-60 days after examination. Final degree certificate provided after program completion and clearance of all requirements.'
    },
    {
      question: 'Is an Online degree from the Indian Management School and Research Centre recognized by employers?',
      answer: 'Yes, ISO certified institute ensuring quality education standards. Online degrees hold equivalent value to regular degrees in job market.'
    },
    {
      question: 'How can I pay my fees at the Indian Management School and Research Centre?',
      answer: 'Multiple payment options available: Credit/Debit cards, Net Banking, Cash, Cheque, DD, or NEFT transfer for convenient fee submission.'
    }
  ];

  return (
    <>
      <Head>
        <title>IMSR - Indian Management School and Research Centre</title>
        <meta name="description" content="Indian Management School and Research Centre (IMSR) offers ISO certified Online MBA, Executive MBA, and Doctoral programs for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Indian Management School And Research Centre.png" 
                alt="IMSR Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => {
                  e.target.src = '/images/universities/default-university-logo.png';
                }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Pune, Maharashtra</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.0/5</span>
                    <span className={styles.reviews}>(150+ Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['UGC', 'AICTE', 'ISO 9001:2015'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Not Ranked</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>ISO 9001:2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {['about', 'programs', 'admissions', 'placements', 'faq'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'faq' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>

        {/* About Section */}
        {activeTab === 'about' && (
          <div className={styles.section}>
            <h2>About Indian Management School and Research Centre</h2>
            <div className={styles.aboutContent}>
              <p>
                The Indian Management School and Research Centre (IMSR) was founded in 2001 with a clear and compelling mission to deliver quality education accessible to professionals and aspiring learners nationwide. This ISO-certified institute focuses exclusively on online and distance learning programs including Online MBA, Online Executive MBA, and prestigious Doctoral programs designed specifically for working professionals. The institute's certification ensures adherence to rigorous quality standards in curriculum design, faculty expertise, and student support services. All programs offered by IMSR carry full validity and maintain strong reputation in the market, backed by recognition from employers across sectors who value the institution's commitment to producing industry-ready graduates.
              </p>
              
              <p>
                A distinctive feature of IMSR is its 24/7 accessible study material platform that revolutionizes the learning experience for busy professionals juggling career and education. Students can access comprehensive study resources at any time and from anywhere through the institute's official website using mobile phones, tablets, or laptops, enabling true flexibility in learning pace and schedule. The curriculum is expertly crafted by seasoned academicians and industry practitioners who understand the unique challenges faced by working professionals, incorporating foundational concepts through advanced methodologies. Programs integrate latest technologies, contemporary business practices, and cutting-edge problem-solving frameworks to prepare students for the ever-evolving corporate landscape with specializations spanning Management, Finance, Human Resources, Marketing, and strategic leadership domains.
              </p>
              
              <p>
                IMSR's vision centers on developing expert managers and accomplished entrepreneurs equipped to navigate and thrive in today's dynamic business environment. The institute provides robust placement assistance through strategic partnerships with leading organizations, significantly enhancing graduate employment prospects and career advancement opportunities. Students simply submit resumes to the placement cell, which then circulates candidatures to placement partners across industries. Additionally, IMSR offers a unique pathway to earn the prestigious "Dr." title through its Online Doctoral program without requiring career interruption, allowing professionals to gain academic recognition while maintaining employment continuity. This combination of flexible learning, career-oriented curriculum, comprehensive placement support, and affordable fee structures positions IMSR as an ideal choice for ambitious professionals seeking to advance their careers through promotions, salary increments, and expanded leadership responsibilities.
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
                <div className={styles.statNumber}>50%</div>
                <div className={styles.statLabel}>Avg. Salary Hike</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>300+</div>
                <div className={styles.statLabel}>Hiring Partners</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Study Access</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>ISO Certified</div>
                <div className={styles.statLabel}>Quality Standards</div>
              </div>
            </div>
          </div>
        )}

        {/* Programs Section */}
        {activeTab === 'programs' && (
          <div className={styles.section}>
            <h2>Programs Offered</h2>
            <p className={styles.sectionDesc}>
              Specialized programs designed for working professionals seeking advanced degrees and career growth opportunities
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
                  {courses.map((course, index) => (
                    <tr key={index}>
                      <td className={styles.courseName}>{course.name}</td>
                      <td>{course.mode}</td>
                      <td>{course.duration}</td>
                      <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.courseNote}>
              <strong>Note:</strong> Flexible payment options available including Credit/Debit cards, Net Banking, Cash, Cheque, DD, and NEFT. 
              Multiple installment plans designed for working professionals.
            </div>
          </div>
        )}

        {/* Admissions Section */}
        {activeTab === 'admissions' && (
          <div className={styles.section}>
            <h2>Admission Process</h2>
            <p className={styles.sectionDesc}>
              Simple and convenient online admission process designed for working professionals without campus visit requirements.
            </p>

            <div className={styles.admissionSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Download Application Form</h3>
                  <p>Visit the DOWNLOAD page on IMSR's official website to obtain the application form. The form is available in downloadable PDF format and can be filled offline at your convenience. Ensure you have all necessary documents ready including educational certificates, mark sheets, and identity proofs before beginning the application process.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Complete Application Form</h3>
                  <p>Fill out the application form with accurate personal details, educational qualifications, and professional experience information. Provide clear and complete responses to all fields including contact information, academic history, and program preferences. After completing the form, scan the filled application along with all required supporting documents for electronic submission.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Submit Documents via Email</h3>
                  <p>Send the scanned application form and all supporting documents as email attachments to the institute's official admission email address. Ensure all scans are clear and legible for verification purposes. Upon successful receipt of your application, the admissions team will review your credentials and process your enrollment request within 3-5 working days.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Fee Payment & Enrollment</h3>
                  <p>Once the institute receives and verifies all documents and fees, they will generate your enrollment details and grant access to the online portal. Payment can be made conveniently through Credit Card, Net Banking, Cash, Cheque, Demand Draft (DD), or NEFT transfer. Choose the payment method that best suits your preference and complete the transaction to begin your learning journey.</p>
                </div>
              </div>
            </div>

            <h3>Eligibility Criteria</h3>
            <div className={styles.highlightsList}>
              <div className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Online MBA:</strong> Bachelor's degree in any discipline with minimum 50% marks from recognized university. Work experience beneficial but not mandatory</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Online DBA:</strong> Master's degree (MBA/M.Com/MA) with minimum 55% marks. Research aptitude and professional experience in management domain preferred</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Executive Programs:</strong> Bachelor's degree with 2-5 years work experience in supervisory or managerial roles. Demonstrated career progression advantageous</span>
              </div>
            </div>

            <div className={styles.importantNote}>
              <h3>Important Information</h3>
              <ul>
                <li>Rolling admissions throughout the year for maximum flexibility</li>
                <li>No entrance examination required for admission</li>
                <li>24/7 access to study materials via online portal from any device</li>
                <li>Mark sheets issued within 45-60 days post-examination</li>
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
              IMSR provides dedicated placement support to help students secure positions in leading organizations across industries
            </p>

            <div className={styles.placementHighlights}>
              <div className={styles.placementCard}>
                <h3>50%</h3>
                <p>Average Salary Hike</p>
              </div>
              <div className={styles.placementCard}>
                <h3>300+</h3>
                <p>Hiring Partners</p>
              </div>
              <div className={styles.placementCard}>
                <h3>3X</h3>
                <p>Interview Opportunities</p>
              </div>
              <div className={styles.placementCard}>
                <h3>24/7</h3>
                <p>Study Material Access</p>
              </div>
            </div>

            <h3>Our Recruitment Partners</h3>
            <div className={styles.partnersGrid}>
              {placementPartners.map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  {partner}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <p className={styles.sectionDesc}>
              Find answers to common questions about IMSR programs and admissions
            </p>

            <div className={styles.faqsList}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
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
}

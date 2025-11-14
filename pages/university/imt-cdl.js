import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IMTCDL = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'PGDM (2 Years)', fee: 180000, duration: '2 Years', specializations: 8 },
    { name: 'PGDM Executive (15 Months)', fee: 150000, duration: '15 Months', specializations: 6 },
    { name: 'PGCM (13 Months)', fee: 120000, duration: '13 Months', specializations: 5 }
  ];

  const keyHighlights = [
    'Over 30 years of excellence in distance learning',
    'AICTE approved management programs',
    'Part of prestigious IMT Ghaziabad legacy',
    'Best Distance Learning Institution - BW Future',
    'Digital Distinction Award - ASSOCHAM',
    'Curriculum benchmarked with global institutions',
    '35,000+ alumni across the globe',
    'Blended learning with campus immersion programs',
    'Live and interactive online/offline sessions',
    'Industry-relevant curriculum with practical focus'
  ];

  const placementPartners = [
    'Vodafone', 'Thermax', 'HP', 'IBM', 'Maruti Suzuki',
    'Bharti Airtel', 'EY', 'Dabur India', 'Eli Lilly', 'PWC',
    'Accenture', 'Capgemini', 'Cognizant', 'Infosys', 'TCS', 'Wipro'
  ];

  const faqs = [
    {
      question: 'What is the advantage of doing a program from IMT CDL?',
      answer: 'IMT CDL offers top-ranked distance learning with 30+ years expertise, state-of-the-art infrastructure, globally benchmarked curriculum, experienced faculty, flexible self-paced learning, and 24x7 access to recorded lectures.'
    },
    {
      question: 'What are the AICTE programs offered at IMT CDL Ghaziabad?',
      answer: 'AICTE approved programs include PGDM (2 Years), PGDM Executive (15 Months) with specializations in Business Analytics, Finance, HR, Marketing, Operations, and Strategy, plus PGCM (13 Months) certificate program.'
    },
    {
      question: 'Is IMT CDL\'s PG Diploma acceptable in government jobs?',
      answer: 'Yes, AICTE approved PGDM and PGCM programs from IMT CDL are recognized for government employment opportunities and meet qualification requirements for public sector positions across India.'
    },
    {
      question: 'What specialization areas are offered in PGDM programs?',
      answer: 'Specializations include Business Analytics and Data Science, Finance, Human Resources and Talent Management, Marketing and Sales, Operations and Project Management, and Strategy with Cross-Functional Integration.'
    },
    {
      question: 'Does IMT CDL accept corporate nominations for their programs?',
      answer: 'Yes, IMT CDL welcomes corporate-sponsored candidates and offers customized corporate training programs. Organizations can nominate employees for skill development through structured management education programs.'
    },
    {
      question: 'What support channels are available for student queries?',
      answer: 'Students can access support through toll-free helpline 1800-102-1063, email at admissions@imtcdl.ac.in, online portals, dedicated student support teams, and faculty mentorship throughout the program duration.'
    }
  ];

  return (
    <>
      <Head>
        <title>IMT CDL Ghaziabad | PGDM, Executive PGDM, Distance Learning Programs</title>
        <meta name="description" content="IMT CDL - 30+ years in distance education. AICTE approved PGDM programs. Blended learning with global curriculum. 35,000+ alumni worldwide." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <Link href="https://www.imtcdl.ac.in/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/universities/Imt Center For Distance Learning.png" 
                  alt="IMT CDL Logo" 
                  className={styles.universityLogoLarge}
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Ghaziabad, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.7/5</span>
                    <span className={styles.reviews}>(Alumni Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['AICTE', 'UGC', 'NAAC A'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 38 (Management)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>NAAC A</span>
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
              <h2>About IMT Centre for Distance Learning</h2>
              <div className={styles.aboutContent}>
                <p>
                  IMT Centre for Distance Learning (IMT CDL) extends the prestigious IMT Ghaziabad legacy through over 30 years of excellence in distance management education. The institution has successfully democratized access to quality business education for working professionals and aspiring managers unable to pursue full-time campus programs. IMT CDL has earned significant accolades including Best Distance Learning Institution by BW Future and Digital Distinction Technology Conformance to NEP award by ASSOCHAM. With a thriving global alumni base exceeding 35,000 professionals occupying leadership positions across industries and continents, IMT CDL has established itself as a transformative force in management education.
                </p>
                <p>
                  IMT CDL offers AICTE-approved programs including comprehensive 2-year PGDM, accelerated 15-month Executive PGDM for working professionals, and 13-month PGCM providing foundational management knowledge. Programs feature diverse specializations in Business Analytics and Data Science, Finance, Human Resources and Talent Management, Marketing and Sales, Operations and Project Management, and Strategy with Cross-Functional Integration. The curriculum development benchmarks global institutions while incorporating industry-specific requirements through continuous consultation with corporate partners and academic experts. The blended learning approach combines self-paced study, live interactive sessions, recorded lectures accessible 24x7, campus immersion programs, and project work ensuring practical application of concepts.
                </p>
                <p>
                  IMT CDL maintains robust corporate associations facilitating placement assistance, industry insights, and professional networking opportunities for students and alumni. The institution welcomes corporate nominations allowing organizations to sponsor employee development through structured management programs. State-of-the-art learning infrastructure includes sophisticated learning management systems, digital libraries with extensive academic resources, and interactive platforms supporting collaborative learning. Highly experienced faculty brings together academic expertise and industry experience providing theoretical frameworks grounded in practical realities. Alumni testimonials consistently highlight transformative career impacts including promotions, entrepreneurial ventures, career transitions, and salary advancements validating the institution's mission of developing competent business leaders.
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
            </div>
          )}

          {/* Programs Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Specializations</th>
                      <th>Duration</th>
                      <th>Approximate Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.specializations} Option{course.specializations > 1 ? 's' : ''}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                IMT CDL follows a streamlined admission process for working professionals emphasizing qualifications and experience.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Program Selection</h3>
                    <p>Choose from PGDM (2 Years), PGDM Executive (15 Months), or PGCM (13 Months) based on your career objectives and professional experience. Select your preferred specialization from Finance, Marketing, HR, Operations, IT, or Business Analytics to align with your career aspirations.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>Complete the online application form on the IMT CDL official website with accurate personal details, educational qualifications, and professional experience. Upload all required documents including degree certificates, mark sheets, work experience letters, and valid identification proofs for verification purposes.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Review</h3>
                    <p>Your application undergoes comprehensive evaluation based on academic performance, professional experience, career progression, and stated career objectives. The admission committee assesses candidate suitability for distance learning programs and alignment with program requirements for each specialization.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Finalization</h3>
                    <p>Upon selection, pay the program fees through flexible payment options including installment plans tailored for working professionals. Receive immediate access to the Learning Management System (LMS) with study materials, video lectures, and assignment portals to commence your learning journey.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PGDM (2 Years):</strong> Bachelor's degree in any discipline from recognized university. Minimum 50% aggregate marks. Fresh graduates and early-career professionals eligible</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PGDM Executive (15 Months):</strong> Bachelor's degree with minimum 3 years professional experience in managerial or technical roles. Demonstrated career progression preferred</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PGCM (13 Months):</strong> Bachelor's degree with 1-2 years professional experience. Suitable for professionals transitioning into management positions</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Enhancement</h2>
              <p className={styles.sectionDesc}>
                IMT CDL focuses on enhancing career trajectories of working professionals through skill development, industry connections, and management credentials valued by employers across sectors.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>30+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>35,000+</h3>
                  <p>Global Alumni</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100+</h3>
                  <p>Corporate Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>AICTE</h3>
                  <p>Approved Programs</p>
                </div>
              </div>

              <h3>Corporate Associates</h3>
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

export default IMTCDL;

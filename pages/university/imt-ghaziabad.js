import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function IMTGhaziabad() {
  const [activeTab, setActiveTab] = useState('about');

  const courses = [
    { name: 'Job Linked Program in General Management', duration: '11 Months', fee: 250000, mode: 'Online' },
    { name: 'Job-linked Advanced Management', duration: '11 Months', fee: 250000, mode: 'Online' },
    { name: 'Advanced General Management Program', duration: '11 Months', fee: 153000, mode: 'Online' },
    { name: 'Advanced Certificate Program', duration: '6 Months', fee: 175000, mode: 'Online' },
    { name: 'Distance MBA', duration: '2 Years', fee: 125000, mode: 'Distance' },
    { name: 'Executive MBA', duration: '15 Months', fee: 110000, mode: 'Online' }
  ];

  const placementPartners = [
    'ICICI Bank', 'Accenture', 'Amazon', 'American Express', 'Deloitte',
    'EY', 'Google', 'Goldman Sachs', 'HDFC Bank', 'Infosys',
    'TCS', 'Wipro', 'HCL', 'ITC', 'KPMG',
    'L&T', 'Mahindra', 'Microsoft', 'PWC', 'Reliance', 'Tata'
  ];

  const keyHighlights = [
    'Ranked 38th in NIRF 2023 Management Category',
    'AACSB Accredited - Elite 5% of Business Schools Globally',
    'Established in 1980 with 40+ Years Legacy of Excellence',
    'NBA Approved Programs with Industry-Aligned Curriculum',
    'Average Package of ₹17.35 LPA with Highest at ₹32.8 LPA',
    '300+ Corporate Partners for Placements and Internships',
    'Strong Alumni Network of 15,000+ Professionals Worldwide',
    'Strategic Partnership with UpGrad for Online Programs'
  ];

  const faqs = [
    {
      question: 'What are the entrance requirements for IMT Ghaziabad?',
      answer: 'Bachelor\'s degree with minimum 50% marks from a recognized university. Work experience of 2-3 years preferred for executive programs.'
    },
    {
      question: 'Which admission tests are accepted by IMT Ghaziabad?',
      answer: 'CAT, XAT, GMAT, and CMAT scores are accepted. For online programs, direct admission without entrance exam is also available.'
    },
    {
      question: 'Does IMT Ghaziabad offer financial aid or scholarships?',
      answer: 'Yes, merit-based scholarships and 0% EMI options are available. Multiple flexible payment plans to support working professionals.'
    },
    {
      question: 'How do you rate the professors at IMT Ghaziabad?',
      answer: 'Faculty comprises renowned academicians and industry experts with extensive experience. Highly rated for their teaching methodology and practical insights.'
    },
    {
      question: 'How robust is IMT Ghaziabad\'s alumni network?',
      answer: 'Over 40 years of legacy with 15,000+ alumni globally occupying leadership positions across industries and top corporations.'
    },
    {
      question: 'What is it like to live on campus at IMT Ghaziabad?',
      answer: 'Modern campus with state-of-the-art infrastructure, digital classrooms, well-equipped library, and excellent recreational facilities for holistic development.'
    }
  ];

  return (
    <>
      <Head>
        <title>IMT Ghaziabad - Management Programs & Executive Education</title>
        <meta name="description" content="IMT Ghaziabad offers top-ranked MBA, Executive MBA, and management programs. NIRF Rank 38, AACSB accredited with excellent placements and global exposure." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IMT Ghaziabad.png" 
                alt="IMT Ghaziabad Logo" 
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
                  <span className={styles.infoValue}>📍 Ghaziabad, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.3/5</span>
                    <span className={styles.reviews}>(378 Reviews)</span>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['AICTE', 'AACSB', 'NBA'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>Rank 38 (Management 2023)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>AACSB</span>
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
            <h2>About IMT Ghaziabad</h2>
            <div className={styles.aboutContent}>
              <p>
                The Institute of Management Technology (IMT) Ghaziabad was founded in 1980 with the visionary backing of the Government of India and under the prestigious auspices of the Industrial Credit and Investment Corporation of India (ICICI). Located in the vibrant city of Ghaziabad, Uttar Pradesh, this premier institution occupies an expansive campus equipped with cutting-edge infrastructure that includes modern classrooms, well-stocked libraries, and advanced technological resources. The campus provides an optimal learning environment designed to nurture future business leaders and foster innovation in management education across multiple disciplines and specializations.
              </p>
              
              <p>
                IMT Ghaziabad delivers a comprehensive range of academic offerings addressing diverse aspects of contemporary management education through strategic collaboration with UpGrad, India's leading online education platform. The flagship Post Graduate Diploma in Management (PGDM) features a rigorous, industry-relevant curriculum meticulously designed to equip students with the practical skills and theoretical knowledge required to excel in today's competitive business landscape. Specialized PGDM programs span critical domains including Marketing, Finance, Human Resources, Operations, and Business Analytics, each tailored to meet evolving industry demands. The faculty comprises distinguished academicians and seasoned industry professionals who bring wealth of expertise, ensuring students receive education grounded in both academic excellence and real-world application.
              </p>
              
              <p>
                The institute maintains robust relationships with leading national and international corporations, fostered through its Business Interface Cell which orchestrates guest lectures, corporate visits, internship opportunities, and comprehensive placement drives. IMT Ghaziabad has established an exemplary placement record with students securing coveted positions at Fortune 500 companies and prominent organizations across sectors. The average package stands impressively at ₹17.35 LPA, reflecting the institute's commitment to career excellence. Additionally, IMT's Entrepreneurship Development Cell actively promotes entrepreneurial thinking among students, supported by a vast and influential alumni network spanning 40+ years with graduates occupying leadership roles in prestigious corporations worldwide. This legacy of excellence, combined with consistent recognition in rankings by publications like Business Today and NIRF (Rank 38 in Management category), solidifies IMT Ghaziabad's position among India's premier business schools.
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
                <div className={styles.statNumber}>₹17.35 LPA</div>
                <div className={styles.statLabel}>Average Package</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>300+</div>
                <div className={styles.statLabel}>Hiring Partners</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>NIRF 38</div>
                <div className={styles.statLabel}>Management Ranking</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>40+ Years</div>
                <div className={styles.statLabel}>Legacy of Excellence</div>
              </div>
            </div>
          </div>
        )}

        {/* Programs Section */}
        {activeTab === 'programs' && (
          <div className={styles.section}>
            <h2>Programs Offered</h2>
            <p className={styles.sectionDesc}>
              Explore our comprehensive range of management programs designed for working professionals and aspiring leaders
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
              <strong>Note:</strong> EMI options available starting from as low as ₹10,000/month. 
              No-cost EMI plans and flexible payment options for working professionals.
            </div>
          </div>
        )}

        {/* Admissions Section */}
        {activeTab === 'admissions' && (
          <div className={styles.section}>
            <h2>Admission Process</h2>
            <p className={styles.sectionDesc}>
              IMT Ghaziabad follows a comprehensive selection process ensuring admission of talented candidates with strong academic credentials and professional potential.
            </p>

            <div className={styles.admissionSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Eligibility Verification</h3>
                  <p>Applicants must verify that they meet the eligibility requirements established by IMT Ghaziabad for their desired program. Bachelor's degree with minimum 50% aggregate from a recognized university is mandatory. For executive programs, relevant work experience of 2-3 years in managerial or technical roles is required to ensure participants can contribute meaningfully to peer learning.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Entrance Examination</h3>
                  <p>Candidates must appear for relevant entrance examinations such as CAT (Common Admission Test), XAT (Xavier Aptitude Test), GMAT (Graduate Management Admission Test), or CMAT (Common Management Admission Test). For online and distance programs offered in collaboration with UpGrad, direct admission without entrance exam is available based on academic merit and professional experience evaluation.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Application Submission & Interview</h3>
                  <p>Complete the online application form available on IMT Ghaziabad's official admissions portal with accurate personal information, educational credentials, and entrance examination scores. Shortlisted candidates will receive invitations for Personal Interview (PI) where the panel assesses communication skills, leadership potential, and career objectives to evaluate overall candidate suitability for the program.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Final Selection & Enrollment</h3>
                  <p>IMT Ghaziabad conducts comprehensive profile evaluation considering academic achievement, entrance scores, interview performance, and demonstrated leadership potential. Selected candidates receive official offer letters and must confirm acceptance by paying the program fee within the stipulated deadline. Payment options include credit/debit cards, net banking, and flexible 0% EMI plans designed for working professionals.</p>
                </div>
              </div>
            </div>

            <h3>Eligibility Criteria</h3>
            <div className={styles.highlightsList}>
              <div className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Online MBA / Distance MBA:</strong> Bachelor's degree in any discipline with minimum 50% marks from recognized university. No entrance exam required for direct admission through UpGrad partnership</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Executive MBA:</strong> Bachelor's degree with minimum 2-3 years of professional work experience in managerial, technical, or supervisory roles. Demonstrated career progression and leadership potential preferred</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Advanced Programs:</strong> Varies by specialization. Job-linked programs require bachelor's degree with relevant work experience. Flexible eligibility for certificate and diploma programs</span>
              </div>
            </div>

            <div className={styles.importantNote}>
              <h3>Important Information</h3>
              <ul>
                <li>Admissions open multiple times throughout the year for online programs</li>
                <li>CAT, XAT, GMAT, CMAT scores accepted for PGDM programs</li>
                <li>Direct admission available for online programs through UpGrad partnership</li>
                <li>Flexible payment plans with 0% EMI options for working professionals</li>
                <li>Documents required: 10th & 12th mark sheets, graduation degree, ID proof, photographs, work experience certificates</li>
              </ul>
            </div>
          </div>
        )}

        {/* Placements Section */}
        {activeTab === 'placements' && (
          <div className={styles.section}>
            <h2>Career Support & Placements</h2>
            <p className={styles.sectionDesc}>
              IMT Ghaziabad provides comprehensive placement assistance with strong industry connections ensuring excellent career opportunities
            </p>

            <div className={styles.placementHighlights}>
              <div className={styles.placementCard}>
                <h3>₹17.35 LPA</h3>
                <p>Average Package</p>
              </div>
              <div className={styles.placementCard}>
                <h3>₹32.8 LPA</h3>
                <p>Highest Package</p>
              </div>
              <div className={styles.placementCard}>
                <h3>300+</h3>
                <p>Hiring Partners</p>
              </div>
              <div className={styles.placementCard}>
                <h3>~100%</h3>
                <p>Placement Rate</p>
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
              Find answers to common questions about IMT Ghaziabad programs and admissions
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

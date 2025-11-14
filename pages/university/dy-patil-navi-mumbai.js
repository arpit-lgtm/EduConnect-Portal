import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const DYPatilNaviMumbai = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online BBA', fee: 111000, duration: '3 Years', specializations: 9 },
    { name: 'Online MBA', fee: 180000, duration: '2 Years', specializations: 15 },
    { name: 'Online MCA', fee: 135000, duration: '2 Years', specializations: 3 },
    { name: 'Online B.Com', fee: 95000, duration: '3 Years', specializations: 5 },
    { name: 'Online M.Com', fee: 110000, duration: '2 Years', specializations: 3 },
    { name: 'Online BCA', fee: 105000, duration: '3 Years', specializations: 4 },
  ];

  const keyHighlights = [
    'NAAC A++ accredited autonomous university recognized nationally',
    'NIRF Ranked 101 showcasing commitment to academic excellence',
    'UGC-DEB and AICTE approved for online education delivery',
    'Located in Navi Mumbai with state-of-the-art infrastructure',
    'Flexible learning with live sessions and recorded lectures',
    'Comprehensive digital library accessible round the clock',
    'Industry-aligned curriculum developed with corporate leaders',
    'Strong placement network with 300+ recruiting organizations'
  ];

  const approvals = ['UGC', 'AICTE', 'NAAC A++'];
  const nirfRank = 'Rank 101';
  const accreditation = 'NAAC A++';

  const placementPartners = [
    'Google', 'Deloitte', 'IBM', 'Microsoft', 'Amazon', 
    'Capgemini', 'Cognizant', 'Reliance', 'ITC', 'Infosys', 'Wipro', 'TCS'
  ];

  const faqs = [
    {
      question: 'Is DY Patil Navi Mumbai degree valid for government jobs?',
      answer: 'Yes, DY Patil University Navi Mumbai is UGC-DEB approved and NAAC A++ accredited. The online degrees are recognized by central and state governments for employment in public and private sectors.'
    },
    {
      question: 'What makes DY Patil Navi Mumbai different from other universities?',
      answer: 'DY Patil Navi Mumbai offers industry-aligned curriculum, affordable semester-wise fee payment (₹21,000/semester for BBA), excellent placement support averaging 50% salary hikes, and modern infrastructure supporting quality online education.'
    },
    {
      question: 'How are classes conducted?',
      answer: 'Classes feature live interactive sessions conducted on weekends, recorded lectures available 24/7 for revision, comprehensive study materials in digital format, and regular doubt-clearing sessions with faculty.'
    },
    {
      question: 'What scholarship opportunities are available?',
      answer: 'DY Patil offers 100% fee waiver for SC/ST students, 50% concession for OBC through EBC scheme, 50% waiver for open category students under specific schemes, and education loan assistance from partner banks.'
    },
    {
      question: 'What placement support is provided?',
      answer: 'The university offers dedicated placement cell for online students, partnerships with 300+ hiring companies, resume building and interview preparation, average 50% salary increment, and campus recruitment opportunities.'
    },
    {
      question: 'Are there any specializations in BBA?',
      answer: 'Yes, DY Patil offers 9 BBA specializations including General Management, Logistics & Supply Chain, Human Resource, Retail Operations, Marketing Management, Event Management, Hospital Management, Investment Banking, and Travel & Tourism.'
    }
  ];

  return (
    <>
      <Head>
        <title>DY Patil University Navi Mumbai Online - Affordable MBA BBA Degrees | EduConnect</title>
        <meta name="description" content="Join DY Patil Navi Mumbai for affordable online MBA & BBA. NAAC A++, NIRF 101, UGC-approved with ₹21k/semester fees and excellent placements." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/DY Patil University Navi Mumbai.png" 
                alt="DY Patil Navi Mumbai Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Navi Mumbai, Maharashtra</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.3/5</span>
                    <span className={styles.reviews}>(349 Reviews)</span>
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

        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About DY Patil University Navi Mumbai Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  DY Patil University, strategically located in Navi Mumbai, represents innovation in higher education 
                  by combining academic tradition with modern pedagogical approaches. The university's commitment to 
                  accessible education manifests through thoughtfully designed online programs that maintain rigorous 
                  academic standards while accommodating diverse student needs.
                </p>
                <p>
                  With NAAC A++ accreditation and NIRF Ranking 101, DY Patil Navi Mumbai demonstrates excellence across 
                  multiple dimensions of institutional quality. The university's Online Learning Division leverages advanced 
                  educational technology to deliver engaging learning experiences featuring interactive live classes, 
                  comprehensive digital resources, and continuous faculty engagement.
                </p>
                <p>
                  What distinguishes DY Patil is its affordability without compromising quality - programs like BBA cost 
                  just ₹21,000 per semester with flexible payment options. The curriculum reflects contemporary industry 
                  requirements developed in consultation with corporate partners ensuring graduates possess job-ready skills.
                </p>
                <p>
                  The university's robust support infrastructure includes dedicated counselors, technical helpdesk, virtual 
                  library access, and comprehensive placement assistance. UGC-DEB and AICTE approvals ensure online degrees 
                  carry equivalent recognition to traditional programs, opening doors to career advancement and further education.
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
                  <div className={styles.statNumber}>₹21K</div>
                  <div className={styles.statLabel}>BBA Per Semester</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Rank 101</div>
                  <div className={styles.statLabel}>NIRF Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Salary Increment</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Industry-aligned programs with multiple specializations
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
                <strong>Affordable Learning:</strong> BBA at ₹21,000/semester with EMI options. Scholarships available for eligible students.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Streamlined enrollment for working professionals and fresh graduates
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Register on the official DY Patil Navi Mumbai portal using valid email ID and mobile number for authentication.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Completion</h3>
                    <p>Fill detailed application with personal details, educational background, and program preference ensuring accuracy.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Submit scanned copies of educational certificates, ID proofs, photographs, and self-declaration as per checklist.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Submission</h3>
                    <p>Pay semester fee through online payment gateway or NEFT with scholarship deductions applied automatically.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Enrollment Confirmation</h3>
                    <p>Receive admission confirmation and ABC ID credentials via email enabling LMS access and class commencement.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BBA/BCA/B.Com):</strong> 10+2 from recognized board with minimum 50% marks. No entrance test required - admission based on qualifying marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MBA/MCA/M.Com):</strong> Bachelor's degree from UGC recognized university with 50% aggregate marks. Two admission cycles annually</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Programs:</strong> Same eligibility criteria. ABC ID creation mandatory as per UGC regulations. Working professionals and fresh graduates eligible</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Essential Information</h3>
                <ul>
                  <li>Two admission cycles annually - January and July intakes</li>
                  <li>Eligibility: 10+2 for UG, Bachelor's degree for PG programs</li>
                  <li>No entrance test - admission based on qualifying marks</li>
                  <li>ABC ID creation mandatory as per UGC regulations</li>
                  <li>Required: Educational certificates, Aadhaar, photos, self-declaration</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Advancement Services</h2>
              <p className={styles.sectionDesc}>
                Comprehensive placement support connecting talent with opportunity
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Partner Companies</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹7.5L</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Career Support</p>
                </div>
              </div>

              <h3>Recruitment Partners</h3>
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
              <p className={styles.sectionDesc}>
                Common queries about DY Patil Navi Mumbai programs answered
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
                <h3>Need Assistance?</h3>
                <p>Our admission counselors are ready to guide you through the enrollment process</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Connect with Counselors</button>
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

export default DYPatilNaviMumbai;

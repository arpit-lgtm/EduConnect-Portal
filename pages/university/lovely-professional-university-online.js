import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function LPUOnlinePage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC-DEB', 'AICTE', 'AIU', 'NIRF', 'WES', 'NAAC A++', 'SACSCOC'];
  const accreditation = 'NAAC A++ Grade';
  const nirfRank = 'Rank 27 in University Category';

  const keyHighlights = [
    'NAAC A++ accredited university with highest grade',
    'NIRF Rank 27 among all universities in India',
    'UGC-DEB approved online and distance education programs',
    'WES recognized for international degree equivalency',
    'SACSCOC accredited for global quality standards',
    'Widest range of online programs (UG, PG, Diplomas)',
    'Industry-oriented curriculum with practical learning',
    'Affordable fee structure with EMI options'
  ];

  const coursesData = [
    { name: 'Online BCA (Bachelor of Computer Applications)', specializations: '1', duration: '3 Years', fee: 122400 },
    { name: 'Online MCA (Master of Computer Applications)', specializations: '6', duration: '2 Years', fee: 140000 },
    { name: 'Online B.Com (Bachelor of Commerce)', specializations: '1', duration: '3 Years', fee: 120000 },
    { name: 'Online M.Com (Master of Commerce)', specializations: '1', duration: '2 Years', fee: 81600 },
    { name: 'Online BA (Bachelor of Arts)', specializations: '8', duration: '3 Years', fee: 98400 },
    { name: 'Online MA (Master of Arts)', specializations: '5', duration: '2 Years', fee: 65600 },
    { name: 'Online M.Sc (Master of Science)', specializations: '2', duration: '2 Years', fee: 65600 },
    { name: 'Online MBA (Master of Business Administration)', specializations: '16', duration: '2 Years', fee: 161600 },
    { name: 'Online MBA (Dual Specialization)', specializations: '2', duration: '2 Years', fee: 161600 },
    { name: 'B.Tech (Bachelor of Technology)', specializations: '1', duration: '3 Years', fee: 840000 },
    { name: 'Online BBA (Bachelor of Business Administration)', specializations: '1', duration: '3 Years', fee: 122400 },
    { name: 'Diploma in Business Administration', specializations: '1', duration: '1 Year', fee: 40800 },
    { name: 'Diploma in Computer Applications', specializations: '1', duration: '1 Year', fee: 40800 }
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Microsoft', 'Flipkart', 'Paytm',
    'Cognizant', 'Infosys', 'TCS', 'Wipro', 'Tech Mahindra',
    'Deloitte', 'KPMG', 'EY', 'PWC', 'Accenture'
  ];

  const faqs = [
    {
      question: 'What online programs does LPU offer?',
      answer: 'LPU Online offers comprehensive programs including Online BCA, MCA, B.Com, M.Com, BA, MA, M.Sc, MBA, BBA, B.Tech, and various diplomas. With 13+ different programs and 40+ specializations across all levels, LPU Online has one of the widest course portfolios in India.'
    },
    {
      question: 'Is LPU Online degree UGC approved and valid?',
      answer: 'Yes, all LPU Online programs are approved by UGC-DEB (Distance Education Bureau), making them fully valid for government jobs, higher education, and employment in India and abroad. LPU is NAAC A++ accredited and NIRF Rank 27, ensuring top quality education.'
    },
    {
      question: 'What is the fee structure for LPU Online programs?',
      answer: 'LPU Online offers highly affordable fees: Online MBA/MCA (₹1,40,000-₹1,61,600 for full program), Online BCA/BBA (₹1,22,400), Online B.Com (₹1,20,000), Online BA (₹98,400), Online MA/M.Com/M.Sc (₹65,600-₹81,600), B.Tech (₹8,40,000), Diplomas (₹40,800). EMI and installment options are available.'
    },
    {
      question: 'What specializations are available in Online MBA?',
      answer: 'LPU Online MBA offers 16+ specializations including Finance, Marketing, HR, Operations, International Business, IT, Banking & Finance, Healthcare Management, Retail Management, Supply Chain, Business Analytics, Entrepreneurship, and more. Students can also opt for dual specialization.'
    },
    {
      question: 'How is LPU Online learning delivered?',
      answer: 'LPU Online uses a comprehensive Learning Management System (LMS) with live interactive sessions, recorded lectures, e-books, study materials, virtual labs, online assignments, and 24/7 access to resources. Mobile app available for learning on-the-go.'
    },
    {
      question: 'Does LPU Online provide placement assistance?',
      answer: 'Yes, LPU has a dedicated placement cell that assists online students with job opportunities. With 900+ recruiting companies including Google, Amazon, Microsoft, and top MNCs, LPU has excellent placement records. Career counseling, resume building, and interview preparation are provided.'
    }
  ];

  return (
    <>
      <Head>
        <title>LPU Online | Best Online Degree Programs in India | NIRF Rank 27 | NAAC A++</title>
        <meta name="description" content="LPU Online offers UGC approved MBA, MCA, BCA, BBA, B.Com, BA, MA, M.Sc programs. NAAC A++ accredited, NIRF Rank 27. 40+ specializations. Apply now!" />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Lovely Professional University.png" 
                alt="Lovely Professional University Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Jalandhar, Punjab</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.7/5</span>
                    <span className={styles.reviews}>(792 Reviews)</span>
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
              <h2>About Lovely Professional University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Lovely Professional University (LPU), established in 2005, has rapidly grown to become India's largest private university with over 30,000 students from all states of India and 50+ countries. Located in Jalandhar, Punjab, LPU is recognized by UGC and accredited by NAAC with the highest A++ grade, reflecting its commitment to academic excellence and quality education.
                </p>
                <p>
                  Ranked 27th in the NIRF (National Institutional Ranking Framework) University Category, LPU is among the top universities in India. The university's online and distance education programs are approved by UGC-DEB (Distance Education Bureau), ensuring all degrees are fully valid and recognized across India and internationally. With approvals from AICTE, AIU, and recognition from WES and SACSCOC, LPU degrees are valued globally.
                </p>
                <p>
                  LPU Online offers India's most comprehensive portfolio of online programs with 13+ degree options and 40+ specializations across undergraduate, postgraduate, and diploma levels. The state-of-the-art Learning Management System (LMS) provides an immersive learning experience with live interactive sessions, recorded lectures, digital study materials, virtual labs, online assignments, and 24/7 access through mobile and web platforms.
                </p>
                <p>
                  With partnerships with 900+ companies including Google, Microsoft, Amazon, and leading MNCs, LPU ensures curriculum relevance, internship opportunities, industry projects, and placement assistance for students. The university's focus on industry-oriented education, affordable fee structure with EMI options, and strong placement support makes it a preferred choice for online education in India.
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
                  <div className={styles.statNumber}>30,000+</div>
                  <div className={styles.statLabel}>Students Enrolled</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NIRF 27</div>
                  <div className={styles.statLabel}>National Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>900+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NAAC A++</div>
                  <div className={styles.statLabel}>Highest Grade</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of UGC-DEB approved online programs
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
                <strong>Note:</strong> All programs UGC-DEB approved. EMI and installment options available. Flexible learning with 24/7 access to LMS. Industry certifications from Google, Microsoft, and IBM included.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple and convenient admission process with rolling admissions
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Check Eligibility</h3>
                    <p>Review the minimum educational qualifications for your desired program (UG, PG, or Diploma).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Visit the LPU Online official website and complete the application form with your personal and educational details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Upload scanned copies of required documents including educational certificates, ID proof, and photographs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Pay the application fee online through credit/debit card, net banking, or UPI. The fee is nominal and non-refundable.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification</h3>
                    <p>The admissions team verifies your submitted documents. You may be contacted if clarification is needed.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Enroll & Start Learning</h3>
                    <p>Once selected, pay the program fee (EMI available), receive login credentials for the LMS, and begin your academic journey with orientation.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BCA/BBA/B.Com):</strong> 10+2 from recognized board with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online BA:</strong> 10+2 in any stream from recognized board with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Tech Programs:</strong> 10+2 with Physics, Chemistry, Mathematics with 60% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MBA/MCA/M.Com/MA/M.Sc):</strong> Graduation in relevant discipline with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diplomas:</strong> 10+2 from recognized board (any stream)</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>LPU Online is approved by UGC-DEB for distance and online education</li>
                  <li>EMI options available starting from ₹5,000/month for most programs</li>
                  <li>Access to state-of-the-art Learning Management System (LMS)</li>
                  <li>Industry certifications included with select programs</li>
                  <li>Rolling admissions throughout the year with multiple intake sessions</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Dedicated placement cell with 900+ recruiting companies
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>900+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹64 LPA</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Support</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Global</h3>
                  <p>Job Opportunities</p>
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
                Find answers to common queries about LPU Online programs
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

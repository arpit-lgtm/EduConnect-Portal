import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

export default function LingayasVidyapeethPage() {
  const [activeTab, setActiveTab] = useState('about');

  const approvals = ['UGC', 'AICTE', 'AIU', 'NAAC B+'];
  const accreditation = 'NAAC B+ Grade';
  const nirfRank = 'Deemed to be University';

  const keyHighlights = [
    'UGC recognized Deemed to be University',
    'NAAC B+ accredited with focus on quality education',
    'AICTE approved engineering programs',
    'WILP (Work Integrated Learning Programs) for working professionals',
    'Weekend and holiday classes for flexible learning',
    'Industry-relevant curriculum with practical training',
    'Affordable fee structure with installment options',
    'Strong placement support and industry connections'
  ];

  const coursesData = [
    { name: 'B.Tech (Bachelor of Technology)', specializations: '6', duration: '3 Years', fee: 300000 },
    { name: 'M.Tech (Master of Technology)', specializations: '10', duration: '2 Years', fee: 200000 },
    { name: 'B.Tech After Diploma (Lateral Entry)', specializations: '6', duration: '3 Years', fee: 300000 },
    { name: 'M.Tech Part-Time (For Working Professionals)', specializations: '1', duration: '2 Years', fee: 200000 },
    { name: 'B.Tech Part Time (For Working Professionals)', specializations: '1', duration: '3 Years', fee: 300000 },
    { name: 'B.Tech Lateral Entry (After Diploma)', specializations: '1', duration: '3 Years', fee: 300000 }
  ];

  const placementPartners = [
    'TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'HCL Technologies',
    'Cognizant', 'Accenture', 'IBM', 'Amazon', 'Microsoft',
    'Deloitte', 'KPMG', 'EY', 'PWC', 'Capgemini'
  ];

  const faqs = [
    {
      question: 'What programs does Lingayas Vidyapeeth offer through distance/online mode?',
      answer: 'Lingayas Vidyapeeth offers WILP (Work Integrated Learning Programs) including B.Tech and M.Tech in various specializations. These programs are designed for working professionals with weekend and holiday classes, combining online learning with periodic campus visits.'
    },
    {
      question: 'Is Lingayas Vidyapeeth a recognized university?',
      answer: 'Yes, Lingayas Vidyapeeth is a UGC recognized Deemed to be University established under Section 3 of the UGC Act, 1956. It is also NAAC accredited with B+ grade and approved by AICTE for engineering programs. Degrees are valid for government jobs, higher education, and employment.'
    },
    {
      question: 'What is the fee structure for B.Tech and M.Tech programs?',
      answer: 'The B.Tech programs have a total fee of ₹3,00,000 for 3 years, while M.Tech programs cost ₹2,00,000 for 2 years. Fees can be paid in installments. The fee includes tuition, study materials, and access to online learning platforms. Additional charges may apply for examinations and campus visits.'
    },
    {
      question: 'What is WILP and how does it work?',
      answer: 'WILP (Work Integrated Learning Program) is designed for working professionals. Classes are conducted on weekends and holidays, allowing students to continue their jobs while pursuing degrees. The program combines online lectures, self-study materials, and periodic campus visits for labs and practicals.'
    },
    {
      question: 'What specializations are available in B.Tech programs?',
      answer: 'B.Tech programs are offered in 6 major specializations including Computer Science Engineering, Electronics & Communication, Mechanical Engineering, Civil Engineering, Electrical Engineering, and Information Technology. Specific availability may vary by admission cycle.'
    },
    {
      question: 'Does Lingayas Vidyapeeth provide placement assistance?',
      answer: 'Yes, Lingayas Vidyapeeth has a dedicated Training & Placement Cell that organizes campus recruitment drives, skill development workshops, and industry interactions. The university has tie-ups with leading companies like TCS, Infosys, Wipro, and many others for placement opportunities.'
    }
  ];

  return (
    <>
      <Head>
        <title>Lingayas Vidyapeeth Online | B.Tech M.Tech WILP Programs | NAAC B+ Accredited</title>
        <meta name="description" content="Lingayas Vidyapeeth offers UGC recognized B.Tech and M.Tech WILP programs for working professionals. NAAC B+ accredited, AICTE approved. Weekend classes. Apply now!" />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Lingaya's University.png" 
                alt="Lingayas Vidyapeeth Logo"
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Faridabad, Haryana</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.6/5</span>
                    <span className={styles.reviews}>(21 Reviews)</span>
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
              <h2>About Lingayas Vidyapeeth</h2>
              <div className={styles.aboutContent}>
                <p>
                  Lingayas Vidyapeeth, located in Faridabad, Haryana, is a UGC recognized Deemed to be University established under Section 3 of the UGC Act, 1956. The university is committed to providing quality education in Engineering, Management, Pharmacy, and other professional fields with a focus on academic excellence and industry relevance.
                </p>
                <p>
                  With NAAC B+ accreditation and AICTE approval for engineering programs, Lingayas Vidyapeeth has established itself as a leading institution in the Delhi-NCR region. The university offers innovative WILP (Work Integrated Learning Programs) designed specifically for working professionals who want to advance their careers without interrupting their jobs.
                </p>
                <p>
                  WILP is a unique learning model that allows working professionals to pursue B.Tech and M.Tech degrees without leaving their jobs. Classes are conducted on weekends and holidays, with a blend of online learning and periodic campus visits for practical sessions and examinations. The curriculum is designed in consultation with industry experts to ensure relevance to current industry practices.
                </p>
                <p>
                  The university campus in Faridabad is equipped with modern laboratories, computer centers, library with digital resources, seminar halls, and sports facilities. For WILP students, the infrastructure includes online learning platforms, virtual labs, and resources accessible 24/7 from anywhere. Lingayas Vidyapeeth has partnerships with leading companies for placements, internships, and industry projects.
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
                  <div className={styles.statNumber}>10,000+</div>
                  <div className={styles.statLabel}>Students Enrolled</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NAAC B+</div>
                  <div className={styles.statLabel}>Accreditation</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Industry Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Weekend</div>
                  <div className={styles.statLabel}>WILP Classes</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our AICTE approved B.Tech and M.Tech programs through Work Integrated Learning
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
                <strong>Note:</strong> Weekend classes for working professionals. Fees can be paid in installments. Periodic campus visits required for labs and practicals. All programs approved by AICTE and UGC.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple and transparent admission process for WILP programs
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Check Eligibility</h3>
                    <p>Verify that you meet the minimum educational qualifications for your desired program (B.Tech or M.Tech). For part-time programs, current employment in a technical field is required.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Online Registration</h3>
                    <p>Visit the Lingayas Vidyapeeth official website and complete the online application form with your personal, educational, and employment details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Upload scanned copies of required documents including educational certificates, ID proof, photographs, and employment proof (for part-time programs).</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Pay the non-refundable application fee online through credit/debit card, net banking, or UPI.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Document Verification</h3>
                    <p>The admissions office verifies your documents and academic credentials. You may be contacted if additional information is needed.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Enroll & Start Learning</h3>
                    <p>If selected, pay the program fee, obtain fee receipt and admission confirmation, complete enrollment formalities, and attend the orientation program.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Tech Regular:</strong> 10+2 with Physics, Chemistry, and Mathematics with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Tech After Diploma:</strong> 3-year diploma in relevant engineering stream with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>B.Tech Part-Time:</strong> Currently employed in technical field with 10+2 or diploma qualification</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech:</strong> B.Tech/B.E. degree in relevant stream with minimum 55% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>M.Tech Part-Time:</strong> B.Tech/B.E. degree with current employment in engineering/technical field</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Employment certificate required for part-time programs</li>
                  <li>Weekend and holiday classes for WILP programs</li>
                  <li>Periodic campus visits required for labs and practicals</li>
                  <li>Fee payment can be done in installments</li>
                  <li>All programs approved by AICTE and UGC</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Dedicated placement cell providing career opportunities to students
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>100+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>85%</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Campus</h3>
                  <p>Recruitment Drives</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Career Support</p>
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
                Find answers to common queries about Lingayas Vidyapeeth WILP programs
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

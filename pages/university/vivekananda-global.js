import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const VivekanandaGlobal = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online BBA', fee: 114000, duration: '3 Years', specializations: 6 },
    { name: 'Online MBA', fee: 150000, duration: '2 Years', specializations: 8 },
    { name: 'Online BA', fee: 60000, duration: '3 Years', specializations: 8 },
    { name: 'Online MA', fee: 64000, duration: '2 Years', specializations: 2 },
    { name: 'Online BCA', fee: 114000, duration: '3 Years', specializations: 6 },
    { name: 'Online MCA', fee: 130000, duration: '2 Years', specializations: 3 },
    { name: 'Online M.Sc', fee: 64000, duration: '2 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'NAAC A accredited university with focus on holistic education',
    'UGC and AICTE approved for quality online education delivery',
    'Established in 2000 with strong emphasis on values-based learning',
    'Located in Jaipur, Rajasthan - hub of educational excellence',
    'Affordable fee structure making quality education accessible',
    'Comprehensive Learning Management System with 24/7 access',
    'Experienced faculty committed to student success',
    'Flexible learning schedules ideal for working professionals'
  ];

  const approvals = ['UGC', 'AICTE', 'NAAC A'];
  const nirfRank = 'Not Ranked';
  const accreditation = 'NAAC A';

  const placementPartners = [
    'Infosys', 'Wipro', 'TCS', 'Tech Mahindra', 'HCL', 
    'ICICI Bank', 'HDFC Bank', 'Reliance', 'Bharti Airtel', 'Flipkart', 'Amazon', 'Paytm'
  ];

  const faqs = [
    {
      question: 'Is Vivekananda Global University UGC approved?',
      answer: 'Yes, Vivekananda Global University is fully approved by UGC and AICTE for offering online programs. The online degrees are equivalent to regular degrees and recognized for employment and higher education nationwide.'
    },
    {
      question: 'What is the philosophy behind Vivekananda Global education?',
      answer: 'The university draws inspiration from Swami Vivekananda\'s teachings, emphasizing holistic development combining academic excellence with character building, ethical values, and practical skills preparing students for meaningful careers and responsible citizenship.'
    },
    {
      question: 'How affordable are the programs?',
      answer: 'Vivekananda Global offers highly competitive fees - MBA/MCA at ₹100,000, BBA/BCA at ₹50,000, and B.Com/BA starting at ₹30,000. Flexible payment options and scholarships make quality education accessible to all deserving students.'
    },
    {
      question: 'What learning support is available?',
      answer: 'Students receive comprehensive support including 24/7 LMS access, recorded lectures, live doubt-clearing sessions, e-library resources, dedicated academic counselors, technical helpdesk, and placement assistance throughout their academic journey.'
    },
    {
      question: 'Are there placement opportunities?',
      answer: 'Yes, the university has placement collaborations with leading companies offering average packages around ₹2.5 LPA with highest reaching ₹7.5 LPA. The dedicated placement cell provides resume building, interview preparation, and job connections.'
    },
    {
      question: 'Can working professionals pursue these programs?',
      answer: 'Absolutely. The online programs are specifically designed for working professionals with flexible schedules, weekend classes, self-paced learning modules, and mobile-friendly platforms allowing students to balance work, family, and education effectively.'
    }
  ];

  return (
    <>
      <Head>
        <title>Vivekananda Global University Online - Affordable MBA BBA Degrees Jaipur | EduConnect</title>
        <meta name="description" content="Join Vivekananda Global University for affordable UGC-approved online MBA, BBA degrees. NAAC A accredited, values-based education from Jaipur." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Vivekananda Global University.png" 
                alt="Vivekananda Global University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Jaipur, Rajasthan</span>
                </div>

                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.0/5</span>
                    <span className={styles.reviews}>(150 Reviews)</span>
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
              <h2>About Vivekananda Global University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Vivekananda Global University, established in 2000, embodies the noble vision of Swami Vivekananda 
                  by providing transformative education that nurtures both intellectual capabilities and ethical character. 
                  Located in the historic city of Jaipur, Rajasthan, the university represents a harmonious blend of 
                  traditional values and contemporary pedagogical methodologies.
                </p>
                <p>
                  The university's Online Learning Division extends this educational philosophy to learners nationwide, 
                  offering UGC and AICTE approved programs that prioritize accessibility without compromising academic rigor. 
                  With NAAC A accreditation, Vivekananda Global demonstrates commitment to maintaining high standards across 
                  curriculum design, faculty qualification, infrastructure, and student support services.
                </p>
                <p>
                  What distinguishes Vivekananda Global is its emphasis on holistic development - programs integrate academic 
                  knowledge with personality development, ethical reasoning, and practical competencies. The affordable fee 
                  structure reflects the institution's mission to democratize quality education, ensuring financial constraints 
                  do not hinder deserving students from achieving their aspirations.
                </p>
                <p>
                  Online learners benefit from comprehensive Learning Management System featuring interactive content, live 
                  sessions with accomplished faculty, extensive digital library, and continuous mentorship. The university's 
                  placement collaborations with reputed organizations ensure graduates transition smoothly from education to 
                  fulfilling careers aligned with their talents and goals.
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
                  <div className={styles.statNumber}>₹30K</div>
                  <div className={styles.statLabel}>Starting Fees</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NAAC A</div>
                  <div className={styles.statLabel}>Accreditation</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>₹7.5L</div>
                  <div className={styles.statLabel}>Highest Package</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>LMS Access</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Comprehensive range of UGC-approved programs across disciplines
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
                <strong>Affordable Excellence:</strong> Quality education at competitive fees with flexible payment options and scholarship opportunities.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple enrollment process welcoming aspiring learners
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Online Application</h3>
                    <p>Visit the official website and complete the online registration using valid credentials and contact information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Form Submission</h3>
                    <p>Fill the admission form with accurate personal, educational, and program preference details ensuring completeness.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload</h3>
                    <p>Submit scanned copies of required documents including educational certificates, ID proof, and photographs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Complete fee payment through available online methods with applicable scholarship deductions processed automatically.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation & Access</h3>
                    <p>Receive admission confirmation with LMS login credentials enabling commencement of academic activities.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BBA/BCA/B.Com):</strong> 10+2 from recognized board with minimum pass marks. No entrance examination required</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MBA/MCA/M.Com):</strong> Bachelor's degree from recognized university with minimum 50% aggregate marks. Multiple admission cycles throughout year</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Financial Support:</strong> Scholarship opportunities for meritorious students. Education loan facilitation available. Flexible payment options</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Essential Information</h3>
                <ul>
                  <li>Multiple admission cycles throughout the year</li>
                  <li>Eligibility: 10+2 for UG programs, Bachelor's degree for PG programs</li>
                  <li>No entrance examination required</li>
                  <li>Scholarship opportunities for meritorious students</li>
                  <li>Education loan facilitation available</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development Support</h2>
              <p className={styles.sectionDesc}>
                Dedicated placement assistance connecting graduates with opportunities
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>₹2.5L</h3>
                  <p>Average Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹7.5L</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100+</h3>
                  <p>Placement Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Support Access</p>
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
                Answers to common queries about Vivekananda Global programs
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
                <h3>Have More Questions?</h3>
                <p>Our counselors are here to provide personalized guidance</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Speak with Counselor</button>
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

export default VivekanandaGlobal;

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const ManipalUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online MBA', fee: 175000, duration: '2 Years', specializations: 16 },
    { name: 'Online BBA', fee: 135000, duration: '3 Years', specializations: 8 },
    { name: 'Online BCA', fee: 135000, duration: '3 Years', specializations: 5 },
    { name: 'Online B.Com', fee: 99000, duration: '3 Years', specializations: 1 },
    { name: 'Online MCA', fee: 158000, duration: '2 Years', specializations: 6 },
    { name: 'Online M.Com', fee: 108000, duration: '2 Years', specializations: 1 },
    { name: 'Online MA', fee: 140000, duration: '2 Years', specializations: 2 },
    { name: 'Online BA', fee: 75000, duration: '3 Years', specializations: 1 },
    { name: 'Online MBA (Dual)', fee: 175000, duration: '2 Years', specializations: 2 },
    { name: 'Distance MBA', fee: 175000, duration: '2 Years', specializations: 1 },
    { name: 'B.Tech', fee: 562000, duration: '3 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'NAAC A++ accredited premier institution with global recognition',
    'Ranked 6th in University category by NIRF 2023',
    'QS World University Rankings 751-800 globally, Top 215 in Asia',
    'Over 35,000 students from 60+ countries studying worldwide',
    '3,000+ expert faculty delivering world-class education',
    'Collaborations with 250+ international institutions and universities',
    'Advanced Learning Management System with interactive sessions',
    'Strong industry partnerships ensuring excellent placement records'
  ];

  const approvals = ['UGC', 'AICTE', 'NAAC A++', 'WES', 'QS Ranked'];
  const nirfRank = 'Rank 6';
  const accreditation = 'NAAC A++';

  const placementPartners = [
    'Accenture', 'Amazon', 'Cognizant', 'EY', 'Flipkart', 
    'IBM', 'Indigo', 'KPMG', 'Microsoft', 'Deloitte', 'TCS', 'Wipro'
  ];

  const faqs = [
    {
      question: 'Are Manipal University online programs UGC approved?',
      answer: 'Yes, Manipal Academy of Higher Education (MAHE) online programs are fully approved by UGC and hold the same value as traditional on-campus degrees.'
    },
    {
      question: 'What makes MAHE different from other online universities?',
      answer: 'MAHE is ranked 6th by NIRF, has NAAC A++ accreditation, and offers globally recognized degrees with QS World University Rankings. The institution has 70+ years of academic excellence and international collaborations.'
    },
    {
      question: 'How are online classes conducted at Manipal?',
      answer: 'Classes are delivered through a state-of-the-art Learning Management System featuring live interactive sessions, recorded lectures for flexible viewing, digital study resources, and regular faculty interactions.'
    },
    {
      question: 'Does Manipal provide career support for online students?',
      answer: 'Yes, MAHE offers comprehensive career services including placement assistance, resume workshops, interview preparation, access to job portals, and connections with 300+ recruitment partners.'
    },
    {
      question: 'What scholarship options are available?',
      answer: 'The university offers various scholarships including Kalam-Pai Scholarship, Merit-based Scholarships for PG programs, Freeship Scholar and Achiever Scholarships, and financial aid for deserving students.'
    },
    {
      question: 'Is the online degree globally recognized?',
      answer: 'Absolutely. MAHE degrees are recognized globally including WES evaluation, making them acceptable for employment and higher studies in countries like USA, Canada, UK, Australia, and across Europe.'
    }
  ];

  return (
    <>
      <Head>
        <title>Manipal University Online - MAHE Distance Learning Programs | EduConnect</title>
        <meta name="description" content="Discover Manipal University's UGC-approved online programs. Ranked 6th by NIRF with NAAC A++ accreditation. MBA, MCA, BBA, BCA and more." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Manipal University.png" 
                alt="Manipal University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Manipal, Karnataka</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(857 Reviews)</span>
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
              <h2>About Manipal University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Manipal Academy of Higher Education (MAHE) represents seven decades of educational excellence, 
                  established in 1953 as India's pioneering self-financed institution for medical education. Today, 
                  MAHE stands as a globally recognized university offering comprehensive programs across diverse disciplines 
                  to over 35,000 students representing 60 nations worldwide.
                </p>
                <p>
                  The university's online division brings MAHE's prestigious academic standards directly to learners 
                  everywhere, maintaining the same rigorous curriculum and expert faculty as on-campus programs. 
                  With NAAC A++ accreditation (CGPA 3.65/4.0) and NIRF Rank 6 in the University category, MAHE 
                  exemplifies quality education meeting international benchmarks.
                </p>
                <p>
                  MAHE's global footprint includes multiple campuses across India (Manipal, Bengaluru, Jamshedpur) 
                  and an international campus in Dubai, UAE. The institution offers 300+ programs spanning undergraduate, 
                  postgraduate, and doctoral levels across 31 specialized streams including Health Sciences, Engineering, 
                  Management, Liberal Arts, and Communication.
                </p>
                <p>
                  Through advanced technology integration and innovative pedagogy, MAHE online programs deliver 
                  world-class education featuring live interactive classes, comprehensive digital resources, 
                  experienced faculty guidance, and robust career support services ensuring graduates are industry-ready 
                  professionals equipped for global opportunities.
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
                  <div className={styles.statNumber}>35,000+</div>
                  <div className={styles.statLabel}>Global Students</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>60+</div>
                  <div className={styles.statLabel}>Countries Represented</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Rank 6</div>
                  <div className={styles.statLabel}>NIRF University Category</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>A++</div>
                  <div className={styles.statLabel}>NAAC Accreditation</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore UGC-approved degree programs designed for career advancement and skill development
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
                <strong>Note:</strong> Flexible EMI options available. Scholarships offered based on merit and need.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Simple steps to begin your educational journey with Manipal University Online
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Course Selection & Registration</h3>
                    <p>Browse available programs on the official website, verify eligibility criteria, and register using your mobile number and email for verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Complete Application Form</h3>
                    <p>Fill in personal, educational, and professional details. Ensure accuracy to avoid processing delays.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload</h3>
                    <p>Submit scanned copies of mark sheets, certificates, ID proof, and photographs as per specifications.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Complete fee payment through secure online gateway. Multiple payment options including credit/debit cards, net banking, and UPI available.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation & Access</h3>
                    <p>Receive admission confirmation via email/SMS with student login credentials to access the Learning Management System.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Online Programs (BBA/BCA/B.Com):</strong> 10+2 from recognized board with minimum 50% marks. No entrance examination required for most programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Online Programs (MBA/MCA/M.Com):</strong> Bachelor's degree from UGC recognized university with 50% aggregate marks. Work experience preferred for MBA</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Certification Programs:</strong> ABC ID mandatory per UGC guidelines. Fee refund policy applicable within specified timeframe. Admissions twice yearly (Jan/Feb, July/Aug)</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions conducted twice yearly - January/February and July/August sessions</li>
                  <li>No entrance examination required for most programs</li>
                  <li>Create ABC ID (Academic Bank of Credits) as mandated by UGC</li>
                  <li>Required documents: 10th & 12th mark sheets, graduation degree (for PG), ID proof, photographs</li>
                  <li>Fee refund policy applicable as per UGC guidelines within specified timeframe</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Services & Placements</h2>
              <p className={styles.sectionDesc}>
                Comprehensive career support connecting you with leading employers globally
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>1,500+</h3>
                  <p>Annual Placement Offers</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Recruitment Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Global</h3>
                  <p>Career Opportunities</p>
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
              <p className={styles.sectionDesc}>
                Get answers to common queries about Manipal University Online programs
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
                <h3>Need More Information?</h3>
                <p>Our admission counselors are available to guide you through the enrollment process</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Speak with Our Experts</button>
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

export default ManipalUniversity;

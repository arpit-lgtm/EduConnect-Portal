import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const JammuUniversityDistanceEducation = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Distance MBA (Various Specializations)', fee: '₹54,000', duration: '2 Years' },
    { name: 'Distance MCA', fee: '₹45,000', duration: '2 Years' },
    { name: 'Distance M.Com', fee: '₹12,500', duration: '2 Years' },
    { name: 'Distance M.Sc (Multiple Streams)', fee: '₹15,000', duration: '2 Years' },
    { name: 'Distance MA (Various Disciplines)', fee: '₹12,000', duration: '2 Years' },
    { name: 'Distance BBA', fee: '₹28,500', duration: '3 Years' },
    { name: 'Distance BCA', fee: '₹36,000', duration: '3 Years' },
    { name: 'Distance B.Com', fee: '₹15,000', duration: '3 Years' },
    { name: 'Distance B.Sc (Multiple Specializations)', fee: '₹18,000', duration: '3 Years' },
    { name: 'Distance BA (Various Subjects)', fee: '₹15,000', duration: '3 Years' }
  ];

  const keyHighlights = [
    'NIRF Rank 51 - Recognized among top 100 universities in India',
    'Established in 1969 with over 50 years of academic excellence',
    'NAAC A++ accredited institution with highest quality standards',
    'UGC and DEB approved distance education programs',
    'Directorate of Distance Education with robust infrastructure',
    'Flexible learning schedules suitable for working professionals',
    'Self-paced study materials and online learning resources',
    'Affordable fee structure with installment payment options'
  ];

  const approvals = ['UGC', 'NAAC A++'];
  const nirfRank = 'Rank 51';
  const accreditation = 'NAAC A++';

  const placementPartners = [
    'Infosys', 'TCS', 'Wipro', 'Tech Mahindra',
    'HCL Technologies', 'Cognizant', 'Accenture', 'IBM',
    'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra',
    'Reliance Industries', 'Airtel', 'Vodafone Idea', 'Jio',
    'Amazon', 'Flipkart', 'Paytm', 'OYO', 'Zomato'
  ];

  const faqs = [
    {
      question: 'How can I contact the Directorate of Distance Education, University of Jammu?',
      answer: 'You can contact the Directorate of Distance Education at University of Jammu through their official website at www.distanceeducationju.in, email at director.dde@jammuuniversity.ac.in, or call their helpline during office hours. The directorate is located at University of Jammu Campus, Jammu - 180006, J&K, India.'
    },
    {
      question: 'Are the distance education degrees from Jammu University valid?',
      answer: 'Yes, absolutely. All distance education programs offered by University of Jammu through its Directorate of Distance Education are fully approved by UGC-DEB (Distance Education Bureau) and are equivalent to regular degrees. The university has NAAC A++ accreditation and NIRF Rank 51, ensuring high-quality education standards.'
    },
    {
      question: 'Can I apply for government jobs with a distance degree from Jammu University?',
      answer: 'Yes, degrees obtained through Jammu University\'s distance education programs are UGC-approved and are valid for all government job applications. They are recognized by central and state government departments, public sector undertakings, and educational institutions for employment and higher education purposes.'
    },
    {
      question: 'What is the examination pattern for distance education programs at Jammu University?',
      answer: 'The examination system includes both internal assessments and term-end examinations. Students receive study materials and assignments throughout the year. Term-end examinations are conducted at designated examination centers across various locations. The university also offers online examination facilities for certain programs.'
    },
    {
      question: 'Are distance education programs equivalent to regular degrees at Jammu University?',
      answer: 'Yes, as per UGC regulations, distance education programs offered by recognized universities like Jammu University hold the same value as regular on-campus degrees. The syllabus, academic standards, and degree certificates maintain equivalent status for all purposes including employment and higher education.'
    },
    {
      question: 'What facilities are provided to distance education students at Jammu University?',
      answer: 'Distance education students receive comprehensive study materials, access to online learning resources, counseling sessions at regional centers, library facilities, and student support services. The university conducts contact programs, provides assignment feedback, and offers examination centers at multiple locations for student convenience.'
    }
  ];

  return (
    <>
      <Head>
        <title>Jammu University Distance Education - UGC Approved Programs | EduConnect</title>
        <meta name="description" content="Explore University of Jammu's UGC-approved distance education programs. MBA, MCA, M.Com, MA, BA, B.Com and more with NIRF Rank 51." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Jammu University.png" 
                alt="University of Jammu Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Jammu, J&K, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.4/5</span>
                    <span className={styles.reviews}>(380 Reviews)</span>
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
              <h2>About University of Jammu Distance Education</h2>
              <div className={styles.aboutContent}>
                <p>
                  The University of Jammu was established in 1969 by an Act of the Jammu and Kashmir Legislative Assembly and is a member of the Association of Indian Universities (AIU). Over the past five decades, the university has grown tremendously and earned recognition as one of North India's premier educational institutions. With NIRF Rank 51 and NAAC A++ accreditation, the University of Jammu maintains exceptional standards of academic excellence and research innovation.
                </p>
                <p>
                  The Directorate of Distance Education at the University of Jammu was established to provide accessible, flexible, and quality higher education to students who are unable to attend regular classes due to work commitments, geographical constraints, or other personal circumstances. The directorate operates with the vision of democratizing education and has successfully empowered thousands of learners across Jammu & Kashmir and beyond through its comprehensive distance learning programs.
                </p>
                <p>
                  Currently, the University of Jammu Distance Education offers a wide spectrum of undergraduate, postgraduate, and diploma programs across various disciplines including Management (MBA), Computer Applications (MCA, BCA), Commerce (M.Com, B.Com), Science (M.Sc, B.Sc), Arts (MA, BA), and Business Administration (BBA). All programs are designed with industry-relevant curricula and are approved by the UGC Distance Education Bureau, ensuring equivalence with regular degrees for employment and higher education purposes.
                </p>
                <p>
                  The university provides robust learner support through study materials, online resources, counseling sessions at regional centers, and examination facilities at multiple locations. With experienced faculty, modern infrastructure, and commitment to student success, the University of Jammu's Distance Education programs offer an ideal pathway for career advancement and academic growth for working professionals and aspiring students.
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
                  <div className={styles.statNumber}>51</div>
                  <div className={styles.statLabel}>NIRF Ranking</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Hiring Partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50%</div>
                  <div className={styles.statLabel}>Avg. Salary Hike</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>1969</div>
                  <div className={styles.statLabel}>Established</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Explore our diverse range of UGC-approved distance education programs designed for your career growth
              </p>
              
              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Duration</th>
                      <th>Total Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>{course.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> All programs are UGC-DEB approved and equivalent to regular degrees. Fees may vary slightly based on specializations. Study materials, online resources, and examination fees are included in the total fees. The university offers flexible payment options with semester-wise or annual payment facilities. Contact programs and counseling sessions are conducted at regional centers.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these simple steps to secure your admission at University of Jammu Distance Education
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>Navigate to the University of Jammu Directorate of Distance Education website (distanceeducationju.in) and explore available programs, eligibility criteria, and fee structure.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Registration</h3>
                    <p>Click on 'New Registration' link and create your account by providing your mobile number, email ID, and basic details. You will receive OTP for verification.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Login with your registered credentials and complete the online application form. Provide accurate information including personal details, educational qualifications, program choice, and contact information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Upload scanned copies of required documents including photograph, signature, educational certificates (10th, 12th, graduation for PG programs), ID proof, and category certificate if applicable.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Submission</h3>
                    <p>Pay the admission fee through the online payment gateway using debit card, credit card, net banking, or UPI. Download the payment receipt after successful transaction.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepContent}>
                    <h3>Confirmation & Study Materials</h3>
                    <p>After verification of application and documents, you will receive admission confirmation via email and SMS. Study materials will be dispatched to your registered address, and you will get access to online learning resources.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>BA/B.Com/B.Sc/BBA/BCA:</strong> 10+2 from a recognized board with minimum 45% marks (40% for reserved categories)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MA/M.Com/M.Sc:</strong> Bachelor's degree from a UGC-recognized university with minimum 50% marks (45% for SC/ST)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA:</strong> Graduation in any discipline from a recognized university with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MCA:</strong> Bachelor's degree with Mathematics at 10+2 level or graduation level with minimum 50% marks</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> No upper age limit for admission to distance education programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Working Professionals:</strong> Can pursue distance education while continuing their employment</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Information</h3>
                <ul>
                  <li>Admissions are conducted biannually - for January and July sessions</li>
                  <li>Students must create ABC ID (Academic Bank of Credits) and DEB ID as per UGC guidelines</li>
                  <li>Category certificates (SC/ST/OBC/EWS) must be issued by competent authority</li>
                  <li>Migration certificate and character certificate required at the time of final admission</li>
                  <li>Examination centers available at multiple locations across J&K and other states</li>
                  <li>Study materials dispatched within 30 days of admission confirmation</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Support & Placements</h2>
              <p className={styles.sectionDesc}>
                Unlock career opportunities through our extensive placement network and industry partnerships
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Active Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>More Interview Calls</p>
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
                Find answers to common queries about University of Jammu Distance Education programs
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
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default JammuUniversityDistanceEducation;

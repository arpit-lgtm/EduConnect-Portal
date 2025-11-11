import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMBangalore = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 1180000, duration: '2 Years', specializations: 1 },
    { name: 'Online BBA', fee: 450000, duration: '3 Years', specializations: 1 },
    { name: 'Doctor of Philosophy', fee: 2450000, duration: '2 Years', specializations: 1 },
    { name: 'Online MBA', fee: 2500000, duration: '2 Years', specializations: 1 },
    { name: 'PhD', fee: 250000, duration: '5 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Established in 1973 - India\'s leading Business School with 50+ years of excellence',
    'Ranked 2nd by NIRF 2024 by Ministry of Education, Government of India',
    'EQUIS accredited by EFMD - European Foundation for Management Development',
    'FT MIM Global Rank 2022: 1st in India and 31st globally',
    'Eduniversal 2022: Number one position in B-School category in Central Asia',
    'QS EMBA Rankings 2023: Number one in India for PGPEM program and 43rd in the world',
    '108+ expert faculty members with industry and research excellence',
    '1200+ diverse student community from across India and the world',
    'Member of GNAM with 32 eminent Business Schools worldwide',
    'Student Exchange Programmes across North America, Europe, Australia, South America, and Asia',
    'Online programs launched in 2014 for students across the globe',
    '11 disciplines offered including Accounting, Finance, Business Analytics, Corporate Strategy',
    'Doctoral Programme, MBA, MBA (Business Analytics), and various certificate programs',
    '500+ students placed annually with 530+ offers and 90%+ acceptance rate',
    'Average salary hike of 50% for students post-program completion',
    'Financial aid available through various scholarships including Aditya Birla, Citi Women\'s Leader Award, Yes Bank, OPJEMS'
  ];

  const approvals = ['NIRF', 'EQUIS'];
  const nirfRank = 'Rank 2 - Management Category';
  const accreditation = 'EQUIS Accredited';

  const placementPartners = [
    'Google', 'ICICI Bank', 'Amazon', 'Bajaj Finserv', 'Cognizant', 'Deloitte',
    'Flipkart', 'IBM', 'ITC', 'Microsoft', 'Tata Power', 'Wipro'
  ];

  const faqs = [
    {
      question: 'Does IIM Bangalore offer online programs?',
      answer: 'Yes, IIM Bangalore started offering online study programs in 2014 for students from across the globe. The online programs cover 11 disciplines including Accounting, Finance, Business Analytics, Corporate Strategy, Brand Management, and more, providing flexibility for working professionals.'
    },
    {
      question: 'What disciplines are offered by IIM Bangalore in online mode?',
      answer: 'IIM Bangalore offers online courses in 11 disciplines: Accounting for Decision-Making, Accounting and Finance, Bayesian Statistics, Advanced Corporate Strategy, Corporate Finance, Brand Management, Cooperatives and Producer Companies, Customer Relationship Management, Financial Accounting and Analysis, and several other specialized areas.'
    },
    {
      question: 'Are the courses offered by IIM Bangalore in online mode valid?',
      answer: 'Yes, all online programs offered by IIM Bangalore are fully valid and approved by UGC. The degrees obtained through online mode are equivalent to traditional degrees and hold the same recognition in the industry. The quality of education is at par with on-campus programs.'
    },
    {
      question: 'Do I have to visit the center for the end examination at IIM Bangalore online mode?',
      answer: 'No, students enrolled in online programs are not required to visit any University or study center for examinations or project submissions. Online examinations are conducted through the examination portal with proper proctoring. Students can appear for exams from anywhere.'
    },
    {
      question: 'What courses are offered to students at IIMB?',
      answer: 'IIM Bangalore offers Doctoral Programme (Ph.D.), Master of Business Administration (MBA), Master of Business Administration in Business Analytics (MBA-BA), Executive MBA, Online MBA, Online BBA, Post Graduate Programme in Public Policy and Management, and various certificate programs across multiple disciplines.'
    },
    {
      question: 'Can I pursue a doctorate program while working?',
      answer: 'Yes, working professionals can pursue doctoral programs at IIM Bangalore. The programs are designed to accommodate working individuals, though specific requirements and time commitments vary by program. It\'s recommended to check with the admissions office for detailed information.'
    },
    {
      question: 'Can I pursue an MBA without a good CAT score?',
      answer: 'For full-time on-campus MBA programs, a good CAT score is essential. However, IIM Bangalore offers Executive MBA and online MBA programs that may not require CAT scores. These programs are designed for working professionals and have different eligibility criteria based on work experience and educational qualifications.'
    },
    {
      question: 'What is the average placement package at IIM Bangalore?',
      answer: 'IIM Bangalore is known for offering one of the top salary packages in India. Summer placements include more than 500 students annually with 530+ offers made and over 90% acceptance rate. Students are placed across all sectors including Business Analytics, E-commerce, General Management, Operations, Sales & Marketing, and IT/Product Management with leading MNCs and Fortune 500 companies.'
    },
    {
      question: 'Is financial assistance available at IIM Bangalore?',
      answer: 'Yes, IIM Bangalore offers various financial aid options including Aditya Birla Scholarship, Citi Women\'s Leader Award, Siddhartha Padam Award, Runwal Education Trust Scholarship, Yes Bank Scholarship, Employment in Social Sector Scholarship, Ministry of Social Justice and Empowerment Scholarship (SC), and OPJEMS Scholarship. A dedicated Financial Aid Committee decides scholarship awards.'
    },
    {
      question: 'Which top IIMs offer online management courses other than IIM Bangalore?',
      answer: 'Several top IIMs offer online management courses including IIM Ahmedabad, IIM Amritsar, IIM Calcutta, IIM Lucknow, IIM Indore, IIM Kozhikode, and IIM Bodh Gaya. These institutes provide various executive programs, certificate courses, and specialized management programs in online mode for working professionals.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Bangalore - Indian Institute of Management | Online MBA & Executive Programs | MBA NINJA</title>
        <meta name="description" content="IIM Bangalore - India's #2 B-School. NIRF Rank 2. Est. 1973. EQUIS accredited. Online MBA, Executive MBA, BBA, PhD programs. 108+ faculty, 1200+ students. FT MIM 1st in India." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Bangalore.png" 
                alt="IIM Bangalore Logo" 
                className={styles.universityLogoLarge}
                onError={(e) => {
                  e.target.src = '/images/universities/default-university.png';
                }}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Bangalore, Karnataka</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.4/5</span>
                    <span className={styles.reviews}>(259 Reviews)</span>
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
                {tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IIM Bangalore</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIM Bangalore (IIM-B) was established in 1973 and is India's leading Business School offering top-notch 
                  graduate programs. It is a prestigious institute with around 108+ faculty members and more than 1200 
                  students pursuing various full-time and online programs. IIM-B offers postgraduate degrees, postgraduate 
                  diplomas and certificates, and doctoral degree programs across multiple disciplines.
                </p>
                <p>
                  The institution provides comprehensive programs including Doctoral Programme (Ph.D.), Master of Business 
                  Administration (MBA), Master of Business Administration in Business Analytics (MBA-BA), Post Graduate 
                  Programme in Public Policy and Management, and various certificate programs. In 2014, IIM-B launched 
                  online study programs for students across the globe, offering courses in 11 disciplines including 
                  Accounting, Finance, Business Analytics, Corporate Strategy, Brand Management, and many more.
                </p>
                <p>
                  IIM Bangalore has been consistently ranked among the top B-Schools globally. It is ranked 2nd by NIRF 
                  2024 by the Ministry of Education, Government of India. The institute has achieved remarkable 
                  international recognition including FT MIM Global Rank 2022 as 1st in India and 31st globally. 
                  According to Eduniversal 2022, it holds the number one position in the B-School category in Central 
                  Asia. As per QS EMBA Rankings 2023, it was ranked number one in India for the PGPEM program and 43rd 
                  in the world.
                </p>
                <p>
                  The institution was accredited by EQUIS (EFMD Quality Improvement System) in 2016, which is accredited 
                  by EFMD (European Foundation for Management Development), a specialized body offering higher education 
                  in MBA. IIM-B has a strong alumni international network through GNAM (A Global Network for Advanced 
                  Management), consisting of 32 eminent Business Schools around the world.
                </p>
                <p>
                  The institute has Student Exchange Programmes with partners across North America, Europe, Australia, 
                  South America, and Asia. They are developing a new campus at Jigani, 27 km from the Bannerghatta Road 
                  campus, demonstrating their commitment to expansion and growth.
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
                  <div className={styles.statNumber}>530+</div>
                  <div className={styles.statLabel}>Placement Offers</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>90%+</div>
                  <div className={styles.statLabel}>Offer Acceptance</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Students Placed</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NIRF 2</div>
                  <div className={styles.statLabel}>Management Rank</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Courses Offered at IIM Bangalore</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of management and business programs designed for diverse educational needs.
              </p>

              <div className={styles.coursesTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Specializations</th>
                      <th>Duration</th>
                      <th>Total Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((course, idx) => (
                      <tr key={idx}>
                        <td className={styles.courseName}>{course.name}</td>
                        <td>{course.specializations} {course.specializations === 1 ? 'Specialization' : 'Specializations'}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>India's #2 B-School Excellence:</strong> IIM-B is India's leading Business School established in 
                1973 offering world-class programs. Ranked 2nd by NIRF 2024 with EQUIS accreditation ensuring global 
                standards. The institute offers programs in 11 different disciplines including Accounting, Finance, 
                Business Analytics, Corporate Strategy, Brand Management, Customer Relationship Management, and more. 
                Online programs launched in 2014 provide flexible learning for students worldwide. FT MIM ranked 1st in 
                India and 31st globally. QS EMBA Rankings 2023 placed PGPEM program 1st in India and 43rd worldwide. 
                Member of GNAM with 32 global Business Schools. 108+ expert faculty members guiding 1200+ students. 
                Student Exchange Programmes across 5 continents. Financial assistance available through various 
                scholarships including Aditya Birla Scholarship, Citi Women's Leader Award, Yes Bank Scholarship, OPJEMS 
                Scholarship, and many more.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these steps to secure your admission at IIM Bangalore for on-campus and online programs.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website & Select Course</h3>
                    <p>Visit the official website of IIM Bangalore and select the course you want to apply for. Choose between full-time on-campus programs or flexible online programs based on your requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Appear for Entrance Exam (On-Campus)</h3>
                    <p>For full-time regular courses, you need to appear in the CAT entrance examination. Selection is based on your CAT rank, academic credentials, skills assessment, and personal interview performance.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Login & Fill Application Form</h3>
                    <p>For online programs, log in to the admission portal and fill out the application form with your academic credentials and other relevant information. Upload all essential documents including mark sheets, certificates, and ID proof.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Fee & Submit Application</h3>
                    <p>Complete the application fee payment through the secure online payment gateway. Download the fee receipt and application form for future reference. Your admission will be confirmed upon successful payment.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Eligibility & Important Information</h3>
                <ul>
                  <li><strong>For On-Campus Programs:</strong> Candidates must appear for CAT entrance examination. Admission is based on CAT score, academic performance, interview, and overall profile assessment.</li>
                  <li><strong>For Online Programs:</strong> Candidates can directly apply without entrance exam. Must have completed graduation from a recognized university. Working professionals and fresh graduates both can apply.</li>
                  <li><strong>ABC & DEB ID Requirement:</strong> According to the latest UGC guidelines, all candidates must create their ABC ID (Academic Bank of Credits) and DEB ID to get admission. Admissions are now available twice a year - July/August and January/February batches as per new UGC notification.</li>
                  <li><strong>Important:</strong> UGC declares 100% Fee Refund policy for students within a specified period. All online programs are approved by UGC and degrees obtained are equivalent to traditional degrees.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements at IIM Bangalore</h2>
              <p className={styles.sectionDesc}>
                IIM Bangalore is known to offer one of the top salary packages every year with exceptional placement 
                records across diverse sectors and industries.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>530+</h3>
                  <p>Placement Offers</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>90%+</h3>
                  <p>Offer Acceptance Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>500+</h3>
                  <p>Students Placed Annually</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
              </div>

              <h3>Placement Highlights</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Summer placements include more than 500 students annually with 530+ offers made</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>More than 90% of placement offers are accepted by students</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Students get placements across all sectors including Business Analyst, E-commerce, General Management</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Placements in Operations, Sales & Marketing, IT/Product Management, and many more domains</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Top recruiters include leading MNCs and Fortune 500 companies</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Strong alumni network providing mentorship and career guidance</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>300+ hiring partners actively recruiting IIM-B graduates</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Average salary hike of 50% for students post-program completion</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>3X increase in interview opportunities for enrolled students</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Global placement opportunities through international collaborations</span>
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
              
              <div className={styles.faqContainer}>
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
};

export default IIMBangalore;

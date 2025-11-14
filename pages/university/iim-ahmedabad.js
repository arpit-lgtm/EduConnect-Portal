import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMAhmedabad = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive Program In Management', fee: 953433, duration: '6 Months', specializations: 1 },
    { name: 'Global Management Program', fee: 953433, duration: '6 Months', specializations: 1 },
    { name: 'Executive MBA', fee: 3200000, duration: '1 Year', specializations: 1 },
    { name: 'Online MBA', fee: 2000000, duration: '2 Years', specializations: 1 },
    { name: 'Doctor of Philosophy', fee: 1000000, duration: '2 Years', specializations: 1 },
    { name: 'Distance MBA', fee: 150000, duration: '2 Years', specializations: 1 },
    { name: 'PhD', fee: 50000, duration: '3 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Established on 11 December 1961 in Gujarat with support from Government of India and Harvard Business School',
    'Granted Institute of National Importance status by MHRD',
    'NIRF Rank 1 in Management category since 2018',
    'Financial Times Executive Rankings 2022: Ranked 39th for Executive Education',
    'Masters in Management Rankings (MBA) 2022: Ranked 29th position',
    'Number 1 in Eduniversal Best Masters Ranking in Agribusiness or Food Industry Management',
    'Ranked first in Asia-Pacific and among best 50 in the world',
    'EQUIS accredited ensuring degrees at par with Top Global Business Schools',
    'Pedagogy derived from top global business schools including Harvard Business School',
    '140+ firms participate in placement process',
    'WES, EQUIS, and NAAC approved programs',
    'Multiple scholarship opportunities including Need-based, SC/ST, Minority welfare, and Industry scholarships'
  ];

  const approvals = ['NIRF', 'WES', 'NAAC', 'EQUIS'];
  const nirfRank = 'Rank 1 - Management Category';
  const accreditation = 'NAAC & EQUIS Accredited';

  const placementPartners = [
    'McKinsey & Company', 'KPMG', 'Deloitte', 'Alvarez & Marsal', 
    'Synergy Consulting', 'GEP Consulting', 'ICICI Bank', 'Axis Bank',
    'Byjus', 'HCL', 'IBM', 'ITC', 'Microsoft', 'Tata Motors',
    'Decathlon', 'EY', 'PwC', 'BCG', 'Bain & Company', 'Accenture',
    'Google', 'Amazon', 'Infosys', 'Wipro'
  ];

  const faqs = [
    {
      question: 'Does IIM Ahmedabad offer online programs?',
      answer: 'Yes, IIM Ahmedabad offers various online programs including Executive Programs in Management, Global Management Program, Online MBA, and Executive MBA. These programs are designed for working professionals and can be pursued from anywhere with the same quality standards as on-campus programs.'
    },
    {
      question: 'Are the courses offered by IIM Ahmedabad in online mode Valid?',
      answer: 'Yes, all courses offered by IIM Ahmedabad in online mode are completely valid and recognized. IIM Ahmedabad is accredited by EQUIS (European Quality Improvement System), and all degree programs are at par with Top Global Business Schools. The online programs maintain the same rigorous standards as campus programs.'
    },
    {
      question: 'Can we pursue an online examination at IIM Ahmedabad?',
      answer: 'Yes, examinations for students enrolled in online programs at IIM Ahmedabad are conducted in online mode. All courses offered in online mode are self-paced and live, and can be pursued from anywhere anytime through the official portal of the university.'
    },
    {
      question: 'Do I have to Visit IIM-A to pursue my online course?',
      answer: 'No, for online programs, you do not need to visit the campus. All sessions, events, and examinations are conducted in online mode which allows students to get all the information at their convenience. The university provides all course materials digitally to students.'
    },
    {
      question: 'What courses are offered to the students at IIM-A?',
      answer: 'IIM Ahmedabad offers MBA, PGDM, Executive MBA, PGDM, Certificate courses, PhD programs, and various executive programs. This includes PGPM, Post Graduate Programme in Management for Executives (PGPX), Food and Agri-Business Management (PGP-FABM), e-Mode Post Graduate Program in Management (ePGP), and ePost Graduate Diploma in Advanced Business Analytics (ePGD-ABA).'
    },
    {
      question: 'What are the top part-time courses offered by government-approved universities in India?',
      answer: 'Top part-time courses include Executive MBA programs, Online MBA, various PG Diplomas and Certificates in specialized areas like Data Science, Business Analytics, Leadership, Finance, Marketing, HR, Operations, and more. IIM Ahmedabad offers several executive programs suitable for working professionals.'
    },
    {
      question: 'What are some best online executive programs in India?',
      answer: 'IIM Ahmedabad offers top online executive programs including Executive Program in Management, Global Management Program, Executive MBA, and various specialized certificate programs in Leadership, Finance, Marketing, HR, Data Science, AI & Machine Learning, Digital Marketing, and Business Analytics.'
    },
    {
      question: 'Can I pursue a doctorate program while working?',
      answer: 'Yes, IIM Ahmedabad offers PhD programs that can be pursued by working professionals. The Doctor of Philosophy program is designed to accommodate the schedules of working individuals while maintaining rigorous academic standards.'
    },
    {
      question: 'Can I pursue an MBA without a good CAT score?',
      answer: 'For IIM Ahmedabad\'s online programs and executive programs, admission requirements differ from full-time MBA programs. Online MBA and Executive MBA programs have different eligibility criteria that may not require CAT scores. However, for full-time MBA/PGDM programs, a good CAT score is typically required.'
    },
    {
      question: 'Which top IIMs offer online management courses other than IIM Ahmedabad?',
      answer: 'Several top IIMs offer online management courses including IIM Bangalore, IIM Calcutta, IIM Lucknow, IIM Indore, IIM Kozhikode, and other IIMs. These institutes provide various executive programs, certificate courses, and specialized management programs in online mode for working professionals.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Ahmedabad - Indian Institute of Management | Online & Executive Programs | MBA NINJA</title>
        <meta name="description" content="IIM Ahmedabad - India's #1 B-School. NIRF Rank 1 since 2018. Est. 1961. EQUIS accredited. Online MBA, Executive MBA, PhD programs. Harvard pedagogy." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Ahmedabad.png" 
                alt="IIM Ahmedabad Logo" 
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
                  <span className={styles.infoValue}>📍 Ahmedabad, Gujarat</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.4/5</span>
                    <span className={styles.reviews}>(348 Reviews)</span>
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
                {tab === 'courses' ? 'Programs & Fees' : tab === 'faqs' ? 'FAQ' : tab === 'courses' ? 'Programs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IIM Ahmedabad</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIMA, also known as Indian Institute of Management Ahmedabad, is India's top B-School that was established on 
                  11 December 1961, in Gujarat, with the support of the Government of India, various prominent Indian Industry 
                  Members, and Harvard Business School. The University has been granted the prestigious Institute of National 
                  Importance by MHRD (Ministry of Human Resource Development). It is delivering excellent education to all the 
                  students from India and Abroad.
                </p>
                <p>
                  The University is known to be India's leading business School and one of the most prestigious business schools 
                  globally. This institute is known to be 1st among India's B-Schools by the National Institutional Ranking Framework 
                  since 2018. It is ranked 39th for its Executive Education (Financial Times Executive Rankings 2022).
                </p>
                <p>
                  It has been ranked 29th position for its special program Masters in Management Rankings (MBA), in the year 2022. 
                  It got to number one in the category of Eduniversal Best Masters Ranking in Agribusiness or Food Industry Management. 
                  It has been ranked number one among the top B-Schools in our country by the B-School ranking since the year 2018.
                </p>
                <p>
                  The University has some of the top faculty with brilliant minds and ideas of Business-World. The institute's pedagogy 
                  is derived from top global business schools and institutes like Harvard Business School. The Institute is amazing and 
                  offers quality lectures. They have maintained a reputation that gives them recognition in the global market.
                </p>
                <p>
                  This institution is accredited by EQUIS (European Quality Improvement System), and hence all the degree programs 
                  offered to the students by this University are at par with Top Global Business Schools. Talking about its academic 
                  programs, this institute has been rated consistently for 50 years as one of the best management schools in India and 
                  ranked first in Asia-Pacific and ranked among the best 50 in the world.
                </p>
                <p>
                  The University is offering various courses to the students by offering on-campus programs and in online mode. 
                  NIRF Rank 2024 positioned this institute as the number 1 Indian Institute in the category of Management.
                </p>

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
                    <div className={styles.statNumber}>64+</div>
                    <div className={styles.statLabel}>Years of Legacy (1961)</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>#1</div>
                    <div className={styles.statLabel}>NIRF Management Rank</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>140+</div>
                    <div className={styles.statLabel}>Placement Partners</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>Top 50</div>
                    <div className={styles.statLabel}>Global B-Schools</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                IIM Ahmedabad offers 7 major programs for professionals seeking excellence in management education.
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
                        <td>{course.specializations} {course.specializations === 1 ? 'Option' : 'Options'}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>India's #1 B-School Excellence:</strong> NIRF Rank 1 in Management category since 2018 with EQUIS 
                accreditation ensuring global standards. Pedagogy derived from Harvard Business School and top global institutions. 
                Ranked 1st in Asia-Pacific and among best 50 B-Schools worldwide. Financial Times ranked 39th for Executive Education 
                and 29th for Masters in Management globally. All online programs maintain same quality as campus programs with flexible 
                learning options. 140+ top companies participate in placements including McKinsey, KPMG, Deloitte, IBM, Microsoft. 
                Multiple scholarship opportunities available including Need-based, SC/ST, Minority welfare, and Industry-sponsored 
                scholarships like Aditya Birla and O.P Jindal.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionDesc}>
                IIMA is one of the topmost universities and all students from India and abroad want to take admission to this 
                prestigious University. If you want to take admission to online programs, you can apply online after checking 
                the eligibility criteria. For full-time courses, you need to appear in IIM Entrance Examinations.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Check Eligibility Criteria</h3>
                    <p>Check the eligibility criteria of the selected course. If you want to get enrolled in a full-time course, you need to appear in entrance examinations like CAT or MAT with a good rank. For online courses, simply apply on the portal.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Fill in the essential requirements in the application form. Check the information filled in twice to avoid any mistakes. Enter educational qualifications, credentials, and experience in the industry.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Add all relevant documents asked. Essential documents include education and academic transcripts, passport-size photograph, scorecard for entrance examination (if applicable), and others as required.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment</h3>
                    <p>Move to the next step, which is filling out the fee as asked for the course. Complete the payment process using the accepted payment methods.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Verification & Confirmation</h3>
                    <p>After verification of details by the university, admission will be confirmed. Download the confirmation letter sent through mail or message for future reference. Keep login credentials safe. According to latest UGC guidelines, create ABC ID and DEB ID for admission.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>MBA/PGPM Programs:</strong> Bachelor's degree from recognized university with minimum 50% aggregate. CAT/GMAT score required for full-time programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Executive MBA/PGPX:</strong> Bachelor's degree with minimum 4-5 years professional work experience in managerial roles</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Certificate Programs:</strong> Graduation required. Working professionals and fresh graduates both eligible</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Fellowship (PhD):</strong> Master's degree or equivalent with strong academic record and research aptitude</span>
                </div>
              </div>

              <h3>Important Information</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Admission Cycles:</strong> Get admission twice a year in July/August and January/February (latest UGC notice)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>100% Fee Refund Policy:</strong> Within specified period by universities (UGC declared)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>ODL Equivalence:</strong> Degree obtained through ODL mode is equivalent to traditional degree</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Scholarships:</strong> Need-based, SC/ST, Minority welfare, Aditya Birla, Dunia, O.P Jindal scholarships available</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placement & Career Opportunities</h2>
              <p className={styles.sectionDesc}>
                IIM Ahmedabad is known for offering the best job opportunities with one of the highest placement packages among IIMs
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>140+</h3>
                  <p>Placement Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
                </div>
              </div>

              <h3>Career Support & Recruitment</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>More than 140 top firms participate in placement process annually</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Graduates hired by young and talented recruiters across various job fields and industries</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Management Consulting domain includes Alvarez & Marsal, Synergy Consulting, KPMG, GEP Consulting, McKinsey & Company</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Placements across Banking, Finance, Insurance, Consulting, Manufacturing, Media, Fintech, and IT sectors</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Highest placement packages offered to students among India's B-Schools</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Top positions at leading companies in India and abroad</span>
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
              
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IIMAhmedabad;
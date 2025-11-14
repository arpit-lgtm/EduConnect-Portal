import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IGNOUIndiraGandhiNationalOpenUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    // Online Programs
    { name: 'Online M.Com', fee: 18000, duration: '2 Years', specializations: 7 },
    { name: 'Online MA', fee: 12000, duration: '2 Years', specializations: 19 },
    { name: 'Online MBA', fee: 56000, duration: '2 Years', specializations: 67 },
    { name: 'Online MCA', fee: 48000, duration: '2 Years', specializations: 13 },
    { name: 'Online BCA', fee: 36000, duration: '3 Years', specializations: 16 },
    { name: 'Online B.Com', fee: 24000, duration: '3 Years', specializations: 10 },
    { name: 'Online BA', fee: 12000, duration: '3 Years', specializations: 13 },
    { name: 'Online M.Sc', fee: 26400, duration: '2 Years', specializations: 5 },
    { name: 'Online B.Sc', fee: 16500, duration: '3 Years', specializations: 3 },
    { name: 'Online BLIS', fee: 7900, duration: '1 Year', specializations: 1 },
    { name: 'Online MLIS', fee: 10800, duration: '1 Year', specializations: 1 },
    { name: 'Online Certificates', fee: 10000, duration: '16 months - 2 years', specializations: 1 },
    { name: 'Online Diploma', fee: 12000, duration: '6 months - 1 year', specializations: 1 },
    { name: 'Online BBA', fee: 27000, duration: '3 Years', specializations: 29 },
    { name: 'Online LLM', fee: 7000, duration: '1-2 Years', specializations: 6 },
    { name: 'Online M.Des Program', fee: 10000, duration: '2 Years', specializations: 1 },
    { name: 'B.Tech for Working Professionals', fee: 216000, duration: '3 Years', specializations: 6 },
    { name: 'M.Tech Online', fee: 20000, duration: '2 Years', specializations: 7 },
    { name: 'Online Executive MBA', fee: 64000, duration: '18 Months', specializations: 14 },
    { name: 'Online PG Diploma & Certificate', fee: 8000, duration: '1 Year', specializations: 16 },
    // ODL Programs
    { name: 'M.Com ODL', fee: 16200, duration: '2 Years', specializations: 1 },
    { name: 'MA ODL', fee: 13000, duration: '2 Years', specializations: 1 },
    { name: 'MBA ODL', fee: 62000, duration: '2 Years', specializations: 1 },
    { name: 'MCA ODL', fee: 50800, duration: '2 Years', specializations: 1 },
    { name: 'BCA ODL', fee: 48000, duration: '3 Years', specializations: 1 },
    { name: 'B.Com ODL', fee: 8100, duration: '3 Years', specializations: 1 },
    { name: 'B.Sc ODL', fee: 16500, duration: '3 Years', specializations: 1 },
    { name: 'M.Sc ODL', fee: 28000, duration: '2 Years', specializations: 1 },
    { name: 'BBA ODL', fee: 30000, duration: '3 Years', specializations: 1 },
    { name: 'BA ODL', fee: 7200, duration: '3 Years', specializations: 1 },
    { name: 'M.Tech ODL', fee: 28000, duration: '2 Years', specializations: 1 },
    { name: 'B.Tech ODL', fee: 20000, duration: '4 Years', specializations: 1 },
    // Doctoral Programs
    { name: 'Doctor of Philosophy (Ph.D)', fee: 16800, duration: '3 Years', specializations: 5 },
    { name: 'Part-Time PhD', fee: 53550, duration: '4 Years', specializations: 1 },
    { name: 'Doctorate Program', fee: 18000, duration: '3 Years', specializations: 1 },
    { name: 'PhD ODL', fee: 600000, duration: '2 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Established in 1985 by an Act of Parliament - Most trusted university in India',
    'NAAC A++ Grade accreditation with highest quality standards',
    'NIRF Rank 1 in Open University Category 2024',
    'UGC-DEB, AIU, WES recognized ensuring global acceptance',
    'Center for Online Education (COE) established June 2019',
    '250+ course options across UG, PG, Diploma, Doctoral & Certificate programs',
    'Team of 800+ highly experienced faculty members',
    '21 Schools of Studies and 67+ regional centers across India',
    'Budget-friendly fee structure with flexible course duration',
    'International collaborations with overseas institutions',
    'Advanced learning platforms: eGyankosh, Gyandhara, GyanVani, Gyandarshan, Virtual Class, E-IGNOU Library',
    'Skill-upgrading training programs enhancing employability'
  ];

  const approvals = ['UGC-DEB', 'AIU', 'NIRF', 'WES', 'NAAC A++'];
  const nirfRank = 'Rank 1 - Open University Category';
  const accreditation = 'NAAC A++ Grade';

  const faqs = [
    {
      question: 'What are the categories offered in IGNOU online courses list?',
      answer: 'IGNOU offers 250+ courses across multiple categories including Undergraduate programs (BA, B.Com, BCA, B.Sc, BBA, B.Tech, BBA, BLIS), Postgraduate programs (MA, M.Com, MBA, MCA, M.Sc, M.Tech, MLIS, LLM, M.Des), Doctoral programs (Ph.D, Part-Time PhD, Doctorate), Diploma & Certificate programs, and specialized Executive MBA programs. All programs are available in both online and ODL (Open Distance Learning) modes.'
    },
    {
      question: 'Can the on-campus window be used for IGNOU online courses admission?',
      answer: 'No, IGNOU online courses have a separate admission process through the online admission portal. Students need to apply through the official IGNOU website by filling the online application form, uploading documents, and making fee payments through the online gateway. The on-campus admission window is for regular programs only.'
    },
    {
      question: 'Can I study online in IGNOU?',
      answer: 'Yes, IGNOU offers comprehensive online programs through its Center for Online Education (COE) established in June 2019. Students can access online lectures, interactive sessions, virtual classes, and digital study materials through platforms like eGyankosh (LMS), Gyandhara (Audio Counseling), GyanVani (FM Radio), Gyandarshan (TV Channel), and E-IGNOU Library. The university provides flexibility to study anytime, anywhere with quality education.'
    },
    {
      question: 'Can I join IGNOU anytime?',
      answer: 'IGNOU has two admission cycles per year - July/August and January/February sessions. Students can apply during these admission windows. The last date to apply for July 2025 admission is 15th October 2025. Students need to check the official website for exact dates and deadlines for each admission cycle and apply accordingly.'
    },
    {
      question: 'Is attendance compulsory in IGNOU online classes?',
      answer: 'For online programs, IGNOU provides flexibility and attendance is not mandatory in the traditional sense. However, students are encouraged to attend online interactive sessions, virtual classes, and webinars to enhance their learning experience. For ODL programs, attendance at personal contact programs (PCPs) may be beneficial but is generally not compulsory. Students should check specific program requirements.'
    },
    {
      question: 'Is graduation from IGNOU valid?',
      answer: 'Yes, graduation from IGNOU is fully valid and recognized. IGNOU is a UGC-DEB recognized, AIU approved, NAAC A++ accredited, and WES recognized university established by an Act of Parliament. All degrees are equivalent to regular on-campus degrees and are accepted by government sectors, PSUs, private companies, and for higher education both in India and internationally. IGNOU ranks #1 in NIRF Open University Category 2024.'
    },
    {
      question: 'Does IGNOU have an age limit?',
      answer: 'IGNOU generally does not have a maximum age limit for most of its programs, making education accessible to learners of all ages. However, minimum age requirements vary by program - typically 17 years for undergraduate programs and a bachelor\'s degree for postgraduate programs. Some specialized programs may have specific age criteria. Students should check the eligibility requirements for their chosen program in the official prospectus.'
    }
  ];

  return (
    <>
      <Head>
        <title>IGNOU - Indira Gandhi National Open University | Online & Distance Education | MBA NINJA</title>
        <meta name="description" content="IGNOU - India's #1 Open University. NIRF Rank 1, NAAC A++. 250+ programs. Online & ODL MBA, MCA, BA, B.Com. UGC-DEB approved. Est. 1985." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IGNOU.png" 
                alt="IGNOU Logo" 
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
                  <span className={styles.infoValue}>📍 New Delhi, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.0/5</span>
                    <span className={styles.reviews}>(146 Reviews)</span>
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
            {['about', 'courses', 'admissions', 'faqs'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'courses' ? 'Programs' : tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About IGNOU (Indira Gandhi National Open University)</h2>
              <div className={styles.aboutContent}>
                <p>
                  Indira Gandhi National Open University (IGNOU) is one of the most trusted universities in India. It was established 
                  in 1985 by an Act of Parliament with a mandate to provide accessible quality higher education to all sections of 
                  society. The university is known for offering high-quality education in the online and distance learning modes, 
                  democratizing education across India and beyond.
                </p>
                <p>
                  The university has served many aspiring students with its 21 Schools of Studies and 67+ regional centers spread 
                  across India. IGNOU has made it possible for many learners to get a degree/diploma/certificate in their choice of 
                  course through online learning, who did not get admission to regular courses or were not able to afford full-time 
                  education. The university offers 250+ options of courses under the categories of UG, PG, diploma, doctoral, and 
                  certificate programs.
                </p>
                <p>
                  The university is graded as NAAC A++ and has been recognized by the University Grants Commission (UGC), which makes 
                  it trustworthy for learners at national and international levels. IGNOU has been ranked #1 in the NIRF Open University 
                  Category 2024, demonstrating its excellence in distance and online education. The university's continuous efforts to 
                  make quality education accessible to all have led it to introduce innovative and need-based courses in its course list.
                </p>
                <p>
                  Indira Gandhi National Open University established its Center for Online Education (COE) in June 2019 with a vision 
                  of making high-quality education accessible to anyone, anytime, and from anywhere. The conceptual knowledge delivered 
                  by an experienced team of 800+ faculty members helps learners achieve their professional goals through online learning. 
                  The faculty comprises subject matter experts with extensive teaching and research experience.
                </p>
                <p>
                  The collaboration with overseas partners has made the university offer innovative learning methodologies based on the 
                  latest tools and technicalities of the related field. These international collaborations equip students with a global 
                  outlook on industry trends and practices. Apart from the detailed theoretical knowledge of the topic, the university 
                  focuses on the overall development of its learners through skill-upgrading training programs that are highly beneficial 
                  for their long-term careers.
                </p>
                <p>
                  IGNOU provides access to several online services like eGyankosh (LMS Portal for comprehensive learning materials), 
                  Gyandhara (Audio Counseling Services for academic support), GyanVani (Educational FM Radio for broadcast education), 
                  Gyandarshan (Education TV Channel for video lectures), Virtual Class (for live interactive sessions), and E-IGNOU 
                  Library (digital library resources) that strengthen core learnings and keep students updated with the latest trends 
                  in their respective industries.
                </p>
                <p>
                  The university offers flexibility in the course duration at a budget-friendly fee structure that makes higher education 
                  accessible to all. The training programs and extracurriculars included in the course structure enhance personality and 
                  improve chances of employability. The latest curriculum designs of the courses help students upgrade their skills and 
                  prepare for jobs in today's competitive industry.
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
                    <div className={styles.statNumber}>40+</div>
                    <div className={styles.statLabel}>Years of Legacy (1985)</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>250+</div>
                    <div className={styles.statLabel}>Programs Offered</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>#1</div>
                    <div className={styles.statLabel}>NIRF Open Univ Rank</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>67+</div>
                    <div className={styles.statLabel}>Regional Centers</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                IGNOU offers 36 major programs with 250+ specialization options across online and ODL modes.
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
                <strong>India's #1 Open University:</strong> NIRF Rank 1 with NAAC A++ accreditation. Most affordable programs with 
                67 specializations in Online MBA and multiple options across all disciplines. UGC-DEB recognized degrees equivalent to 
                regular campus programs. AI-proctored online exams. Advanced learning platforms including eGyankosh, Gyandhara, GyanVani, 
                Gyandarshan, and Virtual Classes. 800+ expert faculty members with government scholarships available through National 
                Scholarship Portal.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p>IGNOU offers a simple online admission process through its official portal.</p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website</h3>
                    <p>Visit the official website of IGNOU and click on the "Apply Now" tab. Choose between Online Programme or ODL Programme admission portal as per your preference.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Student Registration</h3>
                    <p>Fill out the student registration form and register yourself with the university. Provide accurate personal and contact details for future communication.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={steps.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>After registration, re-log in to the admission portal and fill out the admission application form with all required academic and personal information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Upload the scanned copies of mandatory documents including educational certificates, ID proof, photograph, and signature as specified in the requirements.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Submit & Pay Fees</h3>
                    <p>Submit the application form and make the fee payment using the payment methods mentioned on the website - Credit Card/Debit Card/Net Banking.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Certificate/Diploma Programs:</strong> 10th/12th pass depending on program. Generally no maximum age limit for most programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/B.Com/BSc):</strong> 10+2 from recognized board with minimum pass marks. Eligibility varies by program - check official prospectus</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/MBA/M.Com/MSc):</strong> Bachelor's degree from recognized university. ABC ID and DEB ID required per UGC guidelines</span>
                </div>
              </div>

              <h3>Important Information</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Admission Cycles:</strong> July/August and January/February sessions annually</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>July 2025 Deadline:</strong> Last date to apply is 15th October 2025</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>ABC & DEB ID:</strong> Create ABC ID and DEB ID as per latest UGC guidelines</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Scholarships:</strong> Eligible students can apply on National Scholarship Portal (scholarships.gov.in)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Age Limit:</strong> Generally no maximum age limit for most programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Eligibility:</strong> Varies by program - check official prospectus for details</span>
                </div>
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

export default IGNOUIndiraGandhiNationalOpenUniversity;
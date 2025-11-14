import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const GalgotiasUniversityOnline = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'M.Tech Program', fee: 154000, duration: '2 Years', specializations: 4 },
    { name: 'B.Tech Program', fee: 315000, duration: '3 Years', specializations: 3 },
    { name: 'Online MBA', fee: 76200, duration: '2 Years', specializations: 8 },
    { name: 'Online MCA', fee: 84200, duration: '2 Years', specializations: 6 },
    { name: 'Online M.Com', fee: 50200, duration: '2 Years', specializations: 1 },
    { name: 'Online MA', fee: 40200, duration: '2 Years', specializations: 3 },
    { name: 'Online BBA', fee: 77200, duration: '3 Years', specializations: 1 },
    { name: 'Online BCA', fee: 83200, duration: '3 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Established in 2011 by Smt. Shakuntala Educational & Welfare Society in Uttar Pradesh',
    'NAAC A+ grade accreditation (3.37/4) - the only university in UP with this distinction',
    'UGC recognized autonomous institution approved by Ministry of Education, GOI',
    'Ranked 5th pan-India for maximum patent filings (Indian Patent Office Report)',
    'Diamond Band - Institute of Excellence by R World Institutional Ranking',
    'Top 12 among private universities, 50th among all government and private universities',
    'Ranked 4th in UP among private universities, 7th in UP overall',
    'NIRF ranked 91st in Management Category with AICTE and UGC approvals',
    '5-star rating in placement audit by Infomerics Analytics & Research Pvt. Ltd.',
    'Over 15,000+ students enrolled since welcoming first batch in 2011',
    'Multiple schools covering Computing, Business, Law, Engineering, Liberal Education, Media, and more',
    'Strong industry partnerships with Byjus, Samsung, FedEx, Tech Mahindra, Yamaha, and leading companies'
  ];

  const approvals = ['UGC', 'AICTE', 'NIRF', 'NAAC A+'];
  const nirfRank = 'NIRF 91st (Management)';
  const accreditation = 'UGC, AICTE, NAAC A+';

  const placementPartners = [
    'Accenture', 'Cognizant', 'Facebook', 'HCL', 
    'Infosys', 'KPMG', 'Mahindra', 'Samsung', 
    'TCS', 'Wipro', 'Byjus', 'Tech Mahindra'
  ];

  const faqs = [
    {
      question: 'Are the online courses offered by Galgotias University legally valid and recognized?',
      answer: 'Yes, all online programs offered by Galgotias University are fully valid and recognized. The university holds UGC recognition, AICTE approval, NAAC A+ grade accreditation (3.37/4), and is ranked by NIRF. Online degrees from Galgotias University carry the same validity and recognition as regular on-campus degrees, making them acceptable to top recruiters worldwide including government and private sectors.'
    },
    {
      question: 'What are the academic programs available to students at Galgotias University online?',
      answer: 'Galgotias University Online offers comprehensive undergraduate and postgraduate programs including M.Tech (4 specializations), B.Tech (3 specializations), Online MBA (8 specializations), Online MCA (6 specializations), Online M.Com (1 specialization), Online MA (3 specializations), Online BBA (1 specialization), and Online BCA (1 specialization) across various disciplines.'
    },
    {
      question: 'What are the eligibility criteria for admission to online programs at Galgotias University?',
      answer: 'Eligibility criteria vary by program level. For undergraduate programs like BBA, BCA, and B.Tech, candidates typically need 10+2 qualification from a recognized board. For postgraduate programs like MBA, MCA, M.Com, MA, and M.Tech, candidates require a relevant bachelor\'s degree from a recognized university. Specific subject requirements and minimum percentage criteria are mentioned for each program on the official university website.'
    },
    {
      question: 'What other credentials and achievements has Galgotias University online received?',
      answer: 'Galgotias University has earned numerous prestigious credentials including Diamond Band - Institute of Excellence by R World Institutional Ranking, 5-star placement audit rating by Infomerics Analytics & Research, ranking as 5th pan-India for maximum patent filings, top 12 among private universities nationally, NIRF 91st rank in Management Category, and recognition as the only UP university with 3.37/4 NAAC A+ grade.'
    },
    {
      question: 'What are the placement opportunities available at Galgotias University online?',
      answer: 'Galgotias University provides excellent placement support with 300+ hiring partners including top companies like Accenture, Cognizant, Facebook, HCL, Infosys, KPMG, Mahindra, Samsung, TCS, Wipro, Byjus, Samsung, FedEx, Tech Mahindra, and Yamaha. The university reports 50% average salary hike and 3X increase in interview opportunities for students, backed by dedicated placement assistance and career guidance.'
    },
    {
      question: 'What scholarship and financial assistance options are available?',
      answer: 'Galgotias University offers extensive financial aid including 100% tuition fee waiver for board and university toppers, 50% scholarship for JEE rank holders up to 4000, 25% fee waiver for students scoring 93%+ in PCM or 80%+ in graduation, sports quota scholarships, merit-based scholarships, and special financial aid for serving/retired defense, CRPF, parliamentary, and police personnel families. Flexible EMI payment options are also available.'
    }
  ];

  return (
    <>
      <Head>
        <title>Galgotias University Online - MBA, MCA, M.Tech & B.Tech Programs</title>
        <meta name="description" content="Explore Galgotias University Online programs. NAAC A+ accredited, UGC, AICTE, NIRF approved. MBA, MCA, M.Tech, B.Tech programs for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Galgotia University.png" 
                alt="Galgotias University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Greater Noida, Uttar Pradesh</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.6/5</span>
                    <span className={styles.reviews}>(329 Reviews)</span>
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
              <h2>About Galgotias University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Galgotias University was founded in 2011 under the sponsorship of Smt. Shakuntala Educational & Welfare Society, 
                  strategically located in Greater Noida, Uttar Pradesh. The institution has earned prestigious recognition through 
                  NAAC A+ grade accreditation and holds autonomous status granted by the University Grants Commission under the 
                  Ministry of Education, Government of India. The university proudly delivers both comprehensive online programs 
                  and traditional on-campus courses, catering to diverse student populations and learning preferences.
                </p>
                <p>
                  The university is dedicated to providing world-class education for students passionate about innovation and 
                  committed to inspiring future generations of leaders. Core institutional values emphasize trust, dependability, 
                  and unwavering commitment to academic excellence. Galgotias University encompasses extensive academic divisions 
                  including Schools of Computing Science & Engineering, Business, Law, Engineering, Liberal Education, Media & 
                  Communication Studies, Basic Sciences, Biological Sciences, Biomedical Sciences, Finance and Commerce, Nursing, 
                  Education, Design, Hospitality, Medical and Allied Sciences, Polytechnic, Agriculture, and numerous other specialized departments.
                </p>
                <p>
                  The institution has achieved remarkable recognition, securing Diamond Band - Institute of Excellence status by 
                  R World Institutional Ranking. Academic rankings demonstrate exceptional performance with top 12 placement among 
                  private universities nationally, 50th position among all government and private universities combined, 4th rank 
                  in Uttar Pradesh among private institutions, and 7th position in UP among all universities. Additionally, the 
                  university earned 5th position pan-India for maximum patent filings according to the Indian Patent Office Report 
                  for Academic Institutes & Universities.
                </p>
                <p>
                  Galgotias University has received 5-star recognition in placement audits conducted by the prestigious Infomerics 
                  Analytics & Research Pvt. Ltd. The institution maintains approvals from NIRF (ranked 91st in Management Category), 
                  AICTE, UGC, and multiple other esteemed regulatory bodies. As a government-recognized and state-approved private 
                  institution, the university has consistently delivered quality education for over a decade, serving thousands of 
                  students annually through both on-campus and online learning modalities.
                </p>
                <p>
                  Notably, Galgotias University stands as the only institution in Uttar Pradesh State to achieve the exceptional 
                  NAAC rating of 3.37 out of 4, demonstrating its unparalleled commitment to educational quality and institutional 
                  excellence. Since welcoming its inaugural batch in 2011, the university has grown exponentially to serve over 
                  15,000 enrolled students, building a strong reputation for academic rigor, innovative teaching methodologies, 
                  and comprehensive student development programs.
                </p>
                <p>
                  The university maintains strategic partnerships with leading industry organizations including Byjus, Samsung, FedEx, 
                  Tech Mahindra, Yamaha, and numerous other top-tier companies, ensuring students gain valuable exposure to real-world 
                  business environments and secure excellent placement opportunities upon graduation. These collaborations facilitate 
                  internships, industry projects, guest lectures, and direct recruitment pathways for graduates.
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
                  <div className={styles.statNumber}>14 Years</div>
                  <div className={styles.statLabel}>Academic Excellence</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NAAC A+</div>
                  <div className={styles.statLabel}>3.37/4 Rating</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>15,000+</div>
                  <div className={styles.statLabel}>Students Enrolled</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+ Partners</div>
                  <div className={styles.statLabel}>Placement Network</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Comprehensive online programs across engineering, management, commerce, and arts
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
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Twice-yearly admissions in July/August and January/February. Scholarships up to 100% available. Flexible EMI payment options offered.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Begin your academic journey at Galgotias University through our streamlined admission process
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Course Selection & Eligibility Check</h3>
                    <p>Select the appropriate course from the listed programs on the university website. Carefully review and verify the eligibility criteria requirements to ensure you qualify for admission to your chosen program.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Registration & Two-Step Verification</h3>
                    <p>Create a new registration account using a functional phone number and valid email ID. This step is crucial for completing the two-step verification process to secure your application and ensure proper communication.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Form Completion</h3>
                    <p>Complete the critical step of filling all required information correctly on the online application form. Double-check all entered information to avoid mistakes or discrepancies that could delay your admission process.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Document Upload</h3>
                    <p>Upload scanned copies of all required documents and related images. Ensure all documents are properly scanned and clearly legible for a smooth and hassle-free admission verification process.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Confirmation</h3>
                    <p>Complete the fee payment through the secure online payment portal. Download and save the payment receipt for future reference. Upon successful payment, your admission process will be finalized and confirmed.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Online Programs (BBA/BCA/B.Com):</strong> 10+2 from recognized board with minimum 50% marks. ABC ID and DEB ID mandatory per UGC guidelines</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Online Programs (MBA/MCA/M.Com):</strong> Bachelor's degree from UGC recognized university with 50% aggregate. Admissions twice annually (July/August, January/February)</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Online Recognition:</strong> Online degrees equivalent to on-campus degrees. 100% fee refund policy within specified period per UGC guidelines</span>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>All candidates must create ABC ID and DEB ID as per latest UGC guidelines</li>
                  <li>Admissions conducted twice annually in July/August and January/February sessions</li>
                  <li>Online degrees hold equivalent recognition to traditional on-campus degrees</li>
                  <li>100% fee refund policy applicable within specified period as per UGC guidelines</li>
                  <li>Examinations conducted online through LMS platform with MCQ and subjective questions</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                Access exceptional career opportunities through Galgotias University's extensive corporate partnerships
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>3,000+</h3>
                  <p>Job Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>5-star placement audit rating by Infomerics Analytics & Research Pvt. Ltd.</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Dedicated placement assistance and career guidance support</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Direct recruitment drives from 300+ top hiring partners</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Industry exposure through guest lectures and industrial visits</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Internship opportunities with leading organizations</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Resume building, interview preparation, and skill development workshops</span>
                </div>
              </div>

              <h3>Leading Recruitment Partners</h3>
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
                Common inquiries about Galgotias University online programs addressed
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
                <h3>Need Additional Information?</h3>
                <p>Our admissions advisors are available to address your specific queries</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Speak with Counselors</button>
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

export default GalgotiasUniversityOnline;

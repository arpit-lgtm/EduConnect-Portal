import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const GoldenGateUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online Global MBA', fee: 430000, duration: '15 Months', specializations: 3 },
    { name: 'Online Doctorate Courses', fee: 1065000, duration: '36 Months', specializations: 1 },
    { name: 'Full Stack Software Development Bootcamp', fee: 85000, duration: '6 Months', specializations: 1 },
    { name: 'Online Executive MBA', fee: 430000, duration: '15 Months', specializations: 5 },
    { name: 'Online Master of Science', fee: 821011, duration: '24 Months', specializations: 2 },
    { name: 'Global Business Management', fee: 313529, duration: '7-8 Months', specializations: 1 },
    { name: 'Online MBA', fee: 430000, duration: '15 Months', specializations: 3 },
    { name: 'Online DBA Courses', fee: 1065000, duration: '36 Months', specializations: 7 },
    { name: 'MBA Abroad Hybrid Program', fee: 1936078, duration: '8+12 Months', specializations: 1 },
    { name: 'Online One Year MBA', fee: 430000, duration: '15 Months', specializations: 1 },
    { name: 'Study In USA', fee: 3023307, duration: '1+3 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Founded in 1901 as YMCA Evening Law School, over 120 years of excellence in higher education',
    'Located in San Francisco, one of the most vibrant and culturally diverse cities in the United States',
    'AIU Associate Member University from April 1, 2023 - recognized in India',
    'Accredited by WSCUC (WASC Senior College and University Commission)',
    'American Bar Association (ABA) recognized School of Law offering rigorous legal education',
    'Strong industry connections in the Bay Area providing internships, networking, and experiential learning',
    'Small class sizes enabling meaningful conversations and collaborative learning environment',
    'Comprehensive academic counseling, career services, and professional development programs',
    'Flexible scheduling with evening sessions and online programs for working professionals',
    'Extensive alumni network providing vital contacts and networking opportunities'
  ];

  const approvals = ['AIU', 'WES', 'AACSB', 'WSCUC'];
  const nirfRank = 'Top US University';
  const accreditation = 'WSCUC, AACSB, ABA';

  const placementPartners = [
    'Google', 'Salesforce', 'Oracle', 'Wells Fargo',
    'Deloitte', 'Morrison & Foerster', 'Orrick', 'KPMG',
    'Ernst & Young', 'PWC', 'LinkedIn', 'Apple',
    'Facebook', 'Adobe', 'Internal Revenue Service (IRS)'
  ];

  const faqs = [
    {
      question: 'What courses are available at Golden Gate University?',
      answer: 'Golden Gate University offers a diverse range of undergraduate and graduate programs in business, law, taxation, accounting, psychology, public administration, and information technology. Online programs include MBA, Executive MBA, DBA, Master of Science, and specialized programs in business management and software development.'
    },
    {
      question: 'What are the GGU admissions requirements?',
      answer: 'Admission requirements vary by program. Generally, you need to submit an online application, pay application fee, provide certified transcripts from all prior institutions, and demonstrate English language proficiency (TOEFL/IELTS for international students). Some programs may require work experience or entrance tests.'
    },
    {
      question: 'Does GGU provide financial assistance or scholarships?',
      answer: 'Yes, GGU provides various financial assistance options including installment payment plans, education loans through partner banks, and scholarship opportunities. Students can contact the financial aid office for detailed information about available options and eligibility criteria.'
    },
    {
      question: 'Is it possible to study at GGU online?',
      answer: 'Yes, Golden Gate University offers comprehensive online programs including MBA, Executive MBA, DBA, and Master of Science degrees. The online platform features live interactive classes, recorded lectures, digital library access, and virtual learning labs with flexible scheduling for working professionals.'
    },
    {
      question: 'Does GGU provide placement assistance?',
      answer: 'Yes, GGU has a dedicated Career Planning & Placement Center that provides comprehensive support including access to job openings with local and global companies, career counseling, resume building, interview preparation, and networking opportunities with 300+ hiring partners.'
    },
    {
      question: 'Can international students apply to GGU?',
      answer: 'Yes, Golden Gate University welcomes international students. International applicants need to demonstrate English language proficiency through TOEFL or IELTS, provide certified transcripts, and meet specific program requirements. GGU is recognized as one of the best institutions in the United States for international students.'
    },
    {
      question: 'Is there a campus and student group at GGU?',
      answer: 'Yes, GGU has a main campus located in the heart of San Francisco with access to the vibrant Bay Area community. The university fosters a collaborative learning environment with small class sizes, student organizations, and networking events connecting students with the local business and legal community.'
    },
    {
      question: 'Are GGU online degrees recognized in India?',
      answer: 'Yes, GGU has become an Associate Member University of the Association of Indian Universities (AIU), New Delhi from April 1, 2023. The degrees are WES evaluated and globally recognized, making them valid for employment and higher education in India and worldwide.'
    }
  ];

  return (
    <>
      <Head>
        <title>Golden Gate University - Online MBA, DBA, MS Programs | MBA NINJA</title>
        <meta name="description" content="Golden Gate University San Francisco - 120+ years of excellence. Online MBA, Executive MBA, DBA programs. WSCUC, AACSB accredited. AIU recognized. Study from India." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Golden Gate University.png" 
                alt="Golden Gate University Logo" 
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
                  <span className={styles.infoValue}>📍 San Francisco, California, USA</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.5/5</span>
                    <span className={styles.reviews}>(512 Reviews)</span>
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
                  <span className={styles.infoLabel}>Accreditation:</span>
                  <span className={styles.infoValue}>{nirfRank}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Recognition:</span>
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
                {tab === 'courses' ? 'Programs & Fees' : tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Golden Gate University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Golden Gate University (GGU) is a beacon of excellence in higher education in the bustling metropolis of San Francisco. 
                  With over 120 years of existence since its founding in 1901 as the YMCA Evening Law School, the university has established 
                  itself as a recognized institution known for its commitment to academic excellence, practical instruction, and professional achievement.
                </p>
                <p>
                  GGU's varied choice of programs tailored to suit the demands of today's changing workforce is one of its core assets. 
                  Business, law, taxation, accounting, psychology, public administration, and information technology are among the undergraduate 
                  and graduate disciplines available at the university. Whether students want to be successful entrepreneurs, accomplished attorneys, 
                  or innovative leaders in their fields, GGU provides them with the knowledge and skills they need to succeed.
                </p>
                <p>
                  The rigorous curriculum and high academic standards demonstrate the university's dedication to academic achievement. GGU provides 
                  intellectually stimulating programs that promote critical thinking, problem-solving abilities, and analytical reasoning. Students 
                  are encouraged to participate in vigorous debates, research, and think creatively to prepare them to overcome complicated issues 
                  in their chosen disciplines.
                </p>
                <p>
                  <strong>Important Milestone:</strong> GGU has become an associate member university of the Association of Indian Universities (AIU), 
                  New Delhi from April 1, 2023, making its degrees recognized and valuable for Indian students pursuing higher education or employment 
                  in India.
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
                    <div className={styles.statNumber}>120+</div>
                    <div className={styles.statLabel}>Years of Excellence</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>11</div>
                    <div className={styles.statLabel}>Online Programs</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>300+</div>
                    <div className={styles.statLabel}>Hiring Partners</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>50%</div>
                    <div className={styles.statLabel}>Average Salary Hike</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Programs & Fees Tab */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Golden Gate University offers 11 comprehensive online programs designed for global professionals.
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
                <strong>International Recognition:</strong> All programs globally recognized with WES evaluation and AIU membership. 
                Flexible payment plans and education loans available through partner banks.
              </div>
            </div>
          )}

          {/* Admissions Tab */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p>Golden Gate University follows a comprehensive admission process for international and domestic students.</p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Online Application</h3>
                    <p>Complete the online application form through GGU's official website or the relevant application portal. Choose the program and degree level that interests you.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Pay the required application fee, which varies by program and degree level. Check GGU's website or contact the admissions office for current fee information.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Submit Academic Transcripts</h3>
                    <p>Submit certified transcripts from all prior institutions and universities attended. These transcripts highlight your academic achievements and demonstrate program eligibility.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>English Proficiency Test</h3>
                    <p>International students who do not speak English as their first language must demonstrate English language proficiency through TOEFL or IELTS examinations.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Application Review & Decision</h3>
                    <p>The admissions committee reviews your application and evaluates academic achievements, work experience, test scores, and other relevant factors. Accepted students receive an official admission letter.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs:</strong> 12th pass from recognized board</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MBA/MS):</strong> Bachelor's degree from accredited institution</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Doctoral Programs (DBA):</strong> Master's degree with relevant work experience</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Work Experience:</strong> Preferred for executive and doctoral programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>For Indian Students:</strong> Create ABC ID and DEB ID as per UGC guidelines</span>
                </div>
              </div>
            </div>
          )}

          {/* Placements Tab */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                Golden Gate University's Career Planning & Placement Center works with various organizations and businesses to improve 
                students' employment options and increase networking opportunities.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Increase</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>300+</h3>
                  <p>Hiring Partners</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>More Interview Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Bay Area</h3>
                  <p>Strong Industry Network</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Career Counseling and Guidance</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Resume Building Workshops</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Interview Preparation Sessions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Networking Events with Industry Leaders</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Job Board Access with GGU-Specific Openings</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Alumni Network Connections</span>
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

          {/* FAQs Tab */}
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

export default GoldenGateUniversity;

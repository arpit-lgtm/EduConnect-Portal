import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const GuruKashiUniversityOnline = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online BA', fee: 43200, duration: '3 Years', specializations: 8 },
    { name: 'Online MA', fee: 40000, duration: '2 Years', specializations: 6 },
    { name: 'Online M.Com', fee: 48000, duration: '2 Years', specializations: 1 },
    { name: 'Online MBA', fee: 100000, duration: '2 Years', specializations: 1 },
    { name: 'Online MCA', fee: 90000, duration: '2 Years', specializations: 1 },
    { name: 'Online BCA', fee: 76800, duration: '3 Years', specializations: 1 },
    { name: 'Online BBA', fee: 76800, duration: '3 Years', specializations: 1 },
    { name: 'Online Diploma Programs', fee: 15000, duration: '1 Year', specializations: 2 },
  ];

  const keyHighlights = [
    'Established in 1997 by Balaji Education Trust, Talwandi Sabo - pioneer for education in the region',
    'NAAC A++ accredited university with highest grade recognition for academic excellence',
    'UGC recognized and approved by Government of Punjab ensuring quality education standards',
    'Member of Association of Indian Universities (AIU) with national recognition',
    'Accredited by ICAR & PCAR for agriculture programs with specialized agricultural education',
    'International presence with students from more than 15 countries and 100+ international students',
    'Offering 80+ courses across undergraduate, postgraduate, diploma, and research programs',
    'Multiple specialized faculties including Computing, Engineering, Agriculture, Management, Health Sciences, and more',
    'ISO certification ensuring international quality standards in education delivery',
    'Recognition from BCI, PCI, NCTE for professional courses in Law, Pharmacy, and Education'
  ];

  const approvals = ['UGC', 'NAAC A++', 'ISO', 'BCI', 'PCI', 'NCTE'];
  const nirfRank = 'NAAC A++ Grade';
  const accreditation = 'UGC, NAAC A++, ISO Certified';

  const placementPartners = [
    'Amazon', 'Axis Bank', 'Capgemini', 'IBM',
    'Infosys', 'Mahindra', 'Tata Power', 'Wipro',
    'TCS', 'Tech Mahindra', 'HCL', 'Cognizant',
    'Accenture', 'Oracle', 'SAP', 'Microsoft',
    'HDFC Bank', 'ICICI Bank', 'Reliance', 'Birla'
  ];

  const faqs = [
    {
      question: 'Are the online courses offered by Guru Kashi University valid?',
      answer: 'Yes, absolutely. All online courses offered by Guru Kashi University are UGC recognized and NAAC A++ accredited. The university is approved by the Government of Punjab and is a member of the Association of Indian Universities (AIU). The online degrees hold the same value as regular on-campus degrees and are valid for employment and higher education.'
    },
    {
      question: 'What are the other credentials of Guru Kashi University?',
      answer: 'Guru Kashi University holds multiple prestigious credentials including NAAC A++ accreditation, UGC recognition, ISO certification, approvals from BCI (Bar Council of India), PCI (Pharmacy Council of India), NCTE (National Council for Teacher Education), ICAR and PCAR accreditation for agriculture programs, and membership in the Association of Indian Universities.'
    },
    {
      question: 'What are the courses offered by Guru Kashi University in online mode?',
      answer: 'Guru Kashi University offers 8 comprehensive online programs including Bachelor of Arts (8 specializations), Master of Arts (6 specializations), M.Com (Finance & Taxation Management), MBA, MCA, BCA, BBA, and Diploma Programs (2 specializations). All programs are designed for flexible learning with industry-relevant curriculum.'
    },
    {
      question: 'Are the online programs offered by Guru Kashi University valid for government jobs?',
      answer: 'Yes, the online programs from Guru Kashi University are valid for government jobs. As a UGC recognized and NAAC A++ accredited university, the degrees are accepted by government sectors, PSUs, and all major recruiters. The university is also a member of AIU, ensuring nationwide recognition of its degrees.'
    },
    {
      question: 'Do I have to visit the college campus while pursuing Guru Kashi University?',
      answer: 'No, Guru Kashi University online programs are designed for complete flexibility. All activities including assignment submission, assessments, examinations, and interactive sessions can be completed online. Students do not need to visit the campus or any examination center. However, campus visits are optional for students who wish to experience the facilities.'
    }
  ];

  return (
    <>
      <Head>
        <title>Guru Kashi University Online - MBA, MCA, BBA, BCA, BA, MA Programs | MBA NINJA</title>
        <meta name="description" content="Guru Kashi University Online Punjab - NAAC A++ accredited. Online MBA, MCA, BBA, BCA, BA, MA programs. UGC recognized. ISO certified university since 1997." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Guru Kashi University.png" 
                alt="Guru Kashi University Logo" 
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
                  <span className={styles.infoValue}>📍 Talwandi Sabo, Punjab, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.5/5</span>
                    <span className={styles.reviews}>(248 Reviews)</span>
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
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Guru Kashi University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Guru Kashi University was founded in 1997 by Balaji Education Trust, Talwandi Sabo and became the pioneer for the 
                  establishment of education in that region. The journey began with Guru Gobind Singh Polytechnic in 1998, followed by 
                  the addition of graduate and postgraduate courses. In 2001, Guru Gobind Singh College of Engineering & Technology was 
                  established, and then in 2005, Guru Gobind Singh College of Education was founded. Since then, the university has grown 
                  beautifully, maintaining high standards for delivering quality education, skills, and industrial exposure.
                </p>
                <p>
                  Located in a rural place in Punjab, the university caters to the rising high demand for agriculture education. It started 
                  many programs through its College of Agriculture, with accreditations from ICAR & PCAR. At present, it has students from 
                  more than 15 countries and more than 100 international students from all across the globe, making it a truly international 
                  institution with diverse cultural exposure.
                </p>
                <p>
                  The University is offering 80+ courses at levels of undergraduate, postgraduate, diploma, and various other programs to 
                  students. They offer quality education through many different faculties including Computing, Humanities and Language, 
                  Visual and Performing Arts, Sciences, Engineering and Technology, Physical Education, Agriculture, Management and Commerce, 
                  Health and Allied Sciences, Education and Information Sciences, Pharmaceutical Sciences, Law, and many more.
                </p>
                <p>
                  Guru Kashi University is a UGC-recognized university, also recognized by the Government of Punjab, the Indian Council of 
                  Agricultural Research, a Member of the Association of Indian Universities, the National Council for Teacher Education, 
                  the Pharmacy Council of India, the Bar Council of India, and is granted with International Organisation for Standardization. 
                  The University is accredited by the National Assessment & Accreditation (NAAC) with a grade of A++, reflecting its commitment 
                  to academic excellence.
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
                    <div className={styles.statNumber}>27+</div>
                    <div className={styles.statLabel}>Years of Excellence</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>80+</div>
                    <div className={styles.statLabel}>Courses Offered</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>300+</div>
                    <div className={styles.statLabel}>Placement Partners</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>15+</div>
                    <div className={styles.statLabel}>Countries Represented</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Guru Kashi University offers 8 comprehensive online programs with multiple specializations for diverse career paths.
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
                <strong>NAAC A++ Excellence:</strong> Multiple scholarship opportunities including merit-based, early bird, and single girl child scholarships. 
                Education loans and EMI facilities available. ISO certified quality education.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p>Guru Kashi University follows a simple and student-friendly online admission process.</p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit University Website</h3>
                    <p>Visit the online university website and read all notifications related to admission. Check the details of the university and courses available.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Select Suitable Course</h3>
                    <p>Carefully check the details of the university and courses available. As per your qualification and eligibility criteria, select the most suitable course for you.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Register on Portal</h3>
                    <p>Make a new registration on the portal. After two-step verification, students can fill out the rest of the application form with correct details.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Move to the next step of uploading documents including educational certificates, ID proof, photograph, and signature as per specified format.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Make Fee Payment</h3>
                    <p>Make the online fee payment for the course. Take the print of the application and fee receipt for your records.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BA/BBA/BCA):</strong> 12th pass from recognized board</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MA/M.Com/MBA/MCA):</strong> Bachelor's degree from accredited institution</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Diploma Programs:</strong> 12th pass or equivalent qualification</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>For All Students:</strong> Create ABC ID and DEB ID as per latest UGC guidelines</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Admissions:</strong> Available twice a year in July/August and January/February sessions</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                The Placement & Training Cell of the University is equipped with all facilities and organizes seminars, guest visits, 
                webinars, and panel discussions attended by various experts and international delegates.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>50%</h3>
                  <p>Average Salary Hike</p>
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
                  <h3>200+</h3>
                  <p>Companies for Placement</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Regular seminars and guest lectures by industry experts</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Webinars and panel discussions on trending topics</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>On-campus and off-campus placement drives</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Workshops on latest technologies and hands-on experience</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Direct tie-ups with 200+ top-notch companies</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Fantastic industrial exposure and real-world project experience</span>
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

export default GuruKashiUniversityOnline;

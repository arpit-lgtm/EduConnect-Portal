import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const GraphicEraUniversityOnline = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Online MBA', fee: 80000, duration: '2 Years', specializations: 1 },
    { name: 'Online MCA', fee: 70000, duration: '2 Years', specializations: 1 },
    { name: 'Online BBA', fee: 75000, duration: '3 Years', specializations: 1 },
    { name: 'Online BCA', fee: 75000, duration: '3 Years', specializations: 1 },
    { name: 'Online B.Com', fee: 75000, duration: '3 Years', specializations: 1 },
    { name: 'Online B.Com Honours', fee: 75000, duration: '3 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Established in 1993 in Dehradun, Uttarakhand - over 30 years of educational excellence',
    'Ranked among Top 65 universities in India by NIRF 2023',
    'NAAC A+ accredited with NBA approval and UGC-AICTE recognition',
    'Ranked 601-800 in THE World Rankings 2023 - globally recognized institution',
    'QS I-Gauge Diamond Category for Overall Ratings and Platinum Category for Engineering',
    'Best "University & Deemed to be University (Private/Self Financed) (Technical)" by Atal Rankings 2022',
    'First self-financed educational institute in India with innovative and research-based learning',
    'Cutting-edge technology integration with AI-proctored examinations',
    'Outcome-oriented placement preparation services with impressive success rates',
    'Strong industry connections preparing well-groomed professionals ready for the corporate world'
  ];

  const approvals = ['UGC', 'AICTE', 'NIRF', 'NAAC A+', 'NBA', 'QS Rankings'];
  const nirfRank = 'NIRF Rank 65 (2023)';
  const accreditation = 'NAAC A+, NBA, UGC-AICTE';

  const placementPartners = [
    'Amazon', 'Flipkart', 'ITC', 'TCS',
    'Infosys', 'Wipro', 'Tech Mahindra', 'HCL',
    'Cognizant', 'Accenture', 'IBM', 'Microsoft',
    'Google', 'Oracle', 'SAP', 'Adobe',
    'HDFC Bank', 'ICICI Bank', 'Deloitte', 'PwC'
  ];

  const faqs = [
    {
      question: 'Are online courses offered by Graphic Era University credible?',
      answer: 'Yes, absolutely. Graphic Era University online programs are UGC-AICTE approved, NAAC A+ accredited, and NBA recognized. The university is ranked among the top 65 universities in India by NIRF 2023 and holds global recognition with THE World Rankings. All degrees carry the same value as regular on-campus programs.'
    },
    {
      question: 'Is any financial aid provided by Graphic Era University for its online programs?',
      answer: 'Yes, Graphic Era University offers merit-based scholarships and education loan facilities to make quality education accessible. Students can avail flexible EMI options through partner banks. The university provides comprehensive financial assistance to help transform professional dreams into reality.'
    },
    {
      question: 'Which online courses can I take up from Graphic Era University?',
      answer: 'Graphic Era University offers comprehensive online programs including MBA, MCA, BBA, BCA, B.Com, and B.Com Honours. Each program features industry-relevant curriculum, innovative learning modules, and cutting-edge technology integration designed for working professionals and students seeking flexible education.'
    },
    {
      question: 'Is the entrance exam conducted for admissions to online courses at Graphic Era University?',
      answer: 'No, Graphic Era University online programs follow direct admission process without entrance examinations. Admissions are based on previous academic qualifications and eligibility criteria. Students need to complete the online application, upload documents, and pay the course fee to confirm admission.'
    },
    {
      question: 'What are the services offered in online programs at Graphic Era University?',
      answer: 'GEU online programs include AI-proctored examinations, interactive learning modules, digital library access, industry-integrated curriculum, placement support, career counseling, capstone projects, case studies, assignments, and access to a team of world-class faculty members providing comprehensive academic support.'
    },
    {
      question: 'Is campus visit offered in online courses of Graphic Era University?',
      answer: 'Yes, online students can visit the Dehradun campus for specific practical sessions, laboratory work, and orientation programs. The university encourages blended learning experiences where students can benefit from both online flexibility and on-campus facilities when needed.'
    }
  ];

  return (
    <>
      <Head>
        <title>Graphic Era University Online - MBA, MCA, BBA, BCA Programs | MBA NINJA</title>
        <meta name="description" content="Graphic Era University Online Dehradun - NIRF Rank 65, NAAC A+ accredited. Online MBA, MCA, BBA, BCA programs. UGC-AICTE approved. Globally recognized university." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Graphic Era University.png" 
                alt="Graphic Era University Logo" 
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
                  <span className={styles.infoValue}>📍 Dehradun, Uttarakhand, India</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.0/5</span>
                    <span className={styles.reviews}>(194 Reviews)</span>
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
                {tab === 'courses' ? 'Programs' : tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Graphic Era University Online</h2>
              <div className={styles.aboutContent}>
                <p>
                  Graphic Era University (GEU) was founded in 1993 to provide world-class education and educational support to young minds. 
                  The innovative and research-based learning modules of this university make it stand apart from others. Being the first 
                  "Self-financed Educational Institute in India," the university holds a concrete reputation for providing excellent and holistic education.
                </p>
                <p>
                  Started its journey by providing graphics training, the university now offers a wide range of technical courses that includes 
                  the domains of business administration, designing, computer science, and many others. In the pursuit of making higher education 
                  accessible to all, GEU has launched its online portal that offers a range of industry-relevant programs.
                </p>
                <p>
                  Graphic Era University is known for its cutting-edge technologies and quality research. These quality-driven features of the 
                  university have made it hold global recognition by acquiring several recognitions. In NIRF 2023 rankings, GEU was listed among 
                  the top 65 best universities. The university is accredited by NBA and has a NAAC A+ grade. It also holds approvals from AICTE 
                  and UGC and has been recognized as the Best "University & Deemed to be University (Private/Self Financed) (Technical)" in the 
                  Atal Ranking of Institutions on Innovation Achievements 2022.
                </p>
                <p>
                  The university is recognized globally that got it placed in the rank band 601-800 in the "THE World Ranking 2023." It secured 
                  a place in the Diamond Category for Overall Ratings and in Platinum Category for Engineering in the Indian Institution Ratings 
                  by QS I-Gauge. GEU is renowned for creating productive and well-groomed personalities that are industry-ready. Thus, an alumni 
                  status at this university makes you avail of a plethora of career opportunities in different sectors.
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
                    <div className={styles.statNumber}>30+</div>
                    <div className={styles.statLabel}>Years of Excellence</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>65</div>
                    <div className={styles.statLabel}>NIRF Rank 2023</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>300+</div>
                    <div className={styles.statLabel}>Placement Partners</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>6</div>
                    <div className={styles.statLabel}>Online Programs</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Graphic Era University offers 6 comprehensive online programs designed for working professionals and students.
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
                <strong>NIRF Ranked Excellence:</strong> Top 65 university by NIRF 2023. Merit-based scholarships and flexible EMI options available. 
                All programs are UGC-AICTE approved with THE World Rankings recognition.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p>Graphic Era University follows a simple and streamlined online admission process.</p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Select Your Course</h3>
                    <p>Visit the official university website and select your choice of course from the available online programs including MBA, MCA, BBA, BCA, B.Com, or B.Com Honours.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Fill Application Form</h3>
                    <p>Access the admission portal and start filling up the application form with correct details including personal information, educational qualifications, and contact details. Review and submit the form.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Upload Documents</h3>
                    <p>Upload all necessary documents as mentioned in the application form including educational certificates, ID proof, photograph, and signature in the specified format.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Pay Application Fee</h3>
                    <p>Pay the application fee for your course using digital payment options and book your spot in the next batch.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Complete Course Fee Payment</h3>
                    <p>Complete the payment step by paying the course fee either in one go using digital payment options or via the EMI facility offered by the university.</p>
                  </div>
                </div>
              </div>

              <h3>Eligibility Criteria</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>UG Programs (BBA/BCA/B.Com):</strong> 12th pass from recognized board</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>PG Programs (MBA/MCA):</strong> Bachelor's degree from accredited institution</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>For All Students:</strong> Create ABC ID and DEB ID as per latest UGC guidelines</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>Admissions:</strong> Available twice a year in July/August and January/February sessions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span><strong>No Entrance Exam:</strong> Direct admissions based on academic qualifications</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                A team of highly skilled trainers of GEU's placement team is continuously striving to fulfill industrial needs by 
                preparing confident and well-groomed professionals.
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
                  <h3>Top 65</h3>
                  <p>NIRF Ranking 2023</p>
                </div>
              </div>

              <h3>Career Support Services</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Outcome-oriented placement preparation services</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Industry exposure and ground-level challenge understanding</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Professional grooming and confidence building sessions</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Resume building and interview preparation workshops</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Direct connection with top-rated firms and organizations</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Leadership development and cultural responsibility training</span>
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

export default GraphicEraUniversityOnline;

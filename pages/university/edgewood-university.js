import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const EdgewoodUniversity = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 395000, duration: '14 Months', specializations: 5 },
    { name: 'Global MBA', fee: 395000, duration: '14 Months', specializations: 1 },
    { name: 'DBA & MBA Program', fee: 1000000, duration: '30 Months', specializations: 1 },
    { name: 'MBA Abroad Hybrid', fee: 1302320, duration: '16 Months', specializations: 1 },
    { name: 'MS Abroad Hybrid', fee: 1816023, duration: '23 Months', specializations: 1 },
    { name: 'Online DBA', fee: 700000, duration: '2 Years', specializations: 3 },
    { name: 'DBA & MBA Online', fee: 1000000, duration: '30 Months', specializations: 1 },
    { name: 'DBA & MBA (Executive)', fee: 1000000, duration: '30 Months', specializations: 1 },
    { name: 'DBA & MBA (Global)', fee: 1000000, duration: '30 Months', specializations: 1 },
    { name: 'Online Doctor of Education (Ed.D.)', fee: 1220000, duration: '24 Months', specializations: 1 },
    { name: 'Online Master of Education (M.Ed)', fee: 485000, duration: '14 Months', specializations: 1 },
    { name: 'Online Dual M.Ed & Ed.D', fee: 1445000, duration: '30 Months', specializations: 1 },
    { name: 'Doctorate Course Online', fee: 700000, duration: '2 Years', specializations: 1 },
  ];

  const keyHighlights = [
    'Established in 1927 with nearly a century of educational excellence',
    'Located in Wisconsin, USA, offering globally recognized programs',
    'Accredited by Higher Learning Commission (HLC) ensuring quality standards',
    'ACBSP accredited business programs meeting international benchmarks',
    'WES approved degrees accepted worldwide for employment and education',
    'Interactive learning approach emphasizing case studies and practical applications',
    'Experienced faculty bringing real-world industry expertise to classrooms',
    'Flexible online programs designed specifically for working professionals',
    'Advanced Learning Management System with 24/7 course access',
    'Comprehensive student support including dedicated advisors and career services',
    'Access to Oscar Rennebohm Library\'s extensive digital resources',
    'Strong community of diverse international learners across multiple disciplines'
  ];

  const approvals = ['HLC', 'ACBSP', 'WES', 'AAC&U', 'NACE'];
  const nirfRank = 'HLC Accredited';
  const accreditation = 'HLC, ACBSP';

  const placementPartners = [
    'Google', 'Accenture', 'BSNL', 'Dabur', 
    'Flipkart', 'H&M', 'Honeywell', 'Infosys', 
    'ISRO', 'KPMG', 'NTT Data', 'Practo', 'Tata Motors'
  ];

  const faqs = [
    {
      question: 'What is the history and accreditation status of Edgewood University?',
      answer: 'Founded in 1927, Edgewood University has built nearly a century of academic excellence in Wisconsin, USA. The institution holds prestigious accreditation from the Higher Learning Commission (HLC), ensuring rigorous quality standards. Business programs carry additional ACBSP accreditation, and degrees are WES approved for global recognition. The university maintains memberships with leading educational organizations including AAC&U, NACE, and NAICU.'
    },
    {
      question: 'What types of academic programs does Edgewood University offer?',
      answer: 'Edgewood University provides diverse programs across business administration, leadership, healthcare management, marketing, and education. Offerings include Executive MBA, Global MBA, DBA (Doctor of Business Administration), online and hybrid programs, Master of Education (M.Ed), Doctor of Education (Ed.D.), and dual degree options. All programs feature specialized tracks allowing students to focus on specific career objectives.'
    },
    {
      question: 'Are online learning options available at Edgewood University?',
      answer: 'Yes, Edgewood University has developed robust online and hybrid programs specifically for working professionals. These programs deliver the same high-quality education as traditional campus offerings through advanced learning technology. Students access interactive simulations, recorded lectures, discussion forums, group projects, and one-on-one faculty interactions—all designed for maximum flexibility without compromising academic rigor.'
    },
    {
      question: 'How does the admissions process work for Edgewood online programs?',
      answer: 'The admission process is streamlined and fully online. Begin by selecting your desired program, then complete the online application with personal and educational information. Submit required documentation including transcripts and work experience verification. The admissions committee reviews applications holistically, evaluating academic qualifications and professional background. Upon acceptance, you\'ll receive enrollment instructions and payment options including flexible installment plans.'
    },
    {
      question: 'What career development support does Edgewood University provide?',
      answer: 'Edgewood University offers comprehensive career services including personalized career advisors, resume development workshops, interview preparation sessions, and networking events connecting students with industry professionals. The career services office facilitates access to job portals, hosts virtual career fairs with 300+ hiring partners, and provides ongoing professional development resources including webinars and industry trend analyses.'
    },
    {
      question: 'Does Edgewood University deliver strong placement assistance to graduates?',
      answer: 'Absolutely. Edgewood maintains strategic partnerships with leading organizations across multiple industries. Students benefit from placement support throughout their academic journey, gaining access to exclusive job opportunities, internship programs, and direct recruitment drives. The university reports a 50% average salary increase for graduates, with 3X more interview opportunities through their extensive network of 300+ hiring partners.'
    }
  ];

  return (
    <>
      <Head>
        <title>Edgewood University Online - MBA, DBA & Education Programs | EduConnect</title>
        <meta name="description" content="Explore Edgewood University's online programs from Wisconsin, USA. HLC & ACBSP accredited. MBA, DBA, M.Ed, Ed.D programs for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/Edgewood University.png" 
                alt="Edgewood University Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Wisconsin, USA</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>4.4/5</span>
                    <span className={styles.reviews}>(294 Reviews)</span>
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
                {tab === 'faqs' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2>About Edgewood University</h2>
              <div className={styles.aboutContent}>
                <p>
                  Edgewood University has earned distinguished recognition across the United States for delivering 
                  transformative education that advances professional capabilities across numerous fields. Since 
                  its establishment in 1927, the institution has pioneered innovative approaches to learning, 
                  building trust among students worldwide who seek to enhance their qualifications and expand 
                  their expertise through accessible, high-quality programs.
                </p>
                <p>
                  The university creates dynamic and flexible learning environments that enable professionals to 
                  acquire essential knowledge beyond traditional classroom boundaries. Edgewood's comprehensive 
                  academic portfolio spans business administration, leadership development, healthcare management, 
                  marketing strategy, education, and additional specialized domains. Expert faculty members, each 
                  accomplished specialists in their respective fields, design curricula that deliver premium 
                  instruction aligned with contemporary industry requirements.
                </p>
                <p>
                  Among Edgewood's greatest strengths is its diverse program catalog, developed and delivered by 
                  veteran educators who bring authoritative knowledge to every course. Programs hold accreditation 
                  from the Higher Learning Commission and the Association of Collegiate Business Schools and Programs 
                  (ACBSP), guaranteeing adherence to stringent educational standards. Faculty integrate current 
                  industry insights and real-world applications into instruction, ensuring students gain practical 
                  skills immediately applicable to professional challenges.
                </p>
                <p>
                  Edgewood University transcends conventional lecture-based education through interactive learning 
                  methodologies. Students engage in sophisticated simulations, analyze complex case studies, participate 
                  in collaborative discussions, and complete team-based projects—all designed to deepen understanding 
                  and develop practical competencies. This approach cultivates critical thinking abilities, strengthens 
                  problem-solving skills, and promotes active intellectual engagement, preparing graduates for leadership 
                  roles in competitive global markets.
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
                  <div className={styles.statNumber}>98 Years</div>
                  <div className={styles.statLabel}>Educational Legacy</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>HLC</div>
                  <div className={styles.statLabel}>Accredited</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>13 Programs</div>
                  <div className={styles.statLabel}>Online Offerings</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>Wisconsin</div>
                  <div className={styles.statLabel}>USA Campus</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
              <p className={styles.sectionDesc}>
                Advanced degree programs for ambitious professionals seeking global education credentials
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
                        <td>{course.specializations}+ {course.specializations === 1 ? 'Option' : 'Options'}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.courseNote}>
                <strong>Note:</strong> Flexible payment plans and monthly installment options available. Multiple scholarship opportunities for deserving candidates.
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Join Edgewood University through our streamlined, completely online enrollment process
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Program Selection</h3>
                    <p>Explore Edgewood's program offerings aligned with your interests and career aspirations. Review each program's curriculum, specializations, and learning outcomes to identify the best fit for your professional goals.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Completion</h3>
                    <p>Submit your online application form with comprehensive personal and educational information. Include details about academic background, professional experience, and career objectives to help the admissions committee evaluate your candidacy.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Application Review</h3>
                    <p>The admissions committee carefully reviews your submission, assessing qualifications, professional experience, and program suitability. This holistic evaluation ensures students are well-positioned to succeed in their chosen programs.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Acceptance & Enrollment</h3>
                    <p>Receive your acceptance notification upon approval. Complete enrollment confirmation within the specified deadline to secure your position. Choose from multiple payment options including credit cards, debit cards, and convenient installment plans.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h3>Program Commencement</h3>
                    <p>Access the online learning platform with your credentials. Explore course materials, digital resources, and interactive tools. Begin engaging with content, completing assignments, participating in discussions, and connecting with faculty and fellow students.</p>
                  </div>
                </div>
              </div>

              <div className={styles.importantNote}>
                <h3>Important Guidelines</h3>
                <ul>
                  <li>Submit all application materials well before published deadlines</li>
                  <li>Ensure accuracy and completeness of all information provided</li>
                  <li>Keep copies of all submitted documents for personal records</li>
                  <li>Check email regularly for communications from admissions office</li>
                  <li>Contact admissions counselors for clarification on any requirements</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Career Development & Placements</h2>
              <p className={styles.sectionDesc}>
                Leverage Edgewood's extensive corporate network for exceptional career advancement
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
                Common inquiries about Edgewood University programs answered
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
                <h3>Have Additional Questions?</h3>
                <p>Our enrollment advisors are ready to provide personalized guidance</p>
                <Link href="/#talk-to-experts">
                  <button className={styles.contactBtn}>Connect with Advisors</button>
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

export default EdgewoodUniversity;

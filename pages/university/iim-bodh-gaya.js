import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IIMBodhGaya = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Doctor of Philosophy', fee: 2450000, duration: '2 Years', specializations: 1 },
    { name: 'Online MBA', fee: 960000, duration: '2 Years', specializations: 2 }
  ];

  const keyHighlights = [
    'Established in 2015 - One of India\'s newest and most dynamic IIMs',
    'Ranked 33rd by NIRF 2024 by Ministry of Education, Government of India',
    'NAAC A accredited ensuring high-quality education standards',
    'AACSB accreditation - recognized globally for excellence in business education',
    '17 full-time faculty members with extensive research and industry experience',
    '60+ visiting faculty members bringing diverse expertise and perspectives',
    'International collaborations with leading global institutions',
    'Modern infrastructure with state-of-the-art facilities and technology',
    'Focus on entrepreneurship development and innovation',
    'Strong industry connect through corporate partnerships and collaborations',
    'Comprehensive library with extensive digital and physical resources',
    'Dedicated placement cell providing career guidance and opportunities',
    'Financial assistance available for economically weaker sections',
    '25%-100% fee concessions based on family income slabs',
    'Active student clubs and committees for holistic development',
    'Regular workshops, seminars, and guest lectures by industry experts'
  ];

  const approvals = ['NIRF', 'NAAC A', 'AACSB'];
  const nirfRank = 'Rank 33 - Management Category';
  const accreditation = 'NAAC A & AACSB Accredited';

  const placementPartners = [
    'Deloitte', 'ICICI Bank', 'HDFC Bank', 'Amazon',
    'Wipro', 'Infosys', 'TCS', 'Capgemini'
  ];

  const faqs = [
    {
      question: 'Does IIM Bodh Gaya offer online programs?',
      answer: 'Yes, IIM Bodh Gaya offers online MBA programs designed for working professionals. The online programs provide the same quality of education as regular programs with the flexibility to study from anywhere at your own pace.'
    },
    {
      question: 'What is the eligibility for admission to IIM Bodh Gaya online programs?',
      answer: 'Candidates must have completed their graduation from a recognized university with minimum required percentage. For online MBA programs, work experience may be preferred but not mandatory. Specific eligibility criteria vary by program.'
    },
    {
      question: 'Are the degrees offered by IIM Bodh Gaya in online mode valid?',
      answer: 'Yes, all online programs offered by IIM Bodh Gaya are fully valid and approved by UGC. The degrees obtained through online mode are equivalent to traditional degrees and hold the same recognition in the industry and for higher education.'
    },
    {
      question: 'Do I have to visit the center for the end examination?',
      answer: 'No, students enrolled in online programs are not required to visit any University or study center for examinations. Online examinations are conducted through the examination portal with proper proctoring mechanisms to ensure integrity.'
    },
    {
      question: 'What is the admission process for IIM Bodh Gaya?',
      answer: 'For full-time programs, admission is through CAT scores followed by Written Ability Test (WAT) and Personal Interview (PI). For online programs, candidates can apply directly through the official website without any entrance exam requirement.'
    },
    {
      question: 'Is financial assistance available at IIM Bodh Gaya?',
      answer: 'Yes, IIM Bodh Gaya provides financial assistance to deserving students based on family income. Fee concession ranges from 25% to 100% depending on annual family income slabs. Students can also apply for various government scholarships and education loans.'
    },
    {
      question: 'What is the placement scenario at IIM Bodh Gaya?',
      answer: 'IIM Bodh Gaya has a dedicated placement cell that works year-round to provide excellent placement opportunities. Students are placed across various sectors including Banking, IT, Consulting, E-commerce, and Manufacturing with leading companies like Deloitte, ICICI Bank, Amazon, Wipro, and others.'
    },
    {
      question: 'Can I pursue a doctorate program at IIM Bodh Gaya while working?',
      answer: 'Yes, IIM Bodh Gaya offers Fellow Programme in Management (FPM) which is a doctoral program. While it requires significant commitment, working professionals can pursue it depending on their work flexibility. It\'s recommended to consult with the admissions office for specific requirements.'
    },
    {
      question: 'What are the specializations available in the Online MBA program?',
      answer: 'IIM Bodh Gaya Online MBA offers 2 specializations allowing students to choose based on their career interests and goals. The program is designed to provide comprehensive management education with practical industry insights.'
    },
    {
      question: 'Which other top IIMs offer online management courses?',
      answer: 'Several top IIMs offer online management courses including IIM Ahmedabad, IIM Bangalore, IIM Amritsar, IIM Calcutta, IIM Lucknow, IIM Indore, and IIM Kozhikode. These institutes provide various executive programs and specialized management courses in online mode for working professionals.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIM Bodh Gaya - Indian Institute of Management | Online MBA & PhD Programs | MBA NINJA</title>
        <meta name="description" content="IIM Bodh Gaya - NIRF Rank 33. Est. 2015. NAAC A & AACSB accredited. Online MBA, PhD programs. 17 full-time + 60 visiting faculty. Financial assistance 25%-100%." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIM Bodh Gaya.png" 
                alt="IIM Bodh Gaya Logo" 
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
                  <span className={styles.infoValue}>📍 Bodh Gaya, Bihar</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Ratings:</span>
                  <div className={styles.rating}>
                    <span className={styles.stars}>⭐⭐⭐⭐</span>
                    <span className={styles.ratingText}>3.7/5</span>
                    <span className={styles.reviews}>(328 Reviews)</span>
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
              <h2>About IIM Bodh Gaya</h2>
              <div className={styles.aboutContent}>
                <p>
                  IIM Bodh Gaya was established in 2015 as one of the newer Indian Institutes of Management. Despite 
                  being relatively young, the institute has quickly established itself as a premier institution for 
                  management education. Located in the historic city of Bodh Gaya in Bihar, the institute combines 
                  modern management education with traditional values and ethics.
                </p>
                <p>
                  The institute is committed to creating future business leaders who are not only competent in their 
                  professional domains but also socially responsible. With a faculty strength of 17 full-time members 
                  and over 60 visiting faculty, IIM Bodh Gaya ensures a perfect blend of academic rigor and practical 
                  industry insights.
                </p>
                <p>
                  IIM Bodh Gaya has been ranked 33rd by NIRF 2024 by the Ministry of Education, Government of India, 
                  in the Management category. The institute is accredited by NAAC with an 'A' grade and has received 
                  AACSB accreditation, which is recognized globally as a hallmark of excellence in business education.
                </p>
                <p>
                  The institute offers various programs including Post Graduate Programme in Management (PGP), Fellow 
                  Programme in Management (FPM/Ph.D.), and Online MBA programs. These programs are designed to cater 
                  to different segments - fresh graduates, working professionals, and research aspirants.
                </p>
                <p>
                  IIM Bodh Gaya has developed strong industry connections and international collaborations with leading 
                  global institutions. The institute focuses on entrepreneurship development, innovation, and sustainable 
                  business practices. With state-of-the-art infrastructure, modern classrooms, comprehensive library 
                  facilities, and advanced technology integration, the institute provides an excellent learning environment.
                </p>
                <p>
                  The institute is committed to inclusive education and offers substantial financial assistance to 
                  students from economically weaker sections. Fee concessions ranging from 25% to 100% are provided 
                  based on annual family income slabs, ensuring that talented students are not deprived of quality 
                  education due to financial constraints.
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
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Placement Target</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>80+</div>
                  <div className={styles.statLabel}>Recruiting Companies</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>NIRF 33</div>
                  <div className={styles.statLabel}>Management Rank</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>25-100%</div>
                  <div className={styles.statLabel}>Fee Concession</div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Courses Offered at IIM Bodh Gaya</h2>
              <p className={styles.sectionDesc}>
                Explore our comprehensive range of management and doctoral programs designed for aspiring managers and researchers.
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
                <strong>Premier IIM Excellence:</strong> IIM Bodh Gaya, established in 2015, is one of India's newest 
                and most dynamic IIMs. Ranked 33rd by NIRF 2024 with NAAC A and AACSB accreditation ensuring global 
                standards. The institute offers comprehensive programs including Post Graduate Programme in Management 
                (PGP), Fellow Programme in Management (FPM/Ph.D.), and Online MBA with 2 specializations. 17 full-time 
                faculty members with extensive research and industry experience, supplemented by 60+ visiting faculty. 
                Strong focus on entrepreneurship development, innovation, and sustainable business practices. Modern 
                infrastructure with state-of-the-art facilities, comprehensive library with digital and physical 
                resources. Financial assistance available with 25%-100% fee concessions based on family income. Active 
                student clubs and committees for holistic development. Regular workshops, seminars, and guest lectures 
                by industry experts. International collaborations with leading global institutions. Dedicated placement 
                cell providing career guidance and excellent placement opportunities across Banking, IT, Consulting, 
                E-commerce, and Manufacturing sectors.
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process 2025</h2>
              <p className={styles.sectionDesc}>
                Follow these steps to secure your admission at IIM Bodh Gaya for on-campus and online programs.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Visit Official Website & Select Program</h3>
                    <p>Visit the official website of IIM Bodh Gaya and select the program you want to apply for - PGP, FPM, or Online MBA. Review program details, eligibility criteria, and fee structure.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Appear for Entrance Exam (For Regular Programs)</h3>
                    <p>For full-time PGP, you need to appear in the CAT entrance examination. Shortlisted candidates will be called for Written Ability Test (WAT) and Personal Interview (PI). For FPM, specific research aptitude tests may be required.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Complete Online Application</h3>
                    <p>For online MBA programs, log in to the admission portal and fill out the application form with your academic credentials, work experience, and personal information. Upload all required documents including mark sheets, degree certificates, ID proof, and passport-size photograph.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Fee Payment & Confirmation</h3>
                    <p>Complete the application fee payment through the secure online payment gateway. For financial assistance, submit income certificate and required documents. Download the fee receipt and application form for future reference. Your admission will be confirmed upon successful payment and document verification.</p>
                  </div>
                </div>
              </div>

              <div className={styles.admissionNote}>
                <h3>Eligibility & Financial Assistance</h3>
                <p>
                  <strong>For PGP (Regular):</strong> Bachelor's degree from a recognized university with minimum 50% 
                  marks (45% for SC/ST/PWD). Valid CAT score is mandatory. Final selection based on CAT score, academic 
                  performance, WAT, PI, and overall profile assessment.
                </p>
                <p>
                  <strong>For Online MBA:</strong> Candidates must have completed graduation from a recognized university. 
                  Work experience is preferred but not mandatory. No entrance exam required for online programs - direct 
                  admission based on academic credentials.
                </p>
                <p>
                  <strong>For FPM (Ph.D.):</strong> Master's degree with minimum required percentage. Valid score in 
                  CAT/GMAT/GRE or other approved tests. Research proposal and interview required.
                </p>
                <p>
                  <strong>Financial Assistance:</strong> IIM Bodh Gaya provides substantial financial assistance to 
                  deserving students:
                </p>
                <ul>
                  <li>Family income up to ₹1 lakh/year: 100% fee concession</li>
                  <li>Family income ₹1-2.5 lakh/year: 67% fee concession</li>
                  <li>Family income ₹2.5-5 lakh/year: 50% fee concession</li>
                  <li>Family income ₹5-8 lakh/year: 25% fee concession</li>
                </ul>
                <p>
                  <strong>ABC & DEB ID Requirement:</strong> According to UGC guidelines, all candidates must create 
                  their ABC ID (Academic Bank of Credits) and DEB ID. Admissions available twice a year - July/August 
                  and January/February batches. UGC declares 100% Fee Refund policy for students within specified period.
                </p>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements at IIM Bodh Gaya</h2>
              <p className={styles.sectionDesc}>
                IIM Bodh Gaya has a dedicated placement cell that works year-round to provide excellent placement 
                opportunities across various sectors and industries.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>100%</h3>
                  <p>Placement Target</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>80+</h3>
                  <p>Recruiting Companies</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Multiple</h3>
                  <p>Sectors Covered</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>Year-Round</h3>
                  <p>Placement Activities</p>
                </div>
              </div>

              <h3>Placement Highlights</h3>              <h3>Placement Highlights</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Dedicated placement cell providing comprehensive career guidance and support</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Placements across Banking, Financial Services, IT, Consulting, E-commerce sectors</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Manufacturing, FMCG, and Retail sectors also actively recruit from IIM Bodh Gaya</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Pre-placement talks, industry interactions, and corporate mentorship programs</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Resume building, mock interviews, and soft skills development workshops</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Strong alumni network providing mentorship and placement support</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Summer internship placements ensuring industry exposure for students</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Final placement process conducted in professional and transparent manner</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Leading companies like Deloitte, ICICI Bank, Amazon, Wipro recruit regularly</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Focus on entrepreneurship with incubation support for startup aspirants</span>
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

export default IIMBodhGaya;

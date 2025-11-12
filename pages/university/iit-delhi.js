import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITDelhi = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'Executive MBA', fee: 1260000, duration: '1-2 Years', specializations: 1 },
    { name: 'Doctor of Philosophy (PhD)', fee: 29900, duration: '1-2 Years', specializations: 1 },
    { name: 'M.Tech Program', fee: 800000, duration: '2 Years', specializations: 12 },
    { name: 'Part-Time PhD', fee: 239400, duration: '1-2 Years', specializations: 1 }
  ];

  const keyHighlights = [
    'Ranked 4th in NIRF 2024 Overall, 3rd in Engineering',
    'QS World Rank 48 in Engineering & Technology 2023',
    'Established in 1961 by PM Jawaharlal Nehru',
    'BTech CSE packages exceed ₹1 Crore annually',
    'Partnerships with 100+ universities in 40 countries',
    'UNESCO & Ford Foundation supported foundation',
    'Annual enrollment of ~1,000 undergraduate students',
    'Top recruiters: Google, Amazon, Microsoft, Flipkart',
    'State-of-the-art research facilities and labs',
    'Vibrant student community with 40+ technical societies'
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Deloitte', 'Flipkart', 'Infosys',
    'PWC', 'TCS', 'Tech Mahindra', 'Microsoft', 'IBM',
    'Goldman Sachs', 'JP Morgan', 'McKinsey', 'BCG', 'Accenture',
    'Oracle', 'SAP', 'Adobe', 'Intel', 'Qualcomm', 'Samsung'
  ];

  const faqs = [
    {
      question: 'What programs does IIT Delhi offer for working professionals?',
      answer: 'IIT Delhi offers comprehensive programs specifically designed for working professionals seeking advanced education without career interruption. The flagship Executive MBA program provides strategic business education through weekend classes and intensive modules, enabling professionals to enhance leadership capabilities, strategic thinking, and management expertise while continuing employment. Part-time PhD programs accommodate research aspirations of working individuals through flexible scheduling, allowing pursuit of doctoral studies alongside professional commitments. The institute also offers Executive Development Programs, certificate courses in emerging technologies including Data Science, Artificial Intelligence, Machine Learning, and specialized domain workshops conducted through flexible delivery modes. IIT Delhi\'s online platform extends access to MOOCs and professional development courses covering technical and management domains. These programs maintain IIT Delhi\'s trademark academic rigor while acknowledging professional demands through thoughtfully designed curricula, experienced faculty mentorship, industry-relevant projects, peer networking opportunities, and flexible attendance patterns enabling seamless integration of advanced education with professional growth trajectories.'
    },
    {
      question: 'What is the admission process for PhD programs at IIT Delhi?',
      answer: 'The PhD admission process at IIT Delhi follows a comprehensive evaluation framework ensuring selection of candidates demonstrating strong research potential, academic excellence, and domain expertise. Candidates must possess qualifying master\'s degrees or equivalent with minimum required CGPA/percentage, along with valid GATE scores or national-level test qualifications depending on the department. The selection process comprises written examinations assessing research aptitude, domain knowledge, and analytical capabilities, followed by rigorous interviews where candidates present research proposals, discuss academic backgrounds, articulate research interests, and engage with faculty panels evaluating research potential, problem-solving abilities, communication skills, and alignment with departmental research themes. Full-time PhD programs typically span 4-5 years, while part-time programs accommodate working professionals through extended 5-7 year timelines with flexible coursework and research schedules. IIT Delhi offers generous financial support including monthly stipends, conference travel grants, research contingencies, and teaching assistantships, ensuring PhD scholars can focus entirely on research without financial constraints. The admission timeline follows semester cycles with applications typically opening in October-November and April-May for respective January and July intake periods.'
    },
    {
      question: 'Does IIT Delhi have international collaborations?',
      answer: 'IIT Delhi maintains extensive international collaborations with over 100 prestigious universities and research institutions across 40 countries, fostering global academic exchange, collaborative research, joint programs, and cross-cultural learning opportunities. Strategic partnerships span leading institutions including MIT, Stanford, University of Cambridge, ETH Zurich, National University of Singapore, Technical University of Munich, and numerous others across North America, Europe, Asia-Pacific, and other regions. These collaborations facilitate student exchange programs enabling IIT Delhi students to pursue semesters abroad, engage in research internships, participate in joint coursework, and experience diverse academic cultures while international students similarly access IIT Delhi\'s academic resources. Joint research initiatives address complex global challenges through interdisciplinary teams, shared facilities, collaborative publications, and co-supervised doctoral programs. Faculty exchange programs promote knowledge sharing, teaching collaborations, and research networking. IIT Delhi participates in international consortia, joint conferences, collaborative workshops, and global research projects spanning climate change, sustainable development, artificial intelligence, healthcare technologies, and other frontier domains, ensuring students and faculty remain connected with cutting-edge global developments while contributing Indian perspectives to worldwide academic discourse.'
    },
    {
      question: 'What are the placement statistics for IIT Delhi graduates?',
      answer: 'IIT Delhi consistently achieves outstanding placement outcomes reflecting strong industry demand for its graduates across engineering, technology, management, sciences, and interdisciplinary domains. The institute\'s dedicated placement cell coordinates comprehensive recruitment activities attracting 300+ leading national and international companies spanning technology giants, consulting firms, financial institutions, manufacturing corporations, startups, research organizations, and public sector undertakings. Placement statistics reveal impressive highest packages exceeding ₹1 Crore annually for Computer Science and related specializations, with average packages ranging ₹15-25 Lakhs depending on programs and departments. Multiple students receive pre-placement offers following successful internships, while campus recruitment spans diverse sectors including software development, data science, artificial intelligence, core engineering, research and development, consulting, finance, analytics, and product management. IIT Delhi graduates demonstrate strong career progression with accelerated growth trajectories, leadership positions, entrepreneurial ventures, higher education pursuits at top global universities, and meaningful contributions across industries. The extensive alumni network spanning 50,000+ professionals provides mentorship, networking opportunities, and recruitment connections, further strengthening placement outcomes and career support for current students navigating diverse professional pathways.'
    },
    {
      question: 'What facilities are available on IIT Delhi campus?',
      answer: 'IIT Delhi\'s modern campus infrastructure provides comprehensive facilities supporting academic excellence, research innovation, holistic development, and comfortable residential living. Academic facilities include well-equipped classrooms with audiovisual aids, advanced research laboratories housing cutting-edge instrumentation across all departments, specialized computing centers with high-performance clusters, extensive Central Library housing over 400,000 books plus digital resources and comfortable reading spaces, sophisticated workshop facilities for practical training, and dedicated research centers focusing on interdisciplinary themes. Residential infrastructure comprises comfortable hostels accommodating students with mess facilities, recreation rooms, and modern amenities ensuring conducive living environments. Sports facilities span expansive playgrounds, gymnasium with modern equipment, swimming pool, courts for cricket, football, basketball, volleyball, tennis, badminton, and indoor sports complexes supporting athletic development and wellness. Student activity centers house cultural groups, technical societies, hobby clubs, and organizational spaces fostering extracurricular engagement. Medical facilities provide healthcare services through campus hospital and ambulance. The campus features cafeterias, shopping complex, banking services, post office, transportation facilities, and green spaces creating a self-contained ecosystem supporting all aspects of student life, learning, research, and personal growth throughout their academic journey at this prestigious institution.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Delhi Online Programs | Executive MBA, M.Tech, PhD</title>
        <meta name="description" content="Explore online programs from IIT Delhi - Ranked 4th NIRF 2024, QS Rank 48. Executive MBA, M.Tech, PhD programs for working professionals." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Delhi.png" 
                alt="IIT Delhi Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Hauz Khas, South Delhi</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Established:</span>
                  <span className={styles.infoValue}>1961</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>4th Overall, 3rd Engineering 2024</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Rating:</span>
                  <span className={styles.infoValue}>⭐ 4.6/5 (872 Reviews)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['AICTE', 'NIRF', 'NAAC A', 'NBA'].map((approval, idx) => (
                      <div key={idx} className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span>{approval}</span>
                      </div>
                    ))}
                  </div>
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
              <h2>About IIT Delhi</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Delhi, established in 1961 when Prime Minister Jawaharlal Nehru laid its foundation stone, stands as one of India's most prestigious technical institutions and has consistently maintained its position among the nation's top engineering colleges. Initially supported by UNESCO and the Ford Foundation, IIT Delhi has evolved into a world-class research university recognized globally for academic excellence, groundbreaking research, technological innovation, and transformative contributions to engineering education. Designated as an Institute of National Importance under the Institutes of Technology Act, the institute occupies a sprawling campus in Hauz Khas, South Delhi, providing modern infrastructure, state-of-the-art laboratories, extensive library resources, comfortable residential facilities, and vibrant academic environments conducive to learning, research, and holistic student development.
                </p>
                <p>
                  IIT Delhi encompasses 16 specialized academic departments and centers spanning Aerospace Engineering, Applied Mechanics, Biochemical Engineering and Biotechnology, Chemical Engineering, Chemistry, Civil Engineering, Computer Science and Engineering, Electrical Engineering, Energy Studies, Humanities and Social Sciences, Management Studies, Materials Science and Engineering, Mathematics, Mechanical Engineering, Physics, and Textile Technology. The institute offers comprehensive educational programs including Bachelor of Technology across diverse specializations, integrated dual-degree programs, Master of Technology, Master of Science, MBA, Executive MBA for working professionals, Master of Design, and rigorous doctoral programs facilitating advanced research across multidisciplinary domains. IIT Delhi's faculty comprises distinguished scholars, researchers, and industry experts who have earned prestigious national and international recognitions for academic contributions, research innovations, and professional achievements.
                </p>
                <p>
                  Research excellence constitutes a fundamental pillar of IIT Delhi's mission, evidenced by numerous specialized research centers, extensive sponsored projects worth hundreds of crores annually, prolific publication records in top-tier international journals, substantial patent portfolios, and collaborative initiatives addressing critical challenges in energy, environment, healthcare, infrastructure, artificial intelligence, and sustainable development. The institute has fostered a thriving entrepreneurial ecosystem through dedicated incubation facilities, mentorship programs, funding opportunities, and industry connections, nurturing successful startups across technology sectors and contributing significantly to India's innovation landscape. IIT Delhi maintains extensive international collaborations with over 100 prestigious universities across 40 countries, facilitating student exchanges, joint research programs, faculty collaborations, and global learning opportunities.
                </p>
                <p>
                  Consistently ranked among India's top five institutions by NIRF and featuring prominently in global rankings including QS World University Rankings (48th in Engineering & Technology), THE World Rankings, and other international assessments, IIT Delhi has earned worldwide recognition for research impact, academic reputation, graduate employability, and institutional excellence. The institute's illustrious alumni network spans 50,000+ graduates occupying leadership positions in technology companies, consulting firms, financial institutions, research organizations, academic institutions, government agencies, and entrepreneurial ventures worldwide, consistently contributing to IIT Delhi's legacy while maintaining strong engagement with current students through mentorship, recruitment, philanthropy, and collaborative initiatives that reinforce the institution's enduring commitment to developing future leaders, innovators, and scholars who will drive technological advancement and societal progress.
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
            </div>
          )}

          {/* Programs Section */}
          {activeTab === 'courses' && (
            <div className={styles.section}>
              <h2>Programs Offered</h2>
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
                        <td>{course.specializations} Option{course.specializations > 1 ? 's' : ''}</td>
                        <td>{course.duration}</td>
                        <td className={styles.fee}>₹{course.fee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {activeTab === 'admissions' && (
            <div className={styles.section}>
              <h2>Admission Process</h2>
              <p className={styles.sectionIntro}>
                IIT Delhi's comprehensive admissions process ensures selection of the most talented and motivated candidates through rigorous national-level examinations and holistic evaluation criteria.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>
                      Candidates must appear for relevant national-level entrance examinations: JEE Main and JEE Advanced for B.Tech admissions, GATE (Graduate Aptitude Test in Engineering) for M.Tech programs, CAT/GMAT for MBA and Executive MBA, CEED/UCEED for Design programs, and department-specific entrance tests for doctoral programs. These examinations rigorously assess candidates' aptitude, domain knowledge, analytical abilities, problem-solving skills, and research potential through comprehensive objective and subjective question formats.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>
                      Following entrance examination results, eligible candidates must complete detailed online application forms through IIT Delhi's official admission portal, providing comprehensive personal information, educational qualifications, test scores, work experience details (for executive programs), and uploading scanned copies of required documents including academic transcripts, certificates, identity proof, photographs, and relevant supporting materials.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Selection Process</h3>
                    <p>
                      The admissions committee conducts comprehensive evaluation based on entrance test performance, academic records, relevant work experience, research proposals (for PhD), letters of recommendation, statement of purpose, and alignment with program requirements. Shortlisted candidates may be invited for personal interviews, group discussions, written tests, or counseling rounds depending on the program, where selection panels assess candidates' domain knowledge, communication skills, research aptitude, and overall suitability for academic pursuits.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Offer & Enrollment</h3>
                    <p>
                      Successful candidates receive formal admission offers detailing program specifics, fee structure, reporting dates, and enrollment procedures. Candidates must accept offers within stipulated timelines, pay required admission deposits to secure enrollment, complete medical examinations, submit original documents for verification, and report to campus on scheduled dates for physical document verification, biometric registration, hostel allocation, orientation programs, and commencement of academic activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placements Section */}
          {activeTab === 'placements' && (
            <div className={styles.section}>
              <h2>Placements</h2>
              <p className={styles.sectionIntro}>
                IIT Delhi's Training & Placement Cell consistently achieves exceptional placement records, attracting leading national and international companies across diverse industries.
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
                  <p>Interview Opportunities</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹1+ Cr</h3>
                  <p>Highest Package</p>
                </div>
              </div>

              <h3>Top Recruiters</h3>
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

export default IITDelhi;

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from '../../styles/UniversityDetail.module.css';

const IITGuwahati = () => {
  const [activeTab, setActiveTab] = useState('about');

  const coursesData = [
    { name: 'B.Sc (Honours) in Data Science & AI', fee: 349000, duration: '3 Years', specializations: 1 },
    { name: 'M.Tech Program', fee: 220800, duration: '2 Years', specializations: 11 },
    { name: 'PhD Program', fee: 90750, duration: '3 Years', specializations: 11 }
  ];

  const keyHighlights = [
    'Ranked 7th in NIRF 2024 Engineering Category',
    'QS World Rank 364, 32nd for Research Citations per Faculty',
    '6th IIT established in 1994, programs started 1995',
    '285-hectare campus between Brahmaputra River and hills',
    'Top 100 world universities under 50 years old',
    '2nd in Swachhata Ranking by Government of India',
    '6th in SDG 7 ranking (Affordable & Clean Energy)',
    '5 interdisciplinary centers and 11 departments',
    'Progressive degree system: Certificate→Diploma→BSc→Honours',
    'World-class research labs and picturesque campus views'
  ];

  const placementPartners = [
    'Google', 'Amazon', 'Microsoft', 'Goldman Sachs', 'JP Morgan',
    'McKinsey', 'BCG', 'Deloitte', 'Accenture', 'Infosys',
    'TCS', 'Wipro', 'IBM', 'Oracle', 'SAP',
    'Intel', 'Qualcomm', 'Samsung', 'Adobe', 'Flipkart', 'Uber'
  ];

  const faqs = [
    {
      question: 'What makes IIT Guwahati unique among IITs?',
      answer: 'IIT Guwahati distinguishes itself through several exceptional characteristics that set it apart within the prestigious IIT ecosystem. As the 6th IIT established in 1994, the institute occupies a breathtakingly scenic 285-hectare campus nestled between the mighty Brahmaputra River and picturesque hills approximately 20 kilometers from Guwahati city center, providing an inspiring natural environment conducive to learning, research, and personal growth. The campus\'s strategic location in Northeast India positions IIT Guwahati as a vital educational and research hub serving the region while maintaining strong connections with institutions across India and globally. The institute has earned recognition as among the top 100 universities in the world under 50 years old, demonstrating remarkable achievements within a relatively brief operational history. IIT Guwahati excels particularly in research impact, evidenced by its 32nd global ranking for Research Citations per Faculty in QS rankings, reflecting faculty members\' prolific scholarly contributions and international research collaborations. The institute pioneered sustainable practices earning 2nd rank in Swachhata Ranking by the Government of India and 6th position in SDG 7 focusing on Affordable and Clean Energy, showcasing commitment to environmental responsibility and sustainable development integrated throughout campus operations, curriculum, and research initiatives.'
    },
    {
      question: 'What is the B.Sc Honours in Data Science & AI program structure?',
      answer: 'IIT Guwahati\'s innovative B.Sc (Honours) in Data Science & Artificial Intelligence program represents a forward-thinking educational approach designed to meet escalating industry demand for skilled professionals in these transformative domains. This comprehensive four-year program incorporates a progressive credentialing system enabling students to earn intermediate certifications at successive milestones: completion of first year awards a Certificate in Data Science & AI, second year completion grants a Diploma in Data Science & AI, third year yields a Bachelor of Science degree, and successful completion of all four years culminates in B.Sc (Honours) in Data Science & Artificial Intelligence. This structure provides flexibility for students while ensuring progressive skill development and credentialing. The curriculum integrates rigorous foundational coursework in mathematics, statistics, programming, algorithms, and data structures with specialized instruction in machine learning, deep learning, natural language processing, computer vision, big data analytics, cloud computing, and AI ethics. Students engage with cutting-edge technologies, industry-standard tools, hands-on projects utilizing real-world datasets, industry internships providing practical experience, and capstone projects addressing contemporary challenges in data science and AI domains. The program emphasizes both theoretical foundations and practical applications, preparing graduates for diverse career opportunities in technology companies, research organizations, consulting firms, financial institutions, healthcare, e-commerce, and emerging AI-driven industries.'
    },
    {
      question: 'What research facilities are available at IIT Guwahati?',
      answer: 'IIT Guwahati provides world-class research infrastructure spanning diverse scientific and engineering disciplines, enabling faculty and students to pursue cutting-edge investigations addressing fundamental questions and practical challenges. The institute houses 11 specialized academic departments including Biosciences and Bioengineering, Chemical Engineering, Chemistry, Civil Engineering, Computer Science and Engineering, Design, Electronics and Electrical Engineering, Humanities and Social Sciences, Mathematics, Mechanical Engineering, and Physics, each equipped with advanced laboratories featuring sophisticated instrumentation, computational facilities, and specialized equipment. Additionally, five interdisciplinary research centers focus on emerging themes including Nanotechnology, Environment, Energy, Rural Technology, and Advanced Materials, fostering collaborative research transcending traditional departmental boundaries. Research facilities encompass sophisticated characterization equipment for materials analysis, high-performance computing clusters supporting computational research, specialized laboratories for biotechnology research, earthquake engineering facilities, advanced machining centers, clean rooms for microelectronics fabrication, sophisticated analytical instruments for chemical analysis, environmental monitoring equipment, and numerous domain-specific facilities addressing unique research requirements across departments. The Central Instrument Facility provides shared access to expensive research equipment, promoting resource efficiency and interdisciplinary collaborations. IIT Guwahati actively supports research through generous funding mechanisms, sponsored project opportunities, collaborations with industry and government agencies, international research partnerships, and comprehensive support services including research administration, technical assistance, and intellectual property management, creating an ecosystem conducive to impactful research, innovation, and scholarly excellence.'
    },
    {
      question: 'How does IIT Guwahati support entrepreneurship?',
      answer: 'IIT Guwahati has cultivated a thriving entrepreneurial ecosystem through dedicated infrastructure, mentorship programs, funding opportunities, and institutional support mechanisms designed to nurture student and faculty entrepreneurial aspirations. The Technology Incubation Centre (TIC) at IIT Guwahati provides comprehensive incubation facilities including dedicated workspace, mentorship from experienced entrepreneurs and industry experts, access to prototyping facilities, networking opportunities with investors and industry partners, and guidance on business planning, market research, legal compliance, intellectual property protection, and fundraising strategies. The institute actively encourages innovation through various initiatives including innovation competitions, startup boot camps, entrepreneurship development programs, and workshops covering diverse aspects of building successful ventures. IIT Guwahati facilitates connections with venture capital firms, angel investor networks, government funding schemes including Startup India, and corporate partners seeking innovative solutions, helping startups secure necessary financial resources for growth. The supportive institutional culture encourages faculty and students to pursue entrepreneurial paths while providing sabbatical policies, flexible academic arrangements, and recognition mechanisms celebrating entrepreneurial achievements. Success stories from IIT Guwahati\'s entrepreneurial ecosystem span technology startups in software development, AI applications, healthcare innovations, sustainable technologies, educational platforms, and other domains, with several ventures achieving significant commercial success, attracting substantial funding, and creating meaningful employment opportunities while addressing important market needs and societal challenges through innovative products and services.'
    },
    {
      question: 'What is campus life like at IIT Guwahati?',
      answer: 'Campus life at IIT Guwahati offers a vibrant, enriching experience that extends far beyond academics, fostering holistic student development through diverse extracurricular opportunities, cultural activities, sports, and community engagement. The picturesque 285-hectare campus provides a serene natural setting with stunning views of the Brahmaputra River and surrounding hills, creating an inspiring environment for study, reflection, and recreation. Comfortable hostel facilities accommodate residential students with modern amenities, mess facilities serving diverse cuisines, common areas for socializing, and supportive residential communities fostering friendships and peer learning. The institute hosts numerous technical festivals including Techniche (Asia\'s largest annual technical festival), cultural festivals like Alcheringa showcasing performing arts and creative talents, sports competitions, hackathons, and conferences attracting participants from across India and internationally. Students actively participate in over 60 technical, cultural, literary, social service, and hobby clubs pursuing interests ranging from robotics, coding, astronomy, photography, music, dance, drama, debating, quiz competitions, environmental initiatives, and community outreach programs. Sports facilities include playgrounds for cricket, football, basketball, volleyball, tennis, badminton, athletics, swimming pool, gymnasium, and indoor sports complexes supporting physical fitness and competitive sports. IIT Guwahati\'s diverse student body representing various states, cultures, and backgrounds creates a multicultural environment promoting cross-cultural understanding, collaboration, and lifelong friendships while comprehensive support services including counseling, health facilities, career guidance, and mentorship programs ensure student wellbeing, academic success, and personal growth throughout their transformative journey at this distinguished institution.'
    }
  ];

  return (
    <>
      <Head>
        <title>IIT Guwahati Online Programs | B.Sc AI, M.Tech, PhD</title>
        <meta name="description" content="Explore online programs from IIT Guwahati - Ranked 7th NIRF 2024 Engineering. B.Sc Data Science & AI, M.Tech, PhD programs in scenic campus." />
      </Head>

      <Header />

      <div className={styles.universityPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img 
                src="/images/universities/IIT Guwahati.png" 
                alt="IIT Guwahati Logo" 
                className={styles.universityLogoLarge}
              />
            </div>

            <div className={styles.heroRight}>
              <div className={styles.universityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>📍 Near Brahmaputra, Guwahati, Assam</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Established:</span>
                  <span className={styles.infoValue}>1994 (6th IIT)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>NIRF Ranking:</span>
                  <span className={styles.infoValue}>7th Engineering 2024</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Rating:</span>
                  <span className={styles.infoValue}>⭐ 5.0/5 (368 Reviews)</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Approvals:</span>
                  <div className={styles.approvalBadges}>
                    {['NIRF', 'AICTE', 'UGC'].map((approval, idx) => (
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
              <h2>About IIT Guwahati</h2>
              <div className={styles.aboutContent}>
                <p>
                  The Indian Institute of Technology Guwahati, established in 1994 as the sixth member of the prestigious IIT system, commenced academic programs in 1995 and has rapidly emerged as one of India's premier technical institutions recognized nationally and internationally for academic excellence, research innovation, and societal impact. Designated as an Institute of National Importance under the Institutes of Technology Act, IIT Guwahati occupies a breathtakingly scenic 285-hectare campus situated approximately 20 kilometers from Guwahati city center, nestled between the mighty Brahmaputra River and picturesque hills, providing an inspiring natural environment that fosters learning, research, creativity, and holistic personal development. This strategic location in Northeast India positions the institute as a vital educational and research hub serving the region while maintaining strong collaborative connections with institutions, industries, and research organizations across India and globally.
                </p>
                <p>
                  IIT Guwahati encompasses 11 specialized academic departments spanning Biosciences and Bioengineering, Chemical Engineering, Chemistry, Civil Engineering, Computer Science and Engineering, Design, Electronics and Electrical Engineering, Humanities and Social Sciences, Mathematics, Mechanical Engineering, and Physics, complemented by five interdisciplinary research centers focusing on Nanotechnology, Environment, Energy, Rural Technology, and Advanced Materials. The institute offers comprehensive educational programs including Bachelor of Technology across multiple engineering disciplines, innovative integrated dual-degree programs, Master of Technology in specialized domains, Master of Science, Master of Design, and rigorous doctoral programs enabling advanced research across diverse fields. IIT Guwahati's distinguished faculty comprises accomplished scholars, researchers, and experts who have earned prestigious national and international recognitions for academic contributions, research innovations, and professional achievements, ensuring students receive world-class education grounded in both theoretical foundations and practical applications.
                </p>
                <p>
                  Research excellence forms a cornerstone of IIT Guwahati's institutional mission, evidenced by sophisticated research infrastructure, extensive sponsored projects worth hundreds of crores annually, prolific publication records in prestigious international journals, substantial patent portfolios, and collaborative initiatives addressing critical challenges in energy, environment, healthcare, infrastructure, materials science, artificial intelligence, and sustainable development. The institute has earned notable recognition for research impact, achieving 32nd position globally in QS rankings for Research Citations per Faculty, demonstrating the international influence and scholarly contributions of its academic community. IIT Guwahati pioneered sustainable campus practices, earning 2nd rank in Swachhata Ranking by the Government of India and 6th position in SDG 7 focusing on Affordable and Clean Energy, showcasing institutional commitment to environmental responsibility and sustainable development integrated throughout operations, curriculum, research, and community engagement.
                </p>
                <p>
                  Consistently ranked among India's top ten engineering institutions by NIRF and featured in global rankings including QS World University Rankings, THE World Rankings, and recognition among top 100 universities in the world under 50 years old, IIT Guwahati has achieved remarkable distinction within a relatively brief operational history. The institute has cultivated a thriving entrepreneurial ecosystem through dedicated incubation facilities, mentorship programs, funding opportunities, and industry connections, nurturing successful startups across technology sectors. IIT Guwahati's growing alumni network comprises accomplished professionals occupying leadership positions in technology companies, research institutions, academic organizations, consulting firms, government agencies, and entrepreneurial ventures worldwide, consistently contributing to the institute's legacy while maintaining strong engagement with current students through mentorship, recruitment, philanthropy, and collaborative initiatives that reinforce IIT Guwahati's enduring commitment to developing future leaders, innovators, and scholars who will drive technological advancement and societal progress.
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
                IIT Guwahati's rigorous admissions process ensures selection of the most talented and motivated candidates through comprehensive national-level examinations and holistic evaluation criteria.
              </p>

              <div className={styles.admissionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Entrance Examination</h3>
                    <p>
                      Candidates must appear for relevant national-level entrance examinations based on the program: JEE Main and JEE Advanced for B.Tech admissions ensuring rigorous assessment of mathematical, physical sciences, and problem-solving abilities; GATE (Graduate Aptitude Test in Engineering) for M.Tech programs evaluating domain knowledge and analytical skills; specialized entrance tests for the innovative B.Sc (Honours) in Data Science & AI program assessing mathematical foundations, logical reasoning, and aptitude for data-driven disciplines; and department-specific research entrance tests and interviews for doctoral programs evaluating research aptitude, domain expertise, and scholarly potential.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Application Submission</h3>
                    <p>
                      Following entrance examination results, eligible candidates must complete comprehensive online application forms through IIT Guwahati's official admission portal, providing detailed personal information, educational qualifications, test scores, and uploading scanned copies of required documents including academic transcripts, certificates, identity proof, category certificates where applicable, photographs, and any additional materials specified for particular programs such as research proposals for doctoral admissions.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Evaluation & Selection</h3>
                    <p>
                      The admissions committee conducts thorough evaluation of applications based on entrance test performance, academic records demonstrating consistent excellence, research aptitude (particularly for graduate programs), letters of recommendation, statement of purpose articulating academic goals and research interests, and alignment with program requirements and departmental research strengths. Shortlisted candidates may be invited for personal interviews, written tests, or counseling rounds depending on the program, where selection panels assess domain knowledge, communication skills, research potential, and overall suitability.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Admission Offer & Enrollment</h3>
                    <p>
                      Successful candidates receive formal admission offers detailing program specifics, comprehensive fee structure, reporting dates, and enrollment procedures. Candidates must accept offers within stipulated timelines, pay required admission deposits to secure enrollment, complete medical examinations, submit original documents for verification during physical reporting to the scenic IIT Guwahati campus, and participate in orientation programs introducing academic policies, campus facilities, student support services, and vibrant campus culture before commencing transformative academic journeys.
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
                IIT Guwahati's dedicated Placement Cell consistently achieves outstanding placement outcomes, attracting leading companies from technology, consulting, finance, and diverse sectors.
              </p>

              <div className={styles.placementHighlights}>
                <div className={styles.placementCard}>
                  <h3>95%+</h3>
                  <p>Placement Rate</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>250+</h3>
                  <p>Recruiting Companies</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>₹2+ Cr</h3>
                  <p>Highest Package</p>
                </div>
                <div className={styles.placementCard}>
                  <h3>3X</h3>
                  <p>Interview Opportunities</p>
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

export default IITGuwahati;

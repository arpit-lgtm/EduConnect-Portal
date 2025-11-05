import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/BrowseCourses.module.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import dynamic from 'next/dynamic';
import universityLogoMap from '../utils/universityLogoMap';

const AskEduAI = dynamic(() => import('../components/eduai/EduAI'), {
  ssr: false
});

export default function BrowseCourses() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('PG Courses');
  const [activeStream, setActiveStream] = useState('Commerce');
  const [coursesData, setCoursesData] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [universityDatabase, setUniversityDatabase] = useState([]);
  const [courseUniversities, setCourseUniversities] = useState([]);

  const handleKnowMore = (course) => {
    // Toggle: if same course clicked, collapse it
    if (selectedCourse && selectedCourse.id === course.id) {
      setSelectedCourse(null);
      setCourseUniversities([]);
    } else {
      setSelectedCourse(course);
      // Find universities that offer this course
      findUniversitiesForCourse(course);
    }
  };

  // Load university database
  useEffect(() => {
    const loadUniversityData = async () => {
      try {
        if (window.universityDatabase && Array.isArray(window.universityDatabase)) {
          setUniversityDatabase(window.universityDatabase);
          console.log('✅ University database already loaded:', window.universityDatabase.length);
          return;
        }

        const response = await fetch('/assets/js/comprehensive-unified-database-COMPLETE.js');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);

        if (window.universityDatabase && Array.isArray(window.universityDatabase)) {
          setUniversityDatabase(window.universityDatabase);
          console.log('✅ Loaded university database:', window.universityDatabase.length);
        }
      } catch (error) {
        console.error('❌ Error loading university database:', error);
      }
    };

    loadUniversityData();
  }, []);

  useEffect(() => {
    // Load courses immediately - no database fetch needed
    categorizeCourses();
  }, []);

  // Reset selected course when switching tabs or streams
  useEffect(() => {
    setSelectedCourse(null);
    setCourseUniversities([]);
  }, [activeTab, activeStream]);

  // Get course description
  const getCourseDescription = (courseName) => {
    const descriptions = {
      'Online MBA': 'A flexible master\'s program in business administration delivered virtually. It builds leadership and strategic management skills for modern business environments.',
      '1 Year MBA Online': 'An accelerated, intensive MBA program completed entirely online in one year. Designed for professionals seeking a fast-track career advancement.',
      'Distance MBA': 'A self-paced MBA program conducted via correspondence or online study centers. Offers flexibility for those who cannot attend regular classes.',
      'Executive MBA for Working Professionals': 'A premium MBA tailored for experienced managers and leaders. Blends executive-level coursework with real-world business challenges to enhance decision-making and strategic thinking.',
      'Online Global MBA': 'An international MBA program focusing on global markets, cross-border management, and multinational strategies. Prepares graduates to lead in a globalized economy.',
      'Dual MBA Online': 'A unique program offering two MBA specializations simultaneously. Expands career options and provides a competitive edge in multiple business domains.',
      'Online MBA after Diploma': 'An MBA pathway for diploma holders seeking advanced management education. Bridges the gap between vocational training and managerial roles.',
      'Online MBA Plus': 'An enhanced MBA program with added certifications, industry projects, and skill modules. Offers more than a standard MBA for comprehensive career preparation.',
      'MBA in Business Analytics': 'An MBA focused on data-driven decision-making and analytics tools. Combines business acumen with statistical modeling, data mining, and predictive analytics.',
      'Online M.Com': 'A postgraduate commerce program covering advanced accounting, taxation, auditing, and business economics. Ideal for those pursuing finance, banking, or commerce careers.',
      'Distance M.Com': 'A flexible M.Com degree delivered through distance education. Allows working professionals to deepen expertise in commerce and finance without classroom attendance.',
      'Online MCA': 'A master\'s degree in computer applications focusing on software engineering, programming, and IT systems. Prepares graduates for technical and managerial roles in IT.',
      'M.Tech': 'A postgraduate engineering degree offering specialization in advanced technologies and research. Builds expertise in cutting-edge fields like AI, data science, and more.',
      'Online M.Sc': 'A master\'s degree in science with specializations across disciplines like physics, chemistry, IT, data science, and more. Combines theory with practical applications.',
      'Distance MCA': 'An MCA program delivered via distance learning for aspiring IT professionals. Covers programming, databases, networking, and software development.',
      'Distance M.Sc': 'A flexible M.Sc program for working individuals interested in science and technology. Offers specializations in various scientific and applied fields.',
      'Online MA': 'A master\'s in arts covering subjects like English, psychology, sociology, history, and more. Focuses on critical thinking, research, and analytical skills.',
      'Distance MA': 'An MA degree delivered through distance mode, perfect for educators, writers, and humanities enthusiasts. Provides flexibility while pursuing higher education in arts.',
      'Online BBA': 'An undergraduate business degree covering management, marketing, finance, and entrepreneurship. Lays the foundation for careers in business and corporate sectors.',
      'Online B.Com': 'A bachelor\'s in commerce focusing on accounting, taxation, business law, and economics. Prepares students for roles in finance, banking, and commerce industries.',
      'Distance BBA': 'A BBA program offered via distance learning for flexibility and accessibility. Ideal for students balancing work, personal commitments, or geographical constraints.',
      'Distance B.Com': 'A B.Com degree delivered through distance education. Provides foundational knowledge in commerce and business for those unable to attend traditional classes.',
      'Online BCA': 'A bachelor\'s in computer applications emphasizing programming, web development, and software design. Equips students with foundational IT skills for tech careers.',
      'Distance BCA': 'A BCA program via distance mode for students seeking IT education with flexibility. Covers computer science fundamentals and application development.',
      'Online B.Sc': 'A bachelor\'s in science with specializations across fields like IT, data science, chemistry, physics, and more. Combines theoretical knowledge with practical learning.',
      'Online BA': 'A bachelor\'s in arts covering diverse subjects like literature, history, sociology, and political science. Encourages critical thinking and creative expression.',
      'Distance BA': 'A BA degree through distance education for flexible learning. Ideal for students pursuing higher education while managing other responsibilities.',
      'Online PGDM': 'A postgraduate diploma in management equivalent to an MBA. Focuses on management skills, business strategy, and industry-specific knowledge.',
      'Online MBA & Doctorate': 'A dual-degree program combining an MBA with a doctoral qualification. Prepares graduates for leadership roles in academia, research, and consulting.',
      'Online Master of Management Studies': 'A master\'s program focusing on management theory, organizational behavior, and strategic leadership. Similar to an MBA with emphasis on academic rigor.',
      'Blended MBA': 'A hybrid MBA combining online learning with occasional in-person sessions. Offers flexibility while maintaining interactive and networking opportunities.',
      'Online PGPM (Post Graduate Program in Management)': 'A management program focusing on practical skills and industry readiness. Prepares students for mid to senior-level management roles.',
      'Online PGP in Management': 'A postgraduate program in management designed for working professionals. Focuses on leadership, strategy, and decision-making in business contexts.',
      'One Year Online MBA': 'An accelerated MBA that condenses coursework into 12 months. Ideal for professionals looking to advance quickly without career interruptions.',
      'PGP in General Management': 'A general management program covering all aspects of business from marketing to finance. Suitable for those seeking versatile managerial skills.',
      'Online MBA in HR Management': 'An MBA specializing in human resources, talent management, and organizational behavior. Prepares graduates for HR leadership roles.',
      'Online MBA in Finance': 'An MBA focused on financial analysis, investment strategies, and corporate finance. Ideal for careers in banking, investment, and financial planning.',
      'Online MBA in Marketing': 'An MBA specializing in brand management, consumer behavior, and digital marketing. Prepares students for roles in advertising, sales, and product management.',
      'Online MBA in Operations Management': 'An MBA focusing on supply chain, production, and logistics management. Equips students with skills to optimize business operations.',
      'Online MBA in International Business': 'An MBA specializing in global trade, cross-border strategy, and international markets. Prepares students for roles in multinational corporations.',
      'Online MBA in IT Management': 'An MBA combining business and IT knowledge, focusing on technology management and digital transformation. Ideal for IT professionals moving into leadership.',
      'Online MBA in Entrepreneurship': 'An MBA for aspiring entrepreneurs focusing on startup management, innovation, and business planning. Helps turn business ideas into reality.',
      'Online MBA in Project Management': 'An MBA specializing in project planning, execution, and risk management. Prepares graduates for project leadership roles across industries.',
      'Online MBA in Healthcare Management': 'An MBA focused on managing healthcare organizations, hospital administration, and health policy. Prepares leaders for the healthcare sector.',
      'Online MBA in Supply Chain Management': 'An MBA specializing in logistics, procurement, and supply chain optimization. Equips professionals to manage end-to-end supply chains.',
      'Online MBA in Banking & Finance': 'An MBA focusing on banking operations, financial markets, and investment banking. Prepares students for leadership in the banking sector.',
      'Online MBA in Digital Marketing': 'An MBA specializing in SEO, social media, content marketing, and digital strategy. Ideal for those pursuing careers in online marketing.',
      'Online MBA in Retail Management': 'An MBA focused on retail operations, merchandising, and customer experience. Prepares graduates for leadership roles in retail chains.',
      'Online MBA in Hospitality Management': 'An MBA specializing in hotel management, tourism, and service excellence. Ideal for careers in the hospitality and travel industries.',
      'Online MBA in Media & Communication': 'An MBA focusing on media strategy, communication planning, and content management. Prepares students for roles in media companies and PR firms.',
      'Online MBA in Sports Management': 'An MBA specializing in sports marketing, event management, and athlete representation. Prepares professionals for leadership in the sports industry.',
      'Online MBA in Agribusiness Management': 'An MBA focused on agriculture, agritech, and rural business management. Ideal for those interested in the agricultural sector.',
      'Online MBA in Real Estate Management': 'An MBA specializing in property development, real estate finance, and urban planning. Prepares graduates for careers in real estate firms.',
      'Online MBA in Energy Management': 'An MBA focused on renewable energy, energy policy, and sustainable business practices. Ideal for careers in the energy sector.',
      'Online MBA in Aviation Management': 'An MBA specializing in airline operations, airport management, and aviation strategy. Prepares students for leadership roles in aviation.',
      'Online MBA in Tourism Management': 'An MBA focused on travel planning, destination marketing, and tourism economics. Ideal for careers in travel agencies and tourism boards.',
      'Online MBA in Logistics Management': 'An MBA specializing in transportation, warehousing, and distribution networks. Equips professionals to manage complex logistics operations.',
      'Online MBA in Insurance Management': 'An MBA focused on risk assessment, underwriting, and insurance operations. Prepares graduates for careers in insurance companies.',
      'Online MBA in Event Management': 'An MBA specializing in planning, executing, and managing corporate and personal events. Ideal for careers in event planning firms.',
      'Online MBA in Fashion Management': 'An MBA focused on fashion marketing, retail, and brand management. Prepares students for leadership roles in the fashion industry.',
      'Online MBA in Pharmaceutical Management': 'An MBA specializing in pharma marketing, drug development, and healthcare regulations. Ideal for careers in pharmaceutical companies.',
      'Online MBA in Construction Management': 'An MBA focused on construction planning, project execution, and infrastructure development. Prepares leaders for construction and real estate.',
      'Online MBA in Public Administration': 'An MBA specializing in government operations, policy-making, and public sector management. Ideal for careers in public service.',
      'Online MBA in NGO Management': 'An MBA focused on nonprofit organizations, fundraising, and social impact management. Prepares leaders for NGO and development sectors.',
      'Online MBA in Environmental Management': 'An MBA specializing in sustainability, environmental policy, and green business practices. Ideal for careers in environmental consulting.',
      'Online MBA in Quality Management': 'An MBA focused on Six Sigma, total quality management, and process improvement. Prepares professionals to drive quality initiatives.',
      'Online MBA in Export-Import Management': 'An MBA specializing in international trade, customs regulations, and cross-border logistics. Prepares students for careers in export-import firms.',
      'Online MBA in Corporate Social Responsibility': 'An MBA focused on CSR strategy, social impact, and ethical business practices. Ideal for those passionate about sustainable business.',
      'Online MBA in Family Business Management': 'An MBA tailored for family-run businesses focusing on succession planning and governance. Helps next-gen leaders manage and grow family enterprises.',
      'Online MBA in Artificial Intelligence': 'An MBA combining AI, machine learning, and business strategy. Prepares leaders to drive AI adoption in organizations.',
      'Online MBA in Data Science': 'An MBA focused on big data, analytics, and data-driven decision-making. Equips professionals to lead data initiatives in business.',
      'Online MBA in Cyber Security Management': 'An MBA specializing in information security, risk management, and cybersecurity strategy. Prepares leaders to protect organizations from cyber threats.',
      'Online MBA in Blockchain Management': 'An MBA focused on blockchain technology, cryptocurrency, and decentralized systems. Ideal for careers in fintech and blockchain firms.',
      'Online MBA in E-Commerce Management': 'An MBA specializing in online retail, digital platforms, and e-commerce strategy. Prepares students for leadership in e-commerce companies.',
      'Online MBA in Content Management': 'An MBA focused on content strategy, digital publishing, and media production. Ideal for careers in content-driven businesses.',
      'Online MBA in Product Management': 'An MBA specializing in product development, lifecycle management, and user experience. Prepares students for product management roles.',
      'Online MBA in Business Consulting': 'An MBA focused on consulting methodologies, problem-solving, and client management. Prepares graduates for careers in consulting firms.',
      'Online MBA in Wealth Management': 'An MBA specializing in investment advisory, portfolio management, and financial planning. Ideal for careers in wealth management and private banking.',
      'Online MBA in Compliance Management': 'An MBA focused on regulatory compliance, corporate governance, and risk mitigation. Prepares professionals to manage compliance functions.',
      'Online MBA in Crisis Management': 'An MBA specializing in emergency response, reputation management, and business continuity. Ideal for careers in risk and crisis management.',
      'Online MBA in Brand Management': 'An MBA focused on brand strategy, positioning, and identity management. Prepares students for brand management roles in corporations.',
      'Online MBA in Customer Relationship Management': 'An MBA specializing in CRM systems, customer retention, and loyalty programs. Ideal for careers in customer success and sales.',
      'Online MBA in Social Media Management': 'An MBA focused on social media strategy, influencer marketing, and online engagement. Prepares students for roles in digital marketing.',
      'Online MBA in Change Management': 'An MBA specializing in organizational change, transformation, and leadership. Prepares professionals to lead change initiatives in companies.',
      'Online MBA in Diversity & Inclusion Management': 'An MBA focused on workplace diversity, equity, and inclusion strategies. Ideal for HR leaders passionate about inclusive workplaces.',
      'Online MBA in Strategy Management': 'An MBA specializing in corporate strategy, competitive analysis, and long-term planning. Prepares graduates for strategic leadership roles.',
      'Online MBA in Sales Management': 'An MBA focused on sales strategy, team management, and revenue growth. Ideal for careers in sales leadership and business development.',
      'Online MBA in Business Development': 'An MBA specializing in growth strategies, partnerships, and market expansion. Prepares professionals for business development roles.',
      'Online MBA in Innovation Management': 'An MBA focused on fostering innovation, R&D management, and creative problem-solving. Ideal for roles in product innovation and technology.',
      'Online MBA in Leadership': 'An MBA specializing in executive leadership, team management, and organizational culture. Prepares graduates for C-suite and senior leadership roles.',
      'Online MBA in General Management': 'An MBA covering all functional areas of business from marketing to operations. Ideal for those seeking versatile management skills and broad career options.',
      'B.Tech': 'An undergraduate engineering degree offering specializations in fields like computer science, mechanical, civil, and electrical engineering. Combines theoretical knowledge with hands-on projects.',
      'Online B.Tech': 'A flexible bachelor\'s in technology delivered online for working professionals or remote learners. Covers engineering fundamentals and industry-relevant skills.',
      'Online B.Sc in Data Science': 'A bachelor\'s degree specializing in data analysis, machine learning, and statistical modeling. Prepares students for careers in data-driven industries.',
      'Online B.Sc in Computer Science': 'A bachelor\'s in computer science covering programming, algorithms, databases, and software development. Ideal for aspiring software engineers and developers.',
      'Online B.Sc in IT': 'A bachelor\'s in information technology focusing on systems management, networking, and IT infrastructure. Prepares graduates for IT support and admin roles.',
      'Online B.Sc in Mathematics': 'A bachelor\'s in mathematics covering algebra, calculus, statistics, and applied math. Ideal for careers in research, teaching, or analytics.',
      'Online B.Sc in Physics': 'A bachelor\'s in physics focusing on mechanics, quantum physics, and experimental science. Prepares students for research, engineering, or teaching roles.',
      'Online B.Sc in Chemistry': 'A bachelor\'s in chemistry covering organic, inorganic, and physical chemistry. Ideal for careers in pharmaceuticals, research, or teaching.',
      'Online B.Sc in Biotechnology': 'A bachelor\'s in biotechnology focusing on genetics, molecular biology, and bio-processes. Prepares students for careers in biotech firms and research.',
      'Online B.Sc in Psychology': 'A bachelor\'s in psychology covering human behavior, cognitive science, and mental health. Ideal for careers in counseling, HR, or social work.',
      
      // Executive Education
      'IIM Online Courses': 'Short-term executive programs from IIMs focusing on leadership, strategy, and management. Designed for working professionals seeking skill enhancement from premier institutions.',
      'IIIT Online Courses': 'Technology-focused certificate programs from IIITs covering AI, data science, and emerging tech. Ideal for tech professionals seeking advanced specialization.',
      'Data Science & Analytics': 'Comprehensive program in data analysis, machine learning, and business intelligence. Combines technical skills with business applications for data-driven careers.',
      'Executive M.Tech for Working Professionals': 'A postgraduate engineering degree for working professionals. Offers specialization in cutting-edge technologies while maintaining your career.',
      'AI and Machine Learning': 'Advanced program covering machine learning algorithms, deep learning, and AI applications. Prepares professionals for AI-driven transformation in industries.',
      'Generative AI': 'Specialized program in generative AI technologies, GPT models, and prompt engineering. Focuses on creating AI systems that generate content, text, and images.',
      'UI UX Certificate Program': 'Professional certification in user interface and experience design. Covers design thinking, prototyping, and user research for digital products.',
      'Leadership & Management': 'Executive program focused on leadership development, team management, and strategic planning. Enhances managerial effectiveness and organizational leadership.',
      'Finance': 'Executive program in corporate finance, investment banking, and financial analysis. Ideal for finance professionals seeking advanced financial management skills.',
      'Marketing': 'Advanced program in digital marketing, brand management, and marketing strategy. Prepares professionals for leadership roles in marketing and brand management.',
      'Human Resource (HR)': 'Specialized program in talent management, HR analytics, and organizational development. Equips HR professionals with modern people management strategies.',
      'Healthcare': 'Executive program in healthcare management, hospital administration, and healthcare policy. Designed for healthcare professionals moving into management roles.',
      'Operations': 'Advanced program in operations management, supply chain, and process optimization. Focuses on improving organizational efficiency and operational excellence.',
      'Business Analytics': 'Comprehensive program in data analysis, predictive modeling, and business intelligence. Combines analytics with business strategy for data-driven decision making.',
      'Software & Technology': 'Advanced program in software development, cloud technologies, and DevOps. Covers modern software engineering practices and emerging technologies.',
      'PG Diploma Applied Statistics': 'Postgraduate diploma in statistical modeling, data analysis, and research methods. Ideal for professionals working with data and research.',
      'IIT Courses Online': 'Premium online courses from IITs covering engineering, AI, and technology subjects. Offers world-class education from India\'s premier technology institutions.',
      'Blockchain': 'Specialized program in blockchain technology, cryptocurrency, and smart contracts. Covers DeFi, NFTs, and decentralized application development.',
      'Cloud Computing': 'Comprehensive program in cloud platforms like AWS, Azure, and Google Cloud. Prepares professionals for cloud architecture and cloud-native development.',
      'PG Program In Technology Management': 'Postgraduate program combining technology and management. Focuses on IT strategy, digital transformation, and technology-driven innovation.',
      'Big Data Engineering': 'Advanced program in big data technologies like Hadoop, Spark, and data warehousing. Prepares professionals for large-scale data processing roles.',
      'DevOps': 'Specialized program in DevOps practices, CI/CD pipelines, and infrastructure automation. Covers Docker, Kubernetes, and modern deployment practices.',
      'Quantum Computing': 'Cutting-edge program in quantum algorithms, quantum programming, and quantum cryptography. Prepares professionals for the future of computing.',
      'Digital Transformation and Innovation': 'Executive program in digital strategy, innovation management, and change leadership. Focuses on driving digital transformation in organizations.',
      'Public Policy Management': 'Program in policy analysis, governance, and public administration. Ideal for professionals working in government, NGOs, or policy research.',
      'Cyber Security': 'Comprehensive program in network security, ethical hacking, and security analytics. Prepares professionals to protect organizations from cyber threats.',
      'Executive Program in Retail Management': 'Specialized program in retail operations, merchandising, and customer experience. Focuses on modern retail management and omnichannel strategies.',
      'Online Executive Program in Emerging Technologies': 'Advanced program covering AI, IoT, blockchain, and AR/VR. Prepares leaders to adopt and implement emerging technologies.',
      'Online Executive PG Diploma in Sports Management': 'Postgraduate diploma in sports marketing, event management, and sports analytics. Ideal for careers in the sports and fitness industry.',
      
      // Doctorate/Ph.D.
      'Online PhD Programs': 'Research-focused doctoral programs in various disciplines. Designed for scholars and professionals pursuing advanced research and academic careers.',
      'Doctor of Business Administration': 'Professional doctorate for senior business leaders and executives. Focuses on applied research, strategic thinking, and executive-level decision making.',
      'PhD in Management': 'Research doctorate in management disciplines covering operations, strategy, and organizational behavior. Prepares scholars for academic and research positions.',
      'PhD in Computer Science': 'Research doctorate in computer science focusing on AI, data science, and software engineering. Ideal for those pursuing research and teaching careers.',
      'Integrated MBA & Doctorate': 'Dual degree combining MBA and PhD in business. Accelerated path to doctoral qualification with management education.',
      
      // Study Abroad
      'Study in USA': 'Study programs at top US universities offering MBA, MS, and engineering degrees. Access to world-renowned institutions and global career opportunities.',
      'Study in UK': 'Graduate programs at prestigious UK universities with shorter duration. Ideal for MBA, MSc, and master\'s programs with strong ROI.',
      'Study in Canada': 'Study in Canadian universities with excellent post-study work opportunities. Programs in business, technology, and engineering with immigration benefits.',
      'Study in Australia': 'Study at Australian universities known for quality education and lifestyle. Programs in MBA, engineering, IT, and healthcare with work opportunities.',
      'Study in Germany': 'Affordable education at German universities with low or no tuition fees. Strong focus on engineering, technology, and research programs.',
      'Study in Ireland': 'Programs at Irish universities with strong tech industry connections. Ideal for business, data science, and technology programs with EU access.',
      'Study in Singapore': 'Study at top Asian universities in Singapore\'s business hub. Programs in MBA, finance, and technology with excellent placement opportunities.',
      'Global MBA Programs': 'International MBA programs with global curriculum and networking. Prepares leaders for multinational corporations and global business careers.',
      
      // Advanced Diploma
      'Advanced Diploma in Management': 'One-year diploma in management covering essential business functions. Alternative to MBA for quick skill development.',
      'PG Diploma in Digital Marketing': 'Postgraduate diploma specializing in SEO, SEM, and digital marketing strategies. Practical training for digital marketing careers.',
      'PG Diploma in Data Science': 'Postgraduate diploma in machine learning, data analytics, and AI. Hands-on training for data science and analytics roles.',
      'PG Diploma in Finance': 'Postgraduate diploma in investment banking, financial analysis, and portfolio management. Ideal for finance professionals seeking specialization.',
      'PG Diploma in HR Management': 'Postgraduate diploma in talent management, recruitment, and HR analytics. Prepares professionals for modern HR practices.',
      
      // Skilling & Certificate
      'Digital Marketing Certificate': 'Short-term certification in SEO, PPC, social media, and email marketing. Quick skill development for digital marketing roles.',
      'Financial Modeling': 'Professional certification in Excel modeling, valuation, and financial forecasting. Essential skills for finance and investment professionals.',
      'Project Management': 'Certification program covering Agile, Scrum, and PMP methodologies. Prepares professionals for project management roles across industries.',
      'Python Programming': 'Programming certification covering core Python, data structures, and applications. Foundation for software development and data science careers.',
      'Full Stack Development': 'Comprehensive program in MERN/MEAN stack and web development. Prepares developers for full stack engineering roles.'
    };

    return descriptions[courseName] || 'Comprehensive program designed to enhance your skills and advance your career in this field.';
  };

  // Find 4 random universities that offer the selected course
  const findUniversitiesForCourse = (course) => {
    if (!universityDatabase || universityDatabase.length === 0) {
      console.warn('University database not loaded yet');
      return;
    }

    // Map course names to database course keys
    const courseNameMap = {
      'Online MBA': 'MBA',
      '1 Year MBA Online': 'MBA',
      'Distance MBA': 'MBA',
      'Executive MBA for Working Professionals': 'MBA',
      'Online Global MBA': 'MBA',
      'Dual MBA Online': 'MBA',
      'Online MBA after Diploma': 'MBA',
      'Online MBA Plus': 'MBA',
      'MBA in Business Analytics': 'MBA',
      'Online MBA & Doctorate': 'MBA',
      'Online Master of Management Studies': 'MBA',
      'Blended MBA': 'MBA',
      'Online M.Com': 'M.Com',
      'Distance M.Com': 'M.Com',
      'Online PGDM': 'MBA',
      'Online MCA': 'MCA',
      'M.Tech': 'M.Tech',
      'Online M.Sc': 'M.Sc',
      'Distance MCA': 'MCA',
      'Distance M.Sc': 'M.Sc',
      'Online MA': 'MA',
      'Distance MA': 'MA',
      'Online BBA': 'BBA',
      'Online B.Com': 'B.Com',
      'Distance BBA': 'BBA',
      'Distance B.Com': 'B.Com',
      'Online BCA': 'BCA',
      'Distance BCA': 'BCA',
      'Online B.Sc': 'B.Sc',
      'Online BA': 'BA',
      'Distance BA': 'BA'
    };

    const dbCourseName = courseNameMap[course.name] || course.name;

    const matchingUniversities = universityDatabase.filter(uni => {
      return uni.courses && uni.courses[dbCourseName];
    });

    console.log(`Found ${matchingUniversities.length} universities offering ${dbCourseName}`);

    // For PG/UG courses, show random 7 universities. For others, show ALL matching universities
    const isMainCategory = activeTab === 'PG Courses' || activeTab === 'UG Courses';
    const shuffled = [...matchingUniversities].sort(() => 0.5 - Math.random());
    const selected = isMainCategory ? shuffled.slice(0, 7) : shuffled; // Show all for non-PG/UG

    setCourseUniversities(selected);
  };

  const openMatcherWithCourse = (course) => {
    // Map activeTab to degreeType expected by matcher
    const degreeType = activeTab;
    // Use course id (or name) as preferredCourse - matcher expects name or id depending on implementation
    const preferredCourse = course.id || course.name;

    // Push to matcher with query params
    router.push({
      pathname: '/university-matcher',
      query: { degreeType, preferredCourse }
    });
  };

  const categorizeCourses = () => {
    // EXACT same courses as main page BrowseCategories component
    const categorized = {
      'PG Courses': {
        'Commerce': [
          { name: 'Online MBA', id: 'online-mba', category: 'Management', duration: '2 years', fees: { min: 100000, max: 500000 }, specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'International Business', 'IT Management', 'Strategy', 'Business Analytics', 'Entrepreneurship', 'Supply Chain Management', 'Digital Marketing', 'Financial Management', 'Investment Banking', 'Project Management', 'Retail Management', 'Healthcare Management', 'Banking & Insurance', 'E-Business', 'Media Management', 'Rural Management'] },
          { name: '1 Year MBA Online', id: 'one-year-mba', category: 'Management', duration: '1 year', fees: { min: 150000, max: 400000 }, specializations: ['General Management', 'Finance', 'Marketing', 'HR', 'Operations', 'Business Analytics', 'Entrepreneurship', 'Digital Marketing'] },
          { name: 'Distance MBA', id: 'distance-mba', category: 'Management', duration: '2 years', fees: { min: 80000, max: 300000 }, specializations: ['Finance', 'Marketing', 'HR', 'Operations', 'Banking & Insurance', 'International Business', 'IT Management', 'Retail Management', 'Supply Chain', 'Business Analytics', 'Project Management', 'Entrepreneurship', 'Digital Marketing', 'Financial Services', 'Systems Management'] },
          { name: 'Executive MBA for Working Professionals', id: 'executive-mba', category: 'Management', duration: '2 years', fees: { min: 200000, max: 600000 }, specializations: ['Leadership', 'Strategy', 'Finance', 'Marketing', 'Operations', 'Business Analytics', 'Digital Transformation', 'Innovation Management', 'Change Management', 'Global Business'] },
          { name: 'Online Global MBA', id: 'global-mba', category: 'Management', duration: '2 years', fees: { min: 300000, max: 800000 }, specializations: ['Global Business', 'International Finance', 'Global Marketing', 'Cross-cultural Management'] },
          { name: 'Dual MBA Online', id: 'dual-mba', category: 'Management', duration: '2 years', fees: { min: 250000, max: 700000 }, specializations: ['Dual Specialization in Finance & Marketing', 'HR & Operations', 'IT & Marketing'] },
          { name: 'Online MBA after Diploma', id: 'mba-after-diploma', category: 'Management', duration: '2 years', fees: { min: 120000, max: 400000 }, specializations: ['General Management', 'Finance', 'Marketing', 'HR'] },
          { name: 'Online MBA Plus', id: 'mba-plus', category: 'Management', duration: '2 years', fees: { min: 150000, max: 500000 }, specializations: ['Finance', 'Marketing', 'HR', 'Operations', 'Analytics'] },
          { name: 'MBA in Business Analytics', id: 'mba-business-analytics', category: 'Management', duration: '2 years', fees: { min: 200000, max: 600000 }, specializations: ['Data Analytics', 'Business Intelligence', 'Predictive Analytics', 'Big Data'] },
          { name: 'Online MBA & Doctorate', id: 'integrated-mba-doctorate', category: 'Management', duration: '3-5 years', fees: { min: 400000, max: 1000000 }, specializations: ['General Management', 'Finance', 'Marketing', 'Strategy'] },
          { name: 'Online Master of Management Studies', id: 'online-mms', category: 'Management', duration: '2 years', fees: { min: 150000, max: 500000 }, specializations: ['Finance', 'Marketing', 'HR', 'Operations'] },
          { name: 'Blended MBA', id: 'blended-mba', category: 'Management', duration: '2 years', fees: { min: 180000, max: 550000 }, specializations: ['Finance', 'Marketing', 'HR', 'Operations', 'Digital Marketing'] },
          { name: 'Online M.Com', id: 'online-mcom', category: 'Commerce', duration: '2 years', fees: { min: 30000, max: 150000 }, specializations: ['Accounting', 'Finance', 'Taxation', 'Banking'] },
          { name: 'Distance M.Com', id: 'distance-mcom', category: 'Commerce', duration: '2 years', fees: { min: 25000, max: 120000 }, specializations: ['Accounting', 'Finance', 'E-Commerce', 'International Business'] },
          { name: 'Online PGDM', id: 'pgdm-online', category: 'Management', duration: '2 years', fees: { min: 150000, max: 500000 }, specializations: ['Finance', 'Marketing', 'HR', 'Operations', 'International Business'] },
          { name: 'Online PG Diploma & Certificate', id: 'pg-diploma-certificate', category: 'Management', duration: '6-12 months', fees: { min: 50000, max: 200000 }, specializations: ['Digital Marketing', 'Financial Management', 'HR Management', 'Supply Chain'] }
        ],
        'Science': [
          { name: 'Online MCA', id: 'online-mca', category: 'Computer Applications', duration: '2 years', fees: { min: 80000, max: 300000 }, specializations: ['Software Development', 'Data Science', 'Cloud Computing', 'Cyber Security', 'AI & ML'] },
          { name: 'M.Tech', id: 'm-tech', category: 'Engineering', duration: '2 years', fees: { min: 100000, max: 400000 }, specializations: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Data Science'] },
          { name: 'Online M.Sc', id: 'online-msc', category: 'Science', duration: '2 years', fees: { min: 50000, max: 250000 }, specializations: ['IT', 'Data Science', 'Mathematics', 'Physics', 'Chemistry', 'Psychology'] },
          { name: 'MS Degree Online', id: 'ms-degree', category: 'Science', duration: '2 years', fees: { min: 80000, max: 350000 }, specializations: ['Computer Science', 'Data Analytics', 'Information Technology', 'Biotechnology'] },
          { name: 'Online Global MCA', id: 'global-mca', category: 'Computer Applications', duration: '2 years', fees: { min: 150000, max: 400000 }, specializations: ['Software Engineering', 'Cloud Computing', 'AI & ML', 'Full Stack Development'] },
          { name: 'Distance MCA', id: 'distance-mca', category: 'Computer Applications', duration: '2 years', fees: { min: 60000, max: 250000 }, specializations: ['Software Development', 'Web Technologies', 'Data Science', 'Mobile App Development'] },
          { name: 'Distance M.Sc', id: 'distance-msc', category: 'Science', duration: '2 years', fees: { min: 30000, max: 200000 }, specializations: ['IT', 'Mathematics', 'Physics', 'Chemistry', 'Environmental Science'] }
        ],
        'Arts': [
          { name: 'Online MA', id: 'online-ma', category: 'Arts', duration: '2 years', fees: { min: 30000, max: 150000 }, specializations: ['English', 'History', 'Political Science', 'Economics', 'Psychology', 'Sociology', 'Journalism'] },
          { name: 'Online Master of Design', id: 'online-m-des', category: 'Design', duration: '2 years', fees: { min: 100000, max: 400000 }, specializations: ['UI/UX Design', 'Graphic Design', 'Product Design', 'Fashion Design'] },
          { name: 'Online Master of Education (M.Ed)', id: 'online-med', category: 'Education', duration: '2 years', fees: { min: 50000, max: 250000 }, specializations: ['Educational Leadership', 'Curriculum Development', 'Special Education', 'Educational Technology'] },
          { name: 'Distance MA', id: 'distance-ma', category: 'Arts', duration: '2 years', fees: { min: 25000, max: 120000 }, specializations: ['English', 'History', 'Political Science', 'Economics', 'Public Administration'] },
          { name: 'M.A. in Public Policy', id: 'ma-public-policy', category: 'Arts', duration: '2 years', fees: { min: 80000, max: 300000 }, specializations: ['Public Administration', 'Policy Analysis', 'Development Studies', 'Governance'] },
          { name: 'M.A. in International Relations, Security, and Strategy', id: 'ma-international-relations', category: 'Arts', duration: '2 years', fees: { min: 100000, max: 350000 }, specializations: ['International Relations', 'Security Studies', 'Strategic Studies', 'Diplomacy'] },
          { name: 'Online Master of Social Work', id: 'online-msw', category: 'Arts', duration: '2 years', fees: { min: 60000, max: 250000 }, specializations: ['Community Development', 'Medical & Psychiatric Social Work', 'HR Management', 'Counseling'] },
          { name: 'Online M.Ed & Ed.D', id: 'dual-med-edd', category: 'Education', duration: '3-5 years', fees: { min: 200000, max: 600000 }, specializations: ['Educational Leadership', 'Curriculum & Instruction', 'Higher Education Administration'] }
        ]
      },
      'UG Courses': {
        'Commerce': [
          { name: 'Online BBA', id: 'online-bba', category: 'Management', duration: '3 years', fees: { min: 60000, max: 250000 }, specializations: ['Finance', 'Marketing', 'HR', 'International Business', 'Entrepreneurship'] },
          { name: 'Online B.Com', id: 'online-bcom', category: 'Commerce', duration: '3 years', fees: { min: 30000, max: 150000 }, specializations: ['Accounting & Finance', 'Banking & Insurance', 'E-Commerce', 'Taxation'] },
          { name: 'Distance BBA', id: 'distance-bba', category: 'Management', duration: '3 years', fees: { min: 50000, max: 200000 }, specializations: ['Finance', 'Marketing', 'HR', 'Operations Management'] },
          { name: 'Distance B.Com', id: 'distance-bcom', category: 'Commerce', duration: '3 years', fees: { min: 25000, max: 120000 }, specializations: ['Accounting', 'Finance', 'Banking', 'Taxation', 'Computer Applications'] }
        ],
        'Science': [
          { name: 'Online BCA', id: 'online-bca', category: 'Computer Applications', duration: '3 years', fees: { min: 50000, max: 250000 }, specializations: ['Software Development', 'Web Development', 'Data Science', 'Cloud Computing', 'Mobile App Development'] },
          { name: 'Distance BCA', id: 'distance-bca', category: 'Computer Applications', duration: '3 years', fees: { min: 40000, max: 200000 }, specializations: ['Programming', 'Web Technologies', 'Database Management', 'Networking'] },
          { name: 'Online B.Sc', id: 'online-bsc', category: 'Science', duration: '3 years', fees: { min: 40000, max: 180000 }, specializations: ['IT', 'Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry', 'Psychology'] }
        ],
        'Arts': [
          { name: 'Online BA', id: 'online-ba', category: 'Arts', duration: '3 years', fees: { min: 30000, max: 150000 }, specializations: ['English', 'History', 'Political Science', 'Economics', 'Psychology', 'Sociology', 'Journalism'] },
          { name: 'Distance BA', id: 'distance-ba', category: 'Arts', duration: '3 years', fees: { min: 25000, max: 120000 }, specializations: ['English', 'History', 'Political Science', 'Economics', 'Public Administration'] },
          { name: 'Bachelor of Design', id: 'online-b-des', category: 'Design', duration: '3-4 years', fees: { min: 100000, max: 400000 }, specializations: ['UI/UX Design', 'Graphic Design', 'Product Design', 'Fashion Design', 'Interior Design'] }
        ]
      },
      'Executive Education': [
        { name: 'IIM Online Courses', id: 'iim-courses', category: 'Executive Education', duration: '3-6 months', fees: { min: 50000, max: 300000 }, specializations: ['General Management', 'Leadership', 'Strategy', 'Finance', 'Marketing'] },
        { name: 'IIIT Online Courses', id: 'iiit-courses', category: 'Executive Education', duration: '3-6 months', fees: { min: 60000, max: 250000 }, specializations: ['AI & ML', 'Data Science', 'Cloud Computing', 'Cyber Security'] },
        { name: 'Data Science & Analytics', id: 'data-science', category: 'Data Science', duration: '6-12 months', fees: { min: 80000, max: 350000 }, specializations: ['Data Analytics', 'Business Intelligence', 'Big Data', 'Predictive Analytics'] },
        { name: 'Executive M.Tech for Working Professionals', id: 'executive-mtech', category: 'Engineering', duration: '2 years', fees: { min: 150000, max: 500000 }, specializations: ['Computer Science', 'Data Science', 'AI & ML', 'Electronics'] },
        { name: 'AI and Machine Learning', id: 'ai-ml', category: 'Data Science', duration: '6-12 months', fees: { min: 100000, max: 400000 }, specializations: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'] },
        { name: 'Generative AI', id: 'generative-ai', category: 'Data Science', duration: '3-6 months', fees: { min: 80000, max: 300000 }, specializations: ['GPT Models', 'Text Generation', 'Image Generation', 'Prompt Engineering'] },
        { name: 'UI UX Certificate Program', id: 'ui-ux', category: 'Design', duration: '3-6 months', fees: { min: 40000, max: 150000 }, specializations: ['User Interface Design', 'User Experience', 'Prototyping', 'User Research'] },
        { name: 'Leadership & Management', id: 'leadership', category: 'Management', duration: '3-6 months', fees: { min: 50000, max: 250000 }, specializations: ['Leadership', 'Team Management', 'Strategic Planning', 'Change Management'] },
        { name: 'Finance', id: 'finance', category: 'Finance', duration: '6-12 months', fees: { min: 60000, max: 300000 }, specializations: ['Corporate Finance', 'Investment Banking', 'Financial Analysis', 'Risk Management'] },
        { name: 'Marketing', id: 'marketing', category: 'Marketing', duration: '6-12 months', fees: { min: 50000, max: 250000 }, specializations: ['Digital Marketing', 'Brand Management', 'Marketing Strategy', 'Consumer Behavior'] },
        { name: 'Human Resource (HR)', id: 'hr', category: 'Human Resources', duration: '6-12 months', fees: { min: 50000, max: 250000 }, specializations: ['Talent Management', 'Compensation & Benefits', 'Labor Relations', 'HR Analytics'] },
        { name: 'Healthcare', id: 'healthcare', category: 'Management', duration: '6-12 months', fees: { min: 70000, max: 300000 }, specializations: ['Healthcare Management', 'Hospital Administration', 'Healthcare Policy', 'Medical Informatics'] },
        { name: 'Operations', id: 'operations', category: 'Management', duration: '6-12 months', fees: { min: 50000, max: 250000 }, specializations: ['Operations Management', 'Supply Chain', 'Quality Management', 'Process Optimization'] },
        { name: 'Business Analytics', id: 'business-analytics', category: 'Data Science', duration: '6-12 months', fees: { min: 80000, max: 350000 }, specializations: ['Data Analysis', 'Business Intelligence', 'Predictive Modeling', 'Data Visualization'] },
        { name: 'Software & Technology', id: 'software-tech', category: 'Engineering', duration: '6-12 months', fees: { min: 60000, max: 300000 }, specializations: ['Software Development', 'Cloud Technologies', 'DevOps', 'Microservices'] },
        { name: 'PG Diploma Applied Statistics', id: 'applied-statistics', category: 'Data Science', duration: '6-12 months', fees: { min: 50000, max: 250000 }, specializations: ['Statistical Modeling', 'Data Analysis', 'Econometrics', 'Research Methods'] },
        { name: 'IIT Courses Online', id: 'iit-courses', category: 'Engineering', duration: '3-6 months', fees: { min: 80000, max: 350000 }, specializations: ['AI & ML', 'Data Science', 'Software Engineering', 'IoT'] },
        { name: 'Blockchain', id: 'blockchain', category: 'Engineering', duration: '3-6 months', fees: { min: 60000, max: 250000 }, specializations: ['Cryptocurrency', 'Smart Contracts', 'DeFi', 'NFT Development'] },
        { name: 'Cloud Computing', id: 'cloud-computing', category: 'Engineering', duration: '3-6 months', fees: { min: 50000, max: 250000 }, specializations: ['AWS', 'Azure', 'Google Cloud', 'Cloud Architecture'] },
        { name: 'PG Program In Technology Management', id: 'tech-management', category: 'Management', duration: '6-12 months', fees: { min: 100000, max: 400000 }, specializations: ['IT Strategy', 'Technology Innovation', 'Digital Transformation', 'Project Management'] },
        { name: 'Big Data Engineering', id: 'big-data', category: 'Data Science', duration: '6-12 months', fees: { min: 80000, max: 350000 }, specializations: ['Hadoop', 'Spark', 'Data Warehousing', 'ETL Processes'] },
        { name: 'DevOps', id: 'devops', category: 'Engineering', duration: '3-6 months', fees: { min: 40000, max: 200000 }, specializations: ['CI/CD', 'Docker', 'Kubernetes', 'Infrastructure as Code'] },
        { name: 'Quantum Computing', id: 'quantum-computing', category: 'Engineering', duration: '3-6 months', fees: { min: 80000, max: 300000 }, specializations: ['Quantum Algorithms', 'Quantum Programming', 'Quantum Cryptography'] },
        { name: 'Digital Transformation and Innovation', id: 'digital-transformation', category: 'Management', duration: '6-12 months', fees: { min: 70000, max: 300000 }, specializations: ['Digital Strategy', 'Innovation Management', 'Change Leadership', 'Technology Adoption'] },
        { name: 'Public Policy Management', id: 'public-policy', category: 'Management', duration: '6-12 months', fees: { min: 60000, max: 250000 }, specializations: ['Policy Analysis', 'Governance', 'Public Administration', 'Development Studies'] },
        { name: 'Cyber Security', id: 'cyber-security', category: 'Engineering', duration: '6-12 months', fees: { min: 80000, max: 350000 }, specializations: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Analytics'] },
        { name: 'Executive Program in Retail Management', id: 'retail-management', category: 'Management', duration: '3-6 months', fees: { min: 50000, max: 200000 }, specializations: ['Retail Operations', 'Merchandising', 'Customer Experience', 'Supply Chain'] },
        { name: 'Online Executive Program in Emerging Technologies', id: 'emerging-tech', category: 'Engineering', duration: '6-12 months', fees: { min: 100000, max: 400000 }, specializations: ['AI', 'IoT', 'Blockchain', 'AR/VR'] },
        { name: 'Online Executive PG Diploma in Sports Management', id: 'sports-management', category: 'Management', duration: '6-12 months', fees: { min: 60000, max: 250000 }, specializations: ['Sports Marketing', 'Event Management', 'Sports Analytics', 'Athlete Management'] }
      ],
      'Doctorate/Ph.D.': [
        { name: 'Online PhD Programs', id: 'online-phd', category: 'Research', duration: '3-5 years', fees: { min: 300000, max: 1000000 }, specializations: ['Management', 'Computer Science', 'Engineering', 'Arts', 'Science'] },
        { name: 'Doctor of Business Administration', id: 'dba', category: 'Management', duration: '3-5 years', fees: { min: 500000, max: 1500000 }, specializations: ['Strategic Management', 'Organizational Behavior', 'Finance', 'Marketing'] },
        { name: 'PhD in Management', id: 'phd-management', category: 'Management', duration: '3-5 years', fees: { min: 300000, max: 1000000 }, specializations: ['Operations', 'Finance', 'Marketing', 'HR', 'Strategy'] },
        { name: 'PhD in Computer Science', id: 'phd-cs', category: 'Computer Science', duration: '3-5 years', fees: { min: 350000, max: 1200000 }, specializations: ['AI & ML', 'Data Science', 'Cyber Security', 'Software Engineering'] },
        { name: 'Integrated MBA & Doctorate', id: 'integrated-mba-phd', category: 'Management', duration: '4-6 years', fees: { min: 600000, max: 2000000 }, specializations: ['Business Administration', 'Finance', 'Marketing', 'Strategy'] }
      ],
      'Study Abroad': [
        { name: 'Study in USA', id: 'study-usa', category: 'International', duration: '1-2 years', fees: { min: 1000000, max: 5000000 }, specializations: ['MBA', 'MS Computer Science', 'Data Science', 'Engineering'] },
        { name: 'Study in UK', id: 'study-uk', category: 'International', duration: '1-2 years', fees: { min: 800000, max: 4000000 }, specializations: ['MBA', 'MSc', 'MA', 'Engineering'] },
        { name: 'Study in Canada', id: 'study-canada', category: 'International', duration: '1-2 years', fees: { min: 900000, max: 4500000 }, specializations: ['MBA', 'MCS', 'Data Science', 'Engineering'] },
        { name: 'Study in Australia', id: 'study-australia', category: 'International', duration: '1-2 years', fees: { min: 800000, max: 4000000 }, specializations: ['MBA', 'Engineering', 'IT', 'Healthcare'] },
        { name: 'Study in Germany', id: 'study-germany', category: 'International', duration: '1-2 years', fees: { min: 200000, max: 1500000 }, specializations: ['Engineering', 'MBA', 'Computer Science', 'Design'] },
        { name: 'Study in Ireland', id: 'study-ireland', category: 'International', duration: '1-2 years', fees: { min: 800000, max: 3500000 }, specializations: ['MBA', 'Data Science', 'Computer Science', 'Finance'] },
        { name: 'Study in Singapore', id: 'study-singapore', category: 'International', duration: '1-2 years', fees: { min: 1000000, max: 4000000 }, specializations: ['MBA', 'Finance', 'Analytics', 'Engineering'] },
        { name: 'Global MBA Programs', id: 'global-mba-programs', category: 'International', duration: '1-2 years', fees: { min: 1500000, max: 6000000 }, specializations: ['Global Business', 'International Finance', 'Strategy', 'Leadership'] }
      ],
      'Advanced Diploma': [
        { name: 'Advanced Diploma in Management', id: 'advanced-diploma-mgmt', category: 'Management', duration: '1 year', fees: { min: 50000, max: 250000 }, specializations: ['General Management', 'Finance', 'Marketing', 'HR'] },
        { name: 'PG Diploma in Digital Marketing', id: 'pgdip-digital-marketing', category: 'Marketing', duration: '6-12 months', fees: { min: 40000, max: 200000 }, specializations: ['SEO', 'SEM', 'Social Media', 'Content Marketing'] },
        { name: 'PG Diploma in Data Science', id: 'pgdip-data-science', category: 'Data Science', duration: '6-12 months', fees: { min: 60000, max: 300000 }, specializations: ['Machine Learning', 'Data Analytics', 'Big Data', 'AI'] },
        { name: 'PG Diploma in Finance', id: 'pgdip-finance', category: 'Finance', duration: '6-12 months', fees: { min: 50000, max: 250000 }, specializations: ['Investment Banking', 'Financial Analysis', 'Risk Management', 'Portfolio Management'] },
        { name: 'PG Diploma in HR Management', id: 'pgdip-hr', category: 'Human Resources', duration: '6-12 months', fees: { min: 40000, max: 200000 }, specializations: ['Talent Management', 'Recruitment', 'Training & Development', 'HR Analytics'] },
        { name: 'Advanced Diploma in IT', id: 'advanced-diploma-it', category: 'Engineering', duration: '1 year', fees: { min: 50000, max: 250000 }, specializations: ['Software Development', 'Networking', 'Cloud Computing', 'Cyber Security'] }
      ],
      'Skilling & Certificate': [
        { name: 'Digital Marketing Certificate', id: 'cert-digital-marketing', category: 'Marketing', duration: '3-6 months', fees: { min: 20000, max: 100000 }, specializations: ['SEO', 'PPC', 'Social Media', 'Email Marketing'] },
        { name: 'Financial Modeling', id: 'financial-modeling', category: 'Finance', duration: '3-6 months', fees: { min: 25000, max: 120000 }, specializations: ['Excel Modeling', 'Valuation', 'Financial Analysis', 'Forecasting'] },
        { name: 'Project Management', id: 'project-management', category: 'Management', duration: '3-6 months', fees: { min: 30000, max: 150000 }, specializations: ['Agile', 'Scrum', 'PMP', 'Waterfall'] },
        { name: 'Python Programming', id: 'python-programming', category: 'Engineering', duration: '3-6 months', fees: { min: 20000, max: 100000 }, specializations: ['Core Python', 'Data Structures', 'Web Development', 'Data Science'] },
        { name: 'Full Stack Development', id: 'full-stack', category: 'Engineering', duration: '6-12 months', fees: { min: 50000, max: 250000 }, specializations: ['MERN Stack', 'MEAN Stack', 'Django', 'Node.js'] },
        { name: 'Graphic Design', id: 'graphic-design', category: 'Design', duration: '3-6 months', fees: { min: 25000, max: 120000 }, specializations: ['Photoshop', 'Illustrator', 'InDesign', 'Branding'] },
        { name: 'Content Writing', id: 'content-writing', category: 'Media', duration: '3-6 months', fees: { min: 15000, max: 80000 }, specializations: ['SEO Writing', 'Copywriting', 'Technical Writing', 'Creative Writing'] },
        { name: 'SEO & SEM', id: 'seo-sem', category: 'Marketing', duration: '3-6 months', fees: { min: 20000, max: 100000 }, specializations: ['On-Page SEO', 'Off-Page SEO', 'Google Ads', 'Analytics'] },
        { name: 'Social Media Marketing', id: 'social-media', category: 'Marketing', duration: '3-6 months', fees: { min: 20000, max: 100000 }, specializations: ['Facebook Ads', 'Instagram Marketing', 'LinkedIn Marketing', 'Content Strategy'] },
        { name: 'Excel Advanced', id: 'excel-advanced', category: 'General', duration: '2-3 months', fees: { min: 10000, max: 50000 }, specializations: ['Pivot Tables', 'VBA', 'Macros', 'Data Analysis'] }
      ]
    };

    console.log('Loaded courses:', {
      'PG Commerce': categorized['PG Courses']['Commerce'].length,
      'PG Science': categorized['PG Courses']['Science'].length,
      'PG Arts': categorized['PG Courses']['Arts'].length,
      'UG Commerce': categorized['UG Courses']['Commerce'].length,
      'UG Science': categorized['UG Courses']['Science'].length,
      'UG Arts': categorized['UG Courses']['Arts'].length,
      'Executive': categorized['Executive Education'].length,
      'PhD': categorized['Doctorate/Ph.D.'].length,
      'Study Abroad': categorized['Study Abroad'].length,
      'Advanced Diploma': categorized['Advanced Diploma'].length,
      'Skilling & Certificate': categorized['Skilling & Certificate'].length
    });

    setCoursesData(categorized);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Browse All Courses - EduConnect</title>
        <meta name="description" content="Explore all available courses across universities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.coursesSection}>
          <div className={styles.containerInner}>
            <div className={styles.topTabsRow}>
              {['PG Courses', 'UG Courses', 'Executive Education', 'Doctorate/Ph.D.', 'Study Abroad', 'Advanced Diploma', 'Skilling & Certificate'].map((tab) => (
                <button
                  key={tab}
                  className={`${styles.topTab} ${activeTab === tab ? styles.activeTopTab : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className={styles.mainLayout}>
              {(activeTab === 'PG Courses' || activeTab === 'UG Courses') && (
                <div className={styles.tabsColumn}>
                  {['Commerce', 'Science', 'Arts'].map((stream) => (
                    <button
                      key={stream}
                      className={`${styles.tab} ${activeStream === stream ? styles.activeTab : ''}`}
                      onClick={() => setActiveStream(stream)}
                    >
                      {stream}
                    </button>
                  ))}
                </div>
              )}

              <div className={styles.contentColumn}>
                {coursesData[activeTab] ? (
                  <>
                    {(activeTab === 'PG Courses' || activeTab === 'UG Courses') && 
                     coursesData[activeTab][activeStream] && 
                     coursesData[activeTab][activeStream].length > 0 ? (
                      <div className={styles.streamSection}>
                        <div className={styles.courseGrid}>
                          {coursesData[activeTab][activeStream].map((course, index) => (
                            <div 
                              key={index} 
                              className={`${styles.courseCard} ${selectedCourse?.id === course.id ? styles.courseCardActive : ''}`}
                              onClick={() => handleKnowMore(course)}
                            >
                              <div className={styles.courseHeader}>
                                <h3 className={styles.courseName}>{course.name}</h3>
                              </div>
                              <div className={styles.compareInfo}>
                                <span className={styles.compareText}>Know More</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Course Details Section Below Cards */}
                        {selectedCourse && (
                          <div className={styles.courseDetails}>
                            <div className={styles.detailsCard}>
                              <div className={styles.detailsMain}>
                                <div className={styles.detailsContent}>
                                  <div className={styles.detailsStack}>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>📝 Course Description</span>
                                      <span className={styles.detailValue}>{getCourseDescription(selectedCourse.name)}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>📂 Category</span>
                                      <span className={styles.detailValue}>{selectedCourse.category}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>🎓 Specializations</span>
                                      <span className={styles.detailValue}>
                                        {selectedCourse.specializations && selectedCourse.specializations.length > 0 
                                          ? selectedCourse.specializations.join(' • ') 
                                          : 'General'}
                                      </span>
                                    </div>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>📅 Duration</span>
                                      <span className={styles.detailValue}>{selectedCourse.duration}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>💰 Fee Range</span>
                                      <span className={styles.detailValue}>
                                        ₹{selectedCourse.fees?.min?.toLocaleString()} - ₹{selectedCourse.fees?.max?.toLocaleString()}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <aside className={styles.detailsLogos}>
                                  <p className={styles.logoLabel}>Universities offering this course</p>
                                  <div className={styles.logoGrid}>
                                    {courseUniversities && courseUniversities.length > 0 ? (
                                      courseUniversities.map((uni, idx) => {
                                        const logoFile = universityLogoMap[uni.name];
                                        if (!logoFile) {
                                          console.warn(`Missing logo for university: "${uni.name}"`);
                                          // Show a placeholder if logo not found
                                          return (
                                            <div key={idx} className={styles.logoPlaceholder} title={uni.name}>
                                              {uni.name?.substring(0, 3).toUpperCase()}
                                            </div>
                                          );
                                        }
                                        return (
                                          <img 
                                            key={idx} 
                                            src={`/images/universities/${logoFile}`} 
                                            alt={uni.name} 
                                            title={uni.name}
                                            onError={(e) => {
                                              console.error(`Failed to load logo: ${logoFile}`);
                                              e.target.style.display = 'none';
                                            }}
                                          />
                                        );
                                      })
                                    ) : (
                                      // fallback to 4 popular university logos
                                      <>
                                        <img src="/images/universities/Amity University.png" alt="Amity University" title="Amity University" />
                                        <img src="/images/universities/Manipal University Jaipur.png" alt="Manipal University" title="Manipal University" />
                                        <img src="/images/universities/Chandigarh University.png" alt="Chandigarh University" title="Chandigarh University" />
                                        <img src="/images/universities/DY Patil University Navi Mumbai.png" alt="DY Patil University" title="DY Patil University" />
                                      </>
                                    )}
                                  </div>
                                  <div style={{marginTop: '1rem', width: '100%'}}>
                                    <button className={styles.findButton} onClick={() => openMatcherWithCourse(selectedCourse)}>
                                      FIND THE RIGHT UNIVERSITY
                                    </button>
                                  </div>
                                </aside>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : null}

                    {activeTab !== 'PG Courses' && activeTab !== 'UG Courses' && 
                     Array.isArray(coursesData[activeTab]) && 
                     coursesData[activeTab].length > 0 ? (
                      <div className={styles.streamSection}>
                        <div className={`${styles.courseGrid} ${styles.courseGridCentered}`}>
                          {coursesData[activeTab].map((course, index) => (
                            <div 
                              key={index} 
                              className={`${styles.courseCard} ${selectedCourse?.id === course.id ? styles.courseCardActive : ''}`}
                              onClick={() => handleKnowMore(course)}
                            >
                              <div className={styles.courseHeader}>
                                <h3 className={styles.courseName}>{course.name}</h3>
                              </div>
                              <div className={styles.compareInfo}>
                                <span className={styles.compareText}>Know More</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Course Details Section Below Cards */}
                        {selectedCourse && (
                          <div className={styles.courseDetails}>
                            <div className={styles.detailsCard}>
                              <div className={styles.detailsMain}>
                                <div className={styles.detailsContent}>
                                  <div className={styles.detailsStack}>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>📝 Course Description</span>
                                      <span className={styles.detailValue}>{getCourseDescription(selectedCourse.name)}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>📂 Category</span>
                                      <span className={styles.detailValue}>{selectedCourse.category}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>🎓 Specializations</span>
                                      <span className={styles.detailValue}>
                                        {selectedCourse.specializations && selectedCourse.specializations.length > 0 
                                          ? selectedCourse.specializations.join(' • ') 
                                          : 'General'}
                                      </span>
                                    </div>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>📅 Duration</span>
                                      <span className={styles.detailValue}>{selectedCourse.duration}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailLabel}>💰 Fee Range</span>
                                      <span className={styles.detailValue}>
                                        ₹{selectedCourse.fees?.min?.toLocaleString()} - ₹{selectedCourse.fees?.max?.toLocaleString()}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <aside className={styles.detailsLogos}>
                                  <p className={styles.logoLabel}>Universities offering this course</p>
                                  <div className={styles.logoGrid}>
                                    {courseUniversities && courseUniversities.length > 0 ? (
                                      courseUniversities.map((uni, idx) => {
                                        const logoFile = universityLogoMap[uni.name];
                                        if (!logoFile) {
                                          console.warn(`Missing logo for university: "${uni.name}"`);
                                          // Show a placeholder if logo not found
                                          return (
                                            <div key={idx} className={styles.logoPlaceholder} title={uni.name}>
                                              {uni.name?.substring(0, 3).toUpperCase()}
                                            </div>
                                          );
                                        }
                                        return (
                                          <img 
                                            key={idx} 
                                            src={`/images/universities/${logoFile}`} 
                                            alt={uni.name} 
                                            title={uni.name}
                                            onError={(e) => {
                                              console.error(`Failed to load logo: ${logoFile}`);
                                              e.target.style.display = 'none';
                                            }}
                                          />
                                        );
                                      })
                                    ) : (
                                      // fallback to 4 popular university logos
                                      <>
                                        <img src="/images/universities/Amity University.png" alt="Amity University" title="Amity University" />
                                        <img src="/images/universities/Manipal University Jaipur.png" alt="Manipal University" title="Manipal University" />
                                        <img src="/images/universities/Chandigarh University.png" alt="Chandigarh University" title="Chandigarh University" />
                                        <img src="/images/universities/DY Patil University Navi Mumbai.png" alt="DY Patil University" title="DY Patil University" />
                                      </>
                                    )}
                                  </div>
                                  <div style={{marginTop: '1rem', width: '100%'}}>
                                    <button className={styles.findButton} onClick={() => openMatcherWithCourse(selectedCourse)}>
                                      FIND THE RIGHT UNIVERSITY
                                    </button>
                                  </div>
                                </aside>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : null}

                    {((activeTab === 'PG Courses' || activeTab === 'UG Courses') && 
                      (!coursesData[activeTab][activeStream] || coursesData[activeTab][activeStream].length === 0)) ||
                     (activeTab !== 'PG Courses' && activeTab !== 'UG Courses' && 
                      (!coursesData[activeTab] || coursesData[activeTab].length === 0)) ? (
                      <div className={styles.loadingState}>
                        <p>No courses available in this category</p>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className={styles.loadingState}>
                    <p>Loading courses...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AskEduAI />
    </div>
  );
}

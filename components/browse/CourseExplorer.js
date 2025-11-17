import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BrowseCourses.module.css';
import { getUniversityLogo } from '../../utils/universityLogoMap';
import { useAuth } from '../../contexts/AuthContext';

export default function CourseExplorer({ onLoginRequired }) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const [activeTab, setActiveTab] = useState('PG Courses');
  const [activeStream, setActiveStream] = useState('Commerce');
  const [coursesData, setCoursesData] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [universityDatabase, setUniversityDatabase] = useState([]);
  const [courseUniversities, setCourseUniversities] = useState([]);

  const handleKnowMore = (course) => {
    // Check if user is logged in
    if (!isLoggedIn) {
      // Show login popup
      if (onLoginRequired) {
        onLoginRequired();
      }
      return;
    }

    // If logged in, proceed with normal functionality
    if (selectedCourse && selectedCourse.id === course.id) {
      setSelectedCourse(null);
      setCourseUniversities([]);
    } else {
      setSelectedCourse(course);
      findUniversitiesForCourse(course);
    }
  };

  useEffect(() => {
    const loadUniversityData = async () => {
      try {
        if (window.universityDatabase && Array.isArray(window.universityDatabase)) {
          setUniversityDatabase(window.universityDatabase);
          return;
        }
        const response = await fetch('/api/comprehensive-database');
        const text = await response.text();
        const modifiedText = text.replace(/const universityDatabase/g, 'var universityDatabase');
        const executeGlobal = new Function(modifiedText);
        executeGlobal.call(window);
        if (window.universityDatabase && Array.isArray(window.universityDatabase)) {
          setUniversityDatabase(window.universityDatabase);
        }
      } catch (error) {
        console.error('Error loading university database:', error);
      }
    };
    loadUniversityData();
  }, []);

  useEffect(() => {
    categorizeCourses();
  }, []);

  useEffect(() => {
    setSelectedCourse(null);
    setCourseUniversities([]);
  }, [activeTab, activeStream]);

  const getCourseDescription = (courseName) => {
    const descriptions = {
      // PG Courses
      '1 Year MBA Online': 'An accelerated MBA that condenses coursework into 12 months. Ideal for professionals looking to advance quickly without career interruptions.',
      'Distance MBA': 'A master\'s degree in business administration delivered via distance learning. Ideal for working professionals to gain management expertise without classroom attendance.',
      'Executive MBA for Working Professionals': 'A specialized MBA for experienced professionals and mid-senior managers. Combines leadership development with practical business strategy.',
      'Online Global MBA': 'An internationally-focused MBA with global curriculum and networking. Prepares graduates for leadership roles in multinational corporations and cross-border business.',
      'Dual MBA Online': 'An MBA offering dual specializations for comprehensive business expertise. Allows students to master two complementary domains like Finance & Marketing.',
      'Online MBA after Diploma': 'An MBA program designed for diploma holders seeking postgraduate management education. Bridges the gap between diploma and master\'s qualifications.',
      'Online MBA Plus': 'An enhanced MBA with additional certifications and skill modules. Offers broader business education with industry-specific knowledge.',
      'MBA in Business Analytics': 'An MBA specializing in data analytics, business intelligence, and predictive modeling. Combines business acumen with data science for data-driven decision making.',
      'Online MBA & Doctorate': 'A dual-degree program combining an MBA with a doctoral qualification. Prepares graduates for leadership roles in academia, research, and consulting.',
      'Online Master of Management Studies': 'A master\'s program focusing on management theory, organizational behavior, and strategic leadership. Similar to an MBA with emphasis on academic rigor.',
      'Blended MBA': 'A hybrid MBA combining online learning with occasional in-person sessions. Offers flexibility while maintaining interactive and networking opportunities.',
      'Online MBA': 'A flexible master\'s degree in business administration delivered virtually. Covers all core business functions from marketing to finance for comprehensive management education.',
      'Online M.Com': 'A postgraduate commerce program covering advanced accounting, taxation, auditing, and business economics. Ideal for those pursuing finance, banking, or commerce careers.',
      'Distance M.Com': 'A flexible M.Com degree delivered through distance education. Allows working professionals to deepen expertise in commerce and finance without classroom attendance.',
      'Online PGDM': 'A postgraduate diploma in management equivalent to an MBA. Focuses on management skills, business strategy, and industry-specific knowledge.',
      'Online PG Diploma & Certificate': 'Short-term postgraduate programs in specialized management areas. Ideal for quick skill development in finance, marketing, HR, or supply chain.',
      'Online MCA': 'A master\'s degree in computer applications focusing on software engineering, programming, and IT systems. Prepares graduates for technical and managerial roles in IT.',
      'M.Tech': 'A postgraduate engineering degree offering specialization in advanced technologies and research. Builds expertise in cutting-edge fields like AI, data science, and more.',
      'Online M.Sc': 'A master\'s degree in science with specializations across disciplines like physics, chemistry, IT, data science, and more. Combines theory with practical applications.',
      'MS Degree Online': 'A master of science program with focus on research and advanced technical knowledge. Ideal for careers in technology, research, and specialized industries.',
      'Online Global MCA': 'An internationally recognized MCA with global curriculum and industry partnerships. Prepares graduates for technical roles in multinational IT companies.',
      'Distance MCA': 'An MCA program delivered via distance learning for aspiring IT professionals. Covers programming, databases, networking, and software development.',
      'Distance M.Sc': 'A flexible M.Sc program for working individuals interested in science and technology. Offers specializations in various scientific and applied fields.',
      'Online MA': 'A master\'s in arts covering subjects like English, psychology, sociology, history, and more. Focuses on critical thinking, research, and analytical skills.',
      'Online Master of Design': 'A master\'s degree in design covering UI/UX, graphic design, and product design. Combines creativity with technical design skills.',
      'Online Master of Education (M.Ed)': 'A master\'s in education for teachers and education professionals. Focuses on pedagogy, curriculum development, and educational leadership.',
      'Distance MA': 'An MA degree delivered through distance mode, perfect for educators, writers, and humanities enthusiasts. Provides flexibility while pursuing higher education in arts.',
      'M.A. in Public Policy': 'A master\'s program in public policy, governance, and policy analysis. Ideal for careers in government, NGOs, and policy research organizations.',
      'M.A. in International Relations, Security, and Strategy': 'A master\'s in international relations focusing on global politics, security studies, and strategic affairs. Prepares graduates for diplomatic and international careers.',
      'Online Master of Social Work': 'A master\'s in social work covering community development, counseling, and social welfare. Prepares professionals for roles in NGOs and social services.',
      'Online M.Ed & Ed.D': 'A dual degree combining master\'s in education with doctoral qualification. Prepares leaders for academic administration and educational research.',
      
      // UG Courses
      'Online BBA': 'An undergraduate business degree covering management, marketing, finance, and entrepreneurship. Lays the foundation for careers in business and corporate sectors.',
      'Online B.Com': 'A bachelor\'s in commerce focusing on accounting, taxation, business law, and economics. Prepares students for roles in finance, banking, and commerce industries.',
      'Distance BBA': 'A BBA program offered via distance learning for flexibility and accessibility. Ideal for students balancing work, personal commitments, or geographical constraints.',
      'Distance B.Com': 'A B.Com degree delivered through distance education. Provides foundational knowledge in commerce and business for those unable to attend traditional classes.',
      'Online BCA': 'A bachelor\'s in computer applications emphasizing programming, web development, and software design. Equips students with foundational IT skills for tech careers.',
      'Distance BCA': 'A BCA program via distance mode for students seeking IT education with flexibility. Covers computer science fundamentals and application development.',
      'Online B.Sc': 'A bachelor\'s in science with specializations across fields like IT, data science, chemistry, physics, and more. Combines theoretical knowledge with practical learning.',
      'Online BA': 'A bachelor\'s in arts covering diverse subjects like literature, history, sociology, and political science. Encourages critical thinking and creative expression.',
      'Distance BA': 'A BA degree through distance education for flexible learning. Ideal for students pursuing higher education while managing other responsibilities.',
      'Bachelor of Design': 'An undergraduate design degree covering UI/UX, graphic design, product design, and fashion design. Combines creativity with technical design skills.',
      
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
      'Advanced Diploma in IT': 'One-year diploma in information technology covering software development, networking, and cloud computing. Quick path to IT careers.',
      
      // Skilling & Certificate
      'Digital Marketing Certificate': 'Short-term certification in SEO, PPC, social media, and email marketing. Quick skill development for digital marketing roles.',
      'Financial Modeling': 'Professional certification in Excel modeling, valuation, and financial forecasting. Essential skills for finance and investment professionals.',
      'Project Management': 'Certification program covering Agile, Scrum, and PMP methodologies. Prepares professionals for project management roles across industries.',
      'Python Programming': 'Programming certification covering core Python, data structures, and applications. Foundation for software development and data science careers.',
      'Full Stack Development': 'Comprehensive program in MERN/MEAN stack and web development. Prepares developers for full stack engineering roles.',
      'Graphic Design': 'Professional certification in Photoshop, Illustrator, and design principles. Ideal for careers in design, branding, and creative industries.',
      'Content Writing': 'Certification in SEO writing, copywriting, and content strategy. Prepares professionals for content marketing and writing careers.',
      'SEO & SEM': 'Specialized program in search engine optimization and search engine marketing. Covers on-page, off-page SEO, and Google Ads.',
      'Social Media Marketing': 'Professional program in social media strategy, Facebook Ads, and Instagram marketing. Ideal for digital marketing and social media roles.',
      'Excel Advanced': 'Advanced certification in Excel covering pivot tables, VBA, macros, and data analysis. Essential for finance, analytics, and business professionals.'
    };
    return descriptions[courseName] || 'Comprehensive program designed to enhance your skills and advance your career in this field.';
  };

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
      'Online PG Diploma & Certificate': 'MBA',
      'Online MCA': 'MCA',
      'M.Tech': 'M.Tech',
      'Online M.Sc': 'M.Sc',
      'MS Degree Online': 'M.Sc',
      'Online Global MCA': 'MCA',
      'Distance MCA': 'MCA',
      'Distance M.Sc': 'M.Sc',
      'Online MA': 'MA',
      'Online Master of Design': 'MA',
      'Online Master of Education (M.Ed)': 'MA',
      'Distance MA': 'MA',
      'M.A. in Public Policy': 'MA',
      'M.A. in International Relations, Security, and Strategy': 'MA',
      'Online Master of Social Work': 'MA',
      'Online M.Ed & Ed.D': 'MA',
      'Online BBA': 'BBA',
      'Online B.Com': 'B.Com',
      'Distance BBA': 'BBA',
      'Distance B.Com': 'B.Com',
      'Online BCA': 'BCA',
      'Distance BCA': 'BCA',
      'Online B.Sc': 'B.Sc',
      'Online BA': 'BA',
      'Distance BA': 'BA',
      'Bachelor of Design': 'BA',
      'IIM Online Courses': 'MBA',
      'IIIT Online Courses': 'MCA',
      'Data Science & Analytics': 'MCA',
      'Executive M.Tech for Working Professionals': 'M.Tech',
      'AI and Machine Learning': 'MCA',
      'Generative AI': 'MCA',
      'UI UX Certificate Program': 'BCA',
      'Leadership & Management': 'MBA',
      'Finance': 'MBA',
      'Marketing': 'MBA',
      'Human Resource (HR)': 'MBA',
      'Healthcare': 'MBA',
      'Operations': 'MBA',
      'Business Analytics': 'MBA',
      'Software & Technology': 'MCA',
      'PG Diploma Applied Statistics': 'M.Sc',
      'IIT Courses Online': 'M.Tech',
      'Blockchain': 'MCA',
      'Cloud Computing': 'MCA',
      'PG Program In Technology Management': 'MBA',
      'Big Data Engineering': 'MCA',
      'DevOps': 'MCA',
      'Quantum Computing': 'M.Tech',
      'Digital Transformation and Innovation': 'MBA',
      'Public Policy Management': 'MBA',
      'Cyber Security': 'MCA',
      'Executive Program in Retail Management': 'MBA',
      'Online Executive Program in Emerging Technologies': 'M.Tech',
      'Online Executive PG Diploma in Sports Management': 'MBA',
      'Online PhD Programs': 'Ph.D.',
      'Doctor of Business Administration': 'Ph.D.',
      'PhD in Management': 'Ph.D.',
      'PhD in Computer Science': 'Ph.D.',
      'Integrated MBA & Doctorate': 'MBA',
      'Study in USA': 'MBA',
      'Study in UK': 'MBA',
      'Study in Canada': 'MBA',
      'Study in Australia': 'MBA',
      'Study in Germany': 'MBA',
      'Study in Ireland': 'MBA',
      'Study in Singapore': 'MBA',
      'Global MBA Programs': 'MBA',
      'Advanced Diploma in Management': 'MBA',
      'PG Diploma in Digital Marketing': 'MBA',
      'PG Diploma in Data Science': 'MCA',
      'PG Diploma in Finance': 'MBA',
      'PG Diploma in HR Management': 'MBA',
      'Advanced Diploma in IT': 'MCA',
      'Digital Marketing Certificate': 'BBA',
      'Financial Modeling': 'MBA',
      'Project Management': 'MBA',
      'Python Programming': 'BCA',
      'Full Stack Development': 'BCA',
      'Graphic Design': 'BCA',
      'Content Writing': 'BA',
      'SEO & SEM': 'BBA',
      'Social Media Marketing': 'BBA',
      'Excel Advanced': 'B.Com'
    };

    const dbCourseName = courseNameMap[course.name] || course.name;

    let matchingUniversities = [];
    
    // Special handling for Study Abroad courses - filter by country from database
    if (course.name.includes('Study in USA')) {
      matchingUniversities = universityDatabase.filter(uni => uni.country === 'USA');
    } else if (course.name.includes('Study in UK')) {
      matchingUniversities = universityDatabase.filter(uni => uni.country === 'UK');
    } else if (course.name.includes('Study in Canada')) {
      matchingUniversities = universityDatabase.filter(uni => uni.country === 'Canada');
    } else if (course.name.includes('Study in Australia')) {
      matchingUniversities = universityDatabase.filter(uni => uni.country === 'Australia');
    } else if (course.name.includes('Study in Germany')) {
      matchingUniversities = universityDatabase.filter(uni => uni.country === 'Germany');
    } else if (course.name.includes('Study in Ireland')) {
      matchingUniversities = universityDatabase.filter(uni => uni.country === 'Ireland');
    } else if (course.name.includes('Study in Singapore')) {
      matchingUniversities = universityDatabase.filter(uni => uni.country === 'Singapore');
    } else if (course.name.includes('Global MBA')) {
      // For Global MBA, show international universities (excluding India)
      matchingUniversities = universityDatabase.filter(uni => 
        uni.isInternational === true && uni.country !== 'India'
      );
    } else if (course.name.includes('PhD') || course.name.includes('Doctor')) {
      // For PhD programs, look for universities with Ph.D. courses in database
      matchingUniversities = universityDatabase.filter(uni => {
        return uni.courses && (uni.courses['Ph.D.'] || uni.courses['PhD'] || uni.courses['DBA']);
      });
    } else {
      // Default: match by course name from database
      matchingUniversities = universityDatabase.filter(uni => {
        return uni.courses && uni.courses[dbCourseName];
      });
    }

    console.log(`Found ${matchingUniversities.length} universities offering ${dbCourseName} for ${course.name}`);

    // Shuffle and select random 12 universities for each click
    const shuffled = [...matchingUniversities].sort(() => 0.5 - Math.random());
    setCourseUniversities(shuffled.slice(0, 12));
  };

  const openMatcherWithCourse = (course) => {
    router.push({ pathname: '/university-matcher', query: { degreeType: activeTab, preferredCourse: course.id || course.name } });
  };

  const categorizeCourses = () => {
    // EXACT same courses as browse-courses page
    const categorized = {
      'PG Courses': {
        'Commerce': [
          { name: 'Online MBA', id: 'online-mba', category: 'Management', duration: '2 years', fees: { min: 100000, max: 500000 }, specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'International Business', 'IT Management', 'Strategy', 'Business Analytics', 'Entrepreneurship', 'Supply Chain Management', 'Digital Marketing', 'Investment Banking', 'Project Management', 'Retail Management', 'Healthcare Management', 'Banking & Insurance', 'E-Business', 'Media Management', 'Rural Management'] },
          { name: '1 Year MBA Online', id: 'one-year-mba', category: 'Management', duration: '1 year', fees: { min: 150000, max: 400000 }, specializations: ['General Management', 'Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics', 'Entrepreneurship', 'Digital Marketing'] },
          { name: 'Distance MBA', id: 'distance-mba', category: 'Management', duration: '2 years', fees: { min: 80000, max: 300000 }, specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Banking & Insurance', 'International Business', 'IT Management', 'Retail Management', 'Supply Chain Management', 'Business Analytics', 'Project Management', 'Entrepreneurship', 'Digital Marketing'] },
          { name: 'Executive MBA for Working Professionals', id: 'executive-mba', category: 'Management', duration: '2 years', fees: { min: 200000, max: 600000 }, specializations: ['Leadership', 'Strategy', 'Finance', 'Marketing', 'Operations', 'Business Analytics', 'Digital Transformation', 'Innovation Management', 'Change Management', 'Global Business'] },
          { name: 'Online Global MBA', id: 'global-mba', category: 'Management', duration: '2 years', fees: { min: 300000, max: 800000 }, specializations: ['Global Business', 'International Finance', 'Global Marketing', 'Cross-cultural Management'] },
          { name: 'Dual MBA Online', id: 'dual-mba', category: 'Management', duration: '2 years', fees: { min: 250000, max: 700000 }, specializations: ['Finance & Marketing', 'Human Resources & Operations', 'IT & Marketing'] },
          { name: 'Online MBA after Diploma', id: 'mba-after-diploma', category: 'Management', duration: '2 years', fees: { min: 120000, max: 400000 }, specializations: ['General Management', 'Finance', 'Marketing', 'Human Resources'] },
          { name: 'Online MBA Plus', id: 'mba-plus', category: 'Management', duration: '2 years', fees: { min: 150000, max: 500000 }, specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Analytics'] },
          { name: 'MBA in Business Analytics', id: 'mba-business-analytics', category: 'Management', duration: '2 years', fees: { min: 200000, max: 600000 }, specializations: ['Data Analytics', 'Business Intelligence', 'Predictive Analytics', 'Big Data'] },
          { name: 'Online MBA & Doctorate', id: 'integrated-mba-doctorate', category: 'Management', duration: '3-5 years', fees: { min: 400000, max: 1000000 }, specializations: ['General Management', 'Finance', 'Marketing', 'Strategy'] },
          { name: 'Online Master of Management Studies', id: 'online-mms', category: 'Management', duration: '2 years', fees: { min: 150000, max: 500000 }, specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations'] },
          { name: 'Blended MBA', id: 'blended-mba', category: 'Management', duration: '2 years', fees: { min: 180000, max: 550000 }, specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Digital Marketing'] },
          { name: 'Online M.Com', id: 'online-mcom', category: 'Commerce', duration: '2 years', fees: { min: 30000, max: 150000 }, specializations: ['Accounting & Finance', 'Taxation', 'Banking & Insurance'] },
          { name: 'Distance M.Com', id: 'distance-mcom', category: 'Commerce', duration: '2 years', fees: { min: 25000, max: 120000 }, specializations: ['Accounting & Finance', 'E-Commerce', 'International Business'] },
          { name: 'Online PGDM', id: 'pgdm-online', category: 'Management', duration: '2 years', fees: { min: 150000, max: 500000 }, specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'International Business'] },
          { name: 'Online PG Diploma & Certificate', id: 'pg-diploma-certificate', category: 'Management', duration: '6-12 months', fees: { min: 50000, max: 200000 }, specializations: ['Digital Marketing', 'Finance', 'Human Resources', 'Supply Chain Management'] }
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
          { name: 'Online BBA', id: 'online-bba', category: 'Management', duration: '3 years', fees: { min: 60000, max: 250000 }, specializations: ['Finance', 'Marketing', 'Human Resources', 'International Business', 'Entrepreneurship'] },
          { name: 'Online B.Com', id: 'online-bcom', category: 'Commerce', duration: '3 years', fees: { min: 30000, max: 150000 }, specializations: ['Accounting & Finance', 'Banking & Insurance', 'E-Commerce', 'Taxation'] },
          { name: 'Distance BBA', id: 'distance-bba', category: 'Management', duration: '3 years', fees: { min: 50000, max: 200000 }, specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations Management'] },
          { name: 'Distance B.Com', id: 'distance-bcom', category: 'Commerce', duration: '3 years', fees: { min: 25000, max: 120000 }, specializations: ['Accounting & Finance', 'Banking & Insurance', 'E-Commerce', 'Taxation'] }
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
        { name: 'Operations', id: 'operations', category: 'Management', duration: '6-12 months', fees: { min: 50000, max: 250000 }, specializations: ['Operations Management', 'Supply Chain Management', 'Quality Management', 'Process Optimization'] },
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
        { name: 'Executive Program in Retail Management', id: 'retail-management', category: 'Management', duration: '3-6 months', fees: { min: 50000, max: 200000 }, specializations: ['Retail Operations', 'Merchandising', 'Customer Experience', 'Supply Chain Management'] },
        { name: 'Online Executive Program in Emerging Technologies', id: 'emerging-tech', category: 'Engineering', duration: '6-12 months', fees: { min: 100000, max: 400000 }, specializations: ['AI', 'IoT', 'Blockchain', 'AR/VR'] },
        { name: 'Online Executive PG Diploma in Sports Management', id: 'sports-management', category: 'Management', duration: '6-12 months', fees: { min: 60000, max: 250000 }, specializations: ['Sports Marketing', 'Event Management', 'Sports Analytics', 'Athlete Management'] }
      ],
      'Doctorate/Ph.D.': [
        { name: 'Online PhD Programs', id: 'online-phd', category: 'Research', duration: '3-5 years', fees: { min: 300000, max: 1000000 }, specializations: ['Management', 'Computer Science', 'Engineering', 'Arts', 'Science'] },
        { name: 'Doctor of Business Administration', id: 'dba', category: 'Management', duration: '3-5 years', fees: { min: 500000, max: 1500000 }, specializations: ['Strategic Management', 'Organizational Behavior', 'Finance', 'Marketing'] },
        { name: 'PhD in Management', id: 'phd-management', category: 'Management', duration: '3-5 years', fees: { min: 300000, max: 1000000 }, specializations: ['Operations', 'Finance', 'Marketing', 'Human Resources', 'Strategy'] },
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
        { name: 'Advanced Diploma in Management', id: 'advanced-diploma-mgmt', category: 'Management', duration: '1 year', fees: { min: 50000, max: 250000 }, specializations: ['General Management', 'Finance', 'Marketing', 'Human Resources'] },
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
    setCoursesData(categorized);
  };

  return (
    <section className={styles.coursesSection}>
      <div className={styles.containerInner}>
        {/* Tagline */}
        <div className={styles.taglineContainer}>
          <h3 className={styles.taglineHeading}>COURSE CATALOG</h3>
          <p className={styles.tagline}>
            Streamline your search and discover your ideal fit with our advanced "course browser"
          </p>
        </div>

        <div className={styles.topTabsRow}>
          {['PG Courses', 'UG Courses', 'Executive Education', 'Doctorate/Ph.D.', 'Study Abroad', 'Advanced Diploma', 'Skilling & Certificate'].map((tab) => (
            <button key={tab} className={`${styles.topTab} ${activeTab === tab ? styles.activeTopTab : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>
        <div className={styles.mainLayout}>
          {(activeTab === 'PG Courses' || activeTab === 'UG Courses') && (
            <div className={styles.tabsColumn}>
              {['Commerce', 'Science', 'Arts'].map((stream) => (
                <button key={stream} className={`${styles.tab} ${activeStream === stream ? styles.activeTab : ''}`} onClick={() => setActiveStream(stream)}>{stream}</button>
              ))}
            </div>
          )}
          <div className={styles.contentColumn}>
            {Object.keys(coursesData).length > 0 ? (
              <>
                {(activeTab === 'PG Courses' || activeTab === 'UG Courses') && coursesData[activeTab]?.[activeStream] ? (
                  <div className={styles.streamSection}>
                    <div className={styles.courseGrid}>
                      {coursesData[activeTab][activeStream].map((course, index) => (
                        <div key={index} className={`${styles.courseCard} ${selectedCourse?.id === course.id ? styles.courseCardActive : ''}`} onClick={() => handleKnowMore(course)}>
                          <div className={styles.courseHeader}><h3 className={styles.courseName}>{course.name}</h3></div>
                          <div className={styles.compareInfo}><span className={styles.compareText}>Know More</span></div>
                        </div>
                      ))}
                    </div>
                    {selectedCourse && (
                      <div className={styles.courseDetails}>
                        <div className={styles.detailsCard}>
                          <div className={styles.detailsMain}>
                            <div className={styles.detailsContent}>
                              <div className={styles.detailsStack}>
                                <div className={styles.detailItem}><span className={styles.detailLabel}>📖 Description</span><span className={styles.detailValue}>{getCourseDescription(selectedCourse.name)}</span></div>
                                <div className={styles.detailsRow}>
                                  <div className={styles.detailItemCompact}><span className={styles.detailLabel}>📂 Category</span><span className={styles.detailValue}>{selectedCourse.category}</span></div>
                                  <div className={styles.detailItemCompact}><span className={styles.detailLabel}>⏱️ Duration</span><span className={styles.detailValue}>{selectedCourse.duration}</span></div>
                                  <div className={styles.detailItemCompact}><span className={styles.detailLabel}>💰 Fee Range</span><span className={styles.detailValue}>₹{selectedCourse.fees?.min?.toLocaleString()} - ₹{selectedCourse.fees?.max?.toLocaleString()}</span></div>
                                </div>
                                <div className={styles.buttonContainer}>
                                  <button className={styles.findButton} onClick={() => openMatcherWithCourse(selectedCourse)}>FIND THE RIGHT UNIVERSITY</button>
                                </div>
                              </div>
                            </div>
                            <aside className={styles.detailsLogos}>
                              <p className={styles.logoLabel}>Universities offering this course</p>
                              <div className={styles.logoGrid}>
                                {courseUniversities.length > 0 ? courseUniversities.slice(0, 6).map((uni, idx) => {
                                  const logoPath = getUniversityLogo(uni.name);
                                  return logoPath ? (
                                    <div key={idx} className={styles.logoContainer}>
                                      <div className={styles.logoImageWrapper}>
                                        <img src={logoPath} alt={uni.name} title={uni.name} className={styles.universityLogo} />
                                      </div>
                                      <p className={styles.universityName}>{uni.name}</p>
                                    </div>
                                  ) : null;
                                }) : (
                                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: '#64748b', fontSize: '0.875rem' }}>
                                    <p style={{ margin: 0, fontWeight: 600 }}>🌍 No universities found in our database for this program</p>
                                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8125rem' }}>Please check back later or contact us for more information</p>
                                  </div>
                                )}
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : activeTab !== 'PG Courses' && activeTab !== 'UG Courses' && Array.isArray(coursesData[activeTab]) ? (
                  <div className={styles.streamSection}>
                    <div className={`${styles.courseGrid} ${styles.courseGridCentered}`}>
                      {coursesData[activeTab].map((course, index) => (
                        <div key={index} className={`${styles.courseCard} ${selectedCourse?.id === course.id ? styles.courseCardActive : ''}`} onClick={() => handleKnowMore(course)}>
                          <div className={styles.courseHeader}><h3 className={styles.courseName}>{course.name}</h3></div>
                          <div className={styles.compareInfo}><span className={styles.compareText}>Know More</span></div>
                        </div>
                      ))}
                    </div>
                    {selectedCourse && (
                      <div className={styles.courseDetailsCentered}>
                        <div className={styles.detailsCard}>
                          <div className={styles.detailsMain}>
                            <div className={styles.detailsContent}>
                              <div className={styles.detailsStack}>
                                <div className={styles.detailItem}><span className={styles.detailLabel}>📖 Description</span><span className={styles.detailValue}>{getCourseDescription(selectedCourse.name)}</span></div>
                                <div className={styles.detailsRow}>
                                  <div className={styles.detailItemCompact}><span className={styles.detailLabel}>📂 Category</span><span className={styles.detailValue}>{selectedCourse.category}</span></div>
                                  <div className={styles.detailItemCompact}><span className={styles.detailLabel}>⏱️ Duration</span><span className={styles.detailValue}>{selectedCourse.duration}</span></div>
                                  <div className={styles.detailItemCompact}><span className={styles.detailLabel}>💰 Fee Range</span><span className={styles.detailValue}>₹{selectedCourse.fees?.min?.toLocaleString()} - ₹{selectedCourse.fees?.max?.toLocaleString()}</span></div>
                                </div>
                                <div className={styles.buttonContainer}>
                                  <button className={styles.findButton} onClick={() => openMatcherWithCourse(selectedCourse)}>FIND THE RIGHT UNIVERSITY</button>
                                </div>
                              </div>
                            </div>
                            <aside className={styles.detailsLogos}>
                              <p className={styles.logoLabel}>Universities offering this course</p>
                              <div className={styles.logoGrid}>
                                {courseUniversities.length > 0 ? courseUniversities.slice(0, 6).map((uni, idx) => {
                                  const logoPath = getUniversityLogo(uni.name);
                                  return logoPath ? (
                                    <div key={idx} className={styles.logoContainer}>
                                      <div className={styles.logoImageWrapper}>
                                        <img src={logoPath} alt={uni.name} title={uni.name} className={styles.universityLogo} />
                                      </div>
                                      <p className={styles.universityName}>{uni.name}</p>
                                    </div>
                                  ) : null;
                                }) : (
                                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: '#64748b', fontSize: '0.875rem' }}>
                                    <p style={{ margin: 0, fontWeight: 600 }}>🌍 No universities found in our database for this program</p>
                                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8125rem' }}>Please check back later or contact us for more information</p>
                                  </div>
                                )}
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : null}
              </>
            ) : <div className={styles.loadingState}><p>Loading courses...</p></div>}
          </div>
        </div>
      </div>
    </section>
  );
}

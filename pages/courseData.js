const coursesData = {
  // Skilling Courses (10 cards)
  'Full-Stack-Development': {
    title: 'Full Stack Web Development',
    avgFees: { min: '₹35,000', max: '₹65,000' },
    duration: '6 Months',
    eligibility: 'Basic programming knowledge',
    category: 'Skilling',
    specializations: ['MERN Stack', 'MEAN Stack', 'DevOps']
  },
  'Digital-Marketing': {
    title: 'Digital Marketing Professional',
    avgFees: { min: '₹25,000', max: '₹35,000' },
    duration: '3 Months',
    eligibility: '10+2 or equivalent',
    category: 'Skilling',
    specializations: ['Social Media Marketing', 'SEO', 'Email Marketing']
  },
  'Data-Science-Fundamentals': {
    title: 'Data Science Fundamentals',
    avgFees: { min: '₹30,000', max: '₹50,000' },
    duration: '4 Months',
    eligibility: 'Basic mathematics knowledge',
    category: 'Skilling',
    specializations: ['Python', 'Statistics', 'Machine Learning Basics']
  },
  'UI-UX-Design': {
    title: 'UI/UX Design Essentials',
    avgFees: { min: '₹25,000', max: '₹45,000' },
    duration: '3 Months',
    eligibility: 'Basic computer knowledge',
    category: 'Skilling',
    specializations: ['Figma', 'Adobe XD', 'Prototyping']
  },
  'Cloud-Computing-Basics': {
    title: 'Cloud Computing Basics',
    avgFees: { min: '₹35,000', max: '₹55,000' },
    duration: '4 Months',
    eligibility: 'Basic IT knowledge',
    category: 'Skilling',
    specializations: ['AWS Fundamentals', 'Azure Basics', 'Cloud Security']
  },
  'Mobile-App-Development': {
    title: 'Mobile App Development',
    avgFees: { min: '₹35,000', max: '₹57,000' },
    duration: '5 Months',
    eligibility: 'Basic programming knowledge',
    category: 'Skilling',
    specializations: ['React Native', 'Flutter', 'Native Android/iOS']
  },
  'Financial-Analysis': {
    title: 'Financial Analysis',
    avgFees: { min: '₹25,000', max: '₹40,000' },
    duration: '3 Months',
    eligibility: 'Basic accounting knowledge',
    category: 'Skilling',
    specializations: ['Financial Modeling', 'Excel', 'Investment Analysis']
  },
  'Project-Management': {
    title: 'Project Management Essentials',
    avgFees: { min: '₹30,000', max: '₹42,000' },
    duration: '3 Months',
    eligibility: 'Basic work experience',
    category: 'Skilling',
    specializations: ['Agile', 'Scrum', 'Traditional PM']
  },
  'Content-Writing': {
    title: 'Content Writing & Marketing',
    avgFees: { min: '₹20,000', max: '₹30,000' },
    duration: '2 Months',
    eligibility: 'Good English proficiency',
    category: 'Skilling',
    specializations: ['SEO Writing', 'Copywriting', 'Content Strategy']
  },
  'Cyber-Security-Basics': {
    title: 'Cyber Security Fundamentals',
    avgFees: { min: '₹30,000', max: '₹50,000' },
    duration: '4 Months',
    eligibility: 'Basic IT knowledge',
    category: 'Skilling',
    specializations: ['Network Security', 'Ethical Hacking', 'Security Tools']
  },

  // PG Courses (31 cards)
  // Management Programs (10 cards)
  'Executive-MBA': {
    title: 'Executive Master of Business Administration',
    avgFees: { min: '₹2,50,000', max: '₹8,00,000' },
    duration: '15-24 Months',
    eligibility: 'Bachelor\'s degree with min. 50% marks + 2-3 years work experience',
    category: 'PG',
    specializations: ['General Management', 'Finance', 'Marketing', 'Operations', 'HR']
  },
  'PGDM': {
    title: 'Post Graduate Diploma in Management',
    avgFees: { min: '₹3,00,000', max: '₹12,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with min. 50% marks + CAT/MAT/XAT score',
    category: 'PG',
    specializations: ['Finance', 'Marketing', 'HR', 'Operations', 'International Business']
  },
  'MBA-Finance': {
    title: 'MBA in Finance',
    avgFees: { min: '₹2,00,000', max: '₹7,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with min. 50% marks + CAT/MAT/XAT score',
    category: 'PG',
    specializations: ['Investment Banking', 'Financial Analysis', 'Risk Management', 'Corporate Finance']
  },
  'MBA-Marketing': {
    title: 'MBA in Marketing',
    avgFees: { min: '₹2,00,000', max: '₹6,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with min. 50% marks + Entrance Test',
    category: 'PG',
    specializations: ['Digital Marketing', 'Brand Management', 'Sales', 'Market Research']
  },
  'MBA-HR': {
    title: 'MBA in Human Resource Management',
    avgFees: { min: '₹1,80,000', max: '₹5,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with min. 50% marks + Entrance Test',
    category: 'PG',
    specializations: ['Talent Management', 'Training & Development', 'Compensation', 'Industrial Relations']
  },
  'MBA-Operations': {
    title: 'MBA in Operations Management',
    avgFees: { min: '₹1,80,000', max: '₹5,50,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with min. 50% marks + Entrance Test',
    category: 'PG',
    specializations: ['Supply Chain', 'Quality Management', 'Project Management', 'Logistics']
  },
  'MBA-Business-Analytics': {
    title: 'MBA in Business Analytics',
    avgFees: { min: '₹2,50,000', max: '₹8,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with min. 50% marks + Entrance Test',
    category: 'PG',
    specializations: ['Data Analytics', 'Predictive Modeling', 'Business Intelligence']
  },
  'MBA-International-Business': {
    title: 'MBA in International Business',
    avgFees: { min: '₹2,20,000', max: '₹7,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with min. 50% marks + Entrance Test',
    category: 'PG',
    specializations: ['Global Trade', 'International Marketing', 'Cross-cultural Management']
  },
  'MBA-Healthcare': {
    title: 'MBA in Healthcare Management',
    avgFees: { min: '₹2,00,000', max: '₹6,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with min. 50% marks + Entrance Test',
    category: 'PG',
    specializations: ['Hospital Management', 'Healthcare Operations', 'Health Insurance']
  },
  'MBA-IT': {
    title: 'MBA in Information Technology',
    avgFees: { min: '₹2,00,000', max: '₹6,50,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with min. 50% marks + Entrance Test',
    category: 'PG',
    specializations: ['IT Strategy', 'Digital Transformation', 'Technology Management']
  },

  // Technology Programs (12 cards)
  'MTech-CSE': {
    title: 'M.Tech in Computer Science and Engineering',
    avgFees: { min: '₹1,50,000', max: '₹5,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['AI/ML', 'Data Science', 'Cloud Computing', 'Cyber Security']
  },
  'MTech-DS': {
    title: 'M.Tech in Data Science',
    avgFees: { min: '₹2,00,000', max: '₹6,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['Big Data Analytics', 'Machine Learning', 'AI', 'Statistical Computing']
  },
  'MTech-AI': {
    title: 'M.Tech in Artificial Intelligence',
    avgFees: { min: '₹2,50,000', max: '₹7,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['Deep Learning', 'Computer Vision', 'NLP', 'Robotics']
  },
  'MTech-Cyber': {
    title: 'M.Tech in Cyber Security',
    avgFees: { min: '₹2,00,000', max: '₹6,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['Network Security', 'Cryptography', 'Digital Forensics']
  },
  'MTech-Software': {
    title: 'M.Tech in Software Engineering',
    avgFees: { min: '₹1,50,000', max: '₹5,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['Software Architecture', 'DevOps', 'Quality Assurance']
  },
  'MTech-Electronics': {
    title: 'M.Tech in Electronics and Communication',
    avgFees: { min: '₹1,50,000', max: '₹5,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['VLSI Design', 'Communication Systems', 'Signal Processing']
  },
  'MTech-IoT': {
    title: 'M.Tech in Internet of Things',
    avgFees: { min: '₹2,00,000', max: '₹6,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['Embedded Systems', 'Sensor Networks', 'IoT Security']
  },
  'MTech-Robotics': {
    title: 'M.Tech in Robotics and Automation',
    avgFees: { min: '₹2,00,000', max: '₹6,50,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['Industrial Robotics', 'Control Systems', 'Automation']
  },
  'MTech-Cloud': {
    title: 'M.Tech in Cloud Computing',
    avgFees: { min: '₹2,00,000', max: '₹6,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['Cloud Architecture', 'DevOps', 'Cloud Security']
  },
  'MTech-Blockchain': {
    title: 'M.Tech in Blockchain Technology',
    avgFees: { min: '₹2,50,000', max: '₹7,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['Smart Contracts', 'Cryptography', 'DApp Development']
  },
  'MTech-Network': {
    title: 'M.Tech in Network Engineering',
    avgFees: { min: '₹1,50,000', max: '₹5,00,000' },
    duration: '2 Years',
    eligibility: 'B.Tech/B.E. with min. 60% marks + Valid GATE score',
    category: 'PG',
    specializations: ['Network Security', 'Wireless Networks', 'Network Design']
  },
  'MCA-Advanced': {
    title: 'Master of Computer Applications (Advanced)',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree in Computer Science/IT/Mathematics',
    category: 'PG',
    specializations: ['Software Development', 'Web Technologies', 'Mobile Computing']
  },

  // Commerce & Arts Programs (9 cards)
  'MCom-Advanced': {
    title: 'M.Com in Advanced Accounting and Finance',
    avgFees: { min: '₹40,000', max: '₹2,00,000' },
    duration: '2 Years',
    eligibility: 'B.Com with min. 50% marks',
    category: 'PG',
    specializations: ['Advanced Accounting', 'Financial Analytics', 'Banking', 'Taxation']
  },
  'MCom-FinTech': {
    title: 'M.Com in Financial Technology',
    avgFees: { min: '₹50,000', max: '₹2,50,000' },
    duration: '2 Years',
    eligibility: 'B.Com with min. 50% marks',
    category: 'PG',
    specializations: ['Digital Banking', 'Payment Systems', 'Financial Analytics']
  },
  'MA-Economics': {
    title: 'MA in Economics',
    avgFees: { min: '₹30,000', max: '₹1,50,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with Economics',
    category: 'PG',
    specializations: ['Econometrics', 'Development Economics', 'Financial Economics']
  },
  'MA-Psychology': {
    title: 'MA in Psychology',
    avgFees: { min: '₹40,000', max: '₹2,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with Psychology',
    category: 'PG',
    specializations: ['Clinical Psychology', 'Organizational Psychology', 'Counseling']
  },
  'MA-English': {
    title: 'MA in English Literature',
    avgFees: { min: '₹30,000', max: '₹1,50,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree in Arts',
    category: 'PG',
    specializations: ['British Literature', 'American Literature', 'Contemporary Literature']
  },
  'MA-DigitalMedia': {
    title: 'MA in Digital Media',
    avgFees: { min: '₹50,000', max: '₹2,50,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree in any discipline',
    category: 'PG',
    specializations: ['Social Media', 'Content Strategy', 'Digital Marketing']
  },
  'MA-Journalism': {
    title: 'MA in Journalism and Mass Communication',
    avgFees: { min: '₹40,000', max: '₹2,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree in any discipline',
    category: 'PG',
    specializations: ['Digital Journalism', 'Broadcasting', 'Public Relations']
  },
  'MA-Sociology': {
    title: 'MA in Sociology',
    avgFees: { min: '₹30,000', max: '₹1,50,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree in any discipline',
    category: 'PG',
    specializations: ['Social Research', 'Development Studies', 'Urban Sociology']
  },
  'MA-PublicPolicy': {
    title: 'MA in Public Policy',
    avgFees: { min: '₹50,000', max: '₹2,50,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree in any discipline',
    category: 'PG',
    specializations: ['Policy Analysis', 'Governance', 'Development Studies']
  },

  // Executive Education (29 cards)
  'Mini-MBA': {
    title: 'Mini MBA Program',
    avgFees: { min: '₹1,00,000', max: '₹3,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + 3 years work experience',
    category: 'Executive',
    specializations: ['Business Strategy', 'Leadership', 'Finance for Non-Finance']
  },
  'Exec-Leadership': {
    title: 'Executive Leadership Program',
    avgFees: { min: '₹2,00,000', max: '₹5,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + 5 years work experience',
    category: 'Executive',
    specializations: ['Strategic Leadership', 'Change Management', 'Team Building']
  },
  'Digital-Marketing-Exec': {
    title: 'Executive Program in Digital Marketing',
    avgFees: { min: '₹75,000', max: '₹2,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Basic computer knowledge',
    category: 'Executive',
    specializations: ['SEO', 'Social Media Marketing', 'Content Marketing']
  },
  'Project-Management-Exec': {
    title: 'Executive Program in Project Management',
    avgFees: { min: '₹1,00,000', max: '₹3,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + 2 years work experience',
    category: 'Executive',
    specializations: ['Project Planning', 'Risk Management', 'Agile Methodologies']
  },
  'Data-Analytics-Exec': {
    title: 'Executive Program in Data Analytics',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Basic statistics knowledge',
    category: 'Executive',
    specializations: ['Business Analytics', 'Data Visualization', 'Statistical Analysis']
  },
  'Finance-Management-Exec': {
    title: 'Executive Program in Financial Management',
    avgFees: { min: '₹1,20,000', max: '₹3,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + 2 years work experience',
    category: 'Executive',
    specializations: ['Financial Planning', 'Investment Management', 'Risk Analysis']
  },
  'HR-Analytics-Exec': {
    title: 'Executive Program in HR Analytics',
    avgFees: { min: '₹1,00,000', max: '₹3,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + HR experience',
    category: 'Executive',
    specializations: ['Workforce Analytics', 'Talent Management', 'HR Metrics']
  },
  'Supply-Chain-Exec': {
    title: 'Executive Program in Supply Chain Management',
    avgFees: { min: '₹1,20,000', max: '₹3,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Operations experience',
    category: 'Executive',
    specializations: ['Logistics', 'Inventory Management', 'Supply Chain Analytics']
  },
  'Business-Analytics-Exec': {
    title: 'Executive Program in Business Analytics',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Basic analytics knowledge',
    category: 'Executive',
    specializations: ['Predictive Analytics', 'Business Intelligence', 'Data-Driven Decision Making']
  },
  'AI-ML-Exec': {
    title: 'Executive Program in AI & Machine Learning',
    avgFees: { min: '₹2,00,000', max: '₹5,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Programming knowledge',
    category: 'Executive',
    specializations: ['Machine Learning', 'Deep Learning', 'AI Applications']
  },
  'Strategic-Management-Exec': {
    title: 'Executive Program in Strategic Management',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + 4 years work experience',
    category: 'Executive',
    specializations: ['Corporate Strategy', 'Business Model Innovation', 'Strategic Planning']
  },
  'Digital-Transformation-Exec': {
    title: 'Executive Program in Digital Transformation',
    avgFees: { min: '₹1,80,000', max: '₹4,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + 3 years work experience',
    category: 'Executive',
    specializations: ['Digital Strategy', 'Technology Integration', 'Change Management']
  },
  'Blockchain-Exec': {
    title: 'Executive Program in Blockchain Technology',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Tech background',
    category: 'Executive',
    specializations: ['Blockchain Fundamentals', 'Smart Contracts', 'Cryptocurrency']
  },
  'Product-Management-Exec': {
    title: 'Executive Program in Product Management',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + 2 years work experience',
    category: 'Executive',
    specializations: ['Product Strategy', 'UX Design', 'Product Analytics']
  },
  'Sales-Leadership-Exec': {
    title: 'Executive Program in Sales Leadership',
    avgFees: { min: '₹1,20,000', max: '₹3,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Sales experience',
    category: 'Executive',
    specializations: ['Sales Strategy', 'Team Management', 'Customer Relationship']
  },
  'Healthcare-Management-Exec': {
    title: 'Executive Program in Healthcare Management',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Healthcare experience',
    category: 'Executive',
    specializations: ['Healthcare Operations', 'Quality Management', 'Healthcare Technology']
  },
  'Risk-Management-Exec': {
    title: 'Executive Program in Risk Management',
    avgFees: { min: '₹1,30,000', max: '₹3,80,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Finance background',
    category: 'Executive',
    specializations: ['Financial Risk', 'Operational Risk', 'Risk Analytics']
  },
  'Marketing-Analytics-Exec': {
    title: 'Executive Program in Marketing Analytics',
    avgFees: { min: '₹1,40,000', max: '₹3,80,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Marketing experience',
    category: 'Executive',
    specializations: ['Consumer Analytics', 'Marketing ROI', 'Digital Analytics']
  },
  'Operations-Excellence-Exec': {
    title: 'Executive Program in Operations Excellence',
    avgFees: { min: '₹1,20,000', max: '₹3,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Operations background',
    category: 'Executive',
    specializations: ['Process Optimization', 'Quality Management', 'Lean Six Sigma']
  },
  'Business-Innovation-Exec': {
    title: 'Executive Program in Business Innovation',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + 3 years work experience',
    category: 'Executive',
    specializations: ['Innovation Strategy', 'Design Thinking', 'Digital Innovation']
  },
  'Cyber-Security-Exec': {
    title: 'Executive Program in Cyber Security',
    avgFees: { min: '₹1,80,000', max: '₹4,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + IT background',
    category: 'Executive',
    specializations: ['Network Security', 'Information Security', 'Security Management']
  },
  'Cloud-Computing-Exec': {
    title: 'Executive Program in Cloud Computing',
    avgFees: { min: '₹1,60,000', max: '₹4,20,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + IT background',
    category: 'Executive',
    specializations: ['Cloud Architecture', 'Cloud Security', 'DevOps']
  },
  'Business-Law-Exec': {
    title: 'Executive Program in Business Law',
    avgFees: { min: '₹1,20,000', max: '₹3,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Business background',
    category: 'Executive',
    specializations: ['Corporate Law', 'Contract Management', 'Legal Compliance']
  },
  'Entrepreneurship-Exec': {
    title: 'Executive Program in Entrepreneurship',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Business idea',
    category: 'Executive',
    specializations: ['Business Planning', 'Venture Capital', 'Growth Strategy']
  },
  'Design-Thinking-Exec': {
    title: 'Executive Program in Design Thinking',
    avgFees: { min: '₹1,20,000', max: '₹3,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Any background',
    category: 'Executive',
    specializations: ['User Experience', 'Innovation Design', 'Problem Solving']
  },
  'Sustainability-Management-Exec': {
    title: 'Executive Program in Sustainability Management',
    avgFees: { min: '₹1,30,000', max: '₹3,80,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Interest in sustainability',
    category: 'Executive',
    specializations: ['Environmental Management', 'Sustainable Business', 'Green Technologies']
  },
  'Global-Business-Exec': {
    title: 'Executive Program in Global Business Management',
    avgFees: { min: '₹1,80,000', max: '₹4,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + International business interest',
    category: 'Executive',
    specializations: ['International Trade', 'Global Strategy', 'Cross-Cultural Management']
  },
  'Investment-Banking-Exec': {
    title: 'Executive Program in Investment Banking',
    avgFees: { min: '₹2,00,000', max: '₹5,00,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Finance background',
    category: 'Executive',
    specializations: ['Financial Modeling', 'Valuation', 'M&A']
  },
  'Quality-Management-Exec': {
    title: 'Executive Program in Quality Management',
    avgFees: { min: '₹1,20,000', max: '₹3,50,000' },
    duration: '6 Months',
    eligibility: 'Bachelor\'s degree + Quality experience',
    category: 'Executive',
    specializations: ['Quality Systems', 'Process Control', 'Six Sigma']
  },

  // PhD Programs (5 cards)
  'PhD-Management': {
    title: 'PhD in Management',
    avgFees: { min: '₹50,000', max: '₹2,00,000' },
    duration: '3-5 Years',
    eligibility: 'Master\'s degree with min. 55% marks + NET/JRF',
    category: 'PhD',
    specializations: ['Strategic Management', 'Finance', 'Marketing', 'HR']
  },
  'PhD-Technology': {
    title: 'PhD in Technology',
    avgFees: { min: '₹50,000', max: '₹2,50,000' },
    duration: '3-5 Years',
    eligibility: 'M.Tech with min. 60% marks + GATE/NET',
    category: 'PhD',
    specializations: ['Computer Science', 'Data Science', 'AI/ML']
  },
  'PhD-Economics': {
    title: 'PhD in Economics',
    avgFees: { min: '₹40,000', max: '₹1,80,000' },
    duration: '3-5 Years',
    eligibility: 'Master\'s in Economics with min. 55% marks + NET/JRF',
    category: 'PhD',
    specializations: ['Development Economics', 'Financial Economics', 'International Trade']
  },
  'PhD-Psychology': {
    title: 'PhD in Psychology',
    avgFees: { min: '₹45,000', max: '₹2,00,000' },
    duration: '3-5 Years',
    eligibility: 'Master\'s in Psychology with min. 55% marks + NET/JRF',
    category: 'PhD',
    specializations: ['Clinical Psychology', 'Organizational Behavior', 'Cognitive Psychology']
  },
  'PhD-Commerce': {
    title: 'PhD in Commerce',
    avgFees: { min: '₹40,000', max: '₹1,80,000' },
    duration: '3-5 Years',
    eligibility: 'Master\'s in Commerce with min. 55% marks + NET/JRF',
    category: 'PhD',
    specializations: ['Accounting', 'Finance', 'Banking', 'International Business']
  },

  // UG Courses (10 cards)
  'BBA': {
    title: 'Bachelor of Business Administration',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '3 Years',
    eligibility: '10+2 with min. 50% marks',
    category: 'UG',
    specializations: ['Finance', 'Marketing', 'HR', 'International Business']
  },
  'BCA': {
    title: 'Bachelor of Computer Applications',
    avgFees: { min: '₹1,00,000', max: '₹3,50,000' },
    duration: '3 Years',
    eligibility: '10+2 with Mathematics',
    category: 'UG',
    specializations: ['Software Development', 'Web Development', 'Data Analytics']
  },
  'BCom': {
    title: 'Bachelor of Commerce',
    avgFees: { min: '₹30,000', max: '₹2,00,000' },
    duration: '3 Years',
    eligibility: '10+2 with min. 45% marks',
    category: 'UG',
    specializations: ['Accounting', 'Finance', 'Banking', 'Taxation']
  },
  'BSc-CS': {
    title: 'BSc in Computer Science',
    avgFees: { min: '₹50,000', max: '₹2,50,000' },
    duration: '3 Years',
    eligibility: '10+2 with PCM/Computer Science',
    category: 'UG',
    specializations: ['Software Engineering', 'Data Science', 'Cybersecurity']
  },
  'BSc-IT': {
    title: 'BSc in Information Technology',
    avgFees: { min: '₹40,000', max: '₹2,00,000' },
    duration: '3 Years',
    eligibility: '10+2 with Mathematics',
    category: 'UG',
    specializations: ['Networking', 'Cloud Computing', 'Systems Administration']
  },
  'BA-Economics': {
    title: 'BA in Economics',
    avgFees: { min: '₹25,000', max: '₹1,50,000' },
    duration: '3 Years',
    eligibility: '10+2 with any stream',
    category: 'UG',
    specializations: ['Microeconomics', 'Macroeconomics', 'Development Economics']
  },
  'BSc-DataScience': {
    title: 'BSc in Data Science',
    avgFees: { min: '₹1,00,000', max: '₹3,00,000' },
    duration: '3 Years',
    eligibility: '10+2 with Mathematics',
    category: 'UG',
    specializations: ['Data Analytics', 'Machine Learning', 'Statistical Analysis']
  },
  'BBA-Aviation': {
    title: 'BBA in Aviation Management',
    avgFees: { min: '₹2,00,000', max: '₹5,00,000' },
    duration: '3 Years',
    eligibility: '10+2 with min. 50% marks',
    category: 'UG',
    specializations: ['Airport Management', 'Airline Operations', 'Aviation Safety']
  },
  'BSc-AI': {
    title: 'BSc in Artificial Intelligence',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '3 Years',
    eligibility: '10+2 with PCM',
    category: 'UG',
    specializations: ['Machine Learning', 'Deep Learning', 'Robotics']
  },
  'BHM': {
    title: 'Bachelor of Hotel Management',
    avgFees: { min: '₹1,00,000', max: '₹3,50,000' },
    duration: '3 Years',
    eligibility: '10+2 with any stream',
    category: 'UG',
    specializations: ['Hotel Operations', 'Food & Beverage', 'Tourism Management']
  },

  // Study Abroad Programs (8 cards)
  'MBA-USA': {
    title: 'MBA in USA',
    avgFees: { min: '₹40,00,000', max: '₹80,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree + GMAT + IELTS/TOEFL',
    category: 'Study Abroad',
    specializations: ['General Management', 'Finance', 'Marketing', 'Technology']
  },
  'MS-Canada': {
    title: 'MS in Canada',
    avgFees: { min: '₹15,00,000', max: '₹35,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree + GRE + IELTS',
    category: 'Study Abroad',
    specializations: ['Computer Science', 'Data Science', 'Engineering']
  },
  'MSc-UK': {
    title: 'MSc in UK',
    avgFees: { min: '₹20,00,000', max: '₹40,00,000' },
    duration: '1 Year',
    eligibility: 'Bachelor\'s degree + IELTS',
    category: 'Study Abroad',
    specializations: ['Business Analytics', 'Finance', 'Marketing']
  },
  'MIM-Europe': {
    title: 'Masters in Management - Europe',
    avgFees: { min: '₹25,00,000', max: '₹45,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree + GMAT/GRE + IELTS',
    category: 'Study Abroad',
    specializations: ['International Business', 'Strategy', 'Entrepreneurship']
  },
  'MBA-Australia': {
    title: 'MBA in Australia',
    avgFees: { min: '₹25,00,000', max: '₹45,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree + GMAT + IELTS',
    category: 'Study Abroad',
    specializations: ['Business Analytics', 'Project Management', 'Marketing']
  },
  'MS-Germany': {
    title: 'MS in Germany',
    avgFees: { min: '₹10,00,000', max: '₹15,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree + GRE + German A1',
    category: 'Study Abroad',
    specializations: ['Mechanical Engineering', 'Automotive', 'Robotics']
  },
  'MSc-Singapore': {
    title: 'MSc in Singapore',
    avgFees: { min: '₹20,00,000', max: '₹40,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree + IELTS',
    category: 'Study Abroad',
    specializations: ['FinTech', 'Data Analytics', 'Digital Marketing']
  },
  'MBA-Dubai': {
    title: 'MBA in Dubai',
    avgFees: { min: '₹15,00,000', max: '₹35,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree + GMAT + IELTS',
    category: 'Study Abroad',
    specializations: ['Islamic Banking', 'Oil & Gas Management', 'Luxury Management']
  },

  // Advanced Diploma Courses (6 cards)
  'AdvDip-AI': {
    title: 'Advanced Diploma in Artificial Intelligence',
    avgFees: { min: '₹1,50,000', max: '₹3,00,000' },
    duration: '1 Year',
    eligibility: 'Bachelor\'s degree in CS/IT/related field',
    category: 'Diploma',
    specializations: ['Machine Learning', 'Deep Learning', 'Computer Vision']
  },
  'AdvDip-DataScience': {
    title: 'Advanced Diploma in Data Science',
    avgFees: { min: '₹1,20,000', max: '₹2,80,000' },
    duration: '1 Year',
    eligibility: 'Bachelor\'s degree with Mathematics',
    category: 'Diploma',
    specializations: ['Data Analytics', 'Statistical Analysis', 'Big Data']
  },
  'AdvDip-DigitalMarketing': {
    title: 'Advanced Diploma in Digital Marketing',
    avgFees: { min: '₹80,000', max: '₹2,00,000' },
    duration: '1 Year',
    eligibility: 'Bachelor\'s degree in any discipline',
    category: 'Diploma',
    specializations: ['SEO', 'Social Media Marketing', 'Content Marketing']
  },
  'AdvDip-CloudComputing': {
    title: 'Advanced Diploma in Cloud Computing',
    avgFees: { min: '₹1,00,000', max: '₹2,50,000' },
    duration: '1 Year',
    eligibility: 'Bachelor\'s degree in CS/IT/related field',
    category: 'Diploma',
    specializations: ['AWS', 'Azure', 'Google Cloud']
  },
  'AdvDip-BusinessAnalytics': {
    title: 'Advanced Diploma in Business Analytics',
    avgFees: { min: '₹1,20,000', max: '₹2,80,000' },
    duration: '1 Year',
    eligibility: 'Bachelor\'s degree with basic statistics',
    category: 'Diploma',
    specializations: ['Predictive Analytics', 'Business Intelligence', 'Data Visualization']
  },
  'AdvDip-CyberSecurity': {
    title: 'Advanced Diploma in Cyber Security',
    avgFees: { min: '₹1,30,000', max: '₹3,00,000' },
    duration: '1 Year',
    eligibility: 'Bachelor\'s degree in CS/IT/related field',
    category: 'Diploma',
    specializations: ['Network Security', 'Ethical Hacking', 'Information Security']
  },

  // Additional missing mappings
  'MSc-CS': {
    title: 'MSc in Computer Science',
    avgFees: { min: '₹80,000', max: '₹3,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree in Computer Science/IT with min. 50% marks',
    category: 'PG',
    specializations: ['Software Engineering', 'Data Science', 'AI/ML', 'Cybersecurity']
  },
  'M-Design': {
    title: 'Master of Design',
    avgFees: { min: '₹2,00,000', max: '₹5,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree in Design/related field',
    category: 'PG',
    specializations: ['UI/UX Design', 'Product Design', 'Graphic Design', 'Industrial Design']
  },
  'M-Ed': {
    title: 'Master of Education',
    avgFees: { min: '₹50,000', max: '₹2,00,000' },
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree in Education (B.Ed)',
    category: 'PG',
    specializations: ['Educational Psychology', 'Curriculum Development', 'Educational Technology']
  },
  'B-Design': {
    title: 'Bachelor of Design',
    avgFees: { min: '₹1,50,000', max: '₹4,00,000' },
    duration: '4 Years',
    eligibility: '10+2 with any stream',
    category: 'UG',
    specializations: ['Fashion Design', 'Interior Design', 'Graphic Design', 'Product Design']
  },
  'PG-Diploma-Management': {
    title: 'PG Diploma in Management',
    avgFees: { min: '₹80,000', max: '₹2,50,000' },
    duration: '1 Year',
    eligibility: 'Bachelor\'s degree with min. 50% marks',
    category: 'Diploma',
    specializations: ['General Management', 'Finance', 'Marketing', 'HR']
  }
};

export default coursesData;
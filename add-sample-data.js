// Sample Data Generator for MBA Ninja Admin Dashboard
// Run this with: node add-sample-data.js

const fs = require('fs');
const path = require('path');

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Sample Users - Realistic journey data
const sampleLeads = [
  {
    id: 'LEAD-2024-001',
    timestamp: '2024-11-08T10:30:00.000Z',
    userData: {
      fullName: 'Priya Sharma',
      emailAddress: 'priya.sharma@gmail.com',
      contactNumber: '9876543210',
      ipAddress: '103.21.45.78',
      gender: 'Female',
      dateOfBirth: '1995-06-15',
      city: 'Mumbai',
      state: 'Maharashtra',
      currentQualification: 'B.Com'
    },
    questionnaireData: {
      courseType: 'PG Courses',
      specialization: 'MBA',
      budget: '₹1-3 Lakhs',
      preferredLocation: 'Mumbai',
      studyMode: 'Online',
      workExperience: '2-5 years'
    },
    universityName: 'NMIMS University',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0.0.0'
  },
  {
    id: 'LEAD-2024-002',
    timestamp: '2024-11-08T14:15:00.000Z',
    userData: {
      fullName: 'Rahul Verma',
      emailAddress: 'rahul.verma@yahoo.com',
      contactNumber: '9123456789',
      ipAddress: '117.55.232.145',
      gender: 'Male',
      dateOfBirth: '1992-03-22',
      city: 'Bangalore',
      state: 'Karnataka',
      currentQualification: 'B.Tech'
    },
    questionnaireData: {
      courseType: 'PG Courses',
      specialization: 'MBA - Data Analytics',
      budget: '₹3-5 Lakhs',
      preferredLocation: 'Bangalore',
      studyMode: 'Hybrid',
      workExperience: '5+ years',
      additionalPreferences: 'Looking for weekend classes, interested in AI/ML specialization'
    },
    universityName: 'Amity University',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15'
  },
  {
    id: 'LEAD-2024-003',
    timestamp: '2024-11-08T16:45:00.000Z',
    userData: {
      fullName: 'Anjali Desai',
      emailAddress: 'anjali.desai@outlook.com',
      contactNumber: '9988776655',
      ipAddress: '49.207.198.22',
      gender: 'Female',
      dateOfBirth: '1998-11-10',
      city: 'Pune',
      state: 'Maharashtra',
      currentQualification: 'BBA'
    },
    questionnaireData: {
      courseType: 'PG Courses',
      specialization: 'MBA - Marketing',
      budget: '₹1-3 Lakhs',
      preferredLocation: 'Pune',
      studyMode: 'Online',
      workExperience: 'Fresher'
    },
    universityName: 'Manipal University',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/119.0.0.0'
  }
];

// Sample Activities - Complete user journey
const sampleActivities = [
  // Priya Sharma's Journey
  {
    id: 'ACT-001',
    action: 'login',
    details: 'User logged in successfully',
    user: {
      name: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      phone: '9876543210'
    },
    ipAddress: '103.21.45.78',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0.0.0',
    page: '/',
    timestamp: '2024-11-08T10:25:00.000Z'
  },
  {
    id: 'ACT-002',
    action: 'course_explorer',
    details: JSON.stringify({
      courseName: 'MBA',
      courseId: 'mba-general',
      stream: 'Commerce',
      tab: 'PG Courses'
    }),
    user: {
      name: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      phone: '9876543210'
    },
    ipAddress: '103.21.45.78',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0.0.0',
    page: '/browse-courses',
    timestamp: '2024-11-08T10:26:30.000Z'
  },
  {
    id: 'ACT-003',
    action: 'questionnaire_start',
    details: JSON.stringify({ degreeType: 'PG Courses' }),
    user: {
      name: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      phone: '9876543210'
    },
    ipAddress: '103.21.45.78',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0.0.0',
    page: '/university-matcher',
    timestamp: '2024-11-08T10:27:00.000Z'
  },
  {
    id: 'ACT-004',
    action: 'chatbot_usage',
    details: JSON.stringify({
      message: 'What is the fee structure for MBA at NMIMS?',
      messageCount: 1
    }),
    user: {
      name: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      phone: '9876543210'
    },
    ipAddress: '103.21.45.78',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0.0.0',
    page: '/university-matcher',
    timestamp: '2024-11-08T10:28:15.000Z'
  },
  {
    id: 'ACT-005',
    action: 'questionnaire_complete',
    details: JSON.stringify({
      courseType: 'PG Courses',
      specialization: 'MBA',
      budget: '₹1-3 Lakhs',
      preferredLocation: 'Mumbai',
      studyMode: 'Online',
      workExperience: '2-5 years'
    }),
    user: {
      name: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      phone: '9876543210'
    },
    ipAddress: '103.21.45.78',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0.0.0',
    page: '/university-matcher',
    timestamp: '2024-11-08T10:29:45.000Z'
  },
  {
    id: 'ACT-006',
    action: 'university_contact',
    details: JSON.stringify({
      universityName: 'NMIMS University',
      source: 'Know More Button'
    }),
    user: {
      name: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      phone: '9876543210'
    },
    ipAddress: '103.21.45.78',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0.0.0',
    page: '/university-matcher-results',
    timestamp: '2024-11-08T10:30:00.000Z'
  },

  // Rahul Verma's Journey
  {
    id: 'ACT-007',
    action: 'login',
    details: 'User logged in successfully',
    user: {
      name: 'Rahul Verma',
      email: 'rahul.verma@yahoo.com',
      phone: '9123456789'
    },
    ipAddress: '117.55.232.145',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
    page: '/',
    timestamp: '2024-11-08T14:10:00.000Z'
  },
  {
    id: 'ACT-008',
    action: 'chatbot_usage',
    details: JSON.stringify({
      message: 'I want to do MBA in Data Analytics with AI specialization',
      messageCount: 1
    }),
    user: {
      name: 'Rahul Verma',
      email: 'rahul.verma@yahoo.com',
      phone: '9123456789'
    },
    ipAddress: '117.55.232.145',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
    page: '/',
    timestamp: '2024-11-08T14:11:00.000Z'
  },
  {
    id: 'ACT-009',
    action: 'chatbot_usage',
    details: JSON.stringify({
      message: 'Which universities offer weekend classes for MBA?',
      messageCount: 2
    }),
    user: {
      name: 'Rahul Verma',
      email: 'rahul.verma@yahoo.com',
      phone: '9123456789'
    },
    ipAddress: '117.55.232.145',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
    page: '/',
    timestamp: '2024-11-08T14:11:45.000Z'
  },
  {
    id: 'ACT-010',
    action: 'compare_universities',
    details: JSON.stringify({
      universities: ['Amity University', 'NMIMS University', 'Manipal University'],
      courseName: 'MBA - Data Analytics',
      count: 3
    }),
    user: {
      name: 'Rahul Verma',
      email: 'rahul.verma@yahoo.com',
      phone: '9123456789'
    },
    ipAddress: '117.55.232.145',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
    page: '/compare-universities',
    timestamp: '2024-11-08T14:13:00.000Z'
  },
  {
    id: 'ACT-011',
    action: 'questionnaire_start',
    details: JSON.stringify({ degreeType: 'PG Courses' }),
    user: {
      name: 'Rahul Verma',
      email: 'rahul.verma@yahoo.com',
      phone: '9123456789'
    },
    ipAddress: '117.55.232.145',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
    page: '/university-matcher',
    timestamp: '2024-11-08T14:13:30.000Z'
  },
  {
    id: 'ACT-012',
    action: 'questionnaire_complete',
    details: JSON.stringify({
      courseType: 'PG Courses',
      specialization: 'MBA - Data Analytics',
      budget: '₹3-5 Lakhs',
      preferredLocation: 'Bangalore',
      studyMode: 'Hybrid',
      workExperience: '5+ years'
    }),
    user: {
      name: 'Rahul Verma',
      email: 'rahul.verma@yahoo.com',
      phone: '9123456789'
    },
    ipAddress: '117.55.232.145',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
    page: '/university-matcher',
    timestamp: '2024-11-08T14:14:30.000Z'
  },
  {
    id: 'ACT-013',
    action: 'university_contact',
    details: JSON.stringify({
      universityName: 'Amity University',
      source: 'Know More Button'
    }),
    user: {
      name: 'Rahul Verma',
      email: 'rahul.verma@yahoo.com',
      phone: '9123456789'
    },
    ipAddress: '117.55.232.145',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
    page: '/university-matcher-results',
    timestamp: '2024-11-08T14:15:00.000Z'
  },

  // Anjali Desai's Journey
  {
    id: 'ACT-014',
    action: 'login',
    details: 'User logged in successfully',
    user: {
      name: 'Anjali Desai',
      email: 'anjali.desai@outlook.com',
      phone: '9988776655'
    },
    ipAddress: '49.207.198.22',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/119.0.0.0',
    page: '/',
    timestamp: '2024-11-08T16:40:00.000Z'
  },
  {
    id: 'ACT-015',
    action: 'course_explorer',
    details: JSON.stringify({
      courseName: 'MBA - Marketing',
      courseId: 'mba-marketing',
      stream: 'Commerce',
      tab: 'PG Courses'
    }),
    user: {
      name: 'Anjali Desai',
      email: 'anjali.desai@outlook.com',
      phone: '9988776655'
    },
    ipAddress: '49.207.198.22',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/119.0.0.0',
    page: '/browse-courses',
    timestamp: '2024-11-08T16:41:00.000Z'
  },
  {
    id: 'ACT-016',
    action: 'questionnaire_start',
    details: JSON.stringify({ degreeType: 'PG Courses' }),
    user: {
      name: 'Anjali Desai',
      email: 'anjali.desai@outlook.com',
      phone: '9988776655'
    },
    ipAddress: '49.207.198.22',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/119.0.0.0',
    page: '/university-matcher',
    timestamp: '2024-11-08T16:42:00.000Z'
  },
  {
    id: 'ACT-017',
    action: 'chatbot_usage',
    details: JSON.stringify({
      message: 'Is MBA marketing good for freshers?',
      messageCount: 1
    }),
    user: {
      name: 'Anjali Desai',
      email: 'anjali.desai@outlook.com',
      phone: '9988776655'
    },
    ipAddress: '49.207.198.22',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/119.0.0.0',
    page: '/university-matcher',
    timestamp: '2024-11-08T16:43:00.000Z'
  },
  {
    id: 'ACT-018',
    action: 'questionnaire_complete',
    details: JSON.stringify({
      courseType: 'PG Courses',
      specialization: 'MBA - Marketing',
      budget: '₹1-3 Lakhs',
      preferredLocation: 'Pune',
      studyMode: 'Online',
      workExperience: 'Fresher'
    }),
    user: {
      name: 'Anjali Desai',
      email: 'anjali.desai@outlook.com',
      phone: '9988776655'
    },
    ipAddress: '49.207.198.22',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/119.0.0.0',
    page: '/university-matcher',
    timestamp: '2024-11-08T16:44:30.000Z'
  },
  {
    id: 'ACT-019',
    action: 'university_contact',
    details: JSON.stringify({
      universityName: 'Manipal University',
      source: 'Know More Button'
    }),
    user: {
      name: 'Anjali Desai',
      email: 'anjali.desai@outlook.com',
      phone: '9988776655'
    },
    ipAddress: '49.207.198.22',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/119.0.0.0',
    page: '/university-matcher-results',
    timestamp: '2024-11-08T16:45:00.000Z'
  }
];

// Write sample data to files
const leadsPath = path.join(dataDir, 'leads.json');
const activitiesPath = path.join(dataDir, 'user-activities.json');

// Read existing data if any, or start fresh
let existingLeads = [];
let existingActivities = [];

if (fs.existsSync(leadsPath)) {
  existingLeads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));
}

if (fs.existsSync(activitiesPath)) {
  existingActivities = JSON.parse(fs.readFileSync(activitiesPath, 'utf8'));
}

// Add sample data
const updatedLeads = [...existingLeads, ...sampleLeads];
const updatedActivities = [...existingActivities, ...sampleActivities];

// Write to files
fs.writeFileSync(leadsPath, JSON.stringify(updatedLeads, null, 2));
fs.writeFileSync(activitiesPath, JSON.stringify(updatedActivities, null, 2));

console.log('✅ Sample data added successfully!');
console.log(`📊 Total Leads: ${updatedLeads.length}`);
console.log(`📈 Total Activities: ${updatedActivities.length}`);
console.log('\n📝 Sample Users Added:');
console.log('1. Priya Sharma - 6 activities (Login → Course Browse → Questionnaire → Chatbot → Complete → Contact)');
console.log('2. Rahul Verma - 7 activities (Login → Chatbot × 2 → Compare → Questionnaire → Complete → Contact)');
console.log('3. Anjali Desai - 6 activities (Login → Course Browse → Questionnaire → Chatbot → Complete → Contact)');
console.log('\n🎯 You can now login to admin dashboard to see the complete activity tracking!');
console.log('👉 Go to: http://localhost:3000 → Click Admin → Login with Admin/9029444175');

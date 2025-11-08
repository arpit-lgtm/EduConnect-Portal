// Activity tracking utility

export const trackActivity = async (action, details = {}) => {
  try {
    // Get user data from localStorage
    const userData = localStorage.getItem('mba_ninja_user');
    const parsedUser = userData ? JSON.parse(userData) : null;

    // Get IP address
    let ipData = { ip: 'Unknown', userAgent: 'Unknown' };
    try {
      const ipResponse = await fetch('/api/get-ip');
      ipData = await ipResponse.json();
    } catch (error) {
      console.error('Error fetching IP:', error);
    }

    // Prepare activity data
    const activityData = {
      action, // e.g., 'login', 'questionnaire_started', 'university_contacted', 'chatbot_used'
      details, // Additional info specific to the action
      user: parsedUser ? {
        name: parsedUser.fullName,
        email: parsedUser.emailAddress,
        phone: parsedUser.contactNumber
      } : null,
      ipAddress: ipData.ip,
      userAgent: ipData.userAgent,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    };

    // Send to backend
    await fetch('/api/track-activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activityData)
    });

    console.log('📊 Activity tracked:', action);
  } catch (error) {
    console.error('Error tracking activity:', error);
  }
};

// Specific tracking functions
export const trackLogin = async (userData) => {
  await trackActivity('user_login', {
    userName: userData.fullName,
    userEmail: userData.emailAddress,
    courseInterest: userData.courseInterest,
    studyMode: userData.studyMode
  });
};

export const trackQuestionnaireStart = async () => {
  await trackActivity('questionnaire_started', {
    tool: 'AskMBANinja'
  });
};

export const trackQuestionnaireComplete = async (responses) => {
  await trackActivity('questionnaire_completed', {
    tool: 'AskMBANinja',
    responses: responses
  });
};

export const trackUniversityContact = async (universityName, questionnaireData) => {
  await trackActivity('university_contacted', {
    university: universityName,
    questionnaireResponses: questionnaireData
  });
};

export const trackChatbotUsage = async (message, response) => {
  await trackActivity('chatbot_used', {
    userMessage: message,
    botResponse: response?.substring(0, 100) + '...' // Truncate long responses
  });
};

export const trackCompareUniversities = async (data) => {
  // Handle both array and object inputs
  const universities = Array.isArray(data) ? data : (data?.universities || []);
  
  await trackActivity('compare_universities', {
    universities: Array.isArray(universities) 
      ? universities.map(uni => typeof uni === 'string' ? uni : uni?.name).filter(Boolean)
      : [],
    courseName: data?.courseName,
    count: data?.count
  });
};

export const trackCourseExplorer = async (category, courseName) => {
  await trackActivity('course_explorer_used', {
    category: category,
    course: courseName
  });
};

import { useState, useRef, useEffect } from 'react';
import styles from './EduAI.module.css';
import { getAIResponse, shouldUseAI, formatConversationHistory, isAIEnabled } from '../../lib/huggingface-client';

const EduAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState(null); // Track conversation context
  const [showCounselorForm, setShowCounselorForm] = useState(false);
  const [questionCount, setQuestionCount] = useState(0); // Track number of questions answered
  const MAX_QUESTIONS = 5; // Limit to 5 questions before suggesting counselor
  const [hasAskedQuestion, setHasAskedQuestion] = useState(false); // Track if user has asked at least one question
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    course: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Voice control - START MUTED
  const [videoVisible, setVideoVisible] = useState(true); // Video widget visibility - open by default
  
  // Verification flow state
  const [isVerified, setIsVerified] = useState(false);
  const [showVerification, setShowVerification] = useState(false); // Only show after first question attempt
  const [verificationStep, setVerificationStep] = useState('name'); // 'name', 'phone', 'phone-otp', 'email', 'email-otp', 'complete'
  const [verificationData, setVerificationData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    phoneOtp: '',
    email: '',
    emailOtp: ''
  });
  const [generatedPhoneOtp, setGeneratedPhoneOtp] = useState('');
  const [generatedEmailOtp, setGeneratedEmailOtp] = useState('');
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const videoRef = useRef(null); // Video element ref

  // Force video to play when component mounts
  useEffect(() => {
    if (videoRef.current && videoVisible) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay:', err);
        // If autoplay fails, try muting first
        videoRef.current.muted = true;
        videoRef.current.play();
      });
    }
  }, [videoVisible]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Knowledge Base Response Function
  const getKnowledgeBaseResponse = async (userQuestion, lastBotMessage) => {
    const question = userQuestion.toLowerCase().trim();

    // Check for off-topic questions first
    const offTopicKeywords = [
      'weather', 'movie', 'recipe', 'game', 'sports', 'news', 'politics',
      'celebrity', 'cricket', 'football', 'music', 'song', 'actor', 'actress',
      'stock market', 'bitcoin', 'crypto', 'invest in stock', 'jokes', 'funny'
    ];
    
    const isOffTopic = offTopicKeywords.some(keyword => question.includes(keyword)) &&
                       !question.includes('university') && 
                       !question.includes('course') && 
                       !question.includes('education');

    if (isOffTopic) {
      return "😊 I appreciate your question, but I'm specifically designed to help with **education-related queries** about:\n\n✓ Universities & Courses (**only from our partner universities**)\n✓ Fees & Admissions\n✓ Career guidance\n✓ Study programs\n✓ Our services at MBA NINJA\n\n**Important Note:**\nI only provide information about the **166 universities listed on our MBA NINJA portal**. If you ask about universities not partnered with us, I won't have that information.\n\nFor other topics, I'd recommend checking specialized platforms. But I'm here to help with anything related to your education journey with our partner universities!\n\nWhat would you like to know about universities or courses?";
    }

    // Context-aware responses (follow-up questions)
    if (lastBotMessage && conversationContext) {
      // Handle affirmative responses (yes, yeah, sure, ok, please, tell me, etc.)
      const affirmativeWords = ['yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'please', 'tell me', 'show me', 'want', 'need', 'interested'];
      const isAffirmative = affirmativeWords.some(word => question.includes(word)) && question.split(' ').length <= 5;

      if (isAffirmative || question === 'yes' || question === 'y') {
        // Respond based on the conversation context
        if (conversationContext === 'state_fees') {
          setConversationContext('awaiting_state');
          return "Great! Which state are you interested in?\n\nPopular states:\n🏙️ **Maharashtra** (Mumbai, Pune)\n🌆 **Karnataka** (Bangalore)\n🏛️ **Delhi NCR** (Delhi, Noida)\n🕌 **Tamil Nadu** (Chennai)\n🕉️ **Uttar Pradesh** (Lucknow, Noida)\n🦁 **Gujarat** (Ahmedabad)\n\nJust type the state name!";
        }
        
        if (conversationContext === 'admission_details') {
          return "📋 **Admission Process - Step by Step**\n\n**1. Choose Your Program:**\n   • Browse universities on our matcher\n   • Compare fees, locations, ratings\n\n**2. Check Eligibility:**\n   • 12th pass for UG programs\n   • Graduation for PG programs\n   • Minimum 50% marks\n\n**3. Prepare Documents:**\n   • Mark sheets (10th, 12th, Graduation)\n   • ID proof (Aadhar/PAN)\n   • Photos, migration certificate\n\n**4. Apply Online:**\n   • Fill application form\n   • Upload documents\n   • Pay application fee (₹500-₹2000)\n\n**5. Counseling & Selection:**\n   • Our experts guide you\n   • Document verification\n   • Seat confirmation\n\n**6. Fee Payment:**\n   • Pay semester/annual fee\n   • EMI options available\n   • Education loan assistance\n\n**7. Start Classes:**\n   • Receive login credentials\n   • Access study materials\n   • Begin your journey!\n\n**We help at EVERY step!** 🎓\n\nWant help with a specific program?";
        }
        
        if (conversationContext === 'university_comparison') {
          return "📊 **University Comparison Tool**\n\nI can help you compare universities on:\n\n**Academic Factors:**\n• Fees (Total & Per semester)\n• Course specializations available\n• Faculty & teaching quality\n\n**Reputation:**\n• NAAC ratings (A++, A+, A)\n• NIRF rankings\n• Years of establishment\n\n**Placements:**\n• Average package\n• Highest package\n• Top recruiters\n• Placement %\n\n**Facilities:**\n• Online/Distance learning support\n• Study materials & LMS\n• Library access\n• Student support\n\n**Location:**\n• City advantages\n• Industry proximity\n• Living costs\n\n**Example:** \"Compare Amity and NMIMS for MBA\"\n\nWhich universities would you like to compare?";
        }
        
        if (conversationContext === 'placement_focus') {
          return "💼 **Universities with Strong Placements**\n\n**For MBA:**\n1. **NMIMS** - Avg: ₹12-15 LPA | Highest: ₹50+ LPA\n   Top Recruiters: McKinsey, Goldman Sachs, Amazon\n\n2. **Symbiosis** - Avg: ₹8-10 LPA | Highest: ₹30+ LPA\n   500+ companies, Strong alumni network\n\n3. **Amity** - Avg: ₹4.5 LPA | Highest: ₹25 LPA\n   TCS, Wipro, Deloitte, Amazon\n\n**For B.Tech:**\n1. **Manipal** - Avg: ₹5-8 LPA | Highest: ₹25+ LPA\n   Google, Microsoft, Amazon\n\n2. **VIT** - Avg: ₹6-9 LPA | Highest: ₹40+ LPA\n   Top tech companies\n\n3. **Amity** - Avg: ₹4-6 LPA | Highest: ₹20 LPA\n   IT sector focus\n\n**Placement Support Includes:**\n✓ Resume building workshops\n✓ Mock interviews\n✓ Aptitude training\n✓ Soft skills development\n✓ Campus recruitment drives\n\nInterested in any specific university?";
        }

        if (conversationContext === 'specialization_choice') {
          return "🎯 **Help me understand your goals:**\n\n**For Business/Management (MBA):**\n• Finance - Banking, Investment, CFO roles\n• Marketing - Brand Management, Digital Marketing\n• HR - Talent Management, Organizational Development\n• Operations - Supply Chain, Logistics\n• Business Analytics - Data-driven decisions\n\n**For Technology (B.Tech):**\n• Computer Science - Software Development, AI/ML\n• Electronics - Embedded Systems, IoT\n• Mechanical - Automobile, Manufacturing\n• Civil - Construction, Infrastructure\n\n**Questions to consider:**\n1. What industry interests you?\n2. Do you prefer technical or business roles?\n3. Are you good with numbers/coding?\n4. Want creative or analytical work?\n\nTell me about your interests, and I'll suggest the best fit!";
        }
      }

      // Handle negative responses
      const negativeWords = ['no', 'nope', 'not', "don't", 'different'];
      const isNegative = negativeWords.some(word => question.includes(word)) && question.split(' ').length <= 5;

      if (isNegative) {
        setConversationContext(null);
        return "No problem! 😊\n\nWhat else would you like to know about?\n\n💡 I can help with:\n• Course fees & details\n• University comparisons\n• Admission requirements\n• Career guidance\n• Study modes (Online/Distance/Regular)\n• Location-specific information\n\nJust ask away!";
      }

      // Handle state name responses when context is awaiting state
      if (conversationContext === 'awaiting_state') {
        const stateResponses = {
          'maharashtra': "💰 **Distance MBA Fees in Maharashtra**\n\n**Top Universities & Fees:**\n\n1. **NMIMS (Mumbai)** - ₹90,000 - ₹1,20,000\n   • 15+ specializations (Finance, Marketing, HR)\n   • Strong Mumbai industry connections\n   • Weekend batches available\n\n2. **Symbiosis (Pune)** - ₹85,000 - ₹1,10,000\n   • 50+ years legacy\n   • Excellent faculty\n   • Industry mentorship program\n\n3. **Amity University (Navi Mumbai)** - ₹1,99,000\n   • International accreditation\n   • UGC-DEB approved\n   • 100% online mode\n\n4. **D.Y. Patil University** - ₹75,000 - ₹95,000\n   • Flexible payment options\n   • Healthcare management specialty\n\n5. **MIT WPU (Pune)** - ₹80,000 - ₹1,00,000\n   • Technology-focused MBA\n   • Weekend classes\n   • Industry visits\n\n**Payment Options:**\n✓ Semester-wise (2 installments/year)\n✓ EMI available through Bajaj Finserv, HDFC Credila\n✓ Education loans (80% fee coverage)\n\n**What's Included:**\n✓ Study materials & e-books\n✓ Online classes (live + recorded)\n✓ LMS access\n✓ Exam fees\n✓ E-library\n\n**Not Included:**\n✗ Convocation fee (₹2000-5000)\n✗ Caution deposit (refundable)\n\nWant details about a specific university or specialization?",
          
          'karnataka': "💰 **MBA Fees in Karnataka**\n\n**Bangalore (Top Choice):**\n\n1. **Jain University Online** - ₹1,20,000 - ₹1,80,000\n   • 100% online, UGC-approved\n   • Business Analytics, Digital Marketing\n   • Live + recorded classes\n\n2. **Manipal University** - ₹1,50,000 - ₹2,50,000\n   • Healthcare MBA specialty\n   • Strong industry links\n   • International exposure\n\n3. **Christ University** - ₹2,00,000 - ₹3,00,000\n   • Premium business education\n   • Excellent placements\n   • Bangalore advantage\n\n4. **Bangalore University (Distance)** - ₹40,000 - ₹60,000\n   • Most affordable\n   • Government university\n   • UGC-DEB approved\n\n**Why Bangalore:**\n✓ Silicon Valley of India\n✓ Highest tech job opportunities\n✓ Startup ecosystem for entrepreneurs\n✓ International companies: Google, Amazon, Microsoft\n\n**Average Placements:** ₹5-12 LPA\n\nInterested in any specific university?",
          
          'delhi': "💰 **MBA Fees in Delhi NCR**\n\n**Delhi:**\n\n1. **Delhi University (DU)** - ₹50,000 - ₹80,000\n   • Premier institution\n   • Government fees\n   • Excellent faculty\n\n2. **IGNOU** - ₹35,000 - ₹55,000\n   • Largest open university\n   • Most affordable\n   • Nationwide recognition\n\n**Noida:**\n\n3. **Amity University** - ₹1,99,000\n   • Premium private university\n   • Strong placements\n   • Industry connections\n\n4. **Sharda University** - ₹1,50,000 - ₹2,00,000\n   • International programs\n   • Modern infrastructure\n\n**Gurgaon:**\n\n5. **GD Goenka** - ₹1,80,000\n   • Business-focused\n   • Corporate tie-ups\n\n**NCR Advantages:**\n✓ Capital city opportunities\n✓ Top MNC headquarters\n✓ Government job proximity\n✓ Networking opportunities\n\n**Placement Range:** ₹4-15 LPA\n\nNeed more details on any university?",
          
          'tamil nadu': "💰 **MBA Fees in Tamil Nadu**\n\n**Chennai:**\n\n1. **Anna University (Distance)** - ₹45,000 - ₹65,000\n   • Engineering-focused MBA\n   • Government university\n   • Technical management\n\n2. **SRM University** - ₹1,50,000 - ₹2,00,000\n   • Private leader\n   • Strong alumni network\n   • Good placements\n\n3. **VIT Business School** - ₹2,00,000 - ₹3,00,000\n   • Top-ranked\n   • International tie-ups\n   • Excellent faculty\n\n**Coimbatore:**\n\n4. **Amrita University** - ₹1,80,000\n   • Research-focused\n   • Spiritual foundation\n   • Value-based education\n\n**Industries:**\n✓ Automobile (Ford, Hyundai, Ashok Leyland)\n✓ Manufacturing\n✓ IT Services\n✓ Textiles\n\n**Average Package:** ₹4-8 LPA\n\nWant to know about specific specializations?",
          
          'uttar pradesh': "💰 **MBA Fees in Uttar Pradesh**\n\n**Noida (Part of NCR):**\n\n1. **Amity University** - ₹1,99,000\n   • Premium education\n   • Delhi NCR advantage\n   • Top recruiters\n\n2. **Galgotias University** - ₹1,50,000\n   • Technology-focused MBA\n   • Good placements\n\n**Lucknow:**\n\n3. **Lucknow University (Distance)** - ₹35,000 - ₹50,000\n   • Most affordable\n   • Government university\n   • UGC-approved\n\n4. **Integral University** - ₹80,000 - ₹1,20,000\n   • Modern campus\n   • Industry partnerships\n\n**Allahabad:**\n\n5. **Allahabad University** - ₹40,000 - ₹60,000\n   • Historic institution\n   • Government fees\n\n**Benefits:**\n✓ Lower living costs than metros\n✓ Growing IT sector\n✓ Government initiatives\n\n**Placement Range:** ₹3-8 LPA\n\nInterested in any particular city?",
          
          'gujarat': "💰 **MBA Fees in Gujarat**\n\n**Ahmedabad:**\n\n1. **IIM Ahmedabad** - ₹25,00,000+ (2 years)\n   • India's #1 B-School\n   • World-class faculty\n   • Highest placements (₹25+ LPA avg)\n\n2. **Nirma University** - ₹3,00,000 - ₹5,00,000\n   • Premium private university\n   • Strong industry links\n   • Pharma & business focus\n\n3. **Gujarat University (Distance)** - ₹40,000 - ₹60,000\n   • Government university\n   • Affordable option\n\n**Gandhinagar:**\n\n4. **Pandit Deendayal University** - ₹50,000 - ₹80,000\n   • Government institution\n   • Good infrastructure\n\n**Why Gujarat:**\n✓ Business-friendly state\n✓ Pharma & chemical industries\n✓ Entrepreneurship culture\n✓ Diamond & jewelry sector\n✓ Lower fees vs metros\n\n**Average Package:** ₹4-12 LPA\n\nWant to compare universities?",
        };

        setConversationContext(null); // Reset context after providing state info
        
        for (const [state, response] of Object.entries(stateResponses)) {
          if (question.includes(state)) {
            return response;
          }
        }
        
        return "I can provide fees for:\n• Maharashtra\n• Karnataka (Bangalore)\n• Delhi NCR\n• Tamil Nadu\n• Uttar Pradesh\n• Gujarat\n\nWhich state would you like to know about?";
      }
    }

    // Regular knowledge base responses (same as before but with context tracking)

    // PRIORITY: University Connection Questions - Direct YES with action
    if ((question.includes('can') || question.includes('will') || question.includes('does')) && 
        (question.includes('connect') || question.includes('help me get') || question.includes('admission')) && 
        (question.includes('university') || question.includes('amity') || question.includes('ignou') || 
         question.includes('manipal') || question.includes('jain') || question.includes('nmims') || 
         question.includes('symbiosis') || question.includes('dy patil') || question.includes('lpu'))) {
      
      // Extract university name if mentioned
      let universityName = 'that university';
      if (question.includes('amity')) universityName = 'Amity University';
      else if (question.includes('ignou')) universityName = 'IGNOU';
      else if (question.includes('manipal')) universityName = 'Manipal University';
      else if (question.includes('jain')) universityName = 'Jain University';
      else if (question.includes('nmims')) universityName = 'NMIMS';
      else if (question.includes('symbiosis')) universityName = 'Symbiosis';
      else if (question.includes('dy patil')) universityName = 'DY Patil University';
      else if (question.includes('lpu')) universityName = 'LPU';
      
      return `Yeah absolutely! We work with ${universityName} and can totally connect you. 😊\n\nHere's what I'll do:\n1. Get one of our admission counselors to call you\n2. They'll share detailed program info, fees, and eligibility\n3. Help you with the entire admission process\n\nJust drop your number in the 'Talk to Experts' section on the homepage, or you can WhatsApp us at +91-9076114175 and say you want info about ${universityName}.\n\nWhich program are you interested in - MBA, B.Tech, BCA, or something else?`;
    }

    // Navigation & Website Help
    if (question.includes('navigate') || question.includes('find') && question.includes('page') || question.includes('where is') || question.includes('how to reach') || question.includes('go to')) {
      return "🧭 **Website Navigation Guide**\n\n**Main Sections:**\n\n1️⃣ **Home Page** - Overview & Features\n   • Hero carousel with programs\n   • Quick course categories\n   • Video testimonials\n\n2️⃣ **University Matcher** (AI-Powered)\n   • Click 'Find Your Match' button\n   • Answer 9 simple questions\n   • Get personalized recommendations\n\n3️⃣ **Browse Categories** - All Courses\n   • PG Programs (MBA, M.Tech, MCA)\n   • UG Programs (BBA, B.Tech, BCA)\n   • Executive Education\n   • Doctorate & Diploma\n\n4️⃣ **Course Details Page**\n   • Universities offering that course\n   • Fees, ratings, locations\n   • Video insights\n   • Loan partner information\n\n5️⃣ **Compare Universities**\n   • Select up to 5 universities\n   • Side-by-side comparison\n   • Detailed fee breakdown\n\n6️⃣ **Expert Counseling**\n   • Scroll to 'Talk to Our Experts'\n   • Fill form or call directly\n   • Free consultation\n\n**Quick Tips:**\n• Use search to find specific courses\n• Header is sticky for easy navigation\n• MBA NINJA button for AI assistance\n• MBANinjAI (that's me!) on every page\n\nWhat specific page are you looking for?";
    }

    // About MBA NINJA Portal - ENHANCED
    if (question.includes('mba ninja') || question.includes('what is this') || question.includes('about this website') || question.includes('about this platform') || question.includes('what does this site do')) {
      return "Hey there! Welcome to **MBA NINJA**! 👋\n\nSo you're probably wondering what this whole thing is about, right? Let me break it down for you:\n\n**What's MBA NINJA?**\nThink of us as your personal university matchmaker! We're an AI-powered platform that helps you find the perfect university and course for YOUR goals and budget.\n\n**Here's what makes us cool:**\n\n🎯 **Smart Matching System**\nYou answer 9 simple questions, and boom - our AI finds universities that actually fit what you're looking for. No random suggestions!\n\n📊 **Curated Database**\nWe've got info on **166 carefully selected universities** (153 in India, 13 abroad) and 100+ courses across UG, PG, MBA, Engineering - all verified and partnered with us.\n\n⚠️ **Important Note:**\nI only provide information about universities **listed on our MBA NINJA portal**. If you ask about universities not in our database, I can't help with those - but I can guide you to our partnered universities that match your needs!\n\n💰 **Real Talk on Fees**\nWe show you actual fees from our partner universities, help you compare, and can even connect you with loan options if needed.\n\n👥 **Free Expert Help**\nNot sure about something? Our counselors are here to chat - completely free. No charges, no BS.\n\n**Who are we?**\nMBA NINJA is powered by Educativo (founded in 2023), which is part of the Audentia Group (established in 2010). So while MBA NINJA itself is new, we're backed by a parent company with 15+ years of experience in the education sector.\n\n**Why trust us?**\n• We're actually unbiased - we recommend from our verified partner universities\n• Everything is transparent - no hidden charges\n• We support you even after admission (yes, really!)\n• 24/7 student support because we know panic doesn't follow office hours 😅\n\n**Where we're based:**\nOur main office is in Mumbai, but we help students all across India!\n\nSo basically, whether you're confused about which MBA to pick, want to compare engineering colleges, or just need someone to explain this whole admission process - we've got you! 💪\n\nWhat would you like help with?";
    }

    // About Educativo.in (Parent Company) - ENHANCED
    if (question.includes('educativo') || question.includes('educativo.in') || question.includes('parent company') || question.includes('who owns') || question.includes('company behind') || question.includes('www.educativo')) {
      return "Hey! So you want to know about Educativo? Let me tell you!\n\nEducativo (www.educativo.in) is our parent company - they're the team behind this MBA NINJA platform you're using right now. 😊\n\n**When it started:**\nEducativo was founded in **2023** (pretty recent!), but don't let that fool you - the parent company Audentia Group has been around since **2010**, so there's solid experience backing us.\n\n**What they do:**\nThey're all about making education accessible for everyone in India. Think of them as your education counselor, admission guide, and career advisor all rolled into one!\n\n• Help students find the right universities and courses\n• Guide you through the entire admission process\n• Connect you with **166 partner universities** (carefully selected and verified!)\n• Assist with education loans and scholarships\n• Even help with study abroad programs\n\n**Important:**\nWe only provide information and admissions support for universities that are **officially partnered** with Educativo/MBA NINJA. This ensures quality, verified information, and proper admission support.\n\n**The Family:**\nEducativo is part of the Audentia Group (est. 2010), which also has:\n- Audentia Research (market research wizards) - founded 2010\n- Audentia Financial Services (tax & accounting experts)\n\nSo basically, whether you need university info, career guidance, or financial help for your education - they've got your back!\n\n**Where are they?**\nHead office is in Mumbai. We work with students across India though - that's the beauty of online platforms! 🌏\n\nWant to know more about any specific service?";
    }

    // About Audentia Group - ENHANCED with better keyword matching
    if (question.includes('audentia group') || 
        (question.includes('audentia') && !question.includes('research') && !question.includes('financial')) ||
        question.includes('what is audentia') ||
        question.includes('tell me about audentia') ||
        question.includes('know about audentia') ||
        question.includes('audentia company')) {
      return "Oh, Audentia Group! That's the big family we're part of. 🏢\n\n**Founded:** 2010 (so yeah, they've been around for 15 years now!)\n**HQ:** Mumbai\n\nAudentia Group is basically a group of companies working together in different fields.\n\n**The family has three main businesses:**\n\n1. **Audentia Research** (founded 2010 - the OG! 📊)\nThese guys do market research and analytics. They study education trends, student preferences, university rankings - basically all the data that helps us give you better recommendations!\n\n2. **Educativo.in** (founded 2023 - that's us! 🎓)\nThe education division - helping students like you find universities, get admissions, career guidance, the whole package. Check out www.educativo.in\n\n3. **Audentia Financial Services** (tax & accounting experts 💼)\nThey help businesses and individuals with tax consultation, GST compliance, accounting, financial auditing, and business incorporation. Professional CA & tax experts!\n\n**Why does this matter to you?**\nBecause we're all working together! When you use MBA NINJA:\n- You get smart recommendations powered by Audentia Research's data (15 years of research!)\n- You get end-to-end support from the Educativo team\n- If you need education loans, our counselors connect you with partner banks\n\nIt's like having an entire ecosystem supporting your education journey! Pretty cool, right? 😊\n\n**Their vibe:**\n\"Excellence through Innovation, Trust through Transparency\" - basically, they believe in using technology to help people while being completely honest about everything.\n\nWant to know more about any specific part?";
    }

    // About Audentia Research - NEW
    if (question.includes('audentia research') || question.includes('research division')) {
      return "📊 **Audentia Research**\n\n**Division:** Market Research & Business Intelligence\n**Parent:** Audentia Group\n\n**🔍 What Audentia Research Does:**\n\n**Core Services:**\n✓ Market research & consumer behavior analysis\n✓ Industry trend forecasting\n✓ Competitive intelligence\n✓ Data analytics & visualization\n✓ Custom research studies\n✓ Business advisory & consulting\n\n**🎓 Education Sector Focus:**\n• University ranking methodologies\n• Student preference studies\n• Education market trends\n• Course demand analysis\n• Placement trend research\n• Fee benchmarking studies\n\n**💼 Corporate Services:**\n• Brand perception studies\n• Product launch research\n• Customer satisfaction surveys\n• Market sizing & forecasting\n• Strategic advisory\n\n**🤝 Integration with Educativo:**\n• Provides data for MBA NINJA's AI matching\n• University performance analytics\n• Student outcome tracking\n• Course popularity trends\n• Helps optimize student recommendations\n\n**📈 Research Capabilities:**\n• Quantitative & Qualitative research\n• Big data analytics\n• Predictive modeling\n• Industry reports\n\n**Why Audentia Research Matters to You:**\nTheir insights power MBA NINJA's smart recommendations, ensuring you get matched with universities based on real data, trends, and student success metrics!\n\nNeed information about our other group companies?";
    }

    // About Audentia Financial Services - Tax & Accounting Firm
    if (question.includes('audentia financial') || question.includes('financial services') || question.includes('tax') || question.includes('accounting')) {
      return "� Audentia Financial Services\n\nDivision: Tax & Accounting Services\nParent: Audentia Group\n\n� What Audentia Financial Does:\n\nAudentia Financial Services is a professional TAX AND ACCOUNTING firm, NOT a lending institution. They specialize in:\n\nCore Services:\n✓ Tax consultation & filing (Individual & Corporate)\n✓ Accounting & bookkeeping services\n✓ GST compliance & returns\n✓ Income tax planning & advisory\n✓ Financial auditing\n✓ Business incorporation & compliance\n✓ TDS/TCS consultation\n\n📊 Who They Serve:\n• Small & medium businesses\n• Startups & entrepreneurs\n• Individual taxpayers\n• Corporate entities\n• Educational institutions (for financial compliance)\n\n🎯 Why Businesses Choose Them:\n✓ Expert CA & tax professionals\n✓ Timely tax filing & compliance\n✓ Cost-effective accounting solutions\n✓ Audit-ready documentation\n✓ GST & regulatory expertise\n✓ Transparent fee structure\n\n📍 Office:\n• Mumbai (Main office)\n• Serving clients pan-India\n\n💡 Fun Fact:\nWhile Audentia Financial handles tax and accounting, if you need help with EDUCATION LOANS for your courses, our counselors at Educativo can connect you with partner banks like HDFC Credila, Bajaj Finserv, and others!\n\nNeed tax or accounting help? Or looking for education financing instead?";
    }

    // Contact & Support
    if (question.includes('contact') || question.includes('phone') || question.includes('email') || question.includes('reach you') || question.includes('customer care')) {
      return "📞 **Contact MBA NINJA**\n\n**Get in Touch:**\n📱 Phone: +91-9076114175\n📧 Email: info@educativo.in\n🌐 Website: www.educativo.in\n\n**Our Experts:**\nTalk to our education counselors:\n• Arshad Farooqui - Admission Expert\n• Asad Farooqui - Career Advisor\n\n**Working Hours:**\nMon-Sat: 9:00 AM - 7:00 PM\nSun: 10:00 AM - 5:00 PM\n\n**Social Media:**\n• LinkedIn, Facebook, Instagram\n• WhatsApp Support Available\n\nHow can we help you today?";
    }

    // Services Offered
    if (question.includes('service') || question.includes('what do you offer') || question.includes('what can you do') || question.includes('help me with')) {
      return "🎯 **Our Services**\n\n**1. University Matcher (AI-Powered)**\n   Answer 9 questions → Get perfect matches\n   Based on your budget, location, course preferences\n\n**2. Expert Counseling**\n   Free consultation with education experts\n   Career guidance & course selection\n\n**3. University Comparison**\n   Compare fees, ratings, placements\n   Side-by-side analysis\n\n**4. Admission Assistance**\n   Application help\n   Document verification\n   Form filling support\n\n**5. Scholarship Guidance**\n   Find available scholarships\n   Application support\n\n**6. EMI/Loan Assistance**\n   Education loan guidance\n   EMI options\n\nAll services are FREE for students!";
    }

    // How University Matcher Works
    if (question.includes('how') && (question.includes('matcher') || question.includes('work') || question.includes('use'))) {
      return "🎯 **How University Matcher Works**\n\n**Step-by-Step Process:**\n\n1️⃣ **Choose Degree Level**\n   UG, PG, Doctorate, Executive Education\n\n2️⃣ **Select Your Course**\n   MBA, B.Tech, BCA, MCA, etc.\n\n3️⃣ **Pick Specialization**\n   Based on your chosen course\n\n4️⃣ **Education Background**\n   Current status & work experience\n\n5️⃣ **Study Mode Preference**\n   Online, Distance, Regular, Hybrid\n\n6️⃣ **Location Choice**\n   Any state across India\n\n7️⃣ **Budget Range**\n   Your fee comfort zone\n\n8️⃣ **Career Goals**\n   Industry & salary expectations\n\n9️⃣ **Timeline**\n   When you want to start\n\n**Result:** Get matched universities ranked by fit score!\n\nReady to try it?";
    }

    // Fees-related queries
    if (question.includes('fee') || question.includes('cost') || question.includes('price') || question.includes('charge')) {
      // Distance MBA in Maharashtra specific
      if (question.includes('distance') && question.includes('mba') && question.includes('maharashtra')) {
        return "� **Distance MBA Fees in Maharashtra**\n\n**Top Universities & Fees:**\n\n1. **NMIMS (Mumbai)** - ₹90,000 - ₹1,20,000\n   Specializations: 15+ including Finance, Marketing, HR\n\n2. **Symbiosis (Pune)** - ₹85,000 - ₹1,10,000\n   Strong industry connections\n\n3. **Amity University (Navi Mumbai)** - ₹1,99,000\n   International accreditation\n\n4. **D.Y. Patil University** - ₹75,000 - ₹95,000\n   Flexible payment options\n\n5. **MIT WPU (Pune)** - ₹80,000 - ₹1,00,000\n   Weekend batches available\n\n**Payment Options:**\n✓ Semester-wise\n✓ EMI available\n✓ Education loans\n\nWant details on a specific university?";
      }
      
      if (question.includes('mba')) {
        setConversationContext('state_fees'); // Set context for follow-up
        return "📊 **MBA Fees - Complete Guide**\n\n**By Study Mode:**\n• Distance MBA: ₹37,000 - ₹2,00,000\n• Online MBA: ₹45,000 - ₹3,00,000\n• Regular MBA: ₹1,50,000 - ₹20,00,000\n• Executive MBA: ₹2,50,000 - ₹25,00,000\n\n**Popular Universities:**\n• Amity: ₹1,99,000 (Online/Distance)\n• NMIMS: ₹3,00,000+ (Regular)\n• Symbiosis: ₹2,50,000+\n• Manipal: ₹1,50,000 - ₹2,50,000\n• Jain: ₹1,20,000 - ₹1,80,000\n\n**What's Included:**\n✓ Study materials\n✓ Online resources\n✓ Exam fees\n✓ E-library access\n\n**Not Included:**\n✗ Hostel (if applicable)\n✗ Caution deposit\n\nNeed state-specific fees?";
      }
      
      if (question.includes('btech') || question.includes('b.tech') || question.includes('engineering')) {
        return "🔧 **B.Tech Fees Overview**\n\n**By Mode:**\n• Distance B.Tech: ₹80,000 - ₹4,00,000\n• Online B.Tech: ₹1,00,000 - ₹5,00,000\n• Regular B.Tech: ₹2,00,000 - ₹15,00,000\n\n**By Specialization:**\n• Computer Science: Higher demand = Higher fees\n• Electronics: ₹2,50,000 - ₹8,00,000\n• Mechanical: ₹2,00,000 - ₹7,00,000\n• Civil: ₹1,80,000 - ₹6,00,000\n\n**Top Colleges:**\n• Amity: ₹2,50,000/year\n• LPU: ₹1,80,000/year\n• Chandigarh University: ₹1,60,000/year\n• Manipal: ₹3,50,000/year\n\n**Duration:** 4 years\n**Payment:** Semester/Annual\n\nWhich specialization interests you?";
      }
      
      if (question.includes('bca') || question.includes('mca')) {
        return "� **BCA/MCA Fees Guide**\n\n**BCA (3 years):**\n• Distance: ₹20,000 - ₹60,000\n• Online: ₹30,000 - ₹80,000\n• Regular: ₹50,000 - ₹2,00,000/year\n\n**MCA (2 years):**\n• Distance: ₹30,000 - ₹1,00,000\n• Online: ₹38,000 - ₹1,20,000\n• Regular: ₹70,000 - ₹3,00,000/year\n\n**Popular Choices:**\n• Amity: BCA ₹1,50,000 | MCA ₹1,70,000\n• Manipal: BCA ₹1,80,000 | MCA ₹1,50,000\n• Jain: BCA ₹90,000 | MCA ₹1,20,000\n\n**Career Prospects:**\n• Software Developer: ₹3-8 LPA\n• Data Analyst: ₹4-10 LPA\n• System Administrator: ₹3-6 LPA\n\nWant to compare universities?";
      }
      
      return "💰 **Course Fees Information**\n\nI can help you with fees for:\n• MBA (Distance/Online/Regular)\n• B.Tech (All specializations)\n• BCA/MCA (Computer Applications)\n• BBA/B.Com (Commerce)\n• M.Com/MA (Postgraduate)\n\n**Query Examples:**\n• \"Distance MBA fees in Maharashtra\"\n• \"B.Tech Computer Science fees\"\n• \"Cheapest MCA programs\"\n• \"Amity University MBA fees\"\n\nWhat specific course are you interested in?";
    }

    // University-specific queries (CHECK THESE FIRST - before state/course queries)
    if (question.includes('dy patil') || question.includes('d.y. patil') || question.includes('dyp')) {
      return "🏥 **D.Y. Patil University**\n\n**Location:** Mumbai & Pune, Maharashtra\n**Type:** Private University\n**Established:** 2003\n**Specialization:** Healthcare & Management\n\n**Popular Courses:**\n• MBA (Distance) - ₹75,000 - ₹95,000\n• MBBS, BDS (Medical)\n• B.Tech (Engineering)\n• BBA, BCA (Commerce & IT)\n\n**Why D.Y. Patil:**\n✓ Strong in medical education\n✓ Healthcare management specialty\n✓ Flexible payment options\n✓ Weekend batches available\n✓ Industry-oriented curriculum\n\n**Placements:**\n• Average: ₹3.5-6 LPA\n• Healthcare sector focus\n• Hospital tie-ups\n\n**Approvals:**\nUGC, AICTE, NAAC A\n\n**Campuses:**\n• Navi Mumbai (Main)\n• Pune\n• Multiple hospital affiliations\n\nWant to know about specific programs?";
    }

    if (question.includes('amity')) {
      return "🎓 **Amity University**\n\n**Campuses:** Noida, Mumbai, Jaipur, Lucknow\n**Type:** Private University\n**Established:** 2005\n**Ranking:** NIRF 32, NAAC A+\n\n**Popular Courses:**\n• MBA - ₹1,99,000 (Online/Distance)\n• B.Tech - ₹2,50,000/year\n• BCA/MCA - ₹1,50,000/₹1,70,000\n\n**Specializations:**\n• 200+ programs\n• International collaborations\n• Industry-integrated curriculum\n\n**Placements:**\n• Average: ₹4.5 LPA\n• Highest: ₹25 LPA\n• Top recruiters: TCS, Wipro, Amazon\n\n**Approvals:**\nUGC, AICTE, WES, QS, DEC\n\n**Why Choose Amity:**\n✓ Strong brand value\n✓ Pan-India presence\n✓ Global partnerships\n✓ Flexible study modes\n\nWant admission details?";
    }

    if (question.includes('nmims')) {
      return "🎯 **NMIMS University**\n\n**Location:** Mumbai (Main), Multiple campuses\n**Type:** Deemed-to-be University\n**Ranking:** Top 10 private universities\n**Established:** 1981\n\n**Popular Programs:**\n• MBA - ₹3,50,000 - ₹5,00,000\n• B.Tech - ₹3,25,000/year\n• BBA/B.Com - ₹2,50,000/year\n\n**Specializations:**\n• Finance, Marketing, HR\n• Analytics, Digital Marketing\n• Operations Management\n\n**Placements:**\n• Average: ₹8-12 LPA\n• Highest: ₹25-30 LPA\n• Top companies: McKinsey, BCG, Deloitte\n\n**Why NMIMS:**\n✓ Premium brand value\n✓ Mumbai location advantage\n✓ Excellent faculty\n✓ Strong alumni network\n\n**Approvals:**\nUGC, AICTE, NAAC A+\n\nInterested in application process?";
    }

    if (question.includes('symbiosis')) {
      return "🏛️ **Symbiosis International University**\n\n**Location:** Pune, Maharashtra\n**Type:** Deemed University\n**Established:** 1971\n**Ranking:** NIRF 25, NAAC A++\n\n**Popular Courses:**\n• MBA - ₹3,00,000 - ₹4,50,000\n• BBA - ₹2,75,000/year\n• Law (BA LLB) - ₹2,50,000/year\n\n**Why Symbiosis:**\n✓ Premium education\n✓ International exposure\n✓ Multiple specializations\n✓ Strong industry connect\n\n**Placements:**\n• Average: ₹6-9 LPA\n• Highest: ₹20 LPA\n• Recruiters: KPMG, EY, Cognizant\n\n**Campuses:**\n• Pune (7 campuses)\n• Bangalore, Hyderabad, Noida\n\n**Approvals:**\nUGC, AICTE, BCI, NAAC A++\n\nWant course-specific details?";
    }

    if (question.includes('manipal')) {
      return "🏥 **Manipal Academy of Higher Education**\n\n**Location:** Manipal, Karnataka + Multiple cities\n**Type:** Deemed University\n**Established:** 1953\n**Ranking:** NIRF 4 (Overall)\n\n**Strong Programs:**\n• MBBS, BDS (Medical)\n• B.Tech - ₹2,50,000/year\n• MBA - ₹4,00,000 - ₹6,00,000\n• Online MBA - ₹1,50,000 - ₹2,00,000\n\n**Specializations:**\n• Healthcare Management\n• Engineering (All branches)\n• Data Science, AI/ML\n\n**Why Manipal:**\n✓ Medical education leader\n✓ 28,000+ students\n✓ International campuses\n✓ Research excellence\n\n**Placements:**\n• Average: ₹5-8 LPA\n• Medical: ₹8-12 LPA\n• Top packages: ₹25 LPA\n\n**Approvals:**\nUGC, NAAC A++, MCI\n\nNeed admission guidance?";
    }

    if (question.includes('jain')) {
      return "🎓 **Jain University**\n\n**Location:** Bangalore, Karnataka\n**Type:** Deemed University\n**Established:** 1990\n**Ranking:** NAAC A++\n\n**Popular Online Programs:**\n• MBA (Distance) - ₹1,20,000 - ₹1,50,000\n• BBA (Online) - ₹90,000\n• MCA (Distance) - ₹1,00,000\n\n**Why Jain Online:**\n✓ Affordable distance programs\n✓ UGC-approved online degrees\n✓ Flexible learning\n✓ Industry-relevant curriculum\n\n**Placements:**\n• Average: ₹3.5-5 LPA\n• Online program placements available\n• Job assistance provided\n\n**Approvals:**\nUGC, AICTE, NAAC A++\n\n**Best For:**\n• Working professionals\n• Career changers\n• Budget-conscious students\n\nWant to compare with other online programs?";
    }

    // State-specific queries (NOW CHECKED AFTER UNIVERSITY QUERIES)
    if (question.includes('maharashtra') || question.includes('mumbai')) {
      return "🏙️ **Universities in Maharashtra**\n\n**Mumbai:**\n• NMIMS - Top ranked, Strong placements\n• Amity (Navi Mumbai) - International programs\n• D.Y. Patil - Medical & Engineering\n• Mumbai University - Distance programs\n\n**Pune:**\n• Symbiosis - Premium education\n• MIT WPU - Technology focused\n• Savitribai Phule Pune University\n• FLAME University - Liberal arts\n\n**Nagpur:**\n• RTM Nagpur University\n• G.H. Raisoni - Engineering\n\n**Courses Available:**\n✓ MBA, MCA, M.Tech (PG)\n✓ B.Tech, BBA, BCA (UG)\n✓ Online & Distance programs\n\n**Why Maharashtra:**\n• IT hub (Mumbai, Pune)\n• Excellent placements\n• Industry connections\n• NAAC A+ universities\n\nNeed specific course/university details?";
    }

    if (question.includes('delhi') || question.includes('ncr')) {
      return "🏛️ **Universities in Delhi NCR**\n\n**Delhi:**\n• Delhi University (DU) - Premier institution\n• Jamia Millia Islamia - Central university\n• IGNOU - Largest open university\n• JNU - Research excellence\n\n**Noida:**\n• Amity University - Private leader\n• Galgotias University - Engineering\n• Sharda University - Healthcare focus\n\n**Gurgaon:**\n• GD Goenka University\n• K.R. Mangalam University\n• Ansal University\n\n**Courses:**\n• MBA, B.Tech, BCA, MCA\n• Law, Medicine, Design\n• Distance & Online programs\n\n**Advantages:**\n✓ Capital city opportunities\n✓ Top MNCs for placements\n✓ Government job proximity\n✓ Cultural exposure\n\nInterested in any specific university?";
    }

    if (question.includes('karnataka') || question.includes('bangalore') || question.includes('bengaluru')) {
      return "🌆 **Universities in Karnataka**\n\n**Bangalore (Tech Capital):**\n• Christ University - Arts, Management\n• Jain University - Online programs\n• Manipal University - Healthcare excellence\n• Bangalore University - Traditional programs\n• RV University - Engineering focus\n\n**Mangalore:**\n• Manipal Academy - Medical leader\n• NITK Surathkal - IIT level engineering\n\n**Mysore:**\n• University of Mysore - Oldest\n• JSS University - Research focused\n\n**Why Bangalore:**\n✓ Silicon Valley of India\n✓ Highest IT placements\n✓ Startup ecosystem\n✓ Best tech companies\n• Google, Amazon, Microsoft\n• Infosys, Wipro, TCS headquarters\n\n**Popular Courses:**\n• B.Tech (CS, IT, AI/ML)\n• MBA (Tech Management)\n• MCA (Software Development)\n\nWant placement statistics?";
    }

    if (question.includes('tamil nadu') || question.includes('chennai')) {
      return "🕌 **Universities in Tamil Nadu**\n\n**Chennai:**\n• Anna University - Engineering giant\n• University of Madras - Oldest\n• SRM University - Private leader\n• Vellore Institute (VIT) - Top ranked\n\n**Coimbatore:**\n• Amrita University - Research excellence\n• PSG College - Industry linked\n\n**Popular Programs:**\n• B.Tech (All branches)\n• MBA (Manufacturing focus)\n• B.Sc/M.Sc (Science programs)\n\n**Industries:**\n✓ Automobile (Ford, Hyundai)\n✓ Manufacturing\n✓ Textiles\n✓ IT Services\n\n**Placements:**\n• Average: ₹4-7 LPA\n• Top packages: ₹15-20 LPA\n\nNeed university comparisons?";
    }

    if (question.includes('uttar pradesh') || question.includes('lucknow') || question.includes('noida')) {
      return "🕉️ **Universities in Uttar Pradesh**\n\n**Noida (Part of NCR):**\n• Amity University - Premium\n• Galgotias - Engineering\n• Sharda - Medical sciences\n\n**Lucknow:**\n• Lucknow University\n• Integral University\n• Babu Banarasi Das University\n\n**Allahabad:**\n• Allahabad University - Historic\n• IIIT Allahabad - Technical\n\n**Kanpur:**\n• IIT Kanpur - Top engineering\n• CSJM University\n\n**Varanasi:**\n• BHU (Banaras Hindu University)\n\n**Benefits:**\n✓ Lower living costs\n✓ Good infrastructure\n✓ Growing IT sector\n✓ Government initiatives\n\nWhich city interests you?";
    }

    if (question.includes('gujarat') || question.includes('ahmedabad')) {
      return "🦁 **Universities in Gujarat**\n\n**Ahmedabad:**\n• Gujarat University\n• Nirma University - Private excellence\n• CEPT University - Architecture\n• IIM Ahmedabad - Top B-School\n\n**Gandhinagar:**\n• Pandit Deendayal University\n• Gujarat Technological University\n\n**Vadodara:**\n• MS University - Multi-disciplinary\n\n**Rajkot:**\n• Saurashtra University\n\n**Key Industries:**\n✓ Pharma & Chemicals\n✓ Textiles\n✓ Diamond & Jewelry\n✓ Manufacturing\n\n**Why Gujarat:**\n• Business-friendly state\n• Strong industrial base\n• Lower fees compared to metros\n• Growing job market\n\nInterested in specific programs?";
    }

    // Course-specific queries
    if (question.includes('mba') && !question.includes('fee')) {
      return "🎓 MBA Programs Available:\n\n**Specializations:**\n• Finance & Banking\n• Marketing & Sales\n• Human Resources\n• Operations Management\n• Business Analytics\n• International Business\n\n**Study Modes:**\n• Executive MBA (for working professionals)\n• Distance MBA\n• Online MBA\n• Regular MBA (Full-time)\n\n**Duration:** 2 years\n**Eligibility:** Graduation\n\nWhat specific MBA information do you need?";
    }

    if (question.includes('btech') || question.includes('b.tech') || question.includes('engineering')) {
      return "🔧 B.Tech Programs:\n\n**Specializations:**\n• Computer Science & Engineering\n• Electronics & Communication\n• Mechanical Engineering\n• Civil Engineering\n• Information Technology\n• Electrical Engineering\n\n**Duration:** 4 years\n**Eligibility:** 12th with PCM or Diploma\n\n**Modes:** Regular, Distance, Online\n\nNeed help choosing a specialization?";
    }

    // Study mode queries
    if (question.includes('online') || question.includes('distance')) {
      return "💻 Online & Distance Learning:\n\n**Benefits:**\n✓ Study from anywhere\n✓ Flexible schedules\n✓ Work while you study\n✓ UGC-approved degrees\n✓ Same value as regular degrees\n\n**Available for:**\n• MBA, MCA, M.Com (PG)\n• BBA, BCA, B.Com (UG)\n• Certificate courses\n\n**Top Universities:**\n• Amity University\n• NMIMS\n• Symbiosis\n• Manipal\n\nWhich program interests you?";
    }

    // Platform features
    if (question.includes('how') && (question.includes('work') || question.includes('use'))) {
      return "🎯 How MBA NINJA Works:\n\n1️⃣ **University Matcher:**\n   Answer 9 simple questions about your preferences\n\n2️⃣ **Smart Matching:**\n   Our AI finds universities that fit your needs\n\n3️⃣ **Compare & Choose:**\n   See fees, ratings, locations, approvals\n\n4️⃣ **Expert Counseling:**\n   Get free guidance from education experts\n\n5️⃣ **Easy Admissions:**\n   We help with the entire process\n\nWant to start matching now?";
    }

    // Admission queries
    if (question.includes('admission') || question.includes('eligibility') || question.includes('requirement')) {
      setConversationContext('admission_details'); // Set context for follow-up
      return "📋 General Admission Requirements:\n\n**UG Courses (BBA, BCA, B.Tech):**\n• 12th Pass (relevant stream)\n• Minimum 50% marks\n• Age: 17-25 years\n\n**PG Courses (MBA, MCA, M.Tech):**\n• Graduation in any stream\n• Minimum 50% marks\n• Work experience (for Executive programs)\n\n**Documents Needed:**\n• 10th & 12th Mark sheets\n• Graduation certificate\n• ID proof (Aadhar/PAN)\n• Passport size photos\n\nWould you like to know the detailed admission process?";
    }

    // State-wise queries (general)
    if (question.includes('state') || question.includes('location') || question.includes('where')) {
      return "📍 Universities by State:\n\nWe have universities in:\n• Maharashtra (Mumbai, Pune, Nagpur)\n• Karnataka (Bangalore, Mysore)\n• Delhi NCR (Delhi, Noida, Gurgaon)\n• Tamil Nadu (Chennai, Coimbatore)\n• Uttar Pradesh (Lucknow, Kanpur)\n• And 20+ more states!\n\nWhich state are you looking for?";
    }

    // Placement queries
    if (question.includes('placement') || question.includes('job') || question.includes('salary')) {
      setConversationContext('placement_focus'); // Set context for follow-up
      return "💼 Placement Support:\n\n**Average Packages:**\n• MBA: ₹4-12 LPA\n• B.Tech: ₹3-8 LPA\n• MCA: ₹3.5-10 LPA\n\n**Top Recruiters:**\n• TCS, Infosys, Wipro\n• Deloitte, KPMG, EY\n• Amazon, Flipkart, Google\n• HDFC, ICICI, Axis Bank\n\n**Placement Services:**\n✓ Resume building\n✓ Interview preparation\n✓ Skill development\n✓ Campus drives\n\nWant to know universities with the best placements?";
    }

    // Accreditation queries
    if (question.includes('accreditation') || question.includes('approval') || question.includes('ugc') || question.includes('aicte')) {
      return "✅ Accreditations & Approvals:\n\n**All our universities are approved by:**\n• UGC (University Grants Commission)\n• AICTE (Technical education)\n• NAAC A+/A (Quality assurance)\n• DEB (Distance Education)\n\n**Why it matters:**\n✓ Degrees are valid nationwide\n✓ Recognized for govt jobs\n✓ Eligible for higher studies\n✓ Accepted by employers\n\nWant to see specific university approvals?";
    }

    // Duration queries
    if (question.includes('duration') || question.includes('how long')) {
      return "⏱️ Program Duration:\n\n**Undergraduate (UG):**\n• BBA, BCA, B.Com: 3 years\n• B.Tech: 4 years\n• Diploma: 1-2 years\n\n**Postgraduate (PG):**\n• MBA, MCA, M.Com: 2 years\n• Executive MBA: 1-2 years\n\n**Doctorate:**\n• Ph.D: 3-5 years\n\n**Flexible Options:**\n• Part-time, Weekend batches\n• Accelerated programs available\n\nWhich program are you considering?";
    }

    // Default response for unmatched queries
    return "🤔 I'd be happy to help! I can assist you with:\n\n• **Fees:** \"What is the fee for MBA in Maharashtra?\"\n• **Courses:** \"Tell me about B.Tech programs\"\n• **Universities:** \"Best universities in Delhi\"\n• **Admissions:** \"What are MBA eligibility requirements?\"\n• **Placements:** \"What about job placements?\"\n• **Study Modes:** \"Tell me about online courses\"\n\nOr you can use our **University Matcher** to find programs that fit your needs!\n\nWhat would you like to know?";
  };

  // AI-Powered Smart Response (Hybrid Mode)
  const getSmartAIResponse = async (userQuestion, lastBotMessage) => {
    const aiEnabled = isAIEnabled();
    const question = userQuestion.toLowerCase().trim();
    
    // PRIORITY 1: Check if question is about our company, Audentia, or Educativo
    // These should ALWAYS use knowledge base (never AI)
    const companyKeywords = [
      'audentia', 'educativo', 'mba ninja', 'parent company', 'who owns',
      'company behind', 'your company', 'this website', 'this platform',
      'www.educativo', 'educativo.in', 'audentia group', 'audentia research',
      'audentia financial', 'financial services', 'research division',
      'about this site', 'what is this', 'who are you', 'your parent'
    ];
    
    const isCompanyQuestion = companyKeywords.some(keyword => question.includes(keyword));
    
    if (isCompanyQuestion) {
      console.log('Company-related question detected, using knowledge base');
      return await getKnowledgeBaseResponse(userQuestion, lastBotMessage);
    }

    // PRIORITY 2: If AI is disabled, always use knowledge base
    const responseStrategy = shouldUseAI(userQuestion);
    if (!aiEnabled || responseStrategy === 'knowledge-base') {
      return await getKnowledgeBaseResponse(userQuestion, lastBotMessage);
    }

    // PRIORITY 3: Try AI response for general education questions
    try {
      const conversationHistory = formatConversationHistory(messages);
      const aiResponse = await getAIResponse(userQuestion, conversationHistory, {
        model: 'meta-llama/Llama-3.1-8B-Instruct',
        temperature: 0.7,
        maxTokens: 500,
        topP: 0.9
      });

      return aiResponse;
      
    } catch (error) {
      console.error('AI Error:', error);
      
      // Fallback to knowledge base on AI failure
      console.log('Falling back to knowledge base...');
      return await getKnowledgeBaseResponse(userQuestion, lastBotMessage);
    }
  };

  // Verification handlers
  const handleVerificationChange = (field, value) => {
    setVerificationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNameSubmit = () => {
    if (verificationData.firstName.trim() && verificationData.lastName.trim()) {
      setVerificationStep('phone');
    }
  };

  const handlePhoneSendOtp = () => {
    if (verificationData.phone.trim().length === 10) {
      // Generate random 6-digit OTP for testing
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedPhoneOtp(otp);
      console.log('Phone OTP generated:', otp); // For testing
      alert(`OTP sent to ${verificationData.phone}!\n\nFor testing, OTP is: ${otp}`);
      setVerificationStep('phone-otp');
    }
  };

  const handlePhoneVerifyOtp = () => {
    // For testing, accept any 6-digit number
    if (verificationData.phoneOtp.trim().length === 6) {
      setVerificationStep('email');
    }
  };

  const handleEmailSendOtp = () => {
    if (verificationData.email.trim() && verificationData.email.includes('@')) {
      // Generate random 6-digit OTP for testing
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedEmailOtp(otp);
      console.log('Email OTP generated:', otp); // For testing
      alert(`OTP sent to ${verificationData.email}!\n\nFor testing, OTP is: ${otp}`);
      setVerificationStep('email-otp');
    }
  };

  const handleEmailVerifyOtp = () => {
    // For testing, accept any 6-digit number
    if (verificationData.emailOtp.trim().length === 6) {
      setIsVerified(true);
      setShowVerification(false); // Hide verification form
      setVerificationStep('complete');
      // Add welcome message after verification
      const welcomeMessage = {
        type: 'bot',
        text: `Welcome ${verificationData.firstName}! 👋 Your details have been verified. How can I help you today with your education journey?`,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // If not verified yet, show verification form instead of sending message
    if (!isVerified) {
      // Store the question they wanted to ask
      const pendingQuestion = inputValue;
      
      // Show verification form
      setShowVerification(true);
      
      // Clear input
      setInputValue('');
      
      return;
    }

    // Mark that user has asked their first question
    if (!hasAskedQuestion) {
      setHasAskedQuestion(true);
    }

    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    // Get the last bot message for context
    const lastBotMessage = messages.length > 0 && messages[messages.length - 1].type === 'bot' 
      ? messages[messages.length - 1].text 
      : null;

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');

    // Check if user wants to connect with counselor
    const counselorKeywords = [
      'yes connect', 'connect me', 'talk to counselor', 'contact counselor',
      'speak to counselor', 'counselor please', 'yes please connect',
      'connect with counselor', 'want counselor', 'need counselor'
    ];
    
    const wantsCounselor = counselorKeywords.some(keyword => 
      currentInput.toLowerCase().includes(keyword)
    ) || (currentInput.toLowerCase().trim() === 'yes' && lastBotMessage && 
         lastBotMessage.toLowerCase().includes('connect you with our counselor'));

    if (wantsCounselor) {
      setShowCounselorForm(true);
      const botMessage = {
        type: 'bot',
        text: "Great! Please fill in your details below and one of our expert counselors will reach out to you shortly. 📝",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      return;
    }

    // Check if question limit reached
    if (questionCount >= MAX_QUESTIONS) {
      setIsTyping(true);
      setTimeout(() => {
        const botMessage = {
          type: 'bot',
          text: "🎓 **You've reached your question limit!**\n\nI've helped you with 5 questions. To get more detailed information and personalized guidance for your education journey, please connect with one of our expert counselors.\n\n👨‍🎓 **Our counselors can help with:**\n• Detailed course comparisons\n• Admission process guidance\n• Fee structure & EMI options\n• Career planning & specialization advice\n• Scholarship opportunities\n\n**Ready to talk to an expert?**",
          timestamp: new Date(),
          showConnectButton: true
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 800);
      return;
    }

    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(async () => {
      const response = await getSmartAIResponse(currentInput, lastBotMessage);
      
      // Increment question count
      setQuestionCount(prev => prev + 1);
      
      // Check if this is the last question
      const isLastQuestion = questionCount + 1 >= MAX_QUESTIONS;
      
      let finalResponse = response;
      if (isLastQuestion) {
        finalResponse += "\n\n💡 **That was your 5th question!** You've used all your free questions. For more detailed guidance, please connect with one of our expert counselors for personalized assistance.";
      }
      
      const botMessage = {
        type: 'bot',
        text: finalResponse,
        timestamp: new Date(),
        showConnectButton: isLastQuestion
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset chat when closed
    setTimeout(() => {
      setMessages([]);
      setConversationContext(null);
      setShowCounselorForm(false);
      setFormSubmitted(false);
      setQuestionCount(0); // Reset question counter
      setFormData({ name: '', phone: '', email: '', city: '', state: '', course: '' });
    }, 300);
  };

  const handleReset = () => {
    setMessages([]);
    setConversationContext(null);
    setShowCounselorForm(false);
    setFormSubmitted(false);
    setQuestionCount(0); // Reset question counter
    setFormData({ name: '', phone: '', email: '', city: '', state: '', course: '' });
    setInputValue('');
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send data to your backend
    console.log('Counselor Form Submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
    
    // Add confirmation message
    const confirmationMessage = {
      type: 'bot',
      text: `✅ **Thank you for sharing your details, ${formData.name}!**\n\nOne of our counselors will connect with you shortly regarding **${formData.course}**.\n\nWe'll reach out to you on:\n📞 ${formData.phone}\n📧 ${formData.email}\n\nLooking forward to helping you with your education journey! 🎓`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, confirmationMessage]);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowCounselorForm(false);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', city: '', state: '', course: '' });
    }, 3000);
  };

  // Quick suggestion buttons - More comprehensive
  const quickSuggestions = [
    "What is MBA NINJA?",
    "Distance MBA fees in Maharashtra",
    "Tell me about Amity University",
    "How does university matcher work?",
    "B.Tech programs in Bangalore",
    "Online vs Distance learning",
    "Contact information",
    "What services do you offer?"
  ];

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* MBANinjAI Button - Robot Icon with Colorful Glow */}
      <button 
        className={styles.askEduAIButton}
        onClick={() => setIsOpen(true)}
        aria-label="MBANinjAI - Your AI Education Assistant"
        title="MBANinjAI"
      >
        <div className={styles.robotIconContainer}>
          {/* Robot Head SVG Icon */}
          <svg className={styles.robotIcon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Antenna */}
            <circle cx="32" cy="6" r="3" fill="white" className={styles.antenna}/>
            <line x1="32" y1="9" x2="32" y2="16" stroke="white" strokeWidth="2" className={styles.antennaLine}/>
            
            {/* Robot Head */}
            <rect x="16" y="16" width="32" height="28" rx="4" fill="white" className={styles.robotHead}/>
            
            {/* Eyes */}
            <circle cx="24" cy="28" r="4" fill="#1a1a2e" className={styles.eye}/>
            <circle cx="40" cy="28" r="4" fill="#1a1a2e" className={styles.eye}/>
            <circle cx="24" cy="28" r="2" fill="#667eea" className={styles.eyePupil}/>
            <circle cx="40" cy="28" r="2" fill="#667eea" className={styles.eyePupil}/>
            
            {/* Mouth/Display */}
            <rect x="22" y="36" width="20" height="4" rx="2" fill="#667eea" opacity="0.8" className={styles.mouth}/>
            
            {/* Side details */}
            <circle cx="18" cy="24" r="2" fill="#667eea" opacity="0.6"/>
            <circle cx="46" cy="24" r="2" fill="#667eea" opacity="0.6"/>
            
            {/* Ears/Sensors */}
            <rect x="12" y="24" width="4" height="8" rx="2" fill="white" opacity="0.8"/>
            <rect x="48" y="24" width="4" height="8" rx="2" fill="white" opacity="0.8"/>
            
            {/* Neck */}
            <rect x="28" y="44" width="8" height="4" fill="white" opacity="0.9"/>
          </svg>
          
          {/* Glowing particles around robot */}
          <div className={styles.glowParticle1}></div>
          <div className={styles.glowParticle2}></div>
          <div className={styles.glowParticle3}></div>
        </div>
      </button>

      {/* Video Widget - Bottom Right with Ask Button */}
      {videoVisible && (
        <div className={`${styles.videoWidget} ${videoExpanded ? styles.videoExpanded : ''}`}>
          <div className={styles.videoContainer} onClick={() => setVideoExpanded(!videoExpanded)}>
            <video 
              ref={videoRef}
              className={styles.videoElement}
              autoPlay 
              loop 
              muted={isMuted}
              playsInline
              preload="auto"
              onLoadedData={(e) => {
                // Force play when video is loaded
                e.target.play().catch(err => console.log('Video autoplay prevented:', err));
              }}
            >
              <source src="/videos/DPU 2.mp4" type="video/mp4" />
            </video>
            
            {/* Modern Close Button - Top Right */}
            <button 
              className={styles.closeWidgetButton}
              onClick={(e) => {
                e.stopPropagation();
                setVideoVisible(false);
                setVideoExpanded(false);
              }}
              title="Close video"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
            
            {/* Voice Toggle Button */}
            <button 
              className={styles.voiceToggleButton}
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
          
          {videoExpanded && (
            <button 
              className={styles.videoAskButton}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
            >
              Ask EduAI
            </button>
          )}
        </div>
      )}

      {/* Chat Popup Modal */}
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalOverlay} onClick={handleClose}></div>
          <div className={styles.modalContent}>
            {/* Chat Header - Modern Chatbot Style */}
            <div className={styles.chatHeader}>
              <div className={styles.headerLeft}>
                <div className={styles.aiAvatar}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3>MBANinjAI</h3>
                  <div className={styles.status}>
                    <div className={styles.statusDot}></div>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <div className={styles.headerActions}>
                {messages.length > 0 && (
                  <button className={styles.resetButton} onClick={handleReset} title="Reset Chat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C9.61305 21 7.49364 19.9655 6 18.3147M3 12V7M3 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
                <button className={styles.closeButton} onClick={handleClose}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className={styles.chatContainer}>
              {showVerification && !isVerified ? (
                /* Verification Flow */
                <div className={styles.verificationContainer}>
                  <div className={styles.verificationIcon}>🔐</div>
                  <h3 className={styles.verificationTitle}>Before we proceed</h3>
                  <p className={styles.verificationSubtext}>I need a few details so I can help you in a better way</p>
                  
                  {verificationStep === 'name' && (
                    <div className={styles.verificationStep}>
                      <div className={styles.formGroup}>
                        <label>First Name *</label>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          value={verificationData.firstName}
                          onChange={(e) => handleVerificationChange('firstName', e.target.value)}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Last Name *</label>
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          value={verificationData.lastName}
                          onChange={(e) => handleVerificationChange('lastName', e.target.value)}
                        />
                      </div>
                      <button 
                        className={styles.verifyButton}
                        onClick={handleNameSubmit}
                        disabled={!verificationData.firstName.trim() || !verificationData.lastName.trim()}
                      >
                        Continue →
                      </button>
                    </div>
                  )}

                  {verificationStep === 'phone' && (
                    <div className={styles.verificationStep}>
                      <p className={styles.stepInfo}>Great! Now let's verify your contact number</p>
                      <div className={styles.formGroup}>
                        <label>Contact Number *</label>
                        <input
                          type="tel"
                          placeholder="Enter 10-digit mobile number"
                          maxLength="10"
                          value={verificationData.phone}
                          onChange={(e) => handleVerificationChange('phone', e.target.value.replace(/\D/g, ''))}
                        />
                      </div>
                      <button 
                        className={styles.verifyButton}
                        onClick={handlePhoneSendOtp}
                        disabled={verificationData.phone.trim().length !== 10}
                      >
                        Send OTP
                      </button>
                    </div>
                  )}

                  {verificationStep === 'phone-otp' && (
                    <div className={styles.verificationStep}>
                      <p className={styles.stepInfo}>📱 OTP sent to {verificationData.phone}</p>
                      <div className={styles.formGroup}>
                        <label>Enter OTP *</label>
                        <input
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          maxLength="6"
                          value={verificationData.phoneOtp}
                          onChange={(e) => handleVerificationChange('phoneOtp', e.target.value.replace(/\D/g, ''))}
                        />
                      </div>
                      <button 
                        className={styles.verifyButton}
                        onClick={handlePhoneVerifyOtp}
                        disabled={verificationData.phoneOtp.trim().length !== 6}
                      >
                        Verify Phone ✓
                      </button>
                      <button 
                        className={styles.resendButton}
                        onClick={handlePhoneSendOtp}
                      >
                        Resend OTP
                      </button>
                    </div>
                  )}

                  {verificationStep === 'email' && (
                    <div className={styles.verificationStep}>
                      <p className={styles.stepInfo}>✅ Phone verified! Now let's verify your email</p>
                      <div className={styles.formGroup}>
                        <label>Email Address *</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={verificationData.email}
                          onChange={(e) => handleVerificationChange('email', e.target.value)}
                        />
                      </div>
                      <button 
                        className={styles.verifyButton}
                        onClick={handleEmailSendOtp}
                        disabled={!verificationData.email.trim() || !verificationData.email.includes('@')}
                      >
                        Send OTP
                      </button>
                    </div>
                  )}

                  {verificationStep === 'email-otp' && (
                    <div className={styles.verificationStep}>
                      <p className={styles.stepInfo}>📧 OTP sent to {verificationData.email}</p>
                      <div className={styles.formGroup}>
                        <label>Enter OTP *</label>
                        <input
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          maxLength="6"
                          value={verificationData.emailOtp}
                          onChange={(e) => handleVerificationChange('emailOtp', e.target.value.replace(/\D/g, ''))}
                        />
                      </div>
                      <button 
                        className={styles.verifyButton}
                        onClick={handleEmailVerifyOtp}
                        disabled={verificationData.emailOtp.trim().length !== 6}
                      >
                        Verify Email ✓
                      </button>
                      <button 
                        className={styles.resendButton}
                        onClick={handleEmailSendOtp}
                      >
                        Resend OTP
                      </button>
                    </div>
                  )}
                </div>
              ) : messages.length === 0 ? (
                /* Empty State - Initial or after verification */
                <div className={styles.emptyState}>
                  <div className={styles.emptyStateIcon}>🤖</div>
                  <h3 className={styles.emptyStateTitle}>
                    {isVerified ? `Hi ${verificationData.firstName}! 👋` : 'Hi there! 👋'}
                  </h3>
                  <p className={styles.emptyStateText}>
                    How can I help you today?
                  </p>
                  <p className={styles.emptyStateSubtext}>
                    Ask me anything about universities, courses, fees, admissions, or our services!
                  </p>
                </div>
              ) : (
                /* Messages */
                <div className={styles.chatMessages}>
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`${styles.messageWrapper} ${message.type === 'user' ? styles.user : ''}`}
                    >
                      <div className={`${styles.messageAvatar} ${message.type === 'user' ? styles.user : styles.ai}`}>
                        {message.type === 'bot' ? '🤖' : '👤'}
                      </div>
                      <div>
                        <div className={`${styles.messageBubble} ${message.type === 'user' ? styles.user : styles.ai}`}>
                          {message.text.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < message.text.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </div>
                        
                        {/* Show Connect button if AI suggests connecting with counselor */}
                        {message.type === 'bot' && 
                         (message.text.toLowerCase().includes('connect with') || 
                          message.text.toLowerCase().includes('talk to') ||
                          message.text.toLowerCase().includes('counselor') ||
                          message.text.toLowerCase().includes('counsellor')) && (
                          <button 
                            className={styles.connectButton}
                            onClick={() => {
                              // Dispatch custom event to open expert modal (same as "Consult Now")
                              window.dispatchEvent(new Event('openExpertModal'));
                            }}
                          >
                            📞 Connect with Counselor
                          </button>
                        )}
                        
                        <div className={styles.messageTime}>
                          {message.timestamp.toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className={styles.messageWrapper}>
                      <div className={`${styles.messageAvatar} ${styles.ai}`}>🤖</div>
                      <div className={styles.typingIndicator}>
                        <div className={styles.typingDot}></div>
                        <div className={styles.typingDot}></div>
                        <div className={styles.typingDot}></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}

              {/* Input Area */}
              <div className={styles.chatInputContainer}>
                <div className={styles.chatInputWrapper}>
                  <textarea
                    ref={inputRef}
                    className={styles.chatInput}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Ask about courses, fees, universities..."
                    rows={1}
                    disabled={false}
                  />
                  <button 
                    className={styles.sendButton}
                    onClick={handleSendMessage}
                    disabled={isTyping || !inputValue.trim()}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EduAI;

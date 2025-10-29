import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/BrowseCourses.module.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import dynamic from 'next/dynamic';

// Import AskEduAI dynamically to avoid SSR hydration issues
const AskEduAI = dynamic(() => import('../components/eduai/EduAI'), {
  ssr: false
});

export default function BrowseCourses() {
  const [activeTab, setActiveTab] = useState('PG Courses');
  const [activeStream, setActiveStream] = useState('Commerce');
  const [coursesData, setCoursesData] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleKnowMore = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  useEffect(() => {
    // Fetch courses from the comprehensive database
    const script = document.createElement('script');
    script.src = '/assets/js/comprehensive-unified-database-COMPLETE.js';
    script.async = true;
    script.onload = () => {
      if (window.coursesDatabase) {
        categorizeCourses(window.coursesDatabase);
      } else {
        console.error('coursesDatabase not found in window');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const categorizeCourses = (allCourses) => {
    console.log('📚 Total courses in database:', allCourses.length);
    
    const categorized = {
      'PG Courses': {
        'Commerce': [],
        'Science': [],
        'Arts': []
      },
      'UG Courses': {
        'Commerce': [],
        'Science': [],
        'Arts': []
      }
    };

    allCourses.forEach(course => {
      // Determine level (PG or UG)
      const level = course.level === 'Postgraduate' ? 'PG Courses' : 
                    course.level === 'Undergraduate' ? 'UG Courses' : null;
      
      if (!level) return;

      // Map course category to stream
      let stream = 'Arts'; // Default
      if (course.category === 'Management' || course.category === 'Commerce' || 
          course.category === 'Finance' || course.category === 'Marketing' || 
          course.category === 'Human Resources') {
        stream = 'Commerce';
      } else if (course.category === 'Engineering' || course.category === 'Computer Applications' || 
                 course.category === 'Data Science' || course.category === 'General') {
        stream = 'Science';
      } else if (course.category === 'Arts' || course.category === 'Law' || 
                 course.category === 'Design' || course.category === 'Media' || 
                 course.category === 'Education') {
        stream = 'Arts';
      }

      // Add course to appropriate category
      categorized[level][stream].push({
        name: course.name,
        id: course.id,
        category: course.category,
        duration: course.duration,
        fees: course.fees
      });
    });

    console.log('📊 Categorized courses:', {
      'PG Commerce': categorized['PG Courses']['Commerce'].length,
      'PG Science': categorized['PG Courses']['Science'].length,
      'PG Arts': categorized['PG Courses']['Arts'].length,
      'UG Commerce': categorized['UG Courses']['Commerce'].length,
      'UG Science': categorized['UG Courses']['Science'].length,
      'UG Arts': categorized['UG Courses']['Arts'].length
    });

    setCoursesData(categorized);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Browse All Courses - EduConnect</title>
        <meta name="description" content="Explore all available courses across universities - Commerce, Science, and Arts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.coursesSection}>
          <div className={styles.containerInner}>
            {/* Horizontal Tabs on Top - PG Courses, UG Courses */}
            <div className={styles.topTabsRow}>
              {['PG Courses', 'UG Courses'].map((tab) => (
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
              {/* Vertical Stream Tabs on Left - Commerce, Science, Arts */}
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

              {/* Course Cards on Right */}
              <div className={styles.contentColumn}>
                {coursesData[activeTab] && coursesData[activeTab][activeStream] && coursesData[activeTab][activeStream].length > 0 ? (
                  <div className={styles.streamSection}>
                    <h2 className={styles.streamTitle}>{activeStream} Courses</h2>
                    <div className={styles.courseGrid}>
                      {coursesData[activeTab][activeStream].map((course, index) => (
                        <div key={index} className={styles.courseCard}>
                          <div className={styles.courseHeader}>
                            <h3 className={styles.courseName}>{course.name}</h3>
                          </div>
                          <div className={styles.compareInfo} onClick={() => handleKnowMore(course)}>
                            <span className={styles.compareText}>Know More</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={styles.loadingState}>
                    <p>No courses available in this category</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Modal for Course Details */}
        {showModal && selectedCourse && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>×</button>
              <h2 className={styles.modalTitle}>{selectedCourse.name}</h2>
              <div className={styles.modalDetails}>
                <div className={styles.modalRow}>
                  <span className={styles.modalLabel}>📂 Category:</span>
                  <span className={styles.modalValue}>{selectedCourse.category}</span>
                </div>
                <div className={styles.modalRow}>
                  <span className={styles.modalLabel}>📅 Duration:</span>
                  <span className={styles.modalValue}>{selectedCourse.duration}</span>
                </div>
                <div className={styles.modalRow}>
                  <span className={styles.modalLabel}>💰 Fee Range:</span>
                  <span className={styles.modalValue}>
                    ₹{selectedCourse.fees?.min?.toLocaleString()} - ₹{selectedCourse.fees?.max?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <AskEduAI />
    </div>
  );
}

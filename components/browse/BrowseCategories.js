import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './BrowseCategories.module.css';

const BrowseCategories = () => {
    const [activeTab, setActiveTab] = useState('all');

    // Shuffle function to randomize array order
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Mapping from course display names to courseData.js keys
    const courseNameToId = {
        'Online MBA': 'Executive-MBA',
        '1 Year MBA Online': 'Executive-MBA',
        'Distance MBA': 'Executive-MBA',
        'Executive MBA for Working Professionals': 'Executive-MBA',
        'Online Global MBA': 'MBA-International-Business',
        'Online MCA': 'MCA-Advanced',
        'M.Tech': 'MTech-CSE',
        'Online M.Sc': 'MSc-CS',
        'MS Degree Online': 'MSc-CS',
        'Online MA': 'MA-English',
        'Online M.Com': 'MCom-Advanced',
        'Online Master of Design': 'M-Design',
        'Dual MBA Online': 'Executive-MBA',
        'Online MBA after Diploma': 'Executive-MBA',
        'Online Master of Education (M.Ed)': 'M-Ed',
        'Online Global MCA': 'MCA-Advanced',
        'Online PGDM': 'PGDM',
        'Online PG Diploma & Certificate': 'PG-Diploma-Management',
        'Distance MCA': 'MCA-Advanced',
        'Distance M.Com': 'MCom-Advanced',
        'Distance M.Sc': 'MSc-CS',
        'Distance MA': 'MA-English',
        'Online MBA Plus': 'Executive-MBA',
        'MBA in Business Analytics': 'MBA-Business-Analytics',
        'M.A. in Public Policy': 'MA-PublicPolicy',
        'M.A. in International Relations, Security, and Strategy': 'MA-PublicPolicy',
        'Online Master of Social Work': 'MA-Sociology',
        'Online MBA & Doctorate': 'Executive-MBA',
        'Online M.Ed & Ed.D': 'M-Ed',
        'Online Master of Management Studies': 'Executive-MBA',
        'Blended MBA': 'Executive-MBA',
        'Online BBA': 'BBA',
        'Online BCA': 'BCA',
        'Online B.Com': 'BCom',
        'Online BA': 'BA-Economics',
        'Distance BBA': 'BBA',
        'Distance BCA': 'BCA',
        'Distance B.Com': 'BCom',
        'Distance BA': 'BA-Economics',
        'Online B.Sc': 'BSc-CS',
        'Bachelor of Design': 'B-Design',
        // Study Abroad mappings
        'Study in USA': 'MBA-USA',
        'Study in UK': 'MSc-UK',
        'Study in Canada': 'MS-Canada',
        'Study in Australia': 'MBA-Australia',
        'Study in Germany': 'MS-Germany',
        'Study in Ireland': 'MSc-UK', // Using UK as fallback for Ireland
        'Study in Singapore': 'MSc-Singapore',
        'Global MBA Programs': 'MIM-Europe',
        // Executive Education mappings
        'IIM Online Courses': 'Mini-MBA',
        'IIIT Online Courses': 'AI-ML-Exec',
        'Data Science & Analytics': 'Data-Analytics-Exec',
        'Executive M.Tech for Working Professionals': 'MTech-CSE',
        'AI and Machine Learning': 'AI-ML-Exec',
        'Generative AI': 'AI-ML-Exec',
        'UI UX Certificate Program': 'Design-Thinking-Exec',
        'Leadership & Management': 'Exec-Leadership',
        'Finance': 'Finance-Management-Exec',
        'Marketing': 'Marketing-Analytics-Exec',
        'Human Resource (HR)': 'HR-Analytics-Exec',
        'Healthcare': 'Healthcare-Management-Exec',
        'Operations': 'Operations-Excellence-Exec',
        'Business Analytics': 'Business-Analytics-Exec',
        'Software & Technology': 'Cloud-Computing-Exec',
        'PG Diploma Applied Statistics': 'Data-Analytics-Exec',
        'IIT Courses Online': 'AI-ML-Exec',
        'Blockchain': 'Blockchain-Exec',
        'Cloud Computing': 'Cloud-Computing-Exec',
        'PG Program In Technology Management': 'Strategic-Management-Exec',
        'Big Data Engineering': 'Data-Analytics-Exec',
        'DevOps': 'Cloud-Computing-Exec',
        'Quantum Computing': 'AI-ML-Exec',
        'Digital Transformation and Innovation': 'Digital-Transformation-Exec',
        'Public Policy Management': 'Strategic-Management-Exec',
        'Cyber Security': 'Cyber-Security-Exec',
        'Executive Program in Retail Management': 'Strategic-Management-Exec',
        'Online Executive Program in Emerging Technologies': 'Digital-Transformation-Exec',
        'Online Executive PG Diploma in Sports Management': 'Strategic-Management-Exec',
        // PhD mappings
        'Online PhD Programs': 'PhD-Management',
        'Doctor of Business Administration': 'PhD-Management',
        'PhD in Management': 'PhD-Management',
        'PhD in Computer Science': 'PhD-Technology',
        'Integrated MBA & Doctorate': 'PhD-Management',
        // Advanced Diploma mappings
        'Advanced Diploma in Management': 'Mini-MBA',
        'PG Diploma in Digital Marketing': 'Digital-Marketing-Exec',
        'PG Diploma in Data Science': 'Data-Analytics-Exec',
        'PG Diploma in Finance': 'Finance-Management-Exec',
        'PG Diploma in HR Management': 'HR-Analytics-Exec',
        'Advanced Diploma in IT': 'Cloud-Computing-Exec',
        // Skilling & Certificate mappings
        'Digital Marketing Certificate': 'Digital-Marketing',
        'Financial Modeling': 'Financial-Analysis',
        'Project Management': 'Project-Management',
        'Python Programming': 'Full-Stack-Development',
        'Full Stack Development': 'Full-Stack-Development',
        'Graphic Design': 'UI-UX-Design',
        'Content Writing': 'Content-Writing',
        'SEO & SEM': 'Digital-Marketing',
        'Social Media Marketing': 'Digital-Marketing',
        'Excel Advanced': 'Financial-Analysis'
    };

    const tabs = [
        'PG Courses',
        'Executive Education',
        'Doctorate/Ph.D.',
        'UG Courses',
        'Study Abroad',
        'Advanced Diploma',
        'Skilling & Certificate'
    ];

    // Deterministic original courses (used for SSR and initial render)
    const originalCourses = {
        'PG Courses': [
            { name: 'Online MBA', link: '/courses/online-mba' },
            { name: '1 Year MBA Online', link: '/courses/one-year-mba' },
            { name: 'Distance MBA', link: '/courses/distance-mba' },
            { name: 'Executive MBA for Working Professionals', link: '/courses/executive-mba' },
            { name: 'Online Global MBA', link: '/courses/global-mba' },
            { name: 'Online MCA', link: '/courses/online-mca' },
            { name: 'M.Tech', link: '/courses/m-tech' },
            { name: 'Online M.Sc', link: '/courses/online-msc' },
            { name: 'MS Degree Online', link: '/courses/ms-degree' },
            { name: 'Online MA', link: '/courses/online-ma' },
            { name: 'Online M.Com', link: '/courses/online-mcom' },
            { name: 'Online Master of Design', link: '/courses/online-m-des' },
            { name: 'Dual MBA Online', link: '/courses/dual-mba' },
            { name: 'Online MBA after Diploma', link: '/courses/mba-after-diploma' },
            { name: 'Online Master of Education (M.Ed)', link: '/courses/online-med' },
            { name: 'Online Global MCA', link: '/courses/global-mca' },
            { name: 'Online PGDM', link: '/courses/pgdm-online' },
            { name: 'Online PG Diploma & Certificate', link: '/courses/pg-diploma-certificate' },
            { name: 'Distance MCA', link: '/courses/distance-mca' },
            { name: 'Distance M.Com', link: '/courses/distance-mcom' },
            { name: 'Distance M.Sc', link: '/courses/distance-msc' },
            { name: 'Distance MA', link: '/courses/distance-ma' },
            { name: 'Online MBA Plus', link: '/courses/mba-plus' },
            { name: 'MBA in Business Analytics', link: '/courses/mba-business-analytics' },
            { name: 'M.A. in Public Policy', link: '/courses/ma-public-policy' },
            { name: 'M.A. in International Relations, Security, and Strategy', link: '/courses/ma-international-relations' },
            { name: 'Online Master of Social Work', link: '/courses/online-msw' },
            { name: 'Online MBA & Doctorate', link: '/courses/integrated-mba-doctorate' },
            { name: 'Online M.Ed & Ed.D', link: '/courses/dual-med-edd' },
            { name: 'Online Master of Management Studies', link: '/courses/online-mms' },
            { name: 'Blended MBA', link: '/courses/blended-mba' }
        ],
        'Executive Education': [
            { name: 'IIM Online Courses', link: '/courses/iim-courses' },
            { name: 'IIIT Online Courses', link: '/courses/iiit-courses' },
            { name: 'Data Science & Analytics', link: '/courses/data-science' },
            { name: 'Executive M.Tech for Working Professionals', link: '/courses/executive-mtech' },
            { name: 'AI and Machine Learning', link: '/courses/ai-ml' },
            { name: 'Generative AI', link: '/courses/generative-ai' },
            { name: 'UI UX Certificate Program', link: '/courses/ui-ux' },
            { name: 'Leadership & Management', link: '/courses/leadership' },
            { name: 'Finance', link: '/courses/finance' },
            { name: 'Marketing', link: '/courses/marketing' },
            { name: 'Human Resource (HR)', link: '/courses/hr' },
            { name: 'Healthcare', link: '/courses/healthcare' },
            { name: 'Operations', link: '/courses/operations' },
            { name: 'Business Analytics', link: '/courses/business-analytics' },
            { name: 'Software & Technology', link: '/courses/software-tech' },
            { name: 'PG Diploma Applied Statistics', link: '/courses/applied-statistics' },
            { name: 'IIT Courses Online', link: '/courses/iit-courses' },
            { name: 'Blockchain', link: '/courses/blockchain' },
            { name: 'Cloud Computing', link: '/courses/cloud-computing' },
            { name: 'PG Program In Technology Management', link: '/courses/tech-management' },
            { name: 'Big Data Engineering', link: '/courses/big-data' },
            { name: 'DevOps', link: '/courses/devops' },
            { name: 'Quantum Computing', link: '/courses/quantum-computing' },
            { name: 'Digital Transformation and Innovation', link: '/courses/digital-transformation' },
            { name: 'Public Policy Management', link: '/courses/public-policy' },
            { name: 'Cyber Security', link: '/courses/cyber-security' },
            { name: 'Executive Program in Retail Management', link: '/courses/retail-management' },
            { name: 'Online Executive Program in Emerging Technologies', link: '/courses/emerging-tech' },
            { name: 'Online Executive PG Diploma in Sports Management', link: '/courses/sports-management' }
        ],
        'Doctorate/Ph.D.': [
            { name: 'Online PhD Programs', link: '/courses/online-phd' },
            { name: 'Doctor of Business Administration', link: '/courses/dba' },
            { name: 'PhD in Management', link: '/courses/phd-management' },
            { name: 'PhD in Computer Science', link: '/courses/phd-cs' },
            { name: 'Integrated MBA & Doctorate', link: '/courses/integrated-mba-phd' }
        ],
        'UG Courses': [
            { name: 'Online BBA', link: '/courses/online-bba' },
            { name: 'Online BCA', link: '/courses/online-bca' },
            { name: 'Online B.Com', link: '/courses/online-bcom' },
            { name: 'Online BA', link: '/courses/online-ba' },
            { name: 'Distance BBA', link: '/courses/distance-bba' },
            { name: 'Distance BCA', link: '/courses/distance-bca' },
            { name: 'Distance B.Com', link: '/courses/distance-bcom' },
            { name: 'Distance BA', link: '/courses/distance-ba' },
            { name: 'Online B.Sc', link: '/courses/online-bsc' },
            { name: 'Bachelor of Design', link: '/courses/online-b-des' }
        ],
        'Study Abroad': [
            { name: 'Study in USA', link: '/courses/study-usa' },
            { name: 'Study in UK', link: '/courses/study-uk' },
            { name: 'Study in Canada', link: '/courses/study-canada' },
            { name: 'Study in Australia', link: '/courses/study-australia' },
            { name: 'Study in Germany', link: '/courses/study-germany' },
            { name: 'Study in Ireland', link: '/courses/study-ireland' },
            { name: 'Study in Singapore', link: '/courses/study-singapore' },
            { name: 'Global MBA Programs', link: '/courses/global-mba-programs' }
        ],
        'Advanced Diploma': [
            { name: 'Advanced Diploma in Management', link: '/courses/advanced-diploma-mgmt' },
            { name: 'PG Diploma in Digital Marketing', link: '/courses/pgdip-digital-marketing' },
            { name: 'PG Diploma in Data Science', link: '/courses/pgdip-data-science' },
            { name: 'PG Diploma in Finance', link: '/courses/pgdip-finance' },
            { name: 'PG Diploma in HR Management', link: '/courses/pgdip-hr' },
            { name: 'Advanced Diploma in IT', link: '/courses/advanced-diploma-it' }
        ],
        'Skilling & Certificate': [
            { name: 'Digital Marketing Certificate', link: '/courses/cert-digital-marketing' },
            { name: 'Financial Modeling', link: '/courses/financial-modeling' },
            { name: 'Project Management', link: '/courses/project-management' },
            { name: 'Python Programming', link: '/courses/python-programming' },
            { name: 'Full Stack Development', link: '/courses/full-stack' },
            { name: 'Graphic Design', link: '/courses/graphic-design' },
            { name: 'Content Writing', link: '/courses/content-writing' },
            { name: 'SEO & SEM', link: '/courses/seo-sem' },
            { name: 'Social Media Marketing', link: '/courses/social-media' },
            { name: 'Excel Advanced', link: '/courses/excel-advanced' }
        ]
    };

    // Use state to hold courses for rendering. Initialize with deterministic originalCourses so SSR and initial client render match.
    const [coursesState, setCoursesState] = useState(originalCourses);

    // On client (after hydration), shuffle each category and update state. This avoids SSR/client mismatch.
    useEffect(() => {
        const shuffled = {};
        Object.keys(originalCourses).forEach((key) => {
            shuffled[key] = shuffleArray(originalCourses[key]);
        });
        setCoursesState(shuffled);
    }, []);

    // Get courses to display based on active tab
    const getDisplayCourses = () => {
        let displayCourses;

        if (activeTab === 'all') {
            // Return all courses from all categories, limited to first 15 for initial display (3 rows)
            const allCourses = Object.entries(coursesState).flatMap(([category, courseList]) => 
                courseList.map(course => ({ ...course, category }))
            );
            displayCourses = allCourses.slice(0, 15);
        } else {
            displayCourses = (coursesState[activeTab] || []).map(course => ({ ...course, category: activeTab }));
        }

        return displayCourses;
    };

    return (
        <section className={styles.browseSection}>
            <div className={styles.container}>
                <div className={styles.mainLayout}>
                    {/* Vertical Tabs on Left */}
                    <div className={styles.tabsColumn}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Course Cards on Right */}
                    <div className={styles.contentColumn}>
                        <div className={styles.courseGrid}>
                            {getDisplayCourses().map((course, index) => (
                                <div key={index} className={styles.courseCard}>
                                    <div className={styles.courseHeader}>
                                        <h3 className={styles.courseName}>{course.name}</h3>
                                    </div>
                                    <div 
                                        className={styles.compareInfo}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const courseId = courseNameToId[course.name] || 'Executive-MBA';
                                            const displayName = encodeURIComponent(course.name);
                                            window.open(
                                                `/course-details?courseId=${courseId}&displayName=${displayName}`,
                                                '_blank'
                                            );
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span className={styles.compareText}>COMPARE</span>
                                    </div>
                                </div>
                            ))}
                            
                            {/* View All Button as Grid Item */}
                            <div className={styles.viewAllCard}>
                                <Link href="/courses" className={styles.viewAllButton}>
                                    <div className={styles.viewAllContent}>
                                        <div className={styles.viewAllIcon}>→</div>
                                        <h3 className={styles.viewAllText}>Explore All</h3>
                                        <p className={styles.viewAllSubtext}>Explore More Courses</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowseCategories;

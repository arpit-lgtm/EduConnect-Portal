import { useState } from 'react';
import Link from 'next/link';
import styles from './BrowseCategories.module.css';

const BrowseCategories = () => {
    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        'PG Courses',
        'Executive Education',
        'Doctorate/Ph.D.',
        'UG Courses',
        'Study Abroad',
        'Advanced Diploma',
        'Skilling & Certificate'
    ];

    const courses = {
        'PG Courses': [
            { name: 'Online MBA', specializations: '80+ Specializations', compareCount: 37, link: '/courses/online-mba' },
            { name: '1 Year MBA Online', specializations: 'ROI 100%', compareCount: 10, link: '/courses/one-year-mba', badge: 'Trending' },
            { name: 'Distance MBA', specializations: '2 Years', compareCount: 15, link: '/courses/distance-mba' },
            { name: 'Executive MBA for Working Professionals', specializations: '12 - 24 Months', compareCount: 13, link: '/courses/executive-mba' },
            { name: 'Online Global MBA', specializations: 'Trending', compareCount: 4, link: '/courses/global-mba', badge: 'Hot' },
            { name: 'Online MCA', specializations: '16+ Specializations', compareCount: 14, link: '/courses/online-mca' },
            { name: 'M.Tech', specializations: '25+ Specializations', compareCount: 3, link: '/courses/m-tech' },
            { name: 'Online M.Sc', specializations: '2 Years', compareCount: 5, link: '/courses/online-msc' },
            { name: 'MS Degree Online', specializations: 'Global', compareCount: 2, link: '/courses/ms-degree', badge: 'New' },
            { name: 'Online MA', specializations: '2 Years', compareCount: 12, link: '/courses/online-ma' },
            { name: 'Online M.Com', specializations: '2 Years', compareCount: 10, link: '/courses/online-mcom' },
            { name: 'Online Master of Design', specializations: 'Creative', compareCount: 3, link: '/courses/online-m-des' },
            { name: 'Dual MBA Online', specializations: 'Dual Specialization', compareCount: 8, link: '/courses/dual-mba' },
            { name: 'Online MBA after Diploma', specializations: 'Direct Entry', compareCount: 6, link: '/courses/mba-after-diploma' },
            { name: 'Online Master of Education (M.Ed)', specializations: 'Education', compareCount: 3, link: '/courses/online-med' },
            { name: 'Online Global MCA', specializations: '2 Years', compareCount: 13, link: '/courses/global-mca' },
            { name: 'Online PGDM', specializations: '2 Years', compareCount: 12, link: '/courses/pgdm-online' },
            { name: 'Online PG Diploma & Certificate', specializations: '3 - 24 Months', compareCount: 5, link: '/courses/pg-diploma-certificate' },
            { name: 'Distance MCA', specializations: 'Flexible', compareCount: 9, link: '/courses/distance-mca' },
            { name: 'Distance M.Com', specializations: '2 Years', compareCount: 7, link: '/courses/distance-mcom' },
            { name: 'Distance M.Sc', specializations: '2 Years', compareCount: 4, link: '/courses/distance-msc' },
            { name: 'Distance MA', specializations: '2 Years', compareCount: 6, link: '/courses/distance-ma' },
            { name: 'Online MBA Plus', specializations: 'Enhanced', compareCount: 5, link: '/courses/mba-plus' },
            { name: 'MBA in Business Analytics', specializations: 'Analytics', compareCount: 11, link: '/courses/mba-business-analytics' },
            { name: 'M.A. in Public Policy', specializations: 'Policy', compareCount: 2, link: '/courses/ma-public-policy' },
            { name: 'M.A. in International Relations, Security, and Strategy', specializations: 'Strategy', compareCount: 2, link: '/courses/ma-international-relations' },
            { name: 'Online Master of Social Work', specializations: 'Social Work', compareCount: 3, link: '/courses/online-msw' },
            { name: 'Online MBA & Doctorate', specializations: 'Integrated', compareCount: 1, link: '/courses/integrated-mba-doctorate' },
            { name: 'Online M.Ed & Ed.D', specializations: 'Dual Degree', compareCount: 2, link: '/courses/dual-med-edd' },
            { name: 'Online Master of Management Studies', specializations: 'Management', compareCount: 4, link: '/courses/online-mms' },
            { name: 'Blended MBA', specializations: 'Hybrid', compareCount: 7, link: '/courses/blended-mba' }
        ],
        'Executive Education': [
            { name: 'IIM Online Courses', specializations: 'Executive', compareCount: 8, link: '/courses/iim-courses' },
            { name: 'IIIT Online Courses', specializations: 'Tech Executive', compareCount: 5, link: '/courses/iiit-courses' },
            { name: 'Data Science & Analytics', specializations: 'Certificate', compareCount: 6, link: '/courses/data-science' },
            { name: 'Executive M.Tech for Working Professionals', specializations: 'M.Tech', compareCount: 4, link: '/courses/executive-mtech' },
            { name: 'AI and Machine Learning', specializations: 'PG Diploma', compareCount: 7, link: '/courses/ai-ml' },
            { name: 'Generative AI', specializations: 'New', compareCount: 5, link: '/courses/generative-ai', badge: 'Hot' },
            { name: 'UI UX Certificate Program', specializations: 'Design', compareCount: 4, link: '/courses/ui-ux' },
            { name: 'Leadership & Management', specializations: 'Leadership', compareCount: 6, link: '/courses/leadership' },
            { name: 'Finance', specializations: 'Finance', compareCount: 8, link: '/courses/finance' },
            { name: 'Marketing', specializations: 'Marketing', compareCount: 7, link: '/courses/marketing' },
            { name: 'Human Resource (HR)', specializations: 'HR', compareCount: 6, link: '/courses/hr' },
            { name: 'Healthcare', specializations: 'Healthcare', compareCount: 5, link: '/courses/healthcare' },
            { name: 'Operations', specializations: 'Operations', compareCount: 5, link: '/courses/operations' },
            { name: 'Business Analytics', specializations: 'Analytics', compareCount: 9, link: '/courses/business-analytics' },
            { name: 'Software & Technology', specializations: 'Tech', compareCount: 6, link: '/courses/software-tech' },
            { name: 'PG Diploma Applied Statistics', specializations: 'Statistics', compareCount: 3, link: '/courses/applied-statistics' },
            { name: 'IIT Courses Online', specializations: 'IIT', compareCount: 7, link: '/courses/iit-courses' },
            { name: 'Blockchain', specializations: 'Blockchain', compareCount: 4, link: '/courses/blockchain' },
            { name: 'Cloud Computing', specializations: 'Cloud', compareCount: 6, link: '/courses/cloud-computing' },
            { name: 'PG Program In Technology Management', specializations: 'Tech Mgmt', compareCount: 4, link: '/courses/tech-management' },
            { name: 'Big Data Engineering', specializations: 'Big Data', compareCount: 5, link: '/courses/big-data' },
            { name: 'DevOps', specializations: 'DevOps', compareCount: 5, link: '/courses/devops' },
            { name: 'Quantum Computing', specializations: 'Quantum', compareCount: 2, link: '/courses/quantum-computing', badge: 'New' },
            { name: 'Digital Transformation and Innovation', specializations: 'Digital', compareCount: 3, link: '/courses/digital-transformation' },
            { name: 'Public Policy Management', specializations: 'Policy', compareCount: 2, link: '/courses/public-policy' },
            { name: 'Cyber Security', specializations: 'Security', compareCount: 7, link: '/courses/cyber-security' },
            { name: 'Executive Program in Retail Management', specializations: 'Retail', compareCount: 3, link: '/courses/retail-management' },
            { name: 'Online Executive Program in Emerging Technologies', specializations: 'Emerging Tech', compareCount: 4, link: '/courses/emerging-tech' },
            { name: 'Online Executive PG Diploma in Sports Management', specializations: 'Sports', compareCount: 2, link: '/courses/sports-management' }
        ],
        'Doctorate/Ph.D.': [
            { name: 'Online PhD Programs', specializations: 'Various Disciplines', compareCount: 8, link: '/courses/online-phd' },
            { name: 'Doctor of Business Administration', specializations: 'Business', compareCount: 4, link: '/courses/dba' },
            { name: 'PhD in Management', specializations: 'Management', compareCount: 5, link: '/courses/phd-management' },
            { name: 'PhD in Computer Science', specializations: 'CS', compareCount: 3, link: '/courses/phd-cs' },
            { name: 'Integrated MBA & Doctorate', specializations: 'Integrated', compareCount: 2, link: '/courses/integrated-mba-phd' }
        ],
        'UG Courses': [
            { name: 'Online BBA', specializations: '15+ Specializations', compareCount: 20, link: '/courses/online-bba' },
            { name: 'Online BCA', specializations: '10+ Specializations', compareCount: 18, link: '/courses/online-bca' },
            { name: 'Online B.Com', specializations: '2-3 Years', compareCount: 15, link: '/courses/online-bcom' },
            { name: 'Online BA', specializations: '2-3 Years', compareCount: 12, link: '/courses/online-ba' },
            { name: 'Distance BBA', specializations: 'Flexible', compareCount: 10, link: '/courses/distance-bba' },
            { name: 'Distance BCA', specializations: 'Flexible', compareCount: 8, link: '/courses/distance-bca' },
            { name: 'Distance B.Com', specializations: '3 Years', compareCount: 11, link: '/courses/distance-bcom' },
            { name: 'Distance BA', specializations: '3 Years', compareCount: 9, link: '/courses/distance-ba' },
            { name: 'Online B.Sc', specializations: 'Science', compareCount: 7, link: '/courses/online-bsc' },
            { name: 'Bachelor of Design', specializations: 'Design', compareCount: 4, link: '/courses/online-b-des' }
        ],
        'Study Abroad': [
            { name: 'Study in USA', specializations: 'Top Universities', compareCount: 15, link: '/courses/study-usa' },
            { name: 'Study in UK', specializations: 'Premium Programs', compareCount: 12, link: '/courses/study-uk' },
            { name: 'Study in Canada', specializations: 'Work Opportunities', compareCount: 10, link: '/courses/study-canada' },
            { name: 'Study in Australia', specializations: 'Quality Education', compareCount: 9, link: '/courses/study-australia' },
            { name: 'Study in Germany', specializations: 'Affordable', compareCount: 7, link: '/courses/study-germany' },
            { name: 'Study in Ireland', specializations: 'Growing Hub', compareCount: 5, link: '/courses/study-ireland' },
            { name: 'Study in Singapore', specializations: 'Asia Hub', compareCount: 6, link: '/courses/study-singapore' },
            { name: 'Global MBA Programs', specializations: 'International', compareCount: 8, link: '/courses/global-mba-programs' }
        ],
        'Advanced Diploma': [
            { name: 'Advanced Diploma in Management', specializations: '1-2 Years', compareCount: 8, link: '/courses/advanced-diploma-mgmt' },
            { name: 'PG Diploma in Digital Marketing', specializations: '6-12 Months', compareCount: 10, link: '/courses/pgdip-digital-marketing' },
            { name: 'PG Diploma in Data Science', specializations: '12 Months', compareCount: 12, link: '/courses/pgdip-data-science' },
            { name: 'PG Diploma in Finance', specializations: '1 Year', compareCount: 7, link: '/courses/pgdip-finance' },
            { name: 'PG Diploma in HR Management', specializations: '1 Year', compareCount: 6, link: '/courses/pgdip-hr' },
            { name: 'Advanced Diploma in IT', specializations: '1-2 Years', compareCount: 9, link: '/courses/advanced-diploma-it' }
        ],
        'Skilling & Certificate': [
            { name: 'Digital Marketing Certificate', specializations: '3-6 Months', compareCount: 18, link: '/courses/cert-digital-marketing' },
            { name: 'Financial Modeling', specializations: 'Certificate', compareCount: 9, link: '/courses/financial-modeling' },
            { name: 'Project Management', specializations: 'PMP Prep', compareCount: 11, link: '/courses/project-management' },
            { name: 'Python Programming', specializations: 'Coding', compareCount: 14, link: '/courses/python-programming' },
            { name: 'Full Stack Development', specializations: 'Web Dev', compareCount: 16, link: '/courses/full-stack' },
            { name: 'Graphic Design', specializations: 'Creative', compareCount: 8, link: '/courses/graphic-design' },
            { name: 'Content Writing', specializations: 'Writing', compareCount: 7, link: '/courses/content-writing' },
            { name: 'SEO & SEM', specializations: 'Marketing', compareCount: 10, link: '/courses/seo-sem' },
            { name: 'Social Media Marketing', specializations: 'SMM', compareCount: 12, link: '/courses/social-media' },
            { name: 'Excel Advanced', specializations: 'Data Analysis', compareCount: 9, link: '/courses/excel-advanced' }
        ]
    };

    // Get courses to display based on active tab
    const getDisplayCourses = () => {
        let displayCourses;
        
        if (activeTab === 'all') {
            // Return all courses from all categories, limited to first 15 for initial display (3 rows)
            const allCourses = Object.entries(courses).flatMap(([category, courseList]) => 
                courseList.map(course => ({ ...course, category }))
            );
            displayCourses = allCourses.slice(0, 15);
        } else {
            displayCourses = (courses[activeTab] || []).map(course => ({ ...course, category: activeTab }));
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
                                <Link href={course.link} key={index} className={styles.courseCard}>
                                    <div className={styles.courseHeader}>
                                        <h3 className={styles.courseName}>{course.name}</h3>
                                        {course.badge && <span className={styles.badge}>{course.badge}</span>}
                                    </div>
                                    <p className={styles.specializations}>{course.specializations}</p>
                                    <div className={styles.compareInfo}>
                                        <span className={styles.compareText}>Compare</span>
                                        <span className={styles.compareCount}>{course.compareCount}</span>
                                        <span className={styles.nowText}>Now</span>
                                    </div>
                                </Link>
                            ))}
                            
                            {/* View All Button as Grid Item */}
                            <div className={styles.viewAllCard}>
                                <Link href="/courses" className={styles.viewAllButton}>
                                    <div className={styles.viewAllContent}>
                                        <div className={styles.viewAllIcon}>→</div>
                                        <h3 className={styles.viewAllText}>VIEW ALL</h3>
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

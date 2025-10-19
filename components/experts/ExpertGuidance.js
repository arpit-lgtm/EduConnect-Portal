import { useState, useRef } from 'react';
import styles from './ExpertGuidance.module.css';

const ExpertGuidance = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const experts = [
        { name: 'Imran Ansari', title: 'Manager, Sales', experience: '7+ Years', rating: '4.9', image: '/images/counsellors/Imran Ansari.jpeg' },
        { name: 'Asif Shaikh', title: 'Team Leader', experience: '5+ Years', rating: '4.8', image: '/images/counsellors/Asif Shaikh.jpeg' },
        { name: 'Komal Wadekar', title: 'Team Leader', experience: '5+ Years', rating: '4.8', image: '/images/counsellors/Komal Wadekar.jpg' },
        { name: 'Athar Khan', title: 'Team Leader', experience: '4+ Years', rating: '4.8', image: '/images/counsellors/Athar Khan.jpeg' },
        { name: 'Aditya Sable', title: 'Senior Business Development Executive', experience: '3+ Years', rating: '4.7', image: '/images/counsellors/Aditya Sable.jpeg' },
        { name: 'Akash Dubey', title: 'Business Development Executive', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Akash Dubey.jpeg' },
        { name: 'Monika Barman', title: 'Business Development Executive', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Monika Barman.png' },
        { name: 'Priya Prajapati', title: 'Career Counsellor', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Priya Prajapati.jpeg' },
        { name: 'Indu Mehta', title: 'Career Counsellor', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Indu Mehta.jpeg' },
        { name: 'Prutha Ghag', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Prutha Ghag.jpeg' },
        { name: 'Rahul Bane', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Rahul Bane.jpeg' },
        { name: 'Sarvesh Poojari', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Sarvesh Poojari.jpeg' },
        { name: 'Aishwarya Pavaskar', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Aishwarya Pavaskar.jpeg' }
    ];

    return (
        <section className={styles.expertsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Professional Guidance from Experts</h2>
                    <p className={styles.subtitle}>
                        Educonnect has a dedicated team of 50+ specialists who have been guiding students since 2023, 
                        providing expert consultation for your successful educational journey.
                    </p>
                </div>

                <div className={styles.carouselWrapper}>
                    <button className={`${styles.navButton} ${styles.navLeft}`} onClick={scrollLeft} aria-label="Scroll left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className={styles.scrollContainer} ref={scrollContainerRef}>
                        <div className={styles.expertsTrack}>
                            {experts.map((expert, index) => (
                            <div key={index} className={styles.expertCard}>
                                <div className={styles.expertImage}>
                                    <img 
                                        src={expert.image} 
                                        alt={expert.name}
                                    />
                                </div>

                                <div className={styles.ratingBadge}>
                                    <span className={styles.starIcon}>★</span>
                                    <span>{expert.rating}</span>
                                </div>

                                <div className={styles.expertInfo}>
                                    <h3 className={styles.expertName}>{expert.name}</h3>
                                    <p className={styles.expertTitle}>{expert.title}</p>
                                    <p className={styles.expertExperience}>{expert.experience} experience</p>
                                </div>

                                <button className={styles.consultButton}>
                                    Consult Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <button className={`${styles.navButton} ${styles.navRight}`} onClick={scrollRight} aria-label="Scroll right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
            </div>
        </section>
    );
};

export default ExpertGuidance;

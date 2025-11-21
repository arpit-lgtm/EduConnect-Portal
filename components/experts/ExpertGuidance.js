import { useState, useRef, useEffect } from 'react';
import styles from './ExpertGuidance.module.css';
import Toast from '../common/Toast';
import LoginModal from '../login/LoginModal';
import { useAuth } from '../../contexts/AuthContext';
import { trackUniversityContact } from '../../utils/activityTracker';

const ExpertGuidance = () => {
    const scrollContainerRef = useRef(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [selectedExpert, setSelectedExpert] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const { userData, isLoggedIn } = useAuth();

    const experts = [
        { name: 'Imran Ansari', title: 'Manager, Sales', experience: '7+ Years', rating: '4.9', image: '/images/counsellors/Imran Ansari.jpeg' },
        { name: 'Asif Shaikh', title: 'Team Leader', experience: '5+ Years', rating: '4.8', image: '/images/counsellors/Asif Shaikh.jpeg' },
        { name: 'Komal Wadekar', title: 'Team Leader', experience: '5+ Years', rating: '4.8', image: '/images/counsellors/Komal Wadekar.jpeg' },
        { name: 'Athar Khan', title: 'Team Leader', experience: '4+ Years', rating: '4.8', image: '/images/counsellors/Athar Khan.jpeg' },
        { name: 'Akash Dubey', title: 'Business Development Executive', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Akash Dubey.jpeg' },
        { name: 'Priya Prajapati', title: 'Career Counsellor', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Priya Prajapati.jpeg' },
        { name: 'Prutha Ghag', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Prutha Ghag.jpeg' },
        { name: 'Rahul Bane', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Rahul Bane.jpeg' },
        { name: 'Sarvesh Poojari', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Sarvesh Poojari.jpeg' },
        { name: 'Aishwarya Pavaskar', title: 'Accounts Manager', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Aishwarya Pavaskar.jpeg' }
    ];

    // Listen for custom event to open modal from chatbot
    useEffect(() => {
        const handleOpenModal = () => {
            setSelectedExpert(experts[0]); // Default to first expert
            setShowLoginModal(true);
        };
        
        window.addEventListener('openExpertModal', handleOpenModal);
        
        return () => {
            window.removeEventListener('openExpertModal', handleOpenModal);
        };
    }, []);

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

    const handleConsultClick = async (expert) => {
        setSelectedExpert(expert);
        
        // If user is logged in, skip the form and directly save & show toast
        if (isLoggedIn && userData) {
            try {
                const leadData = {
                    ...userData,
                    expertCounselor: expert.name,
                    source: 'Expert Counselor Carousel'
                };
                
                await fetch('/api/save-lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(leadData)
                });
                
                // Track activity - university contact with questionnaire data
                trackUniversityContact('Expert Counselor - ' + expert.name, { 
                    ...userData, 
                    source: 'Expert Counselor Carousel' 
                });
            } catch (error) {
                console.error('Failed to save lead:', error);
            }
            
            // Show thank you toast message
            setShowToast(true);
        } else {
            // Not logged in, show the login modal
            setShowLoginModal(true);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Save lead data
        try {
            const leadData = {
                ...formData,
                expertCounselor: selectedExpert?.name,
                source: 'Expert Counselor Carousel'
            };
            
            await fetch('/api/save-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(leadData)
            });
            
            // Track activity - university contact with questionnaire data
            trackUniversityContact('Expert Counselor - ' + (selectedExpert?.name || 'Unknown'), { 
                ...formData, 
                source: 'Expert Counselor Carousel' 
            });
        } catch (error) {
            console.error('Failed to save lead:', error);
        }
        
        // Close modal
        handleCloseModal();
        
        // Show toast
        setShowToast(true);
        
        // Refresh page after 4 seconds
        setTimeout(() => {
            window.location.reload();
        }, 4000);
    };

    return (
        <section id="expert-guidance" className={styles.expertsSection}>
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

                                <button 
                                    className={styles.consultButton}
                                    onClick={() => handleConsultClick(expert)}
                                >
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

            {/* Login Modal */}
            <LoginModal 
                isOpen={showLoginModal} 
                onClose={() => setShowLoginModal(false)} 
            />
            
            {showToast && (
                <Toast
                    message="Thank you for your interest! Our expert counselors will contact you shortly."
                    type="success"
                    onClose={() => setShowToast(false)}
                    duration={4000}
                />
            )}
        </section>
    );
};

export default ExpertGuidance;

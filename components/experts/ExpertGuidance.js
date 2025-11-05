import { useState, useRef, useEffect } from 'react';
import styles from './ExpertGuidance.module.css';

const ExpertGuidance = () => {
    const scrollContainerRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedExpert, setSelectedExpert] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        gender: '',
        dateOfBirth: '',
        city: '',
        state: '',
        currentQualification: ''
    });

    const experts = [
        { name: 'Imran Ansari', title: 'Manager, Sales', experience: '7+ Years', rating: '4.9', image: '/images/counsellors/Imran Ansari.jpeg' },
        { name: 'Asif Shaikh', title: 'Team Leader', experience: '5+ Years', rating: '4.8', image: '/images/counsellors/Asif Shaikh.jpeg' },
        { name: 'Komal Wadekar', title: 'Team Leader', experience: '5+ Years', rating: '4.8', image: '/images/counsellors/Komal Wadekar.jpeg' },
        { name: 'Athar Khan', title: 'Team Leader', experience: '4+ Years', rating: '4.8', image: '/images/counsellors/Athar Khan.jpeg' },
        { name: 'Akash Dubey', title: 'Business Development Executive', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Akash Dubey.jpeg' },
        { name: 'Monika Barman', title: 'Business Development Executive', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Monika Barman.jpeg' },
        { name: 'Priya Prajapati', title: 'Career Counsellor', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Priya Prajapati.jpeg' },
        { name: 'Indu Mehta', title: 'Career Counsellor', experience: '2+ Years', rating: '4.6', image: '/images/counsellors/Indu Mehta.jpeg' },
        { name: 'Prutha Ghag', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Prutha Ghag.jpeg' },
        { name: 'Rahul Bane', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Rahul Bane.jpeg' },
        { name: 'Sarvesh Poojari', title: 'Business Development Executive', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Sarvesh Poojari.jpeg' },
        { name: 'Aishwarya Pavaskar', title: 'Accounts Manager', experience: '1+ Years', rating: '4.5', image: '/images/counsellors/Aishwarya Pavaskar.jpeg' }
    ];

    // Listen for custom event to open modal from chatbot
    useEffect(() => {
        const handleOpenModal = () => {
            setSelectedExpert(experts[0]); // Default to first expert
            setShowModal(true);
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

    const handleConsultClick = (expert) => {
        setSelectedExpert(expert);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedExpert(null);
        setFormData({
            fullName: '',
            contactNumber: '',
            emailAddress: '',
            gender: '',
            dateOfBirth: '',
            city: '',
            state: '',
            currentQualification: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { ...formData, expert: selectedExpert?.name });
        // TODO: Send data to backend
        alert(`Thank you! ${selectedExpert?.name} will contact you shortly.`);
        handleCloseModal();
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

            {/* Consultation Modal */}
            {showModal && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={handleCloseModal}>
                            ✕
                        </button>
                        
                        <div className={styles.modalHeader}>
                            <h3>Consult with our expert counsellors</h3>
                            <p>Fill in your details and we'll get back to you shortly.</p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.consultForm}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="fullName">Full Name *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="contactNumber">Contact Number *</label>
                                    <input
                                        type="tel"
                                        id="contactNumber"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your contact number"
                                        pattern="[0-9]{10}"
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="emailAddress">Email Address *</label>
                                    <input
                                        type="email"
                                        id="emailAddress"
                                        name="emailAddress"
                                        value={formData.emailAddress}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="gender">Gender</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="dateOfBirth">Date of Birth</label>
                                    <input
                                        type="date"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="Enter your city"
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        placeholder="Enter your state"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="currentQualification">Current Qualification</label>
                                    <select
                                        id="currentQualification"
                                        name="currentQualification"
                                        value={formData.currentQualification}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Qualification</option>
                                        <option value="10th">10th</option>
                                        <option value="12th">12th</option>
                                        <option value="diploma">Diploma</option>
                                        <option value="bachelors">Bachelor's Degree</option>
                                        <option value="masters">Master's Degree</option>
                                        <option value="phd">PhD</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Submit & Get Consultation
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ExpertGuidance;

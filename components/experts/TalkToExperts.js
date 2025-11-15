import React, { useState } from 'react';
import styles from './TalkToExperts.module.css';

const TalkToExperts = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Phone number validation: only allow numbers and limit to 10 digits
        if (name === 'phone') {
            const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: numericValue
            }));
            return;
        }
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you! Our experts will contact you shortly.');
        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            course: ''
        });
    };

    return (
        <section className={styles.talkToExpertsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Talk to Our Experts</h2>
                    <p className={styles.subtitle}>
                        Connect with our education counselors for personalized guidance and make informed decisions about your academic future
                    </p>
                </div>
                
                <div className={styles.mainContent}>
                    {/* Contact Cards */}
                    <div className={styles.contactCards}>
                        <div className={styles.cardRow}>
                            {/* Phone Card */}
                            <div className={styles.contactCard}>
                                <div className={styles.cardIcon}>
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className={styles.cardContent}>
                                    <h5>Call Our Experts</h5>
                                    <p>Speak directly with our counselors</p>
                                    <div className={styles.contactLinks}>
                                        <a href="tel:+919076114175" className={styles.contactBtn}>
                                            +91 9076 114 175
                                        </a>
                                        <a href="tel:+912240033448" className={styles.contactBtn}>
                                            +91 22 4003 3448
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Card */}
                            <div className={`${styles.contactCard} ${styles.whatsappCard}`}>
                                <div className={styles.cardIcon}>
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <div className={styles.cardContent}>
                                    <h5>WhatsApp Support</h5>
                                    <p>Get instant responses</p>
                                    <div className={styles.contactLinks}>
                                        <a 
                                            href="https://api.whatsapp.com/send?phone=919076114175&text=Hi, I need guidance about courses" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`${styles.contactBtn} ${styles.whatsappBtn}`}
                                        >
                                            <i className="fab fa-whatsapp"></i>Chat Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cardRow}>
                            {/* Email Card */}
                            <div className={styles.contactCard}>
                                <div className={styles.cardIcon}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className={styles.cardContent}>
                                    <h5>Email Support</h5>
                                    <p>Detailed inquiries welcome</p>
                                    <div className={styles.contactLinks}>
                                        <a href="mailto:admissions@educativo.in" className={styles.contactBtn}>
                                            admissions@educativo.in
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Office Card */}
                            <div className={styles.contactCard}>
                                <div className={styles.cardIcon}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className={styles.cardContent}>
                                    <h5>Visit Our Office</h5>
                                    <p>Located in Thane, Maharashtra</p>
                                    <div className={styles.contactLinks}>
                                        <span className={styles.officeAddress}>
                                            207, Lodha IT Park<br />
                                            Wagle Estate, Thane (W)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact Form */}
                    <div className={styles.formSection}>
                        <div className={styles.quickContactForm}>
                            <div className={styles.formHeader}>
                                <h4>Get Free Counselling</h4>
                                <p>Fill the form for instant callback</p>
                            </div>
                            <form className={styles.contactForm} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        className={styles.formInput}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number (10 digits)"
                                        className={styles.formInput}
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        title="Please enter exactly 10 digits"
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        className={styles.formInput}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleInputChange}
                                        className={styles.formSelect}
                                        required
                                    >
                                        <option value="">Course Interest</option>
                                        <option value="mba">MBA</option>
                                        <option value="mca">MCA</option>
                                        <option value="ma">MA</option>
                                        <option value="msc">M.Sc</option>
                                        <option value="bba">BBA</option>
                                        <option value="bca">BCA</option>
                                        <option value="ba">BA</option>
                                        <option value="bsc">B.Sc</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    Request Callback
                                    <span className={styles.submitText}>Our experts will call you within 15 minutes</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalkToExperts;
import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "What exactly is EduConnect?",
            answer: (
                <div>
                    <p>Navigating the complex landscape of higher education options can feel like traversing an intricate maze without proper guidance.</p>
                    <p>Recognizing this challenge, we created EduConnect in 2023: India's premier unbiased online education advisory platform.</p>
                    <p>Think of us as your educational GPS, providing clear direction through the vast world of online learning opportunities. We offer comprehensive resources including detailed program guides, smart comparison tools, and access to expert education consultants.</p>
                    <p>With EduConnect as your guide, you'll never feel lost in the complex process of selecting the right educational pathway for your future success!</p>
                </div>
            )
        },
        {
            id: 2,
            question: "How does EduConnect distinguish itself from competitors?",
            answer: (
                <div>
                    <p>EduConnect serves as a comprehensive educational hub for students seeking quality higher education through accredited online institutions. Since our inception in 2023, we believe that selecting the right educational pathway is fundamental to achieving your career aspirations. Here's what sets us apart:</p>
                    <ul>
                        <li>We exclusively feature UGC-approved and accredited online universities to ensure you receive legitimate, recognized qualifications</li>
                        <li>Our platform simplifies complex academic jargon and presents information in clear, understandable language</li>
                        <li>Our advisory team provides honest guidance without pushing specific institutions or programs</li>
                        <li>We maintain a 94% student satisfaction rate, one of the highest in the Indian education sector</li>
                    </ul>
                    <p>We are proudly rated as the most trusted online education platform across major review platforms.</p>
                </div>
            )
        },
        {
            id: 3,
            question: "What fees do you charge for your services?",
            answer: (
                <div>
                    <p>All our educational guidance and counseling services are completely <strong>free of charge</strong> for students and learners! We don't charge any fees for academic consultation, career guidance, or post-enrollment support services.</p>
                    <p>EduConnect remains committed to keeping our platform accessible to all students without any financial barriers.</p>
                    <p>Our mission is to democratize quality education guidance and make it available to every aspiring learner.</p>
                </div>
            )
        },
        {
            id: 4,
            question: "Why should I choose EduConnect for my educational journey?",
            answer: (
                <div>
                    <p>Established in 2023, EduConnect goes beyond simply informing you about online learning opportunities—we actively assist you in making informed decisions by providing comprehensive, unbiased information about programs and institutions.</p>
                    <p>Whether you need details about specific academic domains or university comparisons, our expert education consultants are dedicated to addressing all your concerns and questions.</p>
                    <p>Our personalized approach ensures that every student receives tailored guidance based on their unique academic goals, career aspirations, and personal circumstances.</p>
                    <p>Join thousands of successful students who have transformed their careers through our guided educational pathways.</p>
                </div>
            )
        },
        {
            id: 5,
            question: "How do students benefit from our post-enrollment support?",
            answer: (
                <div>
                    <p>EduConnect's comprehensive post-enrollment services ensure your success doesn't end with admission—it's just the beginning!</p>
                    <p>Our support services include academic mentorship, career guidance sessions, industry networking opportunities, internship assistance, and job placement support.</p>
                    <p>We maintain continuous contact with our students throughout their academic journey, providing ongoing assistance with coursework guidance, exam preparation, and career development planning.</p>
                    <p>Our goal is to ensure every student not only completes their program successfully but also transitions smoothly into their desired career path.</p>
                </div>
            )
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Resolve Your Academic Queries</h2>
                    <p className={styles.subtitle}>Find answers to common questions about our educational services and platform</p>
                </div>
                
                <div className={styles.accordion}>
                    {faqData.map((faq, index) => (
                        <div 
                            key={faq.id} 
                            className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
                        >
                            <div className={styles.accordionHeader}>
                                <button 
                                    className={styles.accordionButton}
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    <span className={styles.questionNumber}>{faq.id}</span>
                                    <span className={styles.questionText}>{faq.question}</span>
                                    <span className={styles.chevron}>
                                        {activeIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                            </div>
                            <div 
                                className={`${styles.accordionContent} ${activeIndex === index ? styles.expanded : ''}`}
                            >
                                <div className={styles.accordionBody}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
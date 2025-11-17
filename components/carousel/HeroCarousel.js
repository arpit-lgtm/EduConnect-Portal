import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroCarousel.module.css';

const slides = [
    {
        id: 1,
        type: 'animated',
        isAnimated: true,
        animationDuration: 12000,
        cta: {
            text: "Start Your Journey",
            link: "/universities"
        }
    },
    {
        id: 2,
        type: 'collage-6',
        hasCollage: true,
        images: [
            "/images/1.jpeg",
            "/images/2.jpeg",
            "/images/3.jpeg",
            "/images/4.jpeg",
            "/images/5.jpeg",
            "/images/6.jpeg"
        ]
    },
    {
        id: 3,
        type: 'text-only',
        isTextOnly: true
    },
    {
        id: 4,
        type: 'collage-2',
        hasCollage: true,
        images: [
            "/images/7.jpeg",
            "/images/8.jpeg"
        ]
    },
    {
        id: 5,
        type: 'text-only-ai',
        isTextOnly: true
    },
    {
        id: 6,
        type: 'collage-5',
        hasCollage: true,
        images: [
            "/images/9.jpeg",
            "/images/10.jpeg",
            "/images/11.jpeg",
            "/images/12.jpeg",
            "/images/13.jpeg"
        ]
    },
    {
        id: 7,
        type: 'text-only-questionnaire',
        isTextOnly: true
    }
];

const HeroCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [animationPhase, setAnimationPhase] = useState(0);
    const slideCount = slides.length;

    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setActiveSlide((current) => (current + 1) % slideCount);
            setAnimationPhase(0); // Reset animation phase when changing slides
        }
    }, [isTransitioning, slideCount]);

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setActiveSlide((current) => (current - 1 + slideCount) % slideCount);
            setAnimationPhase(0); // Reset animation phase when changing slides
        }
    };

    const goToSlide = (index) => {
        if (!isTransitioning && index !== activeSlide) {
            setIsTransitioning(true);
            setActiveSlide(index);
            setAnimationPhase(0); // Reset animation phase when changing slides
        }
    };

    // Animation phase controller for the animated slide
    useEffect(() => {
        if (activeSlide === 0 && slides[0].isAnimated) {
            // Single phase - show University Compass message
            setAnimationPhase(0);
        }
    }, [activeSlide]);

    useEffect(() => {
        const currentSlide = slides[activeSlide];
        const interval = currentSlide?.isAnimated ? currentSlide.animationDuration : 5000;
        
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [nextSlide, activeSlide]);

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
    };

    const handleCTAClick = (slide) => {
        if (slide.cta.action === 'showAIRecommendations') {
            // TODO: Implement AI recommendations modal
            console.log('Show AI recommendations');
        }
    };

    return (
        <section className={styles.heroCarousel}>
            <div className={styles.carouselContainer}>
                <div 
                    className={styles.carouselTrack} 
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={styles.carouselSlide}>
                            {slide.isAnimated ? (
                                <div className={styles.animatedSlideContent}>
                                    <div className={`${styles.animationPhase} ${index === activeSlide ? styles.phaseActive : styles.phaseHidden}`}>
                                        <div className={styles.finalTaglineContainer}>
                                            <h2 className={`${styles.finalTagline} ${styles.smallerText}`}>
                                                Navigate your future with confidence by moving beyond generic rankings. 
                                                Our intelligent platform analyzes your academic profile, career objectives, 
                                                and personal preferences to provide a data-driven shortlist of ideal university programs. 
                                                Transform an overwhelming search into a strategic and efficient journey, 
                                                empowering you to make a well-informed decision.
                                            </h2>
                                            <h2 className={styles.finalTagline}>Discover your perfect match with our</h2>
                                            <h2 className={styles.finalTagline}>UNIVERSITY COMPASS</h2>
                                        </div>
                                    </div>
                                </div>
                            ) : slide.isTextOnly && slide.type === 'text-only' ? (
                                <div className={styles.animatedSlideContent}>
                                    <div className={`${styles.animationPhase} ${index === activeSlide ? styles.phaseActive : styles.phaseHidden}`}>
                                        <div className={styles.finalTaglineContainer}>
                                            <h2 className={`${styles.finalTagline} ${styles.smallerText}`}>
                                                Explore unlimited opportunities across diverse fields of study. 
                                                From technology and business to healthcare and creative arts, 
                                                access comprehensive program details tailored to your interests. 
                                                Compare universities, review specializations, and find courses 
                                                that align perfectly with your career aspirations and academic goals.
                                            </h2>
                                            <h2 className={styles.finalTagline}>Please feel free to use our</h2>
                                            <h2 className={styles.finalTagline}>COURSE CATALOG</h2>
                                        </div>
                                    </div>
                                </div>
                            ) : slide.isTextOnly && slide.type === 'text-only-ai' ? (
                                <div className={styles.animatedSlideContent}>
                                    <div className={`${styles.animationPhase} ${index === activeSlide ? styles.phaseActive : styles.phaseHidden}`}>
                                        <div className={styles.finalTaglineContainer}>
                                            <h2 className={`${styles.finalTagline} ${styles.smallerText}`}>
                                                Have any questions? Get instant, accurate answers anytime with your 24/7 AI admissions assistant. 
                                                Our MBA Ninja-AI Chatbot is here to provide immediate guidance on program details, 
                                                application requirements, deadlines, and more—all in a conversational, stress-free way. 
                                                No question is too small.
                                            </h2>
                                            <h2 className={styles.finalTagline}>Connect with our</h2>
                                            <h2 className={styles.finalTagline}>MBANINJA-AI CHATBOT TODAY!</h2>
                                        </div>
                                    </div>
                                </div>
                            ) : slide.isTextOnly && slide.type === 'text-only-questionnaire' ? (
                                <div className={styles.animatedSlideContent}>
                                    <div className={`${styles.animationPhase} ${index === activeSlide ? styles.phaseActive : styles.phaseHidden}`}>
                                        <div className={styles.finalTaglineContainer}>
                                            <h2 className={`${styles.finalTagline} ${styles.smallerText}`}>
                                                Finding your ideal MBA program doesn't have to be a complex puzzle. 
                                                With Ask MBA Ninja AI, simply answer a few quick questions about your academic history and career goals. 
                                                Our intelligent system will instantly analyze your profile and provide a personalized shortlist of universities 
                                                that are the strongest match for your unique trajectory. 
                                                Cut through the noise and get a tailored roadmap in minutes.
                                            </h2>
                                            <h2 className={styles.finalTagline}>Click here to fill the questionnaire &</h2>
                                            <h2 className={styles.finalTagline}>FIND THE RIGHT UNIVERSITY!</h2>
                                        </div>
                                    </div>
                                </div>
                            ) : slide.hasImage ? (
                                <div className={styles.imageSlideContent}>
                                    <div className={styles.imageSlideWrapper}>
                                        <div className={styles.imageSlideOverlayLeft}>
                                            <h2 className={styles.imageSlideTitle}>{slide.title}</h2>
                                        </div>
                                        <img 
                                            src={slide.image} 
                                            alt={slide.title}
                                            className={styles.fullHeightImage}
                                        />
                                        <div className={styles.imageSlideOverlayRight}>
                                            <p className={styles.imageSlideSubtitle}>{slide.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : slide.hasCollage ? (
                                <div className={styles.collageSlideContent}>
                                    {slide.type === 'collage-6' ? (
                                        <div className={styles.collageGrid6}>
                                            {slide.images.map((img, idx) => (
                                                <div key={idx} className={styles.collageImage}>
                                                    <img src={img} alt={`Collage ${idx + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                    ) : slide.type === 'collage-5' ? (
                                        <div className={styles.collageGrid5}>
                                            {slide.images.map((img, idx) => (
                                                <div key={idx} className={styles.collageImage}>
                                                    <img src={img} alt={`Collage ${idx + 9}`} />
                                                </div>
                                            ))}
                                        </div>
                                    ) : slide.type === 'collage-1' ? (
                                        <div className={styles.collageGrid1}>
                                            {slide.images.map((img, idx) => (
                                                <div key={idx} className={styles.collageImage}>
                                                    <img src={img} alt={`Collage ${idx + 9}`} />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className={styles.collageGrid2}>
                                            {slide.images.map((img, idx) => (
                                                <div key={idx} className={styles.collageImage}>
                                                    <img src={img} alt={`Collage ${idx + 7}`} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className={styles.slideContent}>
                                    <div className={styles.logoContainer}>
                                        <div className={styles.carouselLogo}>
                                            EduConnect
                                        </div>
                                    </div>
                                    <h2 className={styles.carouselTitle}>{slide.title}</h2>
                                    <p className={styles.carouselSubtitle}>{slide.subtitle}</p>
                                    {slide.cta?.link ? (
                                        <Link href={slide.cta.link} className={styles.carouselButton}>
                                            {slide.cta.text}
                                        </Link>
                                    ) : slide.cta ? (
                                        <button 
                                            onClick={() => handleCTAClick(slide)}
                                            className={styles.carouselButton}
                                        >
                                            {slide.cta.text}
                                        </button>
                                    ) : null}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button 
                    className={`${styles.carouselControl} ${styles.prev}`}
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="24"
                        height="24"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button 
                    className={`${styles.carouselControl} ${styles.next}`}
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="24"
                        height="24"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                <div className={styles.carouselIndicators}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === activeSlide ? styles.active : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;
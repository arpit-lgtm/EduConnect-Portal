/**
 * Educonnect - Main JavaScript File
 * Modern Interactive Features
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
    initializeSearch();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeTooltips();
    initializeMainPage();
    
    console.log('🎓 Educonnect initialized successfully!');
});

/**
 * Header Functionality
 */
function initializeHeader() {
    const header = document.querySelector('.header-section');
    const navbar = document.querySelector('.navbar');
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // Smooth hover effects for nav items
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Search Functionality
 */
function initializeSearch() {
    const headerSearch = document.getElementById('headerSearch');
    const mobileSearchBtn = document.querySelector('.btn-link.text-primary');
    const mobileSearchContainer = document.getElementById('mobileSearch');
    
    // Header search functionality
    if (headerSearch) {
        let searchTimeout;
        
        headerSearch.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length > 2) {
                searchTimeout = setTimeout(() => {
                    performSearch(query);
                }, 300);
            }
        });
        
        // Search on Enter key
        headerSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value.trim());
            }
        });
    }
    
    // Mobile search toggle
    if (mobileSearchBtn && mobileSearchContainer) {
        mobileSearchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const isVisible = mobileSearchContainer.style.display !== 'none';
            mobileSearchContainer.style.display = isVisible ? 'none' : 'block';
            
            if (!isVisible) {
                const mobileInput = mobileSearchContainer.querySelector('input');
                setTimeout(() => mobileInput.focus(), 100);
            }
        });
    }
}

/**
 * Perform search function
 */
function performSearch(query) {
    if (!query) return;
    
    console.log(`🔍 Searching for: ${query}`);
    
    // Show loading state
    showSearchLoading();
    
    // Simulate API call
    setTimeout(() => {
        hideSearchLoading();
        showSearchResults(query);
    }, 500);
}

function showSearchLoading() {
    // Add loading spinner to search button
    const searchBtn = document.querySelector('.search-container .btn');
    if (searchBtn) {
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    }
}

function hideSearchLoading() {
    // Reset search button
    const searchBtn = document.querySelector('.search-container .btn');
    if (searchBtn) {
        searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    }
}

function showSearchResults(query) {
    // This would typically show a dropdown with search results
    console.log(`📊 Search results for: ${query}`);
    
    // For demo purposes, show a simple alert
    // In production, this would show a proper search dropdown
}

/**
 * Mobile Menu Functionality
 */
function initializeMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            // Add smooth animation
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.style.animation = 'fadeOut 0.3s ease';
            } else {
                navbarCollapse.style.animation = 'fadeIn 0.3s ease';
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
}

/**
 * Scroll Effects
 */
function initializeScrollEffects() {
    // Parallax effect for elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize Tooltips
 */
function initializeTooltips() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

/**
 * Utility Functions
 */

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Loading state manager
const LoadingManager = {
    show(element) {
        element.classList.add('loading');
        element.style.opacity = '0.6';
        element.style.pointerEvents = 'none';
    },
    
    hide(element) {
        element.classList.remove('loading');
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    }
};

// API Helper (for future use)
const API = {
    baseURL: '/api',
    
    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`);
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    
    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
};

// Course navigation functions
function navigateToCourse(courseSlug) {
    // Open comparison using the comparison system
    if (typeof comparisonSystem !== 'undefined') {
        comparisonSystem.openComparisonInNewTab(courseSlug);
    }
}

function makeCourseCardsClickable() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const courseTitle = card.querySelector('h6').textContent.trim();
        let courseSlug = '';
        
        // Map course titles to slugs
        if (courseTitle.includes('MBA')) {
            courseSlug = 'online-mba';
        } else if (courseTitle.includes('MCA')) {
            courseSlug = 'online-mca';
        } else if (courseTitle.includes('BBA')) {
            courseSlug = 'online-bba';
        }
        
        if (courseSlug) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => navigateToCourse(courseSlug));
            
            // Add hover effect
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            });
        }
    });
}

// Course page initialization
function initializeCoursePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseSlug = urlParams.get('course');
    
    if (!courseSlug || !courseData[courseSlug]) {
        console.error('Course not found');
        return;
    }
    
    const course = courseData[courseSlug];
    
    // Update page title and meta
    document.title = `${course.title} - EduConnect`;
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) pageTitle.textContent = `${course.title} - EduConnect`;
    
    // Update hero section
    const titleEl = document.getElementById('course-title');
    const descEl = document.getElementById('course-description');
    const imageEl = document.getElementById('course-image');
    const feeEl = document.getElementById('fee-range');
    const durationEl = document.getElementById('course-duration');
    
    if (titleEl) titleEl.textContent = course.title;
    if (descEl) descEl.textContent = course.description;
    if (imageEl) imageEl.src = course.image;
    if (feeEl) feeEl.textContent = course.feeRange;
    if (durationEl) durationEl.textContent = course.duration;
    
    // Update stats section
    const uniCountEl = document.getElementById('university-count');
    const durationDisplayEl = document.getElementById('duration-display');
    const eligibilityEl = document.getElementById('eligibility-display');
    
    if (uniCountEl) uniCountEl.textContent = course.universityCount;
    if (durationDisplayEl) durationDisplayEl.textContent = course.duration;
    if (eligibilityEl) eligibilityEl.textContent = course.eligibility;
    
    // Populate universities
    populateUniversities(course.universities);
    
    // Populate curriculum
    populateCurriculum(course.curriculum);
    
    // Populate career scope
    populateCareerScope(course.careerScope);
    
    // Initialize university logos carousel
    initializeUniversityLogos();
}

function populateUniversities(universities) {
    const container = document.getElementById('universities-list');
    if (!container) return;
    
    const universitiesHTML = universities.map(uni => `
        <div class="university-card">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${uni.logo}" alt="${uni.name}" class="university-logo">
                </div>
                <div class="col-md-6">
                    <h5 class="mb-1">${uni.name}</h5>
                    <p class="text-muted mb-1">${uni.accreditation}</p>
                    <div class="d-flex align-items-center">
                        <span class="badge bg-warning text-dark me-2">★ ${uni.rating}</span>
                        <small class="text-muted">${uni.duration}</small>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="text-center">
                        <div class="fee-badge">${uni.fee}</div>
                    </div>
                </div>
                <div class="col-md-2">
                    <button class="apply-btn w-100">Apply Now</button>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = universitiesHTML;
}

function populateCurriculum(curriculum) {
    const container = document.getElementById('curriculum-content');
    if (!container) return;
    
    const curriculumHTML = `
        <div class="row">
            <div class="col-lg-8">
                <h5 class="text-primary mb-3">Core Subjects</h5>
                <div class="row">
                    ${curriculum.map((subject, index) => `
                        <div class="col-md-6 mb-2">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>${subject}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="highlight-box mt-4">
                    <h5 class="text-primary">Learning Methodology</h5>
                    <ul>
                        <li>Interactive online lectures</li>
                        <li>Case study analysis</li>
                        <li>Project-based learning</li>
                        <li>Industry expert sessions</li>
                        <li>Virtual labs and simulations</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = curriculumHTML;
}

function populateCareerScope(careers) {
    const container = document.getElementById('career-scope');
    if (!container) return;
    
    const careersHTML = `
        <div class="highlight-box">
            <h5 class="text-primary">Popular Career Paths</h5>
            <div class="row">
                ${careers.map(career => `
                    <div class="col-md-6 mb-2">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-briefcase text-primary me-2"></i>
                            <span>${career}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <h5 class="text-primary mt-4">Salary Expectations</h5>
        <p>Graduates can expect competitive salaries ranging from ₹3-12 LPA, with potential for significant growth based on experience and specialization.</p>
    `;
    
    container.innerHTML = careersHTML;
}

function initializeUniversityLogos() {
    const track = document.getElementById('university-logos-track');
    if (!track) return;
    
    const universities = [
        { name: 'Amity University', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/amity-online-university-logo.jpg' },
        { name: 'Manipal University', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/manipal-online-university-logo.png' },
        { name: 'LPU Online', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/lpu-online-logo.jpg' },
        { name: 'Chandigarh University', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/chandigarh-university-logo.jpg' },
        { name: 'UPES Online', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/upes-online-logo.jpg' },
        { name: 'Jain University', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/jain-university-logo.jpg' },
        { name: 'NMIMS', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/nmims-logo.jpg' },
        { name: 'DY Patil', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/dy-patil-logo.jpg' },
        { name: 'Sharda University', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/sharda-university-logo.jpg' },
        { name: 'GLA University', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/gla-university-logo.jpg' },
        { name: 'Parul University', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/parul-university-logo.jpg' },
        { name: 'VGU', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/vgu-logo.jpg' },
        { name: 'Vignan University', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/vignan-university-logo.jpg' },
        { name: 'SMU Online', logo: 'https://d1aeya7jd2fyco.cloudfront.net/logo/smu-online-logo.jpg' }
    ];
    
    // Create logos HTML - duplicate for seamless animation
    const logosHTML = universities.concat(universities).map(uni => `
        <div class="university-logo">
            <img src="${uni.logo}" alt="${uni.name}" loading="lazy">
        </div>
    `).join('');
    
    track.innerHTML = logosHTML;
}

// Update main initialization
function initializeMainPage() {
    initializeUniversityLogos();
    makeCourseCardsClickable();
}

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeHeader,
        initializeSearch,
        showNotification,
        LoadingManager,
        API,
        courseData,
        initializeCoursePage,
        initializeMainPage
    };
}
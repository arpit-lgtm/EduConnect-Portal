// ========================================
// COURSE COMPARISON SYSTEM - PURE JAVASCRIPT
// No HTML files needed - Everything dynamic!
// ========================================

class CourseComparisonSystem {
    constructor() {
        this.matcher = null;
        this.currentCourse = null;
        this.currentUniversities = [];
        this.selectedUniversities = [];
        this.filters = {
            feeRange: { min: 0, max: 10000000 },
            location: 'all',
            rating: 0,
            nirfRank: 300,
            accreditation: 'all'
        };
        this.sortBy = 'rating'; // rating, fees, nirf, name
        this.sortOrder = 'desc';
        this.initialized = false;
        
        console.log('🎯 Course Comparison System initialized');
        
        // Auto-initialize
        this.initialize();
    }
    
    /**
     * Initialize with matcher
     */
    async initialize() {
        if (typeof courseUniversityMatcher === 'undefined') {
            setTimeout(() => this.initialize(), 500);
            return;
        }
        
        this.matcher = courseUniversityMatcher;
        
        if (!this.matcher.initialized) {
            setTimeout(() => this.initialize(), 500);
            return;
        }
        
        this.initialized = true;
        console.log('✅ Comparison System ready and initialized!');
    }
    
    // ========================================
    // MAIN COMPARISON PAGE GENERATOR
    // ========================================
    
    /**
     * Show full comparison page for a course
     */
    showFullComparison(courseName) {
        console.log('📊 Showing full comparison for:', courseName);
        
        // Get course data
        const comparisonData = this.matcher.getCourseComparisonData(courseName);
        
        if (!comparisonData || comparisonData.totalUniversities === 0) {
            this.showNoDataMessage(courseName);
            return;
        }
        
        this.currentCourse = courseName;
        this.currentUniversities = comparisonData.universities;
        this.selectedUniversities = [];
        
        // Generate and show the comparison page
        this.renderComparisonPage(comparisonData);
        
        // Update meta tags for SEO
        this.updateMetaTags(comparisonData);
        
        // Inject schema markup
        this.injectSchemaMarkup(comparisonData);
    }
    
    /**
     * Show full comparison inline (for dedicated comparison page)
     * This renders into an existing container without overlay styling
     */
    showFullComparisonInline(courseName, containerId = 'comparisonContainer') {
        console.log('📊 Showing inline comparison for:', courseName);
        
        // Get course data
        const comparisonData = this.matcher.getCourseComparisonData(courseName);
        
        if (!comparisonData || comparisonData.totalUniversities === 0) {
            this.showNoDataMessageInline(courseName, containerId);
            return;
        }
        
        this.currentCourse = courseName;
        this.currentUniversities = comparisonData.universities;
        this.selectedUniversities = [];
        
        // Render into the specified container
        this.renderComparisonPageInline(comparisonData, containerId);
        
        // Update meta tags for SEO
        this.updateMetaTags(comparisonData);
        
        // Inject schema markup
        this.injectSchemaMarkup(comparisonData);
    }

    /**
     * Render comparison page inline into container
     */
    renderComparisonPageInline(data, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }

        const pageHTML = `
            <div class="comparison-inline-content">
                <!-- Page Title -->
                <div class="comparison-page-title">
                    <div class="container">
                        <h1 class="comparison-title">${data.courseName} - Compare Universities</h1>
                        <p class="comparison-subtitle">
                            Compare ${data.totalUniversities} universities offering ${data.courseName}
                        </p>
                    </div>
                </div>
                
                <!-- Statistics Bar -->
                <div class="comparison-stats-bar">
                    <div class="container">
                        <div class="stats-grid">
                            <div class="stat-item">
                                <i class="fas fa-university"></i>
                                <div class="stat-content">
                                    <strong>${data.totalUniversities}</strong>
                                    <span>Universities</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-rupee-sign"></i>
                                <div class="stat-content">
                                    <strong>${data.feeRange.formatted}</strong>
                                    <span>Fee Range</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-star"></i>
                                <div class="stat-content">
                                    <strong>${this.calculateAverageRating(data.universities)}</strong>
                                    <span>Avg Rating</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-check-circle"></i>
                                <div class="stat-content">
                                    <strong>${this.selectedUniversities.length}</strong>
                                    <span>Selected for Compare</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Main Content -->
                <div class="comparison-main-content">
                    <div class="container">
                        <div class="row">
                            <!-- Filters Sidebar -->
                            <div class="col-lg-3">
                                <div class="filters-sidebar" id="filtersSidebar">
                                    ${this.generateFiltersSidebar(data)}
                                </div>
                            </div>
                            
                            <!-- Universities List -->
                            <div class="col-lg-9">
                                <!-- Sort & View Options -->
                                <div class="sort-controls">
                                    ${this.generateSortControls()}
                                </div>
                                
                                <!-- Universities Grid -->
                                <div class="universities-comparison-grid" id="universitiesGrid">
                                    ${this.generateUniversitiesGrid(data.universities)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Compare Selected Button (Sticky) -->
                ${this.generateCompareSelectedButton()}
                
                <!-- FAQ Section -->
                <div class="comparison-faq-section">
                    <div class="container">
                        ${this.generateFAQSection(data.courseName)}
                    </div>
                </div>
            </div>
        `;
        
        // Insert into container
        container.innerHTML = pageHTML;
        
        // Attach event listeners
        this.attachComparisonEventListeners();
        
        console.log('✅ Inline comparison page rendered');
    }

    /**
     * Show no data message inline
     */
    showNoDataMessageInline(courseName, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <div class="no-data-message">
                <div class="container text-center py-5">
                    <i class="fas fa-exclamation-circle fa-4x text-warning mb-3"></i>
                    <h3>No Universities Found</h3>
                    <p>Currently, no universities are offering <strong>${courseName}</strong> in our database.</p>
                    <a href="index.html" class="btn btn-primary mt-3">
                        <i class="fas fa-home"></i> Back to Home
                    </a>
                </div>
            </div>
        `;
    }

    /**
     * Open comparison in NEW TAB with pure JavaScript (no HTML files)
     */
    openComparisonInNewTab(courseName) {
        console.log('🚀 Opening comparison in new tab for:', courseName);
        
        // Check if matcher is initialized
        if (!this.matcher || !this.matcher.initialized) {
            console.error('❌ Matcher not initialized yet');
            alert('System is still loading. Please wait a moment and try again.');
            return;
        }
        
        // Get course data
        const comparisonData = this.matcher.getCourseComparisonData(courseName);
        
        if (!comparisonData || comparisonData.totalUniversities === 0) {
            alert(`No universities found offering ${courseName}`);
            return;
        }
        
        console.log('✅ Course data retrieved:', comparisonData.totalUniversities, 'universities');
        
        // Open blank new tab
        const newTab = window.open('', '_blank');
        
        if (!newTab) {
            alert('Please allow popups to view course comparison in new tab');
            return;
        }
        
        // Generate complete HTML document
        const fullHTML = this.generateCompleteHTMLPage(comparisonData);
        
        // Write to new tab
        newTab.document.open();
        newTab.document.write(fullHTML);
        newTab.document.close();
        
        console.log('✅ Comparison page opened in new tab');
    }

    /**
     * Generate complete standalone HTML page (Pure JavaScript - No HTML files needed!)
     */
    generateCompleteHTMLPage(data) {
        // Get the correct base path for assets
        const currentPath = window.location.pathname;
        const basePath = currentPath.substring(0, currentPath.lastIndexOf('/')) + '/';
        const baseUrl = window.location.origin + basePath;
        
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.courseName} - Compare Universities | Educonnect</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
    * { margin: 0; padding: 0; box-sizing: border-box; -webkit-transition: none !important; transition: none !important; -webkit-animation: none !important; animation: none !important; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #f5f7fa; color: #1a202c; }
        
        /* Main Content */
        .comparison-main-content { padding: 1.5rem 0; min-height: 100vh; }
        
        /* Results Header */
        .results-header {
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            margin-bottom: 1.5rem;
            border-left: 4px solid #667eea;
        }
        .results-header h2 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #1a202c;
            margin: 0;
        }
        .results-count {
            font-size: 0.9rem;
            color: #64748b;
            margin-top: 0.25rem;
        }
        
        /* Filters Sidebar - Ultra Modern Design */
        .filters-sidebar {
            background: white;
            padding: 0;
            border-radius: 10px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            overflow: hidden;
            position: sticky;
            top: 85px;
            max-height: calc(100vh - 100px);
        }
        .filters-content {
            padding: 1.25rem;
            overflow-y: auto;
            max-height: calc(100vh - 160px);
        }
        .filters-content::-webkit-scrollbar {
            width: 5px;
        }
        .filters-content::-webkit-scrollbar-track {
            background: #f8fafc;
        }
        .filters-content::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
        .filters-content::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
        .filters-header { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            padding: 1.25rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .filters-header h4 { 
            font-size: 1rem; 
            margin: 0; 
            font-weight: 700;
            letter-spacing: -0.02em;
        }
        .clear-filters-btn {
            background: rgba(255,255,255,0.2);
            color: white;
            border: none;
            padding: 0.4rem 0.75rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            font-weight: 600;
        }
        .clear-filters-btn:hover {
            background: rgba(255,255,255,0.3);
        }
        .filter-group { 
            margin-bottom: 1.25rem;
        }
        .filter-group:last-child {
            margin-bottom: 0;
        }
        .filter-group h5 { 
            font-size: 0.8rem; 
            margin-bottom: 0.75rem; 
            color: #475569;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .filter-group select, .filter-group input {
            width: 100%;
            padding: 0.6rem 0.75rem;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 0.875rem;
            background: #f8fafc;
            color: #1a202c;
            font-weight: 500;
        }
        .filter-group select:focus, .filter-group input:focus {
            outline: none;
            border-color: #667eea;
            background: white;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        .fee-range-inputs { 
            display: flex; 
            gap: 0.5rem; 
            align-items: center; 
            margin-bottom: 0.75rem; 
        }
        .fee-quick-filters { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 0.5rem; 
        }
        .fee-quick-filters button {
            padding: 0.5rem;
            border: 2px solid #e2e8f0;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.8rem;
            color: #475569;
            font-weight: 600;
        }
        .fee-quick-filters button:hover, .fee-quick-filters button.active { 
            background: #667eea;
            border-color: #667eea;
            color: white;
        }
        .apply-filters-btn {
            width: 100%;
            padding: 0.75rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.875rem;
            margin-top: 1rem;
        }
        .apply-filters-btn:hover { 
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        /* Universities Grid - Ultra Professional Compact Design */
        .universities-comparison-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.25rem;
        }
        .university-compare-card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            overflow: hidden;
            border: 1px solid #f1f5f9;
        }
        .university-compare-card:hover { 
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.12);
            border-color: #667eea;
        }
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.875rem 1.125rem;
            background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
            border-bottom: 2px solid #e0e7ff;
        }
        .university-rating {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            font-weight: 700;
            color: #f59e0b;
            background: white;
            padding: 0.35rem 0.65rem;
            border-radius: 6px;
            font-size: 0.8rem;
            box-shadow: 0 2px 4px rgba(245, 158, 11, 0.15);
        }
        .card-body { padding: 1.125rem; }
        .university-name {
            font-size: 1.05rem;
            font-weight: 700;
            margin-bottom: 0.875rem;
            color: #1a202c;
            line-height: 1.3;
        }
        .university-details-grid { 
            display: flex; 
            flex-direction: column; 
            gap: 0.625rem; 
        }
        .detail-item {
            display: flex;
            align-items: flex-start;
            gap: 0.625rem;
            font-size: 0.875rem;
            color: #475569;
            padding: 0.5rem;
            background: #f8fafc;
            border-radius: 6px;
        }
        .detail-item i { 
            color: #667eea; 
            font-size: 1rem;
            margin-top: 0.05rem;
            min-width: 18px;
        }
        .detail-item span {
            flex: 1;
            line-height: 1.4;
            font-weight: 500;
        }
        .specializations-tags {
            margin-top: 0.875rem;
            padding-top: 0.875rem;
            border-top: 2px solid #f1f5f9;
        }
        .specializations-tags strong {
            color: #475569;
            font-size: 0.75rem;
            display: block;
            margin-bottom: 0.625rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 700;
        }
        .tags-container { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 0.5rem; 
        }
        .spec-tag {
            background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
            color: #667eea;
            padding: 0.35rem 0.75rem;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 600;
            border: 1px solid #c7d2fe;
        }
        .spec-tag:hover {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }
        .spec-tag.more {
            background: #f0f0f0;
            color: #666;
            border-color: #e0e0e0;
        }
        /* Website Header Styles - STICKY */
        .header-section { 
            background: white; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
            position: sticky;
            top: 0;
            z-index: 1000;
            margin-bottom: 2rem;
        }
        .navbar { padding: 1rem 0; position: relative; }
        .logo-image { height: 60px; }
        
        /* Back to Home Button - HOME Icon Only */
        .back-home-btn {
            position: absolute;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 1rem;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
        }
        .back-home-btn:hover {
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
            background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%);
        }
        .back-home-btn i {
            font-size: 1.5rem;
        }
        
        /* Website Footer Styles - WHITE BACKGROUND */
        .footer-section { background: white; color: #333; padding: 3rem 0 1rem; margin-top: 3rem; border-top: 1px solid #e0e0e0; }
        .footer-logo { height: 50px; margin-bottom: 1rem; }
        .footer-description { color: #666; font-size: 0.9rem; line-height: 1.6; }
        .footer-heading { font-size: 1.1rem; font-weight: 600; margin-bottom: 1rem; color: #333; }
        .footer-links { list-style: none; padding: 0; }
        .footer-links li { margin-bottom: 0.5rem; }
        .footer-links a { color: #666; text-decoration: none; transition: color 0.3s; }
        .footer-links a:hover { color: #667eea; }
        .newsletter-input { border-radius: 6px 0 0 6px; }
        .btn-newsletter { background: #667eea; color: white; border: none; border-radius: 0 6px 6px 0; padding: 0.6rem 1rem; }
        .newsletter-note { font-size: 0.75rem; color: #888; margin-top: 0.5rem; }
        .newsletter-description { color: #666; font-size: 0.9rem; }
        .footer-bottom { border-top: 1px solid #e0e0e0; padding-top: 1.5rem; margin-top: 2rem; }
        .copyright { color: #666; font-size: 0.9rem; margin: 0; }
        .footer-brand-link { color: #667eea; text-decoration: none; }
        .footer-social { display: flex; align-items: center; gap: 1rem; justify-content: flex-end; }
        .social-text { color: #666; margin-right: 0.5rem; }
        .footer-social-logo { height: 30px; width: 30px; object-fit: contain; }
    </style>
</head>
<body>
    <!-- Website Header -->
    <header class="header-section">
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-items-center me-auto" href="${baseUrl}index.html">
                    <img src="${baseUrl}assets/images/educonnect logo.png" alt="Educonnect" height="60" class="logo-image">
                </a>
                <button class="back-home-btn" onclick="window.close()" title="Back to Home">
                    <i class="fas fa-home"></i>
                </button>
            </div>
        </nav>
    </header>
    
    <!-- Main Content -->
    <div class="comparison-main-content">
        <div class="container">
            <div class="row">
                <!-- Filters Sidebar -->
                <div class="col-lg-3">
                    ${this.generateFiltersSidebarHTML(data)}
                </div>
                
                <!-- Universities List -->
                <div class="col-lg-9">
                    <div class="results-header">
                        <h2>${data.courseName}</h2>
                        <div class="results-count">
                            Showing <strong id="resultCount">${data.totalUniversities}</strong> universities
                            ${data.feeRange ? ` • Fee Range: ${data.feeRange.formatted}` : ''}
                        </div>
                    </div>
                    <div class="universities-comparison-grid" id="universitiesGrid">
                        ${this.generateUniversitiesGridHTML(data.universities)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Website Footer -->
    <footer class="footer-section">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4">
                    <div class="footer-brand">
                        <img src="${baseUrl}assets/images/educonnect logo.png" alt="EduConnect" class="footer-logo">
                        <p class="footer-description">
                            EduConnect provides online courses in partnership with leading universities in India and abroad, assisting working professionals in advancing their careers.
                        </p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-section-content">
                        <h5 class="footer-heading">Our Links</h5>
                        <ul class="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#apply">Apply to EduConnect</a></li>
                            <li><a href="#blogs">Blogs</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-section-content">
                        <h5 class="footer-heading">Popular Programs</h5>
                        <ul class="footer-links">
                            <li><a href="#mba">MBA Programs</a></li>
                            <li><a href="#btech">B.Tech Programs</a></li>
                            <li><a href="#mtech">M.Tech Programs</a></li>
                            <li><a href="#bba">BBA Programs</a></li>
                            <li><a href="#bca">BCA Programs</a></li>
                            <li><a href="#mca">MCA Programs</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-section-content">
                        <h5 class="footer-heading">Latest News & Updates</h5>
                        <p class="newsletter-description">Stay updated with the latest education trends and opportunities</p>
                        <div class="newsletter-signup">
                            <form class="newsletter-form">
                                <div class="input-group">
                                    <input type="email" class="form-control newsletter-input" placeholder="Enter Your Email*" required>
                                    <button class="btn btn-newsletter" type="submit">
                                        <i class="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                            <p class="newsletter-note">Subscribe to get education insights delivered to your inbox</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <p class="copyright">
                            Copyright © 2025 All Rights Reserved by <a href="#" class="footer-brand-link">EduConnect</a>
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="footer-social">
                            <span class="social-text">Follow us:</span>
                            <a href="https://www.facebook.com/profile.php?id=61556825227774" target="_blank" class="footer-social-link">
                                <img src="${baseUrl}assets/images/facebook.png" alt="Facebook" class="footer-social-logo">
                            </a>
                            <a href="https://www.instagram.com/educativo_2024/?hl=en" target="_blank" class="footer-social-link">
                                <img src="${baseUrl}assets/images/instagram.png" alt="Instagram" class="footer-social-logo">
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=919076114175&text=Hi, I need guidance about courses" target="_blank" class="footer-social-link">
                                <img src="${baseUrl}assets/images/whatsapp.png" alt="WhatsApp" class="footer-social-logo">
                            </a>
                            <a href="https://www.linkedin.com/company/educativo-education-technology/" target="_blank" class="footer-social-link">
                                <img src="${baseUrl}assets/images/linkedin.png" alt="LinkedIn" class="footer-social-logo">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Filter Functionality Script -->
    <script>
        // Store all universities data
        const allUniversities = ${JSON.stringify(data.universities)};
        let filteredUniversities = [...allUniversities];
        
        // Filter state
        let selectedLocations = [];
        let minFee = null;
        let maxFee = null;
        
        // Apply Filters Function
        function applyFilters() {
            // Get selected locations from checkboxes
            selectedLocations = Array.from(document.querySelectorAll('.location-checkbox:checked'))
                .map(cb => cb.value);
            
            filteredUniversities = allUniversities.filter(uni => {
                // Filter by location first (if any locations selected)
                if (selectedLocations.length > 0) {
                    const uniLocation = uni.location || '';
                    const matchesLocation = selectedLocations.some(loc => uniLocation.includes(loc));
                    if (!matchesLocation) {
                        return false;
                    }
                }
                
                // Then filter by fees
                if (minFee !== null || maxFee !== null) {
                    if (!uni.fees) return false;
                    
                    const uniFeeMin = uni.fees.min || 0;
                    const uniFeeMax = uni.fees.max || 0;
                    const uniAvgFee = (uniFeeMin + uniFeeMax) / 2;
                    
                    if (minFee !== null && uniAvgFee < minFee) return false;
                    if (maxFee !== null && uniAvgFee > maxFee) return false;
                }
                
                return true;
            });
            
            renderUniversities();
        }
        
        // Render Universities
        function renderUniversities() {
            const grid = document.getElementById('universitiesGrid');
            const count = filteredUniversities.length;
            
            // Update count in UI
            const resultCountEl = document.getElementById('resultCount');
            if (resultCountEl) resultCountEl.textContent = count;
            
            if (count === 0) {
                grid.innerHTML = '<div class="col-12"><div style="text-align:center; padding:3rem; background:white; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1);"><i class="fas fa-search" style="font-size:3rem; color:#ddd; margin-bottom:1rem;"></i><p style="font-size:1.2rem; color:#666;">No universities match your filters</p><p style="color:#999;">Try adjusting your filter criteria</p></div></div>';
                return;
            }
            
            grid.innerHTML = filteredUniversities.map(uni => \`
                <div class="university-compare-card">
                    <div class="card-header">
                        <div class="university-rating">
                            <i class="fas fa-star"></i>
                            <span>\${uni.rating || 'N/A'}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="university-name">\${uni.name}</h3>
                        <div class="university-details-grid">
                            <div class="detail-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>\${uni.location || 'Location not specified'}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-rupee-sign"></i>
                                <span>\${uni.fees ? \`₹\${(uni.fees.min/1000).toFixed(0)}K - ₹\${(uni.fees.max/100000).toFixed(1)}L\` : 'Fees not specified'}</span>
                            </div>
                            \${uni.nirfRanking ? \`
                                <div class="detail-item">
                                    <i class="fas fa-trophy"></i>
                                    <span>NIRF Rank: \${uni.nirfRanking}</span>
                                </div>
                            \` : ''}
                            \${uni.accreditation ? \`
                                <div class="detail-item">
                                    <i class="fas fa-certificate"></i>
                                    <span>\${Array.isArray(uni.accreditation) ? uni.accreditation.join(', ') : uni.accreditation}</span>
                                </div>
                            \` : ''}
                            \${uni.establishedYear ? \`
                                <div class="detail-item">
                                    <i class="fas fa-calendar"></i>
                                    <span>Est. \${uni.establishedYear}</span>
                                </div>
                            \` : ''}
                        </div>
                        \${uni.specializations && uni.specializations.length > 0 ? \`
                            <div class="specializations-tags">
                                <strong>Specializations:</strong>
                                <div class="tags-container">
                                    \${uni.specializations.slice(0, 5).map(spec => 
                                        \`<span class="spec-tag">\${spec}</span>\`
                                    ).join('')}
                                    \${uni.specializations.length > 5 ? 
                                        \`<span class="spec-tag more">+\${uni.specializations.length - 5} more</span>\` 
                                        : ''}
                                </div>
                            </div>
                        \` : ''}
                    </div>
                </div>
            \`).join('');
        }
        
        // Location Filter - Checkboxes
        document.querySelectorAll('.location-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                applyFilters();
            });
        });
        
        // Checkbox label hover effect
        document.querySelectorAll('.location-checkbox-label').forEach(label => {
            label.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.background = 'white';
            });
            label.addEventListener('mouseleave', (e) => {
                e.currentTarget.style.background = 'transparent';
            });
        });
        
        // Fee Range Inputs
        document.getElementById('minFeeInput').addEventListener('input', (e) => {
            minFee = e.target.value ? parseFloat(e.target.value) : null;
        });
        
        document.getElementById('maxFeeInput').addEventListener('input', (e) => {
            maxFee = e.target.value ? parseFloat(e.target.value) : null;
        });
        
        // Fee Quick Filter Buttons
        document.querySelectorAll('.fee-quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                document.querySelectorAll('.fee-quick-btn').forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                const range = e.target.dataset.range;
                switch(range) {
                    case 'under1':
                        minFee = 0;
                        maxFee = 100000;
                        break;
                    case '1to3':
                        minFee = 100000;
                        maxFee = 300000;
                        break;
                    case '3to5':
                        minFee = 300000;
                        maxFee = 500000;
                        break;
                    case 'above5':
                        minFee = 500000;
                        maxFee = null;
                        break;
                }
                applyFilters();
            });
        });
        
        // Apply Filters Button
        document.getElementById('applyFiltersBtn').addEventListener('click', applyFilters);
        
        // Clear Filters
        document.getElementById('clearFiltersBtn').addEventListener('click', () => {
            selectedLocations = [];
            minFee = null;
            maxFee = null;
            // Uncheck all location checkboxes
            document.querySelectorAll('.location-checkbox').forEach(cb => cb.checked = false);
            // Remove active class from fee buttons
            document.querySelectorAll('.fee-quick-btn').forEach(btn => btn.classList.remove('active'));
            // Reset accreditation dropdown
            const accFilter = document.getElementById('accreditationFilter');
            if (accFilter) accFilter.value = 'all';
            filteredUniversities = [...allUniversities];
            renderUniversities();
        });
    </script>
</body>
</html>`;
    }

    /**
     * Generate filters sidebar HTML for new tab
     */
    generateFiltersSidebarHTML(data) {
        const locations = this.extractUniqueLocations(data.universities);
        const accreditations = this.extractUniqueAccreditations(data.universities);
        
        return `
            <div class="filters-sidebar">
                <div class="filters-header">
                    <h4><i class="fas fa-sliders-h"></i> Filters</h4>
                    <button class="clear-filters-btn" id="clearFiltersBtn">Reset</button>
                </div>
                
                <div class="filters-content">
                    <div class="filter-group">
                        <h5>📍 Location</h5>
                        <div class="location-filters-container" style="max-height: 280px; overflow-y: auto; border: 2px solid #e2e8f0; border-radius: 8px; padding: 0.5rem; background: #f8fafc;">
                            ${locations.indian.length > 0 ? `
                                <div class="location-section">
                                    <strong style="display: block; padding: 0.5rem; background: white; margin: -0.5rem -0.5rem 0.625rem -0.5rem; font-size: 0.75rem; font-weight: 700; color: #667eea; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 6px;">🇮🇳 India</strong>
                                    ${locations.indian.map(loc => `
                                        <label class="location-checkbox-label" style="display: flex; align-items: center; gap: 0.625rem; padding: 0.5rem; cursor: pointer; border-radius: 6px; margin-bottom: 0.25rem;">
                                            <input type="checkbox" class="location-checkbox" value="${loc}" style="width: 18px; height: 18px; cursor: pointer; accent-color: #667eea;">
                                            <span style="flex: 1; font-size: 0.85rem; color: #475569; font-weight: 500;">${loc}</span>
                                        </label>
                                    `).join('')}
                                </div>
                            ` : ''}
                            ${locations.international.length > 0 ? `
                                <div class="location-section" style="margin-top: 0.875rem;">
                                    <strong style="display: block; padding: 0.5rem; background: white; margin: 0 -0.5rem 0.625rem -0.5rem; font-size: 0.75rem; font-weight: 700; color: #764ba2; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 6px;">🌍 International</strong>
                                    ${locations.international.map(loc => `
                                        <label class="location-checkbox-label" style="display: flex; align-items: center; gap: 0.625rem; padding: 0.5rem; cursor: pointer; border-radius: 6px; margin-bottom: 0.25rem;">
                                            <input type="checkbox" class="location-checkbox" value="${loc}" style="width: 18px; height: 18px; cursor: pointer; accent-color: #764ba2;">
                                            <span style="flex: 1; font-size: 0.85rem; color: #475569; font-weight: 500;">${loc}</span>
                                        </label>
                                    `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                    <div class="filter-group">
                        <h5>💰 Fee Range</h5>
                        <div class="fee-quick-filters">
                            <button class="fee-quick-btn" data-range="under1">Under ₹1L</button>
                            <button class="fee-quick-btn" data-range="1to3">₹1L - ₹3L</button>
                            <button class="fee-quick-btn" data-range="3to5">₹3L - ₹5L</button>
                            <button class="fee-quick-btn" data-range="above5">Above ₹5L</button>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <h5>🎓 Accreditation</h5>
                        <select id="accreditationFilter">
                            <option value="all">All Accreditations</option>
                            ${accreditations.map(acc => `<option value="${acc}">${acc}</option>`).join('')}
                        </select>
                    </div>
                    
                    <button class="apply-filters-btn" id="applyFiltersBtn">
                        <i class="fas fa-check-circle"></i> Apply Filters
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Generate universities grid HTML for new tab
     */
    generateUniversitiesGridHTML(universities) {
        return universities.map(uni => `
            <div class="university-compare-card">
                <div class="card-header">
                    <div class="select-checkbox">
                        <input type="checkbox" id="select-${uni.id}">
                        <label for="select-${uni.id}">Select to Compare</label>
                    </div>
                    <div class="university-rating">
                        <i class="fas fa-star"></i>
                        <span>${uni.rating || 'N/A'}</span>
                    </div>
                </div>
                
                <div class="card-body">
                    <h3 class="university-name">${uni.name}</h3>
                    
                    <div class="university-details-grid">
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${uni.location || 'Location not specified'}</span>
                        </div>
                        
                        <div class="detail-item">
                            <i class="fas fa-rupee-sign"></i>
                            <span>${uni.fees ? `₹${(uni.fees.min/1000).toFixed(0)}K - ₹${(uni.fees.max/100000).toFixed(1)}L` : 'Fees not specified'}</span>
                        </div>
                        
                        ${uni.nirfRanking ? `
                            <div class="detail-item">
                                <i class="fas fa-trophy"></i>
                                <span>NIRF Rank: ${uni.nirfRanking}</span>
                            </div>
                        ` : ''}
                        
                        ${uni.accreditation ? `
                            <div class="detail-item">
                                <i class="fas fa-certificate"></i>
                                <span>${Array.isArray(uni.accreditation) ? uni.accreditation.join(', ') : uni.accreditation}</span>
                            </div>
                        ` : ''}
                        
                        ${uni.establishedYear ? `
                            <div class="detail-item">
                                <i class="fas fa-calendar"></i>
                                <span>Est. ${uni.establishedYear}</span>
                            </div>
                        ` : ''}
                    </div>
                    
                    ${uni.specializations && uni.specializations.length > 0 ? `
                        <div class="specializations-tags">
                            <strong>Specializations:</strong>
                            <div class="tags-container">
                                ${uni.specializations.slice(0, 5).map(spec => 
                                    `<span class="spec-tag">${spec}</span>`
                                ).join('')}
                                ${uni.specializations.length > 5 ? 
                                    `<span class="spec-tag more">+${uni.specializations.length - 5} more</span>` 
                                    : ''}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    /**
     * Render the full comparison page
     */
    renderComparisonPage(data) {
        const pageHTML = `
            <div class="comparison-full-page" id="comparisonFullPage">
                <!-- Header -->
                <div class="comparison-header">
                    <div class="container">
                        <button class="back-btn" onclick="comparisonSystem.closeComparison()">
                            <i class="fas fa-arrow-left"></i> Back to Home
                        </button>
                        <h1 class="comparison-title">${data.courseName} - Compare Universities</h1>
                        <p class="comparison-subtitle">
                            Compare ${data.totalUniversities} universities offering ${data.courseName}
                        </p>
                    </div>
                </div>
                
                <!-- Statistics Bar -->
                <div class="comparison-stats-bar">
                    <div class="container">
                        <div class="stats-grid">
                            <div class="stat-item">
                                <i class="fas fa-university"></i>
                                <div class="stat-content">
                                    <strong>${data.totalUniversities}</strong>
                                    <span>Universities</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-rupee-sign"></i>
                                <div class="stat-content">
                                    <strong>${data.feeRange.formatted}</strong>
                                    <span>Fee Range</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-star"></i>
                                <div class="stat-content">
                                    <strong>${this.calculateAverageRating(data.universities)}</strong>
                                    <span>Avg Rating</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-check-circle"></i>
                                <div class="stat-content">
                                    <strong>${this.selectedUniversities.length}</strong>
                                    <span>Selected for Compare</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Main Content -->
                <div class="comparison-main-content">
                    <div class="container">
                        <div class="row">
                            <!-- Filters Sidebar -->
                            <div class="col-lg-3">
                                <div class="filters-sidebar" id="filtersSidebar">
                                    ${this.generateFiltersSidebar(data)}
                                </div>
                            </div>
                            
                            <!-- Universities List -->
                            <div class="col-lg-9">
                                <!-- Sort & View Options -->
                                <div class="sort-controls">
                                    ${this.generateSortControls()}
                                </div>
                                
                                <!-- Universities Grid -->
                                <div class="universities-comparison-grid" id="universitiesGrid">
                                    ${this.generateUniversitiesGrid(data.universities)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Compare Selected Button (Sticky) -->
                ${this.generateCompareSelectedButton()}
                
                <!-- FAQ Section -->
                <div class="comparison-faq-section">
                    <div class="container">
                        ${this.generateFAQSection(data.courseName)}
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing comparison page if any
        const existing = document.getElementById('comparisonFullPage');
        if (existing) existing.remove();
        
        // Add to body
        document.body.insertAdjacentHTML('beforeend', pageHTML);
        
        // Show with animation
        setTimeout(() => {
            document.getElementById('comparisonFullPage').classList.add('active');
        }, 10);
        
        // Attach event listeners
        this.attachComparisonEventListeners();
        
        console.log('✅ Comparison page rendered');
    }
    
    // ========================================
    // FILTERS SIDEBAR GENERATOR
    // ========================================
    
    generateFiltersSidebar(data) {
        const locationData = this.extractUniqueLocations(data.universities);
        const accreditations = this.extractUniqueAccreditations(data.universities);
        
        // Combine Indian and international locations
        const allLocations = [...locationData.indian, ...locationData.international];
        
        return `
            <div class="filters-container">
                <div class="filters-header">
                    <h4><i class="fas fa-filter"></i> Filters</h4>
                    <button class="clear-filters-btn" onclick="comparisonSystem.clearFilters()">
                        Clear All
                    </button>
                </div>
                
                <!-- Fee Range Filter -->
                <div class="filter-group">
                    <h5>Fee Range</h5>
                    <div class="fee-range-inputs">
                        <input type="number" id="feeMin" placeholder="Min" 
                               value="${this.filters.feeRange.min}" 
                               onchange="comparisonSystem.updateFeeFilter()">
                        <span>to</span>
                        <input type="number" id="feeMax" placeholder="Max" 
                               value="${this.filters.feeRange.max}" 
                               onchange="comparisonSystem.updateFeeFilter()">
                    </div>
                    <div class="fee-quick-filters">
                        <button onclick="comparisonSystem.setFeeRange(0, 100000)">Under 1L</button>
                        <button onclick="comparisonSystem.setFeeRange(100000, 300000)">1L - 3L</button>
                        <button onclick="comparisonSystem.setFeeRange(300000, 500000)">3L - 5L</button>
                        <button onclick="comparisonSystem.setFeeRange(500000, 10000000)">Above 5L</button>
                    </div>
                </div>
                
                <!-- Location Filter -->
                <div class="filter-group">
                    <h5>Location</h5>
                    <select id="locationFilter" onchange="comparisonSystem.updateLocationFilter()">
                        <option value="all">All Locations</option>
                        ${locationData.indian.length > 0 ? '<optgroup label="India">' : ''}
                        ${locationData.indian.map(loc => `<option value="${loc}">${loc}</option>`).join('')}
                        ${locationData.indian.length > 0 ? '</optgroup>' : ''}
                        ${locationData.international.length > 0 ? '<optgroup label="International">' : ''}
                        ${locationData.international.map(loc => `<option value="${loc}">${loc}</option>`).join('')}
                        ${locationData.international.length > 0 ? '</optgroup>' : ''}
                    </select>
                </div>
                
                <!-- Rating Filter -->
                <div class="filter-group">
                    <h5>Minimum Rating</h5>
                    <div class="rating-filter">
                        <input type="range" id="ratingFilter" min="0" max="5" step="0.5" 
                               value="${this.filters.rating}" 
                               oninput="comparisonSystem.updateRatingFilter(this.value)">
                        <div class="rating-value">
                            <i class="fas fa-star"></i>
                            <span id="ratingValue">${this.filters.rating}</span>+
                        </div>
                    </div>
                </div>
                
                <!-- NIRF Ranking Filter -->
                <div class="filter-group">
                    <h5>NIRF Ranking</h5>
                    <div class="nirf-checkboxes">
                        <label>
                            <input type="checkbox" value="50" onchange="comparisonSystem.updateNirfFilter()">
                            Top 50
                        </label>
                        <label>
                            <input type="checkbox" value="100" onchange="comparisonSystem.updateNirfFilter()">
                            Top 100
                        </label>
                        <label>
                            <input type="checkbox" value="200" onchange="comparisonSystem.updateNirfFilter()">
                            Top 200
                        </label>
                    </div>
                </div>
                
                <!-- Accreditation Filter -->
                <div class="filter-group">
                    <h5>Accreditation</h5>
                    <select id="accreditationFilter" onchange="comparisonSystem.updateAccreditationFilter()">
                        <option value="all">All Accreditations</option>
                        ${accreditations.map(acc => `<option value="${acc}">${acc}</option>`).join('')}
                    </select>
                </div>
                
                <!-- Apply Filters Button -->
                <button class="apply-filters-btn" onclick="comparisonSystem.applyFilters()">
                    <i class="fas fa-check"></i> Apply Filters
                </button>
            </div>
        `;
    }
    
    // ========================================
    // SORT CONTROLS GENERATOR
    // ========================================
    
    generateSortControls() {
        return `
            <div class="sort-controls-container">
                <div class="sort-left">
                    <span class="results-count">${this.currentUniversities.length} Universities Found</span>
                </div>
                <div class="sort-right">
                    <label>Sort by:</label>
                    <select id="sortBySelect" onchange="comparisonSystem.updateSort(this.value)">
                        <option value="rating" ${this.sortBy === 'rating' ? 'selected' : ''}>Rating (High to Low)</option>
                        <option value="fees" ${this.sortBy === 'fees' ? 'selected' : ''}>Fees (Low to High)</option>
                        <option value="nirf" ${this.sortBy === 'nirf' ? 'selected' : ''}>NIRF Ranking</option>
                        <option value="name" ${this.sortBy === 'name' ? 'selected' : ''}>Name (A-Z)</option>
                    </select>
                    <button class="toggle-sort-btn" onclick="comparisonSystem.toggleSortOrder()">
                        <i class="fas fa-sort-amount-${this.sortOrder === 'desc' ? 'down' : 'up'}"></i>
                    </button>
                </div>
            </div>
        `;
    }
    
    // ========================================
    // UNIVERSITIES GRID GENERATOR
    // ========================================
    
    generateUniversitiesGrid(universities) {
        const sortedUniversities = this.sortUniversities(universities);
        
        return sortedUniversities.map(uni => `
            <div class="university-compare-card" data-university-id="${uni.id}">
                <div class="card-header">
                    <div class="select-checkbox">
                        <input type="checkbox" 
                               id="select-${uni.id}" 
                               ${this.selectedUniversities.includes(uni.id) ? 'checked' : ''}
                               onchange="comparisonSystem.toggleSelection('${uni.id}')"
                               ${this.selectedUniversities.length >= 4 && !this.selectedUniversities.includes(uni.id) ? 'disabled' : ''}>
                        <label for="select-${uni.id}">Select to Compare</label>
                    </div>
                    <div class="university-rating">
                        <i class="fas fa-star"></i>
                        <span>${uni.rating || 'N/A'}</span>
                    </div>
                </div>
                
                <div class="card-body">
                    <h3 class="university-name">${uni.name}</h3>
                    
                    <div class="university-details-grid">
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${uni.location || 'Location not specified'}</span>
                        </div>
                        
                        <div class="detail-item">
                            <i class="fas fa-rupee-sign"></i>
                            <span>${uni.fees ? `₹${(uni.fees.min/1000).toFixed(0)}K - ₹${(uni.fees.max/100000).toFixed(1)}L` : 'Fees not specified'}</span>
                        </div>
                        
                        ${uni.nirfRanking ? `
                            <div class="detail-item highlight">
                                <i class="fas fa-trophy"></i>
                                <span>NIRF Rank: ${uni.nirfRanking}</span>
                            </div>
                        ` : ''}
                        
                        ${uni.accreditation ? `
                            <div class="detail-item">
                                <i class="fas fa-certificate"></i>
                                <span>${Array.isArray(uni.accreditation) ? uni.accreditation.join(', ') : uni.accreditation}</span>
                            </div>
                        ` : ''}
                        
                        ${uni.establishedYear ? `
                            <div class="detail-item">
                                <i class="fas fa-calendar"></i>
                                <span>Established: ${uni.establishedYear}</span>
                            </div>
                        ` : ''}
                        
                        ${uni.mode && uni.mode.length > 0 ? `
                            <div class="detail-item">
                                <i class="fas fa-graduation-cap"></i>
                                <span>${uni.mode.join(', ')}</span>
                            </div>
                        ` : ''}
                    </div>
                    
                    ${uni.specializations && uni.specializations.length > 0 ? `
                        <div class="specializations-tags">
                            <strong>Specializations:</strong>
                            <div class="tags-container">
                                ${uni.specializations.slice(0, 5).map(spec => 
                                    `<span class="spec-tag">${spec}</span>`
                                ).join('')}
                                ${uni.specializations.length > 5 ? 
                                    `<span class="spec-tag more">+${uni.specializations.length - 5} more</span>` 
                                    : ''}
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                <div class="card-footer">
                    <button class="btn-view-details" onclick="comparisonSystem.viewUniversityDetails('${uni.id}')">
                        <i class="fas fa-info-circle"></i> View Details
                    </button>
                    <button class="btn-apply-now" onclick="comparisonSystem.applyNow('${uni.id}')">
                        <i class="fas fa-paper-plane"></i> Apply Now
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // ========================================
    // COMPARE SELECTED BUTTON (STICKY)
    // ========================================
    
    generateCompareSelectedButton() {
        return `
            <div class="compare-selected-sticky" id="compareSelectedSticky" style="display: ${this.selectedUniversities.length > 0 ? 'flex' : 'none'}">
                <div class="compare-sticky-content">
                    <span class="selected-count">${this.selectedUniversities.length} universities selected</span>
                    <button class="btn-compare-now" onclick="comparisonSystem.showSideBySideComparison()" 
                            ${this.selectedUniversities.length < 2 ? 'disabled' : ''}>
                        <i class="fas fa-columns"></i> Compare Side by Side
                    </button>
                    <button class="btn-clear-selection" onclick="comparisonSystem.clearSelection()">
                        <i class="fas fa-times"></i> Clear
                    </button>
                </div>
            </div>
        `;
    }
    
    // ========================================
    // FAQ SECTION GENERATOR
    // ========================================
    
    generateFAQSection(courseName) {
        const faqs = this.generateCourseFAQs(courseName);
        
        return `
            <div class="faq-section">
                <h2 class="faq-title">Frequently Asked Questions about ${courseName}</h2>
                <div class="faq-accordion" id="faqAccordion">
                    ${faqs.map((faq, index) => `
                        <div class="faq-item">
                            <button class="faq-question" onclick="comparisonSystem.toggleFAQ(${index})">
                                <span>${faq.question}</span>
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="faq-answer" id="faq-${index}" style="display: none;">
                                <p>${faq.answer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    generateCourseFAQs(courseName) {
        // Generate dynamic FAQs based on course
        return [
            {
                question: `How many universities offer ${courseName}?`,
                answer: `There are ${this.currentUniversities.length} universities offering ${courseName} in India and abroad. You can compare all of them using our filters and find the best match for your career goals.`
            },
            {
                question: `What is the fee range for ${courseName}?`,
                answer: `The fee for ${courseName} typically ranges from ₹50,000 to ₹5,00,000 depending on the university, mode of study (online/distance/regular), and specialization chosen.`
            },
            {
                question: `What are the eligibility criteria for ${courseName}?`,
                answer: `Generally, you need a bachelor's degree (for postgraduate courses) or 12th pass (for undergraduate courses) from a recognized university. Specific requirements may vary by university.`
            },
            {
                question: `How long does ${courseName} take to complete?`,
                answer: `Most ${courseName} programs take 2 years to complete. However, some universities offer accelerated 1-year programs or flexible part-time options for working professionals.`
            },
            {
                question: `Which are the top-rated universities for ${courseName}?`,
                answer: `Use our comparison tool to see top-rated universities. You can sort by rating, NIRF ranking, or fees to find the best university for your needs.`
            }
        ];
    }
    
    // ========================================
    // SIDE-BY-SIDE COMPARISON MODAL
    // ========================================
    
    showSideBySideComparison() {
        if (this.selectedUniversities.length < 2) {
            alert('Please select at least 2 universities to compare');
            return;
        }
        
        const selectedUnis = this.currentUniversities.filter(uni => 
            this.selectedUniversities.includes(uni.id)
        );
        
        const modalHTML = `
            <div class="side-by-side-modal" id="sideBySideModal">
                <div class="modal-overlay" onclick="comparisonSystem.closeSideBySide()"></div>
                <div class="modal-content-wide">
                    <div class="modal-header">
                        <h3><i class="fas fa-columns"></i> Side-by-Side Comparison</h3>
                        <button class="close-btn" onclick="comparisonSystem.closeSideBySide()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="modal-body-comparison">
                        ${this.generateSideBySideTable(selectedUnis)}
                    </div>
                    
                    <div class="modal-footer-actions">
                        <button class="btn-export-pdf" onclick="comparisonSystem.exportComparison()">
                            <i class="fas fa-file-pdf"></i> Export as PDF
                        </button>
                        <button class="btn-share" onclick="comparisonSystem.shareComparison()">
                            <i class="fas fa-share-alt"></i> Share Comparison
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        setTimeout(() => {
            document.getElementById('sideBySideModal').classList.add('show');
        }, 10);
    }
    
    generateSideBySideTable(universities) {
        const comparisonRows = [
            { label: 'University Name', key: 'name' },
            { label: 'Rating', key: 'rating', icon: 'fa-star' },
            { label: 'Location', key: 'location', icon: 'fa-map-marker-alt' },
            { label: 'Fee Range', key: 'fees', format: (fees) => fees ? `₹${(fees.min/1000).toFixed(0)}K - ₹${(fees.max/100000).toFixed(1)}L` : 'N/A' },
            { label: 'NIRF Ranking', key: 'nirfRanking', icon: 'fa-trophy' },
            { label: 'Accreditation', key: 'accreditation', format: (acc) => Array.isArray(acc) ? acc.join(', ') : acc },
            { label: 'Established', key: 'establishedYear', icon: 'fa-calendar' },
            { label: 'Mode of Study', key: 'mode', format: (mode) => Array.isArray(mode) ? mode.join(', ') : mode },
            { label: 'Specializations', key: 'specializations', format: (specs) => Array.isArray(specs) ? specs.slice(0, 3).join(', ') + (specs.length > 3 ? '...' : '') : 'N/A' }
        ];
        
        return `
            <div class="comparison-table-container">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th class="row-label-header">Compare</th>
                            ${universities.map(uni => `
                                <th class="university-header">
                                    <div class="uni-header-content">
                                        <h4>${uni.name}</h4>
                                        <div class="uni-rating-badge">
                                            <i class="fas fa-star"></i> ${uni.rating || 'N/A'}
                                        </div>
                                    </div>
                                </th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${comparisonRows.map(row => `
                            <tr>
                                <td class="row-label">
                                    ${row.icon ? `<i class="fas ${row.icon}"></i>` : ''}
                                    ${row.label}
                                </td>
                                ${universities.map(uni => {
                                    let value = uni[row.key];
                                    if (row.format && value) {
                                        value = row.format(value);
                                    }
                                    return `<td>${value || 'Not specified'}</td>`;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
    
    // ========================================
    // HELPER METHODS
    // ========================================
    
    extractUniqueLocations(universities) {
        const indianStates = new Set();
        const internationalLocations = new Set();
        
        // List of Indian states/territories
        const indianRegions = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
            'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 
            'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 
            'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
            'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Puducherry', 'Chandigarh',
            'Andaman and Nicobar', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Lakshadweep', 
            'Jammu and Kashmir', 'Ladakh'];
        
        universities.forEach(uni => {
            let locationToAdd = null;
            
            // Check if it's an international university
            if (uni.isInternational === true || (uni.country && uni.country !== 'India')) {
                // For international universities, use "State, Country" format
                if (uni.state && uni.country) {
                    // Handle city-states where state and country are the same
                    if (uni.state === uni.country) {
                        locationToAdd = uni.country;
                    } else {
                        locationToAdd = `${uni.state}, ${uni.country}`;
                    }
                } else if (uni.country) {
                    locationToAdd = uni.country;
                } else if (uni.location) {
                    // Fallback: parse from location field
                    const parts = uni.location.split(',').map(p => p.trim());
                    if (parts.length >= 3) {
                        // "City, State, Country" -> use "State, Country"
                        const state = parts[parts.length - 2];
                        const country = parts[parts.length - 1];
                        if (state === country) {
                            locationToAdd = country;
                        } else {
                            locationToAdd = `${state}, ${country}`;
                        }
                    } else if (parts.length === 2) {
                        // "City, Country" -> use "Country"
                        locationToAdd = parts[1];
                    } else {
                        locationToAdd = parts[0];
                    }
                }
                
                if (locationToAdd) {
                    internationalLocations.add(locationToAdd);
                }
            } else if (uni.location) {
                // Indian university
                const parts = uni.location.split(',').map(p => p.trim());
                const state = parts[parts.length - 1]; // Last part is usually state
                
                // Check if it's an Indian state
                if (indianRegions.some(region => state.includes(region) || region.includes(state))) {
                    indianStates.add(state);
                } else {
                    // If not found in Indian regions, treat as international fallback
                    internationalLocations.add(state);
                }
            }
        });
        
        return {
            indian: Array.from(indianStates).sort(),
            international: Array.from(internationalLocations).sort()
        };
    }
    
    extractUniqueAccreditations(universities) {
        const accreditations = new Set();
        universities.forEach(uni => {
            if (uni.accreditation) {
                if (Array.isArray(uni.accreditation)) {
                    uni.accreditation.forEach(acc => accreditations.add(acc));
                } else {
                    accreditations.add(uni.accreditation);
                }
            }
        });
        return Array.from(accreditations).sort();
    }
    
    calculateAverageRating(universities) {
        const rated = universities.filter(uni => uni.rating);
        if (rated.length === 0) return 'N/A';
        const avg = rated.reduce((sum, uni) => sum + uni.rating, 0) / rated.length;
        return avg.toFixed(1);
    }
    
    sortUniversities(universities) {
        return [...universities].sort((a, b) => {
            let comparison = 0;
            
            switch(this.sortBy) {
                case 'rating':
                    comparison = (b.rating || 0) - (a.rating || 0);
                    break;
                case 'fees':
                    const aFee = a.fees ? a.fees.min : Infinity;
                    const bFee = b.fees ? b.fees.min : Infinity;
                    comparison = aFee - bFee;
                    break;
                case 'nirf':
                    const aNirf = a.nirfRanking || 999;
                    const bNirf = b.nirfRanking || 999;
                    comparison = aNirf - bNirf;
                    break;
                case 'name':
                    comparison = a.name.localeCompare(b.name);
                    break;
            }
            
            return this.sortOrder === 'desc' ? -comparison : comparison;
        });
    }
    
    // ========================================
    // EVENT HANDLERS & FILTER METHODS
    // ========================================
    
    updateFeeFilter() {
        const min = parseInt(document.getElementById('feeMin').value) || 0;
        const max = parseInt(document.getElementById('feeMax').value) || 10000000;
        this.filters.feeRange = { min, max };
    }
    
    setFeeRange(min, max) {
        document.getElementById('feeMin').value = min;
        document.getElementById('feeMax').value = max;
        this.filters.feeRange = { min, max };
        this.applyFilters();
    }
    
    updateLocationFilter() {
        this.filters.location = document.getElementById('locationFilter').value;
    }
    
    updateRatingFilter(value) {
        this.filters.rating = parseFloat(value);
        document.getElementById('ratingValue').textContent = value;
    }
    
    updateNirfFilter() {
        // Implementation for NIRF filter
    }
    
    updateAccreditationFilter() {
        this.filters.accreditation = document.getElementById('accreditationFilter').value;
    }
    
    applyFilters() {
        const comparisonData = this.matcher.getCourseComparisonData(this.currentCourse);
        let filtered = comparisonData.universities;
        
        // Apply fee filter
        filtered = filtered.filter(uni => {
            if (!uni.fees) return true;
            return uni.fees.min >= this.filters.feeRange.min && 
                   uni.fees.max <= this.filters.feeRange.max;
        });
        
        // Apply location filter
        if (this.filters.location !== 'all') {
            filtered = filtered.filter(uni => {
                // Check the original location field
                if (uni.location && uni.location.includes(this.filters.location)) {
                    return true;
                }
                
                // For international universities, also check "State, Country" format
                if (uni.isInternational === true || (uni.country && uni.country !== 'India')) {
                    if (uni.state && uni.country) {
                        const stateCountryFormat = `${uni.state}, ${uni.country}`;
                        if (stateCountryFormat === this.filters.location) {
                            return true;
                        }
                    }
                    // Also check if filter matches just the country
                    if (uni.country === this.filters.location) {
                        return true;
                    }
                }
                
                return false;
            });
        }
        
        // Apply rating filter
        if (this.filters.rating > 0) {
            filtered = filtered.filter(uni => 
                (uni.rating || 0) >= this.filters.rating
            );
        }
        
        // Apply accreditation filter
        if (this.filters.accreditation !== 'all') {
            filtered = filtered.filter(uni => {
                if (!uni.accreditation) return false;
                if (Array.isArray(uni.accreditation)) {
                    return uni.accreditation.includes(this.filters.accreditation);
                }
                return uni.accreditation === this.filters.accreditation;
            });
        }
        
        this.currentUniversities = filtered;
        
        // Re-render grid
        document.getElementById('universitiesGrid').innerHTML = 
            this.generateUniversitiesGrid(filtered);
        
        // Update sort controls
        document.querySelector('.sort-controls-container').outerHTML = 
            this.generateSortControls();
            
        console.log(`✅ Filters applied: ${filtered.length} universities found`);
    }
    
    clearFilters() {
        this.filters = {
            feeRange: { min: 0, max: 10000000 },
            location: 'all',
            rating: 0,
            nirfRank: 300,
            accreditation: 'all'
        };
        
        // Reset form elements
        document.getElementById('feeMin').value = 0;
        document.getElementById('feeMax').value = 10000000;
        document.getElementById('locationFilter').value = 'all';
        document.getElementById('ratingFilter').value = 0;
        document.getElementById('ratingValue').textContent = '0';
        document.getElementById('accreditationFilter').value = 'all';
        
        this.applyFilters();
    }
    
    updateSort(sortBy) {
        this.sortBy = sortBy;
        this.applyFilters();
    }
    
    toggleSortOrder() {
        this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
        this.applyFilters();
    }
    
    toggleSelection(universityId) {
        const index = this.selectedUniversities.indexOf(universityId);
        if (index > -1) {
            this.selectedUniversities.splice(index, 1);
        } else {
            if (this.selectedUniversities.length < 4) {
                this.selectedUniversities.push(universityId);
            }
        }
        
        // Update sticky button
        this.updateCompareButton();
    }
    
    updateCompareButton() {
        const stickyBtn = document.getElementById('compareSelectedSticky');
        if (stickyBtn) {
            stickyBtn.outerHTML = this.generateCompareSelectedButton();
        }
    }
    
    clearSelection() {
        this.selectedUniversities = [];
        document.querySelectorAll('.select-checkbox input[type="checkbox"]')
            .forEach(cb => cb.checked = false);
        this.updateCompareButton();
    }
    
    toggleFAQ(index) {
        const answer = document.getElementById(`faq-${index}`);
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block';
    }
    
    closeComparison() {
        const page = document.getElementById('comparisonFullPage');
        if (page) {
            page.classList.remove('active');
            setTimeout(() => page.remove(), 300);
        }
    }
    
    closeSideBySide() {
        const modal = document.getElementById('sideBySideModal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    }
    
    viewUniversityDetails(universityId) {
        alert(`View details for university: ${universityId}\n\nDetailed university page coming soon!`);
    }
    
    applyNow(universityId) {
        alert(`Apply now to university: ${universityId}\n\nApplication system coming soon!`);
    }
    
    exportComparison() {
        alert('Export comparison as PDF - Feature coming soon!');
    }
    
    shareComparison() {
        alert('Share comparison via email/social media - Feature coming soon!');
    }
    
    // ========================================
    // SEO & META TAGS
    // ========================================
    
    updateMetaTags(data) {
        // Update page title
        document.title = `${data.courseName} - Compare ${data.totalUniversities} Universities | Educonnect`;
        
        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `Compare ${data.totalUniversities} universities offering ${data.courseName}. Find the best university with fees ranging from ${data.feeRange.formatted}. Get expert guidance and apply now!`;
        
        // Update keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = `${data.courseName}, university comparison, online education, distance learning, ${this.currentCourse.toLowerCase()} fees, best universities`;
        
        console.log('✅ Meta tags updated');
    }
    
    injectSchemaMarkup(data) {
        // Remove existing schema
        const existing = document.getElementById('courseSchema');
        if (existing) existing.remove();
        
        const schema = {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": data.courseName,
            "description": `Compare ${data.totalUniversities} universities offering ${data.courseName}`,
            "provider": {
                "@type": "Organization",
                "name": "Educonnect",
                "url": window.location.origin
            },
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": data.feeRange.min,
                "highPrice": data.feeRange.max,
                "offerCount": data.totalUniversities
            }
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'courseSchema';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
        
        console.log('✅ Schema markup injected');
    }
    
    showNoDataMessage(courseName) {
        alert(`No universities found offering ${courseName}.\n\nPlease try another course or contact our counselors for assistance.`);
    }
    
    attachComparisonEventListeners() {
        // Add any additional event listeners needed
        console.log('✅ Event listeners attached');
    }
}

// Initialize global instance
const comparisonSystem = new CourseComparisonSystem();

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => comparisonSystem.initialize(), 1000);
    });
} else {
    setTimeout(() => comparisonSystem.initialize(), 1000);
}

// Export globally
window.ComparisonSystem = CourseComparisonSystem;
window.comparisonSystem = comparisonSystem;

console.log('✅ Course Comparison System loaded!');

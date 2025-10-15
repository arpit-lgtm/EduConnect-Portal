/**
 * Component Loader - Loads reusable header and footer components
 */
class ComponentLoader {
    constructor() {
        this.loadComponents();
    }

    async loadComponent(selector, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentPath}`);
            }
            const html = await response.text();
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = html;
            }
        } catch (error) {
            console.warn(`Could not load component ${componentPath}:`, error);
            // Fallback: keep existing content if component loading fails
        }
    }

    async loadComponents() {
        // Load header if header-placeholder exists
        const headerPlaceholder = document.querySelector('#header-placeholder');
        if (headerPlaceholder) {
            await this.loadComponent('#header-placeholder', 'includes/header.html');
        }

        // Load footer if footer-placeholder exists
        const footerPlaceholder = document.querySelector('#footer-placeholder');
        if (footerPlaceholder) {
            await this.loadComponent('#footer-placeholder', 'includes/footer.html');
        }

        // Initialize any interactive components after loading
        this.initializeComponents();
    }

    initializeComponents() {
        // Flash text animation for Ask AI button
        this.initializeFlashText();
        
        // Initialize search functionality
        this.initializeSearch();
    }

    initializeFlashText() {
        // Flash text is now handled in index.html directly
        // This prevents conflicts with multiple flash message systems
        console.log('✅ Flash text handled by main index.html');
    }

    initializeSearch() {
        const searchInput = document.getElementById('headerSearch');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            // Add search functionality here
            console.log('Searching for:', searchTerm);
        });
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ComponentLoader();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentLoader;
}
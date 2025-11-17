// Anti-Scraping & Code Protection Utilities
// Add to _app.js for maximum protection

export function initCodeProtection() {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
    return;
  }

  // 1. Disable text selection on critical elements (optional - can be annoying)
  // document.body.style.userSelect = 'none';
  // document.body.style.webkitUserSelect = 'none';
  
  // 2. Detect and warn about view-source attempts
  document.addEventListener('keydown', (e) => {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
      (e.ctrlKey && e.keyCode === 85) // Ctrl+U (view source)
    ) {
      e.preventDefault();
      console.clear();
      return false;
    }
  });

  // 3. Detect DevTools by checking window dimensions
  let devtoolsOpen = false;
  const threshold = 160;
  
  const widthCheck = () => {
    if (window.outerWidth - window.innerWidth > threshold || 
        window.outerHeight - window.innerHeight > threshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        console.clear();
        console.log('%c⚠️ Unauthorized Access Detected', 'color: red; font-size: 20px; font-weight: bold;');
      }
    } else {
      devtoolsOpen = false;
    }
  };
  
  setInterval(widthCheck, 1000);

  // 4. Watermark console with warning
  console.log('%c⚠️ STOP!', 'color: red; font-size: 40px; font-weight: bold;');
  console.log(
    '%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and will give them access to your account.',
    'font-size: 16px;'
  );
  console.log('%c© 2024 MBA NINJA - All Rights Reserved', 'color: blue; font-size: 12px;');

  // 5. Rate limit console usage
  const originalLog = console.log;
  let logCount = 0;
  const maxLogs = 50;
  const resetInterval = 10000; // Reset every 10 seconds
  
  setInterval(() => { logCount = 0; }, resetInterval);
  
  console.log = function(...args) {
    logCount++;
    if (logCount > maxLogs) {
      console.clear();
      return;
    }
    originalLog.apply(console, args);
  };

  // 6. Disable right-click on specific elements (OPTIONAL - uncomment if needed)
  /*
  document.addEventListener('contextmenu', (e) => {
    // Allow right-click on input fields, textareas
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return true;
    }
    e.preventDefault();
    return false;
  });
  */

  // 7. Detect automation tools (Selenium, Puppeteer, etc.)
  if (navigator.webdriver) {
    console.clear();
    console.log('%c🤖 Automation Detected - Access Restricted', 'color: red; font-size: 20px; font-weight: bold;');
    // Optionally redirect or show warning
    // window.location.href = '/access-denied';
  }

  // 8. Monitor rapid API calls (potential scraping)
  let apiCallCount = 0;
  const maxAPICalls = 30;
  const apiResetInterval = 60000; // 1 minute
  
  setInterval(() => { apiCallCount = 0; }, apiResetInterval);
  
  // Intercept fetch to monitor API calls
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0];
    if (typeof url === 'string' && url.startsWith('/api/')) {
      apiCallCount++;
      if (apiCallCount > maxAPICalls) {
        console.warn('⚠️ Rate limit exceeded');
        return Promise.reject(new Error('Too many requests'));
      }
    }
    return originalFetch.apply(this, args);
  };
}

// Obfuscate sensitive data in memory
export function obfuscateData(data) {
  if (!data) return null;
  
  // Create a shallow copy and mark as protected
  const protectedData = { ...data };
  
  // Add noise properties to confuse debuggers
  protectedData.__protected = true;
  protectedData.__checksum = Math.random().toString(36);
  
  return protectedData;
}

// Check if running in suspicious environment
export function detectSuspiciousEnvironment() {
  const checks = {
    webdriver: !!navigator.webdriver,
    phantom: /PhantomJS/.test(navigator.userAgent),
    selenium: !!window.callPhantom || !!window._phantom,
    headlessChrome: /HeadlessChrome/.test(navigator.userAgent),
    automation: navigator.plugins.length === 0 && !navigator.webdriver,
  };
  
  return Object.values(checks).some(check => check === true);
}

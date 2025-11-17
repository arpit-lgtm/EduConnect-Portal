// Disable React DevTools in production
// Add this to _app.js

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_DISABLE_DEVTOOLS === 'true') {
  // Disable React DevTools
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
    for (let [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === 'function' ? () => {} : null;
    }
  }
  
  // Disable right-click (optional - can be annoying for users)
  // document.addEventListener('contextmenu', (e) => e.preventDefault());
  
  // Detect DevTools opening and warn/redirect (optional)
  const threshold = 160;
  const devtools = /./;
  devtools.toString = function() {
    this.opened = true;
  };
  
  const checkDevTools = setInterval(function() {
    console.log('%c', devtools);
    if (devtools.opened) {
      console.clear();
      console.log('%c🚫 Developer Tools Disabled', 'color: red; font-size: 20px; font-weight: bold;');
      devtools.opened = false;
    }
  }, 1000);
}

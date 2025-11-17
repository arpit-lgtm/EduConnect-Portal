import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../utils/fontawesome';
import { AuthProvider } from '../contexts/AuthContext';
import EduAI from '../components/eduai/EduAI';
import Loading from '../components/loading/Loading';

// 🔒 DISABLE DEVTOOLS IN PRODUCTION
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_DISABLE_DEVTOOLS === 'true') {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
    for (let [key] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = () => {};
    }
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(true); // Start with TRUE - show on initial load
  
  // Check if current page is admin
  const isAdminPage = router.pathname === '/admin-leads' || router.pathname === '/admin-login';

  useEffect(() => {
    let loadingTimer = null;

    // 🎬 SHOW ANIMATION ON PAGE LOAD/REFRESH
    console.log('🚀 PAGE LOADED - SHOWING ANIMATION!');
    setShowLoading(true);
    loadingTimer = setTimeout(() => setShowLoading(false), 5000); // 5 seconds for initial load

    // 🔒 PRODUCTION CODE PROTECTION
    if (process.env.NEXT_PUBLIC_DISABLE_DEVTOOLS === 'true') {
      // Import and initialize protection dynamically
      import('../utils/codeProtection').then(({ initCodeProtection }) => {
        initCodeProtection();
      });
    }

    // Listen for custom showLoading event (for button clicks)
    const handleShowLoading = () => {
      console.log('🎬 CUSTOM EVENT: Show Loading Animation!');
      if (loadingTimer) clearTimeout(loadingTimer);
      setShowLoading(true);
      // Show for 18 SECONDS - keeps looping until page is fully loaded
      loadingTimer = setTimeout(() => setShowLoading(false), 18000);
    };

    // Hide animation when window loses focus (prevents flash when closing child tab)
    const handleBlur = () => {
      console.log('⚠️ Window lost focus - hiding animation to prevent flash');
      if (loadingTimer) {
        clearTimeout(loadingTimer);
      }
      setShowLoading(false);
    };
    
    window.addEventListener('showLoading', handleShowLoading);
    window.addEventListener('blur', handleBlur);
    
    return () => {
      // Cleanup
      window.removeEventListener('showLoading', handleShowLoading);
      window.removeEventListener('blur', handleBlur);
      if (loadingTimer) {
        clearTimeout(loadingTimer);
      }
    };
  }, []);

  return (
    <AuthProvider>
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        {/* Loading Animation - ONLY shows when clicking COMPARE buttons (not on admin page) */}
        {!isAdminPage && <Loading show={showLoading} />}
        
        <Component {...pageProps} />
        
        {/* MBANinjAI Button - Available on ALL pages except admin */}
        {!isAdminPage && <EduAI />}
        
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes logoGlow {
            0% {
              transform: scale(0.95);
              opacity: 0.7;
              filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.4));
            }
            30% {
              transform: scale(1.05);
              opacity: 1;
              filter: drop-shadow(0 0 30px rgba(102, 126, 234, 0.9)) 
                      drop-shadow(0 0 50px rgba(118, 75, 162, 0.7))
                      drop-shadow(0 0 70px rgba(102, 126, 234, 0.5));
            }
            60% {
              transform: scale(1.08);
              opacity: 1;
              filter: drop-shadow(0 0 45px rgba(102, 126, 234, 1)) 
                      drop-shadow(0 0 70px rgba(118, 75, 162, 0.9))
                      drop-shadow(0 0 90px rgba(102, 126, 234, 0.7));
            }
            100% {
              transform: scale(1);
              opacity: 1;
              filter: drop-shadow(0 0 15px rgba(102, 126, 234, 0.5));
            }
          }
        `}</style>
      </>
    </AuthProvider>
  )
}

export default MyApp;
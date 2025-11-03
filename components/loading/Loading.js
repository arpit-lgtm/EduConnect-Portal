import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Loading.module.css';

export default function Loading() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      // Show loading when navigating to a different page
      console.log('🔄 Navigation started to:', url);
      if (url !== router.asPath) {
        setLoading(true);
      }
    };

    const handleComplete = (url) => {
      console.log('✅ Navigation completed to:', url);
      setLoading(false);
    };

    const handleError = (err, url) => {
      console.log('❌ Navigation error:', url);
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContainer}>
        <div className={styles.logoWrapper}>
          <img 
            src="/images/loading.png" 
            alt="MBA NINJA Loading" 
            className={styles.loadingLogo}
          />
          <div className={styles.glowEffect}></div>
        </div>
        <div className={styles.loadingText}>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
        </div>
      </div>
    </div>
  );
}

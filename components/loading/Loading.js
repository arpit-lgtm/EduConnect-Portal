import { useState, useEffect } from 'react';
import styles from './Loading.module.css';

export default function Loading({ show = true }) {
  const [isVisible, setIsVisible] = useState(show);
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) {
      // Show immediately
      setShouldRender(true);
      setIsVisible(true);
    } else {
      // Fade out then remove from DOM
      setIsVisible(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 600); // Match fade-out animation duration
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!shouldRender) return null;

  return (
    <div className={`${styles.loadingOverlay} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContainer}>
        {/* MBA NINJA Logo that unveils from left to right */}
        <div className={styles.logoLoadingContainer}>
          <img 
            src="/images/MBA NINJA.png" 
            alt="MBA NINJA Loading" 
            className={styles.unveilingLogo}
          />
        </div>
      </div>
    </div>
  );
}

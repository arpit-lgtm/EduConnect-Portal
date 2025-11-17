import styles from './Loading.module.css';

export default function Loading({ show = true }) {
  if (!show) return null;

  return (
    <div className={styles.loadingOverlay}>
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

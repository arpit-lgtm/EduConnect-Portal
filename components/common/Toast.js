import { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <>
      <div className={styles.toastOverlay} onClick={onClose}></div>
      <div className={`${styles.toast} ${styles[type]}`}>
        <div className={styles.toastContent}>
          <div className={styles.toastIcon}>
            {type === 'success' && '✅'}
            {type === 'error' && '❌'}
            {type === 'info' && 'ℹ️'}
          </div>
          <div className={styles.toastMessage}>{message}</div>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </div>
    </>
  );
};

export default Toast;

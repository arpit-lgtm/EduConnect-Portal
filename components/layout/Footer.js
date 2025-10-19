import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      {/* Footer Content - 3 Column Grid */}
      <div className={styles.footerContent}>
        {/* Left Column - Logo and Description */}
        <div className={styles.logoSection}>
          <img src="/logo.png" alt="EduConnect" className={styles.logo} />
          <p className={styles.description}>
            EduConnect provides online courses in partnership with leading universities in India and abroad, assisting working professionals in advancing their careers.
          </p>
        </div>

        {/* Middle Column - Our Links */}
        <div className={styles.linksSection}>
          <h5 className={styles.heading}>Our Links</h5>
          <ul className={styles.linksList}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/apply">Apply to EduConnect</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Column - Latest News & Updates */}
        <div className={styles.newsSection}>
          <h5 className={styles.heading}>Latest News & Updates</h5>
          <p className={styles.newsDescription}>
            Stay updated with the latest education trends and opportunities
          </p>
          
          <div className={styles.newsletterForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  className={styles.emailInput}
                  placeholder="Enter Your Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.subscribeBtn}>
                  →
                </button>
              </div>
            </form>
            <p className={styles.subscribeText}>
              Subscribe to get education insights delivered to your inbox
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p className={styles.copyright}>
            Copyright © 2025 All Rights Reserved by <a href="/" className={styles.brandLink}>EduConnect</a>
          </p>
          <div className={styles.socialSection}>
            <span className={styles.followText}>Follow us:</span>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/profile.php?id=61556825227774" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/educativo_2024/?hl=en" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=919076114175&text=Hi, I need guidance about courses" target="_blank" rel="noopener noreferrer">
                <img src="/images/whatsapp.png" alt="WhatsApp" />
              </a>
              <a href="https://www.linkedin.com/company/educativo-education-technology/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

const Header = ({ courseTitle = null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigationLinks = [
    {
      title: 'Courses',
      href: '/browse-courses'
    },
    {
      title: 'Universities',
      href: '/#universities'
    },
    {
      title: 'Counselors',
      href: '/#expert-guidance'
    },
    {
      title: 'Leadership',
      href: '/#leadership'
    },
    {
      title: 'Contact Us',
      href: '/#talk-to-experts'
    }
  ];

  // Handle smooth scrolling for anchor links
  const handleNavClick = (e, href, title) => {
    // Courses link will now navigate normally with loading animation
    // No need to prevent default - let Next.js Link handle it
    
    // Check if it's an anchor link (contains #)
    if (href.includes('#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      
      // If we're not on the home page, navigate there first
      if (router.pathname !== '/') {
        router.push('/').then(() => {
          setTimeout(() => {
            scrollToElement(targetId);
          }, 100);
        });
      } else {
        scrollToElement(targetId);
      }
    }
  };

  const scrollToElement = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          {/* Logo on extreme left */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/MBA NINJA.png"
              alt="MBA NINJA Logo"
              width={180}
              height={48}
              priority
              style={{
                maxWidth: 'none'
              }}
            />
          </Link>

          {/* Navigation in center OR Course Title */}
          {courseTitle ? (
            <div className={styles.courseTitle}>
              <h1>{courseTitle}</h1>
            </div>
          ) : (
            <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
              <ul className={styles.navList}>
                {navigationLinks.map((link, index) => (
                  <li key={index} className={styles.navItem}>
                    <Link 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.title)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Header Actions with University Finder and Social Links */}
          <div className={styles.headerActions}>
            {/* University Finder Button */}
            <Link href="/university-matcher" className={styles.universityFinderBtn}>
              <span className={styles.finderIcon}>🤖</span>
              <div className={styles.finderText}>
                <strong>MBA NINJA - AI DRIVEN</strong>
                <small>Find your perfect university in less than a MINUTE!</small>
              </div>
            </Link>

            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/people/Educativo-EdTech/pfbid02WuUfsLSV31zT6Wkpbt74ZUuAN1k2FgZuzeCWpJiJG5UjRBBX3bFwoCEUspx42R7Vl/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <Image src="/images/facebook.png" alt="Facebook" width={32} height={32} />
              </a>
              <a href="https://www.instagram.com/educativo_your_growth_partner/?igsh=ZDk0Y3M1MjR2bGlu#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} />
              </a>
              <a href="https://www.linkedin.com/company/educativo-education-technology/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=919076114175&text=&source=&data=" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={32} height={32} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className={styles.menuButton} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
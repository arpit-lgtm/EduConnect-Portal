import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import LoginModal from '../login/LoginModal';
import { useAuth } from '../../contexts/AuthContext';

const Header = ({ courseTitle = null, adminMode = false, onLogout = null, showLoginModal: externalShowLoginModal, setShowLoginModal: externalSetShowLoginModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [internalShowLoginModal, setInternalShowLoginModal] = useState(false);
  const router = useRouter();
  const { isLoggedIn, userData, logout } = useAuth();

  // Use external state if provided, otherwise use internal state
  const showLoginModal = externalShowLoginModal !== undefined ? externalShowLoginModal : internalShowLoginModal;
  const setShowLoginModal = externalSetShowLoginModal !== undefined ? externalSetShowLoginModal : setInternalShowLoginModal;

  const navigationLinks = [
    {
      title: 'Courses',
      href: '/#course-explorer'
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
    },
    {
      title: 'Login',
      href: '#',
      isLoginButton: true
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
        <div className={`${styles.container} ${adminMode ? styles.adminContainer : ''}`}>
          {adminMode ? (
            /* Admin Mode: Only centered logo - no link */
            <>
              <div className={styles.logoCenter}>
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
              </div>
              
              {/* Logout button on the right */}
              {onLogout && (
                <button 
                  className={styles.logoutButton}
                  onClick={onLogout}
                  title="Logout"
                >
                  🚪 Logout
                </button>
              )}
            </>
          ) : (
            <>
              {/* Normal Mode: Logo on extreme left */}
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
                        {link.isLoginButton ? (
                          isLoggedIn && userData ? (
                            // Show welcome message with dropdown
                            <div className={styles.userWelcome}>
                              <span className={styles.welcomeText}>
                                Welcome, <strong>{userData.fullName?.split(' ')[0] || 'User'}</strong>!
                              </span>
                              <button 
                                className={styles.logoutBtn}
                                onClick={(e) => {
                                  e.preventDefault();
                                  logout();
                                  router.push('/');
                                }}
                                title="Logout"
                              >
                                Logout
                              </button>
                            </div>
                          ) : (
                            <a 
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setShowLoginModal(true);
                              }}
                            >
                              {link.title}
                            </a>
                          )
                        ) : (
                          <Link 
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href, link.title)}
                          >
                            {link.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* Header Actions with University Finder and Social Links - Hide in admin mode */}
              {!adminMode && (
                <div className={styles.headerActions}>
                {/* University Finder Button */}
                <Link href="/university-matcher" className={styles.universityFinderBtn}>
                  <span className={styles.finderIcon}>🤖</span>
                  <div className={styles.finderText}>
                    <strong>Ask MBA-NINJA-AI#</strong>
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
              )}

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
            </>
          )}
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </header>
  );
};

export default Header;
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    {
      title: 'Explore',
      href: '/universities',
      submenu: [
        { title: 'Featured Universities', href: '/top-universities' },
        { title: 'University Rankings', href: '/rankings' },
        { title: 'Universities Finder - AI DRIVEN !', href: '/university-matcher' },
        { title: 'Find Your Match', href: '/university-finder' },
        { title: 'All Universities', href: '/universities-list' }
      ]
    },
    {
      title: 'Programs',
      href: '/programs',
      submenu: [
        { title: 'Undergraduate', href: '/undergraduate' },
        { title: 'Postgraduate', href: '/postgraduate' },
        { title: 'Certificate Programs', href: '/certificates' },
        { title: 'Diploma Courses', href: '/diploma' },
        { title: 'Professional Courses', href: '/professional' }
      ]
    },
    {
      title: 'Study Modes',
      href: '/study-modes',
      submenu: [
        { title: 'Online Learning', href: '/online-learning' },
        { title: 'Distance Education', href: '/distance-education' },
        { title: 'Hybrid Programs', href: '/hybrid-programs' }
      ]
    },
    {
      title: 'Resources',
      href: '/resources',
      submenu: [
        { title: 'Career Guide', href: '/career-guide' },
        { title: 'Success Stories', href: '/success-stories' },
        { title: 'Learning Tips', href: '/learning-tips' },
        { title: 'Compare Programs', href: '/compare' }
      ]
    },
    {
      title: 'Support',
      href: '/support',
      submenu: [
        { title: 'Academic Counseling', href: '/counseling' },
        { title: 'Admission Help', href: '/admission-help' },
        { title: 'Financial Aid', href: '/financial-aid' },
        { title: 'Student Services', href: '/student-services' }
      ]
    },
    {
      title: 'About Us',
      href: '/about',
      submenu: [
        { title: 'Our Mission', href: '/mission' },
        { title: 'Expert Team', href: '/team' },
        { title: 'Contact Us', href: '/contact' }
      ]
    }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          {/* Logo on extreme left */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="EduConnect Logo"
              width={180}
              height={48}
              priority
              style={{
                maxWidth: 'none'
              }}
            />
          </Link>

          {/* Navigation in center */}
          <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
            <ul className={styles.navList}>
              {navigationLinks.map((link, index) => (
                <li key={index} className={styles.navItem}>
                  <Link href={link.href}>
                    {link.title}
                  </Link>
                  {link.submenu && (
                    <ul className={styles.submenu}>
                      {link.submenu.map((sublink, subIndex) => (
                        <li key={subIndex}>
                          <Link href={sublink.href}>
                            {sublink.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions with University Finder and Social Links */}
          <div className={styles.headerActions}>
            {/* University Finder Button */}
            <Link href="/university-matcher" className={styles.universityFinderBtn}>
              <span className={styles.finderIcon}>🤖</span>
              <div className={styles.finderText}>
                <strong>University finder - AI DRIVEN !</strong>
                <small>Find your perfect university in 2 minutes!</small>
              </div>
            </Link>

            <div className={styles.socialLinks}>
              <a href="https://facebook.com/educativo.in" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <Image src="/images/facebook.png" alt="Facebook" width={32} height={32} />
              </a>
              <a href="https://www.instagram.com/educativo.in" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} />
              </a>
              <a href="https://www.linkedin.com/company/educativo-in" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
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
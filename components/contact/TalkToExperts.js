import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TalkToExperts.module.css';

export default function TalkToExperts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    alert('Thank you! Our experts will contact you soon.');
    setFormData({ name: '', phone: '', email: '', course: '' });
  };

  return (
    <section className={styles.talkToExpertsSection}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h2 className={styles.mainHeading}>Talk to Our Experts</h2>
          <p className={styles.sectionSubtitle}>
            Connect with our education counselors for personalized guidance and make informed decisions about your academic future
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Contact Information Cards */}
          <div className={styles.contactCardsColumn}>
            {/* First Row - Phone and WhatsApp */}
            <div className={styles.cardsGrid}>
              {/* Phone Card */}
              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <FontAwesomeIcon icon="phone-alt" />
                </div>
                <div className={styles.contactCardContent}>
                  <h5>Call Our Experts</h5>
                  <p className={styles.contactDescription}>Speak directly with our counselors</p>
                  <div className={styles.contactLinks}>
                    <a href="tel:+919076114175" className={styles.contactBtn}>+91 9076 114 175</a>
                    <a href="tel:+912240033448" className={styles.contactBtn}>+91 22 4003 3448</a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className={`${styles.contactCard} ${styles.whatsappCard}`}>
                <div className={styles.contactCardIcon}>
                  <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                </div>
                <div className={styles.contactCardContent}>
                  <h5>WhatsApp Support</h5>
                  <p className={styles.contactDescription}>Get instant responses</p>
                  <div className={styles.contactLinks}>
                    <a 
                      href="https://api.whatsapp.com/send?phone=919076114175&text=Hi, I need guidance about courses" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.contactBtn} ${styles.whatsappBtn}`}
                    >
                      <FontAwesomeIcon icon={['fab', 'whatsapp']} /> Chat Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Email and Office */}
            <div className={`${styles.cardsGrid} ${styles.secondRow}`}>
              {/* Email Card */}
              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <FontAwesomeIcon icon="envelope" />
                </div>
                <div className={styles.contactCardContent}>
                  <h5>Email Support</h5>
                  <p className={styles.contactDescription}>Detailed inquiries welcome</p>
                  <div className={styles.contactLinks}>
                    <a href="mailto:admissions@educativo.in" className={styles.contactBtn}>
                      admissions@educativo.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Card */}
              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <FontAwesomeIcon icon="map-marker-alt" />
                </div>
                <div className={styles.contactCardContent}>
                  <h5>Visit Our Office</h5>
                  <p className={styles.contactDescription}>Located in Thane, Maharashtra</p>
                  <div className={styles.contactLinks}>
                    <span className={styles.officeAddress}>
                      207, Lodha IT Park<br />Wagle Estate, Thane (W)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className={styles.formColumn}>
            <div className={styles.quickContactForm}>
              <div className={styles.formHeader}>
                <h4>Get Free Counselling</h4>
                <p>Fill the form for instant callback</p>
              </div>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={styles.formControl}
                    required
                  >
                    <option value="">Select Course Interest</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="BBA">BBA</option>
                    <option value="BCA">BCA</option>
                    <option value="MA">MA</option>
                    <option value="MSc">M.Sc</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  <FontAwesomeIcon icon="paper-plane" /> Request Callback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

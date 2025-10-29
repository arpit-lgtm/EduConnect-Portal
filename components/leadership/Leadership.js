import React, { useState } from 'react';
import styles from './Leadership.module.css';

export default function Leadership() {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const founders = [
    {
      id: 1,
      name: 'Asad Farooqui',
      designation: 'CEO & Founder',
      image: '/images/Asad Farooqui.png',
      paragraph1: `Asad Farooqui is the visionary CEO and Founder of Educonnect with over 15 years of experience in the education technology sector. He has dedicated his career to making quality education accessible to students across the globe through innovative distance learning solutions.`,
      paragraph2: `The journey of Educonnect began with a powerful vision to bridge the gap between aspiring students and world-class universities. Asad has been instrumental in establishing partnerships with over 150 universities globally and is recognized as a leading voice in EdTech innovation.`
    },
    {
      id: 2,
      name: 'Arshad Farooqui',
      designation: 'CFO & Co-Founder',
      image: '/images/Arshad Farooqui.png',
      paragraph1: `Arshad Farooqui serves as the CFO and Co-Founder of Educonnect, bringing strong financial acumen and strategic planning expertise. He has been pivotal in scaling the company and establishing it as a trusted name in distance education.`,
      paragraph2: `With an MBA in Finance and over 12 years of experience in financial management, Arshad has helped Educonnect achieve sustainable growth. Under his financial leadership, the company has expanded operations across multiple states and established a robust framework supporting thousands of students annually.`
    },
    {
      id: 3,
      name: 'Abdul Sayed',
      designation: 'VP, Business',
      image: '/images/Abdul Sayed.png',
      paragraph1: `Abdul Sayed is the Vice President of Business at Educonnect, bringing extensive experience in business development and strategic partnerships. His focus on building strong relationships with universities and corporate partners has been instrumental in the company's growth.`,
      paragraph2: `With over 10 years in business development and sales leadership roles, Abdul has a proven track record of driving growth and creating value. He has successfully negotiated partnerships with numerous universities and corporate organizations, helping Educonnect establish itself as a leading platform in distance education.`
    }
  ];

  const openModal = (founder) => {
    setSelectedFounder(founder);
  };

  const closeModal = () => {
    setSelectedFounder(null);
  };

  return (
    <>
      <section id="leadership" className={styles.leadershipSection}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Meet Our Leadership</h2>
          <p className={styles.subheading}>
            Visionary leaders committed to transforming education
          </p>
          
          <div className={styles.foundersGrid}>
            {founders.map(founder => (
              <div 
                key={founder.id} 
                className={styles.founderCard}
                onClick={() => openModal(founder)}
              >
                <div className={styles.imageContainer}>
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className={styles.founderImage}
                  />
                </div>
                <div className={styles.founderInfo}>
                  <h3 className={styles.founderName}>{founder.name}</h3>
                  <p className={styles.founderDesignation}>{founder.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedFounder && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            
            <div className={styles.modalHeader}>
              <img 
                src={selectedFounder.image} 
                alt={selectedFounder.name}
                className={styles.modalImage}
              />
              <div className={styles.modalHeaderText}>
                <h2 className={styles.modalName}>{selectedFounder.name}</h2>
                <p className={styles.modalDesignation}>{selectedFounder.designation}</p>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.section}>
                <p className={styles.sectionText}>{selectedFounder.paragraph1}</p>
              </div>

              <div className={styles.section}>
                <p className={styles.sectionText}>{selectedFounder.paragraph2}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

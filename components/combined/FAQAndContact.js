import React from 'react';
import FAQ from '../faq/FAQ';
import dynamic from 'next/dynamic';
import styles from './FAQAndContact.module.css';

// Import TalkToExperts dynamically to avoid SSR hydration issues
const TalkToExperts = dynamic(() => import('../contact/TalkToExperts'), {
  ssr: false
});

const FAQAndContact = () => {
  return (
    <section className={styles.combinedSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <FAQ />
        </div>
        <div className={styles.rightColumn}>
          <TalkToExperts />
        </div>
      </div>
    </section>
  );
};

export default FAQAndContact;

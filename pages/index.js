import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/layout/Header';
import HeroCarousel from '../components/carousel/HeroCarousel';
import Stats from '../components/stats/Stats';
import BrowseCategories from '../components/browse/BrowseCategories';
import CourseExplorer from '../components/browse/CourseExplorer';
import ExpertGuidance from '../components/experts/ExpertGuidance';
import Leadership from '../components/leadership/Leadership';
import Universities from '../components/universities/Universities';
import VideoTestimonials from '../components/testimonials/VideoTestimonials';
import FAQ from '../components/faq/FAQ';
import dynamic from 'next/dynamic';
import Footer from '../components/layout/Footer';

// Import TalkToExperts dynamically to avoid SSR hydration issues
const TalkToExperts = dynamic(() => import('../components/contact/TalkToExperts'), {
  ssr: false
});

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>MBA NINJA - Compare Universities & Courses</title>
        <meta name="description" content="Compare universities, courses, and find the perfect educational path for you" />
        <link rel="icon" href="/favicon.ico" />
        <script src="/assets/js/comprehensive-unified-database-COMPLETE.js" async />
      </Head>

      <Header showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />

      <main className={styles.main}>
        <HeroCarousel />
        <Stats />
        <div className={styles.compareTaglineContainer}>
          <h3 className={styles.compareTaglineHeading}>UNIVERSITY COMPASS</h3>
          <p className={styles.compareTagline}>
            Don't Just Choose a University. Choose Your Future. - Use our tool to make a strategic and informed decision.
          </p>
        </div>
        <div id="browse-courses">
          <BrowseCategories />
        </div>
        <VideoTestimonials />
        <div id="course-explorer">
          <CourseExplorer onLoginRequired={() => setShowLoginModal(true)} />
        </div>
        <div id="universities">
          <Universities />
        </div>
        <FAQ />
        <div id="leadership">
          <Leadership />
        </div>
        <div id="expert-guidance">
          <ExpertGuidance />
        </div>
        <div id="talk-to-experts">
          <TalkToExperts />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
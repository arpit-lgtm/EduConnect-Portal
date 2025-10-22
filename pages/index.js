import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/layout/Header';
import HeroCarousel from '../components/carousel/HeroCarousel';
import Stats from '../components/stats/Stats';
import BrowseCategories from '../components/browse/BrowseCategories';
import ExpertGuidance from '../components/experts/ExpertGuidance';
import Universities from '../components/universities/Universities';
import VideoTestimonials from '../components/testimonials/VideoTestimonials';
import FAQ from '../components/faq/FAQ';
import dynamic from 'next/dynamic';
import Footer from '../components/layout/Footer';
import EduAI from '../components/eduai/EduAI';

// Import TalkToExperts dynamically to avoid SSR hydration issues
const TalkToExperts = dynamic(() => import('../components/contact/TalkToExperts'), {
  ssr: false
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EduConnect - Compare Universities & Courses</title>
        <meta name="description" content="Compare universities, courses, and find the perfect educational path for you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <HeroCarousel />
        <Stats />
        <BrowseCategories />
        <VideoTestimonials />
        <Universities />
        <FAQ />
        <ExpertGuidance />
        <TalkToExperts />
      </main>
      
      <Footer />
      
      {/* AskEduAI Button & Video - Only on Home Page */}
      <EduAI />
    </div>
  );
}
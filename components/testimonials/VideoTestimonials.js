import React, { useState, useRef, useEffect } from 'react';
import styles from './VideoTestimonials.module.css';

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState({});
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const generateThumbnail = (videoUrl, videoId) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.preload = 'metadata';
      
      video.onloadedmetadata = () => {
        // Use different timestamps for better frames
        const timestamps = {
          4: 10,  // Amity - try 10 seconds
          5: 3,   // DBA - try 3 seconds
        };
        video.currentTime = timestamps[videoId] || 1;
      };
      
      video.onseeked = () => {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          const videoWidth = video.videoWidth || 640;
          const videoHeight = video.videoHeight || 360;
          
          // Calculate aspect ratio to crop black bars
          const videoAspect = videoWidth / videoHeight;
          const targetAspect = 16 / 9; // Target aspect ratio
          
          let sourceX = 0;
          let sourceY = 0;
          let sourceWidth = videoWidth;
          let sourceHeight = videoHeight;
          
          // Crop black bars if aspect ratios don't match
          if (videoAspect > targetAspect) {
            // Video is wider - crop sides
            sourceWidth = videoHeight * targetAspect;
            sourceX = (videoWidth - sourceWidth) / 2;
          } else if (videoAspect < targetAspect) {
            // Video is taller - crop top and bottom
            sourceHeight = videoWidth / targetAspect;
            sourceY = (videoHeight - sourceHeight) / 2;
          }
          
          canvas.width = 640;
          canvas.height = 360;
          
          // Draw cropped video frame
          ctx.drawImage(
            video,
            sourceX, sourceY, sourceWidth, sourceHeight,
            0, 0, canvas.width, canvas.height
          );
          
          const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.8);
          
          setThumbnails(prev => ({
            ...prev,
            [videoId]: thumbnailUrl
          }));
          
          resolve(thumbnailUrl);
        } catch (error) {
          console.error('Error generating thumbnail:', error);
          resolve(null);
        }
      };
      
      video.onerror = (error) => {
        console.error('Video load error:', error);
        resolve(null);
      };
      
      video.src = videoUrl;
      video.load();
    });
  };

  useEffect(() => {
    // Generate thumbnails for all videos with retry mechanism
    const generateAllThumbnails = async () => {
      for (const video of testimonials) {
        if (!thumbnails[video.id]) {
          try {
            await generateThumbnail(video.videoUrl, video.id);
          } catch (error) {
            console.error(`Failed to generate thumbnail for ${video.title}:`, error);
          }
        }
      }
    };
    
    generateAllThumbnails();
  }, []);

  const testimonials = [
    {
      id: 1,
      title: 'DY Patil University Online',
      description: 'Discover World-Class Education & Career Opportunities',
      thumbnail: '/images/testimonials/video1-thumb.jpg',
      videoUrl: '/videos/DPU 1.mp4',
      views: '12.5K',
      university: 'DY Patil University',
      type: 'Online Programs',
      orientation: 'landscape' // Horizontal screen
    },
    {
      id: 3,
      title: 'MIT University Online',
      description: 'Technology Excellence & Innovation Hub',
      thumbnail: '/images/testimonials/video3-thumb.jpg',
      videoUrl: '/videos/MIT.mp4',
      views: '15.7K',
      university: 'MIT University',
      type: 'Tech Programs',
      orientation: 'portrait' // Shot vertically
    },
    {
      id: 4,
      title: 'Amity University Online',
      description: 'Comprehensive Online Education & Global Recognition',
      thumbnail: '/images/testimonials/video4-thumb.jpg',
      videoUrl: '/videos/Amity University .mp4',
      views: '18.2K',
      university: 'Amity University',
      type: 'Online Programs',
      orientation: 'landscape'
    },
    {
      id: 2,
      title: 'DY Patil University Campus',
      description: 'Excellence in Digital Learning & Innovation',
      thumbnail: '/images/testimonials/video2-thumb.jpg',
      videoUrl: '/videos/DPU 2.mp4',
      views: '8.3K',
      university: 'DY Patil University',
      type: 'Campus Life',
      orientation: 'portrait' // Shot vertically
    },
    {
      id: 6,
      title: 'Global MBA Program',
      description: 'International Business Excellence & Leadership Skills',
      thumbnail: '/images/testimonials/video6-thumb.jpg',
      videoUrl: '/videos/Global MBA-1.mp4',
      views: '14.6K',
      university: 'Global Programs',
      type: 'MBA Programs',
      orientation: 'landscape'
    },
    {
      id: 5,
      title: 'Doctor of Business Administration (DBA)',
      description: 'Advanced Leadership & Strategic Business Excellence',
      thumbnail: '/images/testimonials/video5-thumb.jpg',
      videoUrl: '/videos/DBA.mp4',
      views: '9.8K',
      university: 'Educonnect Platform',
      type: 'Doctoral Programs',
      orientation: 'portrait'
    },
    {
      id: 7,
      title: 'Global MBA Experience',
      description: 'World-Class Education & Career Transformation',
      thumbnail: '/images/testimonials/video7-thumb.jpg',
      videoUrl: '/videos/Global MBA 2.mp4',
      views: '11.3K',
      university: 'Global Programs',
      type: 'MBA Programs',
      orientation: 'portrait'
    }
  ];

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setPlayingVideo(video.id);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setPlayingVideo(null);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Educational Excellence Spotlight</h2>
          <p className={styles.subtitle}>Explore premier universities, programs and success stories</p>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={`${styles.navButton} ${styles.navLeft}`} onClick={scrollLeft} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className={styles.videosGrid} ref={scrollContainerRef}>
            {testimonials.map(testimonial => (
            <div 
              key={testimonial.id}
              className={`${styles.videoCard} ${playingVideo && playingVideo !== testimonial.id ? styles.greyedOut : ''} ${testimonial.orientation === 'portrait' ? styles.portraitCard : styles.landscapeCard}`}
              onClick={() => openVideoModal(testimonial)}
            >
              <div className={styles.thumbnailContainer}>
                {thumbnails[testimonial.id] ? (
                  <img 
                    src={thumbnails[testimonial.id]} 
                    alt={testimonial.title}
                    className={styles.thumbnail}
                  />
                ) : (
                  <div className={`${styles.placeholderThumbnail} ${styles.loading}`}>
                    <div className={styles.thumbnailText}>
                      <span className={styles.universityLogo}>{testimonial.university}</span>
                      <span className={styles.loadingText}>Generating preview...</span>
                    </div>
                  </div>
                )}
                <div className={styles.playButton}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="white"/>
                  </svg>
                </div>
                <div className={styles.viewsCounter}>
                  <span className={styles.viewsIcon}>👁</span>
                  <span>{testimonial.views}</span>
                </div>
              </div>
              
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{testimonial.title}</h3>
                <p className={styles.videoDescription}>{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.navButton} ${styles.navRight}`} onClick={scrollRight} aria-label="Scroll right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className={styles.videoModal} onClick={closeVideoModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeVideoModal}>
              ×
            </button>
            <video 
              controls 
              autoPlay
              className={`${styles.modalVideo} ${selectedVideo?.orientation === 'portrait' ? styles.portraitVideo : styles.landscapeVideo}`}
              src={selectedVideo.videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from '@/app/Styles/components/protfolio.module.css';
import Image from 'next/image';

/**
 * Portfolio hero section component with video background and overlay content
 * @returns {JSX.Element} Portfolio hero section component
 */
const Portfolio = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      // Ensure video plays
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className={styles.heroSection} aria-labelledby="hero-title">
      <div className={styles.section1outer}>
        <div className={styles.subtextdiv}>
          <div className={styles.maintextdiv}></div>
          
          {/* Dynamic Background Overlay */}
          <div 
            className={styles.dynamicBackground}
            style={{
              background: `linear-gradient(135deg, 
                rgba(255, 105, 180, ${Math.min(0.8, scrollY * 0.0005)}) 0%, 
                rgba(138, 43, 226, ${Math.min(0.8, scrollY * 0.0005)}) 25%, 
                rgba(64, 224, 208, ${Math.min(0.8, scrollY * 0.0005)}) 50%, 
                rgba(255, 215, 0, ${Math.min(0.8, scrollY * 0.0005)}) 75%, 
                rgba(255, 69, 0, ${Math.min(0.8, scrollY * 0.0005)}) 100%)`,
              backdropFilter: `blur(${Math.min(20, scrollY * 0.02)}px)`,
              transition: 'all 0.3s ease-out'
            }}
          />
          
          {/* Floating Particles */}
          <div 
            className={styles.floatingParticles}
            style={{
              opacity: Math.min(1, scrollY * 0.001),
              transform: `translateY(${scrollY * 0.3}px)`,
              transition: 'all 0.3s ease-out'
            }}
          >
            <div className={styles.particle} style={{ left: '10%', animationDelay: '0s' }}></div>
            <div className={styles.particle} style={{ left: '20%', animationDelay: '1s' }}></div>
            <div className={styles.particle} style={{ left: '30%', animationDelay: '2s' }}></div>
            <div className={styles.particle} style={{ left: '40%', animationDelay: '3s' }}></div>
            <div className={styles.particle} style={{ left: '50%', animationDelay: '4s' }}></div>
            <div className={styles.particle} style={{ left: '60%', animationDelay: '5s' }}></div>
            <div className={styles.particle} style={{ left: '70%', animationDelay: '6s' }}></div>
            <div className={styles.particle} style={{ left: '80%', animationDelay: '7s' }}></div>
            <div className={styles.particle} style={{ left: '90%', animationDelay: '8s' }}></div>
          </div>
          
          <video 
            src="/media/Smoke.mp4" 
            autoPlay 
            loop 
            muted
            playsInline
            preload="auto"
            className={styles.smokevideo}
            ref={videoRef}
            aria-hidden="true"
            onError={(e) => console.error('Video error:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            style={{
              transform: `scale(${Math.max(0.3, 1 - scrollY * 0.001)})`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          
          <div 
            className={styles.pictureOverlay}
            style={{
              transform: `translate(-50%, -50%) scale(${Math.max(0.3, 1 - scrollY * 0.001)})`,
              transformOrigin: 'center center',
              transition: 'transform 0.1s ease-out'
            }}
          >
            <Image
              src="/media/image.png"
              alt="Portfolio hero image" 
              width={1200}
              height={1200}
              className={styles.overlayImage}
              priority
            />
          </div>
          
          <div 
            className={styles.overlayText}
            style={{
              transform: `scale(${Math.max(0.3, 1 - scrollY * 0.001)}) translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            Welcome to My Website
          </div>
          
          <div 
            className={styles.overlayText2}
            style={{
              transform: `scale(${Math.max(0.3, 1 - scrollY * 0.001)}) translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            Hi, I&apos;m,
          </div>
          <div 
            className={styles.overlayText3}
            style={{
              transform: `scale(${Math.max(0.3, 1 - scrollY * 0.001)}) translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            BERA HALLUBI
          </div>
        </div>
        
        <div className={styles.projectcontainer}>
          <div className={styles.projectcard}></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
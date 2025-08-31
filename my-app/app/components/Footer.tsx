"use client";

import React from 'react';
import styles from '@/app/Styles/components/Footer.module.css';
import animationStyles from '@/app/Styles/components/smoothAnimations.module.css';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';
import Image from 'next/image';
/**
 * Footer component with contact information and social links
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px'
  });

  return (
    <footer 
      ref={elementRef}
      id="contact" 
      className={`${styles.footer} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : ''}`} 
      aria-labelledby="contact-title"
    >
      <div className={styles.container}>
        <h2 
          id="contact-title" 
          className={`${styles.title} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger1}`}
        >
          Get In Touch
        </h2>
        <div className={styles.content}>
          <div className={`${styles.contactInfo} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger2}`}>
            <h3>Contact Information</h3>
            <p>Ready to start a project or have a question?</p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📧</span>
                <span>Braahoubi@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📱</span>
                <span>+90 (531) 383-6448</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <span>Turkey, Adana</span>
              </div>
            </div>
          </div>
          
          <div className={`${styles.socialLinks} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger3}`}>
            <h3>Follow Me</h3>
            <div className={styles.socialIcons}>
              <a href="https://github.com/Bera-Hallubi" className={styles.socialLink} aria-label="GitHub">
                
                  <Image src="/media/github.png" alt="GitHub" width={40} height={40} />
                
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <span>
                  <Image src="/media/linkedin.png" alt="LinkedIn" width={40} height={40} />
                </span>
              </a>
              
            </div>
          </div>
        </div>
        
        <div className={`${styles.bottom} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger4}`}>
          <p>&copy; 2025 Bera Hallubi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
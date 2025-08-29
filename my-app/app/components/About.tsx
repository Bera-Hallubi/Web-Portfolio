"use client";

import React from 'react';
import styles from '@/app/Styles/components/About.module.css';
import animationStyles from '@/app/Styles/components/smoothAnimations.module.css';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

/**

 * @returns {JSX.Element} 
 */
const About = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px'
  });

  return (
    <section 
      ref={elementRef}
      id="about" 
      className={`${styles.aboutSection} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : ''}`} 
      aria-labelledby="about-title"
    >
      <div className={styles.container}>
        <h2 
          id="about-title" 
          className={`${styles.title} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger1}`}
        >
          About Me
        </h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={`${styles.description} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger2}`}>
              I'm a passionate developer with a strong foundation in modern web technologies. 
              I love creating user-friendly applications and web sites that solve real-world problems.
            </p>
            <p className={`${styles.experience} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger3}`}>
              With experience in React, Next.js, TypeScript, and modern CSS, I focus on 
              building scalable, maintainable code that delivers exceptional user experiences.
            </p>
            
            <div className={`${styles.highlights} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger4}`}>
              <h3>* What I Do *</h3>
              <ul>
                <li><strong>Frontend Development with</strong></li>
                <li><strong>Backend Development with</strong></li>
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>Responsive Web Design & UI/UX</li>
                <li>Database Management with <br /> MongoDB & MySQL & PostgreSQL</li>
                <li>Clean, Maintainable Code</li> 
                <li>HTML, CSS, JavaScript, <br /> and TypeScript</li>
                <li>Performance Optimization</li>
                <li>Problem Solving & Debugging</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
"use client";

import React, { useEffect, useState } from 'react';
import styles from '@/app/Styles/components/skillsSection.module.css';
import animationStyles from '@/app/Styles/components/smoothAnimations.module.css';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

/**
 * Skills section component displaying technical skills and competencies
 * with circular orbit animations
 * @returns {JSX.Element} Skills section component
 */
const SkillsSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px'
  });

  // State to control animation timing
  const [animationReady, setAnimationReady] = useState(false);

  // Enable animations after component mounts for smoother performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
      icon: '⚙️'
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker'],
      icon: '🛠️'
    }
  ];

  return (
    <section 
      ref={elementRef}
      id="skills" 
      className={`${styles.skillsSection} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : ''}`} 
      aria-labelledby="skills-title"
    >
      <div className={styles.container}>
        <h2 
          id="skills-title" 
          className={`${styles.title} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger1}`}
        >
          Skills & Technologies
        </h2>
        <div className={styles.skillsGrid}>
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className={`${styles.skillCategory} ${animationStyles.scaleIn} ${isVisible ? animationStyles.visible : animationStyles.scaleOut} ${animationStyles[`stagger${index + 2}`]}`}
              style={{
                animationPlayState: animationReady ? 'running' : 'paused'
              }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{skillGroup.icon}</span>
                <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
              </div>
              <div className={styles.technologies}>
                {skillGroup.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className={styles.techTag}
                    style={{
                      animationDelay: `${(techIndex * 0.1) + (index * 0.2)}s`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
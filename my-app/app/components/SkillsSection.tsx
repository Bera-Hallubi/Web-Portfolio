"use client";

import React from 'react';
import styles from '@/app/Styles/components/skillsSection.module.css';
import animationStyles from '@/app/Styles/components/smoothAnimations.module.css';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

/**
 * Skills section component displaying technical skills and competencies
 * @returns {JSX.Element} Skills section component
 */
const SkillsSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px'
  });

  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker']
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
            >
              <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
              <div className={styles.technologies}>
                {skillGroup.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
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
"use client";

import React from 'react';
import styles from '@/app/Styles/components/projectSection.module.css';
import animationStyles from '@/app/Styles/components/smoothAnimations.module.css';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

/**
 * @returns {JSX.Element}
 */
const ProjectSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px'
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/media/image.png',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: '/media/image.png',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work and skills.',
      technologies: ['React', 'CSS Modules', 'Framer Motion'],
      image: '/media/image.png',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section 
      ref={elementRef}
      id="projects" 
      className={`${styles.projectSection} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : ''}`} 
      aria-labelledby="projects-title"
    >
      <div className={styles.container}>
        <h2 
          id="projects-title" 
          className={`${styles.title} ${animationStyles.fadeInUp} ${isVisible ? animationStyles.visible : animationStyles.fadeOutDown} ${animationStyles.stagger1}`}
        >
          My Projects
        </h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              className={`${styles.projectCard} ${animationStyles.scaleIn} ${isVisible ? animationStyles.visible : animationStyles.scaleOut} ${animationStyles[`stagger${index + 2}`]}`}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.link} className={styles.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
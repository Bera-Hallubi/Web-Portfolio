"use client"
import React, { useState } from 'react'
import styles from "../Styles/components/NavBar.module.css"
import Image from 'next/image'
import image from "../public/media/removed background.png"
const NavBar = () => {
  const handlebuttonClick = (section: string) => {
    try {
      const el = document.getElementById(section)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        console.warn(`Section with id "${section}" not found`)
      }
      setNaveActive(false)
    } catch (e) {
      console.error('Scroll failed:', e)
    }
  }
  const handlenavbar = () => {
    setNaveActive(!naveActive)  
  }

  const [naveActive, setNaveActive] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty('--mouse-x', `${x}%`);
    button.style.setProperty('--mouse-y', `${y}%`);
    console.log('Mouse position:', x, y); // Debug log
  }

  
  return (
    <div className={styles.navouter}>
      <div className={styles.left}>
        <Image src="/media/background.png" alt="logo" width={50} height={50} unoptimized />
      </div>

    

      <div
        className={`${styles.nav_toggler} ${naveActive ? styles.active : ''}`} onClick={handlenavbar}>
        <span></span>
      </div>

      <div className={styles.right}>
        <button onClick={() => handlebuttonClick("home")} onMouseMove={handleMouseMove}>Home</button>
        <button onClick={() => handlebuttonClick("about")} onMouseMove={handleMouseMove}>About</button>
        <button onClick={() => handlebuttonClick("projects")} onMouseMove={handleMouseMove}>Projects</button>
        <button onClick={() => handlebuttonClick("skills")} onMouseMove={handleMouseMove}>Skills</button>
        <button onClick={() => handlebuttonClick("contact")} onMouseMove={handleMouseMove}>Contact</button>
      </div>

      <div className={`${styles.mobileMenu} ${naveActive ? styles.mobileMenuOpen : ''}`} role="dialog" aria-modal="true">
        <nav role="navigation" aria-label="Mobile">
          <ul className={styles.mobileMenuList}>
            <li><button type="button" onClick={() => handlebuttonClick("home")}>Home</button></li>
            <li><button type="button" onClick={() => handlebuttonClick("about")}>About</button></li>
            <li><button type="button" onClick={() => handlebuttonClick("projects")}>Projects</button></li>
            <li><button type="button" onClick={() => handlebuttonClick("skills")}>Skills</button></li>
            <li><button type="button" onClick={() => handlebuttonClick("contact")}>Contact</button></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default NavBar
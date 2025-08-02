// components/StarsBackground.jsx
"use client";
import { useEffect } from 'react';
import styles from './StarsBackground.module.css';

export default function StarsBackground() {
  useEffect(() => {
    // Generate random stars for each layer
    const generateStars = (containerId, count, size) => {
      const container = document.getElementById(containerId);
      if (!container) return;
      
      let shadowValue = '';
      
      for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        
        shadowValue += `${x}px ${y}px #FFF`;
        if (i < count - 1) shadowValue += ', ';
      }
      
      container.style.boxShadow = shadowValue;
      
      // Create the :after pseudo-element with the same box-shadow
      const style = document.createElement('style');
      style.textContent = `
        #${containerId}:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: ${size}px;
          height: ${size}px;
          background: transparent;
          box-shadow: ${shadowValue};
        }
      `;
      document.head.appendChild(style);
    };
    
    // Generate stars for each layer
    generateStars('stars', 700, 1);
    generateStars('stars2', 200, 2);
    generateStars('stars3', 100, 3);
    
    return () => {
      // Clean up styles on component unmount
      const styles = document.querySelectorAll('style');
      styles.forEach(style => {
        if (style.textContent.includes('#stars:after') || 
            style.textContent.includes('#stars2:after') || 
            style.textContent.includes('#stars3:after')) {
          style.remove();
        }
      });
    };
  }, []);

  return (
    <div className={styles.starsContainer}>
      <div id="stars" className={styles.stars}></div>
      <div id="stars2" className={styles.stars2}></div>
      <div id="stars3" className={styles.stars3}></div>
    </div>
  );
}
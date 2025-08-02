// components/ShootingStarsBackground.jsx
"use client";
import React from 'react';
import styles from './ShootingStarsBackground.module.css';

export default function ShootingStarsBackground() {
  return (
    <div className={styles.container}>
      <div className={styles.stars}></div>
      <div className={`${styles.shootingStar} ${styles.star1}`}></div>
      <div className={`${styles.shootingStar} ${styles.star2}`}></div>
      <div className={`${styles.shootingStar} ${styles.star3}`}></div>
      <div className={`${styles.shootingStar} ${styles.star4}`}></div>
      <div className={`${styles.shootingStar} ${styles.star5}`}></div>
    </div>
  );
}
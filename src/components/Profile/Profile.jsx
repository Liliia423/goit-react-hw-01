import styles from './Profile.module.css';
//import { useState } from 'react'
//import viteLogo from '/vite.svg'

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles['profile-card']}>
      <div className={styles['avatar-container']}>
        <img
          src={image}
          alt="User avatar"
          className={styles['avatar-image']}
        />
      </div>
      <p className={styles['user-name']}>{name}</p>

      <div className={styles['user-about']}>
        <p >@{tag}</p>
        <p >{location}</p>
      </div>

      <ul className={styles['users-statistic']}>
        <li className={styles['users-react']}>
          <span className={styles['users-react-title']}>Followers</span>
          <span className={styles['users-react-statistic']}>{stats.followers}</span>
        </li>
        <li className={`${styles['users-react']} ${styles['views']}`}>
          <span className={styles['users-react-title']}>Views</span>
          <span className={styles['users-react-statistic']}>{stats.views}</span>
        </li>
        <li className={styles['users-react']}>
          <span className={styles['users-react-title']}>Likes</span>
          <span className={styles['users-react-statistic']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

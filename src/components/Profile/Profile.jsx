import styles from './Profile.module.css';
//import { useState } from 'react'
//import viteLogo from '/vite.svg'

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles['profile-card']}>
     
      <img
        src={image}
        alt="User avatar"
      />
      <p className={styles['user-name']}>{name}</p>
      <p className={styles['user-about']}>@{tag}</p>
        <p className={styles['user-about']}>{location}</p>
      
      <ul>
        <li>
          <span>Followers:</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views:</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes:</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

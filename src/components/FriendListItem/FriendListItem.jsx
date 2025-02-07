import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles['friend-item']}>
      <img className={styles['avatar']} src={avatar} alt="Avatar" width="48" />
      <div className={styles['name-and-atatus']}>
        <p className={styles['name']}>{name}</p>
        <p
          className={`${styles['status']} ${
            isOnline ? styles['online'] : styles['offline']
          }`}
        >
          {isOnline ? 'Online' : 'Offline'}
          </p>
      </div>
    </li>
  );
}
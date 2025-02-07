import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}
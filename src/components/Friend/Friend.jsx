import s from './Friend.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.list}>
          <span className={isOnline ? s.online : s.offline}></span>
          <img
            className={s.avatar}
            src={avatar}
            alt="User avatar"
            width="48px"
          />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

import PropTypes from 'prop-types';
import s from './Friend.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friends}>
      <li className={s.list}>
        <span className={isOnline ? s.online : s.offline}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};

import PropTypes from 'prop-types';
import s from './User.module.css';
export const Profile = props => {
  const {
    name,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={s.avatar}
          width="200px"
        />
        <p className={s.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

import styles from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.mainSection}>
      <img src={avatar} width="100px" alt="User Avatar"></img>
      <h2>{username}</h2>
      <h3>@{tag}</h3>
      <h3>{location}</h3>
      <ul className={styles.mainSectionList}>
        <li className={styles.listItem}>
          <p>Followers</p>
          <p>{stats.followers}</p>
        </li>
        <li className={styles.listItem}>
          <p>Views</p>
          <p>{stats.views}</p>
        </li>
        <li className={styles.listItem}>
          <p>Likes</p>
          <p>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

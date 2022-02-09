import styles from './firstTask.module.css';
import userData from './user.json';
import PropTypes from 'prop-types';

const FirstTask = () => {
  return (
    <div className={styles.mainSection}>
      <img src={userData.avatar} width="100px" alt="User Avatar"></img>
      <h2>{userData.username}</h2>
      <h3>@{userData.tag}</h3>
      <h3>{userData.location}</h3>
      <ul className={styles.mainSectionList}>
        <li className={styles.listItem}>
          <p>Followers</p>
          <p>{userData.stats.followers}</p>
        </li>
        <li className={styles.listItem}>
          <p>Views</p>
          <p>{userData.stats.views}</p>
        </li>
        <li className={styles.listItem}>
          <p>Likes</p>
          <p>{userData.stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};

export default FirstTask;

FirstTask.defaultProps = {
  userData: {},
};

FirstTask.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

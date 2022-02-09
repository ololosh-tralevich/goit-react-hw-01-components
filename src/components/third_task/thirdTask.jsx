import styles from './thirdTask.module.css';
import PropTypes from 'prop-types';

const ThirdTask = ({ friends }) => {
  const partOfCode = friends.map(friend => {
    let isOnlineIndicator = 'red';
    if (friend.isOnline) {
      isOnlineIndicator = 'green';
    }

    return (
      <li key={friend.id} className={styles.listItem}>
        <span
          className={styles.isOnlineIndicator}
          style={{ backgroundColor: isOnlineIndicator }}
        ></span>
        <img
          className={styles.itemImg}
          src={friend.avatar}
          alt="User Avatar"
          width="48px"
        />
        <h3>{friend.name}</h3>
      </li>
    );
  });
  return (
    <div className={styles.mainSection}>
      <ul className={styles.mainSectionList}>{partOfCode}</ul>
    </div>
  );
};

ThirdTask.defaultProps = {
  friends: [],
};

ThirdTask.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ThirdTask;

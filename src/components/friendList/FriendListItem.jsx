import styles from './friendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ name, isOnline, avatar }) => {
  let isOnlineIndicator = 'red';
  if (isOnline) {
    isOnlineIndicator = 'green';
  }

  return (
    <li className={styles.listItem}>
      <span
        className={styles.isOnlineIndicator}
        style={{ backgroundColor: isOnlineIndicator }}
      ></span>
      <img
        className={styles.itemImg}
        src={avatar}
        alt="User Avatar"
        width="48px"
      />
      <h3>{name}</h3>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: '',
  name: '',
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

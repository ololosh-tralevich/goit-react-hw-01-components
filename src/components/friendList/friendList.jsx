import styles from './friendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  const partOfCode = friends.map(friend => (
    <FriendListItem key={friend.id} {...friend} />
  ));
  return (
    <div className={styles.mainSection}>
      <ul className={styles.mainSectionList}>{partOfCode}</ul>
    </div>
  );
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;

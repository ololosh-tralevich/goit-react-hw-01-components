import './first_task.css';
import userData from './user.json';

// console.log(userData)

const FirstTask = () => {
  return (
    <div className="main-section">
      <img src={userData.avatar} width="100px" alt='User Avatar'></img>
      <h2>{userData.username}</h2>
      <h3>@{userData.tag}</h3>
      <h3>{userData.location}</h3>
      <ul className="main-section-list">
        <li className="list-item">
          <p>Followers</p>
          <p>{userData.stats.followers}</p>
        </li>
        <li className="list-item">
          <p>Views</p>
          <p>{userData.stats.views}</p>
        </li>
        <li className="list-item">
          <p>Likes</p>
          <p>{userData.stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};
export default FirstTask;

// FirstTask.defaultProps = {
//   userData: []
// }

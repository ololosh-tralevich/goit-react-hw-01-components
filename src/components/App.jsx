import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friendList/friendList';
import TransactionHistory from './transactionHistory/transactionHistory';

import dataProfile from './data/user.json'
import dataStatistics from './data/data.json'
import dataFriends from './data/friends.json'
import dataTransactions from './data/transactions.json'

export const App = () => {
  return (
    <>
      <Profile {...dataProfile}/>
      <Statistics title="Upload stats" stats={dataStatistics}/>
      <FriendList friends={dataFriends}/>
      <TransactionHistory transactions={dataTransactions}/>
    </>
  );
};

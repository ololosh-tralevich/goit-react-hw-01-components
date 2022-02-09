import FirstTask from './first_task/FirstTask';
import FourthTask from './fourthTask/fourthTask';
import SecondTask from './second_task/secondTask';
import ThirdTask from './third_task/thirdTask';

import dataProfile from './data/user.json'
import dataStatistics from './data/data.json'
import dataFriends from './data/friends.json'
import dataTransactions from './data/transactions.json'

export const App = () => {
  return (
    <>
      <FirstTask {...dataProfile}/>
      <SecondTask stats={dataStatistics}/>
      <ThirdTask friends={dataFriends}/>
      <FourthTask transactions={dataTransactions}/>
    </>
  );
};

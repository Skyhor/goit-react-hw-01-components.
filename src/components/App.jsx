import { Profile } from './User/User';
import user from '../data/user.json';
import { Statistics } from './Stats/Stats';
import data from '../data/data.json';
import { FriendList } from './Friend/Friend';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

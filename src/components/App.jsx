// import { Profile } from './User/User';
// import user from '../data/user.json';
// import { Statistics } from './Stats/Stats';
// import data from '../data/data.json';
// import { FriendList } from './Friend/Friend';
// import friends from '../data/friends.json';
import { Profile } from './User/User';
import user from '../data/user.json';
// import user from 'path/to/user.json';

export const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} /> */}
    </>
  );
};

// import { Profile } from './User/User';
// import user from '../data/user.json';
// import { Statistics } from './Statics/Statics';
// import data from '../data/data.json';
// import { FriendList } from './Friend/Friend';
// import friends from '../data/friends.json';

// // import user from 'path/to/user.json';

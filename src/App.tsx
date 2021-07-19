import './App.css';
import { useState } from 'react';
import UserPosts from './components/UserPosts';
import { User } from './actions/user/UserTypes';
import UserList from './components/UserList';
function App() {
  //control the visible user with the following state
  const [user, setUser] = useState<User|undefined>(undefined);
  //provide a function for child components to call to clear (hide) the current user
  const clearUser = () => setUser(undefined)
  return (
    <div>
      <div>
        <div className="App">
          { !user && <UserList setUser={setUser} clearUser={clearUser}/> }
        </div>
      </div>
      <div>
        <div className="App">
            { user && <UserPosts user={user} clearUser={clearUser}/> }
        </div>
      </div>
    </div>
  )
}

export default App;

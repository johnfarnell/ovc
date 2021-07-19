import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from '../store/store';
import { useEffect } from 'react';
import { UsersState } from '../reducers/UsersReducer';
import setFilterName from '../actions/navigation/NavigationAction';
import { getUsersAction } from '../actions/user/UsersActions';
import { User } from '../actions/user/UserTypes';
type UserListProps = {
  setUser: (user: User|undefined) => void
  clearUser: () => void
}

function UserList(props: UserListProps) {
  const dispatch = useDispatch();
  const userState: UsersState  = useSelector((state: RootStore) => state.users)
  const filterName: string  = useSelector((state: RootStore) => state.filterName)
  // fetch all the users
  useEffect( () => {
    dispatch(getUsersAction())
  }, [])
  const { setUser, clearUser } = props
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearUser()
    dispatch(setFilterName(event.target.value))
  }
  // wait until fully loaded
  if (userState.loading) {
    return <div>Loading....</div>
  }

  const userRow = (user: User) => {
    // show each user as long as it matches the filter value
    if (!filterName || user.name.toLowerCase().startsWith(filterName.toLowerCase())) {
       return (
      <div className="wrapper item"  key={user.id} onClick={() => setUser(user)}>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.address.city}</div>
        <div>{user.company.name}</div>
      </div>
      )
    }
    return null;
  }

  return (
    <div className="App">
      <div className="Label header">
        <label>
          Filter By Name: &nbsp; &nbsp; &nbsp;
          <input type="text" onChange={handleChange} value={filterName} />
        </label>
      </div>
      <div className="wrapper header">
        <div>Name</div>
        <div>Email</div>
        <div>City</div>
        <div>Company</div>
      </div>
       {userState && userState.users?.map(user => userRow(user))  }    
    </div>
  )
}

export default UserList;

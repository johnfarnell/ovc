import { User } from "../actions/user/UserTypes"
import { UsersActionTypes, USERS_FAIL, USERS_LOADING, USERS_SUCCESS } from "../actions/user/UsersActionTypes"

export interface UsersState {
  loading: boolean,
  users?: User[]
}

const defaultState: UsersState = {
  loading: false
}

const usersReducer = (state: UsersState = defaultState, action: UsersActionTypes) : UsersState => {
 switch (action.type) {
    case USERS_FAIL: 
      return {
        loading: false
      }
    case USERS_LOADING: 
      return {
        loading: true
      }
    case USERS_SUCCESS: 
      return {
        loading: false,
        users: action.payload
      }
    default: {
      return state
    }
  }
}

export default usersReducer
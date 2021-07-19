import axios from "axios"
import { Dispatch } from "redux"
import { User } from "./UserTypes"
import { USERS_LOADING, UsersActionTypes, USERS_FAIL, USERS_SUCCESS } from "./UsersActionTypes"

export const getUsersAction = () => async (dispatch: Dispatch<UsersActionTypes>) => {
  try {
    dispatch({
      type: USERS_LOADING
    })
  
    const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')

    dispatch( {
      type:USERS_SUCCESS,
      payload: res.data
    })
  } catch (e) {
    dispatch( {
      type: USERS_FAIL
    })
  }

} 
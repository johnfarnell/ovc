import axios from "axios"
import { Dispatch } from "redux"
import { USER_POSTS_LOADING, UserPostsActionTypes, USER_POSTS_FAIL, USER_POSTS_SUCCESS, Post } from "./UserPostTypes"

export const getUserPostsAction = (userId: string) => async (dispatch: Dispatch<UserPostsActionTypes>) => {
  try {
    dispatch({
      type: USER_POSTS_LOADING
    })
 
    const res = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    dispatch( {
      type:USER_POSTS_SUCCESS,
      payload: res.data
    })
  } catch (e) {
    dispatch( {
      type: USER_POSTS_FAIL
    })
  }

} 
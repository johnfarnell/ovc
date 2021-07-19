import { UserPostsActionTypes, Post, USER_POSTS_FAIL, USER_POSTS_LOADING, USER_POSTS_SUCCESS } from "../actions/user/UserPostTypes"

export interface UserPostsState {
  loading: boolean,
  posts?: Post[]
}

const defaultState: UserPostsState = {
  loading: false
}

const userPostsReducer = (state: UserPostsState = defaultState, action: UserPostsActionTypes) : UserPostsState => {
 switch (action.type) {
    case USER_POSTS_FAIL: 
      return {
        loading: false
      }
    case USER_POSTS_LOADING: 
      return {
        loading: true
      }
    case USER_POSTS_SUCCESS: 
      return {
        loading: false,
        posts: action.payload
      }
    default: {
      return state
    }
  }
}

export default userPostsReducer
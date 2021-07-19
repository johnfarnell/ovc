import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from '../store/store';
import { getUserPostsAction } from '../actions/user/UserPostActions';
import { UserPostsState } from '../reducers/UserPostsReducer';
import { Post } from '../actions/user/UserPostTypes';
import { User } from '../actions/user/UserTypes';
type UserPostsProps = {
  user: User,
  clearUser: () => void
}
function UserPosts( props: UserPostsProps) {

  const dispatch = useDispatch()
  const { user: {id: userId, name}, clearUser} = props
  // fetch the posts for the current user
  useEffect( () => {
  // fetch the posts for the current user
    dispatch(getUserPostsAction(userId))
   }, [userId])
  const userPostsState: UserPostsState  = useSelector((state: RootStore) => state.posts)
  // wait until fully loaded
  if (userPostsState.loading) {
    return <div>Loading .....</div>
  }

  const userPostRow = (post: Post) => {
  // show each post
   return (
      <div key={post.id} className="postRow item">
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
      )
  }

  return (
    <div className="App">
      <div className="Label header">
        <label>
          {name}'s Posts:
        </label>
        <button onClick={clearUser}>Hide User's Posts</button>  
      </div>
      <div className="postRow header">
        <div>Title</div>
        <div>Body</div>
      </div>
      {userPostsState && userPostsState.posts?.map( post => userPostRow(post))  }  
      <div className="backRow">
        <button onClick={clearUser}>Hide User's Posts</button>  
      </div>
    </div>
  )
}

export default UserPosts;

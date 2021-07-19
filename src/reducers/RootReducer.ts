import { combineReducers } from "redux"
import usersReducer from "./UsersReducer"
import userPostsReducer from "./UserPostsReducer"
import filterNameReducer from "./FilterReducer";

const RootReducer = combineReducers( {
  users: usersReducer,
  posts: userPostsReducer,
  filterName: filterNameReducer
});

export default RootReducer;
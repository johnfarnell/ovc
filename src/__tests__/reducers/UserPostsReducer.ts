import { Post, USER_POSTS_FAIL, USER_POSTS_LOADING, USER_POSTS_SUCCESS } from "../../actions/user/UserPostTypes";
import userPostsReducer from "../../reducers/UserPostsReducer";

test('check userPostsReducer returns the correct state for USER_POSTS_SUCCESS', () => {
  const posts: Post[] = 
  [
    {
      "userId": "1",
      "id": "1",
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": "1",
      "id": "2",
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
  ]  
  
  expect(userPostsReducer(
    {loading: true}, 
    {type: USER_POSTS_SUCCESS, payload: posts}
  )).toEqual({
    loading: false,
    posts
  })
})

test('check userPostsReducer returns the correct state for USER_POSTS_LOADING', () => {
  expect(userPostsReducer(
    {loading: false}, 
    {type: USER_POSTS_LOADING}
  )).toEqual({
    loading: true
  })
})

test('check userPostsReducer returns the correct state for USER_POSTS_FAIL', () => {
  expect(userPostsReducer(
    {loading: true}, 
    {type: USER_POSTS_FAIL}
  )).toEqual({
    loading: false
  })
})

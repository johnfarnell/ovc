import axios from "axios"
import MockAdapter from 'axios-mock-adapter';
import { getUserPostsAction } from "../../../actions/user/UserPostActions";
import { Post, USER_POSTS_LOADING, USER_POSTS_SUCCESS } from "../../../actions/user/UserPostTypes";

test('getUserPostsAction handles dispatches', async () => {
    const dispatch = jest.fn()
    const userId = '12'
    const getUserPostsActionFunction = getUserPostsAction(userId)
    const mock = new MockAdapter(axios)
    
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

    mock.onGet(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .reply(200, posts)
    await getUserPostsActionFunction(dispatch)
    expect(dispatch.mock.calls[0][0]).toEqual(
      {
        type: USER_POSTS_LOADING,
      }
    )
    expect(dispatch.mock.calls[1][0]).toEqual(
      {
        type: USER_POSTS_SUCCESS,
        payload: posts
      }
    )
})

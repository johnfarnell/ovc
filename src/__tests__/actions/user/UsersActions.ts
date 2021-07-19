import axios from "axios"
import MockAdapter from 'axios-mock-adapter';
import { User } from "../../../actions/user/UserTypes";
import { getUsersAction } from "../../../actions/user/UsersActions";
import { USERS_LOADING, USERS_SUCCESS } from "../../../actions/user/UsersActionTypes";

test('getUserPostsAction handles dispatches', async () => {
    const dispatch = jest.fn()
    const getUsersActionFunction = getUsersAction()
    const mock = new MockAdapter(axios)
    
    const users: User[] = 
      [
        {
          "id": "1",
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": "2",
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        }
      ]  

    mock.onGet('https://jsonplaceholder.typicode.com/users')
      .reply(200, users)
    await getUsersActionFunction(dispatch)
    expect(dispatch.mock.calls[0][0]).toEqual(
      {
        type: USERS_LOADING,
      }
    )
    expect(dispatch.mock.calls[1][0]).toEqual(
      {
        type: USERS_SUCCESS,
        payload: users
      }
    )
})

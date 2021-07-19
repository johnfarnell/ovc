import * as react from 'react';
import renderer from 'react-test-renderer';
import UserList from '../../components/UserList'
import * as redux from 'react-redux'
import { User } from '../../actions/user/UserTypes';
import { Post } from '../../actions/user/UserPostTypes';
import UserPosts from '../../components/UserPosts';
const posts: Post[] = 
[
  {
    "userId": "1",
    "id": "1",
    "title": "sunt aut",
    "body": "quia et suscipit"
  },
  {
    "userId": "1",
    "id": "2",
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil"
  }
]  

describe('test the user posts', () => {
  let spySelector = jest.spyOn(redux, 'useSelector')
  let spyDispatch = jest.spyOn(redux, 'useDispatch')
  let spyEffect = jest.spyOn(react, 'useEffect')
  let mockDispatch = jest.fn()
  beforeEach( () => {
    spySelector  = jest.spyOn(redux, 'useSelector')
    spyDispatch = jest.spyOn(redux, 'useDispatch')
    spyEffect = jest.spyOn(react, 'useEffect')
    mockDispatch = jest.fn()
    spyEffect.mockImplementationOnce(mockDispatch())
  }
  )
  it('should display the users posts', () => {
    spySelector.mockReturnValueOnce({loading: false, posts})
    spyDispatch.mockReturnValue(mockDispatch)
    const user =   {
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
    }
  
    const clearUser= jest.fn()
    const component = renderer.create(
      <UserPosts user={user} clearUser={clearUser}/>
    )

    expect(mockDispatch).toHaveBeenCalledTimes(1)
    const instance = component.root
    const divs = instance.findByType('div')
    const rows = instance.findAllByProps({className: 'postRow item'})
    expect(rows).toHaveLength(2)
    //Expect that all the posts will be visible
    expect(rows[0].props.children[0].props.children).toEqual('sunt aut')
    expect(rows[0].props.children[1].props.children).toEqual('quia et suscipit')
    expect(rows[1].props.children[0].props.children).toEqual('qui est esse')
    expect(rows[1].props.children[1].props.children).toEqual('est rerum tempore vitae\nsequi sint nihil')
  })

  it('should call clearUser after clicking the button', () => {
    spySelector.mockReturnValueOnce({loading: false, posts})
    spyDispatch.mockReturnValue(mockDispatch)
    const user =   {
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
    }
    spyDispatch.mockReturnValue(mockDispatch)
  
    const clearUser= jest.fn()
    const component = renderer.create(
      <UserPosts user={user} clearUser={clearUser}/>
    )

    const instance = component.root
    const button = instance.findAllByType('button')
    
    button[0].props.onClick()
    expect(clearUser).toHaveBeenCalledTimes(1)
  })
})

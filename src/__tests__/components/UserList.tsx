import * as react from 'react';
import renderer from 'react-test-renderer';
import UserList from '../../components/UserList'
import * as redux from 'react-redux'
import { User } from '../../actions/user/UserTypes';
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

describe('test the user list', () => {
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
  it('should only display the user matching the filter', () => {
    spySelector.mockReturnValueOnce({loading: false, users})
    //Expecting to filter on "Lea"
    spySelector.mockReturnValueOnce('Lea')
    spyDispatch.mockReturnValue(mockDispatch)
    const setUser = jest.fn()
    const clearUser= jest.fn()
    const component = renderer.create(
      <UserList setUser={setUser} clearUser={clearUser}/>
    )

    expect(mockDispatch).toHaveBeenCalledTimes(1)
    const instance = component.root
    const divs = instance.findByType('div')
    const rows = instance.findAllByProps({className: 'wrapper item'})
    expect(rows).toHaveLength(1)
    //Expect the one row found to match the entered filter name "Lea"
    expect(rows[0].props.children[0].props.children).toEqual('Leanne Graham')
 
  })
  it('should call setUser onClicking the cell', () => {
    spySelector.mockReturnValueOnce({loading: false, users})
    spySelector.mockReturnValueOnce('')
    spyDispatch.mockReturnValue(mockDispatch)
    const setUser = jest.fn()
    const clearUser= jest.fn()
    const component = renderer.create(
      <UserList setUser={setUser} clearUser={clearUser}/>
    )

    const instance = component.root
    const rows = instance.findAllByProps({className: 'wrapper item'})
    
    rows[0].props.onClick()
    expect(setUser).toHaveBeenCalledTimes(1)
 
  })
  it('should call clearUser onClicking the hide button', () => {
    spySelector.mockReturnValueOnce({loading: false, users})
    spySelector.mockReturnValueOnce('')
    spyDispatch.mockReturnValue(mockDispatch)
    const setUser = jest.fn()
    const clearUser= jest.fn()
    const component = renderer.create(
      <UserList setUser={setUser} clearUser={clearUser}/>
    )
    const instance = component.root
    const text = instance.findAllByType('input')[0]
    
    text.props.onChange({target:{value: 'Bill'}})
    expect(clearUser).toHaveBeenCalledTimes(1)
 
  })
})

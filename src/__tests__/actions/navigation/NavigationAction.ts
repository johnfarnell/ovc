import setFilterName, { FILTER_NAME } from "../../../actions/navigation/NavigationAction" 

test('check setFilterName returns the correct Action', () => {
  const name: string = 'Fred'
  expect(setFilterName(name)).toEqual({
    type: FILTER_NAME,
    payload: name
    })
})
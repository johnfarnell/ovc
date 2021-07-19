import { FILTER_NAME } from "../../actions/navigation/NavigationAction";
import filterNameReducer from "../../reducers/FilterReducer";

test('check filterNameReducer returns the payload name', () => {
  const name: string = 'Fred'
  expect(filterNameReducer(name, {type: FILTER_NAME, payload: "James"})).toEqual("James")
})

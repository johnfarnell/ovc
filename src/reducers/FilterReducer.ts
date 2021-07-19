import { FilterName, FILTER_NAME } from "../actions/navigation/NavigationAction"

const filterNameReducer = (state: string = '', action: FilterName) : string => {
  switch (action.type) {
     case FILTER_NAME: 
       return action.payload
     default: {
       return state
     }
   }
 }

 export default filterNameReducer

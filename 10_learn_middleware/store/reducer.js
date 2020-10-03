const defaultState = {
  counter: 0
}
import {
  ADDCOUNT,
  SUBCOUNT
} from "./constans.js"
function reducer(state = defaultState, action) {
  switch(action.type) {
    case ADDCOUNT:
      return {...state, counter: state.counter + action.num}
    case SUBCOUNT:
      return {...state, counter: state.counter - action.num}
    default:
      return state
  }
}

export default reducer;
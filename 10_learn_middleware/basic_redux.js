// 导入redux
const redux = require("redux")

const initialState = {
  count: 0
}

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {...state, count: state.count + 1}
    case "DECREMENT":
      return {...state, count: state.count - 1}
    case "ADD_COUNT":
      return {...state, count: state.count + action.num}
    case "SUB_COUNT":
      return {...state, count: state.count - action.num}
    default:
      return state;
  }
}

// store：创建时传入一个reducer
const store = redux.createStore(reducer)

// 订阅store的修改
store.subscribe(() => {
  console.log("count:", store.getState().count);
})

// actions
const action1 = { type: "INCREMENT" }
const action2 = { type: "DECREMENT" }
const action3 = { type: "ADD_COUNT", num: 5}
const action4 = { type: "SUB_COUNT", num: 15}

// 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
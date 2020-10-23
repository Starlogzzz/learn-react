import React, { memo, useReducer } from 'react'

export default memo(function Home1() {

  function reducer(state, action) {
    switch(action.type) {
      case "increment":
        return {...state, counter: state.counter + 1}
      case "decrement":
        return {...state, counter: state.counter - 1}
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, {counter: 0})  
  return (
    <div>
      <h2>当前计数：{state.counter}</h2>
      <button onClick={e => dispatch({type: "increment"})}>+1</button>
      <button onClick={e => dispatch({type: "decrement"})}>-1</button>
    </div>
  )
})

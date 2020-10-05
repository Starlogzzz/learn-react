import React, { useState } from 'react'

export default function CounterHook() {
  const [state, setState] = useState(0)
  function addTen() {
    setState(preState => preState + 10)
    setState(preState => preState + 10)
    setState(preState => preState + 10)
    setState(preState => preState + 10)
    console.log(state);
    
  }
  return (
    <div>
      <h2>当前计数：{state}</h2>
      <button onClick={e => setState(state + 1)}>+1</button>
      <button onClick={e => setState(state - 1)}>-1</button>
      <button onClick={e => setState(preState => preState+10)}>+10</button>
      <button onClick={addTen}>+10?</button>
    </div>
  )
}

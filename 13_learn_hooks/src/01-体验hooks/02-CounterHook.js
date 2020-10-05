import React, { useState } from 'react'

export default function CounterHook() {
  const arr = useState(0);
  const state = arr[0];
  const setState = arr[1];

  return (
    <div>
      <h2>当前计数：{state}</h2>
      <button onClick={e => setState(state+1)}>+1</button>
      <button onClick={e => setState(state-1)}>-1</button>
    </div>
  )
}

import React, { useState, useEffect } from 'react'

export default function UseEffectCancel() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("订阅一些事件");

    return () => {
      console.log("取消订阅");
    }
  }, [])
  return (
    <div>
      <h2>useEffectCancel</h2>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

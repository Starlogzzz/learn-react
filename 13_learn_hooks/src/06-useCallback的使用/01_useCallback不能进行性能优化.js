import React, { useState, useCallback } from 'react'

export default function CallbackHookDemo01() {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    console.log("执行increment函数");
    setCounter(counter + 1);
  }
  const decrement = useCallback(
    () => {
      console.log("执行decrement函数");
      setCounter(counter - 1);
    },
    [counter],
  )
  return (
    <div>
      <h2>CallbackHookDemo01: {counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

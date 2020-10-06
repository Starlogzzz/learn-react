import React, { useState, useLayoutEffect } from 'react'

export default function LayoutEffectHook() {
  const [count, setCount] = useState(10)
  // useEffect(()=>{
  //   if(count === 0){
  //     setCount(Math.random())
  //   }
  // },[count])
  useLayoutEffect(()=>{
    if(count === 0){
      setCount(Math.random())
    }
  },[count])
  return (
    <div>
      <h2>当前数字：{count}</h2>
      <button onClick={e => setCount(0)}>修改数字</button>
    </div>
  )
}

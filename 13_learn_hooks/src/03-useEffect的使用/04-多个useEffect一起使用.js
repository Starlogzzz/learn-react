import React, { useEffect, useState } from 'react'

export default function MultiEffectHook() {
  const [counter, setCounter] = useState(0)
  useEffect(()=>{
    console.log("修改dom");
  }, [counter])
  useEffect(()=>{
    console.log("订阅");
  }, [])
  useEffect(()=>{
    console.log("网络请求");
  }, [])

  return (
    <div>
      <h2>MultiEffectHook</h2>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

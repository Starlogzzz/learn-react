import React,{ useState } from 'react'

export default function MemoHook() {
  console.log("MemoHook重新渲染");
  
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true)
  let sum = 0
  for(let i=1;i<count;i++){
    sum += i; 
  }
  return (
    <div>
      <h2>当前累加：{sum}</h2>
      <button onClick={e => setCount(count+1)}>+1</button>
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}

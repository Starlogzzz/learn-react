import React, { useState, useCallback, memo } from 'react'

const MYbutton = memo((props) => {
  console.log(props.title + "MYbutton重新渲染");
  
  return <button onClick={props.increment}>MY+1</button>
})

export default function UseCallBacndemo() {
  console.log("UseCallBacndemo重新渲染");
  
  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(true)
  const increment1 = () => {
    console.log("执行increment1函数");
    setCounter(counter + 1);
  }

  const increment2 = useCallback(
    () => {
      console.log("执行increment2函数");
      setCounter(counter + 1);
    },
    [counter],
  )
  

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      {/* <button onClick={e => increment1()}>+1</button>
      <button onClick={e => increment2()}>+1</button> */}
      <MYbutton title={"incre1"} increment={increment1}/>
      <MYbutton title={"incre2"} increment={increment2}/>

      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}

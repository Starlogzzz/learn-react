import React, { memo, useState, useMemo } from 'react'

const Info = memo(function(props) {
  console.log("Info重新渲染")
  console.log(props)
  return <h2>名字：{props.info.name}</h2>
})
export default memo(function TestuseMemo() {
  const [show, setShow] = useState(true);
  console.log("TestuseMemo重新渲染")
  const name = useMemo(() => {
    return {name: "starlog"}
  }, []);
  // const name = {name: "starlog"};
  return (
    <div>
      <Info info={name}/>
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
})

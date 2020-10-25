import React, { useRef, PureComponent, forwardRef } from 'react'

class RefCpn1 extends PureComponent {
  render() {
    return <h2>RefCpn1</h2>
  }
}
const RefCpn2 = forwardRef(function(props, ref) {
  return <h2 ref={ref}>RefCpn2</h2>
})

export default function RefHookDemo01() {
  const h2Ref = useRef();
  const inputRef = useRef();
  const refCpn1 = useRef();
  const refCpn2 = useRef();
  function changeDom() {
    h2Ref.current.innerHTML = "起飞！！！！！";
    inputRef.current.focus();
    console.log(refCpn1.current);
    console.log(refCpn2.current);
    
  }
  return (
    <div>
      <h2 ref={h2Ref}>芜湖飞行员申请出战！</h2>
      <input ref={inputRef} type="text"/>
      <RefCpn1 ref={refCpn1}/>
      <RefCpn2 ref={refCpn2}/>
      <button onClick={e => changeDom()}>修改dom</button>
    </div>
  )
}

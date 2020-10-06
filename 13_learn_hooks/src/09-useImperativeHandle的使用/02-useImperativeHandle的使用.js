import React, { PureComponent, createRef, forwardRef, useImperativeHandle } from 'react'

const MYinput = forwardRef((props, ref) => {
  const inputRef = createRef();
  useImperativeHandle(ref, ()=>({
    focus: () => {
      inputRef.current.focus();
    }
  }), [inputRef])

  return <input ref={inputRef}/>
})

export default class ImperativeHandleHook extends PureComponent {
  
  render() {
    const InputRef = createRef();
    return (
      <div>
        <MYinput ref={InputRef}/>
        <button onClick={e => InputRef.current.focus()}>世界聚焦于你</button>
      </div>
    )
  }
}

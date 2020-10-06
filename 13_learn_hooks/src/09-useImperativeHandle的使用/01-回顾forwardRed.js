import React, { PureComponent, createRef, forwardRef } from 'react'

const MYinput = forwardRef((props, ref) => {
  return <input ref={ref}/>
})

export default class ForwarRef extends PureComponent {
  
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

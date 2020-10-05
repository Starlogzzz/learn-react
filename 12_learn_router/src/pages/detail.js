import React, { PureComponent } from 'react'

export default class detail extends PureComponent {
  render() {
    const parmas = this.props.match
    console.log(parmas);
    
    return (
      <div>
        detail: {parmas.params.id}
      </div>
    )
  }
}

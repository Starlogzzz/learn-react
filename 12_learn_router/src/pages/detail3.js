import React, { PureComponent } from 'react'

export default class detail3 extends PureComponent {
  render() {
    const location = this.props.location
    console.log(location);
    
    return (
      <div>
        detail: {location.state.name}
      </div>
    )
  }
}

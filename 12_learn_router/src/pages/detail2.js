import React, { PureComponent } from 'react'

export default class detail2 extends PureComponent {
  render() {
    const location = this.props.location
    console.log(location);
    
    return (
      <div>
        detail: {location.search}
      </div>
    )
  }
}

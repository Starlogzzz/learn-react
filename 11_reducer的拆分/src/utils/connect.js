import React, { PureComponent } from 'react'
// import store from './../store/index';
import {StoreContext} from "./context"

export function connect(mapStateToProps, mapDispatchToProp) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        return <WrappedComponent {...this.props}
                                 {...mapStateToProps(this.context.getState())}
                                 {...mapDispatchToProp(this.context.dispatch)}/>
      }
    }
    EnhanceComponent.contextType = StoreContext
    return EnhanceComponent
  }
}

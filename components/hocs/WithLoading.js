import React, { Component } from 'react'

const withLoading = (WrappedComponent) => {
  return class ComponentWithLoading extends Component {
    render() {
      const { listItems } = this.props

      if (!listItems) return <span>Loading</span>
      return <WrappedComponent {...this.props}/>
    }
  }
}

export default withLoading
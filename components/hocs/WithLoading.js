import React, { Component } from 'react'

const withLoading = (propName) => (WrappedComponent) => {
  console.log(`prop name: ${propName}`)
  
  return class ComponentWithLoading extends Component {
    render() {
      const { listItems } = this.props

      if (!listItems) return <span>Loading</span>
      return <WrappedComponent {...this.props} addProp="new"/>
    }
  }
}

export default withLoading
import React, { Component } from 'react'

const withLoading = (WrappedComponent) => {
  return class ComponentWithLoading extends Component {
    render() {
      const { isLoading } = this.props

      if (isLoading) return <span>Loading</span>
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withLoading
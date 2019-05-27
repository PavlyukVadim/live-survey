import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

const AuthControllerHoc = (InnerComponent) => {
  class NewComponent extends Component {
    componentDidMount() {
      const userId = localStorage.getItem('userId')
      if (userId === 'null') {
        const { history } = this.props
        history.push('/sign-in')
      }
    }

    render() {
      return (
        <InnerComponent {...this.props} />
      )
    }
  }
  return withRouter(NewComponent)
}

export default AuthControllerHoc

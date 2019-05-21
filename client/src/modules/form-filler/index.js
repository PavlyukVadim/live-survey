import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class FormFiller extends Component {
  render() {
    const { match = {} } = this.props
    const { id } = match.params

    console.log('id', id)

    return (
      <div>
        FormFiller
      </div>
    )
  }
}

export default withRouter(FormFiller)

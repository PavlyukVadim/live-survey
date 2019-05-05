import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FieldPropsInputs extends Component {
  render() {
    return (
      <>
        <h3>Field props</h3>
        <Form.Input
          fluid
          label="Field title"
          placeholder="Title"
        />
      </>
    )
  }
}

export default FieldPropsInputs

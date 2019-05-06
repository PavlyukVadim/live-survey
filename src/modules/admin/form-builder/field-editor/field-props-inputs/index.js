import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FieldPropsInputs extends Component {
  render() {
    const { onChangeFieldConfig } = this.props
    return (
      <>
        <h3>Field props</h3>
        <Form.Input
          fluid
          label="Field title"
          placeholder="Title"
          onChange={(e, d) => onChangeFieldConfig('props.title', d.value)}
        />
      </>
    )
  }
}

export default FieldPropsInputs

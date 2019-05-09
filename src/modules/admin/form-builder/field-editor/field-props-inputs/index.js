import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { get } from 'utils'

class FieldPropsInputs extends Component {
  render() {
    const {
      activeField,
      onChangeFieldConfig,
    } = this.props
    return (
      <>
        <h3>Field props</h3>
        <Form.Input
          fluid
          label="Field title"
          placeholder="Title"
          value={get(activeField, 'props.title')}
          onChange={(e, d) => onChangeFieldConfig('props.title', d.value)}
        />
      </>
    )
  }
}

export default FieldPropsInputs

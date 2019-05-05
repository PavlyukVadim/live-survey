import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const stateOptions = [
  { key: 'value', text: 'Value', value: 'value' },
  { key: 'display', text: 'Display', value: 'display' },
  { key: 'disabled', text: 'Disabled', value: 'disabled' },
]

// state: {
//   value: {
//     // defaultValue: 0,
//     // valueExpr: 'c * 2',
//   },
//   display: {
//     // defaultValue: false,
//     // valueExpr: 'a > 10',
//   },
//   disabled: {
//     // defaultValue: false,
//     // valueExpr: 'a > 34',
//   },
// },

class FieldStateInputs extends Component {
  render() {
    return (
      <>
        <h3>Field state</h3>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            label="State option"
            options={stateOptions}
            defaultValue="value"
          />
          <Form.Input
            fluid
            label="Default value"
            placeholder="Value"
          />
          <Form.Input
            fluid
            label="Value expresion"
            placeholder='Expresion'
          />
        </Form.Group>
      </>
    )
  }
}

export default FieldStateInputs

import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const stateOptions = [
  { key: 'value', text: 'Value', value: 'value' },
  { key: 'display', text: 'Display', value: 'display' },
  { key: 'disabled', text: 'Disabled', value: 'disabled' },
]

class FieldsController extends Component {
  render() {
    const { addField } = this.props
    return (
      <>
        <Form>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="State option"
              options={stateOptions}
              defaultValue="value"
              // onChange={this.onChangeStateOption}
            />
            <Form.Button
              negative
              label="Remove field"
              onClick={addField}
            >
              Remove field
            </Form.Button>
            <Form.Button
              positive
              label="Add field"
              onClick={addField}
            >
              Add field
            </Form.Button>
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default FieldsController

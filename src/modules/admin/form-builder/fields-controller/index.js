import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FieldsController extends Component {
  render() {
    const {
      fieldsOptions,
      addField,
      removeField,
    } = this.props

    const isFieldsExist = !!fieldsOptions.length
    const defaultFieldsValue = fieldsOptions[0] ? fieldsOptions[0].value : ''

    return (
      <>
        <Form>
          <Form.Group widths="equal">
            {
             isFieldsExist &&
              (
                <>
                  <Form.Select
                    fluid
                    label="State option"
                    options={fieldsOptions}
                    value={defaultFieldsValue}
                    // onChange={this.onChangeStateOption}
                  />
                  <Form.Button
                    negative
                    label="Remove field"
                    onClick={removeField}
                  >
                    Remove field
                  </Form.Button>
                </>
              )
            }
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

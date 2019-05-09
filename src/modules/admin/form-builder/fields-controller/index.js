import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FieldsController extends Component {
  onChangeActiveField = (e, data) => {
    const {
      onChangeActiveFieldIndex,
      fieldsOptions,
    } = this.props
    const { value } = data
    const index = fieldsOptions.findIndex((option) => {
      return (option.value === value)
    })
    onChangeActiveFieldIndex(index)
  }

  render() {
    const {
      fieldsOptions,
      addField,
      removeField,
      activeFieldIndex,
    } = this.props

    const isFieldsExist = !!fieldsOptions.length
    const defaultFieldsValue = fieldsOptions[activeFieldIndex]
      ? fieldsOptions[activeFieldIndex].value
      : ''

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
                    label="Choose field"
                    options={fieldsOptions}
                    value={defaultFieldsValue}
                    onChange={this.onChangeActiveField}
                  />
                  <Form.Button
                    fluid
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
              fluid={isFieldsExist}
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

import React, { Component } from 'react'

import {
  Form,
  Input,
  // TextArea,
  // Button,
  Select,
} from 'semantic-ui-react'

const fieldTypeOptions = [
  { key: 'i', text: 'Input', value: 'input' },
  { key: 'c', text: 'Checkbox', value: 'checkbox' },
  { key: 's', text: 'Select', value: 'select' },
  { key: 't', text: 'Textarea', value: 'textarea' },
]

class FieldMainInputs extends Component {
  render() {
    const { onChangeFieldConfig } = this.props
    return (
      <>
        <Form.Field id="form-input-name">
          <label>Field name</label>
          <Input
            placeholder="Name"
            onChange={(e, d) => onChangeFieldConfig('name', d.value)}
          />
        </Form.Field>
        <Form.Field id="form-select-type">
          <label>Field type</label>
          <Select
            placeholder="Select field type"
            onChange={(e, d) => onChangeFieldConfig('fieldType', d.value)}
            options={fieldTypeOptions}
            defaultValue="input"
            search
            searchInput={{ id: 'form-select-type' }}
          />
        </Form.Field>
      </>
    )
  }
}

export default FieldMainInputs

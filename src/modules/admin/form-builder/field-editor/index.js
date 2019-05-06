import React, { Component } from 'react'
import {
  Form,
  // Input,
  TextArea,
  Button,
  // Select,
} from 'semantic-ui-react'

import FieldMainInputs from './field-main-inputs'
import FieldPropsInputs from './field-props-inputs'
import FieldStateInputs from './field-state-inputs'

const fieldTypeOptions = [
  { key: 'i', text: 'Input', value: 'input' },
  { key: 'c', text: 'Checkbox', value: 'checkbox' },
  { key: 's', text: 'Select', value: 'select' },
  { key: 't', text: 'Textarea', value: 'textarea' },
]

// {
//   name: 'a',
//   fieldType: 'input',
//   dataType: 'int',
//   props: {
//     title: 'field a',
//   },
//   state: {
//     value: {
//       // defaultValue: 0,
//       // valueExpr: 'c * 2',
//     },
//     display: {
//       // defaultValue: false,
//       // valueExpr: 'a > 10',
//     },
//     disabled: {
//       // defaultValue: false,
//       // valueExpr: 'a > 34',
//     },
//   },
// },

class FieldEditor extends Component {
  render() {
    const {
      formConfig,
      onChangeFieldConfig,
    } = this.props
    return (
      <div>
        FieldEditor
        <Form>
          <FieldMainInputs onChangeFieldConfig={onChangeFieldConfig} />
          <FieldPropsInputs onChangeFieldConfig={onChangeFieldConfig} />
          <FieldStateInputs onChangeFieldConfig={onChangeFieldConfig} />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
            value={JSON.stringify(formConfig, null, 2)}
          />
          {/*
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            label='Label with htmlFor'
          /> */}
        </Form>
      </div>
    )
  }
}

export default FieldEditor

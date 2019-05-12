import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import FieldMainInputs from './field-main-inputs'
import FieldPropsInputs from './field-props-inputs'
import FieldStateInputs from './field-state-inputs'

class FieldEditor extends Component {
  render() {
    const {
      activeField,
      formConfig,
      onChangeFormConfig,
      onChangeFieldConfig,
    } = this.props
    return (
      <div>
        <Form>
          <FieldMainInputs
            activeField={activeField}
            onChangeFieldConfig={onChangeFieldConfig}
          />
          <FieldPropsInputs
            activeField={activeField}
            onChangeFieldConfig={onChangeFieldConfig}
          />
          <FieldStateInputs
            activeField={activeField}
            onChangeFieldConfig={onChangeFieldConfig}
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
            rows={7}
            value={JSON.stringify(formConfig, null, 2)}
            onChange={(e, d) => onChangeFormConfig(JSON.parse(d.value))}
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

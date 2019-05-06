import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const stateOptions = [
  { key: 'value', text: 'Value', value: 'value' },
  { key: 'display', text: 'Display', value: 'display' },
  { key: 'disabled', text: 'Disabled', value: 'disabled' },
]

class FieldStateInputs extends Component {
  state = {
    stateOption: 'value',
  }

  onChangeStateOption = (e, data) => {
    const { value } = data
    this.setState({
      stateOption: value,
    })
  }

  onChangeDefaultValue = (e, data) => {
    const { value } = data
    const { onChangeFieldConfig } = this.props
    const { stateOption } = this.state

    onChangeFieldConfig(`state.${stateOption}.defaultValue`, value)
  }

  onChangeValueExpresion = (e, data) => {
    const { value } = data
    const { onChangeFieldConfig } = this.props
    const { stateOption } = this.state

    onChangeFieldConfig(`state.${stateOption}.valueExpr`, value)
  }

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
            onChange={this.onChangeStateOption}
          />
          <Form.Input
            fluid
            label="Default value"
            placeholder="Value"
            onChange={this.onChangeDefaultValue}
          />
          <Form.Input
            fluid
            label="Value expresion"
            placeholder='Expresion'
            onChange={this.onChangeValueExpresion}
          />
        </Form.Group>
      </>
    )
  }
}

export default FieldStateInputs

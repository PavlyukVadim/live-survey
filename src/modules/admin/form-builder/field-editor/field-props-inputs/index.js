import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { get } from 'utils'

class FieldPropsInputs extends Component {
  addSelectFieldOption = () => {
    const {
      activeField,
      onChangeFieldConfig,
    } = this.props

    const options = get(activeField, 'props.options') || []
    const newOptions = [...options]
    const index = newOptions.length + 1

    newOptions.push({
      value: `option${index}`,
      content: `Option${index}`,
    })

    onChangeFieldConfig('props.options', newOptions)
  }

  removeSelectFieldOption = (index) => {
    const {
      activeField,
      onChangeFieldConfig,
    } = this.props

    const options = get(activeField, 'props.options') || []
    const newOptions = [...options]
    newOptions.splice(index, 1)

    onChangeFieldConfig('props.options', newOptions)
  }

  getSelectOptionsInputs = () => {
    const {
      activeField,
      onChangeFieldConfig,
    } = this.props

    const {
      fieldType,
      props: { options = [] },
    } = activeField

    let selectOptionsInputs = null
    if (fieldType === 'select') {
      const optionsInputs = Array.from(options).map((option = {}, index) => {
        const { value, content } = option
        return (
          <div key={index}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Option value"
                placeholder="Option"
                value={value}
                onChange={
                  (e, d) => onChangeFieldConfig(`props.options.${index}.value`, d.value)
                }
              />
              <Form.Input
                fluid
                label="Option content"
                placeholder="Content"
                value={content}
                onChange={
                  (e, d) => onChangeFieldConfig(`props.options.${index}.content`, d.value)
                }
              />
              <Form.Button
                fluid
                negative
                label="Remove option"
                onClick={() => this.removeSelectFieldOption(index)}
              >
                Remove
              </Form.Button>
            </Form.Group>
          </div>
        )
      })

      selectOptionsInputs = (
        <>
          <Form.Group widths="equal">
            <Form.Button
              positive
              onClick={this.addSelectFieldOption}
            >
              Add Option
            </Form.Button>
          </Form.Group>
          {optionsInputs}
        </>
      )
    }

    return selectOptionsInputs
  }

  render() {
    const { activeField, onChangeFieldConfig } = this.props
    const selectOptionsInputs = this.getSelectOptionsInputs()

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
        {selectOptionsInputs}
      </>
    )
  }
}

export default FieldPropsInputs

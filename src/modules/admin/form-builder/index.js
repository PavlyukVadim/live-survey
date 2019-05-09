import React, { Component } from 'react'
import { Divider, Grid, Segment } from 'semantic-ui-react'
import LiveForm from 'react-live-form'
import { set } from 'utils'
import FieldsController from './fields-controller'
import FieldEditor from './field-editor'

const formConfig1 = {
  formName: 'firstForm',
  fields: [
    {
      name: 'a',
      fieldType: 'input',
      dataType: 'int',
      props: {
        title: 'field a',
      },
      state: {
        value: {
          defaultValue: 5,
        },
      },
    },
    {
      name: 'b',
      fieldType: 'input',
      dataType: 'int',
      props: {
        title: 'field b',
      },
    },
    {
      name: 'c',
      fieldType: 'input',
      dataType: 'string',
      props: {
        title: 'field c',
      },
      state: {
        value: {
          defaultValue: 0,
          valueExpr: 'a + b',
        },
      },
    },
    {
      name: 'd',
      fieldType: 'input',
      dataType: 'string',
      props: {
        title: 'field d',
      },
      state: {
        value: {
          defaultValue: 0,
          valueExpr: 'c * 2',
        },
        display: {
          defaultValue: false,
          valueExpr: 'a > 10',
        },
        disabled: {
          defaultValue: false,
          valueExpr: 'a > 34',
        },
      },
    },
  ],
}

class FormBuilder extends Component {
  state = {
    formConfig: {
      fields: [],
    },
    activeFieldIndex: 0,
  }

  addField = () => {
    this.setState((prevState) => {
      const formConfig = Object.assign({}, prevState.formConfig)
      const currentIndex = prevState.formConfig.fields.length
      const fields = [
        ...prevState.formConfig.fields,
        {
          name: `name${currentIndex}`,
          fieldType: 'input',
          props: {
            title: 'Title',
          },
          state: {
            value: {
              defaultValue: '',
              // valueExpr: 'c * 2',
            },
            display: {
              defaultValue: true,
              // valueExpr: 'a > 10',
            },
            disabled: {
              defaultValue: false,
              // valueExpr: 'a > 34',
            },
          },
        },
      ]

      formConfig.fields = fields

      return {
        formConfig,
        activeFieldIndex: fields.length - 1,
      }
    })
  }

  removeField = () => {
    this.setState((prevState) => {
      const { activeFieldIndex, formConfig } = prevState
      const newFormConfig = Object.assign({}, formConfig)
      const fields = [...formConfig.fields]
      fields.splice(activeFieldIndex, 1)
      newFormConfig.fields = fields
      return {
        formConfig: newFormConfig,
        activeFieldIndex: activeFieldIndex - 1,
      }
    })
  }

  onChangeFieldConfig = (key, value) => {
    const { activeFieldIndex, formConfig } = this.state

    const { fields } = formConfig
    const newFields = [...fields]

    const fieldConfig = set(newFields[activeFieldIndex], key, value)
    newFields[activeFieldIndex] = fieldConfig

    const newFormConfig = {
      ...formConfig,
      fields: newFields,
    }

    this.setState(() => {
      return {
        formConfig: newFormConfig,
      }
    })

    console.log('onChangeFieldConfig', activeFieldIndex, key, value)
  }

  onChangeActiveFieldIndex = (newActiveFieldIndex) => {
    this.setState(() => {
      return {
        activeFieldIndex: newActiveFieldIndex,
      }
    })
  }

  getFieldsOptions = () => {
    const { formConfig: { fields } } = this.state
    const options = fields.map((fieldConfig) => {
      const { name } = fieldConfig
      return {
        key: name,
        text: name,
        value: name,
      }
    })
    return options
  }

  render() {
    const { activeFieldIndex, formConfig } = this.state
    const fieldsOptions = this.getFieldsOptions()
    const activeField = formConfig.fields[activeFieldIndex] || {}

    return (
      <div>
        <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <FieldsController
                addField={this.addField}
                removeField={this.removeField}
                onChangeActiveFieldIndex={this.onChangeActiveFieldIndex}
                fieldsOptions={fieldsOptions}
                activeFieldIndex={activeFieldIndex}
              />
              <FieldEditor
                formConfig={formConfig}
                activeField={activeField}
                onChangeFieldConfig={this.onChangeFieldConfig}
              />
            </Grid.Column>
            <Grid.Column>
              <LiveForm formConfig={formConfig} />
            </Grid.Column>
          </Grid>
          <Divider vertical>preView</Divider>
        </Segment>
      </div>
    )
  }
}

export default FormBuilder

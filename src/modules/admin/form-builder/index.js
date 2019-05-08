import React, { Component } from 'react'
import {
  Divider,
  Grid,
  // Image,
  Button,
  Segment,
} from 'semantic-ui-react'
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
    activeField: 0,
  }

  addField = () => {
    this.setState((prevState) => {
      const formConfig = Object.assign({}, prevState.formConfig)
      const currentIndex = prevState.formConfig.fields.length
      const fields = [
        ...prevState.formConfig.fields,
        {
          name: `name ${currentIndex}`,
          fieldType: 'input',
          props: {
            title: 'Title',
          },
          state: {
            value: {},
            display: {},
            disabled: {},
          },
        },
      ]

      formConfig.fields = fields

      return {
        formConfig,
      }
    })
  }

  removeField = () => {
    this.setState((prevState) => {
      const { activeField, formConfig } = prevState
      const newFormConfig = Object.assign({}, formConfig)
      const fields = [...formConfig.fields]
      fields.splice(activeField, 1)
      newFormConfig.fields = fields
      return {
        formConfig: newFormConfig,
      }
    })
  }

  // onChange

  onChangeFieldConfig = (key, value) => {
    const { activeField, formConfig } = this.state

    const { fields } = formConfig
    const newFields = [...fields]

    const fieldConfig = set(newFields[activeField], key, value)
    newFields[activeField] = fieldConfig

    const newFormConfig = {
      ...formConfig,
      fields: newFields,
    }

    this.setState(() => {
      return {
        formConfig: newFormConfig,
      }
    })

    console.log('onChangeFieldConfig', activeField, key, value)
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
    const { formConfig } = this.state
    const fieldsOptions = this.getFieldsOptions()
    // console
    return (
      <div>
        <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <FieldsController
                addField={this.addField}
                removeField={this.removeField}
                fieldsOptions={fieldsOptions}
              />
              <FieldEditor
                formConfig={formConfig}
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

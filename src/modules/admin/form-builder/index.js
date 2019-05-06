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

console.log('set', set)

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
      const fields = [
        ...prevState.formConfig.fields,
        {
          name: 'a',
          fieldType: 'input',
          dataType: 'int',
          props: {
            title: 'field a',
          },
          state: {
            value: {
              // defaultValue: 0,
              // valueExpr: 'c * 2',
            },
            display: {
              // defaultValue: false,
              // valueExpr: 'a > 10',
            },
            disabled: {
              // defaultValue: false,
              // valueExpr: 'a > 34',
            },
          },
        },
      ]

      formConfig.fields = fields

      return {
        formConfig,
      }
    })
  }

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

  render() {
    const { formConfig } = this.state
    // console
    return (
      <div>
        <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <h3>Config</h3>
              <Button
                primary
                onClick={this.addField}
              >
                Add field
              </Button>
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

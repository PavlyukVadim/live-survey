import React, { Component } from 'react'
import {
  Divider,
  Grid,
  // Image,
  Button,
  Segment,
} from 'semantic-ui-react'
import LiveForm from 'react-live-form'
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

  onChangeFieldName = (field) => {
    const { activeField } = this.state
  }

  render() {
    const { formConfig } = this.state
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
              <FieldEditor />
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

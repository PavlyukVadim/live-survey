import React, { Component } from 'react'
import {
  Divider,
  Grid,
  Segment,
} from 'semantic-ui-react'
import LiveForm from 'react-live-form'
import { set } from 'utils'
import FormProps from './form-props'
import FieldsController from './fields-controller'
import FieldEditor from './field-editor'

const getInitialState = (props) => {
  const { preloadedForm = {} } = props
  const initialFormConfig = {
    fields: [],
  }

  const formConfig = (preloadedForm && preloadedForm.formConfig) || initialFormConfig
  const activeFieldIndex = formConfig.fields.length > 0 ? 0 : null
  const loaded = activeFieldIndex !== null

  return {
    formConfig,
    title: preloadedForm.title || '',
    description: preloadedForm.description || '',
    activeFieldIndex,
    loaded,
  }
}

class LiveFormBuilder extends Component {
  state = getInitialState(this.props)

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (
      props.preloadedForm &&
      props.preloadedForm.formConfig !== state.formConfig &&
      !state.loaded
    ) {
      return {
        formConfig: props.preloadedForm.formConfig,
        title: props.preloadedForm.title || '',
        description: props.preloadedForm.description || '',
        activeFieldIndex: 0,
        loaded: true,
      }
    }
    return null
  }

  onChangeFormProps = (prop, value) => {
    this.setState(() => {
      return {
        [prop]: value,
      }
    })
  }

  onChangeFormConfig = (newFormConfig) => {
    this.setState(() => {
      return {
        formConfig: newFormConfig,
      }
    })
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
            title: `Title ${currentIndex}: `,
          },
          state: {
            value: {
              defaultValue: '',
              valueExpr: '',
            },
            display: {
              defaultValue: true,
              valueExpr: '',
            },
            disabled: {
              defaultValue: false,
              valueExpr: '',
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
        activeFieldIndex: (activeFieldIndex !== 0)
          ? activeFieldIndex - 1
          : null,
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

  onFormPublish = () => {
    const { createNewForm } = this.props
    const { formConfig, title, description } = this.state

    createNewForm({
      formConfig,
      title,
      description,
    })
  }

  componentDidCatch(error, info) {
    console.log('error', error)
  }

  render() {
    const {
      activeFieldIndex,
      formConfig,
      title,
      description,
    } = this.state
    const fieldsOptions = this.getFieldsOptions()
    const activeField = formConfig.fields[activeFieldIndex] || {}
    const copyOfFormConfig = JSON.parse(JSON.stringify(formConfig))

    return (
      <div>
        <FormProps
          title={title}
          description={description}
          onChangeFormProps={this.onChangeFormProps}
          onFormPublish={this.onFormPublish}
        />
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
              {
                (activeFieldIndex !== null) &&
                (
                  <FieldEditor
                    formConfig={formConfig}
                    activeField={activeField}
                    onChangeFormConfig={this.onChangeFormConfig}
                    onChangeFieldConfig={this.onChangeFieldConfig}
                  />
                )
              }
            </Grid.Column>
            <Grid.Column>
              <LiveForm formConfig={copyOfFormConfig} />
            </Grid.Column>
          </Grid>
          <Divider vertical>preView</Divider>
        </Segment>
      </div>
    )
  }
}

export default LiveFormBuilder

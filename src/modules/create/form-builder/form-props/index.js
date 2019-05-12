import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'

class FormProps extends Component {
  render() {
    const {
      title,
      description,
      onChangeFormProps,
    } = this.props

    return (
      <Form>
        <Form.Field>
          <Header as="h2">Title</Header>
          <input
            type='text'
            value={title}
            onChange={(e) => onChangeFormProps('title', e.target.value)}
            placeholder='Title'
          />
          <Header as="h3">Description</Header>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => onChangeFormProps('description', e.target.value)}
            placeholder='Description'
          />
        </Form.Field>
      </Form>
    )
  }
}

export default FormProps

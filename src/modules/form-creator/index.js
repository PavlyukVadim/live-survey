import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import FormBuilder from './form-builder'

class FormCreator extends Component {
  render() {
    return (
      <div>
        <Container>
          <FormBuilder />
        </Container>
      </div>
    )
  }
}

export default FormCreator

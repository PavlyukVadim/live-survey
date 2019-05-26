import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import LiveFormBuilder from '../live-form-builder'
import { createForm } from '../../actions/requestActions'
import ModalExampleControlled from './result-modal'

class FormCreator extends Component {
  render() {
    const { createNewForm } = this.props
    const userId = localStorage.getItem('userId')
    return (
      <div>
        <Container>
          <LiveFormBuilder
            createNewForm={(form) => createNewForm(form, userId)}
          />
          <ModalExampleControlled />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = () => null

const mapDispatchToProps = (dispatch) => ({
  createNewForm: (form, userId) => dispatch(createForm(form, userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormCreator)

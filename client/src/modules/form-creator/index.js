import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import LiveFormBuilder from '../live-form-builder'
import { createForm } from '../../actions/requestActions'

class FormCreator extends Component {
  render() {
    const { createNewForm } = this.props
    return (
      <div>
        <Container>
          <LiveFormBuilder createNewForm={createNewForm} />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = () => null

const mapDispatchToProps = (dispatch) => ({
  createNewForm: (form) => dispatch(createForm(form)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormCreator)

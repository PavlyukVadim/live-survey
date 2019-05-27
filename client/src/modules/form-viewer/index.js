import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab, Message } from 'semantic-ui-react'
import {
  getCurrentForm,
  getFormAnswers,
  updateForm,
} from '../../actions/requestActions'
import Answers from './answers'
import LiveFormBuilder from '../live-form-builder'
import ResultModal from './result-modal'
import config from '../../config'

const { frontendHost: host } = config

class FormViewer extends Component {
  componentDidMount() {
    const {
      getForm,
      getAnswers,
      match = {},
    } = this.props
    const { id } = match.params
    const userId = localStorage.getItem('userId')
    if (getForm) getForm(id, userId)
    if (getAnswers) getAnswers(id)
  }

  render() {
    const {
      preloadedForm,
      answers,
      match = {},
      updateCurrentForm,
    } = this.props

    const { id } = match.params
    const formLink = `${host}/fill-form/${id}`
    const userId = localStorage.getItem('userId')

    const panes = [
      {
        menuItem: 'Answers',
        render: () => (
          <Tab.Pane attached={false}>
            <Answers answers={answers} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Form',
        render: () => (
          <Tab.Pane attached={false}>
            <LiveFormBuilder
              preloadedForm={preloadedForm}
              createNewForm={(form) => updateCurrentForm(form, id, userId)}
            />
          </Tab.Pane>
        ),
      },
    ]

    return (
      <div>
        <Container>
          <Message>
            <Message.Header>Form Link</Message.Header>
            <p>{formLink}</p>
          </Message>
          <Tab menu={{ secondary: true }} panes={panes} />
        </Container>
        <ResultModal />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  preloadedForm: state.forms && state.forms.currentForm,
  answers: state.forms && state.forms.answers,
})

const mapDispatchToProps = (dispatch) => ({
  getForm: (id, userId) => dispatch(getCurrentForm(id, userId)),
  getAnswers: (id) => dispatch(getFormAnswers(id)),
  updateCurrentForm: (form, id, userId) => dispatch(updateForm(form, id, userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormViewer)

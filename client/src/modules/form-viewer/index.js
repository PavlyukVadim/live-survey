import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab, Message } from 'semantic-ui-react'
import { getCurrentForm, getFormAnswers } from '../../actions/requestActions'
import Answers from './answers'
import LiveFormBuilder from '../live-form-builder'
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
    if (getForm) getForm(id)
    if (getAnswers) getAnswers(id)
  }

  render() {
    const {
      preloadedForm,
      answers,
      match = {},
    } = this.props

    const { id } = match.params
    const formLink = `${host}/fill-form/${id}`

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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  preloadedForm: state.forms && state.forms.currentForm,
  answers: state.forms && state.forms.answers,
})

const mapDispatchToProps = (dispatch) => ({
  getForm: (id) => dispatch(getCurrentForm(id)),
  getAnswers: (id) => dispatch(getFormAnswers(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormViewer)

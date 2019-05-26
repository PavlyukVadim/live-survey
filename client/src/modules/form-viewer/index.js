import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab } from 'semantic-ui-react'
import { getCurrentForm, getFormAnswers } from '../../actions/requestActions'
import Answers from './answers'
import LiveFormBuilder from '../live-form-builder'

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
    const { preloadedForm, answers } = this.props

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
            <LiveFormBuilder preloadedForm={preloadedForm} />
          </Tab.Pane>
        ),
      },
    ]

    return (
      <div>
        <Container>
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

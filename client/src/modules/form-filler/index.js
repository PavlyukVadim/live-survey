import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LiveForm from 'react-live-form'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'
import ResultModal from './result-modal'
import {
  getCurrentForm,
  sendFormAnswers,
} from '../../actions/requestActions'
import './index.scss'

class FormFiller extends Component {
  componentDidMount() {
    const { getForm, match = {} } = this.props
    const { id } = match.params
    const userId = localStorage.getItem('userId')
    if (getForm) {
      getForm(id, userId)
    }
  }

  onSendAnswers = (answer) => {
    const { sendAnswer, match = {} } = this.props
    const { id } = match.params
    const userId = localStorage.getItem('userId')
    if (sendAnswer) {
      sendAnswer(+id, answer, userId)
    }
  }

  render() {
    const {
      match = {},
      preloadedForm,
    } = this.props
    const { id } = match.params

    const { title, description } = (preloadedForm || {})

    console.log('id', id)
    console.log('preloadedForm', preloadedForm)

    return (
      <div className="form-filler">
        <div className="header">
          <Header as='h2'>{title}</Header>
          <Header as='h3'>{description}</Header>
        </div>
        {
          preloadedForm && (
            <LiveForm
              onSubmit={this.onSendAnswers}
              formConfig={preloadedForm.formConfig}
            />
          )
        }
        <ResultModal />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  preloadedForm: state.forms && state.forms.currentForm,
})

const mapDispatchToProps = (dispatch) => ({
  getForm: (id, userId) => dispatch(getCurrentForm(id, userId)),
  sendAnswer: (id, answer, userId) => dispatch(sendFormAnswers(id, answer, userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(FormFiller))

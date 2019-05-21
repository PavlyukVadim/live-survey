import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LiveForm from 'react-live-form'
import { connect } from 'react-redux'
import { getCurrentForm } from '../../actions/requestActions'

class FormFiller extends Component {
  componentDidMount() {
    const { getForm, match = {} } = this.props
    const { id } = match.params
    if (getForm) {
      getForm(id)
    }
  }

  render() {
    const {
      match = {},
      preloadedForm,
    } = this.props
    const { id } = match.params
    const formConfig = {}

    console.log('id', id)

    return (
      <div>
        FormFiller
        {
          preloadedForm && (
            <LiveForm formConfig={preloadedForm.formConfig} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  preloadedForm: state.forms && state.forms.currentForm,
})

const mapDispatchToProps = (dispatch) => ({
  getForm: (id) => dispatch(getCurrentForm(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(FormFiller))

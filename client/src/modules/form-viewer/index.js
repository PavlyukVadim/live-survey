import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab } from 'semantic-ui-react'
import { getCurrentForm } from '../../actions/requestActions'
import LiveFormBuilder from '../live-form-builder'

class FormViewer extends Component {
  componentDidMount() {
    const { getForm, match = {} } = this.props
    const { id } = match.params
    if (getForm) {
      getForm(id)
    }
  }

  render() {
    const { preloadedForm } = this.props

    const panes = [
      {
        menuItem: 'Answers',
        render: () => (
          <Tab.Pane attached={false}>
            Tab 2 Content
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
})

const mapDispatchToProps = (dispatch) => ({
  getForm: (id) => dispatch(getCurrentForm(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormViewer)

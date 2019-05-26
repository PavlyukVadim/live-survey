import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'

class ResultModal extends Component {
  state = { modalClose: false }

  handleClose = () => {
    const { history } = this.props
    this.setState({ modalClose: true })
    history.push('/')
  }

  render() {
    const { modalClose } = this.state
    const { answersSent } = this.props

    return (
      <Modal
        open={answersSent && !modalClose}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Created' />
        <Modal.Content>
          <h3>Your answer was successfully sent!</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color='green'
            onClick={this.handleClose}
            inverted
          >
            <Icon name='checkmark' />
            Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    answersSent: state.forms.answersSent,
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultModal))

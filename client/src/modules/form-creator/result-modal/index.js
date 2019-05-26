import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'

class ModalExampleControlled extends Component {
  state = { modalClose: false }

  handleClose = () => {
    const { history } = this.props
    this.setState({ modalClose: true })
    history.push('/')
  }

  render() {
    const { modalClose } = this.state
    const { formCreated } = this.props

    return (
      <Modal
        open={formCreated && !modalClose}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Created' />
        <Modal.Content>
          <h3>Your form was successfully created!</h3>
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
    formCreated: state.forms.formCreated,
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalExampleControlled))

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
    history.push('/sign-in')
  }

  render() {
    const { modalClose } = this.state
    const { userCreated } = this.props

    return (
      <Modal
        open={userCreated && !modalClose}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Created' />
        <Modal.Content>
          <h3>New user was successfully created!</h3>
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
    userCreated: state.forms.userCreated,
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalExampleControlled))

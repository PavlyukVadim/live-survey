import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Button,
  Header,
  Form,
  Grid,
  Segment,
  Divider,
} from 'semantic-ui-react'
import { userAuth } from '../../../actions/requestActions'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    tryAgain: false,
  }

  onChangeFormField = (key, value) => {
    this.setState((prevState) => {
      return {
        [key]: value,
        tryAgain: true,
      }
    })
  }

  onSubmit = () => {
    const {
      email,
      password,
    } = this.state
    const { userTryAuth } = this.props

    if (!email) {
      alert('Please, fill email field')
      return
    }
    if (!password) {
      alert('Please, fill password field')
      return
    }

    this.setState({
      tryAgain: false,
    })

    const userData = this.state
    console.log('userData', userData)
    if (userTryAuth) {
      userTryAuth(userData)
    }
  }

  render() {
    const {
      userNotExist,
      history,
      user,
    } = this.props

    const {
      email,
      password,
      tryAgain,
    } = this.state

    if (
      userNotExist &&
      !tryAgain &&
      !user
    ) {
      alert('userNotExist')
    } else if (user) {
      history.push('/')
    }

    return (
      <div>
        <Grid
          verticalAlign='middle'
          columns='equal'
          className='full-height'
        >
          <Grid.Row stretched>
            <Grid.Column />
            <Grid.Column width={6}>
              <Segment>
                <Header as='h2'>Sign In</Header>
                <Form>
                  <Form.Field>
                    <label>Email</label>
                    <input
                      type='email'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => this.onChangeFormField('email', e.target.value)}
                      required
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => this.onChangeFormField('password', e.target.value)}
                      required
                    />
                  </Form.Field>
                  <Button
                    type='submit'
                    positive
                    onClick={this.onSubmit}
                  >
                    Confirm
                  </Button>
                  <Divider />
                  <div>Dont have an account?</div>
                  <a href="/#/sign-up">Sign Up</a>
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userNotExist: state.forms && state.forms.userNotExist,
    user: state.forms && state.forms.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  userTryAuth: (user) => dispatch(userAuth(user)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn))

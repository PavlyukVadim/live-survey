import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Checkbox,
  Header,
  Form,
  Grid,
  Segment,
} from 'semantic-ui-react'
import { createUser } from '../../../actions/requestActions'
import ResultModal from './result-modal'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  onChangeFormField = (key, value) => {
    this.setState((prevState) => {
      return {
        [key]: value,
      }
    })
  }

  onSubmit = () => {
    const {
      firstName,
      lastName,
      email,
      password,
    } = this.state

    if (!firstName) {
      alert('Please, fill firstName field')
      return
    }
    if (!lastName) {
      alert('Please, fill lastName field')
      return
    }
    if (!email) {
      alert('Please, fill email field')
      return
    }
    if (!password) {
      alert('Please, fill password field')
      return
    }

    const { createNewUser } = this.props
    const userData = this.state

    if (createNewUser) {
      createNewUser(userData)
    }
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
    } = this.state

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
                <Header as='h2'>Sign Up</Header>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <label>First Name</label>
                      <input
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => this.onChangeFormField('firstName', e.target.value)}
                        required
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => this.onChangeFormField('lastName', e.target.value)}
                        required
                      />
                    </Form.Field>
                  </Form.Group>
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
                  <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                  </Form.Field>
                  <Button
                    type='submit'
                    positive
                    onClick={this.onSubmit}
                  >
                    Confirm
                  </Button>
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
        <ResultModal />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (user) => dispatch(createUser(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp)

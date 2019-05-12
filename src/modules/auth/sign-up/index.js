import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Header,
  Form,
  Grid,
  Segment,
} from 'semantic-ui-react'

class SignUp extends Component {
  render() {
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
                      <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input placeholder='Last Name' />
                    </Form.Field>
                  </Form.Group>
                  <Form.Field>
                    <label>Email</label>
                    <input
                      type='email'
                      placeholder='Email'
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      type='password'
                      placeholder='Password'
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                  </Form.Field>
                  <Button
                    type='submit'
                    positive
                  >
                    Confirm
                  </Button>
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

export default SignUp

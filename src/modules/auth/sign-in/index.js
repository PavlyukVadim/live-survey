import React, { Component } from 'react'
import {
  Button,
  Header,
  Form,
  Grid,
  Segment,
} from 'semantic-ui-react'

class SignIn extends Component {
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
                <Header as='h2'>Sign In</Header>
                <Form>
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

export default SignIn

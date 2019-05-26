import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Container, Grid } from 'semantic-ui-react'
import { getYourForms } from '../../actions/requestActions'
import FormCard from './form-card'
import './index.scss'

class Dashboard extends Component {
  componentDidMount() {
    const { getForms } = this.props
    if (getForms) {
      const userId = localStorage.getItem('userId')
      getForms(userId)
    }
  }

  render() {
    const { forms = [] } = this.props
    const formCards = forms.map((form) => {
      return (
        <div
          key={form.title}
          className="formCard-container"
        >
          <Grid.Column width={4}>
            <FormCard form={form} />
          </Grid.Column>
        </div>
      )
    })

    return (
      <div className="dashboard">
        <Container>
          <Header as='h2'>Recent form</Header>
          <Grid columns='equal'>
            <Grid.Row stretched>
              {formCards[0]}
            </Grid.Row>
          </Grid>
          <Header as='h2'>All forms</Header>
          <Grid columns='equal'>
            <Grid.Row stretched>
              {formCards}
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  forms: state.forms && state.forms.yourForms,
})

const mapDispatchToProps = (dispatch) => ({
  getForms: (userId) => dispatch(getYourForms(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)

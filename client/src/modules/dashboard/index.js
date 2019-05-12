import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Container, Grid } from 'semantic-ui-react'
import { getYourForms } from '../../actions/requestActions'
import FormCard from './form-card'
import './index.scss'

console.log('getYourForms', getYourForms)

const forms = [
  {
    id: 3,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '4',
  },
  {
    id: 4,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '5',
  },
  {
    id: 5,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '6',
  },
  {
    id: 6,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '6',
  },
  {
    id: 8,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '6',
  },
]

class Dashboard extends Component {
  componentDidMount() {
    const { getForms } = this.props
    if (getForms) {
      getForms()
    }
  }

  render() {
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
  ...state,
})

const mapDispatchToProps = (dispatch) => ({
  getForms: () => dispatch(getYourForms()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)

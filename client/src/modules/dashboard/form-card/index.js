import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'

class FormCard extends Component {
  onCardClick = () => {
    const { form: { id }, history } = this.props
    history.push(`/form/${id}`)
  }

  render() {
    const { form } = this.props
    const {
      title,
      description,
      answers,
    } = form

    return (
      <Card onClick={this.onCardClick}>
        <Card.Content header={title} />
        <Card.Content description={description} />
        <Card.Content extra>
          <Icon name='user' />
          {`${answers} Answers`}
        </Card.Content>
      </Card>
    )
  }
}

export default withRouter(FormCard)

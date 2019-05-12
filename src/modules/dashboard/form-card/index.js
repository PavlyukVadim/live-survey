import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

class FormCard extends Component {
  render() {
    const { form } = this.props
    const {
      title,
      description,
      anwsers,
    } = form

    return (
      <Card>
        <Card.Content header={title} />
        <Card.Content description={description} />
        <Card.Content extra>
          <Icon name='user' />
          {`${anwsers} Answers`}
        </Card.Content>
      </Card>
    )
  }
}

export default FormCard

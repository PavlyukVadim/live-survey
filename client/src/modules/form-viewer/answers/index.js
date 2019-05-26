import React, { Component } from 'react'
import {
  Table,
  Header,
  Card,
  Divider,
} from 'semantic-ui-react'

class Answers extends Component {
  getAnswerTable = (answer) => {
    const rows = Object
      .entries(answer)
      .map(([key, valueObject]) => {
        const {
          value,
          display = true,
          disabled = true,
        } = valueObject
        return (
          <>
            <Table.Row>
              <Table.Cell>{key}</Table.Cell>
              <Table.Cell>{value}</Table.Cell>
              <Table.Cell>{display.toString()}</Table.Cell>
              <Table.Cell>{disabled.toString()}</Table.Cell>
            </Table.Row>
          </>
        )
      })

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Field Name</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
            <Table.HeaderCell>Display</Table.HeaderCell>
            <Table.HeaderCell>Disable</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows}
        </Table.Body>
        <Table.Footer></Table.Footer>
      </Table>
    )
  }

  getUserInfo = (user) => {
    if (!user) {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Incognito</Card.Header>
            <Card.Meta>******</Card.Meta>
            <Card.Description></Card.Description>
          </Card.Content>
        </Card>
      )
    }

    const { firstName, email, id } = user

    return (
      <Card>
        <Card.Content>
          <Card.Header>{firstName}</Card.Header>
          <Card.Meta>{`User id: ${id}`}</Card.Meta>
          <Card.Description>{email}</Card.Description>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { answers = [] } = this.props
    const tables = answers.map(({ answer, user }) => {
      const table = this.getAnswerTable(answer)
      const userInfo = this.getUserInfo(user)
      return (
        <div key={answer}>
          {userInfo}
          <Header as='h4'>Answer</Header>
          {table}
          <Divider />
        </div>
      )
    })

    return (
      <div>
        <Header as='h2'>Answers</Header>
        {tables}
      </div>
    )
  }
}

export default Answers

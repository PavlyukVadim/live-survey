import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class MyHeader extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => {
    const { history } = this.props

    switch (name) {
      case 'dashboard': {
        history.push('/')
        break
      }
      case 'create': {
        history.push('/create')
        break
      }
      case 'logout': {
        history.push('/sign-in')
        break
      }
      default: {
        break
      }
    }

    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment color="violet" inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='dashboard'
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='create'
            active={activeItem === 'create'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            >
              Log Out
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default withRouter(MyHeader)

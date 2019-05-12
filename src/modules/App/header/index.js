import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class MyHeader extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
            name='Create'
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

export default MyHeader

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        App
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

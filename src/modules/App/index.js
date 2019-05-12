import React from 'react'
import {
  HashRouter,
  Route,
  Switch,
  // Link,
} from 'react-router-dom'
import Header from './header'
import CreateComponent from '../create'
import Dashboard from '../dashboard'

const App = () => (
  <div>
    <Header />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/create" component={CreateComponent} />
        <Route path="/contact" component={Dashboard} />
      </Switch>
    </HashRouter>
  </div>
)

export default App

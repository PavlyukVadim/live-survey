import React from 'react'
import {
  HashRouter,
  Route,
  Switch,
  // Link,
} from 'react-router-dom'
import Header from './header'
import FormCreator from '../form-creator'
import FormViewer from '../form-viewer'
import Dashboard from '../dashboard'
import SignIn from '../auth/sign-in'
import SignUp from '../auth/sign-up'

const App = () => (
  <div>
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/forms/new" component={FormCreator} />
        <Route path="/forms/:id" component={FormViewer} />
      </Switch>
    </HashRouter>
  </div>
)

export default App

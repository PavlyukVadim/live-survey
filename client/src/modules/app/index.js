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
import FormFiller from '../form-filler'
import Dashboard from '../dashboard'
import SignIn from '../auth/sign-in'
import SignUp from '../auth/sign-up'
import AuthControllerHoc from '../auth/auth-controller-hoc'

const App = () => (
  <div>
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={AuthControllerHoc(Dashboard)} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/form/new" component={AuthControllerHoc(FormCreator)} />
        <Route path="/form/:id" component={AuthControllerHoc(FormViewer)} />
        <Route path="/fill-form/:id" component={FormFiller} />
      </Switch>
    </HashRouter>
  </div>
)

export default App

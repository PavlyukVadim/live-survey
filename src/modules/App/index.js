import React from 'react'
import {
  HashRouter,
  Route,
  Switch,
  // Link,
} from 'react-router-dom'
import Admin from '../admin'
import SurveyBuilder from '../SurveyBuilder'

const App = () => (
  <div>
    <h1>Header</h1>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SurveyBuilder} />
        <Route path="/create" component={Admin} />
        <Route path="/contact" component={SurveyBuilder} />
      </Switch>
    </HashRouter>
  </div>
)

export default App

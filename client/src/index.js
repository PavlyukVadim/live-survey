import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'regenerator-runtime/runtime'
import configureStore from './store/index'
import App from './modules/app'
import 'semantic-ui-css/semantic.min.css'
import './index.scss'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

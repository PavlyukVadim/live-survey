import { combineReducers } from 'redux'

import simpleReducer from './simpleReducer'
import forms from './formsReducer'

export default combineReducers({
  simpleReducer,
  forms,
})

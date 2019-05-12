import {
  GOT_YOUR_FORMS,
  GOT_CURRENT_FORM,
} from '../actions/requestActions'

export default (state = {}, action) => {
  switch (action.type) {
    case GOT_YOUR_FORMS:
      return {
        ...state,
        yourForms: action.data,
      }
    case GOT_CURRENT_FORM:
      return {
        ...state,
        currentForm: action.data,
      }
    default:
      return state
  }
}

import {
  GOT_YOUR_FORMS,
  GOT_CURRENT_FORM,
  GOT_CREATED_FORM,
} from '../actions/requestActions'

export default (state = {}, action) => {
  switch (action.type) {
    case GOT_YOUR_FORMS:
      return {
        ...state,
        yourForms: action.data,
        formCreated: false,
      }
    case GOT_CURRENT_FORM:
      return {
        ...state,
        currentForm: action.data,
      }
    case GOT_CREATED_FORM:
      return {
        ...state,
        currentForm: action.data,
        formCreated: true,
      }
    default:
      return state
  }
}

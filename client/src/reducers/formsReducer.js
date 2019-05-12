import { GOT_YOUR_FORMS } from '../actions/requestActions'

export default (state = {}, action) => {
  switch (action.type) {
    case GOT_YOUR_FORMS:
      return {
        ...state,
        yourForms: action.data,
      }
    default:
      return state
  }
}

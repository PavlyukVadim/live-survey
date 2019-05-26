import {
  GOT_YOUR_FORMS,
  GOT_CURRENT_FORM,
  GOT_CREATED_FORM,
  GOT_FORM_ANSWERS,
  FORM_ANSWERS_SENT,
} from '../actions/requestActions'

export default (state = {}, action) => {
  switch (action.type) {
    case GOT_YOUR_FORMS:
      return {
        ...state,
        yourForms: action.data,
        formCreated: false,
        answersSent: false,
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
    case GOT_FORM_ANSWERS:
      return {
        ...state,
        answers: action.answers,
      }
    case FORM_ANSWERS_SENT:
      return {
        ...state,
        answersSent: true,
      }
    default:
      return state
  }
}

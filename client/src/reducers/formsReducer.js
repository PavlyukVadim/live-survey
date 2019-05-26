import {
  GOT_YOUR_FORMS,
  GOT_CURRENT_FORM,
  GOT_CREATED_FORM,
  GOT_UPDATED_FORM,
  GOT_FORM_ANSWERS,
  FORM_ANSWERS_SENT,
  GOT_CREATED_USER,
  USER_AUTHED,
  USER_NOT_EXIST,
} from '../actions/requestActions'

export default (state = {}, action) => {
  switch (action.type) {
    case GOT_YOUR_FORMS:
      return {
        ...state,
        yourForms: action.data,
        formCreated: false,
        answersSent: false,
        formUpdated: false,
        userCreated: false,
        userNotExist: false,
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
    case GOT_UPDATED_FORM:
      return {
        ...state,
        currentForm: action.data,
        formUpdated: true,
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
    case GOT_CREATED_USER:
      return {
        ...state,
        userCreated: true,
      }
    case USER_AUTHED:
      console.log('here')
      return {
        ...state,
        user: action.user,
        userNotExist: false,
      }
    case USER_NOT_EXIST:
      return {
        ...state,
        userNotExist: true,
      }
    default:
      return state
  }
}

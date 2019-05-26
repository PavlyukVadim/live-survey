export { GET_YOUR_FORMS, getYourForms } from './form'
export { GOT_YOUR_FORMS, gotYourForms } from './form'
export { GET_CURRENT_FORM, getCurrentForm } from './form'
export { GOT_CURRENT_FORM, gotCurrentForm } from './form'
export { CREATE_FORM, createForm } from './form'
export { GOT_CREATED_FORM, gotCreatedForm } from './form'

export { GET_FORM_ANSWERS, getFormAnswers } from './form'
export { GOT_FORM_ANSWERS, gotFormAnswers } from './form'
export { SEND_FORM_ANSWERS, sendFormAnswers } from './form'
export { FORM_ANSWERS_SENT, formAnswersSent } from './form'

export const GET_USER = 'GET_USER'
export const getUser = (id) => ({
  type: GET_USER,
  id,
})

export const GOT_USER = 'GOT_USER'
export const gotUser = (data) => ({
  type: GOT_USER,
  data,
})

export const CREATE_USER = 'CREATE_USER'
export const createUser = (user) => ({
  type: CREATE_USER,
  user,
})

export const GOT_FAILURE = 'GOT_FAILURE'
export const gotFailure = (error) => ({
  type: GOT_FAILURE,
  error,
})

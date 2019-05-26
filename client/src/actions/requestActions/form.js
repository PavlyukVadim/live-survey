export const GET_YOUR_FORMS = 'GET_YOUR_FORMS'
export const getYourForms = (id) => ({
  type: GET_YOUR_FORMS,
  id,
})

export const GOT_YOUR_FORMS = 'GOT_YOUR_FORMS'
export const gotYourForms = (data) => ({
  type: GOT_YOUR_FORMS,
  data,
})

export const GET_CURRENT_FORM = 'GET_CURRENT_FORM'
export const getCurrentForm = (id) => ({
  type: GET_CURRENT_FORM,
  id,
})

export const GOT_CURRENT_FORM = 'GOT_CURRENT_FORM'
export const gotCurrentForm = (data) => ({
  type: GOT_CURRENT_FORM,
  data,
})

export const CREATE_FORM = 'CREATE_FORM'
export const createForm = (form) => ({
  type: CREATE_FORM,
  form,
})

export const GOT_CREATED_FORM = 'GOT_CREATED_FORM'
export const gotCreatedForm = (form) => ({
  type: GOT_CREATED_FORM,
  form,
})

export const UPDATE_FORM = 'UPDATE_FORM'
export const updateForm = (form, id) => ({
  type: UPDATE_FORM,
  form,
  id,
})

export const GOT_UPDATED_FORM = 'GOT_UPDATED_FORM'
export const gotUpdatedForm = (form) => ({
  type: GOT_UPDATED_FORM,
  form,
})

// answers
export const GET_FORM_ANSWERS = 'GET_FORM_ANSWERS'
export const getFormAnswers = (formId) => ({
  type: GET_FORM_ANSWERS,
  formId,
})

export const GOT_FORM_ANSWERS = 'GOT_FORM_ANSWERS'
export const gotFormAnswers = (answers) => ({
  type: GOT_FORM_ANSWERS,
  answers,
})

export const SEND_FORM_ANSWERS = 'SEND_FORM_ANSWERS'
export const sendFormAnswers = (formId, answer) => ({
  type: SEND_FORM_ANSWERS,
  formId,
  answer,
})

export const FORM_ANSWERS_SENT = 'FORM_ANSWERS_SENT'
export const formAnswersSent = (status) => ({
  type: FORM_ANSWERS_SENT,
  status,
})

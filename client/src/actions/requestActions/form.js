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
export const createForm = (id) => ({
  type: CREATE_FORM,
  id,
})

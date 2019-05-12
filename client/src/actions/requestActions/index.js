export { GET_YOUR_FORMS } from './form'
export { getYourForms } from './form'

export { GOT_YOUR_FORMS } from './form'
export { gotYourForms } from './form'

export { GET_CURRENT_FORM } from './form'
export { getCurrentForm } from './form'

export { GOT_CURRENT_FORM } from './form'
export { gotCurrentForm } from './form'

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

import {
  GET_YOUR_FORMS,
  gotYourForms,
  GET_CURRENT_FORM,
  gotCurrentForm,
  CREATE_FORM,
} from '../actions/requestActions'

import {
  GET_USER,
  CREATE_USER,
  gotUser,
  gotFailure,
} from '../actions'

const host = 'http://localhost:3000'

const apiConfig = {
  getYourForms: {
    triggerActionType: GET_YOUR_FORMS,
    successAction: gotYourForms,
    failureAction: gotFailure,
    getOptions: ({ id }) => ({
      method: 'get',
      url: `${host}/forms`,
    }),
  },
  getCurrentForm: {
    triggerActionType: GET_CURRENT_FORM,
    successAction: gotCurrentForm,
    failureAction: gotFailure,
    getOptions: ({ id }) => ({
      method: 'get',
      url: `${host}/formById/${id}`,
    }),
  },
  createForm: {
    triggerActionType: CREATE_FORM,
    successAction: gotCurrentForm,
    failureAction: gotFailure,
    getOptions: ({ id, form }) => ({
      method: 'post',
      url: `${host}/createForm/${id}`,
      data: form,
    }),
  },
  createUser: {
    triggerActionType: CREATE_USER,
    successAction: gotCurrentForm,
    failureAction: gotFailure,
    getOptions: ({ form }) => ({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: form,
    }),
  },
}

export default apiConfig

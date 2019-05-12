import {
  GET_YOUR_FORMS,
  getYourForms,
  GOT_YOUR_FORMS,
  gotYourForms,

  GET_CURRENT_FORM,
  getCurrentForm,

  GOT_CURRENT_FORM,
  gotCurrentForm,
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
      url: `${host}/formById`,
    }),
  },
  createUser: {
    triggerActionType: CREATE_USER,
    successAction: gotUser,
    failureAction: gotFailure,
    getOptions: ({ user }) => ({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: user,
    }),
  },
}

export default apiConfig

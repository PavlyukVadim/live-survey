import {
  GET_YOUR_FORMS, gotYourForms,
  GET_CURRENT_FORM, gotCurrentForm,
  CREATE_FORM, gotCreatedForm,
  SEND_FORM_ANSWERS, formAnswersSent,
  gotFailure,
} from '../actions/requestActions'

const host = 'http://localhost:3000'

const apiConfig = {
  getYourForms: {
    triggerActionType: GET_YOUR_FORMS,
    successAction: gotYourForms,
    failureAction: gotFailure,
    getOptions: () => ({
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
    successAction: gotCreatedForm,
    failureAction: gotFailure,
    getOptions: ({ form }) => ({
      method: 'post',
      url: `${host}/createForm`,
      data: { form },
    }),
  },
  sendFormAnswers: {
    triggerActionType: SEND_FORM_ANSWERS,
    successAction: formAnswersSent,
    failureAction: gotFailure,
    getOptions: ({ formId, answer }) => ({
      method: 'post',
      url: `${host}/answers`,
      data: { formId, answer },
    }),
  },
  // createUser: {
  //   triggerActionType: CREATE_USER,
  //   successAction: gotCreatedForm,
  //   failureAction: gotFailure,
  //   getOptions: ({ form }) => ({
  //     method: 'post',
  //     url: 'https://jsonplaceholder.typicode.com/posts',
  //     data: form,
  //   }),
  // },
}

export default apiConfig

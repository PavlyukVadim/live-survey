import {
  GET_YOUR_FORMS, gotYourForms,
  GET_CURRENT_FORM, gotCurrentForm,
  CREATE_FORM, gotCreatedForm,
  GET_FORM_ANSWERS, gotFormAnswers,
  SEND_FORM_ANSWERS, formAnswersSent,
  gotFailure,
} from '../actions/requestActions'

export const host = 'http://localhost:3000'
export const frontendHost = 'http://localhost:8080/#'

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
  getFormAnswers: {
    triggerActionType: GET_FORM_ANSWERS,
    successAction: gotFormAnswers,
    failureAction: gotFailure,
    getOptions: ({ formId }) => ({
      method: 'get',
      url: `${host}/answers/${formId}`,
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

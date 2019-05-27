import {
  GET_YOUR_FORMS, gotYourForms,
  GET_CURRENT_FORM, gotCurrentForm,
  CREATE_FORM, gotCreatedForm,
  UPDATE_FORM, gotUpdatedForm,
  GET_FORM_ANSWERS, gotFormAnswers,
  SEND_FORM_ANSWERS, formAnswersSent,
  CREATE_USER, gotCreatedUser,
  userNotExist, USER_AUTH, userAuthed,
  gotFailure,
} from '../actions/requestActions'

export const host = 'http://localhost:3000'
export const frontendHost = 'http://localhost:8080/#'

const apiConfig = {
  getYourForms: {
    triggerActionType: GET_YOUR_FORMS,
    successAction: gotYourForms,
    failureAction: gotFailure,
    getOptions: ({ userId }) => ({
      method: 'post',
      url: `${host}/forms`,
      data: { userId },
    }),
  },
  getCurrentForm: {
    triggerActionType: GET_CURRENT_FORM,
    successAction: gotCurrentForm,
    failureAction: gotFailure,
    getOptions: ({ id, userId }) => ({
      method: 'post',
      url: `${host}/formById/${id}`,
      data: { userId },
    }),
  },
  createForm: {
    triggerActionType: CREATE_FORM,
    successAction: gotCreatedForm,
    failureAction: gotFailure,
    getOptions: ({ form, userId }) => ({
      method: 'post',
      url: `${host}/createForm`,
      data: { form, userId },
    }),
  },
  updateForm: {
    triggerActionType: UPDATE_FORM,
    successAction: gotUpdatedForm,
    failureAction: gotFailure,
    getOptions: ({ id, form, userId }) => ({
      method: 'post',
      url: `${host}/updateForm/${id}`,
      data: { form, userId },
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
    getOptions: ({ formId, answer, userId }) => ({
      method: 'post',
      url: `${host}/answers`,
      data: { formId, answer, userId },
    }),
  },
  createUser: {
    triggerActionType: CREATE_USER,
    successAction: gotCreatedUser,
    failureAction: gotFailure,
    getOptions: ({ user }) => ({
      method: 'post',
      url: `${host}/users`,
      data: { user },
    }),
  },
  urerAuth: {
    triggerActionType: USER_AUTH,
    successAction: userAuthed,
    failureAction: userNotExist,
    getOptions: ({ user }) => ({
      method: 'post',
      url: `${host}/auth`,
      data: { user },
    }),
  },
}

export default apiConfig

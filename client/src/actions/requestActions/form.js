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

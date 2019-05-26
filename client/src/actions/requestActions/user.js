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

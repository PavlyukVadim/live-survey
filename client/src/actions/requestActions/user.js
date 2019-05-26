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

export const GOT_CREATED_USER = 'GOT_CREATED_USER'
export const gotCreatedUser = (user) => ({
  type: GOT_CREATED_USER,
  user,
})

export const USER_AUTH = 'USER_AUTH'
export const userAuth = (user) => ({
  type: USER_AUTH,
  user,
})

export const USER_AUTHED = 'USER_AUTHED'
export const userAuthed = (user) => ({
  type: USER_AUTHED,
  user,
})

export const USER_NOT_EXIST = 'USER_NOT_EXIST'
export const userNotExist = () => ({
  type: USER_NOT_EXIST,
})

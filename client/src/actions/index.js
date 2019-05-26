export { simpleAction } from './simpleAction'
export { incrementAction } from './incrementAsync'

export { GET_USER, getUser } from './requestActions'
export { GOT_USER, gotUser } from './requestActions'
export { CREATE_USER, createUser } from './requestActions'
export { GOT_FAILURE, gotFailure } from './requestActions'

export const LOG_OUT = 'LOG_OUT'
export const logOutAction = () => ({
  type: LOG_OUT,
})

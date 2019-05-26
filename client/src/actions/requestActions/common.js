export const GOT_FAILURE = 'GOT_FAILURE'
export const gotFailure = (error) => ({
  type: GOT_FAILURE,
  error,
})

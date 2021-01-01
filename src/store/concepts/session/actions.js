import {
  USER_LOGOUT,
  SUBMIT_USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_CHECK_LOGGED_STATUS
} from './types'

export const loginUser = (
  values,
  setErrors,
  setSubmitting,
  setStatus,
  resetForm,
  setValues,
  payload = {}
) => ({
  type: SUBMIT_USER_LOGIN,
  values,
  form: {
    setErrors,
    setSubmitting,
    setStatus,
    resetForm,
    setValues
  },
  ...payload
})

export const changeLoggedStatus = (isLogged) => ({
  type: USER_LOGIN_SUCCESS,
  isLogged
})

export const checkLoggedStatus = () => ({
  type: USER_CHECK_LOGGED_STATUS
})

export const logoutUser = () => ({
  type: USER_LOGOUT
})

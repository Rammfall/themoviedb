import { FormikFactory } from 'Store/actionFactories/formikFactory'
import {
  USER_LOGOUT,
  USER_LOGIN_SUBMIT,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS
} from './types'

export const loginUser = FormikFactory(USER_LOGIN_SUBMIT)

export const loginUserSuccess = () => ({
  type: USER_LOGIN_SUCCESS
})

export const logoutUser = () => ({
  type: USER_LOGOUT
})

export const logoutUserSuccess = () => ({
  type: USER_LOGOUT_SUCCESS
})

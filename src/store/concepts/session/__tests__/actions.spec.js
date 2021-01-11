import {
  loginUserSuccess,
  loginUser,
  logoutUser,
  logoutUserSuccess
} from '../actions'
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_SUBMIT,
  USER_LOGOUT_SUCCESS
} from '../types'

describe('session actions', () => {
  describe('loginUserSuccess()', () => {
    it('return correct result', () => {
      expect(loginUserSuccess(true)).toStrictEqual({
        type: USER_LOGIN_SUCCESS
      })
    })
  })

  describe('loginUser()', () => {
    const username = 'username'
    const password = 'password'
    const actionResult = loginUser({
      username,
      password
    })

    it('return correct type', () => {
      expect(actionResult.type).toStrictEqual(USER_LOGIN_SUBMIT)
    })

    it('return correct values', () => {
      expect(actionResult.values).toStrictEqual({
        username,
        password
      })
    })
  })

  describe('logoutUser()', () => {
    it('return correct result', () => {
      expect(logoutUser()).toStrictEqual({ type: USER_LOGOUT })
    })
  })

  describe('logoutUserSuccess()', () => {
    it('return correct result', () => {
      expect(logoutUserSuccess()).toStrictEqual({ type: USER_LOGOUT_SUCCESS })
    })
  })
})

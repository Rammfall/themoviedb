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

describe('check session action', () => {
  it('loginUserSuccess()', () => {
    expect(loginUserSuccess(true)).toStrictEqual({
      type: USER_LOGIN_SUCCESS
    })
  })

  it('loginUser()', () => {
    const username = 'username'
    const password = 'password'
    const actionResult = loginUser({
      username,
      password
    })

    expect(actionResult.type).toStrictEqual(USER_LOGIN_SUBMIT)
    expect(actionResult.values).toStrictEqual({
      username,
      password
    })
  })

  it('logoutUser()', () => {
    expect(logoutUser()).toStrictEqual({ type: USER_LOGOUT })
  })

  it('logoutUserSuccess()', () => {
    expect(logoutUserSuccess()).toStrictEqual({ type: USER_LOGOUT_SUCCESS })
  })
})

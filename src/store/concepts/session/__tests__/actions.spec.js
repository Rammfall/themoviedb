import {
  USER_CHECK_LOGGED_STATUS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  SUBMIT_USER_LOGIN
} from '../types'
import {
  checkLoggedStatus,
  changeLoggedStatus,
  loginUser,
  logoutUser
} from '../actions'

describe('check session action', () => {
  it('checkLoggedStatus', () => {
    expect({ type: USER_CHECK_LOGGED_STATUS }).toStrictEqual(
      checkLoggedStatus()
    )
  })

  it('changeLoggedStatus', () => {
    expect({
      type: USER_LOGIN_SUCCESS,
      isLogged: true
    }).toStrictEqual(changeLoggedStatus(true))
  })

  it('loginUser', () => {
    const username = 'username'
    const password = 'password'

    expect({
      type: SUBMIT_USER_LOGIN,
      form: {
        resetForm: undefined,
        setErrors: undefined,
        setStatus: undefined,
        setSubmitting: undefined,
        setValues: undefined
      },
      values: {
        username,
        password
      }
    }).toStrictEqual(
      loginUser({
        username,
        password
      })
    )
  })

  it('logoutUser', () => {
    expect({ type: USER_LOGOUT }).toStrictEqual(logoutUser())
  })
})

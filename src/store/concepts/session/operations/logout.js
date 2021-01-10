import { createLogic } from 'redux-logic'
import Cookies from 'js-cookie'

import { USER_LOGOUT } from 'Store/concepts/session/types'
import { deleteSession } from 'Store/concepts/session/endpoints'
import { logoutUserSuccess } from 'Store/concepts/session/actions'

const logoutUserOperation = createLogic({
  type: USER_LOGOUT,
  async process({ httpClient }, dispatch, done) {
    await httpClient.delete(deleteSession)

    Cookies.remove('session_id')
    dispatch(logoutUserSuccess())

    done()
  }
})

export default logoutUserOperation

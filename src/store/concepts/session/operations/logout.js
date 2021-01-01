import { createLogic } from 'redux-logic'
import Cookies from 'js-cookie'

import { USER_LOGOUT } from 'Store/concepts/session/types'

const logoutUserLogicOperation = createLogic({
  type: USER_LOGOUT,
  async process(_, dispatch, done) {
    Cookies.remove('session_id')

    return done()
  }
})

export default logoutUserLogicOperation

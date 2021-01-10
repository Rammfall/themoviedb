import { createLogic } from 'redux-logic'
import Cookies from 'js-cookie'

import { USER_CHECK_LOGGED_STATUS } from 'Store/concepts/session/types'
import { changeLoggedStatus } from 'Store/concepts/session/actions'

const checkLoggedStatusOperation = createLogic({
  type: USER_CHECK_LOGGED_STATUS,
  latest: true,
  process(_, dispatch, done) {
    const token = Cookies.get('session_id')

    if (token) {
      dispatch(changeLoggedStatus(false))
    }

    done()
  }
})

export default checkLoggedStatusOperation

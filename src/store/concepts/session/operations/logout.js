import { createLogic } from 'redux-logic'

import { USER_LOGOUT } from 'Store/concepts/session/types'
import { logoutUserSuccess } from 'Store/concepts/session/actions'
import { resetStore } from 'Store/actions'
import storage from 'Utils/storage'
import apiRoutes from 'Constants/ApiRoutes'

const logoutUserOperation = createLogic({
  type: USER_LOGOUT,
  async process({ httpClient }, dispatch, done) {
    await httpClient.delete(apiRoutes.session.deleteSessionEndpoint, { params: { session_id: storage.session.get() } })

    storage.session.remove()
    dispatch(logoutUserSuccess())
    dispatch(resetStore())

    done()
  }
})

export default logoutUserOperation

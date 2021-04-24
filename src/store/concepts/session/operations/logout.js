import { createLogic } from 'redux-logic'

import { resetStore } from 'Store/actions'
import storage from 'Utils/storage'
import apiRoutes from 'Constants/apiRoutes'

import { USER_LOGOUT } from '../types'
import { logoutUserSuccess } from '../actions'

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

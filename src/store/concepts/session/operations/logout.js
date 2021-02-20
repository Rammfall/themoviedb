import { createLogic } from 'redux-logic'

import { USER_LOGOUT } from 'Store/concepts/session/types'
import { deleteSession } from 'Store/concepts/session/endpoints'
import { logoutUserSuccess } from 'Store/concepts/session/actions'
import storage from 'Utils/storage'

const logoutUserOperation = createLogic({
  type: USER_LOGOUT,
  async process({ httpClient }, dispatch, done) {
    await httpClient.delete(deleteSession)

    storage.session.remove()
    dispatch(logoutUserSuccess())

    done()
  }
})

export default logoutUserOperation

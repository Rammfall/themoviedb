import { createLogic } from 'redux-logic'

import { USER_LOGIN_SUBMIT } from 'Store/concepts/session/types'
import {
  requestToken,
  newSession,
  validateRequestToken
} from 'Store/concepts/session/endpoints'
import { loginUserSuccess } from 'Store/concepts/session/actions'
import storage from 'Modules/storage'

const loginUserOperation = createLogic({
  type: USER_LOGIN_SUBMIT,
  latest: true,
  async process(
    {
      action: {
        values: { username, password },
        form: { setStatus, setSubmitting }
      },
      httpClient
    },
    dispatch,
    done
  ) {
    setSubmitting(true)

    try {
      /* eslint-disable camelcase */
      const {
        data: { request_token }
      } = await httpClient.get(requestToken)
      await httpClient.post(validateRequestToken, {
        username,
        password,
        request_token
      })
      const {
        data: { session_id }
      } = await httpClient.post(newSession, { request_token })
      /* eslint-enable camelcase */

      storage.session.set(session_id)

      dispatch(loginUserSuccess())
    } catch (e) {
      if (e.status === 401) {
        setStatus('Username or password are incorrect')
      } else {
        setStatus('Server error')
      }
    }
    setSubmitting(false)
    done()
  }
})

export default loginUserOperation

import { createLogic } from 'redux-logic'

import { USER_LOGIN_SUBMIT } from 'Store/concepts/session/types'
import {
  requestTokenEndpoint,
  newSessionEndpoint,
  validateRequestTokenEndpoint
} from 'Store/concepts/session/endpoints'
import { loginUserSuccess } from 'Store/concepts/session/actions'
import storage from 'Utils/storage'

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
      const {
        data: { request_token: requestToken }
      } = await httpClient.get(requestTokenEndpoint)
      await httpClient.post(validateRequestTokenEndpoint, {
        username,
        password,
        request_token: requestToken
      })
      const {
        data: { session_id: sessionId }
      } = await httpClient.post(newSessionEndpoint, {
        request_token: requestToken
      })

      storage.session.set(sessionId)

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

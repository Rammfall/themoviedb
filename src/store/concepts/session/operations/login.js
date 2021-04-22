import { createLogic } from 'redux-logic'

import storage from 'Utils/storage'
import apiRoutes from 'Constants/apiRoutes'

import { USER_LOGIN_SUBMIT } from '../types'
import { loginUserSuccess } from '../actions'

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
      } = await httpClient.get(apiRoutes.session.requestToken)
      await httpClient.post(apiRoutes.session.validateRequestToken, {
        username,
        password,
        request_token: requestToken
      })
      const {
        data: { session_id: sessionId }
      } = await httpClient.post(apiRoutes.session.newSession, {
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

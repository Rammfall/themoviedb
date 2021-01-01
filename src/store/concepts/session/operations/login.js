import { createLogic } from 'redux-logic'
import Cookie from 'js-cookie'

import { SUBMIT_USER_LOGIN } from 'Store/concepts/session/types'
import {
  requestToken,
  newSession,
  validateRequestToken
} from 'Store/concepts/session/endpoints'
import { changeLoggedStatus } from 'Store/concepts/session/actions'

const loginUserLogicOperation = createLogic({
  type: SUBMIT_USER_LOGIN,
  latest: true,
  async process(
    {
      action: {
        values: { username, password }
      },
      httpClient
    },
    dispatch,
    done
  ) {
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

      Cookie.set('session_id', session_id)

      dispatch(changeLoggedStatus(true))
    } catch (e) {
      if (e.status === 401) {
        // eslint-disable-next-line no-console
        return console.log('Username or password are incorrect')
      }

      // eslint-disable-next-line no-console
      return console.log('Server error')
    }
    return done()
  }
})

export default loginUserLogicOperation

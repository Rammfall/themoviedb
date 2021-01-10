import Cookie from 'js-cookie'
import configureStore from 'redux-mock-store'
import { createLogicMiddleware } from 'redux-logic'

import {
  USER_CHECK_LOGGED_STATUS,
  USER_LOGIN_SUCCESS
} from 'Store/concepts/session/types'
import reducer from 'Store/concepts/session/reducer'
import checkLoggedStatus from '../checkLoggedStatus'

jest.mock('js-cookie')

describe('checkLoggedStatus()', () => {
  it('if cookie exist', async () => {
    const initialState = {}
    const logicMiddleware = createLogicMiddleware([checkLoggedStatus])
    const mockStore = configureStore([logicMiddleware])
    Cookie.get = jest.fn(() => '0123456789')

    const store = mockStore(initialState, reducer)

    store.dispatch({ type: USER_CHECK_LOGGED_STATUS })
    await logicMiddleware.whenComplete()

    expect(store.getActions()).toStrictEqual([
      {
        type: USER_CHECK_LOGGED_STATUS
      },
      {
        type: USER_LOGIN_SUCCESS,
        isLogged: false
      }
    ])
  })

  it('without cookies', async () => {
    const initialState = {}
    const logicMiddleware = createLogicMiddleware([checkLoggedStatus])
    const mockStore = configureStore([logicMiddleware])

    Cookie.get.mockReturnValueOnce()

    const store = mockStore(initialState, reducer)

    store.dispatch({ type: USER_CHECK_LOGGED_STATUS })
    await logicMiddleware.whenComplete()

    expect(store.getActions()).toStrictEqual([
      {
        type: USER_CHECK_LOGGED_STATUS
      }
    ])
  })
})

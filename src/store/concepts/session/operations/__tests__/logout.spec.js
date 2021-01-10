import { createLogicMiddleware } from 'redux-logic'
import configureStore from 'redux-mock-store'
import Cookie from 'js-cookie'

import { USER_LOGOUT } from 'Store/concepts/session/types'

import reducer from 'Store/concepts/session/reducer'
import logoutUserLogicOperation from '../logout'

jest.mock('js-cookie')

describe('logoutUserLogicOperation()', () => {
  it('clears cookie', async () => {
    const initialState = {}
    const logicMiddleware = createLogicMiddleware([logoutUserLogicOperation])
    const mockStore = configureStore([logicMiddleware])

    const store = mockStore(initialState, reducer)

    store.dispatch({ type: USER_LOGOUT })
    await logicMiddleware.whenComplete()

    expect(store.getActions()).toStrictEqual([
      {
        type: USER_LOGOUT
      }
    ])
    expect(Cookie.remove).toHaveBeenCalledTimes(1)
  })
})

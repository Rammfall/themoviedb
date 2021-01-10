import Cookie from 'js-cookie'

import { USER_LOGOUT, USER_LOGOUT_SUCCESS } from 'Store/concepts/session/types'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import logoutUserOperation from '../logout'
import mockHttpClient from '../../../../../api/__mocks__/mockHttpClient'

jest.mock('js-cookie')

describe('logoutUserLogicOperation()', () => {
  it('clears cookie, dispatch USER_LOGOUT_SUCCESS', async () => {
    const httpClient = mockHttpClient([
      {
        method: 'delete',
        response: () => new Promise((resolve) => resolve())
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      logoutUserOperation
    ])

    store.dispatch({ type: USER_LOGOUT })
    await logicMiddleware.whenComplete()

    expect(store.getActions()).toStrictEqual([
      {
        type: USER_LOGOUT
      },
      {
        type: USER_LOGOUT_SUCCESS
      }
    ])
    expect(Cookie.remove).toHaveBeenCalledTimes(1)
  })
})

import { USER_LOGOUT, USER_LOGOUT_SUCCESS } from 'Store/concepts/session/types'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storage from 'Utils/storage'
import logoutUserOperation from '../logout'

jest.mock('Utils/storage')

describe('logoutUserLogicOperation()', () => {
  const httpClient = mockHttpClient([
    {
      method: 'delete',
      resolve: true
    }
  ])
  const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
    logoutUserOperation
  ])
  store.dispatch({ type: USER_LOGOUT })

  it('clears cookie', async () => {
    await logicMiddleware.whenComplete()

    expect(storage.session.remove).toHaveBeenCalledTimes(1)
  })

  it('dispatch USER_LOGOUT_SUCCESS', async () => {
    await logicMiddleware.whenComplete()

    expect(store.getActions()).toStrictEqual([
      {
        type: USER_LOGOUT
      },
      {
        type: USER_LOGOUT_SUCCESS
      }
    ])
  })
})

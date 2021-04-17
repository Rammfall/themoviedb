import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import mockHttpClient from 'Api/__mocks__/mockHttpClient'

import { GET_INFO, SET_ID, SET_USERNAME } from '../../types'

import accountOperation from '../account'

describe('accountOperation()', () => {
  describe('with success response', () => {
    const httpClient = mockHttpClient([
      {
        method: 'get',
        resolve: { data: { username: 'test', id: 2 } }
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      accountOperation
    ])
    store.dispatch({ type: GET_INFO })

    it('dispatches GET_INFO and SET_USERNAME', async () => {
      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: GET_INFO
        },
        {
          type: SET_USERNAME,
          username: 'test'
        },
        {
          type: SET_ID,
          id: 2
        }
      ])
    })
  })
})

import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import mockHttpClient from 'Api/__mocks__/mockHttpClient'

import { ACCOUNT_GET_INFO, ACCOUNT_SET_USERNAME } from '../../types'

import accountOperation from '../account'

describe('accountOperation()', () => {
  describe('with success response', () => {
    const httpClient = mockHttpClient([
      {
        method: 'get',
        resolve: { data: { username: 'test' } }
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      accountOperation
    ])
    store.dispatch({ type: ACCOUNT_GET_INFO })

    it('dispatched ACCOUNT_GET_INFO and ACCOUNT_SET_USERNAME', async () => {
      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: ACCOUNT_GET_INFO
        },
        {
          type: ACCOUNT_SET_USERNAME,
          username: 'test'
        }
      ])
    })
  })

  describe('when https error', () => {
    const httpClient = mockHttpClient([
      {
        method: 'get',
        reject: new Error
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      accountOperation
    ])
    store.dispatch({ type: ACCOUNT_GET_INFO })

    it('dispatched only ACCOUNT_GET_INFO', async () => {
      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: ACCOUNT_GET_INFO
        }
      ])
    })
  })
})

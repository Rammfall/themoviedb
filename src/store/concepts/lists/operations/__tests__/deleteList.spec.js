import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'

import deleteListOperation from '../deleteList'
import { DELETE_LIST, LOAD_LISTS } from '../../types'

describe('deleteListOperation', () => {
  describe('with success response', () => {
    const httpClient = mockHttpClient([
      {
        method: 'delete',
        resolve: {}
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      deleteListOperation
    ])

    store.dispatch({
      type: DELETE_LIST,
      id: 4,
      page: 1
    })

    it('handles correct array with actions', async () => {
      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: DELETE_LIST,
          id: 4,
          page: 1
        },
        {
          type: LOAD_LISTS,
          page: 1
        }
      ])
    })
  })
})

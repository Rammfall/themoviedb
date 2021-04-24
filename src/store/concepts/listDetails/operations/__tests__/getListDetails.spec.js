import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST } from 'Store/concepts/data/types'
import apiRoutes from 'Constants/apiRoutes'

import getListDetailsOperation from '../getListDetails'
import { GET_LIST_DETAILS, LOAD_LIST_DETAILS } from '../../types'

describe('getListDetailsOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: { data: {  } }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        getListDetailsOperation
      ])

      store.dispatch({ type: GET_LIST_DETAILS, id: 1 })

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: GET_LIST_DETAILS,
          id: 1
        },
        {
          type: API_REQUEST,
          endpoint: apiRoutes.listDetails.get(1)
        },
        {
          type: LOAD_LIST_DETAILS,
          id: 1
        }
      ])
    })
  })
})

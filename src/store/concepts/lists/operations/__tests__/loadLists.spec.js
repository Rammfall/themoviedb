import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import {
  API_SAVE,
  API_SUCCESS
} from 'Store/concepts/data/types'

import { LISTS } from 'Constants/concepts'
import {
  LOAD_LISTS,
  SAVE_LISTS
} from '../../types'
import listsList from '../__mocks__/listsList'

import loadListsOperation from '../loadLists'

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => 4)
}))

jest.mock('Store/concepts/router/selectors', () => ({
  getCurrentPage: jest.fn(() => 3)
}))

describe('loadListsOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: { data: listsList }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        loadListsOperation
      ])

      store.dispatch({ type: LOAD_LISTS })

      await logicMiddleware.whenComplete()

      const list = new schema.Entity('list')
      const normalizedResponse = normalize(listsList.results, [list])

      expect(store.getActions()).toStrictEqual([
        {
          type: LOAD_LISTS
        },
        {
          type: API_SUCCESS,
          endpoint: LISTS
        },
        {
          type: API_SAVE,
          endpoint: LISTS,
          response: normalizedResponse.entities.list
        },
        {
          type: SAVE_LISTS,
          ids: normalizedResponse.result,
          total: 2
        }
      ])
    })
  })
})

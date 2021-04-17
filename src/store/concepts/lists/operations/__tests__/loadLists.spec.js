import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import {
  API_SAVE,
  API_SUCCESS
} from 'Store/concepts/data/types'

import {
  LOAD_LISTS,
  SAVE_LISTS,
  SAVE_LISTS_TOTAL
} from '../../types'
import { lists } from '../../endpoints'
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
    it('dispatches action', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: { data: { ...listsList } }
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
          endpoint: lists
        },
        {
          type: API_SAVE,
          endpoint: lists,
          response: normalizedResponse.entities.list
        },
        {
          type: SAVE_LISTS,
          ids: normalizedResponse.result
        },
        {
          type: SAVE_LISTS_TOTAL,
          total: 2
        }
      ])
    })
  })

  describe('with empty response', () => {
    it('returns empty object', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: {
            data: {
              results: [],
              total_pages: 0,
              total_results: 0
            }
          }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        loadListsOperation
      ])

      store.dispatch({ type: LOAD_LISTS })

      await logicMiddleware.whenComplete()

      const list = new schema.Entity('list')
      const normalizedResponse = normalize([], [list])

      expect(store.getActions()).toStrictEqual([
        {
          type: LOAD_LISTS
        },
        {
          type: API_SUCCESS,
          endpoint: lists
        },
        {
          type: API_SAVE,
          endpoint: lists,
          response: {}
        },
        {
          type: SAVE_LISTS,
          ids: normalizedResponse.result
        },
        {
          type: SAVE_LISTS_TOTAL,
          total: 0
        }
      ])
    })
  })
})

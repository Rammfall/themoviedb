import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'
import apiRoutes from 'Constants/apiRoutes'
import moviesResponse from 'Store/__mocks__/moviesResponse'
import { LISTS, MOVIES } from 'Constants/concepts'
import normalizeMovies from 'Store/schemas/movies'
import { SAVE_LISTS } from 'Store/concepts/lists/types'
import normalizeLists from 'Store/schemas/lists'

import loadListDetailsOperation from '../loadListDetails'
import { LOAD_LIST_DETAILS, SAVE_LIST_DETAILS } from '../../types'

jest.mock('Store/concepts/router/selectors', () => ({
  getCurrentPage: jest.fn(() => 1)
}))

describe('loadListDetailsOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const data = {
        items: moviesResponse.results,
        item_count: 20000,
        name: 'test',
        created_by: 'rammfall',
        description: 'test',
        favorite_count: 0,
        id: '7092720',
        iso_639_1: 'en',
        poster_path: null
      }
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: {
            data
          }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        loadListDetailsOperation
      ])
      const endpoint = apiRoutes.listDetails.get(1)

      store.dispatch({ type: LOAD_LIST_DETAILS, id: 1 })
      const normalizedMovies = normalizeMovies(moviesResponse.results)
      const normalizedLists = normalizeLists([data])

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: LOAD_LIST_DETAILS,
          id: 1
        },
        {
          type: API_SUCCESS,
          endpoint
        },
        {
          type: API_SAVE,
          endpoint: MOVIES,
          response: normalizedMovies.entities.movie
        },
        {
          type: API_SAVE,
          endpoint: LISTS,
          response: normalizedLists.entities.list
        },
        {
          ids: [
            '7092720'
          ],
          total: 1,
          type: SAVE_LISTS
        },
        {
          ids: [
            524047,
            508442
          ],
          listId: 1,
          total: 20000,
          type: SAVE_LIST_DETAILS
        }
      ])
    })
  })
})

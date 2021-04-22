import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'
import { MOVIES, WATCHLIST } from 'Constants/concepts'
import moviesResponse from 'Store/__mocks__/moviesResponse'

import {
  LOAD_WATCHLIST_MOVIES,
  SAVE_WATCHLIST_MOVIES
} from '../../types'

import loadWatchlistMoviesOperation from '../loadWatchlistMovies'

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => 3)
}))

jest.mock('Store/concepts/router/selectors', () => ({
  getCurrentPage: jest.fn(() => 3)
}))

describe('loadWatchlistMoviesOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: { data: moviesResponse }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        loadWatchlistMoviesOperation
      ])

      store.dispatch({ type: LOAD_WATCHLIST_MOVIES })

      await logicMiddleware.whenComplete()

      const movie = new schema.Entity('movie')
      const normalizedResponse = normalize(moviesResponse.results, [movie])
      expect(store.getActions()).toStrictEqual([
        {
          type: LOAD_WATCHLIST_MOVIES
        },
        {
          type: API_SUCCESS,
          endpoint: WATCHLIST
        },
        {
          type: API_SAVE,
          endpoint: MOVIES,
          response: normalizedResponse.entities.movie
        },
        {
          type: SAVE_WATCHLIST_MOVIES,
          ids: normalizedResponse.result,
          total: 20000
        }
      ])
    })
  })
})

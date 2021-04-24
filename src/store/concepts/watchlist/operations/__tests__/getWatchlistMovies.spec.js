import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST } from 'Store/concepts/data/types'
import { WATCHLIST } from 'Constants/concepts'
import trendingMoviesResponse from 'Store/__mocks__/moviesResponse'

import {
  GET_WATCHLIST_MOVIES,
  LOAD_WATCHLIST_MOVIES
} from '../../types'

import getWatchlistMoviesOperation from '../getWatchlistMovies'

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => 3)
}))

jest.mock('Store/concepts/router/selectors', () => ({
  getCurrentPage: jest.fn(() => 3)
}))

describe('getWatchlistMoviesOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: { data: {  } }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        getWatchlistMoviesOperation
      ])

      store.dispatch({ type: GET_WATCHLIST_MOVIES })

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: GET_WATCHLIST_MOVIES
        },
        {
          type: API_REQUEST,
          endpoint: WATCHLIST
        },
        {
          type: LOAD_WATCHLIST_MOVIES
        }
      ])
    })
  })
})

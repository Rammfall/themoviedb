import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'

import { TOGGLE_WATCHLIST_MOVIE, LOAD_WATCHLIST_MOVIES } from '../../types'

import toggleWatchlistMovieOperation from '../toggleWatchlistMovie'

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => 3)
}))

describe('toggleWatchlistMovieOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'post',
          resolve: { data: {} }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        toggleWatchlistMovieOperation
      ])

      store.dispatch({ type: TOGGLE_WATCHLIST_MOVIE, id: 3, watchlist: false })

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: TOGGLE_WATCHLIST_MOVIE,
          id: 3,
          watchlist: false
        },
        {
          type: LOAD_WATCHLIST_MOVIES
        }
      ])
    })
  })
})

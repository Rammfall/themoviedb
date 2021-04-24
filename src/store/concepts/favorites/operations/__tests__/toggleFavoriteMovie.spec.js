import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'

import { TOGGLE_FAVORITE_MOVIE, LOAD_FAVORITE_MOVIES } from '../../types'

import toggleFavoriteMovieOperation from '../toggleFavoriteMovie'

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => 3)
}))

describe('toggleFavoriteMovieOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'post',
          resolve: { data: {} }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        toggleFavoriteMovieOperation
      ])

      store.dispatch({ type: TOGGLE_FAVORITE_MOVIE, id: 3, watchlist: false })

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: TOGGLE_FAVORITE_MOVIE,
          id: 3,
          watchlist: false
        },
        {
          type: LOAD_FAVORITE_MOVIES
        }
      ])
    })
  })
})

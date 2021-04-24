import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST } from 'Store/concepts/data/types'
import { FAVORITES } from 'Constants/concepts'

import { GET_FAVORITE_MOVIES, LOAD_FAVORITE_MOVIES } from '../../types'

import getFavoritesMoviesOperation from '../getFavoritesMovies'

describe('getFavoritesMoviesOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: { data: {  } }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        getFavoritesMoviesOperation
      ])

      store.dispatch({ type: GET_FAVORITE_MOVIES })

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: GET_FAVORITE_MOVIES
        },
        {
          type: API_REQUEST,
          endpoint: FAVORITES
        },
        {
          type: LOAD_FAVORITE_MOVIES
        }
      ])
    })
  })
})

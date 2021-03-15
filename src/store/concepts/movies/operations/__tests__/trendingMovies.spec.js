import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import getTrendingMoviesOperation from 'Store/concepts/movies/operations/trendingMovies'
import { API_REQUEST, API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'

import { trendingMovies, moviesConstant } from '../../endpoints'
import trendingMoviesResponse from '../__mocks__/trendingMoviesResponse'
import { GET_TRENDING, SAVE_TRENDING_IDS, SAVE_TRENDING_QUANTITY } from '../../types'

describe('trendingMovies()', () => {
  describe('with success response', () => {
    const httpClient = mockHttpClient([
      {
        method: 'get',
        resolve: { data: { ...trendingMoviesResponse } }
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      getTrendingMoviesOperation
    ])

    store.dispatch({ type: GET_TRENDING })

    it('dispatches actions', async () => {
      await logicMiddleware.whenComplete()

      const movies = new schema.Entity('movies')
      const normalizedResponse = normalize(trendingMoviesResponse.results, [movies])
      expect(store.getActions()).toStrictEqual([
        {
          type: GET_TRENDING
        },
        {
          type: API_REQUEST,
          endpoint: trendingMovies
        },
        {
          type: API_SUCCESS,
          endpoint: trendingMovies
        },
        {
          type: API_SAVE,
          endpoint: moviesConstant,
          response: normalizedResponse.entities.movies
        },
        {
          type: SAVE_TRENDING_IDS,
          moviesIds: normalizedResponse.result
        },
        {
          type: SAVE_TRENDING_QUANTITY,
          quantity: 20000
        }
      ])
    })
  })
})

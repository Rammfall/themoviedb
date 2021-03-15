import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST, API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'

import { trendingMovies, moviesConstant } from '../../endpoints'
import moviesResponse from '../__mocks__/moviesResponse'
import { GET_TRENDING, SAVE_TRENDING_IDS, SAVE_TRENDING_QUANTITY } from '../../types'

import getTrendingMoviesOperation from '../trendingMovies'

describe('trendingMovies()', () => {
  describe('with success response', () => {
    const httpClient = mockHttpClient([
      {
        method: 'get',
        resolve: { data: { ...moviesResponse } }
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      getTrendingMoviesOperation
    ])

    store.dispatch({ type: GET_TRENDING })

    it('dispatches actions', async () => {
      await logicMiddleware.whenComplete()

      const movie = new schema.Entity('movie')
      const normalizedResponse = normalize(moviesResponse.results, [movie])
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
          response: normalizedResponse.entities.movie
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

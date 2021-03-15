import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST, API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'

import { moviesConstant, searchMovies } from '../../endpoints'
import trendingMoviesResponse from '../__mocks__/moviesResponse'
import {
  GET_TRENDING,
  SAVE_FOUNDED_IDS,
  SAVE_FOUNDED_QUANTITY,
  SEARCH
} from '../../types'

import searchMoviesOperation from '../searchMovies'

describe('searchMoviesOperation()', () => {
  describe('with success response', () => {
    const httpClient = mockHttpClient([
      {
        method: 'get',
        resolve: { data: { ...trendingMoviesResponse } }
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      searchMoviesOperation
    ])

    store.dispatch({ type: SEARCH })

    it('dispatches actions', async () => {
      await logicMiddleware.whenComplete()

      const movie = new schema.Entity('movie')
      const normalizedResponse = normalize(trendingMoviesResponse.results, [movie])
      expect(store.getActions()).toStrictEqual([
        {
          type: SEARCH
        },
        {
          type: API_REQUEST,
          endpoint: searchMovies
        },
        {
          type: API_SUCCESS,
          endpoint: searchMovies
        },
        {
          type: API_SAVE,
          endpoint: moviesConstant,
          response: normalizedResponse.entities.movies
        },
        {
          type: SAVE_FOUNDED_IDS,
          moviesIds: normalizedResponse.result
        },
        {
          type: SAVE_FOUNDED_QUANTITY,
          quantity: 20000
        }
      ])
    })
  })
})

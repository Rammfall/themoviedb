import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST, API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'

import { moviesConstant, dashboard } from '../../endpoints'
import moviesResponse from '../__mocks__/moviesResponse'
import {
  GET_TRENDING,
  SAVE_DASHBOARD_MOVIES,
  SAVE_DASHBOARD_TOTAL
} from '../../types'

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
          endpoint: dashboard
        },
        {
          type: API_SUCCESS,
          endpoint: dashboard
        },
        {
          type: API_SAVE,
          endpoint: moviesConstant,
          response: normalizedResponse.entities.movie
        },
        {
          type: SAVE_DASHBOARD_MOVIES,
          ids: normalizedResponse.result
        },
        {
          type: SAVE_DASHBOARD_TOTAL,
          total: 20000
        }
      ])
    })
  })
})

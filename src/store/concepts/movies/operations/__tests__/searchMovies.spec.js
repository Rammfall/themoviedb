import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST, API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'

import { moviesConstant, dashboard } from '../../endpoints'
import trendingMoviesResponse from '../__mocks__/moviesResponse'
import {
  SAVE_DASHBOARD_MOVIES,
  SAVE_DASHBOARD_TOTAL,
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

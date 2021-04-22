import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST, API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'
import { DASHBOARD, MOVIES } from 'Constants/concepts'
import moviesResponse from 'Store/__mocks__/moviesResponse'

import {
  GET_TRENDING,
  SAVE_DASHBOARD_MOVIES
} from '../../types'

import getTrendingMoviesOperation from '../trendingMovies'

jest.mock('Store/concepts/router/selectors', () => ({
  getCurrentPage: jest.fn(() => 3)
}))

describe('trendingMovies()', () => {
  describe('with success response', () => {
    const httpClient = mockHttpClient([
      {
        method: 'get',
        resolve: { data: moviesResponse }
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
          endpoint: DASHBOARD
        },
        {
          type: API_SUCCESS,
          endpoint: DASHBOARD
        },
        {
          type: API_SAVE,
          endpoint: MOVIES,
          response: normalizedResponse.entities.movie
        },
        {
          type: SAVE_DASHBOARD_MOVIES,
          ids: normalizedResponse.result,
          total: 20000
        }
      ])
    })
  })
})

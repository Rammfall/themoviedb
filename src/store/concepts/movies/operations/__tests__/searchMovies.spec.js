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

jest.mock('Store/concepts/router/selectors', () => ({
  getCurrentPage: jest.fn(() => 3)
}))

describe('searchMoviesOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
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

    describe('with empty response', () => {
      it('returns empty object', async () => {
        const httpClient = mockHttpClient([
          {
            method: 'get',
            resolve: {
              data: {
                results: [],
                total_pages: 0,
                total_results: 0
              }
            }
          }
        ])
        const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
          searchMoviesOperation
        ])

        store.dispatch({ type: SEARCH })
        await logicMiddleware.whenComplete()

        const movie = new schema.Entity('movie')
        const normalizedResponse = normalize([], [movie])
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
            response: {}
          },
          {
            type: SAVE_DASHBOARD_MOVIES,
            ids: normalizedResponse.result
          },
          {
            type: SAVE_DASHBOARD_TOTAL,
            total: 0
          }
        ])
      })
    })
  })
})

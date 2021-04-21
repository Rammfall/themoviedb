import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST, API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'
import { favoritesConstant, moviesConstant } from 'Constants/concepts'

import trendingMoviesResponse from '../__mocks__/moviesResponse'
import {
  GET_FAVORITES_MOVIES,
  SAVE_FAVORITES_MOVIES
} from '../../types'

import getFavoritesMoviesOperation from '../getFavoritesMovies'

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => 3)
}))

jest.mock('Store/concepts/router/selectors', () => ({
  getCurrentPage: jest.fn(() => 3)
}))

describe('getFavoritesMoviesOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: { data: trendingMoviesResponse }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        getFavoritesMoviesOperation
      ])

      store.dispatch({ type: GET_FAVORITES_MOVIES })

      await logicMiddleware.whenComplete()

      const movie = new schema.Entity('movie')
      const normalizedResponse = normalize(trendingMoviesResponse.results, [movie])
      expect(store.getActions()).toStrictEqual([
        {
          type: GET_FAVORITES_MOVIES
        },
        {
          type: API_REQUEST,
          endpoint: favoritesConstant
        },
        {
          type: API_SUCCESS,
          endpoint: favoritesConstant
        },
        {
          type: API_SAVE,
          endpoint: moviesConstant,
          response: normalizedResponse.entities.movie
        },
        {
          type: SAVE_FAVORITES_MOVIES,
          ids: normalizedResponse.result,
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
          getFavoritesMoviesOperation
        ])

        store.dispatch({ type: GET_FAVORITES_MOVIES })
        await logicMiddleware.whenComplete()

        const movie = new schema.Entity('movie')
        const normalizedResponse = normalize([], [movie])
        expect(store.getActions()).toStrictEqual([
          {
            type: GET_FAVORITES_MOVIES
          },
          {
            type: API_REQUEST,
            endpoint: favoritesConstant
          },
          {
            type: API_SUCCESS,
            endpoint: favoritesConstant
          },
          {
            type: API_SAVE,
            endpoint: moviesConstant,
            response: {}
          },
          {
            type: SAVE_FAVORITES_MOVIES,
            ids: normalizedResponse.result,
            total: 0
          }
        ])
      })
    })

    describe('with withoutLoading', () => {
      it('returns empty object', async () => {
        const httpClient = mockHttpClient([
          {
            method: 'get',
            resolve: { data: { ...trendingMoviesResponse } }
          }
        ])
        const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
          getFavoritesMoviesOperation
        ])

        store.dispatch({ type: GET_FAVORITES_MOVIES, withoutLoading: true })

        await logicMiddleware.whenComplete()

        const movie = new schema.Entity('movie')
        const normalizedResponse = normalize(trendingMoviesResponse.results, [movie])
        expect(store.getActions()).toStrictEqual([
          {
            type: GET_FAVORITES_MOVIES,
            withoutLoading: true
          },
          {
            type: API_SUCCESS,
            endpoint: favoritesConstant
          },
          {
            type: API_SAVE,
            endpoint: moviesConstant,
            response: normalizedResponse.entities.movie
          },
          {
            type: SAVE_FAVORITES_MOVIES,
            ids: normalizedResponse.result,
            total: 20000
          }
        ])
      })
    })
  })
})

import { normalize, schema } from 'normalizr'

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST, API_SAVE, API_SUCCESS } from 'Store/concepts/data/types'
import { listsConstant, moviesConstant } from 'Constants/concepts'
import apiRoutes from 'Constants/ApiRoutes'

import trendingMoviesResponse from '../__mocks__/moviesResponse'
import {
  GET_LIST_MOVIES
} from '../../types'

import getListMoviesOperation from '../getListMovies'

jest.mock('Store/concepts/router/selectors', () => ({
  getCurrentPage: jest.fn(() => 3)
}))

describe('getListMoviesOperation()', () => {
  const httpAnswer = {
    data: {
      items: trendingMoviesResponse.results,
      item_count: 2,
      description: 'test',
      name: 'test'
    }
  }
  const savedSlice = {
    description: 'test',
    name: 'test',
    movies: {
      ids: [524047, 508442],
      total: 2
    }
  }

  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'get',
          resolve: httpAnswer
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        getListMoviesOperation
      ])
      const route = apiRoutes.movies.list.get(3)

      store.dispatch({ type: GET_LIST_MOVIES, id: 3 })

      await logicMiddleware.whenComplete()

      const movie = new schema.Entity('movie')
      const normalizedResponse = normalize(trendingMoviesResponse.results, [movie])
      expect(store.getActions()).toStrictEqual([
        {
          type: GET_LIST_MOVIES,
          id: 3
        },
        {
          type: API_REQUEST,
          endpoint: route
        },
        {
          type: API_SUCCESS,
          endpoint: route
        },
        {
          type: API_SAVE,
          endpoint: moviesConstant,
          response: normalizedResponse.entities.movie
        },
        {
          type: API_SAVE,
          endpoint: listsConstant,
          response: {
            3: savedSlice
          }
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
                items: [],
                item_count: 0,
                description: 'test',
                name: 'test'
              }
            }
          }
        ])
        const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
          getListMoviesOperation
        ])
        const route = apiRoutes.movies.list.get(3)

        store.dispatch({ type: GET_LIST_MOVIES, id: 3 })
        await logicMiddleware.whenComplete()

        const movie = new schema.Entity('movie')
        const normalizedResponse = normalize([], [movie])
        expect(store.getActions()).toStrictEqual([
          {
            type: GET_LIST_MOVIES,
            id: 3
          },
          {
            type: API_REQUEST,
            endpoint: route
          },
          {
            type: API_SUCCESS,
            endpoint: route
          },
          {
            type: API_SAVE,
            endpoint: moviesConstant,
            response: {}
          },
          {
            type: API_SAVE,
            endpoint: listsConstant,
            response: {
              3: {
                ...savedSlice,
                movies: {
                  total: 0,
                  ids: normalizedResponse.result
                }
              }
            }
          }
        ])
      })
    })

    describe('with withoutLoading', () => {
      it('returns empty object', async () => {
        const httpClient = mockHttpClient([
          {
            method: 'get',
            resolve: httpAnswer
          }
        ])
        const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
          getListMoviesOperation
        ])
        const route = apiRoutes.movies.list.get(3)

        store.dispatch({ type: GET_LIST_MOVIES, id: 3, withoutLoading: true })

        await logicMiddleware.whenComplete()

        const movie = new schema.Entity('movie')
        const normalizedResponse = normalize(trendingMoviesResponse.results, [movie])
        expect(store.getActions()).toStrictEqual([
          {
            type: GET_LIST_MOVIES,
            withoutLoading: true,
            id: 3
          },
          {
            type: API_SUCCESS,
            endpoint: route
          },
          {
            type: API_SAVE,
            endpoint: moviesConstant,
            response: normalizedResponse.entities.movie
          },
          {
            type: API_SAVE,
            endpoint: listsConstant,
            response: {
              3: savedSlice
            }
          }
        ])
      })
    })
  })
})

import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'

import { DELETE_LIST_MOVIE, GET_LIST_MOVIES } from '../../types'

import deleteListMovieOperation from '../deleteListMovie'

describe('deleteListMovieOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'post',
          resolve: { data: {} }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        deleteListMovieOperation
      ])

      store.dispatch({ type: DELETE_LIST_MOVIE, id: 3, listId: 2 })

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: DELETE_LIST_MOVIE,
          id: 3,
          listId: 2
        },
        {
          type: GET_LIST_MOVIES,
          withoutLoading: true,
          id: 2
        }
      ])
    })
  })
})

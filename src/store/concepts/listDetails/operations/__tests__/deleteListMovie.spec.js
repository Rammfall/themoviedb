import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'

import deleteListMovieOperation from '../deleteListMovie'
import { DELETE_LIST_MOVIE, LOAD_LIST_DETAILS } from '../../types'

jest.mock('Store/concepts/router/selectors', () => ({
  getCurrentPage: jest.fn(() => 1)
}))

describe('deleteListMovieOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const httpClient = mockHttpClient([
        {
          method: 'post',
          resolve: {}
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        deleteListMovieOperation
      ])

      store.dispatch({ type: DELETE_LIST_MOVIE, id: 1, listId: 1 })

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: DELETE_LIST_MOVIE,
          id: 1,
          listId: 1
        },
        {
          type: LOAD_LIST_DETAILS,
          id: 1
        }
      ])
    })
  })
})

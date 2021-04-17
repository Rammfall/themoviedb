import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'

import {
  ADD_LIST, LOAD_LISTS
} from '../../types'

import addListOperation from '../addList'

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => 4)
}))

describe('getListsOperation()', () => {
  describe('with success response', () => {
    it('dispatches action', async () => {
      const setSubmitting = jest.fn()
      const formMock = {
        form: { setSubmitting }
      }
      const httpClient = mockHttpClient([
        {
          method: 'post',
          resolve: { data: {} }
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        addListOperation
      ])

      store.dispatch({
        type: ADD_LIST,
        values: {
          name: 'test',
          description: 'test'
        },
        ...formMock
      })

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: ADD_LIST,
          values: {
            name: 'test',
            description: 'test'
          },
          ...formMock
        },
        {
          page: 1,
          type: LOAD_LISTS
        }
      ])
    })
  })
})

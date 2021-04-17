import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import {
  API_REQUEST
} from 'Store/concepts/data/types'

import {
  GET_LISTS,
  LOAD_LISTS
} from '../../types'
import { lists } from '../../endpoints'

import getListsOperation from '../getLists'

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => 4)
}))

describe('getListsOperation()', () => {
  describe('with success response', () => {
    it('dispatches actions', async () => {
      const { store, logicMiddleware } = storeWithMiddlewareMock(undefined, [
        getListsOperation
      ])

      store.dispatch({ type: GET_LISTS })

      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: GET_LISTS
        },
        {
          type: API_REQUEST,
          endpoint: lists
        },
        {
          type: LOAD_LISTS
        }
      ])
    })
  })
})

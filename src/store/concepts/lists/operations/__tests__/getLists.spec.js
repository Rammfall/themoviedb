import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import { API_REQUEST } from 'Store/concepts/data/types'
import { LISTS } from 'Constants/concepts'

import {
  GET_LISTS,
  LOAD_LISTS
} from '../../types'

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
          endpoint: LISTS
        },
        {
          type: LOAD_LISTS
        }
      ])
    })
  })
})

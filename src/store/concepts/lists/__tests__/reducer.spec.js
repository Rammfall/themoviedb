import lists from '../reducer'
import { SAVE_LISTS } from '../types'

describe('lists reducers', () => {
  describe('listsIds reducer', () => {
    it('handles SAVE_LISTS', () => {
      expect(lists(undefined, {
        type: SAVE_LISTS,
        ids: [1, 2, 3],
        total: 3
      }))
        .toStrictEqual({
          ids: [
            1, 2, 3
          ],
          total: 3
        })
    })
  })
})

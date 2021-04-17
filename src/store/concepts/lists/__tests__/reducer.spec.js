import lists from '../reducer'
import {
  SAVE_LISTS,
  SAVE_LISTS_TOTAL
} from '../types'

describe('lists reducers', () => {
  describe('listsIds reducer', () => {
    it('handles SAVE_LISTS', () => {
      expect(lists(undefined, {
        type: SAVE_LISTS,
        ids: [1, 2, 3]
      }).listsIds)
        .toStrictEqual([
          1, 2, 3
        ])
    })
  })

  describe('listsTotal reducer', () => {
    it('handles SAVE_LISTS_TOTAL', () => {
      expect(lists(undefined, {
        type: SAVE_LISTS_TOTAL,
        total: 5
      }).listsTotal)
        .toStrictEqual(5)
    })
  })
})

import {
  GET_LISTS,
  SAVE_LISTS,
  SAVE_LISTS_TOTAL
} from '../types'
import {
  getLists,
  saveListsIds,
  saveTotal
} from '../actions'

describe('lists actions', () => {
  describe('getLists()', () => {
    describe('with default page', () => {
      it('returns object with correct shape', () => {
        expect(getLists())
          .toStrictEqual({
            type: GET_LISTS,
            page: 1
          })
      })
    })

    describe('with page', () => {
      it('returns object with correct shape', () => {
        expect(getLists(5))
          .toStrictEqual({
            type: GET_LISTS,
            page: 5
          })
      })
    })
  })

  describe('saveListsIds()', () => {
    it('returns object with correct shape', () => {
      expect(saveListsIds({ ids: [1, 2, 3] }))
        .toStrictEqual({
          type: SAVE_LISTS,
          ids: [1, 2, 3]
        })
    })
  })

  describe('saveTotal()', () => {
    it('returns object with correct shape', () => {
      expect(saveTotal({ total: 5 }))
        .toStrictEqual({
          type: SAVE_LISTS_TOTAL,
          total: 5
        })
    })
  })
})

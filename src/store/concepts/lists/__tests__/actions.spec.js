import {
  GET_LISTS,
  SAVE_LISTS,
  SAVE_LISTS_TOTAL,
  ADD_LIST,
  LOAD_LISTS,
  DELETE_LIST
} from '../types'
import {
  getLists,
  saveListsIds,
  saveTotal,
  addList,
  loadLists,
  deleteList
} from '../actions'

describe('lists actions', () => {
  describe('loadLists()', () => {
    describe('with default page', () => {
      it('returns object with correct shape', () => {
        expect(loadLists())
          .toStrictEqual({
            type: LOAD_LISTS,
            page: 1
          })
      })
    })

    describe('with page', () => {
      it('returns object with correct shape', () => {
        expect(loadLists(5))
          .toStrictEqual({
            type: LOAD_LISTS,
            page: 5
          })
      })
    })
  })

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

  describe('addList()', () => {
    it('returns object with correct shape', () => {
      const actionResult = addList({
        name: 'test',
        description: 'test'
      })

      expect(actionResult.type).toStrictEqual(ADD_LIST)
      expect(actionResult.values).toStrictEqual({
        name: 'test',
        description: 'test'
      })
    })
  })

  describe('deleteList()', () => {
    it('returns object with correct shape', () => {
      expect(deleteList({ id: 5 }))
        .toStrictEqual({
          type: DELETE_LIST,
          id: 5
        })
    })
  })

})

import {
  GET_LISTS,
  SAVE_LISTS,
  ADD_LIST,
  LOAD_LISTS,
  DELETE_LIST
} from '../types'
import {
  getLists,
  addList,
  loadLists,
  saveLists,
  deleteList
} from '../actions'

describe('lists actions', () => {
  describe('loadLists()', () => {
    describe('with default page', () => {
      it('returns object with correct shape', () => {
        expect(loadLists())
          .toStrictEqual({
            type: LOAD_LISTS
          })
      })
    })
  })

  describe('getLists()', () => {
    describe('with default page', () => {
      it('returns object with correct shape', () => {
        expect(getLists())
          .toStrictEqual({
            type: GET_LISTS
          })
      })
    })
  })

  describe('saveLists()', () => {
    it('returns object with correct shape', () => {
      expect(saveLists({ ids: [1, 2, 3], total: 3 }))
        .toStrictEqual({
          type: SAVE_LISTS,
          ids: [1, 2, 3],
          total: 3
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

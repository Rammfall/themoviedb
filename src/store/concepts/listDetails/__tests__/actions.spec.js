import {
  GET_LIST_DETAILS,
  LOAD_LIST_DETAILS,
  DELETE_LIST_MOVIE,
  SAVE_LIST_DETAILS
} from '../types'
import {
  getListDetails,
  loadListDetails,
  saveListDetails,
  deleteListMovie
} from '../actions'

describe('listDetails actions', () => {
  describe('getListDetails()', () => {
    it('returns object with correct shape', () => {
      expect(getListDetails({ id: 1 })).toStrictEqual({
        type: GET_LIST_DETAILS,
        id: 1
      })
    })
  })

  describe('loadListDetails()', () => {
    it('returns object with correct shape', () => {
      expect(loadListDetails({ id: 1 })).toStrictEqual({
        type: LOAD_LIST_DETAILS,
        id: 1
      })
    })
  })

  describe('saveListDetails()', () => {
    it('returns object with correct shape', () => {
      expect(saveListDetails({
        listId: 1,
        ids: [1],
        total: 1
      })).toStrictEqual({
        type: SAVE_LIST_DETAILS,
        listId: 1,
        ids: [1],
        total: 1
      })
    })
  })

  describe('deleteListMovie()', () => {
    it('returns object with correct shape', () => {
      expect(deleteListMovie({ id: 2 })).toStrictEqual({
        type: DELETE_LIST_MOVIE,
        id: 2
      })
    })
  })
})

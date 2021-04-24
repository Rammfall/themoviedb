import listDetails from '../reducer'
import { SAVE_LIST_DETAILS } from '../types'

describe('listDetails reducer', () => {
  it('handles SAVE_LIST_DETAILS', () => {
    expect(listDetails(undefined, {
      type: SAVE_LIST_DETAILS,
      listId: 1,
      ids: [1],
      total: 1
    })).toStrictEqual({
      1: {
        ids: [1],
        total: 1
      }
    })
  })

  it('returns default value', () => {
    expect(listDetails(undefined, {
      type: 'test'
    })).toStrictEqual({})
  })
})

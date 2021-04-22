import { getListsSelector } from '../selectors'

describe('getListsSelector()', () => {
  const state = {
    data: {
      lists: {
        1: {
          name: 'test'
        },
        2: {
          name: 'test'
        }
      }
    },
    lists: {
      ids: [1],
      total: 1
    }
  }
  it('returns object with correct shape', () => {
    expect(getListsSelector(state)).toStrictEqual({
      isEmpty: false,
      total: 1,
      lists: [{ name: 'test' }]
    })
  })
})

import {
  getListsSelector,
  getListsTotalSelector,
  isEmptyListsSelector
} from '../selectors'

describe('lists selectors', () => {
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
      listsIds: [1],
      listsTotal: 2
    }
  }

  describe('getListsSelector()', () => {
    it('returns correct array', () => {
      expect(getListsSelector(state)).toStrictEqual([
        {
          name: 'test'
        }
      ])
    })
  })

  describe('getListsTotalSelector()', () => {
    it('returns correct array', () => {
      expect(getListsTotalSelector(state)).toStrictEqual(2)
    })
  })

  describe('getListsSelector()', () => {
    it('returns false', () => {
      expect(isEmptyListsSelector(state)).toStrictEqual(false)
    })

    it('returns true', () => {
      expect(isEmptyListsSelector({ ...state, lists: { listsIds: [] } })).toStrictEqual(true)
    })
  })
})

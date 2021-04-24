import {
  getListTitleSelector,
  getListDetailsMoviesSelector,
  isBlankSelector
} from '../selectors'

describe('listDetails selectors', () => {
  const store = {
    data: {
      movies: {
        1: {
          name: 'test'
        }
      },
      lists: {
        1: {
          name: 'test'
        }
      }
    },
    listDetails: {
      1: {
        ids: [1],
        total: 1
      }
    }
  }

  describe('getListTitleSelector()', () => {
    it('returns object with correct shape', () => {
      expect(getListTitleSelector(store, 1)).toStrictEqual('test')
    })
  })

  describe('isBlankSelector()', () => {
    it('returns object with correct shape', () => {
      expect(isBlankSelector(store, 2)).toStrictEqual(true)
    })
  })

  describe('getListDetailsMoviesSelector()', () => {
    it('returns object with correct shape', () => {
      expect(getListDetailsMoviesSelector(store, 1)).toStrictEqual({
        isEmpty: false,
        movies: [{ name: 'test' }],
        total: 1
      })
    })
  })
})


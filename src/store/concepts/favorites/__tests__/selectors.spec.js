import { getFavoritesMoviesSelector } from '../selectors'

describe('getFavoritesMoviesSelector()', () => {
  const state = {
    data: {
      movies: {
        1: {
          name: 'test'
        },
        2: {
          name: 'test2'
        }
      }
    },
    favorites: {
      ids: [1],
      total: 1
    }
  }

  it('returns object with correct shape', () => {
    expect(getFavoritesMoviesSelector(state)).toStrictEqual({
      total: 1,
      movies: [{ name: 'test' }],
      isEmpty: false
    })
  })
})

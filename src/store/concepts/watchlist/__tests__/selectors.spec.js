import { getWatchlistMoviesSelector } from '../selectors'

describe('getWatchlistMoviesSelector()', () => {
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
    watchlist: {
      ids: [1],
      total: 1
    }
  }

  it('returns object with correct shape', () => {
    expect(getWatchlistMoviesSelector(state)).toStrictEqual({
      isEmpty: false,
      movies: [{ name: 'test' }],
      total: 1
    })
  })
})

import { getDashboardMoviesSelector } from '../selectors'

describe('getDashboardMoviesSelector()', () => {
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
    dashboard: {
      ids:  [1],
      total: 10
    }
  }

  it('returns object with correct shape', () => {
    expect(getDashboardMoviesSelector(state)).toStrictEqual({
      total: 10,
      isEmpty: false,
      movies: [{ name: 'test' }]
    })
  })
})

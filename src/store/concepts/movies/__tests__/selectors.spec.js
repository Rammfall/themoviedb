import {
  getDashboardMoviesTotalSelector,
  getDashboardMoviesSelector,
  isEmptySelector
} from '../selectors'

describe('movies selectors', () => {
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
    movies: {
      dashboardIds:  [1],
      dashboardTotal: 10
    }
  }

  describe('dashboardMovies', () => {
    describe('getDashboardMoviesSelector()', () => {
      it('returns array movies', () => {
        expect(getDashboardMoviesSelector(state)).toStrictEqual([{ name: 'test' }])
      })
    })

    describe('getDashboardMoviesTotalSelector()', () => {
      it('returns quantity', () => {
        expect(getDashboardMoviesTotalSelector(state)).toStrictEqual(10)
      })
    })

    describe('isEmptySelector()', () => {
      it('returns false', () => {
        const stateForEmpty = {
          movies: {
            dashboardIds: []
          }
        }

        expect(isEmptySelector(stateForEmpty)).toStrictEqual(true)
      })

      it('returns true', () => {
        expect(isEmptySelector(state)).toStrictEqual(false)
      })
    })
  })
})

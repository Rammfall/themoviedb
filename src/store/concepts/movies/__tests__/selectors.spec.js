import {
  getDashboardMoviesTotalSelector,
  getDashboardMoviesSelector,
  isEmptyDashboardSelector,
  getWatchlistMoviesSelector,
  getFavoritesMoviesSelector,
  getListMoviesSelector
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
      },
      lists: {
        1: {
          movies: {
            total: 1,
            ids: [1]
          }
        }
      }
    },
    movies: {
      dashboardIds:  [1],
      dashboardTotal: 10,
      watchlist: {
        ids: [1],
        total: 1
      },
      favorites: {
        ids: [1],
        total: 1
      }
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

        expect(isEmptyDashboardSelector(stateForEmpty)).toStrictEqual(true)
      })

      it('returns true', () => {
        expect(isEmptyDashboardSelector(state)).toStrictEqual(false)
      })
    })
  })

  describe('getWatchlistMoviesSelector()', () => {
    it('returns movies array', () => {
      expect(getWatchlistMoviesSelector(state).movies).toStrictEqual([{
        name: 'test'
      }])
    })

    it('returns total', () => {
      expect(getWatchlistMoviesSelector(state).total).toStrictEqual(1)
    })

    describe('isEmpty field', () => {
      it('returns false', () => {
        expect(getWatchlistMoviesSelector(state).isEmpty).toStrictEqual(false)
      })

      it('returns true', () => {
        const currentState = {
          ...state,
          movies: {
            ...state.movies,
            watchlist: {
              ids: [],
              total: 0
            }
          }
        }

        expect(getWatchlistMoviesSelector(currentState).isEmpty).toStrictEqual(true)
      })
    })
  })

  describe('getFavoritesMoviesSelector()', () => {
    it('returns movies array', () => {
      expect(getFavoritesMoviesSelector(state).movies).toStrictEqual([{
        name: 'test'
      }])
    })

    it('returns total', () => {
      expect(getFavoritesMoviesSelector(state).total).toStrictEqual(1)
    })

    describe('isEmpty field', () => {
      it('returns false', () => {
        expect(getFavoritesMoviesSelector(state).isEmpty).toStrictEqual(false)
      })

      it('returns true', () => {
        const currentState = {
          ...state,
          movies: {
            ...state.movies,
            favorites: {
              ids: [],
              total: 0
            }
          }
        }

        expect(getFavoritesMoviesSelector(currentState).isEmpty).toStrictEqual(true)
      })
    })
  })

  describe('getListMoviesSelector()', () => {
    describe('total', () => {
      it('returns correct value', () => {
        expect(getListMoviesSelector(state, 1).total).toStrictEqual(1)
      })
    })

    describe('movies', () => {
      it('returns correct value', () => {
        expect(getListMoviesSelector(state, 1).movies).toStrictEqual([{
          name: 'test'
        }])
      })
    })

    describe('isEmpty', () => {
      it('returns false', () => {
        expect(getListMoviesSelector(state, 1).isEmpty).toStrictEqual(false)
      })

      it('returns true', () => {
        const anotherStore = {
          ...state,
          data: {
            lists: {
              1: {
                movies: {
                  total: 0,
                  ids: []
                }
              }
            }
          }
        }
        expect(getListMoviesSelector(anotherStore, 1).isEmpty).toStrictEqual(true)
      })
    })
  })
})

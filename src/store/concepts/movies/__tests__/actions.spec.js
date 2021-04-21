import {
  GET_TRENDING,
  SEARCH,
  SAVE_DASHBOARD_MOVIES,
  SAVE_DASHBOARD_TOTAL,
  SAVE_WATCHLIST_MOVIES,
  GET_WATCHLIST_MOVIES,
  TOGGLE_WATCHLIST_MOVIE,
  GET_FAVORITES_MOVIES,
  SAVE_FAVORITES_MOVIES,
  TOGGLE_FAVORITE_MOVIE
} from '../types'
import {
  getTrendingMovies,
  search,
  saveDashboardIds,
  saveDashboardTotal,
  getWatchlistMovies,
  saveWatchlistMovies,
  toggleWatchlistMovie,
  getFavoritesMovies,
  saveFavoritesMovies,
  toggleFavoriteMovie
} from '../actions'

describe('movies actions', () => {
  describe('getTrendingMovies()', () => {
    it('returns object with correct shape', () => {
      expect(getTrendingMovies())
        .toStrictEqual({
          type: GET_TRENDING
        })
    })
  })

  describe('search()', () => {
    it('returns object with correct shape', () => {
      expect(search('test'))
        .toStrictEqual({
          type: SEARCH,
          query: 'test'
        })
    })
  })

  describe('saveDashboardIds()', () => {
    it('returns object with correct shape', () => {
      expect(saveDashboardIds({ ids: [1, 2, 4] }))
        .toStrictEqual({
          type: SAVE_DASHBOARD_MOVIES,
          ids: [1, 2, 4]
        })
    })
  })

  describe('saveDashboardTotal()', () => {
    it('returns object with correct shape', () => {
      expect(saveDashboardTotal({ total: 1000 }))
        .toStrictEqual({
          type: SAVE_DASHBOARD_TOTAL,
          total: 1000
        })
    })
  })

  describe('getWatchlistMovies()', () => {
    it('returns object with correct shape', () => {
      expect(getWatchlistMovies())
        .toStrictEqual({
          type: GET_WATCHLIST_MOVIES,
          withoutLoading: false
        })
    })

    describe('with withoutLoading', () => {
      it('returns object with correct shape', () => {
        expect(getWatchlistMovies(true))
          .toStrictEqual({
            type: GET_WATCHLIST_MOVIES,
            withoutLoading: true
          })
      })
    })
  })

  describe('saveWatchlistMovies()', () => {
    it('returns object with correct shape', () => {
      expect(saveWatchlistMovies({ ids: [0], total: 1000 }))
        .toStrictEqual({
          type: SAVE_WATCHLIST_MOVIES,
          ids: [0],
          total: 1000
        })
    })
  })

  describe('toggleWatchlistMovie()', () => {
    describe('with default arg', () => {
      it('returns correct shape', () => {
        expect(toggleWatchlistMovie({ id: 3 }))
          .toStrictEqual({
            type: TOGGLE_WATCHLIST_MOVIE,
            id: 3,
            watchlist: false
          })
      })
    })

    describe('with custom arg', () => {
      it('returns correct shape', () => {
        expect(toggleWatchlistMovie({ id: 3, watchlist: true }))
          .toStrictEqual({
            type: TOGGLE_WATCHLIST_MOVIE,
            id: 3,
            watchlist: true
          })
      })
    })
  })

  describe('getFavoritesMovies()', () => {
    it('returns object with correct shape', () => {
      expect(getFavoritesMovies())
        .toStrictEqual({
          type: GET_FAVORITES_MOVIES,
          withoutLoading: false
        })
    })

    describe('with withoutLoading', () => {
      it('returns object with correct shape', () => {
        expect(getFavoritesMovies(true))
          .toStrictEqual({
            type: GET_FAVORITES_MOVIES,
            withoutLoading: true
          })
      })
    })
  })

  describe('saveFavoritesMovies()', () => {
    it('returns object with correct shape', () => {
      expect(saveFavoritesMovies({ ids: [0], total: 1000 }))
        .toStrictEqual({
          type: SAVE_FAVORITES_MOVIES,
          ids: [0],
          total: 1000
        })
    })
  })

  describe('toggleFavoriteMovie()', () => {
    describe('with default arg', () => {
      it('returns object with correct shape', () => {
        expect(toggleFavoriteMovie({ id: 3 }))
          .toStrictEqual({
            type: TOGGLE_FAVORITE_MOVIE,
            id: 3,
            favorite: false
          })
      })
    })

    describe('with custom arg', () => {
      it('returns object with correct shape', () => {
        expect(toggleFavoriteMovie({ id: 3, favorite: true }))
          .toStrictEqual({
            type: TOGGLE_FAVORITE_MOVIE,
            id: 3,
            favorite: true
          })
      })
    })
  })
})

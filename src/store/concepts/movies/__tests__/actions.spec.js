import {
  GET_TRENDING,
  SEARCH,
  SAVE_DASHBOARD_MOVIES,
  SAVE_DASHBOARD_TOTAL,
  SAVE_WATCHLIST_MOVIES,
  GET_WATCHLIST_MOVIES,
  TOGGLE_WATCHLIST_MOVIE
} from '../types'
import {
  getTrendingMovies,
  search,
  saveDashboardIds,
  saveDashboardTotal,
  getWatchlistMovies,
  saveWatchlistMovies,
  toggleWatchlistMovie
} from '../actions'

describe('movies actions', () => {
  describe('getTrendingMovies()', () => {
    describe('with default page', () => {
      it('returns correct type and default page', () => {
        expect(getTrendingMovies())
          .toStrictEqual({
            type: GET_TRENDING
          })
      })
    })
  })

  describe('search()', () => {
    describe('with default page', () => {
      it('returns correct type and default page', () => {
        expect(search('test'))
          .toStrictEqual({
            type: SEARCH,
            query: 'test'
          })
      })
    })

    describe('with custom page', () => {
      it('returns correct type and custom page', () => {
        expect(search('test'))
          .toStrictEqual({
            type: SEARCH,
            query: 'test'
          })
      })
    })
  })

  describe('saveDashboardIds()', () => {
    it('returns correct type and ids array', () => {
      expect(saveDashboardIds({ ids: [1, 2, 4] }))
        .toStrictEqual({
          type: SAVE_DASHBOARD_MOVIES,
          ids: [1, 2, 4]
        })
    })
  })

  describe('saveDashboardTotal()', () => {
    it('returns correct type and quantity', () => {
      expect(saveDashboardTotal({ total: 1000 }))
        .toStrictEqual({
          type: SAVE_DASHBOARD_TOTAL,
          total: 1000
        })
    })
  })

  describe('getWatchlistMovies()', () => {
    describe('with default page', () => {
      it('returns correct type and default page', () => {
        expect(getWatchlistMovies())
          .toStrictEqual({
            type: GET_WATCHLIST_MOVIES,
            withoutLoading: false
          })
      })
    })

    describe('with withoutLoading', () => {
      it('returns correct type and custom page', () => {
        expect(getWatchlistMovies(true))
          .toStrictEqual({
            type: GET_WATCHLIST_MOVIES,
            withoutLoading: true
          })
      })
    })
  })

  describe('saveWatchlistMovies()', () => {
    it('returns correct type and quantity', () => {
      expect(saveWatchlistMovies({ ids: [0], total: 1000 }))
        .toStrictEqual({
          type: SAVE_WATCHLIST_MOVIES,
          ids: [0],
          total: 1000
        })
    })
  })

  describe('toggleWatchlistMovie', () => {
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
})

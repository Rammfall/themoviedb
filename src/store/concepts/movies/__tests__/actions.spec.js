import {
  GET_TRENDING,
  SEARCH,
  SAVE_DASHBOARD_MOVIES,
  SAVE_DASHBOARD_TOTAL,
  SAVE_WATCHLIST_MOVIES,
  GET_WATCHLIST_MOVIES
} from '../types'
import {
  getTrendingMovies,
  search,
  saveDashboardIds,
  saveDashboardTotal,
  getWatchlistMovies,
  saveWatchlistMovies
} from '../actions'

describe('movies actions', () => {
  describe('getTrendingMovies()', () => {
    describe('with default page', () => {
      it('returns correct type and default page', () => {
        expect(getTrendingMovies())
          .toStrictEqual({
            type: GET_TRENDING,
            page: 1
          })
      })
    })

    describe('with page', () => {
      it('returns correct type and custom page', () => {
        expect(getTrendingMovies(5))
          .toStrictEqual({
            type: GET_TRENDING,
            page: 5
          })
      })
    })
  })

  describe('search()', () => {
    describe('with default page', () => {
      it('returns correct type and default page', () => {
        expect(search(undefined, 'test'))
          .toStrictEqual({
            type: SEARCH,
            page: 1,
            query: 'test'
          })
      })
    })

    describe('with custom page', () => {
      it('returns correct type and custom page', () => {
        expect(search(5, 'test'))
          .toStrictEqual({
            type: SEARCH,
            page: 5,
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
            page: 1,
            withoutLoading: false
          })
      })
    })

    describe('with page', () => {
      it('returns correct type and custom page', () => {
        expect(getWatchlistMovies(5))
          .toStrictEqual({
            type: GET_WATCHLIST_MOVIES,
            page: 5,
            withoutLoading: false
          })
      })
    })

    describe('with withoutLoading', () => {
      it('returns correct type and custom page', () => {
        expect(getWatchlistMovies(5, true))
          .toStrictEqual({
            type: GET_WATCHLIST_MOVIES,
            page: 5,
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
})

import {
  SAVE_WATCHLIST_MOVIES,
  GET_WATCHLIST_MOVIES,
  TOGGLE_WATCHLIST_MOVIE,
  LOAD_WATCHLIST_MOVIES
} from '../types'
import {
  getWatchlistMovies,
  saveWatchlistMovies,
  toggleWatchlistMovie,
  loadWatchlistMovies
} from '../actions'

describe('watchlist actions', () => {
  describe('getWatchlistMovies()', () => {
    it('returns object with correct shape', () => {
      expect(getWatchlistMovies())
        .toStrictEqual({
          type: GET_WATCHLIST_MOVIES
        })
    })
  })

  describe('loadWatchlistMovies()', () => {
    it('returns object with correct shape', () => {
      expect(loadWatchlistMovies())
        .toStrictEqual({
          type: LOAD_WATCHLIST_MOVIES
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
})

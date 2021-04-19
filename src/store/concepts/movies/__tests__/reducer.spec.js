import movies from '../reducer'
import {
  SAVE_DASHBOARD_TOTAL,
  SAVE_DASHBOARD_MOVIES,
  SAVE_WATCHLIST_MOVIES
} from '../types'

describe('movies reducers', () => {
  describe('dashboardIds reducer', () => {
    it('handles SAVE_DASHBOARD_MOVIES', () => {
      expect(movies(undefined, {
        type: SAVE_DASHBOARD_MOVIES,
        ids: [1, 2, 3]
      }).dashboardIds)
        .toStrictEqual([
          1, 2, 3
        ])
    })
  })

  describe('dashboardTotal reducer', () => {
    it('handles SAVE_DASHBOARD_TOTAL', () => {
      expect(movies(undefined, {
        type: SAVE_DASHBOARD_TOTAL,
        total: 20
      }).dashboardTotal)
        .toStrictEqual(20)
    })
  })

  describe('watchlist reducer', () => {
    it('handles SAVE_WATCHLIST_MOVIES', () => {
      expect(movies(undefined, {
        type: SAVE_WATCHLIST_MOVIES,
        total: 20,
        ids: [1]
      }).watchlist)
        .toStrictEqual({ total: 20, ids: [1] })
    })
  })
})

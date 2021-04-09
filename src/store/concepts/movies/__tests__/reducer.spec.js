import movies from '../reducer'
import {
  SAVE_DASHBOARD_TOTAL,
  SAVE_DASHBOARD_MOVIES
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

  describe('quantity reducer', () => {
    it('handles SAVE_DASHBOARD_TOTAL', () => {
      expect(movies(undefined, {
        type: SAVE_DASHBOARD_TOTAL,
        total: 20
      }).dashboardTotal)
        .toStrictEqual(20)
    })
  })
})

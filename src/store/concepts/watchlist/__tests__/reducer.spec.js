import watchlist from '../reducer'
import { SAVE_WATCHLIST_MOVIES } from '../types'

describe('watchlist reducers', () => {
  it('handles SAVE_DASHBOARD_MOVIES', () => {
    expect(watchlist(undefined, {
      type: SAVE_WATCHLIST_MOVIES,
      ids: [1, 2, 3],
      total: 3
    }))
      .toStrictEqual({
        total: 3,
        ids: [1, 2, 3]
      })
  })

  it('returns default value', () => {
    expect(watchlist(undefined, {
      type: 'test'
    }))
      .toStrictEqual({
        total: 0,
        ids: []
      })
  })
})

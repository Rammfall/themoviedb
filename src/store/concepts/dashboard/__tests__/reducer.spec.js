import dashboard from '../reducer'
import { SAVE_DASHBOARD_MOVIES } from '../types'

describe('dashboard reducer', () => {
  it('handles SAVE_DASHBOARD_MOVIES', () => {
    expect(dashboard(undefined, {
      type: SAVE_DASHBOARD_MOVIES,
      ids: [1, 2, 3],
      total: 3
    }))
      .toStrictEqual({
        ids: [1, 2, 3],
        total: 3
      })
  })

  it('returns default state', () => {
    expect(dashboard(undefined, {
      type: 'test'
    }))
      .toStrictEqual({
        ids: [],
        total: 0
      })
  })
})

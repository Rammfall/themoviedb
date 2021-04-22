import favorites from '../reducer'
import {
  SAVE_FAVORITE_MOVIES
} from '../types'

describe('favorites reducer', () => {
  it('handles SAVE_FAVORITES_MOVIES', () => {
    expect(favorites(undefined, {
      type: SAVE_FAVORITE_MOVIES,
      total: 20,
      ids: [1]
    })).toStrictEqual({ total: 20, ids: [1] })
  })

  it('returns default value', () => {
    expect(favorites(undefined, {
      type: 'test'
    })).toStrictEqual({ total: 0, ids: [] })
  })
})

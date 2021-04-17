import { resetStore } from '../actions'
import { RESET_STORE } from '../types'

describe('root actions', () => {
  describe('resetStore()', () => {
    it('returns correct shape', () => {
      expect(resetStore()).toStrictEqual({
        type: RESET_STORE
      })
    })
  })
})

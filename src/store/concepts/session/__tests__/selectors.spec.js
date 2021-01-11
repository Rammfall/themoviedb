import { isLoggedInSelector } from '../selectors'

describe('session selectors', () => {
  describe('isLoggedInSelector()', () => {
    it('returns actual state', () => {
      expect(isLoggedInSelector({ session: { isLoggedIn: true } })).toBe(true)
    })
  })
})

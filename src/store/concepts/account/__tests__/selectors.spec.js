import { usernameSelector, userIdSelector } from '../selectors'

describe('account selectors', () => {
  describe('usernameSelector()', () => {
    it('returns actual state', () => {
      expect(usernameSelector({ account: { username: 'test' } })).toStrictEqual('test')
    })
  })

  describe('userIdSelector()', () => {
    it('returns actual state', () => {
      expect(userIdSelector({ account: { id: 2 } })).toStrictEqual(2)
    })
  })
})

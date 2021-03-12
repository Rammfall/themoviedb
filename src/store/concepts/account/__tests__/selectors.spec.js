import { usernameSelector } from '../selectors'

describe('account selectors', () => {
  describe('usernameSelector()', () => {
    it('returns actual state', () => {
      expect(usernameSelector({ account: { username: 'test' } })).toStrictEqual('test')
    })
  })
})

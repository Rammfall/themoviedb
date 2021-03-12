import { ACCOUNT_SET_USERNAME } from '../types'
import reducers from '../reducer'

describe('account reducers', () => {
  describe('username reducer', () => {
    it('handles ACCOUNT_SET_USERNAME action', () => {
      expect(reducers(undefined,
        { type: ACCOUNT_SET_USERNAME, username: 'test' }
      ).username).toStrictEqual('test')
    })
  })
})

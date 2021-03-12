import { SET_USERNAME } from '../types'
import reducers from '../reducer'

describe('account reducers', () => {
  describe('username reducer', () => {
    it('handles SET_USERNAME action', () => {
      expect(reducers(undefined,
        { type: SET_USERNAME, username: 'test' }
      ).username).toStrictEqual('test')
    })
  })
})

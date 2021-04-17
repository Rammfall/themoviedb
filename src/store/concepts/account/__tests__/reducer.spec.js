import { SET_USERNAME, SET_ID } from '../types'
import reducers from '../reducer'

describe('account reducers', () => {
  describe('username reducer', () => {
    it('handles SET_USERNAME action', () => {
      expect(reducers(undefined,
        { type: SET_USERNAME, username: 'test' }
      ).username).toStrictEqual('test')
    })
  })

  describe('userId reducer', () => {
    it('handles SET_ID action', () => {
      expect(reducers(undefined,
        { type: SET_ID, id: 1 }
      ).userId).toStrictEqual(1)
    })
  })
})

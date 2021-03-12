import { setUsername, getUsername } from '../actions'
import { ACCOUNT_SET_USERNAME, ACCOUNT_GET_INFO } from '../types'

describe('account actions', () => {
  describe('getUsername()', () => {
    it('returns correct value', () => {
      expect(getUsername()).toStrictEqual({ type: ACCOUNT_GET_INFO })
    })
  })

  describe('setUsername()', () => {
    it('returns correct value', () => {
      expect(setUsername({ username: 'test' }))
        .toStrictEqual({ type: ACCOUNT_SET_USERNAME, username: 'test' })
    })
  })
})

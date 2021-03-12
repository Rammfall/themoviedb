import { setUsername, getUsername } from '../actions'
import { SET_USERNAME, GET_INFO } from '../types'

describe('account actions', () => {
  describe('getUsername()', () => {
    it('returns correct value', () => {
      expect(getUsername()).toStrictEqual({ type: GET_INFO })
    })
  })

  describe('setUsername()', () => {
    it('returns correct value', () => {
      expect(setUsername({ username: 'test' }))
        .toStrictEqual({ type: SET_USERNAME, username: 'test' })
    })
  })
})

import { setUsername, getUsername, setUserId } from '../actions'
import { SET_USERNAME, GET_INFO, SET_ID } from '../types'

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

  describe('setUserId()', () => {
    it('returns correct value', () => {
      expect(setUserId({ id: 1 }))
        .toStrictEqual({ type: SET_ID, id: 1 })
    })
  })
})

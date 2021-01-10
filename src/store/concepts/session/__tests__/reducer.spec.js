import reducers from '../reducer'
import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from '../types'

describe('session reducers', () => {
  describe('isLoggedIn reducer', () => {
    it('handles USER_LOGIN_SUCCESS action', () => {
      expect(reducers(undefined, { type: USER_LOGIN_SUCCESS })).toStrictEqual({
        isLoggedIn: true
      })
    })

    it('handles USER_LOGOUT_SUCCESS action', () => {
      expect(reducers(undefined, { type: USER_LOGOUT_SUCCESS })).toStrictEqual({
        isLoggedIn: false
      })
    })

    it('not handle incorrect action', async () => {
      expect(
        await reducers(undefined, { type: 'NOT_RELEVANT_TYPE' })
      ).toStrictEqual({ isLoggedIn: false })
    })
  })
})

import reducers from '../reducer'
import { USER_LOGIN_SUCCESS } from '../types'

describe('session reducers', () => {
  describe('isLogged reducer', () => {
    it('handles USER_LOGIN_SUCCESS action', () => {
      expect(
        reducers({ isLogged: false }, { type: USER_LOGIN_SUCCESS })
      ).toStrictEqual({ isLogged: true })
    })

    it('not handle incorrect action', () => {
      expect(
        reducers({ isLogged: false }, { type: 'NOT_RELEVANT_TYPE' })
      ).toStrictEqual({ isLogged: false })
    })
  })
})

import reducers from '../reducer'
import { USER_LOGIN_SUCCESS } from '../types'

describe('check session reducers', () => {
  describe('isLogged reducer', () => {
    it('mutate state if type user login success', () => {
      expect(
        reducers({ isLogged: false }, { type: USER_LOGIN_SUCCESS })
      ).toStrictEqual({ isLogged: true })
    })

    it('not mutate state if type not session', () => {
      expect(
        reducers({ isLogged: false }, { type: 'NOT_RELEVANT_TYPE' })
      ).toStrictEqual({ isLogged: false })
    })
  })
})

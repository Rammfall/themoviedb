import Cookie from 'js-cookie'

import session from 'Utils/storage/session'

jest.mock('js-cookie')

describe('session', () => {
  const sessionId = '0123456789'

  describe('get()', () => {
    Cookie.get = jest.fn(() => sessionId)

    it('returns cookie session_id', () => {
      expect(session.get()).toStrictEqual(sessionId)
    })

    it('call Cookie.get()', () => {
      expect(Cookie.get).toHaveBeenCalledTimes(1)
    })
  })

  describe('set()', () => {
    const newId = 'newId'
    Cookie.set = jest.fn(() => newId)

    it('sets cookie session_id', () => {
      expect(session.set(newId)).toStrictEqual(newId)
    })

    it('call Cookie.set()', () => {
      expect(Cookie.set).toHaveBeenCalledTimes(1)
    })
  })

  describe('remove()', () => {
    const newId = 'removeId'
    Cookie.remove = jest.fn(() => newId)

    it('removes cookie session_id', () => {
      expect(session.remove()).toStrictEqual(newId)
    })

    it('call Cookie.remove()', () => {
      expect(Cookie.remove).toHaveBeenCalledTimes(1)
    })
  })
})

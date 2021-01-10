import Cookie from 'js-cookie'

import session from 'Modules/storage/session'

describe('session', () => {
  jest.mock('js-cookie')
  const sessionId = '0123456789'

  it('get', () => {
    Cookie.get = jest.fn(() => sessionId)

    expect(session.get()).toStrictEqual(sessionId)
    expect(Cookie.get).toHaveBeenCalledTimes(1)
  })

  it('set', () => {
    const newId = 'newId'
    Cookie.set = jest.fn(() => newId)

    expect(session.set(newId)).toStrictEqual(newId)
    expect(Cookie.set).toHaveBeenCalledTimes(1)
  })


  it('remove', () => {
    const newId = 'removeId'
    Cookie.remove = jest.fn(() => newId)

    expect(session.remove()).toStrictEqual(newId)
    expect(Cookie.remove).toHaveBeenCalledTimes(1)
  })
})

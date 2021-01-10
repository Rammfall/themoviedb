import { isLoggedSelector } from '../selectors'

describe('session selectors', () => {
  it('isLoggedSelector()', () => {
    expect(isLoggedSelector({ session: { isLogged: true } })).toBeTruthy()
  })
})

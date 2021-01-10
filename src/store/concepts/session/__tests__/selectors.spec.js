import { isLoggedInSelector } from '../selectors'

describe('session selectors', () => {
  it('isLoggedInSelector()', () => {
    expect(isLoggedInSelector({ session: { isLoggedIn: true } })).toBeTruthy()
  })
})

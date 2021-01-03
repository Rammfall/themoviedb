import { isLoggedSelector } from '../selectors'

describe('check selectors functional', () => {
  it('isLoggedSelector', () => {
    expect(isLoggedSelector({ session: { isLogged: true } })).toStrictEqual(
      true
    )
  })
})

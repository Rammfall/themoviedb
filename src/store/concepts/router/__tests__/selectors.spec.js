import { getCurrentPage } from '../selectors'

describe('router selectors', () => {
  describe('getCurrentPage()', () => {
    const state = {
      router: {
        currentPage: 3
      }
    }

    it('returns correct value', () => {
      expect(getCurrentPage(state)).toStrictEqual(3)
    })
  })
})

import { loadingSelector } from '../selectors'

describe('data selectors', () => {
  const state = {
    data: {
      endpoint: {
        isLoading: true
      }
    }
  }

  describe('loadingSelector()', () => {
    it('returns correct value', () => {
      expect(loadingSelector(state, 'endpoint')).toStrictEqual(true)
    })
  })
})

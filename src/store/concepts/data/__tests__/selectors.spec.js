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
    it('return actual part of state', () => {
      expect(loadingSelector(state, 'endpoint')).toStrictEqual(true)
    })
  })
})

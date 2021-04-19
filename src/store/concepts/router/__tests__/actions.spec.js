import { PUSH_PAGE } from '../types'
import { pushPage } from '../actions'

describe('router actions', () => {
  describe('pushPage()', () => {
    it('returns correct shape', () => {
      expect(pushPage(2)).toStrictEqual({
        type: PUSH_PAGE,
        page: 2
      })
    })
  })
})

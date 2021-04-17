import reducer from '../reducer'
import { PUSH_PAGE } from '../types'

describe('router reducer', () => {
  describe('currentPage', () => {
    it('returns correct value', () => {
      expect(reducer(undefined, { type: PUSH_PAGE, page: 3 }).currentPage).toStrictEqual(3)
    })
  })
})

import getSearchParams from '../getSearchParams'

describe('url', () => {
  describe('getSearchParams()', () => {
    it('returns keys and values', () => {
      expect(getSearchParams('?page=2').get('page')).toStrictEqual('2')
    })
  })
})

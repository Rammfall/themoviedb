import queryParams from '../queryParams'

describe('getParam()', () => {
  const queryString = '?search=test&page=4'

  describe('.get()', () => {
    it('returns correct value', () => {
      expect(queryParams(queryString).get('page')).toStrictEqual('4')
    })

    it('returns null', () => {
      expect(queryParams(queryString).get('undefined')).toStrictEqual(null)
    })
  })

  describe('.set()', () => {
    it('set existed value', () => {
      const query = queryParams(queryString)

      query.set('page', 6)
      expect(query.toString()).toStrictEqual('search=test&page=6')
    })

    it('set new value', () => {
      const query = queryParams(queryString)

      query.set('test', 6)
      expect(query.toString()).toStrictEqual('search=test&page=4&test=6')
    })
  })
})

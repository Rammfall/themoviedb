import changePage from '../changePage'

describe('changePage()', () => {
  const history = {
    push: jest.fn(),
    location: {
      search: '?page=3',
      pathname: '/test'
    }
  }
  const handler = jest.fn

  it('returns function', () => {
    expect(typeof changePage(history, handler)).toStrictEqual('function')
  })

  describe('changePage()()', () => {
    it('handles history.push', () => {
      changePage(history, handler)(2)

      expect(history.push).toBeCalledTimes(1)
    })
  })
})

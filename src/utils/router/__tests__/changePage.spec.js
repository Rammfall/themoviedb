import changePage from '../changePage'

describe('changePage()', () => {
  const history = {
    push: jest.fn()
  }
  const handler = jest.fn()

  it('returns function', () => {
    expect(typeof changePage(history, handler)).toStrictEqual('function')
  })

  describe('changePage()()', () => {
    changePage(history, handler)(2)

    it('handles history.push', () => {
      expect(history.push).toBeCalledTimes(1)
    })

    it('handles handler', () => {
      expect(handler).toBeCalledTimes(1)
    })
  })
})

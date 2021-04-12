import pushParam from '../pushParam'

describe('pushParam', () => {
  const history = {
    push: jest.fn(),
    location: {
      pathname: '/',
      search: '?page=3'
    }
  }

  describe('with existed key', () => {
    it('was called with correct args', () => {
      pushParam(history, ['page', 4])

      expect(history.push).toBeCalledWith({ pathname: '/', search: '?page=4' })
    })
  })

  describe('with new key', () => {
    it('was called with correct args', () => {
      pushParam(history, ['test', 4])

      expect(history.push).toBeCalledWith({ pathname: '/', search: '?page=3&test=4' })
    })
  })
})

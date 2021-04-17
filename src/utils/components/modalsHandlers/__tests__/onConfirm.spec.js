import onConfirm from '../onConfirm'

describe('onConfirm()', () => {
  it('returns function', () => {
    expect(typeof onConfirm(3, () => null)).toStrictEqual('function')
  })

  it('callback calls with id', () => {
    const callback = jest.fn()
    onConfirm(3, callback)()

    expect(callback).toBeCalledWith({ id: 3 })
  })
})

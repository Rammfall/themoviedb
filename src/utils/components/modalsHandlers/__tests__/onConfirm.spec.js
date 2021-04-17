import onConfirm from '../onConfirm'

describe('onConfirm()', () => {
  it('returns function', () => {
    expect(typeof onConfirm(3, () => null)).toStrictEqual('function')
  })

  it('calls callback with correct id', () => {
    const callback = jest.fn()
    onConfirm(3, callback)()

    expect(callback).toBeCalledWith({ id: 3 })
  })
})

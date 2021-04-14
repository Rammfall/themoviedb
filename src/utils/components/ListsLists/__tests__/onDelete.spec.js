import onDeleteHandler from '../onDelete'

describe('onDeleteHandler()', () => {
  const callback = jest.fn()
  onDeleteHandler(callback, 3)()

  it('calls with correct param', () => {
    expect(callback).toBeCalledWith(3)
  })
})

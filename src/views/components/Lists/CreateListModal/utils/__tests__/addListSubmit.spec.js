import addListSubmit from '../addListSubmit'

jest.mock('Utils/router/queryParams', () => jest.fn(() => ({
  get: jest.fn(() => 2)
})))

describe('addListSubmit()', () => {
  const onSubmit = jest.fn()
  const toggleHandler = jest.fn()
  const resetForm = jest.fn()
  const location = { search: '?page=3' }

  it('calls all functions', async () => {
    await addListSubmit(
      {
        test: 'test'
      },
      { props: { onSubmit, location, toggleHandler }, resetForm }
    )

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(resetForm).toHaveBeenCalledTimes(1)
    expect(toggleHandler).toHaveBeenCalledTimes(1)
  })
})

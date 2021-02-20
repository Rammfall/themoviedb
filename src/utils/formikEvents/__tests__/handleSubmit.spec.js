import handleSubmit from 'Utils/formikEvents/handleSubmit'

describe('handleSubmit()', () => {
  it('runs onSubmit with all formik data', () => {
    const onSubmit = jest.fn()

    handleSubmit(
      {
        test: 'test'
      },
      { props: { onSubmit } }
    )

    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})

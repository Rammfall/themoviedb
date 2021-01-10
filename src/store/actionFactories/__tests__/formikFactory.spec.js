import { FormikFactory } from 'Store/actionFactories/formikFactory'

describe('FormikFactory', () => {
  const formikData = {
    type: 'SOME_TYPE',
    form: {
      setErrors: jest.fn(),
      setSubmitting: jest.fn(),
      setStatus: jest.fn(),
      resetForm: jest.fn(),
      setValues: jest.fn()
    },
    values: {
      test: 'data'
    }
  }
  const {
    type,
    values,
    form: { setErrors, setStatus, resetForm, setSubmitting, setValues }
  } = formikData

  const action = FormikFactory(type)(
    values,
    setErrors,
    setSubmitting,
    setStatus,
    resetForm,
    setValues
  )

  it('works correct', () => {
    expect(action).toStrictEqual(formikData)
  })
})

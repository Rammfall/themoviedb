import { makeSubmitAction } from 'Store/actionFactories/makeSubmitAction'

describe('makeSubmitAction()()', () => {
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

  const action = makeSubmitAction(type)(
    values,
    setErrors,
    setSubmitting,
    setStatus,
    resetForm,
    setValues
  )

  it('returns correct value', () => {
    expect(action).toStrictEqual(formikData)
  })
})

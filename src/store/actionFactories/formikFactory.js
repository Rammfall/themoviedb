export const FormikFactory = (type) => (
  values,
  setErrors,
  setSubmitting,
  setStatus,
  resetForm,
  setValues,
  payload = {}
) => ({
  type,
  values,
  form: {
    setErrors,
    setSubmitting,
    setStatus,
    resetForm,
    setValues
  },
  ...payload
})

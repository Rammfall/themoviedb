/**
 * @param {string} type - type of action
 * @returns {function(*, *, *, *, *, *, *=):
 * {form: {setSubmitting: Function,
 * setValues: Function,
 * resetForm: Function,
 * setErrors: Function,
 * setStatus: Function}, values: *, type: string}}
 */
export const makeSubmitAction = (type) => (
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

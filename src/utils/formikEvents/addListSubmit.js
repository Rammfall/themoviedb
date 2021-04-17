import queryParams from 'Utils/router/queryParams'

/**
 * @param {Object} values - shape with form elements
 * @param {{props: { onSubmit: Function, toggleHandler: Function, location: { search: string } }}} rest
 * @returns {Promise<void>}
 */
const addListSubmit = async (
  values,
  { props: { onSubmit, toggleHandler, location: { search } }, setErrors, setSubmitting, setStatus, resetForm, setValues }
) => {
  const page = queryParams(search).get('page')
  await onSubmit(
    values,
    setErrors,
    setSubmitting,
    setStatus,
    resetForm,
    setValues,
    page
  )

  await resetForm()
  toggleHandler()
}

export default addListSubmit

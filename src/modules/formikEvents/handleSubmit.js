const handleSubmit = (
  values,
  { props, setErrors, setSubmitting, setStatus, resetForm, setValues }
) => {
  props.onSubmit(
    values,
    setErrors,
    setSubmitting,
    setStatus,
    resetForm,
    setValues
  )
}

export default handleSubmit

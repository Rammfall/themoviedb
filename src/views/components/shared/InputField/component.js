import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Input from '../Input'

const InputField = ({
  field: { name, onChange, onBlur, value },
  form: { touched, errors }
}) => {
  const fieldTouched = getIn(touched, name)
  const fieldErrors = getIn(errors, name)

  return (
    <Input
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      validationMessage={fieldErrors}
      validateStatus={fieldTouched && fieldErrors && 'error'}
    />
  )
}

InputField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.string
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape(),
    errors: PropTypes.shape()
  }).isRequired
}

export default InputField

import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Input from '../Input'

import {
  propTypes as inputPropTypes,
  defaultProps as inputDefaultProps
} from '../Input/types'

const InputField = ({
  field: { name, onChange, onBlur, value },
  form: { touched, errors },
  placeholder,
  type,
  prefix
}) => {
  const fieldTouched = getIn(touched, name)
  const fieldErrors = getIn(errors, name)

  return (
    <Input
      placeholder={placeholder}
      validateStatus={fieldTouched && fieldErrors && 'error'}
      validationMessage={fieldErrors}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      prefix={prefix}
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
  }).isRequired,
  placeholder: inputPropTypes.placeholder,
  type: inputPropTypes.type,
  prefix: inputPropTypes.prefix
}

InputField.defaultProps = {
  placeholder: inputDefaultProps.placeholder,
  type: inputDefaultProps.type,
  prefix: inputDefaultProps.prefix
}

export default InputField

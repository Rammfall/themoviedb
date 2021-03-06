import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Input from '../Input'

import {
  propTypes as inputPropTypes,
  defaultProps as inputDefaultProps
} from '../Input/types'

class InputField extends Component {
  get fieldTouched() {
    const {
      field: { name },
      form: { touched }
    } = this.props

    return getIn(touched, name)
  }

  get fieldErrors() {
    const {
      field: { name },
      form: { errors }
    } = this.props

    return getIn(errors, name)
  }

  get validateStatus() {
    return this.fieldTouched && this.fieldErrors && 'error'
  }

  render() {
    const {
      field: { name, onChange, onBlur, value },
      placeholder,
      type,
      prefix
    } = this.props
    return (
      <Input
        placeholder={placeholder}
        validateStatus={this.validateStatus}
        validationMessage={this.fieldErrors}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        prefix={prefix}
      />
    )
  }
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

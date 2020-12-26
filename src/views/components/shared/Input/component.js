import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input as AntInput } from 'antd'

const Input = ({
  placeholder,
  validateStatus,
  validationMessage,
  type,
  value,
  onChange,
  onBlur,
  name,
  prefix
}) => (
  <Form.Item
    validateStatus={validateStatus}
    help={validationMessage}
  >
    <AntInput
      placeholder={placeholder}
      type={type}
      onBlur={onBlur}
      prefix={prefix}
      onChange={onChange}
      name={name}
      value={value}
    />
  </Form.Item>
)

Input.propTypes = {
  placeholder: PropTypes.string,
  validateStatus: PropTypes.oneOf([
    'success',
    'warning',
    'error',
    'validating',
    ''
  ]),
  validationMessage: PropTypes.string,
  type: PropTypes.oneOf(['password', 'text']),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string,
  prefix: PropTypes.node
}

Input.defaultProps = {
  placeholder: undefined,
  validateStatus: undefined,
  validationMessage: undefined,
  type: 'text',
  value: '',
  name: '',
  prefix: undefined
}

export default Input

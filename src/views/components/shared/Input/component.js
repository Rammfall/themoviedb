import React from 'react'
import { Form, Input as AntInput } from 'antd'

import { propTypes, defaultProps } from './types'

const Input = ({
  placeholder,
  validateStatus,
  validationMessage,
  type,
  value,
  onChange,
  onBlur,
  name,
  prefix,
  iconRender
}) => {
  const isPassword = type === 'password'
  const CustomInput = isPassword ? AntInput.Password : AntInput

  return (
    <Form.Item
      validateStatus={validateStatus}
      help={validationMessage}
    >
      <CustomInput
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
        prefix={prefix}
        onChange={onChange}
        name={name}
        value={value}
        iconRender={iconRender}
      />
    </Form.Item>
  )
}

Input.propTypes = {
  ...propTypes
}

Input.defaultProps = {
  ...defaultProps
}

export default Input

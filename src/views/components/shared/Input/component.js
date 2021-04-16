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
  iconRender,
  enterButton,
  size,
  className,
  onSearch,
  loading
}) => {
  let CustomInput
  if (type === 'password') {
    CustomInput = AntInput.Password
  } else if (type === 'search') {
    CustomInput = AntInput.Search
  } else {
    CustomInput = AntInput
  }

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
        onSearch={onSearch}
        iconRender={iconRender}
        enterButton={enterButton}
        size={size}
        className={className}
        loading={loading}
      />
    </Form.Item>
  )
}

Input.propTypes = propTypes

Input.defaultProps = defaultProps

export default Input

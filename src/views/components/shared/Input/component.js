import React from 'react'
import { Form, Input as AntInput } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'

import { propTypes, defaultProps } from './types'

export const iconRender = (visible) =>
  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />

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

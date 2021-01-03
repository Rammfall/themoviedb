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
}) => (
  <Form.Item
    validateStatus={validateStatus}
    help={validationMessage}
  >
    {type === 'password' ? (
      <AntInput.Password
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
        prefix={prefix}
        onChange={onChange}
        name={name}
        value={value}
        iconRender={iconRender}
      />
    ) : (
      <AntInput
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
        prefix={prefix}
        onChange={onChange}
        name={name}
        value={value}
      />
    )}
  </Form.Item>
)

Input.propTypes = {
  ...propTypes
}

Input.defaultProps = {
  ...defaultProps
}

export default Input

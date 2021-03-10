import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const PasswordIcon = (visible) =>
  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />

export default PasswordIcon

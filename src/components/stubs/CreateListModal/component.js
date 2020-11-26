import React from 'react'
import { Form, Input } from 'antd'

const CreateListModal = () => (
  <Form>
    <Form.Item
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="Name" />
    </Form.Item>
    <Form.Item>
      <Input placeholder="Description" />
    </Form.Item>
  </Form>
)

export default CreateListModal

import React from 'react'
import {
  Button, Col, Form, Input, Layout, Row, Typography
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login = () => (
  <div className="center">
    <Layout>
      <Layout.Content>
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            <Form>
              <Typography.Title>The Movie DB</Typography.Title>
              <Form.Item
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
              >
                <Input
                  prefix={(
                    <UserOutlined
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={(
                    <LockOutlined
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  loading
                  type="primary"
                  htmlType="submit"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  </div>
)

export default Login

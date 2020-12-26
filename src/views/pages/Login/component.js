import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, Col, Layout, Row, Typography, Form as AntForm } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Field } from 'formik'

import InputField from '../../components/shared/InputField'

const LoginScreen = () => (
  <div className="center">
    <Layout>
      <Layout.Content>
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            <Form>
              <Typography.Title>
                <FormattedMessage id="application.theMovieDB" />
              </Typography.Title>
              <Field
                name="username"
                component={InputField}
                placeholder="Username"
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              <Field
                name="password"
                component={InputField}
                placeholder="Password"
                type="password"
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              <AntForm.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  Log in
                </Button>
              </AntForm.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  </div>
)

export default LoginScreen

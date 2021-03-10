import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Button, Typography, Form as AntForm } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Field } from 'formik'

import InputField from 'Views/components/shared/InputField'
import GuestLayout from 'Views/layouts/GuestLayout'
import PasswordIcon from 'Views/components/shared/PasswordIcon'

import { defaultProps, propTypes } from './types'

const LoginFormComponent = ({ isSubmitting, status }) => {
  const { formatMessage } = useIntl()

  return (
    <GuestLayout>
      <Form>
        <Typography.Title>
          <FormattedMessage id="application.theMovieDB" />
        </Typography.Title>
        <Field
          name="username"
          component={InputField}
          placeholder={formatMessage({
            id: 'page.login.form.username'
          })}
          prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Field
          name="password"
          component={InputField}
          placeholder={formatMessage({
            id: 'page.login.form.password'
          })}
          iconRender={PasswordIcon}
          type="password"
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <AntForm.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
          >
            {formatMessage({ id: 'page.login.form.login' })}
          </Button>
        </AntForm.Item>
        <p>{status}</p>
      </Form>
    </GuestLayout>
  )
}

LoginFormComponent.propTypes = propTypes

LoginFormComponent.defaultProps = defaultProps

export default LoginFormComponent

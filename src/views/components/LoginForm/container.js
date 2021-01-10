import React, { Component } from 'react'
import { withFormik } from 'formik'
import * as yup from 'yup'

import LoginFormComponent from './component'
import { defaultProps, propTypes } from './types'

export const handleSubmit = (
  values,
  { props, setErrors, setSubmitting, setStatus, resetForm, setValues }
) => {
  props.onSubmit(
    values,
    setErrors,
    setSubmitting,
    setStatus,
    resetForm,
    setValues
  )
}

// eslint-disable-next-line react/prefer-stateless-function
class LoginForm extends Component {
  render() {
    const { isSubmitting, status } = this.props

    return (
      <LoginFormComponent
        status={status}
        isSubmitting={isSubmitting}
      />
)
  }
}

LoginForm.propTypes = {
  ...propTypes
}

LoginForm.defaultProps = {
  ...defaultProps
}

export default withFormik({
  validationSchema: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(4).required()
  }),
  mapPropsToValues: () => ({
    username: '',
    password: ''
  }),
  handleSubmit
})(LoginForm)

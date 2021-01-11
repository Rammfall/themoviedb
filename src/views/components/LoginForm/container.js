import React from 'react'
import { withFormik } from 'formik'
import * as yup from 'yup'

import handleSubmit from 'Modules/formikEvents/handleSubmit'
import LoginFormComponent from './component'
import { defaultProps, propTypes } from './types'

const LoginForm = ({ isSubmitting, status }) => (
  <LoginFormComponent
    status={status}
    isSubmitting={isSubmitting}
  />
)

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

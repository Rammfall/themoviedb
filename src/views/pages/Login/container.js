import React, { Component } from 'react'
import { withFormik } from 'formik'
import * as yup from 'yup'

import Login from './component'

// eslint-disable-next-line react/prefer-stateless-function
class LoginContainer extends Component {
  render() {
    return <Login />
  }
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
  // eslint-disable-next-line no-console
  handleSubmit: () => console.log('submit')
})(LoginContainer)

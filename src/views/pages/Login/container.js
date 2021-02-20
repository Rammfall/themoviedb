import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loginUser } from 'Store/concepts/session/actions'

import LoginForm from 'Views/components/LoginForm'

const LoginPage = ({ onSubmit }) => <LoginForm onSubmit={onSubmit} />

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  onSubmit: loginUser
}

export default connect(undefined, mapDispatchToProps)(LoginPage)

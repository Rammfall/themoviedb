import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loginUser } from 'Store/concepts/session/actions'

import LoginForm from 'Views/components/LoginForm'

const LoginContainer = ({ onSubmit }) => <LoginForm onSubmit={onSubmit} />

LoginContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  onSubmit: loginUser
}

export default connect(undefined, mapDispatchToProps)(LoginContainer)

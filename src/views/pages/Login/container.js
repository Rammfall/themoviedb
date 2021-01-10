import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loginUser } from 'Store/concepts/session/actions'

import LoginForm from 'Views/components/LoginForm'
import { isLoggedInSelector } from 'Store/concepts/session/selectors'
import { Redirect } from 'react-router-dom'

const LoginContainer = ({ onSubmit, isLoggedIn }) => {
  if(isLoggedIn) return <Redirect to="/" />

  return <LoginForm onSubmit={onSubmit} />
}

LoginContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedInSelector(state)
})

const mapDispatchToProps = {
  onSubmit: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

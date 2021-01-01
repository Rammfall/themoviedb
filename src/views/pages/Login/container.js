import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loginUser } from 'Store/concepts/session/actions'

import LoginForm from '../../components/LoginForm'

// eslint-disable-next-line react/prefer-stateless-function
class LoginContainer extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    const { onSubmit } = this.props

    return <LoginForm onSubmit={onSubmit} />
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  onSubmit: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { usernameSelector } from 'Store/concepts/account/selectors'

import { getUsername as getUsernameAction } from 'Store/concepts/account/actions'
import HeaderComponent from './component'

class Header extends Component {
  componentDidMount() {
    const { getUsername } = this.props

    getUsername()
  }

  render() {
    const { username } = this.props

    return (
      <HeaderComponent username={username} />
    )
  }
}

const mapStateToProps = (state) => ({
  username: usernameSelector(state)
})

const mapDispatchToProps = {
  getUsername: getUsernameAction
}

Header.propTypes = {
  username: PropTypes.string,
  getUsername: PropTypes.func.isRequired
}

Header.defaultProps = {
  username: null
}

export { HeaderComponent }
export default connect(mapStateToProps, mapDispatchToProps)(Header)

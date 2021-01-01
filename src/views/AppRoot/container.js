import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { isLoggedSelector } from 'Store/concepts/session/selectors'

import { checkLoggedStatus } from 'Store/concepts/session/actions'
import AppRootComponent from './component'

class AppRoot extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    isLogged: PropTypes.bool.isRequired,
    checkLogged: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { checkLogged } = this.props

    checkLogged()
  }

  render() {
    const { isLogged } = this.props
    return <AppRootComponent isLogged={isLogged} />
  }
}

const mapStateToProps = (state) => ({
  isLogged: isLoggedSelector(state)
})

const mapDispatchToProps = {
  checkLogged: checkLoggedStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot)

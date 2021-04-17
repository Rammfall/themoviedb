import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'ramda'

import queryParams from 'Utils/router/queryParams'
import { pushPage } from 'Store/concepts/router/actions'

import AppRootComponent from './component'

class AppRoot extends Component {
  componentDidMount() {
    this.updatePage()
  }

  componentDidUpdate(prevProps) {
    const { location: { search } } = this.props

    if (search !== prevProps.location.search) {
      this.updatePage()
    }
  }

  updatePage = () => {
    const { location: { search }, setCurrentPage } = this.props
    const currentPage = queryParams(search).get('page') || 1
    setCurrentPage(currentPage)
  }

  render() {
    return (
      <AppRootComponent />
    )
  }
}

AppRoot.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  setCurrentPage: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  setCurrentPage: pushPage
}

export { AppRoot as AppRootContainer }
export default compose(
  withRouter,
  connect(undefined, mapDispatchToProps)
)(AppRoot)



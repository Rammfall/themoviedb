import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import changePage from 'Utils/router/changePage'
import queryParams from 'Utils/router/queryParams'
import { getDashboardMoviesTotalSelector } from 'Store/concepts/movies/selectors'

import PaginationComponent from './component'

const Pagination = ({ total }) => {
  const history = useHistory()
  const onPageChange = changePage(history)
  const current = Number(queryParams(history.location.search).get('page'))

  return (
    <PaginationComponent
      current={current}
      total={total}
      onChange={onPageChange}
    />
  )
}

Pagination.propTypes = {
  total: PropTypes.number
}

Pagination.defaultProps = {
  total: 0
}

const mapStateToProps = (state) => ({
  total: getDashboardMoviesTotalSelector(state)
})

export { PaginationComponent }
export default connect(mapStateToProps)(Pagination)

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getDashboardMoviesTotalSelector } from 'Store/concepts/movies/selectors'

import Pagination from 'Views/components/Pagination'

const DashboardPagination = ({ total }) => (
  <Pagination total={total} />
)

DashboardPagination.propTypes = {
  total: PropTypes.number
}

DashboardPagination.defaultProps = {
  total: 0
}

const mapStateToProps = (state) => ({
  total: getDashboardMoviesTotalSelector(state)
})

export { DashboardPagination as DashboardPaginationContainer }
export default connect(mapStateToProps)(DashboardPagination)



import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Pagination from 'Views/components/Pagination'
import { getListsTotalSelector } from 'Store/concepts/lists/selectors'

const ListsPagination = ({ total }) => (
  <Pagination total={total} />
)

ListsPagination.propTypes = {
  total: PropTypes.number
}

ListsPagination.defaultProps = {
  total: 0
}

const mapStateToProps = (state) => ({
  total: getListsTotalSelector(state)
})

export { ListsPagination as ListsPaginationContainer }
export default connect(mapStateToProps)(ListsPagination)

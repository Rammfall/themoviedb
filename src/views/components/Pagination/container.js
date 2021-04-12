import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import changePage from 'Utils/router/changePage'
import queryParams from 'Utils/router/queryParams'

import PaginationComponent from './component'

const Pagination = ({ total }) => {
  const history = useHistory()
  const onPageChange = changePage(history)
  const current = Number(queryParams(history.location.search).get('page')) || 1

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
export default Pagination

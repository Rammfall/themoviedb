import React from 'react'
import { useHistory } from 'react-router-dom'

import changePage from 'Utils/router/changePage'

import { paginationDefaultProps, paginationPropTypes } from './types'

import PaginationComponent from './component'

const Pagination = ({ current, total, onChange }) => {
  const history = useHistory()
  const onPageChange = changePage(history, onChange)

  return (
    <PaginationComponent
      current={current}
      total={total}
      onChange={onPageChange}
    />
  )
}

Pagination.propTypes = paginationPropTypes

Pagination.defaultProps = paginationDefaultProps

export default Pagination

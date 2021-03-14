import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row, Pagination as AntPagination } from 'antd'
import { useHistory } from 'react-router-dom'

import { paginationQuantityPerPage } from 'Constants/index'

const Pagination = ({ current, total, onChange }) => {
  const history = useHistory()

  return (
    <Row
      type='flex'
      justify='center'
    >
      <Col>
        <AntPagination
          defaultCurrent={1}
          current={current}
          total={total}
          defaultPageSize={paginationQuantityPerPage}
          className='pagination'
          onChange={(page) => {
            history.push(`?page=${page}`)
            onChange(page)
          }}
        />
      </Col>
    </Row>
  )
}

Pagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

Pagination.defaultProps = {
  current: 1,
  total: 1
}

export default Pagination

import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row, Pagination as AntPagination } from 'antd'

import { paginationQuantityPerPage } from 'Constants/index'

const PaginationComponent = ({ current, total, onChange }) => total > paginationQuantityPerPage && (
  <Row
    type='flex'
    justify='center'
  >
    <Col>
      <AntPagination
        showSizeChanger={false}
        defaultCurrent={1}
        current={current}
        total={total}
        defaultPageSize={paginationQuantityPerPage}
        className='pagination'
        onChange={onChange}
      />
    </Col>
  </Row>
)


PaginationComponent.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

PaginationComponent.defaultProps = {
  current: 1,
  total: 1
}

export default PaginationComponent

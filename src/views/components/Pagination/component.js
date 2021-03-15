import React from 'react'
import { Col, Row, Pagination as AntPagination } from 'antd'

import { paginationQuantityPerPage } from 'Constants/index'

import { paginationDefaultProps, paginationPropTypes } from './types'

const PaginationComponent = ({ current, total, onChange }) => (
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

PaginationComponent.propTypes = paginationPropTypes

PaginationComponent.defaultProps = paginationDefaultProps

export default PaginationComponent

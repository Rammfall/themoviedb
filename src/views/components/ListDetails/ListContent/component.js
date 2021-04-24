import React from 'react'
import { Col, Row, Typography } from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

import RenderCtrl from 'Views/components/RenderCtrl'
import Loader from 'Views/components/Loader'
import EmptyState from 'Views/components/EmptyState'
import ListMovies from './ListMovies'

const ListContentComponent = ({
  title,
  isEmpty,
  isEmptyTitle
}) => (
  <>
    <Row>
      <Col
        offset={2}
        span={20}
      >
        <div className='top-margin'>
          <Typography.Title>
            {title}
            {' '}
            <MinusCircleOutlined />
          </Typography.Title>
        </div>
      </Col>
    </Row>
    <RenderCtrl
      isEmpty={isEmpty}
      isLoading={false}
      renderLoading={<Loader />}
      renderEmpty={<EmptyState title={isEmptyTitle} />}
      renderList={<ListMovies />}
    />
  </>
)

ListContentComponent.propTypes = {
  title: PropTypes.string.isRequired,
  isEmptyTitle: PropTypes.string.isRequired,
  isEmpty: PropTypes.bool.isRequired
}

export default ListContentComponent

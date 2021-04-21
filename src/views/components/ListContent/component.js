import React from 'react'
import { Col, Row, Typography } from 'antd'
import PropTypes from 'prop-types'

import PrivateLayout from 'Views/layouts/PrivateLayout'
import RenderCtrl from 'Views/components/RenderCtrl'
import Loader from 'Views/components/Loader'
import EmptyState from 'Views/components/EmptyState'

const ListContent = ({
  isEmpty,
  isLoading,
  title,
  titleEmptyState,
  list
}) => (
  <PrivateLayout>
    <Row>
      <Col
        offset={2}
        span={20}
      >
        <div className="top-margin">
          <Typography.Title>{title}</Typography.Title>
        </div>
      </Col>
    </Row>
    <RenderCtrl
      isEmpty={isEmpty}
      isLoading={isLoading}
      renderList={list}
      renderEmpty={<EmptyState title={titleEmptyState} />}
      renderLoading={<Loader />}
    />
  </PrivateLayout>
)

ListContent.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  titleEmptyState: PropTypes.string.isRequired,
  list: PropTypes.element.isRequired
}

ListContent.defaultProps = {
  isLoading: true
}

export default ListContent

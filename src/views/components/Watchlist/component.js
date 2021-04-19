import React from 'react'
import { Col, Row, Typography } from 'antd'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import PrivateLayout from 'Views/layouts/PrivateLayout'
import RenderCtrl from 'Views/components/RenderCtrl'
import Loader from 'Views/components/Loader'
import EmptyState from 'Views/components/EmptyState'
import WatchlistMovies from 'Views/components/Watchlist/WatchlistMovies'

const Watchlist = ({
  isEmpty,
  isLoading
}) => {
  const { formatMessage } = useIntl()

  return (
    <PrivateLayout>
      <Row>
        <Col
          offset={2}
          span={20}
        >
          <div className="top-margin">
            <Typography.Title>{formatMessage({ id: 'watchlist.title' })}</Typography.Title>
          </div>
        </Col>
      </Row>
      <RenderCtrl
        isEmpty={isEmpty}
        isLoading={isLoading}
        renderList={<WatchlistMovies />}
        renderEmpty={<EmptyState title={formatMessage({ id: 'movies.empty' })} />}
        renderLoading={<Loader />}
      />
    </PrivateLayout>
  )
}

Watchlist.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool
}

Watchlist.defaultProps = {
  isLoading: true
}

export default Watchlist

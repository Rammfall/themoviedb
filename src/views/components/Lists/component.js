import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useIntl } from 'react-intl'

import PrivateLayout from 'Views/layouts/PrivateLayout'
import RenderCtrl from 'Views/components/RenderCtrl'
import Loader from 'Views/components/Loader'
import EmptyState from 'Views/components/EmptyState'
import ListsLists from './ListsLists'
import CreateListModal from './CreateListModal'

const Lists = ({
  isEmpty,
  isLoading,
  createModalVisibility,
  toggleCreateModal
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
            <Typography.Title>
              {formatMessage({ id: 'lists.title' })}
              <PlusCircleOutlined onClick={toggleCreateModal} />
            </Typography.Title>
          </div>
        </Col>
      </Row>
      <RenderCtrl
        isEmpty={isEmpty}
        isLoading={isLoading}
        renderList={<ListsLists />}
        renderLoading={<Loader />}
        renderEmpty={<EmptyState title={formatMessage({ id: 'lists.empty' })} />}
      />
       <CreateListModal
         isVisible={createModalVisibility}
         toggleHandler={toggleCreateModal}
       />
    </PrivateLayout>
  )
}

Lists.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  createModalVisibility: PropTypes.bool.isRequired,
  toggleCreateModal: PropTypes.func.isRequired
}

Lists.defaultProps = {
  isLoading: false
}

export default Lists

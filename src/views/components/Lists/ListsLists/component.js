import React from 'react'
import { Col, Row } from 'antd'
import PropTypes from 'prop-types'

import ListCard from 'Views/components/Lists/ListsLists/ListCard'
import Pagination from 'Views/components/Pagination'
import onDeleteHandler from 'Utils/components/ListsLists/onDelete'

const ListsListsComponent = ({ lists, total, onDelete }) => (
  <>
    <Row
      type='flex'
    >
      <Col
        span={20}
        offset={2}
      >
        <Row>
          {lists.map(({name, description, id}) => (
            <ListCard
              key={id}
              name={name}
              description={description}
              onDelete={onDeleteHandler(onDelete, id)}
            />)
          )}
        </Row>
      </Col>
    </Row>
    <Row
      type='flex'
      justify='center'
    >
      <Col>
        <Pagination total={total} />
      </Col>
    </Row>
  </>
)

ListsListsComponent.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
  }).isRequired).isRequired,
  total: PropTypes.number,
  onDelete: PropTypes.func.isRequired
}

ListsListsComponent.defaultProps = {
  total: null
}

export default ListsListsComponent

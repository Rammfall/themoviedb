import React from 'react'
import { Col, Row } from 'antd'
import PropTypes from 'prop-types'

import ListCard from 'Views/components/Lists/ListsLists/ListCard'
import ListsPagination from './ListsPagination'

const ListsLists = ({ lists }) => (
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
        <ListsPagination />
      </Col>
    </Row>
  </>
)

ListsLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
  }).isRequired).isRequired
}

export default ListsLists

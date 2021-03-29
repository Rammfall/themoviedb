import React from 'react'
import { Col, Input, Row } from 'antd'

const SearchForm = () => (
  <Row
    justify="center"
  >
    <Col
      className="gutter-row"
      xs={{ span: 20 }}
      sm={{ span: 20 }}
      md={{ span: 14 }}
      lg={{ span: 12 }}
      xl={{ span: 10 }}
    >
      <Input.Search
        placeholder="Enter movie name"
        size="large"
        enterButton="Search"
        className="top-margin"
      />
    </Col>
  </Row>
)

export default SearchForm

import React from 'react'
import { Col, Input, Row } from 'antd'

const SearchForm = () => (
  <Row
    justify="center"
    gutter={{
      xs: 8,
      sm: 16,
      md: 24,
      lg: 22
    }}
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
        allowClear
      />
    </Col>
  </Row>
)

export default SearchForm

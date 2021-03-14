import React from 'react'
import { Col, Row, Spin } from 'antd'

const MoviesLoader = () => (
  <div className="top-margin">
    <Row
      type="flex"
      justify="center"
    >
      <Col>
        <Spin />
      </Col>
    </Row>
  </div>
)

export default MoviesLoader

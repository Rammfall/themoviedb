import React from 'react'
import PropTypes from 'prop-types'
import { Col, Layout, Row } from 'antd'

const GuestLayout = ({ children }) => (
  <div className="center">
    <Layout>
      <Layout.Content>
        <Row
          type="flex"
          justify="center"
        >
          <Col>{children}</Col>
        </Row>
      </Layout.Content>
    </Layout>
  </div>
)

GuestLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default GuestLayout

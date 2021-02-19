import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import Header from 'Views/components/stubs/Header'

const PrivateLayout = ({ children }) => (
  <Layout>
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
)

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateLayout

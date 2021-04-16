import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import Header from 'Views/layouts/Header'

const PrivateLayout = ({ children }) => (
  <Layout>
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
)

PrivateLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]))
  ]).isRequired
}

export default PrivateLayout

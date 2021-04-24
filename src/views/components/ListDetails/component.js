import React from 'react'
import PropTypes from 'prop-types'

import PrivateLayout from 'Views/layouts/PrivateLayout'
import Loader from 'Views/components/Loader'
import ListContent from './ListContent'

const ListDetails = ({ isBlank }) => (
  <PrivateLayout>
    {isBlank ? (<Loader />) : <ListContent />}
  </PrivateLayout>
)

ListDetails.propTypes = {
  isBlank: PropTypes.bool
}

ListDetails.defaultProps = {
  isBlank: true
}

export default ListDetails

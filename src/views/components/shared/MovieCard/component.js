import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

import { imagePath } from 'Constants'

const MovieCard = ({ title, description, image, actions }) => (
  <Card
    hoverable
    cover={(
      <img
        alt='example'
        src={`${imagePath}${image}`}
      />
    )}
    className='top-margin'
    actions={actions}
  >
    <Card.Meta
      title={title}
      description={description}
    />
  </Card>
)

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.element)
}

MovieCard.defaultProps = {
  image: '',
  actions: null
}

export default MovieCard

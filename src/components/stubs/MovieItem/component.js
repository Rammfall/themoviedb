import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

const Movie = ({ actions }) => (
  <Card
    hoverable
    cover={(
      <img
        alt="example"
        src="http://t2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9"
      />
)}
    className="top-margin"
    actions={actions}
  >
    <Card.Meta
      title="Avengers: Endgame"
      description="Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."
    />
  </Card>
)

Movie.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node)
}

Movie.defaultProps = {
  actions: []
}

export default Movie

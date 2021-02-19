import PropTypes from 'prop-types'

export const propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  exact: PropTypes.bool
}

export const defaultProps = {
  exact: false
}

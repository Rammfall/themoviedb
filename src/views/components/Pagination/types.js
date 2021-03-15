import PropTypes from 'prop-types'

export const paginationPropTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export const paginationDefaultProps = {
  current: 1,
  total: 1
}

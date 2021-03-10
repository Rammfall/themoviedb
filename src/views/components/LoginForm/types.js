import PropTypes from 'prop-types'

export const propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  status: PropTypes.string
}

export const defaultProps = {
  status: undefined
}

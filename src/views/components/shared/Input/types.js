import PropTypes from 'prop-types'

export const propTypes = {
  placeholder: PropTypes.string,
  validateStatus: PropTypes.oneOf([
    'success',
    'warning',
    'error',
    'validating',
    ''
  ]),
  validationMessage: PropTypes.string,
  type: PropTypes.oneOf(['password', 'text']),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string,
  prefix: PropTypes.node
}

export const defaultProps = {
  placeholder: undefined,
  validateStatus: undefined,
  validationMessage: undefined,
  type: 'text',
  value: '',
  name: '',
  prefix: undefined
}

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
  type: PropTypes.oneOf(['password', 'text', 'search']),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  iconRender: PropTypes.func,
  name: PropTypes.string,
  prefix: PropTypes.node,
  enterButton: PropTypes.string,
  size: PropTypes.oneOf(['large']),
  className: PropTypes.string,
  onSearch: PropTypes.func,
  loading: PropTypes.bool
}

export const defaultProps = {
  placeholder: undefined,
  validateStatus: undefined,
  validationMessage: undefined,
  type: 'text',
  value: '',
  name: '',
  prefix: undefined,
  iconRender: undefined,
  enterButton: undefined,
  size: undefined,
  className: '',
  onSearch: undefined,
  loading: undefined
}

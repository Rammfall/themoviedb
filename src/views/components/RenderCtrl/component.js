import PropTypes from 'prop-types'

const RenderCtrl = ({
  isLoading,
  isEmpty,
  renderLoading,
  renderEmpty,
  renderList
}) => {
  if (isLoading) {
    return renderLoading
  }
  if (!isLoading && isEmpty) {
    return renderEmpty
  }
  return renderList
}

RenderCtrl.propTypes = {
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool.isRequired,
  renderLoading: PropTypes.element.isRequired,
  renderEmpty: PropTypes.element.isRequired,
  renderList: PropTypes.element.isRequired
}

RenderCtrl.defaultProps = {
  isLoading: null
}

export default RenderCtrl

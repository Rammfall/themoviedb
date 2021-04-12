import pushParam from 'Utils/router/pushParam'

/**
 * @param {Object} history - history object from react-router
 * @param {Object} history.location
 * @param {function} history.push - method react router for change URL
 * @param {string} history.location.pathname - route of current URL
 * @param {string} history.location.search - query params
 * @returns {(function(*=): void)|*}
 */
function changePage(history) {
  return (page) => {
    pushParam(history, ['page', page])
  }
}

export default changePage

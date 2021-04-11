import queryParams from 'Utils/router/queryParams'

/**
 * @param {Object} history - history object from react-router
 * @param {Object} history.location
 * @param {function} history.push - method react router for change URL
 * @param {string} history.location.pathname - route of current URL
 * @param {string} history.location.search - query params
 * @returns {(function(*=): void)|*}
 */
function changePage(history) {
  const { location: { pathname, search } } = history

  return (page) => {
    const searchQuery = queryParams(search)

    searchQuery.set('page', page)
    history.push({
      pathname,
      search: `?${searchQuery.toString()}`
    })
  }
}

export default changePage

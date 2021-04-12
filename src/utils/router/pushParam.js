import queryParams from 'Utils/router/queryParams'

/**
 * @param {Object} history - history object from react-router
 * @param {Object} history.location
 * @param {function} history.push - method react router for change URL
 * @param {string} history.location.pathname - route of current URL
 * @param {string} history.location.search - query params
 * @param {Array} param
 */
const pushParam = (history, param) => {
  const { location: { pathname, search }, push } = history
  const [key, value] = param

  const query = queryParams(search)
  query.set(key, value)

  push({
    pathname,
    search: `?${query.toString()}`
  })
}

export default pushParam

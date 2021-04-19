const apiRoutes = {
  account: '/account',
  lists: {
    get: accountId => `/account/${accountId}/lists`,
    add: '/list',
    delete: id => `/list/${id}`
  },
  movies: {
    trending: '/trending/movie/week',
    search: '/search/movie',
    watchlist: {
      get: (accountId) => `/account/${accountId}/watchlist/movies`,
      toggle: (accountId) => `/account/${accountId}/watchlist`
    }
  },
  session: {
    requestToken: '/authentication/token/new',
    validateRequestToken: 'authentication/token/validate_with_login',
    newSession: '/authentication/session/new',
    deleteSessionEndpoint: '/authentication/session'
  }
}

export default apiRoutes

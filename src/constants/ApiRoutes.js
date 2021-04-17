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
    },
    favorites: {
      get: (accountId) => `/account/${accountId}/favorite/movies`,
      toggle: (accountId) => `/account/${accountId}/favorite`
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

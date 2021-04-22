const apiRoutes = {
  account: '/account',
  lists: {
    get: accountId => `/account/${accountId}/lists`,
    add: '/list',
    delete: id => `/list/${id}`
  },
  dashboard: {
    trending: '/trending/movie/week',
    search: '/search/movie'
  },
  movies: {
    watchlist: {
      get: (accountId) => `/account/${accountId}/watchlist/movies`,
      toggle: (accountId) => `/account/${accountId}/watchlist`
    },
    favorites: {
      get: (accountId) => `/account/${accountId}/favorite/movies`,
      toggle: (accountId) => `/account/${accountId}/favorite`
    },
    list: {
      get: (listId) => `/list/${listId}`,
      remove: (listId) => `/list/${listId}/remove_item`
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

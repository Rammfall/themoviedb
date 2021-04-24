import sessionOperations from 'Store/concepts/session/operations'
import accountOperations from 'Store/concepts/account/operations'
import dashboardOperations from 'Store/concepts/dashboard/operations'
import watchlistOperations from 'Store/concepts/watchlist/operations'
import favoritesOperations from 'Store/concepts/favorites/operations'
import listsOperations from 'Store/concepts/lists/operations'
import listDetailsOperations from 'Store/concepts/listDetails/operations'

export default [
  ...sessionOperations,
  ...accountOperations,
  ...dashboardOperations,
  ...watchlistOperations,
  ...favoritesOperations,
  ...listsOperations,
  ...listDetailsOperations
]

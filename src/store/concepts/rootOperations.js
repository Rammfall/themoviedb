import sessionOperations from 'Store/concepts/session/operations'
import accountOperations from 'Store/concepts/account/operations'
import moviesOperations from 'Store/concepts/movies/operations'
import listsOperations from 'Store/concepts/lists/operations'

export default [...sessionOperations, ...accountOperations, ...moviesOperations, ...listsOperations]

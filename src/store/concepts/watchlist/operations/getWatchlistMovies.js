import { createLogic } from 'redux-logic'

import { dataApiRequest } from 'Store/concepts/data/actions'
import { WATCHLIST } from 'Constants/concepts'

import { GET_WATCHLIST_MOVIES } from '../types'
import { loadWatchlistMovies } from '../actions'

const getWatchlistMoviesOperation = createLogic({
  type: GET_WATCHLIST_MOVIES,
  latest: true,
  async process(
    _,
    dispatch,
    done
  )
  {
    dispatch(dataApiRequest({ endpoint: WATCHLIST }))
    dispatch(loadWatchlistMovies())

    done()
  }
})

export default getWatchlistMoviesOperation

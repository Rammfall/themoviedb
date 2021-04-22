import { createLogic } from 'redux-logic'

import { userIdSelector } from 'Store/concepts/account/selectors'
import storage from 'Utils/storage'
import apiRoutes from 'Constants/apiRoutes'
import { MOVIES } from 'Constants/concepts'

import { TOGGLE_WATCHLIST_MOVIE } from '../types'
import { loadWatchlistMovies } from '../actions'

const toggleWatchlistMovieOperation = createLogic({
  type: TOGGLE_WATCHLIST_MOVIE,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        id,
        watchlist
      },
      getState
    },
    dispatch,
    done
  ) {
    const userId = userIdSelector(getState())
    await httpClient.post(apiRoutes.movies.watchlist.toggle(userId), {
      media_id: id,
      media_type: MOVIES,
      watchlist
    }, {
      params: {
        session_id: storage.session.get()
      }
    })

    dispatch(loadWatchlistMovies())
    done()
  }
})

export default toggleWatchlistMovieOperation

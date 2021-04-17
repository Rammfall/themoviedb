import { createLogic } from 'redux-logic'

import { userIdSelector } from 'Store/concepts/account/selectors'
import storage from 'Utils/storage'

import { TOGGLE_WATCHLIST_MOVIE } from '../types'
import { movieConstant, toggleWatchlistMoviesEndpoint } from '../endpoints'
import { getWatchlistMovies } from '../actions'

const toggleWatchlistMovieOperation = createLogic({
  type: TOGGLE_WATCHLIST_MOVIE,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        id, watchlist
      },
      getState
    },
    dispatch,
    done
  ) {
    const userId = userIdSelector(getState())
    await httpClient.post(toggleWatchlistMoviesEndpoint(userId), {
      media_id: id,
      media_type: movieConstant,
      watchlist
    }, {
      params: {
        session_id: storage.session.get()
      }
    })

    dispatch(getWatchlistMovies(true))
    done()
  }
})

export default toggleWatchlistMovieOperation
